import Axios from "axios";
import { Movement } from "./movement.api-model";

export const urlMovements = `${import.meta.env.VITE_BASE_API_URL}/movements`;

export const getMovementsById = (accountId: string): Promise<Movement[]> =>
  Axios.get<Movement[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data
  );

export const getAccountById = (id: string) =>
  Axios.get(`${import.meta.env.VITE_BASE_API_URL}/account/${id}`).then(
    ({ data }) => data
  );
