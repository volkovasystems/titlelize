
const assert = require( "assert" );
const titlelize = require( "./titlelize.js" );

assert.equal( titlelize( "helloworld" ), "Helloworld", "should have value 'Helloworld'" );

assert.equal( titlelize( "hello-world" ), "Hello World", "should have value 'Hello World'" );

assert.equal( titlelize( "hello_world" ), "Hello World", "should have value 'Hello World'" );

assert.equal( titlelize( "helloWorld" ), "Hello World", "should have value 'Hello World'" );

assert.equal( titlelize( "hello world" ), "Hello World", "should have value 'Hello World'" );

console.log( "ok" );
