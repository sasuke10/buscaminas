import React, { Component } from 'react';
import { v4 } from 'uuid';

function inicializaMatriz(){
    var tabla = [];
    for(var i = 0; i < 8; i++){
        tabla[i] = [0,0,0,0,0,0,0,0];
    }
    return tabla;
}

function crearTablero(){
    let aux = [];
    for(var i = 0; i < 8; i++){
        for(var j = 0; j < 8; j++){
            const val = i + "" + j;
            aux = aux.concat(val);
        }
    }
    return aux;
}

function generarBombas(tablero){
    var fil = 0;
    var col = 0;

    fil = Math.floor((Math.random()*7)+0);
    col = Math.floor((Math.random()*7)+0);

    for(var i = 0; i < 8; i++){
        while (tablero[fil][col] == "*"){
            fil = Math.floor((Math.random()*7)+0);
            col = Math.floor((Math.random()*7)+0);
        }
        tablero[fil][col] = "*";
    }

    return tablero;
}

function colocaNumeroBombas(vari,varj,fini,finj,tablero){
    for(var i = vari; i <= fini; i++){
        for(var j = varj; j <= finj; j++){
           if(tablero[i][j] != "*"){
                tablero[i][j] = (parseInt(tablero[i][j])+1);
           }
        }
    }
}

function bombasAlrededor(tablero){
    for(var i = 0; i < 8; i++){
        for(var j = 0; j < 8; j++){
           if(tablero[i][j] == "*"){
                if(i == 0 && j == 0){
                    colocaNumeroBombas(i, j, i + 1, j + 1,tablero);
                }
                else if (i == 0 && (j > 0 && j < 7)) {
                    colocaNumeroBombas(i, j - 1, i + 1, j + 1,tablero);
                }
                else if(i == 0 && j == 7){
                    colocaNumeroBombas(i, j - 1, i + 1, j,tablero);
                }
                else if(j == 7 && (i > 0 && i < 7)){
                    colocaNumeroBombas(i - 1, j - 1, i + 1, j,tablero);
                }
                else if(i == 7 && j == 7){
                    colocaNumeroBombas(i - 1, j - 1, i, j,tablero);
                }
                else if(i == 7 && (j > 0 && j < 7)){
                    colocaNumeroBombas(i - 1, j - 1, i, j + 1,tablero);
                }
                else if(i == 7 && j == 0){
                    colocaNumeroBombas(i - 1, j, i, j + 1,tablero);
                }
                else if(j == 0 && (i > 0 && i < 7)){
                    colocaNumeroBombas(i - 1, j, i + 1, j + 1,tablero);
                }else{
                    colocaNumeroBombas(i - 1, j - 1, i + 1, j + 1,tablero);
                }
           }
        }
    }

    return tablero;
}

function createBomb() {
  const x = Math.floor(Math.random() * 10);

  return x > 5;
}

function createMatriz(num) {
  const row = new Array(num).fill({});
  const column = new Array(num).fill(row);

  return column;
}

function generateBombs(matriz) {
    let auxMatriz = [];
    matriz.map((item, i) => item.map((subItem, j) => {
        auxMatriz = auxMatriz.concat({ isBomb: createBomb(), id: `${i}${j}` })
    }));
    return auxMatriz;

}

export default class Welcome extends Component {
  render() {
    //   console.log('hola');
    //   console.log(crearTablero());
    //   var minas = inicializaMatriz();
    //   console.log(minas);
    //   const tableroMinado = generarBombas(inicializaMatriz());
    //   console.log(bombasAlrededor(tableroMinado));
    const matriz = createMatriz(8);
    const matrizWithBombs = generateBombs(matriz);
    console.log(matrizWithBombs);
    return (
      <div className='buscaminas'>
      </div>
    );
  }
}