const gameArea = {
    type: "Polygon",
    coordinates: [
      [
        [12.543768882751463, 55.77575236860147],
        [12.544970512390137, 55.77476273818541],
        [12.577972412109373, 55.77664542813801],
        [12.572393417358398, 55.79510545223691],
        [12.571020126342772, 55.796118690471815],
        [12.543768882751463, 55.77575236860147]
      ]
    ]
  };
  
  const players = [
    {
      type: "Feature",
      properties: { name: "Player1", team: "Team1" },
      geometry: {
        type: "Point",
        coordinates: [12.569432258605957, 55.79110049073223]
      }
    },
    {
      type: "Feature",
      properties: { name: "Player2", team: "Team1" },
      geometry: {
        type: "Point",
        coordinates: [12.57059097290039, 55.779059000166136]
      }
    },
    {
      type: "Feature",
      properties: { name: "Player3", team: "Team2" },
      geometry: {
        type: "Point",
        coordinates: [12.557458877563475, 55.780289864343736]
      }
    },
    {
      type: "Feature",
      properties: { name: "Player4", team: "Team2" },
      geometry: {
        type: "Point",
        coordinates: [12.564411163330078, 55.78714337735614]
      }
    }
  ];
  
  module.exports = { gameArea, players };