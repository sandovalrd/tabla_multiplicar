const fs = require('fs');
const colors = require('colors');


const listarTablaMultiplicar = async(base, limite) => {

    let data = '';

    if (!Number(base)) {
        throw `El parametro ${base} no es un número!`
    }
    console.log(`Tabla del ${base} hasta ${limite}`.red);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} X ${i} = ${base * i}`.green);
    }


    return `tabla ${base} hasta ${limite}`;
}

const crearTablaMultiplicar = async(base) => {

    let data = '';

    if (!Number(base)) {
        throw `El parametro ${base} no es un número!`
    }

    for (let i = 1; i <= 10; i++) {
        data += (`${base} X ${i} = ${base * i}\n`);
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
        if (err) throw err;
    });
    return `tabla-${base}.txt`;
}

module.exports = {
    crearTablaMultiplicar,
    listarTablaMultiplicar
}