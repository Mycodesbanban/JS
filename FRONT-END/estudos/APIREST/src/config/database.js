

require("dotenv").config()

module.exports={
  dialect:"mariadb", // o nome do banco que iremos usar (mariadb)
  host: process.env.DATABASE_HOST,
  port:process.env.DATABASE_PORT,
  username:process.env.DATABASE_USERNAME,
  password:process.env.DATABASE_PASSWORD,
  database:process.env.DATABASE,
  define:{ //configuracoao global para todos os modelas
    timestamps:true, //cria as colunas createdAt e updatedAt
    underscored:true, // cria coluna com snake_case que no caso seria o _
    underscoredAll:true, // aplica a essa rega a nome de tabelas e associacoes
    "createdAt":'created_at', // o created guarda quando o registro foi inserido no banco
    "updatedAt":"updated_at" // quando o registro foi atualizado no pela a ultima vez

  },
  dialectOptions:{
  timezone:"America/Sao_Paulo"
  },
  timezone:"America/Sao_Paulo" // o horario
}
