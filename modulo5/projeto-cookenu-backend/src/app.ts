import express from "express";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import cors from 'cors'

dotenv.config();

export const app = express();

app.use(express.json());
app.use(cors());

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});


