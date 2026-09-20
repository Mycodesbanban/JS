const mongoose = require("mongoose")

const conn = async () => {
    try {
        console.log("Tentando conectar no MongoDB...")

        const dbConn = await mongoose.connect(
            `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@cluster0.4pkaaiu.mongodb.net/?appName=Cluster0`
        )

        console.log("CONECTOU O BANCO!")

        return dbConn

    } catch (e) {
        console.log("ERRO NO MONGODB:", e)
    }
}

conn()

module.exports = conn