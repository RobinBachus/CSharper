export enum Modules {
  Preflight,
  Calculations,
  BooleanOperations,
  RandomGenerator,
  Converter,
}

export type RequestData = {
  Module: Modules;
  SubModule: number;
  Parameters: string[];
};

/**
 * Makes a POST HTTP request to the webserver (localhost:8000)
 *
 * @param data The body of the POST request which must include
 * the module (view), submodule (component) and the request parameters
 *
 * @remarks The submodule uses an number to represent itself
 *
 * @returns The servers response to the request
 */
export async function makePOSTRequest(data: RequestData) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  console.log(data.SubModule + " request sent, awaiting response...");
  return await fetch("http://localhost:8000", options);
}
