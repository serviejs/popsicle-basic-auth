import { CommonRequest, CommonResponse } from "servie/dist/common";
import { encode } from "universal-base64";

export function auth(username: string, password: string) {
  const authorization = `Basic ${encode(`${username}:${password}`)}`;

  return function<T extends CommonRequest, U extends CommonResponse>(
    req: T,
    next: () => Promise<U>
  ): Promise<U> {
    req.headers.set("Authorization", authorization);

    return next();
  };
}
