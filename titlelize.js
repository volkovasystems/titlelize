"use strict";

/*;
	@module-license:
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
	@end-module-license

	@module-configuration:
		{
			"package": "titlelize",
			"path": "titlelize/titlelize.js",
			"file": "titlelize.js",
			"module": "titlelize",
			"author": "Richeve S. Bebedor",
			"contributors": [
				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>"
			],
			"eMail": "richeve.bebedor@gmail.com",
			"repository": "https://github.com/volkovasystems/titlelize.git",
			"test": "titlelize-test.js",
			"global": true
		}
	@end-module-configuration

	@module-documentation:
		Transform any human readable alphanumeric string divided by certain
			characters into space separated first letter uppercase form.
	@end-module-documentation

	@include:
		{
			"disdo": "disdo",
			"falzy": "falzy",
			"protype": "protype"
		}
	@end-include
*/

const disdo = require( "disdo" );
const falzy = require( "falzy" );
const protype = require( "protype" );

const TERM_PATTERN = /^[a-z]|\s[a-z]/g;

const titlelize = function titlelize( text ){
	/*;
		@meta-configuration:
			{
				"text:required": "string"
			}
		@end-meta-configuration
	*/

	if( falzy( text ) || !protype( text, STRING ) ){
		return text;
	}

	return disdo( text ).toLowerCase( )
		.replace( TERM_PATTERN, ( match ) => match.toUpperCase( ) );
};

module.exports = titlelize;
