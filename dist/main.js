/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../node_modules/pug-runtime/index.js":
/*!********************************************!*\
  !*** ../node_modules/pug-runtime/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar pug_has_own_property = Object.prototype.hasOwnProperty;\n\n/**\n * Merge two attribute objects giving precedence\n * to values in object `b`. Classes are special-cased\n * allowing for arrays and merging/joining appropriately\n * resulting in a string.\n *\n * @param {Object} a\n * @param {Object} b\n * @return {Object} a\n * @api private\n */\n\nexports.merge = pug_merge;\nfunction pug_merge(a, b) {\n  if (arguments.length === 1) {\n    var attrs = a[0];\n    for (var i = 1; i < a.length; i++) {\n      attrs = pug_merge(attrs, a[i]);\n    }\n    return attrs;\n  }\n\n  for (var key in b) {\n    if (key === 'class') {\n      var valA = a[key] || [];\n      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);\n    } else if (key === 'style') {\n      var valA = pug_style(a[key]);\n      valA = valA && valA[valA.length - 1] !== ';' ? valA + ';' : valA;\n      var valB = pug_style(b[key]);\n      valB = valB && valB[valB.length - 1] !== ';' ? valB + ';' : valB;\n      a[key] = valA + valB;\n    } else {\n      a[key] = b[key];\n    }\n  }\n\n  return a;\n}\n\n/**\n * Process array, object, or string as a string of classes delimited by a space.\n *\n * If `val` is an array, all members of it and its subarrays are counted as\n * classes. If `escaping` is an array, then whether or not the item in `val` is\n * escaped depends on the corresponding item in `escaping`. If `escaping` is\n * not an array, no escaping is done.\n *\n * If `val` is an object, all the keys whose value is truthy are counted as\n * classes. No escaping is done.\n *\n * If `val` is a string, it is counted as a class. No escaping is done.\n *\n * @param {(Array.<string>|Object.<string, boolean>|string)} val\n * @param {?Array.<string>} escaping\n * @return {String}\n */\nexports.classes = pug_classes;\nfunction pug_classes_array(val, escaping) {\n  var classString = '',\n    className,\n    padding = '',\n    escapeEnabled = Array.isArray(escaping);\n  for (var i = 0; i < val.length; i++) {\n    className = pug_classes(val[i]);\n    if (!className) continue;\n    escapeEnabled && escaping[i] && (className = pug_escape(className));\n    classString = classString + padding + className;\n    padding = ' ';\n  }\n  return classString;\n}\nfunction pug_classes_object(val) {\n  var classString = '',\n    padding = '';\n  for (var key in val) {\n    if (key && val[key] && pug_has_own_property.call(val, key)) {\n      classString = classString + padding + key;\n      padding = ' ';\n    }\n  }\n  return classString;\n}\nfunction pug_classes(val, escaping) {\n  if (Array.isArray(val)) {\n    return pug_classes_array(val, escaping);\n  } else if (val && typeof val === 'object') {\n    return pug_classes_object(val);\n  } else {\n    return val || '';\n  }\n}\n\n/**\n * Convert object or string to a string of CSS styles delimited by a semicolon.\n *\n * @param {(Object.<string, string>|string)} val\n * @return {String}\n */\n\nexports.style = pug_style;\nfunction pug_style(val) {\n  if (!val) return '';\n  if (typeof val === 'object') {\n    var out = '';\n    for (var style in val) {\n      /* istanbul ignore else */\n      if (pug_has_own_property.call(val, style)) {\n        out = out + style + ':' + val[style] + ';';\n      }\n    }\n    return out;\n  } else {\n    return val + '';\n  }\n}\n\n/**\n * Render the given attribute.\n *\n * @param {String} key\n * @param {String} val\n * @param {Boolean} escaped\n * @param {Boolean} terse\n * @return {String}\n */\nexports.attr = pug_attr;\nfunction pug_attr(key, val, escaped, terse) {\n  if (\n    val === false ||\n    val == null ||\n    (!val && (key === 'class' || key === 'style'))\n  ) {\n    return '';\n  }\n  if (val === true) {\n    return ' ' + (terse ? key : key + '=\"' + key + '\"');\n  }\n  var type = typeof val;\n  if (\n    (type === 'object' || type === 'function') &&\n    typeof val.toJSON === 'function'\n  ) {\n    val = val.toJSON();\n  }\n  if (typeof val !== 'string') {\n    val = JSON.stringify(val);\n    if (!escaped && val.indexOf('\"') !== -1) {\n      return ' ' + key + \"='\" + val.replace(/'/g, '&#39;') + \"'\";\n    }\n  }\n  if (escaped) val = pug_escape(val);\n  return ' ' + key + '=\"' + val + '\"';\n}\n\n/**\n * Render the given attributes object.\n *\n * @param {Object} obj\n * @param {Object} terse whether to use HTML5 terse boolean attributes\n * @return {String}\n */\nexports.attrs = pug_attrs;\nfunction pug_attrs(obj, terse) {\n  var attrs = '';\n\n  for (var key in obj) {\n    if (pug_has_own_property.call(obj, key)) {\n      var val = obj[key];\n\n      if ('class' === key) {\n        val = pug_classes(val);\n        attrs = pug_attr(key, val, false, terse) + attrs;\n        continue;\n      }\n      if ('style' === key) {\n        val = pug_style(val);\n      }\n      attrs += pug_attr(key, val, false, terse);\n    }\n  }\n\n  return attrs;\n}\n\n/**\n * Escape the given string of `html`.\n *\n * @param {String} html\n * @return {String}\n * @api private\n */\n\nvar pug_match_html = /[\"&<>]/;\nexports.escape = pug_escape;\nfunction pug_escape(_html) {\n  var html = '' + _html;\n  var regexResult = pug_match_html.exec(html);\n  if (!regexResult) return _html;\n\n  var result = '';\n  var i, lastIndex, escape;\n  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {\n    switch (html.charCodeAt(i)) {\n      case 34:\n        escape = '&quot;';\n        break;\n      case 38:\n        escape = '&amp;';\n        break;\n      case 60:\n        escape = '&lt;';\n        break;\n      case 62:\n        escape = '&gt;';\n        break;\n      default:\n        continue;\n    }\n    if (lastIndex !== i) result += html.substring(lastIndex, i);\n    lastIndex = i + 1;\n    result += escape;\n  }\n  if (lastIndex !== i) return result + html.substring(lastIndex, i);\n  else return result;\n}\n\n/**\n * Re-throw the given `err` in context to the\n * the pug in `filename` at the given `lineno`.\n *\n * @param {Error} err\n * @param {String} filename\n * @param {String} lineno\n * @param {String} str original source\n * @api private\n */\n\nexports.rethrow = pug_rethrow;\nfunction pug_rethrow(err, filename, lineno, str) {\n  if (!(err instanceof Error)) throw err;\n  if ((typeof window != 'undefined' || !filename) && !str) {\n    err.message += ' on line ' + lineno;\n    throw err;\n  }\n  try {\n    str = str || __webpack_require__(/*! fs */ 0).readFileSync(filename, 'utf8');\n  } catch (ex) {\n    pug_rethrow(err, null, lineno);\n  }\n  var context = 3,\n    lines = str.split('\\n'),\n    start = Math.max(lineno - context, 0),\n    end = Math.min(lines.length, lineno + context);\n\n  // Error context\n  var context = lines\n    .slice(start, end)\n    .map(function(line, i) {\n      var curr = i + start + 1;\n      return (curr == lineno ? '  > ' : '    ') + curr + '| ' + line;\n    })\n    .join('\\n');\n\n  // Alter exception message\n  err.path = filename;\n  try {\n    err.message =\n      (filename || 'Pug') +\n      ':' +\n      lineno +\n      '\\n' +\n      context +\n      '\\n\\n' +\n      err.message;\n  } catch (e) {}\n  throw err;\n}\n\n\n//# sourceURL=webpack:///../node_modules/pug-runtime/index.js?");

/***/ }),

/***/ "./blocks/button/_color-theme_filled-gradient/button_color-theme_filled-gradient.pug":
/*!*******************************************************************************************!*\
  !*** ./blocks/button/_color-theme_filled-gradient/button_color-theme_filled-gradient.pug ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cbutton class=\\\"button button_color-theme_filled-gradient\\\"\\u003E\\u003Cdiv class=\\\"header-intro__descr_size_h3\\\"\\u003EClick me\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fbutton\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/button/_color-theme_filled-gradient/button_color-theme_filled-gradient.pug?");

/***/ }),

/***/ "./blocks/button/_color-theme_filled-gradient/button_color-theme_filled-gradient.scss":
/*!********************************************************************************************!*\
  !*** ./blocks/button/_color-theme_filled-gradient/button_color-theme_filled-gradient.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/button/_color-theme_filled-gradient/button_color-theme_filled-gradient.scss?");

/***/ }),

/***/ "./blocks/button/_color-theme_gradient-border/button_color-theme_gradient-border.pug":
/*!*******************************************************************************************!*\
  !*** ./blocks/button/_color-theme_gradient-border/button_color-theme_gradient-border.pug ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cbutton class=\\\"button button_color-theme_gradient-border\\\"\\u003E\\u003Cdiv class=\\\"header-intro__descr_size_h3\\\"\\u003EClick me\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fbutton\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/button/_color-theme_gradient-border/button_color-theme_gradient-border.pug?");

/***/ }),

/***/ "./blocks/button/_color-theme_gradient-border/button_color-theme_gradient-border.scss":
/*!********************************************************************************************!*\
  !*** ./blocks/button/_color-theme_gradient-border/button_color-theme_gradient-border.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/button/_color-theme_gradient-border/button_color-theme_gradient-border.scss?");

/***/ }),

/***/ "./blocks/button/button-pay.pug":
/*!**************************************!*\
  !*** ./blocks/button/button-pay.pug ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cbutton class=\\\"button button-pay\\\"\\u003E\\u003Cdiv class=\\\"header-intro__descr_size_h3\\\"\\u003EПерейти к оплате\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fbutton\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/button/button-pay.pug?");

/***/ }),

/***/ "./blocks/button/button-pay.scss":
/*!***************************************!*\
  !*** ./blocks/button/button-pay.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/button/button-pay.scss?");

/***/ }),

/***/ "./blocks/button/button.scss":
/*!***********************************!*\
  !*** ./blocks/button/button.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/button/button.scss?");

/***/ }),

/***/ "./blocks/checkbox-button/checkbox-button.pug":
/*!****************************************************!*\
  !*** ./blocks/checkbox-button/checkbox-button.pug ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"header-intro__descr_size_h3\\\"\\u003ECheckbox Buttons\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"checkbox-try\\\"\\u003E\\u003Cinput id=\\\"cb1\\\" type=\\\"checkbox\\\" name=\\\"may\\\"\\u003E\\u003Clabel for=\\\"cb1\\\"\\u003EМожно курить\\u003C\\u002Flabel\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cinput id=\\\"cb1\\\" type=\\\"checkbox\\\" name=\\\"may\\\" checked\\u003E\\u003Clabel for=\\\"cb1\\\"\\u003EМожно с питомцами\\u003C\\u002Flabel\\u003E\\u003Cinput id=\\\"cb1\\\" type=\\\"checkbox\\\" name=\\\"may\\\" checked\\u003E\\u003Clabel for=\\\"cb1\\\"\\u003EМожно пригласить гостей (до 10 человек)\\u003C\\u002Flabel\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/checkbox-button/checkbox-button.pug?");

/***/ }),

/***/ "./blocks/checkbox-button/checkbox-button.scss":
/*!*****************************************************!*\
  !*** ./blocks/checkbox-button/checkbox-button.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/checkbox-button/checkbox-button.scss?");

/***/ }),

/***/ "./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds100.scss":
/*!*******************************************************************************************!*\
  !*** ./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds100.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds100.scss?");

/***/ }),

/***/ "./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds25.scss":
/*!******************************************************************************************!*\
  !*** ./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds25.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds25.scss?");

/***/ }),

/***/ "./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds5.scss":
/*!*****************************************************************************************!*\
  !*** ./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds5.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds5.scss?");

/***/ }),

/***/ "./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds50.scss":
/*!******************************************************************************************!*\
  !*** ./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds50.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds50.scss?");

/***/ }),

/***/ "./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds75.scss":
/*!******************************************************************************************!*\
  !*** ./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds75.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds75.scss?");

/***/ }),

/***/ "./blocks/color-intro/__color-block/_color/color-intro__color-block_color_green.scss":
/*!*******************************************************************************************!*\
  !*** ./blocks/color-intro/__color-block/_color/color-intro__color-block_color_green.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/color-intro/__color-block/_color/color-intro__color-block_color_green.scss?");

/***/ }),

/***/ "./blocks/color-intro/__color-block/_color/color-intro__color-block_color_purple.scss":
/*!********************************************************************************************!*\
  !*** ./blocks/color-intro/__color-block/_color/color-intro__color-block_color_purple.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/color-intro/__color-block/_color/color-intro__color-block_color_purple.scss?");

/***/ }),

/***/ "./blocks/color-intro/__color-block/color-intro__color-block.scss":
/*!************************************************************************!*\
  !*** ./blocks/color-intro/__color-block/color-intro__color-block.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/color-intro/__color-block/color-intro__color-block.scss?");

/***/ }),

/***/ "./blocks/color-intro/__color-descr/_color-name/color-intro__color-descr_color-name.scss":
/*!***********************************************************************************************!*\
  !*** ./blocks/color-intro/__color-descr/_color-name/color-intro__color-descr_color-name.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/color-intro/__color-descr/_color-name/color-intro__color-descr_color-name.scss?");

/***/ }),

/***/ "./blocks/color-intro/__color-descr/_number/color-intro__color-descr_number.scss":
/*!***************************************************************************************!*\
  !*** ./blocks/color-intro/__color-descr/_number/color-intro__color-descr_number.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/color-intro/__color-descr/_number/color-intro__color-descr_number.scss?");

/***/ }),

/***/ "./blocks/color-intro/__color-descr/color-intro__color-descr.scss":
/*!************************************************************************!*\
  !*** ./blocks/color-intro/__color-descr/color-intro__color-descr.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/color-intro/__color-descr/color-intro__color-descr.scss?");

/***/ }),

/***/ "./blocks/color-intro/color-intro.scss":
/*!*********************************************!*\
  !*** ./blocks/color-intro/color-intro.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/color-intro/color-intro.scss?");

/***/ }),

/***/ "./blocks/header-intro/__descr/_size/header-intro__descr_size_body.scss":
/*!******************************************************************************!*\
  !*** ./blocks/header-intro/__descr/_size/header-intro__descr_size_body.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/header-intro/__descr/_size/header-intro__descr_size_body.scss?");

/***/ }),

/***/ "./blocks/header-intro/__descr/_size/header-intro__descr_size_h1.scss":
/*!****************************************************************************!*\
  !*** ./blocks/header-intro/__descr/_size/header-intro__descr_size_h1.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/header-intro/__descr/_size/header-intro__descr_size_h1.scss?");

/***/ }),

/***/ "./blocks/header-intro/__descr/_size/header-intro__descr_size_h2.scss":
/*!****************************************************************************!*\
  !*** ./blocks/header-intro/__descr/_size/header-intro__descr_size_h2.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/header-intro/__descr/_size/header-intro__descr_size_h2.scss?");

/***/ }),

/***/ "./blocks/header-intro/__descr/_size/header-intro__descr_size_h3.scss":
/*!****************************************************************************!*\
  !*** ./blocks/header-intro/__descr/_size/header-intro__descr_size_h3.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/header-intro/__descr/_size/header-intro__descr_size_h3.scss?");

/***/ }),

/***/ "./blocks/header-intro/__descr/header-intro__descr.scss":
/*!**************************************************************!*\
  !*** ./blocks/header-intro/__descr/header-intro__descr.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/header-intro/__descr/header-intro__descr.scss?");

/***/ }),

/***/ "./blocks/header-intro/__hn/_size/header-intro__hn_size_body.scss":
/*!************************************************************************!*\
  !*** ./blocks/header-intro/__hn/_size/header-intro__hn_size_body.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/header-intro/__hn/_size/header-intro__hn_size_body.scss?");

/***/ }),

/***/ "./blocks/header-intro/__hn/_size/header-intro__hn_size_h1.scss":
/*!**********************************************************************!*\
  !*** ./blocks/header-intro/__hn/_size/header-intro__hn_size_h1.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/header-intro/__hn/_size/header-intro__hn_size_h1.scss?");

/***/ }),

/***/ "./blocks/header-intro/__hn/_size/header-intro__hn_size_h2.scss":
/*!**********************************************************************!*\
  !*** ./blocks/header-intro/__hn/_size/header-intro__hn_size_h2.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/header-intro/__hn/_size/header-intro__hn_size_h2.scss?");

/***/ }),

/***/ "./blocks/header-intro/__hn/_size/header-intro__hn_size_h3.scss":
/*!**********************************************************************!*\
  !*** ./blocks/header-intro/__hn/_size/header-intro__hn_size_h3.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/header-intro/__hn/_size/header-intro__hn_size_h3.scss?");

/***/ }),

/***/ "./blocks/header-intro/__hn/header-intro__hn.scss":
/*!********************************************************!*\
  !*** ./blocks/header-intro/__hn/header-intro__hn.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/header-intro/__hn/header-intro__hn.scss?");

/***/ }),

/***/ "./blocks/header-intro/header-intro.scss":
/*!***********************************************!*\
  !*** ./blocks/header-intro/header-intro.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/header-intro/header-intro.scss?");

/***/ }),

/***/ "./blocks/like-button/like-button.pug":
/*!********************************************!*\
  !*** ./blocks/like-button/like-button.pug ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"header-intro__descr_size_h3\\\"\\u003Elike button\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"like-button-container\\\"\\u003E \\u003Cinput class=\\\"like-button\\\" id=\\\"like-button\\\" type=\\\"checkbox\\\" checked\\u003E\\u003Clabel for=\\\"like-button\\\"\\u003E12\\u003C\\u002Flabel\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/like-button/like-button.pug?");

/***/ }),

/***/ "./blocks/like-button/like-button.scss":
/*!*********************************************!*\
  !*** ./blocks/like-button/like-button.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/like-button/like-button.scss?");

/***/ }),

/***/ "./blocks/logo/group.svg":
/*!*******************************!*\
  !*** ./blocks/logo/group.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"c2a93d6ae04f381031de3bb8cecdf4b0.svg\");\n\n//# sourceURL=webpack:///./blocks/logo/group.svg?");

/***/ }),

/***/ "./blocks/logo/logo.pug":
/*!******************************!*\
  !*** ./blocks/logo/logo.pug ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cimg src=\\\"group.png\\\" alt=\\\"Logo\\\" height=\\\"48\\\"\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/logo/logo.pug?");

/***/ }),

/***/ "./blocks/logo/logo.scss":
/*!*******************************!*\
  !*** ./blocks/logo/logo.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/logo/logo.scss?");

/***/ }),

/***/ "./blocks/radio-button/radio-button.pug":
/*!**********************************************!*\
  !*** ./blocks/radio-button/radio-button.pug ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"header-intro__descr_size_h3\\\"\\u003ERadio Buttons\\u003C\\u002Fdiv\\u003E\\u003Cinput id=\\\"man\\\" type=\\\"radio\\\" name=\\\"gender\\\" checked\\u003E\\u003Clabel for=\\\"man\\\"\\u003EМужчина\\u003C\\u002Flabel\\u003E\\u003Cinput id=\\\"woman\\\" type=\\\"radio\\\" name=\\\"gender\\\"\\u003E\\u003Clabel for=\\\"woman\\\"\\u003EЖенщина\\u003C\\u002Flabel\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/radio-button/radio-button.pug?");

/***/ }),

/***/ "./blocks/radio-button/radio-button.scss":
/*!***********************************************!*\
  !*** ./blocks/radio-button/radio-button.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/radio-button/radio-button.scss?");

/***/ }),

/***/ "./blocks/rate-button/rate-button.pug":
/*!********************************************!*\
  !*** ./blocks/rate-button/rate-button.pug ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"star-rating\\\"\\u003E\\u003Cfieldset\\u003E\\u003Cinput type=\\\"radio\\\" id=\\\"star5\\\" name=\\\"rating\\\" value=\\\"5\\\"\\u003E\\u003Clabel for=\\\"star5\\\"\\u003E5 stars\\u003C\\u002Flabel\\u003E\\u003Cinput type=\\\"radio\\\" id=\\\"star4\\\" name=\\\"rating\\\" value=\\\"4\\\"\\u003E\\u003Clabel for=\\\"star4\\\"\\u003E4 stars\\u003C\\u002Flabel\\u003E\\u003Cinput type=\\\"radio\\\" id=\\\"star3\\\" name=\\\"rating\\\" value=\\\"3\\\"\\u003E\\u003Clabel for=\\\"star3\\\"\\u003E3 stars\\u003C\\u002Flabel\\u003E\\u003Cinput type=\\\"radio\\\" id=\\\"star2\\\" name=\\\"rating\\\" value=\\\"2\\\"\\u003E\\u003Clabel for=\\\"star2\\\"\\u003E2 stars\\u003C\\u002Flabel\\u003E\\u003Cinput type=\\\"radio\\\" id=\\\"star1\\\" name=\\\"rating\\\" value=\\\"1\\\"\\u003E\\u003Clabel for=\\\"star1\\\"\\u003E1 stars\\u003C\\u002Flabel\\u003E\\u003C\\u002Ffieldset\\u003E\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/rate-button/rate-button.pug?");

/***/ }),

/***/ "./blocks/rate-button/rate-button.scss":
/*!*********************************************!*\
  !*** ./blocks/rate-button/rate-button.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/rate-button/rate-button.scss?");

/***/ }),

/***/ "./blocks/text-button/_color_ds50/text-button_color_ds50.pug":
/*!*******************************************************************!*\
  !*** ./blocks/text-button/_color_ds50/text-button_color_ds50.pug ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cbutton class=\\\"text-button text-button_color_ds50\\\"\\u003E\\u003Cdiv class=\\\"header-intro__descr_size_h3\\\"\\u003EClick me\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fbutton\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/text-button/_color_ds50/text-button_color_ds50.pug?");

/***/ }),

/***/ "./blocks/text-button/_color_ds50/text-button_color_ds50.scss":
/*!********************************************************************!*\
  !*** ./blocks/text-button/_color_ds50/text-button_color_ds50.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/text-button/_color_ds50/text-button_color_ds50.scss?");

/***/ }),

/***/ "./blocks/text-button/_color_purple/text-button_color_purple.pug":
/*!***********************************************************************!*\
  !*** ./blocks/text-button/_color_purple/text-button_color_purple.pug ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cbutton class=\\\"text-button text-button_color_purple\\\"\\u003E\\u003Cdiv class=\\\"header-intro__descr_size_h3\\\"\\u003EClick me\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fbutton\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/text-button/_color_purple/text-button_color_purple.pug?");

/***/ }),

/***/ "./blocks/text-button/_color_purple/text-button_color_purple.scss":
/*!************************************************************************!*\
  !*** ./blocks/text-button/_color_purple/text-button_color_purple.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/text-button/_color_purple/text-button_color_purple.scss?");

/***/ }),

/***/ "./blocks/text-button/text-button.scss":
/*!*********************************************!*\
  !*** ./blocks/text-button/text-button.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/text-button/text-button.scss?");

/***/ }),

/***/ "./blocks/text-field/_activated/text-field_activated.pug":
/*!***************************************************************!*\
  !*** ./blocks/text-field/_activated/text-field_activated.pug ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Clabel for=\\\"text-field-activated\\\"\\u003E \\u003Cdiv class=\\\"header-intro__descr_size_h3\\\"\\u003Etext field\\u003C\\u002Fdiv\\u003E\\u003C\\u002Flabel\\u003E\\u003Cinput type=\\\"text\\\" name=\\\"text-field-activated\\\" placeholder=\\\"This is pretty awesome\\\"\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/text-field/_activated/text-field_activated.pug?");

/***/ }),

/***/ "./blocks/text-field/_activated/text-field_activated.scss":
/*!****************************************************************!*\
  !*** ./blocks/text-field/_activated/text-field_activated.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/text-field/_activated/text-field_activated.scss?");

/***/ }),

/***/ "./blocks/text-field/_default/text-field_default.pug":
/*!***********************************************************!*\
  !*** ./blocks/text-field/_default/text-field_default.pug ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Clabel for=\\\"text-field\\\"\\u003E \\u003Cdiv class=\\\"header-intro__descr_size_h3\\\"\\u003Etext field\\u003C\\u002Fdiv\\u003E\\u003C\\u002Flabel\\u003E\\u003Cinput type=\\\"text\\\" name=\\\"text-field\\\" placeholder=\\\"Email\\\"\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/text-field/_default/text-field_default.pug?");

/***/ }),

/***/ "./blocks/text-field/text-field.scss":
/*!*******************************************!*\
  !*** ./blocks/text-field/text-field.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/text-field/text-field.scss?");

/***/ }),

/***/ "./blocks/toggle/toggle.pug":
/*!**********************************!*\
  !*** ./blocks/toggle/toggle.pug ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"header-intro__descr_size_h3\\\"\\u003EToggle\\u003C\\u002Fdiv\\u003E\\u003Cinput class=\\\"toggle-button\\\" id=\\\"toggle\\\" type=\\\"checkbox\\\" name=\\\"toggle\\\" checked\\u003E\\u003Clabel for=\\\"toggle\\\"\\u003EПолучать спецпредложения\\u003C\\u002Flabel\\u003E\\u003Cinput class=\\\"toggle-button\\\" id=\\\"toggle\\\" type=\\\"checkbox\\\" name=\\\"toggle\\\"\\u003E\\u003Clabel for=\\\"toggle\\\"\\u003EПолучать спецпредложения\\u003C\\u002Flabel\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./blocks/toggle/toggle.pug?");

/***/ }),

/***/ "./blocks/toggle/toggle.scss":
/*!***********************************!*\
  !*** ./blocks/toggle/toggle.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./blocks/toggle/toggle.scss?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _mixins_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mixins.scss */ \"./mixins.scss\");\n/* harmony import */ var _mixins_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_mixins_scss__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _variables_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./variables.scss */ \"./variables.scss\");\n/* harmony import */ var _variables_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_variables_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _blocks_color_intro_color_intro_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/color-intro/color-intro.scss */ \"./blocks/color-intro/color-intro.scss\");\n/* harmony import */ var _blocks_color_intro_color_intro_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_blocks_color_intro_color_intro_scss__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _blocks_color_intro_color_block_color_intro_color_block_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./blocks/color-intro/__color-block/color-intro__color-block.scss */ \"./blocks/color-intro/__color-block/color-intro__color-block.scss\");\n/* harmony import */ var _blocks_color_intro_color_block_color_intro_color_block_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_blocks_color_intro_color_block_color_intro_color_block_scss__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _blocks_color_intro_color_block_color_color_intro_color_block_color_ds100_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds100.scss */ \"./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds100.scss\");\n/* harmony import */ var _blocks_color_intro_color_block_color_color_intro_color_block_color_ds100_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_blocks_color_intro_color_block_color_color_intro_color_block_color_ds100_scss__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _blocks_color_intro_color_block_color_color_intro_color_block_color_ds75_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds75.scss */ \"./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds75.scss\");\n/* harmony import */ var _blocks_color_intro_color_block_color_color_intro_color_block_color_ds75_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_blocks_color_intro_color_block_color_color_intro_color_block_color_ds75_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _blocks_color_intro_color_block_color_color_intro_color_block_color_ds50_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds50.scss */ \"./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds50.scss\");\n/* harmony import */ var _blocks_color_intro_color_block_color_color_intro_color_block_color_ds50_scss__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_blocks_color_intro_color_block_color_color_intro_color_block_color_ds50_scss__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _blocks_color_intro_color_block_color_color_intro_color_block_color_ds25_scss__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds25.scss */ \"./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds25.scss\");\n/* harmony import */ var _blocks_color_intro_color_block_color_color_intro_color_block_color_ds25_scss__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_blocks_color_intro_color_block_color_color_intro_color_block_color_ds25_scss__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _blocks_color_intro_color_block_color_color_intro_color_block_color_ds5_scss__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds5.scss */ \"./blocks/color-intro/__color-block/_color/color-intro__color-block_color_ds5.scss\");\n/* harmony import */ var _blocks_color_intro_color_block_color_color_intro_color_block_color_ds5_scss__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_blocks_color_intro_color_block_color_color_intro_color_block_color_ds5_scss__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var _blocks_color_intro_color_block_color_color_intro_color_block_color_green_scss__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./blocks/color-intro/__color-block/_color/color-intro__color-block_color_green.scss */ \"./blocks/color-intro/__color-block/_color/color-intro__color-block_color_green.scss\");\n/* harmony import */ var _blocks_color_intro_color_block_color_color_intro_color_block_color_green_scss__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_blocks_color_intro_color_block_color_color_intro_color_block_color_green_scss__WEBPACK_IMPORTED_MODULE_9__);\n/* harmony import */ var _blocks_color_intro_color_block_color_color_intro_color_block_color_purple_scss__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./blocks/color-intro/__color-block/_color/color-intro__color-block_color_purple.scss */ \"./blocks/color-intro/__color-block/_color/color-intro__color-block_color_purple.scss\");\n/* harmony import */ var _blocks_color_intro_color_block_color_color_intro_color_block_color_purple_scss__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_blocks_color_intro_color_block_color_color_intro_color_block_color_purple_scss__WEBPACK_IMPORTED_MODULE_10__);\n/* harmony import */ var _blocks_color_intro_color_descr_color_intro_color_descr_scss__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./blocks/color-intro/__color-descr/color-intro__color-descr.scss */ \"./blocks/color-intro/__color-descr/color-intro__color-descr.scss\");\n/* harmony import */ var _blocks_color_intro_color_descr_color_intro_color_descr_scss__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_blocks_color_intro_color_descr_color_intro_color_descr_scss__WEBPACK_IMPORTED_MODULE_11__);\n/* harmony import */ var _blocks_color_intro_color_descr_color_name_color_intro_color_descr_color_name_scss__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./blocks/color-intro/__color-descr/_color-name/color-intro__color-descr_color-name.scss */ \"./blocks/color-intro/__color-descr/_color-name/color-intro__color-descr_color-name.scss\");\n/* harmony import */ var _blocks_color_intro_color_descr_color_name_color_intro_color_descr_color_name_scss__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_blocks_color_intro_color_descr_color_name_color_intro_color_descr_color_name_scss__WEBPACK_IMPORTED_MODULE_12__);\n/* harmony import */ var _blocks_color_intro_color_descr_number_color_intro_color_descr_number_scss__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./blocks/color-intro/__color-descr/_number/color-intro__color-descr_number.scss */ \"./blocks/color-intro/__color-descr/_number/color-intro__color-descr_number.scss\");\n/* harmony import */ var _blocks_color_intro_color_descr_number_color_intro_color_descr_number_scss__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_blocks_color_intro_color_descr_number_color_intro_color_descr_number_scss__WEBPACK_IMPORTED_MODULE_13__);\n/* harmony import */ var _blocks_logo_logo_scss__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./blocks/logo/logo.scss */ \"./blocks/logo/logo.scss\");\n/* harmony import */ var _blocks_logo_logo_scss__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_blocks_logo_logo_scss__WEBPACK_IMPORTED_MODULE_14__);\n/* harmony import */ var _blocks_logo_logo_pug__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./blocks/logo/logo.pug */ \"./blocks/logo/logo.pug\");\n/* harmony import */ var _blocks_logo_logo_pug__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_blocks_logo_logo_pug__WEBPACK_IMPORTED_MODULE_15__);\n/* harmony import */ var _blocks_header_intro_header_intro_scss__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./blocks/header-intro/header-intro.scss */ \"./blocks/header-intro/header-intro.scss\");\n/* harmony import */ var _blocks_header_intro_header_intro_scss__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_blocks_header_intro_header_intro_scss__WEBPACK_IMPORTED_MODULE_16__);\n/* harmony import */ var _blocks_header_intro_descr_header_intro_descr_scss__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blocks/header-intro/__descr/header-intro__descr.scss */ \"./blocks/header-intro/__descr/header-intro__descr.scss\");\n/* harmony import */ var _blocks_header_intro_descr_header_intro_descr_scss__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_blocks_header_intro_descr_header_intro_descr_scss__WEBPACK_IMPORTED_MODULE_17__);\n/* harmony import */ var _blocks_header_intro_descr_size_header_intro_descr_size_body_scss__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./blocks/header-intro/__descr/_size/header-intro__descr_size_body.scss */ \"./blocks/header-intro/__descr/_size/header-intro__descr_size_body.scss\");\n/* harmony import */ var _blocks_header_intro_descr_size_header_intro_descr_size_body_scss__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_blocks_header_intro_descr_size_header_intro_descr_size_body_scss__WEBPACK_IMPORTED_MODULE_18__);\n/* harmony import */ var _blocks_header_intro_descr_size_header_intro_descr_size_h1_scss__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./blocks/header-intro/__descr/_size/header-intro__descr_size_h1.scss */ \"./blocks/header-intro/__descr/_size/header-intro__descr_size_h1.scss\");\n/* harmony import */ var _blocks_header_intro_descr_size_header_intro_descr_size_h1_scss__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_blocks_header_intro_descr_size_header_intro_descr_size_h1_scss__WEBPACK_IMPORTED_MODULE_19__);\n/* harmony import */ var _blocks_header_intro_descr_size_header_intro_descr_size_h2_scss__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./blocks/header-intro/__descr/_size/header-intro__descr_size_h2.scss */ \"./blocks/header-intro/__descr/_size/header-intro__descr_size_h2.scss\");\n/* harmony import */ var _blocks_header_intro_descr_size_header_intro_descr_size_h2_scss__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_blocks_header_intro_descr_size_header_intro_descr_size_h2_scss__WEBPACK_IMPORTED_MODULE_20__);\n/* harmony import */ var _blocks_header_intro_descr_size_header_intro_descr_size_h3_scss__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./blocks/header-intro/__descr/_size/header-intro__descr_size_h3.scss */ \"./blocks/header-intro/__descr/_size/header-intro__descr_size_h3.scss\");\n/* harmony import */ var _blocks_header_intro_descr_size_header_intro_descr_size_h3_scss__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_blocks_header_intro_descr_size_header_intro_descr_size_h3_scss__WEBPACK_IMPORTED_MODULE_21__);\n/* harmony import */ var _blocks_header_intro_hn_header_intro_hn_scss__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./blocks/header-intro/__hn/header-intro__hn.scss */ \"./blocks/header-intro/__hn/header-intro__hn.scss\");\n/* harmony import */ var _blocks_header_intro_hn_header_intro_hn_scss__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_blocks_header_intro_hn_header_intro_hn_scss__WEBPACK_IMPORTED_MODULE_22__);\n/* harmony import */ var _blocks_header_intro_hn_size_header_intro_hn_size_body_scss__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./blocks/header-intro/__hn/_size/header-intro__hn_size_body.scss */ \"./blocks/header-intro/__hn/_size/header-intro__hn_size_body.scss\");\n/* harmony import */ var _blocks_header_intro_hn_size_header_intro_hn_size_body_scss__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(_blocks_header_intro_hn_size_header_intro_hn_size_body_scss__WEBPACK_IMPORTED_MODULE_23__);\n/* harmony import */ var _blocks_header_intro_hn_size_header_intro_hn_size_h1_scss__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./blocks/header-intro/__hn/_size/header-intro__hn_size_h1.scss */ \"./blocks/header-intro/__hn/_size/header-intro__hn_size_h1.scss\");\n/* harmony import */ var _blocks_header_intro_hn_size_header_intro_hn_size_h1_scss__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_blocks_header_intro_hn_size_header_intro_hn_size_h1_scss__WEBPACK_IMPORTED_MODULE_24__);\n/* harmony import */ var _blocks_header_intro_hn_size_header_intro_hn_size_h2_scss__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./blocks/header-intro/__hn/_size/header-intro__hn_size_h2.scss */ \"./blocks/header-intro/__hn/_size/header-intro__hn_size_h2.scss\");\n/* harmony import */ var _blocks_header_intro_hn_size_header_intro_hn_size_h2_scss__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(_blocks_header_intro_hn_size_header_intro_hn_size_h2_scss__WEBPACK_IMPORTED_MODULE_25__);\n/* harmony import */ var _blocks_header_intro_hn_size_header_intro_hn_size_h3_scss__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./blocks/header-intro/__hn/_size/header-intro__hn_size_h3.scss */ \"./blocks/header-intro/__hn/_size/header-intro__hn_size_h3.scss\");\n/* harmony import */ var _blocks_header_intro_hn_size_header_intro_hn_size_h3_scss__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(_blocks_header_intro_hn_size_header_intro_hn_size_h3_scss__WEBPACK_IMPORTED_MODULE_26__);\n/* harmony import */ var _blocks_text_field_text_field_scss__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./blocks/text-field/text-field.scss */ \"./blocks/text-field/text-field.scss\");\n/* harmony import */ var _blocks_text_field_text_field_scss__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(_blocks_text_field_text_field_scss__WEBPACK_IMPORTED_MODULE_27__);\n/* harmony import */ var _blocks_text_field_default_text_field_default_pug__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./blocks/text-field/_default/text-field_default.pug */ \"./blocks/text-field/_default/text-field_default.pug\");\n/* harmony import */ var _blocks_text_field_default_text_field_default_pug__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(_blocks_text_field_default_text_field_default_pug__WEBPACK_IMPORTED_MODULE_28__);\n/* harmony import */ var _blocks_text_field_activated_text_field_activated_scss__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./blocks/text-field/_activated/text-field_activated.scss */ \"./blocks/text-field/_activated/text-field_activated.scss\");\n/* harmony import */ var _blocks_text_field_activated_text_field_activated_scss__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(_blocks_text_field_activated_text_field_activated_scss__WEBPACK_IMPORTED_MODULE_29__);\n/* harmony import */ var _blocks_text_field_activated_text_field_activated_pug__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./blocks/text-field/_activated/text-field_activated.pug */ \"./blocks/text-field/_activated/text-field_activated.pug\");\n/* harmony import */ var _blocks_text_field_activated_text_field_activated_pug__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(_blocks_text_field_activated_text_field_activated_pug__WEBPACK_IMPORTED_MODULE_30__);\n/* harmony import */ var _blocks_checkbox_button_checkbox_button_pug__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./blocks/checkbox-button/checkbox-button.pug */ \"./blocks/checkbox-button/checkbox-button.pug\");\n/* harmony import */ var _blocks_checkbox_button_checkbox_button_pug__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(_blocks_checkbox_button_checkbox_button_pug__WEBPACK_IMPORTED_MODULE_31__);\n/* harmony import */ var _blocks_checkbox_button_checkbox_button_scss__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./blocks/checkbox-button/checkbox-button.scss */ \"./blocks/checkbox-button/checkbox-button.scss\");\n/* harmony import */ var _blocks_checkbox_button_checkbox_button_scss__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(_blocks_checkbox_button_checkbox_button_scss__WEBPACK_IMPORTED_MODULE_32__);\n/* harmony import */ var _blocks_radio_button_radio_button_pug__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./blocks/radio-button/radio-button.pug */ \"./blocks/radio-button/radio-button.pug\");\n/* harmony import */ var _blocks_radio_button_radio_button_pug__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(_blocks_radio_button_radio_button_pug__WEBPACK_IMPORTED_MODULE_33__);\n/* harmony import */ var _blocks_radio_button_radio_button_scss__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./blocks/radio-button/radio-button.scss */ \"./blocks/radio-button/radio-button.scss\");\n/* harmony import */ var _blocks_radio_button_radio_button_scss__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(_blocks_radio_button_radio_button_scss__WEBPACK_IMPORTED_MODULE_34__);\n/* harmony import */ var _blocks_toggle_toggle_pug__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./blocks/toggle/toggle.pug */ \"./blocks/toggle/toggle.pug\");\n/* harmony import */ var _blocks_toggle_toggle_pug__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(_blocks_toggle_toggle_pug__WEBPACK_IMPORTED_MODULE_35__);\n/* harmony import */ var _blocks_toggle_toggle_scss__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./blocks/toggle/toggle.scss */ \"./blocks/toggle/toggle.scss\");\n/* harmony import */ var _blocks_toggle_toggle_scss__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(_blocks_toggle_toggle_scss__WEBPACK_IMPORTED_MODULE_36__);\n/* harmony import */ var _blocks_like_button_like_button_pug__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./blocks/like-button/like-button.pug */ \"./blocks/like-button/like-button.pug\");\n/* harmony import */ var _blocks_like_button_like_button_pug__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(_blocks_like_button_like_button_pug__WEBPACK_IMPORTED_MODULE_37__);\n/* harmony import */ var _blocks_like_button_like_button_scss__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./blocks/like-button/like-button.scss */ \"./blocks/like-button/like-button.scss\");\n/* harmony import */ var _blocks_like_button_like_button_scss__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(_blocks_like_button_like_button_scss__WEBPACK_IMPORTED_MODULE_38__);\n/* harmony import */ var _blocks_rate_button_rate_button_pug__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./blocks/rate-button/rate-button.pug */ \"./blocks/rate-button/rate-button.pug\");\n/* harmony import */ var _blocks_rate_button_rate_button_pug__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(_blocks_rate_button_rate_button_pug__WEBPACK_IMPORTED_MODULE_39__);\n/* harmony import */ var _blocks_rate_button_rate_button_scss__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./blocks/rate-button/rate-button.scss */ \"./blocks/rate-button/rate-button.scss\");\n/* harmony import */ var _blocks_rate_button_rate_button_scss__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(_blocks_rate_button_rate_button_scss__WEBPACK_IMPORTED_MODULE_40__);\n/* harmony import */ var _blocks_button_button_scss__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./blocks/button/button.scss */ \"./blocks/button/button.scss\");\n/* harmony import */ var _blocks_button_button_scss__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(_blocks_button_button_scss__WEBPACK_IMPORTED_MODULE_41__);\n/* harmony import */ var _blocks_button_color_theme_filled_gradient_button_color_theme_filled_gradient_pug__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./blocks/button/_color-theme_filled-gradient/button_color-theme_filled-gradient.pug */ \"./blocks/button/_color-theme_filled-gradient/button_color-theme_filled-gradient.pug\");\n/* harmony import */ var _blocks_button_color_theme_filled_gradient_button_color_theme_filled_gradient_pug__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_blocks_button_color_theme_filled_gradient_button_color_theme_filled_gradient_pug__WEBPACK_IMPORTED_MODULE_42__);\n/* harmony import */ var _blocks_button_color_theme_filled_gradient_button_color_theme_filled_gradient_scss__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./blocks/button/_color-theme_filled-gradient/button_color-theme_filled-gradient.scss */ \"./blocks/button/_color-theme_filled-gradient/button_color-theme_filled-gradient.scss\");\n/* harmony import */ var _blocks_button_color_theme_filled_gradient_button_color_theme_filled_gradient_scss__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(_blocks_button_color_theme_filled_gradient_button_color_theme_filled_gradient_scss__WEBPACK_IMPORTED_MODULE_43__);\n/* harmony import */ var _blocks_button_color_theme_gradient_border_button_color_theme_gradient_border_scss__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./blocks/button/_color-theme_gradient-border/button_color-theme_gradient-border.scss */ \"./blocks/button/_color-theme_gradient-border/button_color-theme_gradient-border.scss\");\n/* harmony import */ var _blocks_button_color_theme_gradient_border_button_color_theme_gradient_border_scss__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(_blocks_button_color_theme_gradient_border_button_color_theme_gradient_border_scss__WEBPACK_IMPORTED_MODULE_44__);\n/* harmony import */ var _blocks_button_color_theme_gradient_border_button_color_theme_gradient_border_pug__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./blocks/button/_color-theme_gradient-border/button_color-theme_gradient-border.pug */ \"./blocks/button/_color-theme_gradient-border/button_color-theme_gradient-border.pug\");\n/* harmony import */ var _blocks_button_color_theme_gradient_border_button_color_theme_gradient_border_pug__WEBPACK_IMPORTED_MODULE_45___default = /*#__PURE__*/__webpack_require__.n(_blocks_button_color_theme_gradient_border_button_color_theme_gradient_border_pug__WEBPACK_IMPORTED_MODULE_45__);\n/* harmony import */ var _blocks_text_button_text_button_scss__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ./blocks/text-button/text-button.scss */ \"./blocks/text-button/text-button.scss\");\n/* harmony import */ var _blocks_text_button_text_button_scss__WEBPACK_IMPORTED_MODULE_46___default = /*#__PURE__*/__webpack_require__.n(_blocks_text_button_text_button_scss__WEBPACK_IMPORTED_MODULE_46__);\n/* harmony import */ var _blocks_text_button_color_ds50_text_button_color_ds50_scss__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ./blocks/text-button/_color_ds50/text-button_color_ds50.scss */ \"./blocks/text-button/_color_ds50/text-button_color_ds50.scss\");\n/* harmony import */ var _blocks_text_button_color_ds50_text_button_color_ds50_scss__WEBPACK_IMPORTED_MODULE_47___default = /*#__PURE__*/__webpack_require__.n(_blocks_text_button_color_ds50_text_button_color_ds50_scss__WEBPACK_IMPORTED_MODULE_47__);\n/* harmony import */ var _blocks_text_button_color_ds50_text_button_color_ds50_pug__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./blocks/text-button/_color_ds50/text-button_color_ds50.pug */ \"./blocks/text-button/_color_ds50/text-button_color_ds50.pug\");\n/* harmony import */ var _blocks_text_button_color_ds50_text_button_color_ds50_pug__WEBPACK_IMPORTED_MODULE_48___default = /*#__PURE__*/__webpack_require__.n(_blocks_text_button_color_ds50_text_button_color_ds50_pug__WEBPACK_IMPORTED_MODULE_48__);\n/* harmony import */ var _blocks_text_button_color_purple_text_button_color_purple_scss__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ./blocks/text-button/_color_purple/text-button_color_purple.scss */ \"./blocks/text-button/_color_purple/text-button_color_purple.scss\");\n/* harmony import */ var _blocks_text_button_color_purple_text_button_color_purple_scss__WEBPACK_IMPORTED_MODULE_49___default = /*#__PURE__*/__webpack_require__.n(_blocks_text_button_color_purple_text_button_color_purple_scss__WEBPACK_IMPORTED_MODULE_49__);\n/* harmony import */ var _blocks_text_button_color_purple_text_button_color_purple_pug__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./blocks/text-button/_color_purple/text-button_color_purple.pug */ \"./blocks/text-button/_color_purple/text-button_color_purple.pug\");\n/* harmony import */ var _blocks_text_button_color_purple_text_button_color_purple_pug__WEBPACK_IMPORTED_MODULE_50___default = /*#__PURE__*/__webpack_require__.n(_blocks_text_button_color_purple_text_button_color_purple_pug__WEBPACK_IMPORTED_MODULE_50__);\n/* harmony import */ var _blocks_button_button_pay_pug__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./blocks/button/button-pay.pug */ \"./blocks/button/button-pay.pug\");\n/* harmony import */ var _blocks_button_button_pay_pug__WEBPACK_IMPORTED_MODULE_51___default = /*#__PURE__*/__webpack_require__.n(_blocks_button_button_pay_pug__WEBPACK_IMPORTED_MODULE_51__);\n/* harmony import */ var _blocks_button_button_pay_scss__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./blocks/button/button-pay.scss */ \"./blocks/button/button-pay.scss\");\n/* harmony import */ var _blocks_button_button_pay_scss__WEBPACK_IMPORTED_MODULE_52___default = /*#__PURE__*/__webpack_require__.n(_blocks_button_button_pay_scss__WEBPACK_IMPORTED_MODULE_52__);\n/* harmony import */ var _project_container_colors_type_container_colors_type_scss__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./project/container-colors-type/container-colors-type.scss */ \"./project/container-colors-type/container-colors-type.scss\");\n/* harmony import */ var _project_container_colors_type_container_colors_type_scss__WEBPACK_IMPORTED_MODULE_53___default = /*#__PURE__*/__webpack_require__.n(_project_container_colors_type_container_colors_type_scss__WEBPACK_IMPORTED_MODULE_53__);\n/* harmony import */ var _project_container_colors_type_all_blocks_colors_descr_all_blocks_colors_descr_scss__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./project/container-colors-type/all-blocks-colors-descr/all-blocks-colors-descr.scss */ \"./project/container-colors-type/all-blocks-colors-descr/all-blocks-colors-descr.scss\");\n/* harmony import */ var _project_container_colors_type_all_blocks_colors_descr_all_blocks_colors_descr_scss__WEBPACK_IMPORTED_MODULE_54___default = /*#__PURE__*/__webpack_require__.n(_project_container_colors_type_all_blocks_colors_descr_all_blocks_colors_descr_scss__WEBPACK_IMPORTED_MODULE_54__);\n/* harmony import */ var _project_container_colors_type_all_blocks_hn_descr_all_blocks_hn_descr_scss__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./project/container-colors-type/all-blocks-hn-descr/all-blocks-hn-descr.scss */ \"./project/container-colors-type/all-blocks-hn-descr/all-blocks-hn-descr.scss\");\n/* harmony import */ var _project_container_colors_type_all_blocks_hn_descr_all_blocks_hn_descr_scss__WEBPACK_IMPORTED_MODULE_55___default = /*#__PURE__*/__webpack_require__.n(_project_container_colors_type_all_blocks_hn_descr_all_blocks_hn_descr_scss__WEBPACK_IMPORTED_MODULE_55__);\n/* harmony import */ var _project_simple_header_simple_header_logo_scss__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./project/simple-header/simple-header__logo.scss */ \"./project/simple-header/simple-header__logo.scss\");\n/* harmony import */ var _project_simple_header_simple_header_logo_scss__WEBPACK_IMPORTED_MODULE_56___default = /*#__PURE__*/__webpack_require__.n(_project_simple_header_simple_header_logo_scss__WEBPACK_IMPORTED_MODULE_56__);\n/* harmony import */ var _project_simple_header_simple_header_logo_pug__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./project/simple-header/simple-header__logo.pug */ \"./project/simple-header/simple-header__logo.pug\");\n/* harmony import */ var _project_simple_header_simple_header_logo_pug__WEBPACK_IMPORTED_MODULE_57___default = /*#__PURE__*/__webpack_require__.n(_project_simple_header_simple_header_logo_pug__WEBPACK_IMPORTED_MODULE_57__);\n/* harmony import */ var _project_body_body_scss__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(/*! ./project/body/body.scss */ \"./project/body/body.scss\");\n/* harmony import */ var _project_body_body_scss__WEBPACK_IMPORTED_MODULE_58___default = /*#__PURE__*/__webpack_require__.n(_project_body_body_scss__WEBPACK_IMPORTED_MODULE_58__);\n/* harmony import */ var _project_fonts_fonts_scss__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(/*! ./project/fonts/fonts.scss */ \"./project/fonts/fonts.scss\");\n/* harmony import */ var _project_fonts_fonts_scss__WEBPACK_IMPORTED_MODULE_59___default = /*#__PURE__*/__webpack_require__.n(_project_fonts_fonts_scss__WEBPACK_IMPORTED_MODULE_59__);\n/* harmony import */ var _pages_colors_type_pug__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(/*! ./pages/colors-type.pug */ \"./pages/colors-type.pug\");\n/* harmony import */ var _pages_colors_type_pug__WEBPACK_IMPORTED_MODULE_60___default = /*#__PURE__*/__webpack_require__.n(_pages_colors_type_pug__WEBPACK_IMPORTED_MODULE_60__);\n/* harmony import */ var _pages_form_elements_pug__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(/*! ./pages/form-elements.pug */ \"./pages/form-elements.pug\");\n/* harmony import */ var _pages_form_elements_pug__WEBPACK_IMPORTED_MODULE_61___default = /*#__PURE__*/__webpack_require__.n(_pages_form_elements_pug__WEBPACK_IMPORTED_MODULE_61__);\n/* harmony import */ var _blocks_logo_group_svg__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(/*! ./blocks/logo/group.svg */ \"./blocks/logo/group.svg\");\n/* harmony import */ var _svg_image_svg__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(/*! ./svg/image.svg */ \"./svg/image.svg\");\n/* harmony import */ var _svg_insert_emoticon_svg__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(/*! ./svg/insert_emoticon.svg */ \"./svg/insert_emoticon.svg\");\n/* harmony import */ var _svg_location_city_svg__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(/*! ./svg/location_city.svg */ \"./svg/location_city.svg\");\n// variables and mixins\r\n\r\n\r\n// import './~material-design-icons/iconfont/material-icons.css'; //этот импорт надо куда-то глобальнее перенести\r\n\r\n//// color-intro\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n////logo\r\n\r\n\r\n\r\n////header-intro\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n////text-field\r\n\r\n\r\n\r\n\r\n\r\n////checkbox-button\r\n\r\n\r\n\r\n////radio-button\r\n\r\n\r\n\r\n////toggle\r\n\r\n\r\n\r\n//// like-button\r\n\r\n\r\n\r\n//// like-button\r\n\r\n\r\n\r\n//// ordinary button\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n//// button only text\r\n\r\n\r\n\r\n\r\n\r\n\r\n//// button take my money\r\n\r\n\r\n///////////////////////////////////////////////////////\r\n////container-colors-type\r\n\r\n\r\n\r\n////simple-header\r\n\r\n\r\n////body\r\n\r\n////fonts\r\n\r\n\r\n////////////////////////////////////////\r\n// css\r\n// import '~material-design-icons/iconfont/material-icons.css';\r\n//pug\r\n\r\n\r\n\r\n//svg\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./mixins.scss":
/*!*********************!*\
  !*** ./mixins.scss ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./mixins.scss?");

/***/ }),

/***/ "./pages/colors-type.pug":
/*!*******************************!*\
  !*** ./pages/colors-type.pug ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + (\"\\u003C!DOCTYPE html\\u003E\\u003Chtml lang=\\\"en\\\"\\u003E\\u003Chead\\u003E\\u003Ctitle\\u003E\" + (pug.escape(null == (pug_interp = \"Colors&Type\") ? \"\" : pug_interp)) + \"\\u003C\\u002Ftitle\\u003E\\u003Cmeta charset=\\\"utf-8\\\"\\u003E\\u003C\\u002Fhead\\u003E\\u003Cbody\\u003E\" + (null == (pug_interp = __webpack_require__(/*! ../project/simple-header/simple-header__logo.pug */ \"./project/simple-header/simple-header__logo.pug\").call(this, locals)) ? \"\" : pug_interp));\npug_mixins[\"color-blocks\"] = pug_interp = function(color,numb){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv class=\\\"color-intro\\\"\\u003E \\u003Cdiv class=\\\"color-intro__color-block\\\"\\u003E\\u003Cdiv\" + (pug.attr(\"class\", pug.classes([attributes.class], [false]), false, true)) + \"\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"color-intro__color-descr\\\"\\u003E\\u003Cdiv class=\\\"color-intro__color-descr_color-name\\\"\\u003E\" + (pug.escape(null == (pug_interp = color) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"color-intro__color-descr_number\\\"\\u003E\" + (pug.escape(null == (pug_interp = numb) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\npug_mixins[\"fonts-descr\"] = pug_interp = function(f,d){\nvar block = (this && this.block), attributes = (this && this.attributes) || {};\npug_html = pug_html + \"\\u003Cdiv class=\\\"header-intro\\\"\\u003E\\u003Cdiv class=\\\"header-intro__hn\\\"\\u003E\\u003Cdiv\" + (pug.attr(\"class\", pug.classes([attributes.class1], [false]), false, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = f) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"header-intro__descr\\\"\\u003E\\u003Cdiv\" + (pug.attr(\"class\", pug.classes([attributes.class2], [false]), false, true)) + \"\\u003E\" + (pug.escape(null == (pug_interp = d) ? \"\" : pug_interp)) + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\";\n};\npug_html = pug_html + \"\\u003Cdiv class=\\\"container-colors-type\\\"\\u003E\\u003Cdiv class=\\\"all-blocks-colors-descr\\\"\\u003E\";\npug_mixins[\"color-blocks\"].call({\nattributes: {\"class\": \"color-intro__color-block_color_ds100\"}\n}, 'Dark Shade 100%','#1f2041');\npug_mixins[\"color-blocks\"].call({\nattributes: {\"class\": \"color-intro__color-block_color_ds75\"}\n}, 'Dark Shade 75%','#1f2041');\npug_mixins[\"color-blocks\"].call({\nattributes: {\"class\": \"color-intro__color-block_color_ds50\"}\n}, 'Dark Shade 50%','#1f2041');\npug_mixins[\"color-blocks\"].call({\nattributes: {\"class\": \"color-intro__color-block_color_ds25\"}\n}, 'Dark Shade 25%','#1f2041');\npug_mixins[\"color-blocks\"].call({\nattributes: {\"class\": \"color-intro__color-block_color_ds5\"}\n}, 'Dark Shade 5%','#1f2041');\npug_mixins[\"color-blocks\"].call({\nattributes: {\"class\": \"color-intro__color-block_color_purple\"}\n}, 'Purple','#Bc9cff');\npug_mixins[\"color-blocks\"].call({\nattributes: {\"class\": \"color-intro__color-block_color_green\"}\n}, 'Green','#6fcf97');\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003Cdiv class=\\\"all-blocks-hn-descr\\\"\\u003E\";\npug_mixins[\"fonts-descr\"].call({\nattributes: {\"class1\": \"header-intro__hn_size_h1\",\"class2\": \"header-intro__descr_size_h1\"}\n}, 'h1','This one is the sub-section or widget title');\npug_mixins[\"fonts-descr\"].call({\nattributes: {\"class1\": \"header-intro__hn_size_h2\",\"class2\": \"header-intro__descr_size_h2\"}\n}, 'h2','Next one is the item title inside widgets');\npug_mixins[\"fonts-descr\"].call({\nattributes: {\"class1\": \"header-intro__hn_size_h3\",\"class2\": \"header-intro__descr_size_h3\"}\n}, 'h3','this is a label or cta text');\npug_mixins[\"fonts-descr\"].call({\nattributes: {\"class1\": \"header-intro__hn_size_body\",\"class2\": \"header-intro__descr_size_body\"}\n}, 'Body','This is the body text which is used for most of the design, like paragraphs, lists, etc.');\npug_html = pug_html + \"\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fdiv\\u003E\\u003C\\u002Fbody\\u003E\\u003C\\u002Fhtml\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./pages/colors-type.pug?");

/***/ }),

/***/ "./pages/form-elements.pug":
/*!*********************************!*\
  !*** ./pages/form-elements.pug ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003C!DOCTYPE html\\u003E\\u003Chtml lang=\\\"en\\\"\\u003E\\u003Chead\\u003E\\u003Ctitle\\u003E\" + (pug.escape(null == (pug_interp = \"Form elements\") ? \"\" : pug_interp)) + \"\\u003C\\u002Ftitle\\u003E\\u003Cmeta charset=\\\"utf-8\\\"\\u003E\\u003C\\u002Fhead\\u003E\\u003Cbody\\u003E\" + (null == (pug_interp = __webpack_require__(/*! ../project/simple-header/simple-header__logo.pug */ \"./project/simple-header/simple-header__logo.pug\").call(this, locals)) ? \"\" : pug_interp) + \"\\u003Cform\\u003E\" + (null == (pug_interp = __webpack_require__(/*! ../blocks/text-field/_default/text-field_default.pug */ \"./blocks/text-field/_default/text-field_default.pug\").call(this, locals)) ? \"\" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ../blocks/text-field/_activated/text-field_activated.pug */ \"./blocks/text-field/_activated/text-field_activated.pug\").call(this, locals)) ? \"\" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ../blocks/checkbox-button/checkbox-button.pug */ \"./blocks/checkbox-button/checkbox-button.pug\").call(this, locals)) ? \"\" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ../blocks/radio-button/radio-button.pug */ \"./blocks/radio-button/radio-button.pug\").call(this, locals)) ? \"\" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ../blocks/toggle/toggle.pug */ \"./blocks/toggle/toggle.pug\").call(this, locals)) ? \"\" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ../blocks/like-button/like-button.pug */ \"./blocks/like-button/like-button.pug\").call(this, locals)) ? \"\" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ../blocks/rate-button/rate-button.pug */ \"./blocks/rate-button/rate-button.pug\").call(this, locals)) ? \"\" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ../blocks/button/_color-theme_filled-gradient/button_color-theme_filled-gradient.pug */ \"./blocks/button/_color-theme_filled-gradient/button_color-theme_filled-gradient.pug\").call(this, locals)) ? \"\" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ../blocks/button/_color-theme_gradient-border/button_color-theme_gradient-border.pug */ \"./blocks/button/_color-theme_gradient-border/button_color-theme_gradient-border.pug\").call(this, locals)) ? \"\" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ../blocks/text-button/_color_ds50/text-button_color_ds50.pug */ \"./blocks/text-button/_color_ds50/text-button_color_ds50.pug\").call(this, locals)) ? \"\" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ../blocks/text-button/_color_purple/text-button_color_purple.pug */ \"./blocks/text-button/_color_purple/text-button_color_purple.pug\").call(this, locals)) ? \"\" : pug_interp) + (null == (pug_interp = __webpack_require__(/*! ../blocks/button/button-pay.pug */ \"./blocks/button/button-pay.pug\").call(this, locals)) ? \"\" : pug_interp) + \"\\u003C\\u002Fform\\u003E\\u003C\\u002Fbody\\u003E\\u003C\\u002Fhtml\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./pages/form-elements.pug?");

/***/ }),

/***/ "./project/body/body.scss":
/*!********************************!*\
  !*** ./project/body/body.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./project/body/body.scss?");

/***/ }),

/***/ "./project/container-colors-type/all-blocks-colors-descr/all-blocks-colors-descr.scss":
/*!********************************************************************************************!*\
  !*** ./project/container-colors-type/all-blocks-colors-descr/all-blocks-colors-descr.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./project/container-colors-type/all-blocks-colors-descr/all-blocks-colors-descr.scss?");

/***/ }),

/***/ "./project/container-colors-type/all-blocks-hn-descr/all-blocks-hn-descr.scss":
/*!************************************************************************************!*\
  !*** ./project/container-colors-type/all-blocks-hn-descr/all-blocks-hn-descr.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./project/container-colors-type/all-blocks-hn-descr/all-blocks-hn-descr.scss?");

/***/ }),

/***/ "./project/container-colors-type/container-colors-type.scss":
/*!******************************************************************!*\
  !*** ./project/container-colors-type/container-colors-type.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./project/container-colors-type/container-colors-type.scss?");

/***/ }),

/***/ "./project/fonts/fonts.scss":
/*!**********************************!*\
  !*** ./project/fonts/fonts.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./project/fonts/fonts.scss?");

/***/ }),

/***/ "./project/simple-header/simple-header__logo.pug":
/*!*******************************************************!*\
  !*** ./project/simple-header/simple-header__logo.pug ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var pug = __webpack_require__(/*! ../../../node_modules/pug-runtime/index.js */ \"../node_modules/pug-runtime/index.js\");\n\nfunction template(locals) {var pug_html = \"\", pug_mixins = {}, pug_interp;pug_html = pug_html + \"\\u003Cdiv class=\\\"simple-header__logo\\\"\\u003E\" + (null == (pug_interp = __webpack_require__(/*! ../../blocks/logo/logo.pug */ \"./blocks/logo/logo.pug\").call(this, locals)) ? \"\" : pug_interp) + \"\\u003C\\u002Fdiv\\u003E\";;return pug_html;};\nmodule.exports = template;\n\n//# sourceURL=webpack:///./project/simple-header/simple-header__logo.pug?");

/***/ }),

/***/ "./project/simple-header/simple-header__logo.scss":
/*!********************************************************!*\
  !*** ./project/simple-header/simple-header__logo.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./project/simple-header/simple-header__logo.scss?");

/***/ }),

/***/ "./svg/image.svg":
/*!***********************!*\
  !*** ./svg/image.svg ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"d811ad583244ce9815d9084708963808.svg\");\n\n//# sourceURL=webpack:///./svg/image.svg?");

/***/ }),

/***/ "./svg/insert_emoticon.svg":
/*!*********************************!*\
  !*** ./svg/insert_emoticon.svg ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"dbc41c926815e8ece384d22cdb5964ed.svg\");\n\n//# sourceURL=webpack:///./svg/insert_emoticon.svg?");

/***/ }),

/***/ "./svg/location_city.svg":
/*!*******************************!*\
  !*** ./svg/location_city.svg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"7d5a88bf16c6a30e3e64193192a40a98.svg\");\n\n//# sourceURL=webpack:///./svg/location_city.svg?");

/***/ }),

/***/ "./variables.scss":
/*!************************!*\
  !*** ./variables.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin\n\n//# sourceURL=webpack:///./variables.scss?");

/***/ }),

/***/ 0:
/*!********************!*\
  !*** fs (ignored) ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/* (ignored) */\n\n//# sourceURL=webpack:///fs_(ignored)?");

/***/ })

/******/ });