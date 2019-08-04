const { crearTablaMultiplicar, listarTablaMultiplicar } = require('./multiplucar/Multiplicar');
const argv = require('./config/Yargs').argv;
const colors = require('colors');

const comando = argv._[0];
const { base, limite } = argv;

switch (comando) {
    case 'crear':
        crearTablaMultiplicar(base)
            .then(archivo => console.log(`Archivo creado: ${archivo.blue}`))
            .catch(err => console.log(err));
        break;
    case 'listar':
        listarTablaMultiplicar(base, limite)
            .then(archivo => console.log(`Tabla listada!`.blue))
            .catch(err => console.log(err));
        break;
    default:
        console.log('No existe comando');
        break;

}