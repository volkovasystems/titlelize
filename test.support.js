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

var assert = require("should");



//: @client:
var titlelize = require("./titlelize.support.js");
//: @end-client






//: @client:

describe("titlelize", function () {

	describe("`titlelize( 'helloworld' )`", function () {
		it("should be equal to 'Helloworld'", function () {

			assert.equal(titlelize("helloworld"), "Helloworld");

		});
	});

	describe("`titlelize( 'hello-world' )`", function () {
		it("should be equal to 'Hello World'", function () {

			assert.equal(titlelize("hello-world"), "Hello World");

		});
	});

	describe("`titlelize( 'hello_world' )`", function () {
		it("should be equal to 'Hello World'", function () {

			assert.equal(titlelize("hello_world"), "Hello World");

		});
	});

	describe("`titlelize( 'helloWorld' )`", function () {
		it("should be equal to 'Hello World'", function () {

			assert.equal(titlelize("helloWorld"), "Hello World");

		});
	});

	describe("`titlelize( 'hello world' )`", function () {
		it("should be equal to 'Hello World'", function () {

			assert.equal(titlelize("hello world"), "Hello World");

		});
	});

});


//: @end-client
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwidGl0bGVsaXplIiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsWUFBWUQsUUFBUyx3QkFBVCxDQUFsQjtBQUNBOzs7Ozs7O0FBT0E7O0FBRUFFLFNBQVUsV0FBVixFQUF1QixZQUFPOztBQUU3QkEsVUFBVSw2QkFBVixFQUF5QyxZQUFPO0FBQy9DQyxLQUFJLGlDQUFKLEVBQXVDLFlBQU87O0FBRTdDSixVQUFPSyxLQUFQLENBQWNILFVBQVcsWUFBWCxDQUFkLEVBQXlDLFlBQXpDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQyxVQUFVLDhCQUFWLEVBQTBDLFlBQU87QUFDaERDLEtBQUksa0NBQUosRUFBd0MsWUFBTzs7QUFFOUNKLFVBQU9LLEtBQVAsQ0FBY0gsVUFBVyxhQUFYLENBQWQsRUFBMEMsYUFBMUM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUFDLFVBQVUsOEJBQVYsRUFBMEMsWUFBTztBQUNoREMsS0FBSSxrQ0FBSixFQUF3QyxZQUFPOztBQUU5Q0osVUFBT0ssS0FBUCxDQUFjSCxVQUFXLGFBQVgsQ0FBZCxFQUEwQyxhQUExQzs7QUFFQSxHQUpEO0FBS0EsRUFORDs7QUFRQUMsVUFBVSw2QkFBVixFQUF5QyxZQUFPO0FBQy9DQyxLQUFJLGtDQUFKLEVBQXlDLFlBQU87O0FBRS9DSixVQUFPSyxLQUFQLENBQWNILFVBQVcsWUFBWCxDQUFkLEVBQXlDLGFBQXpDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBQyxVQUFVLDhCQUFWLEVBQTBDLFlBQU87QUFDaERDLEtBQUksa0NBQUosRUFBd0MsWUFBTzs7QUFFOUNKLFVBQU9LLEtBQVAsQ0FBY0gsVUFBVyxhQUFYLENBQWQsRUFBMEMsYUFBMUM7O0FBRUEsR0FKRDtBQUtBLEVBTkQ7O0FBUUEsQ0ExQ0Q7OztBQTZDQSIsImZpbGUiOiJ0ZXN0LnN1cHBvcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuLyo7XG5cdEB0ZXN0LWxpY2Vuc2U6XG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXG5cdFx0QG1pdC1saWNlbnNlXG5cblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXG5cblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxuXHRcdGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHNcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXG5cdFx0ZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxuXHRcdGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXG5cdFx0SU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxuXHRcdExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcblx0XHRTT0ZUV0FSRS5cblx0QGVuZC10ZXN0LWxpY2Vuc2VcblxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxuXHRcdHtcblx0XHRcdFwicGFja2FnZVwiOiBcInRpdGxlbGl6ZVwiLFxuXHRcdFx0XCJwYXRoXCI6IFwidGl0bGVsaXplL3Rlc3QubW9kdWxlLmpzXCIsXG5cdFx0XHRcImZpbGVcIjogXCJ0ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxuXHRcdFx0XSxcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy90aXRsZWxpemUuZ2l0XCJcblx0XHR9XG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXG5cblx0QHRlc3QtZG9jdW1lbnRhdGlvbjpcblxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxuXG5cdEBpbmNsdWRlOlxuXHRcdHtcblx0XHRcdFwiYXNzZXJ0XCI6IFwic2hvdWxkXCIsXG5cdFx0XHRcInRpdGxlbGl6ZVwiOiBcInRpdGxlbGl6ZVwiXG5cdFx0fVxuXHRAZW5kLWluY2x1ZGVcbiovXG5cbmNvbnN0IGFzc2VydCA9IHJlcXVpcmUoIFwic2hvdWxkXCIgKTtcblxuXG5cbi8vOiBAY2xpZW50OlxuY29uc3QgdGl0bGVsaXplID0gcmVxdWlyZSggXCIuL3RpdGxlbGl6ZS5zdXBwb3J0LmpzXCIgKTtcbi8vOiBAZW5kLWNsaWVudFxuXG5cblxuXG5cblxuLy86IEBjbGllbnQ6XG5cbmRlc2NyaWJlKCBcInRpdGxlbGl6ZVwiLCAoICkgPT4ge1xuXG5cdGRlc2NyaWJlKCBcImB0aXRsZWxpemUoICdoZWxsb3dvcmxkJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnSGVsbG93b3JsZCdcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0aXRsZWxpemUoIFwiaGVsbG93b3JsZFwiICksIFwiSGVsbG93b3JsZFwiKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cdGRlc2NyaWJlKCBcImB0aXRsZWxpemUoICdoZWxsby13b3JsZCcgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ0hlbGxvIFdvcmxkJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRpdGxlbGl6ZSggXCJoZWxsby13b3JsZFwiICksIFwiSGVsbG8gV29ybGRcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHRpdGxlbGl6ZSggJ2hlbGxvX3dvcmxkJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnSGVsbG8gV29ybGQnXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGl0bGVsaXplKCBcImhlbGxvX3dvcmxkXCIgKSwgXCJIZWxsbyBXb3JsZFwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXHRkZXNjcmliZSggXCJgdGl0bGVsaXplKCAnaGVsbG9Xb3JsZCcgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ0hlbGxvIFdvcmxkJ1wiICwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0aXRsZWxpemUoIFwiaGVsbG9Xb3JsZFwiICksIFwiSGVsbG8gV29ybGRcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblx0ZGVzY3JpYmUoIFwiYHRpdGxlbGl6ZSggJ2hlbGxvIHdvcmxkJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnSGVsbG8gV29ybGQnXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGl0bGVsaXplKCBcImhlbGxvIHdvcmxkXCIgKSwgXCJIZWxsbyBXb3JsZFwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxufSApO1xuXG5cbi8vOiBAZW5kLWNsaWVudFxuXG5cbiJdfQ==
//# sourceMappingURL=test.support.js.map
