import { token } from "./constants";
import { api } from "./helper";

const commonHeaders = {
  Authorization: `Bearer ${token}`,
};

class Request {
  private api: (uri: string) => string = api;

  get(uri: string, headers = {}) {
    return httpGet(this.api(uri), {
      ...commonHeaders,
      ...headers,
    });
  }

  delete(uri: string, headers = {}) {
    return httpDelete(this.api(uri), {
      ...commonHeaders,
      ...headers,
    });
  }

  put(uri: string, headers = {}) {
    return httpPut(this.api(uri), {
      ...commonHeaders,
      ...headers,
    });
  }

  post(uri: string, headers = {}) {
    return httpPost(this.api(uri), {
      ...commonHeaders,
      ...headers,
    });
  }
}

const request = new Request();

export default request;
