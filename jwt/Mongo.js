
const MongoClient = require("mongodb").MongoClient;

const uri =
  "mongodb+srv://User:59ovX5eBYPLNIZ4K@jsw.fv199.mongodb.net/dd?retryWrites=true&w=majority";
const dataBase = "dd";

function MongoUtils() {
  const mu = {};

  // Esta función retorna una nueva conexión a MongoDB.
  // Tenga presente que es una promesa que deberá ser resuelta.
  mu.conn = () => {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return client.connect();
  };
  return mu;
}

process.on("SIGINT", async function () {
  console.log("connection ended");
  const client = await MongoUtils().conn();
  client.close().then((data) => console.log("conn ended"));
});

exports.mongoUtils = MongoUtils();
exports.dataBase = dataBase;
