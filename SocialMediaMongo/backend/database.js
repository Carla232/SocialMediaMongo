const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const app = express();
app.use(cors());

const bodyParser = require('body-parser'); // Middleware pentru a parsa corpul cererii

// Middleware pentru a parsa corpul cererii și a umple obiectul 'req.body' cu datele trimise
app.use(bodyParser.json());
const uri = "mongodb+srv://CarpCarla:stud@bdsa.p7jpeja.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectToDatabase() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

app.get('/utilizatori', async (req, res) => {
  try {
    const database = client.db('socialmedia');
    const collection = database.collection('utilizatori');
    const data = await collection.find({}).toArray();
    res.json(data);
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ error: "An error occurred" });
  }
});

app.get('/postari', async (req, res) => {
    try {
      const database = client.db('socialmedia');
      const collection = database.collection('postari');
      const data = await collection.find({}).toArray();
      res.json(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "An error occurred" });
    }
  });

  app.get('/comentarii', async (req, res) => {
    try {
      const database = client.db('socialmedia');
      const collection = database.collection('comentarii');
      const data = await collection.find({}).toArray();
      res.json(data);
    } catch (error) {
      console.error("Error fetching data:", error);
      res.status(500).json({ error: "An error occurred" });
    }
  });
  app.get('/utilizator/:id', async (req, res) => {
    try {
      const database = client.db('socialmedia');
      const collection = database.collection('utilizatori');
      const user = await collection.findOne({ _id: parseInt(req.params.id) });
      res.json(user.nume);
      // Assuming the user document has a "name" field
    } catch (error) {
      console.error("Error fetching user data:", error);
      res.status(500).json({ error: "An error occurred" });
    }
  });
  app.get('/utilizator1/:id', async (req, res) => {
    try {
      const database = client.db('socialmedia');
      const collection = database.collection('utilizatori');
      const user = await collection.findOne({ _id: parseInt(req.params.id) });
      res.json(user);
    } catch (error) {
      console.error("Error fetching user data:", error);
      res.status(500).json({ error: "An error occurred" });
    }
  });
  app.post('/login', async (req, res) => {
    const { nume, parola } = req.body;
  
    if (!nume || !parola) {
      return res.status(400).json({ error: "Numele de utilizator și parola sunt obligatorii" });
    }
  
    // Verificarea credențialelor utilizatorului în baza de date MongoDB
    // Exemplu simplificat folosind MongoDB
    const database = client.db('socialmedia');
    const collection = database.collection('utilizatori');
    const user = await collection.find({}).toArray();
  
    if (!user) {
      return res.status(401).json({ error: "Nume de utilizator sau parolă incorecte" });
    }
    const numeMatch = await bcrypt.compare(nume, user.nume);
  
    if (!numeMatch) {
      return res.status(401).json({ error: "Nume de utilizator sau parolă incorecte" });
    }
    // Verificarea parolei utilizatorului
    // Exemplu simplificat folosind bcrypt pentru compararea parolei criptate
    const parolaMatch = await bcrypt.compare(parola, user.parola);
  
    if (!parolaMatch) {
      return res.status(401).json({ error: "Nume de utilizator sau parolă incorecte" });
    }
  
    // Generarea și returnarea token-ului (opțional)
    // Exemplu simplificat folosind JWT pentru generarea token-ului
    //const token = jwt.sign({ nume: user.nume, role: user.role }, 'secret_key');
    //res.json({ token });
  });
connectToDatabase().then(() => {
  app.listen(5000, () => {
    console.log("Server running on port 5000");
  });
});