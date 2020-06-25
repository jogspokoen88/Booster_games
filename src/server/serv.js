const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');
const port = "https://booster.games/api/"

const query = gql`
    type CategoryNode implements Node{
        id: ID!
        name: String!
    }
`

const resolvers = {
    Query: {
        getGame: () => {
            return allData.id, allData.name
        }
    }
}

const server = new ApolloServer({ query, resolvers });

const app = express();
server.applyMiddleware({ app });

app.listen({ port }, () =>
    console.log('Now browse to http://localhost:3000' + server.graphqlPath)
);