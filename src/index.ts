let nroVector1: number[] = new Array(6);
let nroVector2: number[] = new Array(6);
let nro: number;

for (let indice = 0; indice < 6; indice++) {
  nro = Number(
    prompt(
      "Indique  número que desea incorporar en la posición ${indice} Para el Vector 1: "
    )
  );
  nroVector1[indice] = nro;
}

for (let indice = 0; indice < 6; indice++) {
  nro = Number(
    prompt(
      "Indique un número  que desea incorporar en la posición ${indice} Para el Vector 2: "
    )
  );
  nroVector2[indice] = nro;
}

for (let indice = 0; indice < 6; indice++) {
  console.log(
    "la suma de vectores es ",
    nroVector1[indice] + nroVector2[indice]
  );
}
