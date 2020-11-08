const { mongoUtils, dataBase } = require("../Mongo");
const { ObjectId } = require("mongodb");
const bcrypt = require('bcrypt');
const { createSecureServer } = require("http2");
const COLLECTION_USUARIOS = "users";

const saltRounds = 10;

function createUser(Usuario){

  let us = {
    usuario : Usuario.usuario,
    passwrod : Usuario.passwrod,
    rol : Usuario.rol
  };
  console.log(us);
    return mongoUtils.conn().then((client) => {     
        return client
          .db(dataBase)
          .collection(COLLECTION_USUARIOS)
          .insertOne(us)
          .finally(() => client.close());  
    
    });

}


function getusers()
{
  return mongoUtils.conn().then((client) => {
    return client
      .db(dataBase)
      .collection(COLLECTION_USUARIOS)
      .find({})
      .toArray()
      .finally(() => client.close());
  });
}

module.exports = [createUser,getusers];