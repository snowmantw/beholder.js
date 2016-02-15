(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(1);
	module.exports = __webpack_require__(190);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	__webpack_require__(2);
	
	__webpack_require__(189);
	
	if (global._babelPolyfill) {
	  throw new Error("only one instance of babel-polyfill is allowed");
	}
	global._babelPolyfill = true;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3);
	__webpack_require__(36);
	__webpack_require__(42);
	__webpack_require__(44);
	__webpack_require__(46);
	__webpack_require__(48);
	__webpack_require__(50);
	__webpack_require__(52);
	__webpack_require__(53);
	__webpack_require__(54);
	__webpack_require__(55);
	__webpack_require__(56);
	__webpack_require__(57);
	__webpack_require__(58);
	__webpack_require__(59);
	__webpack_require__(60);
	__webpack_require__(61);
	__webpack_require__(62);
	__webpack_require__(63);
	__webpack_require__(66);
	__webpack_require__(67);
	__webpack_require__(68);
	__webpack_require__(70);
	__webpack_require__(71);
	__webpack_require__(72);
	__webpack_require__(73);
	__webpack_require__(74);
	__webpack_require__(75);
	__webpack_require__(76);
	__webpack_require__(78);
	__webpack_require__(79);
	__webpack_require__(80);
	__webpack_require__(82);
	__webpack_require__(83);
	__webpack_require__(84);
	__webpack_require__(86);
	__webpack_require__(87);
	__webpack_require__(88);
	__webpack_require__(89);
	__webpack_require__(90);
	__webpack_require__(91);
	__webpack_require__(92);
	__webpack_require__(93);
	__webpack_require__(94);
	__webpack_require__(95);
	__webpack_require__(96);
	__webpack_require__(97);
	__webpack_require__(98);
	__webpack_require__(99);
	__webpack_require__(104);
	__webpack_require__(105);
	__webpack_require__(109);
	__webpack_require__(110);
	__webpack_require__(112);
	__webpack_require__(113);
	__webpack_require__(118);
	__webpack_require__(119);
	__webpack_require__(122);
	__webpack_require__(124);
	__webpack_require__(126);
	__webpack_require__(128);
	__webpack_require__(129);
	__webpack_require__(130);
	__webpack_require__(132);
	__webpack_require__(133);
	__webpack_require__(135);
	__webpack_require__(136);
	__webpack_require__(137);
	__webpack_require__(138);
	__webpack_require__(145);
	__webpack_require__(148);
	__webpack_require__(149);
	__webpack_require__(151);
	__webpack_require__(152);
	__webpack_require__(153);
	__webpack_require__(154);
	__webpack_require__(155);
	__webpack_require__(156);
	__webpack_require__(157);
	__webpack_require__(158);
	__webpack_require__(159);
	__webpack_require__(160);
	__webpack_require__(161);
	__webpack_require__(162);
	__webpack_require__(164);
	__webpack_require__(165);
	__webpack_require__(166);
	__webpack_require__(167);
	__webpack_require__(168);
	__webpack_require__(169);
	__webpack_require__(171);
	__webpack_require__(172);
	__webpack_require__(173);
	__webpack_require__(174);
	__webpack_require__(176);
	__webpack_require__(177);
	__webpack_require__(179);
	__webpack_require__(180);
	__webpack_require__(182);
	__webpack_require__(183);
	__webpack_require__(184);
	__webpack_require__(187);
	__webpack_require__(188);
	module.exports = __webpack_require__(7);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $                 = __webpack_require__(4)
	  , $export           = __webpack_require__(5)
	  , DESCRIPTORS       = __webpack_require__(10)
	  , createDesc        = __webpack_require__(9)
	  , html              = __webpack_require__(16)
	  , cel               = __webpack_require__(17)
	  , has               = __webpack_require__(19)
	  , cof               = __webpack_require__(20)
	  , invoke            = __webpack_require__(21)
	  , fails             = __webpack_require__(11)
	  , anObject          = __webpack_require__(22)
	  , aFunction         = __webpack_require__(15)
	  , isObject          = __webpack_require__(18)
	  , toObject          = __webpack_require__(23)
	  , toIObject         = __webpack_require__(25)
	  , toInteger         = __webpack_require__(27)
	  , toIndex           = __webpack_require__(28)
	  , toLength          = __webpack_require__(29)
	  , IObject           = __webpack_require__(26)
	  , IE_PROTO          = __webpack_require__(13)('__proto__')
	  , createArrayMethod = __webpack_require__(30)
	  , arrayIndexOf      = __webpack_require__(35)(false)
	  , ObjectProto       = Object.prototype
	  , ArrayProto        = Array.prototype
	  , arraySlice        = ArrayProto.slice
	  , arrayJoin         = ArrayProto.join
	  , defineProperty    = $.setDesc
	  , getOwnDescriptor  = $.getDesc
	  , defineProperties  = $.setDescs
	  , factories         = {}
	  , IE8_DOM_DEFINE;
	
	if(!DESCRIPTORS){
	  IE8_DOM_DEFINE = !fails(function(){
	    return defineProperty(cel('div'), 'a', {get: function(){ return 7; }}).a != 7;
	  });
	  $.setDesc = function(O, P, Attributes){
	    if(IE8_DOM_DEFINE)try {
	      return defineProperty(O, P, Attributes);
	    } catch(e){ /* empty */ }
	    if('get' in Attributes || 'set' in Attributes)throw TypeError('Accessors not supported!');
	    if('value' in Attributes)anObject(O)[P] = Attributes.value;
	    return O;
	  };
	  $.getDesc = function(O, P){
	    if(IE8_DOM_DEFINE)try {
	      return getOwnDescriptor(O, P);
	    } catch(e){ /* empty */ }
	    if(has(O, P))return createDesc(!ObjectProto.propertyIsEnumerable.call(O, P), O[P]);
	  };
	  $.setDescs = defineProperties = function(O, Properties){
	    anObject(O);
	    var keys   = $.getKeys(Properties)
	      , length = keys.length
	      , i = 0
	      , P;
	    while(length > i)$.setDesc(O, P = keys[i++], Properties[P]);
	    return O;
	  };
	}
	$export($export.S + $export.F * !DESCRIPTORS, 'Object', {
	  // 19.1.2.6 / 15.2.3.3 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $.getDesc,
	  // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
	  defineProperty: $.setDesc,
	  // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
	  defineProperties: defineProperties
	});
	
	  // IE 8- don't enum bug keys
	var keys1 = ('constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,' +
	            'toLocaleString,toString,valueOf').split(',')
	  // Additional keys for getOwnPropertyNames
	  , keys2 = keys1.concat('length', 'prototype')
	  , keysLen1 = keys1.length;
	
	// Create object with `null` prototype: use iframe Object with cleared prototype
	var createDict = function(){
	  // Thrash, waste and sodomy: IE GC bug
	  var iframe = cel('iframe')
	    , i      = keysLen1
	    , gt     = '>'
	    , iframeDocument;
	  iframe.style.display = 'none';
	  html.appendChild(iframe);
	  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
	  // createDict = iframe.contentWindow.Object;
	  // html.removeChild(iframe);
	  iframeDocument = iframe.contentWindow.document;
	  iframeDocument.open();
	  iframeDocument.write('<script>document.F=Object</script' + gt);
	  iframeDocument.close();
	  createDict = iframeDocument.F;
	  while(i--)delete createDict.prototype[keys1[i]];
	  return createDict();
	};
	var createGetKeys = function(names, length){
	  return function(object){
	    var O      = toIObject(object)
	      , i      = 0
	      , result = []
	      , key;
	    for(key in O)if(key != IE_PROTO)has(O, key) && result.push(key);
	    // Don't enum bug & hidden keys
	    while(length > i)if(has(O, key = names[i++])){
	      ~arrayIndexOf(result, key) || result.push(key);
	    }
	    return result;
	  };
	};
	var Empty = function(){};
	$export($export.S, 'Object', {
	  // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
	  getPrototypeOf: $.getProto = $.getProto || function(O){
	    O = toObject(O);
	    if(has(O, IE_PROTO))return O[IE_PROTO];
	    if(typeof O.constructor == 'function' && O instanceof O.constructor){
	      return O.constructor.prototype;
	    } return O instanceof Object ? ObjectProto : null;
	  },
	  // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $.getNames = $.getNames || createGetKeys(keys2, keys2.length, true),
	  // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
	  create: $.create = $.create || function(O, /*?*/Properties){
	    var result;
	    if(O !== null){
	      Empty.prototype = anObject(O);
	      result = new Empty();
	      Empty.prototype = null;
	      // add "__proto__" for Object.getPrototypeOf shim
	      result[IE_PROTO] = O;
	    } else result = createDict();
	    return Properties === undefined ? result : defineProperties(result, Properties);
	  },
	  // 19.1.2.14 / 15.2.3.14 Object.keys(O)
	  keys: $.getKeys = $.getKeys || createGetKeys(keys1, keysLen1, false)
	});
	
	var construct = function(F, len, args){
	  if(!(len in factories)){
	    for(var n = [], i = 0; i < len; i++)n[i] = 'a[' + i + ']';
	    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
	  }
	  return factories[len](F, args);
	};
	
	// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
	$export($export.P, 'Function', {
	  bind: function bind(that /*, args... */){
	    var fn       = aFunction(this)
	      , partArgs = arraySlice.call(arguments, 1);
	    var bound = function(/* args... */){
	      var args = partArgs.concat(arraySlice.call(arguments));
	      return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
	    };
	    if(isObject(fn.prototype))bound.prototype = fn.prototype;
	    return bound;
	  }
	});
	
	// fallback for not array-like ES3 strings and DOM objects
	$export($export.P + $export.F * fails(function(){
	  if(html)arraySlice.call(html);
	}), 'Array', {
	  slice: function(begin, end){
	    var len   = toLength(this.length)
	      , klass = cof(this);
	    end = end === undefined ? len : end;
	    if(klass == 'Array')return arraySlice.call(this, begin, end);
	    var start  = toIndex(begin, len)
	      , upTo   = toIndex(end, len)
	      , size   = toLength(upTo - start)
	      , cloned = Array(size)
	      , i      = 0;
	    for(; i < size; i++)cloned[i] = klass == 'String'
	      ? this.charAt(start + i)
	      : this[start + i];
	    return cloned;
	  }
	});
	$export($export.P + $export.F * (IObject != Object), 'Array', {
	  join: function join(separator){
	    return arrayJoin.call(IObject(this), separator === undefined ? ',' : separator);
	  }
	});
	
	// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
	$export($export.S, 'Array', {isArray: __webpack_require__(32)});
	
	var createArrayReduce = function(isRight){
	  return function(callbackfn, memo){
	    aFunction(callbackfn);
	    var O      = IObject(this)
	      , length = toLength(O.length)
	      , index  = isRight ? length - 1 : 0
	      , i      = isRight ? -1 : 1;
	    if(arguments.length < 2)for(;;){
	      if(index in O){
	        memo = O[index];
	        index += i;
	        break;
	      }
	      index += i;
	      if(isRight ? index < 0 : length <= index){
	        throw TypeError('Reduce of empty array with no initial value');
	      }
	    }
	    for(;isRight ? index >= 0 : length > index; index += i)if(index in O){
	      memo = callbackfn(memo, O[index], index, this);
	    }
	    return memo;
	  };
	};
	
	var methodize = function($fn){
	  return function(arg1/*, arg2 = undefined */){
	    return $fn(this, arg1, arguments[1]);
	  };
	};
	
	$export($export.P, 'Array', {
	  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
	  forEach: $.each = $.each || methodize(createArrayMethod(0)),
	  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
	  map: methodize(createArrayMethod(1)),
	  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
	  filter: methodize(createArrayMethod(2)),
	  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
	  some: methodize(createArrayMethod(3)),
	  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
	  every: methodize(createArrayMethod(4)),
	  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
	  reduce: createArrayReduce(false),
	  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
	  reduceRight: createArrayReduce(true),
	  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
	  indexOf: methodize(arrayIndexOf),
	  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
	  lastIndexOf: function(el, fromIndex /* = @[*-1] */){
	    var O      = toIObject(this)
	      , length = toLength(O.length)
	      , index  = length - 1;
	    if(arguments.length > 1)index = Math.min(index, toInteger(fromIndex));
	    if(index < 0)index = toLength(length + index);
	    for(;index >= 0; index--)if(index in O)if(O[index] === el)return index;
	    return -1;
	  }
	});
	
	// 20.3.3.1 / 15.9.4.4 Date.now()
	$export($export.S, 'Date', {now: function(){ return +new Date; }});
	
	var lz = function(num){
	  return num > 9 ? num : '0' + num;
	};
	
	// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
	// PhantomJS / old WebKit has a broken implementations
	$export($export.P + $export.F * (fails(function(){
	  return new Date(-5e13 - 1).toISOString() != '0385-07-25T07:06:39.999Z';
	}) || !fails(function(){
	  new Date(NaN).toISOString();
	})), 'Date', {
	  toISOString: function toISOString(){
	    if(!isFinite(this))throw RangeError('Invalid time value');
	    var d = this
	      , y = d.getUTCFullYear()
	      , m = d.getUTCMilliseconds()
	      , s = y < 0 ? '-' : y > 9999 ? '+' : '';
	    return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
	      '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
	      'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
	      ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
	  }
	});

/***/ },
/* 4 */
/***/ function(module, exports) {

	var $Object = Object;
	module.exports = {
	  create:     $Object.create,
	  getProto:   $Object.getPrototypeOf,
	  isEnum:     {}.propertyIsEnumerable,
	  getDesc:    $Object.getOwnPropertyDescriptor,
	  setDesc:    $Object.defineProperty,
	  setDescs:   $Object.defineProperties,
	  getKeys:    $Object.keys,
	  getNames:   $Object.getOwnPropertyNames,
	  getSymbols: $Object.getOwnPropertySymbols,
	  each:       [].forEach
	};

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , core      = __webpack_require__(7)
	  , hide      = __webpack_require__(8)
	  , redefine  = __webpack_require__(12)
	  , ctx       = __webpack_require__(14)
	  , PROTOTYPE = 'prototype';
	
	var $export = function(type, name, source){
	  var IS_FORCED = type & $export.F
	    , IS_GLOBAL = type & $export.G
	    , IS_STATIC = type & $export.S
	    , IS_PROTO  = type & $export.P
	    , IS_BIND   = type & $export.B
	    , target    = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE]
	    , exports   = IS_GLOBAL ? core : core[name] || (core[name] = {})
	    , expProto  = exports[PROTOTYPE] || (exports[PROTOTYPE] = {})
	    , key, own, out, exp;
	  if(IS_GLOBAL)source = name;
	  for(key in source){
	    // contains in native
	    own = !IS_FORCED && target && key in target;
	    // export native or passed
	    out = (own ? target : source)[key];
	    // bind timers to global for call from export context
	    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
	    // extend global
	    if(target && !own)redefine(target, key, out);
	    // export
	    if(exports[key] != out)hide(exports, key, exp);
	    if(IS_PROTO && expProto[key] != out)expProto[key] = out;
	  }
	};
	global.core = core;
	// type bitmap
	$export.F = 1;  // forced
	$export.G = 2;  // global
	$export.S = 4;  // static
	$export.P = 8;  // proto
	$export.B = 16; // bind
	$export.W = 32; // wrap
	module.exports = $export;

/***/ },
/* 6 */
/***/ function(module, exports) {

	// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
	var global = module.exports = typeof window != 'undefined' && window.Math == Math
	  ? window : typeof self != 'undefined' && self.Math == Math ? self : Function('return this')();
	if(typeof __g == 'number')__g = global; // eslint-disable-line no-undef

/***/ },
/* 7 */
/***/ function(module, exports) {

	var core = module.exports = {version: '1.2.6'};
	if(typeof __e == 'number')__e = core; // eslint-disable-line no-undef

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var $          = __webpack_require__(4)
	  , createDesc = __webpack_require__(9);
	module.exports = __webpack_require__(10) ? function(object, key, value){
	  return $.setDesc(object, key, createDesc(1, value));
	} : function(object, key, value){
	  object[key] = value;
	  return object;
	};

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = function(bitmap, value){
	  return {
	    enumerable  : !(bitmap & 1),
	    configurable: !(bitmap & 2),
	    writable    : !(bitmap & 4),
	    value       : value
	  };
	};

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	// Thank's IE8 for his funny defineProperty
	module.exports = !__webpack_require__(11)(function(){
	  return Object.defineProperty({}, 'a', {get: function(){ return 7; }}).a != 7;
	});

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = function(exec){
	  try {
	    return !!exec();
	  } catch(e){
	    return true;
	  }
	};

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	// add fake Function#toString
	// for correct work wrapped methods / constructors with methods like LoDash isNative
	var global    = __webpack_require__(6)
	  , hide      = __webpack_require__(8)
	  , SRC       = __webpack_require__(13)('src')
	  , TO_STRING = 'toString'
	  , $toString = Function[TO_STRING]
	  , TPL       = ('' + $toString).split(TO_STRING);
	
	__webpack_require__(7).inspectSource = function(it){
	  return $toString.call(it);
	};
	
	(module.exports = function(O, key, val, safe){
	  if(typeof val == 'function'){
	    val.hasOwnProperty(SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
	    val.hasOwnProperty('name') || hide(val, 'name', key);
	  }
	  if(O === global){
	    O[key] = val;
	  } else {
	    if(!safe)delete O[key];
	    hide(O, key, val);
	  }
	})(Function.prototype, TO_STRING, function toString(){
	  return typeof this == 'function' && this[SRC] || $toString.call(this);
	});

/***/ },
/* 13 */
/***/ function(module, exports) {

	var id = 0
	  , px = Math.random();
	module.exports = function(key){
	  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
	};

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	// optional / simple context binding
	var aFunction = __webpack_require__(15);
	module.exports = function(fn, that, length){
	  aFunction(fn);
	  if(that === undefined)return fn;
	  switch(length){
	    case 1: return function(a){
	      return fn.call(that, a);
	    };
	    case 2: return function(a, b){
	      return fn.call(that, a, b);
	    };
	    case 3: return function(a, b, c){
	      return fn.call(that, a, b, c);
	    };
	  }
	  return function(/* ...args */){
	    return fn.apply(that, arguments);
	  };
	};

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = function(it){
	  if(typeof it != 'function')throw TypeError(it + ' is not a function!');
	  return it;
	};

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6).document && document.documentElement;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18)
	  , document = __webpack_require__(6).document
	  // in old IE typeof document.createElement is 'object'
	  , is = isObject(document) && isObject(document.createElement);
	module.exports = function(it){
	  return is ? document.createElement(it) : {};
	};

/***/ },
/* 18 */
/***/ function(module, exports) {

	module.exports = function(it){
	  return typeof it === 'object' ? it !== null : typeof it === 'function';
	};

/***/ },
/* 19 */
/***/ function(module, exports) {

	var hasOwnProperty = {}.hasOwnProperty;
	module.exports = function(it, key){
	  return hasOwnProperty.call(it, key);
	};

/***/ },
/* 20 */
/***/ function(module, exports) {

	var toString = {}.toString;
	
	module.exports = function(it){
	  return toString.call(it).slice(8, -1);
	};

/***/ },
/* 21 */
/***/ function(module, exports) {

	// fast apply, http://jsperf.lnkit.com/fast-apply/5
	module.exports = function(fn, args, that){
	  var un = that === undefined;
	  switch(args.length){
	    case 0: return un ? fn()
	                      : fn.call(that);
	    case 1: return un ? fn(args[0])
	                      : fn.call(that, args[0]);
	    case 2: return un ? fn(args[0], args[1])
	                      : fn.call(that, args[0], args[1]);
	    case 3: return un ? fn(args[0], args[1], args[2])
	                      : fn.call(that, args[0], args[1], args[2]);
	    case 4: return un ? fn(args[0], args[1], args[2], args[3])
	                      : fn.call(that, args[0], args[1], args[2], args[3]);
	  } return              fn.apply(that, args);
	};

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(18);
	module.exports = function(it){
	  if(!isObject(it))throw TypeError(it + ' is not an object!');
	  return it;
	};

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.13 ToObject(argument)
	var defined = __webpack_require__(24);
	module.exports = function(it){
	  return Object(defined(it));
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	// 7.2.1 RequireObjectCoercible(argument)
	module.exports = function(it){
	  if(it == undefined)throw TypeError("Can't call method on  " + it);
	  return it;
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	// to indexed object, toObject with fallback for non-array-like ES3 strings
	var IObject = __webpack_require__(26)
	  , defined = __webpack_require__(24);
	module.exports = function(it){
	  return IObject(defined(it));
	};

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for non-array-like ES3 and non-enumerable old V8 strings
	var cof = __webpack_require__(20);
	module.exports = Object('z').propertyIsEnumerable(0) ? Object : function(it){
	  return cof(it) == 'String' ? it.split('') : Object(it);
	};

/***/ },
/* 27 */
/***/ function(module, exports) {

	// 7.1.4 ToInteger
	var ceil  = Math.ceil
	  , floor = Math.floor;
	module.exports = function(it){
	  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
	};

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27)
	  , max       = Math.max
	  , min       = Math.min;
	module.exports = function(index, length){
	  index = toInteger(index);
	  return index < 0 ? max(index + length, 0) : min(index, length);
	};

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.15 ToLength
	var toInteger = __webpack_require__(27)
	  , min       = Math.min;
	module.exports = function(it){
	  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
	};

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	// 0 -> Array#forEach
	// 1 -> Array#map
	// 2 -> Array#filter
	// 3 -> Array#some
	// 4 -> Array#every
	// 5 -> Array#find
	// 6 -> Array#findIndex
	var ctx      = __webpack_require__(14)
	  , IObject  = __webpack_require__(26)
	  , toObject = __webpack_require__(23)
	  , toLength = __webpack_require__(29)
	  , asc      = __webpack_require__(31);
	module.exports = function(TYPE){
	  var IS_MAP        = TYPE == 1
	    , IS_FILTER     = TYPE == 2
	    , IS_SOME       = TYPE == 3
	    , IS_EVERY      = TYPE == 4
	    , IS_FIND_INDEX = TYPE == 6
	    , NO_HOLES      = TYPE == 5 || IS_FIND_INDEX;
	  return function($this, callbackfn, that){
	    var O      = toObject($this)
	      , self   = IObject(O)
	      , f      = ctx(callbackfn, that, 3)
	      , length = toLength(self.length)
	      , index  = 0
	      , result = IS_MAP ? asc($this, length) : IS_FILTER ? asc($this, 0) : undefined
	      , val, res;
	    for(;length > index; index++)if(NO_HOLES || index in self){
	      val = self[index];
	      res = f(val, index, O);
	      if(TYPE){
	        if(IS_MAP)result[index] = res;            // map
	        else if(res)switch(TYPE){
	          case 3: return true;                    // some
	          case 5: return val;                     // find
	          case 6: return index;                   // findIndex
	          case 2: result.push(val);               // filter
	        } else if(IS_EVERY)return false;          // every
	      }
	    }
	    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
	  };
	};

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
	var isObject = __webpack_require__(18)
	  , isArray  = __webpack_require__(32)
	  , SPECIES  = __webpack_require__(33)('species');
	module.exports = function(original, length){
	  var C;
	  if(isArray(original)){
	    C = original.constructor;
	    // cross-realm fallback
	    if(typeof C == 'function' && (C === Array || isArray(C.prototype)))C = undefined;
	    if(isObject(C)){
	      C = C[SPECIES];
	      if(C === null)C = undefined;
	    }
	  } return new (C === undefined ? Array : C)(length);
	};

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.2 IsArray(argument)
	var cof = __webpack_require__(20);
	module.exports = Array.isArray || function(arg){
	  return cof(arg) == 'Array';
	};

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var store  = __webpack_require__(34)('wks')
	  , uid    = __webpack_require__(13)
	  , Symbol = __webpack_require__(6).Symbol;
	module.exports = function(name){
	  return store[name] || (store[name] =
	    Symbol && Symbol[name] || (Symbol || uid)('Symbol.' + name));
	};

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var global = __webpack_require__(6)
	  , SHARED = '__core-js_shared__'
	  , store  = global[SHARED] || (global[SHARED] = {});
	module.exports = function(key){
	  return store[key] || (store[key] = {});
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	// false -> Array#indexOf
	// true  -> Array#includes
	var toIObject = __webpack_require__(25)
	  , toLength  = __webpack_require__(29)
	  , toIndex   = __webpack_require__(28);
	module.exports = function(IS_INCLUDES){
	  return function($this, el, fromIndex){
	    var O      = toIObject($this)
	      , length = toLength(O.length)
	      , index  = toIndex(fromIndex, length)
	      , value;
	    // Array#includes uses SameValueZero equality algorithm
	    if(IS_INCLUDES && el != el)while(length > index){
	      value = O[index++];
	      if(value != value)return true;
	    // Array#toIndex ignores holes, Array#includes - not
	    } else for(;length > index; index++)if(IS_INCLUDES || index in O){
	      if(O[index] === el)return IS_INCLUDES || index;
	    } return !IS_INCLUDES && -1;
	  };
	};

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// ECMAScript 6 symbols shim
	var $              = __webpack_require__(4)
	  , global         = __webpack_require__(6)
	  , has            = __webpack_require__(19)
	  , DESCRIPTORS    = __webpack_require__(10)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , $fails         = __webpack_require__(11)
	  , shared         = __webpack_require__(34)
	  , setToStringTag = __webpack_require__(37)
	  , uid            = __webpack_require__(13)
	  , wks            = __webpack_require__(33)
	  , keyOf          = __webpack_require__(38)
	  , $names         = __webpack_require__(39)
	  , enumKeys       = __webpack_require__(40)
	  , isArray        = __webpack_require__(32)
	  , anObject       = __webpack_require__(22)
	  , toIObject      = __webpack_require__(25)
	  , createDesc     = __webpack_require__(9)
	  , getDesc        = $.getDesc
	  , setDesc        = $.setDesc
	  , _create        = $.create
	  , getNames       = $names.get
	  , $Symbol        = global.Symbol
	  , $JSON          = global.JSON
	  , _stringify     = $JSON && $JSON.stringify
	  , setter         = false
	  , HIDDEN         = wks('_hidden')
	  , isEnum         = $.isEnum
	  , SymbolRegistry = shared('symbol-registry')
	  , AllSymbols     = shared('symbols')
	  , useNative      = typeof $Symbol == 'function'
	  , ObjectProto    = Object.prototype;
	
	// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
	var setSymbolDesc = DESCRIPTORS && $fails(function(){
	  return _create(setDesc({}, 'a', {
	    get: function(){ return setDesc(this, 'a', {value: 7}).a; }
	  })).a != 7;
	}) ? function(it, key, D){
	  var protoDesc = getDesc(ObjectProto, key);
	  if(protoDesc)delete ObjectProto[key];
	  setDesc(it, key, D);
	  if(protoDesc && it !== ObjectProto)setDesc(ObjectProto, key, protoDesc);
	} : setDesc;
	
	var wrap = function(tag){
	  var sym = AllSymbols[tag] = _create($Symbol.prototype);
	  sym._k = tag;
	  DESCRIPTORS && setter && setSymbolDesc(ObjectProto, tag, {
	    configurable: true,
	    set: function(value){
	      if(has(this, HIDDEN) && has(this[HIDDEN], tag))this[HIDDEN][tag] = false;
	      setSymbolDesc(this, tag, createDesc(1, value));
	    }
	  });
	  return sym;
	};
	
	var isSymbol = function(it){
	  return typeof it == 'symbol';
	};
	
	var $defineProperty = function defineProperty(it, key, D){
	  if(D && has(AllSymbols, key)){
	    if(!D.enumerable){
	      if(!has(it, HIDDEN))setDesc(it, HIDDEN, createDesc(1, {}));
	      it[HIDDEN][key] = true;
	    } else {
	      if(has(it, HIDDEN) && it[HIDDEN][key])it[HIDDEN][key] = false;
	      D = _create(D, {enumerable: createDesc(0, false)});
	    } return setSymbolDesc(it, key, D);
	  } return setDesc(it, key, D);
	};
	var $defineProperties = function defineProperties(it, P){
	  anObject(it);
	  var keys = enumKeys(P = toIObject(P))
	    , i    = 0
	    , l = keys.length
	    , key;
	  while(l > i)$defineProperty(it, key = keys[i++], P[key]);
	  return it;
	};
	var $create = function create(it, P){
	  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
	};
	var $propertyIsEnumerable = function propertyIsEnumerable(key){
	  var E = isEnum.call(this, key);
	  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key]
	    ? E : true;
	};
	var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key){
	  var D = getDesc(it = toIObject(it), key);
	  if(D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key]))D.enumerable = true;
	  return D;
	};
	var $getOwnPropertyNames = function getOwnPropertyNames(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(!has(AllSymbols, key = names[i++]) && key != HIDDEN)result.push(key);
	  return result;
	};
	var $getOwnPropertySymbols = function getOwnPropertySymbols(it){
	  var names  = getNames(toIObject(it))
	    , result = []
	    , i      = 0
	    , key;
	  while(names.length > i)if(has(AllSymbols, key = names[i++]))result.push(AllSymbols[key]);
	  return result;
	};
	var $stringify = function stringify(it){
	  if(it === undefined || isSymbol(it))return; // IE8 returns string on undefined
	  var args = [it]
	    , i    = 1
	    , $$   = arguments
	    , replacer, $replacer;
	  while($$.length > i)args.push($$[i++]);
	  replacer = args[1];
	  if(typeof replacer == 'function')$replacer = replacer;
	  if($replacer || !isArray(replacer))replacer = function(key, value){
	    if($replacer)value = $replacer.call(this, key, value);
	    if(!isSymbol(value))return value;
	  };
	  args[1] = replacer;
	  return _stringify.apply($JSON, args);
	};
	var buggyJSON = $fails(function(){
	  var S = $Symbol();
	  // MS Edge converts symbol values to JSON as {}
	  // WebKit converts symbol values to JSON as null
	  // V8 throws on boxed symbols
	  return _stringify([S]) != '[null]' || _stringify({a: S}) != '{}' || _stringify(Object(S)) != '{}';
	});
	
	// 19.4.1.1 Symbol([description])
	if(!useNative){
	  $Symbol = function Symbol(){
	    if(isSymbol(this))throw TypeError('Symbol is not a constructor');
	    return wrap(uid(arguments.length > 0 ? arguments[0] : undefined));
	  };
	  redefine($Symbol.prototype, 'toString', function toString(){
	    return this._k;
	  });
	
	  isSymbol = function(it){
	    return it instanceof $Symbol;
	  };
	
	  $.create     = $create;
	  $.isEnum     = $propertyIsEnumerable;
	  $.getDesc    = $getOwnPropertyDescriptor;
	  $.setDesc    = $defineProperty;
	  $.setDescs   = $defineProperties;
	  $.getNames   = $names.get = $getOwnPropertyNames;
	  $.getSymbols = $getOwnPropertySymbols;
	
	  if(DESCRIPTORS && !__webpack_require__(41)){
	    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
	  }
	}
	
	var symbolStatics = {
	  // 19.4.2.1 Symbol.for(key)
	  'for': function(key){
	    return has(SymbolRegistry, key += '')
	      ? SymbolRegistry[key]
	      : SymbolRegistry[key] = $Symbol(key);
	  },
	  // 19.4.2.5 Symbol.keyFor(sym)
	  keyFor: function keyFor(key){
	    return keyOf(SymbolRegistry, key);
	  },
	  useSetter: function(){ setter = true; },
	  useSimple: function(){ setter = false; }
	};
	// 19.4.2.2 Symbol.hasInstance
	// 19.4.2.3 Symbol.isConcatSpreadable
	// 19.4.2.4 Symbol.iterator
	// 19.4.2.6 Symbol.match
	// 19.4.2.8 Symbol.replace
	// 19.4.2.9 Symbol.search
	// 19.4.2.10 Symbol.species
	// 19.4.2.11 Symbol.split
	// 19.4.2.12 Symbol.toPrimitive
	// 19.4.2.13 Symbol.toStringTag
	// 19.4.2.14 Symbol.unscopables
	$.each.call((
	  'hasInstance,isConcatSpreadable,iterator,match,replace,search,' +
	  'species,split,toPrimitive,toStringTag,unscopables'
	).split(','), function(it){
	  var sym = wks(it);
	  symbolStatics[it] = useNative ? sym : wrap(sym);
	});
	
	setter = true;
	
	$export($export.G + $export.W, {Symbol: $Symbol});
	
	$export($export.S, 'Symbol', symbolStatics);
	
	$export($export.S + $export.F * !useNative, 'Object', {
	  // 19.1.2.2 Object.create(O [, Properties])
	  create: $create,
	  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
	  defineProperty: $defineProperty,
	  // 19.1.2.3 Object.defineProperties(O, Properties)
	  defineProperties: $defineProperties,
	  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
	  // 19.1.2.7 Object.getOwnPropertyNames(O)
	  getOwnPropertyNames: $getOwnPropertyNames,
	  // 19.1.2.8 Object.getOwnPropertySymbols(O)
	  getOwnPropertySymbols: $getOwnPropertySymbols
	});
	
	// 24.3.2 JSON.stringify(value [, replacer [, space]])
	$JSON && $export($export.S + $export.F * (!useNative || buggyJSON), 'JSON', {stringify: $stringify});
	
	// 19.4.3.5 Symbol.prototype[@@toStringTag]
	setToStringTag($Symbol, 'Symbol');
	// 20.2.1.9 Math[@@toStringTag]
	setToStringTag(Math, 'Math', true);
	// 24.3.3 JSON[@@toStringTag]
	setToStringTag(global.JSON, 'JSON', true);

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var def = __webpack_require__(4).setDesc
	  , has = __webpack_require__(19)
	  , TAG = __webpack_require__(33)('toStringTag');
	
	module.exports = function(it, tag, stat){
	  if(it && !has(it = stat ? it : it.prototype, TAG))def(it, TAG, {configurable: true, value: tag});
	};

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(4)
	  , toIObject = __webpack_require__(25);
	module.exports = function(object, el){
	  var O      = toIObject(object)
	    , keys   = $.getKeys(O)
	    , length = keys.length
	    , index  = 0
	    , key;
	  while(length > index)if(O[key = keys[index++]] === el)return key;
	};

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
	var toIObject = __webpack_require__(25)
	  , getNames  = __webpack_require__(4).getNames
	  , toString  = {}.toString;
	
	var windowNames = typeof window == 'object' && Object.getOwnPropertyNames
	  ? Object.getOwnPropertyNames(window) : [];
	
	var getWindowNames = function(it){
	  try {
	    return getNames(it);
	  } catch(e){
	    return windowNames.slice();
	  }
	};
	
	module.exports.get = function getOwnPropertyNames(it){
	  if(windowNames && toString.call(it) == '[object Window]')return getWindowNames(it);
	  return getNames(toIObject(it));
	};

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	// all enumerable object keys, includes symbols
	var $ = __webpack_require__(4);
	module.exports = function(it){
	  var keys       = $.getKeys(it)
	    , getSymbols = $.getSymbols;
	  if(getSymbols){
	    var symbols = getSymbols(it)
	      , isEnum  = $.isEnum
	      , i       = 0
	      , key;
	    while(symbols.length > i)if(isEnum.call(it, key = symbols[i++]))keys.push(key);
	  }
	  return keys;
	};

/***/ },
/* 41 */
/***/ function(module, exports) {

	module.exports = false;

/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.1 Object.assign(target, source)
	var $export = __webpack_require__(5);
	
	$export($export.S + $export.F, 'Object', {assign: __webpack_require__(43)});

/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.1 Object.assign(target, source, ...)
	var $        = __webpack_require__(4)
	  , toObject = __webpack_require__(23)
	  , IObject  = __webpack_require__(26);
	
	// should work with symbols and should have deterministic property order (V8 bug)
	module.exports = __webpack_require__(11)(function(){
	  var a = Object.assign
	    , A = {}
	    , B = {}
	    , S = Symbol()
	    , K = 'abcdefghijklmnopqrst';
	  A[S] = 7;
	  K.split('').forEach(function(k){ B[k] = k; });
	  return a({}, A)[S] != 7 || Object.keys(a({}, B)).join('') != K;
	}) ? function assign(target, source){ // eslint-disable-line no-unused-vars
	  var T     = toObject(target)
	    , $$    = arguments
	    , $$len = $$.length
	    , index = 1
	    , getKeys    = $.getKeys
	    , getSymbols = $.getSymbols
	    , isEnum     = $.isEnum;
	  while($$len > index){
	    var S      = IObject($$[index++])
	      , keys   = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S)
	      , length = keys.length
	      , j      = 0
	      , key;
	    while(length > j)if(isEnum.call(S, key = keys[j++]))T[key] = S[key];
	  }
	  return T;
	} : Object.assign;

/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.10 Object.is(value1, value2)
	var $export = __webpack_require__(5);
	$export($export.S, 'Object', {is: __webpack_require__(45)});

/***/ },
/* 45 */
/***/ function(module, exports) {

	// 7.2.9 SameValue(x, y)
	module.exports = Object.is || function is(x, y){
	  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
	};

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.3.19 Object.setPrototypeOf(O, proto)
	var $export = __webpack_require__(5);
	$export($export.S, 'Object', {setPrototypeOf: __webpack_require__(47).set});

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	// Works with __proto__ only. Old v8 can't work with null proto objects.
	/* eslint-disable no-proto */
	var getDesc  = __webpack_require__(4).getDesc
	  , isObject = __webpack_require__(18)
	  , anObject = __webpack_require__(22);
	var check = function(O, proto){
	  anObject(O);
	  if(!isObject(proto) && proto !== null)throw TypeError(proto + ": can't set as prototype!");
	};
	module.exports = {
	  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
	    function(test, buggy, set){
	      try {
	        set = __webpack_require__(14)(Function.call, getDesc(Object.prototype, '__proto__').set, 2);
	        set(test, []);
	        buggy = !(test instanceof Array);
	      } catch(e){ buggy = true; }
	      return function setPrototypeOf(O, proto){
	        check(O, proto);
	        if(buggy)O.__proto__ = proto;
	        else set(O, proto);
	        return O;
	      };
	    }({}, false) : undefined),
	  check: check
	};

/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 19.1.3.6 Object.prototype.toString()
	var classof = __webpack_require__(49)
	  , test    = {};
	test[__webpack_require__(33)('toStringTag')] = 'z';
	if(test + '' != '[object z]'){
	  __webpack_require__(12)(Object.prototype, 'toString', function toString(){
	    return '[object ' + classof(this) + ']';
	  }, true);
	}

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	// getting tag from 19.1.3.6 Object.prototype.toString()
	var cof = __webpack_require__(20)
	  , TAG = __webpack_require__(33)('toStringTag')
	  // ES3 wrong here
	  , ARG = cof(function(){ return arguments; }()) == 'Arguments';
	
	module.exports = function(it){
	  var O, T, B;
	  return it === undefined ? 'Undefined' : it === null ? 'Null'
	    // @@toStringTag case
	    : typeof (T = (O = Object(it))[TAG]) == 'string' ? T
	    // builtinTag case
	    : ARG ? cof(O)
	    // ES3 arguments fallback
	    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
	};

/***/ },
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.5 Object.freeze(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('freeze', function($freeze){
	  return function freeze(it){
	    return $freeze && isObject(it) ? $freeze(it) : it;
	  };
	});

/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	// most Object methods by ES6 should accept primitives
	var $export = __webpack_require__(5)
	  , core    = __webpack_require__(7)
	  , fails   = __webpack_require__(11);
	module.exports = function(KEY, exec){
	  var fn  = (core.Object || {})[KEY] || Object[KEY]
	    , exp = {};
	  exp[KEY] = exec(fn);
	  $export($export.S + $export.F * fails(function(){ fn(1); }), 'Object', exp);
	};

/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.17 Object.seal(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('seal', function($seal){
	  return function seal(it){
	    return $seal && isObject(it) ? $seal(it) : it;
	  };
	});

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.15 Object.preventExtensions(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('preventExtensions', function($preventExtensions){
	  return function preventExtensions(it){
	    return $preventExtensions && isObject(it) ? $preventExtensions(it) : it;
	  };
	});

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.12 Object.isFrozen(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('isFrozen', function($isFrozen){
	  return function isFrozen(it){
	    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
	  };
	});

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.13 Object.isSealed(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('isSealed', function($isSealed){
	  return function isSealed(it){
	    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
	  };
	});

/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.11 Object.isExtensible(O)
	var isObject = __webpack_require__(18);
	
	__webpack_require__(51)('isExtensible', function($isExtensible){
	  return function isExtensible(it){
	    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
	  };
	});

/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
	var toIObject = __webpack_require__(25);
	
	__webpack_require__(51)('getOwnPropertyDescriptor', function($getOwnPropertyDescriptor){
	  return function getOwnPropertyDescriptor(it, key){
	    return $getOwnPropertyDescriptor(toIObject(it), key);
	  };
	});

/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.9 Object.getPrototypeOf(O)
	var toObject = __webpack_require__(23);
	
	__webpack_require__(51)('getPrototypeOf', function($getPrototypeOf){
	  return function getPrototypeOf(it){
	    return $getPrototypeOf(toObject(it));
	  };
	});

/***/ },
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.14 Object.keys(O)
	var toObject = __webpack_require__(23);
	
	__webpack_require__(51)('keys', function($keys){
	  return function keys(it){
	    return $keys(toObject(it));
	  };
	});

/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	// 19.1.2.7 Object.getOwnPropertyNames(O)
	__webpack_require__(51)('getOwnPropertyNames', function(){
	  return __webpack_require__(39).get;
	});

/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var setDesc    = __webpack_require__(4).setDesc
	  , createDesc = __webpack_require__(9)
	  , has        = __webpack_require__(19)
	  , FProto     = Function.prototype
	  , nameRE     = /^\s*function ([^ (]*)/
	  , NAME       = 'name';
	// 19.2.4.2 name
	NAME in FProto || __webpack_require__(10) && setDesc(FProto, NAME, {
	  configurable: true,
	  get: function(){
	    var match = ('' + this).match(nameRE)
	      , name  = match ? match[1] : '';
	    has(this, NAME) || setDesc(this, NAME, createDesc(5, name));
	    return name;
	  }
	});

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $             = __webpack_require__(4)
	  , isObject      = __webpack_require__(18)
	  , HAS_INSTANCE  = __webpack_require__(33)('hasInstance')
	  , FunctionProto = Function.prototype;
	// 19.2.3.6 Function.prototype[@@hasInstance](V)
	if(!(HAS_INSTANCE in FunctionProto))$.setDesc(FunctionProto, HAS_INSTANCE, {value: function(O){
	  if(typeof this != 'function' || !isObject(O))return false;
	  if(!isObject(this.prototype))return O instanceof this;
	  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
	  while(O = $.getProto(O))if(this.prototype === O)return true;
	  return false;
	}});

/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $           = __webpack_require__(4)
	  , global      = __webpack_require__(6)
	  , has         = __webpack_require__(19)
	  , cof         = __webpack_require__(20)
	  , toPrimitive = __webpack_require__(64)
	  , fails       = __webpack_require__(11)
	  , $trim       = __webpack_require__(65).trim
	  , NUMBER      = 'Number'
	  , $Number     = global[NUMBER]
	  , Base        = $Number
	  , proto       = $Number.prototype
	  // Opera ~12 has broken Object#toString
	  , BROKEN_COF  = cof($.create(proto)) == NUMBER
	  , TRIM        = 'trim' in String.prototype;
	
	// 7.1.3 ToNumber(argument)
	var toNumber = function(argument){
	  var it = toPrimitive(argument, false);
	  if(typeof it == 'string' && it.length > 2){
	    it = TRIM ? it.trim() : $trim(it, 3);
	    var first = it.charCodeAt(0)
	      , third, radix, maxCode;
	    if(first === 43 || first === 45){
	      third = it.charCodeAt(2);
	      if(third === 88 || third === 120)return NaN; // Number('+0x1') should be NaN, old V8 fix
	    } else if(first === 48){
	      switch(it.charCodeAt(1)){
	        case 66 : case 98  : radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
	        case 79 : case 111 : radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
	        default : return +it;
	      }
	      for(var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++){
	        code = digits.charCodeAt(i);
	        // parseInt parses a string to a first unavailable symbol
	        // but ToNumber should return NaN if a string contains unavailable symbols
	        if(code < 48 || code > maxCode)return NaN;
	      } return parseInt(digits, radix);
	    }
	  } return +it;
	};
	
	if(!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')){
	  $Number = function Number(value){
	    var it = arguments.length < 1 ? 0 : value
	      , that = this;
	    return that instanceof $Number
	      // check on 1..constructor(foo) case
	      && (BROKEN_COF ? fails(function(){ proto.valueOf.call(that); }) : cof(that) != NUMBER)
	        ? new Base(toNumber(it)) : toNumber(it);
	  };
	  $.each.call(__webpack_require__(10) ? $.getNames(Base) : (
	    // ES3:
	    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
	    // ES6 (in case, if modules with ES6 Number statics required before):
	    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
	    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
	  ).split(','), function(key){
	    if(has(Base, key) && !has($Number, key)){
	      $.setDesc($Number, key, $.getDesc(Base, key));
	    }
	  });
	  $Number.prototype = proto;
	  proto.constructor = $Number;
	  __webpack_require__(12)(global, NUMBER, $Number);
	}

/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	// 7.1.1 ToPrimitive(input [, PreferredType])
	var isObject = __webpack_require__(18);
	// instead of the ES6 spec version, we didn't implement @@toPrimitive case
	// and the second argument - flag - preferred type is a string
	module.exports = function(it, S){
	  if(!isObject(it))return it;
	  var fn, val;
	  if(S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it)))return val;
	  if(!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it)))return val;
	  throw TypeError("Can't convert object to primitive value");
	};

/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5)
	  , defined = __webpack_require__(24)
	  , fails   = __webpack_require__(11)
	  , spaces  = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
	      '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF'
	  , space   = '[' + spaces + ']'
	  , non     = '\u200b\u0085'
	  , ltrim   = RegExp('^' + space + space + '*')
	  , rtrim   = RegExp(space + space + '*$');
	
	var exporter = function(KEY, exec){
	  var exp  = {};
	  exp[KEY] = exec(trim);
	  $export($export.P + $export.F * fails(function(){
	    return !!spaces[KEY]() || non[KEY]() != non;
	  }), 'String', exp);
	};
	
	// 1 -> String#trimLeft
	// 2 -> String#trimRight
	// 3 -> String#trim
	var trim = exporter.trim = function(string, TYPE){
	  string = String(defined(string));
	  if(TYPE & 1)string = string.replace(ltrim, '');
	  if(TYPE & 2)string = string.replace(rtrim, '');
	  return string;
	};
	
	module.exports = exporter;

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.1 Number.EPSILON
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {EPSILON: Math.pow(2, -52)});

/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.2 Number.isFinite(number)
	var $export   = __webpack_require__(5)
	  , _isFinite = __webpack_require__(6).isFinite;
	
	$export($export.S, 'Number', {
	  isFinite: function isFinite(it){
	    return typeof it == 'number' && _isFinite(it);
	  }
	});

/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {isInteger: __webpack_require__(69)});

/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.3 Number.isInteger(number)
	var isObject = __webpack_require__(18)
	  , floor    = Math.floor;
	module.exports = function isInteger(it){
	  return !isObject(it) && isFinite(it) && floor(it) === it;
	};

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.4 Number.isNaN(number)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {
	  isNaN: function isNaN(number){
	    return number != number;
	  }
	});

/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.5 Number.isSafeInteger(number)
	var $export   = __webpack_require__(5)
	  , isInteger = __webpack_require__(69)
	  , abs       = Math.abs;
	
	$export($export.S, 'Number', {
	  isSafeInteger: function isSafeInteger(number){
	    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
	  }
	});

/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.6 Number.MAX_SAFE_INTEGER
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {MAX_SAFE_INTEGER: 0x1fffffffffffff});

/***/ },
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.10 Number.MIN_SAFE_INTEGER
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {MIN_SAFE_INTEGER: -0x1fffffffffffff});

/***/ },
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.12 Number.parseFloat(string)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {parseFloat: parseFloat});

/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	// 20.1.2.13 Number.parseInt(string, radix)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Number', {parseInt: parseInt});

/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.3 Math.acosh(x)
	var $export = __webpack_require__(5)
	  , log1p   = __webpack_require__(77)
	  , sqrt    = Math.sqrt
	  , $acosh  = Math.acosh;
	
	// V8 bug https://code.google.com/p/v8/issues/detail?id=3509
	$export($export.S + $export.F * !($acosh && Math.floor($acosh(Number.MAX_VALUE)) == 710), 'Math', {
	  acosh: function acosh(x){
	    return (x = +x) < 1 ? NaN : x > 94906265.62425156
	      ? Math.log(x) + Math.LN2
	      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
	  }
	});

/***/ },
/* 77 */
/***/ function(module, exports) {

	// 20.2.2.20 Math.log1p(x)
	module.exports = Math.log1p || function log1p(x){
	  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
	};

/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.5 Math.asinh(x)
	var $export = __webpack_require__(5);
	
	function asinh(x){
	  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
	}
	
	$export($export.S, 'Math', {asinh: asinh});

/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.7 Math.atanh(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  atanh: function atanh(x){
	    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
	  }
	});

/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.9 Math.cbrt(x)
	var $export = __webpack_require__(5)
	  , sign    = __webpack_require__(81);
	
	$export($export.S, 'Math', {
	  cbrt: function cbrt(x){
	    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
	  }
	});

/***/ },
/* 81 */
/***/ function(module, exports) {

	// 20.2.2.28 Math.sign(x)
	module.exports = Math.sign || function sign(x){
	  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
	};

/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.11 Math.clz32(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  clz32: function clz32(x){
	    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
	  }
	});

/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.12 Math.cosh(x)
	var $export = __webpack_require__(5)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  cosh: function cosh(x){
	    return (exp(x = +x) + exp(-x)) / 2;
	  }
	});

/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.14 Math.expm1(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {expm1: __webpack_require__(85)});

/***/ },
/* 85 */
/***/ function(module, exports) {

	// 20.2.2.14 Math.expm1(x)
	module.exports = Math.expm1 || function expm1(x){
	  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.16 Math.fround(x)
	var $export   = __webpack_require__(5)
	  , sign      = __webpack_require__(81)
	  , pow       = Math.pow
	  , EPSILON   = pow(2, -52)
	  , EPSILON32 = pow(2, -23)
	  , MAX32     = pow(2, 127) * (2 - EPSILON32)
	  , MIN32     = pow(2, -126);
	
	var roundTiesToEven = function(n){
	  return n + 1 / EPSILON - 1 / EPSILON;
	};
	
	
	$export($export.S, 'Math', {
	  fround: function fround(x){
	    var $abs  = Math.abs(x)
	      , $sign = sign(x)
	      , a, result;
	    if($abs < MIN32)return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
	    a = (1 + EPSILON32 / EPSILON) * $abs;
	    result = a - (a - $abs);
	    if(result > MAX32 || result != result)return $sign * Infinity;
	    return $sign * result;
	  }
	});

/***/ },
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
	var $export = __webpack_require__(5)
	  , abs     = Math.abs;
	
	$export($export.S, 'Math', {
	  hypot: function hypot(value1, value2){ // eslint-disable-line no-unused-vars
	    var sum   = 0
	      , i     = 0
	      , $$    = arguments
	      , $$len = $$.length
	      , larg  = 0
	      , arg, div;
	    while(i < $$len){
	      arg = abs($$[i++]);
	      if(larg < arg){
	        div  = larg / arg;
	        sum  = sum * div * div + 1;
	        larg = arg;
	      } else if(arg > 0){
	        div  = arg / larg;
	        sum += div * div;
	      } else sum += arg;
	    }
	    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
	  }
	});

/***/ },
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.18 Math.imul(x, y)
	var $export = __webpack_require__(5)
	  , $imul   = Math.imul;
	
	// some WebKit versions fails with big numbers, some has wrong arity
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
	}), 'Math', {
	  imul: function imul(x, y){
	    var UINT16 = 0xffff
	      , xn = +x
	      , yn = +y
	      , xl = UINT16 & xn
	      , yl = UINT16 & yn;
	    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
	  }
	});

/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.21 Math.log10(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  log10: function log10(x){
	    return Math.log(x) / Math.LN10;
	  }
	});

/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.20 Math.log1p(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {log1p: __webpack_require__(77)});

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.22 Math.log2(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  log2: function log2(x){
	    return Math.log(x) / Math.LN2;
	  }
	});

/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.28 Math.sign(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {sign: __webpack_require__(81)});

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.30 Math.sinh(x)
	var $export = __webpack_require__(5)
	  , expm1   = __webpack_require__(85)
	  , exp     = Math.exp;
	
	// V8 near Chromium 38 has a problem with very small numbers
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  return !Math.sinh(-2e-17) != -2e-17;
	}), 'Math', {
	  sinh: function sinh(x){
	    return Math.abs(x = +x) < 1
	      ? (expm1(x) - expm1(-x)) / 2
	      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
	  }
	});

/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.33 Math.tanh(x)
	var $export = __webpack_require__(5)
	  , expm1   = __webpack_require__(85)
	  , exp     = Math.exp;
	
	$export($export.S, 'Math', {
	  tanh: function tanh(x){
	    var a = expm1(x = +x)
	      , b = expm1(-x);
	    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
	  }
	});

/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	// 20.2.2.34 Math.trunc(x)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Math', {
	  trunc: function trunc(it){
	    return (it > 0 ? Math.floor : Math.ceil)(it);
	  }
	});

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var $export        = __webpack_require__(5)
	  , toIndex        = __webpack_require__(28)
	  , fromCharCode   = String.fromCharCode
	  , $fromCodePoint = String.fromCodePoint;
	
	// length should be 1, old FF problem
	$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
	  // 21.1.2.2 String.fromCodePoint(...codePoints)
	  fromCodePoint: function fromCodePoint(x){ // eslint-disable-line no-unused-vars
	    var res   = []
	      , $$    = arguments
	      , $$len = $$.length
	      , i     = 0
	      , code;
	    while($$len > i){
	      code = +$$[i++];
	      if(toIndex(code, 0x10ffff) !== code)throw RangeError(code + ' is not a valid code point');
	      res.push(code < 0x10000
	        ? fromCharCode(code)
	        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
	      );
	    } return res.join('');
	  }
	});

/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var $export   = __webpack_require__(5)
	  , toIObject = __webpack_require__(25)
	  , toLength  = __webpack_require__(29);
	
	$export($export.S, 'String', {
	  // 21.1.2.4 String.raw(callSite, ...substitutions)
	  raw: function raw(callSite){
	    var tpl   = toIObject(callSite.raw)
	      , len   = toLength(tpl.length)
	      , $$    = arguments
	      , $$len = $$.length
	      , res   = []
	      , i     = 0;
	    while(len > i){
	      res.push(String(tpl[i++]));
	      if(i < $$len)res.push(String($$[i]));
	    } return res.join('');
	  }
	});

/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.1.3.25 String.prototype.trim()
	__webpack_require__(65)('trim', function($trim){
	  return function trim(){
	    return $trim(this, 3);
	  };
	});

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $at  = __webpack_require__(100)(true);
	
	// 21.1.3.27 String.prototype[@@iterator]()
	__webpack_require__(101)(String, 'String', function(iterated){
	  this._t = String(iterated); // target
	  this._i = 0;                // next index
	// 21.1.5.2.1 %StringIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , index = this._i
	    , point;
	  if(index >= O.length)return {value: undefined, done: true};
	  point = $at(O, index);
	  this._i += point.length;
	  return {value: point, done: false};
	});

/***/ },
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var toInteger = __webpack_require__(27)
	  , defined   = __webpack_require__(24);
	// true  -> String#at
	// false -> String#codePointAt
	module.exports = function(TO_STRING){
	  return function(that, pos){
	    var s = String(defined(that))
	      , i = toInteger(pos)
	      , l = s.length
	      , a, b;
	    if(i < 0 || i >= l)return TO_STRING ? '' : undefined;
	    a = s.charCodeAt(i);
	    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
	      ? TO_STRING ? s.charAt(i) : a
	      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
	  };
	};

/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var LIBRARY        = __webpack_require__(41)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , hide           = __webpack_require__(8)
	  , has            = __webpack_require__(19)
	  , Iterators      = __webpack_require__(102)
	  , $iterCreate    = __webpack_require__(103)
	  , setToStringTag = __webpack_require__(37)
	  , getProto       = __webpack_require__(4).getProto
	  , ITERATOR       = __webpack_require__(33)('iterator')
	  , BUGGY          = !([].keys && 'next' in [].keys()) // Safari has buggy iterators w/o `next`
	  , FF_ITERATOR    = '@@iterator'
	  , KEYS           = 'keys'
	  , VALUES         = 'values';
	
	var returnThis = function(){ return this; };
	
	module.exports = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED){
	  $iterCreate(Constructor, NAME, next);
	  var getMethod = function(kind){
	    if(!BUGGY && kind in proto)return proto[kind];
	    switch(kind){
	      case KEYS: return function keys(){ return new Constructor(this, kind); };
	      case VALUES: return function values(){ return new Constructor(this, kind); };
	    } return function entries(){ return new Constructor(this, kind); };
	  };
	  var TAG        = NAME + ' Iterator'
	    , DEF_VALUES = DEFAULT == VALUES
	    , VALUES_BUG = false
	    , proto      = Base.prototype
	    , $native    = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT]
	    , $default   = $native || getMethod(DEFAULT)
	    , methods, key;
	  // Fix native
	  if($native){
	    var IteratorPrototype = getProto($default.call(new Base));
	    // Set @@toStringTag to native iterators
	    setToStringTag(IteratorPrototype, TAG, true);
	    // FF fix
	    if(!LIBRARY && has(proto, FF_ITERATOR))hide(IteratorPrototype, ITERATOR, returnThis);
	    // fix Array#{values, @@iterator}.name in V8 / FF
	    if(DEF_VALUES && $native.name !== VALUES){
	      VALUES_BUG = true;
	      $default = function values(){ return $native.call(this); };
	    }
	  }
	  // Define iterator
	  if((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])){
	    hide(proto, ITERATOR, $default);
	  }
	  // Plug for library
	  Iterators[NAME] = $default;
	  Iterators[TAG]  = returnThis;
	  if(DEFAULT){
	    methods = {
	      values:  DEF_VALUES  ? $default : getMethod(VALUES),
	      keys:    IS_SET      ? $default : getMethod(KEYS),
	      entries: !DEF_VALUES ? $default : getMethod('entries')
	    };
	    if(FORCED)for(key in methods){
	      if(!(key in proto))redefine(proto, key, methods[key]);
	    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
	  }
	  return methods;
	};

/***/ },
/* 102 */
/***/ function(module, exports) {

	module.exports = {};

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $              = __webpack_require__(4)
	  , descriptor     = __webpack_require__(9)
	  , setToStringTag = __webpack_require__(37)
	  , IteratorPrototype = {};
	
	// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
	__webpack_require__(8)(IteratorPrototype, __webpack_require__(33)('iterator'), function(){ return this; });
	
	module.exports = function(Constructor, NAME, next){
	  Constructor.prototype = $.create(IteratorPrototype, {next: descriptor(1, next)});
	  setToStringTag(Constructor, NAME + ' Iterator');
	};

/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $at     = __webpack_require__(100)(false);
	$export($export.P, 'String', {
	  // 21.1.3.3 String.prototype.codePointAt(pos)
	  codePointAt: function codePointAt(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])
	'use strict';
	var $export   = __webpack_require__(5)
	  , toLength  = __webpack_require__(29)
	  , context   = __webpack_require__(106)
	  , ENDS_WITH = 'endsWith'
	  , $endsWith = ''[ENDS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(108)(ENDS_WITH), 'String', {
	  endsWith: function endsWith(searchString /*, endPosition = @length */){
	    var that = context(this, searchString, ENDS_WITH)
	      , $$   = arguments
	      , endPosition = $$.length > 1 ? $$[1] : undefined
	      , len    = toLength(that.length)
	      , end    = endPosition === undefined ? len : Math.min(toLength(endPosition), len)
	      , search = String(searchString);
	    return $endsWith
	      ? $endsWith.call(that, search, end)
	      : that.slice(end - search.length, end) === search;
	  }
	});

/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	// helper for String#{startsWith, endsWith, includes}
	var isRegExp = __webpack_require__(107)
	  , defined  = __webpack_require__(24);
	
	module.exports = function(that, searchString, NAME){
	  if(isRegExp(searchString))throw TypeError('String#' + NAME + " doesn't accept regex!");
	  return String(defined(that));
	};

/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	// 7.2.8 IsRegExp(argument)
	var isObject = __webpack_require__(18)
	  , cof      = __webpack_require__(20)
	  , MATCH    = __webpack_require__(33)('match');
	module.exports = function(it){
	  var isRegExp;
	  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
	};

/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var MATCH = __webpack_require__(33)('match');
	module.exports = function(KEY){
	  var re = /./;
	  try {
	    '/./'[KEY](re);
	  } catch(e){
	    try {
	      re[MATCH] = false;
	      return !'/./'[KEY](re);
	    } catch(f){ /* empty */ }
	  } return true;
	};

/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.7 String.prototype.includes(searchString, position = 0)
	'use strict';
	var $export  = __webpack_require__(5)
	  , context  = __webpack_require__(106)
	  , INCLUDES = 'includes';
	
	$export($export.P + $export.F * __webpack_require__(108)(INCLUDES), 'String', {
	  includes: function includes(searchString /*, position = 0 */){
	    return !!~context(this, searchString, INCLUDES)
	      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5);
	
	$export($export.P, 'String', {
	  // 21.1.3.13 String.prototype.repeat(count)
	  repeat: __webpack_require__(111)
	});

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var toInteger = __webpack_require__(27)
	  , defined   = __webpack_require__(24);
	
	module.exports = function repeat(count){
	  var str = String(defined(this))
	    , res = ''
	    , n   = toInteger(count);
	  if(n < 0 || n == Infinity)throw RangeError("Count can't be negative");
	  for(;n > 0; (n >>>= 1) && (str += str))if(n & 1)res += str;
	  return res;
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	// 21.1.3.18 String.prototype.startsWith(searchString [, position ])
	'use strict';
	var $export     = __webpack_require__(5)
	  , toLength    = __webpack_require__(29)
	  , context     = __webpack_require__(106)
	  , STARTS_WITH = 'startsWith'
	  , $startsWith = ''[STARTS_WITH];
	
	$export($export.P + $export.F * __webpack_require__(108)(STARTS_WITH), 'String', {
	  startsWith: function startsWith(searchString /*, position = 0 */){
	    var that   = context(this, searchString, STARTS_WITH)
	      , $$     = arguments
	      , index  = toLength(Math.min($$.length > 1 ? $$[1] : undefined, that.length))
	      , search = String(searchString);
	    return $startsWith
	      ? $startsWith.call(that, search, index)
	      : that.slice(index, index + search.length) === search;
	  }
	});

/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var ctx         = __webpack_require__(14)
	  , $export     = __webpack_require__(5)
	  , toObject    = __webpack_require__(23)
	  , call        = __webpack_require__(114)
	  , isArrayIter = __webpack_require__(115)
	  , toLength    = __webpack_require__(29)
	  , getIterFn   = __webpack_require__(116);
	$export($export.S + $export.F * !__webpack_require__(117)(function(iter){ Array.from(iter); }), 'Array', {
	  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
	  from: function from(arrayLike/*, mapfn = undefined, thisArg = undefined*/){
	    var O       = toObject(arrayLike)
	      , C       = typeof this == 'function' ? this : Array
	      , $$      = arguments
	      , $$len   = $$.length
	      , mapfn   = $$len > 1 ? $$[1] : undefined
	      , mapping = mapfn !== undefined
	      , index   = 0
	      , iterFn  = getIterFn(O)
	      , length, result, step, iterator;
	    if(mapping)mapfn = ctx(mapfn, $$len > 2 ? $$[2] : undefined, 2);
	    // if object isn't iterable or it's array with default iterator - use simple case
	    if(iterFn != undefined && !(C == Array && isArrayIter(iterFn))){
	      for(iterator = iterFn.call(O), result = new C; !(step = iterator.next()).done; index++){
	        result[index] = mapping ? call(iterator, mapfn, [step.value, index], true) : step.value;
	      }
	    } else {
	      length = toLength(O.length);
	      for(result = new C(length); length > index; index++){
	        result[index] = mapping ? mapfn(O[index], index) : O[index];
	      }
	    }
	    result.length = index;
	    return result;
	  }
	});


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	// call something on iterator step with safe closing on error
	var anObject = __webpack_require__(22);
	module.exports = function(iterator, fn, value, entries){
	  try {
	    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
	  // 7.4.6 IteratorClose(iterator, completion)
	  } catch(e){
	    var ret = iterator['return'];
	    if(ret !== undefined)anObject(ret.call(iterator));
	    throw e;
	  }
	};

/***/ },
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	// check on default Array iterator
	var Iterators  = __webpack_require__(102)
	  , ITERATOR   = __webpack_require__(33)('iterator')
	  , ArrayProto = Array.prototype;
	
	module.exports = function(it){
	  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
	};

/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var classof   = __webpack_require__(49)
	  , ITERATOR  = __webpack_require__(33)('iterator')
	  , Iterators = __webpack_require__(102);
	module.exports = __webpack_require__(7).getIteratorMethod = function(it){
	  if(it != undefined)return it[ITERATOR]
	    || it['@@iterator']
	    || Iterators[classof(it)];
	};

/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var ITERATOR     = __webpack_require__(33)('iterator')
	  , SAFE_CLOSING = false;
	
	try {
	  var riter = [7][ITERATOR]();
	  riter['return'] = function(){ SAFE_CLOSING = true; };
	  Array.from(riter, function(){ throw 2; });
	} catch(e){ /* empty */ }
	
	module.exports = function(exec, skipClosing){
	  if(!skipClosing && !SAFE_CLOSING)return false;
	  var safe = false;
	  try {
	    var arr  = [7]
	      , iter = arr[ITERATOR]();
	    iter.next = function(){ safe = true; };
	    arr[ITERATOR] = function(){ return iter; };
	    exec(arr);
	  } catch(e){ /* empty */ }
	  return safe;
	};

/***/ },
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5);
	
	// WebKit Array.of isn't generic
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  function F(){}
	  return !(Array.of.call(F) instanceof F);
	}), 'Array', {
	  // 22.1.2.3 Array.of( ...items)
	  of: function of(/* ...args */){
	    var index  = 0
	      , $$     = arguments
	      , $$len  = $$.length
	      , result = new (typeof this == 'function' ? this : Array)($$len);
	    while($$len > index)result[index] = $$[index++];
	    result.length = $$len;
	    return result;
	  }
	});

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var addToUnscopables = __webpack_require__(120)
	  , step             = __webpack_require__(121)
	  , Iterators        = __webpack_require__(102)
	  , toIObject        = __webpack_require__(25);
	
	// 22.1.3.4 Array.prototype.entries()
	// 22.1.3.13 Array.prototype.keys()
	// 22.1.3.29 Array.prototype.values()
	// 22.1.3.30 Array.prototype[@@iterator]()
	module.exports = __webpack_require__(101)(Array, 'Array', function(iterated, kind){
	  this._t = toIObject(iterated); // target
	  this._i = 0;                   // next index
	  this._k = kind;                // kind
	// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
	}, function(){
	  var O     = this._t
	    , kind  = this._k
	    , index = this._i++;
	  if(!O || index >= O.length){
	    this._t = undefined;
	    return step(1);
	  }
	  if(kind == 'keys'  )return step(0, index);
	  if(kind == 'values')return step(0, O[index]);
	  return step(0, [index, O[index]]);
	}, 'values');
	
	// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
	Iterators.Arguments = Iterators.Array;
	
	addToUnscopables('keys');
	addToUnscopables('values');
	addToUnscopables('entries');

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.31 Array.prototype[@@unscopables]
	var UNSCOPABLES = __webpack_require__(33)('unscopables')
	  , ArrayProto  = Array.prototype;
	if(ArrayProto[UNSCOPABLES] == undefined)__webpack_require__(8)(ArrayProto, UNSCOPABLES, {});
	module.exports = function(key){
	  ArrayProto[UNSCOPABLES][key] = true;
	};

/***/ },
/* 121 */
/***/ function(module, exports) {

	module.exports = function(done, value){
	  return {value: value, done: !!done};
	};

/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(123)('Array');

/***/ },
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global      = __webpack_require__(6)
	  , $           = __webpack_require__(4)
	  , DESCRIPTORS = __webpack_require__(10)
	  , SPECIES     = __webpack_require__(33)('species');
	
	module.exports = function(KEY){
	  var C = global[KEY];
	  if(DESCRIPTORS && C && !C[SPECIES])$.setDesc(C, SPECIES, {
	    configurable: true,
	    get: function(){ return this; }
	  });
	};

/***/ },
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	var $export = __webpack_require__(5);
	
	$export($export.P, 'Array', {copyWithin: __webpack_require__(125)});
	
	__webpack_require__(120)('copyWithin');

/***/ },
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
	'use strict';
	var toObject = __webpack_require__(23)
	  , toIndex  = __webpack_require__(28)
	  , toLength = __webpack_require__(29);
	
	module.exports = [].copyWithin || function copyWithin(target/*= 0*/, start/*= 0, end = @length*/){
	  var O     = toObject(this)
	    , len   = toLength(O.length)
	    , to    = toIndex(target, len)
	    , from  = toIndex(start, len)
	    , $$    = arguments
	    , end   = $$.length > 2 ? $$[2] : undefined
	    , count = Math.min((end === undefined ? len : toIndex(end, len)) - from, len - to)
	    , inc   = 1;
	  if(from < to && to < from + count){
	    inc  = -1;
	    from += count - 1;
	    to   += count - 1;
	  }
	  while(count-- > 0){
	    if(from in O)O[to] = O[from];
	    else delete O[to];
	    to   += inc;
	    from += inc;
	  } return O;
	};

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	var $export = __webpack_require__(5);
	
	$export($export.P, 'Array', {fill: __webpack_require__(127)});
	
	__webpack_require__(120)('fill');

/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
	'use strict';
	var toObject = __webpack_require__(23)
	  , toIndex  = __webpack_require__(28)
	  , toLength = __webpack_require__(29);
	module.exports = [].fill || function fill(value /*, start = 0, end = @length */){
	  var O      = toObject(this)
	    , length = toLength(O.length)
	    , $$     = arguments
	    , $$len  = $$.length
	    , index  = toIndex($$len > 1 ? $$[1] : undefined, length)
	    , end    = $$len > 2 ? $$[2] : undefined
	    , endPos = end === undefined ? length : toIndex(end, length);
	  while(endPos > index)O[index++] = value;
	  return O;
	};

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
	var $export = __webpack_require__(5)
	  , $find   = __webpack_require__(30)(5)
	  , KEY     = 'find'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  find: function find(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(120)(KEY);

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
	var $export = __webpack_require__(5)
	  , $find   = __webpack_require__(30)(6)
	  , KEY     = 'findIndex'
	  , forced  = true;
	// Shouldn't skip holes
	if(KEY in [])Array(1)[KEY](function(){ forced = false; });
	$export($export.P + $export.F * forced, 'Array', {
	  findIndex: function findIndex(callbackfn/*, that = undefined */){
	    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	__webpack_require__(120)(KEY);

/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var $        = __webpack_require__(4)
	  , global   = __webpack_require__(6)
	  , isRegExp = __webpack_require__(107)
	  , $flags   = __webpack_require__(131)
	  , $RegExp  = global.RegExp
	  , Base     = $RegExp
	  , proto    = $RegExp.prototype
	  , re1      = /a/g
	  , re2      = /a/g
	  // "new" creates a new object, old webkit buggy here
	  , CORRECT_NEW = new $RegExp(re1) !== re1;
	
	if(__webpack_require__(10) && (!CORRECT_NEW || __webpack_require__(11)(function(){
	  re2[__webpack_require__(33)('match')] = false;
	  // RegExp constructor can alter flags and IsRegExp works correct with @@match
	  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
	}))){
	  $RegExp = function RegExp(p, f){
	    var piRE = isRegExp(p)
	      , fiU  = f === undefined;
	    return !(this instanceof $RegExp) && piRE && p.constructor === $RegExp && fiU ? p
	      : CORRECT_NEW
	        ? new Base(piRE && !fiU ? p.source : p, f)
	        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f);
	  };
	  $.each.call($.getNames(Base), function(key){
	    key in $RegExp || $.setDesc($RegExp, key, {
	      configurable: true,
	      get: function(){ return Base[key]; },
	      set: function(it){ Base[key] = it; }
	    });
	  });
	  proto.constructor = $RegExp;
	  $RegExp.prototype = proto;
	  __webpack_require__(12)(global, 'RegExp', $RegExp);
	}
	
	__webpack_require__(123)('RegExp');

/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 21.2.5.3 get RegExp.prototype.flags
	var anObject = __webpack_require__(22);
	module.exports = function(){
	  var that   = anObject(this)
	    , result = '';
	  if(that.global)     result += 'g';
	  if(that.ignoreCase) result += 'i';
	  if(that.multiline)  result += 'm';
	  if(that.unicode)    result += 'u';
	  if(that.sticky)     result += 'y';
	  return result;
	};

/***/ },
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	// 21.2.5.3 get RegExp.prototype.flags()
	var $ = __webpack_require__(4);
	if(__webpack_require__(10) && /./g.flags != 'g')$.setDesc(RegExp.prototype, 'flags', {
	  configurable: true,
	  get: __webpack_require__(131)
	});

/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	// @@match logic
	__webpack_require__(134)('match', 1, function(defined, MATCH){
	  // 21.1.3.11 String.prototype.match(regexp)
	  return function match(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[MATCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
	  };
	});

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide     = __webpack_require__(8)
	  , redefine = __webpack_require__(12)
	  , fails    = __webpack_require__(11)
	  , defined  = __webpack_require__(24)
	  , wks      = __webpack_require__(33);
	
	module.exports = function(KEY, length, exec){
	  var SYMBOL   = wks(KEY)
	    , original = ''[KEY];
	  if(fails(function(){
	    var O = {};
	    O[SYMBOL] = function(){ return 7; };
	    return ''[KEY](O) != 7;
	  })){
	    redefine(String.prototype, KEY, exec(defined, SYMBOL, original));
	    hide(RegExp.prototype, SYMBOL, length == 2
	      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
	      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
	      ? function(string, arg){ return original.call(string, this, arg); }
	      // 21.2.5.6 RegExp.prototype[@@match](string)
	      // 21.2.5.9 RegExp.prototype[@@search](string)
	      : function(string){ return original.call(string, this); }
	    );
	  }
	};

/***/ },
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	// @@replace logic
	__webpack_require__(134)('replace', 2, function(defined, REPLACE, $replace){
	  // 21.1.3.14 String.prototype.replace(searchValue, replaceValue)
	  return function replace(searchValue, replaceValue){
	    'use strict';
	    var O  = defined(this)
	      , fn = searchValue == undefined ? undefined : searchValue[REPLACE];
	    return fn !== undefined
	      ? fn.call(searchValue, O, replaceValue)
	      : $replace.call(String(O), searchValue, replaceValue);
	  };
	});

/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	// @@search logic
	__webpack_require__(134)('search', 1, function(defined, SEARCH){
	  // 21.1.3.15 String.prototype.search(regexp)
	  return function search(regexp){
	    'use strict';
	    var O  = defined(this)
	      , fn = regexp == undefined ? undefined : regexp[SEARCH];
	    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
	  };
	});

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	// @@split logic
	__webpack_require__(134)('split', 2, function(defined, SPLIT, $split){
	  // 21.1.3.17 String.prototype.split(separator, limit)
	  return function split(separator, limit){
	    'use strict';
	    var O  = defined(this)
	      , fn = separator == undefined ? undefined : separator[SPLIT];
	    return fn !== undefined
	      ? fn.call(separator, O, limit)
	      : $split.call(String(O), separator, limit);
	  };
	});

/***/ },
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $          = __webpack_require__(4)
	  , LIBRARY    = __webpack_require__(41)
	  , global     = __webpack_require__(6)
	  , ctx        = __webpack_require__(14)
	  , classof    = __webpack_require__(49)
	  , $export    = __webpack_require__(5)
	  , isObject   = __webpack_require__(18)
	  , anObject   = __webpack_require__(22)
	  , aFunction  = __webpack_require__(15)
	  , strictNew  = __webpack_require__(139)
	  , forOf      = __webpack_require__(140)
	  , setProto   = __webpack_require__(47).set
	  , same       = __webpack_require__(45)
	  , SPECIES    = __webpack_require__(33)('species')
	  , speciesConstructor = __webpack_require__(141)
	  , asap       = __webpack_require__(142)
	  , PROMISE    = 'Promise'
	  , process    = global.process
	  , isNode     = classof(process) == 'process'
	  , P          = global[PROMISE]
	  , Wrapper;
	
	var testResolve = function(sub){
	  var test = new P(function(){});
	  if(sub)test.constructor = Object;
	  return P.resolve(test) === test;
	};
	
	var USE_NATIVE = function(){
	  var works = false;
	  function P2(x){
	    var self = new P(x);
	    setProto(self, P2.prototype);
	    return self;
	  }
	  try {
	    works = P && P.resolve && testResolve();
	    setProto(P2, P);
	    P2.prototype = $.create(P.prototype, {constructor: {value: P2}});
	    // actual Firefox has broken subclass support, test that
	    if(!(P2.resolve(5).then(function(){}) instanceof P2)){
	      works = false;
	    }
	    // actual V8 bug, https://code.google.com/p/v8/issues/detail?id=4162
	    if(works && __webpack_require__(10)){
	      var thenableThenGotten = false;
	      P.resolve($.setDesc({}, 'then', {
	        get: function(){ thenableThenGotten = true; }
	      }));
	      works = thenableThenGotten;
	    }
	  } catch(e){ works = false; }
	  return works;
	}();
	
	// helpers
	var sameConstructor = function(a, b){
	  // library wrapper special case
	  if(LIBRARY && a === P && b === Wrapper)return true;
	  return same(a, b);
	};
	var getConstructor = function(C){
	  var S = anObject(C)[SPECIES];
	  return S != undefined ? S : C;
	};
	var isThenable = function(it){
	  var then;
	  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
	};
	var PromiseCapability = function(C){
	  var resolve, reject;
	  this.promise = new C(function($$resolve, $$reject){
	    if(resolve !== undefined || reject !== undefined)throw TypeError('Bad Promise constructor');
	    resolve = $$resolve;
	    reject  = $$reject;
	  });
	  this.resolve = aFunction(resolve),
	  this.reject  = aFunction(reject)
	};
	var perform = function(exec){
	  try {
	    exec();
	  } catch(e){
	    return {error: e};
	  }
	};
	var notify = function(record, isReject){
	  if(record.n)return;
	  record.n = true;
	  var chain = record.c;
	  asap(function(){
	    var value = record.v
	      , ok    = record.s == 1
	      , i     = 0;
	    var run = function(reaction){
	      var handler = ok ? reaction.ok : reaction.fail
	        , resolve = reaction.resolve
	        , reject  = reaction.reject
	        , result, then;
	      try {
	        if(handler){
	          if(!ok)record.h = true;
	          result = handler === true ? value : handler(value);
	          if(result === reaction.promise){
	            reject(TypeError('Promise-chain cycle'));
	          } else if(then = isThenable(result)){
	            then.call(result, resolve, reject);
	          } else resolve(result);
	        } else reject(value);
	      } catch(e){
	        reject(e);
	      }
	    };
	    while(chain.length > i)run(chain[i++]); // variable length - can't use forEach
	    chain.length = 0;
	    record.n = false;
	    if(isReject)setTimeout(function(){
	      var promise = record.p
	        , handler, console;
	      if(isUnhandled(promise)){
	        if(isNode){
	          process.emit('unhandledRejection', value, promise);
	        } else if(handler = global.onunhandledrejection){
	          handler({promise: promise, reason: value});
	        } else if((console = global.console) && console.error){
	          console.error('Unhandled promise rejection', value);
	        }
	      } record.a = undefined;
	    }, 1);
	  });
	};
	var isUnhandled = function(promise){
	  var record = promise._d
	    , chain  = record.a || record.c
	    , i      = 0
	    , reaction;
	  if(record.h)return false;
	  while(chain.length > i){
	    reaction = chain[i++];
	    if(reaction.fail || !isUnhandled(reaction.promise))return false;
	  } return true;
	};
	var $reject = function(value){
	  var record = this;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  record.v = value;
	  record.s = 2;
	  record.a = record.c.slice();
	  notify(record, true);
	};
	var $resolve = function(value){
	  var record = this
	    , then;
	  if(record.d)return;
	  record.d = true;
	  record = record.r || record; // unwrap
	  try {
	    if(record.p === value)throw TypeError("Promise can't be resolved itself");
	    if(then = isThenable(value)){
	      asap(function(){
	        var wrapper = {r: record, d: false}; // wrap
	        try {
	          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
	        } catch(e){
	          $reject.call(wrapper, e);
	        }
	      });
	    } else {
	      record.v = value;
	      record.s = 1;
	      notify(record, false);
	    }
	  } catch(e){
	    $reject.call({r: record, d: false}, e); // wrap
	  }
	};
	
	// constructor polyfill
	if(!USE_NATIVE){
	  // 25.4.3.1 Promise(executor)
	  P = function Promise(executor){
	    aFunction(executor);
	    var record = this._d = {
	      p: strictNew(this, P, PROMISE),         // <- promise
	      c: [],                                  // <- awaiting reactions
	      a: undefined,                           // <- checked in isUnhandled reactions
	      s: 0,                                   // <- state
	      d: false,                               // <- done
	      v: undefined,                           // <- value
	      h: false,                               // <- handled rejection
	      n: false                                // <- notify
	    };
	    try {
	      executor(ctx($resolve, record, 1), ctx($reject, record, 1));
	    } catch(err){
	      $reject.call(record, err);
	    }
	  };
	  __webpack_require__(144)(P.prototype, {
	    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
	    then: function then(onFulfilled, onRejected){
	      var reaction = new PromiseCapability(speciesConstructor(this, P))
	        , promise  = reaction.promise
	        , record   = this._d;
	      reaction.ok   = typeof onFulfilled == 'function' ? onFulfilled : true;
	      reaction.fail = typeof onRejected == 'function' && onRejected;
	      record.c.push(reaction);
	      if(record.a)record.a.push(reaction);
	      if(record.s)notify(record, false);
	      return promise;
	    },
	    // 25.4.5.1 Promise.prototype.catch(onRejected)
	    'catch': function(onRejected){
	      return this.then(undefined, onRejected);
	    }
	  });
	}
	
	$export($export.G + $export.W + $export.F * !USE_NATIVE, {Promise: P});
	__webpack_require__(37)(P, PROMISE);
	__webpack_require__(123)(PROMISE);
	Wrapper = __webpack_require__(7)[PROMISE];
	
	// statics
	$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
	  // 25.4.4.5 Promise.reject(r)
	  reject: function reject(r){
	    var capability = new PromiseCapability(this)
	      , $$reject   = capability.reject;
	    $$reject(r);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * (!USE_NATIVE || testResolve(true)), PROMISE, {
	  // 25.4.4.6 Promise.resolve(x)
	  resolve: function resolve(x){
	    // instanceof instead of internal slot check because we should fix it without replacement native Promise core
	    if(x instanceof P && sameConstructor(x.constructor, this))return x;
	    var capability = new PromiseCapability(this)
	      , $$resolve  = capability.resolve;
	    $$resolve(x);
	    return capability.promise;
	  }
	});
	$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(117)(function(iter){
	  P.all(iter)['catch'](function(){});
	})), PROMISE, {
	  // 25.4.4.1 Promise.all(iterable)
	  all: function all(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , resolve    = capability.resolve
	      , reject     = capability.reject
	      , values     = [];
	    var abrupt = perform(function(){
	      forOf(iterable, false, values.push, values);
	      var remaining = values.length
	        , results   = Array(remaining);
	      if(remaining)$.each.call(values, function(promise, index){
	        var alreadyCalled = false;
	        C.resolve(promise).then(function(value){
	          if(alreadyCalled)return;
	          alreadyCalled = true;
	          results[index] = value;
	          --remaining || resolve(results);
	        }, reject);
	      });
	      else resolve(results);
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  },
	  // 25.4.4.4 Promise.race(iterable)
	  race: function race(iterable){
	    var C          = getConstructor(this)
	      , capability = new PromiseCapability(C)
	      , reject     = capability.reject;
	    var abrupt = perform(function(){
	      forOf(iterable, false, function(promise){
	        C.resolve(promise).then(capability.resolve, reject);
	      });
	    });
	    if(abrupt)reject(abrupt.error);
	    return capability.promise;
	  }
	});

/***/ },
/* 139 */
/***/ function(module, exports) {

	module.exports = function(it, Constructor, name){
	  if(!(it instanceof Constructor))throw TypeError(name + ": use the 'new' operator!");
	  return it;
	};

/***/ },
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	var ctx         = __webpack_require__(14)
	  , call        = __webpack_require__(114)
	  , isArrayIter = __webpack_require__(115)
	  , anObject    = __webpack_require__(22)
	  , toLength    = __webpack_require__(29)
	  , getIterFn   = __webpack_require__(116);
	module.exports = function(iterable, entries, fn, that){
	  var iterFn = getIterFn(iterable)
	    , f      = ctx(fn, that, entries ? 2 : 1)
	    , index  = 0
	    , length, step, iterator;
	  if(typeof iterFn != 'function')throw TypeError(iterable + ' is not iterable!');
	  // fast case for arrays with default iterator
	  if(isArrayIter(iterFn))for(length = toLength(iterable.length); length > index; index++){
	    entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
	  } else for(iterator = iterFn.call(iterable); !(step = iterator.next()).done; ){
	    call(iterator, f, step.value, entries);
	  }
	};

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	// 7.3.20 SpeciesConstructor(O, defaultConstructor)
	var anObject  = __webpack_require__(22)
	  , aFunction = __webpack_require__(15)
	  , SPECIES   = __webpack_require__(33)('species');
	module.exports = function(O, D){
	  var C = anObject(O).constructor, S;
	  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	var global    = __webpack_require__(6)
	  , macrotask = __webpack_require__(143).set
	  , Observer  = global.MutationObserver || global.WebKitMutationObserver
	  , process   = global.process
	  , Promise   = global.Promise
	  , isNode    = __webpack_require__(20)(process) == 'process'
	  , head, last, notify;
	
	var flush = function(){
	  var parent, domain, fn;
	  if(isNode && (parent = process.domain)){
	    process.domain = null;
	    parent.exit();
	  }
	  while(head){
	    domain = head.domain;
	    fn     = head.fn;
	    if(domain)domain.enter();
	    fn(); // <- currently we use it only for Promise - try / catch not required
	    if(domain)domain.exit();
	    head = head.next;
	  } last = undefined;
	  if(parent)parent.enter();
	};
	
	// Node.js
	if(isNode){
	  notify = function(){
	    process.nextTick(flush);
	  };
	// browsers with MutationObserver
	} else if(Observer){
	  var toggle = 1
	    , node   = document.createTextNode('');
	  new Observer(flush).observe(node, {characterData: true}); // eslint-disable-line no-new
	  notify = function(){
	    node.data = toggle = -toggle;
	  };
	// environments with maybe non-completely correct, but existent Promise
	} else if(Promise && Promise.resolve){
	  notify = function(){
	    Promise.resolve().then(flush);
	  };
	// for other environments - macrotask based on:
	// - setImmediate
	// - MessageChannel
	// - window.postMessag
	// - onreadystatechange
	// - setTimeout
	} else {
	  notify = function(){
	    // strange IE + webpack dev server bug - use .call(global)
	    macrotask.call(global, flush);
	  };
	}
	
	module.exports = function asap(fn){
	  var task = {fn: fn, next: undefined, domain: isNode && process.domain};
	  if(last)last.next = task;
	  if(!head){
	    head = task;
	    notify();
	  } last = task;
	};

/***/ },
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	var ctx                = __webpack_require__(14)
	  , invoke             = __webpack_require__(21)
	  , html               = __webpack_require__(16)
	  , cel                = __webpack_require__(17)
	  , global             = __webpack_require__(6)
	  , process            = global.process
	  , setTask            = global.setImmediate
	  , clearTask          = global.clearImmediate
	  , MessageChannel     = global.MessageChannel
	  , counter            = 0
	  , queue              = {}
	  , ONREADYSTATECHANGE = 'onreadystatechange'
	  , defer, channel, port;
	var run = function(){
	  var id = +this;
	  if(queue.hasOwnProperty(id)){
	    var fn = queue[id];
	    delete queue[id];
	    fn();
	  }
	};
	var listner = function(event){
	  run.call(event.data);
	};
	// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
	if(!setTask || !clearTask){
	  setTask = function setImmediate(fn){
	    var args = [], i = 1;
	    while(arguments.length > i)args.push(arguments[i++]);
	    queue[++counter] = function(){
	      invoke(typeof fn == 'function' ? fn : Function(fn), args);
	    };
	    defer(counter);
	    return counter;
	  };
	  clearTask = function clearImmediate(id){
	    delete queue[id];
	  };
	  // Node.js 0.8-
	  if(__webpack_require__(20)(process) == 'process'){
	    defer = function(id){
	      process.nextTick(ctx(run, id, 1));
	    };
	  // Browsers with MessageChannel, includes WebWorkers
	  } else if(MessageChannel){
	    channel = new MessageChannel;
	    port    = channel.port2;
	    channel.port1.onmessage = listner;
	    defer = ctx(port.postMessage, port, 1);
	  // Browsers with postMessage, skip WebWorkers
	  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
	  } else if(global.addEventListener && typeof postMessage == 'function' && !global.importScripts){
	    defer = function(id){
	      global.postMessage(id + '', '*');
	    };
	    global.addEventListener('message', listner, false);
	  // IE8-
	  } else if(ONREADYSTATECHANGE in cel('script')){
	    defer = function(id){
	      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function(){
	        html.removeChild(this);
	        run.call(id);
	      };
	    };
	  // Rest old browsers
	  } else {
	    defer = function(id){
	      setTimeout(ctx(run, id, 1), 0);
	    };
	  }
	}
	module.exports = {
	  set:   setTask,
	  clear: clearTask
	};

/***/ },
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	var redefine = __webpack_require__(12);
	module.exports = function(target, src){
	  for(var key in src)redefine(target, key, src[key]);
	  return target;
	};

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(146);
	
	// 23.1 Map Objects
	__webpack_require__(147)('Map', function(get){
	  return function Map(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.1.3.6 Map.prototype.get(key)
	  get: function get(key){
	    var entry = strong.getEntry(this, key);
	    return entry && entry.v;
	  },
	  // 23.1.3.9 Map.prototype.set(key, value)
	  set: function set(key, value){
	    return strong.def(this, key === 0 ? 0 : key, value);
	  }
	}, strong, true);

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(4)
	  , hide         = __webpack_require__(8)
	  , redefineAll  = __webpack_require__(144)
	  , ctx          = __webpack_require__(14)
	  , strictNew    = __webpack_require__(139)
	  , defined      = __webpack_require__(24)
	  , forOf        = __webpack_require__(140)
	  , $iterDefine  = __webpack_require__(101)
	  , step         = __webpack_require__(121)
	  , ID           = __webpack_require__(13)('id')
	  , $has         = __webpack_require__(19)
	  , isObject     = __webpack_require__(18)
	  , setSpecies   = __webpack_require__(123)
	  , DESCRIPTORS  = __webpack_require__(10)
	  , isExtensible = Object.isExtensible || isObject
	  , SIZE         = DESCRIPTORS ? '_s' : 'size'
	  , id           = 0;
	
	var fastKey = function(it, create){
	  // return primitive with prefix
	  if(!isObject(it))return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
	  if(!$has(it, ID)){
	    // can't set id to frozen object
	    if(!isExtensible(it))return 'F';
	    // not necessary to add id
	    if(!create)return 'E';
	    // add missing object id
	    hide(it, ID, ++id);
	  // return object id with prefix
	  } return 'O' + it[ID];
	};
	
	var getEntry = function(that, key){
	  // fast case
	  var index = fastKey(key), entry;
	  if(index !== 'F')return that._i[index];
	  // frozen object case
	  for(entry = that._f; entry; entry = entry.n){
	    if(entry.k == key)return entry;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = $.create(null); // index
	      that._f = undefined;      // first entry
	      that._l = undefined;      // last entry
	      that[SIZE] = 0;           // size
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.1.3.1 Map.prototype.clear()
	      // 23.2.3.2 Set.prototype.clear()
	      clear: function clear(){
	        for(var that = this, data = that._i, entry = that._f; entry; entry = entry.n){
	          entry.r = true;
	          if(entry.p)entry.p = entry.p.n = undefined;
	          delete data[entry.i];
	        }
	        that._f = that._l = undefined;
	        that[SIZE] = 0;
	      },
	      // 23.1.3.3 Map.prototype.delete(key)
	      // 23.2.3.4 Set.prototype.delete(value)
	      'delete': function(key){
	        var that  = this
	          , entry = getEntry(that, key);
	        if(entry){
	          var next = entry.n
	            , prev = entry.p;
	          delete that._i[entry.i];
	          entry.r = true;
	          if(prev)prev.n = next;
	          if(next)next.p = prev;
	          if(that._f == entry)that._f = next;
	          if(that._l == entry)that._l = prev;
	          that[SIZE]--;
	        } return !!entry;
	      },
	      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
	      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
	      forEach: function forEach(callbackfn /*, that = undefined */){
	        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3)
	          , entry;
	        while(entry = entry ? entry.n : this._f){
	          f(entry.v, entry.k, this);
	          // revert to the last existing entry
	          while(entry && entry.r)entry = entry.p;
	        }
	      },
	      // 23.1.3.7 Map.prototype.has(key)
	      // 23.2.3.7 Set.prototype.has(value)
	      has: function has(key){
	        return !!getEntry(this, key);
	      }
	    });
	    if(DESCRIPTORS)$.setDesc(C.prototype, 'size', {
	      get: function(){
	        return defined(this[SIZE]);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    var entry = getEntry(that, key)
	      , prev, index;
	    // change existing entry
	    if(entry){
	      entry.v = value;
	    // create new entry
	    } else {
	      that._l = entry = {
	        i: index = fastKey(key, true), // <- index
	        k: key,                        // <- key
	        v: value,                      // <- value
	        p: prev = that._l,             // <- previous entry
	        n: undefined,                  // <- next entry
	        r: false                       // <- removed
	      };
	      if(!that._f)that._f = entry;
	      if(prev)prev.n = entry;
	      that[SIZE]++;
	      // add to index
	      if(index !== 'F')that._i[index] = entry;
	    } return that;
	  },
	  getEntry: getEntry,
	  setStrong: function(C, NAME, IS_MAP){
	    // add .keys, .values, .entries, [@@iterator]
	    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
	    $iterDefine(C, NAME, function(iterated, kind){
	      this._t = iterated;  // target
	      this._k = kind;      // kind
	      this._l = undefined; // previous
	    }, function(){
	      var that  = this
	        , kind  = that._k
	        , entry = that._l;
	      // revert to the last existing entry
	      while(entry && entry.r)entry = entry.p;
	      // get next entry
	      if(!that._t || !(that._l = entry = entry ? entry.n : that._t._f)){
	        // or finish the iteration
	        that._t = undefined;
	        return step(1);
	      }
	      // return step by kind
	      if(kind == 'keys'  )return step(0, entry.k);
	      if(kind == 'values')return step(0, entry.v);
	      return step(0, [entry.k, entry.v]);
	    }, IS_MAP ? 'entries' : 'values' , !IS_MAP, true);
	
	    // add [@@species], 23.1.2.2, 23.2.2.2
	    setSpecies(NAME);
	  }
	};

/***/ },
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var global         = __webpack_require__(6)
	  , $export        = __webpack_require__(5)
	  , redefine       = __webpack_require__(12)
	  , redefineAll    = __webpack_require__(144)
	  , forOf          = __webpack_require__(140)
	  , strictNew      = __webpack_require__(139)
	  , isObject       = __webpack_require__(18)
	  , fails          = __webpack_require__(11)
	  , $iterDetect    = __webpack_require__(117)
	  , setToStringTag = __webpack_require__(37);
	
	module.exports = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK){
	  var Base  = global[NAME]
	    , C     = Base
	    , ADDER = IS_MAP ? 'set' : 'add'
	    , proto = C && C.prototype
	    , O     = {};
	  var fixMethod = function(KEY){
	    var fn = proto[KEY];
	    redefine(proto, KEY,
	      KEY == 'delete' ? function(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'has' ? function has(a){
	        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'get' ? function get(a){
	        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
	      } : KEY == 'add' ? function add(a){ fn.call(this, a === 0 ? 0 : a); return this; }
	        : function set(a, b){ fn.call(this, a === 0 ? 0 : a, b); return this; }
	    );
	  };
	  if(typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function(){
	    new C().entries().next();
	  }))){
	    // create collection constructor
	    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
	    redefineAll(C.prototype, methods);
	  } else {
	    var instance             = new C
	      // early implementations not supports chaining
	      , HASNT_CHAINING       = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance
	      // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
	      , THROWS_ON_PRIMITIVES = fails(function(){ instance.has(1); })
	      // most early implementations doesn't supports iterables, most modern - not close it correctly
	      , ACCEPT_ITERABLES     = $iterDetect(function(iter){ new C(iter); }) // eslint-disable-line no-new
	      // for early implementations -0 and +0 not the same
	      , BUGGY_ZERO;
	    if(!ACCEPT_ITERABLES){ 
	      C = wrapper(function(target, iterable){
	        strictNew(target, C, NAME);
	        var that = new Base;
	        if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	        return that;
	      });
	      C.prototype = proto;
	      proto.constructor = C;
	    }
	    IS_WEAK || instance.forEach(function(val, key){
	      BUGGY_ZERO = 1 / key === -Infinity;
	    });
	    if(THROWS_ON_PRIMITIVES || BUGGY_ZERO){
	      fixMethod('delete');
	      fixMethod('has');
	      IS_MAP && fixMethod('get');
	    }
	    if(BUGGY_ZERO || HASNT_CHAINING)fixMethod(ADDER);
	    // weak collections should not contains .clear method
	    if(IS_WEAK && proto.clear)delete proto.clear;
	  }
	
	  setToStringTag(C, NAME);
	
	  O[NAME] = C;
	  $export($export.G + $export.W + $export.F * (C != Base), O);
	
	  if(!IS_WEAK)common.setStrong(C, NAME, IS_MAP);
	
	  return C;
	};

/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var strong = __webpack_require__(146);
	
	// 23.2 Set Objects
	__webpack_require__(147)('Set', function(get){
	  return function Set(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.2.3.1 Set.prototype.add(value)
	  add: function add(value){
	    return strong.def(this, value = value === 0 ? 0 : value, value);
	  }
	}, strong);

/***/ },
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $            = __webpack_require__(4)
	  , redefine     = __webpack_require__(12)
	  , weak         = __webpack_require__(150)
	  , isObject     = __webpack_require__(18)
	  , has          = __webpack_require__(19)
	  , frozenStore  = weak.frozenStore
	  , WEAK         = weak.WEAK
	  , isExtensible = Object.isExtensible || isObject
	  , tmp          = {};
	
	// 23.3 WeakMap Objects
	var $WeakMap = __webpack_require__(147)('WeakMap', function(get){
	  return function WeakMap(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.3.3.3 WeakMap.prototype.get(key)
	  get: function get(key){
	    if(isObject(key)){
	      if(!isExtensible(key))return frozenStore(this).get(key);
	      if(has(key, WEAK))return key[WEAK][this._i];
	    }
	  },
	  // 23.3.3.5 WeakMap.prototype.set(key, value)
	  set: function set(key, value){
	    return weak.def(this, key, value);
	  }
	}, weak, true, true);
	
	// IE11 WeakMap frozen keys fix
	if(new $WeakMap().set((Object.freeze || Object)(tmp), 7).get(tmp) != 7){
	  $.each.call(['delete', 'has', 'get', 'set'], function(key){
	    var proto  = $WeakMap.prototype
	      , method = proto[key];
	    redefine(proto, key, function(a, b){
	      // store frozen objects on leaky map
	      if(isObject(a) && !isExtensible(a)){
	        var result = frozenStore(this)[key](a, b);
	        return key == 'set' ? this : result;
	      // store all the rest on native weakmap
	      } return method.call(this, a, b);
	    });
	  });
	}

/***/ },
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var hide              = __webpack_require__(8)
	  , redefineAll       = __webpack_require__(144)
	  , anObject          = __webpack_require__(22)
	  , isObject          = __webpack_require__(18)
	  , strictNew         = __webpack_require__(139)
	  , forOf             = __webpack_require__(140)
	  , createArrayMethod = __webpack_require__(30)
	  , $has              = __webpack_require__(19)
	  , WEAK              = __webpack_require__(13)('weak')
	  , isExtensible      = Object.isExtensible || isObject
	  , arrayFind         = createArrayMethod(5)
	  , arrayFindIndex    = createArrayMethod(6)
	  , id                = 0;
	
	// fallback for frozen keys
	var frozenStore = function(that){
	  return that._l || (that._l = new FrozenStore);
	};
	var FrozenStore = function(){
	  this.a = [];
	};
	var findFrozen = function(store, key){
	  return arrayFind(store.a, function(it){
	    return it[0] === key;
	  });
	};
	FrozenStore.prototype = {
	  get: function(key){
	    var entry = findFrozen(this, key);
	    if(entry)return entry[1];
	  },
	  has: function(key){
	    return !!findFrozen(this, key);
	  },
	  set: function(key, value){
	    var entry = findFrozen(this, key);
	    if(entry)entry[1] = value;
	    else this.a.push([key, value]);
	  },
	  'delete': function(key){
	    var index = arrayFindIndex(this.a, function(it){
	      return it[0] === key;
	    });
	    if(~index)this.a.splice(index, 1);
	    return !!~index;
	  }
	};
	
	module.exports = {
	  getConstructor: function(wrapper, NAME, IS_MAP, ADDER){
	    var C = wrapper(function(that, iterable){
	      strictNew(that, C, NAME);
	      that._i = id++;      // collection id
	      that._l = undefined; // leak store for frozen objects
	      if(iterable != undefined)forOf(iterable, IS_MAP, that[ADDER], that);
	    });
	    redefineAll(C.prototype, {
	      // 23.3.3.2 WeakMap.prototype.delete(key)
	      // 23.4.3.3 WeakSet.prototype.delete(value)
	      'delete': function(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this)['delete'](key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i) && delete key[WEAK][this._i];
	      },
	      // 23.3.3.4 WeakMap.prototype.has(key)
	      // 23.4.3.4 WeakSet.prototype.has(value)
	      has: function has(key){
	        if(!isObject(key))return false;
	        if(!isExtensible(key))return frozenStore(this).has(key);
	        return $has(key, WEAK) && $has(key[WEAK], this._i);
	      }
	    });
	    return C;
	  },
	  def: function(that, key, value){
	    if(!isExtensible(anObject(key))){
	      frozenStore(that).set(key, value);
	    } else {
	      $has(key, WEAK) || hide(key, WEAK, {});
	      key[WEAK][that._i] = value;
	    } return that;
	  },
	  frozenStore: frozenStore,
	  WEAK: WEAK
	};

/***/ },
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var weak = __webpack_require__(150);
	
	// 23.4 WeakSet Objects
	__webpack_require__(147)('WeakSet', function(get){
	  return function WeakSet(){ return get(this, arguments.length > 0 ? arguments[0] : undefined); };
	}, {
	  // 23.4.3.1 WeakSet.prototype.add(value)
	  add: function add(value){
	    return weak.def(this, value, true);
	  }
	}, weak, false, true);

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
	var $export = __webpack_require__(5)
	  , _apply  = Function.apply;
	
	$export($export.S, 'Reflect', {
	  apply: function apply(target, thisArgument, argumentsList){
	    return _apply.call(target, thisArgument, argumentsList);
	  }
	});

/***/ },
/* 153 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
	var $         = __webpack_require__(4)
	  , $export   = __webpack_require__(5)
	  , aFunction = __webpack_require__(15)
	  , anObject  = __webpack_require__(22)
	  , isObject  = __webpack_require__(18)
	  , bind      = Function.bind || __webpack_require__(7).Function.prototype.bind;
	
	// MS Edge supports only 2 arguments
	// FF Nightly sets third argument as `new.target`, but does not create `this` from it
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  function F(){}
	  return !(Reflect.construct(function(){}, [], F) instanceof F);
	}), 'Reflect', {
	  construct: function construct(Target, args /*, newTarget*/){
	    aFunction(Target);
	    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
	    if(Target == newTarget){
	      // w/o altered newTarget, optimization for 0-4 arguments
	      if(args != undefined)switch(anObject(args).length){
	        case 0: return new Target;
	        case 1: return new Target(args[0]);
	        case 2: return new Target(args[0], args[1]);
	        case 3: return new Target(args[0], args[1], args[2]);
	        case 4: return new Target(args[0], args[1], args[2], args[3]);
	      }
	      // w/o altered newTarget, lot of arguments case
	      var $args = [null];
	      $args.push.apply($args, args);
	      return new (bind.apply(Target, $args));
	    }
	    // with altered newTarget, not support built-in constructors
	    var proto    = newTarget.prototype
	      , instance = $.create(isObject(proto) ? proto : Object.prototype)
	      , result   = Function.apply.call(Target, instance, args);
	    return isObject(result) ? result : instance;
	  }
	});

/***/ },
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
	var $        = __webpack_require__(4)
	  , $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);
	
	// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
	$export($export.S + $export.F * __webpack_require__(11)(function(){
	  Reflect.defineProperty($.setDesc({}, 1, {value: 1}), 1, {value: 2});
	}), 'Reflect', {
	  defineProperty: function defineProperty(target, propertyKey, attributes){
	    anObject(target);
	    try {
	      $.setDesc(target, propertyKey, attributes);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.4 Reflect.deleteProperty(target, propertyKey)
	var $export  = __webpack_require__(5)
	  , getDesc  = __webpack_require__(4).getDesc
	  , anObject = __webpack_require__(22);
	
	$export($export.S, 'Reflect', {
	  deleteProperty: function deleteProperty(target, propertyKey){
	    var desc = getDesc(anObject(target), propertyKey);
	    return desc && !desc.configurable ? false : delete target[propertyKey];
	  }
	});

/***/ },
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// 26.1.5 Reflect.enumerate(target)
	var $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);
	var Enumerate = function(iterated){
	  this._t = anObject(iterated); // target
	  this._i = 0;                  // next index
	  var keys = this._k = []       // keys
	    , key;
	  for(key in iterated)keys.push(key);
	};
	__webpack_require__(103)(Enumerate, 'Object', function(){
	  var that = this
	    , keys = that._k
	    , key;
	  do {
	    if(that._i >= keys.length)return {value: undefined, done: true};
	  } while(!((key = keys[that._i++]) in that._t));
	  return {value: key, done: false};
	});
	
	$export($export.S, 'Reflect', {
	  enumerate: function enumerate(target){
	    return new Enumerate(target);
	  }
	});

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.6 Reflect.get(target, propertyKey [, receiver])
	var $        = __webpack_require__(4)
	  , has      = __webpack_require__(19)
	  , $export  = __webpack_require__(5)
	  , isObject = __webpack_require__(18)
	  , anObject = __webpack_require__(22);
	
	function get(target, propertyKey/*, receiver*/){
	  var receiver = arguments.length < 3 ? target : arguments[2]
	    , desc, proto;
	  if(anObject(target) === receiver)return target[propertyKey];
	  if(desc = $.getDesc(target, propertyKey))return has(desc, 'value')
	    ? desc.value
	    : desc.get !== undefined
	      ? desc.get.call(receiver)
	      : undefined;
	  if(isObject(proto = $.getProto(target)))return get(proto, propertyKey, receiver);
	}
	
	$export($export.S, 'Reflect', {get: get});

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
	var $        = __webpack_require__(4)
	  , $export  = __webpack_require__(5)
	  , anObject = __webpack_require__(22);
	
	$export($export.S, 'Reflect', {
	  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey){
	    return $.getDesc(anObject(target), propertyKey);
	  }
	});

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.8 Reflect.getPrototypeOf(target)
	var $export  = __webpack_require__(5)
	  , getProto = __webpack_require__(4).getProto
	  , anObject = __webpack_require__(22);
	
	$export($export.S, 'Reflect', {
	  getPrototypeOf: function getPrototypeOf(target){
	    return getProto(anObject(target));
	  }
	});

/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.9 Reflect.has(target, propertyKey)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Reflect', {
	  has: function has(target, propertyKey){
	    return propertyKey in target;
	  }
	});

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.10 Reflect.isExtensible(target)
	var $export       = __webpack_require__(5)
	  , anObject      = __webpack_require__(22)
	  , $isExtensible = Object.isExtensible;
	
	$export($export.S, 'Reflect', {
	  isExtensible: function isExtensible(target){
	    anObject(target);
	    return $isExtensible ? $isExtensible(target) : true;
	  }
	});

/***/ },
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.11 Reflect.ownKeys(target)
	var $export = __webpack_require__(5);
	
	$export($export.S, 'Reflect', {ownKeys: __webpack_require__(163)});

/***/ },
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	// all object keys, includes non-enumerable and symbols
	var $        = __webpack_require__(4)
	  , anObject = __webpack_require__(22)
	  , Reflect  = __webpack_require__(6).Reflect;
	module.exports = Reflect && Reflect.ownKeys || function ownKeys(it){
	  var keys       = $.getNames(anObject(it))
	    , getSymbols = $.getSymbols;
	  return getSymbols ? keys.concat(getSymbols(it)) : keys;
	};

/***/ },
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.12 Reflect.preventExtensions(target)
	var $export            = __webpack_require__(5)
	  , anObject           = __webpack_require__(22)
	  , $preventExtensions = Object.preventExtensions;
	
	$export($export.S, 'Reflect', {
	  preventExtensions: function preventExtensions(target){
	    anObject(target);
	    try {
	      if($preventExtensions)$preventExtensions(target);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
	var $          = __webpack_require__(4)
	  , has        = __webpack_require__(19)
	  , $export    = __webpack_require__(5)
	  , createDesc = __webpack_require__(9)
	  , anObject   = __webpack_require__(22)
	  , isObject   = __webpack_require__(18);
	
	function set(target, propertyKey, V/*, receiver*/){
	  var receiver = arguments.length < 4 ? target : arguments[3]
	    , ownDesc  = $.getDesc(anObject(target), propertyKey)
	    , existingDescriptor, proto;
	  if(!ownDesc){
	    if(isObject(proto = $.getProto(target))){
	      return set(proto, propertyKey, V, receiver);
	    }
	    ownDesc = createDesc(0);
	  }
	  if(has(ownDesc, 'value')){
	    if(ownDesc.writable === false || !isObject(receiver))return false;
	    existingDescriptor = $.getDesc(receiver, propertyKey) || createDesc(0);
	    existingDescriptor.value = V;
	    $.setDesc(receiver, propertyKey, existingDescriptor);
	    return true;
	  }
	  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
	}
	
	$export($export.S, 'Reflect', {set: set});

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	// 26.1.14 Reflect.setPrototypeOf(target, proto)
	var $export  = __webpack_require__(5)
	  , setProto = __webpack_require__(47);
	
	if(setProto)$export($export.S, 'Reflect', {
	  setPrototypeOf: function setPrototypeOf(target, proto){
	    setProto.check(target, proto);
	    try {
	      setProto.set(target, proto);
	      return true;
	    } catch(e){
	      return false;
	    }
	  }
	});

/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export   = __webpack_require__(5)
	  , $includes = __webpack_require__(35)(true);
	
	$export($export.P, 'Array', {
	  // https://github.com/domenic/Array.prototype.includes
	  includes: function includes(el /*, fromIndex = 0 */){
	    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
	  }
	});
	
	__webpack_require__(120)('includes');

/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/mathiasbynens/String.prototype.at
	var $export = __webpack_require__(5)
	  , $at     = __webpack_require__(100)(true);
	
	$export($export.P, 'String', {
	  at: function at(pos){
	    return $at(this, pos);
	  }
	});

/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $pad    = __webpack_require__(170);
	
	$export($export.P, 'String', {
	  padLeft: function padLeft(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
	  }
	});

/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/ljharb/proposal-string-pad-left-right
	var toLength = __webpack_require__(29)
	  , repeat   = __webpack_require__(111)
	  , defined  = __webpack_require__(24);
	
	module.exports = function(that, maxLength, fillString, left){
	  var S            = String(defined(that))
	    , stringLength = S.length
	    , fillStr      = fillString === undefined ? ' ' : String(fillString)
	    , intMaxLength = toLength(maxLength);
	  if(intMaxLength <= stringLength)return S;
	  if(fillStr == '')fillStr = ' ';
	  var fillLen = intMaxLength - stringLength
	    , stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
	  if(stringFiller.length > fillLen)stringFiller = stringFiller.slice(0, fillLen);
	  return left ? stringFiller + S : S + stringFiller;
	};

/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var $export = __webpack_require__(5)
	  , $pad    = __webpack_require__(170);
	
	$export($export.P, 'String', {
	  padRight: function padRight(maxLength /*, fillString = ' ' */){
	    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
	  }
	});

/***/ },
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(65)('trimLeft', function($trim){
	  return function trimLeft(){
	    return $trim(this, 1);
	  };
	});

/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
	__webpack_require__(65)('trimRight', function($trim){
	  return function trimRight(){
	    return $trim(this, 2);
	  };
	});

/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/benjamingr/RexExp.escape
	var $export = __webpack_require__(5)
	  , $re     = __webpack_require__(175)(/[\\^$*+?.()|[\]{}]/g, '\\$&');
	
	$export($export.S, 'RegExp', {escape: function escape(it){ return $re(it); }});


/***/ },
/* 175 */
/***/ function(module, exports) {

	module.exports = function(regExp, replace){
	  var replacer = replace === Object(replace) ? function(part){
	    return replace[part];
	  } : replace;
	  return function(it){
	    return String(it).replace(regExp, replacer);
	  };
	};

/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	// https://gist.github.com/WebReflection/9353781
	var $          = __webpack_require__(4)
	  , $export    = __webpack_require__(5)
	  , ownKeys    = __webpack_require__(163)
	  , toIObject  = __webpack_require__(25)
	  , createDesc = __webpack_require__(9);
	
	$export($export.S, 'Object', {
	  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object){
	    var O       = toIObject(object)
	      , setDesc = $.setDesc
	      , getDesc = $.getDesc
	      , keys    = ownKeys(O)
	      , result  = {}
	      , i       = 0
	      , key, D;
	    while(keys.length > i){
	      D = getDesc(O, key = keys[i++]);
	      if(key in result)setDesc(result, key, createDesc(0, D));
	      else result[key] = D;
	    } return result;
	  }
	});

/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export = __webpack_require__(5)
	  , $values = __webpack_require__(178)(false);
	
	$export($export.S, 'Object', {
	  values: function values(it){
	    return $values(it);
	  }
	});

/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	var $         = __webpack_require__(4)
	  , toIObject = __webpack_require__(25)
	  , isEnum    = $.isEnum;
	module.exports = function(isEntries){
	  return function(it){
	    var O      = toIObject(it)
	      , keys   = $.getKeys(O)
	      , length = keys.length
	      , i      = 0
	      , result = []
	      , key;
	    while(length > i)if(isEnum.call(O, key = keys[i++])){
	      result.push(isEntries ? [key, O[key]] : O[key]);
	    } return result;
	  };
	};

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	// http://goo.gl/XkBrjD
	var $export  = __webpack_require__(5)
	  , $entries = __webpack_require__(178)(true);
	
	$export($export.S, 'Object', {
	  entries: function entries(it){
	    return $entries(it);
	  }
	});

/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(5);
	
	$export($export.P, 'Map', {toJSON: __webpack_require__(181)('Map')});

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var forOf   = __webpack_require__(140)
	  , classof = __webpack_require__(49);
	module.exports = function(NAME){
	  return function toJSON(){
	    if(classof(this) != NAME)throw TypeError(NAME + "#toJSON isn't generic");
	    var arr = [];
	    forOf(this, false, arr.push, arr);
	    return arr;
	  };
	};

/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	// https://github.com/DavidBruant/Map-Set.prototype.toJSON
	var $export  = __webpack_require__(5);
	
	$export($export.P, 'Set', {toJSON: __webpack_require__(181)('Set')});

/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	// JavaScript 1.6 / Strawman array statics shim
	var $       = __webpack_require__(4)
	  , $export = __webpack_require__(5)
	  , $ctx    = __webpack_require__(14)
	  , $Array  = __webpack_require__(7).Array || Array
	  , statics = {};
	var setStatics = function(keys, length){
	  $.each.call(keys.split(','), function(key){
	    if(length == undefined && key in $Array)statics[key] = $Array[key];
	    else if(key in [])statics[key] = $ctx(Function.call, [][key], length);
	  });
	};
	setStatics('pop,reverse,shift,keys,values,entries', 1);
	setStatics('indexOf,every,some,forEach,map,filter,find,findIndex,includes', 3);
	setStatics('join,slice,concat,push,splice,unshift,sort,lastIndexOf,' +
	           'reduce,reduceRight,copyWithin,fill');
	$export($export.S, 'Array', statics);

/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	// ie9- setTimeout & setInterval additional parameters fix
	var global     = __webpack_require__(6)
	  , $export    = __webpack_require__(5)
	  , invoke     = __webpack_require__(21)
	  , partial    = __webpack_require__(185)
	  , navigator  = global.navigator
	  , MSIE       = !!navigator && /MSIE .\./.test(navigator.userAgent); // <- dirty ie9- check
	var wrap = function(set){
	  return MSIE ? function(fn, time /*, ...args */){
	    return set(invoke(
	      partial,
	      [].slice.call(arguments, 2),
	      typeof fn == 'function' ? fn : Function(fn)
	    ), time);
	  } : set;
	};
	$export($export.G + $export.B + $export.F * MSIE, {
	  setTimeout:  wrap(global.setTimeout),
	  setInterval: wrap(global.setInterval)
	});

/***/ },
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	var path      = __webpack_require__(186)
	  , invoke    = __webpack_require__(21)
	  , aFunction = __webpack_require__(15);
	module.exports = function(/* ...pargs */){
	  var fn     = aFunction(this)
	    , length = arguments.length
	    , pargs  = Array(length)
	    , i      = 0
	    , _      = path._
	    , holder = false;
	  while(length > i)if((pargs[i] = arguments[i++]) === _)holder = true;
	  return function(/* ...args */){
	    var that  = this
	      , $$    = arguments
	      , $$len = $$.length
	      , j = 0, k = 0, args;
	    if(!holder && !$$len)return invoke(fn, pargs, that);
	    args = pargs.slice();
	    if(holder)for(;length > j; j++)if(args[j] === _)args[j] = $$[k++];
	    while($$len > k)args.push($$[k++]);
	    return invoke(fn, args, that);
	  };
	};

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(6);

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	var $export = __webpack_require__(5)
	  , $task   = __webpack_require__(143);
	$export($export.G + $export.B, {
	  setImmediate:   $task.set,
	  clearImmediate: $task.clear
	});

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(119);
	var global      = __webpack_require__(6)
	  , hide        = __webpack_require__(8)
	  , Iterators   = __webpack_require__(102)
	  , ITERATOR    = __webpack_require__(33)('iterator')
	  , NL          = global.NodeList
	  , HTC         = global.HTMLCollection
	  , NLProto     = NL && NL.prototype
	  , HTCProto    = HTC && HTC.prototype
	  , ArrayValues = Iterators.NodeList = Iterators.HTMLCollection = Iterators.Array;
	if(NLProto && !NLProto[ITERATOR])hide(NLProto, ITERATOR, ArrayValues);
	if(HTCProto && !HTCProto[ITERATOR])hide(HTCProto, ITERATOR, ArrayValues);

/***/ },
/* 189 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * https://raw.github.com/facebook/regenerator/master/LICENSE file. An
	 * additional grant of patent rights can be found in the PATENTS file in
	 * the same directory.
	 */
	
	!(function(global) {
	  "use strict";
	
	  var hasOwn = Object.prototype.hasOwnProperty;
	  var undefined; // More compressible than void 0.
	  var iteratorSymbol =
	    typeof Symbol === "function" && Symbol.iterator || "@@iterator";
	
	  var inModule = typeof module === "object";
	  var runtime = global.regeneratorRuntime;
	  if (runtime) {
	    if (inModule) {
	      // If regeneratorRuntime is defined globally and we're in a module,
	      // make the exports object identical to regeneratorRuntime.
	      module.exports = runtime;
	    }
	    // Don't bother evaluating the rest of this file if the runtime was
	    // already defined globally.
	    return;
	  }
	
	  // Define the runtime globally (as expected by generated code) as either
	  // module.exports (if we're in a module) or a new, empty object.
	  runtime = global.regeneratorRuntime = inModule ? module.exports : {};
	
	  function wrap(innerFn, outerFn, self, tryLocsList) {
	    // If outerFn provided, then outerFn.prototype instanceof Generator.
	    var generator = Object.create((outerFn || Generator).prototype);
	    var context = new Context(tryLocsList || []);
	
	    // The ._invoke method unifies the implementations of the .next,
	    // .throw, and .return methods.
	    generator._invoke = makeInvokeMethod(innerFn, self, context);
	
	    return generator;
	  }
	  runtime.wrap = wrap;
	
	  // Try/catch helper to minimize deoptimizations. Returns a completion
	  // record like context.tryEntries[i].completion. This interface could
	  // have been (and was previously) designed to take a closure to be
	  // invoked without arguments, but in all the cases we care about we
	  // already have an existing method we want to call, so there's no need
	  // to create a new function object. We can even get away with assuming
	  // the method takes exactly one argument, since that happens to be true
	  // in every case, so we don't have to touch the arguments object. The
	  // only additional allocation required is the completion record, which
	  // has a stable shape and so hopefully should be cheap to allocate.
	  function tryCatch(fn, obj, arg) {
	    try {
	      return { type: "normal", arg: fn.call(obj, arg) };
	    } catch (err) {
	      return { type: "throw", arg: err };
	    }
	  }
	
	  var GenStateSuspendedStart = "suspendedStart";
	  var GenStateSuspendedYield = "suspendedYield";
	  var GenStateExecuting = "executing";
	  var GenStateCompleted = "completed";
	
	  // Returning this object from the innerFn has the same effect as
	  // breaking out of the dispatch switch statement.
	  var ContinueSentinel = {};
	
	  // Dummy constructor functions that we use as the .constructor and
	  // .constructor.prototype properties for functions that return Generator
	  // objects. For full spec compliance, you may wish to configure your
	  // minifier not to mangle the names of these two functions.
	  function Generator() {}
	  function GeneratorFunction() {}
	  function GeneratorFunctionPrototype() {}
	
	  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype;
	  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
	  GeneratorFunctionPrototype.constructor = GeneratorFunction;
	  GeneratorFunction.displayName = "GeneratorFunction";
	
	  // Helper for defining the .next, .throw, and .return methods of the
	  // Iterator interface in terms of a single ._invoke method.
	  function defineIteratorMethods(prototype) {
	    ["next", "throw", "return"].forEach(function(method) {
	      prototype[method] = function(arg) {
	        return this._invoke(method, arg);
	      };
	    });
	  }
	
	  runtime.isGeneratorFunction = function(genFun) {
	    var ctor = typeof genFun === "function" && genFun.constructor;
	    return ctor
	      ? ctor === GeneratorFunction ||
	        // For the native GeneratorFunction constructor, the best we can
	        // do is to check its .name property.
	        (ctor.displayName || ctor.name) === "GeneratorFunction"
	      : false;
	  };
	
	  runtime.mark = function(genFun) {
	    if (Object.setPrototypeOf) {
	      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
	    } else {
	      genFun.__proto__ = GeneratorFunctionPrototype;
	    }
	    genFun.prototype = Object.create(Gp);
	    return genFun;
	  };
	
	  // Within the body of any async function, `await x` is transformed to
	  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
	  // `value instanceof AwaitArgument` to determine if the yielded value is
	  // meant to be awaited. Some may consider the name of this method too
	  // cutesy, but they are curmudgeons.
	  runtime.awrap = function(arg) {
	    return new AwaitArgument(arg);
	  };
	
	  function AwaitArgument(arg) {
	    this.arg = arg;
	  }
	
	  function AsyncIterator(generator) {
	    // This invoke function is written in a style that assumes some
	    // calling function (or Promise) will handle exceptions.
	    function invoke(method, arg) {
	      var result = generator[method](arg);
	      var value = result.value;
	      return value instanceof AwaitArgument
	        ? Promise.resolve(value.arg).then(invokeNext, invokeThrow)
	        : Promise.resolve(value).then(function(unwrapped) {
	            // When a yielded Promise is resolved, its final value becomes
	            // the .value of the Promise<{value,done}> result for the
	            // current iteration. If the Promise is rejected, however, the
	            // result for this iteration will be rejected with the same
	            // reason. Note that rejections of yielded Promises are not
	            // thrown back into the generator function, as is the case
	            // when an awaited Promise is rejected. This difference in
	            // behavior between yield and await is important, because it
	            // allows the consumer to decide what to do with the yielded
	            // rejection (swallow it and continue, manually .throw it back
	            // into the generator, abandon iteration, whatever). With
	            // await, by contrast, there is no opportunity to examine the
	            // rejection reason outside the generator function, so the
	            // only option is to throw it from the await expression, and
	            // let the generator function handle the exception.
	            result.value = unwrapped;
	            return result;
	          });
	    }
	
	    if (typeof process === "object" && process.domain) {
	      invoke = process.domain.bind(invoke);
	    }
	
	    var invokeNext = invoke.bind(generator, "next");
	    var invokeThrow = invoke.bind(generator, "throw");
	    var invokeReturn = invoke.bind(generator, "return");
	    var previousPromise;
	
	    function enqueue(method, arg) {
	      function callInvokeWithMethodAndArg() {
	        return invoke(method, arg);
	      }
	
	      return previousPromise =
	        // If enqueue has been called before, then we want to wait until
	        // all previous Promises have been resolved before calling invoke,
	        // so that results are always delivered in the correct order. If
	        // enqueue has not been called before, then it is important to
	        // call invoke immediately, without waiting on a callback to fire,
	        // so that the async generator function has the opportunity to do
	        // any necessary setup in a predictable way. This predictability
	        // is why the Promise constructor synchronously invokes its
	        // executor callback, and why async functions synchronously
	        // execute code before the first await. Since we implement simple
	        // async functions in terms of async generators, it is especially
	        // important to get this right, even though it requires care.
	        previousPromise ? previousPromise.then(
	          callInvokeWithMethodAndArg,
	          // Avoid propagating failures to Promises returned by later
	          // invocations of the iterator.
	          callInvokeWithMethodAndArg
	        ) : new Promise(function (resolve) {
	          resolve(callInvokeWithMethodAndArg());
	        });
	    }
	
	    // Define the unified helper method that is used to implement .next,
	    // .throw, and .return (see defineIteratorMethods).
	    this._invoke = enqueue;
	  }
	
	  defineIteratorMethods(AsyncIterator.prototype);
	
	  // Note that simple async functions are implemented on top of
	  // AsyncIterator objects; they just return a Promise for the value of
	  // the final result produced by the iterator.
	  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
	    var iter = new AsyncIterator(
	      wrap(innerFn, outerFn, self, tryLocsList)
	    );
	
	    return runtime.isGeneratorFunction(outerFn)
	      ? iter // If outerFn is a generator, return the full iterator.
	      : iter.next().then(function(result) {
	          return result.done ? result.value : iter.next();
	        });
	  };
	
	  function makeInvokeMethod(innerFn, self, context) {
	    var state = GenStateSuspendedStart;
	
	    return function invoke(method, arg) {
	      if (state === GenStateExecuting) {
	        throw new Error("Generator is already running");
	      }
	
	      if (state === GenStateCompleted) {
	        if (method === "throw") {
	          throw arg;
	        }
	
	        // Be forgiving, per 25.3.3.3.3 of the spec:
	        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
	        return doneResult();
	      }
	
	      while (true) {
	        var delegate = context.delegate;
	        if (delegate) {
	          if (method === "return" ||
	              (method === "throw" && delegate.iterator[method] === undefined)) {
	            // A return or throw (when the delegate iterator has no throw
	            // method) always terminates the yield* loop.
	            context.delegate = null;
	
	            // If the delegate iterator has a return method, give it a
	            // chance to clean up.
	            var returnMethod = delegate.iterator["return"];
	            if (returnMethod) {
	              var record = tryCatch(returnMethod, delegate.iterator, arg);
	              if (record.type === "throw") {
	                // If the return method threw an exception, let that
	                // exception prevail over the original return or throw.
	                method = "throw";
	                arg = record.arg;
	                continue;
	              }
	            }
	
	            if (method === "return") {
	              // Continue with the outer return, now that the delegate
	              // iterator has been terminated.
	              continue;
	            }
	          }
	
	          var record = tryCatch(
	            delegate.iterator[method],
	            delegate.iterator,
	            arg
	          );
	
	          if (record.type === "throw") {
	            context.delegate = null;
	
	            // Like returning generator.throw(uncaught), but without the
	            // overhead of an extra function call.
	            method = "throw";
	            arg = record.arg;
	            continue;
	          }
	
	          // Delegate generator ran and handled its own exceptions so
	          // regardless of what the method was, we continue as if it is
	          // "next" with an undefined arg.
	          method = "next";
	          arg = undefined;
	
	          var info = record.arg;
	          if (info.done) {
	            context[delegate.resultName] = info.value;
	            context.next = delegate.nextLoc;
	          } else {
	            state = GenStateSuspendedYield;
	            return info;
	          }
	
	          context.delegate = null;
	        }
	
	        if (method === "next") {
	          context._sent = arg;
	
	          if (state === GenStateSuspendedYield) {
	            context.sent = arg;
	          } else {
	            context.sent = undefined;
	          }
	        } else if (method === "throw") {
	          if (state === GenStateSuspendedStart) {
	            state = GenStateCompleted;
	            throw arg;
	          }
	
	          if (context.dispatchException(arg)) {
	            // If the dispatched exception was caught by a catch block,
	            // then let that catch block handle the exception normally.
	            method = "next";
	            arg = undefined;
	          }
	
	        } else if (method === "return") {
	          context.abrupt("return", arg);
	        }
	
	        state = GenStateExecuting;
	
	        var record = tryCatch(innerFn, self, context);
	        if (record.type === "normal") {
	          // If an exception is thrown from innerFn, we leave state ===
	          // GenStateExecuting and loop back for another invocation.
	          state = context.done
	            ? GenStateCompleted
	            : GenStateSuspendedYield;
	
	          var info = {
	            value: record.arg,
	            done: context.done
	          };
	
	          if (record.arg === ContinueSentinel) {
	            if (context.delegate && method === "next") {
	              // Deliberately forget the last sent value so that we don't
	              // accidentally pass it on to the delegate.
	              arg = undefined;
	            }
	          } else {
	            return info;
	          }
	
	        } else if (record.type === "throw") {
	          state = GenStateCompleted;
	          // Dispatch the exception by looping back around to the
	          // context.dispatchException(arg) call above.
	          method = "throw";
	          arg = record.arg;
	        }
	      }
	    };
	  }
	
	  // Define Generator.prototype.{next,throw,return} in terms of the
	  // unified ._invoke helper method.
	  defineIteratorMethods(Gp);
	
	  Gp[iteratorSymbol] = function() {
	    return this;
	  };
	
	  Gp.toString = function() {
	    return "[object Generator]";
	  };
	
	  function pushTryEntry(locs) {
	    var entry = { tryLoc: locs[0] };
	
	    if (1 in locs) {
	      entry.catchLoc = locs[1];
	    }
	
	    if (2 in locs) {
	      entry.finallyLoc = locs[2];
	      entry.afterLoc = locs[3];
	    }
	
	    this.tryEntries.push(entry);
	  }
	
	  function resetTryEntry(entry) {
	    var record = entry.completion || {};
	    record.type = "normal";
	    delete record.arg;
	    entry.completion = record;
	  }
	
	  function Context(tryLocsList) {
	    // The root entry object (effectively a try statement without a catch
	    // or a finally block) gives us a place to store values thrown from
	    // locations where there is no enclosing try statement.
	    this.tryEntries = [{ tryLoc: "root" }];
	    tryLocsList.forEach(pushTryEntry, this);
	    this.reset(true);
	  }
	
	  runtime.keys = function(object) {
	    var keys = [];
	    for (var key in object) {
	      keys.push(key);
	    }
	    keys.reverse();
	
	    // Rather than returning an object with a next method, we keep
	    // things simple and return the next function itself.
	    return function next() {
	      while (keys.length) {
	        var key = keys.pop();
	        if (key in object) {
	          next.value = key;
	          next.done = false;
	          return next;
	        }
	      }
	
	      // To avoid creating an additional object, we just hang the .value
	      // and .done properties off the next function object itself. This
	      // also ensures that the minifier will not anonymize the function.
	      next.done = true;
	      return next;
	    };
	  };
	
	  function values(iterable) {
	    if (iterable) {
	      var iteratorMethod = iterable[iteratorSymbol];
	      if (iteratorMethod) {
	        return iteratorMethod.call(iterable);
	      }
	
	      if (typeof iterable.next === "function") {
	        return iterable;
	      }
	
	      if (!isNaN(iterable.length)) {
	        var i = -1, next = function next() {
	          while (++i < iterable.length) {
	            if (hasOwn.call(iterable, i)) {
	              next.value = iterable[i];
	              next.done = false;
	              return next;
	            }
	          }
	
	          next.value = undefined;
	          next.done = true;
	
	          return next;
	        };
	
	        return next.next = next;
	      }
	    }
	
	    // Return an iterator with no values.
	    return { next: doneResult };
	  }
	  runtime.values = values;
	
	  function doneResult() {
	    return { value: undefined, done: true };
	  }
	
	  Context.prototype = {
	    constructor: Context,
	
	    reset: function(skipTempReset) {
	      this.prev = 0;
	      this.next = 0;
	      this.sent = undefined;
	      this.done = false;
	      this.delegate = null;
	
	      this.tryEntries.forEach(resetTryEntry);
	
	      if (!skipTempReset) {
	        for (var name in this) {
	          // Not sure about the optimal order of these conditions:
	          if (name.charAt(0) === "t" &&
	              hasOwn.call(this, name) &&
	              !isNaN(+name.slice(1))) {
	            this[name] = undefined;
	          }
	        }
	      }
	    },
	
	    stop: function() {
	      this.done = true;
	
	      var rootEntry = this.tryEntries[0];
	      var rootRecord = rootEntry.completion;
	      if (rootRecord.type === "throw") {
	        throw rootRecord.arg;
	      }
	
	      return this.rval;
	    },
	
	    dispatchException: function(exception) {
	      if (this.done) {
	        throw exception;
	      }
	
	      var context = this;
	      function handle(loc, caught) {
	        record.type = "throw";
	        record.arg = exception;
	        context.next = loc;
	        return !!caught;
	      }
	
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        var record = entry.completion;
	
	        if (entry.tryLoc === "root") {
	          // Exception thrown outside of any try block that could handle
	          // it, so set the completion value of the entire function to
	          // throw the exception.
	          return handle("end");
	        }
	
	        if (entry.tryLoc <= this.prev) {
	          var hasCatch = hasOwn.call(entry, "catchLoc");
	          var hasFinally = hasOwn.call(entry, "finallyLoc");
	
	          if (hasCatch && hasFinally) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            } else if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else if (hasCatch) {
	            if (this.prev < entry.catchLoc) {
	              return handle(entry.catchLoc, true);
	            }
	
	          } else if (hasFinally) {
	            if (this.prev < entry.finallyLoc) {
	              return handle(entry.finallyLoc);
	            }
	
	          } else {
	            throw new Error("try statement without catch or finally");
	          }
	        }
	      }
	    },
	
	    abrupt: function(type, arg) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc <= this.prev &&
	            hasOwn.call(entry, "finallyLoc") &&
	            this.prev < entry.finallyLoc) {
	          var finallyEntry = entry;
	          break;
	        }
	      }
	
	      if (finallyEntry &&
	          (type === "break" ||
	           type === "continue") &&
	          finallyEntry.tryLoc <= arg &&
	          arg <= finallyEntry.finallyLoc) {
	        // Ignore the finally entry if control is not jumping to a
	        // location outside the try/catch block.
	        finallyEntry = null;
	      }
	
	      var record = finallyEntry ? finallyEntry.completion : {};
	      record.type = type;
	      record.arg = arg;
	
	      if (finallyEntry) {
	        this.next = finallyEntry.finallyLoc;
	      } else {
	        this.complete(record);
	      }
	
	      return ContinueSentinel;
	    },
	
	    complete: function(record, afterLoc) {
	      if (record.type === "throw") {
	        throw record.arg;
	      }
	
	      if (record.type === "break" ||
	          record.type === "continue") {
	        this.next = record.arg;
	      } else if (record.type === "return") {
	        this.rval = record.arg;
	        this.next = "end";
	      } else if (record.type === "normal" && afterLoc) {
	        this.next = afterLoc;
	      }
	    },
	
	    finish: function(finallyLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.finallyLoc === finallyLoc) {
	          this.complete(entry.completion, entry.afterLoc);
	          resetTryEntry(entry);
	          return ContinueSentinel;
	        }
	      }
	    },
	
	    "catch": function(tryLoc) {
	      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
	        var entry = this.tryEntries[i];
	        if (entry.tryLoc === tryLoc) {
	          var record = entry.completion;
	          if (record.type === "throw") {
	            var thrown = record.arg;
	            resetTryEntry(entry);
	          }
	          return thrown;
	        }
	      }
	
	      // The context.catch method must only be called with a location
	      // argument that corresponds to a known catch block.
	      throw new Error("illegal catch attempt");
	    },
	
	    delegateYield: function(iterable, resultName, nextLoc) {
	      this.delegate = {
	        iterator: values(iterable),
	        resultName: resultName,
	        nextLoc: nextLoc
	      };
	
	      return ContinueSentinel;
	    }
	  };
	})(
	  // Among the various tricks for obtaining a reference to the global
	  // object, this seems to be the most reliable technique that does not
	  // use indirect eval (which violates Content Security Policy).
	  typeof global === "object" ? global :
	  typeof window === "object" ? window :
	  typeof self === "object" ? self : this
	);


/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _util = __webpack_require__(191);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _jsCsp = __webpack_require__(192);
	
	var _jsCsp2 = _interopRequireDefault(_jsCsp);
	
	var _Configure = __webpack_require__(202);
	
	var _Configure2 = _interopRequireDefault(_Configure);
	
	var _Signal = __webpack_require__(226);
	
	var _Signal2 = _interopRequireDefault(_Signal);
	
	var _DeviceLog = __webpack_require__(213);
	
	var _DeviceLog2 = _interopRequireDefault(_DeviceLog);
	
	var _ScreenRecord = __webpack_require__(219);
	
	var _ScreenRecord2 = _interopRequireDefault(_ScreenRecord);
	
	var _Timeline = __webpack_require__(227);
	
	var _Timeline2 = _interopRequireDefault(_Timeline);
	
	var _Router2 = __webpack_require__(214);
	
	var _Router3 = _interopRequireDefault(_Router2);
	
	var _Defer = __webpack_require__(210);
	
	var _Defer2 = _interopRequireDefault(_Defer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Controller = function (_Router) {
	  _inherits(Controller, _Router);
	
	  function Controller() {
	    _classCallCheck(this, Controller);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Controller).call(this));
	
	    _this.name = 'controller';
	    _this._mainRouter = null;
	    _this._mainPublication = null;
	    _this._routers = null;
	    _this._stage = null;
	    return _this;
	  }
	
	  _createClass(Controller, [{
	    key: 'start',
	    value: function start() {
	      var configure = new _Configure2.default();
	      this.configs = configure.setup();
	      var mainRouterName = this.configs.routers.__main__;
	      this._routers = {
	        screenrecord: new _ScreenRecord2.default(this.configs),
	        devicelog: new _DeviceLog2.default(this.configs),
	        //log: new Log(this.configs),
	        timeline: new _Timeline2.default(this.configs),
	        signal: new _Signal2.default(this.configs)
	      };
	      this._mainRouter = this._routers[mainRouterName];
	      if (!this._mainRouter) {
	        throw new Error('No main router: ' + mainRouterName);
	      }
	      for (var routerIdentification in this._routers) {
	        var router = this._routers[routerIdentification];
	        this.subscribe(router.connectToController.bind(router));
	      }
	
	      this._mainRouter.subscribe(this._connectToMainRouter.bind(this));
	      _jsCsp2.default.putAsync(this._outputChannel, { 'topic': 'status', 'source': this._name,
	        'payload': { 'type': 'initialize', 'detail': this._routers } });
	    }
	  }, {
	    key: 'stop',
	    value: function () {
	      var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	        var _this2 = this;
	
	        var currentStagePromises;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.prev = 0;
	
	                if (!('terminating' !== this._stage)) {
	                  _context.next = 3;
	                  break;
	                }
	
	                throw new Error('Must be in the terminating stage ' + 'before calling stop (current one is: ' + this._stage + ' )');
	
	              case 3:
	                currentStagePromises = Object.keys(this._routers).map(function (name) {
	                  var router = _this2._routers[name];
	                  return router._currentStageDefer.promise;
	                });
	
	                console.log(this._name, Date.now(), 'Send |finalize| message out');
	                _jsCsp2.default.putAsync(this._outputChannel, { 'topic': 'status', 'source': this._name,
	                  'payload': { 'type': 'finalize' } });
	
	                // To wait terminating stage done. It must be the stage before the this
	                // method get invoked.
	                _context.next = 8;
	                return Promise.all(currentStagePromises);
	
	              case 8:
	                _context.next = 14;
	                break;
	
	              case 10:
	                _context.prev = 10;
	                _context.t0 = _context['catch'](0);
	
	                console.error(_context.t0);
	                throw _context.t0;
	
	              case 14:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this, [[0, 10]]);
	      }));
	
	      return function stop() {
	        return ref.apply(this, arguments);
	      };
	    }()
	  }, {
	    key: '_connectToMainRouter',
	    value: function _connectToMainRouter(publication) {
	      this._mainPublication = publication;
	      _jsCsp2.default.operations.pub.sub(publication, 'status', this._inputChannel);
	      this._consumeMainRouterMessage();
	    }
	  }, {
	    key: '_consumeMainRouterMessage',
	    value: function () {
	      var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2() {
	        var _this3 = this;
	
	        var takeIt, message;
	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                takeIt = function takeIt() {
	                  var defer = new _Defer2.default();
	                  _jsCsp2.default.takeAsync(_this3._inputChannel, function (value) {
	                    console.log(_this3._name, Date.now(), 'Received message: ' + _util2.default.inspect(value));
	                    defer.resolve(value);
	                  });
	                  return defer.promise;
	                };
	
	                _context2.next = 3;
	                return takeIt();
	
	              case 3:
	                message = _context2.sent;
	
	              case 4:
	                if (!(message !== _jsCsp2.default.CLOSED)) {
	                  _context2.next = 19;
	                  break;
	                }
	
	                if (!('finalize' === message.payload.type)) {
	                  _context2.next = 10;
	                  break;
	                }
	
	                this.stop();
	                return _context2.abrupt('break', 19);
	
	              case 10:
	                if (!('stagechange' === message.payload.type)) {
	                  _context2.next = 14;
	                  break;
	                }
	
	                this._stage = message.payload.detail;
	                // We need this await because we need to wait for the current stage change
	                // to start the next change.
	                _context2.next = 14;
	                return this._forwardStageChangeRequest(message.payload.detail);
	
	              case 14:
	                _context2.next = 16;
	                return takeIt();
	
	              case 16:
	                message = _context2.sent;
	                _context2.next = 4;
	                break;
	
	              case 19:
	              case 'end':
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this);
	      }));
	
	      return function _consumeMainRouterMessage() {
	        return ref.apply(this, arguments);
	      };
	    }()
	  }, {
	    key: '_forwardStageChangeRequest',
	    value: function _forwardStageChangeRequest(stage) {
	      var _this4 = this;
	
	      var currentStagePromises = Object.keys(this._routers).map(function (name) {
	        var router = _this4._routers[name];
	        return router._currentStageDefer.promise;
	      });
	
	      console.log(this._name, Date.now(), 'Send the |stagechange| message out; stage: ' + stage);
	      _jsCsp2.default.putAsync(this._outputChannel, { 'topic': 'status', 'source': this._name,
	        'payload': { 'type': 'stagechange', 'detail': stage } });
	      return Promise.all(currentStagePromises);
	    }
	  }]);
	
	  return Controller;
	}(_Router3.default);
	
	var controller = new Controller();
	controller.start();
	//controller.test();

/***/ },
/* 191 */
/***/ function(module, exports) {

	module.exports = require("util");

/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var csp = __webpack_require__(193);
	var operations = __webpack_require__(200);
	var pipeline = __webpack_require__(201);
	
	csp.operations = operations;
	csp.operations.pipeline = pipeline.pipeline;
	csp.operations.pipelineAsync = pipeline.pipelineAsync;
	
	module.exports = csp;


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var buffers = __webpack_require__(194);
	var channels = __webpack_require__(195);
	var select = __webpack_require__(197);
	var process = __webpack_require__(198);
	var timers = __webpack_require__(199);
	
	function spawn(gen, creator) {
	  var ch = channels.chan(buffers.fixed(1));
	  (new process.Process(gen, function(value) {
	    if (value === channels.CLOSED) {
	      ch.close();
	    } else {
	      process.put_then_callback(ch, value, function(ok) {
	        ch.close();
	      });
	    }
	  }, creator)).run();
	  return ch;
	};
	
	function go(f, args) {
	  args = args || [];
	
	  var gen = f.apply(null, args);
	  return spawn(gen, f);
	};
	
	function chan(bufferOrNumber, xform, exHandler) {
	  var buf;
	  if (bufferOrNumber === 0) {
	    bufferOrNumber = null;
	  }
	  if (typeof bufferOrNumber === "number") {
	    buf = buffers.fixed(bufferOrNumber);
	  } else {
	    buf = bufferOrNumber;
	  }
	  return channels.chan(buf, xform, exHandler);
	};
	
	
	module.exports = {
	  buffers: {
	    fixed: buffers.fixed,
	    dropping: buffers.dropping,
	    sliding: buffers.sliding
	  },
	
	  spawn: spawn,
	  go: go,
	  chan: chan,
	  DEFAULT: select.DEFAULT,
	  CLOSED: channels.CLOSED,
	
	  put: process.put,
	  take: process.take,
	  offer: process.offer,
	  poll: process.poll,
	  sleep: process.sleep,
	  alts: process.alts,
	  putAsync: process.put_then_callback,
	  takeAsync: process.take_then_callback,
	  NO_VALUE: process.NO_VALUE,
	
	  timeout: timers.timeout
	};


/***/ },
/* 194 */
/***/ function(module, exports) {

	"use strict";
	
	// TODO: Consider EmptyError & FullError to avoid redundant bound
	// checks, to improve performance (may need benchmarks)
	
	function acopy(src, src_start, dst, dst_start, length) {
	  var count = 0;
	  while (true) {
	    if (count >= length) {
	      break;
	    }
	    dst[dst_start + count] = src[src_start + count];
	    count ++;
	  }
	}
	
	var EMPTY = {
	  toString: function() {
	    return "[object EMPTY]";
	  }
	};
	
	var RingBuffer = function(head, tail, length, array) {
	  this.length = length;
	  this.array = array;
	  this.head = head;
	  this.tail = tail;
	};
	
	// Internal method, callers must do bound check
	RingBuffer.prototype._unshift = function(item) {
	  var array = this.array;
	  var head = this.head;
	  array[head] = item;
	  this.head = (head + 1) % array.length;
	  this.length ++;
	};
	
	RingBuffer.prototype._resize = function() {
	  var array = this.array;
	  var new_length = 2 * array.length;
	  var new_array = new Array(new_length);
	  var head = this.head;
	  var tail = this.tail;
	  var length = this.length;
	  if (tail < head) {
	    acopy(array, tail, new_array, 0, length);
	    this.tail = 0;
	    this.head = length;
	    this.array = new_array;
	  } else if (tail > head) {
	    acopy(array, tail, new_array, 0, array.length - tail);
	    acopy(array, 0, new_array, array.length - tail, head);
	    this.tail = 0;
	    this.head = length;
	    this.array = new_array;
	  } else if (tail === head) {
	    this.tail = 0;
	    this.head = 0;
	    this.array = new_array;
	  }
	};
	
	RingBuffer.prototype.unbounded_unshift = function(item) {
	  if (this.length + 1 === this.array.length) {
	    this._resize();
	  }
	  this._unshift(item);
	};
	
	RingBuffer.prototype.pop = function() {
	  if (this.length === 0) {
	    return EMPTY;
	  }
	  var array = this.array;
	  var tail = this.tail;
	  var item = array[tail];
	  array[tail] = null;
	  this.tail = (tail + 1) % array.length;
	  this.length --;
	  return item;
	};
	
	RingBuffer.prototype.cleanup = function(predicate) {
	  var length = this.length;
	  for (var i = 0; i < length; i++) {
	    var item = this.pop();
	    if (predicate(item)) {
	      this._unshift(item);
	    }
	  }
	};
	
	var FixedBuffer = function(buf,  n) {
	  this.buf = buf;
	  this.n = n;
	};
	
	FixedBuffer.prototype.is_full = function() {
	  return this.buf.length >= this.n;
	};
	
	FixedBuffer.prototype.remove = function() {
	  return this.buf.pop();
	};
	
	FixedBuffer.prototype.add = function(item) {
	  // Note that even though the underlying buffer may grow, "n" is
	  // fixed so after overflowing the buffer is still considered full.
	  this.buf.unbounded_unshift(item);
	};
	
	FixedBuffer.prototype.count = function() {
	  return this.buf.length;
	};
	
	
	var DroppingBuffer = function(buf, n) {
	  this.buf = buf;
	  this.n = n;
	};
	
	DroppingBuffer.prototype.is_full = function() {
	  return false;
	};
	
	DroppingBuffer.prototype.remove = function() {
	  return this.buf.pop();
	};
	
	DroppingBuffer.prototype.add = function(item) {
	  if (this.buf.length < this.n) {
	    this.buf._unshift(item);
	  }
	};
	
	DroppingBuffer.prototype.count = function() {
	  return this.buf.length;
	};
	
	
	var SlidingBuffer = function(buf, n) {
	  this.buf = buf;
	  this.n = n;
	};
	
	SlidingBuffer.prototype.is_full = function() {
	  return false;
	};
	
	SlidingBuffer.prototype.remove = function() {
	  return this.buf.pop();
	};
	
	SlidingBuffer.prototype.add = function(item) {
	  if (this.buf.length === this.n) {
	    this.buf.pop();
	  }
	  this.buf._unshift(item);
	};
	
	SlidingBuffer.prototype.count = function() {
	  return this.buf.length;
	};
	
	
	var ring = exports.ring = function ring_buffer(n) {
	  return new RingBuffer(0, 0, 0, new Array(n));
	};
	
	/**
	 * Returns a buffer that is considered "full" when it reaches size n,
	 * but still accepts additional items, effectively allow overflowing.
	 * The overflowing behavior is useful for supporting "expanding"
	 * transducers, where we want to check if a buffer is full before
	 * running the transduced step function, while still allowing a
	 * transduced step to expand into multiple "essence" steps.
	 */
	exports.fixed = function fixed_buffer(n) {
	  return new FixedBuffer(ring(n), n);
	};
	
	exports.dropping = function dropping_buffer(n) {
	  return new DroppingBuffer(ring(n), n);
	};
	
	exports.sliding = function sliding_buffer(n) {
	  return new SlidingBuffer(ring(n), n);
	};
	
	exports.EMPTY = EMPTY;


/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var buffers = __webpack_require__(194);
	var dispatch = __webpack_require__(196);
	
	var MAX_DIRTY = 64;
	var MAX_QUEUE_SIZE = 1024;
	
	var CLOSED = null;
	
	var Box = function(value) {
	  this.value = value;
	};
	
	var PutBox = function(handler, value) {
	  this.handler = handler;
	  this.value = value;
	};
	
	var Channel = function(takes, puts, buf, xform) {
	  this.buf = buf;
	  this.xform = xform;
	  this.takes = takes;
	  this.puts = puts;
	
	  this.dirty_takes = 0;
	  this.dirty_puts = 0;
	  this.closed = false;
	};
	
	function isReduced(v) {
	  return v && v["@@transducer/reduced"];
	}
	
	function schedule(f, v) {
	  dispatch.run(function() {
	    f(v);
	  });
	}
	
	Channel.prototype._put = function(value, handler) {
	  if (value === CLOSED) {
	    throw new Error("Cannot put CLOSED on a channel.");
	  }
	
	  // TODO: I'm not sure how this can happen, because the operations
	  // are registered in 1 tick, and the only way for this to be inactive
	  // is for a previous operation in the same alt to have returned
	  // immediately, which would have short-circuited to prevent this to
	  // be ever register anyway. The same thing goes for the active check
	  // in "_take".
	  if (!handler.is_active()) {
	    return null;
	  }
	
	  if (this.closed) {
	    handler.commit();
	    return new Box(false);
	  }
	
	  var taker, callback;
	
	  // Soak the value through the buffer first, even if there is a
	  // pending taker. This way the step function has a chance to act on the
	  // value.
	  if (this.buf && !this.buf.is_full()) {
	    handler.commit();
	    var done = isReduced(this.xform["@@transducer/step"](this.buf, value));
	    while (true) {
	      if (this.buf.count() === 0) {
	        break;
	      }
	      taker = this.takes.pop();
	      if (taker === buffers.EMPTY) {
	        break;
	      }
	      if (taker.is_active()) {
	        value = this.buf.remove();
	        callback = taker.commit();
	        schedule(callback, value);
	      }
	    }
	    if (done) {
	      this.close();
	    }
	    return new Box(true);
	  }
	
	  // Either the buffer is full, in which case there won't be any
	  // pending takes, or we don't have a buffer, in which case this loop
	  // fulfills the first of them that is active (note that we don't
	  // have to worry about transducers here since we require a buffer
	  // for that).
	  while (true) {
	    taker = this.takes.pop();
	    if (taker === buffers.EMPTY) {
	      break;
	    }
	    if (taker.is_active()) {
	      handler.commit();
	      callback = taker.commit();
	      schedule(callback, value);
	      return new Box(true);
	    }
	  }
	
	  // No buffer, full buffer, no pending takes. Queue this put now if blockable.
	  if (this.dirty_puts > MAX_DIRTY) {
	    this.puts.cleanup(function(putter) {
	      return putter.handler.is_active();
	    });
	    this.dirty_puts = 0;
	  } else {
	    this.dirty_puts ++;
	  }
	  if (handler.is_blockable()) {
	    if (this.puts.length >= MAX_QUEUE_SIZE) {
	        throw new Error("No more than " + MAX_QUEUE_SIZE + " pending puts are allowed on a single channel.");
	    }
	    this.puts.unbounded_unshift(new PutBox(handler, value));
	  }
	  return null;
	};
	
	Channel.prototype._take = function(handler) {
	  if (!handler.is_active()) {
	    return null;
	  }
	
	  var putter, put_handler, callback, value;
	
	  if (this.buf && this.buf.count() > 0) {
	    handler.commit();
	    value = this.buf.remove();
	    // We need to check pending puts here, other wise they won't
	    // be able to proceed until their number reaches MAX_DIRTY
	    while (true) {
	      if (this.buf.is_full()) {
	        break;
	      }
	      putter = this.puts.pop();
	      if (putter === buffers.EMPTY) {
	        break;
	      }
	      put_handler = putter.handler;
	      if (put_handler.is_active()) {
	        callback = put_handler.commit();
	        if (callback) {
	          schedule(callback, true);
	        }
	        if (isReduced(this.xform["@@transducer/step"](this.buf, putter.value))) {
	          this.close();
	        }
	      }
	    }
	    return new Box(value);
	  }
	
	  // Either the buffer is empty, in which case there won't be any
	  // pending puts, or we don't have a buffer, in which case this loop
	  // fulfills the first of them that is active (note that we don't
	  // have to worry about transducers here since we require a buffer
	  // for that).
	  while (true) {
	    putter = this.puts.pop();
	    value = putter.value;
	    if (putter === buffers.EMPTY) {
	      break;
	    }
	    put_handler = putter.handler;
	    if (put_handler.is_active()) {
	      handler.commit();
	      callback = put_handler.commit();
	      if (callback) {
	        schedule(callback, true);
	      }
	      return new Box(value);
	    }
	  }
	
	  if (this.closed) {
	    handler.commit();
	    return new Box(CLOSED);
	  }
	
	  // No buffer, empty buffer, no pending puts. Queue this take now if blockable.
	  if (this.dirty_takes > MAX_DIRTY) {
	    this.takes.cleanup(function(handler) {
	      return handler.is_active();
	    });
	    this.dirty_takes = 0;
	  } else {
	    this.dirty_takes ++;
	  }
	  if (handler.is_blockable()) {
	    if (this.takes.length >= MAX_QUEUE_SIZE) {
	      throw new Error("No more than " + MAX_QUEUE_SIZE + " pending takes are allowed on a single channel.");
	    }
	    this.takes.unbounded_unshift(handler);
	  }
	  return null;
	};
	
	Channel.prototype.close = function() {
	  if (this.closed) {
	    return;
	  }
	  this.closed = true;
	
	  // TODO: Duplicate code. Make a "_flush" function or something
	  if (this.buf) {
	    this.xform["@@transducer/result"](this.buf);
	    while (true) {
	      if (this.buf.count() === 0) {
	        break;
	      }
	      taker = this.takes.pop();
	      if (taker === buffers.EMPTY) {
	        break;
	      }
	      if (taker.is_active()) {
	        callback = taker.commit();
	        var value = this.buf.remove();
	        schedule(callback, value);
	      }
	    }
	  }
	
	  while (true) {
	    var taker = this.takes.pop();
	    if (taker === buffers.EMPTY) {
	      break;
	    }
	    if (taker.is_active()) {
	      var callback = taker.commit();
	      schedule(callback, CLOSED);
	    }
	  }
	
	  while (true) {
	    var putter = this.puts.pop();
	    if (putter === buffers.EMPTY) {
	      break;
	    }
	    if (putter.handler.is_active()) {
	      var put_callback = putter.handler.commit();
	      if (put_callback) {
	        schedule(put_callback, false);
	      }
	    }
	  }
	};
	
	
	Channel.prototype.is_closed = function() {
	  return this.closed;
	};
	
	function defaultHandler(e) {
	  console.log('error in channel transformer', e.stack);
	  return CLOSED;
	}
	
	function handleEx(buf, exHandler, e) {
	  var def = (exHandler || defaultHandler)(e);
	  if (def !== CLOSED) {
	    buf.add(def);
	  }
	  return buf;
	}
	
	// The base transformer object to use with transducers
	function AddTransformer() {
	}
	
	AddTransformer.prototype["@@transducer/init"] = function() {
	  throw new Error('init not available');
	};
	
	AddTransformer.prototype["@@transducer/result"] = function(v) {
	  return v;
	};
	
	AddTransformer.prototype["@@transducer/step"] = function(buffer, input) {
	  buffer.add(input);
	  return buffer;
	};
	
	
	function handleException(exHandler) {
	  return function(xform) {
	    return {
	      "@@transducer/step": function(buffer, input) {
	        try {
	          return xform["@@transducer/step"](buffer, input);
	        } catch (e) {
	          return handleEx(buffer, exHandler, e);
	        }
	      },
	      "@@transducer/result": function(buffer) {
	        try {
	          return xform["@@transducer/result"](buffer);
	        } catch (e) {
	          return handleEx(buffer, exHandler, e);
	        }
	      }
	    };
	  };
	}
	
	// XXX: This is inconsistent. We should either call the reducing
	// function xform, or call the transducer xform, not both
	exports.chan = function(buf, xform, exHandler) {
	  if (xform) {
	    if (!buf) {
	      throw new Error("Only buffered channels can use transducers");
	    }
	
	    xform = xform(new AddTransformer());
	  } else {
	    xform = new AddTransformer();
	  }
	  xform = handleException(exHandler)(xform);
	
	  return new Channel(buffers.ring(32), buffers.ring(32), buf, xform);
	};
	
	exports.Box = Box;
	exports.Channel = Channel;
	exports.CLOSED = CLOSED;


/***/ },
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	// TODO: Use process.nextTick if it's available since it's more
	// efficient
	// http://howtonode.org/understanding-process-next-tick
	// Maybe we don't even need to queue ourselves in that case?
	
	// XXX: But http://blog.nodejs.org/2013/03/11/node-v0-10-0-stable/
	// Looks like it will blow up the stack (or is that just about
	// pre-empting IO (but that's already bad enough IMO)?)
	
	// Looks like
	// http://nodejs.org/api/process.html#process_process_nexttick_callback
	// is the equivalent of our TASK_BATCH_SIZE
	
	var buffers = __webpack_require__(194);
	
	var TASK_BATCH_SIZE = 1024;
	
	var tasks = buffers.ring(32);
	var running = false;
	var queued = false;
	
	var queue_dispatcher;
	
	function process_messages() {
	  running = true;
	  queued = false;
	  var count = 0;
	  while (true) {
	    var task = tasks.pop();
	    if (task === buffers.EMPTY) {
	      break;
	    }
	    // TODO: Don't we need a try/finally here?
	    task();
	    if (count >= TASK_BATCH_SIZE) {
	      break;
	    }
	    count ++;
	  }
	  running = false;
	  if (tasks.length > 0) {
	    queue_dispatcher();
	  }
	}
	
	if (typeof MessageChannel !== "undefined") {
	  var message_channel = new MessageChannel();
	  message_channel.port1.onmessage = function(_) {
	    process_messages();
	  };
	  queue_dispatcher = function()  {
	    if (!(queued && running)) {
	      queued = true;
	      message_channel.port2.postMessage(0);
	    }
	  };
	} else if (typeof setImmediate !== "undefined") {
	  queue_dispatcher = function() {
	    if (!(queued && running)) {
	      queued = true;
	      setImmediate(process_messages);
	    }
	  };
	} else {
	  queue_dispatcher = function() {
	    if (!(queued && running)) {
	      queued = true;
	      setTimeout(process_messages, 0);
	    }
	  };
	}
	
	exports.run = function (f) {
	  tasks.unbounded_unshift(f);
	  queue_dispatcher();
	};
	
	exports.queue_delay = function(f, delay) {
	  setTimeout(f, delay);
	};


/***/ },
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Box = __webpack_require__(195).Box;
	
	var AltHandler = function(flag, f) {
	  this.f = f;
	  this.flag = flag;
	};
	
	AltHandler.prototype.is_active = function() {
	  return this.flag.value;
	};
	
	AltHandler.prototype.is_blockable = function() {
	  return true;
	};
	
	AltHandler.prototype.commit = function() {
	  this.flag.value = false;
	  return this.f;
	};
	
	var AltResult = function(value, channel) {
	  this.value = value;
	  this.channel = channel;
	};
	
	function rand_int(n) {
	  return Math.floor(Math.random() * (n + 1));
	}
	
	function random_array(n) {
	  var a = new Array(n);
	  var i;
	  for (i = 0; i < n; i++) {
	    a[i] = 0;
	  }
	  for (i = 1; i < n; i++) {
	    var j = rand_int(i);
	    a[i] = a[j];
	    a[j] = i;
	  }
	  return a;
	}
	
	var hasOwnProperty = Object.prototype.hasOwnProperty;
	
	var DEFAULT = {
	  toString: function() {
	    return "[object DEFAULT]";
	  }
	};
	
	// TODO: Accept a priority function or something
	exports.do_alts = function(operations, callback, options) {
	  var length = operations.length;
	  // XXX Hmm
	  if (length === 0) {
	    throw new Error("Empty alt list");
	  }
	
	  var priority = (options && options.priority) ? true : false;
	  if (!priority) {
	    var indexes = random_array(length);
	  }
	
	  var flag = new Box(true);
	
	  for (var i = 0; i < length; i++) {
	    var operation = operations[priority ? i : indexes[i]];
	    var port, result;
	    // XXX Hmm
	    if (operation instanceof Array) {
	      var value = operation[1];
	      port = operation[0];
	      // We wrap this in a function to capture the value of "port",
	      // because js' closure captures vars by "references", not
	      // values. "let port" would have worked, but I don't want to
	      // raise the runtime requirement yet. TODO: So change this when
	      // most runtimes are modern enough.
	      result = port._put(value, (function(port) {
	        return new AltHandler(flag, function(ok) {
	          callback(new AltResult(ok, port));
	        });
	      })(port));
	    } else {
	      port = operation;
	      result = port._take((function(port) {
	        return new AltHandler(flag, function(value) {
	          callback(new AltResult(value, port));
	        });
	      })(port));
	    }
	    // XXX Hmm
	    if (result instanceof Box) {
	      callback(new AltResult(result.value, port));
	      break;
	    }
	  }
	
	  if (!(result instanceof Box)
	      && options
	      && hasOwnProperty.call(options, "default")) {
	    if (flag.value) {
	      flag.value = false;
	      callback(new AltResult(options["default"], DEFAULT));
	    }
	  }
	};
	
	exports.DEFAULT = DEFAULT;


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var dispatch = __webpack_require__(196);
	var select = __webpack_require__(197);
	var Channel = __webpack_require__(195).Channel;
	
	var NO_VALUE = {};
	
	var FnHandler = function(blockable, f) {
	  this.f = f;
	  this.blockable = blockable;
	};
	
	FnHandler.prototype.is_active = function() {
	  return true;
	};
	
	FnHandler.prototype.is_blockable = function() {
	  return this.blockable;
	};
	
	FnHandler.prototype.commit = function() {
	  return this.f;
	};
	
	function put_then_callback(channel, value, callback) {
	  var result = channel._put(value, new FnHandler(true, callback));
	  if (result && callback) {
	    callback(result.value);
	  }
	}
	
	function take_then_callback(channel, callback) {
	  var result = channel._take(new FnHandler(true, callback));
	  if (result) {
	    callback(result.value);
	  }
	}
	
	var Process = function(gen, onFinish, creator) {
	  this.gen = gen;
	  this.creatorFunc = creator;
	  this.finished = false;
	  this.onFinish = onFinish;
	};
	
	var Instruction = function(op, data) {
	  this.op = op;
	  this.data = data;
	};
	
	var TAKE = "take";
	var PUT = "put";
	var SLEEP = "sleep";
	var ALTS = "alts";
	
	// TODO FIX XXX: This is a (probably) temporary hack to avoid blowing
	// up the stack, but it means double queueing when the value is not
	// immediately available
	Process.prototype._continue = function(response) {
	  var self = this;
	  dispatch.run(function() {
	    self.run(response);
	  });
	};
	
	Process.prototype._done = function(value) {
	  if (!this.finished) {
	    this.finished = true;
	    var onFinish = this.onFinish;
	    if (typeof onFinish === "function") {
	      dispatch.run(function() {
	        onFinish(value);
	      });
	    }
	  }
	};
	
	Process.prototype.run = function(response) {
	  if (this.finished) {
	    return;
	  }
	
	  // TODO: Shouldn't we (optionally) stop error propagation here (and
	  // signal the error through a channel or something)? Otherwise the
	  // uncaught exception will crash some runtimes (e.g. Node)
	  var iter = this.gen.next(response);
	  if (iter.done) {
	    this._done(iter.value);
	    return;
	  }
	
	  var ins = iter.value;
	  var self = this;
	
	  if (ins instanceof Instruction) {
	    switch (ins.op) {
	    case PUT:
	      var data = ins.data;
	      put_then_callback(data.channel, data.value, function(ok) {
	        self._continue(ok);
	      });
	      break;
	
	    case TAKE:
	      var channel = ins.data;
	      take_then_callback(channel, function(value) {
	        self._continue(value);
	      });
	      break;
	
	    case SLEEP:
	      var msecs = ins.data;
	      dispatch.queue_delay(function() {
	        self.run(null);
	      }, msecs);
	      break;
	
	    case ALTS:
	      select.do_alts(ins.data.operations, function(result) {
	        self._continue(result);
	      }, ins.data.options);
	      break;
	    }
	  }
	  else if(ins instanceof Channel) {
	    var channel = ins;
	    take_then_callback(channel, function(value) {
	      self._continue(value);
	    });
	  }
	  else {
	    this._continue(ins);
	  }
	};
	
	function take(channel) {
	  return new Instruction(TAKE, channel);
	}
	
	function put(channel, value) {
	  return new Instruction(PUT, {
	    channel: channel,
	    value: value
	  });
	}
	
	function poll(channel) {
	  if (channel.closed) {
	    return NO_VALUE;
	  }
	
	  var result = channel._take(new FnHandler(false));
	  if (result) {
	    return result.value;
	  } else {
	    return NO_VALUE;
	  }
	}
	
	function offer(channel, value) {
	  if (channel.closed) {
	    return false;
	  }
	
	  var result = channel._put(value, new FnHandler(false));
	  if (result) {
	    return true;
	  } else {
	    return false;
	  }
	}
	
	function sleep(msecs) {
	  return new Instruction(SLEEP, msecs);
	}
	
	function alts(operations, options) {
	  return new Instruction(ALTS, {
	    operations: operations,
	    options: options
	  });
	}
	
	exports.put_then_callback = put_then_callback;
	exports.take_then_callback = take_then_callback;
	exports.put = put;
	exports.take = take;
	exports.offer = offer;
	exports.poll = poll;
	exports.sleep = sleep;
	exports.alts = alts;
	exports.Instruction = Instruction;
	exports.Process = Process;
	exports.NO_VALUE = NO_VALUE;


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var dispatch = __webpack_require__(196);
	var channels = __webpack_require__(195);
	
	exports.timeout = function timeout_channel(msecs) {
	  var chan = channels.chan();
	  dispatch.queue_delay(function() {
	    chan.close();
	  }, msecs);
	  return chan;
	};


/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Box = __webpack_require__(195).Box;
	
	var csp = __webpack_require__(193),
	    go = csp.go,
	    take = csp.take,
	    put = csp.put,
	    takeAsync = csp.takeAsync,
	    putAsync = csp.putAsync,
	    alts = csp.alts,
	    chan = csp.chan,
	    CLOSED = csp.CLOSED;
	
	
	function mapFrom(f, ch) {
	  return {
	    is_closed: function() {
	      return ch.is_closed();
	    },
	    close: function() {
	      ch.close();
	    },
	    _put: function(value, handler) {
	      return ch._put(value, handler);
	    },
	    _take: function(handler) {
	      var result = ch._take({
	        is_active: function() {
	          return handler.is_active();
	        },
	        commit: function() {
	          var take_cb = handler.commit();
	          return function(value) {
	            return take_cb(value === CLOSED ? CLOSED : f(value));
	          };
	        }
	      });
	      if (result) {
	        var value = result.value;
	        return new Box(value === CLOSED ? CLOSED : f(value));
	      } else {
	        return null;
	      }
	    }
	  };
	}
	
	function mapInto(f, ch) {
	  return {
	    is_closed: function() {
	      return ch.is_closed();
	    },
	    close: function() {
	      ch.close();
	    },
	    _put: function(value, handler) {
	      return ch._put(f(value), handler);
	    },
	    _take: function(handler) {
	      return ch._take(handler);
	    }
	  };
	}
	
	function filterFrom(p, ch, bufferOrN) {
	  var out = chan(bufferOrN);
	  go(function*() {
	    while (true) {
	      var value = yield take(ch);
	      if (value === CLOSED) {
	        out.close();
	        break;
	      }
	      if (p(value)) {
	        yield put(out, value);
	      }
	    }
	  });
	  return out;
	}
	
	function filterInto(p, ch) {
	  return {
	    is_closed: function() {
	      return ch.is_closed();
	    },
	    close: function() {
	      ch.close();
	    },
	    _put: function(value, handler) {
	      if (p(value)) {
	        return ch._put(value, handler);
	      } else {
	        return new Box(!ch.is_closed());
	      }
	    },
	    _take: function(handler) {
	      return ch._take(handler);
	    }
	  };
	}
	
	function removeFrom(p, ch) {
	  return filterFrom(function(value) {
	    return !p(value);
	  }, ch);
	}
	
	function removeInto(p, ch) {
	  return filterInto(function(value) {
	    return !p(value);
	  }, ch);
	}
	
	function* mapcat(f, src, dst) {
	  while (true) {
	    var value = yield take(src);
	    if (value === CLOSED) {
	      dst.close();
	      break;
	    } else {
	      var seq = f(value);
	      var length = seq.length;
	      for (var i = 0; i < length; i++) {
	        yield put(dst, seq[i]);
	      }
	      if (dst.is_closed()) {
	        break;
	      }
	    }
	  }
	}
	
	function mapcatFrom(f, ch, bufferOrN) {
	  var out = chan(bufferOrN);
	  go(mapcat, [f, ch, out]);
	  return out;
	}
	
	function mapcatInto(f, ch, bufferOrN) {
	  var src = chan(bufferOrN);
	  go(mapcat, [f, src, ch]);
	  return src;
	}
	
	function pipe(src, dst, keepOpen) {
	  go(function*() {
	    while (true) {
	      var value = yield take(src);
	      if (value === CLOSED) {
	        if (!keepOpen) {
	          dst.close();
	        }
	        break;
	      }
	      if (!(yield put(dst, value))) {
	        break;
	      }
	    }
	  });
	  return dst;
	}
	
	function split(p, ch, trueBufferOrN, falseBufferOrN) {
	  var tch = chan(trueBufferOrN);
	  var fch = chan(falseBufferOrN);
	  go(function*() {
	    while (true) {
	      var value = yield take(ch);
	      if (value === CLOSED) {
	        tch.close();
	        fch.close();
	        break;
	      }
	      yield put(p(value) ? tch : fch, value);
	    }
	  });
	  return [tch, fch];
	}
	
	function reduce(f, init, ch) {
	  return go(function*() {
	    var result = init;
	    while (true) {
	      var value = yield take(ch);
	      if (value === CLOSED) {
	        return result;
	      } else {
	        result = f(result, value);
	      }
	    }
	  }, [], true);
	}
	
	function onto(ch, coll, keepOpen) {
	  return go(function*() {
	    var length = coll.length;
	    // FIX: Should be a generic looping interface (for...in?)
	    for (var i = 0; i < length; i++) {
	      yield put(ch, coll[i]);
	    }
	    if (!keepOpen) {
	      ch.close();
	    }
	  });
	}
	
	// TODO: Bounded?
	function fromColl(coll) {
	  var ch = chan(coll.length);
	  onto(ch, coll);
	  return ch;
	}
	
	function map(f, chs, bufferOrN) {
	  var out = chan(bufferOrN);
	  var length = chs.length;
	  // Array holding 1 round of values
	  var values = new Array(length);
	  // TODO: Not sure why we need a size-1 buffer here
	  var dchan = chan(1);
	  // How many more items this round
	  var dcount;
	  // put callbacks for each channel
	  var dcallbacks = new Array(length);
	  for (var i = 0; i < length; i ++) {
	    dcallbacks[i] = (function(i) {
	      return function(value) {
	        values[i] = value;
	        dcount --;
	        if (dcount === 0) {
	          putAsync(dchan, values.slice(0));
	        }
	      };
	    }(i));
	  }
	  go(function*() {
	    while (true) {
	      dcount = length;
	      // We could just launch n goroutines here, but for effciency we
	      // don't
	      for (var i = 0; i < length; i ++) {
	        try {
	          takeAsync(chs[i], dcallbacks[i]);
	        } catch (e) {
	          // FIX: Hmm why catching here?
	          dcount --;
	        }
	      }
	      var values = yield take(dchan);
	      for (i = 0; i < length; i ++) {
	        if (values[i] === CLOSED) {
	          out.close();
	          return;
	        }
	      }
	      yield put(out, f.apply(null, values));
	    }
	  });
	  return out;
	}
	
	function merge(chs, bufferOrN) {
	  var out = chan(bufferOrN);
	  var actives = chs.slice(0);
	  go(function*() {
	    while (true) {
	      if (actives.length === 0) {
	        break;
	      }
	      var r = yield alts(actives);
	      var value = r.value;
	      if (value === CLOSED) {
	        // Remove closed channel
	        var i = actives.indexOf(r.channel);
	        actives.splice(i, 1);
	        continue;
	      }
	      yield put(out, value);
	    }
	    out.close();
	  });
	  return out;
	}
	
	function into(coll, ch) {
	  var result = coll.slice(0);
	  return reduce(function(result, item) {
	    result.push(item);
	    return result;
	  }, result, ch);
	}
	
	function takeN(n, ch, bufferOrN) {
	  var out = chan(bufferOrN);
	  go(function*() {
	    for (var i = 0; i < n; i ++) {
	      var value = yield take(ch);
	      if (value === CLOSED) {
	        break;
	      }
	      yield put(out, value);
	    }
	    out.close();
	  });
	  return out;
	}
	
	var NOTHING = {};
	
	function unique(ch, bufferOrN) {
	  var out = chan(bufferOrN);
	  var last = NOTHING;
	  go(function*() {
	    while (true) {
	      var value = yield take(ch);
	      if (value === CLOSED) {
	        break;
	      }
	      if (value === last) {
	        continue;
	      }
	      last = value;
	      yield put(out, value);
	    }
	    out.close();
	  });
	  return out;
	}
	
	function partitionBy(f, ch, bufferOrN) {
	  var out = chan(bufferOrN);
	  var part = [];
	  var last = NOTHING;
	  go(function*() {
	    while (true) {
	      var value = yield take(ch);
	      if (value === CLOSED) {
	        if (part.length > 0) {
	          yield put(out, part);
	        }
	        out.close();
	        break;
	      } else {
	        var newItem = f(value);
	        if (newItem === last || last === NOTHING) {
	          part.push(value);
	        } else {
	          yield put(out, part);
	          part = [value];
	        }
	        last = newItem;
	      }
	    }
	  });
	  return out;
	}
	
	function partition(n, ch, bufferOrN) {
	  var out = chan(bufferOrN);
	  go(function*() {
	    while (true) {
	      var part = new Array(n);
	      for (var i = 0; i < n; i++) {
	        var value = yield take(ch);
	        if (value === CLOSED) {
	          if (i > 0) {
	            yield put(out, part.slice(0, i));
	          }
	          out.close();
	          return;
	        }
	        part[i] = value;
	      }
	      yield put(out, part);
	    }
	  });
	  return out;
	}
	
	// For channel identification
	var genId = (function() {
	  var i = 0;
	  return function() {
	    i ++;
	    return "" + i;
	  };
	})();
	
	var ID_ATTR = "__csp_channel_id";
	
	// TODO: Do we need to check with hasOwnProperty?
	function len(obj) {
	  var count = 0;
	  for (var p in obj) {
	    count ++;
	  }
	  return count;
	}
	
	function chanId(ch) {
	  var id = ch[ID_ATTR];
	  if (id === undefined) {
	    id = ch[ID_ATTR] = genId();
	  }
	  return id;
	}
	
	var Mult = function(ch) {
	  this.taps = {};
	  this.ch = ch;
	};
	
	var Tap = function(channel, keepOpen) {
	  this.channel = channel;
	  this.keepOpen = keepOpen;
	};
	
	Mult.prototype.muxch = function() {
	  return this.ch;
	};
	
	Mult.prototype.tap = function(ch, keepOpen) {
	  var id = chanId(ch);
	  this.taps[id] = new Tap(ch, keepOpen);
	};
	
	Mult.prototype.untap = function(ch) {
	  delete this.taps[chanId(ch)];
	};
	
	Mult.prototype.untapAll = function() {
	  this.taps = {};
	};
	
	function mult(ch) {
	  var m = new Mult(ch);
	  var dchan = chan(1);
	  var dcount;
	  function makeDoneCallback(tap) {
	    return function(stillOpen) {
	      dcount --;
	      if (dcount === 0) {
	        putAsync(dchan, true);
	      }
	      if (!stillOpen) {
	        m.untap(tap.channel);
	      }
	    };
	  }
	  go(function*() {
	    while (true) {
	      var value = yield take(ch);
	      var id, t;
	      var taps = m.taps;
	      if (value === CLOSED) {
	        for (id in taps) {
	          t = taps[id];
	          if (!t.keepOpen) {
	            t.channel.close();
	          }
	        }
	        // TODO: Is this necessary?
	        m.untapAll();
	        break;
	      }
	      dcount = len(taps);
	      // XXX: This is because putAsync can actually call back
	      // immediately. Fix that
	      var initDcount = dcount;
	      // Put value on tapping channels...
	      for (id in taps) {
	        t = taps[id];
	        putAsync(t.channel, value, makeDoneCallback(t));
	      }
	      // ... waiting for all puts to complete
	      if (initDcount > 0) {
	        yield take(dchan);
	      }
	    }
	  });
	  return m;
	}
	
	mult.tap = function tap(m, ch, keepOpen) {
	  m.tap(ch, keepOpen);
	  return ch;
	};
	
	mult.untap = function untap(m, ch) {
	  m.untap(ch);
	};
	
	mult.untapAll = function untapAll(m) {
	  m.untapAll();
	};
	
	var Mix = function(ch) {
	  this.ch = ch;
	  this.stateMap = {};
	  this.change = chan();
	  this.soloMode = mix.MUTE;
	};
	
	Mix.prototype._changed = function() {
	  putAsync(this.change, true);
	};
	
	Mix.prototype._getAllState = function() {
	  var allState = {};
	  var stateMap = this.stateMap;
	  var solos = [];
	  var mutes = [];
	  var pauses = [];
	  var reads;
	  for (var id in stateMap) {
	    var chanData = stateMap[id];
	    var state = chanData.state;
	    var channel = chanData.channel;
	    if (state[mix.SOLO]) {
	      solos.push(channel);
	    }
	    // TODO
	    if (state[mix.MUTE]) {
	      mutes.push(channel);
	    }
	    if (state[mix.PAUSE]) {
	      pauses.push(channel);
	    }
	  }
	  var i, n;
	  if (this.soloMode === mix.PAUSE && solos.length > 0) {
	    n = solos.length;
	    reads = new Array(n + 1);
	    for (i = 0; i < n; i++) {
	      reads[i] = solos[i];
	    }
	    reads[n] = this.change;
	  } else {
	    reads = [];
	    for (id in stateMap) {
	      chanData = stateMap[id];
	      channel = chanData.channel;
	      if (pauses.indexOf(channel) < 0) {
	        reads.push(channel);
	      }
	    }
	    reads.push(this.change);
	  }
	
	  return {
	    solos: solos,
	    mutes: mutes,
	    reads: reads
	  };
	};
	
	Mix.prototype.admix = function(ch) {
	  this.stateMap[chanId(ch)] = {
	    channel: ch,
	    state: {}
	  };
	  this._changed();
	};
	
	Mix.prototype.unmix = function(ch) {
	  delete this.stateMap[chanId(ch)];
	  this._changed();
	};
	
	Mix.prototype.unmixAll = function() {
	  this.stateMap = {};
	  this._changed();
	};
	
	Mix.prototype.toggle = function(updateStateList) {
	  // [[ch1, {}], [ch2, {solo: true}]];
	  var length = updateStateList.length;
	  for (var i = 0; i < length; i++) {
	    var ch = updateStateList[i][0];
	    var id = chanId(ch);
	    var updateState = updateStateList[i][1];
	    var chanData = this.stateMap[id];
	    if (!chanData) {
	      chanData = this.stateMap[id] = {
	        channel: ch,
	        state: {}
	      };
	    }
	    for (var mode in updateState) {
	      chanData.state[mode] = updateState[mode];
	    }
	  }
	  this._changed();
	};
	
	Mix.prototype.setSoloMode = function(mode) {
	  if (VALID_SOLO_MODES.indexOf(mode) < 0) {
	    throw new Error("Mode must be one of: ", VALID_SOLO_MODES.join(", "));
	  }
	  this.soloMode = mode;
	  this._changed();
	};
	
	function mix(out) {
	  var m = new Mix(out);
	  go(function*() {
	    var state = m._getAllState();
	    while (true) {
	      var result = yield alts(state.reads);
	      var value = result.value;
	      var channel = result.channel;
	      if (value === CLOSED) {
	        delete m.stateMap[chanId(channel)];
	        state = m._getAllState();
	        continue;
	      }
	      if (channel === m.change) {
	        state = m._getAllState();
	        continue;
	      }
	      var solos = state.solos;
	      if (solos.indexOf(channel) > -1 ||
	          (solos.length === 0 && !(state.mutes.indexOf(channel) > -1))) {
	        var stillOpen = yield put(out, value);
	        if (!stillOpen) {
	          break;
	        }
	      }
	    }
	  });
	  return m;
	}
	
	mix.MUTE = "mute";
	mix.PAUSE = "pause";
	mix.SOLO = "solo";
	var VALID_SOLO_MODES = [mix.MUTE, mix.PAUSE];
	
	mix.add = function admix(m, ch) {
	  m.admix(ch);
	};
	
	mix.remove = function unmix(m, ch) {
	  m.unmix(ch);
	};
	
	mix.removeAll = function unmixAll(m) {
	  m.unmixAll();
	};
	
	mix.toggle = function toggle(m, updateStateList) {
	  m.toggle(updateStateList);
	};
	
	mix.setSoloMode = function setSoloMode(m, mode) {
	  m.setSoloMode(mode);
	};
	
	function constantlyNull() {
	  return null;
	}
	
	var Pub = function(ch, topicFn, bufferFn) {
	  this.ch = ch;
	  this.topicFn = topicFn;
	  this.bufferFn = bufferFn;
	  this.mults = {};
	};
	
	Pub.prototype._ensureMult = function(topic) {
	  var m = this.mults[topic];
	  var bufferFn = this.bufferFn;
	  if (!m) {
	    m = this.mults[topic] = mult(chan(bufferFn(topic)));
	  }
	  return m;
	};
	
	Pub.prototype.sub = function(topic, ch, keepOpen) {
	  var m = this._ensureMult(topic);
	  return mult.tap(m, ch, keepOpen);
	};
	
	Pub.prototype.unsub = function(topic, ch) {
	  var m = this.mults[topic];
	  if (m) {
	    mult.untap(m, ch);
	  }
	};
	
	Pub.prototype.unsubAll = function(topic) {
	  if (topic === undefined) {
	    this.mults = {};
	  } else {
	    delete this.mults[topic];
	  }
	};
	
	function pub(ch, topicFn, bufferFn) {
	  bufferFn = bufferFn || constantlyNull;
	  var p = new Pub(ch, topicFn, bufferFn);
	  go(function*() {
	    while (true) {
	      var value = yield take(ch);
	      var mults = p.mults;
	      var topic;
	      if (value === CLOSED) {
	        for (topic in mults) {
	          mults[topic].muxch().close();
	        }
	        break;
	      }
	      // TODO: Somehow ensure/document that this must return a string
	      // (otherwise use proper (hash)maps)
	      topic = topicFn(value);
	      var m = mults[topic];
	      if (m) {
	        var stillOpen = yield put(m.muxch(), value);
	        if (!stillOpen) {
	          delete mults[topic];
	        }
	      }
	    }
	  });
	  return p;
	}
	
	pub.sub = function sub(p, topic, ch, keepOpen) {
	  return p.sub(topic, ch, keepOpen);
	};
	
	pub.unsub = function unsub(p, topic, ch) {
	  p.unsub(topic, ch);
	};
	
	pub.unsubAll = function unsubAll(p, topic) {
	  p.unsubAll(topic);
	};
	
	module.exports = {
	  mapFrom: mapFrom,
	  mapInto: mapInto,
	  filterFrom: filterFrom,
	  filterInto: filterInto,
	  removeFrom: removeFrom,
	  removeInto: removeInto,
	  mapcatFrom: mapcatFrom,
	  mapcatInto: mapcatInto,
	
	  pipe: pipe,
	  split: split,
	  reduce: reduce,
	  onto: onto,
	  fromColl: fromColl,
	
	  map: map,
	  merge: merge,
	  into: into,
	  take: takeN,
	  unique: unique,
	  partition: partition,
	  partitionBy: partitionBy,
	
	  mult: mult,
	  mix: mix,
	  pub: pub
	};
	
	
	// Possible "fluid" interfaces:
	
	// thread(
	//   [fromColl, [1, 2, 3, 4]],
	//   [mapFrom, inc],
	//   [into, []]
	// )
	
	// thread(
	//   [fromColl, [1, 2, 3, 4]],
	//   [mapFrom, inc, _],
	//   [into, [], _]
	// )
	
	// wrap()
	//   .fromColl([1, 2, 3, 4])
	//   .mapFrom(inc)
	//   .into([])
	//   .unwrap();


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var csp = __webpack_require__(193);
	
	function pipelineInternal(n, to, from, close, taskFn) {
	  if (n <= 0) {
	    throw new Error('n must be positive');
	  }
	
	  var jobs = csp.chan(n);
	  var results = csp.chan(n);
	
	  for(var _ = 0; _ < n; _++) {
	    csp.go(function* (taskFn, jobs, results) {
	      while (true) {
	        var job = yield csp.take(jobs);
	
	        if (!taskFn(job)) {
	          results.close();
	          break;
	        }
	      }
	    }, [taskFn, jobs, results]);
	  }
	
	  csp.go(function* (jobs, from, results) {
	    while (true) {
	      var v = yield csp.take(from);
	      if (v === csp.CLOSED) {
	        jobs.close();
	        break;
	      } else {
	        var p = csp.chan(1);
	
	        yield csp.put(jobs, [v, p]);
	        yield csp.put(results, p);
	      }
	    }
	  }, [jobs, from, results]);
	
	  csp.go(function* (results, close, to) {
	    while(true) {
	      var p = yield csp.take(results);
	      if (p === csp.CLOSED) {
	        if (close) {
	          to.close();
	        }
	        break;
	      } else {
	        var res = yield csp.take(p);
	        while(true) {
	          var v = yield csp.take(res);
	          if (v !== csp.CLOSED) {
	            yield csp.put(to, v);
	          } else {
	            break;
	          }
	        }
	      }
	    }
	  }, [results, close, to]);
	
	  return to;
	}
	
	function pipeline(to, xf, from, keepOpen, exHandler) {
	
	  function taskFn(job) {
	    if (job === csp.CLOSED) {
	      return null;
	    } else {
	      var v = job[0];
	      var p = job[1];
	      var res = csp.chan(1, xf, exHandler);
	
	      csp.go(function* (res, v) {
	        yield csp.put(res, v);
	        res.close();
	      }, [res, v]);
	
	      csp.putAsync(p, res);
	
	      return true;
	    }
	  }
	
	  return pipelineInternal(1, to, from, !keepOpen, taskFn);
	}
	
	function pipelineAsync(n, to, af, from, keepOpen) {
	
	  function taskFn(job) {
	    if (job === csp.CLOSED) {
	      return null;
	    } else {
	      var v = job[0];
	      var p = job[1];
	      var res = csp.chan(1);
	      af(v, res);
	      csp.putAsync(p, res);
	      return true;
	    }
	  }
	
	  return pipelineInternal(n, to, from, !keepOpen, taskFn);
	}
	
	module.exports = {
	  pipeline: pipeline,
	  pipelineAsync: pipelineAsync
	};


/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _nodeGetopt = __webpack_require__(203);
	
	var _nodeGetopt2 = _interopRequireDefault(_nodeGetopt);
	
	var _fs = __webpack_require__(205);
	
	var _fs2 = _interopRequireDefault(_fs);
	
	var _path = __webpack_require__(206);
	
	var _path2 = _interopRequireDefault(_path);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Configure = function () {
	  function Configure() {
	    _classCallCheck(this, Configure);
	
	    this.opts = _nodeGetopt2.default.create([['r', 'raptor=ARG', 'where the raptor executable file is'], ['p', 'phase=ARG', 'where the running phase is'], ['c', 'config=ARG', 'config file (command line arguments will surpass it)'], ['', 'adb=ARG', 'where the `adb` command is'], ['', 'ffmpeg=ARG', 'where the `ffmpeg` command is'], ['', 'record-target-device=ARG', 'where to put the record on the device'], ['', 'record-target-console=ARG', 'where to pull the record to the console'], ['r', 'routers=ARG+', 'invoke what routers'], ['', 'main=ARG', 'default is Raptor; once it ends the process will end, too'], ['h', 'help', 'display this help'], ['v', 'version', 'show version']]).bindHelp('Usage: beholder <test-file-path> --<optional options>');
	    // TODO: print all available routers after some special help command.
	  }
	
	  _createClass(Configure, [{
	    key: 'setup',
	    value: function setup() {
	      return this.build.apply(this, _toConsumableArray(this.getopts()));
	    }
	
	    /**
	     * Will throw error when carrying invalid options.
	     */
	
	  }, {
	    key: 'build',
	    value: function build(argv, options) {
	      var testFilePaths = argv;
	      this.validateTestFiles(testFilePaths);
	      var configs = this.fromOptions(options);
	      configs.tests = testFilePaths;
	      this.validateModuleCommands(configs);
	      return configs;
	    }
	  }, {
	    key: 'getopts',
	    value: function getopts() {
	      var parsedOptions = this.opts.parseSystem();
	      // parse command line and get the result.
	      this.opts = parsedOptions.options;
	      this.argv = parsedOptions.argv;
	      return [this.argv, this.opts];
	    }
	  }, {
	    key: 'validateTestFiles',
	    value: function validateTestFiles(testFilePaths) {
	      if (0 === testFilePaths.length) {
	        throw new Error('Must specify test files.' + 'Example: beholder test-1.js test-2.js');
	      }
	      testFilePaths.forEach(function (path) {
	        try {
	          _fs2.default.accessSync(path);
	        } catch (e) {
	          console.error('Cannot access the test: ', path);
	          throw e;
	        }
	      });
	    }
	  }, {
	    key: 'validateRaptor',
	    value: function validateRaptor(configs) {
	      try {
	        _fs2.default.accessSync(configs.path.raptor);
	      } catch (e) {
	        console.error('Cannot access the Raptor command: "' + configs.path.raptor + '"');
	        throw e;
	      }
	    }
	  }, {
	    key: 'validatePhase',
	    value: function validatePhase(configs) {
	      try {
	        _fs2.default.accessSync(configs.path.phase);
	      } catch (e) {
	        console.error('Cannot access the running phase: "' + configs.path.phase + '"');
	        throw e;
	      }
	    }
	  }, {
	    key: 'validateAndroidDaemonBus',
	    value: function validateAndroidDaemonBus(configs) {
	      try {
	        _fs2.default.accessSync(configs.path.adb);
	      } catch (e) {
	        console.error('Cannot access the Android daemon bus: "' + configs.path.adb + '"');
	        throw e;
	      }
	    }
	  }, {
	    key: 'validateFFMPEG',
	    value: function validateFFMPEG(configs) {
	      try {
	        _fs2.default.accessSync(configs.path.ffmpeg);
	      } catch (e) {
	        console.error('Cannot access the FFMPEG: "' + configs.path.ffmpeg + '"');
	        throw e;
	      }
	    }
	  }, {
	    key: 'validateRecordConsoleTarget',
	    value: function validateRecordConsoleTarget(configs) {
	      try {
	        _fs2.default.accessSync(_path2.default.dirname(configs.path.record.target.console));
	      } catch (e) {
	        console.error('Cannot access the target to put the target: "' + configs.path.record.target.console + '"');
	        throw e;
	      }
	    }
	  }, {
	    key: 'validateModuleCommands',
	    value: function validateModuleCommands(configs) {
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = configs.routers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var routerIdendity = _step.value;
	
	          switch (routerIdendity) {
	            case 'raptor':
	              this.validateRaptor(configs);
	              break;
	            case 'phase':
	              this.validatePhase(configs);
	              break;
	            case 'adb':
	              this.validateAndroidDaemonBus(configs);
	              break;
	            case 'screenrecord':
	              this.validateFFMPEG(configs);
	              this.validateAndroidDaemonBus(configs);
	              this.validateRecordConsoleTarget(configs);
	              break;
	          }
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  }, {
	    key: 'fromOptions',
	    value: function fromOptions(options) {
	      var defaultConfigs = undefined;
	      options.config = options.config;
	      if (options.config) {
	        defaultConfigs = __webpack_require__(207)(options.config);
	      } else {
	        defaultConfigs = this.generateDefaultConfigs();
	      }
	
	      // Overwrite the existent one in the default file.
	      defaultConfigs.path.phase = options.phase || defaultConfigs.path.phase;
	      defaultConfigs.path.raptor = options.raptor || defaultConfigs.path.raptor;
	      defaultConfigs.path.adb = options.adb || defaultConfigs.path.adb;
	      defaultConfigs.path.ffmpeg = options.ffmpeg || defaultConfigs.path.ffmpeg;
	
	      // For ScreenRecord module.
	      defaultConfigs.path.record = defaultConfigs.path.record || {
	        target: { console: null, device: null }
	      };
	      defaultConfigs.path.record.target.device = options['record-target-device'] || defaultConfigs.path.record.target.device;
	      defaultConfigs.path.record.target.console = options['record-target-console'] || defaultConfigs.path.record.target.console;
	
	      defaultConfigs.routers = options.routers || defaultConfigs.routers || [];
	      defaultConfigs.routers.__main__ = options['main'] || defaultConfigs.routers.__main__ || 'raptor';
	
	      if (!defaultConfigs.routers.includes('signal')) {
	        defaultConfigs.routers.push('signal');
	      }
	      return defaultConfigs;
	    }
	  }, {
	    key: 'generateDefaultConfigs',
	    value: function generateDefaultConfigs() {
	      return {
	        path: {
	          phase: '',
	          raptor: ''
	        },
	        tests: []
	      };
	    }
	  }]);
	
	  return Configure;
	}();

	exports.default = Configure;

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(204);


/***/ },
/* 204 */
/***/ function(module, exports) {

	// Generated by ToffeeScript 1.4.0
	(function() {
	  var Getopt, ParsedOption,
	    __hasProp = {}.hasOwnProperty,
	    __matches = null;
	
	  ParsedOption = (function() {
	
	    function ParsedOption(argv, options) {
	      this.argv = argv;
	      this.options = options;
	    }
	
	    ParsedOption.prototype.empty = function() {
	      var k, v, _ref;
	      if (this.argv.length) {
	        return false;
	      }
	      _ref = this.options;
	      for (k in _ref) {
	        if (!__hasProp.call(_ref, k)) continue;
	        v = _ref[k];
	        return false;
	      }
	      return true;
	    };
	
	    return ParsedOption;
	
	  })();
	
	  Getopt = (function() {
	
	    Getopt.HAS_ARGUMENT = true;
	
	    Getopt.NO_ARGUMENT = false;
	
	    Getopt.MULTI_SUPPORTED = true;
	
	    Getopt.SINGLE_ONLY = false;
	
	    Getopt.VERSION = '0.2.3';
	
	    function Getopt(options) {
	      var comment, definition, has_argument, long_name, multi_supported, name, option, optional, short_name, _i, _len, _ref;
	      this.options = options;
	      this.short_options = {};
	      this.long_options = {};
	      this.long_names = [];
	      this.events = {};
	      this.event_names = [];
	      this.errorFunc = function(e) {
	        console.info(e.message);
	        return process.exit(1);
	      };
	      if (process.argv[1]) {
	        this.help = "Usage: node " + (process.argv[1].match(/(?:.*[\/\\])?(.*)$/)[1]) + "\n\n[[OPTIONS]]\n";
	      } else {
	        this.help = "[[OPTIONS]]";
	      }
	      _ref = this.options;
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        option = _ref[_i];
	        short_name = option[0], definition = option[1], comment = option[2];
	        if (comment == null) {
	          comment = '';
	        }
	        if (definition == null) {
	          definition = '';
	        }
	        if (short_name == null) {
	          short_name = '';
	        }
	        (__matches = definition.match(/^([\w\-]*)/));
	        long_name = __matches[1];
	        has_argument = definition.indexOf('=') !== -1;
	        multi_supported = definition.indexOf('+') !== -1;
	        optional = /\[=.*?\]/.test(definition);
	        long_name = long_name.trim();
	        short_name = short_name.trim();
	        if (optional && short_name) {
	          throw new Error('optional argument can only work with long option');
	        }
	        if (!long_name) {
	          long_name = short_name;
	        }
	        name = long_name;
	        if (long_name === '') {
	          throw new Error("empty option found. the last option name is " + (this.long_names.slice(-1)));
	        }
	        if (this.long_options[long_name] == null) {
	          this.long_names.push(long_name);
	          this.long_options[long_name] = {
	            name: name,
	            short_name: short_name,
	            long_name: long_name,
	            has_argument: has_argument,
	            multi_supported: multi_supported,
	            comment: comment,
	            optional: optional,
	            definition: definition
	          };
	        } else {
	          throw new Error("option " + long_name + " redefined.");
	        }
	        if (short_name !== '') {
	          if (short_name.length !== 1) {
	            throw new Error('short option must be single characters');
	          }
	          this.short_options[short_name] = this.long_options[long_name];
	        }
	      }
	      this;
	    }
	
	    Getopt.prototype.on = function(name, cb) {
	      this.events[name] = cb;
	      this.event_names.push(name);
	      return this;
	    };
	
	    Getopt.prototype.emit = function(name, cb) {
	      if (this.events[name]) {
	        return this.events[name].call(this, this.parsedOption.argv, this.parsedOption.options);
	      } else {
	        throw new Error("Getopt trigger '" + name + "' is not found");
	      }
	    };
	
	    Getopt.prototype.trigger_events_ = function() {
	      var name, options, _i, _len, _ref;
	      options = this.parsedOption.options;
	      _ref = this.event_names;
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        name = _ref[_i];
	        if (options[name] != null) {
	          this.emit(name);
	        }
	      }
	      return this;
	    };
	
	    Getopt.prototype.save_option_ = function(options, option, argv) {
	      var name, names, value, _i, _len, _ref;
	      if (option.has_argument) {
	        if (argv.length === 0) {
	          throw new Error("option " + option.long_name + " need argument");
	        }
	        value = argv.shift();
	      } else {
	        value = true;
	      }
	      names = [option.name];
	      for (_i = 0, _len = names.length; _i < _len; _i++) {
	        name = names[_i];
	        if (option.multi_supported) {
	          if ((_ref = options[name]) == null) {
	            options[name] = [];
	          }
	          options[name].push(value);
	        } else {
	          options[name] = value;
	        }
	      }
	      return this;
	    };
	
	    Getopt.prototype.parse = function(argv) {
	      var arg, i, long_name, option, rt_argv, rt_options, short_name, short_names, value, _i, _len;
	      try {
	        argv = argv.slice(0);
	        rt_options = {};
	        rt_argv = [];
	        while ((arg = argv.shift()) != null) {
	          if ((__matches = arg.match(/^-(\w[\w\-]*)/))) {
	            short_names = __matches[1];
	            for (i = _i = 0, _len = short_names.length; _i < _len; i = ++_i) {
	              short_name = short_names[i];
	              option = this.short_options[short_name];
	              if (!option) {
	                throw new Error("invalid option " + short_name);
	              }
	              if (option.has_argument) {
	                if (i < arg.length - 2) {
	                  argv.unshift(arg.slice(i + 2));
	                }
	                this.save_option_(rt_options, option, argv);
	                break;
	              } else {
	                this.save_option_(rt_options, option, argv);
	              }
	            }
	          } else if ((__matches = arg.match(/^--(\w[\w\-]*)((?:=.*)?)$/))) {
	            long_name = __matches[1];
	            value = __matches[2];
	            option = this.long_options[long_name];
	            if (!option) {
	              throw new Error("invalid option " + long_name);
	            }
	            if (value !== '') {
	              value = value.slice(1);
	              argv.unshift(value);
	            } else if (option.optional) {
	              argv.unshift('');
	            }
	            this.save_option_(rt_options, option, argv);
	          } else if (arg === '--') {
	            rt_argv = rt_argv.concat(argv);
	            break;
	          } else {
	            rt_argv.push(arg);
	          }
	        }
	      } catch (e) {
	        this.errorFunc(e);
	      }
	      this.parsedOption = new ParsedOption(rt_argv, rt_options);
	      this.trigger_events_();
	      return this.parsedOption;
	    };
	
	    Getopt.prototype.parse_system = function() {
	      return this.parse(process.argv.slice(2));
	    };
	
	    Getopt.prototype.parseSystem = function() {
	      return this.parse_system();
	    };
	
	    Getopt.prototype.setHelp = function(help) {
	      this.help = help;
	      return this;
	    };
	
	    Getopt.prototype.getHelp = function() {
	      var comment, definition, long_name, opt, option, options, short_name, strs, ws, _i, _len, _ref;
	      ws = [];
	      options = [];
	      _ref = this.long_names;
	      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
	        long_name = _ref[_i];
	        option = this.long_options[long_name];
	        short_name = option.short_name, long_name = option.long_name, comment = option.comment, definition = option.definition;
	        if (short_name && short_name === long_name) {
	          opt = "-" + short_name;
	        } else if (short_name) {
	          opt = "-" + short_name + ", --" + definition;
	        } else {
	          opt = "    --" + definition;
	        }
	        ws[0] = Math.max(ws[0] >> 0, opt.length);
	        options.push([opt, comment]);
	      }
	      strs = (function() {
	        var _j, _len1, _results;
	        _results = [];
	        for (_j = 0, _len1 = options.length; _j < _len1; _j++) {
	          option = options[_j];
	          opt = option[0], comment = option[1];
	          while (opt.length < ws[0]) {
	            opt += ' ';
	          }
	          _results.push("  " + opt + "  " + comment);
	        }
	        return _results;
	      })();
	      return this.help.replace('[[OPTIONS]]', strs.join("\n"));
	    };
	
	    Getopt.prototype.showHelp = function() {
	      console.info(this.getHelp());
	      return this;
	    };
	
	    Getopt.prototype.bindHelp = function(help) {
	      if (help) {
	        this.setHelp(help);
	      }
	      this.on('help', function() {
	        this.showHelp();
	        return process.exit(0);
	      });
	      return this;
	    };
	
	    Getopt.prototype.getVersion = function() {
	      return Getopt.VERSION;
	    };
	
	    Getopt.prototype.error = function(errorFunc) {
	      this.errorFunc = errorFunc;
	      return this;
	    };
	
	    Getopt.getVersion = function() {
	      return this.VERSION;
	    };
	
	    Getopt.create = function(options) {
	      return new Getopt(options);
	    };
	
	    return Getopt;
	
	  })();
	
	  module.exports = Getopt;
	
	}).call(this);


/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 206 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./AndroidDaemonBus": 208,
		"./AndroidDaemonBus.js": 208,
		"./Configure": 202,
		"./Configure.js": 202,
		"./Defer": 210,
		"./Defer.js": 210,
		"./beholder": 190,
		"./beholder.js": 190,
		"./record/Log": 211,
		"./record/Log.js": 211,
		"./record/Timeline": 212,
		"./record/Timeline.js": 212,
		"./routers/DeviceLog": 213,
		"./routers/DeviceLog.js": 213,
		"./routers/Log/CollectingStage": 216,
		"./routers/Log/CollectingStage.js": 216,
		"./routers/Log/RecordingStage": 218,
		"./routers/Log/RecordingStage.js": 218,
		"./routers/Log/TerminatingStage": 217,
		"./routers/Log/TerminatingStage.js": 217,
		"./routers/Router": 214,
		"./routers/Router.js": 214,
		"./routers/ScreenRecord": 219,
		"./routers/ScreenRecord.js": 219,
		"./routers/Signal": 226,
		"./routers/Signal.js": 226,
		"./routers/Timeline": 227,
		"./routers/Timeline.js": 227
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 207;


/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.commandDevice = commandDevice;
	exports.waitDevice = waitDevice;
	exports.checkDaemonServer = checkDaemonServer;
	
	var _child_process = __webpack_require__(209);
	
	var _child_process2 = _interopRequireDefault(_child_process);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function commandDevice(adbPath, envs) {
	  return function () {
	    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	
	    var result = undefined;
	    checkDaemonServer();
	    waitDevice();
	    if (envs) {
	      result = _child_process2.default.execFileSync(adbPath, args, {
	        'env': envs
	      }).toString().trim();
	    } else {
	      result = _child_process2.default.execFileSync(adbPath, args).toString().trim();
	    }
	    waitDevice();
	    return result;
	  };
	}
	
	function waitDevice(adbPath) {
	  return function () {
	    _child_process2.default.execFileSync(adbPath, ['wait-for-device']);
	  };
	}
	
	function checkDaemonServer(adbPath) {
	  return function () {
	    _child_process2.default.execFileSync(adbPath, ['start-server']);
	  };
	}

/***/ },
/* 209 */
/***/ function(module, exports) {

	module.exports = require("child_process");

/***/ },
/* 210 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Defer = function Defer() {
	  var _this = this;
	
	  _classCallCheck(this, Defer);
	
	  this.promise = new Promise(function (resolve, reject) {
	    _this.resolve = resolve;
	    _this.reject = reject;
	  });
	};
	
	exports.default = Defer;

/***/ },
/* 211 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Log = function () {
	  function Log() {
	    _classCallCheck(this, Log);
	
	    this._store = [];
	  }
	
	  _createClass(Log, [{
	    key: 'push',
	    value: function push(data) {
	      this._store.push(data);
	    }
	  }]);
	
	  return Log;
	}();

	exports.default = Log;

/***/ },
/* 212 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Timeline = function () {
	  function Timeline(offset) {
	    _classCallCheck(this, Timeline);
	
	    this._offset = offset;
	    this._slots = {};
	  }
	
	  _createClass(Timeline, [{
	    key: 'push',
	    value: function push(source, type, content) {
	      if (this._slots[source]) {
	        this._slots[source].push({ type: type, content: content });
	      } else {
	        this._slots[source] = [{ type: type, content: content }];
	      }
	    }
	  }]);
	
	  return Timeline;
	}();

	exports.default = Timeline;

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(191);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _jsCsp = __webpack_require__(192);
	
	var _jsCsp2 = _interopRequireDefault(_jsCsp);
	
	var _child_process = __webpack_require__(209);
	
	var _child_process2 = _interopRequireDefault(_child_process);
	
	var _Router2 = __webpack_require__(214);
	
	var _Router3 = _interopRequireDefault(_Router2);
	
	var _Defer = __webpack_require__(210);
	
	var _Defer2 = _interopRequireDefault(_Defer);
	
	var _time = __webpack_require__(215);
	
	var _time2 = _interopRequireDefault(_time);
	
	var _AndroidDaemonBus = __webpack_require__(208);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toArray(arr) { return Array.isArray(arr) ? arr : Array.from(arr); }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var DeviceLog = function (_Router) {
	  _inherits(DeviceLog, _Router);
	
	  function DeviceLog(configs) {
	    _classCallCheck(this, DeviceLog);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(DeviceLog).call(this, configs));
	
	    _this._adbPath = _this.configs.path.adb;
	    _this._name = 'devicelog';
	    _this._commandDevice = (0, _AndroidDaemonBus.commandDevice)(_this._adbPath);
	    _this._logs = [];
	    _this._errors = [];
	    return _this;
	  }
	
	  _createClass(DeviceLog, [{
	    key: 'start',
	    value: function start() {
	      // Concat the first stage handler.
	      this._transferToRecordingStage();
	      this._fetchTimeInformation();
	
	      // Kick-off it.
	      this._stages.resolve();
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      this._stopListenToControlChannel();
	      this._closeChannels();
	    }
	  }, {
	    key: '_fetchTimeInformation',
	    value: function _fetchTimeInformation() {
	      this._initialEpoch = this._fetchInitialEpoch();
	      this._deviceTZ = this._commandDevice('shell', 'getprop', 'persist.sys.timezone');
	      this._deviceYear = parseInt(this._commandDevice('shell', 'TZ=' + this._deviceTZ, 'date', '+%Y').toString(), 10);
	    }
	  }, {
	    key: '_recording',
	    value: function _recording(defer) {
	      var _this2 = this;
	
	      // Turn all timestamps in the log to epoch, then substract them.
	      var runIt = _child_process2.default.spawn(this._adbPath, ['logcat', '-v', 'time'], { detached: true });
	      runIt.unref();
	      runIt.stdout.on('data', function (chunk) {
	        _this2._logs.push(chunk.toString());
	      });
	      runIt.stderr.on('data', function (chunk) {
	        var strChunk = chunk.toString();
	        console.log(_this2._name, Date.now(), 'Send a message of console error: ' + strChunk + ' ');
	        _jsCsp2.default.putAsync(_this2._outputChannel, { 'topic': 'error', 'source': _this2._name,
	          'payload': strChunk() });
	      });
	      runIt.on('close', function (status) {
	        console.log(_this2._name, Date.now(), 'Send a message of stream closed: ' + status + ' ');
	        _jsCsp2.default.putAsync(_this2._outputChannel, { 'topic': 'status', 'payload': status, 'source': _this2._name });
	      });
	
	      defer.promise = defer.promise.then(function () {
	        // After close, kill the adb logcat process.
	        // This is the 'stop' method this command has.
	        // Since it mainly forwards to other module,
	        // we only need to kill the listener.
	        runIt.kill();
	      }).catch(function (e) {
	        console.error('Error when kill the device logging process', e);
	        throw e;
	      });
	    }
	  }, {
	    key: '_collecting',
	    value: function _collecting(defer) {
	      var _this3 = this;
	
	      // Some lines are overflowed from the previous year.
	      var survivors = [];
	      var strLogs = this._logs.join('');
	      var lines = this._splitLines(strLogs);
	      var maxOffset = 0;
	
	      lines.map(function (line) {
	        return line.trim();
	      }).forEach(function (line) {
	        // Don't handle empty lines.
	        if ('' === line) {
	          return;
	        }
	
	        var _timeOffsetFromDateTi = _this3._timeOffsetFromDateTime(line);
	
	        var offset = _timeOffsetFromDateTi.offset;
	        var content = _timeOffsetFromDateTi.content;
	        // Something makes it cannot be parsed.
	
	        if (!offset || offset < 0) {
	          return;
	        }
	
	        if (offset > maxOffset) {
	          maxOffset = offset;
	        }
	        // Suddenly some log is younger than previous one,
	        // means those olders are too old (in the previous year,
	        // due to the missing "year" in the log)
	        else if (offset < maxOffset) {
	            // Means that only logs after this line are valid.
	            // So we empty it and start over.
	            survivors.length = 0;
	            maxOffset = offset;
	          }
	        survivors.push({ offset: offset, content: content });
	      });
	
	      survivors.forEach(function (payload) {
	        payload.type = 'devicelog';
	        console.log(_this3._name, Date.now(), 'Send the message of devicelog payload ' + _util2.default.inspect(payload));
	        _jsCsp2.default.putAsync(_this3._outputChannel, { 'topic': 'log', 'source': _this3._name,
	          'payload': payload });
	      });
	    }
	  }, {
	    key: '_terminating',
	    value: function _terminating(defer) {}
	  }, {
	    key: '_splitLines',
	    value: function _splitLines(lines) {
	      return lines.split('\r');
	    }
	  }, {
	    key: '_timeOffsetFromDateTime',
	    value: function _timeOffsetFromDateTime(line) {
	      var _line$split = line.split(' ');
	
	      var _line$split2 = _toArray(_line$split);
	
	      var date = _line$split2[0];
	      var time = _line$split2[1];
	
	      var content = _line$split2.slice(2);
	
	      var timeSlots = this._timeSlotsFromDateTime(date, time);
	      if (isNaN(timeSlots.M)) {
	        console.warn(this._name, Date.now(), 'Cannot parse date-time from the log: ' + line);
	        return {};
	      }
	      // We need to append year on that date.
	      timeSlots.Y = this._deviceYear;
	      var offset = this._epochTimeFromDateTime(timeSlots) - this._initialEpoch;
	      content = content.join(' ');
	      return { offset: offset, content: content };
	    }
	  }, {
	    key: '_timeSlotsFromDateTime',
	    value: function _timeSlotsFromDateTime(date, time) {
	      // ex: 12-31 19:18:38.309
	      try {
	        var _date$split = date.split('-');
	
	        var _date$split2 = _slicedToArray(_date$split, 2);
	
	        var M = _date$split2[0];
	        var d = _date$split2[1];
	
	        var _time$split = time.split('.');
	
	        var _time$split2 = _slicedToArray(_time$split, 2);
	
	        var hms = _time$split2[0];
	        var ms = _time$split2[1];
	
	        var _hms$split = hms.split(':');
	
	        var _hms$split2 = _slicedToArray(_hms$split, 3);
	
	        var h = _hms$split2[0];
	        var m = _hms$split2[1];
	        var s = _hms$split2[2];
	
	        M = parseInt(M, 10) - 1;
	        d = parseInt(d, 10);
	        h = parseInt(h, 10);
	        m = parseInt(m, 10);
	        s = parseInt(s, 10);
	        ms = parseInt(ms, 10);
	        var slots = { M: M, d: d, h: h, m: m, s: s, ms: ms };
	        for (var name in slots) {
	          if (isNaN(slots[name])) {
	            throw new Error('Cannot convert slot into integer: ' + name);
	          }
	        }
	        return slots;
	      } catch (e) {
	        return {};
	      }
	    }
	  }, {
	    key: '_epochTimeFromDateTime',
	    value: function _epochTimeFromDateTime(_ref) {
	      var Y = _ref.Y;
	      var M = _ref.M;
	      var d = _ref.d;
	      var h = _ref.h;
	      var m = _ref.m;
	      var s = _ref.s;
	      var ms = _ref.ms;
	
	      var epoch = new _time2.default.Date(Y, M, d, h, m, s, ms, this._deviceTZ);
	      return epoch.getTime();
	    }
	  }, {
	    key: '_fetchInitialEpoch',
	    value: function _fetchInitialEpoch() {
	      var seconds = parseFloat(this._commandDevice('shell', 'echo', '$EPOCHREALTIME'), 10);
	      return Math.round(seconds * 1000);
	    }
	  }, {
	    key: '_onStageChange',
	    value: function _onStageChange(stage) {
	      switch (stage) {
	        case 'collecting':
	          this._transferToCollectingStage();
	          break;
	        case 'terminating':
	          this._transferToTerminatingStage();
	          break;
	      }
	    }
	  }, {
	    key: '_transferToRecordingStage',
	    value: function _transferToRecordingStage() {
	      this._transferTo(this._recording);
	    }
	  }, {
	    key: '_transferToCollectingStage',
	    value: function _transferToCollectingStage() {
	      this._transferTo(this._collecting);
	    }
	  }, {
	    key: '_transferToTerminatingStage',
	    value: function _transferToTerminatingStage() {
	      this._transferTo(this._terminating);
	    }
	  }]);
	
	  return DeviceLog;
	}(_Router3.default);

	exports.default = DeviceLog;

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(191);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _jsCsp = __webpack_require__(192);
	
	var _jsCsp2 = _interopRequireDefault(_jsCsp);
	
	var _Defer = __webpack_require__(210);
	
	var _Defer2 = _interopRequireDefault(_Defer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Router = function () {
	
	  /**
	   * After constructor this router should be able to listen to control messages.
	   */
	
	  function Router(configs) {
	    _classCallCheck(this, Router);
	
	    this.configs = configs;
	    this._name = '__router__'; // Extend by client.
	    this._controlChannel = _jsCsp2.default.chan();
	    this._outputChannel = _jsCsp2.default.chan();
	    this._inputChannel = _jsCsp2.default.chan();
	    this._publication = _jsCsp2.default.operations.pub(this._outputChannel, function (e) {
	      return e.topic;
	    });
	
	    // Every step of this Defer's promise would be a stage method.
	    this._stages = new _Defer2.default();
	    this._consumeControlMessage();
	  }
	
	  /**
	   * After started the router should be able to emit message to the output channel.
	   * The router should concat the starting stage to the stages defer, and then
	   * resolve it to kick-off the whole process.
	   */
	
	  _createClass(Router, [{
	    key: 'start',
	    value: function start() {
	      throw new Error('Instance should extend this method.');
	    }
	
	    /**
	     * Only be invoked when the last stage of the router need to be finished.
	     * In most of cases, this means the end of the program.
	     * Therefore only the last stage need to implement this to release resources
	     * or finalize all functions.
	     *
	     * Other intermediate stages will be transferred, which is another exit of
	     * the router to clear itself.
	     */
	
	  }, {
	    key: 'stop',
	    value: function stop() {
	      throw new Error('Instance should extend this method.');
	    }
	  }, {
	    key: 'subscribe',
	    value: function subscribe() {
	      var _this = this;
	
	      for (var _len = arguments.length, subs = Array(_len), _key = 0; _key < _len; _key++) {
	        subs[_key] = arguments[_key];
	      }
	
	      subs.forEach(function (sub) {
	        sub(_this._publication);
	      });
	      return this;
	    }
	  }, {
	    key: 'connectToController',
	    value: function connectToController(publication) {
	      this._controllerPublication = publication;
	      _jsCsp2.default.operations.pub.sub(publication, 'status', this._controlChannel);
	      this._consumeControlMessage();
	    }
	  }, {
	    key: '_consumeControlMessage',
	    value: function _consumeControlMessage() {
	      _jsCsp2.default.go(regeneratorRuntime.mark(function _callee() {
	        var value, _value$payload, type, detail;
	
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.next = 2;
	                return this._controlChannel;
	
	              case 2:
	                value = _context.sent;
	
	              case 3:
	                if (!(_jsCsp2.default.CLOSED !== value)) {
	                  _context.next = 25;
	                  break;
	                }
	
	                console.log(this._name, Date.now(), 'Received message: ' + _util2.default.inspect(value));
	                _value$payload = value.payload;
	                type = _value$payload.type;
	                detail = _value$payload.detail;
	                _context.t0 = value.payload.type;
	                _context.next = _context.t0 === 'initialize' ? 11 : _context.t0 === 'finalize' ? 14 : _context.t0 === 'stagechange' ? 17 : 20;
	                break;
	
	              case 11:
	                this._onInitialize(detail);
	                this.start();
	                return _context.abrupt('break', 20);
	
	              case 14:
	                // After the latest stage to resolve that stage promise.
	                this._closeChannels();
	                // Resolve the promise of the last stage.
	                this._stopCurrentStage();
	                return _context.abrupt('break', 20);
	
	              case 17:
	                this._stopCurrentStage();
	                // Should dispatch & start a new stage.
	                this._onStageChange(value.payload.detail);
	                return _context.abrupt('break', 20);
	
	              case 20:
	                _context.next = 22;
	                return this._controlChannel;
	
	              case 22:
	                value = _context.sent;
	                _context.next = 3;
	                break;
	
	              case 25:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }).bind(this));
	    }
	  }, {
	    key: '_onInitialize',
	    value: function _onInitialize(initializedRouters) {
	      this._routers = initializedRouters;
	    }
	
	    /**
	     * Only intermediate stages need to implement this method, since it doesn't exit
	     * via the `stop` method, but the state transferring.
	     */
	
	  }, {
	    key: '_onStageChange',
	    value: function _onStageChange(stage) {
	      throw new Error('Instance should extend this method.');
	    }
	  }, {
	    key: '_stopCurrentStage',
	    value: function _stopCurrentStage() {
	      var _this2 = this;
	
	      // Wait the previous steps in the stage method, and then kick-off the ending
	      // promise of the after-stage defer.
	      this._stages.promise = this._stages.promise.then(function () {
	        // Kick-off it to end the current stage.
	        _this2._currentStageDefer.resolve();
	        // And wait the finishing work to start the next step.
	        return _this2._currentStageDefer.promise;
	      }).catch(function (err) {
	        console.error(_this2._name, Date.now(), 'Finishing stage with error: ', error);
	        throw err;
	      });
	    }
	  }, {
	    key: '_closeChannels',
	    value: function _closeChannels() {
	      this._inputChannel.close();
	      this._outputChannel.close();
	      this._controlChannel.close();
	    }
	  }, {
	    key: '_transferTo',
	    value: function _transferTo(stageMethod) {
	      var _this3 = this;
	
	      // 1. Every stage has a stage method.
	      // 2. Stage method will perform some tasks asynchronously
	      // 3. After all those tasks it will solve the promise it returns
	      // 4. And we will resolve another promise to notify outside world
	      //    the stage is done.
	      //
	      // As a result, when transferring:
	      // 1. In theory the current stage method has been executed but might not be resolved yet.
	      // 2. It should has been attached to the pending stage
	      // 3. So the new method should attach to the pending promise as well
	      // 4. Means it should be executed and we append its promise.
	      //
	
	      this._stages.promise = this._stages.promise.then(function () {
	        var mark = Date.now();
	        // The "after stage" defer.
	        this._currentStageDefer = new _Defer2.default();
	        this._currentStageDefer.promise = this._currentStageDefer.promise.then(function () {});
	
	        // The method is doing things in this stage, so wait it.
	        return stageMethod.call(this, this._currentStageDefer);
	      }.bind(this)).catch(function (err) {
	        console.error(_this3._name, Date.now(), 'Execute stage method ' + stageMethod.name + ' with error: ', error);
	        throw err;
	      });
	    }
	  }]);
	
	  return Router;
	}();

	exports.default = Router;

/***/ },
/* 215 */
/***/ function(module, exports) {

	module.exports = require("time");

/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsCsp = __webpack_require__(192);
	
	var _jsCsp2 = _interopRequireDefault(_jsCsp);
	
	var _Router2 = __webpack_require__(214);
	
	var _Router3 = _interopRequireDefault(_Router2);
	
	var _TerminatingStage = __webpack_require__(217);
	
	var _TerminatingStage2 = _interopRequireDefault(_TerminatingStage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// TODO: We need to do time alignment in this stage when it's ready.
	
	var CollectingStage = function (_Router) {
	  _inherits(CollectingStage, _Router);
	
	  function CollectingStage(previousStageInstance) {
	    _classCallCheck(this, CollectingStage);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CollectingStage).call(this, previousStageInstance));
	
	    _this._name = _this._previousStage._name;
	    _this._record = _this._previousStage._record;
	    return _this;
	  }
	
	  _createClass(CollectingStage, [{
	    key: 'start',
	    value: function start() {
	      // TODO: We need to do time alignment in this stage when it's ready.
	    }
	  }, {
	    key: '_onStageChange',
	    value: function _onStageChange(stage) {
	      switch (stage) {
	        case 'terminating':
	          this._transferToTerminatingStage();
	          break;
	      }
	    }
	  }, {
	    key: '_transferToTerminatingStage',
	    value: function _transferToTerminatingStage() {
	      this._transferTo(_TerminatingStage2.default);
	    }
	  }]);
	
	  return CollectingStage;
	}(_Router3.default);

	exports.default = CollectingStage;

/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsCsp = __webpack_require__(192);
	
	var _jsCsp2 = _interopRequireDefault(_jsCsp);
	
	var _Router2 = __webpack_require__(214);
	
	var _Router3 = _interopRequireDefault(_Router2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TerminatingStage = function (_Router) {
	  _inherits(TerminatingStage, _Router);
	
	  function TerminatingStage(previousStageInstance) {
	    _classCallCheck(this, TerminatingStage);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TerminatingStage).call(this, previousStageInstance));
	
	    _this._record = _this._previousStage._record;
	    return _this;
	  }
	
	  _createClass(TerminatingStage, [{
	    key: 'start',
	    value: function start() {
	      // Send out the final data.
	      _jsCsp2.default.putAsync(this._outputChannel, { 'topic': 'data', 'payload': this._record });
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      this._stopListenToControlChannel();
	      this._closeChannels();
	    }
	  }]);
	
	  return TerminatingStage;
	}(_Router3.default);

	exports.default = TerminatingStage;

/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsCsp = __webpack_require__(192);
	
	var _jsCsp2 = _interopRequireDefault(_jsCsp);
	
	var _Router2 = __webpack_require__(214);
	
	var _Router3 = _interopRequireDefault(_Router2);
	
	var _CollectingStage = __webpack_require__(216);
	
	var _CollectingStage2 = _interopRequireDefault(_CollectingStage);
	
	var _TerminatingStage = __webpack_require__(217);
	
	var _TerminatingStage2 = _interopRequireDefault(_TerminatingStage);
	
	var _Log = __webpack_require__(211);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RecordingStage = function (_Router) {
	  _inherits(RecordingStage, _Router);
	
	  function RecordingStage(configsInstance) {
	    _classCallCheck(this, RecordingStage);
	
	    // Router name: 'log'
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RecordingStage).call(this, configsInstance));
	
	    _this._name = 'log';
	
	    // The devicelog router will emit log/error.
	    _this._deviceLogTopic = 'log';
	
	    console.log('>>>> log constructed');
	    return _this;
	  }
	
	  _createClass(RecordingStage, [{
	    key: 'start',
	    value: function start() {
	      this._record = new _Log2.default();
	    }
	  }, {
	    key: '_onInitialized',
	    value: function _onInitialized(initializedRouters) {
	      _get(Object.getPrototypeOf(RecordingStage.prototype), '_onInitialized', this).apply(this, arguments);
	      console.log('>>>>>> initialized called in Log recording', Object.keys(this._routers));
	      this._routers.devicelog.subscribe(this._connectToDeviceLog.bind(this));
	      console.log('>>> subscribe devicelog channel');
	    }
	  }, {
	    key: '_onStageChange',
	    value: function _onStageChange(stage) {
	      switch (stage) {
	        case 'collecting':
	          this._transferToCollectingStage();
	          break;
	        case 'terminating':
	          this._transferToTerminatingStage();
	          break;
	      }
	    }
	  }, {
	    key: '_onLog',
	    value: function _onLog(log) {
	      //console.log('>>>>> redirected from DeviceLog');
	      this._record.push(log);
	    }
	
	    /**
	     * Note: this router ignores the `transferredDeferred` because
	     * after the stage transferred, there is no need to listen to
	     * the devicelog router again, so we don't need to reconnect to it.
	     */
	
	  }, {
	    key: '_connectToDeviceLog',
	    value: function _connectToDeviceLog(publication, transferredDeferred) {
	      _jsCsp2.default.operations.pub.sub(publication, this._deviceLogTopic, this._inputChannel);
	      this._consumeLogs();
	    }
	  }, {
	    key: '_consumeLogs',
	    value: function _consumeLogs() {
	      _jsCsp2.default.go(regeneratorRuntime.mark(function _callee() {
	        var value;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.next = 2;
	                return this._inputChannel;
	
	              case 2:
	                value = _context.sent;
	
	              case 3:
	                if (!(_jsCsp2.default.CLOSED !== value)) {
	                  _context.next = 10;
	                  break;
	                }
	
	                this._onLog(value);
	                _context.next = 7;
	                return this._inputChannel;
	
	              case 7:
	                value = _context.sent;
	                _context.next = 3;
	                break;
	
	              case 10:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }).bind(this));
	    }
	  }, {
	    key: '_transferToCollectingStage',
	    value: function _transferToCollectingStage() {
	      this._transferTo(_CollectingStage2.default);
	    }
	  }, {
	    key: '_transferToTerminatingStage',
	    value: function _transferToTerminatingStage() {
	      this._transferTo(_TerminatingStage2.default);
	    }
	  }]);
	
	  return RecordingStage;
	}(_Router3.default);

	exports.default = RecordingStage;

/***/ },
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(191);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _temp = __webpack_require__(220);
	
	var _temp2 = _interopRequireDefault(_temp);
	
	var _os = __webpack_require__(225);
	
	var _os2 = _interopRequireDefault(_os);
	
	var _fs = __webpack_require__(205);
	
	var _fs2 = _interopRequireDefault(_fs);
	
	var _path = __webpack_require__(206);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _child_process = __webpack_require__(209);
	
	var _child_process2 = _interopRequireDefault(_child_process);
	
	var _jsCsp = __webpack_require__(192);
	
	var _jsCsp2 = _interopRequireDefault(_jsCsp);
	
	var _Router2 = __webpack_require__(214);
	
	var _Router3 = _interopRequireDefault(_Router2);
	
	var _Defer = __webpack_require__(210);
	
	var _Defer2 = _interopRequireDefault(_Defer);
	
	var _AndroidDaemonBus = __webpack_require__(208);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var ScreenRecord = function (_Router) {
	  _inherits(ScreenRecord, _Router);
	
	  function ScreenRecord(configs) {
	    _classCallCheck(this, ScreenRecord);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(ScreenRecord).call(this, configs));
	
	    _this._name = 'screenrecord';
	    // XXX: Currently we only have 16ms.
	    // We should move it into the configis.
	    _this._recordingFPS = 16;
	    _this._extractedFrameFileType = 'png';
	    _this._userPreferences = null;
	    _this._preferenceName = 'layers.screen-recording.enabled';
	    _this._preferencesPath = '/system/b2g/defaults/pref/user.js';
	    _this._preferencesTempFilePath = _temp2.default.path();
	    _this._deviceTargetPath = _this.configs.path.record.target.device;
	    _this._consoleTargetPath = _this.configs.path.record.target.console;
	    _this._adbPath = _this.configs.path.adb;
	
	    _this._ffmpegPath = _this.configs.path.ffmpeg;
	    _this._extractedFramesPath = _this._buildExtractedFramesPath(_this._consoleTargetPath);
	    return _this;
	  }
	
	  _createClass(ScreenRecord, [{
	    key: 'start',
	    value: function start() {
	      // Concat the first stage handler.
	      this._transferToRecordingStage();
	      // Kick-off it.
	      this._stages.resolve();
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      this._stopListenToControlChannel();
	      this._closeChannels();
	    }
	  }, {
	    key: '_recording',
	    value: function _recording(defer) {
	      var _this2 = this;
	
	      (0, _AndroidDaemonBus.checkDaemonServer)(this._adbPath);
	      this._fetchPreferences(this._preferencesPath);
	      this._setPreference();
	
	      var runIt = _child_process2.default.spawn(this._adbPath, ['shell', 'screenrecord', this._deviceTargetPath], { detached: true });
	      runIt.unref();
	      runIt.stdout.on('data', function (data) {
	        // This module don't generate any data from console.
	      });
	      runIt.stderr.on('data', function (chunk) {
	        var strChunk = chunk.toString();
	        console.log(_this2._name, Date.now(), 'Send a message of console error: ' + strChunk);
	        _jsCsp2.default.putAsync(_this2._outputChannel, { 'topic': 'error', 'source': _this2._name, 'payload': strChunk });
	      });
	      runIt.on('close', function (status) {
	        console.log(_this2._name, Date.now(), 'Send a message of stream closed: ' + status + ' ');
	        _jsCsp2.default.putAsync(_this2._outputChannel, { 'topic': 'status', 'source': _this2._name, 'payload': status });
	      });
	
	      var onKillDefer = new _Defer2.default();
	      runIt.on('exit', function () {
	        setTimeout(function () {
	          try {
	            (0, _AndroidDaemonBus.commandDevice)(_this2._adbPath)('pull', _this2._deviceTargetPath, _this2._consoleTargetPath);
	            if ('darwin' === _os2.default.platform()) {
	              // Or the file won't open.
	              _this2._changeDarwinDefaultGroup(_this2._consoleTargetPath);
	            }
	            onKillDefer.resolve();
	          } catch (e) {
	            console.error('Error while transferring in ScreenRecord', e);
	            throw e;
	          }
	        }, 500);
	      });
	
	      defer.promise = defer.promise.then(function () {
	        runIt.kill('SIGINT');
	        return onKillDefer.promise;
	      }).catch(function (e) {
	        console.error(e);
	        throw e;
	      });
	    }
	  }, {
	    key: '_collecting',
	    value: function _collecting(defer) {
	      var _this3 = this;
	
	      if (0 === _fs2.default.lstatSync(this._consoleTargetPath).size) {
	        // Recorded nothing.
	        return;
	      }
	      var watcher = _fs2.default.watch(_path2.default.dirname(this._consoleTargetPath), function (event, filename) {
	        if (filename && '.' + _this3._extractedFrameFileType === _path2.default.extname(filename)) {
	          var fullPath = '' + (_path2.default.dirname(_this3._consoleTargetPath) + _path2.default.sep + filename);
	          var payload = { 'type': 'extractedframe',
	            'offset': _this3._timeOffsetFromFileName(filename), 'content': fullPath };
	
	          console.log(_this3._name, Date.now(), 'Send a message of recorded file changed: ' + _util2.default.inspect(payload) + ' ');
	          _jsCsp2.default.putAsync(_this3._outputChannel, {
	            'topic': 'log',
	            'source': _this3._name,
	            'payload': payload
	          });
	        }
	      });
	
	      var commandDefer = new _Defer2.default();
	      //ffmpeg -i <the file> ./temp/image%08d.png
	      _child_process2.default.execFile(this._ffmpegPath, ['-i', this._consoleTargetPath, this._extractedFramesPath], function (error) {
	        watcher.close();
	        if (error) {
	          console.error(error);
	          commandDefer.reject(error);
	        } else {
	          commandDefer.resolve();
	        }
	      });
	      return commandDefer.promise;
	    }
	  }, {
	    key: '_terminating',
	    value: function _terminating(defer) {}
	  }, {
	    key: '_timeOffsetFromFileName',
	    value: function _timeOffsetFromFileName(filename) {
	      // ex: test.mp4_00000001_
	      var segs = filename.split('_');
	      // ex: ['test.mp4'......, '00000001', ''];
	      var id = parseInt(segs[segs.length - 2], 10);
	      if (isNaN(id)) {
	        throw new Error('Cannot extract index from file name: ' + filename);
	      }
	      // Assume the first frame ('0000001') means the seconds 0.
	      var offset = this._recordingFPS * (id - 1);
	      return offset;
	    }
	  }, {
	    key: '_setPreference',
	    value: function _setPreference() {
	      var userPreferences = this._fetchPreferences(this._preferencesPath);
	      if (!!userPreferences[this._preferenceName]) {
	        return; // The preference has been set
	      }
	      userPreferences[this._preferenceName] = true;
	      try {
	        this._putPreferences(userPreferences);
	      } catch (e) {
	        console.error('Error occurs when put the updated preferences back', e);
	        throw e;
	      } finally {
	        this._clearLocalPreferences();
	        (0, _AndroidDaemonBus.commandDevice)(this._adbPath)('reboot');
	      }
	    }
	  }, {
	    key: '_unsetPreference',
	    value: function _unsetPreference() {
	      var userPreferences = this._fetchPreferences(this._preferencesPath);
	      if (!this._userPreferences[this._preferenceName]) {
	        return; // The preference has been unset
	      }
	      delete this._userPreferences[this._preferenceName];
	      try {
	        this._putPreferences(this._userPreferences);
	      } catch (e) {
	        console.error('Error occurs when put the updated preferences back', e);
	        throw e;
	      } finally {
	        this._clearLocalPreferences();
	        (0, _AndroidDaemonBus.commandDevice)(this._adbPath)('reboot');
	      }
	    }
	  }, {
	    key: '_putPreferences',
	    value: function _putPreferences(preferences) {
	      var _this4 = this;
	
	      try {
	        var lines = Object.keys(preferences).map(function (key) {
	          var value = preferences[key];
	          if ('string' !== typeof value) {
	            return 'pref(\'' + key + '\', ' + value + ');';
	          } else {
	            return 'pref(\'' + key + '\', "' + value + '");';
	          }
	        });
	        _fs2.default.writeFileSync(this._preferencesTempFilePath, lines.join('\n'));
	        (0, _AndroidDaemonBus.commandDevice)(this._adbPath)('root');
	        (0, _AndroidDaemonBus.commandDevice)(this._adbPath)('remount');
	        (0, _AndroidDaemonBus.commandDevice)(this._adbPath)('push', this._preferencesTempFilePath, this._preferencesPath);
	      } finally {
	        _fs2.default.access(this._preferencesTempFilePath, _fs2.default.F_OK, function (accessError) {
	          if (!accessError) {
	            _fs2.default.unlinkSync(_this4._preferencesTempFilePath);
	          }
	        });
	      }
	    }
	
	    // Clear the cached and contaminated version.
	
	  }, {
	    key: '_clearLocalPreferences',
	    value: function _clearLocalPreferences() {
	      delete this._userPreferences;
	    }
	  }, {
	    key: '_fetchPreferences',
	    value: function _fetchPreferences(preferencePath) {
	      if (this._userPreferences) {
	        return this._userPreferences;
	      }
	      var strPrefs = (0, _AndroidDaemonBus.commandDevice)(this._adbPath)('shell', 'cat', preferencePath);
	      try {
	        this._userPreferences = this._evalPrefs(strPrefs);
	        return this._userPreferences;
	      } catch (e) {
	        console.error('Error occurs when reading the preferences: ', e);
	        throw e;
	      }
	    }
	
	    // Otherwise it's difficult to grep the preference and it's value.
	
	  }, {
	    key: '_evalPrefs',
	    value: function _evalPrefs(strPrefs) {
	      var preferences = {};
	      var pref = function pref(entry, value) {
	        preferences[entry] = value;
	      };
	      eval(strPrefs); //eslint-disable-line
	      return preferences;
	    }
	  }, {
	    key: '_changeDarwinDefaultGroup',
	    value: function _changeDarwinDefaultGroup(recordFilePath) {
	      _child_process2.default.execSync('chgrp staff ' + recordFilePath);
	    }
	  }, {
	    key: '_buildExtractedFramesPath',
	    value: function _buildExtractedFramesPath(consoleTargetPath) {
	      return consoleTargetPath + '_%08d_.' + this._extractedFrameFileType;
	    }
	  }, {
	    key: '_onInitialized',
	    value: function _onInitialized(initializedRouters) {
	      _get(Object.getPrototypeOf(ScreenRecord.prototype), '_onInitialized', this).apply(this, arguments);
	    }
	  }, {
	    key: '_onStageChange',
	    value: function _onStageChange(stage) {
	      switch (stage) {
	        case 'collecting':
	          this._transferToCollectingStage();
	          break;
	        case 'terminating':
	          this._transferToTerminatingStage();
	          break;
	      }
	    }
	  }, {
	    key: '_transferToRecordingStage',
	    value: function _transferToRecordingStage() {
	      this._transferTo(this._recording);
	    }
	  }, {
	    key: '_transferToCollectingStage',
	    value: function _transferToCollectingStage() {
	      this._transferTo(this._collecting);
	    }
	  }, {
	    key: '_transferToTerminatingStage',
	    value: function _transferToTerminatingStage() {
	      this._transferTo(this._terminating);
	    }
	  }]);
	
	  return ScreenRecord;
	}(_Router3.default);

	exports.default = ScreenRecord;

/***/ },
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	var fs   = __webpack_require__(205),
	    path = __webpack_require__(206),
	    cnst = __webpack_require__(221);
	
	var rimraf     = __webpack_require__(222),
	    osTmpdir   = __webpack_require__(224),
	    rimrafSync = rimraf.sync;
	
	/* HELPERS */
	
	var RDWR_EXCL = cnst.O_CREAT | cnst.O_TRUNC | cnst.O_RDWR | cnst.O_EXCL;
	
	var generateName = function(rawAffixes, defaultPrefix) {
	  var affixes = parseAffixes(rawAffixes, defaultPrefix);
	  var now = new Date();
	  var name = [affixes.prefix,
	              now.getYear(), now.getMonth(), now.getDate(),
	              '-',
	              process.pid,
	              '-',
	              (Math.random() * 0x100000000 + 1).toString(36),
	              affixes.suffix].join('');
	  return path.join(affixes.dir || exports.dir, name);
	};
	
	var parseAffixes = function(rawAffixes, defaultPrefix) {
	  var affixes = {prefix: null, suffix: null};
	  if(rawAffixes) {
	    switch (typeof(rawAffixes)) {
	    case 'string':
	      affixes.prefix = rawAffixes;
	      break;
	    case 'object':
	      affixes = rawAffixes;
	      break;
	    default:
	      throw new Error("Unknown affix declaration: " + affixes);
	    }
	  } else {
	    affixes.prefix = defaultPrefix;
	  }
	  return affixes;
	};
	
	/* -------------------------------------------------------------------------
	 * Don't forget to call track() if you want file tracking and exit handlers!
	 * -------------------------------------------------------------------------
	 * When any temp file or directory is created, it is added to filesToDelete
	 * or dirsToDelete. The first time any temp file is created, a listener is
	 * added to remove all temp files and directories at exit.
	 */
	var tracking = false;
	var track = function(value) {
	  tracking = (value !== false);
	  return module.exports; // chainable
	};
	var exitListenerAttached = false;
	var filesToDelete = [];
	var dirsToDelete = [];
	
	function deleteFileOnExit(filePath) {
	  if (!tracking) return false;
	  attachExitListener();
	  filesToDelete.push(filePath);
	}
	
	function deleteDirOnExit(dirPath) {
	  if (!tracking) return false;
	  attachExitListener();
	  dirsToDelete.push(dirPath);
	}
	
	function attachExitListener() {
	  if (!tracking) return false;
	  if (!exitListenerAttached) {
	    process.addListener('exit', cleanupSync);
	    exitListenerAttached = true;
	  }
	}
	
	function cleanupFilesSync() {
	  if (!tracking) {
	    return false;
	  }
	  var count = 0;
	  var toDelete;
	  while ((toDelete = filesToDelete.shift()) !== undefined) {
	    rimrafSync(toDelete);
	    count++;
	  }
	  return count;
	}
	
	function cleanupFiles(callback) {
	  if (!tracking) {
	    if (callback) {
	      callback(new Error("not tracking"));
	    }
	    return;
	  }
	  var count = 0;
	  var left = filesToDelete.length;
	  if (!left) {
	    if (callback) {
	      callback(null, count);
	    }
	    return;
	  }
	  var toDelete;
	  var rimrafCallback = function(err) {
	    if (!left) {
	      // Prevent processing if aborted
	      return;
	    }
	    if (err) {
	      // This shouldn't happen; pass error to callback and abort
	      // processing
	      if (callback) {
	        callback(err);
	      }
	      left = 0;
	      return;
	    } else {
	      count++;
	    }
	    left--;
	    if (!left && callback) {
	      callback(null, count);
	    }
	  };
	  while ((toDelete = filesToDelete.shift()) !== undefined) {
	    rimraf(toDelete, rimrafCallback);
	  }
	}
	
	function cleanupDirsSync() {
	  if (!tracking) {
	    return false;
	  }
	  var count = 0;
	  var toDelete;
	  while ((toDelete = dirsToDelete.shift()) !== undefined) {
	    rimrafSync(toDelete);
	    count++;
	  }
	  return count;
	}
	
	function cleanupDirs(callback) {
	  if (!tracking) {
	    if (callback) {
	      callback(new Error("not tracking"));
	    }
	    return;
	  }
	  var count = 0;
	  var left = dirsToDelete.length;
	  if (!left) {
	    if (callback) {
	      callback(null, count);
	    }
	    return;
	  }
	  var toDelete;
	  var rimrafCallback = function (err) {
	    if (!left) {
	      // Prevent processing if aborted
	      return;
	    }
	    if (err) {
	      // rimraf handles most "normal" errors; pass the error to the
	      // callback and abort processing
	      if (callback) {
	        callback(err, count);
	      }
	      left = 0;
	      return;
	    } else {
	      count;
	    }
	    left--;
	    if (!left && callback) {
	      callback(null, count);
	    }
	  };
	  while ((toDelete = dirsToDelete.shift()) !== undefined) {
	    rimraf(toDelete, rimrafCallback);
	  }
	}
	
	function cleanupSync() {
	  if (!tracking) {
	    return false;
	  }
	  var fileCount = cleanupFilesSync();
	  var dirCount  = cleanupDirsSync();
	  return {files: fileCount, dirs: dirCount};
	}
	
	function cleanup(callback) {
	  if (!tracking) {
	    if (callback) {
	      callback(new Error("not tracking"));
	    }
	    return;
	  }
	  cleanupFiles(function(fileErr, fileCount) {
	    if (fileErr) {
	      if (callback) {
	        callback(fileErr, {files: fileCount})
	      }
	    } else {
	      cleanupDirs(function(dirErr, dirCount) {
	        if (callback) {
	          callback(dirErr, {files: fileCount, dirs: dirCount});
	        }
	      });
	    }
	  });
	}
	
	/* DIRECTORIES */
	
	function mkdir(affixes, callback) {
	  var dirPath = generateName(affixes, 'd-');
	  fs.mkdir(dirPath, 0700, function(err) {
	    if (!err) {
	      deleteDirOnExit(dirPath);
	    }
	    if (callback) {
	      callback(err, dirPath);
	    }
	  });
	}
	
	function mkdirSync(affixes) {
	  var dirPath = generateName(affixes, 'd-');
	  fs.mkdirSync(dirPath, 0700);
	  deleteDirOnExit(dirPath);
	  return dirPath;
	}
	
	/* FILES */
	
	function open(affixes, callback) {
	  var filePath = generateName(affixes, 'f-');
	  fs.open(filePath, RDWR_EXCL, 0600, function(err, fd) {
	    if (!err) {
	      deleteFileOnExit(filePath);
	    }
	    if (callback) {
	      callback(err, {path: filePath, fd: fd});
	    }
	  });
	}
	
	function openSync(affixes) {
	  var filePath = generateName(affixes, 'f-');
	  var fd = fs.openSync(filePath, RDWR_EXCL, 0600);
	  deleteFileOnExit(filePath);
	  return {path: filePath, fd: fd};
	}
	
	function createWriteStream(affixes) {
	  var filePath = generateName(affixes, 's-');
	  var stream = fs.createWriteStream(filePath, {flags: RDWR_EXCL, mode: 0600});
	  deleteFileOnExit(filePath);
	  return stream;
	}
	
	/* EXPORTS */
	// Settings
	exports.dir               = path.resolve(osTmpdir());
	exports.track             = track;
	// Functions
	exports.mkdir             = mkdir;
	exports.mkdirSync         = mkdirSync;
	exports.open              = open;
	exports.openSync          = openSync;
	exports.path              = generateName;
	exports.cleanup           = cleanup;
	exports.cleanupSync       = cleanupSync;
	exports.createWriteStream = createWriteStream;


/***/ },
/* 221 */
/***/ function(module, exports) {

	module.exports = require("constants");

/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = rimraf
	rimraf.sync = rimrafSync
	
	var assert = __webpack_require__(223)
	var path = __webpack_require__(206)
	var fs = __webpack_require__(205)
	
	// for EMFILE handling
	var timeout = 0
	exports.EMFILE_MAX = 1000
	exports.BUSYTRIES_MAX = 3
	
	var isWindows = (process.platform === "win32")
	
	function defaults (options) {
	  var methods = [
	    'unlink',
	    'chmod',
	    'stat',
	    'rmdir',
	    'readdir'
	  ]
	  methods.forEach(function(m) {
	    options[m] = options[m] || fs[m]
	    m = m + 'Sync'
	    options[m] = options[m] || fs[m]
	  })
	}
	
	function rimraf (p, options, cb) {
	  if (typeof options === 'function') {
	    cb = options
	    options = {}
	  }
	  assert(p)
	  assert(options)
	  assert(typeof cb === 'function')
	
	  defaults(options)
	
	  if (!cb) throw new Error("No callback passed to rimraf()")
	
	  var busyTries = 0
	  rimraf_(p, options, function CB (er) {
	    if (er) {
	      if (isWindows && (er.code === "EBUSY" || er.code === "ENOTEMPTY") &&
	          busyTries < exports.BUSYTRIES_MAX) {
	        busyTries ++
	        var time = busyTries * 100
	        // try again, with the same exact callback as this one.
	        return setTimeout(function () {
	          rimraf_(p, options, CB)
	        }, time)
	      }
	
	      // this one won't happen if graceful-fs is used.
	      if (er.code === "EMFILE" && timeout < exports.EMFILE_MAX) {
	        return setTimeout(function () {
	          rimraf_(p, options, CB)
	        }, timeout ++)
	      }
	
	      // already gone
	      if (er.code === "ENOENT") er = null
	    }
	
	    timeout = 0
	    cb(er)
	  })
	}
	
	// Two possible strategies.
	// 1. Assume it's a file.  unlink it, then do the dir stuff on EPERM or EISDIR
	// 2. Assume it's a directory.  readdir, then do the file stuff on ENOTDIR
	//
	// Both result in an extra syscall when you guess wrong.  However, there
	// are likely far more normal files in the world than directories.  This
	// is based on the assumption that a the average number of files per
	// directory is >= 1.
	//
	// If anyone ever complains about this, then I guess the strategy could
	// be made configurable somehow.  But until then, YAGNI.
	function rimraf_ (p, options, cb) {
	  assert(p)
	  assert(options)
	  assert(typeof cb === 'function')
	
	  options.unlink(p, function (er) {
	    if (er) {
	      if (er.code === "ENOENT")
	        return cb(null)
	      if (er.code === "EPERM")
	        return (isWindows)
	          ? fixWinEPERM(p, options, er, cb)
	          : rmdir(p, options, er, cb)
	      if (er.code === "EISDIR")
	        return rmdir(p, options, er, cb)
	    }
	    return cb(er)
	  })
	}
	
	function fixWinEPERM (p, options, er, cb) {
	  assert(p)
	  assert(options)
	  assert(typeof cb === 'function')
	  if (er)
	    assert(er instanceof Error)
	
	  options.chmod(p, 666, function (er2) {
	    if (er2)
	      cb(er2.code === "ENOENT" ? null : er)
	    else
	      options.stat(p, function(er3, stats) {
	        if (er3)
	          cb(er3.code === "ENOENT" ? null : er)
	        else if (stats.isDirectory())
	          rmdir(p, options, er, cb)
	        else
	          options.unlink(p, cb)
	      })
	  })
	}
	
	function fixWinEPERMSync (p, options, er) {
	  assert(p)
	  assert(options)
	  if (er)
	    assert(er instanceof Error)
	
	  try {
	    options.chmodSync(p, 666)
	  } catch (er2) {
	    if (er2.code === "ENOENT")
	      return
	    else
	      throw er
	  }
	
	  try {
	    var stats = options.statSync(p)
	  } catch (er3) {
	    if (er3.code === "ENOENT")
	      return
	    else
	      throw er
	  }
	
	  if (stats.isDirectory())
	    rmdirSync(p, options, er)
	  else
	    options.unlinkSync(p)
	}
	
	function rmdir (p, options, originalEr, cb) {
	  assert(p)
	  assert(options)
	  if (originalEr)
	    assert(originalEr instanceof Error)
	  assert(typeof cb === 'function')
	
	  // try to rmdir first, and only readdir on ENOTEMPTY or EEXIST (SunOS)
	  // if we guessed wrong, and it's not a directory, then
	  // raise the original error.
	  options.rmdir(p, function (er) {
	    if (er && (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM"))
	      rmkids(p, options, cb)
	    else if (er && er.code === "ENOTDIR")
	      cb(originalEr)
	    else
	      cb(er)
	  })
	}
	
	function rmkids(p, options, cb) {
	  assert(p)
	  assert(options)
	  assert(typeof cb === 'function')
	
	  options.readdir(p, function (er, files) {
	    if (er)
	      return cb(er)
	    var n = files.length
	    if (n === 0)
	      return options.rmdir(p, cb)
	    var errState
	    files.forEach(function (f) {
	      rimraf(path.join(p, f), options, function (er) {
	        if (errState)
	          return
	        if (er)
	          return cb(errState = er)
	        if (--n === 0)
	          options.rmdir(p, cb)
	      })
	    })
	  })
	}
	
	// this looks simpler, and is strictly *faster*, but will
	// tie up the JavaScript thread and fail on excessively
	// deep directory trees.
	function rimrafSync (p, options) {
	  options = options || {}
	  defaults(options)
	
	  assert(p)
	  assert(options)
	
	  try {
	    options.unlinkSync(p)
	  } catch (er) {
	    if (er.code === "ENOENT")
	      return
	    if (er.code === "EPERM")
	      return isWindows ? fixWinEPERMSync(p, options, er) : rmdirSync(p, options, er)
	    if (er.code !== "EISDIR")
	      throw er
	    rmdirSync(p, options, er)
	  }
	}
	
	function rmdirSync (p, options, originalEr) {
	  assert(p)
	  assert(options)
	  if (originalEr)
	    assert(originalEr instanceof Error)
	
	  try {
	    options.rmdirSync(p)
	  } catch (er) {
	    if (er.code === "ENOENT")
	      return
	    if (er.code === "ENOTDIR")
	      throw originalEr
	    if (er.code === "ENOTEMPTY" || er.code === "EEXIST" || er.code === "EPERM")
	      rmkidsSync(p, options)
	  }
	}
	
	function rmkidsSync (p, options) {
	  assert(p)
	  assert(options)
	  options.readdirSync(p).forEach(function (f) {
	    rimrafSync(path.join(p, f), options)
	  })
	  options.rmdirSync(p, options)
	}


/***/ },
/* 223 */
/***/ function(module, exports) {

	module.exports = require("assert");

/***/ },
/* 224 */
/***/ function(module, exports) {

	'use strict';
	var isWindows = process.platform === 'win32';
	var trailingSlashRe = isWindows ? /[^:]\\$/ : /.\/$/;
	
	// https://github.com/nodejs/io.js/blob/3e7a14381497a3b73dda68d05b5130563cdab420/lib/os.js#L25-L43
	module.exports = function () {
		var path;
	
		if (isWindows) {
			path = process.env.TEMP ||
				process.env.TMP ||
				(process.env.SystemRoot || process.env.windir) + '\\temp';
		} else {
			path = process.env.TMPDIR ||
				process.env.TMP ||
				process.env.TEMP ||
				'/tmp';
		}
	
		if (trailingSlashRe.test(path)) {
			path = path.slice(0, -1);
		}
	
		return path;
	};


/***/ },
/* 225 */
/***/ function(module, exports) {

	module.exports = require("os");

/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsCsp = __webpack_require__(192);
	
	var _jsCsp2 = _interopRequireDefault(_jsCsp);
	
	var _Router2 = __webpack_require__(214);
	
	var _Router3 = _interopRequireDefault(_Router2);
	
	var _Defer = __webpack_require__(210);
	
	var _Defer2 = _interopRequireDefault(_Defer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Signal = function (_Router) {
	  _inherits(Signal, _Router);
	
	  function Signal(configs) {
	    _classCallCheck(this, Signal);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Signal).call(this, configs));
	
	    _this._name = 'signal';
	    return _this;
	  }
	
	  _createClass(Signal, [{
	    key: 'start',
	    value: function start() {
	      // Concat the first stage handler.
	      this._transferToRecordingStage();
	      // Kick-off it.
	      this._stages.resolve();
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      this._stopListenToControlChannel();
	      this._closeChannels();
	    }
	  }, {
	    key: '_recording',
	    value: function _recording() {
	      var _this2 = this;
	
	      // Two "signals": inputs from stdin and system signals.
	      var terminatingSignals = ['SIGHUP', 'SIGTERM', 'SIGINT'];
	      this._nextStageBySignal = 'collecting';
	      terminatingSignals.forEach(function (signal) {
	        process.on(signal, _this2._onStageTransferringSignal.bind(_this2));
	      });
	
	      var stdin = process.openStdin();
	      stdin.setRawMode(true);
	      stdin.on('data', this._onInput.bind(this));
	    }
	  }, {
	    key: '_collecting',
	    value: function _collecting(defer) {
	      this._nextStageBySignal = 'terminating';
	    }
	  }, {
	    key: '_terminating',
	    value: function _terminating(defer) {
	      this._nextStageBySignal = null;
	      console.log(this._name, Date.now(), 'Send the message from terminating signal out (|finalize|)');
	      _jsCsp2.default.putAsync(this._outputChannel, { 'topic': 'status', 'source': this._name,
	        'payload': { 'type': 'finalize' } });
	
	      defer.promise = defer.promise.then(function () {
	        // Stop reading the stdin.
	        process.stdin.pause();
	      });
	    }
	  }, {
	    key: '_onInput',
	    value: function _onInput(code) {
	      // Polling stdin to make it continues listen to user inputs.
	      // This handler deals with other 'signals' other than system signals.
	      if ('\u001b' === code.toString() || 'a' === code.toString()) {
	        this._onStageTransferringSignal();
	      }
	    }
	  }, {
	    key: '_onStageTransferringSignal',
	    value: function _onStageTransferringSignal() {
	      if (this._stopSendingStageChange) {
	        return;
	      }
	      console.log(this._name, Date.now(), 'Send the message of |stagechange| out; stagae: ' + this._nextStageBySignal + ' ');
	      _jsCsp2.default.putAsync(this._outputChannel, { 'topic': 'status', 'source': this._name,
	        'payload': { 'type': 'stagechange', 'detail': this._nextStageBySignal } });
	
	      // If interrupts fired multiple times in this stage, we need a way
	      // to block the multiple stagechange event. This is a simple way to
	      // do that.
	      if ('terminating' === this._nextStageBySignal) {
	        // We cannot remove the signal listeners because we still need to
	        // prevent user interrupting the program before all steps done.
	        this._stopSendingStageChange = true;
	      }
	    }
	  }, {
	    key: '_onStageChange',
	    value: function _onStageChange(stage) {
	      switch (stage) {
	        case 'collecting':
	          this._transferToCollectingStage();
	          break;
	        case 'terminating':
	          this._transferToTerminatingStage();
	          break;
	      }
	    }
	  }, {
	    key: '_removeSignalHandler',
	    value: function _removeSignalHandler() {
	      var terminatingSignals = ['SIGHUP', 'SIGTERM', 'SIGINT'];
	      terminatingSignals.forEach(function (signal) {
	        // So we don't fire stagechange according to the signal anymore.
	        process.removeAllListeners(signal);
	      });
	    }
	  }, {
	    key: '_transferToRecordingStage',
	    value: function _transferToRecordingStage() {
	      this._transferTo(this._recording);
	    }
	  }, {
	    key: '_transferToCollectingStage',
	    value: function _transferToCollectingStage() {
	      this._transferTo(this._collecting);
	    }
	  }, {
	    key: '_transferToTerminatingStage',
	    value: function _transferToTerminatingStage() {
	      this._transferTo(this._terminating);
	    }
	  }]);
	
	  return Signal;
	}(_Router3.default);

	exports.default = Signal;

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _util = __webpack_require__(191);
	
	var _util2 = _interopRequireDefault(_util);
	
	var _jsCsp = __webpack_require__(192);
	
	var _jsCsp2 = _interopRequireDefault(_jsCsp);
	
	var _Router2 = __webpack_require__(214);
	
	var _Router3 = _interopRequireDefault(_Router2);
	
	var _Defer = __webpack_require__(210);
	
	var _Defer2 = _interopRequireDefault(_Defer);
	
	var _Timeline = __webpack_require__(212);
	
	var _Timeline2 = _interopRequireDefault(_Timeline);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var Timeline = function (_Router) {
	  _inherits(Timeline, _Router);
	
	  function Timeline(configs) {
	    _classCallCheck(this, Timeline);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Timeline).call(this, configs));
	
	    _this._name = 'timeline';
	    _this._timeline = {};
	    return _this;
	  }
	
	  _createClass(Timeline, [{
	    key: 'start',
	    value: function start() {
	      // Concat the first stage handler.
	      this._transferToRecordingStage();
	      // Kick-off it.
	      this._stages.resolve();
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      this._stopListenToControlChannel();
	      this._closeChannels();
	    }
	  }, {
	    key: '_recording',
	    value: function _recording() {}
	  }, {
	    key: '_collecting',
	    value: function _collecting() {}
	
	    /**
	     * In fact we only need one stage. However, to keep interface aligned,
	     * we do the same thing like other routers.
	     */
	
	  }, {
	    key: '_terminating',
	    value: function _terminating(defer) {
	      console.log(this._name, Date.now(), 'Send the message of timeline collecting result: ' + _util2.default.inspect(this._timeline) + ' ');
	      _jsCsp2.default.putAsync(this._outputChannel, { 'topic': 'data', 'source': this._name, 'payload': this._timeline });
	    }
	  }, {
	    key: '_onInitialize',
	    value: function _onInitialize(routers) {
	      var _this2 = this;
	
	      _get(Object.getPrototypeOf(Timeline.prototype), '_onInitialize', this).apply(this, arguments);
	      Object.keys(routers).forEach(function (name) {
	        var router = routers[name];
	        switch (name) {
	          case 'screenrecord':
	          case 'devicelog':
	            router.subscribe(_this2._connect.bind(_this2));
	            break;
	        }
	      });
	      this._consumeMessage();
	    }
	  }, {
	    key: '_connect',
	    value: function _connect(publication) {
	      _jsCsp2.default.operations.pub.sub(publication, 'log', this._inputChannel);
	    }
	  }, {
	    key: '_consumeMessage',
	    value: function _consumeMessage() {
	      _jsCsp2.default.go(regeneratorRuntime.mark(function _callee() {
	        var value;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                _context.next = 2;
	                return this._inputChannel;
	
	              case 2:
	                value = _context.sent;
	
	              case 3:
	                if (!(_jsCsp2.default.CLOSED !== value)) {
	                  _context.next = 11;
	                  break;
	                }
	
	                console.log(this._name, Date.now(), 'Received a message of collected data: ' + _util2.default.inspect(value) + ' ');
	                this._onInput(value);
	                _context.next = 8;
	                return this._inputChannel;
	
	              case 8:
	                value = _context.sent;
	                _context.next = 3;
	                break;
	
	              case 11:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }).bind(this));
	    }
	
	    /**
	     * Once we collect different channels into one, we only care about their common attributes.
	     */
	
	  }, {
	    key: '_onInput',
	    value: function _onInput(value) {
	      var source = value.source;
	      if (!value.payload) {
	        return;
	      }
	      if (!this._checkLogValid(value.payload)) {
	        return;
	      }
	      var _value$payload = value.payload;
	      var offset = _value$payload.offset;
	      var type = _value$payload.type;
	      var content = _value$payload.content;
	
	      if (!this._timeline[offset]) {
	        this._timeline[offset] = new _Timeline2.default(offset);
	      }
	      this._timeline[offset].push(source, type, content);
	    }
	  }, {
	    key: '_checkLogValid',
	    value: function _checkLogValid(log) {
	      if (!log.offset || !log.type || !log.content) {
	        return false;
	      } else {
	        return true;
	      }
	    }
	  }, {
	    key: '_onStageChange',
	    value: function _onStageChange(stage) {
	      switch (stage) {
	        case 'collecting':
	          this._transferToCollectingStage();
	          break;
	        case 'terminating':
	          this._transferToTerminatingStage();
	          break;
	      }
	    }
	  }, {
	    key: '_transferToRecordingStage',
	    value: function _transferToRecordingStage() {
	      this._transferTo(this._recording);
	    }
	  }, {
	    key: '_transferToCollectingStage',
	    value: function _transferToCollectingStage() {
	      this._transferTo(this._collecting);
	    }
	  }, {
	    key: '_transferToTerminatingStage',
	    value: function _transferToTerminatingStage() {
	      this._transferTo(this._terminating);
	    }
	  }]);
	
	  return Timeline;
	}(_Router3.default);

	exports.default = Timeline;

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgNTU5N2ViNWIxYTA4NjJmZmE1ZDAiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmV4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5jb3JlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5oaWRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnJlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC51aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmN0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmNvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaW52b2tlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnRvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQudG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQudG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQudG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnRvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC53a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnNoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQua2V5b2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmdldC1uYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm9iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5wcmV2ZW50LWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLWZyb3plbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtc2VhbGVkLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1leHRlbnNpYmxlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5oYXMtaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC50by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnN0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5lcHNpbG9uLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1maW5pdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlzLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLW5hbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtc2FmZS1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5tYXgtc2FmZS1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5taW4tc2FmZS1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1mbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYWNvc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm1hdGgtbG9nMXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hc2luaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmF0YW5oLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2JydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQubWF0aC1zaWduLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2x6MzIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jb3NoLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZXhwbTEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm1hdGgtZXhwbTEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5mcm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5oeXBvdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmltdWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cxMC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnNpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaW5oLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgudGFuaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnRydW5jLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJhdy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcudHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnN0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLml0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuc3RyaW5nLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlzLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZmFpbHMtaXMtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcucmVwZWF0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zdHJpbmctcmVwZWF0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLml0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lm9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLml0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5jb3B5LXdpdGhpbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktY29weS13aXRoaW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLm1hdGNoLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5maXgtcmUtd2tzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5yZXBsYWNlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNwbGl0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnN0cmljdC1uZXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmZvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQubWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC50YXNrLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWFwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYud2Vhay1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmNvbGxlY3Rpb24td2Vhay5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLXNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmFwcGx5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuY29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVsZXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZW51bWVyYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0Lmhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmlzLWV4dGVuc2libGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5vd24ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQub3duLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5wcmV2ZW50LWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LmFycmF5LmluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy5hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLWxlZnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnN0cmluZy1wYWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnBhZC1yaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcudHJpbS1sZWZ0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy50cmltLXJpZ2h0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZ2V4cC5lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnJlcGxhY2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm9iamVjdC10by1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZW50cmllcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY29sbGVjdGlvbi10by1qc29uLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnNldC50by1qc29uLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvanMuYXJyYXkuc3RhdGljcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnBhcnRpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy93ZWIuaW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vYmFiZWwtcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhvbGRlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dGlsXCIiLCJ3ZWJwYWNrOi8vLy4vfi9qcy1jc3Avc3JjL2NzcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2pzLWNzcC9zcmMvY3NwLmNvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9qcy1jc3Avc3JjL2ltcGwvYnVmZmVycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2pzLWNzcC9zcmMvaW1wbC9jaGFubmVscy5qcyIsIndlYnBhY2s6Ly8vLi9+L2pzLWNzcC9zcmMvaW1wbC9kaXNwYXRjaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2pzLWNzcC9zcmMvaW1wbC9zZWxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9qcy1jc3Avc3JjL2ltcGwvcHJvY2Vzcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2pzLWNzcC9zcmMvaW1wbC90aW1lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9qcy1jc3Avc3JjL2NzcC5vcGVyYXRpb25zLmpzIiwid2VicGFjazovLy8uL34vanMtY3NwL3NyYy9jc3AucGlwZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL0NvbmZpZ3VyZS5qcyIsIndlYnBhY2s6Ly8vLi9+L25vZGUtZ2V0b3B0L2luZGV4LmpzIiwid2VicGFjazovLy8uL34vbm9kZS1nZXRvcHQvbGliL2dldG9wdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJmc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vLi9zcmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9zcmMvQW5kcm9pZERhZW1vbkJ1cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RlZmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNvcmQvTG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNvcmQvVGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcnMvRGV2aWNlTG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXJzL1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0aW1lXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcnMvTG9nL0NvbGxlY3RpbmdTdGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVycy9Mb2cvVGVybWluYXRpbmdTdGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVycy9Mb2cvUmVjb3JkaW5nU3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcnMvU2NyZWVuUmVjb3JkLmpzIiwid2VicGFjazovLy8uL34vdGVtcC9saWIvdGVtcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb25zdGFudHNcIiIsIndlYnBhY2s6Ly8vLi9+L3RlbXAvfi9yaW1yYWYvcmltcmFmLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzc2VydFwiIiwid2VicGFjazovLy8uL34vdGVtcC9+L29zLXRtcGRpci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvc1wiIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXJzL1NpZ25hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVycy9UaW1lbGluZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCOzs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckIsMkJBQTBCO0FBQzFCO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCw0Q0FBMkM7QUFDM0M7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7QUFDQSxHOzs7Ozs7QUNyRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTRCLG1FQUFtRTtBQUMvRixFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLHFCOzs7Ozs7QUNYRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7OztBQ1JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQXlDO0FBQ3pDLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7QUNyQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFxQyxNQUFNLFNBQVMsT0FBTyxTQUFTO0FBQ3BFLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7O0FDbEJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7OztBQ1JEO0FBQ0E7O0FBRUEsNEJBQTJCLHdDQUFpRCxFOzs7Ozs7QUNINUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNWQTtBQUNBOztBQUVBLDRCQUEyQix3Q0FBaUQsRTs7Ozs7O0FDSDVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQzs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFxRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7O0FDbkJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLFdBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDdkJBLHlDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7QUNMRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEU7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWM7QUFDZCxNQUFLO0FBQ0wsZUFBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEwQyxXQUFXO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTs7QUFFQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxhQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBOztBQUVBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsWUFBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0EsK0NBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQSwrQ0FBOEMsUUFBUTtBQUN0RDtB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QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM5TEE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN6VUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pGQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzlHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xNQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7Ozs7Ozs7QUNYQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFxQixZQUFZO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQixZQUFZO0FBQ2pDO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBYyxVQUFVLFdBQVc7QUFDbkM7QUFDQSxrQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQLE1BQUs7QUFDTCxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOzs7Ozs7O0FDdlBBLG9DOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7QUN4QkEsZ0M7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBTXFCOzs7QUFFbkIsWUFGbUIsTUFFbkIsQ0FBWSxPQUFaLEVBQXFCOzJCQUZGLFFBRUU7O3dFQUZGLG1CQUdYLFVBRGE7O0FBRW5CLFdBQUssS0FBTCxHQUFhLFFBQWIsQ0FGbUI7O0lBQXJCOztnQkFGbUI7OzZCQU9YOztBQUVOLFlBQUsseUJBQUw7O0FBRk0sV0FJTixDQUFLLE9BQUwsQ0FBYSxPQUFiLEdBSk07Ozs7NEJBT0Q7QUFDTCxZQUFLLDJCQUFMLEdBREs7QUFFTCxZQUFLLGNBQUwsR0FGSzs7OztrQ0FLTTs7OztBQUVYLFdBQUkscUJBQXFCLENBQ3ZCLFFBRHVCLEVBRXZCLFNBRnVCLEVBR3ZCLFFBSHVCLENBQXJCLENBRk87QUFPWCxZQUFLLGtCQUFMLEdBQTBCLFlBQTFCLENBUFc7QUFRWCwwQkFBbUIsT0FBbkIsQ0FBMkIsVUFBQyxNQUFELEVBQVk7QUFDckMsaUJBQVEsRUFBUixDQUFXLE1BQVgsRUFBeUIsT0FBSywwQkFBTCxhQUF6QixFQURxQztRQUFaLENBQTNCLENBUlc7O0FBWVgsV0FBSSxRQUFRLFFBQVEsU0FBUixFQUFSLENBWk87QUFhWCxhQUFNLFVBQU4sQ0FBaUIsSUFBakIsRUFiVztBQWNYLGFBQU0sRUFBTixDQUFTLE1BQVQsRUFBdUIsS0FBSyxRQUFMLE1BQU4sS0FBakIsRUFkVzs7OztpQ0FpQkQsT0FBTztBQUNqQixZQUFLLGtCQUFMLEdBQTBCLGFBQTFCLENBRGlCOzs7O2tDQUlOLE9BQU87QUFDbEIsWUFBSyxrQkFBTCxHQUEwQixJQUExQixDQURrQjtBQUVsQixlQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQUwsRUFBWSxLQUFLLEdBQUwsRUFBeEIsK0RBRmtCO0FBSWxCLHVCQUFJLFFBQUosQ0FBYSxLQUFLLGNBQUwsRUFBcUIsRUFBQyxTQUFTLFFBQVQsRUFBbUIsVUFBVSxLQUFLLEtBQUw7QUFDOUQsb0JBQVcsRUFBQyxRQUFRLFVBQVIsRUFBWixFQURGLEVBSmtCOztBQU9sQixhQUFNLE9BQU4sR0FBZ0IsTUFBTSxPQUFOLENBQWMsSUFBZCxDQUFtQixZQUFNOztBQUV2QyxpQkFBUSxLQUFSLENBQWMsS0FBZCxHQUZ1QztRQUFOLENBQW5DLENBUGtCOzs7OzhCQWFYLE1BQU07OztBQUdiLFdBQUksYUFBYSxLQUFLLFFBQUwsRUFBYixJQUFnQyxRQUFRLEtBQUssUUFBTCxFQUFSLEVBQXlCO0FBQzNELGNBQUssMEJBQUwsR0FEMkQ7UUFBN0Q7Ozs7a0RBSzJCO0FBQzNCLFdBQUksS0FBSyx1QkFBTCxFQUE4QjtBQUNoQyxnQkFEZ0M7UUFBbEM7QUFHQSxlQUFRLEdBQVIsQ0FBWSxLQUFLLEtBQUwsRUFBWSxLQUFLLEdBQUwsRUFBeEIsc0RBQ3FELEtBQUssa0JBQUwsTUFEckQsRUFKMkI7QUFNM0IsdUJBQUksUUFBSixDQUFhLEtBQUssY0FBTCxFQUFxQixFQUFDLFNBQVMsUUFBVCxFQUFtQixVQUFVLEtBQUssS0FBTDtBQUM5RCxvQkFBWSxFQUFDLFFBQVEsYUFBUixFQUF1QixVQUFVLEtBQUssa0JBQUwsRUFBOUMsRUFERjs7Ozs7QUFOMkIsV0FZdkIsa0JBQWtCLEtBQUssa0JBQUwsRUFBeUI7OztBQUc3QyxjQUFLLHVCQUFMLEdBQStCLElBQS9CLENBSDZDO1FBQS9DOzs7O29DQU9hLE9BQU87QUFDcEIsZUFBTyxLQUFQO0FBQ0UsY0FBSyxZQUFMO0FBQ0UsZ0JBQUssMEJBQUwsR0FERjtBQUVFLGlCQUZGO0FBREYsY0FJTyxhQUFMO0FBQ0UsZ0JBQUssMkJBQUwsR0FERjtBQUVFLGlCQUZGO0FBSkYsUUFEb0I7Ozs7NENBV0M7QUFDckIsV0FBSSxxQkFBcUIsQ0FDdkIsUUFEdUIsRUFFdkIsU0FGdUIsRUFHdkIsUUFIdUIsQ0FBckIsQ0FEaUI7QUFNckIsMEJBQW1CLE9BQW5CLENBQTJCLFVBQUMsTUFBRCxFQUFZOztBQUVyQyxpQkFBUSxrQkFBUixDQUEyQixNQUEzQixFQUZxQztRQUFaLENBQTNCLENBTnFCOzs7O2lEQVlLO0FBQzFCLFlBQUssV0FBTCxDQUFpQixLQUFLLFVBQUwsQ0FBakIsQ0FEMEI7Ozs7a0RBSUM7QUFDM0IsWUFBSyxXQUFMLENBQWlCLEtBQUssV0FBTCxDQUFqQixDQUQyQjs7OzttREFJQztBQUM1QixZQUFLLFdBQUwsQ0FBaUIsS0FBSyxZQUFMLENBQWpCLENBRDRCOzs7O1VBL0dYOzs7Ozs7Ozs7QUNOckI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0tBUXFCOzs7QUFFbkIsWUFGbUIsUUFFbkIsQ0FBWSxPQUFaLEVBQXFCOzJCQUZGLFVBRUU7O3dFQUZGLHFCQUdYLFVBRGE7O0FBRW5CLFdBQUssS0FBTCxHQUFhLFVBQWIsQ0FGbUI7QUFHbkIsV0FBSyxTQUFMLEdBQWlCLEVBQWpCLENBSG1COztJQUFyQjs7Z0JBRm1COzs2QkFRWDs7QUFFTixZQUFLLHlCQUFMOztBQUZNLFdBSU4sQ0FBSyxPQUFMLENBQWEsT0FBYixHQUpNOzs7OzRCQU9EO0FBQ0wsWUFBSywyQkFBTCxHQURLO0FBRUwsWUFBSyxjQUFMLEdBRks7Ozs7a0NBS007OzttQ0FDQzs7Ozs7Ozs7O2tDQU1ELE9BQU87QUFDbEIsZUFBUSxHQUFSLENBQVksS0FBSyxLQUFMLEVBQVksS0FBSyxHQUFMLEVBQXhCLHVEQUNzRCxlQUFLLE9BQUwsQ0FBYSxLQUFLLFNBQUwsT0FEbkUsRUFEa0I7QUFHbEIsdUJBQUksUUFBSixDQUFhLEtBQUssY0FBTCxFQUNYLEVBQUMsU0FBUyxNQUFULEVBQWlCLFVBQVUsS0FBSyxLQUFMLEVBQVksV0FBVyxLQUFLLFNBQUwsRUFEckQsRUFIa0I7Ozs7bUNBT04sU0FBUzs7O0FBQ3JCLGtDQW5DaUIsMkNBbUNqQixDQUFvQixLQUFwQixDQUEwQixJQUExQixFQUFnQyxTQUFoQyxFQURxQjtBQUVyQixjQUFPLElBQVAsQ0FBWSxPQUFaLEVBQXFCLE9BQXJCLENBQTZCLFVBQUMsSUFBRCxFQUFVO0FBQ3JDLGFBQUksU0FBUyxRQUFRLElBQVIsQ0FBVCxDQURpQztBQUVyQyxpQkFBUSxJQUFSO0FBQ0UsZ0JBQUssY0FBTCxDQURGO0FBRUUsZ0JBQUssV0FBTDtBQUNFLG9CQUFPLFNBQVAsQ0FBaUIsT0FBSyxRQUFMLENBQWMsSUFBZCxRQUFqQixFQURGO0FBRUUsbUJBRkY7QUFGRixVQUZxQztRQUFWLENBQTdCLENBRnFCO0FBV3JCLFlBQUssZUFBTCxHQVhxQjs7Ozs4QkFjZCxhQUFhO0FBQ3BCLHVCQUFJLFVBQUosQ0FBZSxHQUFmLENBQW1CLEdBQW5CLENBQXVCLFdBQXZCLEVBQW9DLEtBQXBDLEVBQTJDLEtBQUssYUFBTCxDQUEzQyxDQURvQjs7Ozt1Q0FJSjtBQUNoQix1QkFBSSxFQUFKLENBQU8sd0JBQUM7YUFDRjs7Ozs7O3dCQUFjLEtBQUssYUFBTDs7O0FBQWQ7Ozt1QkFDRyxnQkFBSSxNQUFKLEtBQWUsS0FBZjs7Ozs7QUFDTCx5QkFBUSxHQUFSLENBQVksS0FBSyxLQUFMLEVBQVksS0FBSyxHQUFMLEVBQXhCLDZDQUM0QyxlQUFLLE9BQUwsQ0FBYSxLQUFiLE9BRDVDO0FBRUEsc0JBQUssUUFBTCxDQUFjLEtBQWQ7O3dCQUNjLEtBQUssYUFBTDs7O0FBQWQ7Ozs7Ozs7Ozs7UUFOSSxDQUFELENBUUosSUFSSSxDQVFDLElBUkQsQ0FBUCxFQURnQjs7Ozs7Ozs7OzhCQWVULE9BQU87QUFDZCxXQUFJLFNBQVMsTUFBTSxNQUFOLENBREM7QUFFZCxXQUFJLENBQUMsTUFBTSxPQUFOLEVBQWU7QUFBRSxnQkFBRjtRQUFwQjtBQUNBLFdBQUksQ0FBQyxLQUFLLGNBQUwsQ0FBb0IsTUFBTSxPQUFOLENBQXJCLEVBQXFDO0FBQUUsZ0JBQUY7UUFBekM7NEJBQ2dDLE1BQU0sT0FBTixDQUpsQjtXQUlSLCtCQUpRO1dBSUEsMkJBSkE7V0FJTSxpQ0FKTjs7QUFLZCxXQUFJLENBQUMsS0FBSyxTQUFMLENBQWUsTUFBZixDQUFELEVBQXlCO0FBQzNCLGNBQUssU0FBTCxDQUFlLE1BQWYsSUFBeUIsZUEzRXRCLE9BMkVzQixDQUFtQixNQUFuQixDQUF6QixDQUQyQjtRQUE3QjtBQUdBLFlBQUssU0FBTCxDQUFlLE1BQWYsRUFBdUIsSUFBdkIsQ0FBNEIsTUFBNUIsRUFBb0MsSUFBcEMsRUFBMEMsT0FBMUMsRUFSYzs7OztvQ0FXRCxLQUFLO0FBQ2xCLFdBQUksQ0FBQyxJQUFJLE1BQUosSUFBYyxDQUFDLElBQUksSUFBSixJQUFZLENBQUMsSUFBSSxPQUFKLEVBQWE7QUFDNUMsZ0JBQU8sS0FBUCxDQUQ0QztRQUE5QyxNQUVPO0FBQ0wsZ0JBQU8sSUFBUCxDQURLO1FBRlA7Ozs7b0NBT2EsT0FBTztBQUNwQixlQUFPLEtBQVA7QUFDRSxjQUFLLFlBQUw7QUFDRSxnQkFBSywwQkFBTCxHQURGO0FBRUUsaUJBRkY7QUFERixjQUlPLGFBQUw7QUFDRSxnQkFBSywyQkFBTCxHQURGO0FBRUUsaUJBRkY7QUFKRixRQURvQjs7OztpREFXTTtBQUMxQixZQUFLLFdBQUwsQ0FBaUIsS0FBSyxVQUFMLENBQWpCLENBRDBCOzs7O2tEQUlDO0FBQzNCLFlBQUssV0FBTCxDQUFpQixLQUFLLFdBQUwsQ0FBakIsQ0FEMkI7Ozs7bURBSUM7QUFDNUIsWUFBSyxXQUFMLENBQWlCLEtBQUssWUFBTCxDQUFqQixDQUQ0Qjs7OztVQXpHWCIsImZpbGUiOiJiZWhvbGRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKVxuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuXG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRleHBvcnRzOiB7fSxcbiBcdFx0XHRpZDogbW9kdWxlSWQsXG4gXHRcdFx0bG9hZGVkOiBmYWxzZVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogd2VicGFjay9ib290c3RyYXAgNTU5N2ViNWIxYTA4NjJmZmE1ZDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxucmVxdWlyZShcImNvcmUtanMvc2hpbVwiKTtcblxucmVxdWlyZShcImJhYmVsLXJlZ2VuZXJhdG9yLXJ1bnRpbWVcIik7XG5cbmlmIChnbG9iYWwuX2JhYmVsUG9seWZpbGwpIHtcbiAgdGhyb3cgbmV3IEVycm9yKFwib25seSBvbmUgaW5zdGFuY2Ugb2YgYmFiZWwtcG9seWZpbGwgaXMgYWxsb3dlZFwiKTtcbn1cbmdsb2JhbC5fYmFiZWxQb2x5ZmlsbCA9IHRydWU7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvbGliL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwicmVxdWlyZSgnLi9tb2R1bGVzL2VzNScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zeW1ib2wnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5wcmV2ZW50LWV4dGVuc2lvbnMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmlzLWZyb3plbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMtc2VhbGVkJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1leHRlbnNpYmxlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmtleXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5mdW5jdGlvbi5oYXMtaW5zdGFuY2UnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLmNvbnN0cnVjdG9yJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5lcHNpbG9uJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5pcy1maW5pdGUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLmlzLWludGVnZXInKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLmlzLW5hbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtc2FmZS1pbnRlZ2VyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5tYXgtc2FmZS1pbnRlZ2VyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5taW4tc2FmZS1pbnRlZ2VyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1mbG9hdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtaW50Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguYWNvc2gnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5hc2luaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmF0YW5oJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguY2JydCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmNsejMyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguY29zaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmV4cG0xJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguZnJvdW5kJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguaHlwb3QnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5pbXVsJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGgubG9nMTAnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5sb2cxcCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmxvZzInKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5zaWduJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguc2luaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLnRhbmgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC50cnVuYycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuZnJvbS1jb2RlLXBvaW50Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5yYXcnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLnRyaW0nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5jb2RlLXBvaW50LWF0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5lbmRzLXdpdGgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5yZXBlYXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLnN0YXJ0cy13aXRoJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmZyb20nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkub2YnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuc3BlY2llcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5jb3B5LXdpdGhpbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5maWxsJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmZpbmQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuZmluZC1pbmRleCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWdleHAuY29uc3RydWN0b3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWdleHAuc2VhcmNoJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hcCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zZXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYud2Vhay1tYXAnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYud2Vhay1zZXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5hcHBseScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmNvbnN0cnVjdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlZmluZS1wcm9wZXJ0eScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlbGV0ZS1wcm9wZXJ0eScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmVudW1lcmF0ZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC1wcm90b3R5cGUtb2YnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5oYXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5pcy1leHRlbnNpYmxlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3Qub3duLWtleXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5wcmV2ZW50LWV4dGVuc2lvbnMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5zZXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LmFycmF5LmluY2x1ZGVzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnN0cmluZy5hdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLWxlZnQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuc3RyaW5nLnBhZC1yaWdodCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zdHJpbmcudHJpbS1sZWZ0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnN0cmluZy50cmltLXJpZ2h0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnJlZ2V4cC5lc2NhcGUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYmplY3QuZW50cmllcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5tYXAudG8tanNvbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zZXQudG8tanNvbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2pzLmFycmF5LnN0YXRpY3MnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy93ZWIudGltZXJzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvd2ViLmltbWVkaWF0ZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9tb2R1bGVzLyQuY29yZScpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9zaGltLmpzXG4gKiogbW9kdWxlIGlkID0gMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCAkZXhwb3J0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIERFU0NSSVBUT1JTICAgICAgID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJylcbiAgLCBjcmVhdGVEZXNjICAgICAgICA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJylcbiAgLCBodG1sICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5kb20tY3JlYXRlJylcbiAgLCBoYXMgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIGNvZiAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmNvZicpXG4gICwgaW52b2tlICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaW52b2tlJylcbiAgLCBmYWlscyAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5mYWlscycpXG4gICwgYW5PYmplY3QgICAgICAgICAgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gICAgICAgICA9IHJlcXVpcmUoJy4vJC5hLWZ1bmN0aW9uJylcbiAgLCBpc09iamVjdCAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIHRvT2JqZWN0ICAgICAgICAgID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgICAgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpXG4gICwgdG9JbnRlZ2VyICAgICAgICAgPSByZXF1aXJlKCcuLyQudG8taW50ZWdlcicpXG4gICwgdG9JbmRleCAgICAgICAgICAgPSByZXF1aXJlKCcuLyQudG8taW5kZXgnKVxuICAsIHRvTGVuZ3RoICAgICAgICAgID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpXG4gICwgSU9iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaW9iamVjdCcpXG4gICwgSUVfUFJPVE8gICAgICAgICAgPSByZXF1aXJlKCcuLyQudWlkJykoJ19fcHJvdG9fXycpXG4gICwgY3JlYXRlQXJyYXlNZXRob2QgPSByZXF1aXJlKCcuLyQuYXJyYXktbWV0aG9kcycpXG4gICwgYXJyYXlJbmRleE9mICAgICAgPSByZXF1aXJlKCcuLyQuYXJyYXktaW5jbHVkZXMnKShmYWxzZSlcbiAgLCBPYmplY3RQcm90byAgICAgICA9IE9iamVjdC5wcm90b3R5cGVcbiAgLCBBcnJheVByb3RvICAgICAgICA9IEFycmF5LnByb3RvdHlwZVxuICAsIGFycmF5U2xpY2UgICAgICAgID0gQXJyYXlQcm90by5zbGljZVxuICAsIGFycmF5Sm9pbiAgICAgICAgID0gQXJyYXlQcm90by5qb2luXG4gICwgZGVmaW5lUHJvcGVydHkgICAgPSAkLnNldERlc2NcbiAgLCBnZXRPd25EZXNjcmlwdG9yICA9ICQuZ2V0RGVzY1xuICAsIGRlZmluZVByb3BlcnRpZXMgID0gJC5zZXREZXNjc1xuICAsIGZhY3RvcmllcyAgICAgICAgID0ge31cbiAgLCBJRThfRE9NX0RFRklORTtcblxuaWYoIURFU0NSSVBUT1JTKXtcbiAgSUU4X0RPTV9ERUZJTkUgPSAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkoY2VsKCdkaXYnKSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbiAgfSk7XG4gICQuc2V0RGVzYyA9IGZ1bmN0aW9uKE8sIFAsIEF0dHJpYnV0ZXMpe1xuICAgIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgICByZXR1cm4gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcyk7XG4gICAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICAgIGlmKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcyl0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICAgIGlmKCd2YWx1ZScgaW4gQXR0cmlidXRlcylhbk9iamVjdChPKVtQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gICAgcmV0dXJuIE87XG4gIH07XG4gICQuZ2V0RGVzYyA9IGZ1bmN0aW9uKE8sIFApe1xuICAgIGlmKElFOF9ET01fREVGSU5FKXRyeSB7XG4gICAgICByZXR1cm4gZ2V0T3duRGVzY3JpcHRvcihPLCBQKTtcbiAgICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gICAgaWYoaGFzKE8sIFApKXJldHVybiBjcmVhdGVEZXNjKCFPYmplY3RQcm90by5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKE8sIFApLCBPW1BdKTtcbiAgfTtcbiAgJC5zZXREZXNjcyA9IGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbihPLCBQcm9wZXJ0aWVzKXtcbiAgICBhbk9iamVjdChPKTtcbiAgICB2YXIga2V5cyAgID0gJC5nZXRLZXlzKFByb3BlcnRpZXMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGkgPSAwXG4gICAgICAsIFA7XG4gICAgd2hpbGUobGVuZ3RoID4gaSkkLnNldERlc2MoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gICAgcmV0dXJuIE87XG4gIH07XG59XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFERVNDUklQVE9SUywgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjYgLyAxNS4yLjMuMyBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJC5nZXREZXNjLFxuICAvLyAxOS4xLjIuNCAvIDE1LjIuMy42IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJC5zZXREZXNjLFxuICAvLyAxOS4xLjIuMyAvIDE1LjIuMy43IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6IGRlZmluZVByb3BlcnRpZXNcbn0pO1xuXG4gIC8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbnZhciBrZXlzMSA9ICgnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSwnICtcbiAgICAgICAgICAgICd0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJykuc3BsaXQoJywnKVxuICAvLyBBZGRpdGlvbmFsIGtleXMgZm9yIGdldE93blByb3BlcnR5TmFtZXNcbiAgLCBrZXlzMiA9IGtleXMxLmNvbmNhdCgnbGVuZ3RoJywgJ3Byb3RvdHlwZScpXG4gICwga2V5c0xlbjEgPSBrZXlzMS5sZW5ndGg7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uKCl7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSBjZWwoJ2lmcmFtZScpXG4gICAgLCBpICAgICAgPSBrZXlzTGVuMVxuICAgICwgZ3QgICAgID0gJz4nXG4gICAgLCBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIGh0bWwuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUoJzxzY3JpcHQ+ZG9jdW1lbnQuRj1PYmplY3Q8L3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZShpLS0pZGVsZXRlIGNyZWF0ZURpY3QucHJvdG90eXBlW2tleXMxW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG52YXIgY3JlYXRlR2V0S2V5cyA9IGZ1bmN0aW9uKG5hbWVzLCBsZW5ndGgpe1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAgICwgaSAgICAgID0gMFxuICAgICAgLCByZXN1bHQgPSBbXVxuICAgICAgLCBrZXk7XG4gICAgZm9yKGtleSBpbiBPKWlmKGtleSAhPSBJRV9QUk9UTyloYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAgIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgICB3aGlsZShsZW5ndGggPiBpKWlmKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSl7XG4gICAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uKCl7fTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxuICBnZXRQcm90b3R5cGVPZjogJC5nZXRQcm90byA9ICQuZ2V0UHJvdG8gfHwgZnVuY3Rpb24oTyl7XG4gICAgTyA9IHRvT2JqZWN0KE8pO1xuICAgIGlmKGhhcyhPLCBJRV9QUk9UTykpcmV0dXJuIE9bSUVfUFJPVE9dO1xuICAgIGlmKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3Ipe1xuICAgICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICAgIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG4gIH0sXG4gIC8vIDE5LjEuMi43IC8gMTUuMi4zLjQgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJC5nZXROYW1lcyA9ICQuZ2V0TmFtZXMgfHwgY3JlYXRlR2V0S2V5cyhrZXlzMiwga2V5czIubGVuZ3RoLCB0cnVlKSxcbiAgLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJC5jcmVhdGUgPSAkLmNyZWF0ZSB8fCBmdW5jdGlvbihPLCAvKj8qL1Byb3BlcnRpZXMpe1xuICAgIHZhciByZXN1bHQ7XG4gICAgaWYoTyAhPT0gbnVsbCl7XG4gICAgICBFbXB0eS5wcm90b3R5cGUgPSBhbk9iamVjdChPKTtcbiAgICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgICAgRW1wdHkucHJvdG90eXBlID0gbnVsbDtcbiAgICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2Ygc2hpbVxuICAgICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gICAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZGVmaW5lUHJvcGVydGllcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xuICB9LFxuICAvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbiAga2V5czogJC5nZXRLZXlzID0gJC5nZXRLZXlzIHx8IGNyZWF0ZUdldEtleXMoa2V5czEsIGtleXNMZW4xLCBmYWxzZSlcbn0pO1xuXG52YXIgY29uc3RydWN0ID0gZnVuY3Rpb24oRiwgbGVuLCBhcmdzKXtcbiAgaWYoIShsZW4gaW4gZmFjdG9yaWVzKSl7XG4gICAgZm9yKHZhciBuID0gW10sIGkgPSAwOyBpIDwgbGVuOyBpKyspbltpXSA9ICdhWycgKyBpICsgJ10nO1xuICAgIGZhY3Rvcmllc1tsZW5dID0gRnVuY3Rpb24oJ0YsYScsICdyZXR1cm4gbmV3IEYoJyArIG4uam9pbignLCcpICsgJyknKTtcbiAgfVxuICByZXR1cm4gZmFjdG9yaWVzW2xlbl0oRiwgYXJncyk7XG59O1xuXG4vLyAxOS4yLjMuMiAvIDE1LjMuNC41IEZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kKHRoaXNBcmcsIGFyZ3MuLi4pXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0Z1bmN0aW9uJywge1xuICBiaW5kOiBmdW5jdGlvbiBiaW5kKHRoYXQgLyosIGFyZ3MuLi4gKi8pe1xuICAgIHZhciBmbiAgICAgICA9IGFGdW5jdGlvbih0aGlzKVxuICAgICAgLCBwYXJ0QXJncyA9IGFycmF5U2xpY2UuY2FsbChhcmd1bWVudHMsIDEpO1xuICAgIHZhciBib3VuZCA9IGZ1bmN0aW9uKC8qIGFyZ3MuLi4gKi8pe1xuICAgICAgdmFyIGFyZ3MgPSBwYXJ0QXJncy5jb25jYXQoYXJyYXlTbGljZS5jYWxsKGFyZ3VtZW50cykpO1xuICAgICAgcmV0dXJuIHRoaXMgaW5zdGFuY2VvZiBib3VuZCA/IGNvbnN0cnVjdChmbiwgYXJncy5sZW5ndGgsIGFyZ3MpIDogaW52b2tlKGZuLCBhcmdzLCB0aGF0KTtcbiAgICB9O1xuICAgIGlmKGlzT2JqZWN0KGZuLnByb3RvdHlwZSkpYm91bmQucHJvdG90eXBlID0gZm4ucHJvdG90eXBlO1xuICAgIHJldHVybiBib3VuZDtcbiAgfVxufSk7XG5cbi8vIGZhbGxiYWNrIGZvciBub3QgYXJyYXktbGlrZSBFUzMgc3RyaW5ncyBhbmQgRE9NIG9iamVjdHNcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXtcbiAgaWYoaHRtbClhcnJheVNsaWNlLmNhbGwoaHRtbCk7XG59KSwgJ0FycmF5Jywge1xuICBzbGljZTogZnVuY3Rpb24oYmVnaW4sIGVuZCl7XG4gICAgdmFyIGxlbiAgID0gdG9MZW5ndGgodGhpcy5sZW5ndGgpXG4gICAgICAsIGtsYXNzID0gY29mKHRoaXMpO1xuICAgIGVuZCA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogZW5kO1xuICAgIGlmKGtsYXNzID09ICdBcnJheScpcmV0dXJuIGFycmF5U2xpY2UuY2FsbCh0aGlzLCBiZWdpbiwgZW5kKTtcbiAgICB2YXIgc3RhcnQgID0gdG9JbmRleChiZWdpbiwgbGVuKVxuICAgICAgLCB1cFRvICAgPSB0b0luZGV4KGVuZCwgbGVuKVxuICAgICAgLCBzaXplICAgPSB0b0xlbmd0aCh1cFRvIC0gc3RhcnQpXG4gICAgICAsIGNsb25lZCA9IEFycmF5KHNpemUpXG4gICAgICAsIGkgICAgICA9IDA7XG4gICAgZm9yKDsgaSA8IHNpemU7IGkrKyljbG9uZWRbaV0gPSBrbGFzcyA9PSAnU3RyaW5nJ1xuICAgICAgPyB0aGlzLmNoYXJBdChzdGFydCArIGkpXG4gICAgICA6IHRoaXNbc3RhcnQgKyBpXTtcbiAgICByZXR1cm4gY2xvbmVkO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKElPYmplY3QgIT0gT2JqZWN0KSwgJ0FycmF5Jywge1xuICBqb2luOiBmdW5jdGlvbiBqb2luKHNlcGFyYXRvcil7XG4gICAgcmV0dXJuIGFycmF5Sm9pbi5jYWxsKElPYmplY3QodGhpcyksIHNlcGFyYXRvciA9PT0gdW5kZWZpbmVkID8gJywnIDogc2VwYXJhdG9yKTtcbiAgfVxufSk7XG5cbi8vIDIyLjEuMi4yIC8gMTUuNC4zLjIgQXJyYXkuaXNBcnJheShhcmcpXG4kZXhwb3J0KCRleHBvcnQuUywgJ0FycmF5Jywge2lzQXJyYXk6IHJlcXVpcmUoJy4vJC5pcy1hcnJheScpfSk7XG5cbnZhciBjcmVhdGVBcnJheVJlZHVjZSA9IGZ1bmN0aW9uKGlzUmlnaHQpe1xuICByZXR1cm4gZnVuY3Rpb24oY2FsbGJhY2tmbiwgbWVtbyl7XG4gICAgYUZ1bmN0aW9uKGNhbGxiYWNrZm4pO1xuICAgIHZhciBPICAgICAgPSBJT2JqZWN0KHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSBpc1JpZ2h0ID8gbGVuZ3RoIC0gMSA6IDBcbiAgICAgICwgaSAgICAgID0gaXNSaWdodCA/IC0xIDogMTtcbiAgICBpZihhcmd1bWVudHMubGVuZ3RoIDwgMilmb3IoOzspe1xuICAgICAgaWYoaW5kZXggaW4gTyl7XG4gICAgICAgIG1lbW8gPSBPW2luZGV4XTtcbiAgICAgICAgaW5kZXggKz0gaTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpbmRleCArPSBpO1xuICAgICAgaWYoaXNSaWdodCA/IGluZGV4IDwgMCA6IGxlbmd0aCA8PSBpbmRleCl7XG4gICAgICAgIHRocm93IFR5cGVFcnJvcignUmVkdWNlIG9mIGVtcHR5IGFycmF5IHdpdGggbm8gaW5pdGlhbCB2YWx1ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICBmb3IoO2lzUmlnaHQgPyBpbmRleCA+PSAwIDogbGVuZ3RoID4gaW5kZXg7IGluZGV4ICs9IGkpaWYoaW5kZXggaW4gTyl7XG4gICAgICBtZW1vID0gY2FsbGJhY2tmbihtZW1vLCBPW2luZGV4XSwgaW5kZXgsIHRoaXMpO1xuICAgIH1cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn07XG5cbnZhciBtZXRob2RpemUgPSBmdW5jdGlvbigkZm4pe1xuICByZXR1cm4gZnVuY3Rpb24oYXJnMS8qLCBhcmcyID0gdW5kZWZpbmVkICovKXtcbiAgICByZXR1cm4gJGZuKHRoaXMsIGFyZzEsIGFyZ3VtZW50c1sxXSk7XG4gIH07XG59O1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjMuMTAgLyAxNS40LjQuMTggQXJyYXkucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcbiAgZm9yRWFjaDogJC5lYWNoID0gJC5lYWNoIHx8IG1ldGhvZGl6ZShjcmVhdGVBcnJheU1ldGhvZCgwKSksXG4gIC8vIDIyLjEuMy4xNSAvIDE1LjQuNC4xOSBBcnJheS5wcm90b3R5cGUubWFwKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gIG1hcDogbWV0aG9kaXplKGNyZWF0ZUFycmF5TWV0aG9kKDEpKSxcbiAgLy8gMjIuMS4zLjcgLyAxNS40LjQuMjAgQXJyYXkucHJvdG90eXBlLmZpbHRlcihjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICBmaWx0ZXI6IG1ldGhvZGl6ZShjcmVhdGVBcnJheU1ldGhvZCgyKSksXG4gIC8vIDIyLjEuMy4yMyAvIDE1LjQuNC4xNyBBcnJheS5wcm90b3R5cGUuc29tZShjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICBzb21lOiBtZXRob2RpemUoY3JlYXRlQXJyYXlNZXRob2QoMykpLFxuICAvLyAyMi4xLjMuNSAvIDE1LjQuNC4xNiBBcnJheS5wcm90b3R5cGUuZXZlcnkoY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcbiAgZXZlcnk6IG1ldGhvZGl6ZShjcmVhdGVBcnJheU1ldGhvZCg0KSksXG4gIC8vIDIyLjEuMy4xOCAvIDE1LjQuNC4yMSBBcnJheS5wcm90b3R5cGUucmVkdWNlKGNhbGxiYWNrZm4gWywgaW5pdGlhbFZhbHVlXSlcbiAgcmVkdWNlOiBjcmVhdGVBcnJheVJlZHVjZShmYWxzZSksXG4gIC8vIDIyLjEuMy4xOSAvIDE1LjQuNC4yMiBBcnJheS5wcm90b3R5cGUucmVkdWNlUmlnaHQoY2FsbGJhY2tmbiBbLCBpbml0aWFsVmFsdWVdKVxuICByZWR1Y2VSaWdodDogY3JlYXRlQXJyYXlSZWR1Y2UodHJ1ZSksXG4gIC8vIDIyLjEuMy4xMSAvIDE1LjQuNC4xNCBBcnJheS5wcm90b3R5cGUuaW5kZXhPZihzZWFyY2hFbGVtZW50IFssIGZyb21JbmRleF0pXG4gIGluZGV4T2Y6IG1ldGhvZGl6ZShhcnJheUluZGV4T2YpLFxuICAvLyAyMi4xLjMuMTQgLyAxNS40LjQuMTUgQXJyYXkucHJvdG90eXBlLmxhc3RJbmRleE9mKHNlYXJjaEVsZW1lbnQgWywgZnJvbUluZGV4XSlcbiAgbGFzdEluZGV4T2Y6IGZ1bmN0aW9uKGVsLCBmcm9tSW5kZXggLyogPSBAWyotMV0gKi8pe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QodGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IGxlbmd0aCAtIDE7XG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA+IDEpaW5kZXggPSBNYXRoLm1pbihpbmRleCwgdG9JbnRlZ2VyKGZyb21JbmRleCkpO1xuICAgIGlmKGluZGV4IDwgMClpbmRleCA9IHRvTGVuZ3RoKGxlbmd0aCArIGluZGV4KTtcbiAgICBmb3IoO2luZGV4ID49IDA7IGluZGV4LS0paWYoaW5kZXggaW4gTylpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIGluZGV4O1xuICAgIHJldHVybiAtMTtcbiAgfVxufSk7XG5cbi8vIDIwLjMuMy4xIC8gMTUuOS40LjQgRGF0ZS5ub3coKVxuJGV4cG9ydCgkZXhwb3J0LlMsICdEYXRlJywge25vdzogZnVuY3Rpb24oKXsgcmV0dXJuICtuZXcgRGF0ZTsgfX0pO1xuXG52YXIgbHogPSBmdW5jdGlvbihudW0pe1xuICByZXR1cm4gbnVtID4gOSA/IG51bSA6ICcwJyArIG51bTtcbn07XG5cbi8vIDIwLjMuNC4zNiAvIDE1LjkuNS40MyBEYXRlLnByb3RvdHlwZS50b0lTT1N0cmluZygpXG4vLyBQaGFudG9tSlMgLyBvbGQgV2ViS2l0IGhhcyBhIGJyb2tlbiBpbXBsZW1lbnRhdGlvbnNcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBuZXcgRGF0ZSgtNWUxMyAtIDEpLnRvSVNPU3RyaW5nKCkgIT0gJzAzODUtMDctMjVUMDc6MDY6MzkuOTk5Wic7XG59KSB8fCAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgbmV3IERhdGUoTmFOKS50b0lTT1N0cmluZygpO1xufSkpLCAnRGF0ZScsIHtcbiAgdG9JU09TdHJpbmc6IGZ1bmN0aW9uIHRvSVNPU3RyaW5nKCl7XG4gICAgaWYoIWlzRmluaXRlKHRoaXMpKXRocm93IFJhbmdlRXJyb3IoJ0ludmFsaWQgdGltZSB2YWx1ZScpO1xuICAgIHZhciBkID0gdGhpc1xuICAgICAgLCB5ID0gZC5nZXRVVENGdWxsWWVhcigpXG4gICAgICAsIG0gPSBkLmdldFVUQ01pbGxpc2Vjb25kcygpXG4gICAgICAsIHMgPSB5IDwgMCA/ICctJyA6IHkgPiA5OTk5ID8gJysnIDogJyc7XG4gICAgcmV0dXJuIHMgKyAoJzAwMDAwJyArIE1hdGguYWJzKHkpKS5zbGljZShzID8gLTYgOiAtNCkgK1xuICAgICAgJy0nICsgbHooZC5nZXRVVENNb250aCgpICsgMSkgKyAnLScgKyBseihkLmdldFVUQ0RhdGUoKSkgK1xuICAgICAgJ1QnICsgbHooZC5nZXRVVENIb3VycygpKSArICc6JyArIGx6KGQuZ2V0VVRDTWludXRlcygpKSArXG4gICAgICAnOicgKyBseihkLmdldFVUQ1NlY29uZHMoKSkgKyAnLicgKyAobSA+IDk5ID8gbSA6ICcwJyArIGx6KG0pKSArICdaJztcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM1LmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICRPYmplY3QgPSBPYmplY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgY3JlYXRlOiAgICAgJE9iamVjdC5jcmVhdGUsXG4gIGdldFByb3RvOiAgICRPYmplY3QuZ2V0UHJvdG90eXBlT2YsXG4gIGlzRW51bTogICAgIHt9LnByb3BlcnR5SXNFbnVtZXJhYmxlLFxuICBnZXREZXNjOiAgICAkT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgc2V0RGVzYzogICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0eSxcbiAgc2V0RGVzY3M6ICAgJE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzLFxuICBnZXRLZXlzOiAgICAkT2JqZWN0LmtleXMsXG4gIGdldE5hbWVzOiAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgZ2V0U3ltYm9sczogJE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMsXG4gIGVhY2g6ICAgICAgIFtdLmZvckVhY2hcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5qc1xuICoqIG1vZHVsZSBpZCA9IDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBjb3JlICAgICAgPSByZXF1aXJlKCcuLyQuY29yZScpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi8kLmhpZGUnKVxuICAsIHJlZGVmaW5lICA9IHJlcXVpcmUoJy4vJC5yZWRlZmluZScpXG4gICwgY3R4ICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24odHlwZSwgbmFtZSwgc291cmNlKXtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkZcbiAgICAsIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0LkdcbiAgICAsIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlNcbiAgICAsIElTX1BST1RPICA9IHR5cGUgJiAkZXhwb3J0LlBcbiAgICAsIElTX0JJTkQgICA9IHR5cGUgJiAkZXhwb3J0LkJcbiAgICAsIHRhcmdldCAgICA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXVxuICAgICwgZXhwb3J0cyAgID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSlcbiAgICAsIGV4cFByb3RvICA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pXG4gICAgLCBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmKElTX0dMT0JBTClzb3VyY2UgPSBuYW1lO1xuICBmb3Ioa2V5IGluIHNvdXJjZSl7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYga2V5IGluIHRhcmdldDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYodGFyZ2V0ICYmICFvd24pcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYoZXhwb3J0c1trZXldICE9IG91dCloaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZihJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dClleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7IC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAvLyB3cmFwXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5leHBvcnQuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5nbG9iYWwuanNcbiAqKiBtb2R1bGUgaWQgPSA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0ge3ZlcnNpb246ICcxLjIuNid9O1xuaWYodHlwZW9mIF9fZSA9PSAnbnVtYmVyJylfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5jb3JlLmpzXG4gKiogbW9kdWxlIGlkID0gN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIHJldHVybiAkLnNldERlc2Mob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmhpZGUuanNcbiAqKiBtb2R1bGUgaWQgPSA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGJpdG1hcCwgdmFsdWUpe1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGUgIDogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGUgICAgOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlICAgICAgIDogdmFsdWVcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5wcm9wZXJ0eS1kZXNjLmpzXG4gKiogbW9kdWxlIGlkID0gOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7Z2V0OiBmdW5jdGlvbigpeyByZXR1cm4gNzsgfX0pLmEgIT0gNztcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZGVzY3JpcHRvcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5mYWlscy5qc1xuICoqIG1vZHVsZSBpZCA9IDExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZ1xuLy8gZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG52YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgaGlkZSAgICAgID0gcmVxdWlyZSgnLi8kLmhpZGUnKVxuICAsIFNSQyAgICAgICA9IHJlcXVpcmUoJy4vJC51aWQnKSgnc3JjJylcbiAgLCBUT19TVFJJTkcgPSAndG9TdHJpbmcnXG4gICwgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXVxuICAsIFRQTCAgICAgICA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi8kLmNvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywga2V5LCB2YWwsIHNhZmUpe1xuICBpZih0eXBlb2YgdmFsID09ICdmdW5jdGlvbicpe1xuICAgIHZhbC5oYXNPd25Qcm9wZXJ0eShTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgICB2YWwuaGFzT3duUHJvcGVydHkoJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICB9XG4gIGlmKE8gPT09IGdsb2JhbCl7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGlmKCFzYWZlKWRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnJlZGVmaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpZCA9IDBcbiAgLCBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQudWlkLmpzXG4gKiogbW9kdWxlIGlkID0gMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vJC5hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCB0aGF0LCBsZW5ndGgpe1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZih0aGF0ID09PSB1bmRlZmluZWQpcmV0dXJuIGZuO1xuICBzd2l0Y2gobGVuZ3RoKXtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYSwgYil7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEsIGIsIGMpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY3R4LmpzXG4gKiogbW9kdWxlIGlkID0gMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZih0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYS1mdW5jdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKS5kb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5odG1sLmpzXG4gKiogbW9kdWxlIGlkID0gMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGRvY3VtZW50ID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLmRvY3VtZW50XG4gIC8vIGluIG9sZCBJRSB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0J1xuICAsIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZG9tLWNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5pcy1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBrZXkpe1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5oYXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmNvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIGFyZ3MsIHRoYXQpe1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaChhcmdzLmxlbmd0aCl7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuICAgICAgICAgICAgICBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5pbnZva2UuanNcbiAqKiBtb2R1bGUgaWQgPSAyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKCFpc09iamVjdChpdCkpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYW4tb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC50by1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCA9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZGVmaW5lZC5qc1xuICoqIG1vZHVsZSBpZCA9IDI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlvYmplY3QnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC50by1pb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlvYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCAgPSBNYXRoLmNlaWxcbiAgLCBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQudG8taW50ZWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi8kLnRvLWludGVnZXInKVxuICAsIG1heCAgICAgICA9IE1hdGgubWF4XG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGluZGV4LCBsZW5ndGgpe1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnRvLWluZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vJC50by1pbnRlZ2VyJylcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnRvLWxlbmd0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAwIC0+IEFycmF5I2ZvckVhY2hcbi8vIDEgLT4gQXJyYXkjbWFwXG4vLyAyIC0+IEFycmF5I2ZpbHRlclxuLy8gMyAtPiBBcnJheSNzb21lXG4vLyA0IC0+IEFycmF5I2V2ZXJ5XG4vLyA1IC0+IEFycmF5I2ZpbmRcbi8vIDYgLT4gQXJyYXkjZmluZEluZGV4XG52YXIgY3R4ICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vJC5pb2JqZWN0JylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKVxuICAsIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpXG4gICwgYXNjICAgICAgPSByZXF1aXJlKCcuLyQuYXJyYXktc3BlY2llcy1jcmVhdGUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVFlQRSl7XG4gIHZhciBJU19NQVAgICAgICAgID0gVFlQRSA9PSAxXG4gICAgLCBJU19GSUxURVIgICAgID0gVFlQRSA9PSAyXG4gICAgLCBJU19TT01FICAgICAgID0gVFlQRSA9PSAzXG4gICAgLCBJU19FVkVSWSAgICAgID0gVFlQRSA9PSA0XG4gICAgLCBJU19GSU5EX0lOREVYID0gVFlQRSA9PSA2XG4gICAgLCBOT19IT0xFUyAgICAgID0gVFlQRSA9PSA1IHx8IElTX0ZJTkRfSU5ERVg7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgY2FsbGJhY2tmbiwgdGhhdCl7XG4gICAgdmFyIE8gICAgICA9IHRvT2JqZWN0KCR0aGlzKVxuICAgICAgLCBzZWxmICAgPSBJT2JqZWN0KE8pXG4gICAgICAsIGYgICAgICA9IGN0eChjYWxsYmFja2ZuLCB0aGF0LCAzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChzZWxmLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gMFxuICAgICAgLCByZXN1bHQgPSBJU19NQVAgPyBhc2MoJHRoaXMsIGxlbmd0aCkgOiBJU19GSUxURVIgPyBhc2MoJHRoaXMsIDApIDogdW5kZWZpbmVkXG4gICAgICAsIHZhbCwgcmVzO1xuICAgIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoTk9fSE9MRVMgfHwgaW5kZXggaW4gc2VsZil7XG4gICAgICB2YWwgPSBzZWxmW2luZGV4XTtcbiAgICAgIHJlcyA9IGYodmFsLCBpbmRleCwgTyk7XG4gICAgICBpZihUWVBFKXtcbiAgICAgICAgaWYoSVNfTUFQKXJlc3VsdFtpbmRleF0gPSByZXM7ICAgICAgICAgICAgLy8gbWFwXG4gICAgICAgIGVsc2UgaWYocmVzKXN3aXRjaChUWVBFKXtcbiAgICAgICAgICBjYXNlIDM6IHJldHVybiB0cnVlOyAgICAgICAgICAgICAgICAgICAgLy8gc29tZVxuICAgICAgICAgIGNhc2UgNTogcmV0dXJuIHZhbDsgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kXG4gICAgICAgICAgY2FzZSA2OiByZXR1cm4gaW5kZXg7ICAgICAgICAgICAgICAgICAgIC8vIGZpbmRJbmRleFxuICAgICAgICAgIGNhc2UgMjogcmVzdWx0LnB1c2godmFsKTsgICAgICAgICAgICAgICAvLyBmaWx0ZXJcbiAgICAgICAgfSBlbHNlIGlmKElTX0VWRVJZKXJldHVybiBmYWxzZTsgICAgICAgICAgLy8gZXZlcnlcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIElTX0ZJTkRfSU5ERVggPyAtMSA6IElTX1NPTUUgfHwgSVNfRVZFUlkgPyBJU19FVkVSWSA6IHJlc3VsdDtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5hcnJheS1tZXRob2RzLmpzXG4gKiogbW9kdWxlIGlkID0gMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDkuNC4yLjMgQXJyYXlTcGVjaWVzQ3JlYXRlKG9yaWdpbmFsQXJyYXksIGxlbmd0aClcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGlzQXJyYXkgID0gcmVxdWlyZSgnLi8kLmlzLWFycmF5JylcbiAgLCBTUEVDSUVTICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvcmlnaW5hbCwgbGVuZ3RoKXtcbiAgdmFyIEM7XG4gIGlmKGlzQXJyYXkob3JpZ2luYWwpKXtcbiAgICBDID0gb3JpZ2luYWwuY29uc3RydWN0b3I7XG4gICAgLy8gY3Jvc3MtcmVhbG0gZmFsbGJhY2tcbiAgICBpZih0eXBlb2YgQyA9PSAnZnVuY3Rpb24nICYmIChDID09PSBBcnJheSB8fCBpc0FycmF5KEMucHJvdG90eXBlKSkpQyA9IHVuZGVmaW5lZDtcbiAgICBpZihpc09iamVjdChDKSl7XG4gICAgICBDID0gQ1tTUEVDSUVTXTtcbiAgICAgIGlmKEMgPT09IG51bGwpQyA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH0gcmV0dXJuIG5ldyAoQyA9PT0gdW5kZWZpbmVkID8gQXJyYXkgOiBDKShsZW5ndGgpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmFycmF5LXNwZWNpZXMtY3JlYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMi4yIElzQXJyYXkoYXJndW1lbnQpXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBBcnJheS5pc0FycmF5IHx8IGZ1bmN0aW9uKGFyZyl7XG4gIHJldHVybiBjb2YoYXJnKSA9PSAnQXJyYXknO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlzLWFycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBzdG9yZSAgPSByZXF1aXJlKCcuLyQuc2hhcmVkJykoJ3drcycpXG4gICwgdWlkICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpXG4gICwgU3ltYm9sID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLlN5bWJvbDtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obmFtZSl7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFN5bWJvbCAmJiBTeW1ib2xbbmFtZV0gfHwgKFN5bWJvbCB8fCB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC53a3MuanNcbiAqKiBtb2R1bGUgaWQgPSAzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nXG4gICwgc3RvcmUgID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zaGFyZWQuanNcbiAqKiBtb2R1bGUgaWQgPSAzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpXG4gICwgdG9JbmRleCAgID0gcmVxdWlyZSgnLi8kLnRvLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKElTX0lOQ0xVREVTKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBlbCwgZnJvbUluZGV4KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KCR0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gdG9JbmRleChmcm9tSW5kZXgsIGxlbmd0aClcbiAgICAgICwgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIGlmKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKXdoaWxlKGxlbmd0aCA+IGluZGV4KXtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIGlmKHZhbHVlICE9IHZhbHVlKXJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I3RvSW5kZXggaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKXtcbiAgICAgIGlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXg7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmFycmF5LWluY2x1ZGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIEVDTUFTY3JpcHQgNiBzeW1ib2xzIHNoaW1cbnZhciAkICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIERFU0NSSVBUT1JTICAgID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJylcbiAgLCAkZmFpbHMgICAgICAgICA9IHJlcXVpcmUoJy4vJC5mYWlscycpXG4gICwgc2hhcmVkICAgICAgICAgPSByZXF1aXJlKCcuLyQuc2hhcmVkJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vJC5zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgdWlkICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQudWlkJylcbiAgLCB3a3MgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKVxuICAsIGtleU9mICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmtleW9mJylcbiAgLCAkbmFtZXMgICAgICAgICA9IHJlcXVpcmUoJy4vJC5nZXQtbmFtZXMnKVxuICAsIGVudW1LZXlzICAgICAgID0gcmVxdWlyZSgnLi8kLmVudW0ta2V5cycpXG4gICwgaXNBcnJheSAgICAgICAgPSByZXF1aXJlKCcuLyQuaXMtYXJyYXknKVxuICAsIGFuT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgdG9JT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpXG4gICwgY3JlYXRlRGVzYyAgICAgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpXG4gICwgZ2V0RGVzYyAgICAgICAgPSAkLmdldERlc2NcbiAgLCBzZXREZXNjICAgICAgICA9ICQuc2V0RGVzY1xuICAsIF9jcmVhdGUgICAgICAgID0gJC5jcmVhdGVcbiAgLCBnZXROYW1lcyAgICAgICA9ICRuYW1lcy5nZXRcbiAgLCAkU3ltYm9sICAgICAgICA9IGdsb2JhbC5TeW1ib2xcbiAgLCAkSlNPTiAgICAgICAgICA9IGdsb2JhbC5KU09OXG4gICwgX3N0cmluZ2lmeSAgICAgPSAkSlNPTiAmJiAkSlNPTi5zdHJpbmdpZnlcbiAgLCBzZXR0ZXIgICAgICAgICA9IGZhbHNlXG4gICwgSElEREVOICAgICAgICAgPSB3a3MoJ19oaWRkZW4nKVxuICAsIGlzRW51bSAgICAgICAgID0gJC5pc0VudW1cbiAgLCBTeW1ib2xSZWdpc3RyeSA9IHNoYXJlZCgnc3ltYm9sLXJlZ2lzdHJ5JylcbiAgLCBBbGxTeW1ib2xzICAgICA9IHNoYXJlZCgnc3ltYm9scycpXG4gICwgdXNlTmF0aXZlICAgICAgPSB0eXBlb2YgJFN5bWJvbCA9PSAnZnVuY3Rpb24nXG4gICwgT2JqZWN0UHJvdG8gICAgPSBPYmplY3QucHJvdG90eXBlO1xuXG4vLyBmYWxsYmFjayBmb3Igb2xkIEFuZHJvaWQsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD02ODdcbnZhciBzZXRTeW1ib2xEZXNjID0gREVTQ1JJUFRPUlMgJiYgJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBfY3JlYXRlKHNldERlc2Moe30sICdhJywge1xuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHNldERlc2ModGhpcywgJ2EnLCB7dmFsdWU6IDd9KS5hOyB9XG4gIH0pKS5hICE9IDc7XG59KSA/IGZ1bmN0aW9uKGl0LCBrZXksIEQpe1xuICB2YXIgcHJvdG9EZXNjID0gZ2V0RGVzYyhPYmplY3RQcm90bywga2V5KTtcbiAgaWYocHJvdG9EZXNjKWRlbGV0ZSBPYmplY3RQcm90b1trZXldO1xuICBzZXREZXNjKGl0LCBrZXksIEQpO1xuICBpZihwcm90b0Rlc2MgJiYgaXQgIT09IE9iamVjdFByb3RvKXNldERlc2MoT2JqZWN0UHJvdG8sIGtleSwgcHJvdG9EZXNjKTtcbn0gOiBzZXREZXNjO1xuXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHRhZyl7XG4gIHZhciBzeW0gPSBBbGxTeW1ib2xzW3RhZ10gPSBfY3JlYXRlKCRTeW1ib2wucHJvdG90eXBlKTtcbiAgc3ltLl9rID0gdGFnO1xuICBERVNDUklQVE9SUyAmJiBzZXR0ZXIgJiYgc2V0U3ltYm9sRGVzYyhPYmplY3RQcm90bywgdGFnLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIHNldDogZnVuY3Rpb24odmFsdWUpe1xuICAgICAgaWYoaGFzKHRoaXMsIEhJRERFTikgJiYgaGFzKHRoaXNbSElEREVOXSwgdGFnKSl0aGlzW0hJRERFTl1bdGFnXSA9IGZhbHNlO1xuICAgICAgc2V0U3ltYm9sRGVzYyh0aGlzLCB0YWcsIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gc3ltO1xufTtcblxudmFyIGlzU3ltYm9sID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnO1xufTtcblxudmFyICRkZWZpbmVQcm9wZXJ0eSA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KGl0LCBrZXksIEQpe1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpKXtcbiAgICBpZighRC5lbnVtZXJhYmxlKXtcbiAgICAgIGlmKCFoYXMoaXQsIEhJRERFTikpc2V0RGVzYyhpdCwgSElEREVOLCBjcmVhdGVEZXNjKDEsIHt9KSk7XG4gICAgICBpdFtISURERU5dW2tleV0gPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZihoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKWl0W0hJRERFTl1ba2V5XSA9IGZhbHNlO1xuICAgICAgRCA9IF9jcmVhdGUoRCwge2VudW1lcmFibGU6IGNyZWF0ZURlc2MoMCwgZmFsc2UpfSk7XG4gICAgfSByZXR1cm4gc2V0U3ltYm9sRGVzYyhpdCwga2V5LCBEKTtcbiAgfSByZXR1cm4gc2V0RGVzYyhpdCwga2V5LCBEKTtcbn07XG52YXIgJGRlZmluZVByb3BlcnRpZXMgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKGl0LCBQKXtcbiAgYW5PYmplY3QoaXQpO1xuICB2YXIga2V5cyA9IGVudW1LZXlzKFAgPSB0b0lPYmplY3QoUCkpXG4gICAgLCBpICAgID0gMFxuICAgICwgbCA9IGtleXMubGVuZ3RoXG4gICAgLCBrZXk7XG4gIHdoaWxlKGwgPiBpKSRkZWZpbmVQcm9wZXJ0eShpdCwga2V5ID0ga2V5c1tpKytdLCBQW2tleV0pO1xuICByZXR1cm4gaXQ7XG59O1xudmFyICRjcmVhdGUgPSBmdW5jdGlvbiBjcmVhdGUoaXQsIFApe1xuICByZXR1cm4gUCA9PT0gdW5kZWZpbmVkID8gX2NyZWF0ZShpdCkgOiAkZGVmaW5lUHJvcGVydGllcyhfY3JlYXRlKGl0KSwgUCk7XG59O1xudmFyICRwcm9wZXJ0eUlzRW51bWVyYWJsZSA9IGZ1bmN0aW9uIHByb3BlcnR5SXNFbnVtZXJhYmxlKGtleSl7XG4gIHZhciBFID0gaXNFbnVtLmNhbGwodGhpcywga2V5KTtcbiAgcmV0dXJuIEUgfHwgIWhhcyh0aGlzLCBrZXkpIHx8ICFoYXMoQWxsU3ltYm9scywga2V5KSB8fCBoYXModGhpcywgSElEREVOKSAmJiB0aGlzW0hJRERFTl1ba2V5XVxuICAgID8gRSA6IHRydWU7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gIHZhciBEID0gZ2V0RGVzYyhpdCA9IHRvSU9iamVjdChpdCksIGtleSk7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkgJiYgIShoYXMoaXQsIEhJRERFTikgJiYgaXRbSElEREVOXVtrZXldKSlELmVudW1lcmFibGUgPSB0cnVlO1xuICByZXR1cm4gRDtcbn07XG52YXIgJGdldE93blByb3BlcnR5TmFtZXMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdldE5hbWVzKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKCFoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkgJiYga2V5ICE9IEhJRERFTilyZXN1bHQucHVzaChrZXkpO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlTeW1ib2xzKGl0KXtcbiAgdmFyIG5hbWVzICA9IGdldE5hbWVzKHRvSU9iamVjdChpdCkpXG4gICAgLCByZXN1bHQgPSBbXVxuICAgICwgaSAgICAgID0gMFxuICAgICwga2V5O1xuICB3aGlsZShuYW1lcy5sZW5ndGggPiBpKWlmKGhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSlyZXN1bHQucHVzaChBbGxTeW1ib2xzW2tleV0pO1xuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciAkc3RyaW5naWZ5ID0gZnVuY3Rpb24gc3RyaW5naWZ5KGl0KXtcbiAgaWYoaXQgPT09IHVuZGVmaW5lZCB8fCBpc1N5bWJvbChpdCkpcmV0dXJuOyAvLyBJRTggcmV0dXJucyBzdHJpbmcgb24gdW5kZWZpbmVkXG4gIHZhciBhcmdzID0gW2l0XVxuICAgICwgaSAgICA9IDFcbiAgICAsICQkICAgPSBhcmd1bWVudHNcbiAgICAsIHJlcGxhY2VyLCAkcmVwbGFjZXI7XG4gIHdoaWxlKCQkLmxlbmd0aCA+IGkpYXJncy5wdXNoKCQkW2krK10pO1xuICByZXBsYWNlciA9IGFyZ3NbMV07XG4gIGlmKHR5cGVvZiByZXBsYWNlciA9PSAnZnVuY3Rpb24nKSRyZXBsYWNlciA9IHJlcGxhY2VyO1xuICBpZigkcmVwbGFjZXIgfHwgIWlzQXJyYXkocmVwbGFjZXIpKXJlcGxhY2VyID0gZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgaWYoJHJlcGxhY2VyKXZhbHVlID0gJHJlcGxhY2VyLmNhbGwodGhpcywga2V5LCB2YWx1ZSk7XG4gICAgaWYoIWlzU3ltYm9sKHZhbHVlKSlyZXR1cm4gdmFsdWU7XG4gIH07XG4gIGFyZ3NbMV0gPSByZXBsYWNlcjtcbiAgcmV0dXJuIF9zdHJpbmdpZnkuYXBwbHkoJEpTT04sIGFyZ3MpO1xufTtcbnZhciBidWdneUpTT04gPSAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgdmFyIFMgPSAkU3ltYm9sKCk7XG4gIC8vIE1TIEVkZ2UgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIHt9XG4gIC8vIFdlYktpdCBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMgbnVsbFxuICAvLyBWOCB0aHJvd3Mgb24gYm94ZWQgc3ltYm9sc1xuICByZXR1cm4gX3N0cmluZ2lmeShbU10pICE9ICdbbnVsbF0nIHx8IF9zdHJpbmdpZnkoe2E6IFN9KSAhPSAne30nIHx8IF9zdHJpbmdpZnkoT2JqZWN0KFMpKSAhPSAne30nO1xufSk7XG5cbi8vIDE5LjQuMS4xIFN5bWJvbChbZGVzY3JpcHRpb25dKVxuaWYoIXVzZU5hdGl2ZSl7XG4gICRTeW1ib2wgPSBmdW5jdGlvbiBTeW1ib2woKXtcbiAgICBpZihpc1N5bWJvbCh0aGlzKSl0aHJvdyBUeXBlRXJyb3IoJ1N5bWJvbCBpcyBub3QgYSBjb25zdHJ1Y3RvcicpO1xuICAgIHJldHVybiB3cmFwKHVpZChhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCkpO1xuICB9O1xuICByZWRlZmluZSgkU3ltYm9sLnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gdGhpcy5faztcbiAgfSk7XG5cbiAgaXNTeW1ib2wgPSBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIGl0IGluc3RhbmNlb2YgJFN5bWJvbDtcbiAgfTtcblxuICAkLmNyZWF0ZSAgICAgPSAkY3JlYXRlO1xuICAkLmlzRW51bSAgICAgPSAkcHJvcGVydHlJc0VudW1lcmFibGU7XG4gICQuZ2V0RGVzYyAgICA9ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I7XG4gICQuc2V0RGVzYyAgICA9ICRkZWZpbmVQcm9wZXJ0eTtcbiAgJC5zZXREZXNjcyAgID0gJGRlZmluZVByb3BlcnRpZXM7XG4gICQuZ2V0TmFtZXMgICA9ICRuYW1lcy5nZXQgPSAkZ2V0T3duUHJvcGVydHlOYW1lcztcbiAgJC5nZXRTeW1ib2xzID0gJGdldE93blByb3BlcnR5U3ltYm9scztcblxuICBpZihERVNDUklQVE9SUyAmJiAhcmVxdWlyZSgnLi8kLmxpYnJhcnknKSl7XG4gICAgcmVkZWZpbmUoT2JqZWN0UHJvdG8sICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICRwcm9wZXJ0eUlzRW51bWVyYWJsZSwgdHJ1ZSk7XG4gIH1cbn1cblxudmFyIHN5bWJvbFN0YXRpY3MgPSB7XG4gIC8vIDE5LjQuMi4xIFN5bWJvbC5mb3Ioa2V5KVxuICAnZm9yJzogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gaGFzKFN5bWJvbFJlZ2lzdHJ5LCBrZXkgKz0gJycpXG4gICAgICA/IFN5bWJvbFJlZ2lzdHJ5W2tleV1cbiAgICAgIDogU3ltYm9sUmVnaXN0cnlba2V5XSA9ICRTeW1ib2woa2V5KTtcbiAgfSxcbiAgLy8gMTkuNC4yLjUgU3ltYm9sLmtleUZvcihzeW0pXG4gIGtleUZvcjogZnVuY3Rpb24ga2V5Rm9yKGtleSl7XG4gICAgcmV0dXJuIGtleU9mKFN5bWJvbFJlZ2lzdHJ5LCBrZXkpO1xuICB9LFxuICB1c2VTZXR0ZXI6IGZ1bmN0aW9uKCl7IHNldHRlciA9IHRydWU7IH0sXG4gIHVzZVNpbXBsZTogZnVuY3Rpb24oKXsgc2V0dGVyID0gZmFsc2U7IH1cbn07XG4vLyAxOS40LjIuMiBTeW1ib2wuaGFzSW5zdGFuY2Vcbi8vIDE5LjQuMi4zIFN5bWJvbC5pc0NvbmNhdFNwcmVhZGFibGVcbi8vIDE5LjQuMi40IFN5bWJvbC5pdGVyYXRvclxuLy8gMTkuNC4yLjYgU3ltYm9sLm1hdGNoXG4vLyAxOS40LjIuOCBTeW1ib2wucmVwbGFjZVxuLy8gMTkuNC4yLjkgU3ltYm9sLnNlYXJjaFxuLy8gMTkuNC4yLjEwIFN5bWJvbC5zcGVjaWVzXG4vLyAxOS40LjIuMTEgU3ltYm9sLnNwbGl0XG4vLyAxOS40LjIuMTIgU3ltYm9sLnRvUHJpbWl0aXZlXG4vLyAxOS40LjIuMTMgU3ltYm9sLnRvU3RyaW5nVGFnXG4vLyAxOS40LjIuMTQgU3ltYm9sLnVuc2NvcGFibGVzXG4kLmVhY2guY2FsbCgoXG4gICdoYXNJbnN0YW5jZSxpc0NvbmNhdFNwcmVhZGFibGUsaXRlcmF0b3IsbWF0Y2gscmVwbGFjZSxzZWFyY2gsJyArXG4gICdzcGVjaWVzLHNwbGl0LHRvUHJpbWl0aXZlLHRvU3RyaW5nVGFnLHVuc2NvcGFibGVzJ1xuKS5zcGxpdCgnLCcpLCBmdW5jdGlvbihpdCl7XG4gIHZhciBzeW0gPSB3a3MoaXQpO1xuICBzeW1ib2xTdGF0aWNzW2l0XSA9IHVzZU5hdGl2ZSA/IHN5bSA6IHdyYXAoc3ltKTtcbn0pO1xuXG5zZXR0ZXIgPSB0cnVlO1xuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVywge1N5bWJvbDogJFN5bWJvbH0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1N5bWJvbCcsIHN5bWJvbFN0YXRpY3MpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICF1c2VOYXRpdmUsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi4yIE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkY3JlYXRlLFxuICAvLyAxOS4xLjIuNCBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICRkZWZpbmVQcm9wZXJ0eSxcbiAgLy8gMTkuMS4yLjMgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogJGRlZmluZVByb3BlcnRpZXMsXG4gIC8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICAvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgLy8gMTkuMS4yLjggT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhPKVxuICBnZXRPd25Qcm9wZXJ0eVN5bWJvbHM6ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHNcbn0pO1xuXG4vLyAyNC4zLjIgSlNPTi5zdHJpbmdpZnkodmFsdWUgWywgcmVwbGFjZXIgWywgc3BhY2VdXSlcbiRKU09OICYmICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCF1c2VOYXRpdmUgfHwgYnVnZ3lKU09OKSwgJ0pTT04nLCB7c3RyaW5naWZ5OiAkc3RyaW5naWZ5fSk7XG5cbi8vIDE5LjQuMy41IFN5bWJvbC5wcm90b3R5cGVbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKCRTeW1ib2wsICdTeW1ib2wnKTtcbi8vIDIwLjIuMS45IE1hdGhbQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKE1hdGgsICdNYXRoJywgdHJ1ZSk7XG4vLyAyNC4zLjMgSlNPTltAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoZ2xvYmFsLkpTT04sICdKU09OJywgdHJ1ZSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN5bWJvbC5qc1xuICoqIG1vZHVsZSBpZCA9IDM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi8kJykuc2V0RGVzY1xuICAsIGhhcyA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgdGFnLCBzdGF0KXtcbiAgaWYoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSlkZWYoaXQsIFRBRywge2NvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZ30pO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnNldC10by1zdHJpbmctdGFnLmpzXG4gKiogbW9kdWxlIGlkID0gMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9iamVjdCwgZWwpe1xuICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAsIGtleXMgICA9ICQuZ2V0S2V5cyhPKVxuICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobGVuZ3RoID4gaW5kZXgpaWYoT1trZXkgPSBrZXlzW2luZGV4KytdXSA9PT0gZWwpcmV0dXJuIGtleTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5rZXlvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBmYWxsYmFjayBmb3IgSUUxMSBidWdneSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB3aXRoIGlmcmFtZSBhbmQgd2luZG93XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKVxuICAsIGdldE5hbWVzICA9IHJlcXVpcmUoJy4vJCcpLmdldE5hbWVzXG4gICwgdG9TdHJpbmcgID0ge30udG9TdHJpbmc7XG5cbnZhciB3aW5kb3dOYW1lcyA9IHR5cGVvZiB3aW5kb3cgPT0gJ29iamVjdCcgJiYgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXNcbiAgPyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh3aW5kb3cpIDogW107XG5cbnZhciBnZXRXaW5kb3dOYW1lcyA9IGZ1bmN0aW9uKGl0KXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZ2V0TmFtZXMoaXQpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB3aW5kb3dOYW1lcy5zbGljZSgpO1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cy5nZXQgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eU5hbWVzKGl0KXtcbiAgaWYod2luZG93TmFtZXMgJiYgdG9TdHJpbmcuY2FsbChpdCkgPT0gJ1tvYmplY3QgV2luZG93XScpcmV0dXJuIGdldFdpbmRvd05hbWVzKGl0KTtcbiAgcmV0dXJuIGdldE5hbWVzKHRvSU9iamVjdChpdCkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmdldC1uYW1lcy5qc1xuICoqIG1vZHVsZSBpZCA9IDM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBhbGwgZW51bWVyYWJsZSBvYmplY3Qga2V5cywgaW5jbHVkZXMgc3ltYm9sc1xudmFyICQgPSByZXF1aXJlKCcuLyQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIga2V5cyAgICAgICA9ICQuZ2V0S2V5cyhpdClcbiAgICAsIGdldFN5bWJvbHMgPSAkLmdldFN5bWJvbHM7XG4gIGlmKGdldFN5bWJvbHMpe1xuICAgIHZhciBzeW1ib2xzID0gZ2V0U3ltYm9scyhpdClcbiAgICAgICwgaXNFbnVtICA9ICQuaXNFbnVtXG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShzeW1ib2xzLmxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoaXQsIGtleSA9IHN5bWJvbHNbaSsrXSkpa2V5cy5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIGtleXM7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZW51bS1rZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5saWJyYXJ5LmpzXG4gKiogbW9kdWxlIGlkID0gNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMy4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYsICdPYmplY3QnLCB7YXNzaWduOiByZXF1aXJlKCcuLyQub2JqZWN0LWFzc2lnbicpfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSA0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSwgLi4uKVxudmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi8kLmlvYmplY3QnKTtcblxuLy8gc2hvdWxkIHdvcmsgd2l0aCBzeW1ib2xzIGFuZCBzaG91bGQgaGF2ZSBkZXRlcm1pbmlzdGljIHByb3BlcnR5IG9yZGVyIChWOCBidWcpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHZhciBhID0gT2JqZWN0LmFzc2lnblxuICAgICwgQSA9IHt9XG4gICAgLCBCID0ge31cbiAgICAsIFMgPSBTeW1ib2woKVxuICAgICwgSyA9ICdhYmNkZWZnaGlqa2xtbm9wcXJzdCc7XG4gIEFbU10gPSA3O1xuICBLLnNwbGl0KCcnKS5mb3JFYWNoKGZ1bmN0aW9uKGspeyBCW2tdID0gazsgfSk7XG4gIHJldHVybiBhKHt9LCBBKVtTXSAhPSA3IHx8IE9iamVjdC5rZXlzKGEoe30sIEIpKS5qb2luKCcnKSAhPSBLO1xufSkgPyBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0LCBzb3VyY2UpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gIHZhciBUICAgICA9IHRvT2JqZWN0KHRhcmdldClcbiAgICAsICQkICAgID0gYXJndW1lbnRzXG4gICAgLCAkJGxlbiA9ICQkLmxlbmd0aFxuICAgICwgaW5kZXggPSAxXG4gICAgLCBnZXRLZXlzICAgID0gJC5nZXRLZXlzXG4gICAgLCBnZXRTeW1ib2xzID0gJC5nZXRTeW1ib2xzXG4gICAgLCBpc0VudW0gICAgID0gJC5pc0VudW07XG4gIHdoaWxlKCQkbGVuID4gaW5kZXgpe1xuICAgIHZhciBTICAgICAgPSBJT2JqZWN0KCQkW2luZGV4KytdKVxuICAgICAgLCBrZXlzICAgPSBnZXRTeW1ib2xzID8gZ2V0S2V5cyhTKS5jb25jYXQoZ2V0U3ltYm9scyhTKSkgOiBnZXRLZXlzKFMpXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGogICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGopaWYoaXNFbnVtLmNhbGwoUywga2V5ID0ga2V5c1tqKytdKSlUW2tleV0gPSBTW2tleV07XG4gIH1cbiAgcmV0dXJuIFQ7XG59IDogT2JqZWN0LmFzc2lnbjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm9iamVjdC1hc3NpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSA0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4zLjEwIE9iamVjdC5pcyh2YWx1ZTEsIHZhbHVlMilcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7aXM6IHJlcXVpcmUoJy4vJC5zYW1lLXZhbHVlJyl9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLmpzXG4gKiogbW9kdWxlIGlkID0gNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMi45IFNhbWVWYWx1ZSh4LCB5KVxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuaXMgfHwgZnVuY3Rpb24gaXMoeCwgeSl7XG4gIHJldHVybiB4ID09PSB5ID8geCAhPT0gMCB8fCAxIC8geCA9PT0gMSAvIHkgOiB4ICE9IHggJiYgeSAhPSB5O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnNhbWUtdmFsdWUuanNcbiAqKiBtb2R1bGUgaWQgPSA0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4zLjE5IE9iamVjdC5zZXRQcm90b3R5cGVPZihPLCBwcm90bylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7c2V0UHJvdG90eXBlT2Y6IHJlcXVpcmUoJy4vJC5zZXQtcHJvdG8nKS5zZXR9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbiAqKiBtb2R1bGUgaWQgPSA0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gV29ya3Mgd2l0aCBfX3Byb3RvX18gb25seS4gT2xkIHY4IGNhbid0IHdvcmsgd2l0aCBudWxsIHByb3RvIG9iamVjdHMuXG4vKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90byAqL1xudmFyIGdldERlc2MgID0gcmVxdWlyZSgnLi8kJykuZ2V0RGVzY1xuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0Jyk7XG52YXIgY2hlY2sgPSBmdW5jdGlvbihPLCBwcm90byl7XG4gIGFuT2JqZWN0KE8pO1xuICBpZighaXNPYmplY3QocHJvdG8pICYmIHByb3RvICE9PSBudWxsKXRocm93IFR5cGVFcnJvcihwcm90byArIFwiOiBjYW4ndCBzZXQgYXMgcHJvdG90eXBlIVwiKTtcbn07XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHwgKCdfX3Byb3RvX18nIGluIHt9ID8gLy8gZXNsaW50LWRpc2FibGUtbGluZVxuICAgIGZ1bmN0aW9uKHRlc3QsIGJ1Z2d5LCBzZXQpe1xuICAgICAgdHJ5IHtcbiAgICAgICAgc2V0ID0gcmVxdWlyZSgnLi8kLmN0eCcpKEZ1bmN0aW9uLmNhbGwsIGdldERlc2MoT2JqZWN0LnByb3RvdHlwZSwgJ19fcHJvdG9fXycpLnNldCwgMik7XG4gICAgICAgIHNldCh0ZXN0LCBbXSk7XG4gICAgICAgIGJ1Z2d5ID0gISh0ZXN0IGluc3RhbmNlb2YgQXJyYXkpO1xuICAgICAgfSBjYXRjaChlKXsgYnVnZ3kgPSB0cnVlOyB9XG4gICAgICByZXR1cm4gZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pe1xuICAgICAgICBjaGVjayhPLCBwcm90byk7XG4gICAgICAgIGlmKGJ1Z2d5KU8uX19wcm90b19fID0gcHJvdG87XG4gICAgICAgIGVsc2Ugc2V0KE8sIHByb3RvKTtcbiAgICAgICAgcmV0dXJuIE87XG4gICAgICB9O1xuICAgIH0oe30sIGZhbHNlKSA6IHVuZGVmaW5lZCksXG4gIGNoZWNrOiBjaGVja1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnNldC1wcm90by5qc1xuICoqIG1vZHVsZSBpZCA9IDQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi8kLmNsYXNzb2YnKVxuICAsIHRlc3QgICAgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi8kLndrcycpKCd0b1N0cmluZ1RhZycpXSA9ICd6JztcbmlmKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpe1xuICByZXF1aXJlKCcuLyQucmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanNcbiAqKiBtb2R1bGUgaWQgPSA0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJylcbiAgLy8gRVMzIHdyb25nIGhlcmVcbiAgLCBBUkcgPSBjb2YoZnVuY3Rpb24oKXsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IChPID0gT2JqZWN0KGl0KSlbVEFHXSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY2xhc3NvZi5qc1xuICoqIG1vZHVsZSBpZCA9IDQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuNSBPYmplY3QuZnJlZXplKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5cbnJlcXVpcmUoJy4vJC5vYmplY3Qtc2FwJykoJ2ZyZWV6ZScsIGZ1bmN0aW9uKCRmcmVlemUpe1xuICByZXR1cm4gZnVuY3Rpb24gZnJlZXplKGl0KXtcbiAgICByZXR1cm4gJGZyZWV6ZSAmJiBpc09iamVjdChpdCkgPyAkZnJlZXplKGl0KSA6IGl0O1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUuanNcbiAqKiBtb2R1bGUgaWQgPSA1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gbW9zdCBPYmplY3QgbWV0aG9kcyBieSBFUzYgc2hvdWxkIGFjY2VwdCBwcmltaXRpdmVzXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGNvcmUgICAgPSByZXF1aXJlKCcuLyQuY29yZScpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vJC5mYWlscycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuICB2YXIgZm4gID0gKGNvcmUuT2JqZWN0IHx8IHt9KVtLRVldIHx8IE9iamVjdFtLRVldXG4gICAgLCBleHAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKGZuKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpeyBmbigxKTsgfSksICdPYmplY3QnLCBleHApO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm9iamVjdC1zYXAuanNcbiAqKiBtb2R1bGUgaWQgPSA1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjE3IE9iamVjdC5zZWFsKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5cbnJlcXVpcmUoJy4vJC5vYmplY3Qtc2FwJykoJ3NlYWwnLCBmdW5jdGlvbigkc2VhbCl7XG4gIHJldHVybiBmdW5jdGlvbiBzZWFsKGl0KXtcbiAgICByZXR1cm4gJHNlYWwgJiYgaXNPYmplY3QoaXQpID8gJHNlYWwoaXQpIDogaXQ7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnNlYWwuanNcbiAqKiBtb2R1bGUgaWQgPSA1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjE1IE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucyhPKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdwcmV2ZW50RXh0ZW5zaW9ucycsIGZ1bmN0aW9uKCRwcmV2ZW50RXh0ZW5zaW9ucyl7XG4gIHJldHVybiBmdW5jdGlvbiBwcmV2ZW50RXh0ZW5zaW9ucyhpdCl7XG4gICAgcmV0dXJuICRwcmV2ZW50RXh0ZW5zaW9ucyAmJiBpc09iamVjdChpdCkgPyAkcHJldmVudEV4dGVuc2lvbnMoaXQpIDogaXQ7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnByZXZlbnQtZXh0ZW5zaW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuMTIgT2JqZWN0LmlzRnJvemVuKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5cbnJlcXVpcmUoJy4vJC5vYmplY3Qtc2FwJykoJ2lzRnJvemVuJywgZnVuY3Rpb24oJGlzRnJvemVuKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGlzRnJvemVuKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gJGlzRnJvemVuID8gJGlzRnJvemVuKGl0KSA6IGZhbHNlIDogdHJ1ZTtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZnJvemVuLmpzXG4gKiogbW9kdWxlIGlkID0gNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMi4xMyBPYmplY3QuaXNTZWFsZWQoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcblxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgnaXNTZWFsZWQnLCBmdW5jdGlvbigkaXNTZWFsZWQpe1xuICByZXR1cm4gZnVuY3Rpb24gaXNTZWFsZWQoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyAkaXNTZWFsZWQgPyAkaXNTZWFsZWQoaXQpIDogZmFsc2UgOiB0cnVlO1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1zZWFsZWQuanNcbiAqKiBtb2R1bGUgaWQgPSA1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjExIE9iamVjdC5pc0V4dGVuc2libGUoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcblxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgnaXNFeHRlbnNpYmxlJywgZnVuY3Rpb24oJGlzRXh0ZW5zaWJsZSl7XG4gIHJldHVybiBmdW5jdGlvbiBpc0V4dGVuc2libGUoaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyAkaXNFeHRlbnNpYmxlID8gJGlzRXh0ZW5zaWJsZShpdCkgOiB0cnVlIDogZmFsc2U7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLWV4dGVuc2libGUuanNcbiAqKiBtb2R1bGUgaWQgPSA1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0Jyk7XG5cbnJlcXVpcmUoJy4vJC5vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5RGVzY3JpcHRvcicsIGZ1bmN0aW9uKCRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Ipe1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICAgIHJldHVybiAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRvSU9iamVjdChpdCksIGtleSk7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuOSBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKTtcblxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgnZ2V0UHJvdG90eXBlT2YnLCBmdW5jdGlvbigkZ2V0UHJvdG90eXBlT2Ype1xuICByZXR1cm4gZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YoaXQpe1xuICAgIHJldHVybiAkZ2V0UHJvdG90eXBlT2YodG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuMTQgT2JqZWN0LmtleXMoTylcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKTtcblxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgna2V5cycsIGZ1bmN0aW9uKCRrZXlzKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGtleXMoaXQpe1xuICAgIHJldHVybiAka2V5cyh0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eU5hbWVzJywgZnVuY3Rpb24oKXtcbiAgcmV0dXJuIHJlcXVpcmUoJy4vJC5nZXQtbmFtZXMnKS5nZXQ7XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXMuanNcbiAqKiBtb2R1bGUgaWQgPSA2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHNldERlc2MgICAgPSByZXF1aXJlKCcuLyQnKS5zZXREZXNjXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJylcbiAgLCBoYXMgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgRlByb3RvICAgICA9IEZ1bmN0aW9uLnByb3RvdHlwZVxuICAsIG5hbWVSRSAgICAgPSAvXlxccypmdW5jdGlvbiAoW14gKF0qKS9cbiAgLCBOQU1FICAgICAgID0gJ25hbWUnO1xuLy8gMTkuMi40LjIgbmFtZVxuTkFNRSBpbiBGUHJvdG8gfHwgcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJykgJiYgc2V0RGVzYyhGUHJvdG8sIE5BTUUsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgdmFyIG1hdGNoID0gKCcnICsgdGhpcykubWF0Y2gobmFtZVJFKVxuICAgICAgLCBuYW1lICA9IG1hdGNoID8gbWF0Y2hbMV0gOiAnJztcbiAgICBoYXModGhpcywgTkFNRSkgfHwgc2V0RGVzYyh0aGlzLCBOQU1FLCBjcmVhdGVEZXNjKDUsIG5hbWUpKTtcbiAgICByZXR1cm4gbmFtZTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUuanNcbiAqKiBtb2R1bGUgaWQgPSA2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGlzT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBIQVNfSU5TVEFOQ0UgID0gcmVxdWlyZSgnLi8kLndrcycpKCdoYXNJbnN0YW5jZScpXG4gICwgRnVuY3Rpb25Qcm90byA9IEZ1bmN0aW9uLnByb3RvdHlwZTtcbi8vIDE5LjIuMy42IEZ1bmN0aW9uLnByb3RvdHlwZVtAQGhhc0luc3RhbmNlXShWKVxuaWYoIShIQVNfSU5TVEFOQ0UgaW4gRnVuY3Rpb25Qcm90bykpJC5zZXREZXNjKEZ1bmN0aW9uUHJvdG8sIEhBU19JTlNUQU5DRSwge3ZhbHVlOiBmdW5jdGlvbihPKXtcbiAgaWYodHlwZW9mIHRoaXMgIT0gJ2Z1bmN0aW9uJyB8fCAhaXNPYmplY3QoTykpcmV0dXJuIGZhbHNlO1xuICBpZighaXNPYmplY3QodGhpcy5wcm90b3R5cGUpKXJldHVybiBPIGluc3RhbmNlb2YgdGhpcztcbiAgLy8gZm9yIGVudmlyb25tZW50IHcvbyBuYXRpdmUgYEBAaGFzSW5zdGFuY2VgIGxvZ2ljIGVub3VnaCBgaW5zdGFuY2VvZmAsIGJ1dCBhZGQgdGhpczpcbiAgd2hpbGUoTyA9ICQuZ2V0UHJvdG8oTykpaWYodGhpcy5wcm90b3R5cGUgPT09IE8pcmV0dXJuIHRydWU7XG4gIHJldHVybiBmYWxzZTtcbn19KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24uaGFzLWluc3RhbmNlLmpzXG4gKiogbW9kdWxlIGlkID0gNjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIGNvZiAgICAgICAgID0gcmVxdWlyZSgnLi8kLmNvZicpXG4gICwgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuLyQudG8tcHJpbWl0aXZlJylcbiAgLCBmYWlscyAgICAgICA9IHJlcXVpcmUoJy4vJC5mYWlscycpXG4gICwgJHRyaW0gICAgICAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLXRyaW0nKS50cmltXG4gICwgTlVNQkVSICAgICAgPSAnTnVtYmVyJ1xuICAsICROdW1iZXIgICAgID0gZ2xvYmFsW05VTUJFUl1cbiAgLCBCYXNlICAgICAgICA9ICROdW1iZXJcbiAgLCBwcm90byAgICAgICA9ICROdW1iZXIucHJvdG90eXBlXG4gIC8vIE9wZXJhIH4xMiBoYXMgYnJva2VuIE9iamVjdCN0b1N0cmluZ1xuICAsIEJST0tFTl9DT0YgID0gY29mKCQuY3JlYXRlKHByb3RvKSkgPT0gTlVNQkVSXG4gICwgVFJJTSAgICAgICAgPSAndHJpbScgaW4gU3RyaW5nLnByb3RvdHlwZTtcblxuLy8gNy4xLjMgVG9OdW1iZXIoYXJndW1lbnQpXG52YXIgdG9OdW1iZXIgPSBmdW5jdGlvbihhcmd1bWVudCl7XG4gIHZhciBpdCA9IHRvUHJpbWl0aXZlKGFyZ3VtZW50LCBmYWxzZSk7XG4gIGlmKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyAmJiBpdC5sZW5ndGggPiAyKXtcbiAgICBpdCA9IFRSSU0gPyBpdC50cmltKCkgOiAkdHJpbShpdCwgMyk7XG4gICAgdmFyIGZpcnN0ID0gaXQuY2hhckNvZGVBdCgwKVxuICAgICAgLCB0aGlyZCwgcmFkaXgsIG1heENvZGU7XG4gICAgaWYoZmlyc3QgPT09IDQzIHx8IGZpcnN0ID09PSA0NSl7XG4gICAgICB0aGlyZCA9IGl0LmNoYXJDb2RlQXQoMik7XG4gICAgICBpZih0aGlyZCA9PT0gODggfHwgdGhpcmQgPT09IDEyMClyZXR1cm4gTmFOOyAvLyBOdW1iZXIoJysweDEnKSBzaG91bGQgYmUgTmFOLCBvbGQgVjggZml4XG4gICAgfSBlbHNlIGlmKGZpcnN0ID09PSA0OCl7XG4gICAgICBzd2l0Y2goaXQuY2hhckNvZGVBdCgxKSl7XG4gICAgICAgIGNhc2UgNjYgOiBjYXNlIDk4ICA6IHJhZGl4ID0gMjsgbWF4Q29kZSA9IDQ5OyBicmVhazsgLy8gZmFzdCBlcXVhbCAvXjBiWzAxXSskL2lcbiAgICAgICAgY2FzZSA3OSA6IGNhc2UgMTExIDogcmFkaXggPSA4OyBtYXhDb2RlID0gNTU7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIC9eMG9bMC03XSskL2lcbiAgICAgICAgZGVmYXVsdCA6IHJldHVybiAraXQ7XG4gICAgICB9XG4gICAgICBmb3IodmFyIGRpZ2l0cyA9IGl0LnNsaWNlKDIpLCBpID0gMCwgbCA9IGRpZ2l0cy5sZW5ndGgsIGNvZGU7IGkgPCBsOyBpKyspe1xuICAgICAgICBjb2RlID0gZGlnaXRzLmNoYXJDb2RlQXQoaSk7XG4gICAgICAgIC8vIHBhcnNlSW50IHBhcnNlcyBhIHN0cmluZyB0byBhIGZpcnN0IHVuYXZhaWxhYmxlIHN5bWJvbFxuICAgICAgICAvLyBidXQgVG9OdW1iZXIgc2hvdWxkIHJldHVybiBOYU4gaWYgYSBzdHJpbmcgY29udGFpbnMgdW5hdmFpbGFibGUgc3ltYm9sc1xuICAgICAgICBpZihjb2RlIDwgNDggfHwgY29kZSA+IG1heENvZGUpcmV0dXJuIE5hTjtcbiAgICAgIH0gcmV0dXJuIHBhcnNlSW50KGRpZ2l0cywgcmFkaXgpO1xuICAgIH1cbiAgfSByZXR1cm4gK2l0O1xufTtcblxuaWYoISROdW1iZXIoJyAwbzEnKSB8fCAhJE51bWJlcignMGIxJykgfHwgJE51bWJlcignKzB4MScpKXtcbiAgJE51bWJlciA9IGZ1bmN0aW9uIE51bWJlcih2YWx1ZSl7XG4gICAgdmFyIGl0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDEgPyAwIDogdmFsdWVcbiAgICAgICwgdGhhdCA9IHRoaXM7XG4gICAgcmV0dXJuIHRoYXQgaW5zdGFuY2VvZiAkTnVtYmVyXG4gICAgICAvLyBjaGVjayBvbiAxLi5jb25zdHJ1Y3Rvcihmb28pIGNhc2VcbiAgICAgICYmIChCUk9LRU5fQ09GID8gZmFpbHMoZnVuY3Rpb24oKXsgcHJvdG8udmFsdWVPZi5jYWxsKHRoYXQpOyB9KSA6IGNvZih0aGF0KSAhPSBOVU1CRVIpXG4gICAgICAgID8gbmV3IEJhc2UodG9OdW1iZXIoaXQpKSA6IHRvTnVtYmVyKGl0KTtcbiAgfTtcbiAgJC5lYWNoLmNhbGwocmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJykgPyAkLmdldE5hbWVzKEJhc2UpIDogKFxuICAgIC8vIEVTMzpcbiAgICAnTUFYX1ZBTFVFLE1JTl9WQUxVRSxOYU4sTkVHQVRJVkVfSU5GSU5JVFksUE9TSVRJVkVfSU5GSU5JVFksJyArXG4gICAgLy8gRVM2IChpbiBjYXNlLCBpZiBtb2R1bGVzIHdpdGggRVM2IE51bWJlciBzdGF0aWNzIHJlcXVpcmVkIGJlZm9yZSk6XG4gICAgJ0VQU0lMT04saXNGaW5pdGUsaXNJbnRlZ2VyLGlzTmFOLGlzU2FmZUludGVnZXIsTUFYX1NBRkVfSU5URUdFUiwnICtcbiAgICAnTUlOX1NBRkVfSU5URUdFUixwYXJzZUZsb2F0LHBhcnNlSW50LGlzSW50ZWdlcidcbiAgKS5zcGxpdCgnLCcpLCBmdW5jdGlvbihrZXkpe1xuICAgIGlmKGhhcyhCYXNlLCBrZXkpICYmICFoYXMoJE51bWJlciwga2V5KSl7XG4gICAgICAkLnNldERlc2MoJE51bWJlciwga2V5LCAkLmdldERlc2MoQmFzZSwga2V5KSk7XG4gICAgfVxuICB9KTtcbiAgJE51bWJlci5wcm90b3R5cGUgPSBwcm90bztcbiAgcHJvdG8uY29uc3RydWN0b3IgPSAkTnVtYmVyO1xuICByZXF1aXJlKCcuLyQucmVkZWZpbmUnKShnbG9iYWwsIE5VTUJFUiwgJE51bWJlcik7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3Rvci5qc1xuICoqIG1vZHVsZSBpZCA9IDYzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcclxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xyXG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxyXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBTKXtcclxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiBpdDtcclxuICB2YXIgZm4sIHZhbDtcclxuICBpZihTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XHJcbiAgaWYodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xyXG4gIGlmKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XHJcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xyXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQudG8tcHJpbWl0aXZlLmpzXG4gKiogbW9kdWxlIGlkID0gNjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi8kLmZhaWxzJylcbiAgLCBzcGFjZXMgID0gJ1xceDA5XFx4MEFcXHgwQlxceDBDXFx4MERcXHgyMFxceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzJyArXG4gICAgICAnXFx1MjAwNFxcdTIwMDVcXHUyMDA2XFx1MjAwN1xcdTIwMDhcXHUyMDA5XFx1MjAwQVxcdTIwMkZcXHUyMDVGXFx1MzAwMFxcdTIwMjhcXHUyMDI5XFx1RkVGRidcbiAgLCBzcGFjZSAgID0gJ1snICsgc3BhY2VzICsgJ10nXG4gICwgbm9uICAgICA9ICdcXHUyMDBiXFx1MDA4NSdcbiAgLCBsdHJpbSAgID0gUmVnRXhwKCdeJyArIHNwYWNlICsgc3BhY2UgKyAnKicpXG4gICwgcnRyaW0gICA9IFJlZ0V4cChzcGFjZSArIHNwYWNlICsgJyokJyk7XG5cbnZhciBleHBvcnRlciA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBleHAgID0ge307XG4gIGV4cFtLRVldID0gZXhlYyh0cmltKTtcbiAgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpe1xuICAgIHJldHVybiAhIXNwYWNlc1tLRVldKCkgfHwgbm9uW0tFWV0oKSAhPSBub247XG4gIH0pLCAnU3RyaW5nJywgZXhwKTtcbn07XG5cbi8vIDEgLT4gU3RyaW5nI3RyaW1MZWZ0XG4vLyAyIC0+IFN0cmluZyN0cmltUmlnaHRcbi8vIDMgLT4gU3RyaW5nI3RyaW1cbnZhciB0cmltID0gZXhwb3J0ZXIudHJpbSA9IGZ1bmN0aW9uKHN0cmluZywgVFlQRSl7XG4gIHN0cmluZyA9IFN0cmluZyhkZWZpbmVkKHN0cmluZykpO1xuICBpZihUWVBFICYgMSlzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShsdHJpbSwgJycpO1xuICBpZihUWVBFICYgMilzdHJpbmcgPSBzdHJpbmcucmVwbGFjZShydHJpbSwgJycpO1xuICByZXR1cm4gc3RyaW5nO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRlcjtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnN0cmluZy10cmltLmpzXG4gKiogbW9kdWxlIGlkID0gNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjEuMi4xIE51bWJlci5FUFNJTE9OXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7RVBTSUxPTjogTWF0aC5wb3coMiwgLTUyKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuZXBzaWxvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4xLjIuMiBOdW1iZXIuaXNGaW5pdGUobnVtYmVyKVxudmFyICRleHBvcnQgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIF9pc0Zpbml0ZSA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKS5pc0Zpbml0ZTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7XG4gIGlzRmluaXRlOiBmdW5jdGlvbiBpc0Zpbml0ZShpdCl7XG4gICAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnbnVtYmVyJyAmJiBfaXNGaW5pdGUoaXQpO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWZpbml0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4xLjIuMyBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcilcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtpc0ludGVnZXI6IHJlcXVpcmUoJy4vJC5pcy1pbnRlZ2VyJyl9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWludGVnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMS4yLjMgTnVtYmVyLmlzSW50ZWdlcihudW1iZXIpXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBmbG9vciAgICA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGlzSW50ZWdlcihpdCl7XG4gIHJldHVybiAhaXNPYmplY3QoaXQpICYmIGlzRmluaXRlKGl0KSAmJiBmbG9vcihpdCkgPT09IGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlzLWludGVnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMS4yLjQgTnVtYmVyLmlzTmFOKG51bWJlcilcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtcbiAgaXNOYU46IGZ1bmN0aW9uIGlzTmFOKG51bWJlcil7XG4gICAgcmV0dXJuIG51bWJlciAhPSBudW1iZXI7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtbmFuLmpzXG4gKiogbW9kdWxlIGlkID0gNzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjEuMi41IE51bWJlci5pc1NhZmVJbnRlZ2VyKG51bWJlcilcbnZhciAkZXhwb3J0ICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBpc0ludGVnZXIgPSByZXF1aXJlKCcuLyQuaXMtaW50ZWdlcicpXG4gICwgYWJzICAgICAgID0gTWF0aC5hYnM7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge1xuICBpc1NhZmVJbnRlZ2VyOiBmdW5jdGlvbiBpc1NhZmVJbnRlZ2VyKG51bWJlcil7XG4gICAgcmV0dXJuIGlzSW50ZWdlcihudW1iZXIpICYmIGFicyhudW1iZXIpIDw9IDB4MWZmZmZmZmZmZmZmZmY7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtc2FmZS1pbnRlZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjEuMi42IE51bWJlci5NQVhfU0FGRV9JTlRFR0VSXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7TUFYX1NBRkVfSU5URUdFUjogMHgxZmZmZmZmZmZmZmZmZn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWF4LXNhZmUtaW50ZWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDcyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4xLjIuMTAgTnVtYmVyLk1JTl9TQUZFX0lOVEVHRVJcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtNSU5fU0FGRV9JTlRFR0VSOiAtMHgxZmZmZmZmZmZmZmZmZn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIubWluLXNhZmUtaW50ZWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDczXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4xLjIuMTIgTnVtYmVyLnBhcnNlRmxvYXQoc3RyaW5nKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge3BhcnNlRmxvYXQ6IHBhcnNlRmxvYXR9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWZsb2F0LmpzXG4gKiogbW9kdWxlIGlkID0gNzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjEuMi4xMyBOdW1iZXIucGFyc2VJbnQoc3RyaW5nLCByYWRpeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtwYXJzZUludDogcGFyc2VJbnR9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWludC5qc1xuICoqIG1vZHVsZSBpZCA9IDc1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4yLjIuMyBNYXRoLmFjb3NoKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGxvZzFwICAgPSByZXF1aXJlKCcuLyQubWF0aC1sb2cxcCcpXG4gICwgc3FydCAgICA9IE1hdGguc3FydFxuICAsICRhY29zaCAgPSBNYXRoLmFjb3NoO1xuXG4vLyBWOCBidWcgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTM1MDlcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogISgkYWNvc2ggJiYgTWF0aC5mbG9vcigkYWNvc2goTnVtYmVyLk1BWF9WQUxVRSkpID09IDcxMCksICdNYXRoJywge1xuICBhY29zaDogZnVuY3Rpb24gYWNvc2goeCl7XG4gICAgcmV0dXJuICh4ID0gK3gpIDwgMSA/IE5hTiA6IHggPiA5NDkwNjI2NS42MjQyNTE1NlxuICAgICAgPyBNYXRoLmxvZyh4KSArIE1hdGguTE4yXG4gICAgICA6IGxvZzFwKHggLSAxICsgc3FydCh4IC0gMSkgKiBzcXJ0KHggKyAxKSk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFjb3NoLmpzXG4gKiogbW9kdWxlIGlkID0gNzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4yMCBNYXRoLmxvZzFwKHgpXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGgubG9nMXAgfHwgZnVuY3Rpb24gbG9nMXAoeCl7XG4gIHJldHVybiAoeCA9ICt4KSA+IC0xZS04ICYmIHggPCAxZS04ID8geCAtIHggKiB4IC8gMiA6IE1hdGgubG9nKDEgKyB4KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5tYXRoLWxvZzFwLmpzXG4gKiogbW9kdWxlIGlkID0gNzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi41IE1hdGguYXNpbmgoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG5mdW5jdGlvbiBhc2luaCh4KXtcbiAgcmV0dXJuICFpc0Zpbml0ZSh4ID0gK3gpIHx8IHggPT0gMCA/IHggOiB4IDwgMCA/IC1hc2luaCgteCkgOiBNYXRoLmxvZyh4ICsgTWF0aC5zcXJ0KHggKiB4ICsgMSkpO1xufVxuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7YXNpbmg6IGFzaW5ofSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYXNpbmguanNcbiAqKiBtb2R1bGUgaWQgPSA3OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjcgTWF0aC5hdGFuaCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgYXRhbmg6IGZ1bmN0aW9uIGF0YW5oKHgpe1xuICAgIHJldHVybiAoeCA9ICt4KSA9PSAwID8geCA6IE1hdGgubG9nKCgxICsgeCkgLyAoMSAtIHgpKSAvIDI7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmF0YW5oLmpzXG4gKiogbW9kdWxlIGlkID0gNzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi45IE1hdGguY2JydCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBzaWduICAgID0gcmVxdWlyZSgnLi8kLm1hdGgtc2lnbicpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGNicnQ6IGZ1bmN0aW9uIGNicnQoeCl7XG4gICAgcmV0dXJuIHNpZ24oeCA9ICt4KSAqIE1hdGgucG93KE1hdGguYWJzKHgpLCAxIC8gMyk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNicnQuanNcbiAqKiBtb2R1bGUgaWQgPSA4MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjI4IE1hdGguc2lnbih4KVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLnNpZ24gfHwgZnVuY3Rpb24gc2lnbih4KXtcbiAgcmV0dXJuICh4ID0gK3gpID09IDAgfHwgeCAhPSB4ID8geCA6IHggPCAwID8gLTEgOiAxO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm1hdGgtc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDgxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4yLjIuMTEgTWF0aC5jbHozMih4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgY2x6MzI6IGZ1bmN0aW9uIGNsejMyKHgpe1xuICAgIHJldHVybiAoeCA+Pj49IDApID8gMzEgLSBNYXRoLmZsb29yKE1hdGgubG9nKHggKyAwLjUpICogTWF0aC5MT0cyRSkgOiAzMjtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2x6MzIuanNcbiAqKiBtb2R1bGUgaWQgPSA4MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjEyIE1hdGguY29zaCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBleHAgICAgID0gTWF0aC5leHA7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgY29zaDogZnVuY3Rpb24gY29zaCh4KXtcbiAgICByZXR1cm4gKGV4cCh4ID0gK3gpICsgZXhwKC14KSkgLyAyO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jb3NoLmpzXG4gKiogbW9kdWxlIGlkID0gODNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4xNCBNYXRoLmV4cG0xKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge2V4cG0xOiByZXF1aXJlKCcuLyQubWF0aC1leHBtMScpfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZXhwbTEuanNcbiAqKiBtb2R1bGUgaWQgPSA4NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjE0IE1hdGguZXhwbTEoeClcbm1vZHVsZS5leHBvcnRzID0gTWF0aC5leHBtMSB8fCBmdW5jdGlvbiBleHBtMSh4KXtcbiAgcmV0dXJuICh4ID0gK3gpID09IDAgPyB4IDogeCA+IC0xZS02ICYmIHggPCAxZS02ID8geCArIHggKiB4IC8gMiA6IE1hdGguZXhwKHgpIC0gMTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5tYXRoLWV4cG0xLmpzXG4gKiogbW9kdWxlIGlkID0gODVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4xNiBNYXRoLmZyb3VuZCh4KVxudmFyICRleHBvcnQgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHNpZ24gICAgICA9IHJlcXVpcmUoJy4vJC5tYXRoLXNpZ24nKVxuICAsIHBvdyAgICAgICA9IE1hdGgucG93XG4gICwgRVBTSUxPTiAgID0gcG93KDIsIC01MilcbiAgLCBFUFNJTE9OMzIgPSBwb3coMiwgLTIzKVxuICAsIE1BWDMyICAgICA9IHBvdygyLCAxMjcpICogKDIgLSBFUFNJTE9OMzIpXG4gICwgTUlOMzIgICAgID0gcG93KDIsIC0xMjYpO1xuXG52YXIgcm91bmRUaWVzVG9FdmVuID0gZnVuY3Rpb24obil7XG4gIHJldHVybiBuICsgMSAvIEVQU0lMT04gLSAxIC8gRVBTSUxPTjtcbn07XG5cblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBmcm91bmQ6IGZ1bmN0aW9uIGZyb3VuZCh4KXtcbiAgICB2YXIgJGFicyAgPSBNYXRoLmFicyh4KVxuICAgICAgLCAkc2lnbiA9IHNpZ24oeClcbiAgICAgICwgYSwgcmVzdWx0O1xuICAgIGlmKCRhYnMgPCBNSU4zMilyZXR1cm4gJHNpZ24gKiByb3VuZFRpZXNUb0V2ZW4oJGFicyAvIE1JTjMyIC8gRVBTSUxPTjMyKSAqIE1JTjMyICogRVBTSUxPTjMyO1xuICAgIGEgPSAoMSArIEVQU0lMT04zMiAvIEVQU0lMT04pICogJGFicztcbiAgICByZXN1bHQgPSBhIC0gKGEgLSAkYWJzKTtcbiAgICBpZihyZXN1bHQgPiBNQVgzMiB8fCByZXN1bHQgIT0gcmVzdWx0KXJldHVybiAkc2lnbiAqIEluZmluaXR5O1xuICAgIHJldHVybiAkc2lnbiAqIHJlc3VsdDtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZnJvdW5kLmpzXG4gKiogbW9kdWxlIGlkID0gODZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4xNyBNYXRoLmh5cG90KFt2YWx1ZTFbLCB2YWx1ZTJbLCDigKYgXV1dKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBhYnMgICAgID0gTWF0aC5hYnM7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgaHlwb3Q6IGZ1bmN0aW9uIGh5cG90KHZhbHVlMSwgdmFsdWUyKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHZhciBzdW0gICA9IDBcbiAgICAgICwgaSAgICAgPSAwXG4gICAgICAsICQkICAgID0gYXJndW1lbnRzXG4gICAgICAsICQkbGVuID0gJCQubGVuZ3RoXG4gICAgICAsIGxhcmcgID0gMFxuICAgICAgLCBhcmcsIGRpdjtcbiAgICB3aGlsZShpIDwgJCRsZW4pe1xuICAgICAgYXJnID0gYWJzKCQkW2krK10pO1xuICAgICAgaWYobGFyZyA8IGFyZyl7XG4gICAgICAgIGRpdiAgPSBsYXJnIC8gYXJnO1xuICAgICAgICBzdW0gID0gc3VtICogZGl2ICogZGl2ICsgMTtcbiAgICAgICAgbGFyZyA9IGFyZztcbiAgICAgIH0gZWxzZSBpZihhcmcgPiAwKXtcbiAgICAgICAgZGl2ICA9IGFyZyAvIGxhcmc7XG4gICAgICAgIHN1bSArPSBkaXYgKiBkaXY7XG4gICAgICB9IGVsc2Ugc3VtICs9IGFyZztcbiAgICB9XG4gICAgcmV0dXJuIGxhcmcgPT09IEluZmluaXR5ID8gSW5maW5pdHkgOiBsYXJnICogTWF0aC5zcXJ0KHN1bSk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmh5cG90LmpzXG4gKiogbW9kdWxlIGlkID0gODdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4xOCBNYXRoLmltdWwoeCwgeSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgJGltdWwgICA9IE1hdGguaW11bDtcblxuLy8gc29tZSBXZWJLaXQgdmVyc2lvbnMgZmFpbHMgd2l0aCBiaWcgbnVtYmVycywgc29tZSBoYXMgd3JvbmcgYXJpdHlcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuICRpbXVsKDB4ZmZmZmZmZmYsIDUpICE9IC01IHx8ICRpbXVsLmxlbmd0aCAhPSAyO1xufSksICdNYXRoJywge1xuICBpbXVsOiBmdW5jdGlvbiBpbXVsKHgsIHkpe1xuICAgIHZhciBVSU5UMTYgPSAweGZmZmZcbiAgICAgICwgeG4gPSAreFxuICAgICAgLCB5biA9ICt5XG4gICAgICAsIHhsID0gVUlOVDE2ICYgeG5cbiAgICAgICwgeWwgPSBVSU5UMTYgJiB5bjtcbiAgICByZXR1cm4gMCB8IHhsICogeWwgKyAoKFVJTlQxNiAmIHhuID4+PiAxNikgKiB5bCArIHhsICogKFVJTlQxNiAmIHluID4+PiAxNikgPDwgMTYgPj4+IDApO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5pbXVsLmpzXG4gKiogbW9kdWxlIGlkID0gODhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4yMSBNYXRoLmxvZzEwKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBsb2cxMDogZnVuY3Rpb24gbG9nMTAoeCl7XG4gICAgcmV0dXJuIE1hdGgubG9nKHgpIC8gTWF0aC5MTjEwO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cxMC5qc1xuICoqIG1vZHVsZSBpZCA9IDg5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4yLjIuMjAgTWF0aC5sb2cxcCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtsb2cxcDogcmVxdWlyZSgnLi8kLm1hdGgtbG9nMXAnKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwLmpzXG4gKiogbW9kdWxlIGlkID0gOTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4yMiBNYXRoLmxvZzIoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGxvZzI6IGZ1bmN0aW9uIGxvZzIoeCl7XG4gICAgcmV0dXJuIE1hdGgubG9nKHgpIC8gTWF0aC5MTjI7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzIuanNcbiAqKiBtb2R1bGUgaWQgPSA5MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjI4IE1hdGguc2lnbih4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtzaWduOiByZXF1aXJlKCcuLyQubWF0aC1zaWduJyl9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaWduLmpzXG4gKiogbW9kdWxlIGlkID0gOTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4zMCBNYXRoLnNpbmgoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgZXhwbTEgICA9IHJlcXVpcmUoJy4vJC5tYXRoLWV4cG0xJylcbiAgLCBleHAgICAgID0gTWF0aC5leHA7XG5cbi8vIFY4IG5lYXIgQ2hyb21pdW0gMzggaGFzIGEgcHJvYmxlbSB3aXRoIHZlcnkgc21hbGwgbnVtYmVyc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gIU1hdGguc2luaCgtMmUtMTcpICE9IC0yZS0xNztcbn0pLCAnTWF0aCcsIHtcbiAgc2luaDogZnVuY3Rpb24gc2luaCh4KXtcbiAgICByZXR1cm4gTWF0aC5hYnMoeCA9ICt4KSA8IDFcbiAgICAgID8gKGV4cG0xKHgpIC0gZXhwbTEoLXgpKSAvIDJcbiAgICAgIDogKGV4cCh4IC0gMSkgLSBleHAoLXggLSAxKSkgKiAoTWF0aC5FIC8gMik7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnNpbmguanNcbiAqKiBtb2R1bGUgaWQgPSA5M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjMzIE1hdGgudGFuaCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBleHBtMSAgID0gcmVxdWlyZSgnLi8kLm1hdGgtZXhwbTEnKVxuICAsIGV4cCAgICAgPSBNYXRoLmV4cDtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICB0YW5oOiBmdW5jdGlvbiB0YW5oKHgpe1xuICAgIHZhciBhID0gZXhwbTEoeCA9ICt4KVxuICAgICAgLCBiID0gZXhwbTEoLXgpO1xuICAgIHJldHVybiBhID09IEluZmluaXR5ID8gMSA6IGIgPT0gSW5maW5pdHkgPyAtMSA6IChhIC0gYikgLyAoZXhwKHgpICsgZXhwKC14KSk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnRhbmguanNcbiAqKiBtb2R1bGUgaWQgPSA5NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjM0IE1hdGgudHJ1bmMoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIHRydW5jOiBmdW5jdGlvbiB0cnVuYyhpdCl7XG4gICAgcmV0dXJuIChpdCA+IDAgPyBNYXRoLmZsb29yIDogTWF0aC5jZWlsKShpdCk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnRydW5jLmpzXG4gKiogbW9kdWxlIGlkID0gOTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHRvSW5kZXggICAgICAgID0gcmVxdWlyZSgnLi8kLnRvLWluZGV4JylcbiAgLCBmcm9tQ2hhckNvZGUgICA9IFN0cmluZy5mcm9tQ2hhckNvZGVcbiAgLCAkZnJvbUNvZGVQb2ludCA9IFN0cmluZy5mcm9tQ29kZVBvaW50O1xuXG4vLyBsZW5ndGggc2hvdWxkIGJlIDEsIG9sZCBGRiBwcm9ibGVtXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghISRmcm9tQ29kZVBvaW50ICYmICRmcm9tQ29kZVBvaW50Lmxlbmd0aCAhPSAxKSwgJ1N0cmluZycsIHtcbiAgLy8gMjEuMS4yLjIgU3RyaW5nLmZyb21Db2RlUG9pbnQoLi4uY29kZVBvaW50cylcbiAgZnJvbUNvZGVQb2ludDogZnVuY3Rpb24gZnJvbUNvZGVQb2ludCh4KXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICAgIHZhciByZXMgICA9IFtdXG4gICAgICAsICQkICAgID0gYXJndW1lbnRzXG4gICAgICAsICQkbGVuID0gJCQubGVuZ3RoXG4gICAgICAsIGkgICAgID0gMFxuICAgICAgLCBjb2RlO1xuICAgIHdoaWxlKCQkbGVuID4gaSl7XG4gICAgICBjb2RlID0gKyQkW2krK107XG4gICAgICBpZih0b0luZGV4KGNvZGUsIDB4MTBmZmZmKSAhPT0gY29kZSl0aHJvdyBSYW5nZUVycm9yKGNvZGUgKyAnIGlzIG5vdCBhIHZhbGlkIGNvZGUgcG9pbnQnKTtcbiAgICAgIHJlcy5wdXNoKGNvZGUgPCAweDEwMDAwXG4gICAgICAgID8gZnJvbUNoYXJDb2RlKGNvZGUpXG4gICAgICAgIDogZnJvbUNoYXJDb2RlKCgoY29kZSAtPSAweDEwMDAwKSA+PiAxMCkgKyAweGQ4MDAsIGNvZGUgJSAweDQwMCArIDB4ZGMwMClcbiAgICAgICk7XG4gICAgfSByZXR1cm4gcmVzLmpvaW4oJycpO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmZyb20tY29kZS1wb2ludC5qc1xuICoqIG1vZHVsZSBpZCA9IDk2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vJC50by1sZW5ndGgnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdTdHJpbmcnLCB7XG4gIC8vIDIxLjEuMi40IFN0cmluZy5yYXcoY2FsbFNpdGUsIC4uLnN1YnN0aXR1dGlvbnMpXG4gIHJhdzogZnVuY3Rpb24gcmF3KGNhbGxTaXRlKXtcbiAgICB2YXIgdHBsICAgPSB0b0lPYmplY3QoY2FsbFNpdGUucmF3KVxuICAgICAgLCBsZW4gICA9IHRvTGVuZ3RoKHRwbC5sZW5ndGgpXG4gICAgICAsICQkICAgID0gYXJndW1lbnRzXG4gICAgICAsICQkbGVuID0gJCQubGVuZ3RoXG4gICAgICAsIHJlcyAgID0gW11cbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHdoaWxlKGxlbiA+IGkpe1xuICAgICAgcmVzLnB1c2goU3RyaW5nKHRwbFtpKytdKSk7XG4gICAgICBpZihpIDwgJCRsZW4pcmVzLnB1c2goU3RyaW5nKCQkW2ldKSk7XG4gICAgfSByZXR1cm4gcmVzLmpvaW4oJycpO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJhdy5qc1xuICoqIG1vZHVsZSBpZCA9IDk3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAyMS4xLjMuMjUgU3RyaW5nLnByb3RvdHlwZS50cmltKClcbnJlcXVpcmUoJy4vJC5zdHJpbmctdHJpbScpKCd0cmltJywgZnVuY3Rpb24oJHRyaW0pe1xuICByZXR1cm4gZnVuY3Rpb24gdHJpbSgpe1xuICAgIHJldHVybiAkdHJpbSh0aGlzLCAzKTtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcudHJpbS5qc1xuICoqIG1vZHVsZSBpZCA9IDk4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ICA9IHJlcXVpcmUoJy4vJC5zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi8kLml0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBpbmRleCA9IHRoaXMuX2lcbiAgICAsIHBvaW50O1xuICBpZihpbmRleCA+PSBPLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4ge3ZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2V9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDk5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi8kLnRvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUT19TVFJJTkcpe1xuICByZXR1cm4gZnVuY3Rpb24odGhhdCwgcG9zKXtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICAgLCBpID0gdG9JbnRlZ2VyKHBvcylcbiAgICAgICwgbCA9IHMubGVuZ3RoXG4gICAgICAsIGEsIGI7XG4gICAgaWYoaSA8IDAgfHwgaSA+PSBsKXJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuc3RyaW5nLWF0LmpzXG4gKiogbW9kdWxlIGlkID0gMTAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSAgICAgICAgPSByZXF1aXJlKCcuLyQubGlicmFyeScpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vJC5yZWRlZmluZScpXG4gICwgaGlkZSAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGlkZScpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGFzJylcbiAgLCBJdGVyYXRvcnMgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKVxuICAsICRpdGVyQ3JlYXRlICAgID0gcmVxdWlyZSgnLi8kLml0ZXItY3JlYXRlJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vJC5zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgZ2V0UHJvdG8gICAgICAgPSByZXF1aXJlKCcuLyQnKS5nZXRQcm90b1xuICAsIElURVJBVE9SICAgICAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgQlVHR1kgICAgICAgICAgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSkgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxuICAsIEZGX0lURVJBVE9SICAgID0gJ0BAaXRlcmF0b3InXG4gICwgS0VZUyAgICAgICAgICAgPSAna2V5cydcbiAgLCBWQUxVRVMgICAgICAgICA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCl7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uKGtpbmQpe1xuICAgIGlmKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKXJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2goa2luZCl7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyAgICAgICAgPSBOQU1FICsgJyBJdGVyYXRvcidcbiAgICAsIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFU1xuICAgICwgVkFMVUVTX0JVRyA9IGZhbHNlXG4gICAgLCBwcm90byAgICAgID0gQmFzZS5wcm90b3R5cGVcbiAgICAsICRuYXRpdmUgICAgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF1cbiAgICAsICRkZWZhdWx0ICAgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKVxuICAgICwgbWV0aG9kcywga2V5O1xuICAvLyBGaXggbmF0aXZlXG4gIGlmKCRuYXRpdmUpe1xuICAgIHZhciBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvKCRkZWZhdWx0LmNhbGwobmV3IEJhc2UpKTtcbiAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgLy8gRkYgZml4XG4gICAgaWYoIUxJQlJBUlkgJiYgaGFzKHByb3RvLCBGRl9JVEVSQVRPUikpaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgICBpZihERUZfVkFMVUVTICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKXtcbiAgICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgICB9XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKXtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddICA9IHJldHVyblRoaXM7XG4gIGlmKERFRkFVTFQpe1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6ICBERUZfVkFMVUVTICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiAgICBJU19TRVQgICAgICA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpXG4gICAgfTtcbiAgICBpZihGT1JDRUQpZm9yKGtleSBpbiBtZXRob2RzKXtcbiAgICAgIGlmKCEoa2V5IGluIHByb3RvKSlyZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXRlci1kZWZpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0ge307XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5pdGVyYXRvcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZGVzY3JpcHRvciAgICAgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuLyQuaGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCl7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9ICQuY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7bmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KX0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5pdGVyLWNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCAkYXQgICAgID0gcmVxdWlyZSgnLi8kLnN0cmluZy1hdCcpKGZhbHNlKTtcbiRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuICAvLyAyMS4xLjMuMyBTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0KHBvcylcbiAgY29kZVBvaW50QXQ6IGZ1bmN0aW9uIGNvZGVQb2ludEF0KHBvcyl7XG4gICAgcmV0dXJuICRhdCh0aGlzLCBwb3MpO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIxLjEuMy42IFN0cmluZy5wcm90b3R5cGUuZW5kc1dpdGgoc2VhcmNoU3RyaW5nIFssIGVuZFBvc2l0aW9uXSlcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJylcbiAgLCBjb250ZXh0ICAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWNvbnRleHQnKVxuICAsIEVORFNfV0lUSCA9ICdlbmRzV2l0aCdcbiAgLCAkZW5kc1dpdGggPSAnJ1tFTkRTX1dJVEhdO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vJC5mYWlscy1pcy1yZWdleHAnKShFTkRTX1dJVEgpLCAnU3RyaW5nJywge1xuICBlbmRzV2l0aDogZnVuY3Rpb24gZW5kc1dpdGgoc2VhcmNoU3RyaW5nIC8qLCBlbmRQb3NpdGlvbiA9IEBsZW5ndGggKi8pe1xuICAgIHZhciB0aGF0ID0gY29udGV4dCh0aGlzLCBzZWFyY2hTdHJpbmcsIEVORFNfV0lUSClcbiAgICAgICwgJCQgICA9IGFyZ3VtZW50c1xuICAgICAgLCBlbmRQb3NpdGlvbiA9ICQkLmxlbmd0aCA+IDEgPyAkJFsxXSA6IHVuZGVmaW5lZFxuICAgICAgLCBsZW4gICAgPSB0b0xlbmd0aCh0aGF0Lmxlbmd0aClcbiAgICAgICwgZW5kICAgID0gZW5kUG9zaXRpb24gPT09IHVuZGVmaW5lZCA/IGxlbiA6IE1hdGgubWluKHRvTGVuZ3RoKGVuZFBvc2l0aW9uKSwgbGVuKVxuICAgICAgLCBzZWFyY2ggPSBTdHJpbmcoc2VhcmNoU3RyaW5nKTtcbiAgICByZXR1cm4gJGVuZHNXaXRoXG4gICAgICA/ICRlbmRzV2l0aC5jYWxsKHRoYXQsIHNlYXJjaCwgZW5kKVxuICAgICAgOiB0aGF0LnNsaWNlKGVuZCAtIHNlYXJjaC5sZW5ndGgsIGVuZCkgPT09IHNlYXJjaDtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5lbmRzLXdpdGguanNcbiAqKiBtb2R1bGUgaWQgPSAxMDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGhlbHBlciBmb3IgU3RyaW5nI3tzdGFydHNXaXRoLCBlbmRzV2l0aCwgaW5jbHVkZXN9XG52YXIgaXNSZWdFeHAgPSByZXF1aXJlKCcuLyQuaXMtcmVnZXhwJylcbiAgLCBkZWZpbmVkICA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGhhdCwgc2VhcmNoU3RyaW5nLCBOQU1FKXtcbiAgaWYoaXNSZWdFeHAoc2VhcmNoU3RyaW5nKSl0aHJvdyBUeXBlRXJyb3IoJ1N0cmluZyMnICsgTkFNRSArIFwiIGRvZXNuJ3QgYWNjZXB0IHJlZ2V4IVwiKTtcbiAgcmV0dXJuIFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zdHJpbmctY29udGV4dC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4yLjggSXNSZWdFeHAoYXJndW1lbnQpXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBjb2YgICAgICA9IHJlcXVpcmUoJy4vJC5jb2YnKVxuICAsIE1BVENIICAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdtYXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBpc1JlZ0V4cDtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiAoKGlzUmVnRXhwID0gaXRbTUFUQ0hdKSAhPT0gdW5kZWZpbmVkID8gISFpc1JlZ0V4cCA6IGNvZihpdCkgPT0gJ1JlZ0V4cCcpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlzLXJlZ2V4cC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIE1BVENIID0gcmVxdWlyZSgnLi8kLndrcycpKCdtYXRjaCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgcmUgPSAvLi87XG4gIHRyeSB7XG4gICAgJy8uLydbS0VZXShyZSk7XG4gIH0gY2F0Y2goZSl7XG4gICAgdHJ5IHtcbiAgICAgIHJlW01BVENIXSA9IGZhbHNlO1xuICAgICAgcmV0dXJuICEnLy4vJ1tLRVldKHJlKTtcbiAgICB9IGNhdGNoKGYpeyAvKiBlbXB0eSAqLyB9XG4gIH0gcmV0dXJuIHRydWU7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZmFpbHMtaXMtcmVnZXhwLmpzXG4gKiogbW9kdWxlIGlkID0gMTA4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMS4xLjMuNyBTdHJpbmcucHJvdG90eXBlLmluY2x1ZGVzKHNlYXJjaFN0cmluZywgcG9zaXRpb24gPSAwKVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgY29udGV4dCAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWNvbnRleHQnKVxuICAsIElOQ0xVREVTID0gJ2luY2x1ZGVzJztcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuLyQuZmFpbHMtaXMtcmVnZXhwJykoSU5DTFVERVMpLCAnU3RyaW5nJywge1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoc2VhcmNoU3RyaW5nIC8qLCBwb3NpdGlvbiA9IDAgKi8pe1xuICAgIHJldHVybiAhIX5jb250ZXh0KHRoaXMsIHNlYXJjaFN0cmluZywgSU5DTFVERVMpXG4gICAgICAuaW5kZXhPZihzZWFyY2hTdHJpbmcsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pbmNsdWRlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDEwOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuICAvLyAyMS4xLjMuMTMgU3RyaW5nLnByb3RvdHlwZS5yZXBlYXQoY291bnQpXG4gIHJlcGVhdDogcmVxdWlyZSgnLi8kLnN0cmluZy1yZXBlYXQnKVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5yZXBlYXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLyQudG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiByZXBlYXQoY291bnQpe1xuICB2YXIgc3RyID0gU3RyaW5nKGRlZmluZWQodGhpcykpXG4gICAgLCByZXMgPSAnJ1xuICAgICwgbiAgID0gdG9JbnRlZ2VyKGNvdW50KTtcbiAgaWYobiA8IDAgfHwgbiA9PSBJbmZpbml0eSl0aHJvdyBSYW5nZUVycm9yKFwiQ291bnQgY2FuJ3QgYmUgbmVnYXRpdmVcIik7XG4gIGZvcig7biA+IDA7IChuID4+Pj0gMSkgJiYgKHN0ciArPSBzdHIpKWlmKG4gJiAxKXJlcyArPSBzdHI7XG4gIHJldHVybiByZXM7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuc3RyaW5nLXJlcGVhdC5qc1xuICoqIG1vZHVsZSBpZCA9IDExMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjEuMS4zLjE4IFN0cmluZy5wcm90b3R5cGUuc3RhcnRzV2l0aChzZWFyY2hTdHJpbmcgWywgcG9zaXRpb24gXSlcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpXG4gICwgY29udGV4dCAgICAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWNvbnRleHQnKVxuICAsIFNUQVJUU19XSVRIID0gJ3N0YXJ0c1dpdGgnXG4gICwgJHN0YXJ0c1dpdGggPSAnJ1tTVEFSVFNfV0lUSF07XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi8kLmZhaWxzLWlzLXJlZ2V4cCcpKFNUQVJUU19XSVRIKSwgJ1N0cmluZycsIHtcbiAgc3RhcnRzV2l0aDogZnVuY3Rpb24gc3RhcnRzV2l0aChzZWFyY2hTdHJpbmcgLyosIHBvc2l0aW9uID0gMCAqLyl7XG4gICAgdmFyIHRoYXQgICA9IGNvbnRleHQodGhpcywgc2VhcmNoU3RyaW5nLCBTVEFSVFNfV0lUSClcbiAgICAgICwgJCQgICAgID0gYXJndW1lbnRzXG4gICAgICAsIGluZGV4ICA9IHRvTGVuZ3RoKE1hdGgubWluKCQkLmxlbmd0aCA+IDEgPyAkJFsxXSA6IHVuZGVmaW5lZCwgdGhhdC5sZW5ndGgpKVxuICAgICAgLCBzZWFyY2ggPSBTdHJpbmcoc2VhcmNoU3RyaW5nKTtcbiAgICByZXR1cm4gJHN0YXJ0c1dpdGhcbiAgICAgID8gJHN0YXJ0c1dpdGguY2FsbCh0aGF0LCBzZWFyY2gsIGluZGV4KVxuICAgICAgOiB0aGF0LnNsaWNlKGluZGV4LCBpbmRleCArIHNlYXJjaC5sZW5ndGgpID09PSBzZWFyY2g7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuc3RhcnRzLXdpdGguanNcbiAqKiBtb2R1bGUgaWQgPSAxMTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsICRleHBvcnQgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgdG9PYmplY3QgICAgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi8kLmlzLWFycmF5LWl0ZXInKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhcmVxdWlyZSgnLi8kLml0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7IEFycmF5LmZyb20oaXRlcik7IH0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4xIEFycmF5LmZyb20oYXJyYXlMaWtlLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgZnJvbTogZnVuY3Rpb24gZnJvbShhcnJheUxpa2UvKiwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQqLyl7XG4gICAgdmFyIE8gICAgICAgPSB0b09iamVjdChhcnJheUxpa2UpXG4gICAgICAsIEMgICAgICAgPSB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5XG4gICAgICAsICQkICAgICAgPSBhcmd1bWVudHNcbiAgICAgICwgJCRsZW4gICA9ICQkLmxlbmd0aFxuICAgICAgLCBtYXBmbiAgID0gJCRsZW4gPiAxID8gJCRbMV0gOiB1bmRlZmluZWRcbiAgICAgICwgbWFwcGluZyA9IG1hcGZuICE9PSB1bmRlZmluZWRcbiAgICAgICwgaW5kZXggICA9IDBcbiAgICAgICwgaXRlckZuICA9IGdldEl0ZXJGbihPKVxuICAgICAgLCBsZW5ndGgsIHJlc3VsdCwgc3RlcCwgaXRlcmF0b3I7XG4gICAgaWYobWFwcGluZyltYXBmbiA9IGN0eChtYXBmbiwgJCRsZW4gPiAyID8gJCRbMl0gOiB1bmRlZmluZWQsIDIpO1xuICAgIC8vIGlmIG9iamVjdCBpc24ndCBpdGVyYWJsZSBvciBpdCdzIGFycmF5IHdpdGggZGVmYXVsdCBpdGVyYXRvciAtIHVzZSBzaW1wbGUgY2FzZVxuICAgIGlmKGl0ZXJGbiAhPSB1bmRlZmluZWQgJiYgIShDID09IEFycmF5ICYmIGlzQXJyYXlJdGVyKGl0ZXJGbikpKXtcbiAgICAgIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKE8pLCByZXN1bHQgPSBuZXcgQzsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyBpbmRleCsrKXtcbiAgICAgICAgcmVzdWx0W2luZGV4XSA9IG1hcHBpbmcgPyBjYWxsKGl0ZXJhdG9yLCBtYXBmbiwgW3N0ZXAudmFsdWUsIGluZGV4XSwgdHJ1ZSkgOiBzdGVwLnZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgICBmb3IocmVzdWx0ID0gbmV3IEMobGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgICAgICByZXN1bHRbaW5kZXhdID0gbWFwcGluZyA/IG1hcGZuKE9baW5kZXhdLCBpbmRleCkgOiBPW2luZGV4XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmVzdWx0Lmxlbmd0aCA9IGluZGV4O1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZyb20uanNcbiAqKiBtb2R1bGUgaWQgPSAxMTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaChlKXtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmKHJldCAhPT0gdW5kZWZpbmVkKWFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLml0ZXItY2FsbC5qc1xuICoqIG1vZHVsZSBpZCA9IDExNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyAgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXMtYXJyYXktaXRlci5qc1xuICoqIG1vZHVsZSBpZCA9IDExNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNsYXNzb2YgICA9IHJlcXVpcmUoJy4vJC5jbGFzc29mJylcbiAgLCBJVEVSQVRPUiAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBJdGVyYXRvcnMgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ICE9IHVuZGVmaW5lZClyZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZC5qc1xuICoqIG1vZHVsZSBpZCA9IDExNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIElURVJBVE9SICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uKCl7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uKCl7IHRocm93IDI7IH0pO1xufSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMsIHNraXBDbG9zaW5nKXtcbiAgaWYoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgID0gWzddXG4gICAgICAsIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24oKXsgc2FmZSA9IHRydWU7IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uKCl7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5pdGVyLWRldGVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDExN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbi8vIFdlYktpdCBBcnJheS5vZiBpc24ndCBnZW5lcmljXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vJC5mYWlscycpKGZ1bmN0aW9uKCl7XG4gIGZ1bmN0aW9uIEYoKXt9XG4gIHJldHVybiAhKEFycmF5Lm9mLmNhbGwoRikgaW5zdGFuY2VvZiBGKTtcbn0pLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMi4zIEFycmF5Lm9mKCAuLi5pdGVtcylcbiAgb2Y6IGZ1bmN0aW9uIG9mKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHZhciBpbmRleCAgPSAwXG4gICAgICAsICQkICAgICA9IGFyZ3VtZW50c1xuICAgICAgLCAkJGxlbiAgPSAkJC5sZW5ndGhcbiAgICAgICwgcmVzdWx0ID0gbmV3ICh0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nID8gdGhpcyA6IEFycmF5KSgkJGxlbik7XG4gICAgd2hpbGUoJCRsZW4gPiBpbmRleClyZXN1bHRbaW5kZXhdID0gJCRbaW5kZXgrK107XG4gICAgcmVzdWx0Lmxlbmd0aCA9ICQkbGVuO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDExOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuLyQuYWRkLXRvLXVuc2NvcGFibGVzJylcbiAgLCBzdGVwICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXItc3RlcCcpXG4gICwgSXRlcmF0b3JzICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKVxuICAsIHRvSU9iamVjdCAgICAgICAgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwga2luZCAgPSB0aGlzLl9rXG4gICAgLCBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpe1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDExOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi8kLndrcycpKCd1bnNjb3BhYmxlcycpXG4gICwgQXJyYXlQcm90byAgPSBBcnJheS5wcm90b3R5cGU7XG5pZihBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpcmVxdWlyZSgnLi8kLmhpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5hZGQtdG8tdW5zY29wYWJsZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZG9uZSwgdmFsdWUpe1xuICByZXR1cm4ge3ZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5pdGVyLXN0ZXAuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4vJC5zZXQtc3BlY2llcycpKCdBcnJheScpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zcGVjaWVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCAkICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKVxuICAsIFNQRUNJRVMgICAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIEMgPSBnbG9iYWxbS0VZXTtcbiAgaWYoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkkLnNldERlc2MoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnNldC1zcGVjaWVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMi4xLjMuMyBBcnJheS5wcm90b3R5cGUuY29weVdpdGhpbih0YXJnZXQsIHN0YXJ0LCBlbmQgPSB0aGlzLmxlbmd0aClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge2NvcHlXaXRoaW46IHJlcXVpcmUoJy4vJC5hcnJheS1jb3B5LXdpdGhpbicpfSk7XG5cbnJlcXVpcmUoJy4vJC5hZGQtdG8tdW5zY29wYWJsZXMnKSgnY29weVdpdGhpbicpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5jb3B5LXdpdGhpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDEyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjIuMS4zLjMgQXJyYXkucHJvdG90eXBlLmNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCwgZW5kID0gdGhpcy5sZW5ndGgpXG4ndXNlIHN0cmljdCc7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0JylcbiAgLCB0b0luZGV4ICA9IHJlcXVpcmUoJy4vJC50by1pbmRleCcpXG4gICwgdG9MZW5ndGggPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gW10uY29weVdpdGhpbiB8fCBmdW5jdGlvbiBjb3B5V2l0aGluKHRhcmdldC8qPSAwKi8sIHN0YXJ0Lyo9IDAsIGVuZCA9IEBsZW5ndGgqLyl7XG4gIHZhciBPICAgICA9IHRvT2JqZWN0KHRoaXMpXG4gICAgLCBsZW4gICA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICwgdG8gICAgPSB0b0luZGV4KHRhcmdldCwgbGVuKVxuICAgICwgZnJvbSAgPSB0b0luZGV4KHN0YXJ0LCBsZW4pXG4gICAgLCAkJCAgICA9IGFyZ3VtZW50c1xuICAgICwgZW5kICAgPSAkJC5sZW5ndGggPiAyID8gJCRbMl0gOiB1bmRlZmluZWRcbiAgICAsIGNvdW50ID0gTWF0aC5taW4oKGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuIDogdG9JbmRleChlbmQsIGxlbikpIC0gZnJvbSwgbGVuIC0gdG8pXG4gICAgLCBpbmMgICA9IDE7XG4gIGlmKGZyb20gPCB0byAmJiB0byA8IGZyb20gKyBjb3VudCl7XG4gICAgaW5jICA9IC0xO1xuICAgIGZyb20gKz0gY291bnQgLSAxO1xuICAgIHRvICAgKz0gY291bnQgLSAxO1xuICB9XG4gIHdoaWxlKGNvdW50LS0gPiAwKXtcbiAgICBpZihmcm9tIGluIE8pT1t0b10gPSBPW2Zyb21dO1xuICAgIGVsc2UgZGVsZXRlIE9bdG9dO1xuICAgIHRvICAgKz0gaW5jO1xuICAgIGZyb20gKz0gaW5jO1xuICB9IHJldHVybiBPO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmFycmF5LWNvcHktd2l0aGluLmpzXG4gKiogbW9kdWxlIGlkID0gMTI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMi4xLjMuNiBBcnJheS5wcm90b3R5cGUuZmlsbCh2YWx1ZSwgc3RhcnQgPSAwLCBlbmQgPSB0aGlzLmxlbmd0aClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge2ZpbGw6IHJlcXVpcmUoJy4vJC5hcnJheS1maWxsJyl9KTtcblxucmVxdWlyZSgnLi8kLmFkZC10by11bnNjb3BhYmxlcycpKCdmaWxsJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbGwuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIyLjEuMy42IEFycmF5LnByb3RvdHlwZS5maWxsKHZhbHVlLCBzdGFydCA9IDAsIGVuZCA9IHRoaXMubGVuZ3RoKVxuJ3VzZSBzdHJpY3QnO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpXG4gICwgdG9JbmRleCAgPSByZXF1aXJlKCcuLyQudG8taW5kZXgnKVxuICAsIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpO1xubW9kdWxlLmV4cG9ydHMgPSBbXS5maWxsIHx8IGZ1bmN0aW9uIGZpbGwodmFsdWUgLyosIHN0YXJ0ID0gMCwgZW5kID0gQGxlbmd0aCAqLyl7XG4gIHZhciBPICAgICAgPSB0b09iamVjdCh0aGlzKVxuICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgLCAkJCAgICAgPSBhcmd1bWVudHNcbiAgICAsICQkbGVuICA9ICQkLmxlbmd0aFxuICAgICwgaW5kZXggID0gdG9JbmRleCgkJGxlbiA+IDEgPyAkJFsxXSA6IHVuZGVmaW5lZCwgbGVuZ3RoKVxuICAgICwgZW5kICAgID0gJCRsZW4gPiAyID8gJCRbMl0gOiB1bmRlZmluZWRcbiAgICAsIGVuZFBvcyA9IGVuZCA9PT0gdW5kZWZpbmVkID8gbGVuZ3RoIDogdG9JbmRleChlbmQsIGxlbmd0aCk7XG4gIHdoaWxlKGVuZFBvcyA+IGluZGV4KU9baW5kZXgrK10gPSB2YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktZmlsbC5qc1xuICoqIG1vZHVsZSBpZCA9IDEyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjIuMS4zLjggQXJyYXkucHJvdG90eXBlLmZpbmQocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCAkZmluZCAgID0gcmVxdWlyZSgnLi8kLmFycmF5LW1ldGhvZHMnKSg1KVxuICAsIEtFWSAgICAgPSAnZmluZCdcbiAgLCBmb3JjZWQgID0gdHJ1ZTtcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZihLRVkgaW4gW10pQXJyYXkoMSlbS0VZXShmdW5jdGlvbigpeyBmb3JjZWQgPSBmYWxzZTsgfSk7XG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZvcmNlZCwgJ0FycmF5Jywge1xuICBmaW5kOiBmdW5jdGlvbiBmaW5kKGNhbGxiYWNrZm4vKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5yZXF1aXJlKCcuLyQuYWRkLXRvLXVuc2NvcGFibGVzJykoS0VZKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmluZC5qc1xuICoqIG1vZHVsZSBpZCA9IDEyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjIuMS4zLjkgQXJyYXkucHJvdG90eXBlLmZpbmRJbmRleChwcmVkaWNhdGUsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsICRmaW5kICAgPSByZXF1aXJlKCcuLyQuYXJyYXktbWV0aG9kcycpKDYpXG4gICwgS0VZICAgICA9ICdmaW5kSW5kZXgnXG4gICwgZm9yY2VkICA9IHRydWU7XG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYoS0VZIGluIFtdKUFycmF5KDEpW0tFWV0oZnVuY3Rpb24oKXsgZm9yY2VkID0gZmFsc2U7IH0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcbiAgZmluZEluZGV4OiBmdW5jdGlvbiBmaW5kSW5kZXgoY2FsbGJhY2tmbi8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbnJlcXVpcmUoJy4vJC5hZGQtdG8tdW5zY29wYWJsZXMnKShLRVkpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLWluZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMTI5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGdsb2JhbCAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgaXNSZWdFeHAgPSByZXF1aXJlKCcuLyQuaXMtcmVnZXhwJylcbiAgLCAkZmxhZ3MgICA9IHJlcXVpcmUoJy4vJC5mbGFncycpXG4gICwgJFJlZ0V4cCAgPSBnbG9iYWwuUmVnRXhwXG4gICwgQmFzZSAgICAgPSAkUmVnRXhwXG4gICwgcHJvdG8gICAgPSAkUmVnRXhwLnByb3RvdHlwZVxuICAsIHJlMSAgICAgID0gL2EvZ1xuICAsIHJlMiAgICAgID0gL2EvZ1xuICAvLyBcIm5ld1wiIGNyZWF0ZXMgYSBuZXcgb2JqZWN0LCBvbGQgd2Via2l0IGJ1Z2d5IGhlcmVcbiAgLCBDT1JSRUNUX05FVyA9IG5ldyAkUmVnRXhwKHJlMSkgIT09IHJlMTtcblxuaWYocmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJykgJiYgKCFDT1JSRUNUX05FVyB8fCByZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICByZTJbcmVxdWlyZSgnLi8kLndrcycpKCdtYXRjaCcpXSA9IGZhbHNlO1xuICAvLyBSZWdFeHAgY29uc3RydWN0b3IgY2FuIGFsdGVyIGZsYWdzIGFuZCBJc1JlZ0V4cCB3b3JrcyBjb3JyZWN0IHdpdGggQEBtYXRjaFxuICByZXR1cm4gJFJlZ0V4cChyZTEpICE9IHJlMSB8fCAkUmVnRXhwKHJlMikgPT0gcmUyIHx8ICRSZWdFeHAocmUxLCAnaScpICE9ICcvYS9pJztcbn0pKSl7XG4gICRSZWdFeHAgPSBmdW5jdGlvbiBSZWdFeHAocCwgZil7XG4gICAgdmFyIHBpUkUgPSBpc1JlZ0V4cChwKVxuICAgICAgLCBmaVUgID0gZiA9PT0gdW5kZWZpbmVkO1xuICAgIHJldHVybiAhKHRoaXMgaW5zdGFuY2VvZiAkUmVnRXhwKSAmJiBwaVJFICYmIHAuY29uc3RydWN0b3IgPT09ICRSZWdFeHAgJiYgZmlVID8gcFxuICAgICAgOiBDT1JSRUNUX05FV1xuICAgICAgICA/IG5ldyBCYXNlKHBpUkUgJiYgIWZpVSA/IHAuc291cmNlIDogcCwgZilcbiAgICAgICAgOiBCYXNlKChwaVJFID0gcCBpbnN0YW5jZW9mICRSZWdFeHApID8gcC5zb3VyY2UgOiBwLCBwaVJFICYmIGZpVSA/ICRmbGFncy5jYWxsKHApIDogZik7XG4gIH07XG4gICQuZWFjaC5jYWxsKCQuZ2V0TmFtZXMoQmFzZSksIGZ1bmN0aW9uKGtleSl7XG4gICAga2V5IGluICRSZWdFeHAgfHwgJC5zZXREZXNjKCRSZWdFeHAsIGtleSwge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gQmFzZVtrZXldOyB9LFxuICAgICAgc2V0OiBmdW5jdGlvbihpdCl7IEJhc2Vba2V5XSA9IGl0OyB9XG4gICAgfSk7XG4gIH0pO1xuICBwcm90by5jb25zdHJ1Y3RvciA9ICRSZWdFeHA7XG4gICRSZWdFeHAucHJvdG90eXBlID0gcHJvdG87XG4gIHJlcXVpcmUoJy4vJC5yZWRlZmluZScpKGdsb2JhbCwgJ1JlZ0V4cCcsICRSZWdFeHApO1xufVxuXG5yZXF1aXJlKCcuLyQuc2V0LXNwZWNpZXMnKSgnUmVnRXhwJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5jb25zdHJ1Y3Rvci5qc1xuICoqIG1vZHVsZSBpZCA9IDEzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3NcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oKXtcbiAgdmFyIHRoYXQgICA9IGFuT2JqZWN0KHRoaXMpXG4gICAgLCByZXN1bHQgPSAnJztcbiAgaWYodGhhdC5nbG9iYWwpICAgICByZXN1bHQgKz0gJ2cnO1xuICBpZih0aGF0Lmlnbm9yZUNhc2UpIHJlc3VsdCArPSAnaSc7XG4gIGlmKHRoYXQubXVsdGlsaW5lKSAgcmVzdWx0ICs9ICdtJztcbiAgaWYodGhhdC51bmljb2RlKSAgICByZXN1bHQgKz0gJ3UnO1xuICBpZih0aGF0LnN0aWNreSkgICAgIHJlc3VsdCArPSAneSc7XG4gIHJldHVybiByZXN1bHQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZmxhZ3MuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzKClcbnZhciAkID0gcmVxdWlyZSgnLi8kJyk7XG5pZihyZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKSAmJiAvLi9nLmZsYWdzICE9ICdnJykkLnNldERlc2MoUmVnRXhwLnByb3RvdHlwZSwgJ2ZsYWdzJywge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogcmVxdWlyZSgnLi8kLmZsYWdzJylcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIEBAbWF0Y2ggbG9naWNcbnJlcXVpcmUoJy4vJC5maXgtcmUtd2tzJykoJ21hdGNoJywgMSwgZnVuY3Rpb24oZGVmaW5lZCwgTUFUQ0gpe1xuICAvLyAyMS4xLjMuMTEgU3RyaW5nLnByb3RvdHlwZS5tYXRjaChyZWdleHApXG4gIHJldHVybiBmdW5jdGlvbiBtYXRjaChyZWdleHApe1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgTyAgPSBkZWZpbmVkKHRoaXMpXG4gICAgICAsIGZuID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtNQVRDSF07XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbTUFUQ0hdKFN0cmluZyhPKSk7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLm1hdGNoLmpzXG4gKiogbW9kdWxlIGlkID0gMTMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgaGlkZSAgICAgPSByZXF1aXJlKCcuLyQuaGlkZScpXG4gICwgcmVkZWZpbmUgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKVxuICAsIGZhaWxzICAgID0gcmVxdWlyZSgnLi8kLmZhaWxzJylcbiAgLCBkZWZpbmVkICA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJylcbiAgLCB3a3MgICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVksIGxlbmd0aCwgZXhlYyl7XG4gIHZhciBTWU1CT0wgICA9IHdrcyhLRVkpXG4gICAgLCBvcmlnaW5hbCA9ICcnW0tFWV07XG4gIGlmKGZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgdmFyIE8gPSB7fTtcbiAgICBPW1NZTUJPTF0gPSBmdW5jdGlvbigpeyByZXR1cm4gNzsgfTtcbiAgICByZXR1cm4gJydbS0VZXShPKSAhPSA3O1xuICB9KSl7XG4gICAgcmVkZWZpbmUoU3RyaW5nLnByb3RvdHlwZSwgS0VZLCBleGVjKGRlZmluZWQsIFNZTUJPTCwgb3JpZ2luYWwpKTtcbiAgICBoaWRlKFJlZ0V4cC5wcm90b3R5cGUsIFNZTUJPTCwgbGVuZ3RoID09IDJcbiAgICAgIC8vIDIxLjIuNS44IFJlZ0V4cC5wcm90b3R5cGVbQEByZXBsYWNlXShzdHJpbmcsIHJlcGxhY2VWYWx1ZSlcbiAgICAgIC8vIDIxLjIuNS4xMSBSZWdFeHAucHJvdG90eXBlW0BAc3BsaXRdKHN0cmluZywgbGltaXQpXG4gICAgICA/IGZ1bmN0aW9uKHN0cmluZywgYXJnKXsgcmV0dXJuIG9yaWdpbmFsLmNhbGwoc3RyaW5nLCB0aGlzLCBhcmcpOyB9XG4gICAgICAvLyAyMS4yLjUuNiBSZWdFeHAucHJvdG90eXBlW0BAbWF0Y2hdKHN0cmluZylcbiAgICAgIC8vIDIxLjIuNS45IFJlZ0V4cC5wcm90b3R5cGVbQEBzZWFyY2hdKHN0cmluZylcbiAgICAgIDogZnVuY3Rpb24oc3RyaW5nKXsgcmV0dXJuIG9yaWdpbmFsLmNhbGwoc3RyaW5nLCB0aGlzKTsgfVxuICAgICk7XG4gIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5maXgtcmUtd2tzLmpzXG4gKiogbW9kdWxlIGlkID0gMTM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBAQHJlcGxhY2UgbG9naWNcbnJlcXVpcmUoJy4vJC5maXgtcmUtd2tzJykoJ3JlcGxhY2UnLCAyLCBmdW5jdGlvbihkZWZpbmVkLCBSRVBMQUNFLCAkcmVwbGFjZSl7XG4gIC8vIDIxLjEuMy4xNCBTdHJpbmcucHJvdG90eXBlLnJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSlcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2Uoc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSl7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBPICA9IGRlZmluZWQodGhpcylcbiAgICAgICwgZm4gPSBzZWFyY2hWYWx1ZSA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZWFyY2hWYWx1ZVtSRVBMQUNFXTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZFxuICAgICAgPyBmbi5jYWxsKHNlYXJjaFZhbHVlLCBPLCByZXBsYWNlVmFsdWUpXG4gICAgICA6ICRyZXBsYWNlLmNhbGwoU3RyaW5nKE8pLCBzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKTtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAucmVwbGFjZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gQEBzZWFyY2ggbG9naWNcbnJlcXVpcmUoJy4vJC5maXgtcmUtd2tzJykoJ3NlYXJjaCcsIDEsIGZ1bmN0aW9uKGRlZmluZWQsIFNFQVJDSCl7XG4gIC8vIDIxLjEuMy4xNSBTdHJpbmcucHJvdG90eXBlLnNlYXJjaChyZWdleHApXG4gIHJldHVybiBmdW5jdGlvbiBzZWFyY2gocmVnZXhwKXtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIE8gID0gZGVmaW5lZCh0aGlzKVxuICAgICAgLCBmbiA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbU0VBUkNIXTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtTRUFSQ0hdKFN0cmluZyhPKSk7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNlYXJjaC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gQEBzcGxpdCBsb2dpY1xucmVxdWlyZSgnLi8kLmZpeC1yZS13a3MnKSgnc3BsaXQnLCAyLCBmdW5jdGlvbihkZWZpbmVkLCBTUExJVCwgJHNwbGl0KXtcbiAgLy8gMjEuMS4zLjE3IFN0cmluZy5wcm90b3R5cGUuc3BsaXQoc2VwYXJhdG9yLCBsaW1pdClcbiAgcmV0dXJuIGZ1bmN0aW9uIHNwbGl0KHNlcGFyYXRvciwgbGltaXQpe1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgTyAgPSBkZWZpbmVkKHRoaXMpXG4gICAgICAsIGZuID0gc2VwYXJhdG9yID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlcGFyYXRvcltTUExJVF07XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWRcbiAgICAgID8gZm4uY2FsbChzZXBhcmF0b3IsIE8sIGxpbWl0KVxuICAgICAgOiAkc3BsaXQuY2FsbChTdHJpbmcoTyksIHNlcGFyYXRvciwgbGltaXQpO1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zcGxpdC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIExJQlJBUlkgICAgPSByZXF1aXJlKCcuLyQubGlicmFyeScpXG4gICwgZ2xvYmFsICAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGN0eCAgICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBjbGFzc29mICAgID0gcmVxdWlyZSgnLi8kLmNsYXNzb2YnKVxuICAsICRleHBvcnQgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBpc09iamVjdCAgID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgICA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgPSByZXF1aXJlKCcuLyQuYS1mdW5jdGlvbicpXG4gICwgc3RyaWN0TmV3ICA9IHJlcXVpcmUoJy4vJC5zdHJpY3QtbmV3JylcbiAgLCBmb3JPZiAgICAgID0gcmVxdWlyZSgnLi8kLmZvci1vZicpXG4gICwgc2V0UHJvdG8gICA9IHJlcXVpcmUoJy4vJC5zZXQtcHJvdG8nKS5zZXRcbiAgLCBzYW1lICAgICAgID0gcmVxdWlyZSgnLi8kLnNhbWUtdmFsdWUnKVxuICAsIFNQRUNJRVMgICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ3NwZWNpZXMnKVxuICAsIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vJC5zcGVjaWVzLWNvbnN0cnVjdG9yJylcbiAgLCBhc2FwICAgICAgID0gcmVxdWlyZSgnLi8kLm1pY3JvdGFzaycpXG4gICwgUFJPTUlTRSAgICA9ICdQcm9taXNlJ1xuICAsIHByb2Nlc3MgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIGlzTm9kZSAgICAgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIFAgICAgICAgICAgPSBnbG9iYWxbUFJPTUlTRV1cbiAgLCBXcmFwcGVyO1xuXG52YXIgdGVzdFJlc29sdmUgPSBmdW5jdGlvbihzdWIpe1xuICB2YXIgdGVzdCA9IG5ldyBQKGZ1bmN0aW9uKCl7fSk7XG4gIGlmKHN1Yil0ZXN0LmNvbnN0cnVjdG9yID0gT2JqZWN0O1xuICByZXR1cm4gUC5yZXNvbHZlKHRlc3QpID09PSB0ZXN0O1xufTtcblxudmFyIFVTRV9OQVRJVkUgPSBmdW5jdGlvbigpe1xuICB2YXIgd29ya3MgPSBmYWxzZTtcbiAgZnVuY3Rpb24gUDIoeCl7XG4gICAgdmFyIHNlbGYgPSBuZXcgUCh4KTtcbiAgICBzZXRQcm90byhzZWxmLCBQMi5wcm90b3R5cGUpO1xuICAgIHJldHVybiBzZWxmO1xuICB9XG4gIHRyeSB7XG4gICAgd29ya3MgPSBQICYmIFAucmVzb2x2ZSAmJiB0ZXN0UmVzb2x2ZSgpO1xuICAgIHNldFByb3RvKFAyLCBQKTtcbiAgICBQMi5wcm90b3R5cGUgPSAkLmNyZWF0ZShQLnByb3RvdHlwZSwge2NvbnN0cnVjdG9yOiB7dmFsdWU6IFAyfX0pO1xuICAgIC8vIGFjdHVhbCBGaXJlZm94IGhhcyBicm9rZW4gc3ViY2xhc3Mgc3VwcG9ydCwgdGVzdCB0aGF0XG4gICAgaWYoIShQMi5yZXNvbHZlKDUpLnRoZW4oZnVuY3Rpb24oKXt9KSBpbnN0YW5jZW9mIFAyKSl7XG4gICAgICB3b3JrcyA9IGZhbHNlO1xuICAgIH1cbiAgICAvLyBhY3R1YWwgVjggYnVnLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9NDE2MlxuICAgIGlmKHdvcmtzICYmIHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpKXtcbiAgICAgIHZhciB0aGVuYWJsZVRoZW5Hb3R0ZW4gPSBmYWxzZTtcbiAgICAgIFAucmVzb2x2ZSgkLnNldERlc2Moe30sICd0aGVuJywge1xuICAgICAgICBnZXQ6IGZ1bmN0aW9uKCl7IHRoZW5hYmxlVGhlbkdvdHRlbiA9IHRydWU7IH1cbiAgICAgIH0pKTtcbiAgICAgIHdvcmtzID0gdGhlbmFibGVUaGVuR290dGVuO1xuICAgIH1cbiAgfSBjYXRjaChlKXsgd29ya3MgPSBmYWxzZTsgfVxuICByZXR1cm4gd29ya3M7XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBzYW1lQ29uc3RydWN0b3IgPSBmdW5jdGlvbihhLCBiKXtcbiAgLy8gbGlicmFyeSB3cmFwcGVyIHNwZWNpYWwgY2FzZVxuICBpZihMSUJSQVJZICYmIGEgPT09IFAgJiYgYiA9PT0gV3JhcHBlcilyZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIHNhbWUoYSwgYik7XG59O1xudmFyIGdldENvbnN0cnVjdG9yID0gZnVuY3Rpb24oQyl7XG4gIHZhciBTID0gYW5PYmplY3QoQylbU1BFQ0lFU107XG4gIHJldHVybiBTICE9IHVuZGVmaW5lZCA/IFMgOiBDO1xufTtcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbigkJHJlc29sdmUsICQkcmVqZWN0KXtcbiAgICBpZihyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ICA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpLFxuICB0aGlzLnJlamVjdCAgPSBhRnVuY3Rpb24ocmVqZWN0KVxufTtcbnZhciBwZXJmb3JtID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB7ZXJyb3I6IGV9O1xuICB9XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uKHJlY29yZCwgaXNSZWplY3Qpe1xuICBpZihyZWNvcmQubilyZXR1cm47XG4gIHJlY29yZC5uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcmVjb3JkLmM7XG4gIGFzYXAoZnVuY3Rpb24oKXtcbiAgICB2YXIgdmFsdWUgPSByZWNvcmQudlxuICAgICAgLCBvayAgICA9IHJlY29yZC5zID09IDFcbiAgICAgICwgaSAgICAgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbihyZWFjdGlvbil7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsXG4gICAgICAgICwgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmVcbiAgICAgICAgLCByZWplY3QgID0gcmVhY3Rpb24ucmVqZWN0XG4gICAgICAgICwgcmVzdWx0LCB0aGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYoaGFuZGxlcil7XG4gICAgICAgICAgaWYoIW9rKXJlY29yZC5oID0gdHJ1ZTtcbiAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyID09PSB0cnVlID8gdmFsdWUgOiBoYW5kbGVyKHZhbHVlKTtcbiAgICAgICAgICBpZihyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2Upe1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSl7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSlydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgY2hhaW4ubGVuZ3RoID0gMDtcbiAgICByZWNvcmQubiA9IGZhbHNlO1xuICAgIGlmKGlzUmVqZWN0KXNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHZhciBwcm9taXNlID0gcmVjb3JkLnBcbiAgICAgICAgLCBoYW5kbGVyLCBjb25zb2xlO1xuICAgICAgaWYoaXNVbmhhbmRsZWQocHJvbWlzZSkpe1xuICAgICAgICBpZihpc05vZGUpe1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbil7XG4gICAgICAgICAgaGFuZGxlcih7cHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZX0pO1xuICAgICAgICB9IGVsc2UgaWYoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcil7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9IHJlY29yZC5hID0gdW5kZWZpbmVkO1xuICAgIH0sIDEpO1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbihwcm9taXNlKXtcbiAgdmFyIHJlY29yZCA9IHByb21pc2UuX2RcbiAgICAsIGNoYWluICA9IHJlY29yZC5hIHx8IHJlY29yZC5jXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCByZWFjdGlvbjtcbiAgaWYocmVjb3JkLmgpcmV0dXJuIGZhbHNlO1xuICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXtcbiAgICByZWFjdGlvbiA9IGNoYWluW2krK107XG4gICAgaWYocmVhY3Rpb24uZmFpbCB8fCAhaXNVbmhhbmRsZWQocmVhY3Rpb24ucHJvbWlzZSkpcmV0dXJuIGZhbHNlO1xuICB9IHJldHVybiB0cnVlO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcmVjb3JkID0gdGhpcztcbiAgaWYocmVjb3JkLmQpcmV0dXJuO1xuICByZWNvcmQuZCA9IHRydWU7XG4gIHJlY29yZCA9IHJlY29yZC5yIHx8IHJlY29yZDsgLy8gdW53cmFwXG4gIHJlY29yZC52ID0gdmFsdWU7XG4gIHJlY29yZC5zID0gMjtcbiAgcmVjb3JkLmEgPSByZWNvcmQuYy5zbGljZSgpO1xuICBub3RpZnkocmVjb3JkLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciByZWNvcmQgPSB0aGlzXG4gICAgLCB0aGVuO1xuICBpZihyZWNvcmQuZClyZXR1cm47XG4gIHJlY29yZC5kID0gdHJ1ZTtcbiAgcmVjb3JkID0gcmVjb3JkLnIgfHwgcmVjb3JkOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZihyZWNvcmQucCA9PT0gdmFsdWUpdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKXtcbiAgICAgIGFzYXAoZnVuY3Rpb24oKXtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7cjogcmVjb3JkLCBkOiBmYWxzZX07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVjb3JkLnYgPSB2YWx1ZTtcbiAgICAgIHJlY29yZC5zID0gMTtcbiAgICAgIG5vdGlmeShyZWNvcmQsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2goZSl7XG4gICAgJHJlamVjdC5jYWxsKHtyOiByZWNvcmQsIGQ6IGZhbHNlfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmKCFVU0VfTkFUSVZFKXtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgUCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3Ipe1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgdmFyIHJlY29yZCA9IHRoaXMuX2QgPSB7XG4gICAgICBwOiBzdHJpY3ROZXcodGhpcywgUCwgUFJPTUlTRSksICAgICAgICAgLy8gPC0gcHJvbWlzZVxuICAgICAgYzogW10sICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgICAgYTogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgICBzOiAwLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICAgIGQ6IGZhbHNlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBkb25lXG4gICAgICB2OiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgIGg6IGZhbHNlLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBoYW5kbGVkIHJlamVjdGlvblxuICAgICAgbjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICAgIH07XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgcmVjb3JkLCAxKSwgY3R4KCRyZWplY3QsIHJlY29yZCwgMSkpO1xuICAgIH0gY2F0Y2goZXJyKXtcbiAgICAgICRyZWplY3QuY2FsbChyZWNvcmQsIGVycik7XG4gICAgfVxuICB9O1xuICByZXF1aXJlKCcuLyQucmVkZWZpbmUtYWxsJykoUC5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpe1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBQKSlcbiAgICAgICAgLCBwcm9taXNlICA9IHJlYWN0aW9uLnByb21pc2VcbiAgICAgICAgLCByZWNvcmQgICA9IHRoaXMuX2Q7XG4gICAgICByZWFjdGlvbi5vayAgID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVjb3JkLmMucHVzaChyZWFjdGlvbik7XG4gICAgICBpZihyZWNvcmQuYSlyZWNvcmQuYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHJlY29yZC5zKW5vdGlmeShyZWNvcmQsIGZhbHNlKTtcbiAgICAgIHJldHVybiBwcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbihvblJlamVjdGVkKXtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7UHJvbWlzZTogUH0pO1xucmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJykoUCwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuLyQuc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuLyQuY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpe1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVqZWN0ICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCFVU0VfTkFUSVZFIHx8IHRlc3RSZXNvbHZlKHRydWUpKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KXtcbiAgICAvLyBpbnN0YW5jZW9mIGluc3RlYWQgb2YgaW50ZXJuYWwgc2xvdCBjaGVjayBiZWNhdXNlIHdlIHNob3VsZCBmaXggaXQgd2l0aG91dCByZXBsYWNlbWVudCBuYXRpdmUgUHJvbWlzZSBjb3JlXG4gICAgaWYoeCBpbnN0YW5jZW9mIFAgJiYgc2FtZUNvbnN0cnVjdG9yKHguY29uc3RydWN0b3IsIHRoaXMpKXJldHVybiB4O1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KHRoaXMpXG4gICAgICAsICQkcmVzb2x2ZSAgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgJCRyZXNvbHZlKHgpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi8kLml0ZXItZGV0ZWN0JykoZnVuY3Rpb24oaXRlcil7XG4gIFAuYWxsKGl0ZXIpWydjYXRjaCddKGZ1bmN0aW9uKCl7fSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IGdldENvbnN0cnVjdG9yKHRoaXMpXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVzb2x2ZSAgICA9IGNhcGFiaWxpdHkucmVzb2x2ZVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3RcbiAgICAgICwgdmFsdWVzICAgICA9IFtdO1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIHZhbHVlcy5wdXNoLCB2YWx1ZXMpO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IHZhbHVlcy5sZW5ndGhcbiAgICAgICAgLCByZXN1bHRzICAgPSBBcnJheShyZW1haW5pbmcpO1xuICAgICAgaWYocmVtYWluaW5nKSQuZWFjaC5jYWxsKHZhbHVlcywgZnVuY3Rpb24ocHJvbWlzZSwgaW5kZXgpe1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbih2YWx1ZSl7XG4gICAgICAgICAgaWYoYWxyZWFkeUNhbGxlZClyZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgcmVzdWx0c1tpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHJlc3VsdHMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICBlbHNlIHJlc29sdmUocmVzdWx0cyk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSBnZXRDb25zdHJ1Y3Rvcih0aGlzKVxuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbihwcm9taXNlKXtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYoYWJydXB0KXJlamVjdChhYnJ1cHQuZXJyb3IpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5wcm9taXNlLmpzXG4gKiogbW9kdWxlIGlkID0gMTM4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSl7XG4gIGlmKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpdGhyb3cgVHlwZUVycm9yKG5hbWUgKyBcIjogdXNlIHRoZSAnbmV3JyBvcGVyYXRvciFcIik7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zdHJpY3QtbmV3LmpzXG4gKiogbW9kdWxlIGlkID0gMTM5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBjYWxsICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLWNhbGwnKVxuICAsIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi8kLmlzLWFycmF5LWl0ZXInKVxuICAsIGFuT2JqZWN0ICAgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCl7XG4gIHZhciBpdGVyRm4gPSBnZXRJdGVyRm4oaXRlcmFibGUpXG4gICAgLCBmICAgICAgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSlcbiAgICAsIGluZGV4ICA9IDBcbiAgICAsIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3I7XG4gIGlmKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJyl0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmKGlzQXJyYXlJdGVyKGl0ZXJGbikpZm9yKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gIH0gZWxzZSBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgKXtcbiAgICBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmZvci1vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDE0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKVxuICAsIFNQRUNJRVMgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBEKXtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvciwgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnNwZWNpZXMtY29uc3RydWN0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuLyQudGFzaycpLnNldFxuICAsIE9ic2VydmVyICA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyXG4gICwgcHJvY2VzcyAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBQcm9taXNlICAgPSBnbG9iYWwuUHJvbWlzZVxuICAsIGlzTm9kZSAgICA9IHJlcXVpcmUoJy4vJC5jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbnZhciBmbHVzaCA9IGZ1bmN0aW9uKCl7XG4gIHZhciBwYXJlbnQsIGRvbWFpbiwgZm47XG4gIGlmKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKXtcbiAgICBwcm9jZXNzLmRvbWFpbiA9IG51bGw7XG4gICAgcGFyZW50LmV4aXQoKTtcbiAgfVxuICB3aGlsZShoZWFkKXtcbiAgICBkb21haW4gPSBoZWFkLmRvbWFpbjtcbiAgICBmbiAgICAgPSBoZWFkLmZuO1xuICAgIGlmKGRvbWFpbilkb21haW4uZW50ZXIoKTtcbiAgICBmbigpOyAvLyA8LSBjdXJyZW50bHkgd2UgdXNlIGl0IG9ubHkgZm9yIFByb21pc2UgLSB0cnkgLyBjYXRjaCBub3QgcmVxdWlyZWRcbiAgICBpZihkb21haW4pZG9tYWluLmV4aXQoKTtcbiAgICBoZWFkID0gaGVhZC5uZXh0O1xuICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gIGlmKHBhcmVudClwYXJlbnQuZW50ZXIoKTtcbn07XG5cbi8vIE5vZGUuanNcbmlmKGlzTm9kZSl7XG4gIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gIH07XG4vLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbn0gZWxzZSBpZihPYnNlcnZlcil7XG4gIHZhciB0b2dnbGUgPSAxXG4gICAgLCBub2RlICAgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7Y2hhcmFjdGVyRGF0YTogdHJ1ZX0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9IC10b2dnbGU7XG4gIH07XG4vLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxufSBlbHNlIGlmKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKXtcbiAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZsdXNoKTtcbiAgfTtcbi8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4vLyAtIHNldEltbWVkaWF0ZVxuLy8gLSBNZXNzYWdlQ2hhbm5lbFxuLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2Vcbi8vIC0gc2V0VGltZW91dFxufSBlbHNlIHtcbiAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gYXNhcChmbil7XG4gIHZhciB0YXNrID0ge2ZuOiBmbiwgbmV4dDogdW5kZWZpbmVkLCBkb21haW46IGlzTm9kZSAmJiBwcm9jZXNzLmRvbWFpbn07XG4gIGlmKGxhc3QpbGFzdC5uZXh0ID0gdGFzaztcbiAgaWYoIWhlYWQpe1xuICAgIGhlYWQgPSB0YXNrO1xuICAgIG5vdGlmeSgpO1xuICB9IGxhc3QgPSB0YXNrO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm1pY3JvdGFzay5qc1xuICoqIG1vZHVsZSBpZCA9IDE0MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGN0eCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsIGludm9rZSAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5pbnZva2UnKVxuICAsIGh0bWwgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5odG1sJylcbiAgLCBjZWwgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZG9tLWNyZWF0ZScpXG4gICwgZ2xvYmFsICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgcHJvY2VzcyAgICAgICAgICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBzZXRUYXNrICAgICAgICAgICAgPSBnbG9iYWwuc2V0SW1tZWRpYXRlXG4gICwgY2xlYXJUYXNrICAgICAgICAgID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlXG4gICwgTWVzc2FnZUNoYW5uZWwgICAgID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsXG4gICwgY291bnRlciAgICAgICAgICAgID0gMFxuICAsIHF1ZXVlICAgICAgICAgICAgICA9IHt9XG4gICwgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSdcbiAgLCBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbigpe1xuICB2YXIgaWQgPSArdGhpcztcbiAgaWYocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKXtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RuZXIgPSBmdW5jdGlvbihldmVudCl7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spe1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKXtcbiAgICB2YXIgYXJncyA9IFtdLCBpID0gMTtcbiAgICB3aGlsZShhcmd1bWVudHMubGVuZ3RoID4gaSlhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbigpe1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKXtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYocmVxdWlyZSgnLi8kLmNvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYoTWVzc2FnZUNoYW5uZWwpe1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWw7XG4gICAgcG9ydCAgICA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0bmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cyl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdG5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZihPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSl7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbigpe1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbihpZCl7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogICBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQudGFzay5qc1xuICoqIG1vZHVsZSBpZCA9IDE0M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRhcmdldCwgc3JjKXtcbiAgZm9yKHZhciBrZXkgaW4gc3JjKXJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQucmVkZWZpbmUtYWxsLmpzXG4gKiogbW9kdWxlIGlkID0gMTQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24tc3Ryb25nJyk7XG5cbi8vIDIzLjEgTWFwIE9iamVjdHNcbnJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uJykoJ01hcCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBNYXAoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjEuMy42IE1hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KXtcbiAgICB2YXIgZW50cnkgPSBzdHJvbmcuZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICByZXR1cm4gZW50cnkgJiYgZW50cnkudjtcbiAgfSxcbiAgLy8gMjMuMS4zLjkgTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywga2V5ID09PSAwID8gMCA6IGtleSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcsIHRydWUpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGhpZGUgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oaWRlJylcbiAgLCByZWRlZmluZUFsbCAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUtYWxsJylcbiAgLCBjdHggICAgICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBzdHJpY3ROZXcgICAgPSByZXF1aXJlKCcuLyQuc3RyaWN0LW5ldycpXG4gICwgZGVmaW5lZCAgICAgID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKVxuICAsIGZvck9mICAgICAgICA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxuICAsICRpdGVyRGVmaW5lICA9IHJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpXG4gICwgc3RlcCAgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXItc3RlcCcpXG4gICwgSUQgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpKCdpZCcpXG4gICwgJGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgaXNPYmplY3QgICAgID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgc2V0U3BlY2llcyAgID0gcmVxdWlyZSgnLi8kLnNldC1zcGVjaWVzJylcbiAgLCBERVNDUklQVE9SUyAgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKVxuICAsIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgaXNPYmplY3RcbiAgLCBTSVpFICAgICAgICAgPSBERVNDUklQVE9SUyA/ICdfcycgOiAnc2l6ZSdcbiAgLCBpZCAgICAgICAgICAgPSAwO1xuXG52YXIgZmFzdEtleSA9IGZ1bmN0aW9uKGl0LCBjcmVhdGUpe1xuICAvLyByZXR1cm4gcHJpbWl0aXZlIHdpdGggcHJlZml4XG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJyA/IGl0IDogKHR5cGVvZiBpdCA9PSAnc3RyaW5nJyA/ICdTJyA6ICdQJykgKyBpdDtcbiAgaWYoISRoYXMoaXQsIElEKSl7XG4gICAgLy8gY2FuJ3Qgc2V0IGlkIHRvIGZyb3plbiBvYmplY3RcbiAgICBpZighaXNFeHRlbnNpYmxlKGl0KSlyZXR1cm4gJ0YnO1xuICAgIC8vIG5vdCBuZWNlc3NhcnkgdG8gYWRkIGlkXG4gICAgaWYoIWNyZWF0ZSlyZXR1cm4gJ0UnO1xuICAgIC8vIGFkZCBtaXNzaW5nIG9iamVjdCBpZFxuICAgIGhpZGUoaXQsIElELCArK2lkKTtcbiAgLy8gcmV0dXJuIG9iamVjdCBpZCB3aXRoIHByZWZpeFxuICB9IHJldHVybiAnTycgKyBpdFtJRF07XG59O1xuXG52YXIgZ2V0RW50cnkgPSBmdW5jdGlvbih0aGF0LCBrZXkpe1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpLCBlbnRyeTtcbiAgaWYoaW5kZXggIT09ICdGJylyZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IoZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICBpZihlbnRyeS5rID09IGtleSlyZXR1cm4gZW50cnk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24od3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUil7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGl0ZXJhYmxlKXtcbiAgICAgIHN0cmljdE5ldyh0aGF0LCBDLCBOQU1FKTtcbiAgICAgIHRoYXQuX2kgPSAkLmNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgICAgLy8gZmlyc3QgZW50cnlcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7ICAgICAgLy8gbGFzdCBlbnRyeVxuICAgICAgdGhhdFtTSVpFXSA9IDA7ICAgICAgICAgICAvLyBzaXplXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4xLjMuMSBNYXAucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIC8vIDIzLjIuMy4yIFNldC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgY2xlYXI6IGZ1bmN0aW9uIGNsZWFyKCl7XG4gICAgICAgIGZvcih2YXIgdGhhdCA9IHRoaXMsIGRhdGEgPSB0aGF0Ll9pLCBlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKGVudHJ5LnApZW50cnkucCA9IGVudHJ5LnAubiA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBkZWxldGUgZGF0YVtlbnRyeS5pXTtcbiAgICAgICAgfVxuICAgICAgICB0aGF0Ll9mID0gdGhhdC5fbCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhhdFtTSVpFXSA9IDA7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjMgTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuMi4zLjQgU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAgICwgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpO1xuICAgICAgICBpZihlbnRyeSl7XG4gICAgICAgICAgdmFyIG5leHQgPSBlbnRyeS5uXG4gICAgICAgICAgICAsIHByZXYgPSBlbnRyeS5wO1xuICAgICAgICAgIGRlbGV0ZSB0aGF0Ll9pW2VudHJ5LmldO1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmKHByZXYpcHJldi5uID0gbmV4dDtcbiAgICAgICAgICBpZihuZXh0KW5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYodGhhdC5fZiA9PSBlbnRyeSl0aGF0Ll9mID0gbmV4dDtcbiAgICAgICAgICBpZih0aGF0Ll9sID09IGVudHJ5KXRoYXQuX2wgPSBwcmV2O1xuICAgICAgICAgIHRoYXRbU0laRV0tLTtcbiAgICAgICAgfSByZXR1cm4gISFlbnRyeTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4yLjMuNiBTZXQucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIC8vIDIzLjEuMy41IE1hcC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgZm9yRWFjaDogZnVuY3Rpb24gZm9yRWFjaChjYWxsYmFja2ZuIC8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICAgICAgdmFyIGYgPSBjdHgoY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIDMpXG4gICAgICAgICAgLCBlbnRyeTtcbiAgICAgICAgd2hpbGUoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKXtcbiAgICAgICAgICBmKGVudHJ5LnYsIGVudHJ5LmssIHRoaXMpO1xuICAgICAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpe1xuICAgICAgICByZXR1cm4gISFnZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIGlmKERFU0NSSVBUT1JTKSQuc2V0RGVzYyhDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7XG4gICAgICAgIHJldHVybiBkZWZpbmVkKHRoaXNbU0laRV0pO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uKHRoYXQsIGtleSwgdmFsdWUpe1xuICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSlcbiAgICAgICwgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYoZW50cnkpe1xuICAgICAgZW50cnkudiA9IHZhbHVlO1xuICAgIC8vIGNyZWF0ZSBuZXcgZW50cnlcbiAgICB9IGVsc2Uge1xuICAgICAgdGhhdC5fbCA9IGVudHJ5ID0ge1xuICAgICAgICBpOiBpbmRleCA9IGZhc3RLZXkoa2V5LCB0cnVlKSwgLy8gPC0gaW5kZXhcbiAgICAgICAgazoga2V5LCAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGtleVxuICAgICAgICB2OiB2YWx1ZSwgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gdmFsdWVcbiAgICAgICAgcDogcHJldiA9IHRoYXQuX2wsICAgICAgICAgICAgIC8vIDwtIHByZXZpb3VzIGVudHJ5XG4gICAgICAgIG46IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAvLyA8LSBuZXh0IGVudHJ5XG4gICAgICAgIHI6IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSByZW1vdmVkXG4gICAgICB9O1xuICAgICAgaWYoIXRoYXQuX2YpdGhhdC5fZiA9IGVudHJ5O1xuICAgICAgaWYocHJldilwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYoaW5kZXggIT09ICdGJyl0aGF0Ll9pW2luZGV4XSA9IGVudHJ5O1xuICAgIH0gcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIGdldEVudHJ5OiBnZXRFbnRyeSxcbiAgc2V0U3Ryb25nOiBmdW5jdGlvbihDLCBOQU1FLCBJU19NQVApe1xuICAgIC8vIGFkZCAua2V5cywgLnZhbHVlcywgLmVudHJpZXMsIFtAQGl0ZXJhdG9yXVxuICAgIC8vIDIzLjEuMy40LCAyMy4xLjMuOCwgMjMuMS4zLjExLCAyMy4xLjMuMTIsIDIzLjIuMy41LCAyMy4yLjMuOCwgMjMuMi4zLjEwLCAyMy4yLjMuMTFcbiAgICAkaXRlckRlZmluZShDLCBOQU1FLCBmdW5jdGlvbihpdGVyYXRlZCwga2luZCl7XG4gICAgICB0aGlzLl90ID0gaXRlcmF0ZWQ7ICAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7IC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24oKXtcbiAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgLCBraW5kICA9IHRoYXQuX2tcbiAgICAgICAgLCBlbnRyeSA9IHRoYXQuX2w7XG4gICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgIHdoaWxlKGVudHJ5ICYmIGVudHJ5LnIpZW50cnkgPSBlbnRyeS5wO1xuICAgICAgLy8gZ2V0IG5leHQgZW50cnlcbiAgICAgIGlmKCF0aGF0Ll90IHx8ICEodGhhdC5fbCA9IGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhhdC5fdC5fZikpe1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIGVudHJ5LnYpO1xuICAgICAgcmV0dXJuIHN0ZXAoMCwgW2VudHJ5LmssIGVudHJ5LnZdKTtcbiAgICB9LCBJU19NQVAgPyAnZW50cmllcycgOiAndmFsdWVzJyAsICFJU19NQVAsIHRydWUpO1xuXG4gICAgLy8gYWRkIFtAQHNwZWNpZXNdLCAyMy4xLjIuMiwgMjMuMi4yLjJcbiAgICBzZXRTcGVjaWVzKE5BTUUpO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY29sbGVjdGlvbi1zdHJvbmcuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKVxuICAsIHJlZGVmaW5lQWxsICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lLWFsbCcpXG4gICwgZm9yT2YgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZm9yLW9mJylcbiAgLCBzdHJpY3ROZXcgICAgICA9IHJlcXVpcmUoJy4vJC5zdHJpY3QtbmV3JylcbiAgLCBpc09iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGZhaWxzICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmZhaWxzJylcbiAgLCAkaXRlckRldGVjdCAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLWRldGVjdCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FLCB3cmFwcGVyLCBtZXRob2RzLCBjb21tb24sIElTX01BUCwgSVNfV0VBSyl7XG4gIHZhciBCYXNlICA9IGdsb2JhbFtOQU1FXVxuICAgICwgQyAgICAgPSBCYXNlXG4gICAgLCBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCdcbiAgICAsIHByb3RvID0gQyAmJiBDLnByb3RvdHlwZVxuICAgICwgTyAgICAgPSB7fTtcbiAgdmFyIGZpeE1ldGhvZCA9IGZ1bmN0aW9uKEtFWSl7XG4gICAgdmFyIGZuID0gcHJvdG9bS0VZXTtcbiAgICByZWRlZmluZShwcm90bywgS0VZLFxuICAgICAgS0VZID09ICdkZWxldGUnID8gZnVuY3Rpb24oYSl7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnaGFzJyA/IGZ1bmN0aW9uIGhhcyhhKXtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdnZXQnID8gZnVuY3Rpb24gZ2V0KGEpe1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyB1bmRlZmluZWQgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdhZGQnID8gZnVuY3Rpb24gYWRkKGEpeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7IHJldHVybiB0aGlzOyB9XG4gICAgICAgIDogZnVuY3Rpb24gc2V0KGEsIGIpeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSwgYik7IHJldHVybiB0aGlzOyB9XG4gICAgKTtcbiAgfTtcbiAgaWYodHlwZW9mIEMgIT0gJ2Z1bmN0aW9uJyB8fCAhKElTX1dFQUsgfHwgcHJvdG8uZm9yRWFjaCAmJiAhZmFpbHMoZnVuY3Rpb24oKXtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSl7XG4gICAgLy8gY3JlYXRlIGNvbGxlY3Rpb24gY29uc3RydWN0b3JcbiAgICBDID0gY29tbW9uLmdldENvbnN0cnVjdG9yKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCBtZXRob2RzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaW5zdGFuY2UgICAgICAgICAgICAgPSBuZXcgQ1xuICAgICAgLy8gZWFybHkgaW1wbGVtZW50YXRpb25zIG5vdCBzdXBwb3J0cyBjaGFpbmluZ1xuICAgICAgLCBIQVNOVF9DSEFJTklORyAgICAgICA9IGluc3RhbmNlW0FEREVSXShJU19XRUFLID8ge30gOiAtMCwgMSkgIT0gaW5zdGFuY2VcbiAgICAgIC8vIFY4IH4gIENocm9taXVtIDQwLSB3ZWFrLWNvbGxlY3Rpb25zIHRocm93cyBvbiBwcmltaXRpdmVzLCBidXQgc2hvdWxkIHJldHVybiBmYWxzZVxuICAgICAgLCBUSFJPV1NfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uKCl7IGluc3RhbmNlLmhhcygxKTsgfSlcbiAgICAgIC8vIG1vc3QgZWFybHkgaW1wbGVtZW50YXRpb25zIGRvZXNuJ3Qgc3VwcG9ydHMgaXRlcmFibGVzLCBtb3N0IG1vZGVybiAtIG5vdCBjbG9zZSBpdCBjb3JyZWN0bHlcbiAgICAgICwgQUNDRVBUX0lURVJBQkxFUyAgICAgPSAkaXRlckRldGVjdChmdW5jdGlvbihpdGVyKXsgbmV3IEMoaXRlcik7IH0pIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgICAvLyBmb3IgZWFybHkgaW1wbGVtZW50YXRpb25zIC0wIGFuZCArMCBub3QgdGhlIHNhbWVcbiAgICAgICwgQlVHR1lfWkVSTztcbiAgICBpZighQUNDRVBUX0lURVJBQkxFUyl7IFxuICAgICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGFyZ2V0LCBpdGVyYWJsZSl7XG4gICAgICAgIHN0cmljdE5ldyh0YXJnZXQsIEMsIE5BTUUpO1xuICAgICAgICB2YXIgdGhhdCA9IG5ldyBCYXNlO1xuICAgICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgICAgICByZXR1cm4gdGhhdDtcbiAgICAgIH0pO1xuICAgICAgQy5wcm90b3R5cGUgPSBwcm90bztcbiAgICAgIHByb3RvLmNvbnN0cnVjdG9yID0gQztcbiAgICB9XG4gICAgSVNfV0VBSyB8fCBpbnN0YW5jZS5mb3JFYWNoKGZ1bmN0aW9uKHZhbCwga2V5KXtcbiAgICAgIEJVR0dZX1pFUk8gPSAxIC8ga2V5ID09PSAtSW5maW5pdHk7XG4gICAgfSk7XG4gICAgaWYoVEhST1dTX09OX1BSSU1JVElWRVMgfHwgQlVHR1lfWkVSTyl7XG4gICAgICBmaXhNZXRob2QoJ2RlbGV0ZScpO1xuICAgICAgZml4TWV0aG9kKCdoYXMnKTtcbiAgICAgIElTX01BUCAmJiBmaXhNZXRob2QoJ2dldCcpO1xuICAgIH1cbiAgICBpZihCVUdHWV9aRVJPIHx8IEhBU05UX0NIQUlOSU5HKWZpeE1ldGhvZChBRERFUik7XG4gICAgLy8gd2VhayBjb2xsZWN0aW9ucyBzaG91bGQgbm90IGNvbnRhaW5zIC5jbGVhciBtZXRob2RcbiAgICBpZihJU19XRUFLICYmIHByb3RvLmNsZWFyKWRlbGV0ZSBwcm90by5jbGVhcjtcbiAgfVxuXG4gIHNldFRvU3RyaW5nVGFnKEMsIE5BTUUpO1xuXG4gIE9bTkFNRV0gPSBDO1xuICAkZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqIChDICE9IEJhc2UpLCBPKTtcblxuICBpZighSVNfV0VBSyljb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY29sbGVjdGlvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uLXN0cm9uZycpO1xuXG4vLyAyMy4yIFNldCBPYmplY3RzXG5yZXF1aXJlKCcuLyQuY29sbGVjdGlvbicpKCdTZXQnLCBmdW5jdGlvbihnZXQpe1xuICByZXR1cm4gZnVuY3Rpb24gU2V0KCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4yLjMuMSBTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcbiAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpe1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHRoaXMsIHZhbHVlID0gdmFsdWUgPT09IDAgPyAwIDogdmFsdWUsIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc2V0LmpzXG4gKiogbW9kdWxlIGlkID0gMTQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJCAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCByZWRlZmluZSAgICAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKVxuICAsIHdlYWsgICAgICAgICA9IHJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uLXdlYWsnKVxuICAsIGlzT2JqZWN0ICAgICA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGhhcyAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIGZyb3plblN0b3JlICA9IHdlYWsuZnJvemVuU3RvcmVcbiAgLCBXRUFLICAgICAgICAgPSB3ZWFrLldFQUtcbiAgLCBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGlzT2JqZWN0XG4gICwgdG1wICAgICAgICAgID0ge307XG5cbi8vIDIzLjMgV2Vha01hcCBPYmplY3RzXG52YXIgJFdlYWtNYXAgPSByZXF1aXJlKCcuLyQuY29sbGVjdGlvbicpKCdXZWFrTWFwJywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFdlYWtNYXAoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjMuMy4zIFdlYWtNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSl7XG4gICAgaWYoaXNPYmplY3Qoa2V5KSl7XG4gICAgICBpZighaXNFeHRlbnNpYmxlKGtleSkpcmV0dXJuIGZyb3plblN0b3JlKHRoaXMpLmdldChrZXkpO1xuICAgICAgaWYoaGFzKGtleSwgV0VBSykpcmV0dXJuIGtleVtXRUFLXVt0aGlzLl9pXTtcbiAgICB9XG4gIH0sXG4gIC8vIDIzLjMuMy41IFdlYWtNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKXtcbiAgICByZXR1cm4gd2Vhay5kZWYodGhpcywga2V5LCB2YWx1ZSk7XG4gIH1cbn0sIHdlYWssIHRydWUsIHRydWUpO1xuXG4vLyBJRTExIFdlYWtNYXAgZnJvemVuIGtleXMgZml4XG5pZihuZXcgJFdlYWtNYXAoKS5zZXQoKE9iamVjdC5mcmVlemUgfHwgT2JqZWN0KSh0bXApLCA3KS5nZXQodG1wKSAhPSA3KXtcbiAgJC5lYWNoLmNhbGwoWydkZWxldGUnLCAnaGFzJywgJ2dldCcsICdzZXQnXSwgZnVuY3Rpb24oa2V5KXtcbiAgICB2YXIgcHJvdG8gID0gJFdlYWtNYXAucHJvdG90eXBlXG4gICAgICAsIG1ldGhvZCA9IHByb3RvW2tleV07XG4gICAgcmVkZWZpbmUocHJvdG8sIGtleSwgZnVuY3Rpb24oYSwgYil7XG4gICAgICAvLyBzdG9yZSBmcm96ZW4gb2JqZWN0cyBvbiBsZWFreSBtYXBcbiAgICAgIGlmKGlzT2JqZWN0KGEpICYmICFpc0V4dGVuc2libGUoYSkpe1xuICAgICAgICB2YXIgcmVzdWx0ID0gZnJvemVuU3RvcmUodGhpcylba2V5XShhLCBiKTtcbiAgICAgICAgcmV0dXJuIGtleSA9PSAnc2V0JyA/IHRoaXMgOiByZXN1bHQ7XG4gICAgICAvLyBzdG9yZSBhbGwgdGhlIHJlc3Qgb24gbmF0aXZlIHdlYWttYXBcbiAgICAgIH0gcmV0dXJuIG1ldGhvZC5jYWxsKHRoaXMsIGEsIGIpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYud2Vhay1tYXAuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBoaWRlICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oaWRlJylcbiAgLCByZWRlZmluZUFsbCAgICAgICA9IHJlcXVpcmUoJy4vJC5yZWRlZmluZS1hbGwnKVxuICAsIGFuT2JqZWN0ICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgaXNPYmplY3QgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBzdHJpY3ROZXcgICAgICAgICA9IHJlcXVpcmUoJy4vJC5zdHJpY3QtbmV3JylcbiAgLCBmb3JPZiAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxuICAsIGNyZWF0ZUFycmF5TWV0aG9kID0gcmVxdWlyZSgnLi8kLmFycmF5LW1ldGhvZHMnKVxuICAsICRoYXMgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgV0VBSyAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQudWlkJykoJ3dlYWsnKVxuICAsIGlzRXh0ZW5zaWJsZSAgICAgID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBpc09iamVjdFxuICAsIGFycmF5RmluZCAgICAgICAgID0gY3JlYXRlQXJyYXlNZXRob2QoNSlcbiAgLCBhcnJheUZpbmRJbmRleCAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDYpXG4gICwgaWQgICAgICAgICAgICAgICAgPSAwO1xuXG4vLyBmYWxsYmFjayBmb3IgZnJvemVuIGtleXNcbnZhciBmcm96ZW5TdG9yZSA9IGZ1bmN0aW9uKHRoYXQpe1xuICByZXR1cm4gdGhhdC5fbCB8fCAodGhhdC5fbCA9IG5ldyBGcm96ZW5TdG9yZSk7XG59O1xudmFyIEZyb3plblN0b3JlID0gZnVuY3Rpb24oKXtcbiAgdGhpcy5hID0gW107XG59O1xudmFyIGZpbmRGcm96ZW4gPSBmdW5jdGlvbihzdG9yZSwga2V5KXtcbiAgcmV0dXJuIGFycmF5RmluZChzdG9yZS5hLCBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XG4gIH0pO1xufTtcbkZyb3plblN0b3JlLnByb3RvdHlwZSA9IHtcbiAgZ2V0OiBmdW5jdGlvbihrZXkpe1xuICAgIHZhciBlbnRyeSA9IGZpbmRGcm96ZW4odGhpcywga2V5KTtcbiAgICBpZihlbnRyeSlyZXR1cm4gZW50cnlbMV07XG4gIH0sXG4gIGhhczogZnVuY3Rpb24oa2V5KXtcbiAgICByZXR1cm4gISFmaW5kRnJvemVuKHRoaXMsIGtleSk7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oa2V5LCB2YWx1ZSl7XG4gICAgdmFyIGVudHJ5ID0gZmluZEZyb3plbih0aGlzLCBrZXkpO1xuICAgIGlmKGVudHJ5KWVudHJ5WzFdID0gdmFsdWU7XG4gICAgZWxzZSB0aGlzLmEucHVzaChba2V5LCB2YWx1ZV0pO1xuICB9LFxuICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICB2YXIgaW5kZXggPSBhcnJheUZpbmRJbmRleCh0aGlzLmEsIGZ1bmN0aW9uKGl0KXtcbiAgICAgIHJldHVybiBpdFswXSA9PT0ga2V5O1xuICAgIH0pO1xuICAgIGlmKH5pbmRleCl0aGlzLmEuc3BsaWNlKGluZGV4LCAxKTtcbiAgICByZXR1cm4gISF+aW5kZXg7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBnZXRDb25zdHJ1Y3RvcjogZnVuY3Rpb24od3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUil7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRoYXQsIGl0ZXJhYmxlKXtcbiAgICAgIHN0cmljdE5ldyh0aGF0LCBDLCBOQU1FKTtcbiAgICAgIHRoYXQuX2kgPSBpZCsrOyAgICAgIC8vIGNvbGxlY3Rpb24gaWRcbiAgICAgIHRoYXQuX2wgPSB1bmRlZmluZWQ7IC8vIGxlYWsgc3RvcmUgZm9yIGZyb3plbiBvYmplY3RzXG4gICAgICBpZihpdGVyYWJsZSAhPSB1bmRlZmluZWQpZm9yT2YoaXRlcmFibGUsIElTX01BUCwgdGhhdFtBRERFUl0sIHRoYXQpO1xuICAgIH0pO1xuICAgIHJlZGVmaW5lQWxsKEMucHJvdG90eXBlLCB7XG4gICAgICAvLyAyMy4zLjMuMiBXZWFrTWFwLnByb3RvdHlwZS5kZWxldGUoa2V5KVxuICAgICAgLy8gMjMuNC4zLjMgV2Vha1NldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIGlmKCFpc09iamVjdChrZXkpKXJldHVybiBmYWxzZTtcbiAgICAgICAgaWYoIWlzRXh0ZW5zaWJsZShrZXkpKXJldHVybiBmcm96ZW5TdG9yZSh0aGlzKVsnZGVsZXRlJ10oa2V5KTtcbiAgICAgICAgcmV0dXJuICRoYXMoa2V5LCBXRUFLKSAmJiAkaGFzKGtleVtXRUFLXSwgdGhpcy5faSkgJiYgZGVsZXRlIGtleVtXRUFLXVt0aGlzLl9pXTtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4zLjMuNCBXZWFrTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuNC4zLjQgV2Vha1NldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KXtcbiAgICAgICAgaWYoIWlzT2JqZWN0KGtleSkpcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZighaXNFeHRlbnNpYmxlKGtleSkpcmV0dXJuIGZyb3plblN0b3JlKHRoaXMpLmhhcyhrZXkpO1xuICAgICAgICByZXR1cm4gJGhhcyhrZXksIFdFQUspICYmICRoYXMoa2V5W1dFQUtdLCB0aGlzLl9pKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcbiAgICBpZighaXNFeHRlbnNpYmxlKGFuT2JqZWN0KGtleSkpKXtcbiAgICAgIGZyb3plblN0b3JlKHRoYXQpLnNldChrZXksIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJGhhcyhrZXksIFdFQUspIHx8IGhpZGUoa2V5LCBXRUFLLCB7fSk7XG4gICAgICBrZXlbV0VBS11bdGhhdC5faV0gPSB2YWx1ZTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBmcm96ZW5TdG9yZTogZnJvemVuU3RvcmUsXG4gIFdFQUs6IFdFQUtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5jb2xsZWN0aW9uLXdlYWsuanNcbiAqKiBtb2R1bGUgaWQgPSAxNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciB3ZWFrID0gcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24td2VhaycpO1xuXG4vLyAyMy40IFdlYWtTZXQgT2JqZWN0c1xucmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24nKSgnV2Vha1NldCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBXZWFrU2V0KCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy40LjMuMSBXZWFrU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKXtcbiAgICByZXR1cm4gd2Vhay5kZWYodGhpcywgdmFsdWUsIHRydWUpO1xuICB9XG59LCB3ZWFrLCBmYWxzZSwgdHJ1ZSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LndlYWstc2V0LmpzXG4gKiogbW9kdWxlIGlkID0gMTUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyNi4xLjEgUmVmbGVjdC5hcHBseSh0YXJnZXQsIHRoaXNBcmd1bWVudCwgYXJndW1lbnRzTGlzdClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgX2FwcGx5ICA9IEZ1bmN0aW9uLmFwcGx5O1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGFwcGx5OiBmdW5jdGlvbiBhcHBseSh0YXJnZXQsIHRoaXNBcmd1bWVudCwgYXJndW1lbnRzTGlzdCl7XG4gICAgcmV0dXJuIF9hcHBseS5jYWxsKHRhcmdldCwgdGhpc0FyZ3VtZW50LCBhcmd1bWVudHNMaXN0KTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuYXBwbHkuanNcbiAqKiBtb2R1bGUgaWQgPSAxNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDI2LjEuMiBSZWZsZWN0LmNvbnN0cnVjdCh0YXJnZXQsIGFyZ3VtZW50c0xpc3QgWywgbmV3VGFyZ2V0XSlcbnZhciAkICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsICRleHBvcnQgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vJC5hLWZ1bmN0aW9uJylcbiAgLCBhbk9iamVjdCAgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCBpc09iamVjdCAgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBiaW5kICAgICAgPSBGdW5jdGlvbi5iaW5kIHx8IHJlcXVpcmUoJy4vJC5jb3JlJykuRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQ7XG5cbi8vIE1TIEVkZ2Ugc3VwcG9ydHMgb25seSAyIGFyZ3VtZW50c1xuLy8gRkYgTmlnaHRseSBzZXRzIHRoaXJkIGFyZ3VtZW50IGFzIGBuZXcudGFyZ2V0YCwgYnV0IGRvZXMgbm90IGNyZWF0ZSBgdGhpc2AgZnJvbSBpdFxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICBmdW5jdGlvbiBGKCl7fVxuICByZXR1cm4gIShSZWZsZWN0LmNvbnN0cnVjdChmdW5jdGlvbigpe30sIFtdLCBGKSBpbnN0YW5jZW9mIEYpO1xufSksICdSZWZsZWN0Jywge1xuICBjb25zdHJ1Y3Q6IGZ1bmN0aW9uIGNvbnN0cnVjdChUYXJnZXQsIGFyZ3MgLyosIG5ld1RhcmdldCovKXtcbiAgICBhRnVuY3Rpb24oVGFyZ2V0KTtcbiAgICB2YXIgbmV3VGFyZ2V0ID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyBUYXJnZXQgOiBhRnVuY3Rpb24oYXJndW1lbnRzWzJdKTtcbiAgICBpZihUYXJnZXQgPT0gbmV3VGFyZ2V0KXtcbiAgICAgIC8vIHcvbyBhbHRlcmVkIG5ld1RhcmdldCwgb3B0aW1pemF0aW9uIGZvciAwLTQgYXJndW1lbnRzXG4gICAgICBpZihhcmdzICE9IHVuZGVmaW5lZClzd2l0Y2goYW5PYmplY3QoYXJncykubGVuZ3RoKXtcbiAgICAgICAgY2FzZSAwOiByZXR1cm4gbmV3IFRhcmdldDtcbiAgICAgICAgY2FzZSAxOiByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdKTtcbiAgICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICAgICAgY2FzZSAzOiByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgICAgY2FzZSA0OiByZXR1cm4gbmV3IFRhcmdldChhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgICAgIH1cbiAgICAgIC8vIHcvbyBhbHRlcmVkIG5ld1RhcmdldCwgbG90IG9mIGFyZ3VtZW50cyBjYXNlXG4gICAgICB2YXIgJGFyZ3MgPSBbbnVsbF07XG4gICAgICAkYXJncy5wdXNoLmFwcGx5KCRhcmdzLCBhcmdzKTtcbiAgICAgIHJldHVybiBuZXcgKGJpbmQuYXBwbHkoVGFyZ2V0LCAkYXJncykpO1xuICAgIH1cbiAgICAvLyB3aXRoIGFsdGVyZWQgbmV3VGFyZ2V0LCBub3Qgc3VwcG9ydCBidWlsdC1pbiBjb25zdHJ1Y3RvcnNcbiAgICB2YXIgcHJvdG8gICAgPSBuZXdUYXJnZXQucHJvdG90eXBlXG4gICAgICAsIGluc3RhbmNlID0gJC5jcmVhdGUoaXNPYmplY3QocHJvdG8pID8gcHJvdG8gOiBPYmplY3QucHJvdG90eXBlKVxuICAgICAgLCByZXN1bHQgICA9IEZ1bmN0aW9uLmFwcGx5LmNhbGwoVGFyZ2V0LCBpbnN0YW5jZSwgYXJncyk7XG4gICAgcmV0dXJuIGlzT2JqZWN0KHJlc3VsdCkgPyByZXN1bHQgOiBpbnN0YW5jZTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuY29uc3RydWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMTUzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyNi4xLjMgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKVxudmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xuXG4vLyBNUyBFZGdlIGhhcyBicm9rZW4gUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSAtIHRocm93aW5nIGluc3RlYWQgb2YgcmV0dXJuaW5nIGZhbHNlXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vJC5mYWlscycpKGZ1bmN0aW9uKCl7XG4gIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkoJC5zZXREZXNjKHt9LCAxLCB7dmFsdWU6IDF9KSwgMSwge3ZhbHVlOiAyfSk7XG59KSwgJ1JlZmxlY3QnLCB7XG4gIGRlZmluZVByb3BlcnR5OiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKXtcbiAgICBhbk9iamVjdCh0YXJnZXQpO1xuICAgIHRyeSB7XG4gICAgICAkLnNldERlc2ModGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcyk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVmaW5lLXByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMTU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyNi4xLjQgUmVmbGVjdC5kZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5KVxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgZ2V0RGVzYyAgPSByZXF1aXJlKCcuLyQnKS5nZXREZXNjXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgZGVsZXRlUHJvcGVydHk6IGZ1bmN0aW9uIGRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXkpe1xuICAgIHZhciBkZXNjID0gZ2V0RGVzYyhhbk9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XG4gICAgcmV0dXJuIGRlc2MgJiYgIWRlc2MuY29uZmlndXJhYmxlID8gZmFsc2UgOiBkZWxldGUgdGFyZ2V0W3Byb3BlcnR5S2V5XTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVsZXRlLXByb3BlcnR5LmpzXG4gKiogbW9kdWxlIGlkID0gMTU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAyNi4xLjUgUmVmbGVjdC5lbnVtZXJhdGUodGFyZ2V0KVxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0Jyk7XG52YXIgRW51bWVyYXRlID0gZnVuY3Rpb24oaXRlcmF0ZWQpe1xuICB0aGlzLl90ID0gYW5PYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB2YXIga2V5cyA9IHRoaXMuX2sgPSBbXSAgICAgICAvLyBrZXlzXG4gICAgLCBrZXk7XG4gIGZvcihrZXkgaW4gaXRlcmF0ZWQpa2V5cy5wdXNoKGtleSk7XG59O1xucmVxdWlyZSgnLi8kLml0ZXItY3JlYXRlJykoRW51bWVyYXRlLCAnT2JqZWN0JywgZnVuY3Rpb24oKXtcbiAgdmFyIHRoYXQgPSB0aGlzXG4gICAgLCBrZXlzID0gdGhhdC5fa1xuICAgICwga2V5O1xuICBkbyB7XG4gICAgaWYodGhhdC5faSA+PSBrZXlzLmxlbmd0aClyZXR1cm4ge3ZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWV9O1xuICB9IHdoaWxlKCEoKGtleSA9IGtleXNbdGhhdC5faSsrXSkgaW4gdGhhdC5fdCkpO1xuICByZXR1cm4ge3ZhbHVlOiBrZXksIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGVudW1lcmF0ZTogZnVuY3Rpb24gZW51bWVyYXRlKHRhcmdldCl7XG4gICAgcmV0dXJuIG5ldyBFbnVtZXJhdGUodGFyZ2V0KTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZW51bWVyYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMTU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyNi4xLjYgUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSBbLCByZWNlaXZlcl0pXG52YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGhhcyAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgJGV4cG9ydCAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xuXG5mdW5jdGlvbiBnZXQodGFyZ2V0LCBwcm9wZXJ0eUtleS8qLCByZWNlaXZlciovKXtcbiAgdmFyIHJlY2VpdmVyID0gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0YXJnZXQgOiBhcmd1bWVudHNbMl1cbiAgICAsIGRlc2MsIHByb3RvO1xuICBpZihhbk9iamVjdCh0YXJnZXQpID09PSByZWNlaXZlcilyZXR1cm4gdGFyZ2V0W3Byb3BlcnR5S2V5XTtcbiAgaWYoZGVzYyA9ICQuZ2V0RGVzYyh0YXJnZXQsIHByb3BlcnR5S2V5KSlyZXR1cm4gaGFzKGRlc2MsICd2YWx1ZScpXG4gICAgPyBkZXNjLnZhbHVlXG4gICAgOiBkZXNjLmdldCAhPT0gdW5kZWZpbmVkXG4gICAgICA/IGRlc2MuZ2V0LmNhbGwocmVjZWl2ZXIpXG4gICAgICA6IHVuZGVmaW5lZDtcbiAgaWYoaXNPYmplY3QocHJvdG8gPSAkLmdldFByb3RvKHRhcmdldCkpKXJldHVybiBnZXQocHJvdG8sIHByb3BlcnR5S2V5LCByZWNlaXZlcik7XG59XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtnZXQ6IGdldH0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjYuMS43IFJlZmxlY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHlLZXkpXG52YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsICRleHBvcnQgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSl7XG4gICAgcmV0dXJuICQuZ2V0RGVzYyhhbk9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvci5qc1xuICoqIG1vZHVsZSBpZCA9IDE1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjYuMS44IFJlZmxlY3QuZ2V0UHJvdG90eXBlT2YodGFyZ2V0KVxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgZ2V0UHJvdG8gPSByZXF1aXJlKCcuLyQnKS5nZXRQcm90b1xuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGdldFByb3RvdHlwZU9mOiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZih0YXJnZXQpe1xuICAgIHJldHVybiBnZXRQcm90byhhbk9iamVjdCh0YXJnZXQpKTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LXByb3RvdHlwZS1vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDE1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjYuMS45IFJlZmxlY3QuaGFzKHRhcmdldCwgcHJvcGVydHlLZXkpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBoYXM6IGZ1bmN0aW9uIGhhcyh0YXJnZXQsIHByb3BlcnR5S2V5KXtcbiAgICByZXR1cm4gcHJvcGVydHlLZXkgaW4gdGFyZ2V0O1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5oYXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDI2LjEuMTAgUmVmbGVjdC5pc0V4dGVuc2libGUodGFyZ2V0KVxudmFyICRleHBvcnQgICAgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBhbk9iamVjdCAgICAgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgJGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGU7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgaXNFeHRlbnNpYmxlOiBmdW5jdGlvbiBpc0V4dGVuc2libGUodGFyZ2V0KXtcbiAgICBhbk9iamVjdCh0YXJnZXQpO1xuICAgIHJldHVybiAkaXNFeHRlbnNpYmxlID8gJGlzRXh0ZW5zaWJsZSh0YXJnZXQpIDogdHJ1ZTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE2MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjYuMS4xMSBSZWZsZWN0Lm93bktleXModGFyZ2V0KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtvd25LZXlzOiByZXF1aXJlKCcuLyQub3duLWtleXMnKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0Lm93bi1rZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gMTYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBhbGwgb2JqZWN0IGtleXMsIGluY2x1ZGVzIG5vbi1lbnVtZXJhYmxlIGFuZCBzeW1ib2xzXG52YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgUmVmbGVjdCAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJykuUmVmbGVjdDtcbm1vZHVsZS5leHBvcnRzID0gUmVmbGVjdCAmJiBSZWZsZWN0Lm93bktleXMgfHwgZnVuY3Rpb24gb3duS2V5cyhpdCl7XG4gIHZhciBrZXlzICAgICAgID0gJC5nZXROYW1lcyhhbk9iamVjdChpdCkpXG4gICAgLCBnZXRTeW1ib2xzID0gJC5nZXRTeW1ib2xzO1xuICByZXR1cm4gZ2V0U3ltYm9scyA/IGtleXMuY29uY2F0KGdldFN5bWJvbHMoaXQpKSA6IGtleXM7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQub3duLWtleXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDI2LjEuMTIgUmVmbGVjdC5wcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpXG52YXIgJGV4cG9ydCAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgYW5PYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgJHByZXZlbnRFeHRlbnNpb25zID0gT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIHByZXZlbnRFeHRlbnNpb25zOiBmdW5jdGlvbiBwcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpe1xuICAgIGFuT2JqZWN0KHRhcmdldCk7XG4gICAgdHJ5IHtcbiAgICAgIGlmKCRwcmV2ZW50RXh0ZW5zaW9ucykkcHJldmVudEV4dGVuc2lvbnModGFyZ2V0KTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5wcmV2ZW50LWV4dGVuc2lvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDI2LjEuMTMgUmVmbGVjdC5zZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgViBbLCByZWNlaXZlcl0pXG52YXIgJCAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgaGFzICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsICRleHBvcnQgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKVxuICAsIGFuT2JqZWN0ICAgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCBpc09iamVjdCAgID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xuXG5mdW5jdGlvbiBzZXQodGFyZ2V0LCBwcm9wZXJ0eUtleSwgVi8qLCByZWNlaXZlciovKXtcbiAgdmFyIHJlY2VpdmVyID0gYXJndW1lbnRzLmxlbmd0aCA8IDQgPyB0YXJnZXQgOiBhcmd1bWVudHNbM11cbiAgICAsIG93bkRlc2MgID0gJC5nZXREZXNjKGFuT2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KVxuICAgICwgZXhpc3RpbmdEZXNjcmlwdG9yLCBwcm90bztcbiAgaWYoIW93bkRlc2Mpe1xuICAgIGlmKGlzT2JqZWN0KHByb3RvID0gJC5nZXRQcm90byh0YXJnZXQpKSl7XG4gICAgICByZXR1cm4gc2V0KHByb3RvLCBwcm9wZXJ0eUtleSwgViwgcmVjZWl2ZXIpO1xuICAgIH1cbiAgICBvd25EZXNjID0gY3JlYXRlRGVzYygwKTtcbiAgfVxuICBpZihoYXMob3duRGVzYywgJ3ZhbHVlJykpe1xuICAgIGlmKG93bkRlc2Mud3JpdGFibGUgPT09IGZhbHNlIHx8ICFpc09iamVjdChyZWNlaXZlcikpcmV0dXJuIGZhbHNlO1xuICAgIGV4aXN0aW5nRGVzY3JpcHRvciA9ICQuZ2V0RGVzYyhyZWNlaXZlciwgcHJvcGVydHlLZXkpIHx8IGNyZWF0ZURlc2MoMCk7XG4gICAgZXhpc3RpbmdEZXNjcmlwdG9yLnZhbHVlID0gVjtcbiAgICAkLnNldERlc2MocmVjZWl2ZXIsIHByb3BlcnR5S2V5LCBleGlzdGluZ0Rlc2NyaXB0b3IpO1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiBvd25EZXNjLnNldCA9PT0gdW5kZWZpbmVkID8gZmFsc2UgOiAob3duRGVzYy5zZXQuY2FsbChyZWNlaXZlciwgViksIHRydWUpO1xufVxuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7c2V0OiBzZXR9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDI2LjEuMTQgUmVmbGVjdC5zZXRQcm90b3R5cGVPZih0YXJnZXQsIHByb3RvKVxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgc2V0UHJvdG8gPSByZXF1aXJlKCcuLyQuc2V0LXByb3RvJyk7XG5cbmlmKHNldFByb3RvKSRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgc2V0UHJvdG90eXBlT2Y6IGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKHRhcmdldCwgcHJvdG8pe1xuICAgIHNldFByb3RvLmNoZWNrKHRhcmdldCwgcHJvdG8pO1xuICAgIHRyeSB7XG4gICAgICBzZXRQcm90by5zZXQodGFyZ2V0LCBwcm90byk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LXByb3RvdHlwZS1vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDE2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsICRpbmNsdWRlcyA9IHJlcXVpcmUoJy4vJC5hcnJheS1pbmNsdWRlcycpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ0FycmF5Jywge1xuICAvLyBodHRwczovL2dpdGh1Yi5jb20vZG9tZW5pYy9BcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKGVsIC8qLCBmcm9tSW5kZXggPSAwICovKXtcbiAgICByZXR1cm4gJGluY2x1ZGVzKHRoaXMsIGVsLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG5yZXF1aXJlKCcuLyQuYWRkLXRvLXVuc2NvcGFibGVzJykoJ2luY2x1ZGVzJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LmFycmF5LmluY2x1ZGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTY3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vbWF0aGlhc2J5bmVucy9TdHJpbmcucHJvdG90eXBlLmF0XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsICRhdCAgICAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWF0JykodHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuICBhdDogZnVuY3Rpb24gYXQocG9zKXtcbiAgICByZXR1cm4gJGF0KHRoaXMsIHBvcyk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcuYXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgJHBhZCAgICA9IHJlcXVpcmUoJy4vJC5zdHJpbmctcGFkJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuICBwYWRMZWZ0OiBmdW5jdGlvbiBwYWRMZWZ0KG1heExlbmd0aCAvKiwgZmlsbFN0cmluZyA9ICcgJyAqLyl7XG4gICAgcmV0dXJuICRwYWQodGhpcywgbWF4TGVuZ3RoLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgdHJ1ZSk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLWxlZnQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9samhhcmIvcHJvcG9zYWwtc3RyaW5nLXBhZC1sZWZ0LXJpZ2h0XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJylcbiAgLCByZXBlYXQgICA9IHJlcXVpcmUoJy4vJC5zdHJpbmctcmVwZWF0JylcbiAgLCBkZWZpbmVkICA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGhhdCwgbWF4TGVuZ3RoLCBmaWxsU3RyaW5nLCBsZWZ0KXtcbiAgdmFyIFMgICAgICAgICAgICA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKVxuICAgICwgc3RyaW5nTGVuZ3RoID0gUy5sZW5ndGhcbiAgICAsIGZpbGxTdHIgICAgICA9IGZpbGxTdHJpbmcgPT09IHVuZGVmaW5lZCA/ICcgJyA6IFN0cmluZyhmaWxsU3RyaW5nKVxuICAgICwgaW50TWF4TGVuZ3RoID0gdG9MZW5ndGgobWF4TGVuZ3RoKTtcbiAgaWYoaW50TWF4TGVuZ3RoIDw9IHN0cmluZ0xlbmd0aClyZXR1cm4gUztcbiAgaWYoZmlsbFN0ciA9PSAnJylmaWxsU3RyID0gJyAnO1xuICB2YXIgZmlsbExlbiA9IGludE1heExlbmd0aCAtIHN0cmluZ0xlbmd0aFxuICAgICwgc3RyaW5nRmlsbGVyID0gcmVwZWF0LmNhbGwoZmlsbFN0ciwgTWF0aC5jZWlsKGZpbGxMZW4gLyBmaWxsU3RyLmxlbmd0aCkpO1xuICBpZihzdHJpbmdGaWxsZXIubGVuZ3RoID4gZmlsbExlbilzdHJpbmdGaWxsZXIgPSBzdHJpbmdGaWxsZXIuc2xpY2UoMCwgZmlsbExlbik7XG4gIHJldHVybiBsZWZ0ID8gc3RyaW5nRmlsbGVyICsgUyA6IFMgKyBzdHJpbmdGaWxsZXI7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuc3RyaW5nLXBhZC5qc1xuICoqIG1vZHVsZSBpZCA9IDE3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCAkcGFkICAgID0gcmVxdWlyZSgnLi8kLnN0cmluZy1wYWQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIHBhZFJpZ2h0OiBmdW5jdGlvbiBwYWRSaWdodChtYXhMZW5ndGggLyosIGZpbGxTdHJpbmcgPSAnICcgKi8pe1xuICAgIHJldHVybiAkcGFkKHRoaXMsIG1heExlbmd0aCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIGZhbHNlKTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy5wYWQtcmlnaHQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNzFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWJtYXJrYmFnZS9lY21hc2NyaXB0LXN0cmluZy1sZWZ0LXJpZ2h0LXRyaW1cbnJlcXVpcmUoJy4vJC5zdHJpbmctdHJpbScpKCd0cmltTGVmdCcsIGZ1bmN0aW9uKCR0cmltKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRyaW1MZWZ0KCl7XG4gICAgcmV0dXJuICR0cmltKHRoaXMsIDEpO1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy50cmltLWxlZnQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9zZWJtYXJrYmFnZS9lY21hc2NyaXB0LXN0cmluZy1sZWZ0LXJpZ2h0LXRyaW1cbnJlcXVpcmUoJy4vJC5zdHJpbmctdHJpbScpKCd0cmltUmlnaHQnLCBmdW5jdGlvbigkdHJpbSl7XG4gIHJldHVybiBmdW5jdGlvbiB0cmltUmlnaHQoKXtcbiAgICByZXR1cm4gJHRyaW0odGhpcywgMik7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnRyaW0tcmlnaHQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9iZW5qYW1pbmdyL1JleEV4cC5lc2NhcGVcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgJHJlICAgICA9IHJlcXVpcmUoJy4vJC5yZXBsYWNlcicpKC9bXFxcXF4kKis/LigpfFtcXF17fV0vZywgJ1xcXFwkJicpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZ0V4cCcsIHtlc2NhcGU6IGZ1bmN0aW9uIGVzY2FwZShpdCl7IHJldHVybiAkcmUoaXQpOyB9fSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcucmVnZXhwLmVzY2FwZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE3NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihyZWdFeHAsIHJlcGxhY2Upe1xuICB2YXIgcmVwbGFjZXIgPSByZXBsYWNlID09PSBPYmplY3QocmVwbGFjZSkgPyBmdW5jdGlvbihwYXJ0KXtcbiAgICByZXR1cm4gcmVwbGFjZVtwYXJ0XTtcbiAgfSA6IHJlcGxhY2U7XG4gIHJldHVybiBmdW5jdGlvbihpdCl7XG4gICAgcmV0dXJuIFN0cmluZyhpdCkucmVwbGFjZShyZWdFeHAsIHJlcGxhY2VyKTtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5yZXBsYWNlci5qc1xuICoqIG1vZHVsZSBpZCA9IDE3NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cHM6Ly9naXN0LmdpdGh1Yi5jb20vV2ViUmVmbGVjdGlvbi85MzUzNzgxXG52YXIgJCAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgJGV4cG9ydCAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIG93bktleXMgICAgPSByZXF1aXJlKCcuLyQub3duLWtleXMnKVxuICAsIHRvSU9iamVjdCAgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzOiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKG9iamVjdCl7XG4gICAgdmFyIE8gICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICAgLCBzZXREZXNjID0gJC5zZXREZXNjXG4gICAgICAsIGdldERlc2MgPSAkLmdldERlc2NcbiAgICAgICwga2V5cyAgICA9IG93bktleXMoTylcbiAgICAgICwgcmVzdWx0ICA9IHt9XG4gICAgICAsIGkgICAgICAgPSAwXG4gICAgICAsIGtleSwgRDtcbiAgICB3aGlsZShrZXlzLmxlbmd0aCA+IGkpe1xuICAgICAgRCA9IGdldERlc2MoTywga2V5ID0ga2V5c1tpKytdKTtcbiAgICAgIGlmKGtleSBpbiByZXN1bHQpc2V0RGVzYyhyZXN1bHQsIGtleSwgY3JlYXRlRGVzYygwLCBEKSk7XG4gICAgICBlbHNlIHJlc3VsdFtrZXldID0gRDtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDE3NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cDovL2dvby5nbC9Ya0JyakRcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgJHZhbHVlcyA9IHJlcXVpcmUoJy4vJC5vYmplY3QtdG8tYXJyYXknKShmYWxzZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICB2YWx1ZXM6IGZ1bmN0aW9uIHZhbHVlcyhpdCl7XG4gICAgcmV0dXJuICR2YWx1ZXMoaXQpO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE3N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICQgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKVxuICAsIGlzRW51bSAgICA9ICQuaXNFbnVtO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpc0VudHJpZXMpe1xuICByZXR1cm4gZnVuY3Rpb24oaXQpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoaXQpXG4gICAgICAsIGtleXMgICA9ICQuZ2V0S2V5cyhPKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBpICAgICAgPSAwXG4gICAgICAsIHJlc3VsdCA9IFtdXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKE8sIGtleSA9IGtleXNbaSsrXSkpe1xuICAgICAgcmVzdWx0LnB1c2goaXNFbnRyaWVzID8gW2tleSwgT1trZXldXSA6IE9ba2V5XSk7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm9iamVjdC10by1hcnJheS5qc1xuICoqIG1vZHVsZSBpZCA9IDE3OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cDovL2dvby5nbC9Ya0JyakRcbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsICRlbnRyaWVzID0gcmVxdWlyZSgnLi8kLm9iamVjdC10by1hcnJheScpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgZW50cmllczogZnVuY3Rpb24gZW50cmllcyhpdCl7XG4gICAgcmV0dXJuICRlbnRyaWVzKGl0KTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5lbnRyaWVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTc5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnTWFwJywge3RvSlNPTjogcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24tdG8tanNvbicpKCdNYXAnKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE4MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyIGZvck9mICAgPSByZXF1aXJlKCcuLyQuZm9yLW9mJylcbiAgLCBjbGFzc29mID0gcmVxdWlyZSgnLi8kLmNsYXNzb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSl7XG4gIHJldHVybiBmdW5jdGlvbiB0b0pTT04oKXtcbiAgICBpZihjbGFzc29mKHRoaXMpICE9IE5BTUUpdGhyb3cgVHlwZUVycm9yKE5BTUUgKyBcIiN0b0pTT04gaXNuJ3QgZ2VuZXJpY1wiKTtcbiAgICB2YXIgYXJyID0gW107XG4gICAgZm9yT2YodGhpcywgZmFsc2UsIGFyci5wdXNoLCBhcnIpO1xuICAgIHJldHVybiBhcnI7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY29sbGVjdGlvbi10by1qc29uLmpzXG4gKiogbW9kdWxlIGlkID0gMTgxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnU2V0Jywge3RvSlNPTjogcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24tdG8tanNvbicpKCdTZXQnKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zZXQudG8tanNvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE4MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gSmF2YVNjcmlwdCAxLjYgLyBTdHJhd21hbiBhcnJheSBzdGF0aWNzIHNoaW1cbnZhciAkICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgJGN0eCAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsICRBcnJheSAgPSByZXF1aXJlKCcuLyQuY29yZScpLkFycmF5IHx8IEFycmF5XG4gICwgc3RhdGljcyA9IHt9O1xudmFyIHNldFN0YXRpY3MgPSBmdW5jdGlvbihrZXlzLCBsZW5ndGgpe1xuICAkLmVhY2guY2FsbChrZXlzLnNwbGl0KCcsJyksIGZ1bmN0aW9uKGtleSl7XG4gICAgaWYobGVuZ3RoID09IHVuZGVmaW5lZCAmJiBrZXkgaW4gJEFycmF5KXN0YXRpY3Nba2V5XSA9ICRBcnJheVtrZXldO1xuICAgIGVsc2UgaWYoa2V5IGluIFtdKXN0YXRpY3Nba2V5XSA9ICRjdHgoRnVuY3Rpb24uY2FsbCwgW11ba2V5XSwgbGVuZ3RoKTtcbiAgfSk7XG59O1xuc2V0U3RhdGljcygncG9wLHJldmVyc2Usc2hpZnQsa2V5cyx2YWx1ZXMsZW50cmllcycsIDEpO1xuc2V0U3RhdGljcygnaW5kZXhPZixldmVyeSxzb21lLGZvckVhY2gsbWFwLGZpbHRlcixmaW5kLGZpbmRJbmRleCxpbmNsdWRlcycsIDMpO1xuc2V0U3RhdGljcygnam9pbixzbGljZSxjb25jYXQscHVzaCxzcGxpY2UsdW5zaGlmdCxzb3J0LGxhc3RJbmRleE9mLCcgK1xuICAgICAgICAgICAncmVkdWNlLHJlZHVjZVJpZ2h0LGNvcHlXaXRoaW4sZmlsbCcpO1xuJGV4cG9ydCgkZXhwb3J0LlMsICdBcnJheScsIHN0YXRpY3MpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2pzLmFycmF5LnN0YXRpY3MuanNcbiAqKiBtb2R1bGUgaWQgPSAxODNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGllOS0gc2V0VGltZW91dCAmIHNldEludGVydmFsIGFkZGl0aW9uYWwgcGFyYW1ldGVycyBmaXhcbnZhciBnbG9iYWwgICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgJGV4cG9ydCAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGludm9rZSAgICAgPSByZXF1aXJlKCcuLyQuaW52b2tlJylcbiAgLCBwYXJ0aWFsICAgID0gcmVxdWlyZSgnLi8kLnBhcnRpYWwnKVxuICAsIG5hdmlnYXRvciAgPSBnbG9iYWwubmF2aWdhdG9yXG4gICwgTVNJRSAgICAgICA9ICEhbmF2aWdhdG9yICYmIC9NU0lFIC5cXC4vLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7IC8vIDwtIGRpcnR5IGllOS0gY2hlY2tcbnZhciB3cmFwID0gZnVuY3Rpb24oc2V0KXtcbiAgcmV0dXJuIE1TSUUgPyBmdW5jdGlvbihmbiwgdGltZSAvKiwgLi4uYXJncyAqLyl7XG4gICAgcmV0dXJuIHNldChpbnZva2UoXG4gICAgICBwYXJ0aWFsLFxuICAgICAgW10uc2xpY2UuY2FsbChhcmd1bWVudHMsIDIpLFxuICAgICAgdHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKVxuICAgICksIHRpbWUpO1xuICB9IDogc2V0O1xufTtcbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5CICsgJGV4cG9ydC5GICogTVNJRSwge1xuICBzZXRUaW1lb3V0OiAgd3JhcChnbG9iYWwuc2V0VGltZW91dCksXG4gIHNldEludGVydmFsOiB3cmFwKGdsb2JhbC5zZXRJbnRlcnZhbClcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxODRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBwYXRoICAgICAgPSByZXF1aXJlKCcuLyQucGF0aCcpXG4gICwgaW52b2tlICAgID0gcmVxdWlyZSgnLi8kLmludm9rZScpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oLyogLi4ucGFyZ3MgKi8pe1xuICB2YXIgZm4gICAgID0gYUZ1bmN0aW9uKHRoaXMpXG4gICAgLCBsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoXG4gICAgLCBwYXJncyAgPSBBcnJheShsZW5ndGgpXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBfICAgICAgPSBwYXRoLl9cbiAgICAsIGhvbGRlciA9IGZhbHNlO1xuICB3aGlsZShsZW5ndGggPiBpKWlmKChwYXJnc1tpXSA9IGFyZ3VtZW50c1tpKytdKSA9PT0gXylob2xkZXIgPSB0cnVlO1xuICByZXR1cm4gZnVuY3Rpb24oLyogLi4uYXJncyAqLyl7XG4gICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgLCAkJCAgICA9IGFyZ3VtZW50c1xuICAgICAgLCAkJGxlbiA9ICQkLmxlbmd0aFxuICAgICAgLCBqID0gMCwgayA9IDAsIGFyZ3M7XG4gICAgaWYoIWhvbGRlciAmJiAhJCRsZW4pcmV0dXJuIGludm9rZShmbiwgcGFyZ3MsIHRoYXQpO1xuICAgIGFyZ3MgPSBwYXJncy5zbGljZSgpO1xuICAgIGlmKGhvbGRlcilmb3IoO2xlbmd0aCA+IGo7IGorKylpZihhcmdzW2pdID09PSBfKWFyZ3Nbal0gPSAkJFtrKytdO1xuICAgIHdoaWxlKCQkbGVuID4gaylhcmdzLnB1c2goJCRbaysrXSk7XG4gICAgcmV0dXJuIGludm9rZShmbiwgYXJncywgdGhhdCk7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQucGFydGlhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDE4NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5wYXRoLmpzXG4gKiogbW9kdWxlIGlkID0gMTg2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsICR0YXNrICAgPSByZXF1aXJlKCcuLyQudGFzaycpO1xuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LkIsIHtcbiAgc2V0SW1tZWRpYXRlOiAgICR0YXNrLnNldCxcbiAgY2xlYXJJbW1lZGlhdGU6ICR0YXNrLmNsZWFyXG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy93ZWIuaW1tZWRpYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMTg3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgaGlkZSAgICAgICAgPSByZXF1aXJlKCcuLyQuaGlkZScpXG4gICwgSXRlcmF0b3JzICAgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJylcbiAgLCBJVEVSQVRPUiAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIE5MICAgICAgICAgID0gZ2xvYmFsLk5vZGVMaXN0XG4gICwgSFRDICAgICAgICAgPSBnbG9iYWwuSFRNTENvbGxlY3Rpb25cbiAgLCBOTFByb3RvICAgICA9IE5MICYmIE5MLnByb3RvdHlwZVxuICAsIEhUQ1Byb3RvICAgID0gSFRDICYmIEhUQy5wcm90b3R5cGVcbiAgLCBBcnJheVZhbHVlcyA9IEl0ZXJhdG9ycy5Ob2RlTGlzdCA9IEl0ZXJhdG9ycy5IVE1MQ29sbGVjdGlvbiA9IEl0ZXJhdG9ycy5BcnJheTtcbmlmKE5MUHJvdG8gJiYgIU5MUHJvdG9bSVRFUkFUT1JdKWhpZGUoTkxQcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbmlmKEhUQ1Byb3RvICYmICFIVENQcm90b1tJVEVSQVRPUl0paGlkZShIVENQcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gMTg4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvKipcbiAqIENvcHlyaWdodCAoYykgMjAxNCwgRmFjZWJvb2ssIEluYy5cbiAqIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgQlNELXN0eWxlIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBodHRwczovL3Jhdy5naXRodWIuY29tL2ZhY2Vib29rL3JlZ2VuZXJhdG9yL21hc3Rlci9MSUNFTlNFIGZpbGUuIEFuXG4gKiBhZGRpdGlvbmFsIGdyYW50IG9mIHBhdGVudCByaWdodHMgY2FuIGJlIGZvdW5kIGluIHRoZSBQQVRFTlRTIGZpbGUgaW5cbiAqIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4hKGZ1bmN0aW9uKGdsb2JhbCkge1xuICBcInVzZSBzdHJpY3RcIjtcblxuICB2YXIgaGFzT3duID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcbiAgdmFyIHVuZGVmaW5lZDsgLy8gTW9yZSBjb21wcmVzc2libGUgdGhhbiB2b2lkIDAuXG4gIHZhciBpdGVyYXRvclN5bWJvbCA9XG4gICAgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIFN5bWJvbC5pdGVyYXRvciB8fCBcIkBAaXRlcmF0b3JcIjtcblxuICB2YXIgaW5Nb2R1bGUgPSB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiO1xuICB2YXIgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWU7XG4gIGlmIChydW50aW1lKSB7XG4gICAgaWYgKGluTW9kdWxlKSB7XG4gICAgICAvLyBJZiByZWdlbmVyYXRvclJ1bnRpbWUgaXMgZGVmaW5lZCBnbG9iYWxseSBhbmQgd2UncmUgaW4gYSBtb2R1bGUsXG4gICAgICAvLyBtYWtlIHRoZSBleHBvcnRzIG9iamVjdCBpZGVudGljYWwgdG8gcmVnZW5lcmF0b3JSdW50aW1lLlxuICAgICAgbW9kdWxlLmV4cG9ydHMgPSBydW50aW1lO1xuICAgIH1cbiAgICAvLyBEb24ndCBib3RoZXIgZXZhbHVhdGluZyB0aGUgcmVzdCBvZiB0aGlzIGZpbGUgaWYgdGhlIHJ1bnRpbWUgd2FzXG4gICAgLy8gYWxyZWFkeSBkZWZpbmVkIGdsb2JhbGx5LlxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIERlZmluZSB0aGUgcnVudGltZSBnbG9iYWxseSAoYXMgZXhwZWN0ZWQgYnkgZ2VuZXJhdGVkIGNvZGUpIGFzIGVpdGhlclxuICAvLyBtb2R1bGUuZXhwb3J0cyAoaWYgd2UncmUgaW4gYSBtb2R1bGUpIG9yIGEgbmV3LCBlbXB0eSBvYmplY3QuXG4gIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lID0gaW5Nb2R1bGUgPyBtb2R1bGUuZXhwb3J0cyA6IHt9O1xuXG4gIGZ1bmN0aW9uIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBJZiBvdXRlckZuIHByb3ZpZGVkLCB0aGVuIG91dGVyRm4ucHJvdG90eXBlIGluc3RhbmNlb2YgR2VuZXJhdG9yLlxuICAgIHZhciBnZW5lcmF0b3IgPSBPYmplY3QuY3JlYXRlKChvdXRlckZuIHx8IEdlbmVyYXRvcikucHJvdG90eXBlKTtcbiAgICB2YXIgY29udGV4dCA9IG5ldyBDb250ZXh0KHRyeUxvY3NMaXN0IHx8IFtdKTtcblxuICAgIC8vIFRoZSAuX2ludm9rZSBtZXRob2QgdW5pZmllcyB0aGUgaW1wbGVtZW50YXRpb25zIG9mIHRoZSAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMuXG4gICAgZ2VuZXJhdG9yLl9pbnZva2UgPSBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuXG4gICAgcmV0dXJuIGdlbmVyYXRvcjtcbiAgfVxuICBydW50aW1lLndyYXAgPSB3cmFwO1xuXG4gIC8vIFRyeS9jYXRjaCBoZWxwZXIgdG8gbWluaW1pemUgZGVvcHRpbWl6YXRpb25zLiBSZXR1cm5zIGEgY29tcGxldGlvblxuICAvLyByZWNvcmQgbGlrZSBjb250ZXh0LnRyeUVudHJpZXNbaV0uY29tcGxldGlvbi4gVGhpcyBpbnRlcmZhY2UgY291bGRcbiAgLy8gaGF2ZSBiZWVuIChhbmQgd2FzIHByZXZpb3VzbHkpIGRlc2lnbmVkIHRvIHRha2UgYSBjbG9zdXJlIHRvIGJlXG4gIC8vIGludm9rZWQgd2l0aG91dCBhcmd1bWVudHMsIGJ1dCBpbiBhbGwgdGhlIGNhc2VzIHdlIGNhcmUgYWJvdXQgd2VcbiAgLy8gYWxyZWFkeSBoYXZlIGFuIGV4aXN0aW5nIG1ldGhvZCB3ZSB3YW50IHRvIGNhbGwsIHNvIHRoZXJlJ3Mgbm8gbmVlZFxuICAvLyB0byBjcmVhdGUgYSBuZXcgZnVuY3Rpb24gb2JqZWN0LiBXZSBjYW4gZXZlbiBnZXQgYXdheSB3aXRoIGFzc3VtaW5nXG4gIC8vIHRoZSBtZXRob2QgdGFrZXMgZXhhY3RseSBvbmUgYXJndW1lbnQsIHNpbmNlIHRoYXQgaGFwcGVucyB0byBiZSB0cnVlXG4gIC8vIGluIGV2ZXJ5IGNhc2UsIHNvIHdlIGRvbid0IGhhdmUgdG8gdG91Y2ggdGhlIGFyZ3VtZW50cyBvYmplY3QuIFRoZVxuICAvLyBvbmx5IGFkZGl0aW9uYWwgYWxsb2NhdGlvbiByZXF1aXJlZCBpcyB0aGUgY29tcGxldGlvbiByZWNvcmQsIHdoaWNoXG4gIC8vIGhhcyBhIHN0YWJsZSBzaGFwZSBhbmQgc28gaG9wZWZ1bGx5IHNob3VsZCBiZSBjaGVhcCB0byBhbGxvY2F0ZS5cbiAgZnVuY3Rpb24gdHJ5Q2F0Y2goZm4sIG9iaiwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwibm9ybWFsXCIsIGFyZzogZm4uY2FsbChvYmosIGFyZykgfTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHJldHVybiB7IHR5cGU6IFwidGhyb3dcIiwgYXJnOiBlcnIgfTtcbiAgICB9XG4gIH1cblxuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRTdGFydCA9IFwic3VzcGVuZGVkU3RhcnRcIjtcbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkWWllbGQgPSBcInN1c3BlbmRlZFlpZWxkXCI7XG4gIHZhciBHZW5TdGF0ZUV4ZWN1dGluZyA9IFwiZXhlY3V0aW5nXCI7XG4gIHZhciBHZW5TdGF0ZUNvbXBsZXRlZCA9IFwiY29tcGxldGVkXCI7XG5cbiAgLy8gUmV0dXJuaW5nIHRoaXMgb2JqZWN0IGZyb20gdGhlIGlubmVyRm4gaGFzIHRoZSBzYW1lIGVmZmVjdCBhc1xuICAvLyBicmVha2luZyBvdXQgb2YgdGhlIGRpc3BhdGNoIHN3aXRjaCBzdGF0ZW1lbnQuXG4gIHZhciBDb250aW51ZVNlbnRpbmVsID0ge307XG5cbiAgLy8gRHVtbXkgY29uc3RydWN0b3IgZnVuY3Rpb25zIHRoYXQgd2UgdXNlIGFzIHRoZSAuY29uc3RydWN0b3IgYW5kXG4gIC8vIC5jb25zdHJ1Y3Rvci5wcm90b3R5cGUgcHJvcGVydGllcyBmb3IgZnVuY3Rpb25zIHRoYXQgcmV0dXJuIEdlbmVyYXRvclxuICAvLyBvYmplY3RzLiBGb3IgZnVsbCBzcGVjIGNvbXBsaWFuY2UsIHlvdSBtYXkgd2lzaCB0byBjb25maWd1cmUgeW91clxuICAvLyBtaW5pZmllciBub3QgdG8gbWFuZ2xlIHRoZSBuYW1lcyBvZiB0aGVzZSB0d28gZnVuY3Rpb25zLlxuICBmdW5jdGlvbiBHZW5lcmF0b3IoKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvbigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKCkge31cblxuICB2YXIgR3AgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5wcm90b3R5cGUgPSBHZW5lcmF0b3IucHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5wcm90b3R5cGUgPSBHcC5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZS5jb25zdHJ1Y3RvciA9IEdlbmVyYXRvckZ1bmN0aW9uO1xuICBHZW5lcmF0b3JGdW5jdGlvbi5kaXNwbGF5TmFtZSA9IFwiR2VuZXJhdG9yRnVuY3Rpb25cIjtcblxuICAvLyBIZWxwZXIgZm9yIGRlZmluaW5nIHRoZSAubmV4dCwgLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzIG9mIHRoZVxuICAvLyBJdGVyYXRvciBpbnRlcmZhY2UgaW4gdGVybXMgb2YgYSBzaW5nbGUgLl9pbnZva2UgbWV0aG9kLlxuICBmdW5jdGlvbiBkZWZpbmVJdGVyYXRvck1ldGhvZHMocHJvdG90eXBlKSB7XG4gICAgW1wibmV4dFwiLCBcInRocm93XCIsIFwicmV0dXJuXCJdLmZvckVhY2goZnVuY3Rpb24obWV0aG9kKSB7XG4gICAgICBwcm90b3R5cGVbbWV0aG9kXSA9IGZ1bmN0aW9uKGFyZykge1xuICAgICAgICByZXR1cm4gdGhpcy5faW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24gPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICB2YXIgY3RvciA9IHR5cGVvZiBnZW5GdW4gPT09IFwiZnVuY3Rpb25cIiAmJiBnZW5GdW4uY29uc3RydWN0b3I7XG4gICAgcmV0dXJuIGN0b3JcbiAgICAgID8gY3RvciA9PT0gR2VuZXJhdG9yRnVuY3Rpb24gfHxcbiAgICAgICAgLy8gRm9yIHRoZSBuYXRpdmUgR2VuZXJhdG9yRnVuY3Rpb24gY29uc3RydWN0b3IsIHRoZSBiZXN0IHdlIGNhblxuICAgICAgICAvLyBkbyBpcyB0byBjaGVjayBpdHMgLm5hbWUgcHJvcGVydHkuXG4gICAgICAgIChjdG9yLmRpc3BsYXlOYW1lIHx8IGN0b3IubmFtZSkgPT09IFwiR2VuZXJhdG9yRnVuY3Rpb25cIlxuICAgICAgOiBmYWxzZTtcbiAgfTtcblxuICBydW50aW1lLm1hcmsgPSBmdW5jdGlvbihnZW5GdW4pIHtcbiAgICBpZiAoT2JqZWN0LnNldFByb3RvdHlwZU9mKSB7XG4gICAgICBPYmplY3Quc2V0UHJvdG90eXBlT2YoZ2VuRnVuLCBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGdlbkZ1bi5fX3Byb3RvX18gPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgICB9XG4gICAgZ2VuRnVuLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoR3ApO1xuICAgIHJldHVybiBnZW5GdW47XG4gIH07XG5cbiAgLy8gV2l0aGluIHRoZSBib2R5IG9mIGFueSBhc3luYyBmdW5jdGlvbiwgYGF3YWl0IHhgIGlzIHRyYW5zZm9ybWVkIHRvXG4gIC8vIGB5aWVsZCByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoeClgLCBzbyB0aGF0IHRoZSBydW50aW1lIGNhbiB0ZXN0XG4gIC8vIGB2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0QXJndW1lbnRgIHRvIGRldGVybWluZSBpZiB0aGUgeWllbGRlZCB2YWx1ZSBpc1xuICAvLyBtZWFudCB0byBiZSBhd2FpdGVkLiBTb21lIG1heSBjb25zaWRlciB0aGUgbmFtZSBvZiB0aGlzIG1ldGhvZCB0b29cbiAgLy8gY3V0ZXN5LCBidXQgdGhleSBhcmUgY3VybXVkZ2VvbnMuXG4gIHJ1bnRpbWUuYXdyYXAgPSBmdW5jdGlvbihhcmcpIHtcbiAgICByZXR1cm4gbmV3IEF3YWl0QXJndW1lbnQoYXJnKTtcbiAgfTtcblxuICBmdW5jdGlvbiBBd2FpdEFyZ3VtZW50KGFyZykge1xuICAgIHRoaXMuYXJnID0gYXJnO1xuICB9XG5cbiAgZnVuY3Rpb24gQXN5bmNJdGVyYXRvcihnZW5lcmF0b3IpIHtcbiAgICAvLyBUaGlzIGludm9rZSBmdW5jdGlvbiBpcyB3cml0dGVuIGluIGEgc3R5bGUgdGhhdCBhc3N1bWVzIHNvbWVcbiAgICAvLyBjYWxsaW5nIGZ1bmN0aW9uIChvciBQcm9taXNlKSB3aWxsIGhhbmRsZSBleGNlcHRpb25zLlxuICAgIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgdmFyIHJlc3VsdCA9IGdlbmVyYXRvclttZXRob2RdKGFyZyk7XG4gICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBBd2FpdEFyZ3VtZW50XG4gICAgICAgID8gUHJvbWlzZS5yZXNvbHZlKHZhbHVlLmFyZykudGhlbihpbnZva2VOZXh0LCBpbnZva2VUaHJvdylcbiAgICAgICAgOiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oZnVuY3Rpb24odW53cmFwcGVkKSB7XG4gICAgICAgICAgICAvLyBXaGVuIGEgeWllbGRlZCBQcm9taXNlIGlzIHJlc29sdmVkLCBpdHMgZmluYWwgdmFsdWUgYmVjb21lc1xuICAgICAgICAgICAgLy8gdGhlIC52YWx1ZSBvZiB0aGUgUHJvbWlzZTx7dmFsdWUsZG9uZX0+IHJlc3VsdCBmb3IgdGhlXG4gICAgICAgICAgICAvLyBjdXJyZW50IGl0ZXJhdGlvbi4gSWYgdGhlIFByb21pc2UgaXMgcmVqZWN0ZWQsIGhvd2V2ZXIsIHRoZVxuICAgICAgICAgICAgLy8gcmVzdWx0IGZvciB0aGlzIGl0ZXJhdGlvbiB3aWxsIGJlIHJlamVjdGVkIHdpdGggdGhlIHNhbWVcbiAgICAgICAgICAgIC8vIHJlYXNvbi4gTm90ZSB0aGF0IHJlamVjdGlvbnMgb2YgeWllbGRlZCBQcm9taXNlcyBhcmUgbm90XG4gICAgICAgICAgICAvLyB0aHJvd24gYmFjayBpbnRvIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIGFzIGlzIHRoZSBjYXNlXG4gICAgICAgICAgICAvLyB3aGVuIGFuIGF3YWl0ZWQgUHJvbWlzZSBpcyByZWplY3RlZC4gVGhpcyBkaWZmZXJlbmNlIGluXG4gICAgICAgICAgICAvLyBiZWhhdmlvciBiZXR3ZWVuIHlpZWxkIGFuZCBhd2FpdCBpcyBpbXBvcnRhbnQsIGJlY2F1c2UgaXRcbiAgICAgICAgICAgIC8vIGFsbG93cyB0aGUgY29uc3VtZXIgdG8gZGVjaWRlIHdoYXQgdG8gZG8gd2l0aCB0aGUgeWllbGRlZFxuICAgICAgICAgICAgLy8gcmVqZWN0aW9uIChzd2FsbG93IGl0IGFuZCBjb250aW51ZSwgbWFudWFsbHkgLnRocm93IGl0IGJhY2tcbiAgICAgICAgICAgIC8vIGludG8gdGhlIGdlbmVyYXRvciwgYWJhbmRvbiBpdGVyYXRpb24sIHdoYXRldmVyKS4gV2l0aFxuICAgICAgICAgICAgLy8gYXdhaXQsIGJ5IGNvbnRyYXN0LCB0aGVyZSBpcyBubyBvcHBvcnR1bml0eSB0byBleGFtaW5lIHRoZVxuICAgICAgICAgICAgLy8gcmVqZWN0aW9uIHJlYXNvbiBvdXRzaWRlIHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24sIHNvIHRoZVxuICAgICAgICAgICAgLy8gb25seSBvcHRpb24gaXMgdG8gdGhyb3cgaXQgZnJvbSB0aGUgYXdhaXQgZXhwcmVzc2lvbiwgYW5kXG4gICAgICAgICAgICAvLyBsZXQgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiBoYW5kbGUgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICAgIHJlc3VsdC52YWx1ZSA9IHVud3JhcHBlZDtcbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzID09PSBcIm9iamVjdFwiICYmIHByb2Nlc3MuZG9tYWluKSB7XG4gICAgICBpbnZva2UgPSBwcm9jZXNzLmRvbWFpbi5iaW5kKGludm9rZSk7XG4gICAgfVxuXG4gICAgdmFyIGludm9rZU5leHQgPSBpbnZva2UuYmluZChnZW5lcmF0b3IsIFwibmV4dFwiKTtcbiAgICB2YXIgaW52b2tlVGhyb3cgPSBpbnZva2UuYmluZChnZW5lcmF0b3IsIFwidGhyb3dcIik7XG4gICAgdmFyIGludm9rZVJldHVybiA9IGludm9rZS5iaW5kKGdlbmVyYXRvciwgXCJyZXR1cm5cIik7XG4gICAgdmFyIHByZXZpb3VzUHJvbWlzZTtcblxuICAgIGZ1bmN0aW9uIGVucXVldWUobWV0aG9kLCBhcmcpIHtcbiAgICAgIGZ1bmN0aW9uIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkge1xuICAgICAgICByZXR1cm4gaW52b2tlKG1ldGhvZCwgYXJnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHByZXZpb3VzUHJvbWlzZSA9XG4gICAgICAgIC8vIElmIGVucXVldWUgaGFzIGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiB3ZSB3YW50IHRvIHdhaXQgdW50aWxcbiAgICAgICAgLy8gYWxsIHByZXZpb3VzIFByb21pc2VzIGhhdmUgYmVlbiByZXNvbHZlZCBiZWZvcmUgY2FsbGluZyBpbnZva2UsXG4gICAgICAgIC8vIHNvIHRoYXQgcmVzdWx0cyBhcmUgYWx3YXlzIGRlbGl2ZXJlZCBpbiB0aGUgY29ycmVjdCBvcmRlci4gSWZcbiAgICAgICAgLy8gZW5xdWV1ZSBoYXMgbm90IGJlZW4gY2FsbGVkIGJlZm9yZSwgdGhlbiBpdCBpcyBpbXBvcnRhbnQgdG9cbiAgICAgICAgLy8gY2FsbCBpbnZva2UgaW1tZWRpYXRlbHksIHdpdGhvdXQgd2FpdGluZyBvbiBhIGNhbGxiYWNrIHRvIGZpcmUsXG4gICAgICAgIC8vIHNvIHRoYXQgdGhlIGFzeW5jIGdlbmVyYXRvciBmdW5jdGlvbiBoYXMgdGhlIG9wcG9ydHVuaXR5IHRvIGRvXG4gICAgICAgIC8vIGFueSBuZWNlc3Nhcnkgc2V0dXAgaW4gYSBwcmVkaWN0YWJsZSB3YXkuIFRoaXMgcHJlZGljdGFiaWxpdHlcbiAgICAgICAgLy8gaXMgd2h5IHRoZSBQcm9taXNlIGNvbnN0cnVjdG9yIHN5bmNocm9ub3VzbHkgaW52b2tlcyBpdHNcbiAgICAgICAgLy8gZXhlY3V0b3IgY2FsbGJhY2ssIGFuZCB3aHkgYXN5bmMgZnVuY3Rpb25zIHN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZXhlY3V0ZSBjb2RlIGJlZm9yZSB0aGUgZmlyc3QgYXdhaXQuIFNpbmNlIHdlIGltcGxlbWVudCBzaW1wbGVcbiAgICAgICAgLy8gYXN5bmMgZnVuY3Rpb25zIGluIHRlcm1zIG9mIGFzeW5jIGdlbmVyYXRvcnMsIGl0IGlzIGVzcGVjaWFsbHlcbiAgICAgICAgLy8gaW1wb3J0YW50IHRvIGdldCB0aGlzIHJpZ2h0LCBldmVuIHRob3VnaCBpdCByZXF1aXJlcyBjYXJlLlxuICAgICAgICBwcmV2aW91c1Byb21pc2UgPyBwcmV2aW91c1Byb21pc2UudGhlbihcbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZyxcbiAgICAgICAgICAvLyBBdm9pZCBwcm9wYWdhdGluZyBmYWlsdXJlcyB0byBQcm9taXNlcyByZXR1cm5lZCBieSBsYXRlclxuICAgICAgICAgIC8vIGludm9jYXRpb25zIG9mIHRoZSBpdGVyYXRvci5cbiAgICAgICAgICBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZ1xuICAgICAgICApIDogbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcbiAgICAgICAgICByZXNvbHZlKGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICAvLyBEZWZpbmUgdGhlIHVuaWZpZWQgaGVscGVyIG1ldGhvZCB0aGF0IGlzIHVzZWQgdG8gaW1wbGVtZW50IC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gKHNlZSBkZWZpbmVJdGVyYXRvck1ldGhvZHMpLlxuICAgIHRoaXMuX2ludm9rZSA9IGVucXVldWU7XG4gIH1cblxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoQXN5bmNJdGVyYXRvci5wcm90b3R5cGUpO1xuXG4gIC8vIE5vdGUgdGhhdCBzaW1wbGUgYXN5bmMgZnVuY3Rpb25zIGFyZSBpbXBsZW1lbnRlZCBvbiB0b3Agb2ZcbiAgLy8gQXN5bmNJdGVyYXRvciBvYmplY3RzOyB0aGV5IGp1c3QgcmV0dXJuIGEgUHJvbWlzZSBmb3IgdGhlIHZhbHVlIG9mXG4gIC8vIHRoZSBmaW5hbCByZXN1bHQgcHJvZHVjZWQgYnkgdGhlIGl0ZXJhdG9yLlxuICBydW50aW1lLmFzeW5jID0gZnVuY3Rpb24oaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpIHtcbiAgICB2YXIgaXRlciA9IG5ldyBBc3luY0l0ZXJhdG9yKFxuICAgICAgd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdClcbiAgICApO1xuXG4gICAgcmV0dXJuIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbihvdXRlckZuKVxuICAgICAgPyBpdGVyIC8vIElmIG91dGVyRm4gaXMgYSBnZW5lcmF0b3IsIHJldHVybiB0aGUgZnVsbCBpdGVyYXRvci5cbiAgICAgIDogaXRlci5uZXh0KCkudGhlbihmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgICByZXR1cm4gcmVzdWx0LmRvbmUgPyByZXN1bHQudmFsdWUgOiBpdGVyLm5leHQoKTtcbiAgICAgICAgfSk7XG4gIH07XG5cbiAgZnVuY3Rpb24gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KSB7XG4gICAgdmFyIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydDtcblxuICAgIHJldHVybiBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVFeGVjdXRpbmcpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgcnVubmluZ1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUNvbXBsZXRlZCkge1xuICAgICAgICBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBCZSBmb3JnaXZpbmcsIHBlciAyNS4zLjMuMy4zIG9mIHRoZSBzcGVjOlxuICAgICAgICAvLyBodHRwczovL3Blb3BsZS5tb3ppbGxhLm9yZy9+am9yZW5kb3JmZi9lczYtZHJhZnQuaHRtbCNzZWMtZ2VuZXJhdG9ycmVzdW1lXG4gICAgICAgIHJldHVybiBkb25lUmVzdWx0KCk7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBkZWxlZ2F0ZSA9IGNvbnRleHQuZGVsZWdhdGU7XG4gICAgICAgIGlmIChkZWxlZ2F0ZSkge1xuICAgICAgICAgIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIgfHxcbiAgICAgICAgICAgICAgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiICYmIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0gPT09IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgICAgIC8vIEEgcmV0dXJuIG9yIHRocm93ICh3aGVuIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgbm8gdGhyb3dcbiAgICAgICAgICAgIC8vIG1ldGhvZCkgYWx3YXlzIHRlcm1pbmF0ZXMgdGhlIHlpZWxkKiBsb29wLlxuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIElmIHRoZSBkZWxlZ2F0ZSBpdGVyYXRvciBoYXMgYSByZXR1cm4gbWV0aG9kLCBnaXZlIGl0IGFcbiAgICAgICAgICAgIC8vIGNoYW5jZSB0byBjbGVhbiB1cC5cbiAgICAgICAgICAgIHZhciByZXR1cm5NZXRob2QgPSBkZWxlZ2F0ZS5pdGVyYXRvcltcInJldHVyblwiXTtcbiAgICAgICAgICAgIGlmIChyZXR1cm5NZXRob2QpIHtcbiAgICAgICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKHJldHVybk1ldGhvZCwgZGVsZWdhdGUuaXRlcmF0b3IsIGFyZyk7XG4gICAgICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgdGhlIHJldHVybiBtZXRob2QgdGhyZXcgYW4gZXhjZXB0aW9uLCBsZXQgdGhhdFxuICAgICAgICAgICAgICAgIC8vIGV4Y2VwdGlvbiBwcmV2YWlsIG92ZXIgdGhlIG9yaWdpbmFsIHJldHVybiBvciB0aHJvdy5cbiAgICAgICAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAobWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgICAgIC8vIENvbnRpbnVlIHdpdGggdGhlIG91dGVyIHJldHVybiwgbm93IHRoYXQgdGhlIGRlbGVnYXRlXG4gICAgICAgICAgICAgIC8vIGl0ZXJhdG9yIGhhcyBiZWVuIHRlcm1pbmF0ZWQuXG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChcbiAgICAgICAgICAgIGRlbGVnYXRlLml0ZXJhdG9yW21ldGhvZF0sXG4gICAgICAgICAgICBkZWxlZ2F0ZS5pdGVyYXRvcixcbiAgICAgICAgICAgIGFyZ1xuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgICAgICAgIC8vIExpa2UgcmV0dXJuaW5nIGdlbmVyYXRvci50aHJvdyh1bmNhdWdodCksIGJ1dCB3aXRob3V0IHRoZVxuICAgICAgICAgICAgLy8gb3ZlcmhlYWQgb2YgYW4gZXh0cmEgZnVuY3Rpb24gY2FsbC5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAvLyBEZWxlZ2F0ZSBnZW5lcmF0b3IgcmFuIGFuZCBoYW5kbGVkIGl0cyBvd24gZXhjZXB0aW9ucyBzb1xuICAgICAgICAgIC8vIHJlZ2FyZGxlc3Mgb2Ygd2hhdCB0aGUgbWV0aG9kIHdhcywgd2UgY29udGludWUgYXMgaWYgaXQgaXNcbiAgICAgICAgICAvLyBcIm5leHRcIiB3aXRoIGFuIHVuZGVmaW5lZCBhcmcuXG4gICAgICAgICAgbWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSByZWNvcmQuYXJnO1xuICAgICAgICAgIGlmIChpbmZvLmRvbmUpIHtcbiAgICAgICAgICAgIGNvbnRleHRbZGVsZWdhdGUucmVzdWx0TmFtZV0gPSBpbmZvLnZhbHVlO1xuICAgICAgICAgICAgY29udGV4dC5uZXh0ID0gZGVsZWdhdGUubmV4dExvYztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgY29udGV4dC5kZWxlZ2F0ZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgIGNvbnRleHQuX3NlbnQgPSBhcmc7XG5cbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkWWllbGQpIHtcbiAgICAgICAgICAgIGNvbnRleHQuc2VudCA9IGFyZztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29udGV4dC5zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRTdGFydCkge1xuICAgICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpKSB7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZGlzcGF0Y2hlZCBleGNlcHRpb24gd2FzIGNhdWdodCBieSBhIGNhdGNoIGJsb2NrLFxuICAgICAgICAgICAgLy8gdGhlbiBsZXQgdGhhdCBjYXRjaCBibG9jayBoYW5kbGUgdGhlIGV4Y2VwdGlvbiBub3JtYWxseS5cbiAgICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgIGNvbnRleHQuYWJydXB0KFwicmV0dXJuXCIsIGFyZyk7XG4gICAgICAgIH1cblxuICAgICAgICBzdGF0ZSA9IEdlblN0YXRlRXhlY3V0aW5nO1xuXG4gICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcbiAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiKSB7XG4gICAgICAgICAgLy8gSWYgYW4gZXhjZXB0aW9uIGlzIHRocm93biBmcm9tIGlubmVyRm4sIHdlIGxlYXZlIHN0YXRlID09PVxuICAgICAgICAgIC8vIEdlblN0YXRlRXhlY3V0aW5nIGFuZCBsb29wIGJhY2sgZm9yIGFub3RoZXIgaW52b2NhdGlvbi5cbiAgICAgICAgICBzdGF0ZSA9IGNvbnRleHQuZG9uZVxuICAgICAgICAgICAgPyBHZW5TdGF0ZUNvbXBsZXRlZFxuICAgICAgICAgICAgOiBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkO1xuXG4gICAgICAgICAgdmFyIGluZm8gPSB7XG4gICAgICAgICAgICB2YWx1ZTogcmVjb3JkLmFyZyxcbiAgICAgICAgICAgIGRvbmU6IGNvbnRleHQuZG9uZVxuICAgICAgICAgIH07XG5cbiAgICAgICAgICBpZiAocmVjb3JkLmFyZyA9PT0gQ29udGludWVTZW50aW5lbCkge1xuICAgICAgICAgICAgaWYgKGNvbnRleHQuZGVsZWdhdGUgJiYgbWV0aG9kID09PSBcIm5leHRcIikge1xuICAgICAgICAgICAgICAvLyBEZWxpYmVyYXRlbHkgZm9yZ2V0IHRoZSBsYXN0IHNlbnQgdmFsdWUgc28gdGhhdCB3ZSBkb24ndFxuICAgICAgICAgICAgICAvLyBhY2NpZGVudGFsbHkgcGFzcyBpdCBvbiB0byB0aGUgZGVsZWdhdGUuXG4gICAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGluZm87XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgLy8gRGlzcGF0Y2ggdGhlIGV4Y2VwdGlvbiBieSBsb29waW5nIGJhY2sgYXJvdW5kIHRvIHRoZVxuICAgICAgICAgIC8vIGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oYXJnKSBjYWxsIGFib3ZlLlxuICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIC8vIERlZmluZSBHZW5lcmF0b3IucHJvdG90eXBlLntuZXh0LHRocm93LHJldHVybn0gaW4gdGVybXMgb2YgdGhlXG4gIC8vIHVuaWZpZWQgLl9pbnZva2UgaGVscGVyIG1ldGhvZC5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEdwKTtcblxuICBHcFtpdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBHcC50b1N0cmluZyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBcIltvYmplY3QgR2VuZXJhdG9yXVwiO1xuICB9O1xuXG4gIGZ1bmN0aW9uIHB1c2hUcnlFbnRyeShsb2NzKSB7XG4gICAgdmFyIGVudHJ5ID0geyB0cnlMb2M6IGxvY3NbMF0gfTtcblxuICAgIGlmICgxIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmNhdGNoTG9jID0gbG9jc1sxXTtcbiAgICB9XG5cbiAgICBpZiAoMiBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5maW5hbGx5TG9jID0gbG9jc1syXTtcbiAgICAgIGVudHJ5LmFmdGVyTG9jID0gbG9jc1szXTtcbiAgICB9XG5cbiAgICB0aGlzLnRyeUVudHJpZXMucHVzaChlbnRyeSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXNldFRyeUVudHJ5KGVudHJ5KSB7XG4gICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb24gfHwge307XG4gICAgcmVjb3JkLnR5cGUgPSBcIm5vcm1hbFwiO1xuICAgIGRlbGV0ZSByZWNvcmQuYXJnO1xuICAgIGVudHJ5LmNvbXBsZXRpb24gPSByZWNvcmQ7XG4gIH1cblxuICBmdW5jdGlvbiBDb250ZXh0KHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gVGhlIHJvb3QgZW50cnkgb2JqZWN0IChlZmZlY3RpdmVseSBhIHRyeSBzdGF0ZW1lbnQgd2l0aG91dCBhIGNhdGNoXG4gICAgLy8gb3IgYSBmaW5hbGx5IGJsb2NrKSBnaXZlcyB1cyBhIHBsYWNlIHRvIHN0b3JlIHZhbHVlcyB0aHJvd24gZnJvbVxuICAgIC8vIGxvY2F0aW9ucyB3aGVyZSB0aGVyZSBpcyBubyBlbmNsb3NpbmcgdHJ5IHN0YXRlbWVudC5cbiAgICB0aGlzLnRyeUVudHJpZXMgPSBbeyB0cnlMb2M6IFwicm9vdFwiIH1dO1xuICAgIHRyeUxvY3NMaXN0LmZvckVhY2gocHVzaFRyeUVudHJ5LCB0aGlzKTtcbiAgICB0aGlzLnJlc2V0KHRydWUpO1xuICB9XG5cbiAgcnVudGltZS5rZXlzID0gZnVuY3Rpb24ob2JqZWN0KSB7XG4gICAgdmFyIGtleXMgPSBbXTtcbiAgICBmb3IgKHZhciBrZXkgaW4gb2JqZWN0KSB7XG4gICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICB9XG4gICAga2V5cy5yZXZlcnNlKCk7XG5cbiAgICAvLyBSYXRoZXIgdGhhbiByZXR1cm5pbmcgYW4gb2JqZWN0IHdpdGggYSBuZXh0IG1ldGhvZCwgd2Uga2VlcFxuICAgIC8vIHRoaW5ncyBzaW1wbGUgYW5kIHJldHVybiB0aGUgbmV4dCBmdW5jdGlvbiBpdHNlbGYuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICB3aGlsZSAoa2V5cy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGtleSA9IGtleXMucG9wKCk7XG4gICAgICAgIGlmIChrZXkgaW4gb2JqZWN0KSB7XG4gICAgICAgICAgbmV4dC52YWx1ZSA9IGtleTtcbiAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUbyBhdm9pZCBjcmVhdGluZyBhbiBhZGRpdGlvbmFsIG9iamVjdCwgd2UganVzdCBoYW5nIHRoZSAudmFsdWVcbiAgICAgIC8vIGFuZCAuZG9uZSBwcm9wZXJ0aWVzIG9mZiB0aGUgbmV4dCBmdW5jdGlvbiBvYmplY3QgaXRzZWxmLiBUaGlzXG4gICAgICAvLyBhbHNvIGVuc3VyZXMgdGhhdCB0aGUgbWluaWZpZXIgd2lsbCBub3QgYW5vbnltaXplIHRoZSBmdW5jdGlvbi5cbiAgICAgIG5leHQuZG9uZSA9IHRydWU7XG4gICAgICByZXR1cm4gbmV4dDtcbiAgICB9O1xuICB9O1xuXG4gIGZ1bmN0aW9uIHZhbHVlcyhpdGVyYWJsZSkge1xuICAgIGlmIChpdGVyYWJsZSkge1xuICAgICAgdmFyIGl0ZXJhdG9yTWV0aG9kID0gaXRlcmFibGVbaXRlcmF0b3JTeW1ib2xdO1xuICAgICAgaWYgKGl0ZXJhdG9yTWV0aG9kKSB7XG4gICAgICAgIHJldHVybiBpdGVyYXRvck1ldGhvZC5jYWxsKGl0ZXJhYmxlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHR5cGVvZiBpdGVyYWJsZS5uZXh0ID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhYmxlO1xuICAgICAgfVxuXG4gICAgICBpZiAoIWlzTmFOKGl0ZXJhYmxlLmxlbmd0aCkpIHtcbiAgICAgICAgdmFyIGkgPSAtMSwgbmV4dCA9IGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgICAgICAgd2hpbGUgKCsraSA8IGl0ZXJhYmxlLmxlbmd0aCkge1xuICAgICAgICAgICAgaWYgKGhhc093bi5jYWxsKGl0ZXJhYmxlLCBpKSkge1xuICAgICAgICAgICAgICBuZXh0LnZhbHVlID0gaXRlcmFibGVbaV07XG4gICAgICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBuZXh0LnZhbHVlID0gdW5kZWZpbmVkO1xuICAgICAgICAgIG5leHQuZG9uZSA9IHRydWU7XG5cbiAgICAgICAgICByZXR1cm4gbmV4dDtcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gbmV4dC5uZXh0ID0gbmV4dDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBSZXR1cm4gYW4gaXRlcmF0b3Igd2l0aCBubyB2YWx1ZXMuXG4gICAgcmV0dXJuIHsgbmV4dDogZG9uZVJlc3VsdCB9O1xuICB9XG4gIHJ1bnRpbWUudmFsdWVzID0gdmFsdWVzO1xuXG4gIGZ1bmN0aW9uIGRvbmVSZXN1bHQoKSB7XG4gICAgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICB9XG5cbiAgQ29udGV4dC5wcm90b3R5cGUgPSB7XG4gICAgY29uc3RydWN0b3I6IENvbnRleHQsXG5cbiAgICByZXNldDogZnVuY3Rpb24oc2tpcFRlbXBSZXNldCkge1xuICAgICAgdGhpcy5wcmV2ID0gMDtcbiAgICAgIHRoaXMubmV4dCA9IDA7XG4gICAgICB0aGlzLnNlbnQgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLmRvbmUgPSBmYWxzZTtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICB0aGlzLnRyeUVudHJpZXMuZm9yRWFjaChyZXNldFRyeUVudHJ5KTtcblxuICAgICAgaWYgKCFza2lwVGVtcFJlc2V0KSB7XG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gdGhpcykge1xuICAgICAgICAgIC8vIE5vdCBzdXJlIGFib3V0IHRoZSBvcHRpbWFsIG9yZGVyIG9mIHRoZXNlIGNvbmRpdGlvbnM6XG4gICAgICAgICAgaWYgKG5hbWUuY2hhckF0KDApID09PSBcInRcIiAmJlxuICAgICAgICAgICAgICBoYXNPd24uY2FsbCh0aGlzLCBuYW1lKSAmJlxuICAgICAgICAgICAgICAhaXNOYU4oK25hbWUuc2xpY2UoMSkpKSB7XG4gICAgICAgICAgICB0aGlzW25hbWVdID0gdW5kZWZpbmVkO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBzdG9wOiBmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZG9uZSA9IHRydWU7XG5cbiAgICAgIHZhciByb290RW50cnkgPSB0aGlzLnRyeUVudHJpZXNbMF07XG4gICAgICB2YXIgcm9vdFJlY29yZCA9IHJvb3RFbnRyeS5jb21wbGV0aW9uO1xuICAgICAgaWYgKHJvb3RSZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJvb3RSZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5ydmFsO1xuICAgIH0sXG5cbiAgICBkaXNwYXRjaEV4Y2VwdGlvbjogZnVuY3Rpb24oZXhjZXB0aW9uKSB7XG4gICAgICBpZiAodGhpcy5kb25lKSB7XG4gICAgICAgIHRocm93IGV4Y2VwdGlvbjtcbiAgICAgIH1cblxuICAgICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgICAgZnVuY3Rpb24gaGFuZGxlKGxvYywgY2F1Z2h0KSB7XG4gICAgICAgIHJlY29yZC50eXBlID0gXCJ0aHJvd1wiO1xuICAgICAgICByZWNvcmQuYXJnID0gZXhjZXB0aW9uO1xuICAgICAgICBjb250ZXh0Lm5leHQgPSBsb2M7XG4gICAgICAgIHJldHVybiAhIWNhdWdodDtcbiAgICAgIH1cblxuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IFwicm9vdFwiKSB7XG4gICAgICAgICAgLy8gRXhjZXB0aW9uIHRocm93biBvdXRzaWRlIG9mIGFueSB0cnkgYmxvY2sgdGhhdCBjb3VsZCBoYW5kbGVcbiAgICAgICAgICAvLyBpdCwgc28gc2V0IHRoZSBjb21wbGV0aW9uIHZhbHVlIG9mIHRoZSBlbnRpcmUgZnVuY3Rpb24gdG9cbiAgICAgICAgICAvLyB0aHJvdyB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgIHJldHVybiBoYW5kbGUoXCJlbmRcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldikge1xuICAgICAgICAgIHZhciBoYXNDYXRjaCA9IGhhc093bi5jYWxsKGVudHJ5LCBcImNhdGNoTG9jXCIpO1xuICAgICAgICAgIHZhciBoYXNGaW5hbGx5ID0gaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKTtcblxuICAgICAgICAgIGlmIChoYXNDYXRjaCAmJiBoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzQ2F0Y2gpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSBpZiAoaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5maW5hbGx5TG9jKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJ0cnkgc3RhdGVtZW50IHdpdGhvdXQgY2F0Y2ggb3IgZmluYWxseVwiKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgYWJydXB0OiBmdW5jdGlvbih0eXBlLCBhcmcpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jIDw9IHRoaXMucHJldiAmJlxuICAgICAgICAgICAgaGFzT3duLmNhbGwoZW50cnksIFwiZmluYWxseUxvY1wiKSAmJlxuICAgICAgICAgICAgdGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgIHZhciBmaW5hbGx5RW50cnkgPSBlbnRyeTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoZmluYWxseUVudHJ5ICYmXG4gICAgICAgICAgKHR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgICB0eXBlID09PSBcImNvbnRpbnVlXCIpICYmXG4gICAgICAgICAgZmluYWxseUVudHJ5LnRyeUxvYyA8PSBhcmcgJiZcbiAgICAgICAgICBhcmcgPD0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgLy8gSWdub3JlIHRoZSBmaW5hbGx5IGVudHJ5IGlmIGNvbnRyb2wgaXMgbm90IGp1bXBpbmcgdG8gYVxuICAgICAgICAvLyBsb2NhdGlvbiBvdXRzaWRlIHRoZSB0cnkvY2F0Y2ggYmxvY2suXG4gICAgICAgIGZpbmFsbHlFbnRyeSA9IG51bGw7XG4gICAgICB9XG5cbiAgICAgIHZhciByZWNvcmQgPSBmaW5hbGx5RW50cnkgPyBmaW5hbGx5RW50cnkuY29tcGxldGlvbiA6IHt9O1xuICAgICAgcmVjb3JkLnR5cGUgPSB0eXBlO1xuICAgICAgcmVjb3JkLmFyZyA9IGFyZztcblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSkge1xuICAgICAgICB0aGlzLm5leHQgPSBmaW5hbGx5RW50cnkuZmluYWxseUxvYztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY29tcGxldGUocmVjb3JkKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfSxcblxuICAgIGNvbXBsZXRlOiBmdW5jdGlvbihyZWNvcmQsIGFmdGVyTG9jKSB7XG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByZWNvcmQuYXJnO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwiYnJlYWtcIiB8fFxuICAgICAgICAgIHJlY29yZC50eXBlID09PSBcImNvbnRpbnVlXCIpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gcmVjb3JkLmFyZztcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgdGhpcy5ydmFsID0gcmVjb3JkLmFyZztcbiAgICAgICAgdGhpcy5uZXh0ID0gXCJlbmRcIjtcbiAgICAgIH0gZWxzZSBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIgJiYgYWZ0ZXJMb2MpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gYWZ0ZXJMb2M7XG4gICAgICB9XG4gICAgfSxcblxuICAgIGZpbmlzaDogZnVuY3Rpb24oZmluYWxseUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS5maW5hbGx5TG9jID09PSBmaW5hbGx5TG9jKSB7XG4gICAgICAgICAgdGhpcy5jb21wbGV0ZShlbnRyeS5jb21wbGV0aW9uLCBlbnRyeS5hZnRlckxvYyk7XG4gICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgXCJjYXRjaFwiOiBmdW5jdGlvbih0cnlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSB0cnlMb2MpIHtcbiAgICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcbiAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgdmFyIHRocm93biA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRocm93bjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgY29udGV4dC5jYXRjaCBtZXRob2QgbXVzdCBvbmx5IGJlIGNhbGxlZCB3aXRoIGEgbG9jYXRpb25cbiAgICAgIC8vIGFyZ3VtZW50IHRoYXQgY29ycmVzcG9uZHMgdG8gYSBrbm93biBjYXRjaCBibG9jay5cbiAgICAgIHRocm93IG5ldyBFcnJvcihcImlsbGVnYWwgY2F0Y2ggYXR0ZW1wdFwiKTtcbiAgICB9LFxuXG4gICAgZGVsZWdhdGVZaWVsZDogZnVuY3Rpb24oaXRlcmFibGUsIHJlc3VsdE5hbWUsIG5leHRMb2MpIHtcbiAgICAgIHRoaXMuZGVsZWdhdGUgPSB7XG4gICAgICAgIGl0ZXJhdG9yOiB2YWx1ZXMoaXRlcmFibGUpLFxuICAgICAgICByZXN1bHROYW1lOiByZXN1bHROYW1lLFxuICAgICAgICBuZXh0TG9jOiBuZXh0TG9jXG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9XG4gIH07XG59KShcbiAgLy8gQW1vbmcgdGhlIHZhcmlvdXMgdHJpY2tzIGZvciBvYnRhaW5pbmcgYSByZWZlcmVuY2UgdG8gdGhlIGdsb2JhbFxuICAvLyBvYmplY3QsIHRoaXMgc2VlbXMgdG8gYmUgdGhlIG1vc3QgcmVsaWFibGUgdGVjaG5pcXVlIHRoYXQgZG9lcyBub3RcbiAgLy8gdXNlIGluZGlyZWN0IGV2YWwgKHdoaWNoIHZpb2xhdGVzIENvbnRlbnQgU2VjdXJpdHkgUG9saWN5KS5cbiAgdHlwZW9mIGdsb2JhbCA9PT0gXCJvYmplY3RcIiA/IGdsb2JhbCA6XG4gIHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIgPyB3aW5kb3cgOlxuICB0eXBlb2Ygc2VsZiA9PT0gXCJvYmplY3RcIiA/IHNlbGYgOiB0aGlzXG4pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9iYWJlbC1yZWdlbmVyYXRvci1ydW50aW1lL3J1bnRpbWUuanNcbiAqKiBtb2R1bGUgaWQgPSAxODlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWwgZnJvbSAndXRpbCc7XG5pbXBvcnQgY3NwIGZyb20gJ2pzLWNzcCc7XG5pbXBvcnQgQ29uZmlndXJlIGZyb20gJ0NvbmZpZ3VyZSdcbmltcG9ydCBTaWduYWwgZnJvbSAncm91dGVycy9TaWduYWwnO1xuaW1wb3J0IERldmljZUxvZyBmcm9tICdyb3V0ZXJzL0RldmljZUxvZyc7XG5pbXBvcnQgU2NyZWVuUmVjb3JkIGZyb20gJ3JvdXRlcnMvU2NyZWVuUmVjb3JkJztcbmltcG9ydCBUaW1lbGluZSBmcm9tICdyb3V0ZXJzL1RpbWVsaW5lJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAncm91dGVycy9Sb3V0ZXInO1xuXG5pbXBvcnQgRGVmZXIgZnJvbSAnRGVmZXInO1xuXG5jbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgUm91dGVyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubmFtZSA9ICdjb250cm9sbGVyJztcbiAgICB0aGlzLl9tYWluUm91dGVyID0gbnVsbDtcbiAgICB0aGlzLl9tYWluUHVibGljYXRpb24gPSBudWxsO1xuICAgIHRoaXMuX3JvdXRlcnMgPSBudWxsO1xuICAgIHRoaXMuX3N0YWdlID0gbnVsbDtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIGxldCBjb25maWd1cmUgPSBuZXcgQ29uZmlndXJlKCk7XG4gICAgdGhpcy5jb25maWdzID0gY29uZmlndXJlLnNldHVwKCk7XG4gICAgbGV0IG1haW5Sb3V0ZXJOYW1lID0gdGhpcy5jb25maWdzLnJvdXRlcnMuX19tYWluX187XG4gICAgdGhpcy5fcm91dGVycyA9IHtcbiAgICAgIHNjcmVlbnJlY29yZDogbmV3IFNjcmVlblJlY29yZCh0aGlzLmNvbmZpZ3MpLFxuICAgICAgZGV2aWNlbG9nOiBuZXcgRGV2aWNlTG9nKHRoaXMuY29uZmlncyksXG4gICAgICAvL2xvZzogbmV3IExvZyh0aGlzLmNvbmZpZ3MpLFxuICAgICAgdGltZWxpbmU6IG5ldyBUaW1lbGluZSh0aGlzLmNvbmZpZ3MpLFxuICAgICAgc2lnbmFsOiBuZXcgU2lnbmFsKHRoaXMuY29uZmlncylcbiAgICB9O1xuICAgIHRoaXMuX21haW5Sb3V0ZXIgPSB0aGlzLl9yb3V0ZXJzW21haW5Sb3V0ZXJOYW1lXTtcbiAgICBpZiAoIXRoaXMuX21haW5Sb3V0ZXIpIHsgdGhyb3cgbmV3IEVycm9yKCdObyBtYWluIHJvdXRlcjogJyArIG1haW5Sb3V0ZXJOYW1lKTsgfVxuICAgIGZvciAobGV0IHJvdXRlcklkZW50aWZpY2F0aW9uIGluIHRoaXMuX3JvdXRlcnMpIHtcbiAgICAgIGxldCByb3V0ZXIgPSB0aGlzLl9yb3V0ZXJzW3JvdXRlcklkZW50aWZpY2F0aW9uXTtcbiAgICAgIHRoaXMuc3Vic2NyaWJlKHJvdXRlcjo6cm91dGVyLmNvbm5lY3RUb0NvbnRyb2xsZXIpO1xuICAgIH1cblxuICAgIHRoaXMuX21haW5Sb3V0ZXIuc3Vic2NyaWJlKHRoaXM6OnRoaXMuX2Nvbm5lY3RUb01haW5Sb3V0ZXIpO1xuICAgIGNzcC5wdXRBc3luYyh0aGlzLl9vdXRwdXRDaGFubmVsLCB7J3RvcGljJzogJ3N0YXR1cycsICdzb3VyY2UnOiB0aGlzLl9uYW1lLFxuICAgICAgJ3BheWxvYWQnOiB7J3R5cGUnOiAnaW5pdGlhbGl6ZScsICdkZXRhaWwnOiB0aGlzLl9yb3V0ZXJzfSB9KTtcbiAgfVxuXG4gIGFzeW5jIHN0b3AoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICgndGVybWluYXRpbmcnICE9PSB0aGlzLl9zdGFnZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgYmUgaW4gdGhlIHRlcm1pbmF0aW5nIHN0YWdlICcgK1xuICAgICAgICAgICdiZWZvcmUgY2FsbGluZyBzdG9wIChjdXJyZW50IG9uZSBpczogJyArIHRoaXMuX3N0YWdlICsgJyApJyk7XG4gICAgICB9XG4gICAgICBsZXQgY3VycmVudFN0YWdlUHJvbWlzZXMgPSBPYmplY3Qua2V5cyh0aGlzLl9yb3V0ZXJzKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgbGV0IHJvdXRlciA9IHRoaXMuX3JvdXRlcnNbbmFtZV07XG4gICAgICAgIHJldHVybiByb3V0ZXIuX2N1cnJlbnRTdGFnZURlZmVyLnByb21pc2U7XG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2codGhpcy5fbmFtZSwgRGF0ZS5ub3coKSwgYFNlbmQgfGZpbmFsaXplfCBtZXNzYWdlIG91dGApO1xuICAgICAgY3NwLnB1dEFzeW5jKHRoaXMuX291dHB1dENoYW5uZWwsIHsndG9waWMnOiAnc3RhdHVzJywgJ3NvdXJjZSc6IHRoaXMuX25hbWUsXG4gICAgICAgICdwYXlsb2FkJzogeyd0eXBlJzogJ2ZpbmFsaXplJ30gfSk7XG5cbiAgICAgIC8vIFRvIHdhaXQgdGVybWluYXRpbmcgc3RhZ2UgZG9uZS4gSXQgbXVzdCBiZSB0aGUgc3RhZ2UgYmVmb3JlIHRoZSB0aGlzXG4gICAgICAvLyBtZXRob2QgZ2V0IGludm9rZWQuXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChjdXJyZW50U3RhZ2VQcm9taXNlcyk7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cblxuICBfY29ubmVjdFRvTWFpblJvdXRlcihwdWJsaWNhdGlvbikge1xuICAgIHRoaXMuX21haW5QdWJsaWNhdGlvbiA9IHB1YmxpY2F0aW9uO1xuICAgIGNzcC5vcGVyYXRpb25zLnB1Yi5zdWIocHVibGljYXRpb24sICdzdGF0dXMnLCB0aGlzLl9pbnB1dENoYW5uZWwpO1xuICAgIHRoaXMuX2NvbnN1bWVNYWluUm91dGVyTWVzc2FnZSgpO1xuICB9XG5cbiAgYXN5bmMgX2NvbnN1bWVNYWluUm91dGVyTWVzc2FnZSgpIHtcbiAgICBsZXQgdGFrZUl0ID0gKCkgPT4ge1xuICAgICAgbGV0IGRlZmVyID0gbmV3IERlZmVyKCk7XG4gICAgICBjc3AudGFrZUFzeW5jKHRoaXMuX2lucHV0Q2hhbm5lbCxcbiAgICAgICAgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5fbmFtZSwgRGF0ZS5ub3coKSwgYFJlY2VpdmVkIG1lc3NhZ2U6ICR7IHV0aWwuaW5zcGVjdCh2YWx1ZSkgfWApO1xuICAgICAgICAgIGRlZmVyLnJlc29sdmUodmFsdWUpOyB9KTtcbiAgICAgIHJldHVybiBkZWZlci5wcm9taXNlO1xuICAgIH1cblxuICAgIGxldCBtZXNzYWdlID0gYXdhaXQgdGFrZUl0KCk7XG4gICAgd2hpbGUobWVzc2FnZSAhPT0gY3NwLkNMT1NFRCkge1xuICAgICAgaWYgKCdmaW5hbGl6ZScgPT09IG1lc3NhZ2UucGF5bG9hZC50eXBlKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAoJ3N0YWdlY2hhbmdlJyA9PT0gbWVzc2FnZS5wYXlsb2FkLnR5cGUpIHtcbiAgICAgICAgdGhpcy5fc3RhZ2UgPSBtZXNzYWdlLnBheWxvYWQuZGV0YWlsO1xuICAgICAgICAvLyBXZSBuZWVkIHRoaXMgYXdhaXQgYmVjYXVzZSB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBjdXJyZW50IHN0YWdlIGNoYW5nZVxuICAgICAgICAvLyB0byBzdGFydCB0aGUgbmV4dCBjaGFuZ2UuXG4gICAgICAgIGF3YWl0IHRoaXMuX2ZvcndhcmRTdGFnZUNoYW5nZVJlcXVlc3QobWVzc2FnZS5wYXlsb2FkLmRldGFpbCk7XG4gICAgICB9XG4gICAgICBtZXNzYWdlID0gYXdhaXQgdGFrZUl0KCk7XG4gICAgfVxuICB9XG5cbiAgX2ZvcndhcmRTdGFnZUNoYW5nZVJlcXVlc3Qoc3RhZ2UpIHtcbiAgICBsZXQgY3VycmVudFN0YWdlUHJvbWlzZXMgPSBPYmplY3Qua2V5cyh0aGlzLl9yb3V0ZXJzKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgIGxldCByb3V0ZXIgPSB0aGlzLl9yb3V0ZXJzW25hbWVdO1xuICAgICAgcmV0dXJuIHJvdXRlci5fY3VycmVudFN0YWdlRGVmZXIucHJvbWlzZTtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuX25hbWUsIERhdGUubm93KCksXG4gICAgICBgU2VuZCB0aGUgfHN0YWdlY2hhbmdlfCBtZXNzYWdlIG91dDsgc3RhZ2U6ICR7IHN0YWdlIH1gKTtcbiAgICBjc3AucHV0QXN5bmModGhpcy5fb3V0cHV0Q2hhbm5lbCwgeyd0b3BpYyc6ICdzdGF0dXMnLCAnc291cmNlJzogdGhpcy5fbmFtZSxcbiAgICAgICdwYXlsb2FkJzogeyd0eXBlJzogJ3N0YWdlY2hhbmdlJywgJ2RldGFpbCc6IHN0YWdlfSB9KTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoY3VycmVudFN0YWdlUHJvbWlzZXMpO1xuICB9XG5cbn1cblxubGV0IGNvbnRyb2xsZXIgPSBuZXcgQ29udHJvbGxlcigpO1xuY29udHJvbGxlci5zdGFydCgpO1xuLy9jb250cm9sbGVyLnRlc3QoKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL2JlaG9sZGVyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidXRpbFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwidXRpbFwiXG4gKiogbW9kdWxlIGlkID0gMTkxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNzcCA9IHJlcXVpcmUoXCIuL2NzcC5jb3JlXCIpO1xudmFyIG9wZXJhdGlvbnMgPSByZXF1aXJlKFwiLi9jc3Aub3BlcmF0aW9uc1wiKTtcbnZhciBwaXBlbGluZSA9IHJlcXVpcmUoJy4vY3NwLnBpcGVsaW5lJyk7XG5cbmNzcC5vcGVyYXRpb25zID0gb3BlcmF0aW9ucztcbmNzcC5vcGVyYXRpb25zLnBpcGVsaW5lID0gcGlwZWxpbmUucGlwZWxpbmU7XG5jc3Aub3BlcmF0aW9ucy5waXBlbGluZUFzeW5jID0gcGlwZWxpbmUucGlwZWxpbmVBc3luYztcblxubW9kdWxlLmV4cG9ydHMgPSBjc3A7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9qcy1jc3Avc3JjL2NzcC5qc1xuICoqIG1vZHVsZSBpZCA9IDE5MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBidWZmZXJzID0gcmVxdWlyZShcIi4vaW1wbC9idWZmZXJzXCIpO1xudmFyIGNoYW5uZWxzID0gcmVxdWlyZShcIi4vaW1wbC9jaGFubmVsc1wiKTtcbnZhciBzZWxlY3QgPSByZXF1aXJlKFwiLi9pbXBsL3NlbGVjdFwiKTtcbnZhciBwcm9jZXNzID0gcmVxdWlyZShcIi4vaW1wbC9wcm9jZXNzXCIpO1xudmFyIHRpbWVycyA9IHJlcXVpcmUoXCIuL2ltcGwvdGltZXJzXCIpO1xuXG5mdW5jdGlvbiBzcGF3bihnZW4sIGNyZWF0b3IpIHtcbiAgdmFyIGNoID0gY2hhbm5lbHMuY2hhbihidWZmZXJzLmZpeGVkKDEpKTtcbiAgKG5ldyBwcm9jZXNzLlByb2Nlc3MoZ2VuLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gY2hhbm5lbHMuQ0xPU0VEKSB7XG4gICAgICBjaC5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9jZXNzLnB1dF90aGVuX2NhbGxiYWNrKGNoLCB2YWx1ZSwgZnVuY3Rpb24ob2spIHtcbiAgICAgICAgY2guY2xvc2UoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgY3JlYXRvcikpLnJ1bigpO1xuICByZXR1cm4gY2g7XG59O1xuXG5mdW5jdGlvbiBnbyhmLCBhcmdzKSB7XG4gIGFyZ3MgPSBhcmdzIHx8IFtdO1xuXG4gIHZhciBnZW4gPSBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICByZXR1cm4gc3Bhd24oZ2VuLCBmKTtcbn07XG5cbmZ1bmN0aW9uIGNoYW4oYnVmZmVyT3JOdW1iZXIsIHhmb3JtLCBleEhhbmRsZXIpIHtcbiAgdmFyIGJ1ZjtcbiAgaWYgKGJ1ZmZlck9yTnVtYmVyID09PSAwKSB7XG4gICAgYnVmZmVyT3JOdW1iZXIgPSBudWxsO1xuICB9XG4gIGlmICh0eXBlb2YgYnVmZmVyT3JOdW1iZXIgPT09IFwibnVtYmVyXCIpIHtcbiAgICBidWYgPSBidWZmZXJzLmZpeGVkKGJ1ZmZlck9yTnVtYmVyKTtcbiAgfSBlbHNlIHtcbiAgICBidWYgPSBidWZmZXJPck51bWJlcjtcbiAgfVxuICByZXR1cm4gY2hhbm5lbHMuY2hhbihidWYsIHhmb3JtLCBleEhhbmRsZXIpO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYnVmZmVyczoge1xuICAgIGZpeGVkOiBidWZmZXJzLmZpeGVkLFxuICAgIGRyb3BwaW5nOiBidWZmZXJzLmRyb3BwaW5nLFxuICAgIHNsaWRpbmc6IGJ1ZmZlcnMuc2xpZGluZ1xuICB9LFxuXG4gIHNwYXduOiBzcGF3bixcbiAgZ286IGdvLFxuICBjaGFuOiBjaGFuLFxuICBERUZBVUxUOiBzZWxlY3QuREVGQVVMVCxcbiAgQ0xPU0VEOiBjaGFubmVscy5DTE9TRUQsXG5cbiAgcHV0OiBwcm9jZXNzLnB1dCxcbiAgdGFrZTogcHJvY2Vzcy50YWtlLFxuICBvZmZlcjogcHJvY2Vzcy5vZmZlcixcbiAgcG9sbDogcHJvY2Vzcy5wb2xsLFxuICBzbGVlcDogcHJvY2Vzcy5zbGVlcCxcbiAgYWx0czogcHJvY2Vzcy5hbHRzLFxuICBwdXRBc3luYzogcHJvY2Vzcy5wdXRfdGhlbl9jYWxsYmFjayxcbiAgdGFrZUFzeW5jOiBwcm9jZXNzLnRha2VfdGhlbl9jYWxsYmFjayxcbiAgTk9fVkFMVUU6IHByb2Nlc3MuTk9fVkFMVUUsXG5cbiAgdGltZW91dDogdGltZXJzLnRpbWVvdXRcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9qcy1jc3Avc3JjL2NzcC5jb3JlLmpzXG4gKiogbW9kdWxlIGlkID0gMTkzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gVE9ETzogQ29uc2lkZXIgRW1wdHlFcnJvciAmIEZ1bGxFcnJvciB0byBhdm9pZCByZWR1bmRhbnQgYm91bmRcbi8vIGNoZWNrcywgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZSAobWF5IG5lZWQgYmVuY2htYXJrcylcblxuZnVuY3Rpb24gYWNvcHkoc3JjLCBzcmNfc3RhcnQsIGRzdCwgZHN0X3N0YXJ0LCBsZW5ndGgpIHtcbiAgdmFyIGNvdW50ID0gMDtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpZiAoY291bnQgPj0gbGVuZ3RoKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgZHN0W2RzdF9zdGFydCArIGNvdW50XSA9IHNyY1tzcmNfc3RhcnQgKyBjb3VudF07XG4gICAgY291bnQgKys7XG4gIH1cbn1cblxudmFyIEVNUFRZID0ge1xuICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBFTVBUWV1cIjtcbiAgfVxufTtcblxudmFyIFJpbmdCdWZmZXIgPSBmdW5jdGlvbihoZWFkLCB0YWlsLCBsZW5ndGgsIGFycmF5KSB7XG4gIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIHRoaXMuaGVhZCA9IGhlYWQ7XG4gIHRoaXMudGFpbCA9IHRhaWw7XG59O1xuXG4vLyBJbnRlcm5hbCBtZXRob2QsIGNhbGxlcnMgbXVzdCBkbyBib3VuZCBjaGVja1xuUmluZ0J1ZmZlci5wcm90b3R5cGUuX3Vuc2hpZnQgPSBmdW5jdGlvbihpdGVtKSB7XG4gIHZhciBhcnJheSA9IHRoaXMuYXJyYXk7XG4gIHZhciBoZWFkID0gdGhpcy5oZWFkO1xuICBhcnJheVtoZWFkXSA9IGl0ZW07XG4gIHRoaXMuaGVhZCA9IChoZWFkICsgMSkgJSBhcnJheS5sZW5ndGg7XG4gIHRoaXMubGVuZ3RoICsrO1xufTtcblxuUmluZ0J1ZmZlci5wcm90b3R5cGUuX3Jlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgYXJyYXkgPSB0aGlzLmFycmF5O1xuICB2YXIgbmV3X2xlbmd0aCA9IDIgKiBhcnJheS5sZW5ndGg7XG4gIHZhciBuZXdfYXJyYXkgPSBuZXcgQXJyYXkobmV3X2xlbmd0aCk7XG4gIHZhciBoZWFkID0gdGhpcy5oZWFkO1xuICB2YXIgdGFpbCA9IHRoaXMudGFpbDtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICBpZiAodGFpbCA8IGhlYWQpIHtcbiAgICBhY29weShhcnJheSwgdGFpbCwgbmV3X2FycmF5LCAwLCBsZW5ndGgpO1xuICAgIHRoaXMudGFpbCA9IDA7XG4gICAgdGhpcy5oZWFkID0gbGVuZ3RoO1xuICAgIHRoaXMuYXJyYXkgPSBuZXdfYXJyYXk7XG4gIH0gZWxzZSBpZiAodGFpbCA+IGhlYWQpIHtcbiAgICBhY29weShhcnJheSwgdGFpbCwgbmV3X2FycmF5LCAwLCBhcnJheS5sZW5ndGggLSB0YWlsKTtcbiAgICBhY29weShhcnJheSwgMCwgbmV3X2FycmF5LCBhcnJheS5sZW5ndGggLSB0YWlsLCBoZWFkKTtcbiAgICB0aGlzLnRhaWwgPSAwO1xuICAgIHRoaXMuaGVhZCA9IGxlbmd0aDtcbiAgICB0aGlzLmFycmF5ID0gbmV3X2FycmF5O1xuICB9IGVsc2UgaWYgKHRhaWwgPT09IGhlYWQpIHtcbiAgICB0aGlzLnRhaWwgPSAwO1xuICAgIHRoaXMuaGVhZCA9IDA7XG4gICAgdGhpcy5hcnJheSA9IG5ld19hcnJheTtcbiAgfVxufTtcblxuUmluZ0J1ZmZlci5wcm90b3R5cGUudW5ib3VuZGVkX3Vuc2hpZnQgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGlmICh0aGlzLmxlbmd0aCArIDEgPT09IHRoaXMuYXJyYXkubGVuZ3RoKSB7XG4gICAgdGhpcy5fcmVzaXplKCk7XG4gIH1cbiAgdGhpcy5fdW5zaGlmdChpdGVtKTtcbn07XG5cblJpbmdCdWZmZXIucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gRU1QVFk7XG4gIH1cbiAgdmFyIGFycmF5ID0gdGhpcy5hcnJheTtcbiAgdmFyIHRhaWwgPSB0aGlzLnRhaWw7XG4gIHZhciBpdGVtID0gYXJyYXlbdGFpbF07XG4gIGFycmF5W3RhaWxdID0gbnVsbDtcbiAgdGhpcy50YWlsID0gKHRhaWwgKyAxKSAlIGFycmF5Lmxlbmd0aDtcbiAgdGhpcy5sZW5ndGggLS07XG4gIHJldHVybiBpdGVtO1xufTtcblxuUmluZ0J1ZmZlci5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uKHByZWRpY2F0ZSkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMucG9wKCk7XG4gICAgaWYgKHByZWRpY2F0ZShpdGVtKSkge1xuICAgICAgdGhpcy5fdW5zaGlmdChpdGVtKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBGaXhlZEJ1ZmZlciA9IGZ1bmN0aW9uKGJ1ZiwgIG4pIHtcbiAgdGhpcy5idWYgPSBidWY7XG4gIHRoaXMubiA9IG47XG59O1xuXG5GaXhlZEJ1ZmZlci5wcm90b3R5cGUuaXNfZnVsbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5idWYubGVuZ3RoID49IHRoaXMubjtcbn07XG5cbkZpeGVkQnVmZmVyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuYnVmLnBvcCgpO1xufTtcblxuRml4ZWRCdWZmZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgLy8gTm90ZSB0aGF0IGV2ZW4gdGhvdWdoIHRoZSB1bmRlcmx5aW5nIGJ1ZmZlciBtYXkgZ3JvdywgXCJuXCIgaXNcbiAgLy8gZml4ZWQgc28gYWZ0ZXIgb3ZlcmZsb3dpbmcgdGhlIGJ1ZmZlciBpcyBzdGlsbCBjb25zaWRlcmVkIGZ1bGwuXG4gIHRoaXMuYnVmLnVuYm91bmRlZF91bnNoaWZ0KGl0ZW0pO1xufTtcblxuRml4ZWRCdWZmZXIucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmJ1Zi5sZW5ndGg7XG59O1xuXG5cbnZhciBEcm9wcGluZ0J1ZmZlciA9IGZ1bmN0aW9uKGJ1Ziwgbikge1xuICB0aGlzLmJ1ZiA9IGJ1ZjtcbiAgdGhpcy5uID0gbjtcbn07XG5cbkRyb3BwaW5nQnVmZmVyLnByb3RvdHlwZS5pc19mdWxsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbkRyb3BwaW5nQnVmZmVyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuYnVmLnBvcCgpO1xufTtcblxuRHJvcHBpbmdCdWZmZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgaWYgKHRoaXMuYnVmLmxlbmd0aCA8IHRoaXMubikge1xuICAgIHRoaXMuYnVmLl91bnNoaWZ0KGl0ZW0pO1xuICB9XG59O1xuXG5Ecm9wcGluZ0J1ZmZlci5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuYnVmLmxlbmd0aDtcbn07XG5cblxudmFyIFNsaWRpbmdCdWZmZXIgPSBmdW5jdGlvbihidWYsIG4pIHtcbiAgdGhpcy5idWYgPSBidWY7XG4gIHRoaXMubiA9IG47XG59O1xuXG5TbGlkaW5nQnVmZmVyLnByb3RvdHlwZS5pc19mdWxsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblNsaWRpbmdCdWZmZXIucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5idWYucG9wKCk7XG59O1xuXG5TbGlkaW5nQnVmZmVyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGlmICh0aGlzLmJ1Zi5sZW5ndGggPT09IHRoaXMubikge1xuICAgIHRoaXMuYnVmLnBvcCgpO1xuICB9XG4gIHRoaXMuYnVmLl91bnNoaWZ0KGl0ZW0pO1xufTtcblxuU2xpZGluZ0J1ZmZlci5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuYnVmLmxlbmd0aDtcbn07XG5cblxudmFyIHJpbmcgPSBleHBvcnRzLnJpbmcgPSBmdW5jdGlvbiByaW5nX2J1ZmZlcihuKSB7XG4gIHJldHVybiBuZXcgUmluZ0J1ZmZlcigwLCAwLCAwLCBuZXcgQXJyYXkobikpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgYnVmZmVyIHRoYXQgaXMgY29uc2lkZXJlZCBcImZ1bGxcIiB3aGVuIGl0IHJlYWNoZXMgc2l6ZSBuLFxuICogYnV0IHN0aWxsIGFjY2VwdHMgYWRkaXRpb25hbCBpdGVtcywgZWZmZWN0aXZlbHkgYWxsb3cgb3ZlcmZsb3dpbmcuXG4gKiBUaGUgb3ZlcmZsb3dpbmcgYmVoYXZpb3IgaXMgdXNlZnVsIGZvciBzdXBwb3J0aW5nIFwiZXhwYW5kaW5nXCJcbiAqIHRyYW5zZHVjZXJzLCB3aGVyZSB3ZSB3YW50IHRvIGNoZWNrIGlmIGEgYnVmZmVyIGlzIGZ1bGwgYmVmb3JlXG4gKiBydW5uaW5nIHRoZSB0cmFuc2R1Y2VkIHN0ZXAgZnVuY3Rpb24sIHdoaWxlIHN0aWxsIGFsbG93aW5nIGFcbiAqIHRyYW5zZHVjZWQgc3RlcCB0byBleHBhbmQgaW50byBtdWx0aXBsZSBcImVzc2VuY2VcIiBzdGVwcy5cbiAqL1xuZXhwb3J0cy5maXhlZCA9IGZ1bmN0aW9uIGZpeGVkX2J1ZmZlcihuKSB7XG4gIHJldHVybiBuZXcgRml4ZWRCdWZmZXIocmluZyhuKSwgbik7XG59O1xuXG5leHBvcnRzLmRyb3BwaW5nID0gZnVuY3Rpb24gZHJvcHBpbmdfYnVmZmVyKG4pIHtcbiAgcmV0dXJuIG5ldyBEcm9wcGluZ0J1ZmZlcihyaW5nKG4pLCBuKTtcbn07XG5cbmV4cG9ydHMuc2xpZGluZyA9IGZ1bmN0aW9uIHNsaWRpbmdfYnVmZmVyKG4pIHtcbiAgcmV0dXJuIG5ldyBTbGlkaW5nQnVmZmVyKHJpbmcobiksIG4pO1xufTtcblxuZXhwb3J0cy5FTVBUWSA9IEVNUFRZO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vanMtY3NwL3NyYy9pbXBsL2J1ZmZlcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxOTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgYnVmZmVycyA9IHJlcXVpcmUoXCIuL2J1ZmZlcnNcIik7XG52YXIgZGlzcGF0Y2ggPSByZXF1aXJlKFwiLi9kaXNwYXRjaFwiKTtcblxudmFyIE1BWF9ESVJUWSA9IDY0O1xudmFyIE1BWF9RVUVVRV9TSVpFID0gMTAyNDtcblxudmFyIENMT1NFRCA9IG51bGw7XG5cbnZhciBCb3ggPSBmdW5jdGlvbih2YWx1ZSkge1xuICB0aGlzLnZhbHVlID0gdmFsdWU7XG59O1xuXG52YXIgUHV0Qm94ID0gZnVuY3Rpb24oaGFuZGxlciwgdmFsdWUpIHtcbiAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufTtcblxudmFyIENoYW5uZWwgPSBmdW5jdGlvbih0YWtlcywgcHV0cywgYnVmLCB4Zm9ybSkge1xuICB0aGlzLmJ1ZiA9IGJ1ZjtcbiAgdGhpcy54Zm9ybSA9IHhmb3JtO1xuICB0aGlzLnRha2VzID0gdGFrZXM7XG4gIHRoaXMucHV0cyA9IHB1dHM7XG5cbiAgdGhpcy5kaXJ0eV90YWtlcyA9IDA7XG4gIHRoaXMuZGlydHlfcHV0cyA9IDA7XG4gIHRoaXMuY2xvc2VkID0gZmFsc2U7XG59O1xuXG5mdW5jdGlvbiBpc1JlZHVjZWQodikge1xuICByZXR1cm4gdiAmJiB2W1wiQEB0cmFuc2R1Y2VyL3JlZHVjZWRcIl07XG59XG5cbmZ1bmN0aW9uIHNjaGVkdWxlKGYsIHYpIHtcbiAgZGlzcGF0Y2gucnVuKGZ1bmN0aW9uKCkge1xuICAgIGYodik7XG4gIH0pO1xufVxuXG5DaGFubmVsLnByb3RvdHlwZS5fcHV0ID0gZnVuY3Rpb24odmFsdWUsIGhhbmRsZXIpIHtcbiAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcHV0IENMT1NFRCBvbiBhIGNoYW5uZWwuXCIpO1xuICB9XG5cbiAgLy8gVE9ETzogSSdtIG5vdCBzdXJlIGhvdyB0aGlzIGNhbiBoYXBwZW4sIGJlY2F1c2UgdGhlIG9wZXJhdGlvbnNcbiAgLy8gYXJlIHJlZ2lzdGVyZWQgaW4gMSB0aWNrLCBhbmQgdGhlIG9ubHkgd2F5IGZvciB0aGlzIHRvIGJlIGluYWN0aXZlXG4gIC8vIGlzIGZvciBhIHByZXZpb3VzIG9wZXJhdGlvbiBpbiB0aGUgc2FtZSBhbHQgdG8gaGF2ZSByZXR1cm5lZFxuICAvLyBpbW1lZGlhdGVseSwgd2hpY2ggd291bGQgaGF2ZSBzaG9ydC1jaXJjdWl0ZWQgdG8gcHJldmVudCB0aGlzIHRvXG4gIC8vIGJlIGV2ZXIgcmVnaXN0ZXIgYW55d2F5LiBUaGUgc2FtZSB0aGluZyBnb2VzIGZvciB0aGUgYWN0aXZlIGNoZWNrXG4gIC8vIGluIFwiX3Rha2VcIi5cbiAgaWYgKCFoYW5kbGVyLmlzX2FjdGl2ZSgpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIHJldHVybiBuZXcgQm94KGZhbHNlKTtcbiAgfVxuXG4gIHZhciB0YWtlciwgY2FsbGJhY2s7XG5cbiAgLy8gU29hayB0aGUgdmFsdWUgdGhyb3VnaCB0aGUgYnVmZmVyIGZpcnN0LCBldmVuIGlmIHRoZXJlIGlzIGFcbiAgLy8gcGVuZGluZyB0YWtlci4gVGhpcyB3YXkgdGhlIHN0ZXAgZnVuY3Rpb24gaGFzIGEgY2hhbmNlIHRvIGFjdCBvbiB0aGVcbiAgLy8gdmFsdWUuXG4gIGlmICh0aGlzLmJ1ZiAmJiAhdGhpcy5idWYuaXNfZnVsbCgpKSB7XG4gICAgaGFuZGxlci5jb21taXQoKTtcbiAgICB2YXIgZG9uZSA9IGlzUmVkdWNlZCh0aGlzLnhmb3JtW1wiQEB0cmFuc2R1Y2VyL3N0ZXBcIl0odGhpcy5idWYsIHZhbHVlKSk7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmICh0aGlzLmJ1Zi5jb3VudCgpID09PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGFrZXIgPSB0aGlzLnRha2VzLnBvcCgpO1xuICAgICAgaWYgKHRha2VyID09PSBidWZmZXJzLkVNUFRZKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHRha2VyLmlzX2FjdGl2ZSgpKSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5idWYucmVtb3ZlKCk7XG4gICAgICAgIGNhbGxiYWNrID0gdGFrZXIuY29tbWl0KCk7XG4gICAgICAgIHNjaGVkdWxlKGNhbGxiYWNrLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkb25lKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQm94KHRydWUpO1xuICB9XG5cbiAgLy8gRWl0aGVyIHRoZSBidWZmZXIgaXMgZnVsbCwgaW4gd2hpY2ggY2FzZSB0aGVyZSB3b24ndCBiZSBhbnlcbiAgLy8gcGVuZGluZyB0YWtlcywgb3Igd2UgZG9uJ3QgaGF2ZSBhIGJ1ZmZlciwgaW4gd2hpY2ggY2FzZSB0aGlzIGxvb3BcbiAgLy8gZnVsZmlsbHMgdGhlIGZpcnN0IG9mIHRoZW0gdGhhdCBpcyBhY3RpdmUgKG5vdGUgdGhhdCB3ZSBkb24ndFxuICAvLyBoYXZlIHRvIHdvcnJ5IGFib3V0IHRyYW5zZHVjZXJzIGhlcmUgc2luY2Ugd2UgcmVxdWlyZSBhIGJ1ZmZlclxuICAvLyBmb3IgdGhhdCkuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgdGFrZXIgPSB0aGlzLnRha2VzLnBvcCgpO1xuICAgIGlmICh0YWtlciA9PT0gYnVmZmVycy5FTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmICh0YWtlci5pc19hY3RpdmUoKSkge1xuICAgICAgaGFuZGxlci5jb21taXQoKTtcbiAgICAgIGNhbGxiYWNrID0gdGFrZXIuY29tbWl0KCk7XG4gICAgICBzY2hlZHVsZShjYWxsYmFjaywgdmFsdWUpO1xuICAgICAgcmV0dXJuIG5ldyBCb3godHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gTm8gYnVmZmVyLCBmdWxsIGJ1ZmZlciwgbm8gcGVuZGluZyB0YWtlcy4gUXVldWUgdGhpcyBwdXQgbm93IGlmIGJsb2NrYWJsZS5cbiAgaWYgKHRoaXMuZGlydHlfcHV0cyA+IE1BWF9ESVJUWSkge1xuICAgIHRoaXMucHV0cy5jbGVhbnVwKGZ1bmN0aW9uKHB1dHRlcikge1xuICAgICAgcmV0dXJuIHB1dHRlci5oYW5kbGVyLmlzX2FjdGl2ZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuZGlydHlfcHV0cyA9IDA7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kaXJ0eV9wdXRzICsrO1xuICB9XG4gIGlmIChoYW5kbGVyLmlzX2Jsb2NrYWJsZSgpKSB7XG4gICAgaWYgKHRoaXMucHV0cy5sZW5ndGggPj0gTUFYX1FVRVVFX1NJWkUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbW9yZSB0aGFuIFwiICsgTUFYX1FVRVVFX1NJWkUgKyBcIiBwZW5kaW5nIHB1dHMgYXJlIGFsbG93ZWQgb24gYSBzaW5nbGUgY2hhbm5lbC5cIik7XG4gICAgfVxuICAgIHRoaXMucHV0cy51bmJvdW5kZWRfdW5zaGlmdChuZXcgUHV0Qm94KGhhbmRsZXIsIHZhbHVlKSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5DaGFubmVsLnByb3RvdHlwZS5fdGFrZSA9IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgaWYgKCFoYW5kbGVyLmlzX2FjdGl2ZSgpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgcHV0dGVyLCBwdXRfaGFuZGxlciwgY2FsbGJhY2ssIHZhbHVlO1xuXG4gIGlmICh0aGlzLmJ1ZiAmJiB0aGlzLmJ1Zi5jb3VudCgpID4gMCkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgdmFsdWUgPSB0aGlzLmJ1Zi5yZW1vdmUoKTtcbiAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIHBlbmRpbmcgcHV0cyBoZXJlLCBvdGhlciB3aXNlIHRoZXkgd29uJ3RcbiAgICAvLyBiZSBhYmxlIHRvIHByb2NlZWQgdW50aWwgdGhlaXIgbnVtYmVyIHJlYWNoZXMgTUFYX0RJUlRZXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmICh0aGlzLmJ1Zi5pc19mdWxsKCkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwdXR0ZXIgPSB0aGlzLnB1dHMucG9wKCk7XG4gICAgICBpZiAocHV0dGVyID09PSBidWZmZXJzLkVNUFRZKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcHV0X2hhbmRsZXIgPSBwdXR0ZXIuaGFuZGxlcjtcbiAgICAgIGlmIChwdXRfaGFuZGxlci5pc19hY3RpdmUoKSkge1xuICAgICAgICBjYWxsYmFjayA9IHB1dF9oYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBzY2hlZHVsZShjYWxsYmFjaywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUmVkdWNlZCh0aGlzLnhmb3JtW1wiQEB0cmFuc2R1Y2VyL3N0ZXBcIl0odGhpcy5idWYsIHB1dHRlci52YWx1ZSkpKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgQm94KHZhbHVlKTtcbiAgfVxuXG4gIC8vIEVpdGhlciB0aGUgYnVmZmVyIGlzIGVtcHR5LCBpbiB3aGljaCBjYXNlIHRoZXJlIHdvbid0IGJlIGFueVxuICAvLyBwZW5kaW5nIHB1dHMsIG9yIHdlIGRvbid0IGhhdmUgYSBidWZmZXIsIGluIHdoaWNoIGNhc2UgdGhpcyBsb29wXG4gIC8vIGZ1bGZpbGxzIHRoZSBmaXJzdCBvZiB0aGVtIHRoYXQgaXMgYWN0aXZlIChub3RlIHRoYXQgd2UgZG9uJ3RcbiAgLy8gaGF2ZSB0byB3b3JyeSBhYm91dCB0cmFuc2R1Y2VycyBoZXJlIHNpbmNlIHdlIHJlcXVpcmUgYSBidWZmZXJcbiAgLy8gZm9yIHRoYXQpLlxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHB1dHRlciA9IHRoaXMucHV0cy5wb3AoKTtcbiAgICB2YWx1ZSA9IHB1dHRlci52YWx1ZTtcbiAgICBpZiAocHV0dGVyID09PSBidWZmZXJzLkVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgcHV0X2hhbmRsZXIgPSBwdXR0ZXIuaGFuZGxlcjtcbiAgICBpZiAocHV0X2hhbmRsZXIuaXNfYWN0aXZlKCkpIHtcbiAgICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgICBjYWxsYmFjayA9IHB1dF9oYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHNjaGVkdWxlKGNhbGxiYWNrLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgQm94KHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIHJldHVybiBuZXcgQm94KENMT1NFRCk7XG4gIH1cblxuICAvLyBObyBidWZmZXIsIGVtcHR5IGJ1ZmZlciwgbm8gcGVuZGluZyBwdXRzLiBRdWV1ZSB0aGlzIHRha2Ugbm93IGlmIGJsb2NrYWJsZS5cbiAgaWYgKHRoaXMuZGlydHlfdGFrZXMgPiBNQVhfRElSVFkpIHtcbiAgICB0aGlzLnRha2VzLmNsZWFudXAoZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgcmV0dXJuIGhhbmRsZXIuaXNfYWN0aXZlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5kaXJ0eV90YWtlcyA9IDA7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kaXJ0eV90YWtlcyArKztcbiAgfVxuICBpZiAoaGFuZGxlci5pc19ibG9ja2FibGUoKSkge1xuICAgIGlmICh0aGlzLnRha2VzLmxlbmd0aCA+PSBNQVhfUVVFVUVfU0laRSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbW9yZSB0aGFuIFwiICsgTUFYX1FVRVVFX1NJWkUgKyBcIiBwZW5kaW5nIHRha2VzIGFyZSBhbGxvd2VkIG9uIGEgc2luZ2xlIGNoYW5uZWwuXCIpO1xuICAgIH1cbiAgICB0aGlzLnRha2VzLnVuYm91bmRlZF91bnNoaWZ0KGhhbmRsZXIpO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuQ2hhbm5lbC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuY2xvc2VkID0gdHJ1ZTtcblxuICAvLyBUT0RPOiBEdXBsaWNhdGUgY29kZS4gTWFrZSBhIFwiX2ZsdXNoXCIgZnVuY3Rpb24gb3Igc29tZXRoaW5nXG4gIGlmICh0aGlzLmJ1Zikge1xuICAgIHRoaXMueGZvcm1bXCJAQHRyYW5zZHVjZXIvcmVzdWx0XCJdKHRoaXMuYnVmKTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKHRoaXMuYnVmLmNvdW50KCkgPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0YWtlciA9IHRoaXMudGFrZXMucG9wKCk7XG4gICAgICBpZiAodGFrZXIgPT09IGJ1ZmZlcnMuRU1QVFkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAodGFrZXIuaXNfYWN0aXZlKCkpIHtcbiAgICAgICAgY2FsbGJhY2sgPSB0YWtlci5jb21taXQoKTtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5idWYucmVtb3ZlKCk7XG4gICAgICAgIHNjaGVkdWxlKGNhbGxiYWNrLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICB2YXIgdGFrZXIgPSB0aGlzLnRha2VzLnBvcCgpO1xuICAgIGlmICh0YWtlciA9PT0gYnVmZmVycy5FTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmICh0YWtlci5pc19hY3RpdmUoKSkge1xuICAgICAgdmFyIGNhbGxiYWNrID0gdGFrZXIuY29tbWl0KCk7XG4gICAgICBzY2hlZHVsZShjYWxsYmFjaywgQ0xPU0VEKTtcbiAgICB9XG4gIH1cblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHZhciBwdXR0ZXIgPSB0aGlzLnB1dHMucG9wKCk7XG4gICAgaWYgKHB1dHRlciA9PT0gYnVmZmVycy5FTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChwdXR0ZXIuaGFuZGxlci5pc19hY3RpdmUoKSkge1xuICAgICAgdmFyIHB1dF9jYWxsYmFjayA9IHB1dHRlci5oYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgaWYgKHB1dF9jYWxsYmFjaykge1xuICAgICAgICBzY2hlZHVsZShwdXRfY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cblxuQ2hhbm5lbC5wcm90b3R5cGUuaXNfY2xvc2VkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmNsb3NlZDtcbn07XG5cbmZ1bmN0aW9uIGRlZmF1bHRIYW5kbGVyKGUpIHtcbiAgY29uc29sZS5sb2coJ2Vycm9yIGluIGNoYW5uZWwgdHJhbnNmb3JtZXInLCBlLnN0YWNrKTtcbiAgcmV0dXJuIENMT1NFRDtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRXgoYnVmLCBleEhhbmRsZXIsIGUpIHtcbiAgdmFyIGRlZiA9IChleEhhbmRsZXIgfHwgZGVmYXVsdEhhbmRsZXIpKGUpO1xuICBpZiAoZGVmICE9PSBDTE9TRUQpIHtcbiAgICBidWYuYWRkKGRlZik7XG4gIH1cbiAgcmV0dXJuIGJ1Zjtcbn1cblxuLy8gVGhlIGJhc2UgdHJhbnNmb3JtZXIgb2JqZWN0IHRvIHVzZSB3aXRoIHRyYW5zZHVjZXJzXG5mdW5jdGlvbiBBZGRUcmFuc2Zvcm1lcigpIHtcbn1cblxuQWRkVHJhbnNmb3JtZXIucHJvdG90eXBlW1wiQEB0cmFuc2R1Y2VyL2luaXRcIl0gPSBmdW5jdGlvbigpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdpbml0IG5vdCBhdmFpbGFibGUnKTtcbn07XG5cbkFkZFRyYW5zZm9ybWVyLnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9yZXN1bHRcIl0gPSBmdW5jdGlvbih2KSB7XG4gIHJldHVybiB2O1xufTtcblxuQWRkVHJhbnNmb3JtZXIucHJvdG90eXBlW1wiQEB0cmFuc2R1Y2VyL3N0ZXBcIl0gPSBmdW5jdGlvbihidWZmZXIsIGlucHV0KSB7XG4gIGJ1ZmZlci5hZGQoaW5wdXQpO1xuICByZXR1cm4gYnVmZmVyO1xufTtcblxuXG5mdW5jdGlvbiBoYW5kbGVFeGNlcHRpb24oZXhIYW5kbGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbih4Zm9ybSkge1xuICAgIHJldHVybiB7XG4gICAgICBcIkBAdHJhbnNkdWNlci9zdGVwXCI6IGZ1bmN0aW9uKGJ1ZmZlciwgaW5wdXQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4geGZvcm1bXCJAQHRyYW5zZHVjZXIvc3RlcFwiXShidWZmZXIsIGlucHV0KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBoYW5kbGVFeChidWZmZXIsIGV4SGFuZGxlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIkBAdHJhbnNkdWNlci9yZXN1bHRcIjogZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIHhmb3JtW1wiQEB0cmFuc2R1Y2VyL3Jlc3VsdFwiXShidWZmZXIpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZUV4KGJ1ZmZlciwgZXhIYW5kbGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH07XG59XG5cbi8vIFhYWDogVGhpcyBpcyBpbmNvbnNpc3RlbnQuIFdlIHNob3VsZCBlaXRoZXIgY2FsbCB0aGUgcmVkdWNpbmdcbi8vIGZ1bmN0aW9uIHhmb3JtLCBvciBjYWxsIHRoZSB0cmFuc2R1Y2VyIHhmb3JtLCBub3QgYm90aFxuZXhwb3J0cy5jaGFuID0gZnVuY3Rpb24oYnVmLCB4Zm9ybSwgZXhIYW5kbGVyKSB7XG4gIGlmICh4Zm9ybSkge1xuICAgIGlmICghYnVmKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IGJ1ZmZlcmVkIGNoYW5uZWxzIGNhbiB1c2UgdHJhbnNkdWNlcnNcIik7XG4gICAgfVxuXG4gICAgeGZvcm0gPSB4Zm9ybShuZXcgQWRkVHJhbnNmb3JtZXIoKSk7XG4gIH0gZWxzZSB7XG4gICAgeGZvcm0gPSBuZXcgQWRkVHJhbnNmb3JtZXIoKTtcbiAgfVxuICB4Zm9ybSA9IGhhbmRsZUV4Y2VwdGlvbihleEhhbmRsZXIpKHhmb3JtKTtcblxuICByZXR1cm4gbmV3IENoYW5uZWwoYnVmZmVycy5yaW5nKDMyKSwgYnVmZmVycy5yaW5nKDMyKSwgYnVmLCB4Zm9ybSk7XG59O1xuXG5leHBvcnRzLkJveCA9IEJveDtcbmV4cG9ydHMuQ2hhbm5lbCA9IENoYW5uZWw7XG5leHBvcnRzLkNMT1NFRCA9IENMT1NFRDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2pzLWNzcC9zcmMvaW1wbC9jaGFubmVscy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIFRPRE86IFVzZSBwcm9jZXNzLm5leHRUaWNrIGlmIGl0J3MgYXZhaWxhYmxlIHNpbmNlIGl0J3MgbW9yZVxuLy8gZWZmaWNpZW50XG4vLyBodHRwOi8vaG93dG9ub2RlLm9yZy91bmRlcnN0YW5kaW5nLXByb2Nlc3MtbmV4dC10aWNrXG4vLyBNYXliZSB3ZSBkb24ndCBldmVuIG5lZWQgdG8gcXVldWUgb3Vyc2VsdmVzIGluIHRoYXQgY2FzZT9cblxuLy8gWFhYOiBCdXQgaHR0cDovL2Jsb2cubm9kZWpzLm9yZy8yMDEzLzAzLzExL25vZGUtdjAtMTAtMC1zdGFibGUvXG4vLyBMb29rcyBsaWtlIGl0IHdpbGwgYmxvdyB1cCB0aGUgc3RhY2sgKG9yIGlzIHRoYXQganVzdCBhYm91dFxuLy8gcHJlLWVtcHRpbmcgSU8gKGJ1dCB0aGF0J3MgYWxyZWFkeSBiYWQgZW5vdWdoIElNTyk/KVxuXG4vLyBMb29rcyBsaWtlXG4vLyBodHRwOi8vbm9kZWpzLm9yZy9hcGkvcHJvY2Vzcy5odG1sI3Byb2Nlc3NfcHJvY2Vzc19uZXh0dGlja19jYWxsYmFja1xuLy8gaXMgdGhlIGVxdWl2YWxlbnQgb2Ygb3VyIFRBU0tfQkFUQ0hfU0laRVxuXG52YXIgYnVmZmVycyA9IHJlcXVpcmUoXCIuL2J1ZmZlcnNcIik7XG5cbnZhciBUQVNLX0JBVENIX1NJWkUgPSAxMDI0O1xuXG52YXIgdGFza3MgPSBidWZmZXJzLnJpbmcoMzIpO1xudmFyIHJ1bm5pbmcgPSBmYWxzZTtcbnZhciBxdWV1ZWQgPSBmYWxzZTtcblxudmFyIHF1ZXVlX2Rpc3BhdGNoZXI7XG5cbmZ1bmN0aW9uIHByb2Nlc3NfbWVzc2FnZXMoKSB7XG4gIHJ1bm5pbmcgPSB0cnVlO1xuICBxdWV1ZWQgPSBmYWxzZTtcbiAgdmFyIGNvdW50ID0gMDtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICB2YXIgdGFzayA9IHRhc2tzLnBvcCgpO1xuICAgIGlmICh0YXNrID09PSBidWZmZXJzLkVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gVE9ETzogRG9uJ3Qgd2UgbmVlZCBhIHRyeS9maW5hbGx5IGhlcmU/XG4gICAgdGFzaygpO1xuICAgIGlmIChjb3VudCA+PSBUQVNLX0JBVENIX1NJWkUpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb3VudCArKztcbiAgfVxuICBydW5uaW5nID0gZmFsc2U7XG4gIGlmICh0YXNrcy5sZW5ndGggPiAwKSB7XG4gICAgcXVldWVfZGlzcGF0Y2hlcigpO1xuICB9XG59XG5cbmlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgdmFyIG1lc3NhZ2VfY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICBtZXNzYWdlX2NoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oXykge1xuICAgIHByb2Nlc3NfbWVzc2FnZXMoKTtcbiAgfTtcbiAgcXVldWVfZGlzcGF0Y2hlciA9IGZ1bmN0aW9uKCkgIHtcbiAgICBpZiAoIShxdWV1ZWQgJiYgcnVubmluZykpIHtcbiAgICAgIHF1ZXVlZCA9IHRydWU7XG4gICAgICBtZXNzYWdlX2NoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gICAgfVxuICB9O1xufSBlbHNlIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIHF1ZXVlX2Rpc3BhdGNoZXIgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIShxdWV1ZWQgJiYgcnVubmluZykpIHtcbiAgICAgIHF1ZXVlZCA9IHRydWU7XG4gICAgICBzZXRJbW1lZGlhdGUocHJvY2Vzc19tZXNzYWdlcyk7XG4gICAgfVxuICB9O1xufSBlbHNlIHtcbiAgcXVldWVfZGlzcGF0Y2hlciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghKHF1ZXVlZCAmJiBydW5uaW5nKSkge1xuICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQocHJvY2Vzc19tZXNzYWdlcywgMCk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnRzLnJ1biA9IGZ1bmN0aW9uIChmKSB7XG4gIHRhc2tzLnVuYm91bmRlZF91bnNoaWZ0KGYpO1xuICBxdWV1ZV9kaXNwYXRjaGVyKCk7XG59O1xuXG5leHBvcnRzLnF1ZXVlX2RlbGF5ID0gZnVuY3Rpb24oZiwgZGVsYXkpIHtcbiAgc2V0VGltZW91dChmLCBkZWxheSk7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vanMtY3NwL3NyYy9pbXBsL2Rpc3BhdGNoLmpzXG4gKiogbW9kdWxlIGlkID0gMTk2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIEJveCA9IHJlcXVpcmUoXCIuL2NoYW5uZWxzXCIpLkJveDtcblxudmFyIEFsdEhhbmRsZXIgPSBmdW5jdGlvbihmbGFnLCBmKSB7XG4gIHRoaXMuZiA9IGY7XG4gIHRoaXMuZmxhZyA9IGZsYWc7XG59O1xuXG5BbHRIYW5kbGVyLnByb3RvdHlwZS5pc19hY3RpdmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZmxhZy52YWx1ZTtcbn07XG5cbkFsdEhhbmRsZXIucHJvdG90eXBlLmlzX2Jsb2NrYWJsZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkFsdEhhbmRsZXIucHJvdG90eXBlLmNvbW1pdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmZsYWcudmFsdWUgPSBmYWxzZTtcbiAgcmV0dXJuIHRoaXMuZjtcbn07XG5cbnZhciBBbHRSZXN1bHQgPSBmdW5jdGlvbih2YWx1ZSwgY2hhbm5lbCkge1xuICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG59O1xuXG5mdW5jdGlvbiByYW5kX2ludChuKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobiArIDEpKTtcbn1cblxuZnVuY3Rpb24gcmFuZG9tX2FycmF5KG4pIHtcbiAgdmFyIGEgPSBuZXcgQXJyYXkobik7XG4gIHZhciBpO1xuICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgYVtpXSA9IDA7XG4gIH1cbiAgZm9yIChpID0gMTsgaSA8IG47IGkrKykge1xuICAgIHZhciBqID0gcmFuZF9pbnQoaSk7XG4gICAgYVtpXSA9IGFbal07XG4gICAgYVtqXSA9IGk7XG4gIH1cbiAgcmV0dXJuIGE7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBERUZBVUxUID0ge1xuICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBERUZBVUxUXVwiO1xuICB9XG59O1xuXG4vLyBUT0RPOiBBY2NlcHQgYSBwcmlvcml0eSBmdW5jdGlvbiBvciBzb21ldGhpbmdcbmV4cG9ydHMuZG9fYWx0cyA9IGZ1bmN0aW9uKG9wZXJhdGlvbnMsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIHZhciBsZW5ndGggPSBvcGVyYXRpb25zLmxlbmd0aDtcbiAgLy8gWFhYIEhtbVxuICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRW1wdHkgYWx0IGxpc3RcIik7XG4gIH1cblxuICB2YXIgcHJpb3JpdHkgPSAob3B0aW9ucyAmJiBvcHRpb25zLnByaW9yaXR5KSA/IHRydWUgOiBmYWxzZTtcbiAgaWYgKCFwcmlvcml0eSkge1xuICAgIHZhciBpbmRleGVzID0gcmFuZG9tX2FycmF5KGxlbmd0aCk7XG4gIH1cblxuICB2YXIgZmxhZyA9IG5ldyBCb3godHJ1ZSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciBvcGVyYXRpb24gPSBvcGVyYXRpb25zW3ByaW9yaXR5ID8gaSA6IGluZGV4ZXNbaV1dO1xuICAgIHZhciBwb3J0LCByZXN1bHQ7XG4gICAgLy8gWFhYIEhtbVxuICAgIGlmIChvcGVyYXRpb24gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgdmFyIHZhbHVlID0gb3BlcmF0aW9uWzFdO1xuICAgICAgcG9ydCA9IG9wZXJhdGlvblswXTtcbiAgICAgIC8vIFdlIHdyYXAgdGhpcyBpbiBhIGZ1bmN0aW9uIHRvIGNhcHR1cmUgdGhlIHZhbHVlIG9mIFwicG9ydFwiLFxuICAgICAgLy8gYmVjYXVzZSBqcycgY2xvc3VyZSBjYXB0dXJlcyB2YXJzIGJ5IFwicmVmZXJlbmNlc1wiLCBub3RcbiAgICAgIC8vIHZhbHVlcy4gXCJsZXQgcG9ydFwiIHdvdWxkIGhhdmUgd29ya2VkLCBidXQgSSBkb24ndCB3YW50IHRvXG4gICAgICAvLyByYWlzZSB0aGUgcnVudGltZSByZXF1aXJlbWVudCB5ZXQuIFRPRE86IFNvIGNoYW5nZSB0aGlzIHdoZW5cbiAgICAgIC8vIG1vc3QgcnVudGltZXMgYXJlIG1vZGVybiBlbm91Z2guXG4gICAgICByZXN1bHQgPSBwb3J0Ll9wdXQodmFsdWUsIChmdW5jdGlvbihwb3J0KSB7XG4gICAgICAgIHJldHVybiBuZXcgQWx0SGFuZGxlcihmbGFnLCBmdW5jdGlvbihvaykge1xuICAgICAgICAgIGNhbGxiYWNrKG5ldyBBbHRSZXN1bHQob2ssIHBvcnQpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KShwb3J0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvcnQgPSBvcGVyYXRpb247XG4gICAgICByZXN1bHQgPSBwb3J0Ll90YWtlKChmdW5jdGlvbihwb3J0KSB7XG4gICAgICAgIHJldHVybiBuZXcgQWx0SGFuZGxlcihmbGFnLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIGNhbGxiYWNrKG5ldyBBbHRSZXN1bHQodmFsdWUsIHBvcnQpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KShwb3J0KSk7XG4gICAgfVxuICAgIC8vIFhYWCBIbW1cbiAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgQm94KSB7XG4gICAgICBjYWxsYmFjayhuZXcgQWx0UmVzdWx0KHJlc3VsdC52YWx1ZSwgcG9ydCkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKCEocmVzdWx0IGluc3RhbmNlb2YgQm94KVxuICAgICAgJiYgb3B0aW9uc1xuICAgICAgJiYgaGFzT3duUHJvcGVydHkuY2FsbChvcHRpb25zLCBcImRlZmF1bHRcIikpIHtcbiAgICBpZiAoZmxhZy52YWx1ZSkge1xuICAgICAgZmxhZy52YWx1ZSA9IGZhbHNlO1xuICAgICAgY2FsbGJhY2sobmV3IEFsdFJlc3VsdChvcHRpb25zW1wiZGVmYXVsdFwiXSwgREVGQVVMVCkpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0cy5ERUZBVUxUID0gREVGQVVMVDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2pzLWNzcC9zcmMvaW1wbC9zZWxlY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxOTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZGlzcGF0Y2ggPSByZXF1aXJlKFwiLi9kaXNwYXRjaFwiKTtcbnZhciBzZWxlY3QgPSByZXF1aXJlKFwiLi9zZWxlY3RcIik7XG52YXIgQ2hhbm5lbCA9IHJlcXVpcmUoXCIuL2NoYW5uZWxzXCIpLkNoYW5uZWw7XG5cbnZhciBOT19WQUxVRSA9IHt9O1xuXG52YXIgRm5IYW5kbGVyID0gZnVuY3Rpb24oYmxvY2thYmxlLCBmKSB7XG4gIHRoaXMuZiA9IGY7XG4gIHRoaXMuYmxvY2thYmxlID0gYmxvY2thYmxlO1xufTtcblxuRm5IYW5kbGVyLnByb3RvdHlwZS5pc19hY3RpdmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5GbkhhbmRsZXIucHJvdG90eXBlLmlzX2Jsb2NrYWJsZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5ibG9ja2FibGU7XG59O1xuXG5GbkhhbmRsZXIucHJvdG90eXBlLmNvbW1pdCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5mO1xufTtcblxuZnVuY3Rpb24gcHV0X3RoZW5fY2FsbGJhY2soY2hhbm5lbCwgdmFsdWUsIGNhbGxiYWNrKSB7XG4gIHZhciByZXN1bHQgPSBjaGFubmVsLl9wdXQodmFsdWUsIG5ldyBGbkhhbmRsZXIodHJ1ZSwgY2FsbGJhY2spKTtcbiAgaWYgKHJlc3VsdCAmJiBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHJlc3VsdC52YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGFrZV90aGVuX2NhbGxiYWNrKGNoYW5uZWwsIGNhbGxiYWNrKSB7XG4gIHZhciByZXN1bHQgPSBjaGFubmVsLl90YWtlKG5ldyBGbkhhbmRsZXIodHJ1ZSwgY2FsbGJhY2spKTtcbiAgaWYgKHJlc3VsdCkge1xuICAgIGNhbGxiYWNrKHJlc3VsdC52YWx1ZSk7XG4gIH1cbn1cblxudmFyIFByb2Nlc3MgPSBmdW5jdGlvbihnZW4sIG9uRmluaXNoLCBjcmVhdG9yKSB7XG4gIHRoaXMuZ2VuID0gZ2VuO1xuICB0aGlzLmNyZWF0b3JGdW5jID0gY3JlYXRvcjtcbiAgdGhpcy5maW5pc2hlZCA9IGZhbHNlO1xuICB0aGlzLm9uRmluaXNoID0gb25GaW5pc2g7XG59O1xuXG52YXIgSW5zdHJ1Y3Rpb24gPSBmdW5jdGlvbihvcCwgZGF0YSkge1xuICB0aGlzLm9wID0gb3A7XG4gIHRoaXMuZGF0YSA9IGRhdGE7XG59O1xuXG52YXIgVEFLRSA9IFwidGFrZVwiO1xudmFyIFBVVCA9IFwicHV0XCI7XG52YXIgU0xFRVAgPSBcInNsZWVwXCI7XG52YXIgQUxUUyA9IFwiYWx0c1wiO1xuXG4vLyBUT0RPIEZJWCBYWFg6IFRoaXMgaXMgYSAocHJvYmFibHkpIHRlbXBvcmFyeSBoYWNrIHRvIGF2b2lkIGJsb3dpbmdcbi8vIHVwIHRoZSBzdGFjaywgYnV0IGl0IG1lYW5zIGRvdWJsZSBxdWV1ZWluZyB3aGVuIHRoZSB2YWx1ZSBpcyBub3Rcbi8vIGltbWVkaWF0ZWx5IGF2YWlsYWJsZVxuUHJvY2Vzcy5wcm90b3R5cGUuX2NvbnRpbnVlID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBkaXNwYXRjaC5ydW4oZnVuY3Rpb24oKSB7XG4gICAgc2VsZi5ydW4ocmVzcG9uc2UpO1xuICB9KTtcbn07XG5cblByb2Nlc3MucHJvdG90eXBlLl9kb25lID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCF0aGlzLmZpbmlzaGVkKSB7XG4gICAgdGhpcy5maW5pc2hlZCA9IHRydWU7XG4gICAgdmFyIG9uRmluaXNoID0gdGhpcy5vbkZpbmlzaDtcbiAgICBpZiAodHlwZW9mIG9uRmluaXNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGRpc3BhdGNoLnJ1bihmdW5jdGlvbigpIHtcbiAgICAgICAgb25GaW5pc2godmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG5Qcm9jZXNzLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICBpZiAodGhpcy5maW5pc2hlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFRPRE86IFNob3VsZG4ndCB3ZSAob3B0aW9uYWxseSkgc3RvcCBlcnJvciBwcm9wYWdhdGlvbiBoZXJlIChhbmRcbiAgLy8gc2lnbmFsIHRoZSBlcnJvciB0aHJvdWdoIGEgY2hhbm5lbCBvciBzb21ldGhpbmcpPyBPdGhlcndpc2UgdGhlXG4gIC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3aWxsIGNyYXNoIHNvbWUgcnVudGltZXMgKGUuZy4gTm9kZSlcbiAgdmFyIGl0ZXIgPSB0aGlzLmdlbi5uZXh0KHJlc3BvbnNlKTtcbiAgaWYgKGl0ZXIuZG9uZSkge1xuICAgIHRoaXMuX2RvbmUoaXRlci52YWx1ZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGlucyA9IGl0ZXIudmFsdWU7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBpZiAoaW5zIGluc3RhbmNlb2YgSW5zdHJ1Y3Rpb24pIHtcbiAgICBzd2l0Y2ggKGlucy5vcCkge1xuICAgIGNhc2UgUFVUOlxuICAgICAgdmFyIGRhdGEgPSBpbnMuZGF0YTtcbiAgICAgIHB1dF90aGVuX2NhbGxiYWNrKGRhdGEuY2hhbm5lbCwgZGF0YS52YWx1ZSwgZnVuY3Rpb24ob2spIHtcbiAgICAgICAgc2VsZi5fY29udGludWUob2spO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgVEFLRTpcbiAgICAgIHZhciBjaGFubmVsID0gaW5zLmRhdGE7XG4gICAgICB0YWtlX3RoZW5fY2FsbGJhY2soY2hhbm5lbCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgc2VsZi5fY29udGludWUodmFsdWUpO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0xFRVA6XG4gICAgICB2YXIgbXNlY3MgPSBpbnMuZGF0YTtcbiAgICAgIGRpc3BhdGNoLnF1ZXVlX2RlbGF5KGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLnJ1bihudWxsKTtcbiAgICAgIH0sIG1zZWNzKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBBTFRTOlxuICAgICAgc2VsZWN0LmRvX2FsdHMoaW5zLmRhdGEub3BlcmF0aW9ucywgZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIHNlbGYuX2NvbnRpbnVlKHJlc3VsdCk7XG4gICAgICB9LCBpbnMuZGF0YS5vcHRpb25zKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBlbHNlIGlmKGlucyBpbnN0YW5jZW9mIENoYW5uZWwpIHtcbiAgICB2YXIgY2hhbm5lbCA9IGlucztcbiAgICB0YWtlX3RoZW5fY2FsbGJhY2soY2hhbm5lbCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHNlbGYuX2NvbnRpbnVlKHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuICBlbHNlIHtcbiAgICB0aGlzLl9jb250aW51ZShpbnMpO1xuICB9XG59O1xuXG5mdW5jdGlvbiB0YWtlKGNoYW5uZWwpIHtcbiAgcmV0dXJuIG5ldyBJbnN0cnVjdGlvbihUQUtFLCBjaGFubmVsKTtcbn1cblxuZnVuY3Rpb24gcHV0KGNoYW5uZWwsIHZhbHVlKSB7XG4gIHJldHVybiBuZXcgSW5zdHJ1Y3Rpb24oUFVULCB7XG4gICAgY2hhbm5lbDogY2hhbm5lbCxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBvbGwoY2hhbm5lbCkge1xuICBpZiAoY2hhbm5lbC5jbG9zZWQpIHtcbiAgICByZXR1cm4gTk9fVkFMVUU7XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gY2hhbm5lbC5fdGFrZShuZXcgRm5IYW5kbGVyKGZhbHNlKSk7XG4gIGlmIChyZXN1bHQpIHtcbiAgICByZXR1cm4gcmVzdWx0LnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBOT19WQUxVRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvZmZlcihjaGFubmVsLCB2YWx1ZSkge1xuICBpZiAoY2hhbm5lbC5jbG9zZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gY2hhbm5lbC5fcHV0KHZhbHVlLCBuZXcgRm5IYW5kbGVyKGZhbHNlKSk7XG4gIGlmIChyZXN1bHQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2xlZXAobXNlY3MpIHtcbiAgcmV0dXJuIG5ldyBJbnN0cnVjdGlvbihTTEVFUCwgbXNlY3MpO1xufVxuXG5mdW5jdGlvbiBhbHRzKG9wZXJhdGlvbnMsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBJbnN0cnVjdGlvbihBTFRTLCB7XG4gICAgb3BlcmF0aW9uczogb3BlcmF0aW9ucyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH0pO1xufVxuXG5leHBvcnRzLnB1dF90aGVuX2NhbGxiYWNrID0gcHV0X3RoZW5fY2FsbGJhY2s7XG5leHBvcnRzLnRha2VfdGhlbl9jYWxsYmFjayA9IHRha2VfdGhlbl9jYWxsYmFjaztcbmV4cG9ydHMucHV0ID0gcHV0O1xuZXhwb3J0cy50YWtlID0gdGFrZTtcbmV4cG9ydHMub2ZmZXIgPSBvZmZlcjtcbmV4cG9ydHMucG9sbCA9IHBvbGw7XG5leHBvcnRzLnNsZWVwID0gc2xlZXA7XG5leHBvcnRzLmFsdHMgPSBhbHRzO1xuZXhwb3J0cy5JbnN0cnVjdGlvbiA9IEluc3RydWN0aW9uO1xuZXhwb3J0cy5Qcm9jZXNzID0gUHJvY2VzcztcbmV4cG9ydHMuTk9fVkFMVUUgPSBOT19WQUxVRTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2pzLWNzcC9zcmMvaW1wbC9wcm9jZXNzLmpzXG4gKiogbW9kdWxlIGlkID0gMTk4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGRpc3BhdGNoID0gcmVxdWlyZShcIi4vZGlzcGF0Y2hcIik7XG52YXIgY2hhbm5lbHMgPSByZXF1aXJlKFwiLi9jaGFubmVsc1wiKTtcblxuZXhwb3J0cy50aW1lb3V0ID0gZnVuY3Rpb24gdGltZW91dF9jaGFubmVsKG1zZWNzKSB7XG4gIHZhciBjaGFuID0gY2hhbm5lbHMuY2hhbigpO1xuICBkaXNwYXRjaC5xdWV1ZV9kZWxheShmdW5jdGlvbigpIHtcbiAgICBjaGFuLmNsb3NlKCk7XG4gIH0sIG1zZWNzKTtcbiAgcmV0dXJuIGNoYW47XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vanMtY3NwL3NyYy9pbXBsL3RpbWVycy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBCb3ggPSByZXF1aXJlKFwiLi9pbXBsL2NoYW5uZWxzXCIpLkJveDtcblxudmFyIGNzcCA9IHJlcXVpcmUoXCIuL2NzcC5jb3JlXCIpLFxuICAgIGdvID0gY3NwLmdvLFxuICAgIHRha2UgPSBjc3AudGFrZSxcbiAgICBwdXQgPSBjc3AucHV0LFxuICAgIHRha2VBc3luYyA9IGNzcC50YWtlQXN5bmMsXG4gICAgcHV0QXN5bmMgPSBjc3AucHV0QXN5bmMsXG4gICAgYWx0cyA9IGNzcC5hbHRzLFxuICAgIGNoYW4gPSBjc3AuY2hhbixcbiAgICBDTE9TRUQgPSBjc3AuQ0xPU0VEO1xuXG5cbmZ1bmN0aW9uIG1hcEZyb20oZiwgY2gpIHtcbiAgcmV0dXJuIHtcbiAgICBpc19jbG9zZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGNoLmlzX2Nsb3NlZCgpO1xuICAgIH0sXG4gICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgY2guY2xvc2UoKTtcbiAgICB9LFxuICAgIF9wdXQ6IGZ1bmN0aW9uKHZhbHVlLCBoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gY2guX3B1dCh2YWx1ZSwgaGFuZGxlcik7XG4gICAgfSxcbiAgICBfdGFrZTogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgdmFyIHJlc3VsdCA9IGNoLl90YWtlKHtcbiAgICAgICAgaXNfYWN0aXZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlci5pc19hY3RpdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tbWl0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdGFrZV9jYiA9IGhhbmRsZXIuY29tbWl0KCk7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFrZV9jYih2YWx1ZSA9PT0gQ0xPU0VEID8gQ0xPU0VEIDogZih2YWx1ZSkpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIHJldHVybiBuZXcgQm94KHZhbHVlID09PSBDTE9TRUQgPyBDTE9TRUQgOiBmKHZhbHVlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcEludG8oZiwgY2gpIHtcbiAgcmV0dXJuIHtcbiAgICBpc19jbG9zZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGNoLmlzX2Nsb3NlZCgpO1xuICAgIH0sXG4gICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgY2guY2xvc2UoKTtcbiAgICB9LFxuICAgIF9wdXQ6IGZ1bmN0aW9uKHZhbHVlLCBoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gY2guX3B1dChmKHZhbHVlKSwgaGFuZGxlcik7XG4gICAgfSxcbiAgICBfdGFrZTogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgcmV0dXJuIGNoLl90YWtlKGhhbmRsZXIpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyRnJvbShwLCBjaCwgYnVmZmVyT3JOKSB7XG4gIHZhciBvdXQgPSBjaGFuKGJ1ZmZlck9yTik7XG4gIGdvKGZ1bmN0aW9uKigpIHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIHZhbHVlID0geWllbGQgdGFrZShjaCk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBvdXQuY2xvc2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAocCh2YWx1ZSkpIHtcbiAgICAgICAgeWllbGQgcHV0KG91dCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckludG8ocCwgY2gpIHtcbiAgcmV0dXJuIHtcbiAgICBpc19jbG9zZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGNoLmlzX2Nsb3NlZCgpO1xuICAgIH0sXG4gICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgY2guY2xvc2UoKTtcbiAgICB9LFxuICAgIF9wdXQ6IGZ1bmN0aW9uKHZhbHVlLCBoYW5kbGVyKSB7XG4gICAgICBpZiAocCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGNoLl9wdXQodmFsdWUsIGhhbmRsZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBCb3goIWNoLmlzX2Nsb3NlZCgpKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIF90YWtlOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gY2guX3Rha2UoaGFuZGxlcik7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmVGcm9tKHAsIGNoKSB7XG4gIHJldHVybiBmaWx0ZXJGcm9tKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuICFwKHZhbHVlKTtcbiAgfSwgY2gpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJbnRvKHAsIGNoKSB7XG4gIHJldHVybiBmaWx0ZXJJbnRvKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuICFwKHZhbHVlKTtcbiAgfSwgY2gpO1xufVxuXG5mdW5jdGlvbiogbWFwY2F0KGYsIHNyYywgZHN0KSB7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgdmFyIHZhbHVlID0geWllbGQgdGFrZShzcmMpO1xuICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICBkc3QuY2xvc2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc2VxID0gZih2YWx1ZSk7XG4gICAgICB2YXIgbGVuZ3RoID0gc2VxLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgeWllbGQgcHV0KGRzdCwgc2VxW2ldKTtcbiAgICAgIH1cbiAgICAgIGlmIChkc3QuaXNfY2xvc2VkKCkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcGNhdEZyb20oZiwgY2gsIGJ1ZmZlck9yTikge1xuICB2YXIgb3V0ID0gY2hhbihidWZmZXJPck4pO1xuICBnbyhtYXBjYXQsIFtmLCBjaCwgb3V0XSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIG1hcGNhdEludG8oZiwgY2gsIGJ1ZmZlck9yTikge1xuICB2YXIgc3JjID0gY2hhbihidWZmZXJPck4pO1xuICBnbyhtYXBjYXQsIFtmLCBzcmMsIGNoXSk7XG4gIHJldHVybiBzcmM7XG59XG5cbmZ1bmN0aW9uIHBpcGUoc3JjLCBkc3QsIGtlZXBPcGVuKSB7XG4gIGdvKGZ1bmN0aW9uKigpIHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIHZhbHVlID0geWllbGQgdGFrZShzcmMpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgaWYgKCFrZWVwT3Blbikge1xuICAgICAgICAgIGRzdC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKCEoeWllbGQgcHV0KGRzdCwgdmFsdWUpKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZHN0O1xufVxuXG5mdW5jdGlvbiBzcGxpdChwLCBjaCwgdHJ1ZUJ1ZmZlck9yTiwgZmFsc2VCdWZmZXJPck4pIHtcbiAgdmFyIHRjaCA9IGNoYW4odHJ1ZUJ1ZmZlck9yTik7XG4gIHZhciBmY2ggPSBjaGFuKGZhbHNlQnVmZmVyT3JOKTtcbiAgZ28oZnVuY3Rpb24qKCkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB2YXIgdmFsdWUgPSB5aWVsZCB0YWtlKGNoKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIHRjaC5jbG9zZSgpO1xuICAgICAgICBmY2guY2xvc2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB5aWVsZCBwdXQocCh2YWx1ZSkgPyB0Y2ggOiBmY2gsIHZhbHVlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gW3RjaCwgZmNoXTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlKGYsIGluaXQsIGNoKSB7XG4gIHJldHVybiBnbyhmdW5jdGlvbiooKSB7XG4gICAgdmFyIHJlc3VsdCA9IGluaXQ7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHlpZWxkIHRha2UoY2gpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGYocmVzdWx0LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIG9udG8oY2gsIGNvbGwsIGtlZXBPcGVuKSB7XG4gIHJldHVybiBnbyhmdW5jdGlvbiooKSB7XG4gICAgdmFyIGxlbmd0aCA9IGNvbGwubGVuZ3RoO1xuICAgIC8vIEZJWDogU2hvdWxkIGJlIGEgZ2VuZXJpYyBsb29waW5nIGludGVyZmFjZSAoZm9yLi4uaW4/KVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHlpZWxkIHB1dChjaCwgY29sbFtpXSk7XG4gICAgfVxuICAgIGlmICgha2VlcE9wZW4pIHtcbiAgICAgIGNoLmNsb3NlKCk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gVE9ETzogQm91bmRlZD9cbmZ1bmN0aW9uIGZyb21Db2xsKGNvbGwpIHtcbiAgdmFyIGNoID0gY2hhbihjb2xsLmxlbmd0aCk7XG4gIG9udG8oY2gsIGNvbGwpO1xuICByZXR1cm4gY2g7XG59XG5cbmZ1bmN0aW9uIG1hcChmLCBjaHMsIGJ1ZmZlck9yTikge1xuICB2YXIgb3V0ID0gY2hhbihidWZmZXJPck4pO1xuICB2YXIgbGVuZ3RoID0gY2hzLmxlbmd0aDtcbiAgLy8gQXJyYXkgaG9sZGluZyAxIHJvdW5kIG9mIHZhbHVlc1xuICB2YXIgdmFsdWVzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gIC8vIFRPRE86IE5vdCBzdXJlIHdoeSB3ZSBuZWVkIGEgc2l6ZS0xIGJ1ZmZlciBoZXJlXG4gIHZhciBkY2hhbiA9IGNoYW4oMSk7XG4gIC8vIEhvdyBtYW55IG1vcmUgaXRlbXMgdGhpcyByb3VuZFxuICB2YXIgZGNvdW50O1xuICAvLyBwdXQgY2FsbGJhY2tzIGZvciBlYWNoIGNoYW5uZWxcbiAgdmFyIGRjYWxsYmFja3MgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKyspIHtcbiAgICBkY2FsbGJhY2tzW2ldID0gKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB2YWx1ZXNbaV0gPSB2YWx1ZTtcbiAgICAgICAgZGNvdW50IC0tO1xuICAgICAgICBpZiAoZGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgcHV0QXN5bmMoZGNoYW4sIHZhbHVlcy5zbGljZSgwKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfShpKSk7XG4gIH1cbiAgZ28oZnVuY3Rpb24qKCkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBkY291bnQgPSBsZW5ndGg7XG4gICAgICAvLyBXZSBjb3VsZCBqdXN0IGxhdW5jaCBuIGdvcm91dGluZXMgaGVyZSwgYnV0IGZvciBlZmZjaWVuY3kgd2VcbiAgICAgIC8vIGRvbid0XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArKykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRha2VBc3luYyhjaHNbaV0sIGRjYWxsYmFja3NbaV0pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gRklYOiBIbW0gd2h5IGNhdGNoaW5nIGhlcmU/XG4gICAgICAgICAgZGNvdW50IC0tO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgdmFsdWVzID0geWllbGQgdGFrZShkY2hhbik7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpICsrKSB7XG4gICAgICAgIGlmICh2YWx1ZXNbaV0gPT09IENMT1NFRCkge1xuICAgICAgICAgIG91dC5jbG9zZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgeWllbGQgcHV0KG91dCwgZi5hcHBseShudWxsLCB2YWx1ZXMpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBtZXJnZShjaHMsIGJ1ZmZlck9yTikge1xuICB2YXIgb3V0ID0gY2hhbihidWZmZXJPck4pO1xuICB2YXIgYWN0aXZlcyA9IGNocy5zbGljZSgwKTtcbiAgZ28oZnVuY3Rpb24qKCkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAoYWN0aXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB2YXIgciA9IHlpZWxkIGFsdHMoYWN0aXZlcyk7XG4gICAgICB2YXIgdmFsdWUgPSByLnZhbHVlO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGNsb3NlZCBjaGFubmVsXG4gICAgICAgIHZhciBpID0gYWN0aXZlcy5pbmRleE9mKHIuY2hhbm5lbCk7XG4gICAgICAgIGFjdGl2ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHlpZWxkIHB1dChvdXQsIHZhbHVlKTtcbiAgICB9XG4gICAgb3V0LmNsb3NlKCk7XG4gIH0pO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBpbnRvKGNvbGwsIGNoKSB7XG4gIHZhciByZXN1bHQgPSBjb2xsLnNsaWNlKDApO1xuICByZXR1cm4gcmVkdWNlKGZ1bmN0aW9uKHJlc3VsdCwgaXRlbSkge1xuICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIHJlc3VsdCwgY2gpO1xufVxuXG5mdW5jdGlvbiB0YWtlTihuLCBjaCwgYnVmZmVyT3JOKSB7XG4gIHZhciBvdXQgPSBjaGFuKGJ1ZmZlck9yTik7XG4gIGdvKGZ1bmN0aW9uKigpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkgKyspIHtcbiAgICAgIHZhciB2YWx1ZSA9IHlpZWxkIHRha2UoY2gpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB5aWVsZCBwdXQob3V0LCB2YWx1ZSk7XG4gICAgfVxuICAgIG91dC5jbG9zZSgpO1xuICB9KTtcbiAgcmV0dXJuIG91dDtcbn1cblxudmFyIE5PVEhJTkcgPSB7fTtcblxuZnVuY3Rpb24gdW5pcXVlKGNoLCBidWZmZXJPck4pIHtcbiAgdmFyIG91dCA9IGNoYW4oYnVmZmVyT3JOKTtcbiAgdmFyIGxhc3QgPSBOT1RISU5HO1xuICBnbyhmdW5jdGlvbiooKSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHlpZWxkIHRha2UoY2gpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUgPT09IGxhc3QpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBsYXN0ID0gdmFsdWU7XG4gICAgICB5aWVsZCBwdXQob3V0LCB2YWx1ZSk7XG4gICAgfVxuICAgIG91dC5jbG9zZSgpO1xuICB9KTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gcGFydGl0aW9uQnkoZiwgY2gsIGJ1ZmZlck9yTikge1xuICB2YXIgb3V0ID0gY2hhbihidWZmZXJPck4pO1xuICB2YXIgcGFydCA9IFtdO1xuICB2YXIgbGFzdCA9IE5PVEhJTkc7XG4gIGdvKGZ1bmN0aW9uKigpIHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIHZhbHVlID0geWllbGQgdGFrZShjaCk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBpZiAocGFydC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgeWllbGQgcHV0KG91dCwgcGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgb3V0LmNsb3NlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG5ld0l0ZW0gPSBmKHZhbHVlKTtcbiAgICAgICAgaWYgKG5ld0l0ZW0gPT09IGxhc3QgfHwgbGFzdCA9PT0gTk9USElORykge1xuICAgICAgICAgIHBhcnQucHVzaCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeWllbGQgcHV0KG91dCwgcGFydCk7XG4gICAgICAgICAgcGFydCA9IFt2YWx1ZV07XG4gICAgICAgIH1cbiAgICAgICAgbGFzdCA9IG5ld0l0ZW07XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gcGFydGl0aW9uKG4sIGNoLCBidWZmZXJPck4pIHtcbiAgdmFyIG91dCA9IGNoYW4oYnVmZmVyT3JOKTtcbiAgZ28oZnVuY3Rpb24qKCkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB2YXIgcGFydCA9IG5ldyBBcnJheShuKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHlpZWxkIHRha2UoY2gpO1xuICAgICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgeWllbGQgcHV0KG91dCwgcGFydC5zbGljZSgwLCBpKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG91dC5jbG9zZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0W2ldID0gdmFsdWU7XG4gICAgICB9XG4gICAgICB5aWVsZCBwdXQob3V0LCBwYXJ0KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0O1xufVxuXG4vLyBGb3IgY2hhbm5lbCBpZGVudGlmaWNhdGlvblxudmFyIGdlbklkID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgaSA9IDA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpICsrO1xuICAgIHJldHVybiBcIlwiICsgaTtcbiAgfTtcbn0pKCk7XG5cbnZhciBJRF9BVFRSID0gXCJfX2NzcF9jaGFubmVsX2lkXCI7XG5cbi8vIFRPRE86IERvIHdlIG5lZWQgdG8gY2hlY2sgd2l0aCBoYXNPd25Qcm9wZXJ0eT9cbmZ1bmN0aW9uIGxlbihvYmopIHtcbiAgdmFyIGNvdW50ID0gMDtcbiAgZm9yICh2YXIgcCBpbiBvYmopIHtcbiAgICBjb3VudCArKztcbiAgfVxuICByZXR1cm4gY291bnQ7XG59XG5cbmZ1bmN0aW9uIGNoYW5JZChjaCkge1xuICB2YXIgaWQgPSBjaFtJRF9BVFRSXTtcbiAgaWYgKGlkID09PSB1bmRlZmluZWQpIHtcbiAgICBpZCA9IGNoW0lEX0FUVFJdID0gZ2VuSWQoKTtcbiAgfVxuICByZXR1cm4gaWQ7XG59XG5cbnZhciBNdWx0ID0gZnVuY3Rpb24oY2gpIHtcbiAgdGhpcy50YXBzID0ge307XG4gIHRoaXMuY2ggPSBjaDtcbn07XG5cbnZhciBUYXAgPSBmdW5jdGlvbihjaGFubmVsLCBrZWVwT3Blbikge1xuICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuICB0aGlzLmtlZXBPcGVuID0ga2VlcE9wZW47XG59O1xuXG5NdWx0LnByb3RvdHlwZS5tdXhjaCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5jaDtcbn07XG5cbk11bHQucHJvdG90eXBlLnRhcCA9IGZ1bmN0aW9uKGNoLCBrZWVwT3Blbikge1xuICB2YXIgaWQgPSBjaGFuSWQoY2gpO1xuICB0aGlzLnRhcHNbaWRdID0gbmV3IFRhcChjaCwga2VlcE9wZW4pO1xufTtcblxuTXVsdC5wcm90b3R5cGUudW50YXAgPSBmdW5jdGlvbihjaCkge1xuICBkZWxldGUgdGhpcy50YXBzW2NoYW5JZChjaCldO1xufTtcblxuTXVsdC5wcm90b3R5cGUudW50YXBBbGwgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy50YXBzID0ge307XG59O1xuXG5mdW5jdGlvbiBtdWx0KGNoKSB7XG4gIHZhciBtID0gbmV3IE11bHQoY2gpO1xuICB2YXIgZGNoYW4gPSBjaGFuKDEpO1xuICB2YXIgZGNvdW50O1xuICBmdW5jdGlvbiBtYWtlRG9uZUNhbGxiYWNrKHRhcCkge1xuICAgIHJldHVybiBmdW5jdGlvbihzdGlsbE9wZW4pIHtcbiAgICAgIGRjb3VudCAtLTtcbiAgICAgIGlmIChkY291bnQgPT09IDApIHtcbiAgICAgICAgcHV0QXN5bmMoZGNoYW4sIHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKCFzdGlsbE9wZW4pIHtcbiAgICAgICAgbS51bnRhcCh0YXAuY2hhbm5lbCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBnbyhmdW5jdGlvbiooKSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHlpZWxkIHRha2UoY2gpO1xuICAgICAgdmFyIGlkLCB0O1xuICAgICAgdmFyIHRhcHMgPSBtLnRhcHM7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBmb3IgKGlkIGluIHRhcHMpIHtcbiAgICAgICAgICB0ID0gdGFwc1tpZF07XG4gICAgICAgICAgaWYgKCF0LmtlZXBPcGVuKSB7XG4gICAgICAgICAgICB0LmNoYW5uZWwuY2xvc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVE9ETzogSXMgdGhpcyBuZWNlc3Nhcnk/XG4gICAgICAgIG0udW50YXBBbGwoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkY291bnQgPSBsZW4odGFwcyk7XG4gICAgICAvLyBYWFg6IFRoaXMgaXMgYmVjYXVzZSBwdXRBc3luYyBjYW4gYWN0dWFsbHkgY2FsbCBiYWNrXG4gICAgICAvLyBpbW1lZGlhdGVseS4gRml4IHRoYXRcbiAgICAgIHZhciBpbml0RGNvdW50ID0gZGNvdW50O1xuICAgICAgLy8gUHV0IHZhbHVlIG9uIHRhcHBpbmcgY2hhbm5lbHMuLi5cbiAgICAgIGZvciAoaWQgaW4gdGFwcykge1xuICAgICAgICB0ID0gdGFwc1tpZF07XG4gICAgICAgIHB1dEFzeW5jKHQuY2hhbm5lbCwgdmFsdWUsIG1ha2VEb25lQ2FsbGJhY2sodCkpO1xuICAgICAgfVxuICAgICAgLy8gLi4uIHdhaXRpbmcgZm9yIGFsbCBwdXRzIHRvIGNvbXBsZXRlXG4gICAgICBpZiAoaW5pdERjb3VudCA+IDApIHtcbiAgICAgICAgeWllbGQgdGFrZShkY2hhbik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG07XG59XG5cbm11bHQudGFwID0gZnVuY3Rpb24gdGFwKG0sIGNoLCBrZWVwT3Blbikge1xuICBtLnRhcChjaCwga2VlcE9wZW4pO1xuICByZXR1cm4gY2g7XG59O1xuXG5tdWx0LnVudGFwID0gZnVuY3Rpb24gdW50YXAobSwgY2gpIHtcbiAgbS51bnRhcChjaCk7XG59O1xuXG5tdWx0LnVudGFwQWxsID0gZnVuY3Rpb24gdW50YXBBbGwobSkge1xuICBtLnVudGFwQWxsKCk7XG59O1xuXG52YXIgTWl4ID0gZnVuY3Rpb24oY2gpIHtcbiAgdGhpcy5jaCA9IGNoO1xuICB0aGlzLnN0YXRlTWFwID0ge307XG4gIHRoaXMuY2hhbmdlID0gY2hhbigpO1xuICB0aGlzLnNvbG9Nb2RlID0gbWl4Lk1VVEU7XG59O1xuXG5NaXgucHJvdG90eXBlLl9jaGFuZ2VkID0gZnVuY3Rpb24oKSB7XG4gIHB1dEFzeW5jKHRoaXMuY2hhbmdlLCB0cnVlKTtcbn07XG5cbk1peC5wcm90b3R5cGUuX2dldEFsbFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBhbGxTdGF0ZSA9IHt9O1xuICB2YXIgc3RhdGVNYXAgPSB0aGlzLnN0YXRlTWFwO1xuICB2YXIgc29sb3MgPSBbXTtcbiAgdmFyIG11dGVzID0gW107XG4gIHZhciBwYXVzZXMgPSBbXTtcbiAgdmFyIHJlYWRzO1xuICBmb3IgKHZhciBpZCBpbiBzdGF0ZU1hcCkge1xuICAgIHZhciBjaGFuRGF0YSA9IHN0YXRlTWFwW2lkXTtcbiAgICB2YXIgc3RhdGUgPSBjaGFuRGF0YS5zdGF0ZTtcbiAgICB2YXIgY2hhbm5lbCA9IGNoYW5EYXRhLmNoYW5uZWw7XG4gICAgaWYgKHN0YXRlW21peC5TT0xPXSkge1xuICAgICAgc29sb3MucHVzaChjaGFubmVsKTtcbiAgICB9XG4gICAgLy8gVE9ET1xuICAgIGlmIChzdGF0ZVttaXguTVVURV0pIHtcbiAgICAgIG11dGVzLnB1c2goY2hhbm5lbCk7XG4gICAgfVxuICAgIGlmIChzdGF0ZVttaXguUEFVU0VdKSB7XG4gICAgICBwYXVzZXMucHVzaChjaGFubmVsKTtcbiAgICB9XG4gIH1cbiAgdmFyIGksIG47XG4gIGlmICh0aGlzLnNvbG9Nb2RlID09PSBtaXguUEFVU0UgJiYgc29sb3MubGVuZ3RoID4gMCkge1xuICAgIG4gPSBzb2xvcy5sZW5ndGg7XG4gICAgcmVhZHMgPSBuZXcgQXJyYXkobiArIDEpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIHJlYWRzW2ldID0gc29sb3NbaV07XG4gICAgfVxuICAgIHJlYWRzW25dID0gdGhpcy5jaGFuZ2U7XG4gIH0gZWxzZSB7XG4gICAgcmVhZHMgPSBbXTtcbiAgICBmb3IgKGlkIGluIHN0YXRlTWFwKSB7XG4gICAgICBjaGFuRGF0YSA9IHN0YXRlTWFwW2lkXTtcbiAgICAgIGNoYW5uZWwgPSBjaGFuRGF0YS5jaGFubmVsO1xuICAgICAgaWYgKHBhdXNlcy5pbmRleE9mKGNoYW5uZWwpIDwgMCkge1xuICAgICAgICByZWFkcy5wdXNoKGNoYW5uZWwpO1xuICAgICAgfVxuICAgIH1cbiAgICByZWFkcy5wdXNoKHRoaXMuY2hhbmdlKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc29sb3M6IHNvbG9zLFxuICAgIG11dGVzOiBtdXRlcyxcbiAgICByZWFkczogcmVhZHNcbiAgfTtcbn07XG5cbk1peC5wcm90b3R5cGUuYWRtaXggPSBmdW5jdGlvbihjaCkge1xuICB0aGlzLnN0YXRlTWFwW2NoYW5JZChjaCldID0ge1xuICAgIGNoYW5uZWw6IGNoLFxuICAgIHN0YXRlOiB7fVxuICB9O1xuICB0aGlzLl9jaGFuZ2VkKCk7XG59O1xuXG5NaXgucHJvdG90eXBlLnVubWl4ID0gZnVuY3Rpb24oY2gpIHtcbiAgZGVsZXRlIHRoaXMuc3RhdGVNYXBbY2hhbklkKGNoKV07XG4gIHRoaXMuX2NoYW5nZWQoKTtcbn07XG5cbk1peC5wcm90b3R5cGUudW5taXhBbGwgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zdGF0ZU1hcCA9IHt9O1xuICB0aGlzLl9jaGFuZ2VkKCk7XG59O1xuXG5NaXgucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKHVwZGF0ZVN0YXRlTGlzdCkge1xuICAvLyBbW2NoMSwge31dLCBbY2gyLCB7c29sbzogdHJ1ZX1dXTtcbiAgdmFyIGxlbmd0aCA9IHVwZGF0ZVN0YXRlTGlzdC5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY2ggPSB1cGRhdGVTdGF0ZUxpc3RbaV1bMF07XG4gICAgdmFyIGlkID0gY2hhbklkKGNoKTtcbiAgICB2YXIgdXBkYXRlU3RhdGUgPSB1cGRhdGVTdGF0ZUxpc3RbaV1bMV07XG4gICAgdmFyIGNoYW5EYXRhID0gdGhpcy5zdGF0ZU1hcFtpZF07XG4gICAgaWYgKCFjaGFuRGF0YSkge1xuICAgICAgY2hhbkRhdGEgPSB0aGlzLnN0YXRlTWFwW2lkXSA9IHtcbiAgICAgICAgY2hhbm5lbDogY2gsXG4gICAgICAgIHN0YXRlOiB7fVxuICAgICAgfTtcbiAgICB9XG4gICAgZm9yICh2YXIgbW9kZSBpbiB1cGRhdGVTdGF0ZSkge1xuICAgICAgY2hhbkRhdGEuc3RhdGVbbW9kZV0gPSB1cGRhdGVTdGF0ZVttb2RlXTtcbiAgICB9XG4gIH1cbiAgdGhpcy5fY2hhbmdlZCgpO1xufTtcblxuTWl4LnByb3RvdHlwZS5zZXRTb2xvTW9kZSA9IGZ1bmN0aW9uKG1vZGUpIHtcbiAgaWYgKFZBTElEX1NPTE9fTU9ERVMuaW5kZXhPZihtb2RlKSA8IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNb2RlIG11c3QgYmUgb25lIG9mOiBcIiwgVkFMSURfU09MT19NT0RFUy5qb2luKFwiLCBcIikpO1xuICB9XG4gIHRoaXMuc29sb01vZGUgPSBtb2RlO1xuICB0aGlzLl9jaGFuZ2VkKCk7XG59O1xuXG5mdW5jdGlvbiBtaXgob3V0KSB7XG4gIHZhciBtID0gbmV3IE1peChvdXQpO1xuICBnbyhmdW5jdGlvbiooKSB7XG4gICAgdmFyIHN0YXRlID0gbS5fZ2V0QWxsU3RhdGUoKTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIHJlc3VsdCA9IHlpZWxkIGFsdHMoc3RhdGUucmVhZHMpO1xuICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgdmFyIGNoYW5uZWwgPSByZXN1bHQuY2hhbm5lbDtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIGRlbGV0ZSBtLnN0YXRlTWFwW2NoYW5JZChjaGFubmVsKV07XG4gICAgICAgIHN0YXRlID0gbS5fZ2V0QWxsU3RhdGUoKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbm5lbCA9PT0gbS5jaGFuZ2UpIHtcbiAgICAgICAgc3RhdGUgPSBtLl9nZXRBbGxTdGF0ZSgpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHZhciBzb2xvcyA9IHN0YXRlLnNvbG9zO1xuICAgICAgaWYgKHNvbG9zLmluZGV4T2YoY2hhbm5lbCkgPiAtMSB8fFxuICAgICAgICAgIChzb2xvcy5sZW5ndGggPT09IDAgJiYgIShzdGF0ZS5tdXRlcy5pbmRleE9mKGNoYW5uZWwpID4gLTEpKSkge1xuICAgICAgICB2YXIgc3RpbGxPcGVuID0geWllbGQgcHV0KG91dCwgdmFsdWUpO1xuICAgICAgICBpZiAoIXN0aWxsT3Blbikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG07XG59XG5cbm1peC5NVVRFID0gXCJtdXRlXCI7XG5taXguUEFVU0UgPSBcInBhdXNlXCI7XG5taXguU09MTyA9IFwic29sb1wiO1xudmFyIFZBTElEX1NPTE9fTU9ERVMgPSBbbWl4Lk1VVEUsIG1peC5QQVVTRV07XG5cbm1peC5hZGQgPSBmdW5jdGlvbiBhZG1peChtLCBjaCkge1xuICBtLmFkbWl4KGNoKTtcbn07XG5cbm1peC5yZW1vdmUgPSBmdW5jdGlvbiB1bm1peChtLCBjaCkge1xuICBtLnVubWl4KGNoKTtcbn07XG5cbm1peC5yZW1vdmVBbGwgPSBmdW5jdGlvbiB1bm1peEFsbChtKSB7XG4gIG0udW5taXhBbGwoKTtcbn07XG5cbm1peC50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUobSwgdXBkYXRlU3RhdGVMaXN0KSB7XG4gIG0udG9nZ2xlKHVwZGF0ZVN0YXRlTGlzdCk7XG59O1xuXG5taXguc2V0U29sb01vZGUgPSBmdW5jdGlvbiBzZXRTb2xvTW9kZShtLCBtb2RlKSB7XG4gIG0uc2V0U29sb01vZGUobW9kZSk7XG59O1xuXG5mdW5jdGlvbiBjb25zdGFudGx5TnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBQdWIgPSBmdW5jdGlvbihjaCwgdG9waWNGbiwgYnVmZmVyRm4pIHtcbiAgdGhpcy5jaCA9IGNoO1xuICB0aGlzLnRvcGljRm4gPSB0b3BpY0ZuO1xuICB0aGlzLmJ1ZmZlckZuID0gYnVmZmVyRm47XG4gIHRoaXMubXVsdHMgPSB7fTtcbn07XG5cblB1Yi5wcm90b3R5cGUuX2Vuc3VyZU11bHQgPSBmdW5jdGlvbih0b3BpYykge1xuICB2YXIgbSA9IHRoaXMubXVsdHNbdG9waWNdO1xuICB2YXIgYnVmZmVyRm4gPSB0aGlzLmJ1ZmZlckZuO1xuICBpZiAoIW0pIHtcbiAgICBtID0gdGhpcy5tdWx0c1t0b3BpY10gPSBtdWx0KGNoYW4oYnVmZmVyRm4odG9waWMpKSk7XG4gIH1cbiAgcmV0dXJuIG07XG59O1xuXG5QdWIucHJvdG90eXBlLnN1YiA9IGZ1bmN0aW9uKHRvcGljLCBjaCwga2VlcE9wZW4pIHtcbiAgdmFyIG0gPSB0aGlzLl9lbnN1cmVNdWx0KHRvcGljKTtcbiAgcmV0dXJuIG11bHQudGFwKG0sIGNoLCBrZWVwT3Blbik7XG59O1xuXG5QdWIucHJvdG90eXBlLnVuc3ViID0gZnVuY3Rpb24odG9waWMsIGNoKSB7XG4gIHZhciBtID0gdGhpcy5tdWx0c1t0b3BpY107XG4gIGlmIChtKSB7XG4gICAgbXVsdC51bnRhcChtLCBjaCk7XG4gIH1cbn07XG5cblB1Yi5wcm90b3R5cGUudW5zdWJBbGwgPSBmdW5jdGlvbih0b3BpYykge1xuICBpZiAodG9waWMgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMubXVsdHMgPSB7fTtcbiAgfSBlbHNlIHtcbiAgICBkZWxldGUgdGhpcy5tdWx0c1t0b3BpY107XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHB1YihjaCwgdG9waWNGbiwgYnVmZmVyRm4pIHtcbiAgYnVmZmVyRm4gPSBidWZmZXJGbiB8fCBjb25zdGFudGx5TnVsbDtcbiAgdmFyIHAgPSBuZXcgUHViKGNoLCB0b3BpY0ZuLCBidWZmZXJGbik7XG4gIGdvKGZ1bmN0aW9uKigpIHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIHZhbHVlID0geWllbGQgdGFrZShjaCk7XG4gICAgICB2YXIgbXVsdHMgPSBwLm11bHRzO1xuICAgICAgdmFyIHRvcGljO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgZm9yICh0b3BpYyBpbiBtdWx0cykge1xuICAgICAgICAgIG11bHRzW3RvcGljXS5tdXhjaCgpLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvLyBUT0RPOiBTb21laG93IGVuc3VyZS9kb2N1bWVudCB0aGF0IHRoaXMgbXVzdCByZXR1cm4gYSBzdHJpbmdcbiAgICAgIC8vIChvdGhlcndpc2UgdXNlIHByb3BlciAoaGFzaCltYXBzKVxuICAgICAgdG9waWMgPSB0b3BpY0ZuKHZhbHVlKTtcbiAgICAgIHZhciBtID0gbXVsdHNbdG9waWNdO1xuICAgICAgaWYgKG0pIHtcbiAgICAgICAgdmFyIHN0aWxsT3BlbiA9IHlpZWxkIHB1dChtLm11eGNoKCksIHZhbHVlKTtcbiAgICAgICAgaWYgKCFzdGlsbE9wZW4pIHtcbiAgICAgICAgICBkZWxldGUgbXVsdHNbdG9waWNdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHA7XG59XG5cbnB1Yi5zdWIgPSBmdW5jdGlvbiBzdWIocCwgdG9waWMsIGNoLCBrZWVwT3Blbikge1xuICByZXR1cm4gcC5zdWIodG9waWMsIGNoLCBrZWVwT3Blbik7XG59O1xuXG5wdWIudW5zdWIgPSBmdW5jdGlvbiB1bnN1YihwLCB0b3BpYywgY2gpIHtcbiAgcC51bnN1Yih0b3BpYywgY2gpO1xufTtcblxucHViLnVuc3ViQWxsID0gZnVuY3Rpb24gdW5zdWJBbGwocCwgdG9waWMpIHtcbiAgcC51bnN1YkFsbCh0b3BpYyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWFwRnJvbTogbWFwRnJvbSxcbiAgbWFwSW50bzogbWFwSW50byxcbiAgZmlsdGVyRnJvbTogZmlsdGVyRnJvbSxcbiAgZmlsdGVySW50bzogZmlsdGVySW50byxcbiAgcmVtb3ZlRnJvbTogcmVtb3ZlRnJvbSxcbiAgcmVtb3ZlSW50bzogcmVtb3ZlSW50byxcbiAgbWFwY2F0RnJvbTogbWFwY2F0RnJvbSxcbiAgbWFwY2F0SW50bzogbWFwY2F0SW50byxcblxuICBwaXBlOiBwaXBlLFxuICBzcGxpdDogc3BsaXQsXG4gIHJlZHVjZTogcmVkdWNlLFxuICBvbnRvOiBvbnRvLFxuICBmcm9tQ29sbDogZnJvbUNvbGwsXG5cbiAgbWFwOiBtYXAsXG4gIG1lcmdlOiBtZXJnZSxcbiAgaW50bzogaW50byxcbiAgdGFrZTogdGFrZU4sXG4gIHVuaXF1ZTogdW5pcXVlLFxuICBwYXJ0aXRpb246IHBhcnRpdGlvbixcbiAgcGFydGl0aW9uQnk6IHBhcnRpdGlvbkJ5LFxuXG4gIG11bHQ6IG11bHQsXG4gIG1peDogbWl4LFxuICBwdWI6IHB1YlxufTtcblxuXG4vLyBQb3NzaWJsZSBcImZsdWlkXCIgaW50ZXJmYWNlczpcblxuLy8gdGhyZWFkKFxuLy8gICBbZnJvbUNvbGwsIFsxLCAyLCAzLCA0XV0sXG4vLyAgIFttYXBGcm9tLCBpbmNdLFxuLy8gICBbaW50bywgW11dXG4vLyApXG5cbi8vIHRocmVhZChcbi8vICAgW2Zyb21Db2xsLCBbMSwgMiwgMywgNF1dLFxuLy8gICBbbWFwRnJvbSwgaW5jLCBfXSxcbi8vICAgW2ludG8sIFtdLCBfXVxuLy8gKVxuXG4vLyB3cmFwKClcbi8vICAgLmZyb21Db2xsKFsxLCAyLCAzLCA0XSlcbi8vICAgLm1hcEZyb20oaW5jKVxuLy8gICAuaW50byhbXSlcbi8vICAgLnVud3JhcCgpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vanMtY3NwL3NyYy9jc3Aub3BlcmF0aW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDIwMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjc3AgPSByZXF1aXJlKCcuL2NzcC5jb3JlJyk7XG5cbmZ1bmN0aW9uIHBpcGVsaW5lSW50ZXJuYWwobiwgdG8sIGZyb20sIGNsb3NlLCB0YXNrRm4pIHtcbiAgaWYgKG4gPD0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignbiBtdXN0IGJlIHBvc2l0aXZlJyk7XG4gIH1cblxuICB2YXIgam9icyA9IGNzcC5jaGFuKG4pO1xuICB2YXIgcmVzdWx0cyA9IGNzcC5jaGFuKG4pO1xuXG4gIGZvcih2YXIgXyA9IDA7IF8gPCBuOyBfKyspIHtcbiAgICBjc3AuZ28oZnVuY3Rpb24qICh0YXNrRm4sIGpvYnMsIHJlc3VsdHMpIHtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBqb2IgPSB5aWVsZCBjc3AudGFrZShqb2JzKTtcblxuICAgICAgICBpZiAoIXRhc2tGbihqb2IpKSB7XG4gICAgICAgICAgcmVzdWx0cy5jbG9zZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW3Rhc2tGbiwgam9icywgcmVzdWx0c10pO1xuICB9XG5cbiAgY3NwLmdvKGZ1bmN0aW9uKiAoam9icywgZnJvbSwgcmVzdWx0cykge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB2YXIgdiA9IHlpZWxkIGNzcC50YWtlKGZyb20pO1xuICAgICAgaWYgKHYgPT09IGNzcC5DTE9TRUQpIHtcbiAgICAgICAgam9icy5jbG9zZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBwID0gY3NwLmNoYW4oMSk7XG5cbiAgICAgICAgeWllbGQgY3NwLnB1dChqb2JzLCBbdiwgcF0pO1xuICAgICAgICB5aWVsZCBjc3AucHV0KHJlc3VsdHMsIHApO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2pvYnMsIGZyb20sIHJlc3VsdHNdKTtcblxuICBjc3AuZ28oZnVuY3Rpb24qIChyZXN1bHRzLCBjbG9zZSwgdG8pIHtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgcCA9IHlpZWxkIGNzcC50YWtlKHJlc3VsdHMpO1xuICAgICAgaWYgKHAgPT09IGNzcC5DTE9TRUQpIHtcbiAgICAgICAgaWYgKGNsb3NlKSB7XG4gICAgICAgICAgdG8uY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXMgPSB5aWVsZCBjc3AudGFrZShwKTtcbiAgICAgICAgd2hpbGUodHJ1ZSkge1xuICAgICAgICAgIHZhciB2ID0geWllbGQgY3NwLnRha2UocmVzKTtcbiAgICAgICAgICBpZiAodiAhPT0gY3NwLkNMT1NFRCkge1xuICAgICAgICAgICAgeWllbGQgY3NwLnB1dCh0bywgdik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Jlc3VsdHMsIGNsb3NlLCB0b10pO1xuXG4gIHJldHVybiB0bztcbn1cblxuZnVuY3Rpb24gcGlwZWxpbmUodG8sIHhmLCBmcm9tLCBrZWVwT3BlbiwgZXhIYW5kbGVyKSB7XG5cbiAgZnVuY3Rpb24gdGFza0ZuKGpvYikge1xuICAgIGlmIChqb2IgPT09IGNzcC5DTE9TRUQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdiA9IGpvYlswXTtcbiAgICAgIHZhciBwID0gam9iWzFdO1xuICAgICAgdmFyIHJlcyA9IGNzcC5jaGFuKDEsIHhmLCBleEhhbmRsZXIpO1xuXG4gICAgICBjc3AuZ28oZnVuY3Rpb24qIChyZXMsIHYpIHtcbiAgICAgICAgeWllbGQgY3NwLnB1dChyZXMsIHYpO1xuICAgICAgICByZXMuY2xvc2UoKTtcbiAgICAgIH0sIFtyZXMsIHZdKTtcblxuICAgICAgY3NwLnB1dEFzeW5jKHAsIHJlcyk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwaXBlbGluZUludGVybmFsKDEsIHRvLCBmcm9tLCAha2VlcE9wZW4sIHRhc2tGbik7XG59XG5cbmZ1bmN0aW9uIHBpcGVsaW5lQXN5bmMobiwgdG8sIGFmLCBmcm9tLCBrZWVwT3Blbikge1xuXG4gIGZ1bmN0aW9uIHRhc2tGbihqb2IpIHtcbiAgICBpZiAoam9iID09PSBjc3AuQ0xPU0VEKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHYgPSBqb2JbMF07XG4gICAgICB2YXIgcCA9IGpvYlsxXTtcbiAgICAgIHZhciByZXMgPSBjc3AuY2hhbigxKTtcbiAgICAgIGFmKHYsIHJlcyk7XG4gICAgICBjc3AucHV0QXN5bmMocCwgcmVzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwaXBlbGluZUludGVybmFsKG4sIHRvLCBmcm9tLCAha2VlcE9wZW4sIHRhc2tGbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwaXBlbGluZTogcGlwZWxpbmUsXG4gIHBpcGVsaW5lQXN5bmM6IHBpcGVsaW5lQXN5bmNcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9qcy1jc3Avc3JjL2NzcC5waXBlbGluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIwMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgZ2V0b3B0IGZyb20gJ25vZGUtZ2V0b3B0JztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlndXJlIHtcbiAgY29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5vcHRzID0gZ2V0b3B0LmNyZWF0ZShbXG5cdFx0XHRbJ3InLCAncmFwdG9yPUFSRycgLCAnd2hlcmUgdGhlIHJhcHRvciBleGVjdXRhYmxlIGZpbGUgaXMnXSxcblx0XHRcdFsncCcsICdwaGFzZT1BUkcnICwgJ3doZXJlIHRoZSBydW5uaW5nIHBoYXNlIGlzJ10sXG5cdFx0XHRbJ2MnLCAnY29uZmlnPUFSRycsICdjb25maWcgZmlsZSAoY29tbWFuZCBsaW5lIGFyZ3VtZW50cyB3aWxsIHN1cnBhc3MgaXQpJ10sXG4gICAgICBbJycsICAnYWRiPUFSRycsICd3aGVyZSB0aGUgYGFkYmAgY29tbWFuZCBpcyddLFxuICAgICAgWycnLCAgJ2ZmbXBlZz1BUkcnLCAnd2hlcmUgdGhlIGBmZm1wZWdgIGNvbW1hbmQgaXMnXSxcblx0XHRcdFsnJywgICdyZWNvcmQtdGFyZ2V0LWRldmljZT1BUkcnLCAnd2hlcmUgdG8gcHV0IHRoZSByZWNvcmQgb24gdGhlIGRldmljZSddLFxuXHRcdFx0WycnLCAgJ3JlY29yZC10YXJnZXQtY29uc29sZT1BUkcnLCAnd2hlcmUgdG8gcHVsbCB0aGUgcmVjb3JkIHRvIHRoZSBjb25zb2xlJ10sXG4gICAgICBbJ3InLCAncm91dGVycz1BUkcrJywgJ2ludm9rZSB3aGF0IHJvdXRlcnMnXSxcbiAgICAgIFsnJywgICdtYWluPUFSRycsICdkZWZhdWx0IGlzIFJhcHRvcjsgb25jZSBpdCBlbmRzIHRoZSBwcm9jZXNzIHdpbGwgZW5kLCB0b28nXSxcblx0XHRcdFsnaCcsICdoZWxwJywgJ2Rpc3BsYXkgdGhpcyBoZWxwJ10sXG5cdFx0XHRbJ3YnLCAndmVyc2lvbicsICdzaG93IHZlcnNpb24nXVxuXHRcdF0pXG5cdFx0LmJpbmRIZWxwKCdVc2FnZTogYmVob2xkZXIgPHRlc3QtZmlsZS1wYXRoPiAtLTxvcHRpb25hbCBvcHRpb25zPicpO1xuICAgIC8vIFRPRE86IHByaW50IGFsbCBhdmFpbGFibGUgcm91dGVycyBhZnRlciBzb21lIHNwZWNpYWwgaGVscCBjb21tYW5kLlxuXHR9XG5cbiAgc2V0dXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGQoLi4udGhpcy5nZXRvcHRzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdpbGwgdGhyb3cgZXJyb3Igd2hlbiBjYXJyeWluZyBpbnZhbGlkIG9wdGlvbnMuXG4gICAqL1xuICBidWlsZChhcmd2LCBvcHRpb25zKSB7XG4gICAgbGV0IHRlc3RGaWxlUGF0aHMgPSBhcmd2O1xuICAgIHRoaXMudmFsaWRhdGVUZXN0RmlsZXModGVzdEZpbGVQYXRocyk7XG4gICAgbGV0IGNvbmZpZ3MgPSB0aGlzLmZyb21PcHRpb25zKG9wdGlvbnMpO1xuICAgIGNvbmZpZ3MudGVzdHMgPSB0ZXN0RmlsZVBhdGhzO1xuICAgIHRoaXMudmFsaWRhdGVNb2R1bGVDb21tYW5kcyhjb25maWdzKTtcbiAgICByZXR1cm4gY29uZmlncztcbiAgfVxuXG4gIGdldG9wdHMoKSB7XG4gICAgbGV0IHBhcnNlZE9wdGlvbnMgPSB0aGlzLm9wdHMucGFyc2VTeXN0ZW0oKTtcblx0XHQvLyBwYXJzZSBjb21tYW5kIGxpbmUgYW5kIGdldCB0aGUgcmVzdWx0LlxuXHRcdHRoaXMub3B0cyA9IHBhcnNlZE9wdGlvbnMub3B0aW9ucztcbiAgICB0aGlzLmFyZ3YgPSBwYXJzZWRPcHRpb25zLmFyZ3Y7XG5cdFx0cmV0dXJuIFt0aGlzLmFyZ3YsIHRoaXMub3B0c107XG4gIH1cblxuICB2YWxpZGF0ZVRlc3RGaWxlcyh0ZXN0RmlsZVBhdGhzKSB7XG4gICAgaWYgKDAgPT09IHRlc3RGaWxlUGF0aHMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3Qgc3BlY2lmeSB0ZXN0IGZpbGVzLicgK1xuICAgICAgICAnRXhhbXBsZTogYmVob2xkZXIgdGVzdC0xLmpzIHRlc3QtMi5qcycpO1xuICAgIH1cbiAgICB0ZXN0RmlsZVBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZzLmFjY2Vzc1N5bmMocGF0aCk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQ2Fubm90IGFjY2VzcyB0aGUgdGVzdDogJywgcGF0aCk7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YWxpZGF0ZVJhcHRvcihjb25maWdzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGZzLmFjY2Vzc1N5bmMoY29uZmlncy5wYXRoLnJhcHRvcik7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBDYW5ub3QgYWNjZXNzIHRoZSBSYXB0b3IgY29tbWFuZDogXCIke2NvbmZpZ3MucGF0aC5yYXB0b3J9XCJgKTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVQaGFzZShjb25maWdzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGZzLmFjY2Vzc1N5bmMoY29uZmlncy5wYXRoLnBoYXNlKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYENhbm5vdCBhY2Nlc3MgdGhlIHJ1bm5pbmcgcGhhc2U6IFwiJHtjb25maWdzLnBhdGgucGhhc2V9XCJgKTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVBbmRyb2lkRGFlbW9uQnVzKGNvbmZpZ3MpIHtcbiAgICB0cnkge1xuICAgICAgZnMuYWNjZXNzU3luYyhjb25maWdzLnBhdGguYWRiKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYENhbm5vdCBhY2Nlc3MgdGhlIEFuZHJvaWQgZGFlbW9uIGJ1czogXCIke2NvbmZpZ3MucGF0aC5hZGJ9XCJgKTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVGRk1QRUcoY29uZmlncykge1xuICAgIHRyeSB7XG4gICAgICBmcy5hY2Nlc3NTeW5jKGNvbmZpZ3MucGF0aC5mZm1wZWcpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgY29uc29sZS5lcnJvcihgQ2Fubm90IGFjY2VzcyB0aGUgRkZNUEVHOiBcIiR7Y29uZmlncy5wYXRoLmZmbXBlZ31cImApO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cblxuXHR2YWxpZGF0ZVJlY29yZENvbnNvbGVUYXJnZXQoY29uZmlncykge1xuICAgIHRyeSB7XG4gICAgICBmcy5hY2Nlc3NTeW5jKHBhdGguZGlybmFtZShjb25maWdzLnBhdGgucmVjb3JkLnRhcmdldC5jb25zb2xlKSk7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBDYW5ub3QgYWNjZXNzIHRoZSB0YXJnZXQgdG8gcHV0IHRoZSB0YXJnZXQ6IFwiJHtjb25maWdzLnBhdGgucmVjb3JkLnRhcmdldC5jb25zb2xlfVwiYCk7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cblx0fVxuXG4gIHZhbGlkYXRlTW9kdWxlQ29tbWFuZHMoY29uZmlncykge1xuICAgIGZvciAobGV0IHJvdXRlcklkZW5kaXR5IG9mIGNvbmZpZ3Mucm91dGVycykge1xuICAgICAgc3dpdGNoKHJvdXRlcklkZW5kaXR5KSB7XG4gICAgICAgIGNhc2UgJ3JhcHRvcic6XG4gICAgICAgICAgdGhpcy52YWxpZGF0ZVJhcHRvcihjb25maWdzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGhhc2UnOlxuICAgICAgICAgIHRoaXMudmFsaWRhdGVQaGFzZShjb25maWdzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYWRiJzpcbiAgICAgICAgICB0aGlzLnZhbGlkYXRlQW5kcm9pZERhZW1vbkJ1cyhjb25maWdzKTtcbiAgICAgICAgICBicmVhaztcblx0XHRcdFx0Y2FzZSAnc2NyZWVucmVjb3JkJzpcbiAgICAgICAgICB0aGlzLnZhbGlkYXRlRkZNUEVHKGNvbmZpZ3MpO1xuICAgICAgICAgIHRoaXMudmFsaWRhdGVBbmRyb2lkRGFlbW9uQnVzKGNvbmZpZ3MpO1xuXHRcdFx0XHRcdHRoaXMudmFsaWRhdGVSZWNvcmRDb25zb2xlVGFyZ2V0KGNvbmZpZ3MpO1xuXHRcdFx0XHRcdGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZyb21PcHRpb25zKG9wdGlvbnMpIHtcbiAgICBsZXQgZGVmYXVsdENvbmZpZ3M7XG4gICAgb3B0aW9ucy5jb25maWcgPSBvcHRpb25zLmNvbmZpZztcbiAgICBpZiAob3B0aW9ucy5jb25maWcpIHtcbiAgICAgIGRlZmF1bHRDb25maWdzID0gcmVxdWlyZShvcHRpb25zLmNvbmZpZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRlZmF1bHRDb25maWdzID0gdGhpcy5nZW5lcmF0ZURlZmF1bHRDb25maWdzKCk7XG4gICAgfVxuXG4gICAgLy8gT3ZlcndyaXRlIHRoZSBleGlzdGVudCBvbmUgaW4gdGhlIGRlZmF1bHQgZmlsZS5cbiAgICBkZWZhdWx0Q29uZmlncy5wYXRoLnBoYXNlID0gb3B0aW9ucy5waGFzZSB8fCBkZWZhdWx0Q29uZmlncy5wYXRoLnBoYXNlO1xuICAgIGRlZmF1bHRDb25maWdzLnBhdGgucmFwdG9yID0gb3B0aW9ucy5yYXB0b3IgfHwgZGVmYXVsdENvbmZpZ3MucGF0aC5yYXB0b3I7XG4gICAgZGVmYXVsdENvbmZpZ3MucGF0aC5hZGIgPSBvcHRpb25zLmFkYiB8fCBkZWZhdWx0Q29uZmlncy5wYXRoLmFkYjtcbiAgICBkZWZhdWx0Q29uZmlncy5wYXRoLmZmbXBlZyA9IG9wdGlvbnMuZmZtcGVnIHx8IGRlZmF1bHRDb25maWdzLnBhdGguZmZtcGVnO1xuXG5cdFx0Ly8gRm9yIFNjcmVlblJlY29yZCBtb2R1bGUuXG4gICAgZGVmYXVsdENvbmZpZ3MucGF0aC5yZWNvcmQgPSBkZWZhdWx0Q29uZmlncy5wYXRoLnJlY29yZCB8fCB7XG5cdFx0XHR0YXJnZXQ6IHsgY29uc29sZTogbnVsbCwgZGV2aWNlOiBudWxsIH1cblx0XHR9O1xuXHRcdGRlZmF1bHRDb25maWdzLnBhdGgucmVjb3JkLnRhcmdldC5kZXZpY2UgPSBvcHRpb25zWydyZWNvcmQtdGFyZ2V0LWRldmljZSddIHx8XG5cdFx0XHRkZWZhdWx0Q29uZmlncy5wYXRoLnJlY29yZC50YXJnZXQuZGV2aWNlO1xuXHRcdGRlZmF1bHRDb25maWdzLnBhdGgucmVjb3JkLnRhcmdldC5jb25zb2xlID0gb3B0aW9uc1sncmVjb3JkLXRhcmdldC1jb25zb2xlJ10gfHxcblx0XHRcdGRlZmF1bHRDb25maWdzLnBhdGgucmVjb3JkLnRhcmdldC5jb25zb2xlO1xuXG4gICAgZGVmYXVsdENvbmZpZ3Mucm91dGVycyA9IG9wdGlvbnMucm91dGVyc3x8IGRlZmF1bHRDb25maWdzLnJvdXRlcnMgfHwgW107XG4gICAgZGVmYXVsdENvbmZpZ3Mucm91dGVycy5fX21haW5fXyA9IG9wdGlvbnNbJ21haW4nXSB8fFxuICAgICAgZGVmYXVsdENvbmZpZ3Mucm91dGVycy5fX21haW5fX3x8ICdyYXB0b3InO1xuXG4gICAgaWYgKCFkZWZhdWx0Q29uZmlncy5yb3V0ZXJzLmluY2x1ZGVzKCdzaWduYWwnKSkge1xuICAgICAgZGVmYXVsdENvbmZpZ3Mucm91dGVycy5wdXNoKCdzaWduYWwnKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRDb25maWdzO1xuICB9XG5cbiAgZ2VuZXJhdGVEZWZhdWx0Q29uZmlncygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF0aDoge1xuICAgICAgICBwaGFzZTogJycsXG4gICAgICAgIHJhcHRvcjogJydcbiAgICAgIH0sXG4gICAgICB0ZXN0czogW11cbiAgICB9O1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9Db25maWd1cmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoX19kaXJuYW1lICsgJy9saWIvZ2V0b3B0LmpzJyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9ub2RlLWdldG9wdC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gR2VuZXJhdGVkIGJ5IFRvZmZlZVNjcmlwdCAxLjQuMFxuKGZ1bmN0aW9uKCkge1xuICB2YXIgR2V0b3B0LCBQYXJzZWRPcHRpb24sXG4gICAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gICAgX19tYXRjaGVzID0gbnVsbDtcblxuICBQYXJzZWRPcHRpb24gPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiBQYXJzZWRPcHRpb24oYXJndiwgb3B0aW9ucykge1xuICAgICAgdGhpcy5hcmd2ID0gYXJndjtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuXG4gICAgUGFyc2VkT3B0aW9uLnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGssIHYsIF9yZWY7XG4gICAgICBpZiAodGhpcy5hcmd2Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBfcmVmID0gdGhpcy5vcHRpb25zO1xuICAgICAgZm9yIChrIGluIF9yZWYpIHtcbiAgICAgICAgaWYgKCFfX2hhc1Byb3AuY2FsbChfcmVmLCBrKSkgY29udGludWU7XG4gICAgICAgIHYgPSBfcmVmW2tdO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFBhcnNlZE9wdGlvbjtcblxuICB9KSgpO1xuXG4gIEdldG9wdCA9IChmdW5jdGlvbigpIHtcblxuICAgIEdldG9wdC5IQVNfQVJHVU1FTlQgPSB0cnVlO1xuXG4gICAgR2V0b3B0Lk5PX0FSR1VNRU5UID0gZmFsc2U7XG5cbiAgICBHZXRvcHQuTVVMVElfU1VQUE9SVEVEID0gdHJ1ZTtcblxuICAgIEdldG9wdC5TSU5HTEVfT05MWSA9IGZhbHNlO1xuXG4gICAgR2V0b3B0LlZFUlNJT04gPSAnMC4yLjMnO1xuXG4gICAgZnVuY3Rpb24gR2V0b3B0KG9wdGlvbnMpIHtcbiAgICAgIHZhciBjb21tZW50LCBkZWZpbml0aW9uLCBoYXNfYXJndW1lbnQsIGxvbmdfbmFtZSwgbXVsdGlfc3VwcG9ydGVkLCBuYW1lLCBvcHRpb24sIG9wdGlvbmFsLCBzaG9ydF9uYW1lLCBfaSwgX2xlbiwgX3JlZjtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICB0aGlzLnNob3J0X29wdGlvbnMgPSB7fTtcbiAgICAgIHRoaXMubG9uZ19vcHRpb25zID0ge307XG4gICAgICB0aGlzLmxvbmdfbmFtZXMgPSBbXTtcbiAgICAgIHRoaXMuZXZlbnRzID0ge307XG4gICAgICB0aGlzLmV2ZW50X25hbWVzID0gW107XG4gICAgICB0aGlzLmVycm9yRnVuYyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKGUubWVzc2FnZSk7XG4gICAgICAgIHJldHVybiBwcm9jZXNzLmV4aXQoMSk7XG4gICAgICB9O1xuICAgICAgaWYgKHByb2Nlc3MuYXJndlsxXSkge1xuICAgICAgICB0aGlzLmhlbHAgPSBcIlVzYWdlOiBub2RlIFwiICsgKHByb2Nlc3MuYXJndlsxXS5tYXRjaCgvKD86LipbXFwvXFxcXF0pPyguKikkLylbMV0pICsgXCJcXG5cXG5bW09QVElPTlNdXVxcblwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oZWxwID0gXCJbW09QVElPTlNdXVwiO1xuICAgICAgfVxuICAgICAgX3JlZiA9IHRoaXMub3B0aW9ucztcbiAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICBvcHRpb24gPSBfcmVmW19pXTtcbiAgICAgICAgc2hvcnRfbmFtZSA9IG9wdGlvblswXSwgZGVmaW5pdGlvbiA9IG9wdGlvblsxXSwgY29tbWVudCA9IG9wdGlvblsyXTtcbiAgICAgICAgaWYgKGNvbW1lbnQgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbW1lbnQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmaW5pdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgZGVmaW5pdGlvbiA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG9ydF9uYW1lID09IG51bGwpIHtcbiAgICAgICAgICBzaG9ydF9uYW1lID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgKF9fbWF0Y2hlcyA9IGRlZmluaXRpb24ubWF0Y2goL14oW1xcd1xcLV0qKS8pKTtcbiAgICAgICAgbG9uZ19uYW1lID0gX19tYXRjaGVzWzFdO1xuICAgICAgICBoYXNfYXJndW1lbnQgPSBkZWZpbml0aW9uLmluZGV4T2YoJz0nKSAhPT0gLTE7XG4gICAgICAgIG11bHRpX3N1cHBvcnRlZCA9IGRlZmluaXRpb24uaW5kZXhPZignKycpICE9PSAtMTtcbiAgICAgICAgb3B0aW9uYWwgPSAvXFxbPS4qP1xcXS8udGVzdChkZWZpbml0aW9uKTtcbiAgICAgICAgbG9uZ19uYW1lID0gbG9uZ19uYW1lLnRyaW0oKTtcbiAgICAgICAgc2hvcnRfbmFtZSA9IHNob3J0X25hbWUudHJpbSgpO1xuICAgICAgICBpZiAob3B0aW9uYWwgJiYgc2hvcnRfbmFtZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignb3B0aW9uYWwgYXJndW1lbnQgY2FuIG9ubHkgd29yayB3aXRoIGxvbmcgb3B0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFsb25nX25hbWUpIHtcbiAgICAgICAgICBsb25nX25hbWUgPSBzaG9ydF9uYW1lO1xuICAgICAgICB9XG4gICAgICAgIG5hbWUgPSBsb25nX25hbWU7XG4gICAgICAgIGlmIChsb25nX25hbWUgPT09ICcnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZW1wdHkgb3B0aW9uIGZvdW5kLiB0aGUgbGFzdCBvcHRpb24gbmFtZSBpcyBcIiArICh0aGlzLmxvbmdfbmFtZXMuc2xpY2UoLTEpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubG9uZ19vcHRpb25zW2xvbmdfbmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMubG9uZ19uYW1lcy5wdXNoKGxvbmdfbmFtZSk7XG4gICAgICAgICAgdGhpcy5sb25nX29wdGlvbnNbbG9uZ19uYW1lXSA9IHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBzaG9ydF9uYW1lOiBzaG9ydF9uYW1lLFxuICAgICAgICAgICAgbG9uZ19uYW1lOiBsb25nX25hbWUsXG4gICAgICAgICAgICBoYXNfYXJndW1lbnQ6IGhhc19hcmd1bWVudCxcbiAgICAgICAgICAgIG11bHRpX3N1cHBvcnRlZDogbXVsdGlfc3VwcG9ydGVkLFxuICAgICAgICAgICAgY29tbWVudDogY29tbWVudCxcbiAgICAgICAgICAgIG9wdGlvbmFsOiBvcHRpb25hbCxcbiAgICAgICAgICAgIGRlZmluaXRpb246IGRlZmluaXRpb25cbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm9wdGlvbiBcIiArIGxvbmdfbmFtZSArIFwiIHJlZGVmaW5lZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3J0X25hbWUgIT09ICcnKSB7XG4gICAgICAgICAgaWYgKHNob3J0X25hbWUubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Nob3J0IG9wdGlvbiBtdXN0IGJlIHNpbmdsZSBjaGFyYWN0ZXJzJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2hvcnRfb3B0aW9uc1tzaG9ydF9uYW1lXSA9IHRoaXMubG9uZ19vcHRpb25zW2xvbmdfbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXM7XG4gICAgfVxuXG4gICAgR2V0b3B0LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKG5hbWUsIGNiKSB7XG4gICAgICB0aGlzLmV2ZW50c1tuYW1lXSA9IGNiO1xuICAgICAgdGhpcy5ldmVudF9uYW1lcy5wdXNoKG5hbWUpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEdldG9wdC5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKG5hbWUsIGNiKSB7XG4gICAgICBpZiAodGhpcy5ldmVudHNbbmFtZV0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRzW25hbWVdLmNhbGwodGhpcywgdGhpcy5wYXJzZWRPcHRpb24uYXJndiwgdGhpcy5wYXJzZWRPcHRpb24ub3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZXRvcHQgdHJpZ2dlciAnXCIgKyBuYW1lICsgXCInIGlzIG5vdCBmb3VuZFwiKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgR2V0b3B0LnByb3RvdHlwZS50cmlnZ2VyX2V2ZW50c18gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBuYW1lLCBvcHRpb25zLCBfaSwgX2xlbiwgX3JlZjtcbiAgICAgIG9wdGlvbnMgPSB0aGlzLnBhcnNlZE9wdGlvbi5vcHRpb25zO1xuICAgICAgX3JlZiA9IHRoaXMuZXZlbnRfbmFtZXM7XG4gICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgbmFtZSA9IF9yZWZbX2ldO1xuICAgICAgICBpZiAob3B0aW9uc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5lbWl0KG5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgR2V0b3B0LnByb3RvdHlwZS5zYXZlX29wdGlvbl8gPSBmdW5jdGlvbihvcHRpb25zLCBvcHRpb24sIGFyZ3YpIHtcbiAgICAgIHZhciBuYW1lLCBuYW1lcywgdmFsdWUsIF9pLCBfbGVuLCBfcmVmO1xuICAgICAgaWYgKG9wdGlvbi5oYXNfYXJndW1lbnQpIHtcbiAgICAgICAgaWYgKGFyZ3YubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwib3B0aW9uIFwiICsgb3B0aW9uLmxvbmdfbmFtZSArIFwiIG5lZWQgYXJndW1lbnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSBhcmd2LnNoaWZ0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBuYW1lcyA9IFtvcHRpb24ubmFtZV07XG4gICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IG5hbWVzLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIG5hbWUgPSBuYW1lc1tfaV07XG4gICAgICAgIGlmIChvcHRpb24ubXVsdGlfc3VwcG9ydGVkKSB7XG4gICAgICAgICAgaWYgKChfcmVmID0gb3B0aW9uc1tuYW1lXSkgPT0gbnVsbCkge1xuICAgICAgICAgICAgb3B0aW9uc1tuYW1lXSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcHRpb25zW25hbWVdLnB1c2godmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdGlvbnNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEdldG9wdC5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbihhcmd2KSB7XG4gICAgICB2YXIgYXJnLCBpLCBsb25nX25hbWUsIG9wdGlvbiwgcnRfYXJndiwgcnRfb3B0aW9ucywgc2hvcnRfbmFtZSwgc2hvcnRfbmFtZXMsIHZhbHVlLCBfaSwgX2xlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGFyZ3YgPSBhcmd2LnNsaWNlKDApO1xuICAgICAgICBydF9vcHRpb25zID0ge307XG4gICAgICAgIHJ0X2FyZ3YgPSBbXTtcbiAgICAgICAgd2hpbGUgKChhcmcgPSBhcmd2LnNoaWZ0KCkpICE9IG51bGwpIHtcbiAgICAgICAgICBpZiAoKF9fbWF0Y2hlcyA9IGFyZy5tYXRjaCgvXi0oXFx3W1xcd1xcLV0qKS8pKSkge1xuICAgICAgICAgICAgc2hvcnRfbmFtZXMgPSBfX21hdGNoZXNbMV07XG4gICAgICAgICAgICBmb3IgKGkgPSBfaSA9IDAsIF9sZW4gPSBzaG9ydF9uYW1lcy5sZW5ndGg7IF9pIDwgX2xlbjsgaSA9ICsrX2kpIHtcbiAgICAgICAgICAgICAgc2hvcnRfbmFtZSA9IHNob3J0X25hbWVzW2ldO1xuICAgICAgICAgICAgICBvcHRpb24gPSB0aGlzLnNob3J0X29wdGlvbnNbc2hvcnRfbmFtZV07XG4gICAgICAgICAgICAgIGlmICghb3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBvcHRpb24gXCIgKyBzaG9ydF9uYW1lKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAob3B0aW9uLmhhc19hcmd1bWVudCkge1xuICAgICAgICAgICAgICAgIGlmIChpIDwgYXJnLmxlbmd0aCAtIDIpIHtcbiAgICAgICAgICAgICAgICAgIGFyZ3YudW5zaGlmdChhcmcuc2xpY2UoaSArIDIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlX29wdGlvbl8ocnRfb3B0aW9ucywgb3B0aW9uLCBhcmd2KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVfb3B0aW9uXyhydF9vcHRpb25zLCBvcHRpb24sIGFyZ3YpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICgoX19tYXRjaGVzID0gYXJnLm1hdGNoKC9eLS0oXFx3W1xcd1xcLV0qKSgoPzo9LiopPykkLykpKSB7XG4gICAgICAgICAgICBsb25nX25hbWUgPSBfX21hdGNoZXNbMV07XG4gICAgICAgICAgICB2YWx1ZSA9IF9fbWF0Y2hlc1syXTtcbiAgICAgICAgICAgIG9wdGlvbiA9IHRoaXMubG9uZ19vcHRpb25zW2xvbmdfbmFtZV07XG4gICAgICAgICAgICBpZiAoIW9wdGlvbikge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIG9wdGlvbiBcIiArIGxvbmdfbmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMSk7XG4gICAgICAgICAgICAgIGFyZ3YudW5zaGlmdCh2YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbi5vcHRpb25hbCkge1xuICAgICAgICAgICAgICBhcmd2LnVuc2hpZnQoJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zYXZlX29wdGlvbl8ocnRfb3B0aW9ucywgb3B0aW9uLCBhcmd2KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJy0tJykge1xuICAgICAgICAgICAgcnRfYXJndiA9IHJ0X2FyZ3YuY29uY2F0KGFyZ3YpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJ0X2FyZ3YucHVzaChhcmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aGlzLmVycm9yRnVuYyhlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFyc2VkT3B0aW9uID0gbmV3IFBhcnNlZE9wdGlvbihydF9hcmd2LCBydF9vcHRpb25zKTtcbiAgICAgIHRoaXMudHJpZ2dlcl9ldmVudHNfKCk7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZWRPcHRpb247XG4gICAgfTtcblxuICAgIEdldG9wdC5wcm90b3R5cGUucGFyc2Vfc3lzdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZShwcm9jZXNzLmFyZ3Yuc2xpY2UoMikpO1xuICAgIH07XG5cbiAgICBHZXRvcHQucHJvdG90eXBlLnBhcnNlU3lzdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZV9zeXN0ZW0oKTtcbiAgICB9O1xuXG4gICAgR2V0b3B0LnByb3RvdHlwZS5zZXRIZWxwID0gZnVuY3Rpb24oaGVscCkge1xuICAgICAgdGhpcy5oZWxwID0gaGVscDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBHZXRvcHQucHJvdG90eXBlLmdldEhlbHAgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjb21tZW50LCBkZWZpbml0aW9uLCBsb25nX25hbWUsIG9wdCwgb3B0aW9uLCBvcHRpb25zLCBzaG9ydF9uYW1lLCBzdHJzLCB3cywgX2ksIF9sZW4sIF9yZWY7XG4gICAgICB3cyA9IFtdO1xuICAgICAgb3B0aW9ucyA9IFtdO1xuICAgICAgX3JlZiA9IHRoaXMubG9uZ19uYW1lcztcbiAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICBsb25nX25hbWUgPSBfcmVmW19pXTtcbiAgICAgICAgb3B0aW9uID0gdGhpcy5sb25nX29wdGlvbnNbbG9uZ19uYW1lXTtcbiAgICAgICAgc2hvcnRfbmFtZSA9IG9wdGlvbi5zaG9ydF9uYW1lLCBsb25nX25hbWUgPSBvcHRpb24ubG9uZ19uYW1lLCBjb21tZW50ID0gb3B0aW9uLmNvbW1lbnQsIGRlZmluaXRpb24gPSBvcHRpb24uZGVmaW5pdGlvbjtcbiAgICAgICAgaWYgKHNob3J0X25hbWUgJiYgc2hvcnRfbmFtZSA9PT0gbG9uZ19uYW1lKSB7XG4gICAgICAgICAgb3B0ID0gXCItXCIgKyBzaG9ydF9uYW1lO1xuICAgICAgICB9IGVsc2UgaWYgKHNob3J0X25hbWUpIHtcbiAgICAgICAgICBvcHQgPSBcIi1cIiArIHNob3J0X25hbWUgKyBcIiwgLS1cIiArIGRlZmluaXRpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0ID0gXCIgICAgLS1cIiArIGRlZmluaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgd3NbMF0gPSBNYXRoLm1heCh3c1swXSA+PiAwLCBvcHQubGVuZ3RoKTtcbiAgICAgICAgb3B0aW9ucy5wdXNoKFtvcHQsIGNvbW1lbnRdKTtcbiAgICAgIH1cbiAgICAgIHN0cnMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfaiwgX2xlbjEsIF9yZXN1bHRzO1xuICAgICAgICBfcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBvcHRpb25zLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xuICAgICAgICAgIG9wdGlvbiA9IG9wdGlvbnNbX2pdO1xuICAgICAgICAgIG9wdCA9IG9wdGlvblswXSwgY29tbWVudCA9IG9wdGlvblsxXTtcbiAgICAgICAgICB3aGlsZSAob3B0Lmxlbmd0aCA8IHdzWzBdKSB7XG4gICAgICAgICAgICBvcHQgKz0gJyAnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfcmVzdWx0cy5wdXNoKFwiICBcIiArIG9wdCArIFwiICBcIiArIGNvbW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICAgIH0pKCk7XG4gICAgICByZXR1cm4gdGhpcy5oZWxwLnJlcGxhY2UoJ1tbT1BUSU9OU11dJywgc3Rycy5qb2luKFwiXFxuXCIpKTtcbiAgICB9O1xuXG4gICAgR2V0b3B0LnByb3RvdHlwZS5zaG93SGVscCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5pbmZvKHRoaXMuZ2V0SGVscCgpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBHZXRvcHQucHJvdG90eXBlLmJpbmRIZWxwID0gZnVuY3Rpb24oaGVscCkge1xuICAgICAgaWYgKGhlbHApIHtcbiAgICAgICAgdGhpcy5zZXRIZWxwKGhlbHApO1xuICAgICAgfVxuICAgICAgdGhpcy5vbignaGVscCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNob3dIZWxwKCk7XG4gICAgICAgIHJldHVybiBwcm9jZXNzLmV4aXQoMCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBHZXRvcHQucHJvdG90eXBlLmdldFZlcnNpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBHZXRvcHQuVkVSU0lPTjtcbiAgICB9O1xuXG4gICAgR2V0b3B0LnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uKGVycm9yRnVuYykge1xuICAgICAgdGhpcy5lcnJvckZ1bmMgPSBlcnJvckZ1bmM7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgR2V0b3B0LmdldFZlcnNpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLlZFUlNJT047XG4gICAgfTtcblxuICAgIEdldG9wdC5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICByZXR1cm4gbmV3IEdldG9wdChvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEdldG9wdDtcblxuICB9KSgpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gR2V0b3B0O1xuXG59KS5jYWxsKHRoaXMpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbm9kZS1nZXRvcHQvbGliL2dldG9wdC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImZzXCJcbiAqKiBtb2R1bGUgaWQgPSAyMDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInBhdGhcIlxuICoqIG1vZHVsZSBpZCA9IDIwNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG1hcCA9IHtcblx0XCIuL0FuZHJvaWREYWVtb25CdXNcIjogMjA4LFxuXHRcIi4vQW5kcm9pZERhZW1vbkJ1cy5qc1wiOiAyMDgsXG5cdFwiLi9Db25maWd1cmVcIjogMjAyLFxuXHRcIi4vQ29uZmlndXJlLmpzXCI6IDIwMixcblx0XCIuL0RlZmVyXCI6IDIxMCxcblx0XCIuL0RlZmVyLmpzXCI6IDIxMCxcblx0XCIuL2JlaG9sZGVyXCI6IDE5MCxcblx0XCIuL2JlaG9sZGVyLmpzXCI6IDE5MCxcblx0XCIuL3JlY29yZC9Mb2dcIjogMjExLFxuXHRcIi4vcmVjb3JkL0xvZy5qc1wiOiAyMTEsXG5cdFwiLi9yZWNvcmQvVGltZWxpbmVcIjogMjEyLFxuXHRcIi4vcmVjb3JkL1RpbWVsaW5lLmpzXCI6IDIxMixcblx0XCIuL3JvdXRlcnMvRGV2aWNlTG9nXCI6IDIxMyxcblx0XCIuL3JvdXRlcnMvRGV2aWNlTG9nLmpzXCI6IDIxMyxcblx0XCIuL3JvdXRlcnMvTG9nL0NvbGxlY3RpbmdTdGFnZVwiOiAyMTYsXG5cdFwiLi9yb3V0ZXJzL0xvZy9Db2xsZWN0aW5nU3RhZ2UuanNcIjogMjE2LFxuXHRcIi4vcm91dGVycy9Mb2cvUmVjb3JkaW5nU3RhZ2VcIjogMjE4LFxuXHRcIi4vcm91dGVycy9Mb2cvUmVjb3JkaW5nU3RhZ2UuanNcIjogMjE4LFxuXHRcIi4vcm91dGVycy9Mb2cvVGVybWluYXRpbmdTdGFnZVwiOiAyMTcsXG5cdFwiLi9yb3V0ZXJzL0xvZy9UZXJtaW5hdGluZ1N0YWdlLmpzXCI6IDIxNyxcblx0XCIuL3JvdXRlcnMvUm91dGVyXCI6IDIxNCxcblx0XCIuL3JvdXRlcnMvUm91dGVyLmpzXCI6IDIxNCxcblx0XCIuL3JvdXRlcnMvU2NyZWVuUmVjb3JkXCI6IDIxOSxcblx0XCIuL3JvdXRlcnMvU2NyZWVuUmVjb3JkLmpzXCI6IDIxOSxcblx0XCIuL3JvdXRlcnMvU2lnbmFsXCI6IDIyNixcblx0XCIuL3JvdXRlcnMvU2lnbmFsLmpzXCI6IDIyNixcblx0XCIuL3JvdXRlcnMvVGltZWxpbmVcIjogMjI3LFxuXHRcIi4vcm91dGVycy9UaW1lbGluZS5qc1wiOiAyMjdcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18od2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkpO1xufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0cmV0dXJuIG1hcFtyZXFdIHx8IChmdW5jdGlvbigpIHsgdGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJy5cIikgfSgpKTtcbn07XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gMjA3O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL3NyYyBeXFwuXFwvLiokXG4gKiogbW9kdWxlIGlkID0gMjA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBjaGlsZF9wcm9jZXNzIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuXG5leHBvcnRcdGZ1bmN0aW9uIGNvbW1hbmREZXZpY2UoYWRiUGF0aCwgZW52cykge1xuICByZXR1cm4gKC4uLmFyZ3MpID0+IHtcbiAgICBsZXQgcmVzdWx0O1xuICAgIGNoZWNrRGFlbW9uU2VydmVyKCk7XG4gICAgd2FpdERldmljZSgpO1xuICAgIGlmIChlbnZzKSB7XG4gICAgICByZXN1bHQgPSBjaGlsZF9wcm9jZXNzLmV4ZWNGaWxlU3luYyhhZGJQYXRoLCBhcmdzLCB7XG4gICAgICAgICdlbnYnOiBlbnZzXG4gICAgICB9KS50b1N0cmluZygpLnRyaW0oKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVzdWx0ID0gY2hpbGRfcHJvY2Vzcy5leGVjRmlsZVN5bmMoYWRiUGF0aCwgYXJncykudG9TdHJpbmcoKS50cmltKCk7XG4gICAgfVxuICAgIHdhaXREZXZpY2UoKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB3YWl0RGV2aWNlKGFkYlBhdGgpIHtcbiAgcmV0dXJuICgpID0+IHtcblx0XHRjaGlsZF9wcm9jZXNzLmV4ZWNGaWxlU3luYyhhZGJQYXRoLCBbJ3dhaXQtZm9yLWRldmljZSddKTtcblx0fVxufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hlY2tEYWVtb25TZXJ2ZXIoYWRiUGF0aCkge1xuICByZXR1cm4gKCkgPT4ge1xuXHRcdGNoaWxkX3Byb2Nlc3MuZXhlY0ZpbGVTeW5jKGFkYlBhdGgsIFsnc3RhcnQtc2VydmVyJ10pO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9BbmRyb2lkRGFlbW9uQnVzLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiXG4gKiogbW9kdWxlIGlkID0gMjA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERlZmVyIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5wcm9taXNlID0gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5yZXNvbHZlID0gcmVzb2x2ZTtcbiAgICAgIHRoaXMucmVqZWN0ID0gcmVqZWN0O1xuICAgIH0pO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9EZWZlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTG9nIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fc3RvcmUgPSBbXTtcbiAgfVxuXG4gIHB1c2goZGF0YSkge1xuICAgIHRoaXMuX3N0b3JlLnB1c2goZGF0YSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlY29yZC9Mb2cuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVsaW5lIHtcbiAgY29uc3RydWN0b3Iob2Zmc2V0KSB7XG4gICAgdGhpcy5fb2Zmc2V0ID0gb2Zmc2V0O1xuICAgIHRoaXMuX3Nsb3RzID0ge307XG4gIH1cblxuICBwdXNoKHNvdXJjZSwgdHlwZSwgY29udGVudCkge1xuICAgIGlmICh0aGlzLl9zbG90c1tzb3VyY2VdKSB7XG4gICAgICB0aGlzLl9zbG90c1tzb3VyY2VdLnB1c2goeyB0eXBlLCBjb250ZW50IH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zbG90c1tzb3VyY2VdID0gW3sgdHlwZSwgY29udGVudCB9XTtcbiAgICB9XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlY29yZC9UaW1lbGluZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWwgZnJvbSAndXRpbCc7XG5pbXBvcnQgY3NwIGZyb20gJ2pzLWNzcCc7XG5pbXBvcnQgY2hpbGRfcHJvY2VzcyBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAncm91dGVycy9Sb3V0ZXInO1xuaW1wb3J0IERlZmVyIGZyb20gJ0RlZmVyJztcbmltcG9ydCBUaW1lIGZyb20gJ3RpbWUnO1xuaW1wb3J0IHsgY29tbWFuZERldmljZSB9IGZyb20gJ0FuZHJvaWREYWVtb25CdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXZpY2VMb2cgZXh0ZW5kcyBSb3V0ZXIge1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZ3MpIHtcbiAgICBzdXBlcihjb25maWdzKTtcbiAgICB0aGlzLl9hZGJQYXRoID0gdGhpcy5jb25maWdzLnBhdGguYWRiO1xuICAgIHRoaXMuX25hbWUgPSAnZGV2aWNlbG9nJztcbiAgICB0aGlzLl9jb21tYW5kRGV2aWNlID0gY29tbWFuZERldmljZSh0aGlzLl9hZGJQYXRoKTtcbiAgICB0aGlzLl9sb2dzID0gW107XG4gICAgdGhpcy5fZXJyb3JzID0gW107XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICAvLyBDb25jYXQgdGhlIGZpcnN0IHN0YWdlIGhhbmRsZXIuXG4gICAgdGhpcy5fdHJhbnNmZXJUb1JlY29yZGluZ1N0YWdlKCk7XG4gICAgdGhpcy5fZmV0Y2hUaW1lSW5mb3JtYXRpb24oKTtcblxuICAgIC8vIEtpY2stb2ZmIGl0LlxuICAgIHRoaXMuX3N0YWdlcy5yZXNvbHZlKCk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHRoaXMuX3N0b3BMaXN0ZW5Ub0NvbnRyb2xDaGFubmVsKCk7XG4gICAgdGhpcy5fY2xvc2VDaGFubmVscygpO1xuICB9XG5cbiAgX2ZldGNoVGltZUluZm9ybWF0aW9uKCkge1xuICAgIHRoaXMuX2luaXRpYWxFcG9jaCA9IHRoaXMuX2ZldGNoSW5pdGlhbEVwb2NoKCk7XG4gICAgdGhpcy5fZGV2aWNlVFogPSB0aGlzLl9jb21tYW5kRGV2aWNlKFxuICAgICAgJ3NoZWxsJywgJ2dldHByb3AnLCAncGVyc2lzdC5zeXMudGltZXpvbmUnKTtcbiAgICB0aGlzLl9kZXZpY2VZZWFyID0gcGFyc2VJbnQodGhpcy5fY29tbWFuZERldmljZShcbiAgICAgICdzaGVsbCcsIGBUWj0ke3RoaXMuX2RldmljZVRafWAsICdkYXRlJywgJyslWScpLnRvU3RyaW5nKCksIDEwKTtcbiAgfVxuXG4gIF9yZWNvcmRpbmcoZGVmZXIpIHtcbiAgICAvLyBUdXJuIGFsbCB0aW1lc3RhbXBzIGluIHRoZSBsb2cgdG8gZXBvY2gsIHRoZW4gc3Vic3RyYWN0IHRoZW0uXG4gICAgbGV0IHJ1bkl0ID0gY2hpbGRfcHJvY2Vzcy5zcGF3bihcbiAgICAgIHRoaXMuX2FkYlBhdGgsXG4gICAgICBbJ2xvZ2NhdCcsICctdicsICd0aW1lJ10sXG4gICAgICB7IGRldGFjaGVkOiB0cnVlIH1cbiAgICApO1xuICAgIHJ1bkl0LnVucmVmKCk7XG4gICAgcnVuSXQuc3Rkb3V0Lm9uKCdkYXRhJywgKGNodW5rKSA9PiB7XG4gICAgICB0aGlzLl9sb2dzLnB1c2goY2h1bmsudG9TdHJpbmcoKSk7XG4gICAgfSk7XG4gICAgcnVuSXQuc3RkZXJyLm9uKCdkYXRhJywgKGNodW5rKSA9PiB7XG4gICAgICBsZXQgc3RyQ2h1bmsgPSBjaHVuay50b1N0cmluZygpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5fbmFtZSwgRGF0ZS5ub3coKSxcbiAgICAgICAgYFNlbmQgYSBtZXNzYWdlIG9mIGNvbnNvbGUgZXJyb3I6ICR7IHN0ckNodW5rIH0gYCk7XG4gICAgICBjc3AucHV0QXN5bmModGhpcy5fb3V0cHV0Q2hhbm5lbCxcbiAgICAgICAgeyd0b3BpYyc6ICdlcnJvcicsICdzb3VyY2UnOiB0aGlzLl9uYW1lLFxuICAgICAgICAgJ3BheWxvYWQnOiBzdHJDaHVuaygpfSk7XG4gICAgfSk7XG4gICAgcnVuSXQub24oJ2Nsb3NlJywgKHN0YXR1cykgPT4ge1xuICAgICAgY29uc29sZS5sb2codGhpcy5fbmFtZSwgRGF0ZS5ub3coKSxcbiAgICAgICAgYFNlbmQgYSBtZXNzYWdlIG9mIHN0cmVhbSBjbG9zZWQ6ICR7IHN0YXR1cyB9IGApO1xuICAgICAgY3NwLnB1dEFzeW5jKHRoaXMuX291dHB1dENoYW5uZWwsXG4gICAgICAgIHsndG9waWMnOiAnc3RhdHVzJywgJ3BheWxvYWQnOiBzdGF0dXMsICdzb3VyY2UnOiB0aGlzLl9uYW1lfSk7XG4gICAgfSk7XG5cbiAgICBkZWZlci5wcm9taXNlID1cbiAgICAgIGRlZmVyLnByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIEFmdGVyIGNsb3NlLCBraWxsIHRoZSBhZGIgbG9nY2F0IHByb2Nlc3MuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlICdzdG9wJyBtZXRob2QgdGhpcyBjb21tYW5kIGhhcy5cbiAgICAgICAgLy8gU2luY2UgaXQgbWFpbmx5IGZvcndhcmRzIHRvIG90aGVyIG1vZHVsZSxcbiAgICAgICAgLy8gd2Ugb25seSBuZWVkIHRvIGtpbGwgdGhlIGxpc3RlbmVyLlxuICAgICAgICBydW5JdC5raWxsKCk7XG4gICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB3aGVuIGtpbGwgdGhlIGRldmljZSBsb2dnaW5nIHByb2Nlc3MnLCBlKTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgX2NvbGxlY3RpbmcoZGVmZXIpIHtcbiAgICAvLyBTb21lIGxpbmVzIGFyZSBvdmVyZmxvd2VkIGZyb20gdGhlIHByZXZpb3VzIHllYXIuXG4gICAgbGV0IHN1cnZpdm9ycyA9IFtdO1xuICAgIGxldCBzdHJMb2dzID0gdGhpcy5fbG9ncy5qb2luKCcnKTtcbiAgICBsZXQgbGluZXMgPSB0aGlzLl9zcGxpdExpbmVzKHN0ckxvZ3MpO1xuICAgIGxldCBtYXhPZmZzZXQgPSAwO1xuXG4gICAgbGluZXMubWFwKChsaW5lKSA9PiBsaW5lLnRyaW0oKSkuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgLy8gRG9uJ3QgaGFuZGxlIGVtcHR5IGxpbmVzLlxuICAgICAgaWYgKCcnID09PSBsaW5lKSB7IHJldHVybjsgfVxuICAgICAgbGV0IHtvZmZzZXQsIGNvbnRlbnR9ID0gdGhpcy5fdGltZU9mZnNldEZyb21EYXRlVGltZShsaW5lKTtcbiAgICAgIC8vIFNvbWV0aGluZyBtYWtlcyBpdCBjYW5ub3QgYmUgcGFyc2VkLlxuICAgICAgaWYgKCFvZmZzZXQgfHwgb2Zmc2V0IDwgMCkgeyByZXR1cm47IH1cblxuICAgICAgaWYgKG9mZnNldCA+IG1heE9mZnNldCkgeyBtYXhPZmZzZXQgPSBvZmZzZXQ7IH1cbiAgICAgIC8vIFN1ZGRlbmx5IHNvbWUgbG9nIGlzIHlvdW5nZXIgdGhhbiBwcmV2aW91cyBvbmUsXG4gICAgICAvLyBtZWFucyB0aG9zZSBvbGRlcnMgYXJlIHRvbyBvbGQgKGluIHRoZSBwcmV2aW91cyB5ZWFyLFxuICAgICAgLy8gZHVlIHRvIHRoZSBtaXNzaW5nIFwieWVhclwiIGluIHRoZSBsb2cpXG4gICAgICBlbHNlIGlmIChvZmZzZXQgPCBtYXhPZmZzZXQpIHtcbiAgICAgICAgLy8gTWVhbnMgdGhhdCBvbmx5IGxvZ3MgYWZ0ZXIgdGhpcyBsaW5lIGFyZSB2YWxpZC5cbiAgICAgICAgLy8gU28gd2UgZW1wdHkgaXQgYW5kIHN0YXJ0IG92ZXIuXG4gICAgICAgIHN1cnZpdm9ycy5sZW5ndGggPSAwO1xuICAgICAgICBtYXhPZmZzZXQgPSBvZmZzZXQ7XG4gICAgICB9XG4gICAgICBzdXJ2aXZvcnMucHVzaCh7b2Zmc2V0LCBjb250ZW50fSk7XG4gICAgfSk7XG5cbiAgICBzdXJ2aXZvcnMuZm9yRWFjaCgocGF5bG9hZCkgPT4ge1xuICAgICAgcGF5bG9hZC50eXBlID0gJ2RldmljZWxvZyc7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLl9uYW1lLCBEYXRlLm5vdygpLFxuICAgICAgICBgU2VuZCB0aGUgbWVzc2FnZSBvZiBkZXZpY2Vsb2cgcGF5bG9hZCAkeyB1dGlsLmluc3BlY3QocGF5bG9hZCkgfWApO1xuICAgICAgY3NwLnB1dEFzeW5jKHRoaXMuX291dHB1dENoYW5uZWwsXG4gICAgICAgIHsndG9waWMnOiAnbG9nJywgJ3NvdXJjZSc6IHRoaXMuX25hbWUsXG4gICAgICAgICAncGF5bG9hZCc6IHBheWxvYWR9KTtcbiAgICB9KTtcbiAgfVxuXG4gIF90ZXJtaW5hdGluZyhkZWZlcikge31cblxuICBfc3BsaXRMaW5lcyhsaW5lcykge1xuICAgIHJldHVybiBsaW5lcy5zcGxpdCgnXFxyJyk7XG4gIH1cblxuICBfdGltZU9mZnNldEZyb21EYXRlVGltZShsaW5lKSB7XG4gICAgbGV0IFtkYXRlLCB0aW1lLCAuLi5jb250ZW50XSA9IGxpbmUuc3BsaXQoJyAnKTtcbiAgICBsZXQgdGltZVNsb3RzID0gdGhpcy5fdGltZVNsb3RzRnJvbURhdGVUaW1lKGRhdGUsIHRpbWUpO1xuICAgIGlmIChpc05hTih0aW1lU2xvdHMuTSkpIHtcbiAgICAgIGNvbnNvbGUud2Fybih0aGlzLl9uYW1lLCBEYXRlLm5vdygpLFxuICAgICAgICBgQ2Fubm90IHBhcnNlIGRhdGUtdGltZSBmcm9tIHRoZSBsb2c6ICR7IGxpbmUgfWApO1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICAvLyBXZSBuZWVkIHRvIGFwcGVuZCB5ZWFyIG9uIHRoYXQgZGF0ZS5cbiAgICB0aW1lU2xvdHMuWSA9IHRoaXMuX2RldmljZVllYXI7XG4gICAgbGV0IG9mZnNldCA9IHRoaXMuX2Vwb2NoVGltZUZyb21EYXRlVGltZSh0aW1lU2xvdHMpIC0gdGhpcy5faW5pdGlhbEVwb2NoO1xuICAgIGNvbnRlbnQgPSBjb250ZW50LmpvaW4oJyAnKVxuICAgIHJldHVybiB7b2Zmc2V0LCBjb250ZW50fTtcbiAgfVxuXG4gIF90aW1lU2xvdHNGcm9tRGF0ZVRpbWUoZGF0ZSwgdGltZSkge1xuICAgIC8vIGV4OiAxMi0zMSAxOToxODozOC4zMDlcbiAgICB0cnkge1xuICAgICAgbGV0IFtNLGRdID0gZGF0ZS5zcGxpdCgnLScpO1xuICAgICAgbGV0IFtobXMsIG1zXSA9IHRpbWUuc3BsaXQoJy4nKTtcbiAgICAgIGxldCBbaCwgbSwgc10gPSBobXMuc3BsaXQoJzonKTtcbiAgICAgIE0gPSBwYXJzZUludChNLCAxMCkgLSAxO1xuICAgICAgZCA9IHBhcnNlSW50KGQsIDEwKTtcbiAgICAgIGggPSBwYXJzZUludChoLCAxMCk7XG4gICAgICBtID0gcGFyc2VJbnQobSwgMTApO1xuICAgICAgcyA9IHBhcnNlSW50KHMsIDEwKTtcbiAgICAgIG1zID0gcGFyc2VJbnQobXMsIDEwKTtcbiAgICAgIGxldCBzbG90cyA9IHtNLCBkLCBoLCBtLCBzLCBtc307XG4gICAgICBmb3IgKGxldCBuYW1lIGluIHNsb3RzKSB7XG4gICAgICAgIGlmIChpc05hTihzbG90c1tuYW1lXSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHNsb3QgaW50byBpbnRlZ2VyOiAnICsgbmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzbG90cztcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH1cblxuICBfZXBvY2hUaW1lRnJvbURhdGVUaW1lKHtZLCBNLCBkLCBoLCBtLCBzLCBtc30pIHtcbiAgICBsZXQgZXBvY2ggPSBuZXcgVGltZS5EYXRlKFksXG4gICAgICAgIE0sXG4gICAgICAgIGQsXG4gICAgICAgIGgsXG4gICAgICAgIG0sXG4gICAgICAgIHMsXG4gICAgICAgIG1zLCB0aGlzLl9kZXZpY2VUWik7XG4gICAgcmV0dXJuIGVwb2NoLmdldFRpbWUoKTtcbiAgfVxuXG4gIF9mZXRjaEluaXRpYWxFcG9jaCgpIHtcbiAgICBsZXQgc2Vjb25kcyA9IHBhcnNlRmxvYXQodGhpcy5fY29tbWFuZERldmljZShcbiAgICAgICdzaGVsbCcsICdlY2hvJywgJyRFUE9DSFJFQUxUSU1FJyksIDEwKTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChzZWNvbmRzICogMTAwMCk7XG4gIH1cblxuICBfb25TdGFnZUNoYW5nZShzdGFnZSkge1xuICAgIHN3aXRjaChzdGFnZSkge1xuICAgICAgY2FzZSAnY29sbGVjdGluZyc6XG4gICAgICAgIHRoaXMuX3RyYW5zZmVyVG9Db2xsZWN0aW5nU3RhZ2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0ZXJtaW5hdGluZyc6XG4gICAgICAgIHRoaXMuX3RyYW5zZmVyVG9UZXJtaW5hdGluZ1N0YWdlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIF90cmFuc2ZlclRvUmVjb3JkaW5nU3RhZ2UoKSB7XG4gICAgdGhpcy5fdHJhbnNmZXJUbyh0aGlzLl9yZWNvcmRpbmcpO1xuICB9XG5cbiAgX3RyYW5zZmVyVG9Db2xsZWN0aW5nU3RhZ2UoKSB7XG4gICAgdGhpcy5fdHJhbnNmZXJUbyh0aGlzLl9jb2xsZWN0aW5nKTtcbiAgfVxuXG4gIF90cmFuc2ZlclRvVGVybWluYXRpbmdTdGFnZSgpIHtcbiAgICB0aGlzLl90cmFuc2ZlclRvKHRoaXMuX3Rlcm1pbmF0aW5nKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm91dGVycy9EZXZpY2VMb2cuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlsIGZyb20gJ3V0aWwnO1xuaW1wb3J0IGNzcCBmcm9tICdqcy1jc3AnO1xuaW1wb3J0IERlZmVyIGZyb20gJ0RlZmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIHtcblxuICAvKipcbiAgICogQWZ0ZXIgY29uc3RydWN0b3IgdGhpcyByb3V0ZXIgc2hvdWxkIGJlIGFibGUgdG8gbGlzdGVuIHRvIGNvbnRyb2wgbWVzc2FnZXMuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWdzKSB7XG4gICAgdGhpcy5jb25maWdzID0gY29uZmlncztcbiAgICB0aGlzLl9uYW1lID0gJ19fcm91dGVyX18nOyAgLy8gRXh0ZW5kIGJ5IGNsaWVudC5cbiAgICB0aGlzLl9jb250cm9sQ2hhbm5lbCA9IGNzcC5jaGFuKCk7XG4gICAgdGhpcy5fb3V0cHV0Q2hhbm5lbCA9IGNzcC5jaGFuKCk7XG4gICAgdGhpcy5faW5wdXRDaGFubmVsID0gY3NwLmNoYW4oKTtcbiAgICB0aGlzLl9wdWJsaWNhdGlvbiA9IGNzcC5vcGVyYXRpb25zLnB1YihcbiAgICAgIHRoaXMuX291dHB1dENoYW5uZWwsIChlKSA9PiBlLnRvcGljKTtcblxuICAgIC8vIEV2ZXJ5IHN0ZXAgb2YgdGhpcyBEZWZlcidzIHByb21pc2Ugd291bGQgYmUgYSBzdGFnZSBtZXRob2QuXG4gICAgdGhpcy5fc3RhZ2VzID0gbmV3IERlZmVyKCk7XG4gICAgdGhpcy5fY29uc3VtZUNvbnRyb2xNZXNzYWdlKCk7XG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgc3RhcnRlZCB0aGUgcm91dGVyIHNob3VsZCBiZSBhYmxlIHRvIGVtaXQgbWVzc2FnZSB0byB0aGUgb3V0cHV0IGNoYW5uZWwuXG4gICAqIFRoZSByb3V0ZXIgc2hvdWxkIGNvbmNhdCB0aGUgc3RhcnRpbmcgc3RhZ2UgdG8gdGhlIHN0YWdlcyBkZWZlciwgYW5kIHRoZW5cbiAgICogcmVzb2x2ZSBpdCB0byBraWNrLW9mZiB0aGUgd2hvbGUgcHJvY2Vzcy5cbiAgICovXG4gIHN0YXJ0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW5zdGFuY2Ugc2hvdWxkIGV4dGVuZCB0aGlzIG1ldGhvZC4nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbmx5IGJlIGludm9rZWQgd2hlbiB0aGUgbGFzdCBzdGFnZSBvZiB0aGUgcm91dGVyIG5lZWQgdG8gYmUgZmluaXNoZWQuXG4gICAqIEluIG1vc3Qgb2YgY2FzZXMsIHRoaXMgbWVhbnMgdGhlIGVuZCBvZiB0aGUgcHJvZ3JhbS5cbiAgICogVGhlcmVmb3JlIG9ubHkgdGhlIGxhc3Qgc3RhZ2UgbmVlZCB0byBpbXBsZW1lbnQgdGhpcyB0byByZWxlYXNlIHJlc291cmNlc1xuICAgKiBvciBmaW5hbGl6ZSBhbGwgZnVuY3Rpb25zLlxuICAgKlxuICAgKiBPdGhlciBpbnRlcm1lZGlhdGUgc3RhZ2VzIHdpbGwgYmUgdHJhbnNmZXJyZWQsIHdoaWNoIGlzIGFub3RoZXIgZXhpdCBvZlxuICAgKiB0aGUgcm91dGVyIHRvIGNsZWFyIGl0c2VsZi5cbiAgICovXG4gIHN0b3AoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnN0YW5jZSBzaG91bGQgZXh0ZW5kIHRoaXMgbWV0aG9kLicpO1xuICB9XG5cbiAgc3Vic2NyaWJlKC4uLnN1YnMpIHtcbiAgICBzdWJzLmZvckVhY2goKHN1YikgPT4ge1xuICAgICAgc3ViKHRoaXMuX3B1YmxpY2F0aW9uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbm5lY3RUb0NvbnRyb2xsZXIocHVibGljYXRpb24pIHtcbiAgICB0aGlzLl9jb250cm9sbGVyUHVibGljYXRpb24gPSBwdWJsaWNhdGlvbjtcbiAgICBjc3Aub3BlcmF0aW9ucy5wdWIuc3ViKHB1YmxpY2F0aW9uLCAnc3RhdHVzJywgdGhpcy5fY29udHJvbENoYW5uZWwpO1xuICAgIHRoaXMuX2NvbnN1bWVDb250cm9sTWVzc2FnZSgpO1xuICB9XG5cbiAgX2NvbnN1bWVDb250cm9sTWVzc2FnZSgpIHtcbiAgICBjc3AuZ28oKGZ1bmN0aW9uKigpIHtcbiAgICAgIGxldCB2YWx1ZSA9IHlpZWxkIHRoaXMuX2NvbnRyb2xDaGFubmVsO1xuICAgICAgd2hpbGUgKGNzcC5DTE9TRUQgIT09IHZhbHVlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX25hbWUsIERhdGUubm93KCksIGBSZWNlaXZlZCBtZXNzYWdlOiAkeyB1dGlsLmluc3BlY3QodmFsdWUpIH1gKTtcbiAgICAgICAgbGV0IHt0eXBlLCBkZXRhaWx9ID0gdmFsdWUucGF5bG9hZDtcbiAgICAgICAgc3dpdGNoKHZhbHVlLnBheWxvYWQudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2luaXRpYWxpemUnOlxuICAgICAgICAgICAgdGhpcy5fb25Jbml0aWFsaXplKGRldGFpbCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdmaW5hbGl6ZSc6ICAvLyBBZnRlciB0aGUgbGF0ZXN0IHN0YWdlIHRvIHJlc29sdmUgdGhhdCBzdGFnZSBwcm9taXNlLlxuICAgICAgICAgICAgdGhpcy5fY2xvc2VDaGFubmVscygpO1xuICAgICAgICAgICAgLy8gUmVzb2x2ZSB0aGUgcHJvbWlzZSBvZiB0aGUgbGFzdCBzdGFnZS5cbiAgICAgICAgICAgIHRoaXMuX3N0b3BDdXJyZW50U3RhZ2UoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3N0YWdlY2hhbmdlJzpcbiAgICAgICAgICAgIHRoaXMuX3N0b3BDdXJyZW50U3RhZ2UoKTtcbiAgICAgICAgICAgIC8vIFNob3VsZCBkaXNwYXRjaCAmIHN0YXJ0IGEgbmV3IHN0YWdlLlxuICAgICAgICAgICAgdGhpcy5fb25TdGFnZUNoYW5nZSh2YWx1ZS5wYXlsb2FkLmRldGFpbCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IHlpZWxkIHRoaXMuX2NvbnRyb2xDaGFubmVsO1xuICAgICAgfVxuICAgIH0pLmJpbmQodGhpcykpO1xuICB9XG5cbiAgX29uSW5pdGlhbGl6ZShpbml0aWFsaXplZFJvdXRlcnMpIHtcbiAgICB0aGlzLl9yb3V0ZXJzID0gaW5pdGlhbGl6ZWRSb3V0ZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIE9ubHkgaW50ZXJtZWRpYXRlIHN0YWdlcyBuZWVkIHRvIGltcGxlbWVudCB0aGlzIG1ldGhvZCwgc2luY2UgaXQgZG9lc24ndCBleGl0XG4gICAqIHZpYSB0aGUgYHN0b3BgIG1ldGhvZCwgYnV0IHRoZSBzdGF0ZSB0cmFuc2ZlcnJpbmcuXG4gICAqL1xuICBfb25TdGFnZUNoYW5nZShzdGFnZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW5zdGFuY2Ugc2hvdWxkIGV4dGVuZCB0aGlzIG1ldGhvZC4nKTtcbiAgfVxuXG4gIF9zdG9wQ3VycmVudFN0YWdlKCkge1xuICAgIC8vIFdhaXQgdGhlIHByZXZpb3VzIHN0ZXBzIGluIHRoZSBzdGFnZSBtZXRob2QsIGFuZCB0aGVuIGtpY2stb2ZmIHRoZSBlbmRpbmdcbiAgICAvLyBwcm9taXNlIG9mIHRoZSBhZnRlci1zdGFnZSBkZWZlci5cbiAgICB0aGlzLl9zdGFnZXMucHJvbWlzZSA9IHRoaXMuX3N0YWdlcy5wcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgLy8gS2ljay1vZmYgaXQgdG8gZW5kIHRoZSBjdXJyZW50IHN0YWdlLlxuICAgICAgdGhpcy5fY3VycmVudFN0YWdlRGVmZXIucmVzb2x2ZSgpO1xuICAgICAgLy8gQW5kIHdhaXQgdGhlIGZpbmlzaGluZyB3b3JrIHRvIHN0YXJ0IHRoZSBuZXh0IHN0ZXAuXG4gICAgICByZXR1cm4gdGhpcy5fY3VycmVudFN0YWdlRGVmZXIucHJvbWlzZTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKHRoaXMuX25hbWUsIERhdGUubm93KCksXG4gICAgICAgIGBGaW5pc2hpbmcgc3RhZ2Ugd2l0aCBlcnJvcjogYCwgZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9XG5cbiAgX2Nsb3NlQ2hhbm5lbHMoKSB7XG4gICAgdGhpcy5faW5wdXRDaGFubmVsLmNsb3NlKCk7XG4gICAgdGhpcy5fb3V0cHV0Q2hhbm5lbC5jbG9zZSgpO1xuICAgIHRoaXMuX2NvbnRyb2xDaGFubmVsLmNsb3NlKCk7XG4gIH1cblxuICBfdHJhbnNmZXJUbyhzdGFnZU1ldGhvZCkge1xuICAgIC8vIDEuIEV2ZXJ5IHN0YWdlIGhhcyBhIHN0YWdlIG1ldGhvZC5cbiAgICAvLyAyLiBTdGFnZSBtZXRob2Qgd2lsbCBwZXJmb3JtIHNvbWUgdGFza3MgYXN5bmNocm9ub3VzbHlcbiAgICAvLyAzLiBBZnRlciBhbGwgdGhvc2UgdGFza3MgaXQgd2lsbCBzb2x2ZSB0aGUgcHJvbWlzZSBpdCByZXR1cm5zXG4gICAgLy8gNC4gQW5kIHdlIHdpbGwgcmVzb2x2ZSBhbm90aGVyIHByb21pc2UgdG8gbm90aWZ5IG91dHNpZGUgd29ybGRcbiAgICAvLyAgICB0aGUgc3RhZ2UgaXMgZG9uZS5cbiAgICAvL1xuICAgIC8vIEFzIGEgcmVzdWx0LCB3aGVuIHRyYW5zZmVycmluZzpcbiAgICAvLyAxLiBJbiB0aGVvcnkgdGhlIGN1cnJlbnQgc3RhZ2UgbWV0aG9kIGhhcyBiZWVuIGV4ZWN1dGVkIGJ1dCBtaWdodCBub3QgYmUgcmVzb2x2ZWQgeWV0LlxuICAgIC8vIDIuIEl0IHNob3VsZCBoYXMgYmVlbiBhdHRhY2hlZCB0byB0aGUgcGVuZGluZyBzdGFnZVxuICAgIC8vIDMuIFNvIHRoZSBuZXcgbWV0aG9kIHNob3VsZCBhdHRhY2ggdG8gdGhlIHBlbmRpbmcgcHJvbWlzZSBhcyB3ZWxsXG4gICAgLy8gNC4gTWVhbnMgaXQgc2hvdWxkIGJlIGV4ZWN1dGVkIGFuZCB3ZSBhcHBlbmQgaXRzIHByb21pc2UuXG4gICAgLy9cblxuICAgIHRoaXMuX3N0YWdlcy5wcm9taXNlID1cbiAgICAgIHRoaXMuX3N0YWdlcy5wcm9taXNlLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgbWFyayA9IERhdGUubm93KCk7XG4gICAgICAgIC8vIFRoZSBcImFmdGVyIHN0YWdlXCIgZGVmZXIuXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTdGFnZURlZmVyID0gbmV3IERlZmVyKCk7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRTdGFnZURlZmVyLnByb21pc2UgPSB0aGlzLl9jdXJyZW50U3RhZ2VEZWZlci5wcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICB9KTtcblxuICAgICAgICAvLyBUaGUgbWV0aG9kIGlzIGRvaW5nIHRoaW5ncyBpbiB0aGlzIHN0YWdlLCBzbyB3YWl0IGl0LlxuICAgICAgICByZXR1cm4gc3RhZ2VNZXRob2QuY2FsbCh0aGlzLCB0aGlzLl9jdXJyZW50U3RhZ2VEZWZlcik7XG4gICAgICB9KS5iaW5kKHRoaXMpKS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IodGhpcy5fbmFtZSwgRGF0ZS5ub3coKSxcbiAgICAgICAgICBgRXhlY3V0ZSBzdGFnZSBtZXRob2QgJHsgc3RhZ2VNZXRob2QubmFtZSB9IHdpdGggZXJyb3I6IGAsIGVycm9yKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvdXRlcnMvUm91dGVyLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidGltZVwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwidGltZVwiXG4gKiogbW9kdWxlIGlkID0gMjE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBjc3AgZnJvbSAnanMtY3NwJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAncm91dGVycy9Sb3V0ZXInO1xuaW1wb3J0IFRlcm1pbmF0aW5nU3RhZ2UgZnJvbSAncm91dGVycy9Mb2cvVGVybWluYXRpbmdTdGFnZSc7XG5cbi8vIFRPRE86IFdlIG5lZWQgdG8gZG8gdGltZSBhbGlnbm1lbnQgaW4gdGhpcyBzdGFnZSB3aGVuIGl0J3MgcmVhZHkuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb2xsZWN0aW5nU3RhZ2UgZXh0ZW5kcyBSb3V0ZXIge1xuXG4gIGNvbnN0cnVjdG9yKHByZXZpb3VzU3RhZ2VJbnN0YW5jZSkge1xuICAgIHN1cGVyKHByZXZpb3VzU3RhZ2VJbnN0YW5jZSk7XG4gICAgdGhpcy5fbmFtZSA9IHRoaXMuX3ByZXZpb3VzU3RhZ2UuX25hbWU7XG4gICAgdGhpcy5fcmVjb3JkID0gdGhpcy5fcHJldmlvdXNTdGFnZS5fcmVjb3JkO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgLy8gVE9ETzogV2UgbmVlZCB0byBkbyB0aW1lIGFsaWdubWVudCBpbiB0aGlzIHN0YWdlIHdoZW4gaXQncyByZWFkeS5cbiAgfVxuXG4gIF9vblN0YWdlQ2hhbmdlKHN0YWdlKSB7XG4gICAgc3dpdGNoKHN0YWdlKSB7XG4gICAgICBjYXNlICd0ZXJtaW5hdGluZyc6XG4gICAgICAgIHRoaXMuX3RyYW5zZmVyVG9UZXJtaW5hdGluZ1N0YWdlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIF90cmFuc2ZlclRvVGVybWluYXRpbmdTdGFnZSgpIHtcbiAgICB0aGlzLl90cmFuc2ZlclRvKFRlcm1pbmF0aW5nU3RhZ2UpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb3V0ZXJzL0xvZy9Db2xsZWN0aW5nU3RhZ2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBjc3AgZnJvbSAnanMtY3NwJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAncm91dGVycy9Sb3V0ZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUZXJtaW5hdGluZ1N0YWdlIGV4dGVuZHMgUm91dGVyIHtcblxuICBjb25zdHJ1Y3RvcihwcmV2aW91c1N0YWdlSW5zdGFuY2UpIHtcbiAgICBzdXBlcihwcmV2aW91c1N0YWdlSW5zdGFuY2UpO1xuICAgIHRoaXMuX3JlY29yZCA9IHRoaXMuX3ByZXZpb3VzU3RhZ2UuX3JlY29yZDtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIC8vIFNlbmQgb3V0IHRoZSBmaW5hbCBkYXRhLlxuICAgIGNzcC5wdXRBc3luYyh0aGlzLl9vdXRwdXRDaGFubmVsLFxuICAgICAgeyd0b3BpYyc6ICdkYXRhJywgJ3BheWxvYWQnOiB0aGlzLl9yZWNvcmR9KTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5fc3RvcExpc3RlblRvQ29udHJvbENoYW5uZWwoKTtcbiAgICB0aGlzLl9jbG9zZUNoYW5uZWxzKCk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvdXRlcnMvTG9nL1Rlcm1pbmF0aW5nU3RhZ2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBjc3AgZnJvbSAnanMtY3NwJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAncm91dGVycy9Sb3V0ZXInO1xuaW1wb3J0IENvbGxlY3RpbmdTdGFnZSBmcm9tICdyb3V0ZXJzL0xvZy9Db2xsZWN0aW5nU3RhZ2UnO1xuaW1wb3J0IFRlcm1pbmF0aW5nU3RhZ2UgZnJvbSAncm91dGVycy9Mb2cvVGVybWluYXRpbmdTdGFnZSc7XG5cbmltcG9ydCB7IGRlZmF1bHQgYXMgTG9nUmVjb3JkIH0gZnJvbSAncmVjb3JkL0xvZyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY29yZGluZ1N0YWdlIGV4dGVuZHMgUm91dGVyIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWdzSW5zdGFuY2UpIHtcbiAgICBzdXBlcihjb25maWdzSW5zdGFuY2UpO1xuICAgIC8vIFJvdXRlciBuYW1lOiAnbG9nJ1xuICAgIHRoaXMuX25hbWUgPSAnbG9nJztcblxuICAgIC8vIFRoZSBkZXZpY2Vsb2cgcm91dGVyIHdpbGwgZW1pdCBsb2cvZXJyb3IuXG4gICAgdGhpcy5fZGV2aWNlTG9nVG9waWMgPSAnbG9nJztcblxuICAgIGNvbnNvbGUubG9nKCc+Pj4+IGxvZyBjb25zdHJ1Y3RlZCcpO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5fcmVjb3JkID0gbmV3IExvZ1JlY29yZCgpO1xuICB9XG5cbiAgX29uSW5pdGlhbGl6ZWQoaW5pdGlhbGl6ZWRSb3V0ZXJzKSB7XG4gICAgc3VwZXIuX29uSW5pdGlhbGl6ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBjb25zb2xlLmxvZygnPj4+Pj4+IGluaXRpYWxpemVkIGNhbGxlZCBpbiBMb2cgcmVjb3JkaW5nJywgT2JqZWN0LmtleXModGhpcy5fcm91dGVycykpO1xuICAgIHRoaXMuX3JvdXRlcnMuZGV2aWNlbG9nLnN1YnNjcmliZSh0aGlzOjp0aGlzLl9jb25uZWN0VG9EZXZpY2VMb2cpO1xuICAgIGNvbnNvbGUubG9nKCc+Pj4gc3Vic2NyaWJlIGRldmljZWxvZyBjaGFubmVsJyk7XG4gIH1cblxuICBfb25TdGFnZUNoYW5nZShzdGFnZSkge1xuICAgIHN3aXRjaChzdGFnZSkge1xuICAgICAgY2FzZSAnY29sbGVjdGluZyc6XG4gICAgICAgIHRoaXMuX3RyYW5zZmVyVG9Db2xsZWN0aW5nU3RhZ2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0ZXJtaW5hdGluZyc6XG4gICAgICAgIHRoaXMuX3RyYW5zZmVyVG9UZXJtaW5hdGluZ1N0YWdlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIF9vbkxvZyhsb2cpIHtcbiAgICAvL2NvbnNvbGUubG9nKCc+Pj4+PiByZWRpcmVjdGVkIGZyb20gRGV2aWNlTG9nJyk7XG4gICAgdGhpcy5fcmVjb3JkLnB1c2gobG9nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOb3RlOiB0aGlzIHJvdXRlciBpZ25vcmVzIHRoZSBgdHJhbnNmZXJyZWREZWZlcnJlZGAgYmVjYXVzZVxuICAgKiBhZnRlciB0aGUgc3RhZ2UgdHJhbnNmZXJyZWQsIHRoZXJlIGlzIG5vIG5lZWQgdG8gbGlzdGVuIHRvXG4gICAqIHRoZSBkZXZpY2Vsb2cgcm91dGVyIGFnYWluLCBzbyB3ZSBkb24ndCBuZWVkIHRvIHJlY29ubmVjdCB0byBpdC5cbiAgICovXG4gIF9jb25uZWN0VG9EZXZpY2VMb2cocHVibGljYXRpb24sIHRyYW5zZmVycmVkRGVmZXJyZWQpIHtcbiAgICBjc3Aub3BlcmF0aW9ucy5wdWIuc3ViKHB1YmxpY2F0aW9uLFxuICAgICAgICB0aGlzLl9kZXZpY2VMb2dUb3BpYywgdGhpcy5faW5wdXRDaGFubmVsKTtcbiAgICB0aGlzLl9jb25zdW1lTG9ncygpO1xuICB9XG5cbiAgX2NvbnN1bWVMb2dzKCkge1xuICAgIGNzcC5nbygoZnVuY3Rpb24qKCkge1xuICAgICAgbGV0IHZhbHVlID0geWllbGQgdGhpcy5faW5wdXRDaGFubmVsO1xuICAgICAgd2hpbGUgKGNzcC5DTE9TRUQgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX29uTG9nKHZhbHVlKTtcbiAgICAgICAgdmFsdWUgPSB5aWVsZCB0aGlzLl9pbnB1dENoYW5uZWw7XG4gICAgICB9XG4gICAgfSkuYmluZCh0aGlzKSk7XG4gIH1cblxuICBfdHJhbnNmZXJUb0NvbGxlY3RpbmdTdGFnZSgpIHtcbiAgICB0aGlzLl90cmFuc2ZlclRvKENvbGxlY3RpbmdTdGFnZSk7XG4gIH1cblxuICBfdHJhbnNmZXJUb1Rlcm1pbmF0aW5nU3RhZ2UoKSB7XG4gICAgdGhpcy5fdHJhbnNmZXJUbyhUZXJtaW5hdGluZ1N0YWdlKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm91dGVycy9Mb2cvUmVjb3JkaW5nU3RhZ2UuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cblxuaW1wb3J0IHV0aWwgZnJvbSAndXRpbCc7XG5pbXBvcnQgdGVtcCBmcm9tICd0ZW1wJztcbmltcG9ydCBvcyBmcm9tICdvcyc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgY2hpbGRfcHJvY2VzcyBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCBjc3AgZnJvbSAnanMtY3NwJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAncm91dGVycy9Sb3V0ZXInO1xuaW1wb3J0IERlZmVyIGZyb20gJ0RlZmVyJztcbmltcG9ydCB7IGNoZWNrRGFlbW9uU2VydmVyLCBjb21tYW5kRGV2aWNlIH0gZnJvbSAnQW5kcm9pZERhZW1vbkJ1cyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcmVlblJlY29yZCBleHRlbmRzIFJvdXRlciB7XG5cbiAgY29uc3RydWN0b3IoY29uZmlncykge1xuICAgIHN1cGVyKGNvbmZpZ3MpO1xuICAgIHRoaXMuX25hbWUgPSAnc2NyZWVucmVjb3JkJztcbiAgICAvLyBYWFg6IEN1cnJlbnRseSB3ZSBvbmx5IGhhdmUgMTZtcy5cbiAgICAvLyBXZSBzaG91bGQgbW92ZSBpdCBpbnRvIHRoZSBjb25maWdpcy5cbiAgICB0aGlzLl9yZWNvcmRpbmdGUFMgPSAxNjtcbiAgICB0aGlzLl9leHRyYWN0ZWRGcmFtZUZpbGVUeXBlID0gJ3BuZyc7XG5cdFx0dGhpcy5fdXNlclByZWZlcmVuY2VzID0gbnVsbDtcbiAgICB0aGlzLl9wcmVmZXJlbmNlTmFtZSA9ICdsYXllcnMuc2NyZWVuLXJlY29yZGluZy5lbmFibGVkJztcblx0XHR0aGlzLl9wcmVmZXJlbmNlc1BhdGggPSAnL3N5c3RlbS9iMmcvZGVmYXVsdHMvcHJlZi91c2VyLmpzJztcblx0XHR0aGlzLl9wcmVmZXJlbmNlc1RlbXBGaWxlUGF0aCA9IHRlbXAucGF0aCgpO1xuICAgIHRoaXMuX2RldmljZVRhcmdldFBhdGggPSB0aGlzLmNvbmZpZ3MucGF0aC5yZWNvcmQudGFyZ2V0LmRldmljZTtcbiAgICB0aGlzLl9jb25zb2xlVGFyZ2V0UGF0aCA9IHRoaXMuY29uZmlncy5wYXRoLnJlY29yZC50YXJnZXQuY29uc29sZTtcblx0XHR0aGlzLl9hZGJQYXRoID0gdGhpcy5jb25maWdzLnBhdGguYWRiO1xuXG4gICAgdGhpcy5fZmZtcGVnUGF0aCA9IHRoaXMuY29uZmlncy5wYXRoLmZmbXBlZztcbiAgICB0aGlzLl9leHRyYWN0ZWRGcmFtZXNQYXRoID1cbiAgICAgIHRoaXMuX2J1aWxkRXh0cmFjdGVkRnJhbWVzUGF0aCh0aGlzLl9jb25zb2xlVGFyZ2V0UGF0aCk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICAvLyBDb25jYXQgdGhlIGZpcnN0IHN0YWdlIGhhbmRsZXIuXG4gICAgdGhpcy5fdHJhbnNmZXJUb1JlY29yZGluZ1N0YWdlKCk7XG4gICAgLy8gS2ljay1vZmYgaXQuXG4gICAgdGhpcy5fc3RhZ2VzLnJlc29sdmUoKTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5fc3RvcExpc3RlblRvQ29udHJvbENoYW5uZWwoKTtcbiAgICB0aGlzLl9jbG9zZUNoYW5uZWxzKCk7XG4gIH1cblxuICBfcmVjb3JkaW5nKGRlZmVyKSB7XG4gICAgY2hlY2tEYWVtb25TZXJ2ZXIodGhpcy5fYWRiUGF0aCk7XG4gICAgdGhpcy5fZmV0Y2hQcmVmZXJlbmNlcyh0aGlzLl9wcmVmZXJlbmNlc1BhdGgpO1xuICAgIHRoaXMuX3NldFByZWZlcmVuY2UoKTtcblxuICAgIGxldCBydW5JdCA9IGNoaWxkX3Byb2Nlc3Muc3Bhd24oXG4gICAgICB0aGlzLl9hZGJQYXRoLFxuICAgICAgWydzaGVsbCcsICdzY3JlZW5yZWNvcmQnLCB0aGlzLl9kZXZpY2VUYXJnZXRQYXRoXSxcbiAgICAgIHsgZGV0YWNoZWQ6IHRydWUgfVxuICAgICk7XG4gICAgcnVuSXQudW5yZWYoKTtcbiAgICBydW5JdC5zdGRvdXQub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgLy8gVGhpcyBtb2R1bGUgZG9uJ3QgZ2VuZXJhdGUgYW55IGRhdGEgZnJvbSBjb25zb2xlLlxuICAgIH0pO1xuICAgIHJ1bkl0LnN0ZGVyci5vbignZGF0YScsIChjaHVuaykgPT4ge1xuICAgICAgbGV0IHN0ckNodW5rID0gY2h1bmsudG9TdHJpbmcoKTtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuX25hbWUsIERhdGUubm93KCksXG4gICAgICAgIGBTZW5kIGEgbWVzc2FnZSBvZiBjb25zb2xlIGVycm9yOiAkeyBzdHJDaHVuayB9YCk7XG4gICAgICBjc3AucHV0QXN5bmModGhpcy5fb3V0cHV0Q2hhbm5lbCxcbiAgICAgICAgeyd0b3BpYyc6ICdlcnJvcicsICdzb3VyY2UnOiB0aGlzLl9uYW1lLCAncGF5bG9hZCc6IHN0ckNodW5rfSlcbiAgICB9KTtcbiAgICBydW5JdC5vbignY2xvc2UnLCAoc3RhdHVzKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLl9uYW1lLCBEYXRlLm5vdygpLFxuICAgICAgICBgU2VuZCBhIG1lc3NhZ2Ugb2Ygc3RyZWFtIGNsb3NlZDogJHsgc3RhdHVzIH0gYCk7XG4gICAgICBjc3AucHV0QXN5bmModGhpcy5fb3V0cHV0Q2hhbm5lbCxcbiAgICAgICAgeyd0b3BpYyc6ICdzdGF0dXMnLCAnc291cmNlJzogdGhpcy5fbmFtZSwgJ3BheWxvYWQnOiBzdGF0dXN9KTtcbiAgICB9KTtcblxuICAgIGxldCBvbktpbGxEZWZlciA9IG5ldyBEZWZlcigpO1xuICAgIHJ1bkl0Lm9uKCdleGl0JywgKCkgPT4ge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBjb21tYW5kRGV2aWNlKHRoaXMuX2FkYlBhdGgpKCdwdWxsJyxcbiAgICAgICAgICB0aGlzLl9kZXZpY2VUYXJnZXRQYXRoLCB0aGlzLl9jb25zb2xlVGFyZ2V0UGF0aCk7XG4gICAgICAgIGlmKCdkYXJ3aW4nID09PSBvcy5wbGF0Zm9ybSgpKSB7XG4gICAgICAgICAgLy8gT3IgdGhlIGZpbGUgd29uJ3Qgb3Blbi5cbiAgICAgICAgICB0aGlzLl9jaGFuZ2VEYXJ3aW5EZWZhdWx0R3JvdXAodGhpcy5fY29uc29sZVRhcmdldFBhdGgpO1xuICAgICAgICB9XG4gICAgICAgIG9uS2lsbERlZmVyLnJlc29sdmUoKTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIHdoaWxlIHRyYW5zZmVycmluZyBpbiBTY3JlZW5SZWNvcmQnLCBlKTtcbiAgICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgICAgfSwgNTAwKTtcbiAgICB9KTtcblxuICAgIGRlZmVyLnByb21pc2UgPVxuICAgICAgZGVmZXIucHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgICAgcnVuSXQua2lsbCgnU0lHSU5UJyk7XG4gICAgICAgIHJldHVybiBvbktpbGxEZWZlci5wcm9taXNlO1xuICAgICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgX2NvbGxlY3RpbmcoZGVmZXIpIHtcbiAgICBpZiAoMCA9PT0gZnMubHN0YXRTeW5jKHRoaXMuX2NvbnNvbGVUYXJnZXRQYXRoKS5zaXplKSB7XG4gICAgICAvLyBSZWNvcmRlZCBub3RoaW5nLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblx0XHRsZXQgd2F0Y2hlciA9IGZzLndhdGNoKHBhdGguZGlybmFtZSh0aGlzLl9jb25zb2xlVGFyZ2V0UGF0aCksXG4gICAgKGV2ZW50LCBmaWxlbmFtZSkgPT4ge1xuXHRcdFx0aWYgKGZpbGVuYW1lICYmICcuJyArIHRoaXMuX2V4dHJhY3RlZEZyYW1lRmlsZVR5cGUgPT09IHBhdGguZXh0bmFtZShmaWxlbmFtZSkpIHtcbiAgICAgICAgbGV0IGZ1bGxQYXRoID0gYCR7cGF0aC5kaXJuYW1lKHRoaXMuX2NvbnNvbGVUYXJnZXRQYXRoKSArIHBhdGguc2VwICsgZmlsZW5hbWV9YDtcbiAgICAgICAgbGV0IHBheWxvYWQgPSB7J3R5cGUnOiAnZXh0cmFjdGVkZnJhbWUnLFxuICAgICAgICAgJ29mZnNldCc6IHRoaXMuX3RpbWVPZmZzZXRGcm9tRmlsZU5hbWUoZmlsZW5hbWUpLCAnY29udGVudCc6IGZ1bGxQYXRofTtcblxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9uYW1lLCBEYXRlLm5vdygpLFxuICAgICAgICAgIGBTZW5kIGEgbWVzc2FnZSBvZiByZWNvcmRlZCBmaWxlIGNoYW5nZWQ6ICR7IHV0aWwuaW5zcGVjdChwYXlsb2FkKSB9IGApO1xuICAgICAgICBjc3AucHV0QXN5bmModGhpcy5fb3V0cHV0Q2hhbm5lbCwge1xuICAgICAgICAgICd0b3BpYyc6ICdsb2cnLFxuICAgICAgICAgICdzb3VyY2UnOiB0aGlzLl9uYW1lLFxuICAgICAgICAgICdwYXlsb2FkJzogcGF5bG9hZFxuICAgICAgICB9KTtcblx0XHRcdH1cblx0XHR9KTtcblxuICAgIGxldCBjb21tYW5kRGVmZXIgPSBuZXcgRGVmZXIoKTtcbiAgICAvL2ZmbXBlZyAtaSA8dGhlIGZpbGU+IC4vdGVtcC9pbWFnZSUwOGQucG5nXG4gICAgY2hpbGRfcHJvY2Vzcy5leGVjRmlsZSh0aGlzLl9mZm1wZWdQYXRoLFxuICAgICAgWyctaScsIHRoaXMuX2NvbnNvbGVUYXJnZXRQYXRoLCB0aGlzLl9leHRyYWN0ZWRGcmFtZXNQYXRoXSxcbiAgICAgIChlcnJvcikgPT4ge1xuICAgICAgICB3YXRjaGVyLmNsb3NlKCk7XG4gICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICAgIGNvbW1hbmREZWZlci5yZWplY3QoZXJyb3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbW1hbmREZWZlci5yZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gY29tbWFuZERlZmVyLnByb21pc2U7XG4gIH1cblxuICBfdGVybWluYXRpbmcoZGVmZXIpIHt9XG5cbiAgX3RpbWVPZmZzZXRGcm9tRmlsZU5hbWUoZmlsZW5hbWUpIHtcbiAgICAvLyBleDogdGVzdC5tcDRfMDAwMDAwMDFfXG4gICAgbGV0IHNlZ3MgPSBmaWxlbmFtZS5zcGxpdCgnXycpO1xuICAgIC8vIGV4OiBbJ3Rlc3QubXA0Jy4uLi4uLiwgJzAwMDAwMDAxJywgJyddO1xuICAgIGxldCBpZCA9IHBhcnNlSW50KHNlZ3Nbc2Vncy5sZW5ndGggLSAyXSwgMTApO1xuICAgIGlmIChpc05hTihpZCkpIHsgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZXh0cmFjdCBpbmRleCBmcm9tIGZpbGUgbmFtZTogJyArIGZpbGVuYW1lKTsgfVxuICAgIC8vIEFzc3VtZSB0aGUgZmlyc3QgZnJhbWUgKCcwMDAwMDAxJykgbWVhbnMgdGhlIHNlY29uZHMgMC5cbiAgICBsZXQgb2Zmc2V0ID0gdGhpcy5fcmVjb3JkaW5nRlBTICogKGlkIC0gMSk7XG4gICAgcmV0dXJuIG9mZnNldDtcbiAgfVxuXG5cdF9zZXRQcmVmZXJlbmNlKCkge1xuXHRcdGxldCB1c2VyUHJlZmVyZW5jZXMgPSB0aGlzLl9mZXRjaFByZWZlcmVuY2VzKHRoaXMuX3ByZWZlcmVuY2VzUGF0aCk7XG5cdFx0aWYgKCEhdXNlclByZWZlcmVuY2VzW3RoaXMuX3ByZWZlcmVuY2VOYW1lXSkge1xuXHRcdFx0cmV0dXJuOyAgLy8gVGhlIHByZWZlcmVuY2UgaGFzIGJlZW4gc2V0XG5cdFx0fVxuXHRcdHVzZXJQcmVmZXJlbmNlc1t0aGlzLl9wcmVmZXJlbmNlTmFtZV0gPSB0cnVlO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLl9wdXRQcmVmZXJlbmNlcyh1c2VyUHJlZmVyZW5jZXMpO1xuXHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJzIHdoZW4gcHV0IHRoZSB1cGRhdGVkIHByZWZlcmVuY2VzIGJhY2snLCBlKTtcblx0XHRcdHRocm93IGU7XG5cdFx0fSBmaW5hbGx5IHtcblx0XHRcdHRoaXMuX2NsZWFyTG9jYWxQcmVmZXJlbmNlcygpO1xuICAgICAgY29tbWFuZERldmljZSh0aGlzLl9hZGJQYXRoKSgncmVib290Jyk7XG5cdFx0fVxuXHR9XG5cblx0X3Vuc2V0UHJlZmVyZW5jZSgpIHtcblx0XHRsZXQgdXNlclByZWZlcmVuY2VzID0gdGhpcy5fZmV0Y2hQcmVmZXJlbmNlcyh0aGlzLl9wcmVmZXJlbmNlc1BhdGgpO1xuXHRcdGlmICghdGhpcy5fdXNlclByZWZlcmVuY2VzW3RoaXMuX3ByZWZlcmVuY2VOYW1lXSkge1xuXHRcdFx0cmV0dXJuOyAgLy8gVGhlIHByZWZlcmVuY2UgaGFzIGJlZW4gdW5zZXRcblx0XHR9XG5cdFx0ZGVsZXRlIHRoaXMuX3VzZXJQcmVmZXJlbmNlc1t0aGlzLl9wcmVmZXJlbmNlTmFtZV07XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuX3B1dFByZWZlcmVuY2VzKHRoaXMuX3VzZXJQcmVmZXJlbmNlcyk7XG5cdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cnMgd2hlbiBwdXQgdGhlIHVwZGF0ZWQgcHJlZmVyZW5jZXMgYmFjaycsIGUpO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0dGhpcy5fY2xlYXJMb2NhbFByZWZlcmVuY2VzKCk7XG5cdFx0XHRjb21tYW5kRGV2aWNlKHRoaXMuX2FkYlBhdGgpKCdyZWJvb3QnKTtcblx0XHR9XG5cdH1cblxuXHRfcHV0UHJlZmVyZW5jZXMocHJlZmVyZW5jZXMpIHtcblx0XHR0cnkge1xuXHRcdFx0bGV0IGxpbmVzID0gT2JqZWN0LmtleXMocHJlZmVyZW5jZXMpLm1hcChmdW5jdGlvbihrZXkpIHtcblx0XHRcdFx0bGV0IHZhbHVlID0gcHJlZmVyZW5jZXNba2V5XTtcbiAgICAgICAgaWYgKCdzdHJpbmcnICE9PSB0eXBlb2YgdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gYHByZWYoJyR7a2V5fScsICR7dmFsdWV9KTtgO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBgcHJlZignJHtrZXl9JywgXCIke3ZhbHVlfVwiKTtgO1xuICAgICAgICB9XG5cdFx0XHR9KTtcblx0XHRcdGZzLndyaXRlRmlsZVN5bmModGhpcy5fcHJlZmVyZW5jZXNUZW1wRmlsZVBhdGgsIGxpbmVzLmpvaW4oJ1xcbicpKTtcblx0XHRcdGNvbW1hbmREZXZpY2UodGhpcy5fYWRiUGF0aCkoJ3Jvb3QnKTtcblx0XHRcdGNvbW1hbmREZXZpY2UodGhpcy5fYWRiUGF0aCkoJ3JlbW91bnQnKTtcblx0XHRcdGNvbW1hbmREZXZpY2UodGhpcy5fYWRiUGF0aCkoJ3B1c2gnLFxuICAgICAgICB0aGlzLl9wcmVmZXJlbmNlc1RlbXBGaWxlUGF0aCwgdGhpcy5fcHJlZmVyZW5jZXNQYXRoKTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0ZnMuYWNjZXNzKHRoaXMuX3ByZWZlcmVuY2VzVGVtcEZpbGVQYXRoLCBmcy5GX09LLCAoYWNjZXNzRXJyb3IpID0+IHtcblx0XHRcdFx0aWYgKCFhY2Nlc3NFcnJvcikge1xuXHRcdFx0XHRcdGZzLnVubGlua1N5bmModGhpcy5fcHJlZmVyZW5jZXNUZW1wRmlsZVBhdGgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHQvLyBDbGVhciB0aGUgY2FjaGVkIGFuZCBjb250YW1pbmF0ZWQgdmVyc2lvbi5cblx0X2NsZWFyTG9jYWxQcmVmZXJlbmNlcygpIHtcblx0XHRkZWxldGUgdGhpcy5fdXNlclByZWZlcmVuY2VzO1xuXHR9XG5cblx0X2ZldGNoUHJlZmVyZW5jZXMocHJlZmVyZW5jZVBhdGgpIHtcblx0XHRpZiAodGhpcy5fdXNlclByZWZlcmVuY2VzKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5fdXNlclByZWZlcmVuY2VzO1xuXHRcdH1cblx0XHRsZXQgc3RyUHJlZnMgPVxuXHRcdFx0Y29tbWFuZERldmljZSh0aGlzLl9hZGJQYXRoKSgnc2hlbGwnLCAnY2F0JywgcHJlZmVyZW5jZVBhdGgpO1xuXHRcdHRyeSB7XG5cdFx0XHR0aGlzLl91c2VyUHJlZmVyZW5jZXMgPSB0aGlzLl9ldmFsUHJlZnMoc3RyUHJlZnMpO1xuXHRcdFx0cmV0dXJuIHRoaXMuX3VzZXJQcmVmZXJlbmNlcztcblx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VycyB3aGVuIHJlYWRpbmcgdGhlIHByZWZlcmVuY2VzOiAnLCBlKTtcblx0XHRcdHRocm93IGU7XG5cdFx0fVxuXHR9XG5cblx0Ly8gT3RoZXJ3aXNlIGl0J3MgZGlmZmljdWx0IHRvIGdyZXAgdGhlIHByZWZlcmVuY2UgYW5kIGl0J3MgdmFsdWUuXG5cdF9ldmFsUHJlZnMoc3RyUHJlZnMpIHtcblx0XHRsZXQgcHJlZmVyZW5jZXMgPSB7fTtcblx0XHRsZXQgcHJlZiA9IGZ1bmN0aW9uKGVudHJ5LCB2YWx1ZSkge1xuXHRcdFx0cHJlZmVyZW5jZXNbZW50cnldID0gdmFsdWU7XG5cdFx0fTtcblx0XHRldmFsKHN0clByZWZzKTsgLy9lc2xpbnQtZGlzYWJsZS1saW5lXG5cdFx0cmV0dXJuIHByZWZlcmVuY2VzO1xuXHR9XG5cbiAgX2NoYW5nZURhcndpbkRlZmF1bHRHcm91cChyZWNvcmRGaWxlUGF0aCkge1xuICAgIGNoaWxkX3Byb2Nlc3MuZXhlY1N5bmMoYGNoZ3JwIHN0YWZmICR7cmVjb3JkRmlsZVBhdGh9YCk7XG4gIH1cblxuICBfYnVpbGRFeHRyYWN0ZWRGcmFtZXNQYXRoKGNvbnNvbGVUYXJnZXRQYXRoKSB7XG4gICAgcmV0dXJuIGAke2NvbnNvbGVUYXJnZXRQYXRofV8lMDhkXy4ke3RoaXMuX2V4dHJhY3RlZEZyYW1lRmlsZVR5cGV9YDtcbiAgfVxuXG4gIF9vbkluaXRpYWxpemVkKGluaXRpYWxpemVkUm91dGVycykge1xuICAgIHN1cGVyLl9vbkluaXRpYWxpemVkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH1cblxuICBfb25TdGFnZUNoYW5nZShzdGFnZSkge1xuICAgIHN3aXRjaChzdGFnZSkge1xuICAgICAgY2FzZSAnY29sbGVjdGluZyc6XG4gICAgICAgIHRoaXMuX3RyYW5zZmVyVG9Db2xsZWN0aW5nU3RhZ2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0ZXJtaW5hdGluZyc6XG4gICAgICAgIHRoaXMuX3RyYW5zZmVyVG9UZXJtaW5hdGluZ1N0YWdlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIF90cmFuc2ZlclRvUmVjb3JkaW5nU3RhZ2UoKSB7XG4gICAgdGhpcy5fdHJhbnNmZXJUbyh0aGlzLl9yZWNvcmRpbmcpO1xuICB9XG5cbiAgX3RyYW5zZmVyVG9Db2xsZWN0aW5nU3RhZ2UoKSB7XG4gICAgdGhpcy5fdHJhbnNmZXJUbyh0aGlzLl9jb2xsZWN0aW5nKTtcbiAgfVxuXG4gIF90cmFuc2ZlclRvVGVybWluYXRpbmdTdGFnZSgpIHtcbiAgICB0aGlzLl90cmFuc2ZlclRvKHRoaXMuX3Rlcm1pbmF0aW5nKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm91dGVycy9TY3JlZW5SZWNvcmQuanNcbiAqKi8iLCJ2YXIgZnMgICA9IHJlcXVpcmUoJ2ZzJyksXG4gICAgcGF0aCA9IHJlcXVpcmUoJ3BhdGgnKSxcbiAgICBjbnN0ID0gcmVxdWlyZSgnY29uc3RhbnRzJyk7XG5cbnZhciByaW1yYWYgICAgID0gcmVxdWlyZSgncmltcmFmJyksXG4gICAgb3NUbXBkaXIgICA9IHJlcXVpcmUoJ29zLXRtcGRpcicpLFxuICAgIHJpbXJhZlN5bmMgPSByaW1yYWYuc3luYztcblxuLyogSEVMUEVSUyAqL1xuXG52YXIgUkRXUl9FWENMID0gY25zdC5PX0NSRUFUIHwgY25zdC5PX1RSVU5DIHwgY25zdC5PX1JEV1IgfCBjbnN0Lk9fRVhDTDtcblxudmFyIGdlbmVyYXRlTmFtZSA9IGZ1bmN0aW9uKHJhd0FmZml4ZXMsIGRlZmF1bHRQcmVmaXgpIHtcbiAgdmFyIGFmZml4ZXMgPSBwYXJzZUFmZml4ZXMocmF3QWZmaXhlcywgZGVmYXVsdFByZWZpeCk7XG4gIHZhciBub3cgPSBuZXcgRGF0ZSgpO1xuICB2YXIgbmFtZSA9IFthZmZpeGVzLnByZWZpeCxcbiAgICAgICAgICAgICAgbm93LmdldFllYXIoKSwgbm93LmdldE1vbnRoKCksIG5vdy5nZXREYXRlKCksXG4gICAgICAgICAgICAgICctJyxcbiAgICAgICAgICAgICAgcHJvY2Vzcy5waWQsXG4gICAgICAgICAgICAgICctJyxcbiAgICAgICAgICAgICAgKE1hdGgucmFuZG9tKCkgKiAweDEwMDAwMDAwMCArIDEpLnRvU3RyaW5nKDM2KSxcbiAgICAgICAgICAgICAgYWZmaXhlcy5zdWZmaXhdLmpvaW4oJycpO1xuICByZXR1cm4gcGF0aC5qb2luKGFmZml4ZXMuZGlyIHx8IGV4cG9ydHMuZGlyLCBuYW1lKTtcbn07XG5cbnZhciBwYXJzZUFmZml4ZXMgPSBmdW5jdGlvbihyYXdBZmZpeGVzLCBkZWZhdWx0UHJlZml4KSB7XG4gIHZhciBhZmZpeGVzID0ge3ByZWZpeDogbnVsbCwgc3VmZml4OiBudWxsfTtcbiAgaWYocmF3QWZmaXhlcykge1xuICAgIHN3aXRjaCAodHlwZW9mKHJhd0FmZml4ZXMpKSB7XG4gICAgY2FzZSAnc3RyaW5nJzpcbiAgICAgIGFmZml4ZXMucHJlZml4ID0gcmF3QWZmaXhlcztcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICBhZmZpeGVzID0gcmF3QWZmaXhlcztcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmtub3duIGFmZml4IGRlY2xhcmF0aW9uOiBcIiArIGFmZml4ZXMpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBhZmZpeGVzLnByZWZpeCA9IGRlZmF1bHRQcmVmaXg7XG4gIH1cbiAgcmV0dXJuIGFmZml4ZXM7XG59O1xuXG4vKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBEb24ndCBmb3JnZXQgdG8gY2FsbCB0cmFjaygpIGlmIHlvdSB3YW50IGZpbGUgdHJhY2tpbmcgYW5kIGV4aXQgaGFuZGxlcnMhXG4gKiAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gKiBXaGVuIGFueSB0ZW1wIGZpbGUgb3IgZGlyZWN0b3J5IGlzIGNyZWF0ZWQsIGl0IGlzIGFkZGVkIHRvIGZpbGVzVG9EZWxldGVcbiAqIG9yIGRpcnNUb0RlbGV0ZS4gVGhlIGZpcnN0IHRpbWUgYW55IHRlbXAgZmlsZSBpcyBjcmVhdGVkLCBhIGxpc3RlbmVyIGlzXG4gKiBhZGRlZCB0byByZW1vdmUgYWxsIHRlbXAgZmlsZXMgYW5kIGRpcmVjdG9yaWVzIGF0IGV4aXQuXG4gKi9cbnZhciB0cmFja2luZyA9IGZhbHNlO1xudmFyIHRyYWNrID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgdHJhY2tpbmcgPSAodmFsdWUgIT09IGZhbHNlKTtcbiAgcmV0dXJuIG1vZHVsZS5leHBvcnRzOyAvLyBjaGFpbmFibGVcbn07XG52YXIgZXhpdExpc3RlbmVyQXR0YWNoZWQgPSBmYWxzZTtcbnZhciBmaWxlc1RvRGVsZXRlID0gW107XG52YXIgZGlyc1RvRGVsZXRlID0gW107XG5cbmZ1bmN0aW9uIGRlbGV0ZUZpbGVPbkV4aXQoZmlsZVBhdGgpIHtcbiAgaWYgKCF0cmFja2luZykgcmV0dXJuIGZhbHNlO1xuICBhdHRhY2hFeGl0TGlzdGVuZXIoKTtcbiAgZmlsZXNUb0RlbGV0ZS5wdXNoKGZpbGVQYXRoKTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlRGlyT25FeGl0KGRpclBhdGgpIHtcbiAgaWYgKCF0cmFja2luZykgcmV0dXJuIGZhbHNlO1xuICBhdHRhY2hFeGl0TGlzdGVuZXIoKTtcbiAgZGlyc1RvRGVsZXRlLnB1c2goZGlyUGF0aCk7XG59XG5cbmZ1bmN0aW9uIGF0dGFjaEV4aXRMaXN0ZW5lcigpIHtcbiAgaWYgKCF0cmFja2luZykgcmV0dXJuIGZhbHNlO1xuICBpZiAoIWV4aXRMaXN0ZW5lckF0dGFjaGVkKSB7XG4gICAgcHJvY2Vzcy5hZGRMaXN0ZW5lcignZXhpdCcsIGNsZWFudXBTeW5jKTtcbiAgICBleGl0TGlzdGVuZXJBdHRhY2hlZCA9IHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYW51cEZpbGVzU3luYygpIHtcbiAgaWYgKCF0cmFja2luZykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgY291bnQgPSAwO1xuICB2YXIgdG9EZWxldGU7XG4gIHdoaWxlICgodG9EZWxldGUgPSBmaWxlc1RvRGVsZXRlLnNoaWZ0KCkpICE9PSB1bmRlZmluZWQpIHtcbiAgICByaW1yYWZTeW5jKHRvRGVsZXRlKTtcbiAgICBjb3VudCsrO1xuICB9XG4gIHJldHVybiBjb3VudDtcbn1cblxuZnVuY3Rpb24gY2xlYW51cEZpbGVzKGNhbGxiYWNrKSB7XG4gIGlmICghdHJhY2tpbmcpIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcihcIm5vdCB0cmFja2luZ1wiKSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICB2YXIgY291bnQgPSAwO1xuICB2YXIgbGVmdCA9IGZpbGVzVG9EZWxldGUubGVuZ3RoO1xuICBpZiAoIWxlZnQpIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKG51bGwsIGNvdW50KTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciB0b0RlbGV0ZTtcbiAgdmFyIHJpbXJhZkNhbGxiYWNrID0gZnVuY3Rpb24oZXJyKSB7XG4gICAgaWYgKCFsZWZ0KSB7XG4gICAgICAvLyBQcmV2ZW50IHByb2Nlc3NpbmcgaWYgYWJvcnRlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZXJyKSB7XG4gICAgICAvLyBUaGlzIHNob3VsZG4ndCBoYXBwZW47IHBhc3MgZXJyb3IgdG8gY2FsbGJhY2sgYW5kIGFib3J0XG4gICAgICAvLyBwcm9jZXNzaW5nXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soZXJyKTtcbiAgICAgIH1cbiAgICAgIGxlZnQgPSAwO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudCsrO1xuICAgIH1cbiAgICBsZWZ0LS07XG4gICAgaWYgKCFsZWZ0ICYmIGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayhudWxsLCBjb3VudCk7XG4gICAgfVxuICB9O1xuICB3aGlsZSAoKHRvRGVsZXRlID0gZmlsZXNUb0RlbGV0ZS5zaGlmdCgpKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmltcmFmKHRvRGVsZXRlLCByaW1yYWZDYWxsYmFjayk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYW51cERpcnNTeW5jKCkge1xuICBpZiAoIXRyYWNraW5nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBjb3VudCA9IDA7XG4gIHZhciB0b0RlbGV0ZTtcbiAgd2hpbGUgKCh0b0RlbGV0ZSA9IGRpcnNUb0RlbGV0ZS5zaGlmdCgpKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmltcmFmU3luYyh0b0RlbGV0ZSk7XG4gICAgY291bnQrKztcbiAgfVxuICByZXR1cm4gY291bnQ7XG59XG5cbmZ1bmN0aW9uIGNsZWFudXBEaXJzKGNhbGxiYWNrKSB7XG4gIGlmICghdHJhY2tpbmcpIHtcbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKG5ldyBFcnJvcihcIm5vdCB0cmFja2luZ1wiKSk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICB2YXIgY291bnQgPSAwO1xuICB2YXIgbGVmdCA9IGRpcnNUb0RlbGV0ZS5sZW5ndGg7XG4gIGlmICghbGVmdCkge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2sobnVsbCwgY291bnQpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIHRvRGVsZXRlO1xuICB2YXIgcmltcmFmQ2FsbGJhY2sgPSBmdW5jdGlvbiAoZXJyKSB7XG4gICAgaWYgKCFsZWZ0KSB7XG4gICAgICAvLyBQcmV2ZW50IHByb2Nlc3NpbmcgaWYgYWJvcnRlZFxuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZXJyKSB7XG4gICAgICAvLyByaW1yYWYgaGFuZGxlcyBtb3N0IFwibm9ybWFsXCIgZXJyb3JzOyBwYXNzIHRoZSBlcnJvciB0byB0aGVcbiAgICAgIC8vIGNhbGxiYWNrIGFuZCBhYm9ydCBwcm9jZXNzaW5nXG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soZXJyLCBjb3VudCk7XG4gICAgICB9XG4gICAgICBsZWZ0ID0gMDtcbiAgICAgIHJldHVybjtcbiAgICB9IGVsc2Uge1xuICAgICAgY291bnQ7XG4gICAgfVxuICAgIGxlZnQtLTtcbiAgICBpZiAoIWxlZnQgJiYgY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKG51bGwsIGNvdW50KTtcbiAgICB9XG4gIH07XG4gIHdoaWxlICgodG9EZWxldGUgPSBkaXJzVG9EZWxldGUuc2hpZnQoKSkgIT09IHVuZGVmaW5lZCkge1xuICAgIHJpbXJhZih0b0RlbGV0ZSwgcmltcmFmQ2FsbGJhY2spO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNsZWFudXBTeW5jKCkge1xuICBpZiAoIXRyYWNraW5nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBmaWxlQ291bnQgPSBjbGVhbnVwRmlsZXNTeW5jKCk7XG4gIHZhciBkaXJDb3VudCAgPSBjbGVhbnVwRGlyc1N5bmMoKTtcbiAgcmV0dXJuIHtmaWxlczogZmlsZUNvdW50LCBkaXJzOiBkaXJDb3VudH07XG59XG5cbmZ1bmN0aW9uIGNsZWFudXAoY2FsbGJhY2spIHtcbiAgaWYgKCF0cmFja2luZykge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2sobmV3IEVycm9yKFwibm90IHRyYWNraW5nXCIpKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIGNsZWFudXBGaWxlcyhmdW5jdGlvbihmaWxlRXJyLCBmaWxlQ291bnQpIHtcbiAgICBpZiAoZmlsZUVycikge1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIGNhbGxiYWNrKGZpbGVFcnIsIHtmaWxlczogZmlsZUNvdW50fSlcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgY2xlYW51cERpcnMoZnVuY3Rpb24oZGlyRXJyLCBkaXJDb3VudCkge1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBjYWxsYmFjayhkaXJFcnIsIHtmaWxlczogZmlsZUNvdW50LCBkaXJzOiBkaXJDb3VudH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG4vKiBESVJFQ1RPUklFUyAqL1xuXG5mdW5jdGlvbiBta2RpcihhZmZpeGVzLCBjYWxsYmFjaykge1xuICB2YXIgZGlyUGF0aCA9IGdlbmVyYXRlTmFtZShhZmZpeGVzLCAnZC0nKTtcbiAgZnMubWtkaXIoZGlyUGF0aCwgMDcwMCwgZnVuY3Rpb24oZXJyKSB7XG4gICAgaWYgKCFlcnIpIHtcbiAgICAgIGRlbGV0ZURpck9uRXhpdChkaXJQYXRoKTtcbiAgICB9XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayhlcnIsIGRpclBhdGgpO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG1rZGlyU3luYyhhZmZpeGVzKSB7XG4gIHZhciBkaXJQYXRoID0gZ2VuZXJhdGVOYW1lKGFmZml4ZXMsICdkLScpO1xuICBmcy5ta2RpclN5bmMoZGlyUGF0aCwgMDcwMCk7XG4gIGRlbGV0ZURpck9uRXhpdChkaXJQYXRoKTtcbiAgcmV0dXJuIGRpclBhdGg7XG59XG5cbi8qIEZJTEVTICovXG5cbmZ1bmN0aW9uIG9wZW4oYWZmaXhlcywgY2FsbGJhY2spIHtcbiAgdmFyIGZpbGVQYXRoID0gZ2VuZXJhdGVOYW1lKGFmZml4ZXMsICdmLScpO1xuICBmcy5vcGVuKGZpbGVQYXRoLCBSRFdSX0VYQ0wsIDA2MDAsIGZ1bmN0aW9uKGVyciwgZmQpIHtcbiAgICBpZiAoIWVycikge1xuICAgICAgZGVsZXRlRmlsZU9uRXhpdChmaWxlUGF0aCk7XG4gICAgfVxuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2soZXJyLCB7cGF0aDogZmlsZVBhdGgsIGZkOiBmZH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIG9wZW5TeW5jKGFmZml4ZXMpIHtcbiAgdmFyIGZpbGVQYXRoID0gZ2VuZXJhdGVOYW1lKGFmZml4ZXMsICdmLScpO1xuICB2YXIgZmQgPSBmcy5vcGVuU3luYyhmaWxlUGF0aCwgUkRXUl9FWENMLCAwNjAwKTtcbiAgZGVsZXRlRmlsZU9uRXhpdChmaWxlUGF0aCk7XG4gIHJldHVybiB7cGF0aDogZmlsZVBhdGgsIGZkOiBmZH07XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVdyaXRlU3RyZWFtKGFmZml4ZXMpIHtcbiAgdmFyIGZpbGVQYXRoID0gZ2VuZXJhdGVOYW1lKGFmZml4ZXMsICdzLScpO1xuICB2YXIgc3RyZWFtID0gZnMuY3JlYXRlV3JpdGVTdHJlYW0oZmlsZVBhdGgsIHtmbGFnczogUkRXUl9FWENMLCBtb2RlOiAwNjAwfSk7XG4gIGRlbGV0ZUZpbGVPbkV4aXQoZmlsZVBhdGgpO1xuICByZXR1cm4gc3RyZWFtO1xufVxuXG4vKiBFWFBPUlRTICovXG4vLyBTZXR0aW5nc1xuZXhwb3J0cy5kaXIgICAgICAgICAgICAgICA9IHBhdGgucmVzb2x2ZShvc1RtcGRpcigpKTtcbmV4cG9ydHMudHJhY2sgICAgICAgICAgICAgPSB0cmFjaztcbi8vIEZ1bmN0aW9uc1xuZXhwb3J0cy5ta2RpciAgICAgICAgICAgICA9IG1rZGlyO1xuZXhwb3J0cy5ta2RpclN5bmMgICAgICAgICA9IG1rZGlyU3luYztcbmV4cG9ydHMub3BlbiAgICAgICAgICAgICAgPSBvcGVuO1xuZXhwb3J0cy5vcGVuU3luYyAgICAgICAgICA9IG9wZW5TeW5jO1xuZXhwb3J0cy5wYXRoICAgICAgICAgICAgICA9IGdlbmVyYXRlTmFtZTtcbmV4cG9ydHMuY2xlYW51cCAgICAgICAgICAgPSBjbGVhbnVwO1xuZXhwb3J0cy5jbGVhbnVwU3luYyAgICAgICA9IGNsZWFudXBTeW5jO1xuZXhwb3J0cy5jcmVhdGVXcml0ZVN0cmVhbSA9IGNyZWF0ZVdyaXRlU3RyZWFtO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdGVtcC9saWIvdGVtcC5qc1xuICoqIG1vZHVsZSBpZCA9IDIyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY29uc3RhbnRzXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJjb25zdGFudHNcIlxuICoqIG1vZHVsZSBpZCA9IDIyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByaW1yYWZcbnJpbXJhZi5zeW5jID0gcmltcmFmU3luY1xuXG52YXIgYXNzZXJ0ID0gcmVxdWlyZShcImFzc2VydFwiKVxudmFyIHBhdGggPSByZXF1aXJlKFwicGF0aFwiKVxudmFyIGZzID0gcmVxdWlyZShcImZzXCIpXG5cbi8vIGZvciBFTUZJTEUgaGFuZGxpbmdcbnZhciB0aW1lb3V0ID0gMFxuZXhwb3J0cy5FTUZJTEVfTUFYID0gMTAwMFxuZXhwb3J0cy5CVVNZVFJJRVNfTUFYID0gM1xuXG52YXIgaXNXaW5kb3dzID0gKHByb2Nlc3MucGxhdGZvcm0gPT09IFwid2luMzJcIilcblxuZnVuY3Rpb24gZGVmYXVsdHMgKG9wdGlvbnMpIHtcbiAgdmFyIG1ldGhvZHMgPSBbXG4gICAgJ3VubGluaycsXG4gICAgJ2NobW9kJyxcbiAgICAnc3RhdCcsXG4gICAgJ3JtZGlyJyxcbiAgICAncmVhZGRpcidcbiAgXVxuICBtZXRob2RzLmZvckVhY2goZnVuY3Rpb24obSkge1xuICAgIG9wdGlvbnNbbV0gPSBvcHRpb25zW21dIHx8IGZzW21dXG4gICAgbSA9IG0gKyAnU3luYydcbiAgICBvcHRpb25zW21dID0gb3B0aW9uc1ttXSB8fCBmc1ttXVxuICB9KVxufVxuXG5mdW5jdGlvbiByaW1yYWYgKHAsIG9wdGlvbnMsIGNiKSB7XG4gIGlmICh0eXBlb2Ygb3B0aW9ucyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGNiID0gb3B0aW9uc1xuICAgIG9wdGlvbnMgPSB7fVxuICB9XG4gIGFzc2VydChwKVxuICBhc3NlcnQob3B0aW9ucylcbiAgYXNzZXJ0KHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJylcblxuICBkZWZhdWx0cyhvcHRpb25zKVxuXG4gIGlmICghY2IpIHRocm93IG5ldyBFcnJvcihcIk5vIGNhbGxiYWNrIHBhc3NlZCB0byByaW1yYWYoKVwiKVxuXG4gIHZhciBidXN5VHJpZXMgPSAwXG4gIHJpbXJhZl8ocCwgb3B0aW9ucywgZnVuY3Rpb24gQ0IgKGVyKSB7XG4gICAgaWYgKGVyKSB7XG4gICAgICBpZiAoaXNXaW5kb3dzICYmIChlci5jb2RlID09PSBcIkVCVVNZXCIgfHwgZXIuY29kZSA9PT0gXCJFTk9URU1QVFlcIikgJiZcbiAgICAgICAgICBidXN5VHJpZXMgPCBleHBvcnRzLkJVU1lUUklFU19NQVgpIHtcbiAgICAgICAgYnVzeVRyaWVzICsrXG4gICAgICAgIHZhciB0aW1lID0gYnVzeVRyaWVzICogMTAwXG4gICAgICAgIC8vIHRyeSBhZ2Fpbiwgd2l0aCB0aGUgc2FtZSBleGFjdCBjYWxsYmFjayBhcyB0aGlzIG9uZS5cbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJpbXJhZl8ocCwgb3B0aW9ucywgQ0IpXG4gICAgICAgIH0sIHRpbWUpXG4gICAgICB9XG5cbiAgICAgIC8vIHRoaXMgb25lIHdvbid0IGhhcHBlbiBpZiBncmFjZWZ1bC1mcyBpcyB1c2VkLlxuICAgICAgaWYgKGVyLmNvZGUgPT09IFwiRU1GSUxFXCIgJiYgdGltZW91dCA8IGV4cG9ydHMuRU1GSUxFX01BWCkge1xuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmltcmFmXyhwLCBvcHRpb25zLCBDQilcbiAgICAgICAgfSwgdGltZW91dCArKylcbiAgICAgIH1cblxuICAgICAgLy8gYWxyZWFkeSBnb25lXG4gICAgICBpZiAoZXIuY29kZSA9PT0gXCJFTk9FTlRcIikgZXIgPSBudWxsXG4gICAgfVxuXG4gICAgdGltZW91dCA9IDBcbiAgICBjYihlcilcbiAgfSlcbn1cblxuLy8gVHdvIHBvc3NpYmxlIHN0cmF0ZWdpZXMuXG4vLyAxLiBBc3N1bWUgaXQncyBhIGZpbGUuICB1bmxpbmsgaXQsIHRoZW4gZG8gdGhlIGRpciBzdHVmZiBvbiBFUEVSTSBvciBFSVNESVJcbi8vIDIuIEFzc3VtZSBpdCdzIGEgZGlyZWN0b3J5LiAgcmVhZGRpciwgdGhlbiBkbyB0aGUgZmlsZSBzdHVmZiBvbiBFTk9URElSXG4vL1xuLy8gQm90aCByZXN1bHQgaW4gYW4gZXh0cmEgc3lzY2FsbCB3aGVuIHlvdSBndWVzcyB3cm9uZy4gIEhvd2V2ZXIsIHRoZXJlXG4vLyBhcmUgbGlrZWx5IGZhciBtb3JlIG5vcm1hbCBmaWxlcyBpbiB0aGUgd29ybGQgdGhhbiBkaXJlY3Rvcmllcy4gIFRoaXNcbi8vIGlzIGJhc2VkIG9uIHRoZSBhc3N1bXB0aW9uIHRoYXQgYSB0aGUgYXZlcmFnZSBudW1iZXIgb2YgZmlsZXMgcGVyXG4vLyBkaXJlY3RvcnkgaXMgPj0gMS5cbi8vXG4vLyBJZiBhbnlvbmUgZXZlciBjb21wbGFpbnMgYWJvdXQgdGhpcywgdGhlbiBJIGd1ZXNzIHRoZSBzdHJhdGVneSBjb3VsZFxuLy8gYmUgbWFkZSBjb25maWd1cmFibGUgc29tZWhvdy4gIEJ1dCB1bnRpbCB0aGVuLCBZQUdOSS5cbmZ1bmN0aW9uIHJpbXJhZl8gKHAsIG9wdGlvbnMsIGNiKSB7XG4gIGFzc2VydChwKVxuICBhc3NlcnQob3B0aW9ucylcbiAgYXNzZXJ0KHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJylcblxuICBvcHRpb25zLnVubGluayhwLCBmdW5jdGlvbiAoZXIpIHtcbiAgICBpZiAoZXIpIHtcbiAgICAgIGlmIChlci5jb2RlID09PSBcIkVOT0VOVFwiKVxuICAgICAgICByZXR1cm4gY2IobnVsbClcbiAgICAgIGlmIChlci5jb2RlID09PSBcIkVQRVJNXCIpXG4gICAgICAgIHJldHVybiAoaXNXaW5kb3dzKVxuICAgICAgICAgID8gZml4V2luRVBFUk0ocCwgb3B0aW9ucywgZXIsIGNiKVxuICAgICAgICAgIDogcm1kaXIocCwgb3B0aW9ucywgZXIsIGNiKVxuICAgICAgaWYgKGVyLmNvZGUgPT09IFwiRUlTRElSXCIpXG4gICAgICAgIHJldHVybiBybWRpcihwLCBvcHRpb25zLCBlciwgY2IpXG4gICAgfVxuICAgIHJldHVybiBjYihlcilcbiAgfSlcbn1cblxuZnVuY3Rpb24gZml4V2luRVBFUk0gKHAsIG9wdGlvbnMsIGVyLCBjYikge1xuICBhc3NlcnQocClcbiAgYXNzZXJ0KG9wdGlvbnMpXG4gIGFzc2VydCh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpXG4gIGlmIChlcilcbiAgICBhc3NlcnQoZXIgaW5zdGFuY2VvZiBFcnJvcilcblxuICBvcHRpb25zLmNobW9kKHAsIDY2NiwgZnVuY3Rpb24gKGVyMikge1xuICAgIGlmIChlcjIpXG4gICAgICBjYihlcjIuY29kZSA9PT0gXCJFTk9FTlRcIiA/IG51bGwgOiBlcilcbiAgICBlbHNlXG4gICAgICBvcHRpb25zLnN0YXQocCwgZnVuY3Rpb24oZXIzLCBzdGF0cykge1xuICAgICAgICBpZiAoZXIzKVxuICAgICAgICAgIGNiKGVyMy5jb2RlID09PSBcIkVOT0VOVFwiID8gbnVsbCA6IGVyKVxuICAgICAgICBlbHNlIGlmIChzdGF0cy5pc0RpcmVjdG9yeSgpKVxuICAgICAgICAgIHJtZGlyKHAsIG9wdGlvbnMsIGVyLCBjYilcbiAgICAgICAgZWxzZVxuICAgICAgICAgIG9wdGlvbnMudW5saW5rKHAsIGNiKVxuICAgICAgfSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gZml4V2luRVBFUk1TeW5jIChwLCBvcHRpb25zLCBlcikge1xuICBhc3NlcnQocClcbiAgYXNzZXJ0KG9wdGlvbnMpXG4gIGlmIChlcilcbiAgICBhc3NlcnQoZXIgaW5zdGFuY2VvZiBFcnJvcilcblxuICB0cnkge1xuICAgIG9wdGlvbnMuY2htb2RTeW5jKHAsIDY2NilcbiAgfSBjYXRjaCAoZXIyKSB7XG4gICAgaWYgKGVyMi5jb2RlID09PSBcIkVOT0VOVFwiKVxuICAgICAgcmV0dXJuXG4gICAgZWxzZVxuICAgICAgdGhyb3cgZXJcbiAgfVxuXG4gIHRyeSB7XG4gICAgdmFyIHN0YXRzID0gb3B0aW9ucy5zdGF0U3luYyhwKVxuICB9IGNhdGNoIChlcjMpIHtcbiAgICBpZiAoZXIzLmNvZGUgPT09IFwiRU5PRU5UXCIpXG4gICAgICByZXR1cm5cbiAgICBlbHNlXG4gICAgICB0aHJvdyBlclxuICB9XG5cbiAgaWYgKHN0YXRzLmlzRGlyZWN0b3J5KCkpXG4gICAgcm1kaXJTeW5jKHAsIG9wdGlvbnMsIGVyKVxuICBlbHNlXG4gICAgb3B0aW9ucy51bmxpbmtTeW5jKHApXG59XG5cbmZ1bmN0aW9uIHJtZGlyIChwLCBvcHRpb25zLCBvcmlnaW5hbEVyLCBjYikge1xuICBhc3NlcnQocClcbiAgYXNzZXJ0KG9wdGlvbnMpXG4gIGlmIChvcmlnaW5hbEVyKVxuICAgIGFzc2VydChvcmlnaW5hbEVyIGluc3RhbmNlb2YgRXJyb3IpXG4gIGFzc2VydCh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpXG5cbiAgLy8gdHJ5IHRvIHJtZGlyIGZpcnN0LCBhbmQgb25seSByZWFkZGlyIG9uIEVOT1RFTVBUWSBvciBFRVhJU1QgKFN1bk9TKVxuICAvLyBpZiB3ZSBndWVzc2VkIHdyb25nLCBhbmQgaXQncyBub3QgYSBkaXJlY3RvcnksIHRoZW5cbiAgLy8gcmFpc2UgdGhlIG9yaWdpbmFsIGVycm9yLlxuICBvcHRpb25zLnJtZGlyKHAsIGZ1bmN0aW9uIChlcikge1xuICAgIGlmIChlciAmJiAoZXIuY29kZSA9PT0gXCJFTk9URU1QVFlcIiB8fCBlci5jb2RlID09PSBcIkVFWElTVFwiIHx8IGVyLmNvZGUgPT09IFwiRVBFUk1cIikpXG4gICAgICBybWtpZHMocCwgb3B0aW9ucywgY2IpXG4gICAgZWxzZSBpZiAoZXIgJiYgZXIuY29kZSA9PT0gXCJFTk9URElSXCIpXG4gICAgICBjYihvcmlnaW5hbEVyKVxuICAgIGVsc2VcbiAgICAgIGNiKGVyKVxuICB9KVxufVxuXG5mdW5jdGlvbiBybWtpZHMocCwgb3B0aW9ucywgY2IpIHtcbiAgYXNzZXJ0KHApXG4gIGFzc2VydChvcHRpb25zKVxuICBhc3NlcnQodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKVxuXG4gIG9wdGlvbnMucmVhZGRpcihwLCBmdW5jdGlvbiAoZXIsIGZpbGVzKSB7XG4gICAgaWYgKGVyKVxuICAgICAgcmV0dXJuIGNiKGVyKVxuICAgIHZhciBuID0gZmlsZXMubGVuZ3RoXG4gICAgaWYgKG4gPT09IDApXG4gICAgICByZXR1cm4gb3B0aW9ucy5ybWRpcihwLCBjYilcbiAgICB2YXIgZXJyU3RhdGVcbiAgICBmaWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChmKSB7XG4gICAgICByaW1yYWYocGF0aC5qb2luKHAsIGYpLCBvcHRpb25zLCBmdW5jdGlvbiAoZXIpIHtcbiAgICAgICAgaWYgKGVyclN0YXRlKVxuICAgICAgICAgIHJldHVyblxuICAgICAgICBpZiAoZXIpXG4gICAgICAgICAgcmV0dXJuIGNiKGVyclN0YXRlID0gZXIpXG4gICAgICAgIGlmICgtLW4gPT09IDApXG4gICAgICAgICAgb3B0aW9ucy5ybWRpcihwLCBjYilcbiAgICAgIH0pXG4gICAgfSlcbiAgfSlcbn1cblxuLy8gdGhpcyBsb29rcyBzaW1wbGVyLCBhbmQgaXMgc3RyaWN0bHkgKmZhc3RlciosIGJ1dCB3aWxsXG4vLyB0aWUgdXAgdGhlIEphdmFTY3JpcHQgdGhyZWFkIGFuZCBmYWlsIG9uIGV4Y2Vzc2l2ZWx5XG4vLyBkZWVwIGRpcmVjdG9yeSB0cmVlcy5cbmZ1bmN0aW9uIHJpbXJhZlN5bmMgKHAsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge31cbiAgZGVmYXVsdHMob3B0aW9ucylcblxuICBhc3NlcnQocClcbiAgYXNzZXJ0KG9wdGlvbnMpXG5cbiAgdHJ5IHtcbiAgICBvcHRpb25zLnVubGlua1N5bmMocClcbiAgfSBjYXRjaCAoZXIpIHtcbiAgICBpZiAoZXIuY29kZSA9PT0gXCJFTk9FTlRcIilcbiAgICAgIHJldHVyblxuICAgIGlmIChlci5jb2RlID09PSBcIkVQRVJNXCIpXG4gICAgICByZXR1cm4gaXNXaW5kb3dzID8gZml4V2luRVBFUk1TeW5jKHAsIG9wdGlvbnMsIGVyKSA6IHJtZGlyU3luYyhwLCBvcHRpb25zLCBlcilcbiAgICBpZiAoZXIuY29kZSAhPT0gXCJFSVNESVJcIilcbiAgICAgIHRocm93IGVyXG4gICAgcm1kaXJTeW5jKHAsIG9wdGlvbnMsIGVyKVxuICB9XG59XG5cbmZ1bmN0aW9uIHJtZGlyU3luYyAocCwgb3B0aW9ucywgb3JpZ2luYWxFcikge1xuICBhc3NlcnQocClcbiAgYXNzZXJ0KG9wdGlvbnMpXG4gIGlmIChvcmlnaW5hbEVyKVxuICAgIGFzc2VydChvcmlnaW5hbEVyIGluc3RhbmNlb2YgRXJyb3IpXG5cbiAgdHJ5IHtcbiAgICBvcHRpb25zLnJtZGlyU3luYyhwKVxuICB9IGNhdGNoIChlcikge1xuICAgIGlmIChlci5jb2RlID09PSBcIkVOT0VOVFwiKVxuICAgICAgcmV0dXJuXG4gICAgaWYgKGVyLmNvZGUgPT09IFwiRU5PVERJUlwiKVxuICAgICAgdGhyb3cgb3JpZ2luYWxFclxuICAgIGlmIChlci5jb2RlID09PSBcIkVOT1RFTVBUWVwiIHx8IGVyLmNvZGUgPT09IFwiRUVYSVNUXCIgfHwgZXIuY29kZSA9PT0gXCJFUEVSTVwiKVxuICAgICAgcm1raWRzU3luYyhwLCBvcHRpb25zKVxuICB9XG59XG5cbmZ1bmN0aW9uIHJta2lkc1N5bmMgKHAsIG9wdGlvbnMpIHtcbiAgYXNzZXJ0KHApXG4gIGFzc2VydChvcHRpb25zKVxuICBvcHRpb25zLnJlYWRkaXJTeW5jKHApLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICByaW1yYWZTeW5jKHBhdGguam9pbihwLCBmKSwgb3B0aW9ucylcbiAgfSlcbiAgb3B0aW9ucy5ybWRpclN5bmMocCwgb3B0aW9ucylcbn1cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L3RlbXAvfi9yaW1yYWYvcmltcmFmLmpzXG4gKiogbW9kdWxlIGlkID0gMjIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhc3NlcnRcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImFzc2VydFwiXG4gKiogbW9kdWxlIGlkID0gMjIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgaXNXaW5kb3dzID0gcHJvY2Vzcy5wbGF0Zm9ybSA9PT0gJ3dpbjMyJztcbnZhciB0cmFpbGluZ1NsYXNoUmUgPSBpc1dpbmRvd3MgPyAvW146XVxcXFwkLyA6IC8uXFwvJC87XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9ub2RlanMvaW8uanMvYmxvYi8zZTdhMTQzODE0OTdhM2I3M2RkYTY4ZDA1YjUxMzA1NjNjZGFiNDIwL2xpYi9vcy5qcyNMMjUtTDQzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcblx0dmFyIHBhdGg7XG5cblx0aWYgKGlzV2luZG93cykge1xuXHRcdHBhdGggPSBwcm9jZXNzLmVudi5URU1QIHx8XG5cdFx0XHRwcm9jZXNzLmVudi5UTVAgfHxcblx0XHRcdChwcm9jZXNzLmVudi5TeXN0ZW1Sb290IHx8IHByb2Nlc3MuZW52LndpbmRpcikgKyAnXFxcXHRlbXAnO1xuXHR9IGVsc2Uge1xuXHRcdHBhdGggPSBwcm9jZXNzLmVudi5UTVBESVIgfHxcblx0XHRcdHByb2Nlc3MuZW52LlRNUCB8fFxuXHRcdFx0cHJvY2Vzcy5lbnYuVEVNUCB8fFxuXHRcdFx0Jy90bXAnO1xuXHR9XG5cblx0aWYgKHRyYWlsaW5nU2xhc2hSZS50ZXN0KHBhdGgpKSB7XG5cdFx0cGF0aCA9IHBhdGguc2xpY2UoMCwgLTEpO1xuXHR9XG5cblx0cmV0dXJuIHBhdGg7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdGVtcC9+L29zLXRtcGRpci9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwib3NcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcIm9zXCJcbiAqKiBtb2R1bGUgaWQgPSAyMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGNzcCBmcm9tICdqcy1jc3AnO1xuaW1wb3J0IFJvdXRlciBmcm9tICdyb3V0ZXJzL1JvdXRlcic7XG5pbXBvcnQgRGVmZXIgZnJvbSAnRGVmZXInO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWduYWwgZXh0ZW5kcyBSb3V0ZXIge1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZ3MpIHtcbiAgICBzdXBlcihjb25maWdzKTtcbiAgICB0aGlzLl9uYW1lID0gJ3NpZ25hbCc7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICAvLyBDb25jYXQgdGhlIGZpcnN0IHN0YWdlIGhhbmRsZXIuXG4gICAgdGhpcy5fdHJhbnNmZXJUb1JlY29yZGluZ1N0YWdlKCk7XG4gICAgLy8gS2ljay1vZmYgaXQuXG4gICAgdGhpcy5fc3RhZ2VzLnJlc29sdmUoKTtcbiAgfVxuXG4gIHN0b3AoKSB7XG4gICAgdGhpcy5fc3RvcExpc3RlblRvQ29udHJvbENoYW5uZWwoKTtcbiAgICB0aGlzLl9jbG9zZUNoYW5uZWxzKCk7XG4gIH1cblxuICBfcmVjb3JkaW5nKCkge1xuICAgIC8vIFR3byBcInNpZ25hbHNcIjogaW5wdXRzIGZyb20gc3RkaW4gYW5kIHN5c3RlbSBzaWduYWxzLlxuICAgIGxldCB0ZXJtaW5hdGluZ1NpZ25hbHMgPSBbXG4gICAgICAnU0lHSFVQJyxcbiAgICAgICdTSUdURVJNJyxcbiAgICAgICdTSUdJTlQnXG4gICAgXTtcbiAgICB0aGlzLl9uZXh0U3RhZ2VCeVNpZ25hbCA9ICdjb2xsZWN0aW5nJztcbiAgICB0ZXJtaW5hdGluZ1NpZ25hbHMuZm9yRWFjaCgoc2lnbmFsKSA9PiB7XG4gICAgICBwcm9jZXNzLm9uKHNpZ25hbCwgdGhpczo6dGhpcy5fb25TdGFnZVRyYW5zZmVycmluZ1NpZ25hbCk7XG4gICAgfSk7XG5cbiAgICBsZXQgc3RkaW4gPSBwcm9jZXNzLm9wZW5TdGRpbigpO1xuICAgIHN0ZGluLnNldFJhd01vZGUodHJ1ZSk7XG4gICAgc3RkaW4ub24oJ2RhdGEnLCB0aGlzOjp0aGlzLl9vbklucHV0KTtcbiAgfVxuXG4gIF9jb2xsZWN0aW5nKGRlZmVyKSB7XG4gICAgdGhpcy5fbmV4dFN0YWdlQnlTaWduYWwgPSAndGVybWluYXRpbmcnO1xuICB9XG5cbiAgX3Rlcm1pbmF0aW5nKGRlZmVyKSB7XG4gICAgdGhpcy5fbmV4dFN0YWdlQnlTaWduYWwgPSBudWxsO1xuICAgIGNvbnNvbGUubG9nKHRoaXMuX25hbWUsIERhdGUubm93KCksXG4gICAgICBgU2VuZCB0aGUgbWVzc2FnZSBmcm9tIHRlcm1pbmF0aW5nIHNpZ25hbCBvdXQgKHxmaW5hbGl6ZXwpYCk7XG4gICAgY3NwLnB1dEFzeW5jKHRoaXMuX291dHB1dENoYW5uZWwsIHsndG9waWMnOiAnc3RhdHVzJywgJ3NvdXJjZSc6IHRoaXMuX25hbWUsXG4gICAgICAncGF5bG9hZCc6IHsndHlwZSc6ICdmaW5hbGl6ZSd9IH0pO1xuXG4gICAgZGVmZXIucHJvbWlzZSA9IGRlZmVyLnByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAvLyBTdG9wIHJlYWRpbmcgdGhlIHN0ZGluLlxuICAgICAgcHJvY2Vzcy5zdGRpbi5wYXVzZSgpO1xuICAgIH0pO1xuICB9XG5cbiAgX29uSW5wdXQoY29kZSkge1xuICAgIC8vIFBvbGxpbmcgc3RkaW4gdG8gbWFrZSBpdCBjb250aW51ZXMgbGlzdGVuIHRvIHVzZXIgaW5wdXRzLlxuICAgIC8vIFRoaXMgaGFuZGxlciBkZWFscyB3aXRoIG90aGVyICdzaWduYWxzJyBvdGhlciB0aGFuIHN5c3RlbSBzaWduYWxzLlxuICAgIGlmICgnXFx1MDAxQicgPT09IGNvZGUudG9TdHJpbmcoKSB8fCAnYScgPT09IGNvZGUudG9TdHJpbmcoKSkge1xuICAgICAgdGhpcy5fb25TdGFnZVRyYW5zZmVycmluZ1NpZ25hbCgpO1xuICAgIH1cbiAgfVxuXG4gIF9vblN0YWdlVHJhbnNmZXJyaW5nU2lnbmFsKCkge1xuICAgIGlmICh0aGlzLl9zdG9wU2VuZGluZ1N0YWdlQ2hhbmdlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMuX25hbWUsIERhdGUubm93KCksXG4gICAgICBgU2VuZCB0aGUgbWVzc2FnZSBvZiB8c3RhZ2VjaGFuZ2V8IG91dDsgc3RhZ2FlOiAkeyB0aGlzLl9uZXh0U3RhZ2VCeVNpZ25hbCB9IGApO1xuICAgIGNzcC5wdXRBc3luYyh0aGlzLl9vdXRwdXRDaGFubmVsLCB7J3RvcGljJzogJ3N0YXR1cycsICdzb3VyY2UnOiB0aGlzLl9uYW1lLFxuICAgICAgJ3BheWxvYWQnOiAgeyd0eXBlJzogJ3N0YWdlY2hhbmdlJywgJ2RldGFpbCc6IHRoaXMuX25leHRTdGFnZUJ5U2lnbmFsIH19KTtcblxuICAgIC8vIElmIGludGVycnVwdHMgZmlyZWQgbXVsdGlwbGUgdGltZXMgaW4gdGhpcyBzdGFnZSwgd2UgbmVlZCBhIHdheVxuICAgIC8vIHRvIGJsb2NrIHRoZSBtdWx0aXBsZSBzdGFnZWNoYW5nZSBldmVudC4gVGhpcyBpcyBhIHNpbXBsZSB3YXkgdG9cbiAgICAvLyBkbyB0aGF0LlxuICAgIGlmICgndGVybWluYXRpbmcnID09PSB0aGlzLl9uZXh0U3RhZ2VCeVNpZ25hbCkge1xuICAgICAgLy8gV2UgY2Fubm90IHJlbW92ZSB0aGUgc2lnbmFsIGxpc3RlbmVycyBiZWNhdXNlIHdlIHN0aWxsIG5lZWQgdG9cbiAgICAgIC8vIHByZXZlbnQgdXNlciBpbnRlcnJ1cHRpbmcgdGhlIHByb2dyYW0gYmVmb3JlIGFsbCBzdGVwcyBkb25lLlxuICAgICAgdGhpcy5fc3RvcFNlbmRpbmdTdGFnZUNoYW5nZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgX29uU3RhZ2VDaGFuZ2Uoc3RhZ2UpIHtcbiAgICBzd2l0Y2goc3RhZ2UpIHtcbiAgICAgIGNhc2UgJ2NvbGxlY3RpbmcnOlxuICAgICAgICB0aGlzLl90cmFuc2ZlclRvQ29sbGVjdGluZ1N0YWdlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGVybWluYXRpbmcnOlxuICAgICAgICB0aGlzLl90cmFuc2ZlclRvVGVybWluYXRpbmdTdGFnZSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBfcmVtb3ZlU2lnbmFsSGFuZGxlcigpIHtcbiAgICBsZXQgdGVybWluYXRpbmdTaWduYWxzID0gW1xuICAgICAgJ1NJR0hVUCcsXG4gICAgICAnU0lHVEVSTScsXG4gICAgICAnU0lHSU5UJ1xuICAgIF07XG4gICAgdGVybWluYXRpbmdTaWduYWxzLmZvckVhY2goKHNpZ25hbCkgPT4ge1xuICAgICAgLy8gU28gd2UgZG9uJ3QgZmlyZSBzdGFnZWNoYW5nZSBhY2NvcmRpbmcgdG8gdGhlIHNpZ25hbCBhbnltb3JlLlxuICAgICAgcHJvY2Vzcy5yZW1vdmVBbGxMaXN0ZW5lcnMoc2lnbmFsKTtcbiAgICB9KTtcbiAgfVxuXG4gIF90cmFuc2ZlclRvUmVjb3JkaW5nU3RhZ2UoKSB7XG4gICAgdGhpcy5fdHJhbnNmZXJUbyh0aGlzLl9yZWNvcmRpbmcpO1xuICB9XG5cbiAgX3RyYW5zZmVyVG9Db2xsZWN0aW5nU3RhZ2UoKSB7XG4gICAgdGhpcy5fdHJhbnNmZXJUbyh0aGlzLl9jb2xsZWN0aW5nKTtcbiAgfVxuXG4gIF90cmFuc2ZlclRvVGVybWluYXRpbmdTdGFnZSgpIHtcbiAgICB0aGlzLl90cmFuc2ZlclRvKHRoaXMuX3Rlcm1pbmF0aW5nKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm91dGVycy9TaWduYWwuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlsIGZyb20gJ3V0aWwnO1xuaW1wb3J0IGNzcCBmcm9tICdqcy1jc3AnO1xuaW1wb3J0IFJvdXRlciBmcm9tICdyb3V0ZXJzL1JvdXRlcic7XG5pbXBvcnQgRGVmZXIgZnJvbSAnRGVmZXInO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBUaW1lbGluZVJlY29yZCB9IGZyb20gJ3JlY29yZC9UaW1lbGluZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVsaW5lIGV4dGVuZHMgUm91dGVyIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWdzKSB7XG4gICAgc3VwZXIoY29uZmlncyk7XG4gICAgdGhpcy5fbmFtZSA9ICd0aW1lbGluZSc7XG4gICAgdGhpcy5fdGltZWxpbmUgPSB7fTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIC8vIENvbmNhdCB0aGUgZmlyc3Qgc3RhZ2UgaGFuZGxlci5cbiAgICB0aGlzLl90cmFuc2ZlclRvUmVjb3JkaW5nU3RhZ2UoKTtcbiAgICAvLyBLaWNrLW9mZiBpdC5cbiAgICB0aGlzLl9zdGFnZXMucmVzb2x2ZSgpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLl9zdG9wTGlzdGVuVG9Db250cm9sQ2hhbm5lbCgpO1xuICAgIHRoaXMuX2Nsb3NlQ2hhbm5lbHMoKTtcbiAgfVxuXG4gIF9yZWNvcmRpbmcoKSB7fVxuICBfY29sbGVjdGluZygpIHt9XG5cbiAgLyoqXG4gICAqIEluIGZhY3Qgd2Ugb25seSBuZWVkIG9uZSBzdGFnZS4gSG93ZXZlciwgdG8ga2VlcCBpbnRlcmZhY2UgYWxpZ25lZCxcbiAgICogd2UgZG8gdGhlIHNhbWUgdGhpbmcgbGlrZSBvdGhlciByb3V0ZXJzLlxuICAgKi9cbiAgX3Rlcm1pbmF0aW5nKGRlZmVyKSB7XG4gICAgY29uc29sZS5sb2codGhpcy5fbmFtZSwgRGF0ZS5ub3coKSxcbiAgICAgIGBTZW5kIHRoZSBtZXNzYWdlIG9mIHRpbWVsaW5lIGNvbGxlY3RpbmcgcmVzdWx0OiAkeyB1dGlsLmluc3BlY3QodGhpcy5fdGltZWxpbmUpIH0gYCk7XG4gICAgY3NwLnB1dEFzeW5jKHRoaXMuX291dHB1dENoYW5uZWwsXG4gICAgICB7J3RvcGljJzogJ2RhdGEnLCAnc291cmNlJzogdGhpcy5fbmFtZSwgJ3BheWxvYWQnOiB0aGlzLl90aW1lbGluZX0pO1xuICB9XG5cbiAgX29uSW5pdGlhbGl6ZShyb3V0ZXJzKSB7XG4gICAgc3VwZXIuX29uSW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIE9iamVjdC5rZXlzKHJvdXRlcnMpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGxldCByb3V0ZXIgPSByb3V0ZXJzW25hbWVdO1xuICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgIGNhc2UgJ3NjcmVlbnJlY29yZCc6XG4gICAgICAgIGNhc2UgJ2RldmljZWxvZyc6XG4gICAgICAgICAgcm91dGVyLnN1YnNjcmliZSh0aGlzLl9jb25uZWN0LmJpbmQodGhpcykpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX2NvbnN1bWVNZXNzYWdlKCk7XG4gIH1cblxuICBfY29ubmVjdChwdWJsaWNhdGlvbikge1xuICAgIGNzcC5vcGVyYXRpb25zLnB1Yi5zdWIocHVibGljYXRpb24sICdsb2cnLCB0aGlzLl9pbnB1dENoYW5uZWwpO1xuICB9XG5cbiAgX2NvbnN1bWVNZXNzYWdlKCkge1xuICAgIGNzcC5nbygoZnVuY3Rpb24qKCkge1xuICAgICAgbGV0IHZhbHVlID0geWllbGQgdGhpcy5faW5wdXRDaGFubmVsO1xuICAgICAgd2hpbGUgKGNzcC5DTE9TRUQgIT09IHZhbHVlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX25hbWUsIERhdGUubm93KCksXG4gICAgICAgICAgYFJlY2VpdmVkIGEgbWVzc2FnZSBvZiBjb2xsZWN0ZWQgZGF0YTogJHsgdXRpbC5pbnNwZWN0KHZhbHVlKSB9IGApO1xuICAgICAgICB0aGlzLl9vbklucHV0KHZhbHVlKTtcbiAgICAgICAgdmFsdWUgPSB5aWVsZCB0aGlzLl9pbnB1dENoYW5uZWw7XG4gICAgICB9XG4gICAgfSkuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogT25jZSB3ZSBjb2xsZWN0IGRpZmZlcmVudCBjaGFubmVscyBpbnRvIG9uZSwgd2Ugb25seSBjYXJlIGFib3V0IHRoZWlyIGNvbW1vbiBhdHRyaWJ1dGVzLlxuICAgKi9cbiAgX29uSW5wdXQodmFsdWUpIHtcbiAgICBsZXQgc291cmNlID0gdmFsdWUuc291cmNlO1xuICAgIGlmICghdmFsdWUucGF5bG9hZCkgeyByZXR1cm47IH1cbiAgICBpZiAoIXRoaXMuX2NoZWNrTG9nVmFsaWQodmFsdWUucGF5bG9hZCkpIHsgcmV0dXJuOyB9XG4gICAgbGV0IHsgb2Zmc2V0LCB0eXBlLCBjb250ZW50IH0gPSB2YWx1ZS5wYXlsb2FkO1xuICAgIGlmICghdGhpcy5fdGltZWxpbmVbb2Zmc2V0XSkge1xuICAgICAgdGhpcy5fdGltZWxpbmVbb2Zmc2V0XSA9IG5ldyBUaW1lbGluZVJlY29yZChvZmZzZXQpO1xuICAgIH1cbiAgICB0aGlzLl90aW1lbGluZVtvZmZzZXRdLnB1c2goc291cmNlLCB0eXBlLCBjb250ZW50KTtcbiAgfVxuXG4gIF9jaGVja0xvZ1ZhbGlkKGxvZykge1xuICAgIGlmICghbG9nLm9mZnNldCB8fCAhbG9nLnR5cGUgfHwgIWxvZy5jb250ZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIF9vblN0YWdlQ2hhbmdlKHN0YWdlKSB7XG4gICAgc3dpdGNoKHN0YWdlKSB7XG4gICAgICBjYXNlICdjb2xsZWN0aW5nJzpcbiAgICAgICAgdGhpcy5fdHJhbnNmZXJUb0NvbGxlY3RpbmdTdGFnZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Rlcm1pbmF0aW5nJzpcbiAgICAgICAgdGhpcy5fdHJhbnNmZXJUb1Rlcm1pbmF0aW5nU3RhZ2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgX3RyYW5zZmVyVG9SZWNvcmRpbmdTdGFnZSgpIHtcbiAgICB0aGlzLl90cmFuc2ZlclRvKHRoaXMuX3JlY29yZGluZyk7XG4gIH1cblxuICBfdHJhbnNmZXJUb0NvbGxlY3RpbmdTdGFnZSgpIHtcbiAgICB0aGlzLl90cmFuc2ZlclRvKHRoaXMuX2NvbGxlY3RpbmcpO1xuICB9XG5cbiAgX3RyYW5zZmVyVG9UZXJtaW5hdGluZ1N0YWdlKCkge1xuICAgIHRoaXMuX3RyYW5zZmVyVG8odGhpcy5fdGVybWluYXRpbmcpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb3V0ZXJzL1RpbWVsaW5lLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==