// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import fs from 'fs';
type Data = {
  status: string;
  data?: any;
  error?: string;
}
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const payload = req.body;

  const data = fs.readFileSync('transactions.json')
  const parseData = JSON.parse(data.toString());


  if (req.method == 'GET') {
    return res.status(200).send({ status: 'success', data: parseData });
  }

  let allData = [payload, ...parseData]



  fs.writeFileSync('transactions.json', JSON.stringify(allData));
  res.status(200).send({ status: 'success', error: 'Saved Successfully' });
}

