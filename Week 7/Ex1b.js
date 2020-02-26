const makeSecureRandom = size => {
  return new Promise((resolve, reject) => {
    require("crypto").randomBytes(size, (err, buffer) => {
      if (err) {
        reject(err);
      }
      let secureHex = buffer.toString("hex");
      let sh = { length: secureHex.length, random: secureHex };
      resolve(sh);
    });
  });
};

const getSecureRandoms = async size => {
  const promises = [];
  for (let index = 0; index < size.length; index++) {
    const element = makeSecureRandom(size[index]);
    promises.push(element);
  }
  try {
  return await Promise.all(promises);
  }
  catch (err) {
      console.log(err);
  }
};

module.exports.getSecureRandoms = getSecureRandoms;
