type HTTPS_METHODS = "GET" | "POST" | "PUT" | "DELETE";
type FetchParams = { url: string; method: HTTPS_METHODS };
export default async function fetchData<T>({
  url,
  method = "GET",
}: FetchParams): Promise<T | null> {
  try {
    const response = await fetch(url, { method });
    if (!response.ok) {
      throw new Error("improper response: " + url);
    }
    return (await response.json()) as T;
  } catch (err) {
    console.log("Error", err);
    // retryFetch();
    return null;
  }
}

function retryFetch(count = 3) {
  if (count === 0) {
    throw new Error("Issue with retring, Looks like server error");
  }
}

export const demo = function () {
  console.log("demo obj");
};
