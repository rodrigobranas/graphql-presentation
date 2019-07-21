const data = {
    channels: [
        {
            idChannel: 1,
            name: 'Rodrigo Branas',
            subscribers: 40000
        },
        {
            idChannel: 2,
            name: 'Robert Martin',
            subscribers: 400000
        }
    ],
    playlists: [
        {
            idPlaylist: 1,
            idChannel: 1,
            name: 'Node.js'
        }
    ],
    videos: [
        {
            idVideo: 1,
            idPlaylist: 1,
            title: 'Introdução ao Node.js'
        },
        {
            idVideo: 2,
            idPlaylist: 1,
            title: 'Módulos'
        }
    ]
};

exports.getData = function (collection, field, value) {
    return data[collection].filter(item => item[field] === value);
};