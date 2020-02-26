const { getSecureRandoms } = require("./Ex1b");

getSecureRandoms([5, 4, 3, 2]) // any number put in is multiplied by 2, cant figure out why ?
  .then(randoms => console.log(randoms));

(async () => {
  const randoms = await getSecureRandoms([5, 4, 3, 2]); // any number put in is multiplied by 2, cant figure out why ?
  console.log(randoms);
})();