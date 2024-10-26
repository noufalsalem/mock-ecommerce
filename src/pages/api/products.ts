import type { NextApiRequest, NextApiResponse } from "next";
import productsData from "@/data/products.json"; //Mock data generated from Mockaroo

const handler = (req: NextApiRequest, res: NextApiResponse) => {
  res.status(200).json(productsData);
};

export default handler;
