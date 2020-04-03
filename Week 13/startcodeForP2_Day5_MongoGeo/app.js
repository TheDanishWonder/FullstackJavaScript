const express = require("express");
const app = express();
const gju = require("geojson-utils");
const { gameArea, players } = require("./gameData");

app.get("/", (req, res) => res.send("Geo Demo!"));

app.get("/geoapi/isuserinarea/:lon/:lat", (req, res) => {
  const lon = req.params["lon"];
  const lat = req.params["lat"];

  const isInside = gju.pointInPolygon(
    { type: "Point", coordinates: [lon, lat] },
    gameArea
  );

  if (isInside) {
    res.send({
      status: true,
      msg: "Player was inside!"
    });
  } else {
    res.send({
      status: false,
      msg: "Player was not inside!"
    });
  }
});

app.get("/geoapi/findNearbyPlayers/:lon/:lat/:rad", (req, res) => {
  const lon = req.params["lon"];
  const lat = req.params["lat"];
  const rad = req.params["rad"];
  const center = { type: "Point", coordinates: [lon, lat] };

  const playersFound = players.filter(p =>
    gju.geometryWithinRadius(p.geometry, center, rad)
  );

  res.send(playersFound);
});

app.get("/geoapi/distanceToUser/:myusername/:playertofind", (req, res) => {
  const me = players.filter(p => p.properties.name == req.params["myusername"]);
  const find = players.filter(
    p => p.properties.name == req.params["playertofind"]
  );

  const distanceToUser = gju.pointDistance(me[0].geometry, find[0].geometry);

  res.send({
    name: find[0].properties.name,
    distance: distanceToUser
  });
});

app.listen(3000, () => console.log("Example app listening on port 3000!"));