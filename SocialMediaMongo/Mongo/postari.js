use socialmedia
db.createCollection("postari")
db.postari.insertMany([
  {
    "_id": 1,
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 3
  },
    "text": "Ce părere aveți despre noul film?",
    "descriere": "Am văzut că a fost lansat un nou film în cinematografe, 'Oppenheimer'. Ați avut ocazia să îl vedeți? Ce părere aveți despre el?",
    "data_ora_postarii": ISODate("2023-07-29T08:25:00.000+03:00"),
    "relevanta": {
      "etichete": ["film", "opinie"],
      "locatie": "Bucuresti"
    },"reactie":[{
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 8,
  },"apreciere":"like"
    },{
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 9,
  },"apreciere":"like"
    },{
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 2,
  },"apreciere":"inima"
    },
    {
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 7,
  },"apreciere":"like"
    }
  ]
  },
  {
    "_id": 2,
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 7
  },
    "text": "Vremea minunată pentru o plimbare!",
    "descriere": "Astăzi este o zi frumoasă de primăvară, perfectă pentru o plimbare în aer liber",
    "data_ora_postarii": ISODate("2023-05-23T09:15:00.000+03:00"),
    "relevanta": {
      "etichete": ["vreme", "plimbare"],
      "locatie": "Brasov"
    },"reactie":[{
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 11
  },"apreciere":"like"
    },{
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 1
  },"apreciere":"like"
  }],
  }
 {
  "_id": 3,
  "utilizator": {
    "$ref": "utilizatori",
    "$id": 5
  },
  "text": "Recomandări pentru restaurante în Iași",
  "descriere": "Iași, un oraș plin de istorie și cultură, oferă o varietate de restaurante care îmbină tradiția culinară locală cu influențe internaționale. Iată câteva recomandări pentru restaurante în Iași: Restaurantul 'La Castel', Restaurantul 'Poesis', Restaurantul 'Veg Up'.",  
  "data_ora_postarii": ISODate("2023-06-04T18:40:00.000+03:00"),
  "relevanta": {
    "etichete": ["recomandari", "restaurant"],
    "locatie": "Iasi"
  },"reactie":[{
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 2,
  },"apreciere":"inima"
    },{
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 10,
  },"apreciere":"inima"
    },{
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 3,
  },"apreciere":"like"
    },
    {
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 1,
  },"apreciere":"like"
    },{
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 11,
  },"apreciere":"like"
    }
  ]
},
  {
    "_id": 4,
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 9
  },
    "text": "Experiențe de călătorie în Timișoara",
    "descriere": "Am planificat o călătorie în Timișoara și aș dori să aflu mai multe despre experiențele altor călători. Ce recomandați să vizitez?",
    "data_ora_postarii": ISODate("2023-04-09T12:18:00.000+03:00"),
    "relevanta": {
      "etichete": ["calatorie", "experiente"],
      "locatie": "Timisoara"
    },"reactie":[{
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 5,
  },"apreciere":"like"
    },{
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 8,
  },"apreciere":"like"
    },{
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 3,
  },"apreciere":"inima"
    }
  ]
  },
  {
    "_id": 5,
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 7
  },
    "text": "Evenimente culturale în Constanța",
    "descriere":"Constanța, un oraș cu o bogată moștenire culturală, găzduiește diverse evenimente culturale care reflectă diversitatea și creativitatea comunității locale. Iată câteva evenimente culturale deosebite din Constanța: Festivalul Internațional de Film 'Anonimul', Festivalul 'Zilele Constanței',Spectacole la Teatrul de Operă și Balet 'Oleg Danovski.'",
    "data_ora_postarii": ISODate("2023-07-20T10:40:00.000+03:00"),
    "relevanta": {
      "etichete": ["evenimente", "cultural"],
      "locatie": "Constanta"
    },"reactie":[{
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 9,
  },"apreciere":"like"
    },{
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 10,
  },"apreciere":"inima"
    },{
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 11,
  },"apreciere":"inima"
    },
    {
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 5,
  },"apreciere":"like"
    },{
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 6,
  },"apreciere":"like"
    }
  ]
  },
  {
    "_id": 6,
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 9
  },
    "text": "Cele mai bune trasee de drumeție în Brașov",
    "descriere":"Brașovul, cu peisajele sale pitorești și munții din jur, este o destinație perfectă pentru iubitorii de drumeții și natură. Iată câteva dintre cele mai bune trasee de drumeție în Brașov:Traseul 'Piatra Mare', Traseul 'Vârful Postăvarul', Traseul 'Canionul 7 Scări'.",
    "data_ora_postarii": ISODate("2023-10-30T14:45:00.000+02:00"),
    "relevanta": {
      "etichete": ["trasee", "drumeție"],
      "locatie": "Brasov"
    },"reactie":[{
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 1,
  },"apreciere":"like"
    },{
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 2,
  },"apreciere":"inima"
    },{
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 7,
  },"apreciere":"like"
    }
  ]
  },
  {
    "_id": 7,
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 9
  },
    "text": "Sporturi de iarnă în Brașov",
    "descriere":"Brașovul, cu peisajele sale montane și stațiunile de schi renumite, este o destinație perfectă pentru iubitorii de sporturi de iarnă. Iată câteva dintre cele mai populare sporturi de iarnă pe care le puteți practica în Brașov: Schi și snowboard la 'Poiana Brașov', Plimbări cu sania pe pârtiile din zonă, Drumeții cu cățărarea pe gheață în 'Munții Bucegi'.",
    "data_ora_postarii": ISODate("2023-01-12T13:19:00.000+02:00"),
    "relevanta": {
      "etichete": ["sporturi", "iarna"],
      "locatie": "Brasov"
    },"reactie":[{
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 3,
  },"apreciere":"like"
    },{
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 8,
  },"apreciere":"inima"
    },{
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 4,
  },"apreciere":"like"
    }
  ]
  },
  {
    "_id": 8,
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 4
  },
    "text": "Rețete de sezon pentru o cină delicioasă!",
    "descriere":"Pentru o cină delicioasă în sezonul rece, iată câteva rețete de sezon care vă vor încânta papilele gustative și vor aduce un strop de magie în sărbători: Supă cremă de dovleac și nucă, Pui copt cu miere și scorțișoară, Turtă dulce cu glazură de lămâie și ghimbir.",
    "data_ora_postarii": ISODate("2023-12-16T19:21:00.000+02:00"),
    "relevanta": {
      "etichete": ["retete", "cina"],
      "locatie": "Bucuresti"
    },"reactie":[{
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 9,
  },"apreciere":"like"
    },{
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 11,
  },"apreciere":"like"
    },{
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 2,
  },"apreciere":"inima"
    }
  ]
  },
  {
    "_id": 9,
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 2
  },
    "text": "Expoziții de artă contemporană în București",
    "descriere":"Bucureștiul găzduiește o scenă vibrantă de artă contemporană, oferind o varietate de expoziții și evenimente culturale pentru iubitorii de artă. Iată câteva expoziții de artă contemporană deosebite din București: Muzeul Național de Artă Contemporană (MNAC), Galeria de Artă Contemporană 'Anca Poterașu', Centrul Cultural al Uniunii Artiștilor Plastici din România.",
    "data_ora_postarii": ISODate("2023-05-28T11:23:00.000+03:00"),
    "relevanta": {
      "etichete": ["expoziții", "arta"],
      "locatie": "Bucuresti"
    },"reactie":[{
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 1,
  },"apreciere":"inima"
    },{
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 10,
  },"apreciere":"inima"
    },{
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 3,
  },"apreciere":"like"
    },
    {
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 9,
  },"apreciere":"like"
    },{
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 8,
  },"apreciere":"like"
    }
  ]
  },
  {
    "_id": 10,
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 3
  },
    "text": "Idei pentru activități de weekend în Iași",
    "descriere": "Aștept cu nerăbdare weekendul și aș dori să încerc câteva activități interesante în Iași. Aveți vreo sugestie?",
    "data_ora_postarii": ISODate("2023-08-08T07:34:00.000+03:00"),
    "relevanta": {
      "etichete": ["activitati", "weekend"],
      "locatie": "Iasi"
    },"reactie":[{
    "utilizator": {
    "$ref": "utilizatori",
    "$id": 1,
  },"apreciere":"like"
    },{
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 11,
  },"apreciere":"like"
    },{
     "utilizator": {
    "$ref": "utilizatori",
    "$id": 7,
  },"apreciere":"inima"
    }
  ]
  }
]);
db.postari.find()