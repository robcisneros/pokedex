const fetchPokemon = () => {
  const pokeNameInput = document.getElementById("pokemonName");
  let pokeName = pokeNameInput.value.trim();
  pokeNameInput.value = "";
  pokeName = pokeName.toLowerCase();

  if (pokeName.length <= 0) {
    return;
  } else {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url)
      .then((res) => {
        if (res.status != "200") {
          console.log(res);
          pokeImage("./images/pokemon-sad.gif");
        } else {
          const tipoContainer = document.getElementById("typeContent");
          tipoContainer.innerHTML = "";
          const pokeName = document.getElementById("pokeName");
          pokeName.innerHTML = "";

          return res.json();
        }
      })
      .then((data) => {
        if (data) {
          console.log(data);
          let dataName = data.name;
          let dataImg = data.sprites.front_default;
          let dataTypes = data.types;

          let dataHeight = data.height;
          let dataWeight = data.weight;
          let dataStats = data.stats;
          pokeObject = {
            name: dataName,
            image: dataImg,
            types: dataTypes,
            height: dataHeight,
            weight: dataWeight,
            stats: dataStats,
          };
          pokeData(pokeObject);
        }
      });
  }
};

const pokeImage = (image) => {
  const pokePhoto = document.getElementById("pokeImg");
  pokePhoto.src = image;
};

const pokeData = (pokeObject) => {
  const pokePhoto = document.getElementById("pokeImg");
  pokePhoto.src = pokeObject.image;

  const pokeName = document.getElementById("pokeName");
  let newButton = document.createElement("button");
  newButton.classList.add("contentItem");
  newButton.innerHTML = pokeObject.name.toUpperCase();
  pokeName.appendChild(newButton);

  addStatsButtons(pokeObject.stats);
  addTypeButtons(pokeObject.types);
};

const addTypeButtons = (types) => {
  const tipoContainer = document.getElementById("typeContent");
  pokeLength = types.length;
  types.map((typeItem) => {
    let ntype = typeItem.type.name.toUpperCase();
    let newButton = document.createElement("button");
    newButton.classList.add("contentItem");
    newButton.innerHTML = ntype;
    tipoContainer.appendChild(newButton);
  });
};

const addStatsButtons = (stats) => {
  const statsContainer = document.getElementById("statsContent");
  
  let hpStat = "HP:" + stats[0].base_stat;
  let newButton0 = document.createElement("button");
    newButton0.classList.add("statsItem");
    newButton0.innerHTML = hpStat;
    statsContainer.appendChild(newButton0);
  let attackStat = "ATK:" + stats[1].base_stat;
  let newButton1 = document.createElement("button");
    newButton1.classList.add("statsItem");
    newButton1.innerHTML = attackStat;
    statsContainer.appendChild(newButton1);
  let defenseStat = "DEF:" + stats[2].base_stat;
  let newButton2 = document.createElement("button");
    newButton2.classList.add("statsItem");
    newButton2.innerHTML = defenseStat;
    statsContainer.appendChild(newButton2);
  let spAttackStat = "SP.ATK:" + stats[3].base_stat;
  let newButton3 = document.createElement("button");
    newButton3.classList.add("statsItem");
    newButton3.innerHTML = spAttackStat;
    statsContainer.appendChild(newButton3);
  let spDefenseStat = "SP.DEF:" + stats[4].base_stat;
  let newButton4 = document.createElement("button");
    newButton4.classList.add("statsItem");
    newButton4.innerHTML = spDefenseStat;
    statsContainer.appendChild(newButton4);
  let speedStat = "SPEED:" + stats[5].base_stat;
  let newButton5 = document.createElement("button");
    newButton5.classList.add("statsItem");
    newButton5.innerHTML = speedStat;
    statsContainer.appendChild(newButton5);
  
    
    /*
    let newButton = document.createElement("button");
    newButton.classList.add("contentItem");
    newButton.innerHTML = ntype;
    tipoContainer.appendChild(newButton);
    */
  
};
