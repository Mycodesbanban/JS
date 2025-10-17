"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }'use strict';

var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    return  await queryInterface.bulkInsert('users', [{
       nome: 'adolf huller',
       email:"mayconpirocudo@gmail.com",
       password_hash: await _bcryptjs2.default.hash("123456",9),
       create_at:new Date(),
       update_at: new Date(),
      }], {});

  },

  async down () {

  }
};

