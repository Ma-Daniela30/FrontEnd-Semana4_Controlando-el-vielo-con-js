var tamanio, movimientos;
const fetchPokemon = () => {
  const pokeNameInput = document.getElementById("pokemon");
  let pokeName = pokeNameInput.value;
  if (pokeName != "" && pokeName != null) {
    const contenido = document.getElementById("info");
    const pokeNameInput = document.getElementById("pokemon");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url)
      .then((res) => {
        if (res.status != "200") {
          console.log(res);
          pokeImage("./resource/images/error_404.jpg");
        } else {
          return res.json();
        }
      })
      .then((data) => {
        if (data) {
          contenido.style.display = "block";
          console.log(data);
          let pokeImg = data.sprites.front_default;
          let noPoke = data.id;
          let name = data.name;
          let tama = data.types.length;
          let type = data.types;
          let tam_mov = data.moves.length;
          let movimiento = data.moves;
          let estadistica = data.stats;
          console.log(data);
          tamanio = tam_mov;
          movimientos = movimiento;
          pokeImage(pokeImg);
          numeroPoke(noPoke);
          pokeNombre(name);
          pokeTipo(tama, type);
          pokeHabilidad(tam_mov, movimiento);
          pokeEstadistica(estadistica);
          console.log(pokeImg);
        }
      });
  } else {
    alert("Favor de colocar el nombre del pokemon a buscar");
  }
};

const pokeImage = (url) => {
  const pokePhoto = document.getElementById("pokeImg");
  pokePhoto.src = url;
};

const pokeTipo = (tam, name) => {
  var nType = "";
  const pokeType = document.getElementById("tipo");
  for (let i = 0; i < tam; i++) {
    if (i < tam - 1) {
      nType += name[i].type.name + " / ";
    } else {
      nType += name[i].type.name;
    }
  }

  pokeType.innerHTML = nType.toUpperCase();
};
const pokeHabilidad = (tam, name) => {
  var nMove = "";
  var nMove2 = "";
  const listau = document.getElementById("lista_pu");
  const listad = document.getElementById("lista_pd");
  if (tam < 9) {
    for (let i = 0; i < tam; i++) {
      if (i == 0) {
        nMove += "<li>" + name[i].move.name + "</li>";
      } else {
        if (i % 2 == 0) {
          nMove2 += "<li>" + name[i].move.name + "</li>";
        } else {
          nMove += "<li>" + name[i].move.name + "</li>";
        }
      }
    }
  } else {
    for (let i = 0; i < 10; i++) {
      if (i == 0) {
        nMove += "<li>" + name[i].move.name + "</li>";
      } else {
        if (i % 2 == 0) {
          nMove2 += "<li>" + name[i].move.name + "</li>";
        } else {
          nMove += "<li>" + name[i].move.name + "</li>";
        }
      }
    }
    nMove2 +=
      "<button type='button' class='btn btn-info btn-sm' data-bs-toggle='modal' data-bs-target='#exampleModal' onclick='pokeHabilidadCompleta()'>ver más</button>";
  }
  listad.innerHTML = nMove2;
  listau.innerHTML = nMove;
};

const pokeEstadistica = (name) => {
  var aStat = "";
  var dStat = "";
  var vStat = "";
  const attake = document.getElementById("ataque");
  const defense = document.getElementById("defensa");
  const life = document.getElementById("vida");
  for (let i = 0; i < 3; i++) {
    switch (i) {
      case 0:
        aStat = name[i].base_stat;
        break;
      case 1:
        dStat = name[i].base_stat;
        break;
      case 2:
        vStat = name[i].base_stat;
        break;
    }
  }
  attake.innerHTML = aStat;
  defense.innerHTML = dStat;
  life.innerHTML = vStat;
};

const pokeNombre = (name) => {
  const pokeNom = document.getElementById("nom");
  pokeNom.innerHTML = name.toUpperCase();
};

const pokeHabilidadCompleta = () => {
  console.log(movimientos);
  var nMove = "";
  var nMove2 = "";
  const listau = document.getElementById("lu");
  const listad = document.getElementById("ld");
  if (tamanio < 9) {
    for (let i = 0; i < tamanio; i++) {
      if (i == 0) {
        nMove += "<li>" + movimientos[i].move.name + "</li>";
      } else {
        if (i % 2 == 0) {
          nMove2 += "<li>" + movimientos[i].move.name + "</li>";
        } else {
          nMove += "<li>" + movimientos[i].move.name + "</li>";
        }
      }
    }
  } else {
    for (let i = 0; i < tamanio; i++) {
      if (i == 0) {
        nMove += "<li>" + movimientos[i].move.name + "</li>";
      } else {
        if (i % 2 == 0) {
          nMove2 += "<li>" + movimientos[i].move.name + "</li>";
        } else {
          nMove += "<li>" + movimientos[i].move.name + "</li>";
        }
      }
    }
  }
  listad.innerHTML = nMove2;
  listau.innerHTML = nMove;
};

const numeroPoke = (name) => {
  const no = document.getElementById("no_poke");
  no.innerHTML = name;
};
