
const username = `Admina`;
const password = `a`;
const MongoClient = require('mongodb').MongoClient;
const uri = `mongodb+srv://${username}:${password}@cluster0.5ot88.mongodb.net/<AdVizData>?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function run() {
  try {
    await client.connect();

    const database = client.db('AdVizData');
    const collection = database.collection('Contacts')

    //Query for a contact that has the name 'cat'
    const query = {name: 'cat'}
    const catcontact = await collection.findOne(query);

    console.log(catcontact);
  } finally{
    //closing client when finish/error
    await client.close();
  }
}
run().catch(console.dir);