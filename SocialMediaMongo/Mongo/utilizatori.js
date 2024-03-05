use socialmedia
db.utilizatori.insertMany([
  {
    _id: 1,
    nume: "Popescu",
    prenume: "Andrei",
    email: "andrei.popescu@gmail.com",
    parola: "parola123",
    data_nastere: ISODate("1990-05-15T08:30:00.000+03:00"), // Ora: 08:30
    gen: "masculin",
    prieteni: [2, 3, 5],
    telefon: "0720788488"
  },
  {
    _id: 2,
    nume: "Ionescu",
    prenume: "Elena",
    email: "elena.ionescu@yahoo.com",
    parola: "ionescuElena",
    data_nastere: ISODate("1988-12-28T09:45:00.000+02:00"), // Ora: 09:45
    gen: "feminin",
    prieteni: [1, 4, 6, 7],
    telefon: "0723509472"
  },
  {
    _id: 3,
    nume: "Radu",
    prenume: "Mihai",
    email: "mihai.radu@gmail.com",
    parola: "raduMihai",
    data_nastere: ISODate("1992-07-10T10:15:00.000+03:00"), // Ora: 10:15
    gen: "masculin",
    prieteni: [1, 4],
    telefon: "0731883501"
  },
  {
    _id: 4,
    nume: "Stan",
    prenume: "Ana",
    email: "ana.stan@yahoo.com",
    parola: "parolaAna",
    data_nastere: ISODate("1991-03-20T11:20:00.000+02:00"), // Ora: 11:20
    gen: "feminin",
    prieteni: [2, 3, 8, 9],
    telefon: "0748144174"
  },
  {
    _id: 5,
    nume: "Dumitrescu",
    prenume: "Cristian",
    email: "cristian.dumitrescu@gmail.com",
    parola: "dumitrescuCristian",
    data_nastere: ISODate("1989-09-05T12:00:00.000+03:00"), // Ora: 12:00
    gen: "masculin",
    prieteni: [1, 6, 9, 10, 11],
    telefon: "0743561780"
  },
  {
    _id: 6,
    nume: "Stoica",
    prenume: "Mihaela",
    email: "mihaela.stoica@yahoo.com",
    parola: "parolaMihaela",
    data_nastere: ISODate("1993-01-12T13:30:00.000+02:00"), // Ora: 13:30
    gen: "feminin",
    prieteni: [2, 5, 10, 11],
    telefon: "0742571708"
  },
  {
    _id: 7,
    nume: "Gheorghe",
    prenume: "Adrian",
    email: "adrian.gheorghe@gmail.com",
    parola: "gheorgheAdrian",
    data_nastere: ISODate("1990-08-18T14:45:00.000+03:00"), // Ora: 14:45
    gen: "masculin",
    prieteni: [2, 8, 10],
    telefon: "0751166978"
  },
  {
    _id: 8,
    nume: "Marinescu",
    prenume: "Ioana",
    email: "ioana.marinescu@yahoo.com",
    parola: "marinescuIoana",
    data_nastere: ISODate("1987-06-25T15:10:00.000+03:00"), // Ora: 15:10
    gen: "feminin",
    prieteni: [4, 7, 9, 11],
    telefon: "0744141081"
  },
  {
    _id: 9,
    nume: "Neacșu",
    prenume: "Gabriel",
    email: "gabriel.neacsu@gmail.com",
    parola: "neacsuGabriel",
    data_nastere: ISODate("1994-02-14T16:20:00.000+02:00"), // Ora: 16:20
    gen: "masculin",
    prieteni: [5, 8, 10, 11],
    telefon: "0745323622"
  },
  {
    _id: 10,
    nume: "Enescu",
    prenume: "Diana",
    email: "diana.enescu@yahoo.com",
    parola: "enescuDiana",
    data_nastere: ISODate("1993-11-30T17:00:00.000+02:00"), // Ora: 17:00
    gen: "feminin",
    prieteni: [6, 7, 9, 11],
    telefon: "0751125633"
  },
  {
    _id: 11,
    nume: "Popa",
    prenume: "Alexandru",
    email: "alexandru.popa@gmail.com",
    parola: "popaAlexandru",
    data_nastere: ISODate("1995-04-02T18:30:00.000+03:00"), // Ora: 18:30
    gen: "masculin",
    prieteni: [5, 6, 8, 9, 10],
    telefon: "0723307038"
  }
])
db.utilizatori.find()