const {GraphQLServer} = require('graphql-yoga');
const data = require('./data');

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
        viewCount: Int
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
        channels: function (obj, args, context, info) {
            return data.getData('channels', 'idChannel', args.idChannel);
        }
    },
    Mutation: {
        saveChannel: function (obj, args, context, info) {
            return data.saveData('channels', args);
        }
    },
    Channel: {
        playlists: function (obj, args, context, info) {
            console.log(context);
            return data.getData('playlists', 'idChannel', obj.idChannel);
        }
    },
    Playlist: {
        videos: function (obj, args, context, info) {
            return data.getData('videos', 'idPlaylist', obj.idPlaylist);
        }
    }
};

const server = new GraphQLServer({typeDefs, resolvers});
server.start(4000);
