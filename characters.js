<!DOCTYPE html>
<html>
<head>
  <title>Mugen Fighter Character Select</title>
  <style>
    .character {
      display: inline-block;
      margin: 10px;
      padding: 10px;
      border: 2px solid #333;
      border-radius: 8px;
      cursor: pointer;
      text-align: center;
      width: 120px;
    }
    .character img {
      width: 80px;
      height: 80px;
    }
  </style>
</head>
<body>
  <h2>Select Your Fighter</h2>
  <div id="character-list"></div>
  <div id="selected"></div>

  <script>
    // Example character data
    const characters = [
      {
        name: "Goku",
        image: "https://static.wikia.nocookie.net/dragonball/images/8/88/Goku_Anime.png", // Example image URL
        power: 9000
      },
      {
        name: "Sonic",
        image: "https://static.wikia.nocookie.net/sonic/images/7/73/Sonic.png", // Example image URL
        power: 7000
      }
      // Add more characters here
    ];

    const characterList = document.getElementById('character-list');
    const selected = document.getElementById('selected');

    // Render characters
    characters.forEach((char, idx) => {
      const div = document.createElement('div');
      div.className = 'character';
      div.innerHTML = `
        <img src="${char.image}" alt="${char.name}" /><br>
        <strong>${char.name}</strong>
      `;
      div.onclick = () => {
        selected.innerHTML = `<h3>Selected: ${char.name}</h3>
          <img src="${char.image}" alt="${char.name}" /><br>
          Power: ${char.power}`;
      };
      characterList.appendChild(div);
    });
  </script>
</body>
</html>
