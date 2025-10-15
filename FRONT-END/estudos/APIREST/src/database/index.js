import { Sequelize } from "sequelize";
import dbConfig from "../config/database.js";
import Aluno from "../models/Aluno.js";

// cria a conexão com o banco
const connection = new Sequelize(dbConfig);

// inicializa os models
Aluno.init(connection);

// 🔥 cria a tabela se ainda não existir
connection.sync({ alter: true })
  .then(() => console.log("✅ Banco sincronizado com sucesso"))
  .catch((err) => console.error("❌ Erro ao sincronizar banco:", err));

export default connection;
