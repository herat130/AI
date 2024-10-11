import { useEffect, useState } from "react";
// @ts-expect-error as types is not defined in data-layer package
import { fetchData } from "data-layer";

type ParamsData = {
  url: string;
  method: "GET" | "POST" | "PUT" | "DELETE";
  isRequired?: boolean;
};
export function useFetch<T>({ url, method = "GET" }: ParamsData) {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState("");
  const [data, setData] = useState<T | null>(null);

  useEffect(() => {
    const fetchRecord = async () => {
      try {
        setIsLoading(true);
        const response = await fetchData<T>({
          url,
          method,
        });
        setData(response);
        setIsLoading(false);
      } catch (error: unknown) {
        setIsError(true);
        setError(error as string);
        setIsLoading(false);
      }
    };
    fetchRecord();
  }, [url, method]);

  return { data, isError, error, isLoading };
}
