const data = {
    channels: [
        {
            idChannel: 1,
            name: "Rodrigo Branas",
            url: "https://www.youtube.com/rodrigobranas",
            subscribers: 40000
        },
        {
            idChannel: 2,
            name: "Martin Fowler",
            url: "https://www.youtube.com/martinfowler",
            subscribers: 10000
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
            name: "JavaScript"
        }
    ],
    videos: [
        {
            idVideo: 1,
            idPlaylist: 1,
            title: "Introdução ao Angular.js",
            views: 300000
        }
    ]
};

exports.getData = function (collection, field, value) {
    if (!value) return data[collection];
    return data[collection].filter(element => element[field] === value);
};

exports.saveData = function (collection, value) {
    data[collection].push(value);
    return {};
};