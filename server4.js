const {GraphQLServer} = require('graphql-yoga');
const data = require('./data4');

const typeDefs = `
    type Channel {
        idChannel: Int
        name: String
    }

    type Query {
        channels(idChannel: Int): [Channel]
    }
`;

const resolvers = {
    Query: {
        channels: function (obj, args) {
            return data.getData('channels', 'idChannel', args.idChannel);
        }
    }
};

const server = new GraphQLServer({typeDefs, resolvers});
server.start();