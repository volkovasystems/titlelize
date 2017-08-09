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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3Quc3VwcG9ydC5qcyJdLCJuYW1lcyI6WyJhc3NlcnQiLCJyZXF1aXJlIiwidGl0bGVsaXplIiwiZGVzY3JpYmUiLCJpdCIsImVxdWFsIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXVEQSxJQUFNQSxTQUFTQyxRQUFTLFFBQVQsQ0FBZjs7OztBQUlBO0FBQ0EsSUFBTUMsWUFBWUQsUUFBUyx3QkFBVCxDQUFsQjtBQUNBOzs7Ozs7O0FBT0E7O0FBRUFFLFNBQVUsV0FBVixFQUF1QixZQUFPOztBQUU3QkEsVUFBVSw2QkFBVixFQUF5QyxZQUFPO0FBQy9DQyxLQUFJLGlDQUFKLEVBQXVDLFlBQU87O0FBRTdDSixVQUFPSyxLQUFQLENBQWNILFVBQVcsWUFBWCxDQUFkLEVBQXlDLFlBQXpDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSw4QkFBVixFQUEwQyxZQUFPO0FBQ2hEQyxLQUFJLGtDQUFKLEVBQXdDLFlBQU87O0FBRTlDSixVQUFPSyxLQUFQLENBQWNILFVBQVcsYUFBWCxDQUFkLEVBQTBDLGFBQTFDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSw4QkFBVixFQUEwQyxZQUFPO0FBQ2hEQyxLQUFJLGtDQUFKLEVBQXdDLFlBQU87O0FBRTlDSixVQUFPSyxLQUFQLENBQWNILFVBQVcsYUFBWCxDQUFkLEVBQTBDLGFBQTFDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSw2QkFBVixFQUF5QyxZQUFPO0FBQy9DQyxLQUFJLGtDQUFKLEVBQXlDLFlBQU87O0FBRS9DSixVQUFPSyxLQUFQLENBQWNILFVBQVcsWUFBWCxDQUFkLEVBQXlDLGFBQXpDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOzs7QUFTQUMsVUFBVSw4QkFBVixFQUEwQyxZQUFPO0FBQ2hEQyxLQUFJLGtDQUFKLEVBQXdDLFlBQU87O0FBRTlDSixVQUFPSyxLQUFQLENBQWNILFVBQVcsYUFBWCxDQUFkLEVBQTBDLGFBQTFDOztBQUVBLEdBSkQ7QUFLQSxFQU5EOztBQVFBLENBOUNEOzs7QUFpREEiLCJmaWxlIjoidGVzdC5zdXBwb3J0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qO1xuXHRAdGVzdC1saWNlbnNlOlxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxuXHRcdEBtaXQtbGljZW5zZVxuXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxuXHRcdEBlbWFpbDogcmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVxuXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxuXHRcdG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlIFwiU29mdHdhcmVcIiksIHRvIGRlYWxcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxuXHRcdGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXQgcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpc1xuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG5cblx0XHRUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZCBpbiBhbGxcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuXG5cdFx0VEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxuXHRcdEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXG5cdFx0U09GVFdBUkUuXG5cdEBlbmQtdGVzdC1saWNlbnNlXG5cblx0QHRlc3QtY29uZmlndXJhdGlvbjpcblx0XHR7XG5cdFx0XHRcInBhY2thZ2VcIjogXCJ0aXRsZWxpemVcIixcblx0XHRcdFwicGF0aFwiOiBcInRpdGxlbGl6ZS90ZXN0Lm1vZHVsZS5qc1wiLFxuXHRcdFx0XCJmaWxlXCI6IFwidGVzdC5tb2R1bGUuanNcIixcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcblx0XHRcdFwiZU1haWxcIjogXCJyaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXCIsXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxuXHRcdFx0XHRcIlZpbnNlIFZpbmFsb24gPHZpbnNldmluYWxvbkBnbWFpbC5jb20+XCJcblx0XHRcdF0sXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvdGl0bGVsaXplLmdpdFwiXG5cdFx0fVxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxuXG5cdEB0ZXN0LWRvY3VtZW50YXRpb246XG5cblx0QGVuZC10ZXN0LWRvY3VtZW50YXRpb25cblxuXHRAaW5jbHVkZTpcblx0XHR7XG5cdFx0XHRcImFzc2VydFwiOiBcInNob3VsZFwiLFxuXHRcdFx0XCJ0aXRsZWxpemVcIjogXCJ0aXRsZWxpemVcIlxuXHRcdH1cblx0QGVuZC1pbmNsdWRlXG4qL1xuXG5jb25zdCBhc3NlcnQgPSByZXF1aXJlKCBcInNob3VsZFwiICk7XG5cblxuXG4vLzogQGNsaWVudDpcbmNvbnN0IHRpdGxlbGl6ZSA9IHJlcXVpcmUoIFwiLi90aXRsZWxpemUuc3VwcG9ydC5qc1wiICk7XG4vLzogQGVuZC1jbGllbnRcblxuXG5cblxuXG5cbi8vOiBAY2xpZW50OlxuXG5kZXNjcmliZSggXCJ0aXRsZWxpemVcIiwgKCApID0+IHtcblxuXHRkZXNjcmliZSggXCJgdGl0bGVsaXplKCAnaGVsbG93b3JsZCcgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ0hlbGxvd29ybGQnXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGl0bGVsaXplKCBcImhlbGxvd29ybGRcIiApLCBcIkhlbGxvd29ybGRcIik7XG5cblx0XHR9ICk7XG5cdH0gKTtcblxuXG5cdGRlc2NyaWJlKCBcImB0aXRsZWxpemUoICdoZWxsby13b3JsZCcgKWBcIiwgKCApID0+IHtcblx0XHRpdCggXCJzaG91bGQgYmUgZXF1YWwgdG8gJ0hlbGxvIFdvcmxkJ1wiLCAoICkgPT4ge1xuXG5cdFx0XHRhc3NlcnQuZXF1YWwoIHRpdGxlbGl6ZSggXCJoZWxsby13b3JsZFwiICksIFwiSGVsbG8gV29ybGRcIiApO1xuXG5cdFx0fSApO1xuXHR9ICk7XG5cblxuXHRkZXNjcmliZSggXCJgdGl0bGVsaXplKCAnaGVsbG9fd29ybGQnIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdIZWxsbyBXb3JsZCdcIiwgKCApID0+IHtcblxuXHRcdFx0YXNzZXJ0LmVxdWFsKCB0aXRsZWxpemUoIFwiaGVsbG9fd29ybGRcIiApLCBcIkhlbGxvIFdvcmxkXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHRpdGxlbGl6ZSggJ2hlbGxvV29ybGQnIClgXCIsICggKSA9PiB7XG5cdFx0aXQoIFwic2hvdWxkIGJlIGVxdWFsIHRvICdIZWxsbyBXb3JsZCdcIiAsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGl0bGVsaXplKCBcImhlbGxvV29ybGRcIiApLCBcIkhlbGxvIFdvcmxkXCIgKTtcblxuXHRcdH0gKTtcblx0fSApO1xuXG5cblx0ZGVzY3JpYmUoIFwiYHRpdGxlbGl6ZSggJ2hlbGxvIHdvcmxkJyApYFwiLCAoICkgPT4ge1xuXHRcdGl0KCBcInNob3VsZCBiZSBlcXVhbCB0byAnSGVsbG8gV29ybGQnXCIsICggKSA9PiB7XG5cblx0XHRcdGFzc2VydC5lcXVhbCggdGl0bGVsaXplKCBcImhlbGxvIHdvcmxkXCIgKSwgXCJIZWxsbyBXb3JsZFwiICk7XG5cblx0XHR9ICk7XG5cdH0gKTtcblx0XG59ICk7XG5cblxuLy86IEBlbmQtY2xpZW50XG5cblxuIl19
//# sourceMappingURL=test.support.js.map
