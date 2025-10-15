'use strict';

import bcrypt from "bcryptjs";


/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {

    return  await queryInterface.bulkInsert('users', [{
       nome: 'adolf huller',
       email:"mayconpirocudo@gmail.com",
       password_hash: await bcrypt.hash("123456",9),
       create_at:new Date(),
       update_at: new Date(),
      }], {});

  },

  async down () {

  }
};

