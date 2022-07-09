/** Dependency Imports */
const {ApolloServer} = require('apollo-server'); //Calculating...
const mongoose = require('mongoose');

/** Relative Imports */
const { MONGODB }= require('./config.js');
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose
    .connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log(`MongoDB Connected`);
        return server.listen({ port: 5000 });
    })
    .then(res => {
        console.log(`Server running at ${res.url}`);
    })
    .catch(e => console.error(e));

