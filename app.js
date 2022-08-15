const { createTableFile } = require( './helpers/multiplicar' );
require( 'colors' );
const argv = require( './config/yargs' )

console.clear();

console.log( 'Base con yargs: ', argv.b );

createTableFile( argv.b, argv.l, argv.h )
    .then( nameFile => console.log( nameFile.rainbow, 'creado' ) )
    .catch( err => console.log( err ) )
