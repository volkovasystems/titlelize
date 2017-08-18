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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwidGl0bGVsaXplIiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsWUFBWUQsUUFBUyx3QkFBVCxDQUFsQjtBQUNBOzs7Ozs7O0FBT0E7O0FBRUFFLFNBQVUsV0FBVixFQUF1QixZQUFPOztBQUU3QkEsVUFBVSw2QkFBVixFQUF5QyxZQUFPO0FBQy9DQyxLQUFJLGlDQUFKLEVBQXVDLFlBQU87O0FBRTdDSixVQUFPSyxLQUFQLENBQWNILFVBQVcsWUFBWCxDQUFkLEVBQXlDLFlBQXpDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSw4QkFBVixFQUEwQyxZQUFPO0FBQ2hEQyxLQUFJLGtDQUFKLEVBQXdDLFlBQU87O0FBRTlDSixVQUFPSyxLQUFQLENBQWNILFVBQVcsYUFBWCxDQUFkLEVBQTBDLGFBQTFDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSw4QkFBVixFQUEwQyxZQUFPO0FBQ2hEQyxLQUFJLGtDQUFKLEVBQXdDLFlBQU87O0FBRTlDSixVQUFPSyxLQUFQLENBQWNILFVBQVcsYUFBWCxDQUFkLEVBQTBDLGFBQTFDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSw2QkFBVixFQUF5QyxZQUFPO0FBQy9DQyxLQUFJLGtDQUFKLEVBQXlDLFlBQU87O0FBRS9DSixVQUFPSyxLQUFQLENBQWNILFVBQVcsWUFBWCxDQUFkLEVBQXlDLGFBQXpDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSw4QkFBVixFQUEwQyxZQUFPO0FBQ2hEQyxLQUFJLGtDQUFKLEVBQXdDLFlBQU87O0FBRTlDSixVQUFPSyxLQUFQLENBQWNILFVBQVcsYUFBWCxDQUFkLEVBQTBDLGFBQTFDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBLENBOUNEOzs7QUFpREEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XHJcblxyXG4vKjtcclxuXHRAdGVzdC1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtdGVzdC1saWNlbnNlXHJcblxyXG5cdEB0ZXN0LWNvbmZpZ3VyYXRpb246XHJcblx0XHR7XHJcblx0XHRcdFwicGFja2FnZVwiOiBcInRpdGxlbGl6ZVwiLFxyXG5cdFx0XHRcInBhdGhcIjogXCJ0aXRsZWxpemUvdGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0ZXN0XCIsXHJcblx0XHRcdFwiYXV0aG9yXCI6IFwiUmljaGV2ZSBTLiBCZWJlZG9yXCIsXHJcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXHJcblx0XHRcdFwiY29udHJpYnV0b3JzXCI6IFtcclxuXHRcdFx0XHRcIkpvaG4gTGVub24gTWFnaGFub3kgPGpvaG5sZW5vbm1hZ2hhbm95QGdtYWlsLmNvbT5cIixcclxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcclxuXHRcdFx0XSxcclxuXHRcdFx0XCJyZXBvc2l0b3J5XCI6IFwiaHR0cHM6Ly9naXRodWIuY29tL3ZvbGtvdmFzeXN0ZW1zL3RpdGxlbGl6ZS5naXRcIlxyXG5cdFx0fVxyXG5cdEBlbmQtdGVzdC1jb25maWd1cmF0aW9uXHJcblxyXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XHJcblxyXG5cdEBlbmQtdGVzdC1kb2N1bWVudGF0aW9uXHJcblxyXG5cdEBpbmNsdWRlOlxyXG5cdFx0e1xyXG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxyXG5cdFx0XHRcInRpdGxlbGl6ZVwiOiBcInRpdGxlbGl6ZVwiXHJcblx0XHR9XHJcblx0QGVuZC1pbmNsdWRlXHJcbiovXHJcblxyXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XHJcblxyXG5cclxuXHJcbi8vOiBAY2xpZW50OlxyXG5jb25zdCB0aXRsZWxpemUgPSByZXF1aXJlKCBcIi4vdGl0bGVsaXplLnN1cHBvcnQuanNcIiApO1xyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuLy86IEBjbGllbnQ6XHJcblxyXG5kZXNjcmliZSggXCJ0aXRsZWxpemVcIiwgKCApID0+IHtcclxuXHJcblx0ZGVzY3JpYmUoIFwiYHRpdGxlbGl6ZSggJ2hlbGxvd29ybGQnIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ0hlbGxvd29ybGQnXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRpdGxlbGl6ZSggXCJoZWxsb3dvcmxkXCIgKSwgXCJIZWxsb3dvcmxkXCIpO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblxyXG5cclxuXHRkZXNjcmliZSggXCJgdGl0bGVsaXplKCAnaGVsbG8td29ybGQnIClgXCIsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ0hlbGxvIFdvcmxkJ1wiLCAoICkgPT4ge1xyXG5cclxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0aXRsZWxpemUoIFwiaGVsbG8td29ybGRcIiApLCBcIkhlbGxvIFdvcmxkXCIgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHJcblx0ZGVzY3JpYmUoIFwiYHRpdGxlbGl6ZSggJ2hlbGxvX3dvcmxkJyApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdIZWxsbyBXb3JsZCdcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCggdGl0bGVsaXplKCBcImhlbGxvX3dvcmxkXCIgKSwgXCJIZWxsbyBXb3JsZFwiICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImB0aXRsZWxpemUoICdoZWxsb1dvcmxkJyApYFwiLCAoICkgPT4ge1xyXG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdIZWxsbyBXb3JsZCdcIiAsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRpdGxlbGl6ZSggXCJoZWxsb1dvcmxkXCIgKSwgXCJIZWxsbyBXb3JsZFwiICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblxyXG5cdGRlc2NyaWJlKCBcImB0aXRsZWxpemUoICdoZWxsbyB3b3JsZCcgKWBcIiwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnSGVsbG8gV29ybGQnXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRpdGxlbGl6ZSggXCJoZWxsbyB3b3JsZFwiICksIFwiSGVsbG8gV29ybGRcIiApO1xyXG5cclxuXHRcdH0gKTtcclxuXHR9ICk7XHJcblx0XHJcbn0gKTtcclxuXHJcblxyXG4vLzogQGVuZC1jbGllbnRcclxuXHJcblxyXG4iXX0=
//# sourceMappingURL=test.support.js.map
