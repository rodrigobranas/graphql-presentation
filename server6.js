const {GraphQLServer} = require('graphql-yoga');
const data = require('./data6');

const typeDefs = `
    type Channel {
        idChannel: Int,
        name: String,
        url: String,
        subscribers: Int,
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
        views: Int
    }

    type Query {
        channels(idChannel: Int): [Channel]
    }

    type Mutation {
        saveChannel(name: String): Channel
    }
`;

const resolvers = {
    Query: {
        channels: function (obj, args) {
            return data.getData('channels', 'idChannel', args.idChannel);
        }
    },
    Mutation: {
        saveChannel: function (obj, args) {
            return data.saveData('channels', args);
        }
    },
    Channel: {
        playlists: function (obj, args) {
            return data.getData('playlists', 'idChannel', obj.idChannel);
        }
    },
    Playlist: {
        videos: function (obj, args) {
            return data.getData('videos', 'idPlaylist', obj.idPlaylist)
        }
    }
};

const server = new GraphQLServer({typeDefs, resolvers});
server.start();