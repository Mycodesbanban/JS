'use strict';



module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.createTable('alunos', {
        id: {
          type:Sequelize.INTEGER,
          allowNull:false, // nao pode ficar sozinho
          autoIncrement:true,
          primaryKey:true,//indica que o campo e a chave primaria da nossa tabela

        },
        nome:{
          type:Sequelize.STRING,
          allowNull:false
        },
        sobrenome:{
          type:Sequelize.STRING,
          allowNull:false
        },
        email:{
          type:Sequelize.STRING,
          allowNull:false
        },
        idade:{
          type:Sequelize.INTEGER,
          allowNull:false
        },
        created_at:{
          type:Sequelize.DATE,
          allowNull:false
        },
        updated_at:{
          type:Sequelize.DATE,
          allowNull:false
        }
      });

  },

  async down (queryInterface, Sequelize) {
   await queryInterface.dropTable('alunos');

  }
};
