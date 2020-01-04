// Importamos functions desde firebasebase-funcions
const functions = require('firebase-functions');
// Importamos firebase-admin para conectarnos con la base de datos
const firebase = require('firebase-admin');
// Importamos el archivo de configuración que descargamos
const config = require('./firebase-config.json');
// inicializamos nuestra aplicación
firebase.initializeApp({
  credential: firebase.credential.cert(config),
  databaseURL: 'https://api-cv-2bf68.firebaseio.com/' // URL de nuestro proyecto
});
// creamos la función que obtiene los recursos de nuestra firebase database 
exports.api = functions.https.onRequest((req, res) => {
  res.header('Content-Type', 'application/json');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'GET') {
    const data = firebase.database().ref('/me') // Hacemos referencia a la base de datos
    data.on('value', (snapshot) => {
      res.json(snapshot.val()); // El elemento resultante lo exponemos en un archivo JSON
    });
  }
});
