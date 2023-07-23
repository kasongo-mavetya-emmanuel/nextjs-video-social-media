import axios from "axios";
import wrapPromise from "../api/wrapPromise";

export function fetchData(url: string, options: object) {
  const promise = fetch(url, options)
    .then((res) => res.json())
    .then((res) => {
      console.log("ccccccccccccc", res);
      return res.data;
    });

  return wrapPromise(promise);
}

export function axiosData(url: string) {
  const promise = axios(url).then((res) => res);

  return wrapPromise(promise);
}
