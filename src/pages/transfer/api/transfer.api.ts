import Axios from "axios";
import { Transfer, Account } from "./transfer.api-model";


const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const getAccountList = (): Promise<Account[]> => {
    return Axios.get<Account[]>(urlAccount)
        .then(({ data }) => data)
        .catch((error) => {
            console.error("Error fetching account list:", error);
            throw error;
        })
}

const urlTransfer = `${import.meta.env.VITE_BASE_API_URL}/transfer`;

export const saveTransfer = (transfer: Transfer): Promise<Boolean> =>
    Axios.post<Boolean>(urlTransfer, transfer)
        .then(({ data }) => data)
        .catch((error) => {
            console.error("Error posting transfer:", error);
            throw error;
        });