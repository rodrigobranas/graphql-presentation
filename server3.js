const {GraphQLServer} = require('graphql-yoga');
const data3 = require('./data3');

const typeDefs = `
    type Channel {
        idChannel: Int,
        name: String,
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
        title: String
    }

    type Query {
        channels(idChannel: Int): [Channel]
    }
`;

const resolvers = {
    Query: {
        channels: function (obj, args) {
            return data3.getData('channels', 'idChannel', args.idChannel);
        }
    },
    Channel: {
        playlists: function (obj, args) {
            return data3.getData('playlists', 'idChannel', obj.idChannel);
        }
    },
    Playlist: {
        videos: function (obj, args) {
            return data3.getData('videos', 'idPlaylist', obj.idPlaylist);
        }
    }
};

const server = new GraphQLServer({typeDefs, resolvers});
server.start();