import { Authentication } from '../types'
import * as jwt from "jsonwebtoken";

export const getData = (token: string): Authentication => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};