import { ClientRequest, IncomingMessage, ServerResponse } from 'http';
import { createProxyMiddleware, Options } from 'http-proxy-middleware';
import { NextApiHandler } from 'next';
import logger from './logger';

const proxyConfig: Options = {
  changeOrigin: true,
  pathRewrite: { '/api/proxy': '' },
  target: process.env.API_BASE_URL,
  onProxyReq(
    proxyReq: ClientRequest,
    req: IncomingMessage,
    res: ServerResponse
  ) {
    logger.info(
      `[HPM][request] ${proxyReq.method} /api/proxy${req.url} ~> ${proxyReq.protocol}//${proxyReq.host}${proxyReq.path}`
    );
  },
  onProxyRes(
    proxyRes: IncomingMessage,
    req: IncomingMessage,
    res: ServerResponse
  ) {
    // @ts-ignore
    const { method, protocol, host, path } = proxyRes.req;
    logger.info(
      `[HPM][response] ${method} ${proxyRes.statusCode} /api/proxy${req.url} ~> ${protocol}//${host}${path}`
    );
  },
  logProvider: () => logger,
  proxyTimeout: 20000,
};

// @ts-ignore
const handler: NextApiHandler = createProxyMiddleware(proxyConfig);

export default handler;
