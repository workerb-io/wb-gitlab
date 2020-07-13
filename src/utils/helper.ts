/* eslint-disable default-case */
import { uri } from "./constants";

export function api(endpoint: string): string {
  return `${uri}${endpoint}`;
}

export function decodeApiResponse(
  apiResponse: any
): { response: any; status: number } {
  const result = apiResponse;

  if (!result.response) {
    return {
      response: {},
      status: result.status,
    };
  }

  return {
    response: JSON.parse(result.response),
    status: result.status,
  };
}

export const handleErrors = (status: number, response: any) => {
  switch (status) {
    case 401:
    case 500:
    case 403:
    case 404:
    case 400:
      notify(response, "error", 3000);
  }
};
