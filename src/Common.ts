export enum Modules {
  Preflight,
  Calculations,
  BooleanOperations,
  RandomGenerator,
  Converter,
}

/**
 * The object type used by the {@link makePOSTRequest()} function to format POST requests
 */
export type RequestData = {
  Module: Modules;
  Parameters: string[];
};

/**
 * Makes a POST HTTP request to the webserver (localhost:8000)
 *
 * @param data The body of the POST request which must include the module (view) and the request parameters
 *
 * @returns The response from the server
 */
export async function makePOSTRequest(data: RequestData) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  console.log(data.Module + " request sent, awaiting response...");
  return await fetch("http://localhost:8000", options);
}
