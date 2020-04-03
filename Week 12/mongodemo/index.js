
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://Nicklas:Kaktus.95@fullstack-cluster-chkk1.mongodb.net/test?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true , useUnifiedTopology: true});


async function mongoTest() {
    try {
        await client.connect();
        const dogs = client.db("kennel")
        const dogsCollection = dogs.collection("dogs")
        await dogsCollection.insertMany([{name:"Jack"},{name:"Smith"},{name:"Charlie", race:"black"}])
        await dogsCollection.insertOne({name:"Fido"})
        const allDogs = await dogsCollection.find({}).toArray();
        console.log(allDogs)
    } catch (error) {
        console.log(error);
    }
    finally {
        client.close();
        console.log("closes")
    }
}
mongoTest();