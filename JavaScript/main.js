import { pokemones } from "./api.js";

let padre = document.querySelector(".contenedor");

pokemones.forEach((i) => {
  let contenedor = document.createElement("div");
  contenedor.classList.add("Tarjetas");

  contenedor.innerHTML = `
        <img src="${i.imagen}" alt="${i.nombre}">
        <h1>Nombre: ${i.nombre}</h1>
        <h2>Elemento: ${i.elemento}</h2>
        <h3>Habilidad: ${i.habilidad}</h3>
        <h4>Codigo: ${i.codigo}</h4>
    
    `;
  padre.appendChild(contenedor);
});

