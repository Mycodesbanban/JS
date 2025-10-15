module.exports = {
  async up (queryInterface, Sequelize) {

      await queryInterface.createTable('photos', {
        id: {
          type:Sequelize.INTEGER,
          allowNull:false, // nao pode ficar sozinho
          autoIncrement:true,
          primaryKey:true,//indica que o campo e a chave primaria da nossa tabela

        },
        originalname:{
          type:Sequelize.STRING,
          allowNull:false
        },
        filename:{
          type:Sequelize.STRING,
          allowNull:false
        },
        aluno_id:{
          type:Sequelize.INTEGER,
          allowNull:true,
          references:{
            model:"alunos",
            key:"id",
          },
          onDelete:"SET NULL",
          onUpdate:"CASCADE"
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
   await queryInterface.dropTable('photos');

  }
};
