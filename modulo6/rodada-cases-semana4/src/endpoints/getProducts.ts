import { Request, Response } from "express";


export async function getProducts(req: Request, res: Response): Promise<void> {
  try {
  
    );

    res.status(200).send("");
  } catch (error) {
    res.status(400).send(error.message);
  }
}

