const pokemonDiv = document.querySelector(".pokemon");

window.addEventListener("load", async () => {
    const url = "http://localhost:3000/pokemon";
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data)
    
    const name = document.createElement("a");
    name.textContent = data[0].name;
    pokemonDiv.appendChild(name);
})