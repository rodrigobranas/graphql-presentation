const {GraphQLServer} = require('graphql-yoga');
const data2 = require('./data2');

const typeDefs = `
    type Channel {
        idChannel: Int,
        name: String,
        subscribersCount: Int,
        playlists: [Playlist]
    }

    type Playlist {
        idPlaylist: Int,
        name: String,
        videos: [Video]
    }

    type Video {
        idVideo: Int,
        title: String,
        viewsCount: Int
    }

    type Query {
        channels(idChannel: Int): [Channel]
    }

    type Mutation {
        saveChannel(idChannel: Int, name: String): Channel
    }
`;

const resolvers = {
    Query: {
        channels: function (obj, args) {
            return data2.getData('channels', 'idChannel', args.idChannel);
        }
    },
    Mutation: {
        saveChannel: function (obj, args) {
            return data2.saveData('channels', args);
        }
    },
    Channel: {
        playlists: function (obj, args) {
            return data2.getData('playlists', 'idChannel', obj.idChannel);
        }
    },
    Playlist: {
        videos: function (obj, args) {
            return data2.getData('videos', 'idPlaylist', obj.idPlaylist);
        }
    }
};
const server = new GraphQLServer({typeDefs, resolvers});
server.start();