const data = {
    channels: [
        {
            idChannel: 1,
            name: "Rodrigo Branas",
        },
        {
            idChannel: 2,
            name: "Porta dos Fundos"
        }
    ],
    playlists: [
        {
            idPlaylist: 1,
            idChannel: 1,
            name: "AngularJS"
        },
        {
            idPlaylist: 2,
            idChannel: 1,
            name: "Node.js"
        }
    ],
    videos: [
        {
            idVideo: 1,
            idPlaylist: 1,
            title: "Introdução ao AngularJS"
        }
    ]
};

exports.getData = function (collection, field, value) {
    return data[collection].filter(element => element[field] === value);
};