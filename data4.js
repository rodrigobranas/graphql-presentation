const data = {
    channels: [
        {
            idChannel: 1,
            name: "Rodrigo Branas"
        },
        {
            idChannel: 2,
            name: "Balta.io"
        }
    ]
};

exports.getData = function (collection, field, value) {
    if (!value) return data[collection];
    return data[collection].filter(element => element[field] === value);
};