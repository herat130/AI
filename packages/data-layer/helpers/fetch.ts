export default async function fetchData({ url, method }) {
  try {
    debugger;
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("improper response: " + url);
    }
    console.log("HI!!!!");
    return await response.json();
  } catch (err) {
    console.log("Error", err);
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
