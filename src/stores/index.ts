import axios from "axios";
import { atom } from "jotai";

export const searchValueAtom = atom<string>("korea");
export const pageAtom = atom<number>(1);
export const perPage = atom<number>(30);

export const fetchApi = async (searchValue: string, page: number) => {
  const API_KEY = "uPDn8fgH17e-H4EaFNO92rQiCz5OZeQIFSbYHYEMaVM";
  const BASE_URL = "https://api.unsplash.com/search/photos";

  try {
    const res = await axios.get(`${BASE_URL}/?query=${searchValue}&page=${page}&per_page=30&client_id=${API_KEY}`);
    return res;
  } catch (e) {
    console.log("API 호출 중 에러 발생", e);
    throw e;
  }
};
