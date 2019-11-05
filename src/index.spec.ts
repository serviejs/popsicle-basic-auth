import { toFetch } from "popsicle";
import { compose } from "throwback";
import { Request, Response } from "servie/dist/node";
import { auth } from "./index";

describe("popsicle basic auth", () => {
  const fetch = toFetch(
    compose<Request, Response>([
      auth("blakeembrey", "hunter2"),
      req => new Response(req.headers.get("authorization"))
    ]),
    Request
  );

  it("should set authorization header", async () => {
    const res = await fetch("http://example.com");

    expect(await res.text()).toEqual("Basic Ymxha2VlbWJyZXk6aHVudGVyMg==");
  });
});
