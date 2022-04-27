var typeorm = require('typeorm');
var User = require("./entity/entity.js");
var userRepository;
typeorm.createConnection({}).then(function () {
    (function (connection) {
        userRepository = connection.getRepository(User);
        module.exports = userRepository;
    });
});
