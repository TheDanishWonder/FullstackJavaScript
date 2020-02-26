const object = {
  title: "6 Secure Randoms",
  randoms: []
};

const size = 4;
const next = size + 4;
require('crypto').randomBytes(size, (error, buffer) => {
  let secureHex = buffer.toString("hex");
    object.randoms.push({
        length: secureHex.length,
        random: secureHex
    });
    require('crypto').randomBytes(size + next, (error, buffer) => {
    let secureHex = buffer.toString("hex");
    object.randoms.push({
      length: secureHex.length,
      random: secureHex
    });
    require('crypto').randomBytes(next + next, (error, buffer) => {
      let secureHex = buffer.toString("hex");
      object.randoms.push({
        length: secureHex.length,
        random: secureHex
      });
     console.log(JSON.stringify(object, null, 2));
    });
  });
});

