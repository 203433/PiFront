import { useEffect, useState } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setisLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(url);

  useEffect(() => {
    const getData = async (url) => {
      try {
        let res = await fetch(url);
        console.log(res);
        if (!res.ok) {
          throw {
            err: true,
            status: res.status,
            statusText: !res.statusText ? "Ocurrió un error" : res.statusText,
          };
        }

        let data = await res.json();
        console.log(data);
        setisLoading(false);
        setData(data);
        setError({ err: false });
      } catch (err) {
        setisLoading(true);
        setError(err);
        console.log(err);
      }
    };
    getData(url);
  }, [url]);

  return { data, isLoading };
};