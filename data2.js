const data = {
    channels: [
        {
            idChannel: 1,
            name: 'Rodrigo Branas',
            subscribersCount: 40000
        },
        {
            idChannel: 2,
            name: 'Robert Martin',
            subscribersCount: 100000
        }
    ],
    playlists: [
        {
            idPlaylist: 1,
            idChannel: 1,
            name: 'AngularJS'
        },
        {
            idPlaylist: 2,
            idChannel: 1,
            name: 'Node.js'
        }
    ],
    videos: [
        {
            idVideo: 1,
            idPlaylist: 1,
            title: 'Introdução ao AngularJS',
            viewsCount: 200000
        },
        {
            idVideo: 2,
            idPlaylist: 1,
            title: 'Diretivas',
            viewsCount: 80000
        },
        {
            idVideo: 3,
            idPlaylist: 1,
            title: 'Services',
            viewsCount: 50000
        }
    ]
};

exports.getData = function (collection, field, value) {
    if (!field || !value) return data[collection];
    return data[collection].filter(item => item[field] === value);
};

exports.saveData = function (collection, obj) {
    data[collection].push(obj);
    return obj;
};