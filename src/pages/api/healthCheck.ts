import { NextApiRequest, NextApiResponse } from 'next';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    return res.status(200).json({
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now(),
    });
  }

  return res.status(405).json({
    message: 'Not Allowed',
  });
}
