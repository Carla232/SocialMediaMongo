use socialmedia
db.postari.insertOne({
  "_id": 11,
  "utilizator": {
    "$ref": "utilizatori",
    "$id": 2
  },
  "text": "Fii tu schimbarea pe care vrei să o vezi în lume!",
  "descriere": "Într-o lume plină de provocări și incertitudini, este important să nu pierdem speranța și să ne concentrăm pe lucrurile pozitive pe care le putem face. Fiecare dintre noi poate fi schimbarea pe care o dorim în lume, prin acțiuni mici și constante.",
  "data_ora_postarii": ISODate("2023-11-17T10:00:00.000+02:00"),
  "relevanta": {
    "etichete": ["inspirație", "motivație"],
    "locatie": "București"
  },
  "reactie": [{
      "utilizator": {
        "$ref": "utilizatori",
        "$id": 7
      },
      "apreciere": "like"
    },
    {
      "utilizator": {
        "$ref": "utilizatori",
        "$id": 9
      },
      "apreciere": "like"
    }
  ]
});
db.postari.find()

db.postari.find({ "relevanta.locatie": "Bucuresti" });

db.utilizatori.updateOne(
  { _id: 7 },
  { $set: { nume: "Constantin" } }
);
db.utilizatori.find()

db.comentarii.updateOne(
   { "_id": 1, "utilizator.$id": 11 },
   { $set: { "utilizator.$id": 1 } }
)
db.comentarii.find()

db.utilizatori.updateMany(
  { gen: "feminin" },
  { $set: { parola: "nouaParolaFeminin" } }
);
db.utilizatori.find()

db.utilizatori.updateMany(
   { },
   { $unset: { telefon: "" } }
)
db.utilizatori.find()

db.comentarii.deleteOne({ _id: 10 });
db.comentarii.find();

db.postari.deleteMany({
  reactie: {
    $size: 2,
    $elemMatch: {
      apreciere: "like"
    }
  }
})
db.postari.find()

db.postari.createIndex({"relevanta.locatie": 1 })
db.postari.find({"relevanta.locatie":"Bucuresti"}).explain("executionStats")