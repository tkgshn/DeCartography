// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
const Etherscan = require("node-etherscan-api");

type ResBody = {
  balance: string;
  unit: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResBody>
) {
  const etherscan = new Etherscan(process.env.ETHERSCAN_API_KEY);
  const unit = "eth";
  const balance = await etherscan.getAccountBalance(req.query.address, {
    unit,
  });
  res.status(200).json({ balance, unit });
}
