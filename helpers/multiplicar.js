const fs = require( 'fs' );
const colors = require( 'colors' );

const createTableFile = async ( base, list, until ) => {

    try {

        let output, consola = '';

        for( let i = 1; i <= until; i++ ) {
            output += `${ base } x ${ i } = ${ base * i }\n`;
            consola += `${ base } ${ 'x'.green } ${ i } ${ '='.green } ${ base * i }\n`;
        }
        if( list ) {
            console.log( '========================='.green );
            console.log( '      Tabla del:'.green, colors.blue( base ), 'hasta el '.green + colors.blue( until ) );
            console.log( '========================='.green );
            console.log( consola );
        }
        fs.writeFileSync( `./salida/table-${ base }.txt`, output );

        return ( `Table-${ base }.txt` );

    } catch( err ) {
        throw err
    }
}

module.exports = {
    createTableFile
}