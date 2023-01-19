// route en get 
// demande une ressource
// je dis à mon serveur :
//  "j'ai besoin de telle chose, envoie-moi telle chose"
// GET = pour Avoir


//res.status() par défaut res.status(200) 
// status correspond à erreur ou autres


// Routes avec paramètres de type query
// insère un point d'interrogation ? en fin de route, 
// sépare chaque paire variable/valeur par le symbole &.

// Par exemple : http://localhost:3000?name=louis&city=versaille
// 2 paramètres : 
    // "name" dont la valeur est "louis"
    // "city" dont la valeur est "versaille" 
// 
// 
// 
// 
// 

// ---------------------
// app.get("/", (req, res) => {
//     return res.json({
//       restaurant: {
// -------------------------
// route "/" = getting data
// return 2 properties = restaurant: {} & categories: {}
// restaurant: path, name, categories, price, ...
// restaurant.client_adress.coordinates
// client_address: {coordinates, locality, country, ...}
// categories: {name, meals}
// meals: {id, title, description, price, ...}


// middleware `fileUpload`
// app.post('/upload', function(req, res) {
//     console.log(req.files.foo); // the uploaded file object
//   });

// middleware `fileUpload`by le reacteur
// app.post("/upload", fileUpload(), (req, res) => {
//     // on récupère les fichiers reçus et on les affiche avec un `console.log`
//     console.log(req.files);
//     res.send("OK");
//   });

