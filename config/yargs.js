const argv = require( 'yargs' )
    .option( 'b', {
        alias: 'base',
        type: 'number',
        desc: "Table's base",
        demandOption: true
    } )
    .option( 'l', {
        alias: 'listar',
        desc: 'List table or not',
        type: 'boolean',
        default: false
    } )
    .option( 'h', {
        alias: 'hasta',
        desc: 'Table until',
        type: 'number',
        default: 10
    } )
    .check( ( argv, options ) => {
        if( isNaN( argv.base ) ) {
            throw new Error( 'La base debe ser un numero' );
        }
        return true;
    } )

    .argv;

module.exports = argv;