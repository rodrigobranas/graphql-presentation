const data = {
    channels: [
        {
            idChannel: 1,
            name: "Rodrigo Branas"
        }
    ],
    playlists: [
        {
            idPlaylist: 1,
            idChannel: 1,
            name: "AngularJS"
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

exports.getData = function (collection) {
    return data[collection];
};