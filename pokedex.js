const fetchPokemon = () => {
  const pokeNameInput = document.getElementById("pokeName");
  let pokeName = pokeNameInput.value.trim();
  pokeName = pokeName.toLowerCase();
  console.log(pokeName);
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
          return res.json();
        }
      })
      .then((data) => {
        if (data) {
          console.log(data);
          let pokeImg = data.sprites.front_default;
          pokeImage(pokeImg);
          console.log(pokeImg);
        }
      });
  }
};

const pokeImage = (url) => {
  const pokePhoto = document.getElementById("pokeImg");
  pokePhoto.src = url;
};
