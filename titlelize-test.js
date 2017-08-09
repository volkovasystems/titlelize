
const assert = require( "assert" );
const titlelize = require( "./titlelize.js" );

assert.equal( titlelize( "helloworld" ), "Helloworld", "should be equal to 'Helloworld'" );

assert.equal( titlelize( "hello-world" ), "Hello World", "should be equal to 'Hello World'" );

assert.equal( titlelize( "hello_world" ), "Hello World", "should be equal to 'Hello World'" );

assert.equal( titlelize( "helloWorld" ), "Hello World", "should be equal to 'Hello World'" );

assert.equal( titlelize( "hello world" ), "Hello World", "should be equal to 'Hello World'" );

console.log( "ok" );
