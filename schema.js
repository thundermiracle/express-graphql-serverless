const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "HelloWorld",
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => "Hello World!",
      }
    })
  })
});
