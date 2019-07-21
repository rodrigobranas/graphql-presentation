const data = {
    channels: [
        {
            idChannel: 1,
            name: 'Rodrigo Branas'
        },
        {
            idChannel: 2,
            name: 'Martin Fowler'
        }
    ],
    playlists: [
        {
            idPlaylist: 1,
            idChannel: 1,
            name: 'AngularJS'
        }
    ],
    videos: [
        {
            idVideo: 1,
            idPlaylist: 1,
            title: 'Introdução ao AngularJS'
        },
        {
            idVideo: 2,
            idPlaylist: 1,
            title: 'Diretivas'
        }
    ]
};

exports.getData = function (collection, field, value) {
    return data[collection].filter(element => element[field] === value);
};