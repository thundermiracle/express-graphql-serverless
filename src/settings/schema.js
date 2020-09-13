import { GraphQLSchema, GraphQLObjectType, GraphQLString } from "graphql";

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "HelloWorld",
    fields: () => ({
      message: {
        type: GraphQLString,
        resolve: () => "Hello World!!!",
      }
    })
  })
});
