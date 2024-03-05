use socialmedia
db.createCollection("comenta")
db.comentarii.insertMany([
    {
    "_id":1,
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 11
  }, "postare": {
    "$ref": "postari",
    "$id": 1
  },
  "text": "Am avut ocazia să vizionez filmul 'Oppenheimer' și a fost o experiență extraordinară! Este regizat de Christopher Nolan și explorează viața și contribuțiile lui J. Robert Oppenheimer, fizicianul care a jucat un rol crucial în dezvoltarea bombei atomice în timpul celui de-al Doilea Război Mondial. Filmul a primit recenzii pozitive pentru interpretările actorilor, regia și coloana sonoră.",
  "data_comentariu": ISODate("2023-07-29T09:30:00.000+03:00")
},
{
    "_id":2,
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 4
  }, "postare": {
    "$ref": "postari",
    "$id": 1
  },
  "text":"Am vizionat filmul 'Oppenheimer' fără regrete, totul a fot la superlativ. Este regizat de Christopher Nolan, unul dintre cei mai apreciați regizori contemporani, cunoscut pentru abordarea sa distinctă a subiectelor istorice și pentru calitatea vizuală a producțiilor sale. Filmul explorează viața și contribuțiile lui J. Robert Oppenheimer, fizicianul care a jucat un rol crucial în dezvoltarea bombei atomice în timpul celui de-al Doilea Război Mondial. În general, producțiile lui Nolan sunt apreciate pentru atenția sa la detalii istorice și pentru modul său inovator de a prezenta povestea.",
  "data_comentariu": ISODate("2023-07-29T10:01:00.000+03:00")
},
{
     "_id":3,
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 5
  }, "postare": {
    "$ref": "postari",
    "$id": 4
  },
  "text":"Timișoara, un oraș cu o istorie bogată și o moștenire culturală impresionantă, încântă vizitatorii cu atracții istorice și culturale de o valoare inestimabilă, oferind o experiență memorabilă celor ce îl explorează. Iată câteva atracții istorice și culturale din Timișoara: Cetatea Timișoara (Cetatea Bastionară), Muzeul Banatului, Catedrala Mitropolitană din Timișoara, Piața Victoriei și Opera din Timișoara.",
  "data_comentariu": ISODate("2023-04-09T12:54:00.000+03:00")
},
{
     "_id":4,
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 6
  }, "postare": {
    "$ref": "postari",
    "$id": 4
  },
  "text":"Timișoara este un oraș vibrant și dinamic, care îmbină armonios istoria și modernitatea. Iată câteva experiențe culinare și de relaxare interesante din Timișoara: Piața Unirii și zona pietonală din centrul vechi, Parcul Central (Parcul Civic), Fabrica de Bere Terapia, Centrul Comercial Iulius Town.",
  "data_comentariu": ISODate("2023-04-09T14:11:00.000+03:00")
},
{
     "_id":5,
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 1
  }, "postare": {
    "$ref": "postari",
    "$id": 10
  },
  "text": "Iași, un oraș cu o bogată moștenire culturală, oferă o gamă largă de evenimente și experiențe gastronomice, atragând atenția locuitorilor și vizitatorilor cu pasiune pentru cultură și gastronomie. Dacă ești pasionat de acestea, Iașiul oferă o varietate de activități interesante pentru a-ți petrece weekendul. Iată câteva sugestii:Palatului Culturii, Centrul Vechi al Iașului, Crama Cotnari.",
  "data_comentariu": ISODate("2023-08-08T08:26:00.000+03:00")
},
{
     "_id":6,
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 4
  }, "postare": {
    "$ref": "postari",
    "$id": 10
  },
  "text": "Iași, oferă o varietate de activități naturale și recreative, atractând aventurierii și iubitorii de natură cu diversitatea și frumusețea sa. Dacă preferi activitățile în aer liber și natura, Iașiul oferă oportunități minunate pentru a te bucura de frumusețea sa naturală. Iată câteva sugestii: Plimbare în Parcul Copou, Excursie la Mănăstirea Cetățuia, Drumeție la Lacul Ciric.",
  "data_comentariu": ISODate("2023-08-08T09:48:00.000+03:00")
}, 
{
     "_id":7,
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 1
  }, "postare": {
    "$ref": "postari",
    "$id": 8
  },
  "text":"Mulțumesc pentru aceste feluri de mâncare. Le-am încercat pe toate și au ieșit foare gustoase!",
  "data_comentariu": ISODate("2023-12-18T12:37:00.000+02:00")
},
{
     "_id":8,
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 11
  }, "postare": {
    "$ref": "postari",
    "$id": 7
  },
  "text":"Tocmai ce mi-am rezervat o cazare zilele următoare la Brașov. Mulțumesc pentru aceste sfaturi, o să le încerc negreșit.",
  "data_comentariu": ISODate("2023-01-12T15:55:00.000+02:00")
},
{
     "_id":9,
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 8
  }, "postare": {
    "$ref": "postari",
    "$id": 5
  },   
  "text":"Chiar mi-am tot plănuit când merg la mare în Constanța, să mai vizitez și împrejurimile. Mulțumesc pentru aceste evenimente, mă voi interesa când vor avea loc.",
  "data_comentariu": ISODate("2023-07-20T12:52:00.000+03:00")
},
{
     "_id":10,
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 7
  }, "postare": {
    "$ref": "postari",
    "$id": 3
  },   
  "text": "Bunicii mei stau aproape de orașul Iași. Mulțumesc pentru aceste recomandări, o să le încerc bunătățurile.",
  "data_comentariu": ISODate("2023-06-04T20:19:00.000+03:00")
}
])
db.comentarii.find()