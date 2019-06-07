const data = {
    channels: [
        {
            idChannel: 1,
            name: 'Rodrigo Branas',
            subscribersCount: 37705
        },
        {
            idChannel: 2,
            name: 'Martin Fowler',
            subscribersCount: 100000
        }
    ],
    playlists: [
        {
            idPlaylist: 1,
            idChannel: 1,
            name: 'BranasLive'
        },
        {
            idPlaylist: 2,
            idChannel: 1,
            name: 'AngularJS'
        }
    ],
    videos: [
        {
            idVideo: 1,
            idChannel: 1,
            idPlaylist: 2,
            title: 'Introdução ao AngularJS',
            viewCount: 200000
        },
        {
            idVideo: 2,
            idChannel: 1,
            idPlaylist: 2,
            title: 'Diretivas',
            viewCount: 150000
        },
        ,
        {
            idVideo: 3,
            idChannel: 1,
            idPlaylist: 2,
            title: 'Formulários',
            viewCount: 100000
        }
    ]
};

exports.getData = function (collection, key, value) {
    if (!key || !value) return data[collection];
    return data[collection].filter(document => document[key] === value);
};

exports.saveData = function (collection, value) {
    console.log(arguments)
    data[collection].push(value);
    return value;
};
