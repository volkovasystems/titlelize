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





//: @bridge:
var path = require("path");
//: @end-bridge







//: @bridge:

describe("titlelize", function () {


	var directory = __dirname;
	var testBridge = path.resolve(directory, "bridge.html");
	var bridgeURL = "file://" + testBridge;

	describe("titlelize", function () {

		describe("\"titlelize( \"helloworld\" )\"", function () {
			it("should have value 'Helloworld'", function () {

				assert.equal(titlelize(true, true));

			});
		});

		describe("\"titlelize( \"hello-world\" )\"", function () {
			it("should have value 'Hello World'", function () {

				assert.equal(titlelize(true, true));

			});
		});

		describe("\"titlelize( \"hello_world\" )\"", function () {
			it("should have value 'Hello World'", function () {

				assert.equal(titlelize(true, true));

			});
		});

		describe("\"titlelize( \"helloWorld\" ),\"", function () {
			it("should have value 'Hello World'", function () {

				assert.equal(titlelize(true, true));

			});
		});

		describe("\"titlelize( \"hello world\" )\"", function () {
			it("should have value 'Hello World'", function () {

				assert.equal(titlelize(true, true));

			});
		});

	});


});

//: @end-bridge
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QuYnJpZGdlLmpzIl0sIm5hbWVzIjpbImFzc2VydCIsInJlcXVpcmUiLCJwYXRoIiwiZGVzY3JpYmUiLCJkaXJlY3RvcnkiLCJfX2Rpcm5hbWUiLCJ0ZXN0QnJpZGdlIiwicmVzb2x2ZSIsImJyaWRnZVVSTCIsIml0IiwiZXF1YWwiLCJ0aXRsZWxpemUiXSwibWFwcGluZ3MiOiJBQUFBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBdURBLElBQU1BLFNBQVNDLFFBQVMsUUFBVCxDQUFmOzs7Ozs7QUFNQTtBQUNBLElBQU1DLE9BQU9ELFFBQVMsTUFBVCxDQUFiO0FBQ0E7Ozs7Ozs7O0FBUUE7O0FBRUFFLFNBQVUsV0FBVixFQUF1QixZQUFPOzs7QUFHN0IsS0FBSUMsWUFBWUMsU0FBaEI7QUFDQSxLQUFJQyxhQUFhSixLQUFLSyxPQUFMLENBQWNILFNBQWQsRUFBeUIsYUFBekIsQ0FBakI7QUFDQSxLQUFJSSx3QkFBdUJGLFVBQTNCOztBQUVBSCxVQUFVLFdBQVYsRUFBdUIsWUFBTzs7QUFFOUJBLDhDQUF5QyxZQUFPO0FBQy9DTSxNQUFJLGdDQUFKLEVBQXNDLFlBQU87O0FBRTVDVCxXQUFPVSxLQUFQLENBQWFDLFVBQVksSUFBWixFQUFrQixJQUFsQixDQUFiOztBQUVBLElBSkQ7QUFLQSxHQU5EOztBQVFBUiwrQ0FBMEMsWUFBTztBQUNoRE0sTUFBSSxpQ0FBSixFQUF1QyxZQUFPOztBQUU3Q1QsV0FBT1UsS0FBUCxDQUFhQyxVQUFZLElBQVosRUFBa0IsSUFBbEIsQ0FBYjs7QUFFQSxJQUpEO0FBS0EsR0FORDs7QUFRQVIsK0NBQTBDLFlBQU87QUFDaERNLE1BQUksaUNBQUosRUFBdUMsWUFBTzs7QUFFN0NULFdBQU9VLEtBQVAsQ0FBYUMsVUFBWSxJQUFaLEVBQWtCLElBQWxCLENBQWI7O0FBRUEsSUFKRDtBQUtBLEdBTkQ7O0FBUUFSLCtDQUEwQyxZQUFPO0FBQ2hETSxNQUFJLGlDQUFKLEVBQXdDLFlBQU87O0FBRTlDVCxXQUFPVSxLQUFQLENBQWFDLFVBQVksSUFBWixFQUFrQixJQUFsQixDQUFiOztBQUVBLElBSkQ7QUFLQSxHQU5EOztBQVFBUiwrQ0FBMEMsWUFBTztBQUNoRE0sTUFBSSxpQ0FBSixFQUF1QyxZQUFPOztBQUU3Q1QsV0FBT1UsS0FBUCxDQUFhQyxVQUFZLElBQVosRUFBa0IsSUFBbEIsQ0FBYjs7QUFFQSxJQUpEO0FBS0EsR0FORDs7QUFRQSxFQTFDQTs7O0FBNkNBLENBcEREOztBQXNEQSIsImZpbGUiOiJ0ZXN0LmJyaWRnZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QHRlc3QtbGljZW5zZTpcclxuXHRcdFRoZSBNSVQgTGljZW5zZSAoTUlUKVxyXG5cdFx0QG1pdC1saWNlbnNlXHJcblxyXG5cdFx0Q29weXJpZ2h0IChAYykgMjAxNyBSaWNoZXZlIFNpb2RpbmEgQmViZWRvclxyXG5cdFx0QGVtYWlsOiByaWNoZXZlLmJlYmVkb3JAZ21haWwuY29tXHJcblxyXG5cdFx0UGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weVxyXG5cdFx0b2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGUgXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbFxyXG5cdFx0aW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0c1xyXG5cdFx0dG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbFxyXG5cdFx0Y29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdCBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzXHJcblx0XHRmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlIGZvbGxvd2luZyBjb25kaXRpb25zOlxyXG5cclxuXHRcdFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluIGFsbFxyXG5cdFx0Y29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cclxuXHJcblx0XHRUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTIE9SXHJcblx0XHRJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GIE1FUkNIQU5UQUJJTElUWSxcclxuXHRcdEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRVxyXG5cdFx0QVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSwgREFNQUdFUyBPUiBPVEhFUlxyXG5cdFx0TElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUiBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSxcclxuXHRcdE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFXHJcblx0XHRTT0ZUV0FSRS5cclxuXHRAZW5kLXRlc3QtbGljZW5zZVxyXG5cclxuXHRAdGVzdC1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJ0aXRsZWxpemVcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwidGl0bGVsaXplL3Rlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwiZmlsZVwiOiBcInRlc3QubW9kdWxlLmpzXCIsXHJcblx0XHRcdFwibW9kdWxlXCI6IFwidGVzdFwiLFxyXG5cdFx0XHRcImF1dGhvclwiOiBcIlJpY2hldmUgUy4gQmViZWRvclwiLFxyXG5cdFx0XHRcImVNYWlsXCI6IFwicmljaGV2ZS5iZWJlZG9yQGdtYWlsLmNvbVwiLFxyXG5cdFx0XHRcImNvbnRyaWJ1dG9yc1wiOiBbXHJcblx0XHRcdFx0XCJKb2huIExlbm9uIE1hZ2hhbm95IDxqb2hubGVub25tYWdoYW5veUBnbWFpbC5jb20+XCIsXHJcblx0XHRcdFx0XCJWaW5zZSBWaW5hbG9uIDx2aW5zZXZpbmFsb25AZ21haWwuY29tPlwiXHJcblx0XHRcdF0sXHJcblx0XHRcdFwicmVwb3NpdG9yeVwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS92b2xrb3Zhc3lzdGVtcy90aXRsZWxpemUuZ2l0XCJcclxuXHRcdH1cclxuXHRAZW5kLXRlc3QtY29uZmlndXJhdGlvblxyXG5cclxuXHRAdGVzdC1kb2N1bWVudGF0aW9uOlxyXG5cclxuXHRAZW5kLXRlc3QtZG9jdW1lbnRhdGlvblxyXG5cclxuXHRAaW5jbHVkZTpcclxuXHRcdHtcclxuXHRcdFx0XCJhc3NlcnRcIjogXCJzaG91bGRcIixcclxuXHRcdFx0XCJ0aXRsZWxpemVcIjogXCJ0aXRsZWxpemVcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgYXNzZXJ0ID0gcmVxdWlyZSggXCJzaG91bGRcIiApO1xyXG5cclxuXHJcblxyXG5cclxuXHJcbi8vOiBAYnJpZGdlOlxyXG5jb25zdCBwYXRoID0gcmVxdWlyZSggXCJwYXRoXCIgKTtcclxuLy86IEBlbmQtYnJpZGdlXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLzogQGJyaWRnZTpcclxuXHJcbmRlc2NyaWJlKCBcInRpdGxlbGl6ZVwiLCAoICkgPT4ge1xyXG5cclxuXHRcclxuXHRsZXQgZGlyZWN0b3J5ID0gX19kaXJuYW1lO1xyXG5cdGxldCB0ZXN0QnJpZGdlID0gcGF0aC5yZXNvbHZlKCBkaXJlY3RvcnksIFwiYnJpZGdlLmh0bWxcIiApO1xyXG5cdGxldCBicmlkZ2VVUkwgPSBgZmlsZTovLyR7IHRlc3RCcmlkZ2UgfWA7XHJcblxyXG5cdGRlc2NyaWJlKCBcInRpdGxlbGl6ZVwiLCAoICkgPT4ge1xyXG5cdFxyXG5cdGRlc2NyaWJlKCBgXCJ0aXRsZWxpemUoIFwiaGVsbG93b3JsZFwiIClcImAsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgaGF2ZSB2YWx1ZSAnSGVsbG93b3JsZCdcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCh0aXRsZWxpemUgKCB0cnVlLCB0cnVlICkgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggYFwidGl0bGVsaXplKCBcImhlbGxvLXdvcmxkXCIgKVwiYCwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBoYXZlIHZhbHVlICdIZWxsbyBXb3JsZCdcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCh0aXRsZWxpemUgKCB0cnVlLCB0cnVlICkgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggYFwidGl0bGVsaXplKCBcImhlbGxvX3dvcmxkXCIgKVwiYCwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBoYXZlIHZhbHVlICdIZWxsbyBXb3JsZCdcIiwgKCApID0+IHtcclxuXHJcblx0XHRcdGFzc2VydC5lcXVhbCh0aXRsZWxpemUgKCB0cnVlLCB0cnVlICkgKTtcclxuXHJcblx0XHR9ICk7XHJcblx0fSApO1xyXG5cclxuXHRkZXNjcmliZSggYFwidGl0bGVsaXplKCBcImhlbGxvV29ybGRcIiApLFwiYCwgKCApID0+IHtcclxuXHRcdGl0KCBcInNob3VsZCBoYXZlIHZhbHVlICdIZWxsbyBXb3JsZCdcIiAsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwodGl0bGVsaXplICggdHJ1ZSwgdHJ1ZSApICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHJcblx0ZGVzY3JpYmUoIGBcInRpdGxlbGl6ZSggXCJoZWxsbyB3b3JsZFwiIClcImAsICggKSA9PiB7XHJcblx0XHRpdCggXCJzaG91bGQgaGF2ZSB2YWx1ZSAnSGVsbG8gV29ybGQnXCIsICggKSA9PiB7XHJcblxyXG5cdFx0XHRhc3NlcnQuZXF1YWwodGl0bGVsaXplICggdHJ1ZSwgdHJ1ZSApICk7XHJcblxyXG5cdFx0fSApO1xyXG5cdH0gKTtcclxuXHRcclxufSApO1xyXG5cclxuXHRcclxufSApO1xyXG5cclxuLy86IEBlbmQtYnJpZGdlXHJcblxyXG4iXX0=
//# sourceMappingURL=test.bridge.js.map
