const mongoose = require("mongoose");
const Party = require("./models/party");

async function debugDatabase() {
    try {
        // Conectar ao MongoDB
        await mongoose.connect("mongodb://localhost/partyTime", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        console.log("✅ Conectado ao MongoDB");

        // 1. Verificar todas as festas
        const allParties = await Party.find({});
        console.log("\n📊 TODAS AS FESTAS NO BANCO:");
        console.log(`Total de festas: ${allParties.length}`);
        
        allParties.forEach((party, index) => {
            console.log(`\n--- Festa ${index + 1} ---`);
            console.log(`ID: ${party._id}`);
            console.log(`Título: ${party.title}`);
            console.log(`Data: ${party.PartyDate}`);
            console.log(`Photos array: ${JSON.stringify(party.photos)}`);
            console.log(`Photos length: ${party.photos ? party.photos.length : 'undefined'}`);
            console.log(`UserId: ${party.UserId}`);
            console.log(`Privacy: ${party.privacy}`);
        });

        // 2. Verificar a última festa criada
        const latestParty = await Party.findOne({}).sort({ _id: -1 });
        console.log("\n🆕 ÚLTIMA FESTA CRIADA:");
        if (latestParty) {
            console.log(JSON.stringify(latestParty, null, 2));
        } else {
            console.log("Nenhuma festa encontrada");
        }

        // 3. Verificar se alguma festa tem fotos
        const partiesWithPhotos = await Party.find({ 
            photos: { $exists: true, $not: { $size: 0 } } 
        });
        console.log(`\n📷 FESTAS COM FOTOS: ${partiesWithPhotos.length}`);
        
        if (partiesWithPhotos.length > 0) {
            partiesWithPhotos.forEach(party => {
                console.log(`- ${party.title}: ${party.photos.length} fotos`);
                party.photos.forEach((photo, i) => {
                    console.log(`  ${i + 1}. ${photo}`);
                });
            });
        }

        // 4. Estatísticas
        console.log("\n📈 ESTATÍSTICAS:");
        const totalPhotosInDB = await Party.aggregate([
            { $unwind: { path: "$photos", preserveNullAndEmptyArrays: true } },
            { $match: { photos: { $ne: null } } },
            { $count: "totalPhotos" }
        ]);
        
        console.log(`Total de fotos no banco: ${totalPhotosInDB[0]?.totalPhotos || 0}`);
        
        // 5. Verificar estrutura do modelo
        console.log("\n🏗️ ESTRUTURA DO MODELO PARTY:");
        const sampleParty = new Party({
            title: "Teste",
            description: "Teste",
            PartyDate: new Date(),
            photos: ["teste1.jpg", "teste2.jpg"],
            privacy: false,
            UserId: "507f1f77bcf86cd799439011"
        });
        
        console.log("Modelo esperado:", JSON.stringify(sampleParty.toJSON(), null, 2));

    } catch (error) {
        console.error("❌ Erro:", error);
    } finally {
        await mongoose.disconnect();
        console.log("\n🔌 Desconectado do MongoDB");
        process.exit(0);
    }
}

debugDatabase();