
fetch("https://pokeapi.co/api/v2/pokemon/1")
.then(res =>(res.json()))
.then(data=>{
    let element = document.getElementById("element")
    element.innerHTML =
    `<p> Nombre del pokemon: ${data.name}</p>
    <p>posicion: ${data.order}</p>
   imagen <img src=  '${data.sprites.front_default}'> `
}).catch(e=>console.log(e))


