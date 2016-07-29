"use strict";

/*;
	@module-license:
		The MIT License (MIT)
		@mit-license

		Copyright (@c) 2016 Richeve Siodina Bebedor
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
	@end-module-license

	@module-configuration:
		{
			"package": "titlelize",
			"path": "titlelize/titlelize.js",
			"file": "titlelize.js",
			"module": "titlelize",
			"author": "Richeve S. Bebedor",
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/titlelize.git",
			"test": "titlelize-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:

	@end-module-documentation

	@include:
		{
			"harden": "harden"
			"disdo": "disdo"
		}
	@end-include
*/

if( typeof window == "undefined" ){
	var harden = require( "harden" );
	var disdo = require( "disdo" );
}

if( typeof window != "undefined" &&
	!( "harden" in window ) )
{
	throw new Error( "harden is not defined" );
}

if( typeof window != "undefined" &&
	!( "disdo" in window ) )
{
	throw new Error( "disdo is not defined" );
}

var titlelize = function titlelize( text ){
	/*;
		@meta-configuration:
			{
				"text:required": "string"
			}
		@end-meta-configuration
	*/

	if( !text ||
		text === "" ||
		typeof text != "string" )
	{
		return text;
	}

	if( titlelize.TEXT_PATTERN.test( text ) ){
		text = disdo( text );

		return text.replace( titlelize.TERM_PATTERN,
			function onReplaced( match ){
				return match.toUpperCase( );
			} );

	}else{
		return text;
	}
};

harden.bind( titlelize )
	( "TEXT_PATTERN", /^(?:[a-zA-Z0-9][a-zA-Z0-9]*[-_ ])*[a-zA-Z0-9][a-zA-Z0-9]*.*$/ );

harden.bind( titlelize )
	( "TERM_PATTERN", /^[a-zA-Z0-9]|([-_ ])[a-zA-Z0-9]/g );

if( typeof module != "undefined" ){
	module.exports = titlelize;
}
