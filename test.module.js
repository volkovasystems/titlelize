"use strict";

/*;
	@test-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2017 Richeve Siodina Bebedor
		@email: richeve.bebedor@gmail.com

		Permission is hereby granted, free of charge, to any person obtaining a copy
		of this software and associated documentation files (the "Software"), to deal
		in the Software without restriction, including without limitation the rights
		to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
		copies of the Software, and to permit persons to whom the Software is
		furnished to do so, subject to the following conditions:

		The above copyright notice and this permission notice shall be included in all
		copies or substantial portions of the Software.

		THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
		IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
		FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
		AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
		LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
		OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
		SOFTWARE.
	@end-test-license

	@test-configuration:
		{
			"package": "titlelize",
			"path": "titlelize/test.module.js",
			"file": "test.module.js",
			"module": "test",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
				"Vinse Vinalon <vinsevinalon@gmail.com>"
			],
			"repository": "https://github.com/volkovasystems/titlelize.git"
		}
	@end-test-configuration

	@test-documentation:

	@end-test-documentation

	@include:
		{
			"assert": "should",
			"titlelize": "titlelize"
		}
	@end-include
*/

const assert = require( "should" );

//: @server:
const titlelize = require( "./titlelize.js" );
//: @end-server

//: @client:
const titlelize = require( "./titlelize.support.js" );
//: @end-client

//: @bridge:
const path = require( "path" );
//: @end-bridge

//: @server:

describe( "titlelize", ( ) => {
	
	describe( `"titlelize( "helloworld" )"`, ( ) => {
		it( "should have value 'Helloworld'", ( ) => {

			assert.equal( titlelize( "helloworld" ), "Helloworld");

		} );
	} );

	describe( `"titlelize( "hello-world" )"`, ( ) => {
		it( "should have value 'Hello World'", ( ) => {

			assert.equal( titlelize( "hello-world" ), "Hello World" );

		} );
	} );

	describe( `"titlelize( "hello_world" )"`, ( ) => {
		it( "should have value 'Hello World'", ( ) => {

			assert.equal( titlelize( "hello_world" ), "Hello World" );

		} );
	} );

	describe( `"titlelize( "helloWorld" ),"`, ( ) => {
		it( "should have value 'Hello World'" , ( ) => {

			assert.equal( titlelize( "helloWorld" ), "Hello World" );

		} );
	} );

	describe( `"titlelize( "hello world" )"`, ( ) => {
		it( "should have value 'Hello World'", ( ) => {

			assert.equal( titlelize( "hello world" ), "Hello World" );

		} );
	} );
	
} );


//: @end-server


//: @client: 

describe( "titlelize", ( ) => {
	
	describe( `"titlelize( "helloworld" )"`, ( ) => {
		it( "should have value 'Helloworld'", ( ) => {

			assert.equal( titlelize( "helloworld" ), "Helloworld");

		} );
	} );

	describe( `"titlelize( "hello-world" )"`, ( ) => {
		it( "should have value 'Hello World'", ( ) => {

			assert.equal( titlelize( "hello-world" ), "Hello World" );

		} );
	} );

	describe( `"titlelize( "hello_world" )"`, ( ) => {
		it( "should have value 'Hello World'", ( ) => {

			assert.equal( titlelize( "hello_world" ), "Hello World" );

		} );
	} );

	describe( `"titlelize( "helloWorld" ),"`, ( ) => {
		it( "should have value 'Hello World'" , ( ) => {

			assert.equal( titlelize( "helloWorld" ), "Hello World" );

		} );
	} );

	describe( `"titlelize( "hello world" )"`, ( ) => {
		it( "should have value 'Hello World'", ( ) => {

			assert.equal( titlelize( "hello world" ), "Hello World" );

		} );
	} );
	
} );


//: @end-client


//: @bridge:

describe( "titlelize", ( ) => {

	
	let directory = __dirname;
	let testBridge = path.resolve( directory, "bridge.html" );
	let bridgeURL = `file://${ testBridge }`;

	describe( "titlelize", ( ) => {
	
	describe( `"titlelize( "helloworld" )"`, ( ) => {
		it( "should have value 'Helloworld'", ( ) => {

			assert.equal(titlelize ( true, true ) );

		} );
	} );

	describe( `"titlelize( "hello-world" )"`, ( ) => {
		it( "should have value 'Hello World'", ( ) => {

			assert.equal(titlelize ( true, true ) );

		} );
	} );

	describe( `"titlelize( "hello_world" )"`, ( ) => {
		it( "should have value 'Hello World'", ( ) => {

			assert.equal(titlelize ( true, true ) );

		} );
	} );

	describe( `"titlelize( "helloWorld" ),"`, ( ) => {
		it( "should have value 'Hello World'" , ( ) => {

			assert.equal(titlelize ( true, true ) );

		} );
	} );

	describe( `"titlelize( "hello world" )"`, ( ) => {
		it( "should have value 'Hello World'", ( ) => {

			assert.equal(titlelize ( true, true ) );

		} );
	} );
	
} );

	
} );

//: @end-bridge

