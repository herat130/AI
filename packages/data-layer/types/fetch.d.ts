type HTTPS_METHODS = "GET" | "POST" | "PUT" | "DELETE";
type FetchParams = {
  url: string;
  method: HTTPS_METHODS;
};
export default function fetchData<T>({
  url,
  method,
}: FetchParams): Promise<T | null>;
export declare const demo: () => void;
export {};
