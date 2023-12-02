// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  status: string;
  data?: any;
  error?: string;
}
const users = [
  {
    customer_id: 1,
    customer_name: 'customer 1',
    customer_address: 'Sector 40, Gurugram, Haryana, 122001',
    customer_mobile: '9193989398',
  },
  {
    customer_id: 2,
    customer_name: 'customer 2',
    customer_address: 'Sector 40, Gurugram, Haryana, 122001',
    customer_mobile: '9293989398',
  },
  {
    customer_id: 3,
    customer_name: 'customer 1',
    customer_address: 'Sector 40, Gurugram, Haryana, 122001',
    customer_mobile: '9393989398',
  },
  {
    customer_id: 4,
    customer_name: 'customer 1',
    customer_address: 'Sector 40, Gurugram, Haryana, 122001',
    customer_mobile: '9493989398',
  },
  {
    customer_id: 5,
    customer_name: 'customer 1',
    customer_address: 'Sector 40, Gurugram, Haryana, 122001',
    customer_mobile: '9593989398',
  },
  {
    customer_id: 5,
    customer_name: 'customer 1',
    customer_address: 'Sector 40, Gurugram, Haryana, 122001',
    customer_mobile: '963989398',
  },
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const customer_id = Number(req.query.customer_id);
  const userData = users.find(u => u.customer_id === customer_id);
  if (userData) {
    res.status(200).send({ status: 'success', data: userData });
  }
  else {
    res.status(404).send({ status: 'error', error: 'User not found' });
  }
}
