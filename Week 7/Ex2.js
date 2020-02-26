const URL = "https://swapi.co/api/people/";
const fetch = require("node-fetch");

async function  getPlanetforFirstSpeciesInFirstMovieForPerson(id){
    try {
        const n = await fetch(URL + id).then(data => data.json());
        //const f = await fetch(n.films[0]).then(data => data.json());
        //const s = await fetch(f.species[0]).then(data => data.json());
        //const p = await fetch(s.homeworld).then(data => data.json());
        return `Name: ${n.name}`;
        //, Title: ${f.title}, Specie: ${s.name}, Planet: ${p.name}`;
    }
    catch (err) {
        console.log(err)
    }
    finally {
        console.log("fetching done...")
    }
}

const data = getPlanetforFirstSpeciesInFirstMovieForPerson();
console.log(data)