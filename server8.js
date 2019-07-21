const {GraphQLServer} = require('graphql-yoga');
const data = require('./data8');

const typeDefs = `
    type Channel {
        idChannel: Int
        name: String
        playlists: [Playlist]
    }

    type Playlist {
        idPlaylist: Int
        name: String
        videos: [Video]
    }

    type Video {
        idVideo: Int
        title: String
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
    },
    Channel: {
        playlists(obj, args) {
            return data.getData('playlists', 'idChannel', obj.idChannel);
        }
    },
    Playlist: {
        videos: function (obj, args) {
            return data.getData('videos', 'idPlaylist', obj.idPlaylist);
        }
    }
};

const server = new GraphQLServer({typeDefs, resolvers});
server.start();