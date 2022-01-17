import { NextApiRequest, NextApiResponse } from 'next';
import proxyHandler from 'lib/server/proxy-request-handle';
import { getToken } from 'next-auth/jwt';
import logger from 'lib/server/logger';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // https://cheatsheetseries.owasp.org/cheatsheets/Cross-Site_Request_Forgery_Prevention_Cheat_Sheet.html#identifying-source-origin-via-originreferer-header
  const sourceOrigin = req.headers['origin']
    ? `${req.headers['origin']}/`
    : req.headers['referer'];
  const targetOrigin = `${process.env.NEXTAUTH_URL}/`;

  if (!sourceOrigin || sourceOrigin.indexOf(targetOrigin) === -1) {
    logger.warn(
      `[proxy] request came from unknown origin "${sourceOrigin}", skipping...`
    );

    return res.status(400).send({
      status: 400,
      message: 'Bad request',
      timestamp: new Date().toISOString(),
    });
  }

  const jwtPayload = await getToken({
    req,
    secret: process.env.NEXTAUTH_SECRET,
  });

  if (!jwtPayload) {
    return res.status(401).send({
      status: 401,
      message: 'Unauthorized',
      timestamp: new Date().toISOString(),
    });
  }

  // Delete data that's not needed in backend
  delete req.headers['cookie'];
  delete req.query['proxy'];

  if (jwtPayload) {
    req.headers[
      'authorization'
    ] = `${jwtPayload.tokenType} ${jwtPayload.token}`;
  }

  return proxyHandler(req, res);
}

export const config = {
  api: {
    // - https://nextjs.org/docs/api-routes/api-middlewares#custom-config
    externalResolver: true,
    bodyParser: false, // not to use url encoded form like streaming POST request
  },
};
