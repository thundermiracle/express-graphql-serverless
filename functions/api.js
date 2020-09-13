const express = require("express");
const bodyParser = require("body-parser");
const { graphqlHTTP } = require("express-graphql");
const serverless = require("serverless-http");

const schema = require("../schema");

const app = express();

app.use(bodyParser.json());
app.use("/", graphqlHTTP({
  schema,
  graphiql: true,
}));

exports.handler = serverless(app);
