import type { NextApiRequest, NextApiResponse } from "next";
const Etherscan = require("node-etherscan-api"); // TODO: import type definition file.

type ResBody = {
  txs: any[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResBody>
) {
  const etherscan = new Etherscan(process.env.ETHERSCAN_API_KEY);
  const txs = await etherscan
    .getTransactions(req.query.address)
    .then((txList: any[]) => {
      return txList.map((txItem: any) => txItem.hash);
    });
  res.status(200).json({ txs });
}
