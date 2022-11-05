/**
 * Makes a POST HTTP request to the webserver (localhost:8000)
 *
 * @param data The body of the POST request which must include a request type
 *
 * @returns The servers response to the request
 */
export async function makePOSTRequest(data: { type: string; [args: string]: any }) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  console.log(data.type + " request sent, awaiting response...");
  return await fetch("http://localhost:8000", options);
}
