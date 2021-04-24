import * as functions from "firebase-functions";
import * as requestIp from "request-ip";
import express from "express";

/* eslint-disable @typescript-eslint/no-var-requires */
const _basicAuth = require("basic-auth-connect");
const secret = require("../secret.json");

const publicDir = `${__dirname}/../public_real/`;

const app1 = express();
const app2 = express();

app1.all("/*", (req: express.Request, res: express.Response,
    next: express.NextFunction) => {
  const clientIp = requestIp.getClientIp(req);
  const isAllowed = clientIp && (secret.allowedIps.indexOf(clientIp) !== -1);
  if (!isAllowed) {
    res.status(400).send("You cannot access here. Please check your IP.");
  } else {
    next();
  }
});

app2.all("/*", _basicAuth(function(username:string, password:string) {
  return username === secret.username && password === secret.password;
}));

[app1, app2].forEach((app) => {
  app.use(express.static(publicDir));
});

export const ipAuth = functions.https.onRequest(app1);
export const basicAuth = functions.https.onRequest(app2);
