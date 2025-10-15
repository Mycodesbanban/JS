import { Sequelize } from "sequelize";
import dbConfig from "../config/database.js";
import Aluno from "../models/Aluno.js";
import Photo from "../models/Photo.js";

// cria a conexão com o banco
const connection = new Sequelize(dbConfig);

const models = [Aluno , Photo]

// inicializa os models
Aluno.init(connection);

// 🔥 cria a tabela se ainda não existir
connection.sync({ alter: true })
  .then(() => console.log("✅ Banco sincronizado com sucesso"))
  .catch((err) => console.error("❌ Erro ao sincronizar banco:", err));
  models.forEach((model) => model.associate && model.associate(connection.model) )
export default connection;
