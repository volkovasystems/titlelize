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
              			"eMail": "richeve.bebedor@gmail.com",
              			"contributors": [
              				"John Lenon Maghanoy <johnlenonmaghanoy@gmail.com>",
              				"Vinse Vinalon <vinsevinalon@gmail.com>"
              			],
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
              			"falzy": "falzy"
              		}
              	@end-include
              */

var disdo = require("disdo");
var falzy = require("falzy");

var TERM_PATTERN = /^[a-z]|\s[a-z]/g;

var titlelize = function titlelize(text) {
	/*;
                                          	@meta-configuration:
                                          		{
                                          			"text:required": "string"
                                          		}
                                          	@end-meta-configuration
                                          */

	if (falzy(text) || typeof text != "string") {
		return text;
	}

	return disdo(text).toLowerCase().
	replace(TERM_PATTERN, function (match) {return match.toUpperCase();});
};

module.exports = titlelize;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRpdGxlbGl6ZS5zdXBwb3J0LmpzIl0sIm5hbWVzIjpbImRpc2RvIiwicmVxdWlyZSIsImZhbHp5IiwiVEVSTV9QQVRURVJOIiwidGl0bGVsaXplIiwidGV4dCIsInRvTG93ZXJDYXNlIiwicmVwbGFjZSIsIm1hdGNoIiwidG9VcHBlckNhc2UiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBEQSxJQUFNQSxRQUFRQyxRQUFTLE9BQVQsQ0FBZDtBQUNBLElBQU1DLFFBQVFELFFBQVMsT0FBVCxDQUFkOztBQUVBLElBQU1FLGVBQWUsaUJBQXJCOztBQUVBLElBQU1DLFlBQVksU0FBU0EsU0FBVCxDQUFvQkMsSUFBcEIsRUFBMEI7QUFDM0M7Ozs7Ozs7O0FBUUEsS0FBSUgsTUFBT0csSUFBUCxLQUFpQixPQUFPQSxJQUFQLElBQWUsUUFBcEMsRUFBOEM7QUFDN0MsU0FBT0EsSUFBUDtBQUNBOztBQUVELFFBQU9MLE1BQU9LLElBQVAsRUFBY0MsV0FBZDtBQUNMQyxRQURLLENBQ0lKLFlBREosRUFDa0IsVUFBRUssS0FBRixVQUFhQSxNQUFNQyxXQUFOLEVBQWIsRUFEbEIsQ0FBUDtBQUVBLENBZkQ7O0FBaUJBQyxPQUFPQyxPQUFQLEdBQWlCUCxTQUFqQiIsImZpbGUiOiJ0aXRsZWxpemUuc3VwcG9ydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xyXG5cclxuLyo7XHJcblx0QG1vZHVsZS1saWNlbnNlOlxyXG5cdFx0VGhlIE1JVCBMaWNlbnNlIChNSVQpXHJcblx0XHRAbWl0LWxpY2Vuc2VcclxuXHJcblx0XHRDb3B5cmlnaHQgKEBjKSAyMDE3IFJpY2hldmUgU2lvZGluYSBCZWJlZG9yXHJcblx0XHRAZW1haWw6IHJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cclxuXHJcblx0XHRQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XHJcblx0XHRvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXHJcblx0XHRpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXHJcblx0XHR0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXHJcblx0XHRjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcclxuXHRcdGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XHJcblxyXG5cdFx0VGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsXHJcblx0XHRjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxyXG5cclxuXHRcdFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1JcclxuXHRcdElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0YgTUVSQ0hBTlRBQklMSVRZLFxyXG5cdFx0RklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU4gTk8gRVZFTlQgU0hBTEwgVEhFXHJcblx0XHRBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSXHJcblx0XHRMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLFxyXG5cdFx0T1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEVcclxuXHRcdFNPRlRXQVJFLlxyXG5cdEBlbmQtbW9kdWxlLWxpY2Vuc2VcclxuXHJcblx0QG1vZHVsZS1jb25maWd1cmF0aW9uOlxyXG5cdFx0e1xyXG5cdFx0XHRcInBhY2thZ2VcIjogXCJ0aXRsZWxpemVcIixcclxuXHRcdFx0XCJwYXRoXCI6IFwidGl0bGVsaXplL3RpdGxlbGl6ZS5qc1wiLFxyXG5cdFx0XHRcImZpbGVcIjogXCJ0aXRsZWxpemUuanNcIixcclxuXHRcdFx0XCJtb2R1bGVcIjogXCJ0aXRsZWxpemVcIixcclxuXHRcdFx0XCJhdXRob3JcIjogXCJSaWNoZXZlIFMuIEJlYmVkb3JcIixcclxuXHRcdFx0XCJlTWFpbFwiOiBcInJpY2hldmUuYmViZWRvckBnbWFpbC5jb21cIixcclxuXHRcdFx0XCJjb250cmlidXRvcnNcIjogW1xyXG5cdFx0XHRcdFwiSm9obiBMZW5vbiBNYWdoYW5veSA8am9obmxlbm9ubWFnaGFub3lAZ21haWwuY29tPlwiLFxyXG5cdFx0XHRcdFwiVmluc2UgVmluYWxvbiA8dmluc2V2aW5hbG9uQGdtYWlsLmNvbT5cIlxyXG5cdFx0XHRdLFxyXG5cdFx0XHRcInJlcG9zaXRvcnlcIjogXCJodHRwczovL2dpdGh1Yi5jb20vdm9sa292YXN5c3RlbXMvdGl0bGVsaXplLmdpdFwiLFxyXG5cdFx0XHRcInRlc3RcIjogXCJ0aXRsZWxpemUtdGVzdC5qc1wiLFxyXG5cdFx0XHRcImdsb2JhbFwiOiB0cnVlXHJcblx0XHR9XHJcblx0QGVuZC1tb2R1bGUtY29uZmlndXJhdGlvblxyXG5cclxuXHRAbW9kdWxlLWRvY3VtZW50YXRpb246XHJcblx0XHRUcmFuc2Zvcm0gYW55IGh1bWFuIHJlYWRhYmxlIGFscGhhbnVtZXJpYyBzdHJpbmcgZGl2aWRlZCBieSBjZXJ0YWluXHJcblx0XHRcdGNoYXJhY3RlcnMgaW50byBzcGFjZSBzZXBhcmF0ZWQgZmlyc3QgbGV0dGVyIHVwcGVyY2FzZSBmb3JtLlxyXG5cdEBlbmQtbW9kdWxlLWRvY3VtZW50YXRpb25cclxuXHJcblx0QGluY2x1ZGU6XHJcblx0XHR7XHJcblx0XHRcdFwiZGlzZG9cIjogXCJkaXNkb1wiLFxyXG5cdFx0XHRcImZhbHp5XCI6IFwiZmFsenlcIlxyXG5cdFx0fVxyXG5cdEBlbmQtaW5jbHVkZVxyXG4qL1xyXG5cclxuY29uc3QgZGlzZG8gPSByZXF1aXJlKCBcImRpc2RvXCIgKTtcclxuY29uc3QgZmFsenkgPSByZXF1aXJlKCBcImZhbHp5XCIgKTtcclxuXHJcbmNvbnN0IFRFUk1fUEFUVEVSTiA9IC9eW2Etel18XFxzW2Etel0vZztcclxuXHJcbmNvbnN0IHRpdGxlbGl6ZSA9IGZ1bmN0aW9uIHRpdGxlbGl6ZSggdGV4dCApe1xyXG5cdC8qO1xyXG5cdFx0QG1ldGEtY29uZmlndXJhdGlvbjpcclxuXHRcdFx0e1xyXG5cdFx0XHRcdFwidGV4dDpyZXF1aXJlZFwiOiBcInN0cmluZ1wiXHJcblx0XHRcdH1cclxuXHRcdEBlbmQtbWV0YS1jb25maWd1cmF0aW9uXHJcblx0Ki9cclxuXHJcblx0aWYoIGZhbHp5KCB0ZXh0ICkgfHwgdHlwZW9mIHRleHQgIT0gXCJzdHJpbmdcIiApe1xyXG5cdFx0cmV0dXJuIHRleHQ7XHJcblx0fVxyXG5cclxuXHRyZXR1cm4gZGlzZG8oIHRleHQgKS50b0xvd2VyQ2FzZSggKVxyXG5cdFx0LnJlcGxhY2UoIFRFUk1fUEFUVEVSTiwgKCBtYXRjaCApID0+IG1hdGNoLnRvVXBwZXJDYXNlKCApICk7XHJcbn07XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHRpdGxlbGl6ZTtcclxuIl19
//# sourceMappingURL=titlelize.support.js.map
