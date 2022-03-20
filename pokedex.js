const fetchPokemon = () => {
  const pokeNameInput = document.getElementById("pokeName");
  let pokeName = pokeNameInput.value.trim();
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
          return res.json();

          
        }
      })
      .then((data) => {
        if (data) {
          console.log(data);
          let dataName = data.name;
          let dataImg = data.sprites.front_default;
          let dataTypes = data.types;
          addTypeButtons(dataTypes);
          let dataType = data.types[0].type.name.toUpperCase();
          let dataHeight = data.height;
          let dataWeight = data.weight;
          /*let dataStats = data.stats;
          console.log(dataStats);*/
          pokeObject = {
            name: dataName,
            image: dataImg,
            type: dataType,
            height: dataHeight,
            weight: dataWeight
          }
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
  /*const pokeType = document.getElementById("pokeTipo");
  pokeType.innerHTML = pokeObject.type;*/
};


const addTypeButtons = (types) => {
  const tipoContainer = document.getElementById("typeContent");
  pokeLength = types.length;
  console.log("array de: " + pokeLength);
  types.map(typeItem =>{
    let ntype = typeItem.type.name.toUpperCase();
    console.log(ntype);
    const newButton = document.createElement("button");
    newButton.classList.add("contentData");
    newButton.innerHTML = ntype;
    tipoContainer.appendChild(newButton);
  });
};

