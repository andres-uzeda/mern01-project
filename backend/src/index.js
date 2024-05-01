require('dotenv').config();
const app = require('./app');
require('./database');

async function main(){
    // avoid callback function
    //app.listen(4000, () => console.log( 'server on port 4000' ));
    await app.listen(process.env.PORT || app.get('port'));
    console.log('server on port 4000');
}

main();