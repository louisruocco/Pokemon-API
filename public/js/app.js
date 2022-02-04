const pokemonDiv = document.querySelector(".pokemon");

window.addEventListener("load", async () => {
    const url = "http://localhost:3000/pokemon";
    const response = await fetch(url);
    const data = await response.json();
      
    data.forEach(pokemon => {
        const name = document.createElement("a");
        name.textContent = pokemon.name;
        pokemonDiv.appendChild(name);
    })
})