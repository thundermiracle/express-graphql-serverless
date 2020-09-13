import express from "express";
import bodyParser from "body-parser";
import { graphqlHTTP } from "express-graphql";
import serverless from "serverless-http";

import schema from "./settings/schema";

const app = express();

app.use(bodyParser.json());
app.use("/", graphqlHTTP({
  schema,
  graphiql: true,
}));

export const handler = serverless(app);
