"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize');
var _databasejs = require('../config/database.js'); var _databasejs2 = _interopRequireDefault(_databasejs);
var _Alunojs = require('../models/Aluno.js'); var _Alunojs2 = _interopRequireDefault(_Alunojs);
var _Photojs = require('../models/Photo.js'); var _Photojs2 = _interopRequireDefault(_Photojs);

// cria a conexão com o banco
const connection = new (0, _sequelize.Sequelize)(_databasejs2.default);

const models = [_Alunojs2.default , _Photojs2.default]

// inicializa os models
_Alunojs2.default.init(connection);

// 🔥 cria a tabela se ainda não existir
connection.sync({ alter: true })
  .then(() => console.log("✅ Banco sincronizado com sucesso"))
  .catch((err) => console.error("❌ Erro ao sincronizar banco:", err));
  models.forEach((model) => model.associate && model.associate(connection.model) )
exports. default = connection;
