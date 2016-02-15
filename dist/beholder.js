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
	
	var _fs = __webpack_require__(192);
	
	var _fs2 = _interopRequireDefault(_fs);
	
	var _jsCsp = __webpack_require__(193);
	
	var _jsCsp2 = _interopRequireDefault(_jsCsp);
	
	var _Configure = __webpack_require__(203);
	
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
	    _this._commandRouter = null;
	    _this._commandPublication = null;
	    _this._routers = null;
	    _this._stage = null;
	    return _this;
	  }
	
	  _createClass(Controller, [{
	    key: 'start',
	    value: function start() {
	      var configure = new _Configure2.default();
	      this.configs = configure.setup();
	      var commandRouterName = this.configs.routers.__command__;
	      var reporterRouterName = this.configs.routers.__reporter__;
	      this._routers = this._initializeRouters(commandRouterName, reporterRouterName);
	      this._commandRouter = this._routers[commandRouterName];
	      for (var routerIdentification in this._routers) {
	        var router = this._routers[routerIdentification];
	        this.subscribe(router.connectToController.bind(router));
	      }
	
	      this._commandRouter.subscribe(this._connectToCommandRouter.bind(this));
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
	    key: '_connectToCommandRouter',
	    value: function _connectToCommandRouter(publication) {
	      this._commandPublication = publication;
	      _jsCsp2.default.operations.pub.sub(publication, 'status', this._inputChannel);
	      this._consumeCommandRouterMessage();
	    }
	  }, {
	    key: '_consumeCommandRouterMessage',
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
	
	      return function _consumeCommandRouterMessage() {
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
	
	    //TODO: dynamic loading & initializing?
	
	  }, {
	    key: '_initializeRouters',
	    value: function _initializeRouters(commandRouterName, reporterRouterName) {
	      var routers = {
	        screenrecord: new _ScreenRecord2.default(this.configs),
	        devicelog: new _DeviceLog2.default(this.configs),
	        //log: new Log(this.configs),
	        timeline: new _Timeline2.default(this.configs),
	        signal: new _Signal2.default(this.configs)
	      };
	      if (!routers[commandRouterName]) {
	        throw new Error('No command router: ' + commandRouterName);
	      }
	      if (!routers[reporterRouterName]) {
	        throw new Error('No reporter router: ' + reporterRouterName);
	      }
	      return routers;
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
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var csp = __webpack_require__(194);
	var operations = __webpack_require__(201);
	var pipeline = __webpack_require__(202);
	
	csp.operations = operations;
	csp.operations.pipeline = pipeline.pipeline;
	csp.operations.pipelineAsync = pipeline.pipelineAsync;
	
	module.exports = csp;


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var buffers = __webpack_require__(195);
	var channels = __webpack_require__(196);
	var select = __webpack_require__(198);
	var process = __webpack_require__(199);
	var timers = __webpack_require__(200);
	
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
/* 195 */
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
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var buffers = __webpack_require__(195);
	var dispatch = __webpack_require__(197);
	
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
/* 197 */
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
	
	var buffers = __webpack_require__(195);
	
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
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Box = __webpack_require__(196).Box;
	
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
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var dispatch = __webpack_require__(197);
	var select = __webpack_require__(198);
	var Channel = __webpack_require__(196).Channel;
	
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
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var dispatch = __webpack_require__(197);
	var channels = __webpack_require__(196);
	
	exports.timeout = function timeout_channel(msecs) {
	  var chan = channels.chan();
	  dispatch.queue_delay(function() {
	    chan.close();
	  }, msecs);
	  return chan;
	};


/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Box = __webpack_require__(196).Box;
	
	var csp = __webpack_require__(194),
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
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var csp = __webpack_require__(194);
	
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
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _nodeGetopt = __webpack_require__(204);
	
	var _nodeGetopt2 = _interopRequireDefault(_nodeGetopt);
	
	var _fs = __webpack_require__(192);
	
	var _fs2 = _interopRequireDefault(_fs);
	
	var _path = __webpack_require__(206);
	
	var _path2 = _interopRequireDefault(_path);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Configure = function () {
	  function Configure() {
	    _classCallCheck(this, Configure);
	
	    this.opts = _nodeGetopt2.default.create([['r', 'raptor=ARG', 'where the raptor executable file is'], ['p', 'phase=ARG', 'where the running phase is'], ['c', 'config=ARG', 'config file (command line arguments will surpass it)'], ['', 'adb=ARG', 'where the `adb` command is'], ['', 'ffmpeg=ARG', 'where the `ffmpeg` command is'], ['', 'record-target-device=ARG', 'where to put the record on the device'], ['', 'record-target-console=ARG', 'where to pull the record to the console'], ['r', 'routers=ARG+', 'invoke what routers'], ['', 'command=ARG', 'default is |raptor|; once it ends the process will end, too'], ['', 'reporter=ARG', 'default is |timeline|; the final collector to generate the report'], ['o', 'output=ARG', 'a file path to output the final result'], ['h', 'help', 'display this help'], ['v', 'version', 'show version']]).bindHelp('Usage: beholder <test-file-path> --<optional options>');
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
	      this.validateOutput(configs);
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
	    key: 'validateOutput',
	    value: function validateOutput(configs) {
	      try {
	        _fs2.default.accessSync(configs.path.output);
	      } catch (e) {
	        console.error('Cannot access the output target: "' + configs.path.output + '"');
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
	      defaultConfigs.path.output = options.output || defaultConfigs.path.output;
	
	      // For ScreenRecord module.
	      defaultConfigs.path.record = defaultConfigs.path.record || {
	        target: { console: null, device: null }
	      };
	      defaultConfigs.path.record.target.device = options['record-target-device'] || defaultConfigs.path.record.target.device;
	      defaultConfigs.path.record.target.console = options['record-target-console'] || defaultConfigs.path.record.target.console;
	
	      defaultConfigs.routers = options.routers || defaultConfigs.routers || [];
	
	      defaultConfigs.routers.__command__ = options['command'] || defaultConfigs.routers.__command__ || 'raptor';
	
	      defaultConfigs.routers.__reporter__ = options['reporter'] || defaultConfigs.routers.__reporter__ || 'timeline';
	
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
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(205);


/***/ },
/* 205 */
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
/* 206 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./AndroidDaemonBus": 208,
		"./AndroidDaemonBus.js": 208,
		"./Configure": 203,
		"./Configure.js": 203,
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
	  }, {
	    key: 'serialize',
	    value: function serialize() {
	      // XXX: a better serializing method.
	      return JSON.stringify(this._slots);
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
	
	var _jsCsp = __webpack_require__(193);
	
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
	
	var _jsCsp = __webpack_require__(193);
	
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
	
	var _jsCsp = __webpack_require__(193);
	
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
	
	var _jsCsp = __webpack_require__(193);
	
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
	
	var _jsCsp = __webpack_require__(193);
	
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
	
	var _fs = __webpack_require__(192);
	
	var _fs2 = _interopRequireDefault(_fs);
	
	var _path = __webpack_require__(206);
	
	var _path2 = _interopRequireDefault(_path);
	
	var _child_process = __webpack_require__(209);
	
	var _child_process2 = _interopRequireDefault(_child_process);
	
	var _jsCsp = __webpack_require__(193);
	
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

	var fs   = __webpack_require__(192),
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
	var fs = __webpack_require__(192)
	
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
	
	var _jsCsp = __webpack_require__(193);
	
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
	
	var _fs = __webpack_require__(192);
	
	var _fs2 = _interopRequireDefault(_fs);
	
	var _jsCsp = __webpack_require__(193);
	
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
	      // XXX: make chunks and a better serializing way to prevent writing blocks.
	      var strTimeline = JSON.stringify(this._timeline);
	      var writingDefer = new _Defer2.default();
	      var stream = _fs2.default.createWriteStream(this.configs.path.output);
	
	      console.log(this._name, Date.now(), 'Write the file "' + this.configs.path.output + '" with report of timeline collecting out:', _util2.default.inspect(this._timeline));
	
	      if (!stream.write(strTimeline)) {
	        stream.on('drain', function () {
	          stream.write(strTimeline);
	        });
	      }
	      stream.on('error', writingDefer.reject);
	      stream.end();
	      stream.on('finish', writingDefer.resolve);
	
	      defer.promise = defer.promise.then(function () {
	        return writingDefer.promise;
	      }).catch(function (e) {
	        console.error('Error occured when waiting the file writing out');
	        throw e;
	      });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZDUzZjNmMTgyZjgwMWZjMjBlNDIiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmV4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5jb3JlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5oaWRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnJlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC51aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmN0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmNvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaW52b2tlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnRvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQudG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQudG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQudG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnRvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC53a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnNoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQua2V5b2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmdldC1uYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm9iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5wcmV2ZW50LWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLWZyb3plbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtc2VhbGVkLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1leHRlbnNpYmxlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5oYXMtaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC50by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnN0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5lcHNpbG9uLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1maW5pdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlzLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLW5hbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtc2FmZS1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5tYXgtc2FmZS1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5taW4tc2FmZS1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1mbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYWNvc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm1hdGgtbG9nMXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hc2luaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmF0YW5oLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2JydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQubWF0aC1zaWduLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2x6MzIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jb3NoLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZXhwbTEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm1hdGgtZXhwbTEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5mcm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5oeXBvdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmltdWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cxMC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnNpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaW5oLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgudGFuaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnRydW5jLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJhdy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcudHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnN0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLml0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuc3RyaW5nLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlzLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZmFpbHMtaXMtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcucmVwZWF0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zdHJpbmctcmVwZWF0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLml0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lm9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLml0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5jb3B5LXdpdGhpbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktY29weS13aXRoaW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLm1hdGNoLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5maXgtcmUtd2tzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5yZXBsYWNlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNwbGl0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnN0cmljdC1uZXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmZvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQubWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC50YXNrLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWFwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYud2Vhay1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmNvbGxlY3Rpb24td2Vhay5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLXNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmFwcGx5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuY29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVsZXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZW51bWVyYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0Lmhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmlzLWV4dGVuc2libGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5vd24ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQub3duLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5wcmV2ZW50LWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LmFycmF5LmluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy5hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLWxlZnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnN0cmluZy1wYWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnBhZC1yaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcudHJpbS1sZWZ0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy50cmltLXJpZ2h0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZ2V4cC5lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnJlcGxhY2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm9iamVjdC10by1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZW50cmllcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY29sbGVjdGlvbi10by1qc29uLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnNldC50by1qc29uLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvanMuYXJyYXkuc3RhdGljcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnBhcnRpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy93ZWIuaW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vYmFiZWwtcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhvbGRlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ1dGlsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZnNcIiIsIndlYnBhY2s6Ly8vLi9+L2pzLWNzcC9zcmMvY3NwLmpzIiwid2VicGFjazovLy8uL34vanMtY3NwL3NyYy9jc3AuY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2pzLWNzcC9zcmMvaW1wbC9idWZmZXJzLmpzIiwid2VicGFjazovLy8uL34vanMtY3NwL3NyYy9pbXBsL2NoYW5uZWxzLmpzIiwid2VicGFjazovLy8uL34vanMtY3NwL3NyYy9pbXBsL2Rpc3BhdGNoLmpzIiwid2VicGFjazovLy8uL34vanMtY3NwL3NyYy9pbXBsL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2pzLWNzcC9zcmMvaW1wbC9wcm9jZXNzLmpzIiwid2VicGFjazovLy8uL34vanMtY3NwL3NyYy9pbXBsL3RpbWVycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2pzLWNzcC9zcmMvY3NwLm9wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9qcy1jc3Avc3JjL2NzcC5waXBlbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uZmlndXJlLmpzIiwid2VicGFjazovLy8uL34vbm9kZS1nZXRvcHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9ub2RlLWdldG9wdC9saWIvZ2V0b3B0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcInBhdGhcIiIsIndlYnBhY2s6Ly8vLi9zcmMgXlxcLlxcLy4qJCIsIndlYnBhY2s6Ly8vLi9zcmMvQW5kcm9pZERhZW1vbkJ1cy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjaGlsZF9wcm9jZXNzXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL0RlZmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNvcmQvTG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWNvcmQvVGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcnMvRGV2aWNlTG9nLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXJzL1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJ0aW1lXCIiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcnMvTG9nL0NvbGxlY3RpbmdTdGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVycy9Mb2cvVGVybWluYXRpbmdTdGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVycy9Mb2cvUmVjb3JkaW5nU3RhZ2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcnMvU2NyZWVuUmVjb3JkLmpzIiwid2VicGFjazovLy8uL34vdGVtcC9saWIvdGVtcC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjb25zdGFudHNcIiIsIndlYnBhY2s6Ly8vLi9+L3RlbXAvfi9yaW1yYWYvcmltcmFmLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImFzc2VydFwiIiwid2VicGFjazovLy8uL34vdGVtcC9+L29zLXRtcGRpci9pbmRleC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvc1wiIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXJzL1NpZ25hbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVycy9UaW1lbGluZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsdUJBQWU7QUFDZjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDdENBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDhCOzs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUI7QUFDckIsMkJBQTBCO0FBQzFCO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTCw0Q0FBMkM7QUFDM0M7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7QUFDQSxHOzs7Ozs7QUNyRkE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTRCLG1FQUFtRTtBQUMvRixFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLHFCOzs7Ozs7QUNYRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7OztBQ1JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQXlDO0FBQ3pDLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7QUNyQ0Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHNDQUFxQyxNQUFNLFNBQVMsT0FBTyxTQUFTO0FBQ3BFLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7O0FDbEJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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QTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7OztBQ1JEO0FBQ0E7O0FBRUEsNEJBQTJCLHdDQUFpRCxFOzs7Ozs7QUNINUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNWQTtBQUNBOztBQUVBLDRCQUEyQix3Q0FBaUQsRTs7Ozs7O0FDSDVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQzs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNFQUFxRTtBQUNyRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7O0FDbkJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW1CLFdBQVc7QUFDOUI7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDdkJBLHlDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7QUNMRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEU7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWdCO0FBQ2hCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWM7QUFDZCxNQUFLO0FBQ0wsZUFBYztBQUNkO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEwQyxXQUFXO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDRCQUEyQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxVQUFTO0FBQ1Q7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTs7QUFFQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtDQUFpQyxrQkFBa0I7QUFDbkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWlCOztBQUVqQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBWTtBQUNaO0FBQ0E7O0FBRUE7QUFDQSxhQUFZO0FBQ1o7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsK0NBQThDLFFBQVE7QUFDdEQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWE7QUFDYjtBQUNBOztBQUVBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUEsWUFBVztBQUNYO0FBQ0E7QUFDQTs7QUFFQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLOztBQUVMO0FBQ0EsK0NBQThDLFFBQVE7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTs7QUFFQTtBQUNBLE1BQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBLE1BQUs7O0FBRUw7QUFDQSwrQ0FBOEMsUUFBUTtBQUN0RDtB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Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDbkVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM5TEE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN6VUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pGQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzlHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xNQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7Ozs7Ozs7QUNYQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFxQixZQUFZO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQixZQUFZO0FBQ2pDO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBYyxVQUFVLFdBQVc7QUFDbkM7QUFDQSxrQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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O0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3REFBdUQsV0FBVztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXNDLFdBQVc7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTRDLFlBQVk7QUFDeEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsSUFBRzs7QUFFSDs7QUFFQSxFQUFDOzs7Ozs7O0FDcFRELGtDOzs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF3QjtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQStCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFVO0FBQ1Y7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBMkIsaUJBQWlCO0FBQzVDO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSw2QkFBNEIsaUNBQWlDO0FBQzdEO0FBQ0EsUUFBTztBQUNQO0FBQ0EsSUFBRztBQUNIOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBcUIsdUJBQXVCO0FBQzVDO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVTtBQUNWOztBQUVBO0FBQ0E7QUFDQSxnREFBK0MsNkJBQTZCO0FBQzVFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQzFSQSx1Qzs7Ozs7O0FDQUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUCxNQUFLO0FBQ0wsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7Ozs7OztBQ3ZQQSxvQzs7Ozs7O0FDQUE7QUFDQTtBQUNBOztBQUVB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WUFBTDtBQUNFLGdCQUFLLDBCQUFMLEdBREY7QUFFRSxpQkFGRjtBQURGLGNBSU8sYUFBTDtBQUNFLGdCQUFLLDJCQUFMLEdBREY7QUFFRSxpQkFGRjtBQUpGLFFBRG9COzs7O2lEQVdNO0FBQzFCLFlBQUssV0FBTCxDQUFpQixLQUFLLFVBQUwsQ0FBakIsQ0FEMEI7Ozs7a0RBSUM7QUFDM0IsWUFBSyxXQUFMLENBQWlCLEtBQUssV0FBTCxDQUFqQixDQUQyQjs7OzttREFJQztBQUM1QixZQUFLLFdBQUwsQ0FBaUIsS0FBSyxZQUFMLENBQWpCLENBRDRCOzs7O1VBN0hYIiwiZmlsZSI6ImJlaG9sZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pXG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG5cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGV4cG9ydHM6IHt9LFxuIFx0XHRcdGlkOiBtb2R1bGVJZCxcbiBcdFx0XHRsb2FkZWQ6IGZhbHNlXG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiB3ZWJwYWNrL2Jvb3RzdHJhcCBkNTNmM2YxODJmODAxZmMyMGU0MlxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG5yZXF1aXJlKFwiY29yZS1qcy9zaGltXCIpO1xuXG5yZXF1aXJlKFwiYmFiZWwtcmVnZW5lcmF0b3ItcnVudGltZVwiKTtcblxuaWYgKGdsb2JhbC5fYmFiZWxQb2x5ZmlsbCkge1xuICB0aHJvdyBuZXcgRXJyb3IoXCJvbmx5IG9uZSBpbnN0YW5jZSBvZiBiYWJlbC1wb2x5ZmlsbCBpcyBhbGxvd2VkXCIpO1xufVxuZ2xvYmFsLl9iYWJlbFBvbHlmaWxsID0gdHJ1ZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9saWIvaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuL21vZHVsZXMvZXM1Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN5bWJvbCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5pcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5mcmVlemUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LnNlYWwnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LnByZXZlbnQtZXh0ZW5zaW9ucycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZnJvemVuJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1zZWFsZWQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmlzLWV4dGVuc2libGUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmZ1bmN0aW9uLmhhcy1pbnN0YW5jZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIuY29uc3RydWN0b3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLmVwc2lsb24nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLmlzLWZpbml0ZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtaW50ZWdlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtbmFuJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5pcy1zYWZlLWludGVnZXInKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLm1heC1zYWZlLWludGVnZXInKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLm1pbi1zYWZlLWludGVnZXInKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWZsb2F0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1pbnQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5hY29zaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmFzaW5oJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguYXRhbmgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5jYnJ0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguY2x6MzInKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5jb3NoJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguZXhwbTEnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5mcm91bmQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5oeXBvdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmltdWwnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5sb2cxMCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGgubG9nMicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLnNpZ24nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5zaW5oJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGgudGFuaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLnRydW5jJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLnJhdycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcudHJpbScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuaW5jbHVkZXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuc3RhcnRzLXdpdGgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuZnJvbScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5vZicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5zcGVjaWVzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmNvcHktd2l0aGluJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmZpbGwnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuZmluZCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5maW5kLWluZGV4Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZ2V4cC5jb25zdHJ1Y3RvcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVnZXhwLm1hdGNoJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZ2V4cC5yZXBsYWNlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZ2V4cC5zZWFyY2gnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVnZXhwLnNwbGl0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWFwJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnNldCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi53ZWFrLW1hcCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi53ZWFrLXNldCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmFwcGx5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuY29uc3RydWN0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVmaW5lLXByb3BlcnR5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVsZXRlLXByb3BlcnR5Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuZW51bWVyYXRlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LXByb3RvdHlwZS1vZicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmhhcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LmlzLWV4dGVuc2libGUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5vd24ta2V5cycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LnByZXZlbnQtZXh0ZW5zaW9ucycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldC1wcm90b3R5cGUtb2YnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuYXJyYXkuaW5jbHVkZXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuc3RyaW5nLmF0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnN0cmluZy5wYWQtbGVmdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLXJpZ2h0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnN0cmluZy50cmltLWxlZnQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuc3RyaW5nLnRyaW0tcmlnaHQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcucmVnZXhwLmVzY2FwZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9ycycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm9iamVjdC5lbnRyaWVzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm1hcC50by1qc29uJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnNldC50by1qc29uJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvanMuYXJyYXkuc3RhdGljcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL3dlYi50aW1lcnMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy93ZWIuaW1tZWRpYXRlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL21vZHVsZXMvJC5jb3JlJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL3NoaW0uanNcbiAqKiBtb2R1bGUgaWQgPSAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJCAgICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsICRleHBvcnQgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgREVTQ1JJUFRPUlMgICAgICAgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKVxuICAsIGNyZWF0ZURlc2MgICAgICAgID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKVxuICAsIGh0bWwgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmh0bWwnKVxuICAsIGNlbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmRvbS1jcmVhdGUnKVxuICAsIGhhcyAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgY29mICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuY29mJylcbiAgLCBpbnZva2UgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5pbnZva2UnKVxuICAsIGZhaWxzICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmZhaWxzJylcbiAgLCBhbk9iamVjdCAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiAgICAgICAgID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKVxuICAsIGlzT2JqZWN0ICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgdG9PYmplY3QgICAgICAgICAgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICAgICA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0JylcbiAgLCB0b0ludGVnZXIgICAgICAgICA9IHJlcXVpcmUoJy4vJC50by1pbnRlZ2VyJylcbiAgLCB0b0luZGV4ICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC50by1pbmRleCcpXG4gICwgdG9MZW5ndGggICAgICAgICAgPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJylcbiAgLCBJT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5pb2JqZWN0JylcbiAgLCBJRV9QUk9UTyAgICAgICAgICA9IHJlcXVpcmUoJy4vJC51aWQnKSgnX19wcm90b19fJylcbiAgLCBjcmVhdGVBcnJheU1ldGhvZCA9IHJlcXVpcmUoJy4vJC5hcnJheS1tZXRob2RzJylcbiAgLCBhcnJheUluZGV4T2YgICAgICA9IHJlcXVpcmUoJy4vJC5hcnJheS1pbmNsdWRlcycpKGZhbHNlKVxuICAsIE9iamVjdFByb3RvICAgICAgID0gT2JqZWN0LnByb3RvdHlwZVxuICAsIEFycmF5UHJvdG8gICAgICAgID0gQXJyYXkucHJvdG90eXBlXG4gICwgYXJyYXlTbGljZSAgICAgICAgPSBBcnJheVByb3RvLnNsaWNlXG4gICwgYXJyYXlKb2luICAgICAgICAgPSBBcnJheVByb3RvLmpvaW5cbiAgLCBkZWZpbmVQcm9wZXJ0eSAgICA9ICQuc2V0RGVzY1xuICAsIGdldE93bkRlc2NyaXB0b3IgID0gJC5nZXREZXNjXG4gICwgZGVmaW5lUHJvcGVydGllcyAgPSAkLnNldERlc2NzXG4gICwgZmFjdG9yaWVzICAgICAgICAgPSB7fVxuICAsIElFOF9ET01fREVGSU5FO1xuXG5pZighREVTQ1JJUFRPUlMpe1xuICBJRThfRE9NX0RFRklORSA9ICFmYWlscyhmdW5jdGlvbigpe1xuICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eShjZWwoJ2RpdicpLCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xuICB9KTtcbiAgJC5zZXREZXNjID0gZnVuY3Rpb24oTywgUCwgQXR0cmlidXRlcyl7XG4gICAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICAgIHJldHVybiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gICAgaWYoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKXRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gICAgaWYoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKWFuT2JqZWN0KE8pW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgICByZXR1cm4gTztcbiAgfTtcbiAgJC5nZXREZXNjID0gZnVuY3Rpb24oTywgUCl7XG4gICAgaWYoSUU4X0RPTV9ERUZJTkUpdHJ5IHtcbiAgICAgIHJldHVybiBnZXRPd25EZXNjcmlwdG9yKE8sIFApO1xuICAgIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgICBpZihoYXMoTywgUCkpcmV0dXJuIGNyZWF0ZURlc2MoIU9iamVjdFByb3RvLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwoTywgUCksIE9bUF0pO1xuICB9O1xuICAkLnNldERlc2NzID0gZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uKE8sIFByb3BlcnRpZXMpe1xuICAgIGFuT2JqZWN0KE8pO1xuICAgIHZhciBrZXlzICAgPSAkLmdldEtleXMoUHJvcGVydGllcylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaSA9IDBcbiAgICAgICwgUDtcbiAgICB3aGlsZShsZW5ndGggPiBpKSQuc2V0RGVzYyhPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgICByZXR1cm4gTztcbiAgfTtcbn1cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIURFU0NSSVBUT1JTLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuNiAvIDE1LjIuMy4zIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yOiAkLmdldERlc2MsXG4gIC8vIDE5LjEuMi40IC8gMTUuMi4zLjYgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkLnNldERlc2MsXG4gIC8vIDE5LjEuMi4zIC8gMTUuMi4zLjcgT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcylcbiAgZGVmaW5lUHJvcGVydGllczogZGVmaW5lUHJvcGVydGllc1xufSk7XG5cbiAgLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xudmFyIGtleXMxID0gKCdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLCcgK1xuICAgICAgICAgICAgJ3RvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnKS5zcGxpdCgnLCcpXG4gIC8vIEFkZGl0aW9uYWwga2V5cyBmb3IgZ2V0T3duUHJvcGVydHlOYW1lc1xuICAsIGtleXMyID0ga2V5czEuY29uY2F0KCdsZW5ndGgnLCAncHJvdG90eXBlJylcbiAgLCBrZXlzTGVuMSA9IGtleXMxLmxlbmd0aDtcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24oKXtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IGNlbCgnaWZyYW1lJylcbiAgICAsIGkgICAgICA9IGtleXNMZW4xXG4gICAgLCBndCAgICAgPSAnPidcbiAgICAsIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgaHRtbC5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZSgnPHNjcmlwdD5kb2N1bWVudC5GPU9iamVjdDwvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlKGktLSlkZWxldGUgY3JlYXRlRGljdC5wcm90b3R5cGVba2V5czFbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcbnZhciBjcmVhdGVHZXRLZXlzID0gZnVuY3Rpb24obmFtZXMsIGxlbmd0aCl7XG4gIHJldHVybiBmdW5jdGlvbihvYmplY3Qpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICAgLCBpICAgICAgPSAwXG4gICAgICAsIHJlc3VsdCA9IFtdXG4gICAgICAsIGtleTtcbiAgICBmb3Ioa2V5IGluIE8paWYoa2V5ICE9IElFX1BST1RPKWhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gICAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICAgIHdoaWxlKGxlbmd0aCA+IGkpaWYoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKXtcbiAgICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xudmFyIEVtcHR5ID0gZnVuY3Rpb24oKXt9O1xuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG4gIGdldFByb3RvdHlwZU9mOiAkLmdldFByb3RvID0gJC5nZXRQcm90byB8fCBmdW5jdGlvbihPKXtcbiAgICBPID0gdG9PYmplY3QoTyk7XG4gICAgaWYoaGFzKE8sIElFX1BST1RPKSlyZXR1cm4gT1tJRV9QUk9UT107XG4gICAgaWYodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcil7XG4gICAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gICAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbiAgfSxcbiAgLy8gMTkuMS4yLjcgLyAxNS4yLjMuNCBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxuICBnZXRPd25Qcm9wZXJ0eU5hbWVzOiAkLmdldE5hbWVzID0gJC5nZXROYW1lcyB8fCBjcmVhdGVHZXRLZXlzKGtleXMyLCBrZXlzMi5sZW5ndGgsIHRydWUpLFxuICAvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbiAgY3JlYXRlOiAkLmNyZWF0ZSA9ICQuY3JlYXRlIHx8IGZ1bmN0aW9uKE8sIC8qPyovUHJvcGVydGllcyl7XG4gICAgdmFyIHJlc3VsdDtcbiAgICBpZihPICE9PSBudWxsKXtcbiAgICAgIEVtcHR5LnByb3RvdHlwZSA9IGFuT2JqZWN0KE8pO1xuICAgICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgICBFbXB0eS5wcm90b3R5cGUgPSBudWxsO1xuICAgICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBzaGltXG4gICAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICAgIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkZWZpbmVQcm9wZXJ0aWVzKHJlc3VsdCwgUHJvcGVydGllcyk7XG4gIH0sXG4gIC8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxuICBrZXlzOiAkLmdldEtleXMgPSAkLmdldEtleXMgfHwgY3JlYXRlR2V0S2V5cyhrZXlzMSwga2V5c0xlbjEsIGZhbHNlKVxufSk7XG5cbnZhciBjb25zdHJ1Y3QgPSBmdW5jdGlvbihGLCBsZW4sIGFyZ3Mpe1xuICBpZighKGxlbiBpbiBmYWN0b3JpZXMpKXtcbiAgICBmb3IodmFyIG4gPSBbXSwgaSA9IDA7IGkgPCBsZW47IGkrKyluW2ldID0gJ2FbJyArIGkgKyAnXSc7XG4gICAgZmFjdG9yaWVzW2xlbl0gPSBGdW5jdGlvbignRixhJywgJ3JldHVybiBuZXcgRignICsgbi5qb2luKCcsJykgKyAnKScpO1xuICB9XG4gIHJldHVybiBmYWN0b3JpZXNbbGVuXShGLCBhcmdzKTtcbn07XG5cbi8vIDE5LjIuMy4yIC8gMTUuMy40LjUgRnVuY3Rpb24ucHJvdG90eXBlLmJpbmQodGhpc0FyZywgYXJncy4uLilcbiRleHBvcnQoJGV4cG9ydC5QLCAnRnVuY3Rpb24nLCB7XG4gIGJpbmQ6IGZ1bmN0aW9uIGJpbmQodGhhdCAvKiwgYXJncy4uLiAqLyl7XG4gICAgdmFyIGZuICAgICAgID0gYUZ1bmN0aW9uKHRoaXMpXG4gICAgICAsIHBhcnRBcmdzID0gYXJyYXlTbGljZS5jYWxsKGFyZ3VtZW50cywgMSk7XG4gICAgdmFyIGJvdW5kID0gZnVuY3Rpb24oLyogYXJncy4uLiAqLyl7XG4gICAgICB2YXIgYXJncyA9IHBhcnRBcmdzLmNvbmNhdChhcnJheVNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIGJvdW5kID8gY29uc3RydWN0KGZuLCBhcmdzLmxlbmd0aCwgYXJncykgOiBpbnZva2UoZm4sIGFyZ3MsIHRoYXQpO1xuICAgIH07XG4gICAgaWYoaXNPYmplY3QoZm4ucHJvdG90eXBlKSlib3VuZC5wcm90b3R5cGUgPSBmbi5wcm90b3R5cGU7XG4gICAgcmV0dXJuIGJvdW5kO1xuICB9XG59KTtcblxuLy8gZmFsbGJhY2sgZm9yIG5vdCBhcnJheS1saWtlIEVTMyBzdHJpbmdzIGFuZCBET00gb2JqZWN0c1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmYWlscyhmdW5jdGlvbigpe1xuICBpZihodG1sKWFycmF5U2xpY2UuY2FsbChodG1sKTtcbn0pLCAnQXJyYXknLCB7XG4gIHNsaWNlOiBmdW5jdGlvbihiZWdpbiwgZW5kKXtcbiAgICB2YXIgbGVuICAgPSB0b0xlbmd0aCh0aGlzLmxlbmd0aClcbiAgICAgICwga2xhc3MgPSBjb2YodGhpcyk7XG4gICAgZW5kID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiBlbmQ7XG4gICAgaWYoa2xhc3MgPT0gJ0FycmF5JylyZXR1cm4gYXJyYXlTbGljZS5jYWxsKHRoaXMsIGJlZ2luLCBlbmQpO1xuICAgIHZhciBzdGFydCAgPSB0b0luZGV4KGJlZ2luLCBsZW4pXG4gICAgICAsIHVwVG8gICA9IHRvSW5kZXgoZW5kLCBsZW4pXG4gICAgICAsIHNpemUgICA9IHRvTGVuZ3RoKHVwVG8gLSBzdGFydClcbiAgICAgICwgY2xvbmVkID0gQXJyYXkoc2l6ZSlcbiAgICAgICwgaSAgICAgID0gMDtcbiAgICBmb3IoOyBpIDwgc2l6ZTsgaSsrKWNsb25lZFtpXSA9IGtsYXNzID09ICdTdHJpbmcnXG4gICAgICA/IHRoaXMuY2hhckF0KHN0YXJ0ICsgaSlcbiAgICAgIDogdGhpc1tzdGFydCArIGldO1xuICAgIHJldHVybiBjbG9uZWQ7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoSU9iamVjdCAhPSBPYmplY3QpLCAnQXJyYXknLCB7XG4gIGpvaW46IGZ1bmN0aW9uIGpvaW4oc2VwYXJhdG9yKXtcbiAgICByZXR1cm4gYXJyYXlKb2luLmNhbGwoSU9iamVjdCh0aGlzKSwgc2VwYXJhdG9yID09PSB1bmRlZmluZWQgPyAnLCcgOiBzZXBhcmF0b3IpO1xuICB9XG59KTtcblxuLy8gMjIuMS4yLjIgLyAxNS40LjMuMiBBcnJheS5pc0FycmF5KGFyZylcbiRleHBvcnQoJGV4cG9ydC5TLCAnQXJyYXknLCB7aXNBcnJheTogcmVxdWlyZSgnLi8kLmlzLWFycmF5Jyl9KTtcblxudmFyIGNyZWF0ZUFycmF5UmVkdWNlID0gZnVuY3Rpb24oaXNSaWdodCl7XG4gIHJldHVybiBmdW5jdGlvbihjYWxsYmFja2ZuLCBtZW1vKXtcbiAgICBhRnVuY3Rpb24oY2FsbGJhY2tmbik7XG4gICAgdmFyIE8gICAgICA9IElPYmplY3QodGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IGlzUmlnaHQgPyBsZW5ndGggLSAxIDogMFxuICAgICAgLCBpICAgICAgPSBpc1JpZ2h0ID8gLTEgOiAxO1xuICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPCAyKWZvcig7Oyl7XG4gICAgICBpZihpbmRleCBpbiBPKXtcbiAgICAgICAgbWVtbyA9IE9baW5kZXhdO1xuICAgICAgICBpbmRleCArPSBpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGluZGV4ICs9IGk7XG4gICAgICBpZihpc1JpZ2h0ID8gaW5kZXggPCAwIDogbGVuZ3RoIDw9IGluZGV4KXtcbiAgICAgICAgdGhyb3cgVHlwZUVycm9yKCdSZWR1Y2Ugb2YgZW1wdHkgYXJyYXkgd2l0aCBubyBpbml0aWFsIHZhbHVlJyk7XG4gICAgICB9XG4gICAgfVxuICAgIGZvcig7aXNSaWdodCA/IGluZGV4ID49IDAgOiBsZW5ndGggPiBpbmRleDsgaW5kZXggKz0gaSlpZihpbmRleCBpbiBPKXtcbiAgICAgIG1lbW8gPSBjYWxsYmFja2ZuKG1lbW8sIE9baW5kZXhdLCBpbmRleCwgdGhpcyk7XG4gICAgfVxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufTtcblxudmFyIG1ldGhvZGl6ZSA9IGZ1bmN0aW9uKCRmbil7XG4gIHJldHVybiBmdW5jdGlvbihhcmcxLyosIGFyZzIgPSB1bmRlZmluZWQgKi8pe1xuICAgIHJldHVybiAkZm4odGhpcywgYXJnMSwgYXJndW1lbnRzWzFdKTtcbiAgfTtcbn07XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnQXJyYXknLCB7XG4gIC8vIDIyLjEuMy4xMCAvIDE1LjQuNC4xOCBBcnJheS5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICBmb3JFYWNoOiAkLmVhY2ggPSAkLmVhY2ggfHwgbWV0aG9kaXplKGNyZWF0ZUFycmF5TWV0aG9kKDApKSxcbiAgLy8gMjIuMS4zLjE1IC8gMTUuNC40LjE5IEFycmF5LnByb3RvdHlwZS5tYXAoY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcbiAgbWFwOiBtZXRob2RpemUoY3JlYXRlQXJyYXlNZXRob2QoMSkpLFxuICAvLyAyMi4xLjMuNyAvIDE1LjQuNC4yMCBBcnJheS5wcm90b3R5cGUuZmlsdGVyKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gIGZpbHRlcjogbWV0aG9kaXplKGNyZWF0ZUFycmF5TWV0aG9kKDIpKSxcbiAgLy8gMjIuMS4zLjIzIC8gMTUuNC40LjE3IEFycmF5LnByb3RvdHlwZS5zb21lKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gIHNvbWU6IG1ldGhvZGl6ZShjcmVhdGVBcnJheU1ldGhvZCgzKSksXG4gIC8vIDIyLjEuMy41IC8gMTUuNC40LjE2IEFycmF5LnByb3RvdHlwZS5ldmVyeShjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICBldmVyeTogbWV0aG9kaXplKGNyZWF0ZUFycmF5TWV0aG9kKDQpKSxcbiAgLy8gMjIuMS4zLjE4IC8gMTUuNC40LjIxIEFycmF5LnByb3RvdHlwZS5yZWR1Y2UoY2FsbGJhY2tmbiBbLCBpbml0aWFsVmFsdWVdKVxuICByZWR1Y2U6IGNyZWF0ZUFycmF5UmVkdWNlKGZhbHNlKSxcbiAgLy8gMjIuMS4zLjE5IC8gMTUuNC40LjIyIEFycmF5LnByb3RvdHlwZS5yZWR1Y2VSaWdodChjYWxsYmFja2ZuIFssIGluaXRpYWxWYWx1ZV0pXG4gIHJlZHVjZVJpZ2h0OiBjcmVhdGVBcnJheVJlZHVjZSh0cnVlKSxcbiAgLy8gMjIuMS4zLjExIC8gMTUuNC40LjE0IEFycmF5LnByb3RvdHlwZS5pbmRleE9mKHNlYXJjaEVsZW1lbnQgWywgZnJvbUluZGV4XSlcbiAgaW5kZXhPZjogbWV0aG9kaXplKGFycmF5SW5kZXhPZiksXG4gIC8vIDIyLjEuMy4xNCAvIDE1LjQuNC4xNSBBcnJheS5wcm90b3R5cGUubGFzdEluZGV4T2Yoc2VhcmNoRWxlbWVudCBbLCBmcm9tSW5kZXhdKVxuICBsYXN0SW5kZXhPZjogZnVuY3Rpb24oZWwsIGZyb21JbmRleCAvKiA9IEBbKi0xXSAqLyl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCh0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gbGVuZ3RoIC0gMTtcbiAgICBpZihhcmd1bWVudHMubGVuZ3RoID4gMSlpbmRleCA9IE1hdGgubWluKGluZGV4LCB0b0ludGVnZXIoZnJvbUluZGV4KSk7XG4gICAgaWYoaW5kZXggPCAwKWluZGV4ID0gdG9MZW5ndGgobGVuZ3RoICsgaW5kZXgpO1xuICAgIGZvcig7aW5kZXggPj0gMDsgaW5kZXgtLSlpZihpbmRleCBpbiBPKWlmKE9baW5kZXhdID09PSBlbClyZXR1cm4gaW5kZXg7XG4gICAgcmV0dXJuIC0xO1xuICB9XG59KTtcblxuLy8gMjAuMy4zLjEgLyAxNS45LjQuNCBEYXRlLm5vdygpXG4kZXhwb3J0KCRleHBvcnQuUywgJ0RhdGUnLCB7bm93OiBmdW5jdGlvbigpeyByZXR1cm4gK25ldyBEYXRlOyB9fSk7XG5cbnZhciBseiA9IGZ1bmN0aW9uKG51bSl7XG4gIHJldHVybiBudW0gPiA5ID8gbnVtIDogJzAnICsgbnVtO1xufTtcblxuLy8gMjAuMy40LjM2IC8gMTUuOS41LjQzIERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nKClcbi8vIFBoYW50b21KUyAvIG9sZCBXZWJLaXQgaGFzIGEgYnJva2VuIGltcGxlbWVudGF0aW9uc1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIG5ldyBEYXRlKC01ZTEzIC0gMSkudG9JU09TdHJpbmcoKSAhPSAnMDM4NS0wNy0yNVQwNzowNjozOS45OTlaJztcbn0pIHx8ICFmYWlscyhmdW5jdGlvbigpe1xuICBuZXcgRGF0ZShOYU4pLnRvSVNPU3RyaW5nKCk7XG59KSksICdEYXRlJywge1xuICB0b0lTT1N0cmluZzogZnVuY3Rpb24gdG9JU09TdHJpbmcoKXtcbiAgICBpZighaXNGaW5pdGUodGhpcykpdGhyb3cgUmFuZ2VFcnJvcignSW52YWxpZCB0aW1lIHZhbHVlJyk7XG4gICAgdmFyIGQgPSB0aGlzXG4gICAgICAsIHkgPSBkLmdldFVUQ0Z1bGxZZWFyKClcbiAgICAgICwgbSA9IGQuZ2V0VVRDTWlsbGlzZWNvbmRzKClcbiAgICAgICwgcyA9IHkgPCAwID8gJy0nIDogeSA+IDk5OTkgPyAnKycgOiAnJztcbiAgICByZXR1cm4gcyArICgnMDAwMDAnICsgTWF0aC5hYnMoeSkpLnNsaWNlKHMgPyAtNiA6IC00KSArXG4gICAgICAnLScgKyBseihkLmdldFVUQ01vbnRoKCkgKyAxKSArICctJyArIGx6KGQuZ2V0VVRDRGF0ZSgpKSArXG4gICAgICAnVCcgKyBseihkLmdldFVUQ0hvdXJzKCkpICsgJzonICsgbHooZC5nZXRVVENNaW51dGVzKCkpICtcbiAgICAgICc6JyArIGx6KGQuZ2V0VVRDU2Vjb25kcygpKSArICcuJyArIChtID4gOTkgPyBtIDogJzAnICsgbHoobSkpICsgJ1onO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczUuanNcbiAqKiBtb2R1bGUgaWQgPSAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJE9iamVjdCA9IE9iamVjdDtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBjcmVhdGU6ICAgICAkT2JqZWN0LmNyZWF0ZSxcbiAgZ2V0UHJvdG86ICAgJE9iamVjdC5nZXRQcm90b3R5cGVPZixcbiAgaXNFbnVtOiAgICAge30ucHJvcGVydHlJc0VudW1lcmFibGUsXG4gIGdldERlc2M6ICAgICRPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLFxuICBzZXREZXNjOiAgICAkT2JqZWN0LmRlZmluZVByb3BlcnR5LFxuICBzZXREZXNjczogICAkT2JqZWN0LmRlZmluZVByb3BlcnRpZXMsXG4gIGdldEtleXM6ICAgICRPYmplY3Qua2V5cyxcbiAgZ2V0TmFtZXM6ICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICBnZXRTeW1ib2xzOiAkT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyxcbiAgZWFjaDogICAgICAgW10uZm9yRWFjaFxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmpzXG4gKiogbW9kdWxlIGlkID0gNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGNvcmUgICAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuLyQuaGlkZScpXG4gICwgcmVkZWZpbmUgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJylcbiAgLCBjdHggICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBzb3VyY2Upe1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRlxuICAgICwgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuR1xuICAgICwgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuU1xuICAgICwgSVNfUFJPVE8gID0gdHlwZSAmICRleHBvcnQuUFxuICAgICwgSVNfQklORCAgID0gdHlwZSAmICRleHBvcnQuQlxuICAgICwgdGFyZ2V0ICAgID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdXG4gICAgLCBleHBvcnRzICAgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KVxuICAgICwgZXhwUHJvdG8gID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSlcbiAgICAsIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYoSVNfR0xPQkFMKXNvdXJjZSA9IG5hbWU7XG4gIGZvcihrZXkgaW4gc291cmNlKXtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiBrZXkgaW4gdGFyZ2V0O1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZih0YXJnZXQgJiYgIW93bilyZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0KTtcbiAgICAvLyBleHBvcnRcbiAgICBpZihleHBvcnRzW2tleV0gIT0gb3V0KWhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KWV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7IC8vIHdyYXBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmV4cG9ydC5qc1xuICoqIG1vZHVsZSBpZCA9IDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGYgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYodHlwZW9mIF9fZyA9PSAnbnVtYmVyJylfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmdsb2JhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7dmVyc2lvbjogJzEuMi42J307XG5pZih0eXBlb2YgX19lID09ICdudW1iZXInKV9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmNvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJCAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgcmV0dXJuICQuc2V0RGVzYyhvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uKG9iamVjdCwga2V5LCB2YWx1ZSl7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaGlkZS5qc1xuICoqIG1vZHVsZSBpZCA9IDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oYml0bWFwLCB2YWx1ZSl7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZSAgOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZSAgICA6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWUgICAgICAgOiB2YWx1ZVxuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnByb3BlcnR5LWRlc2MuanNcbiAqKiBtb2R1bGUgaWQgPSA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHtnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9fSkuYSAhPSA3O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmZhaWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nXG4vLyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbnZhciBnbG9iYWwgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgPSByZXF1aXJlKCcuLyQuaGlkZScpXG4gICwgU1JDICAgICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpKCdzcmMnKVxuICAsIFRPX1NUUklORyA9ICd0b1N0cmluZydcbiAgLCAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddXG4gICwgVFBMICAgICAgID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuLyQuY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihPLCBrZXksIHZhbCwgc2FmZSl7XG4gIGlmKHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJyl7XG4gICAgdmFsLmhhc093blByb3BlcnR5KFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICAgIHZhbC5oYXNPd25Qcm9wZXJ0eSgnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIH1cbiAgaWYoTyA9PT0gZ2xvYmFsKXtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaWYoIXNhZmUpZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQucmVkZWZpbmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlkID0gMFxuICAsIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC51aWQuanNcbiAqKiBtb2R1bGUgaWQgPSAxM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZm4sIHRoYXQsIGxlbmd0aCl7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmKHRoYXQgPT09IHVuZGVmaW5lZClyZXR1cm4gZm47XG4gIHN3aXRjaChsZW5ndGgpe1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhLCBiKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYSwgYiwgYyl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5jdHguanNcbiAqKiBtb2R1bGUgaWQgPSAxNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5hLWZ1bmN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLmRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmh0bWwuanNcbiAqKiBtb2R1bGUgaWQgPSAxNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgZG9jdW1lbnQgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJykuZG9jdW1lbnRcbiAgLy8gaW4gb2xkIElFIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnXG4gICwgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5kb20tY3JlYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlzLW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIGtleSl7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmhhcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY29mLmpzXG4gKiogbW9kdWxlIGlkID0gMjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgYXJncywgdGhhdCl7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoKGFyZ3MubGVuZ3RoKXtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gICAgICAgICAgICAgIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmludm9rZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoIWlzT2JqZWN0KGl0KSl0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5hbi1vYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnRvLW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDIzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIGlmKGl0ID09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5kZWZpbmVkLmpzXG4gKiogbW9kdWxlIGlkID0gMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuLyQuaW9iamVjdCcpXG4gICwgZGVmaW5lZCA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnRvLWlvYmplY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsICA9IE1hdGguY2VpbFxuICAsIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC50by1pbnRlZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLyQudG8taW50ZWdlcicpXG4gICwgbWF4ICAgICAgID0gTWF0aC5tYXhcbiAgLCBtaW4gICAgICAgPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaW5kZXgsIGxlbmd0aCl7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQudG8taW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAyOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi8kLnRvLWludGVnZXInKVxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQudG8tbGVuZ3RoLmpzXG4gKiogbW9kdWxlIGlkID0gMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDAgLT4gQXJyYXkjZm9yRWFjaFxuLy8gMSAtPiBBcnJheSNtYXBcbi8vIDIgLT4gQXJyYXkjZmlsdGVyXG4vLyAzIC0+IEFycmF5I3NvbWVcbi8vIDQgLT4gQXJyYXkjZXZlcnlcbi8vIDUgLT4gQXJyYXkjZmluZFxuLy8gNiAtPiBBcnJheSNmaW5kSW5kZXhcbnZhciBjdHggICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsIElPYmplY3QgID0gcmVxdWlyZSgnLi8kLmlvYmplY3QnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpXG4gICwgdG9MZW5ndGggPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJylcbiAgLCBhc2MgICAgICA9IHJlcXVpcmUoJy4vJC5hcnJheS1zcGVjaWVzLWNyZWF0ZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihUWVBFKXtcbiAgdmFyIElTX01BUCAgICAgICAgPSBUWVBFID09IDFcbiAgICAsIElTX0ZJTFRFUiAgICAgPSBUWVBFID09IDJcbiAgICAsIElTX1NPTUUgICAgICAgPSBUWVBFID09IDNcbiAgICAsIElTX0VWRVJZICAgICAgPSBUWVBFID09IDRcbiAgICAsIElTX0ZJTkRfSU5ERVggPSBUWVBFID09IDZcbiAgICAsIE5PX0hPTEVTICAgICAgPSBUWVBFID09IDUgfHwgSVNfRklORF9JTkRFWDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCR0aGlzLCBjYWxsYmFja2ZuLCB0aGF0KXtcbiAgICB2YXIgTyAgICAgID0gdG9PYmplY3QoJHRoaXMpXG4gICAgICAsIHNlbGYgICA9IElPYmplY3QoTylcbiAgICAgICwgZiAgICAgID0gY3R4KGNhbGxiYWNrZm4sIHRoYXQsIDMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKHNlbGYubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSAwXG4gICAgICAsIHJlc3VsdCA9IElTX01BUCA/IGFzYygkdGhpcywgbGVuZ3RoKSA6IElTX0ZJTFRFUiA/IGFzYygkdGhpcywgMCkgOiB1bmRlZmluZWRcbiAgICAgICwgdmFsLCByZXM7XG4gICAgZm9yKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKylpZihOT19IT0xFUyB8fCBpbmRleCBpbiBzZWxmKXtcbiAgICAgIHZhbCA9IHNlbGZbaW5kZXhdO1xuICAgICAgcmVzID0gZih2YWwsIGluZGV4LCBPKTtcbiAgICAgIGlmKFRZUEUpe1xuICAgICAgICBpZihJU19NQVApcmVzdWx0W2luZGV4XSA9IHJlczsgICAgICAgICAgICAvLyBtYXBcbiAgICAgICAgZWxzZSBpZihyZXMpc3dpdGNoKFRZUEUpe1xuICAgICAgICAgIGNhc2UgMzogcmV0dXJuIHRydWU7ICAgICAgICAgICAgICAgICAgICAvLyBzb21lXG4gICAgICAgICAgY2FzZSA1OiByZXR1cm4gdmFsOyAgICAgICAgICAgICAgICAgICAgIC8vIGZpbmRcbiAgICAgICAgICBjYXNlIDY6IHJldHVybiBpbmRleDsgICAgICAgICAgICAgICAgICAgLy8gZmluZEluZGV4XG4gICAgICAgICAgY2FzZSAyOiByZXN1bHQucHVzaCh2YWwpOyAgICAgICAgICAgICAgIC8vIGZpbHRlclxuICAgICAgICB9IGVsc2UgaWYoSVNfRVZFUlkpcmV0dXJuIGZhbHNlOyAgICAgICAgICAvLyBldmVyeVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gSVNfRklORF9JTkRFWCA/IC0xIDogSVNfU09NRSB8fCBJU19FVkVSWSA/IElTX0VWRVJZIDogcmVzdWx0O1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmFycmF5LW1ldGhvZHMuanNcbiAqKiBtb2R1bGUgaWQgPSAzMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gOS40LjIuMyBBcnJheVNwZWNpZXNDcmVhdGUob3JpZ2luYWxBcnJheSwgbGVuZ3RoKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgaXNBcnJheSAgPSByZXF1aXJlKCcuLyQuaXMtYXJyYXknKVxuICAsIFNQRUNJRVMgID0gcmVxdWlyZSgnLi8kLndrcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG9yaWdpbmFsLCBsZW5ndGgpe1xuICB2YXIgQztcbiAgaWYoaXNBcnJheShvcmlnaW5hbCkpe1xuICAgIEMgPSBvcmlnaW5hbC5jb25zdHJ1Y3RvcjtcbiAgICAvLyBjcm9zcy1yZWFsbSBmYWxsYmFja1xuICAgIGlmKHR5cGVvZiBDID09ICdmdW5jdGlvbicgJiYgKEMgPT09IEFycmF5IHx8IGlzQXJyYXkoQy5wcm90b3R5cGUpKSlDID0gdW5kZWZpbmVkO1xuICAgIGlmKGlzT2JqZWN0KEMpKXtcbiAgICAgIEMgPSBDW1NQRUNJRVNdO1xuICAgICAgaWYoQyA9PT0gbnVsbClDID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfSByZXR1cm4gbmV3IChDID09PSB1bmRlZmluZWQgPyBBcnJheSA6IEMpKGxlbmd0aCk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktc3BlY2llcy1jcmVhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4yLjIgSXNBcnJheShhcmd1bWVudClcbnZhciBjb2YgPSByZXF1aXJlKCcuLyQuY29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IEFycmF5LmlzQXJyYXkgfHwgZnVuY3Rpb24oYXJnKXtcbiAgcmV0dXJuIGNvZihhcmcpID09ICdBcnJheSc7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXMtYXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHN0b3JlICA9IHJlcXVpcmUoJy4vJC5zaGFyZWQnKSgnd2tzJylcbiAgLCB1aWQgICAgPSByZXF1aXJlKCcuLyQudWlkJylcbiAgLCBTeW1ib2wgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJykuU3ltYm9sO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihuYW1lKXtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgU3ltYm9sICYmIFN5bWJvbFtuYW1lXSB8fCAoU3ltYm9sIHx8IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLndrcy5qc1xuICoqIG1vZHVsZSBpZCA9IDMzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXydcbiAgLCBzdG9yZSAgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnNoYXJlZC5qc1xuICoqIG1vZHVsZSBpZCA9IDM0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJylcbiAgLCB0b0luZGV4ICAgPSByZXF1aXJlKCcuLyQudG8taW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oSVNfSU5DTFVERVMpe1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGVsLCBmcm9tSW5kZXgpe1xuICAgIHZhciBPICAgICAgPSB0b0lPYmplY3QoJHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSB0b0luZGV4KGZyb21JbmRleCwgbGVuZ3RoKVxuICAgICAgLCB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgaWYoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpd2hpbGUobGVuZ3RoID4gaW5kZXgpe1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgaWYodmFsdWUgIT0gdmFsdWUpcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjdG9JbmRleCBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pe1xuICAgICAgaWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktaW5jbHVkZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gRUNNQVNjcmlwdCA2IHN5bWJvbHMgc2hpbVxudmFyICQgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBnbG9iYWwgICAgICAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgREVTQ1JJUFRPUlMgICAgPSByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKVxuICAsICRmYWlscyAgICAgICAgID0gcmVxdWlyZSgnLi8kLmZhaWxzJylcbiAgLCBzaGFyZWQgICAgICAgICA9IHJlcXVpcmUoJy4vJC5zaGFyZWQnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJylcbiAgLCB1aWQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC51aWQnKVxuICAsIHdrcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLndrcycpXG4gICwga2V5T2YgICAgICAgICAgPSByZXF1aXJlKCcuLyQua2V5b2YnKVxuICAsICRuYW1lcyAgICAgICAgID0gcmVxdWlyZSgnLi8kLmdldC1uYW1lcycpXG4gICwgZW51bUtleXMgICAgICAgPSByZXF1aXJlKCcuLyQuZW51bS1rZXlzJylcbiAgLCBpc0FycmF5ICAgICAgICA9IHJlcXVpcmUoJy4vJC5pcy1hcnJheScpXG4gICwgYW5PYmplY3QgICAgICAgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCB0b0lPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0JylcbiAgLCBjcmVhdGVEZXNjICAgICA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJylcbiAgLCBnZXREZXNjICAgICAgICA9ICQuZ2V0RGVzY1xuICAsIHNldERlc2MgICAgICAgID0gJC5zZXREZXNjXG4gICwgX2NyZWF0ZSAgICAgICAgPSAkLmNyZWF0ZVxuICAsIGdldE5hbWVzICAgICAgID0gJG5hbWVzLmdldFxuICAsICRTeW1ib2wgICAgICAgID0gZ2xvYmFsLlN5bWJvbFxuICAsICRKU09OICAgICAgICAgID0gZ2xvYmFsLkpTT05cbiAgLCBfc3RyaW5naWZ5ICAgICA9ICRKU09OICYmICRKU09OLnN0cmluZ2lmeVxuICAsIHNldHRlciAgICAgICAgID0gZmFsc2VcbiAgLCBISURERU4gICAgICAgICA9IHdrcygnX2hpZGRlbicpXG4gICwgaXNFbnVtICAgICAgICAgPSAkLmlzRW51bVxuICAsIFN5bWJvbFJlZ2lzdHJ5ID0gc2hhcmVkKCdzeW1ib2wtcmVnaXN0cnknKVxuICAsIEFsbFN5bWJvbHMgICAgID0gc2hhcmVkKCdzeW1ib2xzJylcbiAgLCB1c2VOYXRpdmUgICAgICA9IHR5cGVvZiAkU3ltYm9sID09ICdmdW5jdGlvbidcbiAgLCBPYmplY3RQcm90byAgICA9IE9iamVjdC5wcm90b3R5cGU7XG5cbi8vIGZhbGxiYWNrIGZvciBvbGQgQW5kcm9pZCwgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTY4N1xudmFyIHNldFN5bWJvbERlc2MgPSBERVNDUklQVE9SUyAmJiAkZmFpbHMoZnVuY3Rpb24oKXtcbiAgcmV0dXJuIF9jcmVhdGUoc2V0RGVzYyh7fSwgJ2EnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gc2V0RGVzYyh0aGlzLCAnYScsIHt2YWx1ZTogN30pLmE7IH1cbiAgfSkpLmEgIT0gNztcbn0pID8gZnVuY3Rpb24oaXQsIGtleSwgRCl7XG4gIHZhciBwcm90b0Rlc2MgPSBnZXREZXNjKE9iamVjdFByb3RvLCBrZXkpO1xuICBpZihwcm90b0Rlc2MpZGVsZXRlIE9iamVjdFByb3RvW2tleV07XG4gIHNldERlc2MoaXQsIGtleSwgRCk7XG4gIGlmKHByb3RvRGVzYyAmJiBpdCAhPT0gT2JqZWN0UHJvdG8pc2V0RGVzYyhPYmplY3RQcm90bywga2V5LCBwcm90b0Rlc2MpO1xufSA6IHNldERlc2M7XG5cbnZhciB3cmFwID0gZnVuY3Rpb24odGFnKXtcbiAgdmFyIHN5bSA9IEFsbFN5bWJvbHNbdGFnXSA9IF9jcmVhdGUoJFN5bWJvbC5wcm90b3R5cGUpO1xuICBzeW0uX2sgPSB0YWc7XG4gIERFU0NSSVBUT1JTICYmIHNldHRlciAmJiBzZXRTeW1ib2xEZXNjKE9iamVjdFByb3RvLCB0YWcsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgc2V0OiBmdW5jdGlvbih2YWx1ZSl7XG4gICAgICBpZihoYXModGhpcywgSElEREVOKSAmJiBoYXModGhpc1tISURERU5dLCB0YWcpKXRoaXNbSElEREVOXVt0YWddID0gZmFsc2U7XG4gICAgICBzZXRTeW1ib2xEZXNjKHRoaXMsIHRhZywgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBzeW07XG59O1xuXG52YXIgaXNTeW1ib2wgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCc7XG59O1xuXG52YXIgJGRlZmluZVByb3BlcnR5ID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoaXQsIGtleSwgRCl7XG4gIGlmKEQgJiYgaGFzKEFsbFN5bWJvbHMsIGtleSkpe1xuICAgIGlmKCFELmVudW1lcmFibGUpe1xuICAgICAgaWYoIWhhcyhpdCwgSElEREVOKSlzZXREZXNjKGl0LCBISURERU4sIGNyZWF0ZURlc2MoMSwge30pKTtcbiAgICAgIGl0W0hJRERFTl1ba2V5XSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0paXRbSElEREVOXVtrZXldID0gZmFsc2U7XG4gICAgICBEID0gX2NyZWF0ZShELCB7ZW51bWVyYWJsZTogY3JlYXRlRGVzYygwLCBmYWxzZSl9KTtcbiAgICB9IHJldHVybiBzZXRTeW1ib2xEZXNjKGl0LCBrZXksIEQpO1xuICB9IHJldHVybiBzZXREZXNjKGl0LCBrZXksIEQpO1xufTtcbnZhciAkZGVmaW5lUHJvcGVydGllcyA9IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoaXQsIFApe1xuICBhbk9iamVjdChpdCk7XG4gIHZhciBrZXlzID0gZW51bUtleXMoUCA9IHRvSU9iamVjdChQKSlcbiAgICAsIGkgICAgPSAwXG4gICAgLCBsID0ga2V5cy5sZW5ndGhcbiAgICAsIGtleTtcbiAgd2hpbGUobCA+IGkpJGRlZmluZVByb3BlcnR5KGl0LCBrZXkgPSBrZXlzW2krK10sIFBba2V5XSk7XG4gIHJldHVybiBpdDtcbn07XG52YXIgJGNyZWF0ZSA9IGZ1bmN0aW9uIGNyZWF0ZShpdCwgUCl7XG4gIHJldHVybiBQID09PSB1bmRlZmluZWQgPyBfY3JlYXRlKGl0KSA6ICRkZWZpbmVQcm9wZXJ0aWVzKF9jcmVhdGUoaXQpLCBQKTtcbn07XG52YXIgJHByb3BlcnR5SXNFbnVtZXJhYmxlID0gZnVuY3Rpb24gcHJvcGVydHlJc0VudW1lcmFibGUoa2V5KXtcbiAgdmFyIEUgPSBpc0VudW0uY2FsbCh0aGlzLCBrZXkpO1xuICByZXR1cm4gRSB8fCAhaGFzKHRoaXMsIGtleSkgfHwgIWhhcyhBbGxTeW1ib2xzLCBrZXkpIHx8IGhhcyh0aGlzLCBISURERU4pICYmIHRoaXNbSElEREVOXVtrZXldXG4gICAgPyBFIDogdHJ1ZTtcbn07XG52YXIgJGdldE93blByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgdmFyIEQgPSBnZXREZXNjKGl0ID0gdG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSAmJiAhKGhhcyhpdCwgSElEREVOKSAmJiBpdFtISURERU5dW2tleV0pKUQuZW51bWVyYWJsZSA9IHRydWU7XG4gIHJldHVybiBEO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlOYW1lcyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ2V0TmFtZXModG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoIWhhcyhBbGxTeW1ib2xzLCBrZXkgPSBuYW1lc1tpKytdKSAmJiBrZXkgIT0gSElEREVOKXJlc3VsdC5wdXNoKGtleSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPSBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eVN5bWJvbHMoaXQpe1xuICB2YXIgbmFtZXMgID0gZ2V0TmFtZXModG9JT2JqZWN0KGl0KSlcbiAgICAsIHJlc3VsdCA9IFtdXG4gICAgLCBpICAgICAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKG5hbWVzLmxlbmd0aCA+IGkpaWYoaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pKXJlc3VsdC5wdXNoKEFsbFN5bWJvbHNba2V5XSk7XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyICRzdHJpbmdpZnkgPSBmdW5jdGlvbiBzdHJpbmdpZnkoaXQpe1xuICBpZihpdCA9PT0gdW5kZWZpbmVkIHx8IGlzU3ltYm9sKGl0KSlyZXR1cm47IC8vIElFOCByZXR1cm5zIHN0cmluZyBvbiB1bmRlZmluZWRcbiAgdmFyIGFyZ3MgPSBbaXRdXG4gICAgLCBpICAgID0gMVxuICAgICwgJCQgICA9IGFyZ3VtZW50c1xuICAgICwgcmVwbGFjZXIsICRyZXBsYWNlcjtcbiAgd2hpbGUoJCQubGVuZ3RoID4gaSlhcmdzLnB1c2goJCRbaSsrXSk7XG4gIHJlcGxhY2VyID0gYXJnc1sxXTtcbiAgaWYodHlwZW9mIHJlcGxhY2VyID09ICdmdW5jdGlvbicpJHJlcGxhY2VyID0gcmVwbGFjZXI7XG4gIGlmKCRyZXBsYWNlciB8fCAhaXNBcnJheShyZXBsYWNlcikpcmVwbGFjZXIgPSBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICBpZigkcmVwbGFjZXIpdmFsdWUgPSAkcmVwbGFjZXIuY2FsbCh0aGlzLCBrZXksIHZhbHVlKTtcbiAgICBpZighaXNTeW1ib2wodmFsdWUpKXJldHVybiB2YWx1ZTtcbiAgfTtcbiAgYXJnc1sxXSA9IHJlcGxhY2VyO1xuICByZXR1cm4gX3N0cmluZ2lmeS5hcHBseSgkSlNPTiwgYXJncyk7XG59O1xudmFyIGJ1Z2d5SlNPTiA9ICRmYWlscyhmdW5jdGlvbigpe1xuICB2YXIgUyA9ICRTeW1ib2woKTtcbiAgLy8gTVMgRWRnZSBjb252ZXJ0cyBzeW1ib2wgdmFsdWVzIHRvIEpTT04gYXMge31cbiAgLy8gV2ViS2l0IGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyBudWxsXG4gIC8vIFY4IHRocm93cyBvbiBib3hlZCBzeW1ib2xzXG4gIHJldHVybiBfc3RyaW5naWZ5KFtTXSkgIT0gJ1tudWxsXScgfHwgX3N0cmluZ2lmeSh7YTogU30pICE9ICd7fScgfHwgX3N0cmluZ2lmeShPYmplY3QoUykpICE9ICd7fSc7XG59KTtcblxuLy8gMTkuNC4xLjEgU3ltYm9sKFtkZXNjcmlwdGlvbl0pXG5pZighdXNlTmF0aXZlKXtcbiAgJFN5bWJvbCA9IGZ1bmN0aW9uIFN5bWJvbCgpe1xuICAgIGlmKGlzU3ltYm9sKHRoaXMpKXRocm93IFR5cGVFcnJvcignU3ltYm9sIGlzIG5vdCBhIGNvbnN0cnVjdG9yJyk7XG4gICAgcmV0dXJuIHdyYXAodWlkKGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKSk7XG4gIH07XG4gIHJlZGVmaW5lKCRTeW1ib2wucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpe1xuICAgIHJldHVybiB0aGlzLl9rO1xuICB9KTtcblxuICBpc1N5bWJvbCA9IGZ1bmN0aW9uKGl0KXtcbiAgICByZXR1cm4gaXQgaW5zdGFuY2VvZiAkU3ltYm9sO1xuICB9O1xuXG4gICQuY3JlYXRlICAgICA9ICRjcmVhdGU7XG4gICQuaXNFbnVtICAgICA9ICRwcm9wZXJ0eUlzRW51bWVyYWJsZTtcbiAgJC5nZXREZXNjICAgID0gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgJC5zZXREZXNjICAgID0gJGRlZmluZVByb3BlcnR5O1xuICAkLnNldERlc2NzICAgPSAkZGVmaW5lUHJvcGVydGllcztcbiAgJC5nZXROYW1lcyAgID0gJG5hbWVzLmdldCA9ICRnZXRPd25Qcm9wZXJ0eU5hbWVzO1xuICAkLmdldFN5bWJvbHMgPSAkZ2V0T3duUHJvcGVydHlTeW1ib2xzO1xuXG4gIGlmKERFU0NSSVBUT1JTICYmICFyZXF1aXJlKCcuLyQubGlicmFyeScpKXtcbiAgICByZWRlZmluZShPYmplY3RQcm90bywgJ3Byb3BlcnR5SXNFbnVtZXJhYmxlJywgJHByb3BlcnR5SXNFbnVtZXJhYmxlLCB0cnVlKTtcbiAgfVxufVxuXG52YXIgc3ltYm9sU3RhdGljcyA9IHtcbiAgLy8gMTkuNC4yLjEgU3ltYm9sLmZvcihrZXkpXG4gICdmb3InOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiBoYXMoU3ltYm9sUmVnaXN0cnksIGtleSArPSAnJylcbiAgICAgID8gU3ltYm9sUmVnaXN0cnlba2V5XVxuICAgICAgOiBTeW1ib2xSZWdpc3RyeVtrZXldID0gJFN5bWJvbChrZXkpO1xuICB9LFxuICAvLyAxOS40LjIuNSBTeW1ib2wua2V5Rm9yKHN5bSlcbiAga2V5Rm9yOiBmdW5jdGlvbiBrZXlGb3Ioa2V5KXtcbiAgICByZXR1cm4ga2V5T2YoU3ltYm9sUmVnaXN0cnksIGtleSk7XG4gIH0sXG4gIHVzZVNldHRlcjogZnVuY3Rpb24oKXsgc2V0dGVyID0gdHJ1ZTsgfSxcbiAgdXNlU2ltcGxlOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSBmYWxzZTsgfVxufTtcbi8vIDE5LjQuMi4yIFN5bWJvbC5oYXNJbnN0YW5jZVxuLy8gMTkuNC4yLjMgU3ltYm9sLmlzQ29uY2F0U3ByZWFkYWJsZVxuLy8gMTkuNC4yLjQgU3ltYm9sLml0ZXJhdG9yXG4vLyAxOS40LjIuNiBTeW1ib2wubWF0Y2hcbi8vIDE5LjQuMi44IFN5bWJvbC5yZXBsYWNlXG4vLyAxOS40LjIuOSBTeW1ib2wuc2VhcmNoXG4vLyAxOS40LjIuMTAgU3ltYm9sLnNwZWNpZXNcbi8vIDE5LjQuMi4xMSBTeW1ib2wuc3BsaXRcbi8vIDE5LjQuMi4xMiBTeW1ib2wudG9QcmltaXRpdmVcbi8vIDE5LjQuMi4xMyBTeW1ib2wudG9TdHJpbmdUYWdcbi8vIDE5LjQuMi4xNCBTeW1ib2wudW5zY29wYWJsZXNcbiQuZWFjaC5jYWxsKChcbiAgJ2hhc0luc3RhbmNlLGlzQ29uY2F0U3ByZWFkYWJsZSxpdGVyYXRvcixtYXRjaCxyZXBsYWNlLHNlYXJjaCwnICtcbiAgJ3NwZWNpZXMsc3BsaXQsdG9QcmltaXRpdmUsdG9TdHJpbmdUYWcsdW5zY29wYWJsZXMnXG4pLnNwbGl0KCcsJyksIGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHN5bSA9IHdrcyhpdCk7XG4gIHN5bWJvbFN0YXRpY3NbaXRdID0gdXNlTmF0aXZlID8gc3ltIDogd3JhcChzeW0pO1xufSk7XG5cbnNldHRlciA9IHRydWU7XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XLCB7U3ltYm9sOiAkU3ltYm9sfSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnU3ltYm9sJywgc3ltYm9sU3RhdGljcyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXVzZU5hdGl2ZSwgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjIgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICRjcmVhdGUsXG4gIC8vIDE5LjEuMi40IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKVxuICBkZWZpbmVQcm9wZXJ0eTogJGRlZmluZVByb3BlcnR5LFxuICAvLyAxOS4xLjIuMyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiAkZGVmaW5lUHJvcGVydGllcyxcbiAgLy8gMTkuMS4yLjYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIC8vIDE5LjEuMi43IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICRnZXRPd25Qcm9wZXJ0eU5hbWVzLFxuICAvLyAxOS4xLjIuOCBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKE8pXG4gIGdldE93blByb3BlcnR5U3ltYm9sczogJGdldE93blByb3BlcnR5U3ltYm9sc1xufSk7XG5cbi8vIDI0LjMuMiBKU09OLnN0cmluZ2lmeSh2YWx1ZSBbLCByZXBsYWNlciBbLCBzcGFjZV1dKVxuJEpTT04gJiYgJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIXVzZU5hdGl2ZSB8fCBidWdneUpTT04pLCAnSlNPTicsIHtzdHJpbmdpZnk6ICRzdHJpbmdpZnl9KTtcblxuLy8gMTkuNC4zLjUgU3ltYm9sLnByb3RvdHlwZVtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoJFN5bWJvbCwgJ1N5bWJvbCcpO1xuLy8gMjAuMi4xLjkgTWF0aFtAQHRvU3RyaW5nVGFnXVxuc2V0VG9TdHJpbmdUYWcoTWF0aCwgJ01hdGgnLCB0cnVlKTtcbi8vIDI0LjMuMyBKU09OW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhnbG9iYWwuSlNPTiwgJ0pTT04nLCB0cnVlKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3ltYm9sLmpzXG4gKiogbW9kdWxlIGlkID0gMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBkZWYgPSByZXF1aXJlKCcuLyQnKS5zZXREZXNjXG4gICwgaGFzID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgVEFHID0gcmVxdWlyZSgnLi8kLndrcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0LCB0YWcsIHN0YXQpe1xuICBpZihpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKWRlZihpdCwgVEFHLCB7Y29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnfSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuc2V0LXRvLXN0cmluZy10YWcuanNcbiAqKiBtb2R1bGUgaWQgPSAzN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICQgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob2JqZWN0LCBlbCl7XG4gIHZhciBPICAgICAgPSB0b0lPYmplY3Qob2JqZWN0KVxuICAgICwga2V5cyAgID0gJC5nZXRLZXlzKE8pXG4gICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICwgaW5kZXggID0gMFxuICAgICwga2V5O1xuICB3aGlsZShsZW5ndGggPiBpbmRleClpZihPW2tleSA9IGtleXNbaW5kZXgrK11dID09PSBlbClyZXR1cm4ga2V5O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmtleW9mLmpzXG4gKiogbW9kdWxlIGlkID0gMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGZhbGxiYWNrIGZvciBJRTExIGJ1Z2d5IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzIHdpdGggaWZyYW1lIGFuZCB3aW5kb3dcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpXG4gICwgZ2V0TmFtZXMgID0gcmVxdWlyZSgnLi8kJykuZ2V0TmFtZXNcbiAgLCB0b1N0cmluZyAgPSB7fS50b1N0cmluZztcblxudmFyIHdpbmRvd05hbWVzID0gdHlwZW9mIHdpbmRvdyA9PSAnb2JqZWN0JyAmJiBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lc1xuICA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHdpbmRvdykgOiBbXTtcblxudmFyIGdldFdpbmRvd05hbWVzID0gZnVuY3Rpb24oaXQpe1xuICB0cnkge1xuICAgIHJldHVybiBnZXROYW1lcyhpdCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHdpbmRvd05hbWVzLnNsaWNlKCk7XG4gIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzLmdldCA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5TmFtZXMoaXQpe1xuICBpZih3aW5kb3dOYW1lcyAmJiB0b1N0cmluZy5jYWxsKGl0KSA9PSAnW29iamVjdCBXaW5kb3ddJylyZXR1cm4gZ2V0V2luZG93TmFtZXMoaXQpO1xuICByZXR1cm4gZ2V0TmFtZXModG9JT2JqZWN0KGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZ2V0LW5hbWVzLmpzXG4gKiogbW9kdWxlIGlkID0gMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGFsbCBlbnVtZXJhYmxlIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBzeW1ib2xzXG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHZhciBrZXlzICAgICAgID0gJC5nZXRLZXlzKGl0KVxuICAgICwgZ2V0U3ltYm9scyA9ICQuZ2V0U3ltYm9scztcbiAgaWYoZ2V0U3ltYm9scyl7XG4gICAgdmFyIHN5bWJvbHMgPSBnZXRTeW1ib2xzKGl0KVxuICAgICAgLCBpc0VudW0gID0gJC5pc0VudW1cbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5O1xuICAgIHdoaWxlKHN5bWJvbHMubGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChpdCwga2V5ID0gc3ltYm9sc1tpKytdKSlrZXlzLnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4ga2V5cztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5lbnVtLWtleXMuanNcbiAqKiBtb2R1bGUgaWQgPSA0MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmxpYnJhcnkuanNcbiAqKiBtb2R1bGUgaWQgPSA0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4zLjEgT2JqZWN0LmFzc2lnbih0YXJnZXQsIHNvdXJjZSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiwgJ09iamVjdCcsIHthc3NpZ246IHJlcXVpcmUoJy4vJC5vYmplY3QtYXNzaWduJyl9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmFzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlLCAuLi4pXG52YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuLyQuaW9iamVjdCcpO1xuXG4vLyBzaG91bGQgd29yayB3aXRoIHN5bWJvbHMgYW5kIHNob3VsZCBoYXZlIGRldGVybWluaXN0aWMgcHJvcGVydHkgb3JkZXIgKFY4IGJ1Zylcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKXtcbiAgdmFyIGEgPSBPYmplY3QuYXNzaWduXG4gICAgLCBBID0ge31cbiAgICAsIEIgPSB7fVxuICAgICwgUyA9IFN5bWJvbCgpXG4gICAgLCBLID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0JztcbiAgQVtTXSA9IDc7XG4gIEsuc3BsaXQoJycpLmZvckVhY2goZnVuY3Rpb24oayl7IEJba10gPSBrOyB9KTtcbiAgcmV0dXJuIGEoe30sIEEpW1NdICE9IDcgfHwgT2JqZWN0LmtleXMoYSh7fSwgQikpLmpvaW4oJycpICE9IEs7XG59KSA/IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQsIHNvdXJjZSl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgdmFyIFQgICAgID0gdG9PYmplY3QodGFyZ2V0KVxuICAgICwgJCQgICAgPSBhcmd1bWVudHNcbiAgICAsICQkbGVuID0gJCQubGVuZ3RoXG4gICAgLCBpbmRleCA9IDFcbiAgICAsIGdldEtleXMgICAgPSAkLmdldEtleXNcbiAgICAsIGdldFN5bWJvbHMgPSAkLmdldFN5bWJvbHNcbiAgICAsIGlzRW51bSAgICAgPSAkLmlzRW51bTtcbiAgd2hpbGUoJCRsZW4gPiBpbmRleCl7XG4gICAgdmFyIFMgICAgICA9IElPYmplY3QoJCRbaW5kZXgrK10pXG4gICAgICAsIGtleXMgICA9IGdldFN5bWJvbHMgPyBnZXRLZXlzKFMpLmNvbmNhdChnZXRTeW1ib2xzKFMpKSA6IGdldEtleXMoUylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaiAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gailpZihpc0VudW0uY2FsbChTLCBrZXkgPSBrZXlzW2orK10pKVRba2V5XSA9IFNba2V5XTtcbiAgfVxuICByZXR1cm4gVDtcbn0gOiBPYmplY3QuYXNzaWduO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQub2JqZWN0LWFzc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjMuMTAgT2JqZWN0LmlzKHZhbHVlMSwgdmFsdWUyKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtpczogcmVxdWlyZSgnLi8kLnNhbWUtdmFsdWUnKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMuanNcbiAqKiBtb2R1bGUgaWQgPSA0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4yLjkgU2FtZVZhbHVlKHgsIHkpXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5pcyB8fCBmdW5jdGlvbiBpcyh4LCB5KXtcbiAgcmV0dXJuIHggPT09IHkgPyB4ICE9PSAwIHx8IDEgLyB4ID09PSAxIC8geSA6IHggIT0geCAmJiB5ICE9IHk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuc2FtZS12YWx1ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjMuMTkgT2JqZWN0LnNldFByb3RvdHlwZU9mKE8sIHByb3RvKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtzZXRQcm90b3R5cGVPZjogcmVxdWlyZSgnLi8kLnNldC1wcm90bycpLnNldH0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Quc2V0LXByb3RvdHlwZS1vZi5qc1xuICoqIG1vZHVsZSBpZCA9IDQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBXb3JrcyB3aXRoIF9fcHJvdG9fXyBvbmx5LiBPbGQgdjggY2FuJ3Qgd29yayB3aXRoIG51bGwgcHJvdG8gb2JqZWN0cy5cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvICovXG52YXIgZ2V0RGVzYyAgPSByZXF1aXJlKCcuLyQnKS5nZXREZXNjXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbnZhciBjaGVjayA9IGZ1bmN0aW9uKE8sIHByb3RvKXtcbiAgYW5PYmplY3QoTyk7XG4gIGlmKCFpc09iamVjdChwcm90bykgJiYgcHJvdG8gIT09IG51bGwpdGhyb3cgVHlwZUVycm9yKHByb3RvICsgXCI6IGNhbid0IHNldCBhcyBwcm90b3R5cGUhXCIpO1xufTtcbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IE9iamVjdC5zZXRQcm90b3R5cGVPZiB8fCAoJ19fcHJvdG9fXycgaW4ge30gPyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lXG4gICAgZnVuY3Rpb24odGVzdCwgYnVnZ3ksIHNldCl7XG4gICAgICB0cnkge1xuICAgICAgICBzZXQgPSByZXF1aXJlKCcuLyQuY3R4JykoRnVuY3Rpb24uY2FsbCwgZ2V0RGVzYyhPYmplY3QucHJvdG90eXBlLCAnX19wcm90b19fJykuc2V0LCAyKTtcbiAgICAgICAgc2V0KHRlc3QsIFtdKTtcbiAgICAgICAgYnVnZ3kgPSAhKHRlc3QgaW5zdGFuY2VvZiBBcnJheSk7XG4gICAgICB9IGNhdGNoKGUpeyBidWdneSA9IHRydWU7IH1cbiAgICAgIHJldHVybiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZihPLCBwcm90byl7XG4gICAgICAgIGNoZWNrKE8sIHByb3RvKTtcbiAgICAgICAgaWYoYnVnZ3kpTy5fX3Byb3RvX18gPSBwcm90bztcbiAgICAgICAgZWxzZSBzZXQoTywgcHJvdG8pO1xuICAgICAgICByZXR1cm4gTztcbiAgICAgIH07XG4gICAgfSh7fSwgZmFsc2UpIDogdW5kZWZpbmVkKSxcbiAgY2hlY2s6IGNoZWNrXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuc2V0LXByb3RvLmpzXG4gKiogbW9kdWxlIGlkID0gNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuLyQuY2xhc3NvZicpXG4gICwgdGVzdCAgICA9IHt9O1xudGVzdFtyZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYodGVzdCArICcnICE9ICdbb2JqZWN0IHpdJyl7XG4gIHJlcXVpcmUoJy4vJC5yZWRlZmluZScpKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xuICB9LCB0cnVlKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKVxuICAsIFRBRyA9IHJlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKVxuICAvLyBFUzMgd3JvbmcgaGVyZVxuICAsIEFSRyA9IGNvZihmdW5jdGlvbigpeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gKE8gPSBPYmplY3QoaXQpKVtUQUddKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5jbGFzc29mLmpzXG4gKiogbW9kdWxlIGlkID0gNDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMi41IE9iamVjdC5mcmVlemUoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcblxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgnZnJlZXplJywgZnVuY3Rpb24oJGZyZWV6ZSl7XG4gIHJldHVybiBmdW5jdGlvbiBmcmVlemUoaXQpe1xuICAgIHJldHVybiAkZnJlZXplICYmIGlzT2JqZWN0KGl0KSA/ICRmcmVlemUoaXQpIDogaXQ7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBtb3N0IE9iamVjdCBtZXRob2RzIGJ5IEVTNiBzaG91bGQgYWNjZXB0IHByaW1pdGl2ZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgY29yZSAgICA9IHJlcXVpcmUoJy4vJC5jb3JlJylcbiAgLCBmYWlscyAgID0gcmVxdWlyZSgnLi8kLmZhaWxzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgZXhlYyl7XG4gIHZhciBmbiAgPSAoY29yZS5PYmplY3QgfHwge30pW0tFWV0gfHwgT2JqZWN0W0tFWV1cbiAgICAsIGV4cCA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWMoZm4pO1xuICAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7IGZuKDEpOyB9KSwgJ09iamVjdCcsIGV4cCk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQub2JqZWN0LXNhcC5qc1xuICoqIG1vZHVsZSBpZCA9IDUxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuMTcgT2JqZWN0LnNlYWwoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcblxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgnc2VhbCcsIGZ1bmN0aW9uKCRzZWFsKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHNlYWwoaXQpe1xuICAgIHJldHVybiAkc2VhbCAmJiBpc09iamVjdChpdCkgPyAkc2VhbChpdCkgOiBpdDtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Quc2VhbC5qc1xuICoqIG1vZHVsZSBpZCA9IDUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuMTUgT2JqZWN0LnByZXZlbnRFeHRlbnNpb25zKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5cbnJlcXVpcmUoJy4vJC5vYmplY3Qtc2FwJykoJ3ByZXZlbnRFeHRlbnNpb25zJywgZnVuY3Rpb24oJHByZXZlbnRFeHRlbnNpb25zKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKGl0KXtcbiAgICByZXR1cm4gJHByZXZlbnRFeHRlbnNpb25zICYmIGlzT2JqZWN0KGl0KSA/ICRwcmV2ZW50RXh0ZW5zaW9ucyhpdCkgOiBpdDtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QucHJldmVudC1leHRlbnNpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMi4xMiBPYmplY3QuaXNGcm96ZW4oTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcblxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgnaXNGcm96ZW4nLCBmdW5jdGlvbigkaXNGcm96ZW4pe1xuICByZXR1cm4gZnVuY3Rpb24gaXNGcm96ZW4oaXQpe1xuICAgIHJldHVybiBpc09iamVjdChpdCkgPyAkaXNGcm96ZW4gPyAkaXNGcm96ZW4oaXQpIDogZmFsc2UgOiB0cnVlO1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1mcm96ZW4uanNcbiAqKiBtb2R1bGUgaWQgPSA1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjEzIE9iamVjdC5pc1NlYWxlZChPKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdpc1NlYWxlZCcsIGZ1bmN0aW9uKCRpc1NlYWxlZCl7XG4gIHJldHVybiBmdW5jdGlvbiBpc1NlYWxlZChpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/ICRpc1NlYWxlZCA/ICRpc1NlYWxlZChpdCkgOiBmYWxzZSA6IHRydWU7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLXNlYWxlZC5qc1xuICoqIG1vZHVsZSBpZCA9IDU1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuMTEgT2JqZWN0LmlzRXh0ZW5zaWJsZShPKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdpc0V4dGVuc2libGUnLCBmdW5jdGlvbigkaXNFeHRlbnNpYmxlKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZShpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/ICRpc0V4dGVuc2libGUgPyAkaXNFeHRlbnNpYmxlKGl0KSA6IHRydWUgOiBmYWxzZTtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZXh0ZW5zaWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDU2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKTtcblxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yJywgZnVuY3Rpb24oJGdldE93blByb3BlcnR5RGVzY3JpcHRvcil7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoaXQsIGtleSl7XG4gICAgcmV0dXJuICRnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodG9JT2JqZWN0KGl0KSwga2V5KTtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMi45IE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdnZXRQcm90b3R5cGVPZicsIGZ1bmN0aW9uKCRnZXRQcm90b3R5cGVPZil7XG4gIHJldHVybiBmdW5jdGlvbiBnZXRQcm90b3R5cGVPZihpdCl7XG4gICAgcmV0dXJuICRnZXRQcm90b3R5cGVPZih0b09iamVjdChpdCkpO1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mLmpzXG4gKiogbW9kdWxlIGlkID0gNThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMi4xNCBPYmplY3Qua2V5cyhPKVxudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdrZXlzJywgZnVuY3Rpb24oJGtleXMpe1xuICByZXR1cm4gZnVuY3Rpb24ga2V5cyhpdCl7XG4gICAgcmV0dXJuICRrZXlzKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanNcbiAqKiBtb2R1bGUgaWQgPSA1OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbnJlcXVpcmUoJy4vJC5vYmplY3Qtc2FwJykoJ2dldE93blByb3BlcnR5TmFtZXMnLCBmdW5jdGlvbigpe1xuICByZXR1cm4gcmVxdWlyZSgnLi8kLmdldC1uYW1lcycpLmdldDtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1uYW1lcy5qc1xuICoqIG1vZHVsZSBpZCA9IDYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgc2V0RGVzYyAgICA9IHJlcXVpcmUoJy4vJCcpLnNldERlc2NcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKVxuICAsIGhhcyAgICAgICAgPSByZXF1aXJlKCcuLyQuaGFzJylcbiAgLCBGUHJvdG8gICAgID0gRnVuY3Rpb24ucHJvdG90eXBlXG4gICwgbmFtZVJFICAgICA9IC9eXFxzKmZ1bmN0aW9uIChbXiAoXSopL1xuICAsIE5BTUUgICAgICAgPSAnbmFtZSc7XG4vLyAxOS4yLjQuMiBuYW1lXG5OQU1FIGluIEZQcm90byB8fCByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKSAmJiBzZXREZXNjKEZQcm90bywgTkFNRSwge1xuICBjb25maWd1cmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKXtcbiAgICB2YXIgbWF0Y2ggPSAoJycgKyB0aGlzKS5tYXRjaChuYW1lUkUpXG4gICAgICAsIG5hbWUgID0gbWF0Y2ggPyBtYXRjaFsxXSA6ICcnO1xuICAgIGhhcyh0aGlzLCBOQU1FKSB8fCBzZXREZXNjKHRoaXMsIE5BTUUsIGNyZWF0ZURlc2MoNSwgbmFtZSkpO1xuICAgIHJldHVybiBuYW1lO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZS5qc1xuICoqIG1vZHVsZSBpZCA9IDYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgaXNPYmplY3QgICAgICA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIEhBU19JTlNUQU5DRSAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2hhc0luc3RhbmNlJylcbiAgLCBGdW5jdGlvblByb3RvID0gRnVuY3Rpb24ucHJvdG90eXBlO1xuLy8gMTkuMi4zLjYgRnVuY3Rpb24ucHJvdG90eXBlW0BAaGFzSW5zdGFuY2VdKFYpXG5pZighKEhBU19JTlNUQU5DRSBpbiBGdW5jdGlvblByb3RvKSkkLnNldERlc2MoRnVuY3Rpb25Qcm90bywgSEFTX0lOU1RBTkNFLCB7dmFsdWU6IGZ1bmN0aW9uKE8pe1xuICBpZih0eXBlb2YgdGhpcyAhPSAnZnVuY3Rpb24nIHx8ICFpc09iamVjdChPKSlyZXR1cm4gZmFsc2U7XG4gIGlmKCFpc09iamVjdCh0aGlzLnByb3RvdHlwZSkpcmV0dXJuIE8gaW5zdGFuY2VvZiB0aGlzO1xuICAvLyBmb3IgZW52aXJvbm1lbnQgdy9vIG5hdGl2ZSBgQEBoYXNJbnN0YW5jZWAgbG9naWMgZW5vdWdoIGBpbnN0YW5jZW9mYCwgYnV0IGFkZCB0aGlzOlxuICB3aGlsZShPID0gJC5nZXRQcm90byhPKSlpZih0aGlzLnByb3RvdHlwZSA9PT0gTylyZXR1cm4gdHJ1ZTtcbiAgcmV0dXJuIGZhbHNlO1xufX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5oYXMtaW5zdGFuY2UuanNcbiAqKiBtb2R1bGUgaWQgPSA2MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGhhcyAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgY29mICAgICAgICAgPSByZXF1aXJlKCcuLyQuY29mJylcbiAgLCB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vJC50by1wcmltaXRpdmUnKVxuICAsIGZhaWxzICAgICAgID0gcmVxdWlyZSgnLi8kLmZhaWxzJylcbiAgLCAkdHJpbSAgICAgICA9IHJlcXVpcmUoJy4vJC5zdHJpbmctdHJpbScpLnRyaW1cbiAgLCBOVU1CRVIgICAgICA9ICdOdW1iZXInXG4gICwgJE51bWJlciAgICAgPSBnbG9iYWxbTlVNQkVSXVxuICAsIEJhc2UgICAgICAgID0gJE51bWJlclxuICAsIHByb3RvICAgICAgID0gJE51bWJlci5wcm90b3R5cGVcbiAgLy8gT3BlcmEgfjEyIGhhcyBicm9rZW4gT2JqZWN0I3RvU3RyaW5nXG4gICwgQlJPS0VOX0NPRiAgPSBjb2YoJC5jcmVhdGUocHJvdG8pKSA9PSBOVU1CRVJcbiAgLCBUUklNICAgICAgICA9ICd0cmltJyBpbiBTdHJpbmcucHJvdG90eXBlO1xuXG4vLyA3LjEuMyBUb051bWJlcihhcmd1bWVudClcbnZhciB0b051bWJlciA9IGZ1bmN0aW9uKGFyZ3VtZW50KXtcbiAgdmFyIGl0ID0gdG9QcmltaXRpdmUoYXJndW1lbnQsIGZhbHNlKTtcbiAgaWYodHlwZW9mIGl0ID09ICdzdHJpbmcnICYmIGl0Lmxlbmd0aCA+IDIpe1xuICAgIGl0ID0gVFJJTSA/IGl0LnRyaW0oKSA6ICR0cmltKGl0LCAzKTtcbiAgICB2YXIgZmlyc3QgPSBpdC5jaGFyQ29kZUF0KDApXG4gICAgICAsIHRoaXJkLCByYWRpeCwgbWF4Q29kZTtcbiAgICBpZihmaXJzdCA9PT0gNDMgfHwgZmlyc3QgPT09IDQ1KXtcbiAgICAgIHRoaXJkID0gaXQuY2hhckNvZGVBdCgyKTtcbiAgICAgIGlmKHRoaXJkID09PSA4OCB8fCB0aGlyZCA9PT0gMTIwKXJldHVybiBOYU47IC8vIE51bWJlcignKzB4MScpIHNob3VsZCBiZSBOYU4sIG9sZCBWOCBmaXhcbiAgICB9IGVsc2UgaWYoZmlyc3QgPT09IDQ4KXtcbiAgICAgIHN3aXRjaChpdC5jaGFyQ29kZUF0KDEpKXtcbiAgICAgICAgY2FzZSA2NiA6IGNhc2UgOTggIDogcmFkaXggPSAyOyBtYXhDb2RlID0gNDk7IGJyZWFrOyAvLyBmYXN0IGVxdWFsIC9eMGJbMDFdKyQvaVxuICAgICAgICBjYXNlIDc5IDogY2FzZSAxMTEgOiByYWRpeCA9IDg7IG1heENvZGUgPSA1NTsgYnJlYWs7IC8vIGZhc3QgZXF1YWwgL14wb1swLTddKyQvaVxuICAgICAgICBkZWZhdWx0IDogcmV0dXJuICtpdDtcbiAgICAgIH1cbiAgICAgIGZvcih2YXIgZGlnaXRzID0gaXQuc2xpY2UoMiksIGkgPSAwLCBsID0gZGlnaXRzLmxlbmd0aCwgY29kZTsgaSA8IGw7IGkrKyl7XG4gICAgICAgIGNvZGUgPSBkaWdpdHMuY2hhckNvZGVBdChpKTtcbiAgICAgICAgLy8gcGFyc2VJbnQgcGFyc2VzIGEgc3RyaW5nIHRvIGEgZmlyc3QgdW5hdmFpbGFibGUgc3ltYm9sXG4gICAgICAgIC8vIGJ1dCBUb051bWJlciBzaG91bGQgcmV0dXJuIE5hTiBpZiBhIHN0cmluZyBjb250YWlucyB1bmF2YWlsYWJsZSBzeW1ib2xzXG4gICAgICAgIGlmKGNvZGUgPCA0OCB8fCBjb2RlID4gbWF4Q29kZSlyZXR1cm4gTmFOO1xuICAgICAgfSByZXR1cm4gcGFyc2VJbnQoZGlnaXRzLCByYWRpeCk7XG4gICAgfVxuICB9IHJldHVybiAraXQ7XG59O1xuXG5pZighJE51bWJlcignIDBvMScpIHx8ICEkTnVtYmVyKCcwYjEnKSB8fCAkTnVtYmVyKCcrMHgxJykpe1xuICAkTnVtYmVyID0gZnVuY3Rpb24gTnVtYmVyKHZhbHVlKXtcbiAgICB2YXIgaXQgPSBhcmd1bWVudHMubGVuZ3RoIDwgMSA/IDAgOiB2YWx1ZVxuICAgICAgLCB0aGF0ID0gdGhpcztcbiAgICByZXR1cm4gdGhhdCBpbnN0YW5jZW9mICROdW1iZXJcbiAgICAgIC8vIGNoZWNrIG9uIDEuLmNvbnN0cnVjdG9yKGZvbykgY2FzZVxuICAgICAgJiYgKEJST0tFTl9DT0YgPyBmYWlscyhmdW5jdGlvbigpeyBwcm90by52YWx1ZU9mLmNhbGwodGhhdCk7IH0pIDogY29mKHRoYXQpICE9IE5VTUJFUilcbiAgICAgICAgPyBuZXcgQmFzZSh0b051bWJlcihpdCkpIDogdG9OdW1iZXIoaXQpO1xuICB9O1xuICAkLmVhY2guY2FsbChyZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKSA/ICQuZ2V0TmFtZXMoQmFzZSkgOiAoXG4gICAgLy8gRVMzOlxuICAgICdNQVhfVkFMVUUsTUlOX1ZBTFVFLE5hTixORUdBVElWRV9JTkZJTklUWSxQT1NJVElWRV9JTkZJTklUWSwnICtcbiAgICAvLyBFUzYgKGluIGNhc2UsIGlmIG1vZHVsZXMgd2l0aCBFUzYgTnVtYmVyIHN0YXRpY3MgcmVxdWlyZWQgYmVmb3JlKTpcbiAgICAnRVBTSUxPTixpc0Zpbml0ZSxpc0ludGVnZXIsaXNOYU4saXNTYWZlSW50ZWdlcixNQVhfU0FGRV9JTlRFR0VSLCcgK1xuICAgICdNSU5fU0FGRV9JTlRFR0VSLHBhcnNlRmxvYXQscGFyc2VJbnQsaXNJbnRlZ2VyJ1xuICApLnNwbGl0KCcsJyksIGZ1bmN0aW9uKGtleSl7XG4gICAgaWYoaGFzKEJhc2UsIGtleSkgJiYgIWhhcygkTnVtYmVyLCBrZXkpKXtcbiAgICAgICQuc2V0RGVzYygkTnVtYmVyLCBrZXksICQuZ2V0RGVzYyhCYXNlLCBrZXkpKTtcbiAgICB9XG4gIH0pO1xuICAkTnVtYmVyLnByb3RvdHlwZSA9IHByb3RvO1xuICBwcm90by5jb25zdHJ1Y3RvciA9ICROdW1iZXI7XG4gIHJlcXVpcmUoJy4vJC5yZWRlZmluZScpKGdsb2JhbCwgTlVNQkVSLCAkTnVtYmVyKTtcbn1cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmNvbnN0cnVjdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gNjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxyXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XHJcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXHJcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXHJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIFMpe1xyXG4gIGlmKCFpc09iamVjdChpdCkpcmV0dXJuIGl0O1xyXG4gIHZhciBmbiwgdmFsO1xyXG4gIGlmKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcclxuICBpZih0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKXJldHVybiB2YWw7XHJcbiAgaWYoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcclxuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XHJcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC50by1wcmltaXRpdmUuanNcbiAqKiBtb2R1bGUgaWQgPSA2NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuLyQuZmFpbHMnKVxuICAsIHNwYWNlcyAgPSAnXFx4MDlcXHgwQVxceDBCXFx4MENcXHgwRFxceDIwXFx4QTBcXHUxNjgwXFx1MTgwRVxcdTIwMDBcXHUyMDAxXFx1MjAwMlxcdTIwMDMnICtcbiAgICAgICdcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOFxcdTIwMjlcXHVGRUZGJ1xuICAsIHNwYWNlICAgPSAnWycgKyBzcGFjZXMgKyAnXSdcbiAgLCBub24gICAgID0gJ1xcdTIwMGJcXHUwMDg1J1xuICAsIGx0cmltICAgPSBSZWdFeHAoJ14nICsgc3BhY2UgKyBzcGFjZSArICcqJylcbiAgLCBydHJpbSAgID0gUmVnRXhwKHNwYWNlICsgc3BhY2UgKyAnKiQnKTtcblxudmFyIGV4cG9ydGVyID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGV4cCAgPSB7fTtcbiAgZXhwW0tFWV0gPSBleGVjKHRyaW0pO1xuICAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuICEhc3BhY2VzW0tFWV0oKSB8fCBub25bS0VZXSgpICE9IG5vbjtcbiAgfSksICdTdHJpbmcnLCBleHApO1xufTtcblxuLy8gMSAtPiBTdHJpbmcjdHJpbUxlZnRcbi8vIDIgLT4gU3RyaW5nI3RyaW1SaWdodFxuLy8gMyAtPiBTdHJpbmcjdHJpbVxudmFyIHRyaW0gPSBleHBvcnRlci50cmltID0gZnVuY3Rpb24oc3RyaW5nLCBUWVBFKXtcbiAgc3RyaW5nID0gU3RyaW5nKGRlZmluZWQoc3RyaW5nKSk7XG4gIGlmKFRZUEUgJiAxKXN0cmluZyA9IHN0cmluZy5yZXBsYWNlKGx0cmltLCAnJyk7XG4gIGlmKFRZUEUgJiAyKXN0cmluZyA9IHN0cmluZy5yZXBsYWNlKHJ0cmltLCAnJyk7XG4gIHJldHVybiBzdHJpbmc7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydGVyO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuc3RyaW5nLXRyaW0uanNcbiAqKiBtb2R1bGUgaWQgPSA2NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMS4yLjEgTnVtYmVyLkVQU0lMT05cbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtFUFNJTE9OOiBNYXRoLnBvdygyLCAtNTIpfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5lcHNpbG9uLmpzXG4gKiogbW9kdWxlIGlkID0gNjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjEuMi4yIE51bWJlci5pc0Zpbml0ZShudW1iZXIpXG52YXIgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgX2lzRmluaXRlID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLmlzRmluaXRlO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtcbiAgaXNGaW5pdGU6IGZ1bmN0aW9uIGlzRmluaXRlKGl0KXtcbiAgICByZXR1cm4gdHlwZW9mIGl0ID09ICdudW1iZXInICYmIF9pc0Zpbml0ZShpdCk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtZmluaXRlLmpzXG4gKiogbW9kdWxlIGlkID0gNjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjEuMi4zIE51bWJlci5pc0ludGVnZXIobnVtYmVyKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge2lzSW50ZWdlcjogcmVxdWlyZSgnLi8kLmlzLWludGVnZXInKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtaW50ZWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDY4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4xLjIuMyBOdW1iZXIuaXNJbnRlZ2VyKG51bWJlcilcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGZsb29yICAgID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gaXNJbnRlZ2VyKGl0KXtcbiAgcmV0dXJuICFpc09iamVjdChpdCkgJiYgaXNGaW5pdGUoaXQpICYmIGZsb29yKGl0KSA9PT0gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXMtaW50ZWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDY5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4xLjIuNCBOdW1iZXIuaXNOYU4obnVtYmVyKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge1xuICBpc05hTjogZnVuY3Rpb24gaXNOYU4obnVtYmVyKXtcbiAgICByZXR1cm4gbnVtYmVyICE9IG51bWJlcjtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1uYW4uanNcbiAqKiBtb2R1bGUgaWQgPSA3MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMS4yLjUgTnVtYmVyLmlzU2FmZUludGVnZXIobnVtYmVyKVxudmFyICRleHBvcnQgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGlzSW50ZWdlciA9IHJlcXVpcmUoJy4vJC5pcy1pbnRlZ2VyJylcbiAgLCBhYnMgICAgICAgPSBNYXRoLmFicztcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7XG4gIGlzU2FmZUludGVnZXI6IGZ1bmN0aW9uIGlzU2FmZUludGVnZXIobnVtYmVyKXtcbiAgICByZXR1cm4gaXNJbnRlZ2VyKG51bWJlcikgJiYgYWJzKG51bWJlcikgPD0gMHgxZmZmZmZmZmZmZmZmZjtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1zYWZlLWludGVnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA3MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMS4yLjYgTnVtYmVyLk1BWF9TQUZFX0lOVEVHRVJcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtNQVhfU0FGRV9JTlRFR0VSOiAweDFmZmZmZmZmZmZmZmZmfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5tYXgtc2FmZS1pbnRlZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNzJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjEuMi4xMCBOdW1iZXIuTUlOX1NBRkVfSU5URUdFUlxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge01JTl9TQUZFX0lOVEVHRVI6IC0weDFmZmZmZmZmZmZmZmZmfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5taW4tc2FmZS1pbnRlZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjEuMi4xMiBOdW1iZXIucGFyc2VGbG9hdChzdHJpbmcpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7cGFyc2VGbG9hdDogcGFyc2VGbG9hdH0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtZmxvYXQuanNcbiAqKiBtb2R1bGUgaWQgPSA3NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMS4yLjEzIE51bWJlci5wYXJzZUludChzdHJpbmcsIHJhZGl4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge3BhcnNlSW50OiBwYXJzZUludH0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtaW50LmpzXG4gKiogbW9kdWxlIGlkID0gNzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4zIE1hdGguYWNvc2goeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgbG9nMXAgICA9IHJlcXVpcmUoJy4vJC5tYXRoLWxvZzFwJylcbiAgLCBzcXJ0ICAgID0gTWF0aC5zcXJ0XG4gICwgJGFjb3NoICA9IE1hdGguYWNvc2g7XG5cbi8vIFY4IGJ1ZyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9MzUwOVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKCRhY29zaCAmJiBNYXRoLmZsb29yKCRhY29zaChOdW1iZXIuTUFYX1ZBTFVFKSkgPT0gNzEwKSwgJ01hdGgnLCB7XG4gIGFjb3NoOiBmdW5jdGlvbiBhY29zaCh4KXtcbiAgICByZXR1cm4gKHggPSAreCkgPCAxID8gTmFOIDogeCA+IDk0OTA2MjY1LjYyNDI1MTU2XG4gICAgICA/IE1hdGgubG9nKHgpICsgTWF0aC5MTjJcbiAgICAgIDogbG9nMXAoeCAtIDEgKyBzcXJ0KHggLSAxKSAqIHNxcnQoeCArIDEpKTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYWNvc2guanNcbiAqKiBtb2R1bGUgaWQgPSA3NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjIwIE1hdGgubG9nMXAoeClcbm1vZHVsZS5leHBvcnRzID0gTWF0aC5sb2cxcCB8fCBmdW5jdGlvbiBsb2cxcCh4KXtcbiAgcmV0dXJuICh4ID0gK3gpID4gLTFlLTggJiYgeCA8IDFlLTggPyB4IC0geCAqIHggLyAyIDogTWF0aC5sb2coMSArIHgpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm1hdGgtbG9nMXAuanNcbiAqKiBtb2R1bGUgaWQgPSA3N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjUgTWF0aC5hc2luaCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbmZ1bmN0aW9uIGFzaW5oKHgpe1xuICByZXR1cm4gIWlzRmluaXRlKHggPSAreCkgfHwgeCA9PSAwID8geCA6IHggPCAwID8gLWFzaW5oKC14KSA6IE1hdGgubG9nKHggKyBNYXRoLnNxcnQoeCAqIHggKyAxKSk7XG59XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHthc2luaDogYXNpbmh9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hc2luaC5qc1xuICoqIG1vZHVsZSBpZCA9IDc4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4yLjIuNyBNYXRoLmF0YW5oKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBhdGFuaDogZnVuY3Rpb24gYXRhbmgoeCl7XG4gICAgcmV0dXJuICh4ID0gK3gpID09IDAgPyB4IDogTWF0aC5sb2coKDEgKyB4KSAvICgxIC0geCkpIC8gMjtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYXRhbmguanNcbiAqKiBtb2R1bGUgaWQgPSA3OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjkgTWF0aC5jYnJ0KHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHNpZ24gICAgPSByZXF1aXJlKCcuLyQubWF0aC1zaWduJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgY2JydDogZnVuY3Rpb24gY2JydCh4KXtcbiAgICByZXR1cm4gc2lnbih4ID0gK3gpICogTWF0aC5wb3coTWF0aC5hYnMoeCksIDEgLyAzKTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2JydC5qc1xuICoqIG1vZHVsZSBpZCA9IDgwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4yLjIuMjggTWF0aC5zaWduKHgpXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGguc2lnbiB8fCBmdW5jdGlvbiBzaWduKHgpe1xuICByZXR1cm4gKHggPSAreCkgPT0gMCB8fCB4ICE9IHggPyB4IDogeCA8IDAgPyAtMSA6IDE7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQubWF0aC1zaWduLmpzXG4gKiogbW9kdWxlIGlkID0gODFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4xMSBNYXRoLmNsejMyKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBjbHozMjogZnVuY3Rpb24gY2x6MzIoeCl7XG4gICAgcmV0dXJuICh4ID4+Pj0gMCkgPyAzMSAtIE1hdGguZmxvb3IoTWF0aC5sb2coeCArIDAuNSkgKiBNYXRoLkxPRzJFKSA6IDMyO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jbHozMi5qc1xuICoqIG1vZHVsZSBpZCA9IDgyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4yLjIuMTIgTWF0aC5jb3NoKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGV4cCAgICAgPSBNYXRoLmV4cDtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBjb3NoOiBmdW5jdGlvbiBjb3NoKHgpe1xuICAgIHJldHVybiAoZXhwKHggPSAreCkgKyBleHAoLXgpKSAvIDI7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNvc2guanNcbiAqKiBtb2R1bGUgaWQgPSA4M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjE0IE1hdGguZXhwbTEoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7ZXhwbTE6IHJlcXVpcmUoJy4vJC5tYXRoLWV4cG0xJyl9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5leHBtMS5qc1xuICoqIG1vZHVsZSBpZCA9IDg0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4yLjIuMTQgTWF0aC5leHBtMSh4KVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLmV4cG0xIHx8IGZ1bmN0aW9uIGV4cG0xKHgpe1xuICByZXR1cm4gKHggPSAreCkgPT0gMCA/IHggOiB4ID4gLTFlLTYgJiYgeCA8IDFlLTYgPyB4ICsgeCAqIHggLyAyIDogTWF0aC5leHAoeCkgLSAxO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm1hdGgtZXhwbTEuanNcbiAqKiBtb2R1bGUgaWQgPSA4NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjE2IE1hdGguZnJvdW5kKHgpXG52YXIgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgc2lnbiAgICAgID0gcmVxdWlyZSgnLi8kLm1hdGgtc2lnbicpXG4gICwgcG93ICAgICAgID0gTWF0aC5wb3dcbiAgLCBFUFNJTE9OICAgPSBwb3coMiwgLTUyKVxuICAsIEVQU0lMT04zMiA9IHBvdygyLCAtMjMpXG4gICwgTUFYMzIgICAgID0gcG93KDIsIDEyNykgKiAoMiAtIEVQU0lMT04zMilcbiAgLCBNSU4zMiAgICAgPSBwb3coMiwgLTEyNik7XG5cbnZhciByb3VuZFRpZXNUb0V2ZW4gPSBmdW5jdGlvbihuKXtcbiAgcmV0dXJuIG4gKyAxIC8gRVBTSUxPTiAtIDEgLyBFUFNJTE9OO1xufTtcblxuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGZyb3VuZDogZnVuY3Rpb24gZnJvdW5kKHgpe1xuICAgIHZhciAkYWJzICA9IE1hdGguYWJzKHgpXG4gICAgICAsICRzaWduID0gc2lnbih4KVxuICAgICAgLCBhLCByZXN1bHQ7XG4gICAgaWYoJGFicyA8IE1JTjMyKXJldHVybiAkc2lnbiAqIHJvdW5kVGllc1RvRXZlbigkYWJzIC8gTUlOMzIgLyBFUFNJTE9OMzIpICogTUlOMzIgKiBFUFNJTE9OMzI7XG4gICAgYSA9ICgxICsgRVBTSUxPTjMyIC8gRVBTSUxPTikgKiAkYWJzO1xuICAgIHJlc3VsdCA9IGEgLSAoYSAtICRhYnMpO1xuICAgIGlmKHJlc3VsdCA+IE1BWDMyIHx8IHJlc3VsdCAhPSByZXN1bHQpcmV0dXJuICRzaWduICogSW5maW5pdHk7XG4gICAgcmV0dXJuICRzaWduICogcmVzdWx0O1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5mcm91bmQuanNcbiAqKiBtb2R1bGUgaWQgPSA4NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjE3IE1hdGguaHlwb3QoW3ZhbHVlMVssIHZhbHVlMlssIOKApiBdXV0pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGFicyAgICAgPSBNYXRoLmFicztcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBoeXBvdDogZnVuY3Rpb24gaHlwb3QodmFsdWUxLCB2YWx1ZTIpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgdmFyIHN1bSAgID0gMFxuICAgICAgLCBpICAgICA9IDBcbiAgICAgICwgJCQgICAgPSBhcmd1bWVudHNcbiAgICAgICwgJCRsZW4gPSAkJC5sZW5ndGhcbiAgICAgICwgbGFyZyAgPSAwXG4gICAgICAsIGFyZywgZGl2O1xuICAgIHdoaWxlKGkgPCAkJGxlbil7XG4gICAgICBhcmcgPSBhYnMoJCRbaSsrXSk7XG4gICAgICBpZihsYXJnIDwgYXJnKXtcbiAgICAgICAgZGl2ICA9IGxhcmcgLyBhcmc7XG4gICAgICAgIHN1bSAgPSBzdW0gKiBkaXYgKiBkaXYgKyAxO1xuICAgICAgICBsYXJnID0gYXJnO1xuICAgICAgfSBlbHNlIGlmKGFyZyA+IDApe1xuICAgICAgICBkaXYgID0gYXJnIC8gbGFyZztcbiAgICAgICAgc3VtICs9IGRpdiAqIGRpdjtcbiAgICAgIH0gZWxzZSBzdW0gKz0gYXJnO1xuICAgIH1cbiAgICByZXR1cm4gbGFyZyA9PT0gSW5maW5pdHkgPyBJbmZpbml0eSA6IGxhcmcgKiBNYXRoLnNxcnQoc3VtKTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguaHlwb3QuanNcbiAqKiBtb2R1bGUgaWQgPSA4N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjE4IE1hdGguaW11bCh4LCB5KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCAkaW11bCAgID0gTWF0aC5pbXVsO1xuXG4vLyBzb21lIFdlYktpdCB2ZXJzaW9ucyBmYWlscyB3aXRoIGJpZyBudW1iZXJzLCBzb21lIGhhcyB3cm9uZyBhcml0eVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICByZXR1cm4gJGltdWwoMHhmZmZmZmZmZiwgNSkgIT0gLTUgfHwgJGltdWwubGVuZ3RoICE9IDI7XG59KSwgJ01hdGgnLCB7XG4gIGltdWw6IGZ1bmN0aW9uIGltdWwoeCwgeSl7XG4gICAgdmFyIFVJTlQxNiA9IDB4ZmZmZlxuICAgICAgLCB4biA9ICt4XG4gICAgICAsIHluID0gK3lcbiAgICAgICwgeGwgPSBVSU5UMTYgJiB4blxuICAgICAgLCB5bCA9IFVJTlQxNiAmIHluO1xuICAgIHJldHVybiAwIHwgeGwgKiB5bCArICgoVUlOVDE2ICYgeG4gPj4+IDE2KSAqIHlsICsgeGwgKiAoVUlOVDE2ICYgeW4gPj4+IDE2KSA8PCAxNiA+Pj4gMCk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmltdWwuanNcbiAqKiBtb2R1bGUgaWQgPSA4OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjIxIE1hdGgubG9nMTAoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGxvZzEwOiBmdW5jdGlvbiBsb2cxMCh4KXtcbiAgICByZXR1cm4gTWF0aC5sb2coeCkgLyBNYXRoLkxOMTA7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzEwLmpzXG4gKiogbW9kdWxlIGlkID0gODlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4yMCBNYXRoLmxvZzFwKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge2xvZzFwOiByZXF1aXJlKCcuLyQubWF0aC1sb2cxcCcpfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMXAuanNcbiAqKiBtb2R1bGUgaWQgPSA5MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjIyIE1hdGgubG9nMih4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgbG9nMjogZnVuY3Rpb24gbG9nMih4KXtcbiAgICByZXR1cm4gTWF0aC5sb2coeCkgLyBNYXRoLkxOMjtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMi5qc1xuICoqIG1vZHVsZSBpZCA9IDkxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4yLjIuMjggTWF0aC5zaWduKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge3NpZ246IHJlcXVpcmUoJy4vJC5tYXRoLXNpZ24nKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnNpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSA5MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjMwIE1hdGguc2luaCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBleHBtMSAgID0gcmVxdWlyZSgnLi8kLm1hdGgtZXhwbTEnKVxuICAsIGV4cCAgICAgPSBNYXRoLmV4cDtcblxuLy8gVjggbmVhciBDaHJvbWl1bSAzOCBoYXMgYSBwcm9ibGVtIHdpdGggdmVyeSBzbWFsbCBudW1iZXJzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vJC5mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiAhTWF0aC5zaW5oKC0yZS0xNykgIT0gLTJlLTE3O1xufSksICdNYXRoJywge1xuICBzaW5oOiBmdW5jdGlvbiBzaW5oKHgpe1xuICAgIHJldHVybiBNYXRoLmFicyh4ID0gK3gpIDwgMVxuICAgICAgPyAoZXhwbTEoeCkgLSBleHBtMSgteCkpIC8gMlxuICAgICAgOiAoZXhwKHggLSAxKSAtIGV4cCgteCAtIDEpKSAqIChNYXRoLkUgLyAyKTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguc2luaC5qc1xuICoqIG1vZHVsZSBpZCA9IDkzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4yLjIuMzMgTWF0aC50YW5oKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGV4cG0xICAgPSByZXF1aXJlKCcuLyQubWF0aC1leHBtMScpXG4gICwgZXhwICAgICA9IE1hdGguZXhwO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIHRhbmg6IGZ1bmN0aW9uIHRhbmgoeCl7XG4gICAgdmFyIGEgPSBleHBtMSh4ID0gK3gpXG4gICAgICAsIGIgPSBleHBtMSgteCk7XG4gICAgcmV0dXJuIGEgPT0gSW5maW5pdHkgPyAxIDogYiA9PSBJbmZpbml0eSA/IC0xIDogKGEgLSBiKSAvIChleHAoeCkgKyBleHAoLXgpKTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgudGFuaC5qc1xuICoqIG1vZHVsZSBpZCA9IDk0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4yLjIuMzQgTWF0aC50cnVuYyh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgdHJ1bmM6IGZ1bmN0aW9uIHRydW5jKGl0KXtcbiAgICByZXR1cm4gKGl0ID4gMCA/IE1hdGguZmxvb3IgOiBNYXRoLmNlaWwpKGl0KTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgudHJ1bmMuanNcbiAqKiBtb2R1bGUgaWQgPSA5NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgdG9JbmRleCAgICAgICAgPSByZXF1aXJlKCcuLyQudG8taW5kZXgnKVxuICAsIGZyb21DaGFyQ29kZSAgID0gU3RyaW5nLmZyb21DaGFyQ29kZVxuICAsICRmcm9tQ29kZVBvaW50ID0gU3RyaW5nLmZyb21Db2RlUG9pbnQ7XG5cbi8vIGxlbmd0aCBzaG91bGQgYmUgMSwgb2xkIEZGIHByb2JsZW1cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKCEhJGZyb21Db2RlUG9pbnQgJiYgJGZyb21Db2RlUG9pbnQubGVuZ3RoICE9IDEpLCAnU3RyaW5nJywge1xuICAvLyAyMS4xLjIuMiBTdHJpbmcuZnJvbUNvZGVQb2ludCguLi5jb2RlUG9pbnRzKVxuICBmcm9tQ29kZVBvaW50OiBmdW5jdGlvbiBmcm9tQ29kZVBvaW50KHgpeyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVudXNlZC12YXJzXG4gICAgdmFyIHJlcyAgID0gW11cbiAgICAgICwgJCQgICAgPSBhcmd1bWVudHNcbiAgICAgICwgJCRsZW4gPSAkJC5sZW5ndGhcbiAgICAgICwgaSAgICAgPSAwXG4gICAgICAsIGNvZGU7XG4gICAgd2hpbGUoJCRsZW4gPiBpKXtcbiAgICAgIGNvZGUgPSArJCRbaSsrXTtcbiAgICAgIGlmKHRvSW5kZXgoY29kZSwgMHgxMGZmZmYpICE9PSBjb2RlKXRocm93IFJhbmdlRXJyb3IoY29kZSArICcgaXMgbm90IGEgdmFsaWQgY29kZSBwb2ludCcpO1xuICAgICAgcmVzLnB1c2goY29kZSA8IDB4MTAwMDBcbiAgICAgICAgPyBmcm9tQ2hhckNvZGUoY29kZSlcbiAgICAgICAgOiBmcm9tQ2hhckNvZGUoKChjb2RlIC09IDB4MTAwMDApID4+IDEwKSArIDB4ZDgwMCwgY29kZSAlIDB4NDAwICsgMHhkYzAwKVxuICAgICAgKTtcbiAgICB9IHJldHVybiByZXMuam9pbignJyk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZnJvbS1jb2RlLXBvaW50LmpzXG4gKiogbW9kdWxlIGlkID0gOTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkZXhwb3J0ICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1N0cmluZycsIHtcbiAgLy8gMjEuMS4yLjQgU3RyaW5nLnJhdyhjYWxsU2l0ZSwgLi4uc3Vic3RpdHV0aW9ucylcbiAgcmF3OiBmdW5jdGlvbiByYXcoY2FsbFNpdGUpe1xuICAgIHZhciB0cGwgICA9IHRvSU9iamVjdChjYWxsU2l0ZS5yYXcpXG4gICAgICAsIGxlbiAgID0gdG9MZW5ndGgodHBsLmxlbmd0aClcbiAgICAgICwgJCQgICAgPSBhcmd1bWVudHNcbiAgICAgICwgJCRsZW4gPSAkJC5sZW5ndGhcbiAgICAgICwgcmVzICAgPSBbXVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgd2hpbGUobGVuID4gaSl7XG4gICAgICByZXMucHVzaChTdHJpbmcodHBsW2krK10pKTtcbiAgICAgIGlmKGkgPCAkJGxlbilyZXMucHVzaChTdHJpbmcoJCRbaV0pKTtcbiAgICB9IHJldHVybiByZXMuam9pbignJyk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcucmF3LmpzXG4gKiogbW9kdWxlIGlkID0gOTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIDIxLjEuMy4yNSBTdHJpbmcucHJvdG90eXBlLnRyaW0oKVxucmVxdWlyZSgnLi8kLnN0cmluZy10cmltJykoJ3RyaW0nLCBmdW5jdGlvbigkdHJpbSl7XG4gIHJldHVybiBmdW5jdGlvbiB0cmltKCl7XG4gICAgcmV0dXJuICR0cmltKHRoaXMsIDMpO1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy50cmltLmpzXG4gKiogbW9kdWxlIGlkID0gOThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgID0gcmVxdWlyZSgnLi8kLnN0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGluZGV4ID0gdGhpcy5faVxuICAgICwgcG9pbnQ7XG4gIGlmKGluZGV4ID49IE8ubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7dmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZX07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gOTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLyQudG8taW50ZWdlcicpXG4gICwgZGVmaW5lZCAgID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRPX1NUUklORyl7XG4gIHJldHVybiBmdW5jdGlvbih0aGF0LCBwb3Mpe1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgICAsIGkgPSB0b0ludGVnZXIocG9zKVxuICAgICAgLCBsID0gcy5sZW5ndGhcbiAgICAgICwgYSwgYjtcbiAgICBpZihpIDwgMCB8fCBpID49IGwpcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zdHJpbmctYXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZICAgICAgICA9IHJlcXVpcmUoJy4vJC5saWJyYXJ5JylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJylcbiAgLCBoaWRlICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oaWRlJylcbiAgLCBoYXMgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIEl0ZXJhdG9ycyAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpXG4gICwgJGl0ZXJDcmVhdGUgICAgPSByZXF1aXJlKCcuLyQuaXRlci1jcmVhdGUnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJylcbiAgLCBnZXRQcm90byAgICAgICA9IHJlcXVpcmUoJy4vJCcpLmdldFByb3RvXG4gICwgSVRFUkFUT1IgICAgICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBCVUdHWSAgICAgICAgICA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKSAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG4gICwgRkZfSVRFUkFUT1IgICAgPSAnQEBpdGVyYXRvcidcbiAgLCBLRVlTICAgICAgICAgICA9ICdrZXlzJ1xuICAsIFZBTFVFUyAgICAgICAgID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKXtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24oa2luZCl7XG4gICAgaWYoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaChraW5kKXtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHICAgICAgICA9IE5BTUUgKyAnIEl0ZXJhdG9yJ1xuICAgICwgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTXG4gICAgLCBWQUxVRVNfQlVHID0gZmFsc2VcbiAgICAsIHByb3RvICAgICAgPSBCYXNlLnByb3RvdHlwZVxuICAgICwgJG5hdGl2ZSAgICA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXVxuICAgICwgJGRlZmF1bHQgICA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpXG4gICAgLCBtZXRob2RzLCBrZXk7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYoJG5hdGl2ZSl7XG4gICAgdmFyIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG8oJGRlZmF1bHQuY2FsbChuZXcgQmFzZSkpO1xuICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAvLyBGRiBmaXhcbiAgICBpZighTElCUkFSWSAmJiBoYXMocHJvdG8sIEZGX0lURVJBVE9SKSloaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICAgIGlmKERFRl9WQUxVRVMgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpe1xuICAgICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICAgIH1cbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpe1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gID0gcmV0dXJuVGhpcztcbiAgaWYoREVGQVVMVCl7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogIERFRl9WQUxVRVMgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6ICAgIElTX1NFVCAgICAgID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJylcbiAgICB9O1xuICAgIGlmKEZPUkNFRClmb3Ioa2V5IGluIG1ldGhvZHMpe1xuICAgICAgaWYoIShrZXkgaW4gcHJvdG8pKXJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5pdGVyLWRlZmluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEwMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLml0ZXJhdG9ycy5qc1xuICoqIG1vZHVsZSBpZCA9IDEwMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBkZXNjcmlwdG9yICAgICA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vJC5zZXQtdG8tc3RyaW5nLXRhZycpXG4gICwgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vJC5oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KXtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gJC5jcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHtuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLml0ZXItY3JlYXRlLmpzXG4gKiogbW9kdWxlIGlkID0gMTAzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsICRhdCAgICAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWF0JykoZmFsc2UpO1xuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIC8vIDIxLjEuMy4zIFN0cmluZy5wcm90b3R5cGUuY29kZVBvaW50QXQocG9zKVxuICBjb2RlUG9pbnRBdDogZnVuY3Rpb24gY29kZVBvaW50QXQocG9zKXtcbiAgICByZXR1cm4gJGF0KHRoaXMsIHBvcyk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuY29kZS1wb2ludC1hdC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjEuMS4zLjYgU3RyaW5nLnByb3RvdHlwZS5lbmRzV2l0aChzZWFyY2hTdHJpbmcgWywgZW5kUG9zaXRpb25dKVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vJC50by1sZW5ndGgnKVxuICAsIGNvbnRleHQgICA9IHJlcXVpcmUoJy4vJC5zdHJpbmctY29udGV4dCcpXG4gICwgRU5EU19XSVRIID0gJ2VuZHNXaXRoJ1xuICAsICRlbmRzV2l0aCA9ICcnW0VORFNfV0lUSF07XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi8kLmZhaWxzLWlzLXJlZ2V4cCcpKEVORFNfV0lUSCksICdTdHJpbmcnLCB7XG4gIGVuZHNXaXRoOiBmdW5jdGlvbiBlbmRzV2l0aChzZWFyY2hTdHJpbmcgLyosIGVuZFBvc2l0aW9uID0gQGxlbmd0aCAqLyl7XG4gICAgdmFyIHRoYXQgPSBjb250ZXh0KHRoaXMsIHNlYXJjaFN0cmluZywgRU5EU19XSVRIKVxuICAgICAgLCAkJCAgID0gYXJndW1lbnRzXG4gICAgICAsIGVuZFBvc2l0aW9uID0gJCQubGVuZ3RoID4gMSA/ICQkWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIGxlbiAgICA9IHRvTGVuZ3RoKHRoYXQubGVuZ3RoKVxuICAgICAgLCBlbmQgICAgPSBlbmRQb3NpdGlvbiA9PT0gdW5kZWZpbmVkID8gbGVuIDogTWF0aC5taW4odG9MZW5ndGgoZW5kUG9zaXRpb24pLCBsZW4pXG4gICAgICAsIHNlYXJjaCA9IFN0cmluZyhzZWFyY2hTdHJpbmcpO1xuICAgIHJldHVybiAkZW5kc1dpdGhcbiAgICAgID8gJGVuZHNXaXRoLmNhbGwodGhhdCwgc2VhcmNoLCBlbmQpXG4gICAgICA6IHRoYXQuc2xpY2UoZW5kIC0gc2VhcmNoLmxlbmd0aCwgZW5kKSA9PT0gc2VhcmNoO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaGVscGVyIGZvciBTdHJpbmcje3N0YXJ0c1dpdGgsIGVuZHNXaXRoLCBpbmNsdWRlc31cbnZhciBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4vJC5pcy1yZWdleHAnKVxuICAsIGRlZmluZWQgID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0aGF0LCBzZWFyY2hTdHJpbmcsIE5BTUUpe1xuICBpZihpc1JlZ0V4cChzZWFyY2hTdHJpbmcpKXRocm93IFR5cGVFcnJvcignU3RyaW5nIycgKyBOQU1FICsgXCIgZG9lc24ndCBhY2NlcHQgcmVnZXghXCIpO1xuICByZXR1cm4gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnN0cmluZy1jb250ZXh0LmpzXG4gKiogbW9kdWxlIGlkID0gMTA2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjIuOCBJc1JlZ0V4cChhcmd1bWVudClcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGNvZiAgICAgID0gcmVxdWlyZSgnLi8kLmNvZicpXG4gICwgTUFUQ0ggICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGlzUmVnRXhwO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmICgoaXNSZWdFeHAgPSBpdFtNQVRDSF0pICE9PSB1bmRlZmluZWQgPyAhIWlzUmVnRXhwIDogY29mKGl0KSA9PSAnUmVnRXhwJyk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXMtcmVnZXhwLmpzXG4gKiogbW9kdWxlIGlkID0gMTA3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgTUFUQ0ggPSByZXF1aXJlKCcuLyQud2tzJykoJ21hdGNoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciByZSA9IC8uLztcbiAgdHJ5IHtcbiAgICAnLy4vJ1tLRVldKHJlKTtcbiAgfSBjYXRjaChlKXtcbiAgICB0cnkge1xuICAgICAgcmVbTUFUQ0hdID0gZmFsc2U7XG4gICAgICByZXR1cm4gIScvLi8nW0tFWV0ocmUpO1xuICAgIH0gY2F0Y2goZil7IC8qIGVtcHR5ICovIH1cbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5mYWlscy1pcy1yZWdleHAuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIxLjEuMy43IFN0cmluZy5wcm90b3R5cGUuaW5jbHVkZXMoc2VhcmNoU3RyaW5nLCBwb3NpdGlvbiA9IDApXG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBjb250ZXh0ICA9IHJlcXVpcmUoJy4vJC5zdHJpbmctY29udGV4dCcpXG4gICwgSU5DTFVERVMgPSAnaW5jbHVkZXMnO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vJC5mYWlscy1pcy1yZWdleHAnKShJTkNMVURFUyksICdTdHJpbmcnLCB7XG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhzZWFyY2hTdHJpbmcgLyosIHBvc2l0aW9uID0gMCAqLyl7XG4gICAgcmV0dXJuICEhfmNvbnRleHQodGhpcywgc2VhcmNoU3RyaW5nLCBJTkNMVURFUylcbiAgICAgIC5pbmRleE9mKHNlYXJjaFN0cmluZywgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmluY2x1ZGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTA5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIC8vIDIxLjEuMy4xMyBTdHJpbmcucHJvdG90eXBlLnJlcGVhdChjb3VudClcbiAgcmVwZWF0OiByZXF1aXJlKCcuLyQuc3RyaW5nLXJlcGVhdCcpXG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJlcGVhdC5qc1xuICoqIG1vZHVsZSBpZCA9IDExMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vJC50by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIHJlcGVhdChjb3VudCl7XG4gIHZhciBzdHIgPSBTdHJpbmcoZGVmaW5lZCh0aGlzKSlcbiAgICAsIHJlcyA9ICcnXG4gICAgLCBuICAgPSB0b0ludGVnZXIoY291bnQpO1xuICBpZihuIDwgMCB8fCBuID09IEluZmluaXR5KXRocm93IFJhbmdlRXJyb3IoXCJDb3VudCBjYW4ndCBiZSBuZWdhdGl2ZVwiKTtcbiAgZm9yKDtuID4gMDsgKG4gPj4+PSAxKSAmJiAoc3RyICs9IHN0cikpaWYobiAmIDEpcmVzICs9IHN0cjtcbiAgcmV0dXJuIHJlcztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zdHJpbmctcmVwZWF0LmpzXG4gKiogbW9kdWxlIGlkID0gMTExXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMS4xLjMuMTggU3RyaW5nLnByb3RvdHlwZS5zdGFydHNXaXRoKHNlYXJjaFN0cmluZyBbLCBwb3NpdGlvbiBdKVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJylcbiAgLCBjb250ZXh0ICAgICA9IHJlcXVpcmUoJy4vJC5zdHJpbmctY29udGV4dCcpXG4gICwgU1RBUlRTX1dJVEggPSAnc3RhcnRzV2l0aCdcbiAgLCAkc3RhcnRzV2l0aCA9ICcnW1NUQVJUU19XSVRIXTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuLyQuZmFpbHMtaXMtcmVnZXhwJykoU1RBUlRTX1dJVEgpLCAnU3RyaW5nJywge1xuICBzdGFydHNXaXRoOiBmdW5jdGlvbiBzdGFydHNXaXRoKHNlYXJjaFN0cmluZyAvKiwgcG9zaXRpb24gPSAwICovKXtcbiAgICB2YXIgdGhhdCAgID0gY29udGV4dCh0aGlzLCBzZWFyY2hTdHJpbmcsIFNUQVJUU19XSVRIKVxuICAgICAgLCAkJCAgICAgPSBhcmd1bWVudHNcbiAgICAgICwgaW5kZXggID0gdG9MZW5ndGgoTWF0aC5taW4oJCQubGVuZ3RoID4gMSA/ICQkWzFdIDogdW5kZWZpbmVkLCB0aGF0Lmxlbmd0aCkpXG4gICAgICAsIHNlYXJjaCA9IFN0cmluZyhzZWFyY2hTdHJpbmcpO1xuICAgIHJldHVybiAkc3RhcnRzV2l0aFxuICAgICAgPyAkc3RhcnRzV2l0aC5jYWxsKHRoYXQsIHNlYXJjaCwgaW5kZXgpXG4gICAgICA6IHRoYXQuc2xpY2UoaW5kZXgsIGluZGV4ICsgc2VhcmNoLmxlbmd0aCkgPT09IHNlYXJjaDtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDExMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgJGV4cG9ydCAgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCB0b09iamVjdCAgICA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuLyQuaXMtYXJyYXktaXRlcicpXG4gICwgdG9MZW5ndGggICAgPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJylcbiAgLCBnZXRJdGVyRm4gICA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFyZXF1aXJlKCcuLyQuaXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXsgQXJyYXkuZnJvbShpdGVyKTsgfSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjEgQXJyYXkuZnJvbShhcnJheUxpa2UsIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICBmcm9tOiBmdW5jdGlvbiBmcm9tKGFycmF5TGlrZS8qLCBtYXBmbiA9IHVuZGVmaW5lZCwgdGhpc0FyZyA9IHVuZGVmaW5lZCovKXtcbiAgICB2YXIgTyAgICAgICA9IHRvT2JqZWN0KGFycmF5TGlrZSlcbiAgICAgICwgQyAgICAgICA9IHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXlcbiAgICAgICwgJCQgICAgICA9IGFyZ3VtZW50c1xuICAgICAgLCAkJGxlbiAgID0gJCQubGVuZ3RoXG4gICAgICAsIG1hcGZuICAgPSAkJGxlbiA+IDEgPyAkJFsxXSA6IHVuZGVmaW5lZFxuICAgICAgLCBtYXBwaW5nID0gbWFwZm4gIT09IHVuZGVmaW5lZFxuICAgICAgLCBpbmRleCAgID0gMFxuICAgICAgLCBpdGVyRm4gID0gZ2V0SXRlckZuKE8pXG4gICAgICAsIGxlbmd0aCwgcmVzdWx0LCBzdGVwLCBpdGVyYXRvcjtcbiAgICBpZihtYXBwaW5nKW1hcGZuID0gY3R4KG1hcGZuLCAkJGxlbiA+IDIgPyAkJFsyXSA6IHVuZGVmaW5lZCwgMik7XG4gICAgLy8gaWYgb2JqZWN0IGlzbid0IGl0ZXJhYmxlIG9yIGl0J3MgYXJyYXkgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yIC0gdXNlIHNpbXBsZSBjYXNlXG4gICAgaWYoaXRlckZuICE9IHVuZGVmaW5lZCAmJiAhKEMgPT0gQXJyYXkgJiYgaXNBcnJheUl0ZXIoaXRlckZuKSkpe1xuICAgICAgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoTyksIHJlc3VsdCA9IG5ldyBDOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7IGluZGV4Kyspe1xuICAgICAgICByZXN1bHRbaW5kZXhdID0gbWFwcGluZyA/IGNhbGwoaXRlcmF0b3IsIG1hcGZuLCBbc3RlcC52YWx1ZSwgaW5kZXhdLCB0cnVlKSA6IHN0ZXAudmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICAgIGZvcihyZXN1bHQgPSBuZXcgQyhsZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgICAgIHJlc3VsdFtpbmRleF0gPSBtYXBwaW5nID8gbWFwZm4oT1tpbmRleF0sIGluZGV4KSA6IE9baW5kZXhdO1xuICAgICAgfVxuICAgIH1cbiAgICByZXN1bHQubGVuZ3RoID0gaW5kZXg7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZnJvbS5qc1xuICoqIG1vZHVsZSBpZCA9IDExM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKXtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoKGUpe1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYocmV0ICE9PSB1bmRlZmluZWQpYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXRlci1jYWxsLmpzXG4gKiogbW9kdWxlIGlkID0gMTE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzICA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5pcy1hcnJheS1pdGVyLmpzXG4gKiogbW9kdWxlIGlkID0gMTE1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY2xhc3NvZiAgID0gcmVxdWlyZSgnLi8kLmNsYXNzb2YnKVxuICAsIElURVJBVE9SICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmNvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgIT0gdW5kZWZpbmVkKXJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzXG4gKiogbW9kdWxlIGlkID0gMTE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgSVRFUkFUT1IgICAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24oKXsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24oKXsgdGhyb3cgMjsgfSk7XG59IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYywgc2tpcENsb3Npbmcpe1xuICBpZighc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORylyZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciAgPSBbN11cbiAgICAgICwgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbigpeyBzYWZlID0gdHJ1ZTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24oKXsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoKGUpeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLml0ZXItZGV0ZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMTE3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuLy8gV2ViS2l0IEFycmF5Lm9mIGlzbid0IGdlbmVyaWNcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKXtcbiAgZnVuY3Rpb24gRigpe31cbiAgcmV0dXJuICEoQXJyYXkub2YuY2FsbChGKSBpbnN0YW5jZW9mIEYpO1xufSksICdBcnJheScsIHtcbiAgLy8gMjIuMS4yLjMgQXJyYXkub2YoIC4uLml0ZW1zKVxuICBvZjogZnVuY3Rpb24gb2YoLyogLi4uYXJncyAqLyl7XG4gICAgdmFyIGluZGV4ICA9IDBcbiAgICAgICwgJCQgICAgID0gYXJndW1lbnRzXG4gICAgICAsICQkbGVuICA9ICQkLmxlbmd0aFxuICAgICAgLCByZXN1bHQgPSBuZXcgKHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgPyB0aGlzIDogQXJyYXkpKCQkbGVuKTtcbiAgICB3aGlsZSgkJGxlbiA+IGluZGV4KXJlc3VsdFtpbmRleF0gPSAkJFtpbmRleCsrXTtcbiAgICByZXN1bHQubGVuZ3RoID0gJCRsZW47XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lm9mLmpzXG4gKiogbW9kdWxlIGlkID0gMTE4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vJC5hZGQtdG8tdW5zY29wYWJsZXMnKVxuICAsIHN0ZXAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlci1zdGVwJylcbiAgLCBJdGVyYXRvcnMgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpXG4gICwgdG9JT2JqZWN0ICAgICAgICA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLml0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbigpe1xuICB2YXIgTyAgICAgPSB0aGlzLl90XG4gICAgLCBraW5kICA9IHRoaXMuX2tcbiAgICAsIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZighTyB8fCBpbmRleCA+PSBPLmxlbmd0aCl7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTE5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuLyQud2tzJykoJ3Vuc2NvcGFibGVzJylcbiAgLCBBcnJheVByb3RvICA9IEFycmF5LnByb3RvdHlwZTtcbmlmKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZClyZXF1aXJlKCcuLyQuaGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGtleSl7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmFkZC10by11bnNjb3BhYmxlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDEyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihkb25lLCB2YWx1ZSl7XG4gIHJldHVybiB7dmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmV9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLml0ZXItc3RlcC5qc1xuICoqIG1vZHVsZSBpZCA9IDEyMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwicmVxdWlyZSgnLi8kLnNldC1zcGVjaWVzJykoJ0FycmF5Jyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LnNwZWNpZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsICQgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpXG4gICwgU1BFQ0lFUyAgICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihLRVkpe1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZihERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSQuc2V0RGVzYyhDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuc2V0LXNwZWNpZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIyLjEuMy4zIEFycmF5LnByb3RvdHlwZS5jb3B5V2l0aGluKHRhcmdldCwgc3RhcnQsIGVuZCA9IHRoaXMubGVuZ3RoKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnQXJyYXknLCB7Y29weVdpdGhpbjogcmVxdWlyZSgnLi8kLmFycmF5LWNvcHktd2l0aGluJyl9KTtcblxucmVxdWlyZSgnLi8kLmFkZC10by11bnNjb3BhYmxlcycpKCdjb3B5V2l0aGluJyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmNvcHktd2l0aGluLmpzXG4gKiogbW9kdWxlIGlkID0gMTI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMi4xLjMuMyBBcnJheS5wcm90b3R5cGUuY29weVdpdGhpbih0YXJnZXQsIHN0YXJ0LCBlbmQgPSB0aGlzLmxlbmd0aClcbid1c2Ugc3RyaWN0JztcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKVxuICAsIHRvSW5kZXggID0gcmVxdWlyZSgnLi8kLnRvLWluZGV4JylcbiAgLCB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vJC50by1sZW5ndGgnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBbXS5jb3B5V2l0aGluIHx8IGZ1bmN0aW9uIGNvcHlXaXRoaW4odGFyZ2V0Lyo9IDAqLywgc3RhcnQvKj0gMCwgZW5kID0gQGxlbmd0aCovKXtcbiAgdmFyIE8gICAgID0gdG9PYmplY3QodGhpcylcbiAgICAsIGxlbiAgID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgLCB0byAgICA9IHRvSW5kZXgodGFyZ2V0LCBsZW4pXG4gICAgLCBmcm9tICA9IHRvSW5kZXgoc3RhcnQsIGxlbilcbiAgICAsICQkICAgID0gYXJndW1lbnRzXG4gICAgLCBlbmQgICA9ICQkLmxlbmd0aCA+IDIgPyAkJFsyXSA6IHVuZGVmaW5lZFxuICAgICwgY291bnQgPSBNYXRoLm1pbigoZW5kID09PSB1bmRlZmluZWQgPyBsZW4gOiB0b0luZGV4KGVuZCwgbGVuKSkgLSBmcm9tLCBsZW4gLSB0bylcbiAgICAsIGluYyAgID0gMTtcbiAgaWYoZnJvbSA8IHRvICYmIHRvIDwgZnJvbSArIGNvdW50KXtcbiAgICBpbmMgID0gLTE7XG4gICAgZnJvbSArPSBjb3VudCAtIDE7XG4gICAgdG8gICArPSBjb3VudCAtIDE7XG4gIH1cbiAgd2hpbGUoY291bnQtLSA+IDApe1xuICAgIGlmKGZyb20gaW4gTylPW3RvXSA9IE9bZnJvbV07XG4gICAgZWxzZSBkZWxldGUgT1t0b107XG4gICAgdG8gICArPSBpbmM7XG4gICAgZnJvbSArPSBpbmM7XG4gIH0gcmV0dXJuIE87XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktY29weS13aXRoaW4uanNcbiAqKiBtb2R1bGUgaWQgPSAxMjVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIyLjEuMy42IEFycmF5LnByb3RvdHlwZS5maWxsKHZhbHVlLCBzdGFydCA9IDAsIGVuZCA9IHRoaXMubGVuZ3RoKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnQXJyYXknLCB7ZmlsbDogcmVxdWlyZSgnLi8kLmFycmF5LWZpbGwnKX0pO1xuXG5yZXF1aXJlKCcuLyQuYWRkLXRvLXVuc2NvcGFibGVzJykoJ2ZpbGwnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsbC5qc1xuICoqIG1vZHVsZSBpZCA9IDEyNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjIuMS4zLjYgQXJyYXkucHJvdG90eXBlLmZpbGwodmFsdWUsIHN0YXJ0ID0gMCwgZW5kID0gdGhpcy5sZW5ndGgpXG4ndXNlIHN0cmljdCc7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0JylcbiAgLCB0b0luZGV4ICA9IHJlcXVpcmUoJy4vJC50by1pbmRleCcpXG4gICwgdG9MZW5ndGggPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJyk7XG5tb2R1bGUuZXhwb3J0cyA9IFtdLmZpbGwgfHwgZnVuY3Rpb24gZmlsbCh2YWx1ZSAvKiwgc3RhcnQgPSAwLCBlbmQgPSBAbGVuZ3RoICovKXtcbiAgdmFyIE8gICAgICA9IHRvT2JqZWN0KHRoaXMpXG4gICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAsICQkICAgICA9IGFyZ3VtZW50c1xuICAgICwgJCRsZW4gID0gJCQubGVuZ3RoXG4gICAgLCBpbmRleCAgPSB0b0luZGV4KCQkbGVuID4gMSA/ICQkWzFdIDogdW5kZWZpbmVkLCBsZW5ndGgpXG4gICAgLCBlbmQgICAgPSAkJGxlbiA+IDIgPyAkJFsyXSA6IHVuZGVmaW5lZFxuICAgICwgZW5kUG9zID0gZW5kID09PSB1bmRlZmluZWQgPyBsZW5ndGggOiB0b0luZGV4KGVuZCwgbGVuZ3RoKTtcbiAgd2hpbGUoZW5kUG9zID4gaW5kZXgpT1tpbmRleCsrXSA9IHZhbHVlO1xuICByZXR1cm4gTztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5hcnJheS1maWxsLmpzXG4gKiogbW9kdWxlIGlkID0gMTI3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAyMi4xLjMuOCBBcnJheS5wcm90b3R5cGUuZmluZChwcmVkaWNhdGUsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsICRmaW5kICAgPSByZXF1aXJlKCcuLyQuYXJyYXktbWV0aG9kcycpKDUpXG4gICwgS0VZICAgICA9ICdmaW5kJ1xuICAsIGZvcmNlZCAgPSB0cnVlO1xuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbmlmKEtFWSBpbiBbXSlBcnJheSgxKVtLRVldKGZ1bmN0aW9uKCl7IGZvcmNlZCA9IGZhbHNlOyB9KTtcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZm9yY2VkLCAnQXJyYXknLCB7XG4gIGZpbmQ6IGZ1bmN0aW9uIGZpbmQoY2FsbGJhY2tmbi8qLCB0aGF0ID0gdW5kZWZpbmVkICovKXtcbiAgICByZXR1cm4gJGZpbmQodGhpcywgY2FsbGJhY2tmbiwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcbnJlcXVpcmUoJy4vJC5hZGQtdG8tdW5zY29wYWJsZXMnKShLRVkpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzXG4gKiogbW9kdWxlIGlkID0gMTI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAyMi4xLjMuOSBBcnJheS5wcm90b3R5cGUuZmluZEluZGV4KHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgJGZpbmQgICA9IHJlcXVpcmUoJy4vJC5hcnJheS1tZXRob2RzJykoNilcbiAgLCBLRVkgICAgID0gJ2ZpbmRJbmRleCdcbiAgLCBmb3JjZWQgID0gdHJ1ZTtcbi8vIFNob3VsZG4ndCBza2lwIGhvbGVzXG5pZihLRVkgaW4gW10pQXJyYXkoMSlbS0VZXShmdW5jdGlvbigpeyBmb3JjZWQgPSBmYWxzZTsgfSk7XG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZvcmNlZCwgJ0FycmF5Jywge1xuICBmaW5kSW5kZXg6IGZ1bmN0aW9uIGZpbmRJbmRleChjYWxsYmFja2ZuLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xucmVxdWlyZSgnLi8kLmFkZC10by11bnNjb3BhYmxlcycpKEtFWSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXguanNcbiAqKiBtb2R1bGUgaWQgPSAxMjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgZ2xvYmFsICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBpc1JlZ0V4cCA9IHJlcXVpcmUoJy4vJC5pcy1yZWdleHAnKVxuICAsICRmbGFncyAgID0gcmVxdWlyZSgnLi8kLmZsYWdzJylcbiAgLCAkUmVnRXhwICA9IGdsb2JhbC5SZWdFeHBcbiAgLCBCYXNlICAgICA9ICRSZWdFeHBcbiAgLCBwcm90byAgICA9ICRSZWdFeHAucHJvdG90eXBlXG4gICwgcmUxICAgICAgPSAvYS9nXG4gICwgcmUyICAgICAgPSAvYS9nXG4gIC8vIFwibmV3XCIgY3JlYXRlcyBhIG5ldyBvYmplY3QsIG9sZCB3ZWJraXQgYnVnZ3kgaGVyZVxuICAsIENPUlJFQ1RfTkVXID0gbmV3ICRSZWdFeHAocmUxKSAhPT0gcmUxO1xuXG5pZihyZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKSAmJiAoIUNPUlJFQ1RfTkVXIHx8IHJlcXVpcmUoJy4vJC5mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJlMltyZXF1aXJlKCcuLyQud2tzJykoJ21hdGNoJyldID0gZmFsc2U7XG4gIC8vIFJlZ0V4cCBjb25zdHJ1Y3RvciBjYW4gYWx0ZXIgZmxhZ3MgYW5kIElzUmVnRXhwIHdvcmtzIGNvcnJlY3Qgd2l0aCBAQG1hdGNoXG4gIHJldHVybiAkUmVnRXhwKHJlMSkgIT0gcmUxIHx8ICRSZWdFeHAocmUyKSA9PSByZTIgfHwgJFJlZ0V4cChyZTEsICdpJykgIT0gJy9hL2knO1xufSkpKXtcbiAgJFJlZ0V4cCA9IGZ1bmN0aW9uIFJlZ0V4cChwLCBmKXtcbiAgICB2YXIgcGlSRSA9IGlzUmVnRXhwKHApXG4gICAgICAsIGZpVSAgPSBmID09PSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuICEodGhpcyBpbnN0YW5jZW9mICRSZWdFeHApICYmIHBpUkUgJiYgcC5jb25zdHJ1Y3RvciA9PT0gJFJlZ0V4cCAmJiBmaVUgPyBwXG4gICAgICA6IENPUlJFQ1RfTkVXXG4gICAgICAgID8gbmV3IEJhc2UocGlSRSAmJiAhZmlVID8gcC5zb3VyY2UgOiBwLCBmKVxuICAgICAgICA6IEJhc2UoKHBpUkUgPSBwIGluc3RhbmNlb2YgJFJlZ0V4cCkgPyBwLnNvdXJjZSA6IHAsIHBpUkUgJiYgZmlVID8gJGZsYWdzLmNhbGwocCkgOiBmKTtcbiAgfTtcbiAgJC5lYWNoLmNhbGwoJC5nZXROYW1lcyhCYXNlKSwgZnVuY3Rpb24oa2V5KXtcbiAgICBrZXkgaW4gJFJlZ0V4cCB8fCAkLnNldERlc2MoJFJlZ0V4cCwga2V5LCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBCYXNlW2tleV07IH0sXG4gICAgICBzZXQ6IGZ1bmN0aW9uKGl0KXsgQmFzZVtrZXldID0gaXQ7IH1cbiAgICB9KTtcbiAgfSk7XG4gIHByb3RvLmNvbnN0cnVjdG9yID0gJFJlZ0V4cDtcbiAgJFJlZ0V4cC5wcm90b3R5cGUgPSBwcm90bztcbiAgcmVxdWlyZSgnLi8kLnJlZGVmaW5lJykoZ2xvYmFsLCAnUmVnRXhwJywgJFJlZ0V4cCk7XG59XG5cbnJlcXVpcmUoJy4vJC5zZXQtc3BlY2llcycpKCdSZWdFeHAnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmNvbnN0cnVjdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFnc1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigpe1xuICB2YXIgdGhhdCAgID0gYW5PYmplY3QodGhpcylcbiAgICAsIHJlc3VsdCA9ICcnO1xuICBpZih0aGF0Lmdsb2JhbCkgICAgIHJlc3VsdCArPSAnZyc7XG4gIGlmKHRoYXQuaWdub3JlQ2FzZSkgcmVzdWx0ICs9ICdpJztcbiAgaWYodGhhdC5tdWx0aWxpbmUpICByZXN1bHQgKz0gJ20nO1xuICBpZih0aGF0LnVuaWNvZGUpICAgIHJlc3VsdCArPSAndSc7XG4gIGlmKHRoYXQuc3RpY2t5KSAgICAgcmVzdWx0ICs9ICd5JztcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5mbGFncy5qc1xuICoqIG1vZHVsZSBpZCA9IDEzMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjEuMi41LjMgZ2V0IFJlZ0V4cC5wcm90b3R5cGUuZmxhZ3MoKVxudmFyICQgPSByZXF1aXJlKCcuLyQnKTtcbmlmKHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpICYmIC8uL2cuZmxhZ3MgIT0gJ2cnKSQuc2V0RGVzYyhSZWdFeHAucHJvdG90eXBlLCAnZmxhZ3MnLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiByZXF1aXJlKCcuLyQuZmxhZ3MnKVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5mbGFncy5qc1xuICoqIG1vZHVsZSBpZCA9IDEzMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gQEBtYXRjaCBsb2dpY1xucmVxdWlyZSgnLi8kLmZpeC1yZS13a3MnKSgnbWF0Y2gnLCAxLCBmdW5jdGlvbihkZWZpbmVkLCBNQVRDSCl7XG4gIC8vIDIxLjEuMy4xMSBTdHJpbmcucHJvdG90eXBlLm1hdGNoKHJlZ2V4cClcbiAgcmV0dXJuIGZ1bmN0aW9uIG1hdGNoKHJlZ2V4cCl7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBPICA9IGRlZmluZWQodGhpcylcbiAgICAgICwgZm4gPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVnZXhwW01BVENIXTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZCA/IGZuLmNhbGwocmVnZXhwLCBPKSA6IG5ldyBSZWdFeHAocmVnZXhwKVtNQVRDSF0oU3RyaW5nKE8pKTtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAubWF0Y2guanNcbiAqKiBtb2R1bGUgaWQgPSAxMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBoaWRlICAgICA9IHJlcXVpcmUoJy4vJC5oaWRlJylcbiAgLCByZWRlZmluZSA9IHJlcXVpcmUoJy4vJC5yZWRlZmluZScpXG4gICwgZmFpbHMgICAgPSByZXF1aXJlKCcuLyQuZmFpbHMnKVxuICAsIGRlZmluZWQgID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKVxuICAsIHdrcyAgICAgID0gcmVxdWlyZSgnLi8kLndrcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSwgbGVuZ3RoLCBleGVjKXtcbiAgdmFyIFNZTUJPTCAgID0gd2tzKEtFWSlcbiAgICAsIG9yaWdpbmFsID0gJydbS0VZXTtcbiAgaWYoZmFpbHMoZnVuY3Rpb24oKXtcbiAgICB2YXIgTyA9IHt9O1xuICAgIE9bU1lNQk9MXSA9IGZ1bmN0aW9uKCl7IHJldHVybiA3OyB9O1xuICAgIHJldHVybiAnJ1tLRVldKE8pICE9IDc7XG4gIH0pKXtcbiAgICByZWRlZmluZShTdHJpbmcucHJvdG90eXBlLCBLRVksIGV4ZWMoZGVmaW5lZCwgU1lNQk9MLCBvcmlnaW5hbCkpO1xuICAgIGhpZGUoUmVnRXhwLnByb3RvdHlwZSwgU1lNQk9MLCBsZW5ndGggPT0gMlxuICAgICAgLy8gMjEuMi41LjggUmVnRXhwLnByb3RvdHlwZVtAQHJlcGxhY2VdKHN0cmluZywgcmVwbGFjZVZhbHVlKVxuICAgICAgLy8gMjEuMi41LjExIFJlZ0V4cC5wcm90b3R5cGVbQEBzcGxpdF0oc3RyaW5nLCBsaW1pdClcbiAgICAgID8gZnVuY3Rpb24oc3RyaW5nLCBhcmcpeyByZXR1cm4gb3JpZ2luYWwuY2FsbChzdHJpbmcsIHRoaXMsIGFyZyk7IH1cbiAgICAgIC8vIDIxLjIuNS42IFJlZ0V4cC5wcm90b3R5cGVbQEBtYXRjaF0oc3RyaW5nKVxuICAgICAgLy8gMjEuMi41LjkgUmVnRXhwLnByb3RvdHlwZVtAQHNlYXJjaF0oc3RyaW5nKVxuICAgICAgOiBmdW5jdGlvbihzdHJpbmcpeyByZXR1cm4gb3JpZ2luYWwuY2FsbChzdHJpbmcsIHRoaXMpOyB9XG4gICAgKTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmZpeC1yZS13a3MuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIEBAcmVwbGFjZSBsb2dpY1xucmVxdWlyZSgnLi8kLmZpeC1yZS13a3MnKSgncmVwbGFjZScsIDIsIGZ1bmN0aW9uKGRlZmluZWQsIFJFUExBQ0UsICRyZXBsYWNlKXtcbiAgLy8gMjEuMS4zLjE0IFN0cmluZy5wcm90b3R5cGUucmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKVxuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShzZWFyY2hWYWx1ZSwgcmVwbGFjZVZhbHVlKXtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIE8gID0gZGVmaW5lZCh0aGlzKVxuICAgICAgLCBmbiA9IHNlYXJjaFZhbHVlID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHNlYXJjaFZhbHVlW1JFUExBQ0VdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICA/IGZuLmNhbGwoc2VhcmNoVmFsdWUsIE8sIHJlcGxhY2VWYWx1ZSlcbiAgICAgIDogJHJlcGxhY2UuY2FsbChTdHJpbmcoTyksIHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpO1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5yZXBsYWNlLmpzXG4gKiogbW9kdWxlIGlkID0gMTM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBAQHNlYXJjaCBsb2dpY1xucmVxdWlyZSgnLi8kLmZpeC1yZS13a3MnKSgnc2VhcmNoJywgMSwgZnVuY3Rpb24oZGVmaW5lZCwgU0VBUkNIKXtcbiAgLy8gMjEuMS4zLjE1IFN0cmluZy5wcm90b3R5cGUuc2VhcmNoKHJlZ2V4cClcbiAgcmV0dXJuIGZ1bmN0aW9uIHNlYXJjaChyZWdleHApe1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgTyAgPSBkZWZpbmVkKHRoaXMpXG4gICAgICAsIGZuID0gcmVnZXhwID09IHVuZGVmaW5lZCA/IHVuZGVmaW5lZCA6IHJlZ2V4cFtTRUFSQ0hdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW1NFQVJDSF0oU3RyaW5nKE8pKTtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc2VhcmNoLmpzXG4gKiogbW9kdWxlIGlkID0gMTM2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBAQHNwbGl0IGxvZ2ljXG5yZXF1aXJlKCcuLyQuZml4LXJlLXdrcycpKCdzcGxpdCcsIDIsIGZ1bmN0aW9uKGRlZmluZWQsIFNQTElULCAkc3BsaXQpe1xuICAvLyAyMS4xLjMuMTcgU3RyaW5nLnByb3RvdHlwZS5zcGxpdChzZXBhcmF0b3IsIGxpbWl0KVxuICByZXR1cm4gZnVuY3Rpb24gc3BsaXQoc2VwYXJhdG9yLCBsaW1pdCl7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBPICA9IGRlZmluZWQodGhpcylcbiAgICAgICwgZm4gPSBzZXBhcmF0b3IgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VwYXJhdG9yW1NQTElUXTtcbiAgICByZXR1cm4gZm4gIT09IHVuZGVmaW5lZFxuICAgICAgPyBmbi5jYWxsKHNlcGFyYXRvciwgTywgbGltaXQpXG4gICAgICA6ICRzcGxpdC5jYWxsKFN0cmluZyhPKSwgc2VwYXJhdG9yLCBsaW1pdCk7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNwbGl0LmpzXG4gKiogbW9kdWxlIGlkID0gMTM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJCAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgTElCUkFSWSAgICA9IHJlcXVpcmUoJy4vJC5saWJyYXJ5JylcbiAgLCBnbG9iYWwgICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgY3R4ICAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsIGNsYXNzb2YgICAgPSByZXF1aXJlKCcuLyQuY2xhc3NvZicpXG4gICwgJGV4cG9ydCAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGlzT2JqZWN0ICAgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBhbk9iamVjdCAgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICA9IHJlcXVpcmUoJy4vJC5hLWZ1bmN0aW9uJylcbiAgLCBzdHJpY3ROZXcgID0gcmVxdWlyZSgnLi8kLnN0cmljdC1uZXcnKVxuICAsIGZvck9mICAgICAgPSByZXF1aXJlKCcuLyQuZm9yLW9mJylcbiAgLCBzZXRQcm90byAgID0gcmVxdWlyZSgnLi8kLnNldC1wcm90bycpLnNldFxuICAsIHNhbWUgICAgICAgPSByZXF1aXJlKCcuLyQuc2FtZS12YWx1ZScpXG4gICwgU1BFQ0lFUyAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnc3BlY2llcycpXG4gICwgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi8kLnNwZWNpZXMtY29uc3RydWN0b3InKVxuICAsIGFzYXAgICAgICAgPSByZXF1aXJlKCcuLyQubWljcm90YXNrJylcbiAgLCBQUk9NSVNFICAgID0gJ1Byb21pc2UnXG4gICwgcHJvY2VzcyAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgaXNOb2RlICAgICA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgUCAgICAgICAgICA9IGdsb2JhbFtQUk9NSVNFXVxuICAsIFdyYXBwZXI7XG5cbnZhciB0ZXN0UmVzb2x2ZSA9IGZ1bmN0aW9uKHN1Yil7XG4gIHZhciB0ZXN0ID0gbmV3IFAoZnVuY3Rpb24oKXt9KTtcbiAgaWYoc3ViKXRlc3QuY29uc3RydWN0b3IgPSBPYmplY3Q7XG4gIHJldHVybiBQLnJlc29sdmUodGVzdCkgPT09IHRlc3Q7XG59O1xuXG52YXIgVVNFX05BVElWRSA9IGZ1bmN0aW9uKCl7XG4gIHZhciB3b3JrcyA9IGZhbHNlO1xuICBmdW5jdGlvbiBQMih4KXtcbiAgICB2YXIgc2VsZiA9IG5ldyBQKHgpO1xuICAgIHNldFByb3RvKHNlbGYsIFAyLnByb3RvdHlwZSk7XG4gICAgcmV0dXJuIHNlbGY7XG4gIH1cbiAgdHJ5IHtcbiAgICB3b3JrcyA9IFAgJiYgUC5yZXNvbHZlICYmIHRlc3RSZXNvbHZlKCk7XG4gICAgc2V0UHJvdG8oUDIsIFApO1xuICAgIFAyLnByb3RvdHlwZSA9ICQuY3JlYXRlKFAucHJvdG90eXBlLCB7Y29uc3RydWN0b3I6IHt2YWx1ZTogUDJ9fSk7XG4gICAgLy8gYWN0dWFsIEZpcmVmb3ggaGFzIGJyb2tlbiBzdWJjbGFzcyBzdXBwb3J0LCB0ZXN0IHRoYXRcbiAgICBpZighKFAyLnJlc29sdmUoNSkudGhlbihmdW5jdGlvbigpe30pIGluc3RhbmNlb2YgUDIpKXtcbiAgICAgIHdvcmtzID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIGFjdHVhbCBWOCBidWcsIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD00MTYyXG4gICAgaWYod29ya3MgJiYgcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJykpe1xuICAgICAgdmFyIHRoZW5hYmxlVGhlbkdvdHRlbiA9IGZhbHNlO1xuICAgICAgUC5yZXNvbHZlKCQuc2V0RGVzYyh7fSwgJ3RoZW4nLCB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKXsgdGhlbmFibGVUaGVuR290dGVuID0gdHJ1ZTsgfVxuICAgICAgfSkpO1xuICAgICAgd29ya3MgPSB0aGVuYWJsZVRoZW5Hb3R0ZW47XG4gICAgfVxuICB9IGNhdGNoKGUpeyB3b3JrcyA9IGZhbHNlOyB9XG4gIHJldHVybiB3b3Jrcztcbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIHNhbWVDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKGEsIGIpe1xuICAvLyBsaWJyYXJ5IHdyYXBwZXIgc3BlY2lhbCBjYXNlXG4gIGlmKExJQlJBUlkgJiYgYSA9PT0gUCAmJiBiID09PSBXcmFwcGVyKXJldHVybiB0cnVlO1xuICByZXR1cm4gc2FtZShhLCBiKTtcbn07XG52YXIgZ2V0Q29uc3RydWN0b3IgPSBmdW5jdGlvbihDKXtcbiAgdmFyIFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXTtcbiAgcmV0dXJuIFMgIT0gdW5kZWZpbmVkID8gUyA6IEM7XG59O1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbihpdCl7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIFByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24oQyl7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uKCQkcmVzb2x2ZSwgJCRyZWplY3Qpe1xuICAgIGlmKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCl0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSksXG4gIHRoaXMucmVqZWN0ICA9IGFGdW5jdGlvbihyZWplY3QpXG59O1xudmFyIHBlcmZvcm0gPSBmdW5jdGlvbihleGVjKXtcbiAgdHJ5IHtcbiAgICBleGVjKCk7XG4gIH0gY2F0Y2goZSl7XG4gICAgcmV0dXJuIHtlcnJvcjogZX07XG4gIH1cbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24ocmVjb3JkLCBpc1JlamVjdCl7XG4gIGlmKHJlY29yZC5uKXJldHVybjtcbiAgcmVjb3JkLm4gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSByZWNvcmQuYztcbiAgYXNhcChmdW5jdGlvbigpe1xuICAgIHZhciB2YWx1ZSA9IHJlY29yZC52XG4gICAgICAsIG9rICAgID0gcmVjb3JkLnMgPT0gMVxuICAgICAgLCBpICAgICA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uKHJlYWN0aW9uKXtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWxcbiAgICAgICAgLCByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZVxuICAgICAgICAsIHJlamVjdCAgPSByZWFjdGlvbi5yZWplY3RcbiAgICAgICAgLCByZXN1bHQsIHRoZW47XG4gICAgICB0cnkge1xuICAgICAgICBpZihoYW5kbGVyKXtcbiAgICAgICAgICBpZighb2spcmVjb3JkLmggPSB0cnVlO1xuICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIgPT09IHRydWUgPyB2YWx1ZSA6IGhhbmRsZXIodmFsdWUpO1xuICAgICAgICAgIGlmKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSl7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZih0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKXtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoKGUpe1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZShjaGFpbi5sZW5ndGggPiBpKXJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBjaGFpbi5sZW5ndGggPSAwO1xuICAgIHJlY29yZC5uID0gZmFsc2U7XG4gICAgaWYoaXNSZWplY3Qpc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgdmFyIHByb21pc2UgPSByZWNvcmQucFxuICAgICAgICAsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgICBpZihpc1VuaGFuZGxlZChwcm9taXNlKSl7XG4gICAgICAgIGlmKGlzTm9kZSl7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZihoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKXtcbiAgICAgICAgICBoYW5kbGVyKHtwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlfSk7XG4gICAgICAgIH0gZWxzZSBpZigoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKXtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gcmVjb3JkLmEgPSB1bmRlZmluZWQ7XG4gICAgfSwgMSk7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uKHByb21pc2Upe1xuICB2YXIgcmVjb3JkID0gcHJvbWlzZS5fZFxuICAgICwgY2hhaW4gID0gcmVjb3JkLmEgfHwgcmVjb3JkLmNcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIHJlYWN0aW9uO1xuICBpZihyZWNvcmQuaClyZXR1cm4gZmFsc2U7XG4gIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpe1xuICAgIHJlYWN0aW9uID0gY2hhaW5baSsrXTtcbiAgICBpZihyZWFjdGlvbi5mYWlsIHx8ICFpc1VuaGFuZGxlZChyZWFjdGlvbi5wcm9taXNlKSlyZXR1cm4gZmFsc2U7XG4gIH0gcmV0dXJuIHRydWU7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbih2YWx1ZSl7XG4gIHZhciByZWNvcmQgPSB0aGlzO1xuICBpZihyZWNvcmQuZClyZXR1cm47XG4gIHJlY29yZC5kID0gdHJ1ZTtcbiAgcmVjb3JkID0gcmVjb3JkLnIgfHwgcmVjb3JkOyAvLyB1bndyYXBcbiAgcmVjb3JkLnYgPSB2YWx1ZTtcbiAgcmVjb3JkLnMgPSAyO1xuICByZWNvcmQuYSA9IHJlY29yZC5jLnNsaWNlKCk7XG4gIG5vdGlmeShyZWNvcmQsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHJlY29yZCA9IHRoaXNcbiAgICAsIHRoZW47XG4gIGlmKHJlY29yZC5kKXJldHVybjtcbiAgcmVjb3JkLmQgPSB0cnVlO1xuICByZWNvcmQgPSByZWNvcmQuciB8fCByZWNvcmQ7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmKHJlY29yZC5wID09PSB2YWx1ZSl0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZih0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpe1xuICAgICAgYXNhcChmdW5jdGlvbigpe1xuICAgICAgICB2YXIgd3JhcHBlciA9IHtyOiByZWNvcmQsIGQ6IGZhbHNlfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaChlKXtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZWNvcmQudiA9IHZhbHVlO1xuICAgICAgcmVjb3JkLnMgPSAxO1xuICAgICAgbm90aWZ5KHJlY29yZCwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaChlKXtcbiAgICAkcmVqZWN0LmNhbGwoe3I6IHJlY29yZCwgZDogZmFsc2V9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYoIVVTRV9OQVRJVkUpe1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICBQID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcil7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICB2YXIgcmVjb3JkID0gdGhpcy5fZCA9IHtcbiAgICAgIHA6IHN0cmljdE5ldyh0aGlzLCBQLCBQUk9NSVNFKSwgICAgICAgICAvLyA8LSBwcm9taXNlXG4gICAgICBjOiBbXSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgICBhOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICAgIHM6IDAsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgICAgZDogZmFsc2UsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICAgIHY6IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgaDogZmFsc2UsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIGhhbmRsZWQgcmVqZWN0aW9uXG4gICAgICBuOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gICAgfTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCByZWNvcmQsIDEpLCBjdHgoJHJlamVjdCwgcmVjb3JkLCAxKSk7XG4gICAgfSBjYXRjaChlcnIpe1xuICAgICAgJHJlamVjdC5jYWxsKHJlY29yZCwgZXJyKTtcbiAgICB9XG4gIH07XG4gIHJlcXVpcmUoJy4vJC5yZWRlZmluZS1hbGwnKShQLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCl7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIFApKVxuICAgICAgICAsIHByb21pc2UgID0gcmVhY3Rpb24ucHJvbWlzZVxuICAgICAgICAsIHJlY29yZCAgID0gdGhpcy5fZDtcbiAgICAgIHJlYWN0aW9uLm9rICAgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWNvcmQuYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmKHJlY29yZC5hKXJlY29yZC5hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYocmVjb3JkLnMpbm90aWZ5KHJlY29yZCwgZmFsc2UpO1xuICAgICAgcmV0dXJuIHByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uKG9uUmVqZWN0ZWQpe1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHtQcm9taXNlOiBQfSk7XG5yZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKShQLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vJC5zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vJC5jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocil7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXcgUHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZWplY3QgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoIVVTRV9OQVRJVkUgfHwgdGVzdFJlc29sdmUodHJ1ZSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpe1xuICAgIC8vIGluc3RhbmNlb2YgaW5zdGVhZCBvZiBpbnRlcm5hbCBzbG90IGNoZWNrIGJlY2F1c2Ugd2Ugc2hvdWxkIGZpeCBpdCB3aXRob3V0IHJlcGxhY2VtZW50IG5hdGl2ZSBQcm9taXNlIGNvcmVcbiAgICBpZih4IGluc3RhbmNlb2YgUCAmJiBzYW1lQ29uc3RydWN0b3IoeC5jb25zdHJ1Y3RvciwgdGhpcykpcmV0dXJuIHg7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXcgUHJvbWlzZUNhcGFiaWxpdHkodGhpcylcbiAgICAgICwgJCRyZXNvbHZlICA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICAkJHJlc29sdmUoeCk7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuLyQuaXRlci1kZXRlY3QnKShmdW5jdGlvbihpdGVyKXtcbiAgUC5hbGwoaXRlcilbJ2NhdGNoJ10oZnVuY3Rpb24oKXt9KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gZ2V0Q29uc3RydWN0b3IodGhpcylcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZXNvbHZlICAgID0gY2FwYWJpbGl0eS5yZXNvbHZlXG4gICAgICAsIHJlamVjdCAgICAgPSBjYXBhYmlsaXR5LnJlamVjdFxuICAgICAgLCB2YWx1ZXMgICAgID0gW107XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgdmFsdWVzLnB1c2gsIHZhbHVlcyk7XG4gICAgICB2YXIgcmVtYWluaW5nID0gdmFsdWVzLmxlbmd0aFxuICAgICAgICAsIHJlc3VsdHMgICA9IEFycmF5KHJlbWFpbmluZyk7XG4gICAgICBpZihyZW1haW5pbmcpJC5lYWNoLmNhbGwodmFsdWVzLCBmdW5jdGlvbihwcm9taXNlLCBpbmRleCl7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgICAgICBpZihhbHJlYWR5Q2FsbGVkKXJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICByZXN1bHRzW2luZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUocmVzdWx0cyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIGVsc2UgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKXtcbiAgICB2YXIgQyAgICAgICAgICA9IGdldENvbnN0cnVjdG9yKHRoaXMpXG4gICAgICAsIGNhcGFiaWxpdHkgPSBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciBhYnJ1cHQgPSBwZXJmb3JtKGZ1bmN0aW9uKCl7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uKHByb21pc2Upe1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZihhYnJ1cHQpcmVqZWN0KGFicnVwdC5lcnJvcik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIENvbnN0cnVjdG9yLCBuYW1lKXtcbiAgaWYoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSl0aHJvdyBUeXBlRXJyb3IobmFtZSArIFwiOiB1c2UgdGhlICduZXcnIG9wZXJhdG9yIVwiKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnN0cmljdC1uZXcuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjdHggICAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsIGNhbGwgICAgICAgID0gcmVxdWlyZSgnLi8kLml0ZXItY2FsbCcpXG4gICwgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuLyQuaXMtYXJyYXktaXRlcicpXG4gICwgYW5PYmplY3QgICAgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vJC50by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0KXtcbiAgdmFyIGl0ZXJGbiA9IGdldEl0ZXJGbihpdGVyYWJsZSlcbiAgICAsIGYgICAgICA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKVxuICAgICwgaW5kZXggID0gMFxuICAgICwgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvcjtcbiAgaWYodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKXRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYoaXNBcnJheUl0ZXIoaXRlckZuKSlmb3IobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4Kyspe1xuICAgIGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgfSBlbHNlIGZvcihpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOyApe1xuICAgIGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZm9yLW9mLmpzXG4gKiogbW9kdWxlIGlkID0gMTQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCAgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLyQuYS1mdW5jdGlvbicpXG4gICwgU1BFQ0lFUyAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIEQpe1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yLCBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuc3BlY2llcy1jb25zdHJ1Y3Rvci5qc1xuICoqIG1vZHVsZSBpZCA9IDE0MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vJC50YXNrJykuc2V0XG4gICwgT2JzZXJ2ZXIgID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXJcbiAgLCBwcm9jZXNzICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIFByb21pc2UgICA9IGdsb2JhbC5Qcm9taXNlXG4gICwgaXNOb2RlICAgID0gcmVxdWlyZSgnLi8kLmNvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJ1xuICAsIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxudmFyIGZsdXNoID0gZnVuY3Rpb24oKXtcbiAgdmFyIHBhcmVudCwgZG9tYWluLCBmbjtcbiAgaWYoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpe1xuICAgIHByb2Nlc3MuZG9tYWluID0gbnVsbDtcbiAgICBwYXJlbnQuZXhpdCgpO1xuICB9XG4gIHdoaWxlKGhlYWQpe1xuICAgIGRvbWFpbiA9IGhlYWQuZG9tYWluO1xuICAgIGZuICAgICA9IGhlYWQuZm47XG4gICAgaWYoZG9tYWluKWRvbWFpbi5lbnRlcigpO1xuICAgIGZuKCk7IC8vIDwtIGN1cnJlbnRseSB3ZSB1c2UgaXQgb25seSBmb3IgUHJvbWlzZSAtIHRyeSAvIGNhdGNoIG5vdCByZXF1aXJlZFxuICAgIGlmKGRvbWFpbilkb21haW4uZXhpdCgpO1xuICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgaWYocGFyZW50KXBhcmVudC5lbnRlcigpO1xufTtcblxuLy8gTm9kZS5qc1xuaWYoaXNOb2RlKXtcbiAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgfTtcbi8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlclxufSBlbHNlIGlmKE9ic2VydmVyKXtcbiAgdmFyIHRvZ2dsZSA9IDFcbiAgICAsIG5vZGUgICA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHtjaGFyYWN0ZXJEYXRhOiB0cnVlfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gLXRvZ2dsZTtcbiAgfTtcbi8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG59IGVsc2UgaWYoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpe1xuICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZmx1c2gpO1xuICB9O1xuLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbi8vIC0gc2V0SW1tZWRpYXRlXG4vLyAtIE1lc3NhZ2VDaGFubmVsXG4vLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4vLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuLy8gLSBzZXRUaW1lb3V0XG59IGVsc2Uge1xuICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBhc2FwKGZuKXtcbiAgdmFyIHRhc2sgPSB7Zm46IGZuLCBuZXh0OiB1bmRlZmluZWQsIGRvbWFpbjogaXNOb2RlICYmIHByb2Nlc3MuZG9tYWlufTtcbiAgaWYobGFzdClsYXN0Lm5leHQgPSB0YXNrO1xuICBpZighaGVhZCl7XG4gICAgaGVhZCA9IHRhc2s7XG4gICAgbm90aWZ5KCk7XG4gIH0gbGFzdCA9IHRhc2s7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQubWljcm90YXNrLmpzXG4gKiogbW9kdWxlIGlkID0gMTQyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgY3R4ICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgaW52b2tlICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmludm9rZScpXG4gICwgaHRtbCAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmh0bWwnKVxuICAsIGNlbCAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5kb20tY3JlYXRlJylcbiAgLCBnbG9iYWwgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBwcm9jZXNzICAgICAgICAgICAgPSBnbG9iYWwucHJvY2Vzc1xuICAsIHNldFRhc2sgICAgICAgICAgICA9IGdsb2JhbC5zZXRJbW1lZGlhdGVcbiAgLCBjbGVhclRhc2sgICAgICAgICAgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGVcbiAgLCBNZXNzYWdlQ2hhbm5lbCAgICAgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWxcbiAgLCBjb3VudGVyICAgICAgICAgICAgPSAwXG4gICwgcXVldWUgICAgICAgICAgICAgID0ge31cbiAgLCBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJ1xuICAsIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uKCl7XG4gIHZhciBpZCA9ICt0aGlzO1xuICBpZihxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpe1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdG5lciA9IGZ1bmN0aW9uKGV2ZW50KXtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYoIXNldFRhc2sgfHwgIWNsZWFyVGFzayl7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pe1xuICAgIHZhciBhcmdzID0gW10sIGkgPSAxO1xuICAgIHdoaWxlKGFyZ3VtZW50cy5sZW5ndGggPiBpKWFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uKCl7XG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpe1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZihyZXF1aXJlKCcuLyQuY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZihNZXNzYWdlQ2hhbm5lbCl7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbDtcbiAgICBwb3J0ICAgID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0bmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKXtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uKCl7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uKGlkKXtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiAgIHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC50YXNrLmpzXG4gKiogbW9kdWxlIGlkID0gMTQzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24odGFyZ2V0LCBzcmMpe1xuICBmb3IodmFyIGtleSBpbiBzcmMpcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5yZWRlZmluZS1hbGwuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuLyQuY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gMjMuMSBNYXAgT2JqZWN0c1xucmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24nKSgnTWFwJywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIE1hcCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMS4zLjYgTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpe1xuICAgIHZhciBlbnRyeSA9IHN0cm9uZy5nZXRFbnRyeSh0aGlzLCBrZXkpO1xuICAgIHJldHVybiBlbnRyeSAmJiBlbnRyeS52O1xuICB9LFxuICAvLyAyMy4xLjMuOSBNYXAucHJvdG90eXBlLnNldChrZXksIHZhbHVlKVxuICBzZXQ6IGZ1bmN0aW9uIHNldChrZXksIHZhbHVlKXtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCBrZXkgPT09IDAgPyAwIDoga2V5LCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZywgdHJ1ZSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDE0NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgaGlkZSAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhpZGUnKVxuICAsIHJlZGVmaW5lQWxsICA9IHJlcXVpcmUoJy4vJC5yZWRlZmluZS1hbGwnKVxuICAsIGN0eCAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsIHN0cmljdE5ldyAgICA9IHJlcXVpcmUoJy4vJC5zdHJpY3QtbmV3JylcbiAgLCBkZWZpbmVkICAgICAgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpXG4gICwgZm9yT2YgICAgICAgID0gcmVxdWlyZSgnLi8kLmZvci1vZicpXG4gICwgJGl0ZXJEZWZpbmUgID0gcmVxdWlyZSgnLi8kLml0ZXItZGVmaW5lJylcbiAgLCBzdGVwICAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlci1zdGVwJylcbiAgLCBJRCAgICAgICAgICAgPSByZXF1aXJlKCcuLyQudWlkJykoJ2lkJylcbiAgLCAkaGFzICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGFzJylcbiAgLCBpc09iamVjdCAgICAgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBzZXRTcGVjaWVzICAgPSByZXF1aXJlKCcuLyQuc2V0LXNwZWNpZXMnKVxuICAsIERFU0NSSVBUT1JTICA9IHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpXG4gICwgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBpc09iamVjdFxuICAsIFNJWkUgICAgICAgICA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJ1xuICAsIGlkICAgICAgICAgICA9IDA7XG5cbnZhciBmYXN0S2V5ID0gZnVuY3Rpb24oaXQsIGNyZWF0ZSl7XG4gIC8vIHJldHVybiBwcmltaXRpdmUgd2l0aCBwcmVmaXhcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gdHlwZW9mIGl0ID09ICdzeW1ib2wnID8gaXQgOiAodHlwZW9mIGl0ID09ICdzdHJpbmcnID8gJ1MnIDogJ1AnKSArIGl0O1xuICBpZighJGhhcyhpdCwgSUQpKXtcbiAgICAvLyBjYW4ndCBzZXQgaWQgdG8gZnJvemVuIG9iamVjdFxuICAgIGlmKCFpc0V4dGVuc2libGUoaXQpKXJldHVybiAnRic7XG4gICAgLy8gbm90IG5lY2Vzc2FyeSB0byBhZGQgaWRcbiAgICBpZighY3JlYXRlKXJldHVybiAnRSc7XG4gICAgLy8gYWRkIG1pc3Npbmcgb2JqZWN0IGlkXG4gICAgaGlkZShpdCwgSUQsICsraWQpO1xuICAvLyByZXR1cm4gb2JqZWN0IGlkIHdpdGggcHJlZml4XG4gIH0gcmV0dXJuICdPJyArIGl0W0lEXTtcbn07XG5cbnZhciBnZXRFbnRyeSA9IGZ1bmN0aW9uKHRoYXQsIGtleSl7XG4gIC8vIGZhc3QgY2FzZVxuICB2YXIgaW5kZXggPSBmYXN0S2V5KGtleSksIGVudHJ5O1xuICBpZihpbmRleCAhPT0gJ0YnKXJldHVybiB0aGF0Ll9pW2luZGV4XTtcbiAgLy8gZnJvemVuIG9iamVjdCBjYXNlXG4gIGZvcihlbnRyeSA9IHRoYXQuX2Y7IGVudHJ5OyBlbnRyeSA9IGVudHJ5Lm4pe1xuICAgIGlmKGVudHJ5LmsgPT0ga2V5KXJldHVybiBlbnRyeTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKXtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgaXRlcmFibGUpe1xuICAgICAgc3RyaWN0TmV3KHRoYXQsIEMsIE5BTUUpO1xuICAgICAgdGhhdC5faSA9ICQuY3JlYXRlKG51bGwpOyAvLyBpbmRleFxuICAgICAgdGhhdC5fZiA9IHVuZGVmaW5lZDsgICAgICAvLyBmaXJzdCBlbnRyeVxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgICAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAgIC8vIHNpemVcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKXtcbiAgICAgICAgZm9yKHZhciB0aGF0ID0gdGhpcywgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYoZW50cnkucCllbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xuICAgICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICAgLCBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmKGVudHJ5KXtcbiAgICAgICAgICB2YXIgbmV4dCA9IGVudHJ5Lm5cbiAgICAgICAgICAgICwgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYocHJldilwcmV2Lm4gPSBuZXh0O1xuICAgICAgICAgIGlmKG5leHQpbmV4dC5wID0gcHJldjtcbiAgICAgICAgICBpZih0aGF0Ll9mID09IGVudHJ5KXRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmKHRoYXQuX2wgPT0gZW50cnkpdGhhdC5fbCA9IHByZXY7XG4gICAgICAgICAgdGhhdFtTSVpFXS0tO1xuICAgICAgICB9IHJldHVybiAhIWVudHJ5O1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjIuMy42IFNldC5wcm90b3R5cGUuZm9yRWFjaChjYWxsYmFja2ZuLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxuICAgICAgLy8gMjMuMS4zLjUgTWFwLnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICBmb3JFYWNoOiBmdW5jdGlvbiBmb3JFYWNoKGNhbGxiYWNrZm4gLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xuICAgICAgICB2YXIgZiA9IGN0eChjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgMylcbiAgICAgICAgICAsIGVudHJ5O1xuICAgICAgICB3aGlsZShlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoaXMuX2Ype1xuICAgICAgICAgIGYoZW50cnkudiwgZW50cnkuaywgdGhpcyk7XG4gICAgICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuNyBNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy4yLjMuNyBTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XG4gICAgICAgIHJldHVybiAhIWdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYoREVTQ1JJUFRPUlMpJC5zZXREZXNjKEMucHJvdG90eXBlLCAnc2l6ZScsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKXtcbiAgICAgICAgcmV0dXJuIGRlZmluZWQodGhpc1tTSVpFXSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24odGhhdCwga2V5LCB2YWx1ZSl7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KVxuICAgICAgLCBwcmV2LCBpbmRleDtcbiAgICAvLyBjaGFuZ2UgZXhpc3RpbmcgZW50cnlcbiAgICBpZihlbnRyeSl7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZighdGhhdC5fZil0aGF0Ll9mID0gZW50cnk7XG4gICAgICBpZihwcmV2KXByZXYubiA9IGVudHJ5O1xuICAgICAgdGhhdFtTSVpFXSsrO1xuICAgICAgLy8gYWRkIHRvIGluZGV4XG4gICAgICBpZihpbmRleCAhPT0gJ0YnKXRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uKEMsIE5BTUUsIElTX01BUCl7XG4gICAgLy8gYWRkIC5rZXlzLCAudmFsdWVzLCAuZW50cmllcywgW0BAaXRlcmF0b3JdXG4gICAgLy8gMjMuMS4zLjQsIDIzLjEuMy44LCAyMy4xLjMuMTEsIDIzLjEuMy4xMiwgMjMuMi4zLjUsIDIzLjIuMy44LCAyMy4yLjMuMTAsIDIzLjIuMy4xMVxuICAgICRpdGVyRGVmaW5lKEMsIE5BTUUsIGZ1bmN0aW9uKGl0ZXJhdGVkLCBraW5kKXtcbiAgICAgIHRoaXMuX3QgPSBpdGVyYXRlZDsgIC8vIHRhcmdldFxuICAgICAgdGhpcy5fayA9IGtpbmQ7ICAgICAgLy8ga2luZFxuICAgICAgdGhpcy5fbCA9IHVuZGVmaW5lZDsgLy8gcHJldmlvdXNcbiAgICB9LCBmdW5jdGlvbigpe1xuICAgICAgdmFyIHRoYXQgID0gdGhpc1xuICAgICAgICAsIGtpbmQgID0gdGhhdC5fa1xuICAgICAgICAsIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUoZW50cnkgJiYgZW50cnkucillbnRyeSA9IGVudHJ5LnA7XG4gICAgICAvLyBnZXQgbmV4dCBlbnRyeVxuICAgICAgaWYoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSl7XG4gICAgICAgIC8vIG9yIGZpbmlzaCB0aGUgaXRlcmF0aW9uXG4gICAgICAgIHRoYXQuX3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHJldHVybiBzdGVwKDEpO1xuICAgICAgfVxuICAgICAgLy8gcmV0dXJuIHN0ZXAgYnkga2luZFxuICAgICAgaWYoa2luZCA9PSAna2V5cycgIClyZXR1cm4gc3RlcCgwLCBlbnRyeS5rKTtcbiAgICAgIGlmKGtpbmQgPT0gJ3ZhbHVlcycpcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnICwgIUlTX01BUCwgdHJ1ZSk7XG5cbiAgICAvLyBhZGQgW0BAc3BlY2llc10sIDIzLjEuMi4yLCAyMy4yLjIuMlxuICAgIHNldFNwZWNpZXMoTkFNRSk7XG4gIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5jb2xsZWN0aW9uLXN0cm9uZy5qc1xuICoqIG1vZHVsZSBpZCA9IDE0NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vJC5yZWRlZmluZScpXG4gICwgcmVkZWZpbmVBbGwgICAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUtYWxsJylcbiAgLCBmb3JPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxuICAsIHN0cmljdE5ldyAgICAgID0gcmVxdWlyZSgnLi8kLnN0cmljdC1uZXcnKVxuICAsIGlzT2JqZWN0ICAgICAgID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgZmFpbHMgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZmFpbHMnKVxuICAsICRpdGVyRGV0ZWN0ICAgID0gcmVxdWlyZSgnLi8kLml0ZXItZGV0ZWN0JylcbiAgLCBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vJC5zZXQtdG8tc3RyaW5nLXRhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKXtcbiAgdmFyIEJhc2UgID0gZ2xvYmFsW05BTUVdXG4gICAgLCBDICAgICA9IEJhc2VcbiAgICAsIEFEREVSID0gSVNfTUFQID8gJ3NldCcgOiAnYWRkJ1xuICAgICwgcHJvdG8gPSBDICYmIEMucHJvdG90eXBlXG4gICAgLCBPICAgICA9IHt9O1xuICB2YXIgZml4TWV0aG9kID0gZnVuY3Rpb24oS0VZKXtcbiAgICB2YXIgZm4gPSBwcm90b1tLRVldO1xuICAgIHJlZGVmaW5lKHByb3RvLCBLRVksXG4gICAgICBLRVkgPT0gJ2RlbGV0ZScgPyBmdW5jdGlvbihhKXtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdoYXMnID8gZnVuY3Rpb24gaGFzKGEpe1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyBmYWxzZSA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2dldCcgPyBmdW5jdGlvbiBnZXQoYSl7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IHVuZGVmaW5lZCA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2FkZCcgPyBmdW5jdGlvbiBhZGQoYSl7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTsgcmV0dXJuIHRoaXM7IH1cbiAgICAgICAgOiBmdW5jdGlvbiBzZXQoYSwgYil7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhLCBiKTsgcmV0dXJuIHRoaXM7IH1cbiAgICApO1xuICB9O1xuICBpZih0eXBlb2YgQyAhPSAnZnVuY3Rpb24nIHx8ICEoSVNfV0VBSyB8fCBwcm90by5mb3JFYWNoICYmICFmYWlscyhmdW5jdGlvbigpe1xuICAgIG5ldyBDKCkuZW50cmllcygpLm5leHQoKTtcbiAgfSkpKXtcbiAgICAvLyBjcmVhdGUgY29sbGVjdGlvbiBjb25zdHJ1Y3RvclxuICAgIEMgPSBjb21tb24uZ2V0Q29uc3RydWN0b3Iod3JhcHBlciwgTkFNRSwgSVNfTUFQLCBBRERFUik7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIG1ldGhvZHMpO1xuICB9IGVsc2Uge1xuICAgIHZhciBpbnN0YW5jZSAgICAgICAgICAgICA9IG5ldyBDXG4gICAgICAvLyBlYXJseSBpbXBsZW1lbnRhdGlvbnMgbm90IHN1cHBvcnRzIGNoYWluaW5nXG4gICAgICAsIEhBU05UX0NIQUlOSU5HICAgICAgID0gaW5zdGFuY2VbQURERVJdKElTX1dFQUsgPyB7fSA6IC0wLCAxKSAhPSBpbnN0YW5jZVxuICAgICAgLy8gVjggfiAgQ2hyb21pdW0gNDAtIHdlYWstY29sbGVjdGlvbnMgdGhyb3dzIG9uIHByaW1pdGl2ZXMsIGJ1dCBzaG91bGQgcmV0dXJuIGZhbHNlXG4gICAgICAsIFRIUk9XU19PTl9QUklNSVRJVkVTID0gZmFpbHMoZnVuY3Rpb24oKXsgaW5zdGFuY2UuaGFzKDEpOyB9KVxuICAgICAgLy8gbW9zdCBlYXJseSBpbXBsZW1lbnRhdGlvbnMgZG9lc24ndCBzdXBwb3J0cyBpdGVyYWJsZXMsIG1vc3QgbW9kZXJuIC0gbm90IGNsb3NlIGl0IGNvcnJlY3RseVxuICAgICAgLCBBQ0NFUFRfSVRFUkFCTEVTICAgICA9ICRpdGVyRGV0ZWN0KGZ1bmN0aW9uKGl0ZXIpeyBuZXcgQyhpdGVyKTsgfSkgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICAgIC8vIGZvciBlYXJseSBpbXBsZW1lbnRhdGlvbnMgLTAgYW5kICswIG5vdCB0aGUgc2FtZVxuICAgICAgLCBCVUdHWV9aRVJPO1xuICAgIGlmKCFBQ0NFUFRfSVRFUkFCTEVTKXsgXG4gICAgICBDID0gd3JhcHBlcihmdW5jdGlvbih0YXJnZXQsIGl0ZXJhYmxlKXtcbiAgICAgICAgc3RyaWN0TmV3KHRhcmdldCwgQywgTkFNRSk7XG4gICAgICAgIHZhciB0aGF0ID0gbmV3IEJhc2U7XG4gICAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgICAgIHJldHVybiB0aGF0O1xuICAgICAgfSk7XG4gICAgICBDLnByb3RvdHlwZSA9IHByb3RvO1xuICAgICAgcHJvdG8uY29uc3RydWN0b3IgPSBDO1xuICAgIH1cbiAgICBJU19XRUFLIHx8IGluc3RhbmNlLmZvckVhY2goZnVuY3Rpb24odmFsLCBrZXkpe1xuICAgICAgQlVHR1lfWkVSTyA9IDEgLyBrZXkgPT09IC1JbmZpbml0eTtcbiAgICB9KTtcbiAgICBpZihUSFJPV1NfT05fUFJJTUlUSVZFUyB8fCBCVUdHWV9aRVJPKXtcbiAgICAgIGZpeE1ldGhvZCgnZGVsZXRlJyk7XG4gICAgICBmaXhNZXRob2QoJ2hhcycpO1xuICAgICAgSVNfTUFQICYmIGZpeE1ldGhvZCgnZ2V0Jyk7XG4gICAgfVxuICAgIGlmKEJVR0dZX1pFUk8gfHwgSEFTTlRfQ0hBSU5JTkcpZml4TWV0aG9kKEFEREVSKTtcbiAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIHNob3VsZCBub3QgY29udGFpbnMgLmNsZWFyIG1ldGhvZFxuICAgIGlmKElTX1dFQUsgJiYgcHJvdG8uY2xlYXIpZGVsZXRlIHByb3RvLmNsZWFyO1xuICB9XG5cbiAgc2V0VG9TdHJpbmdUYWcoQywgTkFNRSk7XG5cbiAgT1tOQU1FXSA9IEM7XG4gICRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogKEMgIT0gQmFzZSksIE8pO1xuXG4gIGlmKCFJU19XRUFLKWNvbW1vbi5zZXRTdHJvbmcoQywgTkFNRSwgSVNfTUFQKTtcblxuICByZXR1cm4gQztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5jb2xsZWN0aW9uLmpzXG4gKiogbW9kdWxlIGlkID0gMTQ3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24tc3Ryb25nJyk7XG5cbi8vIDIzLjIgU2V0IE9iamVjdHNcbnJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uJykoJ1NldCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBTZXQoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjIuMy4xIFNldC5wcm90b3R5cGUuYWRkKHZhbHVlKVxuICBhZGQ6IGZ1bmN0aW9uIGFkZCh2YWx1ZSl7XG4gICAgcmV0dXJuIHN0cm9uZy5kZWYodGhpcywgdmFsdWUgPSB2YWx1ZSA9PT0gMCA/IDAgOiB2YWx1ZSwgdmFsdWUpO1xuICB9XG59LCBzdHJvbmcpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zZXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIHJlZGVmaW5lICAgICA9IHJlcXVpcmUoJy4vJC5yZWRlZmluZScpXG4gICwgd2VhayAgICAgICAgID0gcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24td2VhaycpXG4gICwgaXNPYmplY3QgICAgID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgaGFzICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgZnJvemVuU3RvcmUgID0gd2Vhay5mcm96ZW5TdG9yZVxuICAsIFdFQUsgICAgICAgICA9IHdlYWsuV0VBS1xuICAsIGlzRXh0ZW5zaWJsZSA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgaXNPYmplY3RcbiAgLCB0bXAgICAgICAgICAgPSB7fTtcblxuLy8gMjMuMyBXZWFrTWFwIE9iamVjdHNcbnZhciAkV2Vha01hcCA9IHJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uJykoJ1dlYWtNYXAnLCBmdW5jdGlvbihnZXQpe1xuICByZXR1cm4gZnVuY3Rpb24gV2Vha01hcCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMy4zLjMgV2Vha01hcC5wcm90b3R5cGUuZ2V0KGtleSlcbiAgZ2V0OiBmdW5jdGlvbiBnZXQoa2V5KXtcbiAgICBpZihpc09iamVjdChrZXkpKXtcbiAgICAgIGlmKCFpc0V4dGVuc2libGUoa2V5KSlyZXR1cm4gZnJvemVuU3RvcmUodGhpcykuZ2V0KGtleSk7XG4gICAgICBpZihoYXMoa2V5LCBXRUFLKSlyZXR1cm4ga2V5W1dFQUtdW3RoaXMuX2ldO1xuICAgIH1cbiAgfSxcbiAgLy8gMjMuMy4zLjUgV2Vha01hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpe1xuICAgIHJldHVybiB3ZWFrLmRlZih0aGlzLCBrZXksIHZhbHVlKTtcbiAgfVxufSwgd2VhaywgdHJ1ZSwgdHJ1ZSk7XG5cbi8vIElFMTEgV2Vha01hcCBmcm96ZW4ga2V5cyBmaXhcbmlmKG5ldyAkV2Vha01hcCgpLnNldCgoT2JqZWN0LmZyZWV6ZSB8fCBPYmplY3QpKHRtcCksIDcpLmdldCh0bXApICE9IDcpe1xuICAkLmVhY2guY2FsbChbJ2RlbGV0ZScsICdoYXMnLCAnZ2V0JywgJ3NldCddLCBmdW5jdGlvbihrZXkpe1xuICAgIHZhciBwcm90byAgPSAkV2Vha01hcC5wcm90b3R5cGVcbiAgICAgICwgbWV0aG9kID0gcHJvdG9ba2V5XTtcbiAgICByZWRlZmluZShwcm90bywga2V5LCBmdW5jdGlvbihhLCBiKXtcbiAgICAgIC8vIHN0b3JlIGZyb3plbiBvYmplY3RzIG9uIGxlYWt5IG1hcFxuICAgICAgaWYoaXNPYmplY3QoYSkgJiYgIWlzRXh0ZW5zaWJsZShhKSl7XG4gICAgICAgIHZhciByZXN1bHQgPSBmcm96ZW5TdG9yZSh0aGlzKVtrZXldKGEsIGIpO1xuICAgICAgICByZXR1cm4ga2V5ID09ICdzZXQnID8gdGhpcyA6IHJlc3VsdDtcbiAgICAgIC8vIHN0b3JlIGFsbCB0aGUgcmVzdCBvbiBuYXRpdmUgd2Vha21hcFxuICAgICAgfSByZXR1cm4gbWV0aG9kLmNhbGwodGhpcywgYSwgYik7XG4gICAgfSk7XG4gIH0pO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLW1hcC5qc1xuICoqIG1vZHVsZSBpZCA9IDE0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGhpZGUgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhpZGUnKVxuICAsIHJlZGVmaW5lQWxsICAgICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lLWFsbCcpXG4gICwgYW5PYmplY3QgICAgICAgICAgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCBpc09iamVjdCAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIHN0cmljdE5ldyAgICAgICAgID0gcmVxdWlyZSgnLi8kLnN0cmljdC1uZXcnKVxuICAsIGZvck9mICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmZvci1vZicpXG4gICwgY3JlYXRlQXJyYXlNZXRob2QgPSByZXF1aXJlKCcuLyQuYXJyYXktbWV0aG9kcycpXG4gICwgJGhhcyAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGFzJylcbiAgLCBXRUFLICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC51aWQnKSgnd2VhaycpXG4gICwgaXNFeHRlbnNpYmxlICAgICAgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGlzT2JqZWN0XG4gICwgYXJyYXlGaW5kICAgICAgICAgPSBjcmVhdGVBcnJheU1ldGhvZCg1KVxuICAsIGFycmF5RmluZEluZGV4ICAgID0gY3JlYXRlQXJyYXlNZXRob2QoNilcbiAgLCBpZCAgICAgICAgICAgICAgICA9IDA7XG5cbi8vIGZhbGxiYWNrIGZvciBmcm96ZW4ga2V5c1xudmFyIGZyb3plblN0b3JlID0gZnVuY3Rpb24odGhhdCl7XG4gIHJldHVybiB0aGF0Ll9sIHx8ICh0aGF0Ll9sID0gbmV3IEZyb3plblN0b3JlKTtcbn07XG52YXIgRnJvemVuU3RvcmUgPSBmdW5jdGlvbigpe1xuICB0aGlzLmEgPSBbXTtcbn07XG52YXIgZmluZEZyb3plbiA9IGZ1bmN0aW9uKHN0b3JlLCBrZXkpe1xuICByZXR1cm4gYXJyYXlGaW5kKHN0b3JlLmEsIGZ1bmN0aW9uKGl0KXtcbiAgICByZXR1cm4gaXRbMF0gPT09IGtleTtcbiAgfSk7XG59O1xuRnJvemVuU3RvcmUucHJvdG90eXBlID0ge1xuICBnZXQ6IGZ1bmN0aW9uKGtleSl7XG4gICAgdmFyIGVudHJ5ID0gZmluZEZyb3plbih0aGlzLCBrZXkpO1xuICAgIGlmKGVudHJ5KXJldHVybiBlbnRyeVsxXTtcbiAgfSxcbiAgaGFzOiBmdW5jdGlvbihrZXkpe1xuICAgIHJldHVybiAhIWZpbmRGcm96ZW4odGhpcywga2V5KTtcbiAgfSxcbiAgc2V0OiBmdW5jdGlvbihrZXksIHZhbHVlKXtcbiAgICB2YXIgZW50cnkgPSBmaW5kRnJvemVuKHRoaXMsIGtleSk7XG4gICAgaWYoZW50cnkpZW50cnlbMV0gPSB2YWx1ZTtcbiAgICBlbHNlIHRoaXMuYS5wdXNoKFtrZXksIHZhbHVlXSk7XG4gIH0sXG4gICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xuICAgIHZhciBpbmRleCA9IGFycmF5RmluZEluZGV4KHRoaXMuYSwgZnVuY3Rpb24oaXQpe1xuICAgICAgcmV0dXJuIGl0WzBdID09PSBrZXk7XG4gICAgfSk7XG4gICAgaWYofmluZGV4KXRoaXMuYS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIHJldHVybiAhIX5pbmRleDtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGdldENvbnN0cnVjdG9yOiBmdW5jdGlvbih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKXtcbiAgICB2YXIgQyA9IHdyYXBwZXIoZnVuY3Rpb24odGhhdCwgaXRlcmFibGUpe1xuICAgICAgc3RyaWN0TmV3KHRoYXQsIEMsIE5BTUUpO1xuICAgICAgdGhhdC5faSA9IGlkKys7ICAgICAgLy8gY29sbGVjdGlvbiBpZFxuICAgICAgdGhhdC5fbCA9IHVuZGVmaW5lZDsgLy8gbGVhayBzdG9yZSBmb3IgZnJvemVuIG9iamVjdHNcbiAgICAgIGlmKGl0ZXJhYmxlICE9IHVuZGVmaW5lZClmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjMuMy4yIFdlYWtNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy40LjMuMyBXZWFrU2V0LnByb3RvdHlwZS5kZWxldGUodmFsdWUpXG4gICAgICAnZGVsZXRlJzogZnVuY3Rpb24oa2V5KXtcbiAgICAgICAgaWYoIWlzT2JqZWN0KGtleSkpcmV0dXJuIGZhbHNlO1xuICAgICAgICBpZighaXNFeHRlbnNpYmxlKGtleSkpcmV0dXJuIGZyb3plblN0b3JlKHRoaXMpWydkZWxldGUnXShrZXkpO1xuICAgICAgICByZXR1cm4gJGhhcyhrZXksIFdFQUspICYmICRoYXMoa2V5W1dFQUtdLCB0aGlzLl9pKSAmJiBkZWxldGUga2V5W1dFQUtdW3RoaXMuX2ldO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjMuMy40IFdlYWtNYXAucHJvdG90eXBlLmhhcyhrZXkpXG4gICAgICAvLyAyMy40LjMuNCBXZWFrU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpe1xuICAgICAgICBpZighaXNPYmplY3Qoa2V5KSlyZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmKCFpc0V4dGVuc2libGUoa2V5KSlyZXR1cm4gZnJvemVuU3RvcmUodGhpcykuaGFzKGtleSk7XG4gICAgICAgIHJldHVybiAkaGFzKGtleSwgV0VBSykgJiYgJGhhcyhrZXlbV0VBS10sIHRoaXMuX2kpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uKHRoYXQsIGtleSwgdmFsdWUpe1xuICAgIGlmKCFpc0V4dGVuc2libGUoYW5PYmplY3Qoa2V5KSkpe1xuICAgICAgZnJvemVuU3RvcmUodGhhdCkuc2V0KGtleSwgdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAkaGFzKGtleSwgV0VBSykgfHwgaGlkZShrZXksIFdFQUssIHt9KTtcbiAgICAgIGtleVtXRUFLXVt0aGF0Ll9pXSA9IHZhbHVlO1xuICAgIH0gcmV0dXJuIHRoYXQ7XG4gIH0sXG4gIGZyb3plblN0b3JlOiBmcm96ZW5TdG9yZSxcbiAgV0VBSzogV0VBS1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmNvbGxlY3Rpb24td2Vhay5qc1xuICoqIG1vZHVsZSBpZCA9IDE1MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHdlYWsgPSByZXF1aXJlKCcuLyQuY29sbGVjdGlvbi13ZWFrJyk7XG5cbi8vIDIzLjQgV2Vha1NldCBPYmplY3RzXG5yZXF1aXJlKCcuLyQuY29sbGVjdGlvbicpKCdXZWFrU2V0JywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFdlYWtTZXQoKXsgcmV0dXJuIGdldCh0aGlzLCBhcmd1bWVudHMubGVuZ3RoID4gMCA/IGFyZ3VtZW50c1swXSA6IHVuZGVmaW5lZCk7IH07XG59LCB7XG4gIC8vIDIzLjQuMy4xIFdlYWtTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcbiAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpe1xuICAgIHJldHVybiB3ZWFrLmRlZih0aGlzLCB2YWx1ZSwgdHJ1ZSk7XG4gIH1cbn0sIHdlYWssIGZhbHNlLCB0cnVlKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYud2Vhay1zZXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDI2LjEuMSBSZWZsZWN0LmFwcGx5KHRhcmdldCwgdGhpc0FyZ3VtZW50LCBhcmd1bWVudHNMaXN0KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBfYXBwbHkgID0gRnVuY3Rpb24uYXBwbHk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgYXBwbHk6IGZ1bmN0aW9uIGFwcGx5KHRhcmdldCwgdGhpc0FyZ3VtZW50LCBhcmd1bWVudHNMaXN0KXtcbiAgICByZXR1cm4gX2FwcGx5LmNhbGwodGFyZ2V0LCB0aGlzQXJndW1lbnQsIGFyZ3VtZW50c0xpc3QpO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5hcHBseS5qc1xuICoqIG1vZHVsZSBpZCA9IDE1MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjYuMS4yIFJlZmxlY3QuY29uc3RydWN0KHRhcmdldCwgYXJndW1lbnRzTGlzdCBbLCBuZXdUYXJnZXRdKVxudmFyICQgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKVxuICAsIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIGlzT2JqZWN0ICA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGJpbmQgICAgICA9IEZ1bmN0aW9uLmJpbmQgfHwgcmVxdWlyZSgnLi8kLmNvcmUnKS5GdW5jdGlvbi5wcm90b3R5cGUuYmluZDtcblxuLy8gTVMgRWRnZSBzdXBwb3J0cyBvbmx5IDIgYXJndW1lbnRzXG4vLyBGRiBOaWdodGx5IHNldHMgdGhpcmQgYXJndW1lbnQgYXMgYG5ldy50YXJnZXRgLCBidXQgZG9lcyBub3QgY3JlYXRlIGB0aGlzYCBmcm9tIGl0XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vJC5mYWlscycpKGZ1bmN0aW9uKCl7XG4gIGZ1bmN0aW9uIEYoKXt9XG4gIHJldHVybiAhKFJlZmxlY3QuY29uc3RydWN0KGZ1bmN0aW9uKCl7fSwgW10sIEYpIGluc3RhbmNlb2YgRik7XG59KSwgJ1JlZmxlY3QnLCB7XG4gIGNvbnN0cnVjdDogZnVuY3Rpb24gY29uc3RydWN0KFRhcmdldCwgYXJncyAvKiwgbmV3VGFyZ2V0Ki8pe1xuICAgIGFGdW5jdGlvbihUYXJnZXQpO1xuICAgIHZhciBuZXdUYXJnZXQgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IFRhcmdldCA6IGFGdW5jdGlvbihhcmd1bWVudHNbMl0pO1xuICAgIGlmKFRhcmdldCA9PSBuZXdUYXJnZXQpe1xuICAgICAgLy8gdy9vIGFsdGVyZWQgbmV3VGFyZ2V0LCBvcHRpbWl6YXRpb24gZm9yIDAtNCBhcmd1bWVudHNcbiAgICAgIGlmKGFyZ3MgIT0gdW5kZWZpbmVkKXN3aXRjaChhbk9iamVjdChhcmdzKS5sZW5ndGgpe1xuICAgICAgICBjYXNlIDA6IHJldHVybiBuZXcgVGFyZ2V0O1xuICAgICAgICBjYXNlIDE6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0pO1xuICAgICAgICBjYXNlIDI6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgICAgICBjYXNlIDM6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgICAgICBjYXNlIDQ6IHJldHVybiBuZXcgVGFyZ2V0KGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICAgICAgfVxuICAgICAgLy8gdy9vIGFsdGVyZWQgbmV3VGFyZ2V0LCBsb3Qgb2YgYXJndW1lbnRzIGNhc2VcbiAgICAgIHZhciAkYXJncyA9IFtudWxsXTtcbiAgICAgICRhcmdzLnB1c2guYXBwbHkoJGFyZ3MsIGFyZ3MpO1xuICAgICAgcmV0dXJuIG5ldyAoYmluZC5hcHBseShUYXJnZXQsICRhcmdzKSk7XG4gICAgfVxuICAgIC8vIHdpdGggYWx0ZXJlZCBuZXdUYXJnZXQsIG5vdCBzdXBwb3J0IGJ1aWx0LWluIGNvbnN0cnVjdG9yc1xuICAgIHZhciBwcm90byAgICA9IG5ld1RhcmdldC5wcm90b3R5cGVcbiAgICAgICwgaW5zdGFuY2UgPSAkLmNyZWF0ZShpc09iamVjdChwcm90bykgPyBwcm90byA6IE9iamVjdC5wcm90b3R5cGUpXG4gICAgICAsIHJlc3VsdCAgID0gRnVuY3Rpb24uYXBwbHkuY2FsbChUYXJnZXQsIGluc3RhbmNlLCBhcmdzKTtcbiAgICByZXR1cm4gaXNPYmplY3QocmVzdWx0KSA/IHJlc3VsdCA6IGluc3RhbmNlO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5jb25zdHJ1Y3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxNTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDI2LjEuMyBSZWZsZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIGF0dHJpYnV0ZXMpXG52YXIgJCAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsICRleHBvcnQgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0Jyk7XG5cbi8vIE1TIEVkZ2UgaGFzIGJyb2tlbiBSZWZsZWN0LmRlZmluZVByb3BlcnR5IC0gdGhyb3dpbmcgaW5zdGVhZCBvZiByZXR1cm5pbmcgZmFsc2VcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKXtcbiAgUmVmbGVjdC5kZWZpbmVQcm9wZXJ0eSgkLnNldERlc2Moe30sIDEsIHt2YWx1ZTogMX0pLCAxLCB7dmFsdWU6IDJ9KTtcbn0pLCAnUmVmbGVjdCcsIHtcbiAgZGVmaW5lUHJvcGVydHk6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXksIGF0dHJpYnV0ZXMpe1xuICAgIGFuT2JqZWN0KHRhcmdldCk7XG4gICAgdHJ5IHtcbiAgICAgICQuc2V0RGVzYyh0YXJnZXQsIHByb3BlcnR5S2V5LCBhdHRyaWJ1dGVzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWZpbmUtcHJvcGVydHkuanNcbiAqKiBtb2R1bGUgaWQgPSAxNTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDI2LjEuNCBSZWZsZWN0LmRlbGV0ZVByb3BlcnR5KHRhcmdldCwgcHJvcGVydHlLZXkpXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBnZXREZXNjICA9IHJlcXVpcmUoJy4vJCcpLmdldERlc2NcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBkZWxldGVQcm9wZXJ0eTogZnVuY3Rpb24gZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSl7XG4gICAgdmFyIGRlc2MgPSBnZXREZXNjKGFuT2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KTtcbiAgICByZXR1cm4gZGVzYyAmJiAhZGVzYy5jb25maWd1cmFibGUgPyBmYWxzZSA6IGRlbGV0ZSB0YXJnZXRbcHJvcGVydHlLZXldO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5kZWxldGUtcHJvcGVydHkuanNcbiAqKiBtb2R1bGUgaWQgPSAxNTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIDI2LjEuNSBSZWZsZWN0LmVudW1lcmF0ZSh0YXJnZXQpXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcbnZhciBFbnVtZXJhdGUgPSBmdW5jdGlvbihpdGVyYXRlZCl7XG4gIHRoaXMuX3QgPSBhbk9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHZhciBrZXlzID0gdGhpcy5fayA9IFtdICAgICAgIC8vIGtleXNcbiAgICAsIGtleTtcbiAgZm9yKGtleSBpbiBpdGVyYXRlZClrZXlzLnB1c2goa2V5KTtcbn07XG5yZXF1aXJlKCcuLyQuaXRlci1jcmVhdGUnKShFbnVtZXJhdGUsICdPYmplY3QnLCBmdW5jdGlvbigpe1xuICB2YXIgdGhhdCA9IHRoaXNcbiAgICAsIGtleXMgPSB0aGF0Ll9rXG4gICAgLCBrZXk7XG4gIGRvIHtcbiAgICBpZih0aGF0Ll9pID49IGtleXMubGVuZ3RoKXJldHVybiB7dmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZX07XG4gIH0gd2hpbGUoISgoa2V5ID0ga2V5c1t0aGF0Ll9pKytdKSBpbiB0aGF0Ll90KSk7XG4gIHJldHVybiB7dmFsdWU6IGtleSwgZG9uZTogZmFsc2V9O1xufSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgZW51bWVyYXRlOiBmdW5jdGlvbiBlbnVtZXJhdGUodGFyZ2V0KXtcbiAgICByZXR1cm4gbmV3IEVudW1lcmF0ZSh0YXJnZXQpO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5lbnVtZXJhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDI2LjEuNiBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3BlcnR5S2V5IFssIHJlY2VpdmVyXSlcbnZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgaGFzICAgICAgPSByZXF1aXJlKCcuLyQuaGFzJylcbiAgLCAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0Jyk7XG5cbmZ1bmN0aW9uIGdldCh0YXJnZXQsIHByb3BlcnR5S2V5LyosIHJlY2VpdmVyKi8pe1xuICB2YXIgcmVjZWl2ZXIgPSBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHRhcmdldCA6IGFyZ3VtZW50c1syXVxuICAgICwgZGVzYywgcHJvdG87XG4gIGlmKGFuT2JqZWN0KHRhcmdldCkgPT09IHJlY2VpdmVyKXJldHVybiB0YXJnZXRbcHJvcGVydHlLZXldO1xuICBpZihkZXNjID0gJC5nZXREZXNjKHRhcmdldCwgcHJvcGVydHlLZXkpKXJldHVybiBoYXMoZGVzYywgJ3ZhbHVlJylcbiAgICA/IGRlc2MudmFsdWVcbiAgICA6IGRlc2MuZ2V0ICE9PSB1bmRlZmluZWRcbiAgICAgID8gZGVzYy5nZXQuY2FsbChyZWNlaXZlcilcbiAgICAgIDogdW5kZWZpbmVkO1xuICBpZihpc09iamVjdChwcm90byA9ICQuZ2V0UHJvdG8odGFyZ2V0KSkpcmV0dXJuIGdldChwcm90bywgcHJvcGVydHlLZXksIHJlY2VpdmVyKTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge2dldDogZ2V0fSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LmpzXG4gKiogbW9kdWxlIGlkID0gMTU3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyNi4xLjcgUmVmbGVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBwcm9wZXJ0eUtleSlcbnZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgJGV4cG9ydCAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5S2V5KXtcbiAgICByZXR1cm4gJC5nZXREZXNjKGFuT2JqZWN0KHRhcmdldCksIHByb3BlcnR5S2V5KTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTU4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyNi4xLjggUmVmbGVjdC5nZXRQcm90b3R5cGVPZih0YXJnZXQpXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBnZXRQcm90byA9IHJlcXVpcmUoJy4vJCcpLmdldFByb3RvXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgZ2V0UHJvdG90eXBlT2Y6IGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKHRhcmdldCl7XG4gICAgcmV0dXJuIGdldFByb3RvKGFuT2JqZWN0KHRhcmdldCkpO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtcHJvdG90eXBlLW9mLmpzXG4gKiogbW9kdWxlIGlkID0gMTU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyNi4xLjkgUmVmbGVjdC5oYXModGFyZ2V0LCBwcm9wZXJ0eUtleSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGhhczogZnVuY3Rpb24gaGFzKHRhcmdldCwgcHJvcGVydHlLZXkpe1xuICAgIHJldHVybiBwcm9wZXJ0eUtleSBpbiB0YXJnZXQ7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0Lmhhcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE2MFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjYuMS4xMCBSZWZsZWN0LmlzRXh0ZW5zaWJsZSh0YXJnZXQpXG52YXIgJGV4cG9ydCAgICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGFuT2JqZWN0ICAgICAgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCAkaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBpc0V4dGVuc2libGU6IGZ1bmN0aW9uIGlzRXh0ZW5zaWJsZSh0YXJnZXQpe1xuICAgIGFuT2JqZWN0KHRhcmdldCk7XG4gICAgcmV0dXJuICRpc0V4dGVuc2libGUgPyAkaXNFeHRlbnNpYmxlKHRhcmdldCkgOiB0cnVlO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5pcy1leHRlbnNpYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gMTYxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyNi4xLjExIFJlZmxlY3Qub3duS2V5cyh0YXJnZXQpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge293bktleXM6IHJlcXVpcmUoJy4vJC5vd24ta2V5cycpfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Qub3duLWtleXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGFsbCBvYmplY3Qga2V5cywgaW5jbHVkZXMgbm9uLWVudW1lcmFibGUgYW5kIHN5bWJvbHNcbnZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCBSZWZsZWN0ICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKS5SZWZsZWN0O1xubW9kdWxlLmV4cG9ydHMgPSBSZWZsZWN0ICYmIFJlZmxlY3Qub3duS2V5cyB8fCBmdW5jdGlvbiBvd25LZXlzKGl0KXtcbiAgdmFyIGtleXMgICAgICAgPSAkLmdldE5hbWVzKGFuT2JqZWN0KGl0KSlcbiAgICAsIGdldFN5bWJvbHMgPSAkLmdldFN5bWJvbHM7XG4gIHJldHVybiBnZXRTeW1ib2xzID8ga2V5cy5jb25jYXQoZ2V0U3ltYm9scyhpdCkpIDoga2V5cztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5vd24ta2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDE2M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjYuMS4xMiBSZWZsZWN0LnByZXZlbnRFeHRlbnNpb25zKHRhcmdldClcbnZhciAkZXhwb3J0ICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBhbk9iamVjdCAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCAkcHJldmVudEV4dGVuc2lvbnMgPSBPYmplY3QucHJldmVudEV4dGVuc2lvbnM7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgcHJldmVudEV4dGVuc2lvbnM6IGZ1bmN0aW9uIHByZXZlbnRFeHRlbnNpb25zKHRhcmdldCl7XG4gICAgYW5PYmplY3QodGFyZ2V0KTtcbiAgICB0cnkge1xuICAgICAgaWYoJHByZXZlbnRFeHRlbnNpb25zKSRwcmV2ZW50RXh0ZW5zaW9ucyh0YXJnZXQpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LnByZXZlbnQtZXh0ZW5zaW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDE2NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjYuMS4xMyBSZWZsZWN0LnNldCh0YXJnZXQsIHByb3BlcnR5S2V5LCBWIFssIHJlY2VpdmVyXSlcbnZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBoYXMgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgJGV4cG9ydCAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpXG4gICwgYW5PYmplY3QgICA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIGlzT2JqZWN0ICAgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5cbmZ1bmN0aW9uIHNldCh0YXJnZXQsIHByb3BlcnR5S2V5LCBWLyosIHJlY2VpdmVyKi8pe1xuICB2YXIgcmVjZWl2ZXIgPSBhcmd1bWVudHMubGVuZ3RoIDwgNCA/IHRhcmdldCA6IGFyZ3VtZW50c1szXVxuICAgICwgb3duRGVzYyAgPSAkLmdldERlc2MoYW5PYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpXG4gICAgLCBleGlzdGluZ0Rlc2NyaXB0b3IsIHByb3RvO1xuICBpZighb3duRGVzYyl7XG4gICAgaWYoaXNPYmplY3QocHJvdG8gPSAkLmdldFByb3RvKHRhcmdldCkpKXtcbiAgICAgIHJldHVybiBzZXQocHJvdG8sIHByb3BlcnR5S2V5LCBWLCByZWNlaXZlcik7XG4gICAgfVxuICAgIG93bkRlc2MgPSBjcmVhdGVEZXNjKDApO1xuICB9XG4gIGlmKGhhcyhvd25EZXNjLCAndmFsdWUnKSl7XG4gICAgaWYob3duRGVzYy53cml0YWJsZSA9PT0gZmFsc2UgfHwgIWlzT2JqZWN0KHJlY2VpdmVyKSlyZXR1cm4gZmFsc2U7XG4gICAgZXhpc3RpbmdEZXNjcmlwdG9yID0gJC5nZXREZXNjKHJlY2VpdmVyLCBwcm9wZXJ0eUtleSkgfHwgY3JlYXRlRGVzYygwKTtcbiAgICBleGlzdGluZ0Rlc2NyaXB0b3IudmFsdWUgPSBWO1xuICAgICQuc2V0RGVzYyhyZWNlaXZlciwgcHJvcGVydHlLZXksIGV4aXN0aW5nRGVzY3JpcHRvcik7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIG93bkRlc2Muc2V0ID09PSB1bmRlZmluZWQgPyBmYWxzZSA6IChvd25EZXNjLnNldC5jYWxsKHJlY2VpdmVyLCBWKSwgdHJ1ZSk7XG59XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtzZXQ6IHNldH0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldC5qc1xuICoqIG1vZHVsZSBpZCA9IDE2NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjYuMS4xNCBSZWZsZWN0LnNldFByb3RvdHlwZU9mKHRhcmdldCwgcHJvdG8pXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBzZXRQcm90byA9IHJlcXVpcmUoJy4vJC5zZXQtcHJvdG8nKTtcblxuaWYoc2V0UHJvdG8pJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBzZXRQcm90b3R5cGVPZjogZnVuY3Rpb24gc2V0UHJvdG90eXBlT2YodGFyZ2V0LCBwcm90byl7XG4gICAgc2V0UHJvdG8uY2hlY2sodGFyZ2V0LCBwcm90byk7XG4gICAgdHJ5IHtcbiAgICAgIHNldFByb3RvLnNldCh0YXJnZXQsIHByb3RvKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gY2F0Y2goZSl7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXG4gKiogbW9kdWxlIGlkID0gMTY2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgJGluY2x1ZGVzID0gcmVxdWlyZSgnLi8kLmFycmF5LWluY2x1ZGVzJykodHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnQXJyYXknLCB7XG4gIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9kb21lbmljL0FycmF5LnByb3RvdHlwZS5pbmNsdWRlc1xuICBpbmNsdWRlczogZnVuY3Rpb24gaW5jbHVkZXMoZWwgLyosIGZyb21JbmRleCA9IDAgKi8pe1xuICAgIHJldHVybiAkaW5jbHVkZXModGhpcywgZWwsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5cbnJlcXVpcmUoJy4vJC5hZGQtdG8tdW5zY29wYWJsZXMnKSgnaW5jbHVkZXMnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcuYXJyYXkuaW5jbHVkZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXRoaWFzYnluZW5zL1N0cmluZy5wcm90b3R5cGUuYXRcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgJGF0ICAgICA9IHJlcXVpcmUoJy4vJC5zdHJpbmctYXQnKSh0cnVlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIGF0OiBmdW5jdGlvbiBhdChwb3Mpe1xuICAgIHJldHVybiAkYXQodGhpcywgcG9zKTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy5hdC5qc1xuICoqIG1vZHVsZSBpZCA9IDE2OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCAkcGFkICAgID0gcmVxdWlyZSgnLi8kLnN0cmluZy1wYWQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdTdHJpbmcnLCB7XG4gIHBhZExlZnQ6IGZ1bmN0aW9uIHBhZExlZnQobWF4TGVuZ3RoIC8qLCBmaWxsU3RyaW5nID0gJyAnICovKXtcbiAgICByZXR1cm4gJHBhZCh0aGlzLCBtYXhMZW5ndGgsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCB0cnVlKTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy5wYWQtbGVmdC5qc1xuICoqIG1vZHVsZSBpZCA9IDE2OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL2xqaGFyYi9wcm9wb3NhbC1zdHJpbmctcGFkLWxlZnQtcmlnaHRcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vJC50by1sZW5ndGgnKVxuICAsIHJlcGVhdCAgID0gcmVxdWlyZSgnLi8kLnN0cmluZy1yZXBlYXQnKVxuICAsIGRlZmluZWQgID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0aGF0LCBtYXhMZW5ndGgsIGZpbGxTdHJpbmcsIGxlZnQpe1xuICB2YXIgUyAgICAgICAgICAgID0gU3RyaW5nKGRlZmluZWQodGhhdCkpXG4gICAgLCBzdHJpbmdMZW5ndGggPSBTLmxlbmd0aFxuICAgICwgZmlsbFN0ciAgICAgID0gZmlsbFN0cmluZyA9PT0gdW5kZWZpbmVkID8gJyAnIDogU3RyaW5nKGZpbGxTdHJpbmcpXG4gICAgLCBpbnRNYXhMZW5ndGggPSB0b0xlbmd0aChtYXhMZW5ndGgpO1xuICBpZihpbnRNYXhMZW5ndGggPD0gc3RyaW5nTGVuZ3RoKXJldHVybiBTO1xuICBpZihmaWxsU3RyID09ICcnKWZpbGxTdHIgPSAnICc7XG4gIHZhciBmaWxsTGVuID0gaW50TWF4TGVuZ3RoIC0gc3RyaW5nTGVuZ3RoXG4gICAgLCBzdHJpbmdGaWxsZXIgPSByZXBlYXQuY2FsbChmaWxsU3RyLCBNYXRoLmNlaWwoZmlsbExlbiAvIGZpbGxTdHIubGVuZ3RoKSk7XG4gIGlmKHN0cmluZ0ZpbGxlci5sZW5ndGggPiBmaWxsTGVuKXN0cmluZ0ZpbGxlciA9IHN0cmluZ0ZpbGxlci5zbGljZSgwLCBmaWxsTGVuKTtcbiAgcmV0dXJuIGxlZnQgPyBzdHJpbmdGaWxsZXIgKyBTIDogUyArIHN0cmluZ0ZpbGxlcjtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zdHJpbmctcGFkLmpzXG4gKiogbW9kdWxlIGlkID0gMTcwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsICRwYWQgICAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLXBhZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcbiAgcGFkUmlnaHQ6IGZ1bmN0aW9uIHBhZFJpZ2h0KG1heExlbmd0aCAvKiwgZmlsbFN0cmluZyA9ICcgJyAqLyl7XG4gICAgcmV0dXJuICRwYWQodGhpcywgbWF4TGVuZ3RoLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCwgZmFsc2UpO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnBhZC1yaWdodC5qc1xuICoqIG1vZHVsZSBpZCA9IDE3MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NlYm1hcmtiYWdlL2VjbWFzY3JpcHQtc3RyaW5nLWxlZnQtcmlnaHQtdHJpbVxucmVxdWlyZSgnLi8kLnN0cmluZy10cmltJykoJ3RyaW1MZWZ0JywgZnVuY3Rpb24oJHRyaW0pe1xuICByZXR1cm4gZnVuY3Rpb24gdHJpbUxlZnQoKXtcbiAgICByZXR1cm4gJHRyaW0odGhpcywgMSk7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnRyaW0tbGVmdC5qc1xuICoqIG1vZHVsZSBpZCA9IDE3MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3NlYm1hcmtiYWdlL2VjbWFzY3JpcHQtc3RyaW5nLWxlZnQtcmlnaHQtdHJpbVxucmVxdWlyZSgnLi8kLnN0cmluZy10cmltJykoJ3RyaW1SaWdodCcsIGZ1bmN0aW9uKCR0cmltKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRyaW1SaWdodCgpe1xuICAgIHJldHVybiAkdHJpbSh0aGlzLCAyKTtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcudHJpbS1yaWdodC5qc1xuICoqIG1vZHVsZSBpZCA9IDE3M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL2JlbmphbWluZ3IvUmV4RXhwLmVzY2FwZVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCAkcmUgICAgID0gcmVxdWlyZSgnLi8kLnJlcGxhY2VyJykoL1tcXFxcXiQqKz8uKCl8W1xcXXt9XS9nLCAnXFxcXCQmJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVnRXhwJywge2VzY2FwZTogZnVuY3Rpb24gZXNjYXBlKGl0KXsgcmV0dXJuICRyZShpdCk7IH19KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5yZWdleHAuZXNjYXBlLmpzXG4gKiogbW9kdWxlIGlkID0gMTc0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHJlZ0V4cCwgcmVwbGFjZSl7XG4gIHZhciByZXBsYWNlciA9IHJlcGxhY2UgPT09IE9iamVjdChyZXBsYWNlKSA/IGZ1bmN0aW9uKHBhcnQpe1xuICAgIHJldHVybiByZXBsYWNlW3BhcnRdO1xuICB9IDogcmVwbGFjZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKGl0KXtcbiAgICByZXR1cm4gU3RyaW5nKGl0KS5yZXBsYWNlKHJlZ0V4cCwgcmVwbGFjZXIpO1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnJlcGxhY2VyLmpzXG4gKiogbW9kdWxlIGlkID0gMTc1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBodHRwczovL2dpc3QuZ2l0aHViLmNvbS9XZWJSZWZsZWN0aW9uLzkzNTM3ODFcbnZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCAkZXhwb3J0ICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgb3duS2V5cyAgICA9IHJlcXVpcmUoJy4vJC5vd24ta2V5cycpXG4gICwgdG9JT2JqZWN0ICA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0JylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnM6IGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcnMob2JqZWN0KXtcbiAgICB2YXIgTyAgICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgICAsIHNldERlc2MgPSAkLnNldERlc2NcbiAgICAgICwgZ2V0RGVzYyA9ICQuZ2V0RGVzY1xuICAgICAgLCBrZXlzICAgID0gb3duS2V5cyhPKVxuICAgICAgLCByZXN1bHQgID0ge31cbiAgICAgICwgaSAgICAgICA9IDBcbiAgICAgICwga2V5LCBEO1xuICAgIHdoaWxlKGtleXMubGVuZ3RoID4gaSl7XG4gICAgICBEID0gZ2V0RGVzYyhPLCBrZXkgPSBrZXlzW2krK10pO1xuICAgICAgaWYoa2V5IGluIHJlc3VsdClzZXREZXNjKHJlc3VsdCwga2V5LCBjcmVhdGVEZXNjKDAsIEQpKTtcbiAgICAgIGVsc2UgcmVzdWx0W2tleV0gPSBEO1xuICAgIH0gcmV0dXJuIHJlc3VsdDtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzXG4gKiogbW9kdWxlIGlkID0gMTc2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBodHRwOi8vZ29vLmdsL1hrQnJqRFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCAkdmFsdWVzID0gcmVxdWlyZSgnLi8kLm9iamVjdC10by1hcnJheScpKGZhbHNlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKGl0KXtcbiAgICByZXR1cm4gJHZhbHVlcyhpdCk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QudmFsdWVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTc3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJCAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpXG4gICwgaXNFbnVtICAgID0gJC5pc0VudW07XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGlzRW50cmllcyl7XG4gIHJldHVybiBmdW5jdGlvbihpdCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdChpdClcbiAgICAgICwga2V5cyAgID0gJC5nZXRLZXlzKE8pXG4gICAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgICAsIGkgICAgICA9IDBcbiAgICAgICwgcmVzdWx0ID0gW11cbiAgICAgICwga2V5O1xuICAgIHdoaWxlKGxlbmd0aCA+IGkpaWYoaXNFbnVtLmNhbGwoTywga2V5ID0ga2V5c1tpKytdKSl7XG4gICAgICByZXN1bHQucHVzaChpc0VudHJpZXMgPyBba2V5LCBPW2tleV1dIDogT1trZXldKTtcbiAgICB9IHJldHVybiByZXN1bHQ7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQub2JqZWN0LXRvLWFycmF5LmpzXG4gKiogbW9kdWxlIGlkID0gMTc4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBodHRwOi8vZ29vLmdsL1hrQnJqRFxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgJGVudHJpZXMgPSByZXF1aXJlKCcuLyQub2JqZWN0LXRvLWFycmF5JykodHJ1ZSk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge1xuICBlbnRyaWVzOiBmdW5jdGlvbiBlbnRyaWVzKGl0KXtcbiAgICByZXR1cm4gJGVudHJpZXMoaXQpO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LmVudHJpZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNzlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdNYXAnLCB7dG9KU09OOiByZXF1aXJlKCcuLyQuY29sbGVjdGlvbi10by1qc29uJykoJ01hcCcpfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm1hcC50by1qc29uLmpzXG4gKiogbW9kdWxlIGlkID0gMTgwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vRGF2aWRCcnVhbnQvTWFwLVNldC5wcm90b3R5cGUudG9KU09OXG52YXIgZm9yT2YgICA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxuICAsIGNsYXNzb2YgPSByZXF1aXJlKCcuLyQuY2xhc3NvZicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihOQU1FKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRvSlNPTigpe1xuICAgIGlmKGNsYXNzb2YodGhpcykgIT0gTkFNRSl0aHJvdyBUeXBlRXJyb3IoTkFNRSArIFwiI3RvSlNPTiBpc24ndCBnZW5lcmljXCIpO1xuICAgIHZhciBhcnIgPSBbXTtcbiAgICBmb3JPZih0aGlzLCBmYWxzZSwgYXJyLnB1c2gsIGFycik7XG4gICAgcmV0dXJuIGFycjtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5jb2xsZWN0aW9uLXRvLWpzb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxODFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdTZXQnLCB7dG9KU09OOiByZXF1aXJlKCcuLyQuY29sbGVjdGlvbi10by1qc29uJykoJ1NldCcpfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnNldC50by1qc29uLmpzXG4gKiogbW9kdWxlIGlkID0gMTgyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBKYXZhU2NyaXB0IDEuNiAvIFN0cmF3bWFuIGFycmF5IHN0YXRpY3Mgc2hpbVxudmFyICQgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCAkY3R4ICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgJEFycmF5ICA9IHJlcXVpcmUoJy4vJC5jb3JlJykuQXJyYXkgfHwgQXJyYXlcbiAgLCBzdGF0aWNzID0ge307XG52YXIgc2V0U3RhdGljcyA9IGZ1bmN0aW9uKGtleXMsIGxlbmd0aCl7XG4gICQuZWFjaC5jYWxsKGtleXMuc3BsaXQoJywnKSwgZnVuY3Rpb24oa2V5KXtcbiAgICBpZihsZW5ndGggPT0gdW5kZWZpbmVkICYmIGtleSBpbiAkQXJyYXkpc3RhdGljc1trZXldID0gJEFycmF5W2tleV07XG4gICAgZWxzZSBpZihrZXkgaW4gW10pc3RhdGljc1trZXldID0gJGN0eChGdW5jdGlvbi5jYWxsLCBbXVtrZXldLCBsZW5ndGgpO1xuICB9KTtcbn07XG5zZXRTdGF0aWNzKCdwb3AscmV2ZXJzZSxzaGlmdCxrZXlzLHZhbHVlcyxlbnRyaWVzJywgMSk7XG5zZXRTdGF0aWNzKCdpbmRleE9mLGV2ZXJ5LHNvbWUsZm9yRWFjaCxtYXAsZmlsdGVyLGZpbmQsZmluZEluZGV4LGluY2x1ZGVzJywgMyk7XG5zZXRTdGF0aWNzKCdqb2luLHNsaWNlLGNvbmNhdCxwdXNoLHNwbGljZSx1bnNoaWZ0LHNvcnQsbGFzdEluZGV4T2YsJyArXG4gICAgICAgICAgICdyZWR1Y2UscmVkdWNlUmlnaHQsY29weVdpdGhpbixmaWxsJyk7XG4kZXhwb3J0KCRleHBvcnQuUywgJ0FycmF5Jywgc3RhdGljcyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvanMuYXJyYXkuc3RhdGljcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE4M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaWU5LSBzZXRUaW1lb3V0ICYgc2V0SW50ZXJ2YWwgYWRkaXRpb25hbCBwYXJhbWV0ZXJzIGZpeFxudmFyIGdsb2JhbCAgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCAkZXhwb3J0ICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgaW52b2tlICAgICA9IHJlcXVpcmUoJy4vJC5pbnZva2UnKVxuICAsIHBhcnRpYWwgICAgPSByZXF1aXJlKCcuLyQucGFydGlhbCcpXG4gICwgbmF2aWdhdG9yICA9IGdsb2JhbC5uYXZpZ2F0b3JcbiAgLCBNU0lFICAgICAgID0gISFuYXZpZ2F0b3IgJiYgL01TSUUgLlxcLi8udGVzdChuYXZpZ2F0b3IudXNlckFnZW50KTsgLy8gPC0gZGlydHkgaWU5LSBjaGVja1xudmFyIHdyYXAgPSBmdW5jdGlvbihzZXQpe1xuICByZXR1cm4gTVNJRSA/IGZ1bmN0aW9uKGZuLCB0aW1lIC8qLCAuLi5hcmdzICovKXtcbiAgICByZXR1cm4gc2V0KGludm9rZShcbiAgICAgIHBhcnRpYWwsXG4gICAgICBbXS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMiksXG4gICAgICB0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pXG4gICAgKSwgdGltZSk7XG4gIH0gOiBzZXQ7XG59O1xuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LkIgKyAkZXhwb3J0LkYgKiBNU0lFLCB7XG4gIHNldFRpbWVvdXQ6ICB3cmFwKGdsb2JhbC5zZXRUaW1lb3V0KSxcbiAgc2V0SW50ZXJ2YWw6IHdyYXAoZ2xvYmFsLnNldEludGVydmFsKVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvd2ViLnRpbWVycy5qc1xuICoqIG1vZHVsZSBpZCA9IDE4NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHBhdGggICAgICA9IHJlcXVpcmUoJy4vJC5wYXRoJylcbiAgLCBpbnZva2UgICAgPSByZXF1aXJlKCcuLyQuaW52b2tlJylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLyQuYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbigvKiAuLi5wYXJncyAqLyl7XG4gIHZhciBmbiAgICAgPSBhRnVuY3Rpb24odGhpcylcbiAgICAsIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGhcbiAgICAsIHBhcmdzICA9IEFycmF5KGxlbmd0aClcbiAgICAsIGkgICAgICA9IDBcbiAgICAsIF8gICAgICA9IHBhdGguX1xuICAgICwgaG9sZGVyID0gZmFsc2U7XG4gIHdoaWxlKGxlbmd0aCA+IGkpaWYoKHBhcmdzW2ldID0gYXJndW1lbnRzW2krK10pID09PSBfKWhvbGRlciA9IHRydWU7XG4gIHJldHVybiBmdW5jdGlvbigvKiAuLi5hcmdzICovKXtcbiAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAsICQkICAgID0gYXJndW1lbnRzXG4gICAgICAsICQkbGVuID0gJCQubGVuZ3RoXG4gICAgICAsIGogPSAwLCBrID0gMCwgYXJncztcbiAgICBpZighaG9sZGVyICYmICEkJGxlbilyZXR1cm4gaW52b2tlKGZuLCBwYXJncywgdGhhdCk7XG4gICAgYXJncyA9IHBhcmdzLnNsaWNlKCk7XG4gICAgaWYoaG9sZGVyKWZvcig7bGVuZ3RoID4gajsgaisrKWlmKGFyZ3Nbal0gPT09IF8pYXJnc1tqXSA9ICQkW2srK107XG4gICAgd2hpbGUoJCRsZW4gPiBrKWFyZ3MucHVzaCgkJFtrKytdKTtcbiAgICByZXR1cm4gaW52b2tlKGZuLCBhcmdzLCB0aGF0KTtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5wYXJ0aWFsLmpzXG4gKiogbW9kdWxlIGlkID0gMTg1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnBhdGguanNcbiAqKiBtb2R1bGUgaWQgPSAxODZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgJHRhc2sgICA9IHJlcXVpcmUoJy4vJC50YXNrJyk7XG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuQiwge1xuICBzZXRJbW1lZGlhdGU6ICAgJHRhc2suc2V0LFxuICBjbGVhckltbWVkaWF0ZTogJHRhc2suY2xlYXJcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL3dlYi5pbW1lZGlhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxODdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2xvYmFsICAgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBoaWRlICAgICAgICA9IHJlcXVpcmUoJy4vJC5oaWRlJylcbiAgLCBJdGVyYXRvcnMgICA9IHJlcXVpcmUoJy4vJC5pdGVyYXRvcnMnKVxuICAsIElURVJBVE9SICAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgTkwgICAgICAgICAgPSBnbG9iYWwuTm9kZUxpc3RcbiAgLCBIVEMgICAgICAgICA9IGdsb2JhbC5IVE1MQ29sbGVjdGlvblxuICAsIE5MUHJvdG8gICAgID0gTkwgJiYgTkwucHJvdG90eXBlXG4gICwgSFRDUHJvdG8gICAgPSBIVEMgJiYgSFRDLnByb3RvdHlwZVxuICAsIEFycmF5VmFsdWVzID0gSXRlcmF0b3JzLk5vZGVMaXN0ID0gSXRlcmF0b3JzLkhUTUxDb2xsZWN0aW9uID0gSXRlcmF0b3JzLkFycmF5O1xuaWYoTkxQcm90byAmJiAhTkxQcm90b1tJVEVSQVRPUl0paGlkZShOTFByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuaWYoSFRDUHJvdG8gJiYgIUhUQ1Byb3RvW0lURVJBVE9SXSloaWRlKEhUQ1Byb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxODhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8qKlxuICogQ29weXJpZ2h0IChjKSAyMDE0LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIGh0dHBzOi8vcmF3LmdpdGh1Yi5jb20vZmFjZWJvb2svcmVnZW5lcmF0b3IvbWFzdGVyL0xJQ0VOU0UgZmlsZS4gQW5cbiAqIGFkZGl0aW9uYWwgZ3JhbnQgb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpblxuICogdGhlIHNhbWUgZGlyZWN0b3J5LlxuICovXG5cbiEoZnVuY3Rpb24oZ2xvYmFsKSB7XG4gIFwidXNlIHN0cmljdFwiO1xuXG4gIHZhciBoYXNPd24gPSBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5O1xuICB2YXIgdW5kZWZpbmVkOyAvLyBNb3JlIGNvbXByZXNzaWJsZSB0aGFuIHZvaWQgMC5cbiAgdmFyIGl0ZXJhdG9yU3ltYm9sID1cbiAgICB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgU3ltYm9sLml0ZXJhdG9yIHx8IFwiQEBpdGVyYXRvclwiO1xuXG4gIHZhciBpbk1vZHVsZSA9IHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCI7XG4gIHZhciBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZTtcbiAgaWYgKHJ1bnRpbWUpIHtcbiAgICBpZiAoaW5Nb2R1bGUpIHtcbiAgICAgIC8vIElmIHJlZ2VuZXJhdG9yUnVudGltZSBpcyBkZWZpbmVkIGdsb2JhbGx5IGFuZCB3ZSdyZSBpbiBhIG1vZHVsZSxcbiAgICAgIC8vIG1ha2UgdGhlIGV4cG9ydHMgb2JqZWN0IGlkZW50aWNhbCB0byByZWdlbmVyYXRvclJ1bnRpbWUuXG4gICAgICBtb2R1bGUuZXhwb3J0cyA9IHJ1bnRpbWU7XG4gICAgfVxuICAgIC8vIERvbid0IGJvdGhlciBldmFsdWF0aW5nIHRoZSByZXN0IG9mIHRoaXMgZmlsZSBpZiB0aGUgcnVudGltZSB3YXNcbiAgICAvLyBhbHJlYWR5IGRlZmluZWQgZ2xvYmFsbHkuXG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gRGVmaW5lIHRoZSBydW50aW1lIGdsb2JhbGx5IChhcyBleHBlY3RlZCBieSBnZW5lcmF0ZWQgY29kZSkgYXMgZWl0aGVyXG4gIC8vIG1vZHVsZS5leHBvcnRzIChpZiB3ZSdyZSBpbiBhIG1vZHVsZSkgb3IgYSBuZXcsIGVtcHR5IG9iamVjdC5cbiAgcnVudGltZSA9IGdsb2JhbC5yZWdlbmVyYXRvclJ1bnRpbWUgPSBpbk1vZHVsZSA/IG1vZHVsZS5leHBvcnRzIDoge307XG5cbiAgZnVuY3Rpb24gd3JhcChpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIC8vIElmIG91dGVyRm4gcHJvdmlkZWQsIHRoZW4gb3V0ZXJGbi5wcm90b3R5cGUgaW5zdGFuY2VvZiBHZW5lcmF0b3IuXG4gICAgdmFyIGdlbmVyYXRvciA9IE9iamVjdC5jcmVhdGUoKG91dGVyRm4gfHwgR2VuZXJhdG9yKS5wcm90b3R5cGUpO1xuICAgIHZhciBjb250ZXh0ID0gbmV3IENvbnRleHQodHJ5TG9jc0xpc3QgfHwgW10pO1xuXG4gICAgLy8gVGhlIC5faW52b2tlIG1ldGhvZCB1bmlmaWVzIHRoZSBpbXBsZW1lbnRhdGlvbnMgb2YgdGhlIC5uZXh0LFxuICAgIC8vIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcy5cbiAgICBnZW5lcmF0b3IuX2ludm9rZSA9IG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG5cbiAgICByZXR1cm4gZ2VuZXJhdG9yO1xuICB9XG4gIHJ1bnRpbWUud3JhcCA9IHdyYXA7XG5cbiAgLy8gVHJ5L2NhdGNoIGhlbHBlciB0byBtaW5pbWl6ZSBkZW9wdGltaXphdGlvbnMuIFJldHVybnMgYSBjb21wbGV0aW9uXG4gIC8vIHJlY29yZCBsaWtlIGNvbnRleHQudHJ5RW50cmllc1tpXS5jb21wbGV0aW9uLiBUaGlzIGludGVyZmFjZSBjb3VsZFxuICAvLyBoYXZlIGJlZW4gKGFuZCB3YXMgcHJldmlvdXNseSkgZGVzaWduZWQgdG8gdGFrZSBhIGNsb3N1cmUgdG8gYmVcbiAgLy8gaW52b2tlZCB3aXRob3V0IGFyZ3VtZW50cywgYnV0IGluIGFsbCB0aGUgY2FzZXMgd2UgY2FyZSBhYm91dCB3ZVxuICAvLyBhbHJlYWR5IGhhdmUgYW4gZXhpc3RpbmcgbWV0aG9kIHdlIHdhbnQgdG8gY2FsbCwgc28gdGhlcmUncyBubyBuZWVkXG4gIC8vIHRvIGNyZWF0ZSBhIG5ldyBmdW5jdGlvbiBvYmplY3QuIFdlIGNhbiBldmVuIGdldCBhd2F5IHdpdGggYXNzdW1pbmdcbiAgLy8gdGhlIG1ldGhvZCB0YWtlcyBleGFjdGx5IG9uZSBhcmd1bWVudCwgc2luY2UgdGhhdCBoYXBwZW5zIHRvIGJlIHRydWVcbiAgLy8gaW4gZXZlcnkgY2FzZSwgc28gd2UgZG9uJ3QgaGF2ZSB0byB0b3VjaCB0aGUgYXJndW1lbnRzIG9iamVjdC4gVGhlXG4gIC8vIG9ubHkgYWRkaXRpb25hbCBhbGxvY2F0aW9uIHJlcXVpcmVkIGlzIHRoZSBjb21wbGV0aW9uIHJlY29yZCwgd2hpY2hcbiAgLy8gaGFzIGEgc3RhYmxlIHNoYXBlIGFuZCBzbyBob3BlZnVsbHkgc2hvdWxkIGJlIGNoZWFwIHRvIGFsbG9jYXRlLlxuICBmdW5jdGlvbiB0cnlDYXRjaChmbiwgb2JqLCBhcmcpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJub3JtYWxcIiwgYXJnOiBmbi5jYWxsKG9iaiwgYXJnKSB9O1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHsgdHlwZTogXCJ0aHJvd1wiLCBhcmc6IGVyciB9O1xuICAgIH1cbiAgfVxuXG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0ID0gXCJzdXNwZW5kZWRTdGFydFwiO1xuICB2YXIgR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCA9IFwic3VzcGVuZGVkWWllbGRcIjtcbiAgdmFyIEdlblN0YXRlRXhlY3V0aW5nID0gXCJleGVjdXRpbmdcIjtcbiAgdmFyIEdlblN0YXRlQ29tcGxldGVkID0gXCJjb21wbGV0ZWRcIjtcblxuICAvLyBSZXR1cm5pbmcgdGhpcyBvYmplY3QgZnJvbSB0aGUgaW5uZXJGbiBoYXMgdGhlIHNhbWUgZWZmZWN0IGFzXG4gIC8vIGJyZWFraW5nIG91dCBvZiB0aGUgZGlzcGF0Y2ggc3dpdGNoIHN0YXRlbWVudC5cbiAgdmFyIENvbnRpbnVlU2VudGluZWwgPSB7fTtcblxuICAvLyBEdW1teSBjb25zdHJ1Y3RvciBmdW5jdGlvbnMgdGhhdCB3ZSB1c2UgYXMgdGhlIC5jb25zdHJ1Y3RvciBhbmRcbiAgLy8gLmNvbnN0cnVjdG9yLnByb3RvdHlwZSBwcm9wZXJ0aWVzIGZvciBmdW5jdGlvbnMgdGhhdCByZXR1cm4gR2VuZXJhdG9yXG4gIC8vIG9iamVjdHMuIEZvciBmdWxsIHNwZWMgY29tcGxpYW5jZSwgeW91IG1heSB3aXNoIHRvIGNvbmZpZ3VyZSB5b3VyXG4gIC8vIG1pbmlmaWVyIG5vdCB0byBtYW5nbGUgdGhlIG5hbWVzIG9mIHRoZXNlIHR3byBmdW5jdGlvbnMuXG4gIGZ1bmN0aW9uIEdlbmVyYXRvcigpIHt9XG4gIGZ1bmN0aW9uIEdlbmVyYXRvckZ1bmN0aW9uKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUoKSB7fVxuXG4gIHZhciBHcCA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLnByb3RvdHlwZSA9IEdlbmVyYXRvci5wcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uLnByb3RvdHlwZSA9IEdwLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlLmNvbnN0cnVjdG9yID0gR2VuZXJhdG9yRnVuY3Rpb247XG4gIEdlbmVyYXRvckZ1bmN0aW9uLmRpc3BsYXlOYW1lID0gXCJHZW5lcmF0b3JGdW5jdGlvblwiO1xuXG4gIC8vIEhlbHBlciBmb3IgZGVmaW5pbmcgdGhlIC5uZXh0LCAudGhyb3csIGFuZCAucmV0dXJuIG1ldGhvZHMgb2YgdGhlXG4gIC8vIEl0ZXJhdG9yIGludGVyZmFjZSBpbiB0ZXJtcyBvZiBhIHNpbmdsZSAuX2ludm9rZSBtZXRob2QuXG4gIGZ1bmN0aW9uIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhwcm90b3R5cGUpIHtcbiAgICBbXCJuZXh0XCIsIFwidGhyb3dcIiwgXCJyZXR1cm5cIl0uZm9yRWFjaChmdW5jdGlvbihtZXRob2QpIHtcbiAgICAgIHByb3RvdHlwZVttZXRob2RdID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfTtcbiAgICB9KTtcbiAgfVxuXG4gIHJ1bnRpbWUuaXNHZW5lcmF0b3JGdW5jdGlvbiA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIHZhciBjdG9yID0gdHlwZW9mIGdlbkZ1biA9PT0gXCJmdW5jdGlvblwiICYmIGdlbkZ1bi5jb25zdHJ1Y3RvcjtcbiAgICByZXR1cm4gY3RvclxuICAgICAgPyBjdG9yID09PSBHZW5lcmF0b3JGdW5jdGlvbiB8fFxuICAgICAgICAvLyBGb3IgdGhlIG5hdGl2ZSBHZW5lcmF0b3JGdW5jdGlvbiBjb25zdHJ1Y3RvciwgdGhlIGJlc3Qgd2UgY2FuXG4gICAgICAgIC8vIGRvIGlzIHRvIGNoZWNrIGl0cyAubmFtZSBwcm9wZXJ0eS5cbiAgICAgICAgKGN0b3IuZGlzcGxheU5hbWUgfHwgY3Rvci5uYW1lKSA9PT0gXCJHZW5lcmF0b3JGdW5jdGlvblwiXG4gICAgICA6IGZhbHNlO1xuICB9O1xuXG4gIHJ1bnRpbWUubWFyayA9IGZ1bmN0aW9uKGdlbkZ1bikge1xuICAgIGlmIChPYmplY3Quc2V0UHJvdG90eXBlT2YpIHtcbiAgICAgIE9iamVjdC5zZXRQcm90b3R5cGVPZihnZW5GdW4sIEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZ2VuRnVuLl9fcHJvdG9fXyA9IEdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlO1xuICAgIH1cbiAgICBnZW5GdW4ucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShHcCk7XG4gICAgcmV0dXJuIGdlbkZ1bjtcbiAgfTtcblxuICAvLyBXaXRoaW4gdGhlIGJvZHkgb2YgYW55IGFzeW5jIGZ1bmN0aW9uLCBgYXdhaXQgeGAgaXMgdHJhbnNmb3JtZWQgdG9cbiAgLy8gYHlpZWxkIHJlZ2VuZXJhdG9yUnVudGltZS5hd3JhcCh4KWAsIHNvIHRoYXQgdGhlIHJ1bnRpbWUgY2FuIHRlc3RcbiAgLy8gYHZhbHVlIGluc3RhbmNlb2YgQXdhaXRBcmd1bWVudGAgdG8gZGV0ZXJtaW5lIGlmIHRoZSB5aWVsZGVkIHZhbHVlIGlzXG4gIC8vIG1lYW50IHRvIGJlIGF3YWl0ZWQuIFNvbWUgbWF5IGNvbnNpZGVyIHRoZSBuYW1lIG9mIHRoaXMgbWV0aG9kIHRvb1xuICAvLyBjdXRlc3ksIGJ1dCB0aGV5IGFyZSBjdXJtdWRnZW9ucy5cbiAgcnVudGltZS5hd3JhcCA9IGZ1bmN0aW9uKGFyZykge1xuICAgIHJldHVybiBuZXcgQXdhaXRBcmd1bWVudChhcmcpO1xuICB9O1xuXG4gIGZ1bmN0aW9uIEF3YWl0QXJndW1lbnQoYXJnKSB7XG4gICAgdGhpcy5hcmcgPSBhcmc7XG4gIH1cblxuICBmdW5jdGlvbiBBc3luY0l0ZXJhdG9yKGdlbmVyYXRvcikge1xuICAgIC8vIFRoaXMgaW52b2tlIGZ1bmN0aW9uIGlzIHdyaXR0ZW4gaW4gYSBzdHlsZSB0aGF0IGFzc3VtZXMgc29tZVxuICAgIC8vIGNhbGxpbmcgZnVuY3Rpb24gKG9yIFByb21pc2UpIHdpbGwgaGFuZGxlIGV4Y2VwdGlvbnMuXG4gICAgZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gZ2VuZXJhdG9yW21ldGhvZF0oYXJnKTtcbiAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgIHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIEF3YWl0QXJndW1lbnRcbiAgICAgICAgPyBQcm9taXNlLnJlc29sdmUodmFsdWUuYXJnKS50aGVuKGludm9rZU5leHQsIGludm9rZVRocm93KVxuICAgICAgICA6IFByb21pc2UucmVzb2x2ZSh2YWx1ZSkudGhlbihmdW5jdGlvbih1bndyYXBwZWQpIHtcbiAgICAgICAgICAgIC8vIFdoZW4gYSB5aWVsZGVkIFByb21pc2UgaXMgcmVzb2x2ZWQsIGl0cyBmaW5hbCB2YWx1ZSBiZWNvbWVzXG4gICAgICAgICAgICAvLyB0aGUgLnZhbHVlIG9mIHRoZSBQcm9taXNlPHt2YWx1ZSxkb25lfT4gcmVzdWx0IGZvciB0aGVcbiAgICAgICAgICAgIC8vIGN1cnJlbnQgaXRlcmF0aW9uLiBJZiB0aGUgUHJvbWlzZSBpcyByZWplY3RlZCwgaG93ZXZlciwgdGhlXG4gICAgICAgICAgICAvLyByZXN1bHQgZm9yIHRoaXMgaXRlcmF0aW9uIHdpbGwgYmUgcmVqZWN0ZWQgd2l0aCB0aGUgc2FtZVxuICAgICAgICAgICAgLy8gcmVhc29uLiBOb3RlIHRoYXQgcmVqZWN0aW9ucyBvZiB5aWVsZGVkIFByb21pc2VzIGFyZSBub3RcbiAgICAgICAgICAgIC8vIHRocm93biBiYWNrIGludG8gdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgYXMgaXMgdGhlIGNhc2VcbiAgICAgICAgICAgIC8vIHdoZW4gYW4gYXdhaXRlZCBQcm9taXNlIGlzIHJlamVjdGVkLiBUaGlzIGRpZmZlcmVuY2UgaW5cbiAgICAgICAgICAgIC8vIGJlaGF2aW9yIGJldHdlZW4geWllbGQgYW5kIGF3YWl0IGlzIGltcG9ydGFudCwgYmVjYXVzZSBpdFxuICAgICAgICAgICAgLy8gYWxsb3dzIHRoZSBjb25zdW1lciB0byBkZWNpZGUgd2hhdCB0byBkbyB3aXRoIHRoZSB5aWVsZGVkXG4gICAgICAgICAgICAvLyByZWplY3Rpb24gKHN3YWxsb3cgaXQgYW5kIGNvbnRpbnVlLCBtYW51YWxseSAudGhyb3cgaXQgYmFja1xuICAgICAgICAgICAgLy8gaW50byB0aGUgZ2VuZXJhdG9yLCBhYmFuZG9uIGl0ZXJhdGlvbiwgd2hhdGV2ZXIpLiBXaXRoXG4gICAgICAgICAgICAvLyBhd2FpdCwgYnkgY29udHJhc3QsIHRoZXJlIGlzIG5vIG9wcG9ydHVuaXR5IHRvIGV4YW1pbmUgdGhlXG4gICAgICAgICAgICAvLyByZWplY3Rpb24gcmVhc29uIG91dHNpZGUgdGhlIGdlbmVyYXRvciBmdW5jdGlvbiwgc28gdGhlXG4gICAgICAgICAgICAvLyBvbmx5IG9wdGlvbiBpcyB0byB0aHJvdyBpdCBmcm9tIHRoZSBhd2FpdCBleHByZXNzaW9uLCBhbmRcbiAgICAgICAgICAgIC8vIGxldCB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhbmRsZSB0aGUgZXhjZXB0aW9uLlxuICAgICAgICAgICAgcmVzdWx0LnZhbHVlID0gdW53cmFwcGVkO1xuICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgPT09IFwib2JqZWN0XCIgJiYgcHJvY2Vzcy5kb21haW4pIHtcbiAgICAgIGludm9rZSA9IHByb2Nlc3MuZG9tYWluLmJpbmQoaW52b2tlKTtcbiAgICB9XG5cbiAgICB2YXIgaW52b2tlTmV4dCA9IGludm9rZS5iaW5kKGdlbmVyYXRvciwgXCJuZXh0XCIpO1xuICAgIHZhciBpbnZva2VUaHJvdyA9IGludm9rZS5iaW5kKGdlbmVyYXRvciwgXCJ0aHJvd1wiKTtcbiAgICB2YXIgaW52b2tlUmV0dXJuID0gaW52b2tlLmJpbmQoZ2VuZXJhdG9yLCBcInJldHVyblwiKTtcbiAgICB2YXIgcHJldmlvdXNQcm9taXNlO1xuXG4gICAgZnVuY3Rpb24gZW5xdWV1ZShtZXRob2QsIGFyZykge1xuICAgICAgZnVuY3Rpb24gY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSB7XG4gICAgICAgIHJldHVybiBpbnZva2UobWV0aG9kLCBhcmcpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gcHJldmlvdXNQcm9taXNlID1cbiAgICAgICAgLy8gSWYgZW5xdWV1ZSBoYXMgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIHdlIHdhbnQgdG8gd2FpdCB1bnRpbFxuICAgICAgICAvLyBhbGwgcHJldmlvdXMgUHJvbWlzZXMgaGF2ZSBiZWVuIHJlc29sdmVkIGJlZm9yZSBjYWxsaW5nIGludm9rZSxcbiAgICAgICAgLy8gc28gdGhhdCByZXN1bHRzIGFyZSBhbHdheXMgZGVsaXZlcmVkIGluIHRoZSBjb3JyZWN0IG9yZGVyLiBJZlxuICAgICAgICAvLyBlbnF1ZXVlIGhhcyBub3QgYmVlbiBjYWxsZWQgYmVmb3JlLCB0aGVuIGl0IGlzIGltcG9ydGFudCB0b1xuICAgICAgICAvLyBjYWxsIGludm9rZSBpbW1lZGlhdGVseSwgd2l0aG91dCB3YWl0aW5nIG9uIGEgY2FsbGJhY2sgdG8gZmlyZSxcbiAgICAgICAgLy8gc28gdGhhdCB0aGUgYXN5bmMgZ2VuZXJhdG9yIGZ1bmN0aW9uIGhhcyB0aGUgb3Bwb3J0dW5pdHkgdG8gZG9cbiAgICAgICAgLy8gYW55IG5lY2Vzc2FyeSBzZXR1cCBpbiBhIHByZWRpY3RhYmxlIHdheS4gVGhpcyBwcmVkaWN0YWJpbGl0eVxuICAgICAgICAvLyBpcyB3aHkgdGhlIFByb21pc2UgY29uc3RydWN0b3Igc3luY2hyb25vdXNseSBpbnZva2VzIGl0c1xuICAgICAgICAvLyBleGVjdXRvciBjYWxsYmFjaywgYW5kIHdoeSBhc3luYyBmdW5jdGlvbnMgc3luY2hyb25vdXNseVxuICAgICAgICAvLyBleGVjdXRlIGNvZGUgYmVmb3JlIHRoZSBmaXJzdCBhd2FpdC4gU2luY2Ugd2UgaW1wbGVtZW50IHNpbXBsZVxuICAgICAgICAvLyBhc3luYyBmdW5jdGlvbnMgaW4gdGVybXMgb2YgYXN5bmMgZ2VuZXJhdG9ycywgaXQgaXMgZXNwZWNpYWxseVxuICAgICAgICAvLyBpbXBvcnRhbnQgdG8gZ2V0IHRoaXMgcmlnaHQsIGV2ZW4gdGhvdWdoIGl0IHJlcXVpcmVzIGNhcmUuXG4gICAgICAgIHByZXZpb3VzUHJvbWlzZSA/IHByZXZpb3VzUHJvbWlzZS50aGVuKFxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnLFxuICAgICAgICAgIC8vIEF2b2lkIHByb3BhZ2F0aW5nIGZhaWx1cmVzIHRvIFByb21pc2VzIHJldHVybmVkIGJ5IGxhdGVyXG4gICAgICAgICAgLy8gaW52b2NhdGlvbnMgb2YgdGhlIGl0ZXJhdG9yLlxuICAgICAgICAgIGNhbGxJbnZva2VXaXRoTWV0aG9kQW5kQXJnXG4gICAgICAgICkgOiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgIHJlc29sdmUoY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcoKSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIERlZmluZSB0aGUgdW5pZmllZCBoZWxwZXIgbWV0aG9kIHRoYXQgaXMgdXNlZCB0byBpbXBsZW1lbnQgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiAoc2VlIGRlZmluZUl0ZXJhdG9yTWV0aG9kcykuXG4gICAgdGhpcy5faW52b2tlID0gZW5xdWV1ZTtcbiAgfVxuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhBc3luY0l0ZXJhdG9yLnByb3RvdHlwZSk7XG5cbiAgLy8gTm90ZSB0aGF0IHNpbXBsZSBhc3luYyBmdW5jdGlvbnMgYXJlIGltcGxlbWVudGVkIG9uIHRvcCBvZlxuICAvLyBBc3luY0l0ZXJhdG9yIG9iamVjdHM7IHRoZXkganVzdCByZXR1cm4gYSBQcm9taXNlIGZvciB0aGUgdmFsdWUgb2ZcbiAgLy8gdGhlIGZpbmFsIHJlc3VsdCBwcm9kdWNlZCBieSB0aGUgaXRlcmF0b3IuXG4gIHJ1bnRpbWUuYXN5bmMgPSBmdW5jdGlvbihpbm5lckZuLCBvdXRlckZuLCBzZWxmLCB0cnlMb2NzTGlzdCkge1xuICAgIHZhciBpdGVyID0gbmV3IEFzeW5jSXRlcmF0b3IoXG4gICAgICB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KVxuICAgICk7XG5cbiAgICByZXR1cm4gcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uKG91dGVyRm4pXG4gICAgICA/IGl0ZXIgLy8gSWYgb3V0ZXJGbiBpcyBhIGdlbmVyYXRvciwgcmV0dXJuIHRoZSBmdWxsIGl0ZXJhdG9yLlxuICAgICAgOiBpdGVyLm5leHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHQuZG9uZSA/IHJlc3VsdC52YWx1ZSA6IGl0ZXIubmV4dCgpO1xuICAgICAgICB9KTtcbiAgfTtcblxuICBmdW5jdGlvbiBtYWtlSW52b2tlTWV0aG9kKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpIHtcbiAgICB2YXIgc3RhdGUgPSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0O1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uIGludm9rZShtZXRob2QsIGFyZykge1xuICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZUV4ZWN1dGluZykge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBydW5uaW5nXCIpO1xuICAgICAgfVxuXG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlQ29tcGxldGVkKSB7XG4gICAgICAgIGlmIChtZXRob2QgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgIHRocm93IGFyZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIEJlIGZvcmdpdmluZywgcGVyIDI1LjMuMy4zLjMgb2YgdGhlIHNwZWM6XG4gICAgICAgIC8vIGh0dHBzOi8vcGVvcGxlLm1vemlsbGEub3JnL35qb3JlbmRvcmZmL2VzNi1kcmFmdC5odG1sI3NlYy1nZW5lcmF0b3JyZXN1bWVcbiAgICAgICAgcmV0dXJuIGRvbmVSZXN1bHQoKTtcbiAgICAgIH1cblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGRlbGVnYXRlID0gY29udGV4dC5kZWxlZ2F0ZTtcbiAgICAgICAgaWYgKGRlbGVnYXRlKSB7XG4gICAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIiB8fFxuICAgICAgICAgICAgICAobWV0aG9kID09PSBcInRocm93XCIgJiYgZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kXSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgICAgICAgLy8gQSByZXR1cm4gb3IgdGhyb3cgKHdoZW4gdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBubyB0aHJvd1xuICAgICAgICAgICAgLy8gbWV0aG9kKSBhbHdheXMgdGVybWluYXRlcyB0aGUgeWllbGQqIGxvb3AuXG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gSWYgdGhlIGRlbGVnYXRlIGl0ZXJhdG9yIGhhcyBhIHJldHVybiBtZXRob2QsIGdpdmUgaXQgYVxuICAgICAgICAgICAgLy8gY2hhbmNlIHRvIGNsZWFuIHVwLlxuICAgICAgICAgICAgdmFyIHJldHVybk1ldGhvZCA9IGRlbGVnYXRlLml0ZXJhdG9yW1wicmV0dXJuXCJdO1xuICAgICAgICAgICAgaWYgKHJldHVybk1ldGhvZCkge1xuICAgICAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2gocmV0dXJuTWV0aG9kLCBkZWxlZ2F0ZS5pdGVyYXRvciwgYXJnKTtcbiAgICAgICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiB0aGUgcmV0dXJuIG1ldGhvZCB0aHJldyBhbiBleGNlcHRpb24sIGxldCB0aGF0XG4gICAgICAgICAgICAgICAgLy8gZXhjZXB0aW9uIHByZXZhaWwgb3ZlciB0aGUgb3JpZ2luYWwgcmV0dXJuIG9yIHRocm93LlxuICAgICAgICAgICAgICAgIG1ldGhvZCA9IFwidGhyb3dcIjtcbiAgICAgICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICAgICAgLy8gQ29udGludWUgd2l0aCB0aGUgb3V0ZXIgcmV0dXJuLCBub3cgdGhhdCB0aGUgZGVsZWdhdGVcbiAgICAgICAgICAgICAgLy8gaXRlcmF0b3IgaGFzIGJlZW4gdGVybWluYXRlZC5cbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKFxuICAgICAgICAgICAgZGVsZWdhdGUuaXRlcmF0b3JbbWV0aG9kXSxcbiAgICAgICAgICAgIGRlbGVnYXRlLml0ZXJhdG9yLFxuICAgICAgICAgICAgYXJnXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgICAgICAgLy8gTGlrZSByZXR1cm5pbmcgZ2VuZXJhdG9yLnRocm93KHVuY2F1Z2h0KSwgYnV0IHdpdGhvdXQgdGhlXG4gICAgICAgICAgICAvLyBvdmVyaGVhZCBvZiBhbiBleHRyYSBmdW5jdGlvbiBjYWxsLlxuICAgICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC8vIERlbGVnYXRlIGdlbmVyYXRvciByYW4gYW5kIGhhbmRsZWQgaXRzIG93biBleGNlcHRpb25zIHNvXG4gICAgICAgICAgLy8gcmVnYXJkbGVzcyBvZiB3aGF0IHRoZSBtZXRob2Qgd2FzLCB3ZSBjb250aW51ZSBhcyBpZiBpdCBpc1xuICAgICAgICAgIC8vIFwibmV4dFwiIHdpdGggYW4gdW5kZWZpbmVkIGFyZy5cbiAgICAgICAgICBtZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG5cbiAgICAgICAgICB2YXIgaW5mbyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICAgICAgY29udGV4dFtkZWxlZ2F0ZS5yZXN1bHROYW1lXSA9IGluZm8udmFsdWU7XG4gICAgICAgICAgICBjb250ZXh0Lm5leHQgPSBkZWxlZ2F0ZS5uZXh0TG9jO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb250ZXh0LmRlbGVnYXRlID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChtZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgY29udGV4dC5fc2VudCA9IGFyZztcblxuICAgICAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVTdXNwZW5kZWRZaWVsZCkge1xuICAgICAgICAgICAgY29udGV4dC5zZW50ID0gYXJnO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb250ZXh0LnNlbnQgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFN0YXJ0KSB7XG4gICAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGFyZykpIHtcbiAgICAgICAgICAgIC8vIElmIHRoZSBkaXNwYXRjaGVkIGV4Y2VwdGlvbiB3YXMgY2F1Z2h0IGJ5IGEgY2F0Y2ggYmxvY2ssXG4gICAgICAgICAgICAvLyB0aGVuIGxldCB0aGF0IGNhdGNoIGJsb2NrIGhhbmRsZSB0aGUgZXhjZXB0aW9uIG5vcm1hbGx5LlxuICAgICAgICAgICAgbWV0aG9kID0gXCJuZXh0XCI7XG4gICAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSBcInJldHVyblwiKSB7XG4gICAgICAgICAgY29udGV4dC5hYnJ1cHQoXCJyZXR1cm5cIiwgYXJnKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlID0gR2VuU3RhdGVFeGVjdXRpbmc7XG5cbiAgICAgICAgdmFyIHJlY29yZCA9IHRyeUNhdGNoKGlubmVyRm4sIHNlbGYsIGNvbnRleHQpO1xuICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwibm9ybWFsXCIpIHtcbiAgICAgICAgICAvLyBJZiBhbiBleGNlcHRpb24gaXMgdGhyb3duIGZyb20gaW5uZXJGbiwgd2UgbGVhdmUgc3RhdGUgPT09XG4gICAgICAgICAgLy8gR2VuU3RhdGVFeGVjdXRpbmcgYW5kIGxvb3AgYmFjayBmb3IgYW5vdGhlciBpbnZvY2F0aW9uLlxuICAgICAgICAgIHN0YXRlID0gY29udGV4dC5kb25lXG4gICAgICAgICAgICA/IEdlblN0YXRlQ29tcGxldGVkXG4gICAgICAgICAgICA6IEdlblN0YXRlU3VzcGVuZGVkWWllbGQ7XG5cbiAgICAgICAgICB2YXIgaW5mbyA9IHtcbiAgICAgICAgICAgIHZhbHVlOiByZWNvcmQuYXJnLFxuICAgICAgICAgICAgZG9uZTogY29udGV4dC5kb25lXG4gICAgICAgICAgfTtcblxuICAgICAgICAgIGlmIChyZWNvcmQuYXJnID09PSBDb250aW51ZVNlbnRpbmVsKSB7XG4gICAgICAgICAgICBpZiAoY29udGV4dC5kZWxlZ2F0ZSAmJiBtZXRob2QgPT09IFwibmV4dFwiKSB7XG4gICAgICAgICAgICAgIC8vIERlbGliZXJhdGVseSBmb3JnZXQgdGhlIGxhc3Qgc2VudCB2YWx1ZSBzbyB0aGF0IHdlIGRvbid0XG4gICAgICAgICAgICAgIC8vIGFjY2lkZW50YWxseSBwYXNzIGl0IG9uIHRvIHRoZSBkZWxlZ2F0ZS5cbiAgICAgICAgICAgICAgYXJnID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gaW5mbztcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUNvbXBsZXRlZDtcbiAgICAgICAgICAvLyBEaXNwYXRjaCB0aGUgZXhjZXB0aW9uIGJ5IGxvb3BpbmcgYmFjayBhcm91bmQgdG8gdGhlXG4gICAgICAgICAgLy8gY29udGV4dC5kaXNwYXRjaEV4Y2VwdGlvbihhcmcpIGNhbGwgYWJvdmUuXG4gICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgLy8gRGVmaW5lIEdlbmVyYXRvci5wcm90b3R5cGUue25leHQsdGhyb3cscmV0dXJufSBpbiB0ZXJtcyBvZiB0aGVcbiAgLy8gdW5pZmllZCAuX2ludm9rZSBoZWxwZXIgbWV0aG9kLlxuICBkZWZpbmVJdGVyYXRvck1ldGhvZHMoR3ApO1xuXG4gIEdwW2l0ZXJhdG9yU3ltYm9sXSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9O1xuXG4gIEdwLnRvU3RyaW5nID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBHZW5lcmF0b3JdXCI7XG4gIH07XG5cbiAgZnVuY3Rpb24gcHVzaFRyeUVudHJ5KGxvY3MpIHtcbiAgICB2YXIgZW50cnkgPSB7IHRyeUxvYzogbG9jc1swXSB9O1xuXG4gICAgaWYgKDEgaW4gbG9jcykge1xuICAgICAgZW50cnkuY2F0Y2hMb2MgPSBsb2NzWzFdO1xuICAgIH1cblxuICAgIGlmICgyIGluIGxvY3MpIHtcbiAgICAgIGVudHJ5LmZpbmFsbHlMb2MgPSBsb2NzWzJdO1xuICAgICAgZW50cnkuYWZ0ZXJMb2MgPSBsb2NzWzNdO1xuICAgIH1cblxuICAgIHRoaXMudHJ5RW50cmllcy5wdXNoKGVudHJ5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0VHJ5RW50cnkoZW50cnkpIHtcbiAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbiB8fCB7fTtcbiAgICByZWNvcmQudHlwZSA9IFwibm9ybWFsXCI7XG4gICAgZGVsZXRlIHJlY29yZC5hcmc7XG4gICAgZW50cnkuY29tcGxldGlvbiA9IHJlY29yZDtcbiAgfVxuXG4gIGZ1bmN0aW9uIENvbnRleHQodHJ5TG9jc0xpc3QpIHtcbiAgICAvLyBUaGUgcm9vdCBlbnRyeSBvYmplY3QgKGVmZmVjdGl2ZWx5IGEgdHJ5IHN0YXRlbWVudCB3aXRob3V0IGEgY2F0Y2hcbiAgICAvLyBvciBhIGZpbmFsbHkgYmxvY2spIGdpdmVzIHVzIGEgcGxhY2UgdG8gc3RvcmUgdmFsdWVzIHRocm93biBmcm9tXG4gICAgLy8gbG9jYXRpb25zIHdoZXJlIHRoZXJlIGlzIG5vIGVuY2xvc2luZyB0cnkgc3RhdGVtZW50LlxuICAgIHRoaXMudHJ5RW50cmllcyA9IFt7IHRyeUxvYzogXCJyb290XCIgfV07XG4gICAgdHJ5TG9jc0xpc3QuZm9yRWFjaChwdXNoVHJ5RW50cnksIHRoaXMpO1xuICAgIHRoaXMucmVzZXQodHJ1ZSk7XG4gIH1cblxuICBydW50aW1lLmtleXMgPSBmdW5jdGlvbihvYmplY3QpIHtcbiAgICB2YXIga2V5cyA9IFtdO1xuICAgIGZvciAodmFyIGtleSBpbiBvYmplY3QpIHtcbiAgICAgIGtleXMucHVzaChrZXkpO1xuICAgIH1cbiAgICBrZXlzLnJldmVyc2UoKTtcblxuICAgIC8vIFJhdGhlciB0aGFuIHJldHVybmluZyBhbiBvYmplY3Qgd2l0aCBhIG5leHQgbWV0aG9kLCB3ZSBrZWVwXG4gICAgLy8gdGhpbmdzIHNpbXBsZSBhbmQgcmV0dXJuIHRoZSBuZXh0IGZ1bmN0aW9uIGl0c2VsZi5cbiAgICByZXR1cm4gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgIHdoaWxlIChrZXlzLmxlbmd0aCkge1xuICAgICAgICB2YXIga2V5ID0ga2V5cy5wb3AoKTtcbiAgICAgICAgaWYgKGtleSBpbiBvYmplY3QpIHtcbiAgICAgICAgICBuZXh0LnZhbHVlID0ga2V5O1xuICAgICAgICAgIG5leHQuZG9uZSA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRvIGF2b2lkIGNyZWF0aW5nIGFuIGFkZGl0aW9uYWwgb2JqZWN0LCB3ZSBqdXN0IGhhbmcgdGhlIC52YWx1ZVxuICAgICAgLy8gYW5kIC5kb25lIHByb3BlcnRpZXMgb2ZmIHRoZSBuZXh0IGZ1bmN0aW9uIG9iamVjdCBpdHNlbGYuIFRoaXNcbiAgICAgIC8vIGFsc28gZW5zdXJlcyB0aGF0IHRoZSBtaW5pZmllciB3aWxsIG5vdCBhbm9ueW1pemUgdGhlIGZ1bmN0aW9uLlxuICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcbiAgICAgIHJldHVybiBuZXh0O1xuICAgIH07XG4gIH07XG5cbiAgZnVuY3Rpb24gdmFsdWVzKGl0ZXJhYmxlKSB7XG4gICAgaWYgKGl0ZXJhYmxlKSB7XG4gICAgICB2YXIgaXRlcmF0b3JNZXRob2QgPSBpdGVyYWJsZVtpdGVyYXRvclN5bWJvbF07XG4gICAgICBpZiAoaXRlcmF0b3JNZXRob2QpIHtcbiAgICAgICAgcmV0dXJuIGl0ZXJhdG9yTWV0aG9kLmNhbGwoaXRlcmFibGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGl0ZXJhYmxlLm5leHQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gaXRlcmFibGU7XG4gICAgICB9XG5cbiAgICAgIGlmICghaXNOYU4oaXRlcmFibGUubGVuZ3RoKSkge1xuICAgICAgICB2YXIgaSA9IC0xLCBuZXh0ID0gZnVuY3Rpb24gbmV4dCgpIHtcbiAgICAgICAgICB3aGlsZSAoKytpIDwgaXRlcmFibGUubGVuZ3RoKSB7XG4gICAgICAgICAgICBpZiAoaGFzT3duLmNhbGwoaXRlcmFibGUsIGkpKSB7XG4gICAgICAgICAgICAgIG5leHQudmFsdWUgPSBpdGVyYWJsZVtpXTtcbiAgICAgICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIG5leHQudmFsdWUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgbmV4dC5kb25lID0gdHJ1ZTtcblxuICAgICAgICAgIHJldHVybiBuZXh0O1xuICAgICAgICB9O1xuXG4gICAgICAgIHJldHVybiBuZXh0Lm5leHQgPSBuZXh0O1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIFJldHVybiBhbiBpdGVyYXRvciB3aXRoIG5vIHZhbHVlcy5cbiAgICByZXR1cm4geyBuZXh0OiBkb25lUmVzdWx0IH07XG4gIH1cbiAgcnVudGltZS52YWx1ZXMgPSB2YWx1ZXM7XG5cbiAgZnVuY3Rpb24gZG9uZVJlc3VsdCgpIHtcbiAgICByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIH1cblxuICBDb250ZXh0LnByb3RvdHlwZSA9IHtcbiAgICBjb25zdHJ1Y3RvcjogQ29udGV4dCxcblxuICAgIHJlc2V0OiBmdW5jdGlvbihza2lwVGVtcFJlc2V0KSB7XG4gICAgICB0aGlzLnByZXYgPSAwO1xuICAgICAgdGhpcy5uZXh0ID0gMDtcbiAgICAgIHRoaXMuc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuZG9uZSA9IGZhbHNlO1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IG51bGw7XG5cbiAgICAgIHRoaXMudHJ5RW50cmllcy5mb3JFYWNoKHJlc2V0VHJ5RW50cnkpO1xuXG4gICAgICBpZiAoIXNraXBUZW1wUmVzZXQpIHtcbiAgICAgICAgZm9yICh2YXIgbmFtZSBpbiB0aGlzKSB7XG4gICAgICAgICAgLy8gTm90IHN1cmUgYWJvdXQgdGhlIG9wdGltYWwgb3JkZXIgb2YgdGhlc2UgY29uZGl0aW9uczpcbiAgICAgICAgICBpZiAobmFtZS5jaGFyQXQoMCkgPT09IFwidFwiICYmXG4gICAgICAgICAgICAgIGhhc093bi5jYWxsKHRoaXMsIG5hbWUpICYmXG4gICAgICAgICAgICAgICFpc05hTigrbmFtZS5zbGljZSgxKSkpIHtcbiAgICAgICAgICAgIHRoaXNbbmFtZV0gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIHN0b3A6IGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5kb25lID0gdHJ1ZTtcblxuICAgICAgdmFyIHJvb3RFbnRyeSA9IHRoaXMudHJ5RW50cmllc1swXTtcbiAgICAgIHZhciByb290UmVjb3JkID0gcm9vdEVudHJ5LmNvbXBsZXRpb247XG4gICAgICBpZiAocm9vdFJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcm9vdFJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJ2YWw7XG4gICAgfSxcblxuICAgIGRpc3BhdGNoRXhjZXB0aW9uOiBmdW5jdGlvbihleGNlcHRpb24pIHtcbiAgICAgIGlmICh0aGlzLmRvbmUpIHtcbiAgICAgICAgdGhyb3cgZXhjZXB0aW9uO1xuICAgICAgfVxuXG4gICAgICB2YXIgY29udGV4dCA9IHRoaXM7XG4gICAgICBmdW5jdGlvbiBoYW5kbGUobG9jLCBjYXVnaHQpIHtcbiAgICAgICAgcmVjb3JkLnR5cGUgPSBcInRocm93XCI7XG4gICAgICAgIHJlY29yZC5hcmcgPSBleGNlcHRpb247XG4gICAgICAgIGNvbnRleHQubmV4dCA9IGxvYztcbiAgICAgICAgcmV0dXJuICEhY2F1Z2h0O1xuICAgICAgfVxuXG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gXCJyb290XCIpIHtcbiAgICAgICAgICAvLyBFeGNlcHRpb24gdGhyb3duIG91dHNpZGUgb2YgYW55IHRyeSBibG9jayB0aGF0IGNvdWxkIGhhbmRsZVxuICAgICAgICAgIC8vIGl0LCBzbyBzZXQgdGhlIGNvbXBsZXRpb24gdmFsdWUgb2YgdGhlIGVudGlyZSBmdW5jdGlvbiB0b1xuICAgICAgICAgIC8vIHRocm93IHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgcmV0dXJuIGhhbmRsZShcImVuZFwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2KSB7XG4gICAgICAgICAgdmFyIGhhc0NhdGNoID0gaGFzT3duLmNhbGwoZW50cnksIFwiY2F0Y2hMb2NcIik7XG4gICAgICAgICAgdmFyIGhhc0ZpbmFsbHkgPSBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpO1xuXG4gICAgICAgICAgaWYgKGhhc0NhdGNoICYmIGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5jYXRjaExvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmNhdGNoTG9jLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNDYXRjaCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIGlmIChoYXNGaW5hbGx5KSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAgICAgICByZXR1cm4gaGFuZGxlKGVudHJ5LmZpbmFsbHlMb2MpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcInRyeSBzdGF0ZW1lbnQgd2l0aG91dCBjYXRjaCBvciBmaW5hbGx5XCIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBhYnJ1cHQ6IGZ1bmN0aW9uKHR5cGUsIGFyZykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPD0gdGhpcy5wcmV2ICYmXG4gICAgICAgICAgICBoYXNPd24uY2FsbChlbnRyeSwgXCJmaW5hbGx5TG9jXCIpICYmXG4gICAgICAgICAgICB0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgdmFyIGZpbmFsbHlFbnRyeSA9IGVudHJ5O1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkgJiZcbiAgICAgICAgICAodHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgIHR5cGUgPT09IFwiY29udGludWVcIikgJiZcbiAgICAgICAgICBmaW5hbGx5RW50cnkudHJ5TG9jIDw9IGFyZyAmJlxuICAgICAgICAgIGFyZyA8PSBmaW5hbGx5RW50cnkuZmluYWxseUxvYykge1xuICAgICAgICAvLyBJZ25vcmUgdGhlIGZpbmFsbHkgZW50cnkgaWYgY29udHJvbCBpcyBub3QganVtcGluZyB0byBhXG4gICAgICAgIC8vIGxvY2F0aW9uIG91dHNpZGUgdGhlIHRyeS9jYXRjaCBibG9jay5cbiAgICAgICAgZmluYWxseUVudHJ5ID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgdmFyIHJlY29yZCA9IGZpbmFsbHlFbnRyeSA/IGZpbmFsbHlFbnRyeS5jb21wbGV0aW9uIDoge307XG4gICAgICByZWNvcmQudHlwZSA9IHR5cGU7XG4gICAgICByZWNvcmQuYXJnID0gYXJnO1xuXG4gICAgICBpZiAoZmluYWxseUVudHJ5KSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jb21wbGV0ZShyZWNvcmQpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICB9LFxuXG4gICAgY29tcGxldGU6IGZ1bmN0aW9uKHJlY29yZCwgYWZ0ZXJMb2MpIHtcbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgIHRocm93IHJlY29yZC5hcmc7XG4gICAgICB9XG5cbiAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJicmVha1wiIHx8XG4gICAgICAgICAgcmVjb3JkLnR5cGUgPT09IFwiY29udGludWVcIikge1xuICAgICAgICB0aGlzLm5leHQgPSByZWNvcmQuYXJnO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICB0aGlzLnJ2YWwgPSByZWNvcmQuYXJnO1xuICAgICAgICB0aGlzLm5leHQgPSBcImVuZFwiO1xuICAgICAgfSBlbHNlIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIiAmJiBhZnRlckxvYykge1xuICAgICAgICB0aGlzLm5leHQgPSBhZnRlckxvYztcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZmluaXNoOiBmdW5jdGlvbihmaW5hbGx5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LmZpbmFsbHlMb2MgPT09IGZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB0aGlzLmNvbXBsZXRlKGVudHJ5LmNvbXBsZXRpb24sIGVudHJ5LmFmdGVyTG9jKTtcbiAgICAgICAgICByZXNldFRyeUVudHJ5KGVudHJ5KTtcbiAgICAgICAgICByZXR1cm4gQ29udGludWVTZW50aW5lbDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBcImNhdGNoXCI6IGZ1bmN0aW9uKHRyeUxvYykge1xuICAgICAgZm9yICh2YXIgaSA9IHRoaXMudHJ5RW50cmllcy5sZW5ndGggLSAxOyBpID49IDA7IC0taSkge1xuICAgICAgICB2YXIgZW50cnkgPSB0aGlzLnRyeUVudHJpZXNbaV07XG4gICAgICAgIGlmIChlbnRyeS50cnlMb2MgPT09IHRyeUxvYykge1xuICAgICAgICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uO1xuICAgICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3duID0gcmVjb3JkLmFyZztcbiAgICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhyb3duO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8vIFRoZSBjb250ZXh0LmNhdGNoIG1ldGhvZCBtdXN0IG9ubHkgYmUgY2FsbGVkIHdpdGggYSBsb2NhdGlvblxuICAgICAgLy8gYXJndW1lbnQgdGhhdCBjb3JyZXNwb25kcyB0byBhIGtub3duIGNhdGNoIGJsb2NrLlxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaWxsZWdhbCBjYXRjaCBhdHRlbXB0XCIpO1xuICAgIH0sXG5cbiAgICBkZWxlZ2F0ZVlpZWxkOiBmdW5jdGlvbihpdGVyYWJsZSwgcmVzdWx0TmFtZSwgbmV4dExvYykge1xuICAgICAgdGhpcy5kZWxlZ2F0ZSA9IHtcbiAgICAgICAgaXRlcmF0b3I6IHZhbHVlcyhpdGVyYWJsZSksXG4gICAgICAgIHJlc3VsdE5hbWU6IHJlc3VsdE5hbWUsXG4gICAgICAgIG5leHRMb2M6IG5leHRMb2NcbiAgICAgIH07XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH1cbiAgfTtcbn0pKFxuICAvLyBBbW9uZyB0aGUgdmFyaW91cyB0cmlja3MgZm9yIG9idGFpbmluZyBhIHJlZmVyZW5jZSB0byB0aGUgZ2xvYmFsXG4gIC8vIG9iamVjdCwgdGhpcyBzZWVtcyB0byBiZSB0aGUgbW9zdCByZWxpYWJsZSB0ZWNobmlxdWUgdGhhdCBkb2VzIG5vdFxuICAvLyB1c2UgaW5kaXJlY3QgZXZhbCAod2hpY2ggdmlvbGF0ZXMgQ29udGVudCBTZWN1cml0eSBQb2xpY3kpLlxuICB0eXBlb2YgZ2xvYmFsID09PSBcIm9iamVjdFwiID8gZ2xvYmFsIDpcbiAgdHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIiA/IHdpbmRvdyA6XG4gIHR5cGVvZiBzZWxmID09PSBcIm9iamVjdFwiID8gc2VsZiA6IHRoaXNcbik7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2JhYmVsLXJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE4OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgdXRpbCBmcm9tICd1dGlsJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgY3NwIGZyb20gJ2pzLWNzcCc7XG5pbXBvcnQgQ29uZmlndXJlIGZyb20gJ0NvbmZpZ3VyZSdcbmltcG9ydCBTaWduYWwgZnJvbSAncm91dGVycy9TaWduYWwnO1xuaW1wb3J0IERldmljZUxvZyBmcm9tICdyb3V0ZXJzL0RldmljZUxvZyc7XG5pbXBvcnQgU2NyZWVuUmVjb3JkIGZyb20gJ3JvdXRlcnMvU2NyZWVuUmVjb3JkJztcbmltcG9ydCBUaW1lbGluZSBmcm9tICdyb3V0ZXJzL1RpbWVsaW5lJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAncm91dGVycy9Sb3V0ZXInO1xuXG5pbXBvcnQgRGVmZXIgZnJvbSAnRGVmZXInO1xuXG5jbGFzcyBDb250cm9sbGVyIGV4dGVuZHMgUm91dGVyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMubmFtZSA9ICdjb250cm9sbGVyJztcbiAgICB0aGlzLl9jb21tYW5kUm91dGVyID0gbnVsbDtcbiAgICB0aGlzLl9jb21tYW5kUHVibGljYXRpb24gPSBudWxsO1xuICAgIHRoaXMuX3JvdXRlcnMgPSBudWxsO1xuICAgIHRoaXMuX3N0YWdlID0gbnVsbDtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIGxldCBjb25maWd1cmUgPSBuZXcgQ29uZmlndXJlKCk7XG4gICAgdGhpcy5jb25maWdzID0gY29uZmlndXJlLnNldHVwKCk7XG4gICAgbGV0IGNvbW1hbmRSb3V0ZXJOYW1lID0gdGhpcy5jb25maWdzLnJvdXRlcnMuX19jb21tYW5kX187XG4gICAgbGV0IHJlcG9ydGVyUm91dGVyTmFtZSA9IHRoaXMuY29uZmlncy5yb3V0ZXJzLl9fcmVwb3J0ZXJfXztcbiAgICB0aGlzLl9yb3V0ZXJzID0gdGhpcy5faW5pdGlhbGl6ZVJvdXRlcnMoY29tbWFuZFJvdXRlck5hbWUsIHJlcG9ydGVyUm91dGVyTmFtZSk7XG4gICAgdGhpcy5fY29tbWFuZFJvdXRlciA9IHRoaXMuX3JvdXRlcnNbY29tbWFuZFJvdXRlck5hbWVdO1xuICAgIGZvciAobGV0IHJvdXRlcklkZW50aWZpY2F0aW9uIGluIHRoaXMuX3JvdXRlcnMpIHtcbiAgICAgIGxldCByb3V0ZXIgPSB0aGlzLl9yb3V0ZXJzW3JvdXRlcklkZW50aWZpY2F0aW9uXTtcbiAgICAgIHRoaXMuc3Vic2NyaWJlKHJvdXRlcjo6cm91dGVyLmNvbm5lY3RUb0NvbnRyb2xsZXIpO1xuICAgIH1cblxuICAgIHRoaXMuX2NvbW1hbmRSb3V0ZXIuc3Vic2NyaWJlKHRoaXM6OnRoaXMuX2Nvbm5lY3RUb0NvbW1hbmRSb3V0ZXIpO1xuICAgIGNzcC5wdXRBc3luYyh0aGlzLl9vdXRwdXRDaGFubmVsLCB7J3RvcGljJzogJ3N0YXR1cycsICdzb3VyY2UnOiB0aGlzLl9uYW1lLFxuICAgICAgJ3BheWxvYWQnOiB7J3R5cGUnOiAnaW5pdGlhbGl6ZScsICdkZXRhaWwnOiB0aGlzLl9yb3V0ZXJzfSB9KTtcbiAgfVxuXG4gIGFzeW5jIHN0b3AoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGlmICgndGVybWluYXRpbmcnICE9PSB0aGlzLl9zdGFnZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3QgYmUgaW4gdGhlIHRlcm1pbmF0aW5nIHN0YWdlICcgK1xuICAgICAgICAgICdiZWZvcmUgY2FsbGluZyBzdG9wIChjdXJyZW50IG9uZSBpczogJyArIHRoaXMuX3N0YWdlICsgJyApJyk7XG4gICAgICB9XG4gICAgICBsZXQgY3VycmVudFN0YWdlUHJvbWlzZXMgPSBPYmplY3Qua2V5cyh0aGlzLl9yb3V0ZXJzKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgICAgbGV0IHJvdXRlciA9IHRoaXMuX3JvdXRlcnNbbmFtZV07XG4gICAgICAgIHJldHVybiByb3V0ZXIuX2N1cnJlbnRTdGFnZURlZmVyLnByb21pc2U7XG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2codGhpcy5fbmFtZSwgRGF0ZS5ub3coKSwgYFNlbmQgfGZpbmFsaXplfCBtZXNzYWdlIG91dGApO1xuICAgICAgY3NwLnB1dEFzeW5jKHRoaXMuX291dHB1dENoYW5uZWwsIHsndG9waWMnOiAnc3RhdHVzJywgJ3NvdXJjZSc6IHRoaXMuX25hbWUsXG4gICAgICAgICdwYXlsb2FkJzogeyd0eXBlJzogJ2ZpbmFsaXplJ30gfSk7XG5cbiAgICAgIC8vIFRvIHdhaXQgdGVybWluYXRpbmcgc3RhZ2UgZG9uZS4gSXQgbXVzdCBiZSB0aGUgc3RhZ2UgYmVmb3JlIHRoZSB0aGlzXG4gICAgICAvLyBtZXRob2QgZ2V0IGludm9rZWQuXG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChjdXJyZW50U3RhZ2VQcm9taXNlcyk7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cblxuICBfY29ubmVjdFRvQ29tbWFuZFJvdXRlcihwdWJsaWNhdGlvbikge1xuICAgIHRoaXMuX2NvbW1hbmRQdWJsaWNhdGlvbiA9IHB1YmxpY2F0aW9uO1xuICAgIGNzcC5vcGVyYXRpb25zLnB1Yi5zdWIocHVibGljYXRpb24sICdzdGF0dXMnLCB0aGlzLl9pbnB1dENoYW5uZWwpO1xuICAgIHRoaXMuX2NvbnN1bWVDb21tYW5kUm91dGVyTWVzc2FnZSgpO1xuICB9XG5cbiAgYXN5bmMgX2NvbnN1bWVDb21tYW5kUm91dGVyTWVzc2FnZSgpIHtcbiAgICBsZXQgdGFrZUl0ID0gKCkgPT4ge1xuICAgICAgbGV0IGRlZmVyID0gbmV3IERlZmVyKCk7XG4gICAgICBjc3AudGFrZUFzeW5jKHRoaXMuX2lucHV0Q2hhbm5lbCxcbiAgICAgICAgKHZhbHVlKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2codGhpcy5fbmFtZSwgRGF0ZS5ub3coKSwgYFJlY2VpdmVkIG1lc3NhZ2U6ICR7IHV0aWwuaW5zcGVjdCh2YWx1ZSkgfWApO1xuICAgICAgICAgIGRlZmVyLnJlc29sdmUodmFsdWUpOyB9KTtcbiAgICAgIHJldHVybiBkZWZlci5wcm9taXNlO1xuICAgIH1cblxuICAgIGxldCBtZXNzYWdlID0gYXdhaXQgdGFrZUl0KCk7XG4gICAgd2hpbGUobWVzc2FnZSAhPT0gY3NwLkNMT1NFRCkge1xuICAgICAgaWYgKCdmaW5hbGl6ZScgPT09IG1lc3NhZ2UucGF5bG9hZC50eXBlKSB7XG4gICAgICAgIHRoaXMuc3RvcCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSBpZiAoJ3N0YWdlY2hhbmdlJyA9PT0gbWVzc2FnZS5wYXlsb2FkLnR5cGUpIHtcbiAgICAgICAgdGhpcy5fc3RhZ2UgPSBtZXNzYWdlLnBheWxvYWQuZGV0YWlsO1xuICAgICAgICAvLyBXZSBuZWVkIHRoaXMgYXdhaXQgYmVjYXVzZSB3ZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBjdXJyZW50IHN0YWdlIGNoYW5nZVxuICAgICAgICAvLyB0byBzdGFydCB0aGUgbmV4dCBjaGFuZ2UuXG4gICAgICAgIGF3YWl0IHRoaXMuX2ZvcndhcmRTdGFnZUNoYW5nZVJlcXVlc3QobWVzc2FnZS5wYXlsb2FkLmRldGFpbCk7XG4gICAgICB9XG4gICAgICBtZXNzYWdlID0gYXdhaXQgdGFrZUl0KCk7XG4gICAgfVxuICB9XG5cbiAgX2ZvcndhcmRTdGFnZUNoYW5nZVJlcXVlc3Qoc3RhZ2UpIHtcbiAgICBsZXQgY3VycmVudFN0YWdlUHJvbWlzZXMgPSBPYmplY3Qua2V5cyh0aGlzLl9yb3V0ZXJzKS5tYXAoKG5hbWUpID0+IHtcbiAgICAgIGxldCByb3V0ZXIgPSB0aGlzLl9yb3V0ZXJzW25hbWVdO1xuICAgICAgcmV0dXJuIHJvdXRlci5fY3VycmVudFN0YWdlRGVmZXIucHJvbWlzZTtcbiAgICB9KTtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuX25hbWUsIERhdGUubm93KCksXG4gICAgICBgU2VuZCB0aGUgfHN0YWdlY2hhbmdlfCBtZXNzYWdlIG91dDsgc3RhZ2U6ICR7IHN0YWdlIH1gKTtcbiAgICBjc3AucHV0QXN5bmModGhpcy5fb3V0cHV0Q2hhbm5lbCwgeyd0b3BpYyc6ICdzdGF0dXMnLCAnc291cmNlJzogdGhpcy5fbmFtZSxcbiAgICAgICdwYXlsb2FkJzogeyd0eXBlJzogJ3N0YWdlY2hhbmdlJywgJ2RldGFpbCc6IHN0YWdlfSB9KTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoY3VycmVudFN0YWdlUHJvbWlzZXMpO1xuICB9XG5cbiAgLy9UT0RPOiBkeW5hbWljIGxvYWRpbmcgJiBpbml0aWFsaXppbmc/XG4gIF9pbml0aWFsaXplUm91dGVycyhjb21tYW5kUm91dGVyTmFtZSwgcmVwb3J0ZXJSb3V0ZXJOYW1lKSB7XG4gICAgbGV0IHJvdXRlcnMgPSB7XG4gICAgICBzY3JlZW5yZWNvcmQ6IG5ldyBTY3JlZW5SZWNvcmQodGhpcy5jb25maWdzKSxcbiAgICAgIGRldmljZWxvZzogbmV3IERldmljZUxvZyh0aGlzLmNvbmZpZ3MpLFxuICAgICAgLy9sb2c6IG5ldyBMb2codGhpcy5jb25maWdzKSxcbiAgICAgIHRpbWVsaW5lOiBuZXcgVGltZWxpbmUodGhpcy5jb25maWdzKSxcbiAgICAgIHNpZ25hbDogbmV3IFNpZ25hbCh0aGlzLmNvbmZpZ3MpXG4gICAgfTtcbiAgICBpZiAoIXJvdXRlcnNbY29tbWFuZFJvdXRlck5hbWVdKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNvbW1hbmQgcm91dGVyOiAnICsgY29tbWFuZFJvdXRlck5hbWUpO1xuICAgIH1cbiAgICBpZiAoIXJvdXRlcnNbcmVwb3J0ZXJSb3V0ZXJOYW1lXSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyByZXBvcnRlciByb3V0ZXI6ICcgKyByZXBvcnRlclJvdXRlck5hbWUpO1xuICAgIH1cbiAgICByZXR1cm4gcm91dGVycztcbiAgfVxuXG59XG5cbmxldCBjb250cm9sbGVyID0gbmV3IENvbnRyb2xsZXIoKTtcbmNvbnRyb2xsZXIuc3RhcnQoKTtcbi8vY29udHJvbGxlci50ZXN0KCk7XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9iZWhvbGRlci5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInV0aWxcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInV0aWxcIlxuICoqIG1vZHVsZSBpZCA9IDE5MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImZzXCJcbiAqKiBtb2R1bGUgaWQgPSAxOTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgY3NwID0gcmVxdWlyZShcIi4vY3NwLmNvcmVcIik7XG52YXIgb3BlcmF0aW9ucyA9IHJlcXVpcmUoXCIuL2NzcC5vcGVyYXRpb25zXCIpO1xudmFyIHBpcGVsaW5lID0gcmVxdWlyZSgnLi9jc3AucGlwZWxpbmUnKTtcblxuY3NwLm9wZXJhdGlvbnMgPSBvcGVyYXRpb25zO1xuY3NwLm9wZXJhdGlvbnMucGlwZWxpbmUgPSBwaXBlbGluZS5waXBlbGluZTtcbmNzcC5vcGVyYXRpb25zLnBpcGVsaW5lQXN5bmMgPSBwaXBlbGluZS5waXBlbGluZUFzeW5jO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNzcDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2pzLWNzcC9zcmMvY3NwLmpzXG4gKiogbW9kdWxlIGlkID0gMTkzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGJ1ZmZlcnMgPSByZXF1aXJlKFwiLi9pbXBsL2J1ZmZlcnNcIik7XG52YXIgY2hhbm5lbHMgPSByZXF1aXJlKFwiLi9pbXBsL2NoYW5uZWxzXCIpO1xudmFyIHNlbGVjdCA9IHJlcXVpcmUoXCIuL2ltcGwvc2VsZWN0XCIpO1xudmFyIHByb2Nlc3MgPSByZXF1aXJlKFwiLi9pbXBsL3Byb2Nlc3NcIik7XG52YXIgdGltZXJzID0gcmVxdWlyZShcIi4vaW1wbC90aW1lcnNcIik7XG5cbmZ1bmN0aW9uIHNwYXduKGdlbiwgY3JlYXRvcikge1xuICB2YXIgY2ggPSBjaGFubmVscy5jaGFuKGJ1ZmZlcnMuZml4ZWQoMSkpO1xuICAobmV3IHByb2Nlc3MuUHJvY2VzcyhnZW4sIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlID09PSBjaGFubmVscy5DTE9TRUQpIHtcbiAgICAgIGNoLmNsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2Nlc3MucHV0X3RoZW5fY2FsbGJhY2soY2gsIHZhbHVlLCBmdW5jdGlvbihvaykge1xuICAgICAgICBjaC5jbG9zZSgpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBjcmVhdG9yKSkucnVuKCk7XG4gIHJldHVybiBjaDtcbn07XG5cbmZ1bmN0aW9uIGdvKGYsIGFyZ3MpIHtcbiAgYXJncyA9IGFyZ3MgfHwgW107XG5cbiAgdmFyIGdlbiA9IGYuYXBwbHkobnVsbCwgYXJncyk7XG4gIHJldHVybiBzcGF3bihnZW4sIGYpO1xufTtcblxuZnVuY3Rpb24gY2hhbihidWZmZXJPck51bWJlciwgeGZvcm0sIGV4SGFuZGxlcikge1xuICB2YXIgYnVmO1xuICBpZiAoYnVmZmVyT3JOdW1iZXIgPT09IDApIHtcbiAgICBidWZmZXJPck51bWJlciA9IG51bGw7XG4gIH1cbiAgaWYgKHR5cGVvZiBidWZmZXJPck51bWJlciA9PT0gXCJudW1iZXJcIikge1xuICAgIGJ1ZiA9IGJ1ZmZlcnMuZml4ZWQoYnVmZmVyT3JOdW1iZXIpO1xuICB9IGVsc2Uge1xuICAgIGJ1ZiA9IGJ1ZmZlck9yTnVtYmVyO1xuICB9XG4gIHJldHVybiBjaGFubmVscy5jaGFuKGJ1ZiwgeGZvcm0sIGV4SGFuZGxlcik7XG59O1xuXG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBidWZmZXJzOiB7XG4gICAgZml4ZWQ6IGJ1ZmZlcnMuZml4ZWQsXG4gICAgZHJvcHBpbmc6IGJ1ZmZlcnMuZHJvcHBpbmcsXG4gICAgc2xpZGluZzogYnVmZmVycy5zbGlkaW5nXG4gIH0sXG5cbiAgc3Bhd246IHNwYXduLFxuICBnbzogZ28sXG4gIGNoYW46IGNoYW4sXG4gIERFRkFVTFQ6IHNlbGVjdC5ERUZBVUxULFxuICBDTE9TRUQ6IGNoYW5uZWxzLkNMT1NFRCxcblxuICBwdXQ6IHByb2Nlc3MucHV0LFxuICB0YWtlOiBwcm9jZXNzLnRha2UsXG4gIG9mZmVyOiBwcm9jZXNzLm9mZmVyLFxuICBwb2xsOiBwcm9jZXNzLnBvbGwsXG4gIHNsZWVwOiBwcm9jZXNzLnNsZWVwLFxuICBhbHRzOiBwcm9jZXNzLmFsdHMsXG4gIHB1dEFzeW5jOiBwcm9jZXNzLnB1dF90aGVuX2NhbGxiYWNrLFxuICB0YWtlQXN5bmM6IHByb2Nlc3MudGFrZV90aGVuX2NhbGxiYWNrLFxuICBOT19WQUxVRTogcHJvY2Vzcy5OT19WQUxVRSxcblxuICB0aW1lb3V0OiB0aW1lcnMudGltZW91dFxufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2pzLWNzcC9zcmMvY3NwLmNvcmUuanNcbiAqKiBtb2R1bGUgaWQgPSAxOTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG4vLyBUT0RPOiBDb25zaWRlciBFbXB0eUVycm9yICYgRnVsbEVycm9yIHRvIGF2b2lkIHJlZHVuZGFudCBib3VuZFxuLy8gY2hlY2tzLCB0byBpbXByb3ZlIHBlcmZvcm1hbmNlIChtYXkgbmVlZCBiZW5jaG1hcmtzKVxuXG5mdW5jdGlvbiBhY29weShzcmMsIHNyY19zdGFydCwgZHN0LCBkc3Rfc3RhcnQsIGxlbmd0aCkge1xuICB2YXIgY291bnQgPSAwO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIGlmIChjb3VudCA+PSBsZW5ndGgpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBkc3RbZHN0X3N0YXJ0ICsgY291bnRdID0gc3JjW3NyY19zdGFydCArIGNvdW50XTtcbiAgICBjb3VudCArKztcbiAgfVxufVxuXG52YXIgRU1QVFkgPSB7XG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEVNUFRZXVwiO1xuICB9XG59O1xuXG52YXIgUmluZ0J1ZmZlciA9IGZ1bmN0aW9uKGhlYWQsIHRhaWwsIGxlbmd0aCwgYXJyYXkpIHtcbiAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gIHRoaXMuYXJyYXkgPSBhcnJheTtcbiAgdGhpcy5oZWFkID0gaGVhZDtcbiAgdGhpcy50YWlsID0gdGFpbDtcbn07XG5cbi8vIEludGVybmFsIG1ldGhvZCwgY2FsbGVycyBtdXN0IGRvIGJvdW5kIGNoZWNrXG5SaW5nQnVmZmVyLnByb3RvdHlwZS5fdW5zaGlmdCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgdmFyIGFycmF5ID0gdGhpcy5hcnJheTtcbiAgdmFyIGhlYWQgPSB0aGlzLmhlYWQ7XG4gIGFycmF5W2hlYWRdID0gaXRlbTtcbiAgdGhpcy5oZWFkID0gKGhlYWQgKyAxKSAlIGFycmF5Lmxlbmd0aDtcbiAgdGhpcy5sZW5ndGggKys7XG59O1xuXG5SaW5nQnVmZmVyLnByb3RvdHlwZS5fcmVzaXplID0gZnVuY3Rpb24oKSB7XG4gIHZhciBhcnJheSA9IHRoaXMuYXJyYXk7XG4gIHZhciBuZXdfbGVuZ3RoID0gMiAqIGFycmF5Lmxlbmd0aDtcbiAgdmFyIG5ld19hcnJheSA9IG5ldyBBcnJheShuZXdfbGVuZ3RoKTtcbiAgdmFyIGhlYWQgPSB0aGlzLmhlYWQ7XG4gIHZhciB0YWlsID0gdGhpcy50YWlsO1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG4gIGlmICh0YWlsIDwgaGVhZCkge1xuICAgIGFjb3B5KGFycmF5LCB0YWlsLCBuZXdfYXJyYXksIDAsIGxlbmd0aCk7XG4gICAgdGhpcy50YWlsID0gMDtcbiAgICB0aGlzLmhlYWQgPSBsZW5ndGg7XG4gICAgdGhpcy5hcnJheSA9IG5ld19hcnJheTtcbiAgfSBlbHNlIGlmICh0YWlsID4gaGVhZCkge1xuICAgIGFjb3B5KGFycmF5LCB0YWlsLCBuZXdfYXJyYXksIDAsIGFycmF5Lmxlbmd0aCAtIHRhaWwpO1xuICAgIGFjb3B5KGFycmF5LCAwLCBuZXdfYXJyYXksIGFycmF5Lmxlbmd0aCAtIHRhaWwsIGhlYWQpO1xuICAgIHRoaXMudGFpbCA9IDA7XG4gICAgdGhpcy5oZWFkID0gbGVuZ3RoO1xuICAgIHRoaXMuYXJyYXkgPSBuZXdfYXJyYXk7XG4gIH0gZWxzZSBpZiAodGFpbCA9PT0gaGVhZCkge1xuICAgIHRoaXMudGFpbCA9IDA7XG4gICAgdGhpcy5oZWFkID0gMDtcbiAgICB0aGlzLmFycmF5ID0gbmV3X2FycmF5O1xuICB9XG59O1xuXG5SaW5nQnVmZmVyLnByb3RvdHlwZS51bmJvdW5kZWRfdW5zaGlmdCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgaWYgKHRoaXMubGVuZ3RoICsgMSA9PT0gdGhpcy5hcnJheS5sZW5ndGgpIHtcbiAgICB0aGlzLl9yZXNpemUoKTtcbiAgfVxuICB0aGlzLl91bnNoaWZ0KGl0ZW0pO1xufTtcblxuUmluZ0J1ZmZlci5wcm90b3R5cGUucG9wID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0aGlzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBFTVBUWTtcbiAgfVxuICB2YXIgYXJyYXkgPSB0aGlzLmFycmF5O1xuICB2YXIgdGFpbCA9IHRoaXMudGFpbDtcbiAgdmFyIGl0ZW0gPSBhcnJheVt0YWlsXTtcbiAgYXJyYXlbdGFpbF0gPSBudWxsO1xuICB0aGlzLnRhaWwgPSAodGFpbCArIDEpICUgYXJyYXkubGVuZ3RoO1xuICB0aGlzLmxlbmd0aCAtLTtcbiAgcmV0dXJuIGl0ZW07XG59O1xuXG5SaW5nQnVmZmVyLnByb3RvdHlwZS5jbGVhbnVwID0gZnVuY3Rpb24ocHJlZGljYXRlKSB7XG4gIHZhciBsZW5ndGggPSB0aGlzLmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gdGhpcy5wb3AoKTtcbiAgICBpZiAocHJlZGljYXRlKGl0ZW0pKSB7XG4gICAgICB0aGlzLl91bnNoaWZ0KGl0ZW0pO1xuICAgIH1cbiAgfVxufTtcblxudmFyIEZpeGVkQnVmZmVyID0gZnVuY3Rpb24oYnVmLCAgbikge1xuICB0aGlzLmJ1ZiA9IGJ1ZjtcbiAgdGhpcy5uID0gbjtcbn07XG5cbkZpeGVkQnVmZmVyLnByb3RvdHlwZS5pc19mdWxsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmJ1Zi5sZW5ndGggPj0gdGhpcy5uO1xufTtcblxuRml4ZWRCdWZmZXIucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5idWYucG9wKCk7XG59O1xuXG5GaXhlZEJ1ZmZlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oaXRlbSkge1xuICAvLyBOb3RlIHRoYXQgZXZlbiB0aG91Z2ggdGhlIHVuZGVybHlpbmcgYnVmZmVyIG1heSBncm93LCBcIm5cIiBpc1xuICAvLyBmaXhlZCBzbyBhZnRlciBvdmVyZmxvd2luZyB0aGUgYnVmZmVyIGlzIHN0aWxsIGNvbnNpZGVyZWQgZnVsbC5cbiAgdGhpcy5idWYudW5ib3VuZGVkX3Vuc2hpZnQoaXRlbSk7XG59O1xuXG5GaXhlZEJ1ZmZlci5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuYnVmLmxlbmd0aDtcbn07XG5cblxudmFyIERyb3BwaW5nQnVmZmVyID0gZnVuY3Rpb24oYnVmLCBuKSB7XG4gIHRoaXMuYnVmID0gYnVmO1xuICB0aGlzLm4gPSBuO1xufTtcblxuRHJvcHBpbmdCdWZmZXIucHJvdG90eXBlLmlzX2Z1bGwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuRHJvcHBpbmdCdWZmZXIucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5idWYucG9wKCk7XG59O1xuXG5Ecm9wcGluZ0J1ZmZlci5wcm90b3R5cGUuYWRkID0gZnVuY3Rpb24oaXRlbSkge1xuICBpZiAodGhpcy5idWYubGVuZ3RoIDwgdGhpcy5uKSB7XG4gICAgdGhpcy5idWYuX3Vuc2hpZnQoaXRlbSk7XG4gIH1cbn07XG5cbkRyb3BwaW5nQnVmZmVyLnByb3RvdHlwZS5jb3VudCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5idWYubGVuZ3RoO1xufTtcblxuXG52YXIgU2xpZGluZ0J1ZmZlciA9IGZ1bmN0aW9uKGJ1Ziwgbikge1xuICB0aGlzLmJ1ZiA9IGJ1ZjtcbiAgdGhpcy5uID0gbjtcbn07XG5cblNsaWRpbmdCdWZmZXIucHJvdG90eXBlLmlzX2Z1bGwgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuU2xpZGluZ0J1ZmZlci5wcm90b3R5cGUucmVtb3ZlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmJ1Zi5wb3AoKTtcbn07XG5cblNsaWRpbmdCdWZmZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgaWYgKHRoaXMuYnVmLmxlbmd0aCA9PT0gdGhpcy5uKSB7XG4gICAgdGhpcy5idWYucG9wKCk7XG4gIH1cbiAgdGhpcy5idWYuX3Vuc2hpZnQoaXRlbSk7XG59O1xuXG5TbGlkaW5nQnVmZmVyLnByb3RvdHlwZS5jb3VudCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5idWYubGVuZ3RoO1xufTtcblxuXG52YXIgcmluZyA9IGV4cG9ydHMucmluZyA9IGZ1bmN0aW9uIHJpbmdfYnVmZmVyKG4pIHtcbiAgcmV0dXJuIG5ldyBSaW5nQnVmZmVyKDAsIDAsIDAsIG5ldyBBcnJheShuKSk7XG59O1xuXG4vKipcbiAqIFJldHVybnMgYSBidWZmZXIgdGhhdCBpcyBjb25zaWRlcmVkIFwiZnVsbFwiIHdoZW4gaXQgcmVhY2hlcyBzaXplIG4sXG4gKiBidXQgc3RpbGwgYWNjZXB0cyBhZGRpdGlvbmFsIGl0ZW1zLCBlZmZlY3RpdmVseSBhbGxvdyBvdmVyZmxvd2luZy5cbiAqIFRoZSBvdmVyZmxvd2luZyBiZWhhdmlvciBpcyB1c2VmdWwgZm9yIHN1cHBvcnRpbmcgXCJleHBhbmRpbmdcIlxuICogdHJhbnNkdWNlcnMsIHdoZXJlIHdlIHdhbnQgdG8gY2hlY2sgaWYgYSBidWZmZXIgaXMgZnVsbCBiZWZvcmVcbiAqIHJ1bm5pbmcgdGhlIHRyYW5zZHVjZWQgc3RlcCBmdW5jdGlvbiwgd2hpbGUgc3RpbGwgYWxsb3dpbmcgYVxuICogdHJhbnNkdWNlZCBzdGVwIHRvIGV4cGFuZCBpbnRvIG11bHRpcGxlIFwiZXNzZW5jZVwiIHN0ZXBzLlxuICovXG5leHBvcnRzLmZpeGVkID0gZnVuY3Rpb24gZml4ZWRfYnVmZmVyKG4pIHtcbiAgcmV0dXJuIG5ldyBGaXhlZEJ1ZmZlcihyaW5nKG4pLCBuKTtcbn07XG5cbmV4cG9ydHMuZHJvcHBpbmcgPSBmdW5jdGlvbiBkcm9wcGluZ19idWZmZXIobikge1xuICByZXR1cm4gbmV3IERyb3BwaW5nQnVmZmVyKHJpbmcobiksIG4pO1xufTtcblxuZXhwb3J0cy5zbGlkaW5nID0gZnVuY3Rpb24gc2xpZGluZ19idWZmZXIobikge1xuICByZXR1cm4gbmV3IFNsaWRpbmdCdWZmZXIocmluZyhuKSwgbik7XG59O1xuXG5leHBvcnRzLkVNUFRZID0gRU1QVFk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9qcy1jc3Avc3JjL2ltcGwvYnVmZmVycy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBidWZmZXJzID0gcmVxdWlyZShcIi4vYnVmZmVyc1wiKTtcbnZhciBkaXNwYXRjaCA9IHJlcXVpcmUoXCIuL2Rpc3BhdGNoXCIpO1xuXG52YXIgTUFYX0RJUlRZID0gNjQ7XG52YXIgTUFYX1FVRVVFX1NJWkUgPSAxMDI0O1xuXG52YXIgQ0xPU0VEID0gbnVsbDtcblxudmFyIEJveCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbn07XG5cbnZhciBQdXRCb3ggPSBmdW5jdGlvbihoYW5kbGVyLCB2YWx1ZSkge1xuICB0aGlzLmhhbmRsZXIgPSBoYW5kbGVyO1xuICB0aGlzLnZhbHVlID0gdmFsdWU7XG59O1xuXG52YXIgQ2hhbm5lbCA9IGZ1bmN0aW9uKHRha2VzLCBwdXRzLCBidWYsIHhmb3JtKSB7XG4gIHRoaXMuYnVmID0gYnVmO1xuICB0aGlzLnhmb3JtID0geGZvcm07XG4gIHRoaXMudGFrZXMgPSB0YWtlcztcbiAgdGhpcy5wdXRzID0gcHV0cztcblxuICB0aGlzLmRpcnR5X3Rha2VzID0gMDtcbiAgdGhpcy5kaXJ0eV9wdXRzID0gMDtcbiAgdGhpcy5jbG9zZWQgPSBmYWxzZTtcbn07XG5cbmZ1bmN0aW9uIGlzUmVkdWNlZCh2KSB7XG4gIHJldHVybiB2ICYmIHZbXCJAQHRyYW5zZHVjZXIvcmVkdWNlZFwiXTtcbn1cblxuZnVuY3Rpb24gc2NoZWR1bGUoZiwgdikge1xuICBkaXNwYXRjaC5ydW4oZnVuY3Rpb24oKSB7XG4gICAgZih2KTtcbiAgfSk7XG59XG5cbkNoYW5uZWwucHJvdG90eXBlLl9wdXQgPSBmdW5jdGlvbih2YWx1ZSwgaGFuZGxlcikge1xuICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBwdXQgQ0xPU0VEIG9uIGEgY2hhbm5lbC5cIik7XG4gIH1cblxuICAvLyBUT0RPOiBJJ20gbm90IHN1cmUgaG93IHRoaXMgY2FuIGhhcHBlbiwgYmVjYXVzZSB0aGUgb3BlcmF0aW9uc1xuICAvLyBhcmUgcmVnaXN0ZXJlZCBpbiAxIHRpY2ssIGFuZCB0aGUgb25seSB3YXkgZm9yIHRoaXMgdG8gYmUgaW5hY3RpdmVcbiAgLy8gaXMgZm9yIGEgcHJldmlvdXMgb3BlcmF0aW9uIGluIHRoZSBzYW1lIGFsdCB0byBoYXZlIHJldHVybmVkXG4gIC8vIGltbWVkaWF0ZWx5LCB3aGljaCB3b3VsZCBoYXZlIHNob3J0LWNpcmN1aXRlZCB0byBwcmV2ZW50IHRoaXMgdG9cbiAgLy8gYmUgZXZlciByZWdpc3RlciBhbnl3YXkuIFRoZSBzYW1lIHRoaW5nIGdvZXMgZm9yIHRoZSBhY3RpdmUgY2hlY2tcbiAgLy8gaW4gXCJfdGFrZVwiLlxuICBpZiAoIWhhbmRsZXIuaXNfYWN0aXZlKCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGlmICh0aGlzLmNsb3NlZCkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgcmV0dXJuIG5ldyBCb3goZmFsc2UpO1xuICB9XG5cbiAgdmFyIHRha2VyLCBjYWxsYmFjaztcblxuICAvLyBTb2FrIHRoZSB2YWx1ZSB0aHJvdWdoIHRoZSBidWZmZXIgZmlyc3QsIGV2ZW4gaWYgdGhlcmUgaXMgYVxuICAvLyBwZW5kaW5nIHRha2VyLiBUaGlzIHdheSB0aGUgc3RlcCBmdW5jdGlvbiBoYXMgYSBjaGFuY2UgdG8gYWN0IG9uIHRoZVxuICAvLyB2YWx1ZS5cbiAgaWYgKHRoaXMuYnVmICYmICF0aGlzLmJ1Zi5pc19mdWxsKCkpIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIHZhciBkb25lID0gaXNSZWR1Y2VkKHRoaXMueGZvcm1bXCJAQHRyYW5zZHVjZXIvc3RlcFwiXSh0aGlzLmJ1ZiwgdmFsdWUpKTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKHRoaXMuYnVmLmNvdW50KCkgPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0YWtlciA9IHRoaXMudGFrZXMucG9wKCk7XG4gICAgICBpZiAodGFrZXIgPT09IGJ1ZmZlcnMuRU1QVFkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAodGFrZXIuaXNfYWN0aXZlKCkpIHtcbiAgICAgICAgdmFsdWUgPSB0aGlzLmJ1Zi5yZW1vdmUoKTtcbiAgICAgICAgY2FsbGJhY2sgPSB0YWtlci5jb21taXQoKTtcbiAgICAgICAgc2NoZWR1bGUoY2FsbGJhY2ssIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGRvbmUpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBCb3godHJ1ZSk7XG4gIH1cblxuICAvLyBFaXRoZXIgdGhlIGJ1ZmZlciBpcyBmdWxsLCBpbiB3aGljaCBjYXNlIHRoZXJlIHdvbid0IGJlIGFueVxuICAvLyBwZW5kaW5nIHRha2VzLCBvciB3ZSBkb24ndCBoYXZlIGEgYnVmZmVyLCBpbiB3aGljaCBjYXNlIHRoaXMgbG9vcFxuICAvLyBmdWxmaWxscyB0aGUgZmlyc3Qgb2YgdGhlbSB0aGF0IGlzIGFjdGl2ZSAobm90ZSB0aGF0IHdlIGRvbid0XG4gIC8vIGhhdmUgdG8gd29ycnkgYWJvdXQgdHJhbnNkdWNlcnMgaGVyZSBzaW5jZSB3ZSByZXF1aXJlIGEgYnVmZmVyXG4gIC8vIGZvciB0aGF0KS5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICB0YWtlciA9IHRoaXMudGFrZXMucG9wKCk7XG4gICAgaWYgKHRha2VyID09PSBidWZmZXJzLkVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHRha2VyLmlzX2FjdGl2ZSgpKSB7XG4gICAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgY2FsbGJhY2sgPSB0YWtlci5jb21taXQoKTtcbiAgICAgIHNjaGVkdWxlKGNhbGxiYWNrLCB2YWx1ZSk7XG4gICAgICByZXR1cm4gbmV3IEJveCh0cnVlKTtcbiAgICB9XG4gIH1cblxuICAvLyBObyBidWZmZXIsIGZ1bGwgYnVmZmVyLCBubyBwZW5kaW5nIHRha2VzLiBRdWV1ZSB0aGlzIHB1dCBub3cgaWYgYmxvY2thYmxlLlxuICBpZiAodGhpcy5kaXJ0eV9wdXRzID4gTUFYX0RJUlRZKSB7XG4gICAgdGhpcy5wdXRzLmNsZWFudXAoZnVuY3Rpb24ocHV0dGVyKSB7XG4gICAgICByZXR1cm4gcHV0dGVyLmhhbmRsZXIuaXNfYWN0aXZlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5kaXJ0eV9wdXRzID0gMDtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRpcnR5X3B1dHMgKys7XG4gIH1cbiAgaWYgKGhhbmRsZXIuaXNfYmxvY2thYmxlKCkpIHtcbiAgICBpZiAodGhpcy5wdXRzLmxlbmd0aCA+PSBNQVhfUVVFVUVfU0laRSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBtb3JlIHRoYW4gXCIgKyBNQVhfUVVFVUVfU0laRSArIFwiIHBlbmRpbmcgcHV0cyBhcmUgYWxsb3dlZCBvbiBhIHNpbmdsZSBjaGFubmVsLlwiKTtcbiAgICB9XG4gICAgdGhpcy5wdXRzLnVuYm91bmRlZF91bnNoaWZ0KG5ldyBQdXRCb3goaGFuZGxlciwgdmFsdWUpKTtcbiAgfVxuICByZXR1cm4gbnVsbDtcbn07XG5cbkNoYW5uZWwucHJvdG90eXBlLl90YWtlID0gZnVuY3Rpb24oaGFuZGxlcikge1xuICBpZiAoIWhhbmRsZXIuaXNfYWN0aXZlKCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBwdXR0ZXIsIHB1dF9oYW5kbGVyLCBjYWxsYmFjaywgdmFsdWU7XG5cbiAgaWYgKHRoaXMuYnVmICYmIHRoaXMuYnVmLmNvdW50KCkgPiAwKSB7XG4gICAgaGFuZGxlci5jb21taXQoKTtcbiAgICB2YWx1ZSA9IHRoaXMuYnVmLnJlbW92ZSgpO1xuICAgIC8vIFdlIG5lZWQgdG8gY2hlY2sgcGVuZGluZyBwdXRzIGhlcmUsIG90aGVyIHdpc2UgdGhleSB3b24ndFxuICAgIC8vIGJlIGFibGUgdG8gcHJvY2VlZCB1bnRpbCB0aGVpciBudW1iZXIgcmVhY2hlcyBNQVhfRElSVFlcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKHRoaXMuYnVmLmlzX2Z1bGwoKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHB1dHRlciA9IHRoaXMucHV0cy5wb3AoKTtcbiAgICAgIGlmIChwdXR0ZXIgPT09IGJ1ZmZlcnMuRU1QVFkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwdXRfaGFuZGxlciA9IHB1dHRlci5oYW5kbGVyO1xuICAgICAgaWYgKHB1dF9oYW5kbGVyLmlzX2FjdGl2ZSgpKSB7XG4gICAgICAgIGNhbGxiYWNrID0gcHV0X2hhbmRsZXIuY29tbWl0KCk7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIHNjaGVkdWxlKGNhbGxiYWNrLCB0cnVlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNSZWR1Y2VkKHRoaXMueGZvcm1bXCJAQHRyYW5zZHVjZXIvc3RlcFwiXSh0aGlzLmJ1ZiwgcHV0dGVyLnZhbHVlKSkpIHtcbiAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIG5ldyBCb3godmFsdWUpO1xuICB9XG5cbiAgLy8gRWl0aGVyIHRoZSBidWZmZXIgaXMgZW1wdHksIGluIHdoaWNoIGNhc2UgdGhlcmUgd29uJ3QgYmUgYW55XG4gIC8vIHBlbmRpbmcgcHV0cywgb3Igd2UgZG9uJ3QgaGF2ZSBhIGJ1ZmZlciwgaW4gd2hpY2ggY2FzZSB0aGlzIGxvb3BcbiAgLy8gZnVsZmlsbHMgdGhlIGZpcnN0IG9mIHRoZW0gdGhhdCBpcyBhY3RpdmUgKG5vdGUgdGhhdCB3ZSBkb24ndFxuICAvLyBoYXZlIHRvIHdvcnJ5IGFib3V0IHRyYW5zZHVjZXJzIGhlcmUgc2luY2Ugd2UgcmVxdWlyZSBhIGJ1ZmZlclxuICAvLyBmb3IgdGhhdCkuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgcHV0dGVyID0gdGhpcy5wdXRzLnBvcCgpO1xuICAgIHZhbHVlID0gcHV0dGVyLnZhbHVlO1xuICAgIGlmIChwdXR0ZXIgPT09IGJ1ZmZlcnMuRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBwdXRfaGFuZGxlciA9IHB1dHRlci5oYW5kbGVyO1xuICAgIGlmIChwdXRfaGFuZGxlci5pc19hY3RpdmUoKSkge1xuICAgICAgaGFuZGxlci5jb21taXQoKTtcbiAgICAgIGNhbGxiYWNrID0gcHV0X2hhbmRsZXIuY29tbWl0KCk7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgc2NoZWR1bGUoY2FsbGJhY2ssIHRydWUpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIG5ldyBCb3godmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0aGlzLmNsb3NlZCkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgcmV0dXJuIG5ldyBCb3goQ0xPU0VEKTtcbiAgfVxuXG4gIC8vIE5vIGJ1ZmZlciwgZW1wdHkgYnVmZmVyLCBubyBwZW5kaW5nIHB1dHMuIFF1ZXVlIHRoaXMgdGFrZSBub3cgaWYgYmxvY2thYmxlLlxuICBpZiAodGhpcy5kaXJ0eV90YWtlcyA+IE1BWF9ESVJUWSkge1xuICAgIHRoaXMudGFrZXMuY2xlYW51cChmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gaGFuZGxlci5pc19hY3RpdmUoKTtcbiAgICB9KTtcbiAgICB0aGlzLmRpcnR5X3Rha2VzID0gMDtcbiAgfSBlbHNlIHtcbiAgICB0aGlzLmRpcnR5X3Rha2VzICsrO1xuICB9XG4gIGlmIChoYW5kbGVyLmlzX2Jsb2NrYWJsZSgpKSB7XG4gICAgaWYgKHRoaXMudGFrZXMubGVuZ3RoID49IE1BWF9RVUVVRV9TSVpFKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBtb3JlIHRoYW4gXCIgKyBNQVhfUVVFVUVfU0laRSArIFwiIHBlbmRpbmcgdGFrZXMgYXJlIGFsbG93ZWQgb24gYSBzaW5nbGUgY2hhbm5lbC5cIik7XG4gICAgfVxuICAgIHRoaXMudGFrZXMudW5ib3VuZGVkX3Vuc2hpZnQoaGFuZGxlcik7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5DaGFubmVsLnByb3RvdHlwZS5jbG9zZSA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdGhpcy5jbG9zZWQgPSB0cnVlO1xuXG4gIC8vIFRPRE86IER1cGxpY2F0ZSBjb2RlLiBNYWtlIGEgXCJfZmx1c2hcIiBmdW5jdGlvbiBvciBzb21ldGhpbmdcbiAgaWYgKHRoaXMuYnVmKSB7XG4gICAgdGhpcy54Zm9ybVtcIkBAdHJhbnNkdWNlci9yZXN1bHRcIl0odGhpcy5idWYpO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAodGhpcy5idWYuY291bnQoKSA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHRha2VyID0gdGhpcy50YWtlcy5wb3AoKTtcbiAgICAgIGlmICh0YWtlciA9PT0gYnVmZmVycy5FTVBUWSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmICh0YWtlci5pc19hY3RpdmUoKSkge1xuICAgICAgICBjYWxsYmFjayA9IHRha2VyLmNvbW1pdCgpO1xuICAgICAgICB2YXIgdmFsdWUgPSB0aGlzLmJ1Zi5yZW1vdmUoKTtcbiAgICAgICAgc2NoZWR1bGUoY2FsbGJhY2ssIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHZhciB0YWtlciA9IHRoaXMudGFrZXMucG9wKCk7XG4gICAgaWYgKHRha2VyID09PSBidWZmZXJzLkVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHRha2VyLmlzX2FjdGl2ZSgpKSB7XG4gICAgICB2YXIgY2FsbGJhY2sgPSB0YWtlci5jb21taXQoKTtcbiAgICAgIHNjaGVkdWxlKGNhbGxiYWNrLCBDTE9TRUQpO1xuICAgIH1cbiAgfVxuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgdmFyIHB1dHRlciA9IHRoaXMucHV0cy5wb3AoKTtcbiAgICBpZiAocHV0dGVyID09PSBidWZmZXJzLkVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKHB1dHRlci5oYW5kbGVyLmlzX2FjdGl2ZSgpKSB7XG4gICAgICB2YXIgcHV0X2NhbGxiYWNrID0gcHV0dGVyLmhhbmRsZXIuY29tbWl0KCk7XG4gICAgICBpZiAocHV0X2NhbGxiYWNrKSB7XG4gICAgICAgIHNjaGVkdWxlKHB1dF9jYWxsYmFjaywgZmFsc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufTtcblxuXG5DaGFubmVsLnByb3RvdHlwZS5pc19jbG9zZWQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuY2xvc2VkO1xufTtcblxuZnVuY3Rpb24gZGVmYXVsdEhhbmRsZXIoZSkge1xuICBjb25zb2xlLmxvZygnZXJyb3IgaW4gY2hhbm5lbCB0cmFuc2Zvcm1lcicsIGUuc3RhY2spO1xuICByZXR1cm4gQ0xPU0VEO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVFeChidWYsIGV4SGFuZGxlciwgZSkge1xuICB2YXIgZGVmID0gKGV4SGFuZGxlciB8fCBkZWZhdWx0SGFuZGxlcikoZSk7XG4gIGlmIChkZWYgIT09IENMT1NFRCkge1xuICAgIGJ1Zi5hZGQoZGVmKTtcbiAgfVxuICByZXR1cm4gYnVmO1xufVxuXG4vLyBUaGUgYmFzZSB0cmFuc2Zvcm1lciBvYmplY3QgdG8gdXNlIHdpdGggdHJhbnNkdWNlcnNcbmZ1bmN0aW9uIEFkZFRyYW5zZm9ybWVyKCkge1xufVxuXG5BZGRUcmFuc2Zvcm1lci5wcm90b3R5cGVbXCJAQHRyYW5zZHVjZXIvaW5pdFwiXSA9IGZ1bmN0aW9uKCkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ2luaXQgbm90IGF2YWlsYWJsZScpO1xufTtcblxuQWRkVHJhbnNmb3JtZXIucHJvdG90eXBlW1wiQEB0cmFuc2R1Y2VyL3Jlc3VsdFwiXSA9IGZ1bmN0aW9uKHYpIHtcbiAgcmV0dXJuIHY7XG59O1xuXG5BZGRUcmFuc2Zvcm1lci5wcm90b3R5cGVbXCJAQHRyYW5zZHVjZXIvc3RlcFwiXSA9IGZ1bmN0aW9uKGJ1ZmZlciwgaW5wdXQpIHtcbiAgYnVmZmVyLmFkZChpbnB1dCk7XG4gIHJldHVybiBidWZmZXI7XG59O1xuXG5cbmZ1bmN0aW9uIGhhbmRsZUV4Y2VwdGlvbihleEhhbmRsZXIpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKHhmb3JtKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIFwiQEB0cmFuc2R1Y2VyL3N0ZXBcIjogZnVuY3Rpb24oYnVmZmVyLCBpbnB1dCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHJldHVybiB4Zm9ybVtcIkBAdHJhbnNkdWNlci9zdGVwXCJdKGJ1ZmZlciwgaW5wdXQpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZUV4KGJ1ZmZlciwgZXhIYW5kbGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIFwiQEB0cmFuc2R1Y2VyL3Jlc3VsdFwiOiBmdW5jdGlvbihidWZmZXIpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4geGZvcm1bXCJAQHRyYW5zZHVjZXIvcmVzdWx0XCJdKGJ1ZmZlcik7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlRXgoYnVmZmVyLCBleEhhbmRsZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn1cblxuLy8gWFhYOiBUaGlzIGlzIGluY29uc2lzdGVudC4gV2Ugc2hvdWxkIGVpdGhlciBjYWxsIHRoZSByZWR1Y2luZ1xuLy8gZnVuY3Rpb24geGZvcm0sIG9yIGNhbGwgdGhlIHRyYW5zZHVjZXIgeGZvcm0sIG5vdCBib3RoXG5leHBvcnRzLmNoYW4gPSBmdW5jdGlvbihidWYsIHhmb3JtLCBleEhhbmRsZXIpIHtcbiAgaWYgKHhmb3JtKSB7XG4gICAgaWYgKCFidWYpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIk9ubHkgYnVmZmVyZWQgY2hhbm5lbHMgY2FuIHVzZSB0cmFuc2R1Y2Vyc1wiKTtcbiAgICB9XG5cbiAgICB4Zm9ybSA9IHhmb3JtKG5ldyBBZGRUcmFuc2Zvcm1lcigpKTtcbiAgfSBlbHNlIHtcbiAgICB4Zm9ybSA9IG5ldyBBZGRUcmFuc2Zvcm1lcigpO1xuICB9XG4gIHhmb3JtID0gaGFuZGxlRXhjZXB0aW9uKGV4SGFuZGxlcikoeGZvcm0pO1xuXG4gIHJldHVybiBuZXcgQ2hhbm5lbChidWZmZXJzLnJpbmcoMzIpLCBidWZmZXJzLnJpbmcoMzIpLCBidWYsIHhmb3JtKTtcbn07XG5cbmV4cG9ydHMuQm94ID0gQm94O1xuZXhwb3J0cy5DaGFubmVsID0gQ2hhbm5lbDtcbmV4cG9ydHMuQ0xPU0VEID0gQ0xPU0VEO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vanMtY3NwL3NyYy9pbXBsL2NoYW5uZWxzLmpzXG4gKiogbW9kdWxlIGlkID0gMTk2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gVE9ETzogVXNlIHByb2Nlc3MubmV4dFRpY2sgaWYgaXQncyBhdmFpbGFibGUgc2luY2UgaXQncyBtb3JlXG4vLyBlZmZpY2llbnRcbi8vIGh0dHA6Ly9ob3d0b25vZGUub3JnL3VuZGVyc3RhbmRpbmctcHJvY2Vzcy1uZXh0LXRpY2tcbi8vIE1heWJlIHdlIGRvbid0IGV2ZW4gbmVlZCB0byBxdWV1ZSBvdXJzZWx2ZXMgaW4gdGhhdCBjYXNlP1xuXG4vLyBYWFg6IEJ1dCBodHRwOi8vYmxvZy5ub2RlanMub3JnLzIwMTMvMDMvMTEvbm9kZS12MC0xMC0wLXN0YWJsZS9cbi8vIExvb2tzIGxpa2UgaXQgd2lsbCBibG93IHVwIHRoZSBzdGFjayAob3IgaXMgdGhhdCBqdXN0IGFib3V0XG4vLyBwcmUtZW1wdGluZyBJTyAoYnV0IHRoYXQncyBhbHJlYWR5IGJhZCBlbm91Z2ggSU1PKT8pXG5cbi8vIExvb2tzIGxpa2Vcbi8vIGh0dHA6Ly9ub2RlanMub3JnL2FwaS9wcm9jZXNzLmh0bWwjcHJvY2Vzc19wcm9jZXNzX25leHR0aWNrX2NhbGxiYWNrXG4vLyBpcyB0aGUgZXF1aXZhbGVudCBvZiBvdXIgVEFTS19CQVRDSF9TSVpFXG5cbnZhciBidWZmZXJzID0gcmVxdWlyZShcIi4vYnVmZmVyc1wiKTtcblxudmFyIFRBU0tfQkFUQ0hfU0laRSA9IDEwMjQ7XG5cbnZhciB0YXNrcyA9IGJ1ZmZlcnMucmluZygzMik7XG52YXIgcnVubmluZyA9IGZhbHNlO1xudmFyIHF1ZXVlZCA9IGZhbHNlO1xuXG52YXIgcXVldWVfZGlzcGF0Y2hlcjtcblxuZnVuY3Rpb24gcHJvY2Vzc19tZXNzYWdlcygpIHtcbiAgcnVubmluZyA9IHRydWU7XG4gIHF1ZXVlZCA9IGZhbHNlO1xuICB2YXIgY291bnQgPSAwO1xuICB3aGlsZSAodHJ1ZSkge1xuICAgIHZhciB0YXNrID0gdGFza3MucG9wKCk7XG4gICAgaWYgKHRhc2sgPT09IGJ1ZmZlcnMuRU1QVFkpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBUT0RPOiBEb24ndCB3ZSBuZWVkIGEgdHJ5L2ZpbmFsbHkgaGVyZT9cbiAgICB0YXNrKCk7XG4gICAgaWYgKGNvdW50ID49IFRBU0tfQkFUQ0hfU0laRSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGNvdW50ICsrO1xuICB9XG4gIHJ1bm5pbmcgPSBmYWxzZTtcbiAgaWYgKHRhc2tzLmxlbmd0aCA+IDApIHtcbiAgICBxdWV1ZV9kaXNwYXRjaGVyKCk7XG4gIH1cbn1cblxuaWYgKHR5cGVvZiBNZXNzYWdlQ2hhbm5lbCAhPT0gXCJ1bmRlZmluZWRcIikge1xuICB2YXIgbWVzc2FnZV9jaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gIG1lc3NhZ2VfY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBmdW5jdGlvbihfKSB7XG4gICAgcHJvY2Vzc19tZXNzYWdlcygpO1xuICB9O1xuICBxdWV1ZV9kaXNwYXRjaGVyID0gZnVuY3Rpb24oKSAge1xuICAgIGlmICghKHF1ZXVlZCAmJiBydW5uaW5nKSkge1xuICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgIG1lc3NhZ2VfY2hhbm5lbC5wb3J0Mi5wb3N0TWVzc2FnZSgwKTtcbiAgICB9XG4gIH07XG59IGVsc2UgaWYgKHR5cGVvZiBzZXRJbW1lZGlhdGUgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgcXVldWVfZGlzcGF0Y2hlciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghKHF1ZXVlZCAmJiBydW5uaW5nKSkge1xuICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgIHNldEltbWVkaWF0ZShwcm9jZXNzX21lc3NhZ2VzKTtcbiAgICB9XG4gIH07XG59IGVsc2Uge1xuICBxdWV1ZV9kaXNwYXRjaGVyID0gZnVuY3Rpb24oKSB7XG4gICAgaWYgKCEocXVldWVkICYmIHJ1bm5pbmcpKSB7XG4gICAgICBxdWV1ZWQgPSB0cnVlO1xuICAgICAgc2V0VGltZW91dChwcm9jZXNzX21lc3NhZ2VzLCAwKTtcbiAgICB9XG4gIH07XG59XG5cbmV4cG9ydHMucnVuID0gZnVuY3Rpb24gKGYpIHtcbiAgdGFza3MudW5ib3VuZGVkX3Vuc2hpZnQoZik7XG4gIHF1ZXVlX2Rpc3BhdGNoZXIoKTtcbn07XG5cbmV4cG9ydHMucXVldWVfZGVsYXkgPSBmdW5jdGlvbihmLCBkZWxheSkge1xuICBzZXRUaW1lb3V0KGYsIGRlbGF5KTtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9qcy1jc3Avc3JjL2ltcGwvZGlzcGF0Y2guanNcbiAqKiBtb2R1bGUgaWQgPSAxOTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgQm94ID0gcmVxdWlyZShcIi4vY2hhbm5lbHNcIikuQm94O1xuXG52YXIgQWx0SGFuZGxlciA9IGZ1bmN0aW9uKGZsYWcsIGYpIHtcbiAgdGhpcy5mID0gZjtcbiAgdGhpcy5mbGFnID0gZmxhZztcbn07XG5cbkFsdEhhbmRsZXIucHJvdG90eXBlLmlzX2FjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5mbGFnLnZhbHVlO1xufTtcblxuQWx0SGFuZGxlci5wcm90b3R5cGUuaXNfYmxvY2thYmxlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0cnVlO1xufTtcblxuQWx0SGFuZGxlci5wcm90b3R5cGUuY29tbWl0ID0gZnVuY3Rpb24oKSB7XG4gIHRoaXMuZmxhZy52YWx1ZSA9IGZhbHNlO1xuICByZXR1cm4gdGhpcy5mO1xufTtcblxudmFyIEFsdFJlc3VsdCA9IGZ1bmN0aW9uKHZhbHVlLCBjaGFubmVsKSB7XG4gIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgdGhpcy5jaGFubmVsID0gY2hhbm5lbDtcbn07XG5cbmZ1bmN0aW9uIHJhbmRfaW50KG4pIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChuICsgMSkpO1xufVxuXG5mdW5jdGlvbiByYW5kb21fYXJyYXkobikge1xuICB2YXIgYSA9IG5ldyBBcnJheShuKTtcbiAgdmFyIGk7XG4gIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICBhW2ldID0gMDtcbiAgfVxuICBmb3IgKGkgPSAxOyBpIDwgbjsgaSsrKSB7XG4gICAgdmFyIGogPSByYW5kX2ludChpKTtcbiAgICBhW2ldID0gYVtqXTtcbiAgICBhW2pdID0gaTtcbiAgfVxuICByZXR1cm4gYTtcbn1cblxudmFyIGhhc093blByb3BlcnR5ID0gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIERFRkFVTFQgPSB7XG4gIHRvU3RyaW5nOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IERFRkFVTFRdXCI7XG4gIH1cbn07XG5cbi8vIFRPRE86IEFjY2VwdCBhIHByaW9yaXR5IGZ1bmN0aW9uIG9yIHNvbWV0aGluZ1xuZXhwb3J0cy5kb19hbHRzID0gZnVuY3Rpb24ob3BlcmF0aW9ucywgY2FsbGJhY2ssIG9wdGlvbnMpIHtcbiAgdmFyIGxlbmd0aCA9IG9wZXJhdGlvbnMubGVuZ3RoO1xuICAvLyBYWFggSG1tXG4gIGlmIChsZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbXB0eSBhbHQgbGlzdFwiKTtcbiAgfVxuXG4gIHZhciBwcmlvcml0eSA9IChvcHRpb25zICYmIG9wdGlvbnMucHJpb3JpdHkpID8gdHJ1ZSA6IGZhbHNlO1xuICBpZiAoIXByaW9yaXR5KSB7XG4gICAgdmFyIGluZGV4ZXMgPSByYW5kb21fYXJyYXkobGVuZ3RoKTtcbiAgfVxuXG4gIHZhciBmbGFnID0gbmV3IEJveCh0cnVlKTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIG9wZXJhdGlvbiA9IG9wZXJhdGlvbnNbcHJpb3JpdHkgPyBpIDogaW5kZXhlc1tpXV07XG4gICAgdmFyIHBvcnQsIHJlc3VsdDtcbiAgICAvLyBYWFggSG1tXG4gICAgaWYgKG9wZXJhdGlvbiBpbnN0YW5jZW9mIEFycmF5KSB7XG4gICAgICB2YXIgdmFsdWUgPSBvcGVyYXRpb25bMV07XG4gICAgICBwb3J0ID0gb3BlcmF0aW9uWzBdO1xuICAgICAgLy8gV2Ugd3JhcCB0aGlzIGluIGEgZnVuY3Rpb24gdG8gY2FwdHVyZSB0aGUgdmFsdWUgb2YgXCJwb3J0XCIsXG4gICAgICAvLyBiZWNhdXNlIGpzJyBjbG9zdXJlIGNhcHR1cmVzIHZhcnMgYnkgXCJyZWZlcmVuY2VzXCIsIG5vdFxuICAgICAgLy8gdmFsdWVzLiBcImxldCBwb3J0XCIgd291bGQgaGF2ZSB3b3JrZWQsIGJ1dCBJIGRvbid0IHdhbnQgdG9cbiAgICAgIC8vIHJhaXNlIHRoZSBydW50aW1lIHJlcXVpcmVtZW50IHlldC4gVE9ETzogU28gY2hhbmdlIHRoaXMgd2hlblxuICAgICAgLy8gbW9zdCBydW50aW1lcyBhcmUgbW9kZXJuIGVub3VnaC5cbiAgICAgIHJlc3VsdCA9IHBvcnQuX3B1dCh2YWx1ZSwgKGZ1bmN0aW9uKHBvcnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBbHRIYW5kbGVyKGZsYWcsIGZ1bmN0aW9uKG9rKSB7XG4gICAgICAgICAgY2FsbGJhY2sobmV3IEFsdFJlc3VsdChvaywgcG9ydCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKHBvcnQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcG9ydCA9IG9wZXJhdGlvbjtcbiAgICAgIHJlc3VsdCA9IHBvcnQuX3Rha2UoKGZ1bmN0aW9uKHBvcnQpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBBbHRIYW5kbGVyKGZsYWcsIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgY2FsbGJhY2sobmV3IEFsdFJlc3VsdCh2YWx1ZSwgcG9ydCkpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKHBvcnQpKTtcbiAgICB9XG4gICAgLy8gWFhYIEhtbVxuICAgIGlmIChyZXN1bHQgaW5zdGFuY2VvZiBCb3gpIHtcbiAgICAgIGNhbGxiYWNrKG5ldyBBbHRSZXN1bHQocmVzdWx0LnZhbHVlLCBwb3J0KSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBpZiAoIShyZXN1bHQgaW5zdGFuY2VvZiBCb3gpXG4gICAgICAmJiBvcHRpb25zXG4gICAgICAmJiBoYXNPd25Qcm9wZXJ0eS5jYWxsKG9wdGlvbnMsIFwiZGVmYXVsdFwiKSkge1xuICAgIGlmIChmbGFnLnZhbHVlKSB7XG4gICAgICBmbGFnLnZhbHVlID0gZmFsc2U7XG4gICAgICBjYWxsYmFjayhuZXcgQWx0UmVzdWx0KG9wdGlvbnNbXCJkZWZhdWx0XCJdLCBERUZBVUxUKSk7XG4gICAgfVxuICB9XG59O1xuXG5leHBvcnRzLkRFRkFVTFQgPSBERUZBVUxUO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vanMtY3NwL3NyYy9pbXBsL3NlbGVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDE5OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBkaXNwYXRjaCA9IHJlcXVpcmUoXCIuL2Rpc3BhdGNoXCIpO1xudmFyIHNlbGVjdCA9IHJlcXVpcmUoXCIuL3NlbGVjdFwiKTtcbnZhciBDaGFubmVsID0gcmVxdWlyZShcIi4vY2hhbm5lbHNcIikuQ2hhbm5lbDtcblxudmFyIE5PX1ZBTFVFID0ge307XG5cbnZhciBGbkhhbmRsZXIgPSBmdW5jdGlvbihibG9ja2FibGUsIGYpIHtcbiAgdGhpcy5mID0gZjtcbiAgdGhpcy5ibG9ja2FibGUgPSBibG9ja2FibGU7XG59O1xuXG5GbkhhbmRsZXIucHJvdG90eXBlLmlzX2FjdGl2ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkZuSGFuZGxlci5wcm90b3R5cGUuaXNfYmxvY2thYmxlID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmJsb2NrYWJsZTtcbn07XG5cbkZuSGFuZGxlci5wcm90b3R5cGUuY29tbWl0ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmY7XG59O1xuXG5mdW5jdGlvbiBwdXRfdGhlbl9jYWxsYmFjayhjaGFubmVsLCB2YWx1ZSwgY2FsbGJhY2spIHtcbiAgdmFyIHJlc3VsdCA9IGNoYW5uZWwuX3B1dCh2YWx1ZSwgbmV3IEZuSGFuZGxlcih0cnVlLCBjYWxsYmFjaykpO1xuICBpZiAocmVzdWx0ICYmIGNhbGxiYWNrKSB7XG4gICAgY2FsbGJhY2socmVzdWx0LnZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0YWtlX3RoZW5fY2FsbGJhY2soY2hhbm5lbCwgY2FsbGJhY2spIHtcbiAgdmFyIHJlc3VsdCA9IGNoYW5uZWwuX3Rha2UobmV3IEZuSGFuZGxlcih0cnVlLCBjYWxsYmFjaykpO1xuICBpZiAocmVzdWx0KSB7XG4gICAgY2FsbGJhY2socmVzdWx0LnZhbHVlKTtcbiAgfVxufVxuXG52YXIgUHJvY2VzcyA9IGZ1bmN0aW9uKGdlbiwgb25GaW5pc2gsIGNyZWF0b3IpIHtcbiAgdGhpcy5nZW4gPSBnZW47XG4gIHRoaXMuY3JlYXRvckZ1bmMgPSBjcmVhdG9yO1xuICB0aGlzLmZpbmlzaGVkID0gZmFsc2U7XG4gIHRoaXMub25GaW5pc2ggPSBvbkZpbmlzaDtcbn07XG5cbnZhciBJbnN0cnVjdGlvbiA9IGZ1bmN0aW9uKG9wLCBkYXRhKSB7XG4gIHRoaXMub3AgPSBvcDtcbiAgdGhpcy5kYXRhID0gZGF0YTtcbn07XG5cbnZhciBUQUtFID0gXCJ0YWtlXCI7XG52YXIgUFVUID0gXCJwdXRcIjtcbnZhciBTTEVFUCA9IFwic2xlZXBcIjtcbnZhciBBTFRTID0gXCJhbHRzXCI7XG5cbi8vIFRPRE8gRklYIFhYWDogVGhpcyBpcyBhIChwcm9iYWJseSkgdGVtcG9yYXJ5IGhhY2sgdG8gYXZvaWQgYmxvd2luZ1xuLy8gdXAgdGhlIHN0YWNrLCBidXQgaXQgbWVhbnMgZG91YmxlIHF1ZXVlaW5nIHdoZW4gdGhlIHZhbHVlIGlzIG5vdFxuLy8gaW1tZWRpYXRlbHkgYXZhaWxhYmxlXG5Qcm9jZXNzLnByb3RvdHlwZS5fY29udGludWUgPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICB2YXIgc2VsZiA9IHRoaXM7XG4gIGRpc3BhdGNoLnJ1bihmdW5jdGlvbigpIHtcbiAgICBzZWxmLnJ1bihyZXNwb25zZSk7XG4gIH0pO1xufTtcblxuUHJvY2Vzcy5wcm90b3R5cGUuX2RvbmUgPSBmdW5jdGlvbih2YWx1ZSkge1xuICBpZiAoIXRoaXMuZmluaXNoZWQpIHtcbiAgICB0aGlzLmZpbmlzaGVkID0gdHJ1ZTtcbiAgICB2YXIgb25GaW5pc2ggPSB0aGlzLm9uRmluaXNoO1xuICAgIGlmICh0eXBlb2Ygb25GaW5pc2ggPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgZGlzcGF0Y2gucnVuKGZ1bmN0aW9uKCkge1xuICAgICAgICBvbkZpbmlzaCh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cbn07XG5cblByb2Nlc3MucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uKHJlc3BvbnNlKSB7XG4gIGlmICh0aGlzLmZpbmlzaGVkKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gVE9ETzogU2hvdWxkbid0IHdlIChvcHRpb25hbGx5KSBzdG9wIGVycm9yIHByb3BhZ2F0aW9uIGhlcmUgKGFuZFxuICAvLyBzaWduYWwgdGhlIGVycm9yIHRocm91Z2ggYSBjaGFubmVsIG9yIHNvbWV0aGluZyk/IE90aGVyd2lzZSB0aGVcbiAgLy8gdW5jYXVnaHQgZXhjZXB0aW9uIHdpbGwgY3Jhc2ggc29tZSBydW50aW1lcyAoZS5nLiBOb2RlKVxuICB2YXIgaXRlciA9IHRoaXMuZ2VuLm5leHQocmVzcG9uc2UpO1xuICBpZiAoaXRlci5kb25lKSB7XG4gICAgdGhpcy5fZG9uZShpdGVyLnZhbHVlKTtcbiAgICByZXR1cm47XG4gIH1cblxuICB2YXIgaW5zID0gaXRlci52YWx1ZTtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuXG4gIGlmIChpbnMgaW5zdGFuY2VvZiBJbnN0cnVjdGlvbikge1xuICAgIHN3aXRjaCAoaW5zLm9wKSB7XG4gICAgY2FzZSBQVVQ6XG4gICAgICB2YXIgZGF0YSA9IGlucy5kYXRhO1xuICAgICAgcHV0X3RoZW5fY2FsbGJhY2soZGF0YS5jaGFubmVsLCBkYXRhLnZhbHVlLCBmdW5jdGlvbihvaykge1xuICAgICAgICBzZWxmLl9jb250aW51ZShvayk7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBUQUtFOlxuICAgICAgdmFyIGNoYW5uZWwgPSBpbnMuZGF0YTtcbiAgICAgIHRha2VfdGhlbl9jYWxsYmFjayhjaGFubmVsLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICBzZWxmLl9jb250aW51ZSh2YWx1ZSk7XG4gICAgICB9KTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBTTEVFUDpcbiAgICAgIHZhciBtc2VjcyA9IGlucy5kYXRhO1xuICAgICAgZGlzcGF0Y2gucXVldWVfZGVsYXkoZnVuY3Rpb24oKSB7XG4gICAgICAgIHNlbGYucnVuKG51bGwpO1xuICAgICAgfSwgbXNlY3MpO1xuICAgICAgYnJlYWs7XG5cbiAgICBjYXNlIEFMVFM6XG4gICAgICBzZWxlY3QuZG9fYWx0cyhpbnMuZGF0YS5vcGVyYXRpb25zLCBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICAgICAgc2VsZi5fY29udGludWUocmVzdWx0KTtcbiAgICAgIH0sIGlucy5kYXRhLm9wdGlvbnMpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGVsc2UgaWYoaW5zIGluc3RhbmNlb2YgQ2hhbm5lbCkge1xuICAgIHZhciBjaGFubmVsID0gaW5zO1xuICAgIHRha2VfdGhlbl9jYWxsYmFjayhjaGFubmVsLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgc2VsZi5fY29udGludWUodmFsdWUpO1xuICAgIH0pO1xuICB9XG4gIGVsc2Uge1xuICAgIHRoaXMuX2NvbnRpbnVlKGlucyk7XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHRha2UoY2hhbm5lbCkge1xuICByZXR1cm4gbmV3IEluc3RydWN0aW9uKFRBS0UsIGNoYW5uZWwpO1xufVxuXG5mdW5jdGlvbiBwdXQoY2hhbm5lbCwgdmFsdWUpIHtcbiAgcmV0dXJuIG5ldyBJbnN0cnVjdGlvbihQVVQsIHtcbiAgICBjaGFubmVsOiBjaGFubmVsLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9KTtcbn1cblxuZnVuY3Rpb24gcG9sbChjaGFubmVsKSB7XG4gIGlmIChjaGFubmVsLmNsb3NlZCkge1xuICAgIHJldHVybiBOT19WQUxVRTtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBjaGFubmVsLl90YWtlKG5ldyBGbkhhbmRsZXIoZmFsc2UpKTtcbiAgaWYgKHJlc3VsdCkge1xuICAgIHJldHVybiByZXN1bHQudmFsdWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIE5PX1ZBTFVFO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9mZmVyKGNoYW5uZWwsIHZhbHVlKSB7XG4gIGlmIChjaGFubmVsLmNsb3NlZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHZhciByZXN1bHQgPSBjaGFubmVsLl9wdXQodmFsdWUsIG5ldyBGbkhhbmRsZXIoZmFsc2UpKTtcbiAgaWYgKHJlc3VsdCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzbGVlcChtc2Vjcykge1xuICByZXR1cm4gbmV3IEluc3RydWN0aW9uKFNMRUVQLCBtc2Vjcyk7XG59XG5cbmZ1bmN0aW9uIGFsdHMob3BlcmF0aW9ucywgb3B0aW9ucykge1xuICByZXR1cm4gbmV3IEluc3RydWN0aW9uKEFMVFMsIHtcbiAgICBvcGVyYXRpb25zOiBvcGVyYXRpb25zLFxuICAgIG9wdGlvbnM6IG9wdGlvbnNcbiAgfSk7XG59XG5cbmV4cG9ydHMucHV0X3RoZW5fY2FsbGJhY2sgPSBwdXRfdGhlbl9jYWxsYmFjaztcbmV4cG9ydHMudGFrZV90aGVuX2NhbGxiYWNrID0gdGFrZV90aGVuX2NhbGxiYWNrO1xuZXhwb3J0cy5wdXQgPSBwdXQ7XG5leHBvcnRzLnRha2UgPSB0YWtlO1xuZXhwb3J0cy5vZmZlciA9IG9mZmVyO1xuZXhwb3J0cy5wb2xsID0gcG9sbDtcbmV4cG9ydHMuc2xlZXAgPSBzbGVlcDtcbmV4cG9ydHMuYWx0cyA9IGFsdHM7XG5leHBvcnRzLkluc3RydWN0aW9uID0gSW5zdHJ1Y3Rpb247XG5leHBvcnRzLlByb2Nlc3MgPSBQcm9jZXNzO1xuZXhwb3J0cy5OT19WQUxVRSA9IE5PX1ZBTFVFO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vanMtY3NwL3NyYy9pbXBsL3Byb2Nlc3MuanNcbiAqKiBtb2R1bGUgaWQgPSAxOTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZGlzcGF0Y2ggPSByZXF1aXJlKFwiLi9kaXNwYXRjaFwiKTtcbnZhciBjaGFubmVscyA9IHJlcXVpcmUoXCIuL2NoYW5uZWxzXCIpO1xuXG5leHBvcnRzLnRpbWVvdXQgPSBmdW5jdGlvbiB0aW1lb3V0X2NoYW5uZWwobXNlY3MpIHtcbiAgdmFyIGNoYW4gPSBjaGFubmVscy5jaGFuKCk7XG4gIGRpc3BhdGNoLnF1ZXVlX2RlbGF5KGZ1bmN0aW9uKCkge1xuICAgIGNoYW4uY2xvc2UoKTtcbiAgfSwgbXNlY3MpO1xuICByZXR1cm4gY2hhbjtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9qcy1jc3Avc3JjL2ltcGwvdGltZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gMjAwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIEJveCA9IHJlcXVpcmUoXCIuL2ltcGwvY2hhbm5lbHNcIikuQm94O1xuXG52YXIgY3NwID0gcmVxdWlyZShcIi4vY3NwLmNvcmVcIiksXG4gICAgZ28gPSBjc3AuZ28sXG4gICAgdGFrZSA9IGNzcC50YWtlLFxuICAgIHB1dCA9IGNzcC5wdXQsXG4gICAgdGFrZUFzeW5jID0gY3NwLnRha2VBc3luYyxcbiAgICBwdXRBc3luYyA9IGNzcC5wdXRBc3luYyxcbiAgICBhbHRzID0gY3NwLmFsdHMsXG4gICAgY2hhbiA9IGNzcC5jaGFuLFxuICAgIENMT1NFRCA9IGNzcC5DTE9TRUQ7XG5cblxuZnVuY3Rpb24gbWFwRnJvbShmLCBjaCkge1xuICByZXR1cm4ge1xuICAgIGlzX2Nsb3NlZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gY2guaXNfY2xvc2VkKCk7XG4gICAgfSxcbiAgICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICBjaC5jbG9zZSgpO1xuICAgIH0sXG4gICAgX3B1dDogZnVuY3Rpb24odmFsdWUsIGhhbmRsZXIpIHtcbiAgICAgIHJldHVybiBjaC5fcHV0KHZhbHVlLCBoYW5kbGVyKTtcbiAgICB9LFxuICAgIF90YWtlOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICB2YXIgcmVzdWx0ID0gY2guX3Rha2Uoe1xuICAgICAgICBpc19hY3RpdmU6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHJldHVybiBoYW5kbGVyLmlzX2FjdGl2ZSgpO1xuICAgICAgICB9LFxuICAgICAgICBjb21taXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHZhciB0YWtlX2NiID0gaGFuZGxlci5jb21taXQoKTtcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0YWtlX2NiKHZhbHVlID09PSBDTE9TRUQgPyBDTE9TRUQgOiBmKHZhbHVlKSk7XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHJlc3VsdC52YWx1ZTtcbiAgICAgICAgcmV0dXJuIG5ldyBCb3godmFsdWUgPT09IENMT1NFRCA/IENMT1NFRCA6IGYodmFsdWUpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwSW50byhmLCBjaCkge1xuICByZXR1cm4ge1xuICAgIGlzX2Nsb3NlZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gY2guaXNfY2xvc2VkKCk7XG4gICAgfSxcbiAgICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICBjaC5jbG9zZSgpO1xuICAgIH0sXG4gICAgX3B1dDogZnVuY3Rpb24odmFsdWUsIGhhbmRsZXIpIHtcbiAgICAgIHJldHVybiBjaC5fcHV0KGYodmFsdWUpLCBoYW5kbGVyKTtcbiAgICB9LFxuICAgIF90YWtlOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gY2guX3Rha2UoaGFuZGxlcik7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJGcm9tKHAsIGNoLCBidWZmZXJPck4pIHtcbiAgdmFyIG91dCA9IGNoYW4oYnVmZmVyT3JOKTtcbiAgZ28oZnVuY3Rpb24qKCkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB2YXIgdmFsdWUgPSB5aWVsZCB0YWtlKGNoKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIG91dC5jbG9zZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmIChwKHZhbHVlKSkge1xuICAgICAgICB5aWVsZCBwdXQob3V0LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gZmlsdGVySW50byhwLCBjaCkge1xuICByZXR1cm4ge1xuICAgIGlzX2Nsb3NlZDogZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gY2guaXNfY2xvc2VkKCk7XG4gICAgfSxcbiAgICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgICBjaC5jbG9zZSgpO1xuICAgIH0sXG4gICAgX3B1dDogZnVuY3Rpb24odmFsdWUsIGhhbmRsZXIpIHtcbiAgICAgIGlmIChwKHZhbHVlKSkge1xuICAgICAgICByZXR1cm4gY2guX3B1dCh2YWx1ZSwgaGFuZGxlcik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbmV3IEJveCghY2guaXNfY2xvc2VkKCkpO1xuICAgICAgfVxuICAgIH0sXG4gICAgX3Rha2U6IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgICAgIHJldHVybiBjaC5fdGFrZShoYW5kbGVyKTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUZyb20ocCwgY2gpIHtcbiAgcmV0dXJuIGZpbHRlckZyb20oZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gIXAodmFsdWUpO1xuICB9LCBjaCk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUludG8ocCwgY2gpIHtcbiAgcmV0dXJuIGZpbHRlckludG8oZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gIXAodmFsdWUpO1xuICB9LCBjaCk7XG59XG5cbmZ1bmN0aW9uKiBtYXBjYXQoZiwgc3JjLCBkc3QpIHtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICB2YXIgdmFsdWUgPSB5aWVsZCB0YWtlKHNyYyk7XG4gICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgIGRzdC5jbG9zZSgpO1xuICAgICAgYnJlYWs7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBzZXEgPSBmKHZhbHVlKTtcbiAgICAgIHZhciBsZW5ndGggPSBzZXEubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB5aWVsZCBwdXQoZHN0LCBzZXFbaV0pO1xuICAgICAgfVxuICAgICAgaWYgKGRzdC5pc19jbG9zZWQoKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbWFwY2F0RnJvbShmLCBjaCwgYnVmZmVyT3JOKSB7XG4gIHZhciBvdXQgPSBjaGFuKGJ1ZmZlck9yTik7XG4gIGdvKG1hcGNhdCwgW2YsIGNoLCBvdXRdKTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gbWFwY2F0SW50byhmLCBjaCwgYnVmZmVyT3JOKSB7XG4gIHZhciBzcmMgPSBjaGFuKGJ1ZmZlck9yTik7XG4gIGdvKG1hcGNhdCwgW2YsIHNyYywgY2hdKTtcbiAgcmV0dXJuIHNyYztcbn1cblxuZnVuY3Rpb24gcGlwZShzcmMsIGRzdCwga2VlcE9wZW4pIHtcbiAgZ28oZnVuY3Rpb24qKCkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB2YXIgdmFsdWUgPSB5aWVsZCB0YWtlKHNyYyk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBpZiAoIWtlZXBPcGVuKSB7XG4gICAgICAgICAgZHN0LmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAoISh5aWVsZCBwdXQoZHN0LCB2YWx1ZSkpKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBkc3Q7XG59XG5cbmZ1bmN0aW9uIHNwbGl0KHAsIGNoLCB0cnVlQnVmZmVyT3JOLCBmYWxzZUJ1ZmZlck9yTikge1xuICB2YXIgdGNoID0gY2hhbih0cnVlQnVmZmVyT3JOKTtcbiAgdmFyIGZjaCA9IGNoYW4oZmFsc2VCdWZmZXJPck4pO1xuICBnbyhmdW5jdGlvbiooKSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHlpZWxkIHRha2UoY2gpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgdGNoLmNsb3NlKCk7XG4gICAgICAgIGZjaC5jbG9zZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHlpZWxkIHB1dChwKHZhbHVlKSA/IHRjaCA6IGZjaCwgdmFsdWUpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBbdGNoLCBmY2hdO1xufVxuXG5mdW5jdGlvbiByZWR1Y2UoZiwgaW5pdCwgY2gpIHtcbiAgcmV0dXJuIGdvKGZ1bmN0aW9uKigpIHtcbiAgICB2YXIgcmVzdWx0ID0gaW5pdDtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIHZhbHVlID0geWllbGQgdGFrZShjaCk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gZihyZXN1bHQsIHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIFtdLCB0cnVlKTtcbn1cblxuZnVuY3Rpb24gb250byhjaCwgY29sbCwga2VlcE9wZW4pIHtcbiAgcmV0dXJuIGdvKGZ1bmN0aW9uKigpIHtcbiAgICB2YXIgbGVuZ3RoID0gY29sbC5sZW5ndGg7XG4gICAgLy8gRklYOiBTaG91bGQgYmUgYSBnZW5lcmljIGxvb3BpbmcgaW50ZXJmYWNlIChmb3IuLi5pbj8pXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgeWllbGQgcHV0KGNoLCBjb2xsW2ldKTtcbiAgICB9XG4gICAgaWYgKCFrZWVwT3Blbikge1xuICAgICAgY2guY2xvc2UoKTtcbiAgICB9XG4gIH0pO1xufVxuXG4vLyBUT0RPOiBCb3VuZGVkP1xuZnVuY3Rpb24gZnJvbUNvbGwoY29sbCkge1xuICB2YXIgY2ggPSBjaGFuKGNvbGwubGVuZ3RoKTtcbiAgb250byhjaCwgY29sbCk7XG4gIHJldHVybiBjaDtcbn1cblxuZnVuY3Rpb24gbWFwKGYsIGNocywgYnVmZmVyT3JOKSB7XG4gIHZhciBvdXQgPSBjaGFuKGJ1ZmZlck9yTik7XG4gIHZhciBsZW5ndGggPSBjaHMubGVuZ3RoO1xuICAvLyBBcnJheSBob2xkaW5nIDEgcm91bmQgb2YgdmFsdWVzXG4gIHZhciB2YWx1ZXMgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgLy8gVE9ETzogTm90IHN1cmUgd2h5IHdlIG5lZWQgYSBzaXplLTEgYnVmZmVyIGhlcmVcbiAgdmFyIGRjaGFuID0gY2hhbigxKTtcbiAgLy8gSG93IG1hbnkgbW9yZSBpdGVtcyB0aGlzIHJvdW5kXG4gIHZhciBkY291bnQ7XG4gIC8vIHB1dCBjYWxsYmFja3MgZm9yIGVhY2ggY2hhbm5lbFxuICB2YXIgZGNhbGxiYWNrcyA9IG5ldyBBcnJheShsZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArKykge1xuICAgIGRjYWxsYmFja3NbaV0gPSAoZnVuY3Rpb24oaSkge1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHZhbHVlc1tpXSA9IHZhbHVlO1xuICAgICAgICBkY291bnQgLS07XG4gICAgICAgIGlmIChkY291bnQgPT09IDApIHtcbiAgICAgICAgICBwdXRBc3luYyhkY2hhbiwgdmFsdWVzLnNsaWNlKDApKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICB9KGkpKTtcbiAgfVxuICBnbyhmdW5jdGlvbiooKSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGRjb3VudCA9IGxlbmd0aDtcbiAgICAgIC8vIFdlIGNvdWxkIGp1c3QgbGF1bmNoIG4gZ29yb3V0aW5lcyBoZXJlLCBidXQgZm9yIGVmZmNpZW5jeSB3ZVxuICAgICAgLy8gZG9uJ3RcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICsrKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGFrZUFzeW5jKGNoc1tpXSwgZGNhbGxiYWNrc1tpXSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBGSVg6IEhtbSB3aHkgY2F0Y2hpbmcgaGVyZT9cbiAgICAgICAgICBkY291bnQgLS07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciB2YWx1ZXMgPSB5aWVsZCB0YWtlKGRjaGFuKTtcbiAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW5ndGg7IGkgKyspIHtcbiAgICAgICAgaWYgKHZhbHVlc1tpXSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgICAgb3V0LmNsb3NlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB5aWVsZCBwdXQob3V0LCBmLmFwcGx5KG51bGwsIHZhbHVlcykpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIG1lcmdlKGNocywgYnVmZmVyT3JOKSB7XG4gIHZhciBvdXQgPSBjaGFuKGJ1ZmZlck9yTik7XG4gIHZhciBhY3RpdmVzID0gY2hzLnNsaWNlKDApO1xuICBnbyhmdW5jdGlvbiooKSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmIChhY3RpdmVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHZhciByID0geWllbGQgYWx0cyhhY3RpdmVzKTtcbiAgICAgIHZhciB2YWx1ZSA9IHIudmFsdWU7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICAvLyBSZW1vdmUgY2xvc2VkIGNoYW5uZWxcbiAgICAgICAgdmFyIGkgPSBhY3RpdmVzLmluZGV4T2Yoci5jaGFubmVsKTtcbiAgICAgICAgYWN0aXZlcy5zcGxpY2UoaSwgMSk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgeWllbGQgcHV0KG91dCwgdmFsdWUpO1xuICAgIH1cbiAgICBvdXQuY2xvc2UoKTtcbiAgfSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGludG8oY29sbCwgY2gpIHtcbiAgdmFyIHJlc3VsdCA9IGNvbGwuc2xpY2UoMCk7XG4gIHJldHVybiByZWR1Y2UoZnVuY3Rpb24ocmVzdWx0LCBpdGVtKSB7XG4gICAgcmVzdWx0LnB1c2goaXRlbSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSwgcmVzdWx0LCBjaCk7XG59XG5cbmZ1bmN0aW9uIHRha2VOKG4sIGNoLCBidWZmZXJPck4pIHtcbiAgdmFyIG91dCA9IGNoYW4oYnVmZmVyT3JOKTtcbiAgZ28oZnVuY3Rpb24qKCkge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSArKykge1xuICAgICAgdmFyIHZhbHVlID0geWllbGQgdGFrZShjaCk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIHlpZWxkIHB1dChvdXQsIHZhbHVlKTtcbiAgICB9XG4gICAgb3V0LmNsb3NlKCk7XG4gIH0pO1xuICByZXR1cm4gb3V0O1xufVxuXG52YXIgTk9USElORyA9IHt9O1xuXG5mdW5jdGlvbiB1bmlxdWUoY2gsIGJ1ZmZlck9yTikge1xuICB2YXIgb3V0ID0gY2hhbihidWZmZXJPck4pO1xuICB2YXIgbGFzdCA9IE5PVEhJTkc7XG4gIGdvKGZ1bmN0aW9uKigpIHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIHZhbHVlID0geWllbGQgdGFrZShjaCk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlmICh2YWx1ZSA9PT0gbGFzdCkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGxhc3QgPSB2YWx1ZTtcbiAgICAgIHlpZWxkIHB1dChvdXQsIHZhbHVlKTtcbiAgICB9XG4gICAgb3V0LmNsb3NlKCk7XG4gIH0pO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBwYXJ0aXRpb25CeShmLCBjaCwgYnVmZmVyT3JOKSB7XG4gIHZhciBvdXQgPSBjaGFuKGJ1ZmZlck9yTik7XG4gIHZhciBwYXJ0ID0gW107XG4gIHZhciBsYXN0ID0gTk9USElORztcbiAgZ28oZnVuY3Rpb24qKCkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB2YXIgdmFsdWUgPSB5aWVsZCB0YWtlKGNoKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIGlmIChwYXJ0Lmxlbmd0aCA+IDApIHtcbiAgICAgICAgICB5aWVsZCBwdXQob3V0LCBwYXJ0KTtcbiAgICAgICAgfVxuICAgICAgICBvdXQuY2xvc2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgbmV3SXRlbSA9IGYodmFsdWUpO1xuICAgICAgICBpZiAobmV3SXRlbSA9PT0gbGFzdCB8fCBsYXN0ID09PSBOT1RISU5HKSB7XG4gICAgICAgICAgcGFydC5wdXNoKHZhbHVlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB5aWVsZCBwdXQob3V0LCBwYXJ0KTtcbiAgICAgICAgICBwYXJ0ID0gW3ZhbHVlXTtcbiAgICAgICAgfVxuICAgICAgICBsYXN0ID0gbmV3SXRlbTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBwYXJ0aXRpb24obiwgY2gsIGJ1ZmZlck9yTikge1xuICB2YXIgb3V0ID0gY2hhbihidWZmZXJPck4pO1xuICBnbyhmdW5jdGlvbiooKSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciBwYXJ0ID0gbmV3IEFycmF5KG4pO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgICAgdmFyIHZhbHVlID0geWllbGQgdGFrZShjaCk7XG4gICAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgICAgaWYgKGkgPiAwKSB7XG4gICAgICAgICAgICB5aWVsZCBwdXQob3V0LCBwYXJ0LnNsaWNlKDAsIGkpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgb3V0LmNsb3NlKCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHBhcnRbaV0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHlpZWxkIHB1dChvdXQsIHBhcnQpO1xuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbi8vIEZvciBjaGFubmVsIGlkZW50aWZpY2F0aW9uXG52YXIgZ2VuSWQgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBpID0gMDtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGkgKys7XG4gICAgcmV0dXJuIFwiXCIgKyBpO1xuICB9O1xufSkoKTtcblxudmFyIElEX0FUVFIgPSBcIl9fY3NwX2NoYW5uZWxfaWRcIjtcblxuLy8gVE9ETzogRG8gd2UgbmVlZCB0byBjaGVjayB3aXRoIGhhc093blByb3BlcnR5P1xuZnVuY3Rpb24gbGVuKG9iaikge1xuICB2YXIgY291bnQgPSAwO1xuICBmb3IgKHZhciBwIGluIG9iaikge1xuICAgIGNvdW50ICsrO1xuICB9XG4gIHJldHVybiBjb3VudDtcbn1cblxuZnVuY3Rpb24gY2hhbklkKGNoKSB7XG4gIHZhciBpZCA9IGNoW0lEX0FUVFJdO1xuICBpZiAoaWQgPT09IHVuZGVmaW5lZCkge1xuICAgIGlkID0gY2hbSURfQVRUUl0gPSBnZW5JZCgpO1xuICB9XG4gIHJldHVybiBpZDtcbn1cblxudmFyIE11bHQgPSBmdW5jdGlvbihjaCkge1xuICB0aGlzLnRhcHMgPSB7fTtcbiAgdGhpcy5jaCA9IGNoO1xufTtcblxudmFyIFRhcCA9IGZ1bmN0aW9uKGNoYW5uZWwsIGtlZXBPcGVuKSB7XG4gIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG4gIHRoaXMua2VlcE9wZW4gPSBrZWVwT3Blbjtcbn07XG5cbk11bHQucHJvdG90eXBlLm11eGNoID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmNoO1xufTtcblxuTXVsdC5wcm90b3R5cGUudGFwID0gZnVuY3Rpb24oY2gsIGtlZXBPcGVuKSB7XG4gIHZhciBpZCA9IGNoYW5JZChjaCk7XG4gIHRoaXMudGFwc1tpZF0gPSBuZXcgVGFwKGNoLCBrZWVwT3Blbik7XG59O1xuXG5NdWx0LnByb3RvdHlwZS51bnRhcCA9IGZ1bmN0aW9uKGNoKSB7XG4gIGRlbGV0ZSB0aGlzLnRhcHNbY2hhbklkKGNoKV07XG59O1xuXG5NdWx0LnByb3RvdHlwZS51bnRhcEFsbCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnRhcHMgPSB7fTtcbn07XG5cbmZ1bmN0aW9uIG11bHQoY2gpIHtcbiAgdmFyIG0gPSBuZXcgTXVsdChjaCk7XG4gIHZhciBkY2hhbiA9IGNoYW4oMSk7XG4gIHZhciBkY291bnQ7XG4gIGZ1bmN0aW9uIG1ha2VEb25lQ2FsbGJhY2sodGFwKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKHN0aWxsT3Blbikge1xuICAgICAgZGNvdW50IC0tO1xuICAgICAgaWYgKGRjb3VudCA9PT0gMCkge1xuICAgICAgICBwdXRBc3luYyhkY2hhbiwgdHJ1ZSk7XG4gICAgICB9XG4gICAgICBpZiAoIXN0aWxsT3Blbikge1xuICAgICAgICBtLnVudGFwKHRhcC5jaGFubmVsKTtcbiAgICAgIH1cbiAgICB9O1xuICB9XG4gIGdvKGZ1bmN0aW9uKigpIHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIHZhbHVlID0geWllbGQgdGFrZShjaCk7XG4gICAgICB2YXIgaWQsIHQ7XG4gICAgICB2YXIgdGFwcyA9IG0udGFwcztcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIGZvciAoaWQgaW4gdGFwcykge1xuICAgICAgICAgIHQgPSB0YXBzW2lkXTtcbiAgICAgICAgICBpZiAoIXQua2VlcE9wZW4pIHtcbiAgICAgICAgICAgIHQuY2hhbm5lbC5jbG9zZSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBUT0RPOiBJcyB0aGlzIG5lY2Vzc2FyeT9cbiAgICAgICAgbS51bnRhcEFsbCgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGRjb3VudCA9IGxlbih0YXBzKTtcbiAgICAgIC8vIFhYWDogVGhpcyBpcyBiZWNhdXNlIHB1dEFzeW5jIGNhbiBhY3R1YWxseSBjYWxsIGJhY2tcbiAgICAgIC8vIGltbWVkaWF0ZWx5LiBGaXggdGhhdFxuICAgICAgdmFyIGluaXREY291bnQgPSBkY291bnQ7XG4gICAgICAvLyBQdXQgdmFsdWUgb24gdGFwcGluZyBjaGFubmVscy4uLlxuICAgICAgZm9yIChpZCBpbiB0YXBzKSB7XG4gICAgICAgIHQgPSB0YXBzW2lkXTtcbiAgICAgICAgcHV0QXN5bmModC5jaGFubmVsLCB2YWx1ZSwgbWFrZURvbmVDYWxsYmFjayh0KSk7XG4gICAgICB9XG4gICAgICAvLyAuLi4gd2FpdGluZyBmb3IgYWxsIHB1dHMgdG8gY29tcGxldGVcbiAgICAgIGlmIChpbml0RGNvdW50ID4gMCkge1xuICAgICAgICB5aWVsZCB0YWtlKGRjaGFuKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbTtcbn1cblxubXVsdC50YXAgPSBmdW5jdGlvbiB0YXAobSwgY2gsIGtlZXBPcGVuKSB7XG4gIG0udGFwKGNoLCBrZWVwT3Blbik7XG4gIHJldHVybiBjaDtcbn07XG5cbm11bHQudW50YXAgPSBmdW5jdGlvbiB1bnRhcChtLCBjaCkge1xuICBtLnVudGFwKGNoKTtcbn07XG5cbm11bHQudW50YXBBbGwgPSBmdW5jdGlvbiB1bnRhcEFsbChtKSB7XG4gIG0udW50YXBBbGwoKTtcbn07XG5cbnZhciBNaXggPSBmdW5jdGlvbihjaCkge1xuICB0aGlzLmNoID0gY2g7XG4gIHRoaXMuc3RhdGVNYXAgPSB7fTtcbiAgdGhpcy5jaGFuZ2UgPSBjaGFuKCk7XG4gIHRoaXMuc29sb01vZGUgPSBtaXguTVVURTtcbn07XG5cbk1peC5wcm90b3R5cGUuX2NoYW5nZWQgPSBmdW5jdGlvbigpIHtcbiAgcHV0QXN5bmModGhpcy5jaGFuZ2UsIHRydWUpO1xufTtcblxuTWl4LnByb3RvdHlwZS5fZ2V0QWxsU3RhdGUgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGFsbFN0YXRlID0ge307XG4gIHZhciBzdGF0ZU1hcCA9IHRoaXMuc3RhdGVNYXA7XG4gIHZhciBzb2xvcyA9IFtdO1xuICB2YXIgbXV0ZXMgPSBbXTtcbiAgdmFyIHBhdXNlcyA9IFtdO1xuICB2YXIgcmVhZHM7XG4gIGZvciAodmFyIGlkIGluIHN0YXRlTWFwKSB7XG4gICAgdmFyIGNoYW5EYXRhID0gc3RhdGVNYXBbaWRdO1xuICAgIHZhciBzdGF0ZSA9IGNoYW5EYXRhLnN0YXRlO1xuICAgIHZhciBjaGFubmVsID0gY2hhbkRhdGEuY2hhbm5lbDtcbiAgICBpZiAoc3RhdGVbbWl4LlNPTE9dKSB7XG4gICAgICBzb2xvcy5wdXNoKGNoYW5uZWwpO1xuICAgIH1cbiAgICAvLyBUT0RPXG4gICAgaWYgKHN0YXRlW21peC5NVVRFXSkge1xuICAgICAgbXV0ZXMucHVzaChjaGFubmVsKTtcbiAgICB9XG4gICAgaWYgKHN0YXRlW21peC5QQVVTRV0pIHtcbiAgICAgIHBhdXNlcy5wdXNoKGNoYW5uZWwpO1xuICAgIH1cbiAgfVxuICB2YXIgaSwgbjtcbiAgaWYgKHRoaXMuc29sb01vZGUgPT09IG1peC5QQVVTRSAmJiBzb2xvcy5sZW5ndGggPiAwKSB7XG4gICAgbiA9IHNvbG9zLmxlbmd0aDtcbiAgICByZWFkcyA9IG5ldyBBcnJheShuICsgMSk7XG4gICAgZm9yIChpID0gMDsgaSA8IG47IGkrKykge1xuICAgICAgcmVhZHNbaV0gPSBzb2xvc1tpXTtcbiAgICB9XG4gICAgcmVhZHNbbl0gPSB0aGlzLmNoYW5nZTtcbiAgfSBlbHNlIHtcbiAgICByZWFkcyA9IFtdO1xuICAgIGZvciAoaWQgaW4gc3RhdGVNYXApIHtcbiAgICAgIGNoYW5EYXRhID0gc3RhdGVNYXBbaWRdO1xuICAgICAgY2hhbm5lbCA9IGNoYW5EYXRhLmNoYW5uZWw7XG4gICAgICBpZiAocGF1c2VzLmluZGV4T2YoY2hhbm5lbCkgPCAwKSB7XG4gICAgICAgIHJlYWRzLnB1c2goY2hhbm5lbCk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlYWRzLnB1c2godGhpcy5jaGFuZ2UpO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBzb2xvczogc29sb3MsXG4gICAgbXV0ZXM6IG11dGVzLFxuICAgIHJlYWRzOiByZWFkc1xuICB9O1xufTtcblxuTWl4LnByb3RvdHlwZS5hZG1peCA9IGZ1bmN0aW9uKGNoKSB7XG4gIHRoaXMuc3RhdGVNYXBbY2hhbklkKGNoKV0gPSB7XG4gICAgY2hhbm5lbDogY2gsXG4gICAgc3RhdGU6IHt9XG4gIH07XG4gIHRoaXMuX2NoYW5nZWQoKTtcbn07XG5cbk1peC5wcm90b3R5cGUudW5taXggPSBmdW5jdGlvbihjaCkge1xuICBkZWxldGUgdGhpcy5zdGF0ZU1hcFtjaGFuSWQoY2gpXTtcbiAgdGhpcy5fY2hhbmdlZCgpO1xufTtcblxuTWl4LnByb3RvdHlwZS51bm1peEFsbCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLnN0YXRlTWFwID0ge307XG4gIHRoaXMuX2NoYW5nZWQoKTtcbn07XG5cbk1peC5wcm90b3R5cGUudG9nZ2xlID0gZnVuY3Rpb24odXBkYXRlU3RhdGVMaXN0KSB7XG4gIC8vIFtbY2gxLCB7fV0sIFtjaDIsIHtzb2xvOiB0cnVlfV1dO1xuICB2YXIgbGVuZ3RoID0gdXBkYXRlU3RhdGVMaXN0Lmxlbmd0aDtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciBjaCA9IHVwZGF0ZVN0YXRlTGlzdFtpXVswXTtcbiAgICB2YXIgaWQgPSBjaGFuSWQoY2gpO1xuICAgIHZhciB1cGRhdGVTdGF0ZSA9IHVwZGF0ZVN0YXRlTGlzdFtpXVsxXTtcbiAgICB2YXIgY2hhbkRhdGEgPSB0aGlzLnN0YXRlTWFwW2lkXTtcbiAgICBpZiAoIWNoYW5EYXRhKSB7XG4gICAgICBjaGFuRGF0YSA9IHRoaXMuc3RhdGVNYXBbaWRdID0ge1xuICAgICAgICBjaGFubmVsOiBjaCxcbiAgICAgICAgc3RhdGU6IHt9XG4gICAgICB9O1xuICAgIH1cbiAgICBmb3IgKHZhciBtb2RlIGluIHVwZGF0ZVN0YXRlKSB7XG4gICAgICBjaGFuRGF0YS5zdGF0ZVttb2RlXSA9IHVwZGF0ZVN0YXRlW21vZGVdO1xuICAgIH1cbiAgfVxuICB0aGlzLl9jaGFuZ2VkKCk7XG59O1xuXG5NaXgucHJvdG90eXBlLnNldFNvbG9Nb2RlID0gZnVuY3Rpb24obW9kZSkge1xuICBpZiAoVkFMSURfU09MT19NT0RFUy5pbmRleE9mKG1vZGUpIDwgMCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIk1vZGUgbXVzdCBiZSBvbmUgb2Y6IFwiLCBWQUxJRF9TT0xPX01PREVTLmpvaW4oXCIsIFwiKSk7XG4gIH1cbiAgdGhpcy5zb2xvTW9kZSA9IG1vZGU7XG4gIHRoaXMuX2NoYW5nZWQoKTtcbn07XG5cbmZ1bmN0aW9uIG1peChvdXQpIHtcbiAgdmFyIG0gPSBuZXcgTWl4KG91dCk7XG4gIGdvKGZ1bmN0aW9uKigpIHtcbiAgICB2YXIgc3RhdGUgPSBtLl9nZXRBbGxTdGF0ZSgpO1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB2YXIgcmVzdWx0ID0geWllbGQgYWx0cyhzdGF0ZS5yZWFkcyk7XG4gICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICB2YXIgY2hhbm5lbCA9IHJlc3VsdC5jaGFubmVsO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgZGVsZXRlIG0uc3RhdGVNYXBbY2hhbklkKGNoYW5uZWwpXTtcbiAgICAgICAgc3RhdGUgPSBtLl9nZXRBbGxTdGF0ZSgpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmIChjaGFubmVsID09PSBtLmNoYW5nZSkge1xuICAgICAgICBzdGF0ZSA9IG0uX2dldEFsbFN0YXRlKCk7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgdmFyIHNvbG9zID0gc3RhdGUuc29sb3M7XG4gICAgICBpZiAoc29sb3MuaW5kZXhPZihjaGFubmVsKSA+IC0xIHx8XG4gICAgICAgICAgKHNvbG9zLmxlbmd0aCA9PT0gMCAmJiAhKHN0YXRlLm11dGVzLmluZGV4T2YoY2hhbm5lbCkgPiAtMSkpKSB7XG4gICAgICAgIHZhciBzdGlsbE9wZW4gPSB5aWVsZCBwdXQob3V0LCB2YWx1ZSk7XG4gICAgICAgIGlmICghc3RpbGxPcGVuKSB7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gbTtcbn1cblxubWl4Lk1VVEUgPSBcIm11dGVcIjtcbm1peC5QQVVTRSA9IFwicGF1c2VcIjtcbm1peC5TT0xPID0gXCJzb2xvXCI7XG52YXIgVkFMSURfU09MT19NT0RFUyA9IFttaXguTVVURSwgbWl4LlBBVVNFXTtcblxubWl4LmFkZCA9IGZ1bmN0aW9uIGFkbWl4KG0sIGNoKSB7XG4gIG0uYWRtaXgoY2gpO1xufTtcblxubWl4LnJlbW92ZSA9IGZ1bmN0aW9uIHVubWl4KG0sIGNoKSB7XG4gIG0udW5taXgoY2gpO1xufTtcblxubWl4LnJlbW92ZUFsbCA9IGZ1bmN0aW9uIHVubWl4QWxsKG0pIHtcbiAgbS51bm1peEFsbCgpO1xufTtcblxubWl4LnRvZ2dsZSA9IGZ1bmN0aW9uIHRvZ2dsZShtLCB1cGRhdGVTdGF0ZUxpc3QpIHtcbiAgbS50b2dnbGUodXBkYXRlU3RhdGVMaXN0KTtcbn07XG5cbm1peC5zZXRTb2xvTW9kZSA9IGZ1bmN0aW9uIHNldFNvbG9Nb2RlKG0sIG1vZGUpIHtcbiAgbS5zZXRTb2xvTW9kZShtb2RlKTtcbn07XG5cbmZ1bmN0aW9uIGNvbnN0YW50bHlOdWxsKCkge1xuICByZXR1cm4gbnVsbDtcbn1cblxudmFyIFB1YiA9IGZ1bmN0aW9uKGNoLCB0b3BpY0ZuLCBidWZmZXJGbikge1xuICB0aGlzLmNoID0gY2g7XG4gIHRoaXMudG9waWNGbiA9IHRvcGljRm47XG4gIHRoaXMuYnVmZmVyRm4gPSBidWZmZXJGbjtcbiAgdGhpcy5tdWx0cyA9IHt9O1xufTtcblxuUHViLnByb3RvdHlwZS5fZW5zdXJlTXVsdCA9IGZ1bmN0aW9uKHRvcGljKSB7XG4gIHZhciBtID0gdGhpcy5tdWx0c1t0b3BpY107XG4gIHZhciBidWZmZXJGbiA9IHRoaXMuYnVmZmVyRm47XG4gIGlmICghbSkge1xuICAgIG0gPSB0aGlzLm11bHRzW3RvcGljXSA9IG11bHQoY2hhbihidWZmZXJGbih0b3BpYykpKTtcbiAgfVxuICByZXR1cm4gbTtcbn07XG5cblB1Yi5wcm90b3R5cGUuc3ViID0gZnVuY3Rpb24odG9waWMsIGNoLCBrZWVwT3Blbikge1xuICB2YXIgbSA9IHRoaXMuX2Vuc3VyZU11bHQodG9waWMpO1xuICByZXR1cm4gbXVsdC50YXAobSwgY2gsIGtlZXBPcGVuKTtcbn07XG5cblB1Yi5wcm90b3R5cGUudW5zdWIgPSBmdW5jdGlvbih0b3BpYywgY2gpIHtcbiAgdmFyIG0gPSB0aGlzLm11bHRzW3RvcGljXTtcbiAgaWYgKG0pIHtcbiAgICBtdWx0LnVudGFwKG0sIGNoKTtcbiAgfVxufTtcblxuUHViLnByb3RvdHlwZS51bnN1YkFsbCA9IGZ1bmN0aW9uKHRvcGljKSB7XG4gIGlmICh0b3BpYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhpcy5tdWx0cyA9IHt9O1xuICB9IGVsc2Uge1xuICAgIGRlbGV0ZSB0aGlzLm11bHRzW3RvcGljXTtcbiAgfVxufTtcblxuZnVuY3Rpb24gcHViKGNoLCB0b3BpY0ZuLCBidWZmZXJGbikge1xuICBidWZmZXJGbiA9IGJ1ZmZlckZuIHx8IGNvbnN0YW50bHlOdWxsO1xuICB2YXIgcCA9IG5ldyBQdWIoY2gsIHRvcGljRm4sIGJ1ZmZlckZuKTtcbiAgZ28oZnVuY3Rpb24qKCkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB2YXIgdmFsdWUgPSB5aWVsZCB0YWtlKGNoKTtcbiAgICAgIHZhciBtdWx0cyA9IHAubXVsdHM7XG4gICAgICB2YXIgdG9waWM7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBmb3IgKHRvcGljIGluIG11bHRzKSB7XG4gICAgICAgICAgbXVsdHNbdG9waWNdLm11eGNoKCkuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIC8vIFRPRE86IFNvbWVob3cgZW5zdXJlL2RvY3VtZW50IHRoYXQgdGhpcyBtdXN0IHJldHVybiBhIHN0cmluZ1xuICAgICAgLy8gKG90aGVyd2lzZSB1c2UgcHJvcGVyIChoYXNoKW1hcHMpXG4gICAgICB0b3BpYyA9IHRvcGljRm4odmFsdWUpO1xuICAgICAgdmFyIG0gPSBtdWx0c1t0b3BpY107XG4gICAgICBpZiAobSkge1xuICAgICAgICB2YXIgc3RpbGxPcGVuID0geWllbGQgcHV0KG0ubXV4Y2goKSwgdmFsdWUpO1xuICAgICAgICBpZiAoIXN0aWxsT3Blbikge1xuICAgICAgICAgIGRlbGV0ZSBtdWx0c1t0b3BpY107XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gcDtcbn1cblxucHViLnN1YiA9IGZ1bmN0aW9uIHN1YihwLCB0b3BpYywgY2gsIGtlZXBPcGVuKSB7XG4gIHJldHVybiBwLnN1Yih0b3BpYywgY2gsIGtlZXBPcGVuKTtcbn07XG5cbnB1Yi51bnN1YiA9IGZ1bmN0aW9uIHVuc3ViKHAsIHRvcGljLCBjaCkge1xuICBwLnVuc3ViKHRvcGljLCBjaCk7XG59O1xuXG5wdWIudW5zdWJBbGwgPSBmdW5jdGlvbiB1bnN1YkFsbChwLCB0b3BpYykge1xuICBwLnVuc3ViQWxsKHRvcGljKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBtYXBGcm9tOiBtYXBGcm9tLFxuICBtYXBJbnRvOiBtYXBJbnRvLFxuICBmaWx0ZXJGcm9tOiBmaWx0ZXJGcm9tLFxuICBmaWx0ZXJJbnRvOiBmaWx0ZXJJbnRvLFxuICByZW1vdmVGcm9tOiByZW1vdmVGcm9tLFxuICByZW1vdmVJbnRvOiByZW1vdmVJbnRvLFxuICBtYXBjYXRGcm9tOiBtYXBjYXRGcm9tLFxuICBtYXBjYXRJbnRvOiBtYXBjYXRJbnRvLFxuXG4gIHBpcGU6IHBpcGUsXG4gIHNwbGl0OiBzcGxpdCxcbiAgcmVkdWNlOiByZWR1Y2UsXG4gIG9udG86IG9udG8sXG4gIGZyb21Db2xsOiBmcm9tQ29sbCxcblxuICBtYXA6IG1hcCxcbiAgbWVyZ2U6IG1lcmdlLFxuICBpbnRvOiBpbnRvLFxuICB0YWtlOiB0YWtlTixcbiAgdW5pcXVlOiB1bmlxdWUsXG4gIHBhcnRpdGlvbjogcGFydGl0aW9uLFxuICBwYXJ0aXRpb25CeTogcGFydGl0aW9uQnksXG5cbiAgbXVsdDogbXVsdCxcbiAgbWl4OiBtaXgsXG4gIHB1YjogcHViXG59O1xuXG5cbi8vIFBvc3NpYmxlIFwiZmx1aWRcIiBpbnRlcmZhY2VzOlxuXG4vLyB0aHJlYWQoXG4vLyAgIFtmcm9tQ29sbCwgWzEsIDIsIDMsIDRdXSxcbi8vICAgW21hcEZyb20sIGluY10sXG4vLyAgIFtpbnRvLCBbXV1cbi8vIClcblxuLy8gdGhyZWFkKFxuLy8gICBbZnJvbUNvbGwsIFsxLCAyLCAzLCA0XV0sXG4vLyAgIFttYXBGcm9tLCBpbmMsIF9dLFxuLy8gICBbaW50bywgW10sIF9dXG4vLyApXG5cbi8vIHdyYXAoKVxuLy8gICAuZnJvbUNvbGwoWzEsIDIsIDMsIDRdKVxuLy8gICAubWFwRnJvbShpbmMpXG4vLyAgIC5pbnRvKFtdKVxuLy8gICAudW53cmFwKCk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9qcy1jc3Avc3JjL2NzcC5vcGVyYXRpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gMjAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNzcCA9IHJlcXVpcmUoJy4vY3NwLmNvcmUnKTtcblxuZnVuY3Rpb24gcGlwZWxpbmVJbnRlcm5hbChuLCB0bywgZnJvbSwgY2xvc2UsIHRhc2tGbikge1xuICBpZiAobiA8PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCduIG11c3QgYmUgcG9zaXRpdmUnKTtcbiAgfVxuXG4gIHZhciBqb2JzID0gY3NwLmNoYW4obik7XG4gIHZhciByZXN1bHRzID0gY3NwLmNoYW4obik7XG5cbiAgZm9yKHZhciBfID0gMDsgXyA8IG47IF8rKykge1xuICAgIGNzcC5nbyhmdW5jdGlvbiogKHRhc2tGbiwgam9icywgcmVzdWx0cykge1xuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgdmFyIGpvYiA9IHlpZWxkIGNzcC50YWtlKGpvYnMpO1xuXG4gICAgICAgIGlmICghdGFza0ZuKGpvYikpIHtcbiAgICAgICAgICByZXN1bHRzLmNsb3NlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LCBbdGFza0ZuLCBqb2JzLCByZXN1bHRzXSk7XG4gIH1cblxuICBjc3AuZ28oZnVuY3Rpb24qIChqb2JzLCBmcm9tLCByZXN1bHRzKSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciB2ID0geWllbGQgY3NwLnRha2UoZnJvbSk7XG4gICAgICBpZiAodiA9PT0gY3NwLkNMT1NFRCkge1xuICAgICAgICBqb2JzLmNsb3NlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHAgPSBjc3AuY2hhbigxKTtcblxuICAgICAgICB5aWVsZCBjc3AucHV0KGpvYnMsIFt2LCBwXSk7XG4gICAgICAgIHlpZWxkIGNzcC5wdXQocmVzdWx0cywgcCk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbam9icywgZnJvbSwgcmVzdWx0c10pO1xuXG4gIGNzcC5nbyhmdW5jdGlvbiogKHJlc3VsdHMsIGNsb3NlLCB0bykge1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIHZhciBwID0geWllbGQgY3NwLnRha2UocmVzdWx0cyk7XG4gICAgICBpZiAocCA9PT0gY3NwLkNMT1NFRCkge1xuICAgICAgICBpZiAoY2xvc2UpIHtcbiAgICAgICAgICB0by5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHJlcyA9IHlpZWxkIGNzcC50YWtlKHApO1xuICAgICAgICB3aGlsZSh0cnVlKSB7XG4gICAgICAgICAgdmFyIHYgPSB5aWVsZCBjc3AudGFrZShyZXMpO1xuICAgICAgICAgIGlmICh2ICE9PSBjc3AuQ0xPU0VEKSB7XG4gICAgICAgICAgICB5aWVsZCBjc3AucHV0KHRvLCB2KTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCBbcmVzdWx0cywgY2xvc2UsIHRvXSk7XG5cbiAgcmV0dXJuIHRvO1xufVxuXG5mdW5jdGlvbiBwaXBlbGluZSh0bywgeGYsIGZyb20sIGtlZXBPcGVuLCBleEhhbmRsZXIpIHtcblxuICBmdW5jdGlvbiB0YXNrRm4oam9iKSB7XG4gICAgaWYgKGpvYiA9PT0gY3NwLkNMT1NFRCkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB2ID0gam9iWzBdO1xuICAgICAgdmFyIHAgPSBqb2JbMV07XG4gICAgICB2YXIgcmVzID0gY3NwLmNoYW4oMSwgeGYsIGV4SGFuZGxlcik7XG5cbiAgICAgIGNzcC5nbyhmdW5jdGlvbiogKHJlcywgdikge1xuICAgICAgICB5aWVsZCBjc3AucHV0KHJlcywgdik7XG4gICAgICAgIHJlcy5jbG9zZSgpO1xuICAgICAgfSwgW3Jlcywgdl0pO1xuXG4gICAgICBjc3AucHV0QXN5bmMocCwgcmVzKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBpcGVsaW5lSW50ZXJuYWwoMSwgdG8sIGZyb20sICFrZWVwT3BlbiwgdGFza0ZuKTtcbn1cblxuZnVuY3Rpb24gcGlwZWxpbmVBc3luYyhuLCB0bywgYWYsIGZyb20sIGtlZXBPcGVuKSB7XG5cbiAgZnVuY3Rpb24gdGFza0ZuKGpvYikge1xuICAgIGlmIChqb2IgPT09IGNzcC5DTE9TRUQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdiA9IGpvYlswXTtcbiAgICAgIHZhciBwID0gam9iWzFdO1xuICAgICAgdmFyIHJlcyA9IGNzcC5jaGFuKDEpO1xuICAgICAgYWYodiwgcmVzKTtcbiAgICAgIGNzcC5wdXRBc3luYyhwLCByZXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHBpcGVsaW5lSW50ZXJuYWwobiwgdG8sIGZyb20sICFrZWVwT3BlbiwgdGFza0ZuKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHBpcGVsaW5lOiBwaXBlbGluZSxcbiAgcGlwZWxpbmVBc3luYzogcGlwZWxpbmVBc3luY1xufTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2pzLWNzcC9zcmMvY3NwLnBpcGVsaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gMjAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBnZXRvcHQgZnJvbSAnbm9kZS1nZXRvcHQnO1xuaW1wb3J0IGZzIGZyb20gJ2ZzJztcbmltcG9ydCBwYXRoIGZyb20gJ3BhdGgnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maWd1cmUge1xuICBjb25zdHJ1Y3RvcigpIHtcblx0XHR0aGlzLm9wdHMgPSBnZXRvcHQuY3JlYXRlKFtcblx0XHRcdFsncicsICdyYXB0b3I9QVJHJyAsICd3aGVyZSB0aGUgcmFwdG9yIGV4ZWN1dGFibGUgZmlsZSBpcyddLFxuXHRcdFx0WydwJywgJ3BoYXNlPUFSRycgLCAnd2hlcmUgdGhlIHJ1bm5pbmcgcGhhc2UgaXMnXSxcblx0XHRcdFsnYycsICdjb25maWc9QVJHJywgJ2NvbmZpZyBmaWxlIChjb21tYW5kIGxpbmUgYXJndW1lbnRzIHdpbGwgc3VycGFzcyBpdCknXSxcbiAgICAgIFsnJywgICdhZGI9QVJHJywgJ3doZXJlIHRoZSBgYWRiYCBjb21tYW5kIGlzJ10sXG4gICAgICBbJycsICAnZmZtcGVnPUFSRycsICd3aGVyZSB0aGUgYGZmbXBlZ2AgY29tbWFuZCBpcyddLFxuXHRcdFx0WycnLCAgJ3JlY29yZC10YXJnZXQtZGV2aWNlPUFSRycsICd3aGVyZSB0byBwdXQgdGhlIHJlY29yZCBvbiB0aGUgZGV2aWNlJ10sXG5cdFx0XHRbJycsICAncmVjb3JkLXRhcmdldC1jb25zb2xlPUFSRycsICd3aGVyZSB0byBwdWxsIHRoZSByZWNvcmQgdG8gdGhlIGNvbnNvbGUnXSxcbiAgICAgIFsncicsICdyb3V0ZXJzPUFSRysnLCAnaW52b2tlIHdoYXQgcm91dGVycyddLFxuICAgICAgWycnLCAgJ2NvbW1hbmQ9QVJHJywgJ2RlZmF1bHQgaXMgfHJhcHRvcnw7IG9uY2UgaXQgZW5kcyB0aGUgcHJvY2VzcyB3aWxsIGVuZCwgdG9vJ10sXG4gICAgICBbJycsICAncmVwb3J0ZXI9QVJHJywgJ2RlZmF1bHQgaXMgfHRpbWVsaW5lfDsgdGhlIGZpbmFsIGNvbGxlY3RvciB0byBnZW5lcmF0ZSB0aGUgcmVwb3J0J10sXG4gICAgICBbJ28nLCAnb3V0cHV0PUFSRycsICdhIGZpbGUgcGF0aCB0byBvdXRwdXQgdGhlIGZpbmFsIHJlc3VsdCddLFxuXHRcdFx0WydoJywgJ2hlbHAnLCAnZGlzcGxheSB0aGlzIGhlbHAnXSxcblx0XHRcdFsndicsICd2ZXJzaW9uJywgJ3Nob3cgdmVyc2lvbiddXG5cdFx0XSlcblx0XHQuYmluZEhlbHAoJ1VzYWdlOiBiZWhvbGRlciA8dGVzdC1maWxlLXBhdGg+IC0tPG9wdGlvbmFsIG9wdGlvbnM+Jyk7XG4gICAgLy8gVE9ETzogcHJpbnQgYWxsIGF2YWlsYWJsZSByb3V0ZXJzIGFmdGVyIHNvbWUgc3BlY2lhbCBoZWxwIGNvbW1hbmQuXG5cdH1cblxuICBzZXR1cCgpIHtcbiAgICByZXR1cm4gdGhpcy5idWlsZCguLi50aGlzLmdldG9wdHMoKSk7XG4gIH1cblxuICAvKipcbiAgICogV2lsbCB0aHJvdyBlcnJvciB3aGVuIGNhcnJ5aW5nIGludmFsaWQgb3B0aW9ucy5cbiAgICovXG4gIGJ1aWxkKGFyZ3YsIG9wdGlvbnMpIHtcbiAgICBsZXQgdGVzdEZpbGVQYXRocyA9IGFyZ3Y7XG4gICAgdGhpcy52YWxpZGF0ZVRlc3RGaWxlcyh0ZXN0RmlsZVBhdGhzKTtcbiAgICBsZXQgY29uZmlncyA9IHRoaXMuZnJvbU9wdGlvbnMob3B0aW9ucyk7XG4gICAgY29uZmlncy50ZXN0cyA9IHRlc3RGaWxlUGF0aHM7XG4gICAgdGhpcy52YWxpZGF0ZU1vZHVsZUNvbW1hbmRzKGNvbmZpZ3MpO1xuICAgIHRoaXMudmFsaWRhdGVPdXRwdXQoY29uZmlncyk7XG4gICAgcmV0dXJuIGNvbmZpZ3M7XG4gIH1cblxuICBnZXRvcHRzKCkge1xuICAgIGxldCBwYXJzZWRPcHRpb25zID0gdGhpcy5vcHRzLnBhcnNlU3lzdGVtKCk7XG5cdFx0Ly8gcGFyc2UgY29tbWFuZCBsaW5lIGFuZCBnZXQgdGhlIHJlc3VsdC5cblx0XHR0aGlzLm9wdHMgPSBwYXJzZWRPcHRpb25zLm9wdGlvbnM7XG4gICAgdGhpcy5hcmd2ID0gcGFyc2VkT3B0aW9ucy5hcmd2O1xuXHRcdHJldHVybiBbdGhpcy5hcmd2LCB0aGlzLm9wdHNdO1xuICB9XG5cbiAgdmFsaWRhdGVUZXN0RmlsZXModGVzdEZpbGVQYXRocykge1xuICAgIGlmICgwID09PSB0ZXN0RmlsZVBhdGhzLmxlbmd0aCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNdXN0IHNwZWNpZnkgdGVzdCBmaWxlcy4nICtcbiAgICAgICAgJ0V4YW1wbGU6IGJlaG9sZGVyIHRlc3QtMS5qcyB0ZXN0LTIuanMnKTtcbiAgICB9XG4gICAgdGVzdEZpbGVQYXRocy5mb3JFYWNoKChwYXRoKSA9PiB7XG4gICAgICB0cnkge1xuICAgICAgICBmcy5hY2Nlc3NTeW5jKHBhdGgpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Nhbm5vdCBhY2Nlc3MgdGhlIHRlc3Q6ICcsIHBhdGgpO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFsaWRhdGVSYXB0b3IoY29uZmlncykge1xuICAgIHRyeSB7XG4gICAgICBmcy5hY2Nlc3NTeW5jKGNvbmZpZ3MucGF0aC5yYXB0b3IpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgY29uc29sZS5lcnJvcihgQ2Fubm90IGFjY2VzcyB0aGUgUmFwdG9yIGNvbW1hbmQ6IFwiJHtjb25maWdzLnBhdGgucmFwdG9yfVwiYCk7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlUGhhc2UoY29uZmlncykge1xuICAgIHRyeSB7XG4gICAgICBmcy5hY2Nlc3NTeW5jKGNvbmZpZ3MucGF0aC5waGFzZSk7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBDYW5ub3QgYWNjZXNzIHRoZSBydW5uaW5nIHBoYXNlOiBcIiR7Y29uZmlncy5wYXRoLnBoYXNlfVwiYCk7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlQW5kcm9pZERhZW1vbkJ1cyhjb25maWdzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGZzLmFjY2Vzc1N5bmMoY29uZmlncy5wYXRoLmFkYik7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBDYW5ub3QgYWNjZXNzIHRoZSBBbmRyb2lkIGRhZW1vbiBidXM6IFwiJHtjb25maWdzLnBhdGguYWRifVwiYCk7XG4gICAgICB0aHJvdyBlO1xuICAgIH1cbiAgfVxuXG4gIHZhbGlkYXRlRkZNUEVHKGNvbmZpZ3MpIHtcbiAgICB0cnkge1xuICAgICAgZnMuYWNjZXNzU3luYyhjb25maWdzLnBhdGguZmZtcGVnKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYENhbm5vdCBhY2Nlc3MgdGhlIEZGTVBFRzogXCIke2NvbmZpZ3MucGF0aC5mZm1wZWd9XCJgKTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG5cblx0dmFsaWRhdGVSZWNvcmRDb25zb2xlVGFyZ2V0KGNvbmZpZ3MpIHtcbiAgICB0cnkge1xuICAgICAgZnMuYWNjZXNzU3luYyhwYXRoLmRpcm5hbWUoY29uZmlncy5wYXRoLnJlY29yZC50YXJnZXQuY29uc29sZSkpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgY29uc29sZS5lcnJvcihgQ2Fubm90IGFjY2VzcyB0aGUgdGFyZ2V0IHRvIHB1dCB0aGUgdGFyZ2V0OiBcIiR7Y29uZmlncy5wYXRoLnJlY29yZC50YXJnZXQuY29uc29sZX1cImApO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG5cdH1cblxuICB2YWxpZGF0ZU91dHB1dChjb25maWdzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGZzLmFjY2Vzc1N5bmMoY29uZmlncy5wYXRoLm91dHB1dCk7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBDYW5ub3QgYWNjZXNzIHRoZSBvdXRwdXQgdGFyZ2V0OiBcIiR7Y29uZmlncy5wYXRoLm91dHB1dH1cImApO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG4gIH1cblxuICB2YWxpZGF0ZU1vZHVsZUNvbW1hbmRzKGNvbmZpZ3MpIHtcbiAgICBmb3IgKGxldCByb3V0ZXJJZGVuZGl0eSBvZiBjb25maWdzLnJvdXRlcnMpIHtcbiAgICAgIHN3aXRjaChyb3V0ZXJJZGVuZGl0eSkge1xuICAgICAgICBjYXNlICdyYXB0b3InOlxuICAgICAgICAgIHRoaXMudmFsaWRhdGVSYXB0b3IoY29uZmlncyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BoYXNlJzpcbiAgICAgICAgICB0aGlzLnZhbGlkYXRlUGhhc2UoY29uZmlncyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FkYic6XG4gICAgICAgICAgdGhpcy52YWxpZGF0ZUFuZHJvaWREYWVtb25CdXMoY29uZmlncyk7XG4gICAgICAgICAgYnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3NjcmVlbnJlY29yZCc6XG4gICAgICAgICAgdGhpcy52YWxpZGF0ZUZGTVBFRyhjb25maWdzKTtcbiAgICAgICAgICB0aGlzLnZhbGlkYXRlQW5kcm9pZERhZW1vbkJ1cyhjb25maWdzKTtcblx0XHRcdFx0XHR0aGlzLnZhbGlkYXRlUmVjb3JkQ29uc29sZVRhcmdldChjb25maWdzKTtcblx0XHRcdFx0XHRicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmcm9tT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgbGV0IGRlZmF1bHRDb25maWdzO1xuICAgIG9wdGlvbnMuY29uZmlnID0gb3B0aW9ucy5jb25maWc7XG4gICAgaWYgKG9wdGlvbnMuY29uZmlnKSB7XG4gICAgICBkZWZhdWx0Q29uZmlncyA9IHJlcXVpcmUob3B0aW9ucy5jb25maWcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkZWZhdWx0Q29uZmlncyA9IHRoaXMuZ2VuZXJhdGVEZWZhdWx0Q29uZmlncygpO1xuICAgIH1cblxuICAgIC8vIE92ZXJ3cml0ZSB0aGUgZXhpc3RlbnQgb25lIGluIHRoZSBkZWZhdWx0IGZpbGUuXG4gICAgZGVmYXVsdENvbmZpZ3MucGF0aC5waGFzZSA9IG9wdGlvbnMucGhhc2UgfHwgZGVmYXVsdENvbmZpZ3MucGF0aC5waGFzZTtcbiAgICBkZWZhdWx0Q29uZmlncy5wYXRoLnJhcHRvciA9IG9wdGlvbnMucmFwdG9yIHx8IGRlZmF1bHRDb25maWdzLnBhdGgucmFwdG9yO1xuICAgIGRlZmF1bHRDb25maWdzLnBhdGguYWRiID0gb3B0aW9ucy5hZGIgfHwgZGVmYXVsdENvbmZpZ3MucGF0aC5hZGI7XG4gICAgZGVmYXVsdENvbmZpZ3MucGF0aC5mZm1wZWcgPSBvcHRpb25zLmZmbXBlZyB8fCBkZWZhdWx0Q29uZmlncy5wYXRoLmZmbXBlZztcbiAgICBkZWZhdWx0Q29uZmlncy5wYXRoLm91dHB1dCA9IG9wdGlvbnMub3V0cHV0IHx8IGRlZmF1bHRDb25maWdzLnBhdGgub3V0cHV0O1xuXG5cdFx0Ly8gRm9yIFNjcmVlblJlY29yZCBtb2R1bGUuXG4gICAgZGVmYXVsdENvbmZpZ3MucGF0aC5yZWNvcmQgPSBkZWZhdWx0Q29uZmlncy5wYXRoLnJlY29yZCB8fCB7XG5cdFx0XHR0YXJnZXQ6IHsgY29uc29sZTogbnVsbCwgZGV2aWNlOiBudWxsIH1cblx0XHR9O1xuXHRcdGRlZmF1bHRDb25maWdzLnBhdGgucmVjb3JkLnRhcmdldC5kZXZpY2UgPSBvcHRpb25zWydyZWNvcmQtdGFyZ2V0LWRldmljZSddIHx8XG5cdFx0XHRkZWZhdWx0Q29uZmlncy5wYXRoLnJlY29yZC50YXJnZXQuZGV2aWNlO1xuXHRcdGRlZmF1bHRDb25maWdzLnBhdGgucmVjb3JkLnRhcmdldC5jb25zb2xlID0gb3B0aW9uc1sncmVjb3JkLXRhcmdldC1jb25zb2xlJ10gfHxcblx0XHRcdGRlZmF1bHRDb25maWdzLnBhdGgucmVjb3JkLnRhcmdldC5jb25zb2xlO1xuXG4gICAgZGVmYXVsdENvbmZpZ3Mucm91dGVycyA9IG9wdGlvbnMucm91dGVyc3x8IGRlZmF1bHRDb25maWdzLnJvdXRlcnMgfHwgW107XG5cbiAgICBkZWZhdWx0Q29uZmlncy5yb3V0ZXJzLl9fY29tbWFuZF9fID0gb3B0aW9uc1snY29tbWFuZCddIHx8XG4gICAgICBkZWZhdWx0Q29uZmlncy5yb3V0ZXJzLl9fY29tbWFuZF9ffHwgJ3JhcHRvcic7XG5cbiAgICBkZWZhdWx0Q29uZmlncy5yb3V0ZXJzLl9fcmVwb3J0ZXJfXyA9IG9wdGlvbnNbJ3JlcG9ydGVyJ10gfHxcbiAgICAgIGRlZmF1bHRDb25maWdzLnJvdXRlcnMuX19yZXBvcnRlcl9fIHx8ICd0aW1lbGluZSc7XG5cbiAgICBpZiAoIWRlZmF1bHRDb25maWdzLnJvdXRlcnMuaW5jbHVkZXMoJ3NpZ25hbCcpKSB7XG4gICAgICBkZWZhdWx0Q29uZmlncy5yb3V0ZXJzLnB1c2goJ3NpZ25hbCcpO1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdENvbmZpZ3M7XG4gIH1cblxuICBnZW5lcmF0ZURlZmF1bHRDb25maWdzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBwYXRoOiB7XG4gICAgICAgIHBoYXNlOiAnJyxcbiAgICAgICAgcmFwdG9yOiAnJ1xuICAgICAgfSxcbiAgICAgIHRlc3RzOiBbXVxuICAgIH07XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0NvbmZpZ3VyZS5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShfX2Rpcm5hbWUgKyAnL2xpYi9nZXRvcHQuanMnKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L25vZGUtZ2V0b3B0L2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBHZW5lcmF0ZWQgYnkgVG9mZmVlU2NyaXB0IDEuNC4wXG4oZnVuY3Rpb24oKSB7XG4gIHZhciBHZXRvcHQsIFBhcnNlZE9wdGlvbixcbiAgICBfX2hhc1Byb3AgPSB7fS5oYXNPd25Qcm9wZXJ0eSxcbiAgICBfX21hdGNoZXMgPSBudWxsO1xuXG4gIFBhcnNlZE9wdGlvbiA9IChmdW5jdGlvbigpIHtcblxuICAgIGZ1bmN0aW9uIFBhcnNlZE9wdGlvbihhcmd2LCBvcHRpb25zKSB7XG4gICAgICB0aGlzLmFyZ3YgPSBhcmd2O1xuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICB9XG5cbiAgICBQYXJzZWRPcHRpb24ucHJvdG90eXBlLmVtcHR5ID0gZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaywgdiwgX3JlZjtcbiAgICAgIGlmICh0aGlzLmFyZ3YubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIF9yZWYgPSB0aGlzLm9wdGlvbnM7XG4gICAgICBmb3IgKGsgaW4gX3JlZikge1xuICAgICAgICBpZiAoIV9faGFzUHJvcC5jYWxsKF9yZWYsIGspKSBjb250aW51ZTtcbiAgICAgICAgdiA9IF9yZWZba107XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG5cbiAgICByZXR1cm4gUGFyc2VkT3B0aW9uO1xuXG4gIH0pKCk7XG5cbiAgR2V0b3B0ID0gKGZ1bmN0aW9uKCkge1xuXG4gICAgR2V0b3B0LkhBU19BUkdVTUVOVCA9IHRydWU7XG5cbiAgICBHZXRvcHQuTk9fQVJHVU1FTlQgPSBmYWxzZTtcblxuICAgIEdldG9wdC5NVUxUSV9TVVBQT1JURUQgPSB0cnVlO1xuXG4gICAgR2V0b3B0LlNJTkdMRV9PTkxZID0gZmFsc2U7XG5cbiAgICBHZXRvcHQuVkVSU0lPTiA9ICcwLjIuMyc7XG5cbiAgICBmdW5jdGlvbiBHZXRvcHQob3B0aW9ucykge1xuICAgICAgdmFyIGNvbW1lbnQsIGRlZmluaXRpb24sIGhhc19hcmd1bWVudCwgbG9uZ19uYW1lLCBtdWx0aV9zdXBwb3J0ZWQsIG5hbWUsIG9wdGlvbiwgb3B0aW9uYWwsIHNob3J0X25hbWUsIF9pLCBfbGVuLCBfcmVmO1xuICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgIHRoaXMuc2hvcnRfb3B0aW9ucyA9IHt9O1xuICAgICAgdGhpcy5sb25nX29wdGlvbnMgPSB7fTtcbiAgICAgIHRoaXMubG9uZ19uYW1lcyA9IFtdO1xuICAgICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICAgIHRoaXMuZXZlbnRfbmFtZXMgPSBbXTtcbiAgICAgIHRoaXMuZXJyb3JGdW5jID0gZnVuY3Rpb24oZSkge1xuICAgICAgICBjb25zb2xlLmluZm8oZS5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3MuZXhpdCgxKTtcbiAgICAgIH07XG4gICAgICBpZiAocHJvY2Vzcy5hcmd2WzFdKSB7XG4gICAgICAgIHRoaXMuaGVscCA9IFwiVXNhZ2U6IG5vZGUgXCIgKyAocHJvY2Vzcy5hcmd2WzFdLm1hdGNoKC8oPzouKltcXC9cXFxcXSk/KC4qKSQvKVsxXSkgKyBcIlxcblxcbltbT1BUSU9OU11dXFxuXCI7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmhlbHAgPSBcIltbT1BUSU9OU11dXCI7XG4gICAgICB9XG4gICAgICBfcmVmID0gdGhpcy5vcHRpb25zO1xuICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIG9wdGlvbiA9IF9yZWZbX2ldO1xuICAgICAgICBzaG9ydF9uYW1lID0gb3B0aW9uWzBdLCBkZWZpbml0aW9uID0gb3B0aW9uWzFdLCBjb21tZW50ID0gb3B0aW9uWzJdO1xuICAgICAgICBpZiAoY29tbWVudCA9PSBudWxsKSB7XG4gICAgICAgICAgY29tbWVudCA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkZWZpbml0aW9uID09IG51bGwpIHtcbiAgICAgICAgICBkZWZpbml0aW9uID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3J0X25hbWUgPT0gbnVsbCkge1xuICAgICAgICAgIHNob3J0X25hbWUgPSAnJztcbiAgICAgICAgfVxuICAgICAgICAoX19tYXRjaGVzID0gZGVmaW5pdGlvbi5tYXRjaCgvXihbXFx3XFwtXSopLykpO1xuICAgICAgICBsb25nX25hbWUgPSBfX21hdGNoZXNbMV07XG4gICAgICAgIGhhc19hcmd1bWVudCA9IGRlZmluaXRpb24uaW5kZXhPZignPScpICE9PSAtMTtcbiAgICAgICAgbXVsdGlfc3VwcG9ydGVkID0gZGVmaW5pdGlvbi5pbmRleE9mKCcrJykgIT09IC0xO1xuICAgICAgICBvcHRpb25hbCA9IC9cXFs9Lio/XFxdLy50ZXN0KGRlZmluaXRpb24pO1xuICAgICAgICBsb25nX25hbWUgPSBsb25nX25hbWUudHJpbSgpO1xuICAgICAgICBzaG9ydF9uYW1lID0gc2hvcnRfbmFtZS50cmltKCk7XG4gICAgICAgIGlmIChvcHRpb25hbCAmJiBzaG9ydF9uYW1lKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdvcHRpb25hbCBhcmd1bWVudCBjYW4gb25seSB3b3JrIHdpdGggbG9uZyBvcHRpb24nKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWxvbmdfbmFtZSkge1xuICAgICAgICAgIGxvbmdfbmFtZSA9IHNob3J0X25hbWU7XG4gICAgICAgIH1cbiAgICAgICAgbmFtZSA9IGxvbmdfbmFtZTtcbiAgICAgICAgaWYgKGxvbmdfbmFtZSA9PT0gJycpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJlbXB0eSBvcHRpb24gZm91bmQuIHRoZSBsYXN0IG9wdGlvbiBuYW1lIGlzIFwiICsgKHRoaXMubG9uZ19uYW1lcy5zbGljZSgtMSkpKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sb25nX29wdGlvbnNbbG9uZ19uYW1lXSA9PSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5sb25nX25hbWVzLnB1c2gobG9uZ19uYW1lKTtcbiAgICAgICAgICB0aGlzLmxvbmdfb3B0aW9uc1tsb25nX25hbWVdID0ge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHNob3J0X25hbWU6IHNob3J0X25hbWUsXG4gICAgICAgICAgICBsb25nX25hbWU6IGxvbmdfbmFtZSxcbiAgICAgICAgICAgIGhhc19hcmd1bWVudDogaGFzX2FyZ3VtZW50LFxuICAgICAgICAgICAgbXVsdGlfc3VwcG9ydGVkOiBtdWx0aV9zdXBwb3J0ZWQsXG4gICAgICAgICAgICBjb21tZW50OiBjb21tZW50LFxuICAgICAgICAgICAgb3B0aW9uYWw6IG9wdGlvbmFsLFxuICAgICAgICAgICAgZGVmaW5pdGlvbjogZGVmaW5pdGlvblxuICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwib3B0aW9uIFwiICsgbG9uZ19uYW1lICsgXCIgcmVkZWZpbmVkLlwiKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2hvcnRfbmFtZSAhPT0gJycpIHtcbiAgICAgICAgICBpZiAoc2hvcnRfbmFtZS5sZW5ndGggIT09IDEpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc2hvcnQgb3B0aW9uIG11c3QgYmUgc2luZ2xlIGNoYXJhY3RlcnMnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5zaG9ydF9vcHRpb25zW3Nob3J0X25hbWVdID0gdGhpcy5sb25nX29wdGlvbnNbbG9uZ19uYW1lXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcztcbiAgICB9XG5cbiAgICBHZXRvcHQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24obmFtZSwgY2IpIHtcbiAgICAgIHRoaXMuZXZlbnRzW25hbWVdID0gY2I7XG4gICAgICB0aGlzLmV2ZW50X25hbWVzLnB1c2gobmFtZSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgR2V0b3B0LnByb3RvdHlwZS5lbWl0ID0gZnVuY3Rpb24obmFtZSwgY2IpIHtcbiAgICAgIGlmICh0aGlzLmV2ZW50c1tuYW1lXSkge1xuICAgICAgICByZXR1cm4gdGhpcy5ldmVudHNbbmFtZV0uY2FsbCh0aGlzLCB0aGlzLnBhcnNlZE9wdGlvbi5hcmd2LCB0aGlzLnBhcnNlZE9wdGlvbi5vcHRpb25zKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdldG9wdCB0cmlnZ2VyICdcIiArIG5hbWUgKyBcIicgaXMgbm90IGZvdW5kXCIpO1xuICAgICAgfVxuICAgIH07XG5cbiAgICBHZXRvcHQucHJvdG90eXBlLnRyaWdnZXJfZXZlbnRzXyA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIG5hbWUsIG9wdGlvbnMsIF9pLCBfbGVuLCBfcmVmO1xuICAgICAgb3B0aW9ucyA9IHRoaXMucGFyc2VkT3B0aW9uLm9wdGlvbnM7XG4gICAgICBfcmVmID0gdGhpcy5ldmVudF9uYW1lcztcbiAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICBuYW1lID0gX3JlZltfaV07XG4gICAgICAgIGlmIChvcHRpb25zW25hbWVdICE9IG51bGwpIHtcbiAgICAgICAgICB0aGlzLmVtaXQobmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBHZXRvcHQucHJvdG90eXBlLnNhdmVfb3B0aW9uXyA9IGZ1bmN0aW9uKG9wdGlvbnMsIG9wdGlvbiwgYXJndikge1xuICAgICAgdmFyIG5hbWUsIG5hbWVzLCB2YWx1ZSwgX2ksIF9sZW4sIF9yZWY7XG4gICAgICBpZiAob3B0aW9uLmhhc19hcmd1bWVudCkge1xuICAgICAgICBpZiAoYXJndi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJvcHRpb24gXCIgKyBvcHRpb24ubG9uZ19uYW1lICsgXCIgbmVlZCBhcmd1bWVudFwiKTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IGFyZ3Yuc2hpZnQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhbHVlID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIG5hbWVzID0gW29wdGlvbi5uYW1lXTtcbiAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gbmFtZXMubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgbmFtZSA9IG5hbWVzW19pXTtcbiAgICAgICAgaWYgKG9wdGlvbi5tdWx0aV9zdXBwb3J0ZWQpIHtcbiAgICAgICAgICBpZiAoKF9yZWYgPSBvcHRpb25zW25hbWVdKSA9PSBudWxsKSB7XG4gICAgICAgICAgICBvcHRpb25zW25hbWVdID0gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIG9wdGlvbnNbbmFtZV0ucHVzaCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0aW9uc1tuYW1lXSA9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgR2V0b3B0LnByb3RvdHlwZS5wYXJzZSA9IGZ1bmN0aW9uKGFyZ3YpIHtcbiAgICAgIHZhciBhcmcsIGksIGxvbmdfbmFtZSwgb3B0aW9uLCBydF9hcmd2LCBydF9vcHRpb25zLCBzaG9ydF9uYW1lLCBzaG9ydF9uYW1lcywgdmFsdWUsIF9pLCBfbGVuO1xuICAgICAgdHJ5IHtcbiAgICAgICAgYXJndiA9IGFyZ3Yuc2xpY2UoMCk7XG4gICAgICAgIHJ0X29wdGlvbnMgPSB7fTtcbiAgICAgICAgcnRfYXJndiA9IFtdO1xuICAgICAgICB3aGlsZSAoKGFyZyA9IGFyZ3Yuc2hpZnQoKSkgIT0gbnVsbCkge1xuICAgICAgICAgIGlmICgoX19tYXRjaGVzID0gYXJnLm1hdGNoKC9eLShcXHdbXFx3XFwtXSopLykpKSB7XG4gICAgICAgICAgICBzaG9ydF9uYW1lcyA9IF9fbWF0Y2hlc1sxXTtcbiAgICAgICAgICAgIGZvciAoaSA9IF9pID0gMCwgX2xlbiA9IHNob3J0X25hbWVzLmxlbmd0aDsgX2kgPCBfbGVuOyBpID0gKytfaSkge1xuICAgICAgICAgICAgICBzaG9ydF9uYW1lID0gc2hvcnRfbmFtZXNbaV07XG4gICAgICAgICAgICAgIG9wdGlvbiA9IHRoaXMuc2hvcnRfb3B0aW9uc1tzaG9ydF9uYW1lXTtcbiAgICAgICAgICAgICAgaWYgKCFvcHRpb24pIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIG9wdGlvbiBcIiArIHNob3J0X25hbWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChvcHRpb24uaGFzX2FyZ3VtZW50KSB7XG4gICAgICAgICAgICAgICAgaWYgKGkgPCBhcmcubGVuZ3RoIC0gMikge1xuICAgICAgICAgICAgICAgICAgYXJndi51bnNoaWZ0KGFyZy5zbGljZShpICsgMikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVfb3B0aW9uXyhydF9vcHRpb25zLCBvcHRpb24sIGFyZ3YpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2F2ZV9vcHRpb25fKHJ0X29wdGlvbnMsIG9wdGlvbiwgYXJndik7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKChfX21hdGNoZXMgPSBhcmcubWF0Y2goL14tLShcXHdbXFx3XFwtXSopKCg/Oj0uKik/KSQvKSkpIHtcbiAgICAgICAgICAgIGxvbmdfbmFtZSA9IF9fbWF0Y2hlc1sxXTtcbiAgICAgICAgICAgIHZhbHVlID0gX19tYXRjaGVzWzJdO1xuICAgICAgICAgICAgb3B0aW9uID0gdGhpcy5sb25nX29wdGlvbnNbbG9uZ19uYW1lXTtcbiAgICAgICAgICAgIGlmICghb3B0aW9uKSB7XG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcImludmFsaWQgb3B0aW9uIFwiICsgbG9uZ19uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgdmFsdWUgPSB2YWx1ZS5zbGljZSgxKTtcbiAgICAgICAgICAgICAgYXJndi51bnNoaWZ0KHZhbHVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob3B0aW9uLm9wdGlvbmFsKSB7XG4gICAgICAgICAgICAgIGFyZ3YudW5zaGlmdCgnJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNhdmVfb3B0aW9uXyhydF9vcHRpb25zLCBvcHRpb24sIGFyZ3YpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYXJnID09PSAnLS0nKSB7XG4gICAgICAgICAgICBydF9hcmd2ID0gcnRfYXJndi5jb25jYXQoYXJndik7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcnRfYXJndi5wdXNoKGFyZyk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHRoaXMuZXJyb3JGdW5jKGUpO1xuICAgICAgfVxuICAgICAgdGhpcy5wYXJzZWRPcHRpb24gPSBuZXcgUGFyc2VkT3B0aW9uKHJ0X2FyZ3YsIHJ0X29wdGlvbnMpO1xuICAgICAgdGhpcy50cmlnZ2VyX2V2ZW50c18oKTtcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlZE9wdGlvbjtcbiAgICB9O1xuXG4gICAgR2V0b3B0LnByb3RvdHlwZS5wYXJzZV9zeXN0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlKHByb2Nlc3MuYXJndi5zbGljZSgyKSk7XG4gICAgfTtcblxuICAgIEdldG9wdC5wcm90b3R5cGUucGFyc2VTeXN0ZW0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLnBhcnNlX3N5c3RlbSgpO1xuICAgIH07XG5cbiAgICBHZXRvcHQucHJvdG90eXBlLnNldEhlbHAgPSBmdW5jdGlvbihoZWxwKSB7XG4gICAgICB0aGlzLmhlbHAgPSBoZWxwO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEdldG9wdC5wcm90b3R5cGUuZ2V0SGVscCA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGNvbW1lbnQsIGRlZmluaXRpb24sIGxvbmdfbmFtZSwgb3B0LCBvcHRpb24sIG9wdGlvbnMsIHNob3J0X25hbWUsIHN0cnMsIHdzLCBfaSwgX2xlbiwgX3JlZjtcbiAgICAgIHdzID0gW107XG4gICAgICBvcHRpb25zID0gW107XG4gICAgICBfcmVmID0gdGhpcy5sb25nX25hbWVzO1xuICAgICAgZm9yIChfaSA9IDAsIF9sZW4gPSBfcmVmLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIGxvbmdfbmFtZSA9IF9yZWZbX2ldO1xuICAgICAgICBvcHRpb24gPSB0aGlzLmxvbmdfb3B0aW9uc1tsb25nX25hbWVdO1xuICAgICAgICBzaG9ydF9uYW1lID0gb3B0aW9uLnNob3J0X25hbWUsIGxvbmdfbmFtZSA9IG9wdGlvbi5sb25nX25hbWUsIGNvbW1lbnQgPSBvcHRpb24uY29tbWVudCwgZGVmaW5pdGlvbiA9IG9wdGlvbi5kZWZpbml0aW9uO1xuICAgICAgICBpZiAoc2hvcnRfbmFtZSAmJiBzaG9ydF9uYW1lID09PSBsb25nX25hbWUpIHtcbiAgICAgICAgICBvcHQgPSBcIi1cIiArIHNob3J0X25hbWU7XG4gICAgICAgIH0gZWxzZSBpZiAoc2hvcnRfbmFtZSkge1xuICAgICAgICAgIG9wdCA9IFwiLVwiICsgc2hvcnRfbmFtZSArIFwiLCAtLVwiICsgZGVmaW5pdGlvbjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBvcHQgPSBcIiAgICAtLVwiICsgZGVmaW5pdGlvbjtcbiAgICAgICAgfVxuICAgICAgICB3c1swXSA9IE1hdGgubWF4KHdzWzBdID4+IDAsIG9wdC5sZW5ndGgpO1xuICAgICAgICBvcHRpb25zLnB1c2goW29wdCwgY29tbWVudF0pO1xuICAgICAgfVxuICAgICAgc3RycyA9IChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIF9qLCBfbGVuMSwgX3Jlc3VsdHM7XG4gICAgICAgIF9yZXN1bHRzID0gW107XG4gICAgICAgIGZvciAoX2ogPSAwLCBfbGVuMSA9IG9wdGlvbnMubGVuZ3RoOyBfaiA8IF9sZW4xOyBfaisrKSB7XG4gICAgICAgICAgb3B0aW9uID0gb3B0aW9uc1tfal07XG4gICAgICAgICAgb3B0ID0gb3B0aW9uWzBdLCBjb21tZW50ID0gb3B0aW9uWzFdO1xuICAgICAgICAgIHdoaWxlIChvcHQubGVuZ3RoIDwgd3NbMF0pIHtcbiAgICAgICAgICAgIG9wdCArPSAnICc7XG4gICAgICAgICAgfVxuICAgICAgICAgIF9yZXN1bHRzLnB1c2goXCIgIFwiICsgb3B0ICsgXCIgIFwiICsgY29tbWVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9yZXN1bHRzO1xuICAgICAgfSkoKTtcbiAgICAgIHJldHVybiB0aGlzLmhlbHAucmVwbGFjZSgnW1tPUFRJT05TXV0nLCBzdHJzLmpvaW4oXCJcXG5cIikpO1xuICAgIH07XG5cbiAgICBHZXRvcHQucHJvdG90eXBlLnNob3dIZWxwID0gZnVuY3Rpb24oKSB7XG4gICAgICBjb25zb2xlLmluZm8odGhpcy5nZXRIZWxwKCkpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEdldG9wdC5wcm90b3R5cGUuYmluZEhlbHAgPSBmdW5jdGlvbihoZWxwKSB7XG4gICAgICBpZiAoaGVscCkge1xuICAgICAgICB0aGlzLnNldEhlbHAoaGVscCk7XG4gICAgICB9XG4gICAgICB0aGlzLm9uKCdoZWxwJywgZnVuY3Rpb24oKSB7XG4gICAgICAgIHRoaXMuc2hvd0hlbHAoKTtcbiAgICAgICAgcmV0dXJuIHByb2Nlc3MuZXhpdCgwKTtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEdldG9wdC5wcm90b3R5cGUuZ2V0VmVyc2lvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIEdldG9wdC5WRVJTSU9OO1xuICAgIH07XG5cbiAgICBHZXRvcHQucHJvdG90eXBlLmVycm9yID0gZnVuY3Rpb24oZXJyb3JGdW5jKSB7XG4gICAgICB0aGlzLmVycm9yRnVuYyA9IGVycm9yRnVuYztcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBHZXRvcHQuZ2V0VmVyc2lvbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIHRoaXMuVkVSU0lPTjtcbiAgICB9O1xuXG4gICAgR2V0b3B0LmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgIHJldHVybiBuZXcgR2V0b3B0KG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICByZXR1cm4gR2V0b3B0O1xuXG4gIH0pKCk7XG5cbiAgbW9kdWxlLmV4cG9ydHMgPSBHZXRvcHQ7XG5cbn0pLmNhbGwodGhpcyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9ub2RlLWdldG9wdC9saWIvZ2V0b3B0LmpzXG4gKiogbW9kdWxlIGlkID0gMjA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJwYXRoXCJcbiAqKiBtb2R1bGUgaWQgPSAyMDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBtYXAgPSB7XG5cdFwiLi9BbmRyb2lkRGFlbW9uQnVzXCI6IDIwOCxcblx0XCIuL0FuZHJvaWREYWVtb25CdXMuanNcIjogMjA4LFxuXHRcIi4vQ29uZmlndXJlXCI6IDIwMyxcblx0XCIuL0NvbmZpZ3VyZS5qc1wiOiAyMDMsXG5cdFwiLi9EZWZlclwiOiAyMTAsXG5cdFwiLi9EZWZlci5qc1wiOiAyMTAsXG5cdFwiLi9iZWhvbGRlclwiOiAxOTAsXG5cdFwiLi9iZWhvbGRlci5qc1wiOiAxOTAsXG5cdFwiLi9yZWNvcmQvTG9nXCI6IDIxMSxcblx0XCIuL3JlY29yZC9Mb2cuanNcIjogMjExLFxuXHRcIi4vcmVjb3JkL1RpbWVsaW5lXCI6IDIxMixcblx0XCIuL3JlY29yZC9UaW1lbGluZS5qc1wiOiAyMTIsXG5cdFwiLi9yb3V0ZXJzL0RldmljZUxvZ1wiOiAyMTMsXG5cdFwiLi9yb3V0ZXJzL0RldmljZUxvZy5qc1wiOiAyMTMsXG5cdFwiLi9yb3V0ZXJzL0xvZy9Db2xsZWN0aW5nU3RhZ2VcIjogMjE2LFxuXHRcIi4vcm91dGVycy9Mb2cvQ29sbGVjdGluZ1N0YWdlLmpzXCI6IDIxNixcblx0XCIuL3JvdXRlcnMvTG9nL1JlY29yZGluZ1N0YWdlXCI6IDIxOCxcblx0XCIuL3JvdXRlcnMvTG9nL1JlY29yZGluZ1N0YWdlLmpzXCI6IDIxOCxcblx0XCIuL3JvdXRlcnMvTG9nL1Rlcm1pbmF0aW5nU3RhZ2VcIjogMjE3LFxuXHRcIi4vcm91dGVycy9Mb2cvVGVybWluYXRpbmdTdGFnZS5qc1wiOiAyMTcsXG5cdFwiLi9yb3V0ZXJzL1JvdXRlclwiOiAyMTQsXG5cdFwiLi9yb3V0ZXJzL1JvdXRlci5qc1wiOiAyMTQsXG5cdFwiLi9yb3V0ZXJzL1NjcmVlblJlY29yZFwiOiAyMTksXG5cdFwiLi9yb3V0ZXJzL1NjcmVlblJlY29yZC5qc1wiOiAyMTksXG5cdFwiLi9yb3V0ZXJzL1NpZ25hbFwiOiAyMjYsXG5cdFwiLi9yb3V0ZXJzL1NpZ25hbC5qc1wiOiAyMjYsXG5cdFwiLi9yb3V0ZXJzL1RpbWVsaW5lXCI6IDIyNyxcblx0XCIuL3JvdXRlcnMvVGltZWxpbmUuanNcIjogMjI3XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpKTtcbn07XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdHJldHVybiBtYXBbcmVxXSB8fCAoZnVuY3Rpb24oKSB7IHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIicuXCIpIH0oKSk7XG59O1xud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IDIwNztcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMgXlxcLlxcLy4qJFxuICoqIG1vZHVsZSBpZCA9IDIwN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgY2hpbGRfcHJvY2VzcyBmcm9tICdjaGlsZF9wcm9jZXNzJztcblxuZXhwb3J0XHRmdW5jdGlvbiBjb21tYW5kRGV2aWNlKGFkYlBhdGgsIGVudnMpIHtcbiAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgbGV0IHJlc3VsdDtcbiAgICBjaGVja0RhZW1vblNlcnZlcigpO1xuICAgIHdhaXREZXZpY2UoKTtcbiAgICBpZiAoZW52cykge1xuICAgICAgcmVzdWx0ID0gY2hpbGRfcHJvY2Vzcy5leGVjRmlsZVN5bmMoYWRiUGF0aCwgYXJncywge1xuICAgICAgICAnZW52JzogZW52c1xuICAgICAgfSkudG9TdHJpbmcoKS50cmltKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdCA9IGNoaWxkX3Byb2Nlc3MuZXhlY0ZpbGVTeW5jKGFkYlBhdGgsIGFyZ3MpLnRvU3RyaW5nKCkudHJpbSgpO1xuICAgIH1cbiAgICB3YWl0RGV2aWNlKCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gd2FpdERldmljZShhZGJQYXRoKSB7XG4gIHJldHVybiAoKSA9PiB7XG5cdFx0Y2hpbGRfcHJvY2Vzcy5leGVjRmlsZVN5bmMoYWRiUGF0aCwgWyd3YWl0LWZvci1kZXZpY2UnXSk7XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoZWNrRGFlbW9uU2VydmVyKGFkYlBhdGgpIHtcbiAgcmV0dXJuICgpID0+IHtcblx0XHRjaGlsZF9wcm9jZXNzLmV4ZWNGaWxlU3luYyhhZGJQYXRoLCBbJ3N0YXJ0LXNlcnZlciddKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvQW5kcm9pZERhZW1vbkJ1cy5qc1xuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNoaWxkX3Byb2Nlc3NcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImNoaWxkX3Byb2Nlc3NcIlxuICoqIG1vZHVsZSBpZCA9IDIwOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZWZlciB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMucHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRoaXMucmVzb2x2ZSA9IHJlc29sdmU7XG4gICAgICB0aGlzLnJlamVjdCA9IHJlamVjdDtcbiAgICB9KTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvRGVmZXIuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZyB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuX3N0b3JlID0gW107XG4gIH1cblxuICBwdXNoKGRhdGEpIHtcbiAgICB0aGlzLl9zdG9yZS5wdXNoKGRhdGEpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yZWNvcmQvTG9nLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaW1lbGluZSB7XG4gIGNvbnN0cnVjdG9yKG9mZnNldCkge1xuICAgIHRoaXMuX29mZnNldCA9IG9mZnNldDtcbiAgICB0aGlzLl9zbG90cyA9IHt9O1xuICB9XG5cbiAgcHVzaChzb3VyY2UsIHR5cGUsIGNvbnRlbnQpIHtcbiAgICBpZiAodGhpcy5fc2xvdHNbc291cmNlXSkge1xuICAgICAgdGhpcy5fc2xvdHNbc291cmNlXS5wdXNoKHsgdHlwZSwgY29udGVudCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2xvdHNbc291cmNlXSA9IFt7IHR5cGUsIGNvbnRlbnQgfV07XG4gICAgfVxuICB9XG5cbiAgc2VyaWFsaXplKCkge1xuICAgIC8vIFhYWDogYSBiZXR0ZXIgc2VyaWFsaXppbmcgbWV0aG9kLlxuICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLl9zbG90cyk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JlY29yZC9UaW1lbGluZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWwgZnJvbSAndXRpbCc7XG5pbXBvcnQgY3NwIGZyb20gJ2pzLWNzcCc7XG5pbXBvcnQgY2hpbGRfcHJvY2VzcyBmcm9tICdjaGlsZF9wcm9jZXNzJztcbmltcG9ydCBSb3V0ZXIgZnJvbSAncm91dGVycy9Sb3V0ZXInO1xuaW1wb3J0IERlZmVyIGZyb20gJ0RlZmVyJztcbmltcG9ydCBUaW1lIGZyb20gJ3RpbWUnO1xuaW1wb3J0IHsgY29tbWFuZERldmljZSB9IGZyb20gJ0FuZHJvaWREYWVtb25CdXMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEZXZpY2VMb2cgZXh0ZW5kcyBSb3V0ZXIge1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZ3MpIHtcbiAgICBzdXBlcihjb25maWdzKTtcbiAgICB0aGlzLl9hZGJQYXRoID0gdGhpcy5jb25maWdzLnBhdGguYWRiO1xuICAgIHRoaXMuX25hbWUgPSAnZGV2aWNlbG9nJztcbiAgICB0aGlzLl9jb21tYW5kRGV2aWNlID0gY29tbWFuZERldmljZSh0aGlzLl9hZGJQYXRoKTtcbiAgICB0aGlzLl9sb2dzID0gW107XG4gICAgdGhpcy5fZXJyb3JzID0gW107XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICAvLyBDb25jYXQgdGhlIGZpcnN0IHN0YWdlIGhhbmRsZXIuXG4gICAgdGhpcy5fdHJhbnNmZXJUb1JlY29yZGluZ1N0YWdlKCk7XG4gICAgdGhpcy5fZmV0Y2hUaW1lSW5mb3JtYXRpb24oKTtcblxuICAgIC8vIEtpY2stb2ZmIGl0LlxuICAgIHRoaXMuX3N0YWdlcy5yZXNvbHZlKCk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIHRoaXMuX3N0b3BMaXN0ZW5Ub0NvbnRyb2xDaGFubmVsKCk7XG4gICAgdGhpcy5fY2xvc2VDaGFubmVscygpO1xuICB9XG5cbiAgX2ZldGNoVGltZUluZm9ybWF0aW9uKCkge1xuICAgIHRoaXMuX2luaXRpYWxFcG9jaCA9IHRoaXMuX2ZldGNoSW5pdGlhbEVwb2NoKCk7XG4gICAgdGhpcy5fZGV2aWNlVFogPSB0aGlzLl9jb21tYW5kRGV2aWNlKFxuICAgICAgJ3NoZWxsJywgJ2dldHByb3AnLCAncGVyc2lzdC5zeXMudGltZXpvbmUnKTtcbiAgICB0aGlzLl9kZXZpY2VZZWFyID0gcGFyc2VJbnQodGhpcy5fY29tbWFuZERldmljZShcbiAgICAgICdzaGVsbCcsIGBUWj0ke3RoaXMuX2RldmljZVRafWAsICdkYXRlJywgJyslWScpLnRvU3RyaW5nKCksIDEwKTtcbiAgfVxuXG4gIF9yZWNvcmRpbmcoZGVmZXIpIHtcbiAgICAvLyBUdXJuIGFsbCB0aW1lc3RhbXBzIGluIHRoZSBsb2cgdG8gZXBvY2gsIHRoZW4gc3Vic3RyYWN0IHRoZW0uXG4gICAgbGV0IHJ1bkl0ID0gY2hpbGRfcHJvY2Vzcy5zcGF3bihcbiAgICAgIHRoaXMuX2FkYlBhdGgsXG4gICAgICBbJ2xvZ2NhdCcsICctdicsICd0aW1lJ10sXG4gICAgICB7IGRldGFjaGVkOiB0cnVlIH1cbiAgICApO1xuICAgIHJ1bkl0LnVucmVmKCk7XG4gICAgcnVuSXQuc3Rkb3V0Lm9uKCdkYXRhJywgKGNodW5rKSA9PiB7XG4gICAgICB0aGlzLl9sb2dzLnB1c2goY2h1bmsudG9TdHJpbmcoKSk7XG4gICAgfSk7XG4gICAgcnVuSXQuc3RkZXJyLm9uKCdkYXRhJywgKGNodW5rKSA9PiB7XG4gICAgICBsZXQgc3RyQ2h1bmsgPSBjaHVuay50b1N0cmluZygpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5fbmFtZSwgRGF0ZS5ub3coKSxcbiAgICAgICAgYFNlbmQgYSBtZXNzYWdlIG9mIGNvbnNvbGUgZXJyb3I6ICR7IHN0ckNodW5rIH0gYCk7XG4gICAgICBjc3AucHV0QXN5bmModGhpcy5fb3V0cHV0Q2hhbm5lbCxcbiAgICAgICAgeyd0b3BpYyc6ICdlcnJvcicsICdzb3VyY2UnOiB0aGlzLl9uYW1lLFxuICAgICAgICAgJ3BheWxvYWQnOiBzdHJDaHVuaygpfSk7XG4gICAgfSk7XG4gICAgcnVuSXQub24oJ2Nsb3NlJywgKHN0YXR1cykgPT4ge1xuICAgICAgY29uc29sZS5sb2codGhpcy5fbmFtZSwgRGF0ZS5ub3coKSxcbiAgICAgICAgYFNlbmQgYSBtZXNzYWdlIG9mIHN0cmVhbSBjbG9zZWQ6ICR7IHN0YXR1cyB9IGApO1xuICAgICAgY3NwLnB1dEFzeW5jKHRoaXMuX291dHB1dENoYW5uZWwsXG4gICAgICAgIHsndG9waWMnOiAnc3RhdHVzJywgJ3BheWxvYWQnOiBzdGF0dXMsICdzb3VyY2UnOiB0aGlzLl9uYW1lfSk7XG4gICAgfSk7XG5cbiAgICBkZWZlci5wcm9taXNlID1cbiAgICAgIGRlZmVyLnByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAgIC8vIEFmdGVyIGNsb3NlLCBraWxsIHRoZSBhZGIgbG9nY2F0IHByb2Nlc3MuXG4gICAgICAgIC8vIFRoaXMgaXMgdGhlICdzdG9wJyBtZXRob2QgdGhpcyBjb21tYW5kIGhhcy5cbiAgICAgICAgLy8gU2luY2UgaXQgbWFpbmx5IGZvcndhcmRzIHRvIG90aGVyIG1vZHVsZSxcbiAgICAgICAgLy8gd2Ugb25seSBuZWVkIHRvIGtpbGwgdGhlIGxpc3RlbmVyLlxuICAgICAgICBydW5JdC5raWxsKCk7XG4gICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciB3aGVuIGtpbGwgdGhlIGRldmljZSBsb2dnaW5nIHByb2Nlc3MnLCBlKTtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH0pO1xuICB9XG5cbiAgX2NvbGxlY3RpbmcoZGVmZXIpIHtcbiAgICAvLyBTb21lIGxpbmVzIGFyZSBvdmVyZmxvd2VkIGZyb20gdGhlIHByZXZpb3VzIHllYXIuXG4gICAgbGV0IHN1cnZpdm9ycyA9IFtdO1xuICAgIGxldCBzdHJMb2dzID0gdGhpcy5fbG9ncy5qb2luKCcnKTtcbiAgICBsZXQgbGluZXMgPSB0aGlzLl9zcGxpdExpbmVzKHN0ckxvZ3MpO1xuICAgIGxldCBtYXhPZmZzZXQgPSAwO1xuXG4gICAgbGluZXMubWFwKChsaW5lKSA9PiBsaW5lLnRyaW0oKSkuZm9yRWFjaCgobGluZSkgPT4ge1xuICAgICAgLy8gRG9uJ3QgaGFuZGxlIGVtcHR5IGxpbmVzLlxuICAgICAgaWYgKCcnID09PSBsaW5lKSB7IHJldHVybjsgfVxuICAgICAgbGV0IHtvZmZzZXQsIGNvbnRlbnR9ID0gdGhpcy5fdGltZU9mZnNldEZyb21EYXRlVGltZShsaW5lKTtcbiAgICAgIC8vIFNvbWV0aGluZyBtYWtlcyBpdCBjYW5ub3QgYmUgcGFyc2VkLlxuICAgICAgaWYgKCFvZmZzZXQgfHwgb2Zmc2V0IDwgMCkgeyByZXR1cm47IH1cblxuICAgICAgaWYgKG9mZnNldCA+IG1heE9mZnNldCkgeyBtYXhPZmZzZXQgPSBvZmZzZXQ7IH1cbiAgICAgIC8vIFN1ZGRlbmx5IHNvbWUgbG9nIGlzIHlvdW5nZXIgdGhhbiBwcmV2aW91cyBvbmUsXG4gICAgICAvLyBtZWFucyB0aG9zZSBvbGRlcnMgYXJlIHRvbyBvbGQgKGluIHRoZSBwcmV2aW91cyB5ZWFyLFxuICAgICAgLy8gZHVlIHRvIHRoZSBtaXNzaW5nIFwieWVhclwiIGluIHRoZSBsb2cpXG4gICAgICBlbHNlIGlmIChvZmZzZXQgPCBtYXhPZmZzZXQpIHtcbiAgICAgICAgLy8gTWVhbnMgdGhhdCBvbmx5IGxvZ3MgYWZ0ZXIgdGhpcyBsaW5lIGFyZSB2YWxpZC5cbiAgICAgICAgLy8gU28gd2UgZW1wdHkgaXQgYW5kIHN0YXJ0IG92ZXIuXG4gICAgICAgIHN1cnZpdm9ycy5sZW5ndGggPSAwO1xuICAgICAgICBtYXhPZmZzZXQgPSBvZmZzZXQ7XG4gICAgICB9XG4gICAgICBzdXJ2aXZvcnMucHVzaCh7b2Zmc2V0LCBjb250ZW50fSk7XG4gICAgfSk7XG5cbiAgICBzdXJ2aXZvcnMuZm9yRWFjaCgocGF5bG9hZCkgPT4ge1xuICAgICAgcGF5bG9hZC50eXBlID0gJ2RldmljZWxvZyc7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLl9uYW1lLCBEYXRlLm5vdygpLFxuICAgICAgICBgU2VuZCB0aGUgbWVzc2FnZSBvZiBkZXZpY2Vsb2cgcGF5bG9hZCAkeyB1dGlsLmluc3BlY3QocGF5bG9hZCkgfWApO1xuICAgICAgY3NwLnB1dEFzeW5jKHRoaXMuX291dHB1dENoYW5uZWwsXG4gICAgICAgIHsndG9waWMnOiAnbG9nJywgJ3NvdXJjZSc6IHRoaXMuX25hbWUsXG4gICAgICAgICAncGF5bG9hZCc6IHBheWxvYWR9KTtcbiAgICB9KTtcbiAgfVxuXG4gIF90ZXJtaW5hdGluZyhkZWZlcikge31cblxuICBfc3BsaXRMaW5lcyhsaW5lcykge1xuICAgIHJldHVybiBsaW5lcy5zcGxpdCgnXFxyJyk7XG4gIH1cblxuICBfdGltZU9mZnNldEZyb21EYXRlVGltZShsaW5lKSB7XG4gICAgbGV0IFtkYXRlLCB0aW1lLCAuLi5jb250ZW50XSA9IGxpbmUuc3BsaXQoJyAnKTtcbiAgICBsZXQgdGltZVNsb3RzID0gdGhpcy5fdGltZVNsb3RzRnJvbURhdGVUaW1lKGRhdGUsIHRpbWUpO1xuICAgIGlmIChpc05hTih0aW1lU2xvdHMuTSkpIHtcbiAgICAgIGNvbnNvbGUud2Fybih0aGlzLl9uYW1lLCBEYXRlLm5vdygpLFxuICAgICAgICBgQ2Fubm90IHBhcnNlIGRhdGUtdGltZSBmcm9tIHRoZSBsb2c6ICR7IGxpbmUgfWApO1xuICAgICAgcmV0dXJuIHt9O1xuICAgIH1cbiAgICAvLyBXZSBuZWVkIHRvIGFwcGVuZCB5ZWFyIG9uIHRoYXQgZGF0ZS5cbiAgICB0aW1lU2xvdHMuWSA9IHRoaXMuX2RldmljZVllYXI7XG4gICAgbGV0IG9mZnNldCA9IHRoaXMuX2Vwb2NoVGltZUZyb21EYXRlVGltZSh0aW1lU2xvdHMpIC0gdGhpcy5faW5pdGlhbEVwb2NoO1xuICAgIGNvbnRlbnQgPSBjb250ZW50LmpvaW4oJyAnKVxuICAgIHJldHVybiB7b2Zmc2V0LCBjb250ZW50fTtcbiAgfVxuXG4gIF90aW1lU2xvdHNGcm9tRGF0ZVRpbWUoZGF0ZSwgdGltZSkge1xuICAgIC8vIGV4OiAxMi0zMSAxOToxODozOC4zMDlcbiAgICB0cnkge1xuICAgICAgbGV0IFtNLGRdID0gZGF0ZS5zcGxpdCgnLScpO1xuICAgICAgbGV0IFtobXMsIG1zXSA9IHRpbWUuc3BsaXQoJy4nKTtcbiAgICAgIGxldCBbaCwgbSwgc10gPSBobXMuc3BsaXQoJzonKTtcbiAgICAgIE0gPSBwYXJzZUludChNLCAxMCkgLSAxO1xuICAgICAgZCA9IHBhcnNlSW50KGQsIDEwKTtcbiAgICAgIGggPSBwYXJzZUludChoLCAxMCk7XG4gICAgICBtID0gcGFyc2VJbnQobSwgMTApO1xuICAgICAgcyA9IHBhcnNlSW50KHMsIDEwKTtcbiAgICAgIG1zID0gcGFyc2VJbnQobXMsIDEwKTtcbiAgICAgIGxldCBzbG90cyA9IHtNLCBkLCBoLCBtLCBzLCBtc307XG4gICAgICBmb3IgKGxldCBuYW1lIGluIHNsb3RzKSB7XG4gICAgICAgIGlmIChpc05hTihzbG90c1tuYW1lXSkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHNsb3QgaW50byBpbnRlZ2VyOiAnICsgbmFtZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiBzbG90cztcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIHJldHVybiB7fTtcbiAgICB9XG4gIH1cblxuICBfZXBvY2hUaW1lRnJvbURhdGVUaW1lKHtZLCBNLCBkLCBoLCBtLCBzLCBtc30pIHtcbiAgICBsZXQgZXBvY2ggPSBuZXcgVGltZS5EYXRlKFksXG4gICAgICAgIE0sXG4gICAgICAgIGQsXG4gICAgICAgIGgsXG4gICAgICAgIG0sXG4gICAgICAgIHMsXG4gICAgICAgIG1zLCB0aGlzLl9kZXZpY2VUWik7XG4gICAgcmV0dXJuIGVwb2NoLmdldFRpbWUoKTtcbiAgfVxuXG4gIF9mZXRjaEluaXRpYWxFcG9jaCgpIHtcbiAgICBsZXQgc2Vjb25kcyA9IHBhcnNlRmxvYXQodGhpcy5fY29tbWFuZERldmljZShcbiAgICAgICdzaGVsbCcsICdlY2hvJywgJyRFUE9DSFJFQUxUSU1FJyksIDEwKTtcbiAgICByZXR1cm4gTWF0aC5yb3VuZChzZWNvbmRzICogMTAwMCk7XG4gIH1cblxuICBfb25TdGFnZUNoYW5nZShzdGFnZSkge1xuICAgIHN3aXRjaChzdGFnZSkge1xuICAgICAgY2FzZSAnY29sbGVjdGluZyc6XG4gICAgICAgIHRoaXMuX3RyYW5zZmVyVG9Db2xsZWN0aW5nU3RhZ2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0ZXJtaW5hdGluZyc6XG4gICAgICAgIHRoaXMuX3RyYW5zZmVyVG9UZXJtaW5hdGluZ1N0YWdlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIF90cmFuc2ZlclRvUmVjb3JkaW5nU3RhZ2UoKSB7XG4gICAgdGhpcy5fdHJhbnNmZXJUbyh0aGlzLl9yZWNvcmRpbmcpO1xuICB9XG5cbiAgX3RyYW5zZmVyVG9Db2xsZWN0aW5nU3RhZ2UoKSB7XG4gICAgdGhpcy5fdHJhbnNmZXJUbyh0aGlzLl9jb2xsZWN0aW5nKTtcbiAgfVxuXG4gIF90cmFuc2ZlclRvVGVybWluYXRpbmdTdGFnZSgpIHtcbiAgICB0aGlzLl90cmFuc2ZlclRvKHRoaXMuX3Rlcm1pbmF0aW5nKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm91dGVycy9EZXZpY2VMb2cuanNcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCB1dGlsIGZyb20gJ3V0aWwnO1xuaW1wb3J0IGNzcCBmcm9tICdqcy1jc3AnO1xuaW1wb3J0IERlZmVyIGZyb20gJ0RlZmVyJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUm91dGVyIHtcblxuICAvKipcbiAgICogQWZ0ZXIgY29uc3RydWN0b3IgdGhpcyByb3V0ZXIgc2hvdWxkIGJlIGFibGUgdG8gbGlzdGVuIHRvIGNvbnRyb2wgbWVzc2FnZXMuXG4gICAqL1xuICBjb25zdHJ1Y3Rvcihjb25maWdzKSB7XG4gICAgdGhpcy5jb25maWdzID0gY29uZmlncztcbiAgICB0aGlzLl9uYW1lID0gJ19fcm91dGVyX18nOyAgLy8gRXh0ZW5kIGJ5IGNsaWVudC5cbiAgICB0aGlzLl9jb250cm9sQ2hhbm5lbCA9IGNzcC5jaGFuKCk7XG4gICAgdGhpcy5fb3V0cHV0Q2hhbm5lbCA9IGNzcC5jaGFuKCk7XG4gICAgdGhpcy5faW5wdXRDaGFubmVsID0gY3NwLmNoYW4oKTtcbiAgICB0aGlzLl9wdWJsaWNhdGlvbiA9IGNzcC5vcGVyYXRpb25zLnB1YihcbiAgICAgIHRoaXMuX291dHB1dENoYW5uZWwsIChlKSA9PiBlLnRvcGljKTtcblxuICAgIC8vIEV2ZXJ5IHN0ZXAgb2YgdGhpcyBEZWZlcidzIHByb21pc2Ugd291bGQgYmUgYSBzdGFnZSBtZXRob2QuXG4gICAgdGhpcy5fc3RhZ2VzID0gbmV3IERlZmVyKCk7XG4gICAgdGhpcy5fY29uc3VtZUNvbnRyb2xNZXNzYWdlKCk7XG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgc3RhcnRlZCB0aGUgcm91dGVyIHNob3VsZCBiZSBhYmxlIHRvIGVtaXQgbWVzc2FnZSB0byB0aGUgb3V0cHV0IGNoYW5uZWwuXG4gICAqIFRoZSByb3V0ZXIgc2hvdWxkIGNvbmNhdCB0aGUgc3RhcnRpbmcgc3RhZ2UgdG8gdGhlIHN0YWdlcyBkZWZlciwgYW5kIHRoZW5cbiAgICogcmVzb2x2ZSBpdCB0byBraWNrLW9mZiB0aGUgd2hvbGUgcHJvY2Vzcy5cbiAgICovXG4gIHN0YXJ0KCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW5zdGFuY2Ugc2hvdWxkIGV4dGVuZCB0aGlzIG1ldGhvZC4nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBPbmx5IGJlIGludm9rZWQgd2hlbiB0aGUgbGFzdCBzdGFnZSBvZiB0aGUgcm91dGVyIG5lZWQgdG8gYmUgZmluaXNoZWQuXG4gICAqIEluIG1vc3Qgb2YgY2FzZXMsIHRoaXMgbWVhbnMgdGhlIGVuZCBvZiB0aGUgcHJvZ3JhbS5cbiAgICogVGhlcmVmb3JlIG9ubHkgdGhlIGxhc3Qgc3RhZ2UgbmVlZCB0byBpbXBsZW1lbnQgdGhpcyB0byByZWxlYXNlIHJlc291cmNlc1xuICAgKiBvciBmaW5hbGl6ZSBhbGwgZnVuY3Rpb25zLlxuICAgKlxuICAgKiBPdGhlciBpbnRlcm1lZGlhdGUgc3RhZ2VzIHdpbGwgYmUgdHJhbnNmZXJyZWQsIHdoaWNoIGlzIGFub3RoZXIgZXhpdCBvZlxuICAgKiB0aGUgcm91dGVyIHRvIGNsZWFyIGl0c2VsZi5cbiAgICovXG4gIHN0b3AoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdJbnN0YW5jZSBzaG91bGQgZXh0ZW5kIHRoaXMgbWV0aG9kLicpO1xuICB9XG5cbiAgc3Vic2NyaWJlKC4uLnN1YnMpIHtcbiAgICBzdWJzLmZvckVhY2goKHN1YikgPT4ge1xuICAgICAgc3ViKHRoaXMuX3B1YmxpY2F0aW9uKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbm5lY3RUb0NvbnRyb2xsZXIocHVibGljYXRpb24pIHtcbiAgICB0aGlzLl9jb250cm9sbGVyUHVibGljYXRpb24gPSBwdWJsaWNhdGlvbjtcbiAgICBjc3Aub3BlcmF0aW9ucy5wdWIuc3ViKHB1YmxpY2F0aW9uLCAnc3RhdHVzJywgdGhpcy5fY29udHJvbENoYW5uZWwpO1xuICAgIHRoaXMuX2NvbnN1bWVDb250cm9sTWVzc2FnZSgpO1xuICB9XG5cbiAgX2NvbnN1bWVDb250cm9sTWVzc2FnZSgpIHtcbiAgICBjc3AuZ28oKGZ1bmN0aW9uKigpIHtcbiAgICAgIGxldCB2YWx1ZSA9IHlpZWxkIHRoaXMuX2NvbnRyb2xDaGFubmVsO1xuICAgICAgd2hpbGUgKGNzcC5DTE9TRUQgIT09IHZhbHVlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX25hbWUsIERhdGUubm93KCksIGBSZWNlaXZlZCBtZXNzYWdlOiAkeyB1dGlsLmluc3BlY3QodmFsdWUpIH1gKTtcbiAgICAgICAgbGV0IHt0eXBlLCBkZXRhaWx9ID0gdmFsdWUucGF5bG9hZDtcbiAgICAgICAgc3dpdGNoKHZhbHVlLnBheWxvYWQudHlwZSkge1xuICAgICAgICAgIGNhc2UgJ2luaXRpYWxpemUnOlxuICAgICAgICAgICAgdGhpcy5fb25Jbml0aWFsaXplKGRldGFpbCk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdmaW5hbGl6ZSc6ICAvLyBBZnRlciB0aGUgbGF0ZXN0IHN0YWdlIHRvIHJlc29sdmUgdGhhdCBzdGFnZSBwcm9taXNlLlxuICAgICAgICAgICAgdGhpcy5fY2xvc2VDaGFubmVscygpO1xuICAgICAgICAgICAgLy8gUmVzb2x2ZSB0aGUgcHJvbWlzZSBvZiB0aGUgbGFzdCBzdGFnZS5cbiAgICAgICAgICAgIHRoaXMuX3N0b3BDdXJyZW50U3RhZ2UoKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ3N0YWdlY2hhbmdlJzpcbiAgICAgICAgICAgIHRoaXMuX3N0b3BDdXJyZW50U3RhZ2UoKTtcbiAgICAgICAgICAgIC8vIFNob3VsZCBkaXNwYXRjaCAmIHN0YXJ0IGEgbmV3IHN0YWdlLlxuICAgICAgICAgICAgdGhpcy5fb25TdGFnZUNoYW5nZSh2YWx1ZS5wYXlsb2FkLmRldGFpbCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IHlpZWxkIHRoaXMuX2NvbnRyb2xDaGFubmVsO1xuICAgICAgfVxuICAgIH0pLmJpbmQodGhpcykpO1xuICB9XG5cbiAgX29uSW5pdGlhbGl6ZShpbml0aWFsaXplZFJvdXRlcnMpIHtcbiAgICB0aGlzLl9yb3V0ZXJzID0gaW5pdGlhbGl6ZWRSb3V0ZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIE9ubHkgaW50ZXJtZWRpYXRlIHN0YWdlcyBuZWVkIHRvIGltcGxlbWVudCB0aGlzIG1ldGhvZCwgc2luY2UgaXQgZG9lc24ndCBleGl0XG4gICAqIHZpYSB0aGUgYHN0b3BgIG1ldGhvZCwgYnV0IHRoZSBzdGF0ZSB0cmFuc2ZlcnJpbmcuXG4gICAqL1xuICBfb25TdGFnZUNoYW5nZShzdGFnZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW5zdGFuY2Ugc2hvdWxkIGV4dGVuZCB0aGlzIG1ldGhvZC4nKTtcbiAgfVxuXG4gIF9zdG9wQ3VycmVudFN0YWdlKCkge1xuICAgIC8vIFdhaXQgdGhlIHByZXZpb3VzIHN0ZXBzIGluIHRoZSBzdGFnZSBtZXRob2QsIGFuZCB0aGVuIGtpY2stb2ZmIHRoZSBlbmRpbmdcbiAgICAvLyBwcm9taXNlIG9mIHRoZSBhZnRlci1zdGFnZSBkZWZlci5cbiAgICB0aGlzLl9zdGFnZXMucHJvbWlzZSA9IHRoaXMuX3N0YWdlcy5wcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgLy8gS2ljay1vZmYgaXQgdG8gZW5kIHRoZSBjdXJyZW50IHN0YWdlLlxuICAgICAgdGhpcy5fY3VycmVudFN0YWdlRGVmZXIucmVzb2x2ZSgpO1xuICAgICAgLy8gQW5kIHdhaXQgdGhlIGZpbmlzaGluZyB3b3JrIHRvIHN0YXJ0IHRoZSBuZXh0IHN0ZXAuXG4gICAgICByZXR1cm4gdGhpcy5fY3VycmVudFN0YWdlRGVmZXIucHJvbWlzZTtcbiAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKHRoaXMuX25hbWUsIERhdGUubm93KCksXG4gICAgICAgIGBGaW5pc2hpbmcgc3RhZ2Ugd2l0aCBlcnJvcjogYCwgZXJyb3IpO1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH0pO1xuICB9XG5cbiAgX2Nsb3NlQ2hhbm5lbHMoKSB7XG4gICAgdGhpcy5faW5wdXRDaGFubmVsLmNsb3NlKCk7XG4gICAgdGhpcy5fb3V0cHV0Q2hhbm5lbC5jbG9zZSgpO1xuICAgIHRoaXMuX2NvbnRyb2xDaGFubmVsLmNsb3NlKCk7XG4gIH1cblxuICBfdHJhbnNmZXJUbyhzdGFnZU1ldGhvZCkge1xuICAgIC8vIDEuIEV2ZXJ5IHN0YWdlIGhhcyBhIHN0YWdlIG1ldGhvZC5cbiAgICAvLyAyLiBTdGFnZSBtZXRob2Qgd2lsbCBwZXJmb3JtIHNvbWUgdGFza3MgYXN5bmNocm9ub3VzbHlcbiAgICAvLyAzLiBBZnRlciBhbGwgdGhvc2UgdGFza3MgaXQgd2lsbCBzb2x2ZSB0aGUgcHJvbWlzZSBpdCByZXR1cm5zXG4gICAgLy8gNC4gQW5kIHdlIHdpbGwgcmVzb2x2ZSBhbm90aGVyIHByb21pc2UgdG8gbm90aWZ5IG91dHNpZGUgd29ybGRcbiAgICAvLyAgICB0aGUgc3RhZ2UgaXMgZG9uZS5cbiAgICAvL1xuICAgIC8vIEFzIGEgcmVzdWx0LCB3aGVuIHRyYW5zZmVycmluZzpcbiAgICAvLyAxLiBJbiB0aGVvcnkgdGhlIGN1cnJlbnQgc3RhZ2UgbWV0aG9kIGhhcyBiZWVuIGV4ZWN1dGVkIGJ1dCBtaWdodCBub3QgYmUgcmVzb2x2ZWQgeWV0LlxuICAgIC8vIDIuIEl0IHNob3VsZCBoYXMgYmVlbiBhdHRhY2hlZCB0byB0aGUgcGVuZGluZyBzdGFnZVxuICAgIC8vIDMuIFNvIHRoZSBuZXcgbWV0aG9kIHNob3VsZCBhdHRhY2ggdG8gdGhlIHBlbmRpbmcgcHJvbWlzZSBhcyB3ZWxsXG4gICAgLy8gNC4gTWVhbnMgaXQgc2hvdWxkIGJlIGV4ZWN1dGVkIGFuZCB3ZSBhcHBlbmQgaXRzIHByb21pc2UuXG4gICAgLy9cblxuICAgIHRoaXMuX3N0YWdlcy5wcm9taXNlID1cbiAgICAgIHRoaXMuX3N0YWdlcy5wcm9taXNlLnRoZW4oKGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgbWFyayA9IERhdGUubm93KCk7XG4gICAgICAgIC8vIFRoZSBcImFmdGVyIHN0YWdlXCIgZGVmZXIuXG4gICAgICAgIHRoaXMuX2N1cnJlbnRTdGFnZURlZmVyID0gbmV3IERlZmVyKCk7XG4gICAgICAgIHRoaXMuX2N1cnJlbnRTdGFnZURlZmVyLnByb21pc2UgPSB0aGlzLl9jdXJyZW50U3RhZ2VEZWZlci5wcm9taXNlLnRoZW4oKCkgPT4ge30pO1xuXG4gICAgICAgIC8vIFRoZSBtZXRob2QgaXMgZG9pbmcgdGhpbmdzIGluIHRoaXMgc3RhZ2UsIHNvIHdhaXQgaXQuXG4gICAgICAgIHJldHVybiBzdGFnZU1ldGhvZC5jYWxsKHRoaXMsIHRoaXMuX2N1cnJlbnRTdGFnZURlZmVyKTtcbiAgICAgIH0pLmJpbmQodGhpcykpLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcih0aGlzLl9uYW1lLCBEYXRlLm5vdygpLFxuICAgICAgICAgIGBFeGVjdXRlIHN0YWdlIG1ldGhvZCAkeyBzdGFnZU1ldGhvZC5uYW1lIH0gd2l0aCBlcnJvcjogYCwgZXJyb3IpO1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgICB9KTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm91dGVycy9Sb3V0ZXIuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0aW1lXCIpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogZXh0ZXJuYWwgXCJ0aW1lXCJcbiAqKiBtb2R1bGUgaWQgPSAyMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGNzcCBmcm9tICdqcy1jc3AnO1xuaW1wb3J0IFJvdXRlciBmcm9tICdyb3V0ZXJzL1JvdXRlcic7XG5pbXBvcnQgVGVybWluYXRpbmdTdGFnZSBmcm9tICdyb3V0ZXJzL0xvZy9UZXJtaW5hdGluZ1N0YWdlJztcblxuLy8gVE9ETzogV2UgbmVlZCB0byBkbyB0aW1lIGFsaWdubWVudCBpbiB0aGlzIHN0YWdlIHdoZW4gaXQncyByZWFkeS5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxlY3RpbmdTdGFnZSBleHRlbmRzIFJvdXRlciB7XG5cbiAgY29uc3RydWN0b3IocHJldmlvdXNTdGFnZUluc3RhbmNlKSB7XG4gICAgc3VwZXIocHJldmlvdXNTdGFnZUluc3RhbmNlKTtcbiAgICB0aGlzLl9uYW1lID0gdGhpcy5fcHJldmlvdXNTdGFnZS5fbmFtZTtcbiAgICB0aGlzLl9yZWNvcmQgPSB0aGlzLl9wcmV2aW91c1N0YWdlLl9yZWNvcmQ7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICAvLyBUT0RPOiBXZSBuZWVkIHRvIGRvIHRpbWUgYWxpZ25tZW50IGluIHRoaXMgc3RhZ2Ugd2hlbiBpdCdzIHJlYWR5LlxuICB9XG5cbiAgX29uU3RhZ2VDaGFuZ2Uoc3RhZ2UpIHtcbiAgICBzd2l0Y2goc3RhZ2UpIHtcbiAgICAgIGNhc2UgJ3Rlcm1pbmF0aW5nJzpcbiAgICAgICAgdGhpcy5fdHJhbnNmZXJUb1Rlcm1pbmF0aW5nU3RhZ2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgX3RyYW5zZmVyVG9UZXJtaW5hdGluZ1N0YWdlKCkge1xuICAgIHRoaXMuX3RyYW5zZmVyVG8oVGVybWluYXRpbmdTdGFnZSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvdXRlcnMvTG9nL0NvbGxlY3RpbmdTdGFnZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGNzcCBmcm9tICdqcy1jc3AnO1xuaW1wb3J0IFJvdXRlciBmcm9tICdyb3V0ZXJzL1JvdXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmF0aW5nU3RhZ2UgZXh0ZW5kcyBSb3V0ZXIge1xuXG4gIGNvbnN0cnVjdG9yKHByZXZpb3VzU3RhZ2VJbnN0YW5jZSkge1xuICAgIHN1cGVyKHByZXZpb3VzU3RhZ2VJbnN0YW5jZSk7XG4gICAgdGhpcy5fcmVjb3JkID0gdGhpcy5fcHJldmlvdXNTdGFnZS5fcmVjb3JkO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgLy8gU2VuZCBvdXQgdGhlIGZpbmFsIGRhdGEuXG4gICAgY3NwLnB1dEFzeW5jKHRoaXMuX291dHB1dENoYW5uZWwsXG4gICAgICB7J3RvcGljJzogJ2RhdGEnLCAncGF5bG9hZCc6IHRoaXMuX3JlY29yZH0pO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLl9zdG9wTGlzdGVuVG9Db250cm9sQ2hhbm5lbCgpO1xuICAgIHRoaXMuX2Nsb3NlQ2hhbm5lbHMoKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm91dGVycy9Mb2cvVGVybWluYXRpbmdTdGFnZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGNzcCBmcm9tICdqcy1jc3AnO1xuaW1wb3J0IFJvdXRlciBmcm9tICdyb3V0ZXJzL1JvdXRlcic7XG5pbXBvcnQgQ29sbGVjdGluZ1N0YWdlIGZyb20gJ3JvdXRlcnMvTG9nL0NvbGxlY3RpbmdTdGFnZSc7XG5pbXBvcnQgVGVybWluYXRpbmdTdGFnZSBmcm9tICdyb3V0ZXJzL0xvZy9UZXJtaW5hdGluZ1N0YWdlJztcblxuaW1wb3J0IHsgZGVmYXVsdCBhcyBMb2dSZWNvcmQgfSBmcm9tICdyZWNvcmQvTG9nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjb3JkaW5nU3RhZ2UgZXh0ZW5kcyBSb3V0ZXIge1xuXG4gIGNvbnN0cnVjdG9yKGNvbmZpZ3NJbnN0YW5jZSkge1xuICAgIHN1cGVyKGNvbmZpZ3NJbnN0YW5jZSk7XG4gICAgLy8gUm91dGVyIG5hbWU6ICdsb2cnXG4gICAgdGhpcy5fbmFtZSA9ICdsb2cnO1xuXG4gICAgLy8gVGhlIGRldmljZWxvZyByb3V0ZXIgd2lsbCBlbWl0IGxvZy9lcnJvci5cbiAgICB0aGlzLl9kZXZpY2VMb2dUb3BpYyA9ICdsb2cnO1xuXG4gICAgY29uc29sZS5sb2coJz4+Pj4gbG9nIGNvbnN0cnVjdGVkJyk7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICB0aGlzLl9yZWNvcmQgPSBuZXcgTG9nUmVjb3JkKCk7XG4gIH1cblxuICBfb25Jbml0aWFsaXplZChpbml0aWFsaXplZFJvdXRlcnMpIHtcbiAgICBzdXBlci5fb25Jbml0aWFsaXplZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIGNvbnNvbGUubG9nKCc+Pj4+Pj4gaW5pdGlhbGl6ZWQgY2FsbGVkIGluIExvZyByZWNvcmRpbmcnLCBPYmplY3Qua2V5cyh0aGlzLl9yb3V0ZXJzKSk7XG4gICAgdGhpcy5fcm91dGVycy5kZXZpY2Vsb2cuc3Vic2NyaWJlKHRoaXM6OnRoaXMuX2Nvbm5lY3RUb0RldmljZUxvZyk7XG4gICAgY29uc29sZS5sb2coJz4+PiBzdWJzY3JpYmUgZGV2aWNlbG9nIGNoYW5uZWwnKTtcbiAgfVxuXG4gIF9vblN0YWdlQ2hhbmdlKHN0YWdlKSB7XG4gICAgc3dpdGNoKHN0YWdlKSB7XG4gICAgICBjYXNlICdjb2xsZWN0aW5nJzpcbiAgICAgICAgdGhpcy5fdHJhbnNmZXJUb0NvbGxlY3RpbmdTdGFnZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Rlcm1pbmF0aW5nJzpcbiAgICAgICAgdGhpcy5fdHJhbnNmZXJUb1Rlcm1pbmF0aW5nU3RhZ2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgX29uTG9nKGxvZykge1xuICAgIC8vY29uc29sZS5sb2coJz4+Pj4+IHJlZGlyZWN0ZWQgZnJvbSBEZXZpY2VMb2cnKTtcbiAgICB0aGlzLl9yZWNvcmQucHVzaChsb2cpO1xuICB9XG5cbiAgLyoqXG4gICAqIE5vdGU6IHRoaXMgcm91dGVyIGlnbm9yZXMgdGhlIGB0cmFuc2ZlcnJlZERlZmVycmVkYCBiZWNhdXNlXG4gICAqIGFmdGVyIHRoZSBzdGFnZSB0cmFuc2ZlcnJlZCwgdGhlcmUgaXMgbm8gbmVlZCB0byBsaXN0ZW4gdG9cbiAgICogdGhlIGRldmljZWxvZyByb3V0ZXIgYWdhaW4sIHNvIHdlIGRvbid0IG5lZWQgdG8gcmVjb25uZWN0IHRvIGl0LlxuICAgKi9cbiAgX2Nvbm5lY3RUb0RldmljZUxvZyhwdWJsaWNhdGlvbiwgdHJhbnNmZXJyZWREZWZlcnJlZCkge1xuICAgIGNzcC5vcGVyYXRpb25zLnB1Yi5zdWIocHVibGljYXRpb24sXG4gICAgICAgIHRoaXMuX2RldmljZUxvZ1RvcGljLCB0aGlzLl9pbnB1dENoYW5uZWwpO1xuICAgIHRoaXMuX2NvbnN1bWVMb2dzKCk7XG4gIH1cblxuICBfY29uc3VtZUxvZ3MoKSB7XG4gICAgY3NwLmdvKChmdW5jdGlvbiooKSB7XG4gICAgICBsZXQgdmFsdWUgPSB5aWVsZCB0aGlzLl9pbnB1dENoYW5uZWw7XG4gICAgICB3aGlsZSAoY3NwLkNMT1NFRCAhPT0gdmFsdWUpIHtcbiAgICAgICAgdGhpcy5fb25Mb2codmFsdWUpO1xuICAgICAgICB2YWx1ZSA9IHlpZWxkIHRoaXMuX2lucHV0Q2hhbm5lbDtcbiAgICAgIH1cbiAgICB9KS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIF90cmFuc2ZlclRvQ29sbGVjdGluZ1N0YWdlKCkge1xuICAgIHRoaXMuX3RyYW5zZmVyVG8oQ29sbGVjdGluZ1N0YWdlKTtcbiAgfVxuXG4gIF90cmFuc2ZlclRvVGVybWluYXRpbmdTdGFnZSgpIHtcbiAgICB0aGlzLl90cmFuc2ZlclRvKFRlcm1pbmF0aW5nU3RhZ2UpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb3V0ZXJzL0xvZy9SZWNvcmRpbmdTdGFnZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuXG5pbXBvcnQgdXRpbCBmcm9tICd1dGlsJztcbmltcG9ydCB0ZW1wIGZyb20gJ3RlbXAnO1xuaW1wb3J0IG9zIGZyb20gJ29zJztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcbmltcG9ydCBjaGlsZF9wcm9jZXNzIGZyb20gJ2NoaWxkX3Byb2Nlc3MnO1xuaW1wb3J0IGNzcCBmcm9tICdqcy1jc3AnO1xuaW1wb3J0IFJvdXRlciBmcm9tICdyb3V0ZXJzL1JvdXRlcic7XG5pbXBvcnQgRGVmZXIgZnJvbSAnRGVmZXInO1xuaW1wb3J0IHsgY2hlY2tEYWVtb25TZXJ2ZXIsIGNvbW1hbmREZXZpY2UgfSBmcm9tICdBbmRyb2lkRGFlbW9uQnVzJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2NyZWVuUmVjb3JkIGV4dGVuZHMgUm91dGVyIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWdzKSB7XG4gICAgc3VwZXIoY29uZmlncyk7XG4gICAgdGhpcy5fbmFtZSA9ICdzY3JlZW5yZWNvcmQnO1xuICAgIC8vIFhYWDogQ3VycmVudGx5IHdlIG9ubHkgaGF2ZSAxNm1zLlxuICAgIC8vIFdlIHNob3VsZCBtb3ZlIGl0IGludG8gdGhlIGNvbmZpZ2lzLlxuICAgIHRoaXMuX3JlY29yZGluZ0ZQUyA9IDE2O1xuICAgIHRoaXMuX2V4dHJhY3RlZEZyYW1lRmlsZVR5cGUgPSAncG5nJztcblx0XHR0aGlzLl91c2VyUHJlZmVyZW5jZXMgPSBudWxsO1xuICAgIHRoaXMuX3ByZWZlcmVuY2VOYW1lID0gJ2xheWVycy5zY3JlZW4tcmVjb3JkaW5nLmVuYWJsZWQnO1xuXHRcdHRoaXMuX3ByZWZlcmVuY2VzUGF0aCA9ICcvc3lzdGVtL2IyZy9kZWZhdWx0cy9wcmVmL3VzZXIuanMnO1xuXHRcdHRoaXMuX3ByZWZlcmVuY2VzVGVtcEZpbGVQYXRoID0gdGVtcC5wYXRoKCk7XG4gICAgdGhpcy5fZGV2aWNlVGFyZ2V0UGF0aCA9IHRoaXMuY29uZmlncy5wYXRoLnJlY29yZC50YXJnZXQuZGV2aWNlO1xuICAgIHRoaXMuX2NvbnNvbGVUYXJnZXRQYXRoID0gdGhpcy5jb25maWdzLnBhdGgucmVjb3JkLnRhcmdldC5jb25zb2xlO1xuXHRcdHRoaXMuX2FkYlBhdGggPSB0aGlzLmNvbmZpZ3MucGF0aC5hZGI7XG5cbiAgICB0aGlzLl9mZm1wZWdQYXRoID0gdGhpcy5jb25maWdzLnBhdGguZmZtcGVnO1xuICAgIHRoaXMuX2V4dHJhY3RlZEZyYW1lc1BhdGggPVxuICAgICAgdGhpcy5fYnVpbGRFeHRyYWN0ZWRGcmFtZXNQYXRoKHRoaXMuX2NvbnNvbGVUYXJnZXRQYXRoKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIC8vIENvbmNhdCB0aGUgZmlyc3Qgc3RhZ2UgaGFuZGxlci5cbiAgICB0aGlzLl90cmFuc2ZlclRvUmVjb3JkaW5nU3RhZ2UoKTtcbiAgICAvLyBLaWNrLW9mZiBpdC5cbiAgICB0aGlzLl9zdGFnZXMucmVzb2x2ZSgpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLl9zdG9wTGlzdGVuVG9Db250cm9sQ2hhbm5lbCgpO1xuICAgIHRoaXMuX2Nsb3NlQ2hhbm5lbHMoKTtcbiAgfVxuXG4gIF9yZWNvcmRpbmcoZGVmZXIpIHtcbiAgICBjaGVja0RhZW1vblNlcnZlcih0aGlzLl9hZGJQYXRoKTtcbiAgICB0aGlzLl9mZXRjaFByZWZlcmVuY2VzKHRoaXMuX3ByZWZlcmVuY2VzUGF0aCk7XG4gICAgdGhpcy5fc2V0UHJlZmVyZW5jZSgpO1xuXG4gICAgbGV0IHJ1bkl0ID0gY2hpbGRfcHJvY2Vzcy5zcGF3bihcbiAgICAgIHRoaXMuX2FkYlBhdGgsXG4gICAgICBbJ3NoZWxsJywgJ3NjcmVlbnJlY29yZCcsIHRoaXMuX2RldmljZVRhcmdldFBhdGhdLFxuICAgICAgeyBkZXRhY2hlZDogdHJ1ZSB9XG4gICAgKTtcbiAgICBydW5JdC51bnJlZigpO1xuICAgIHJ1bkl0LnN0ZG91dC5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICAvLyBUaGlzIG1vZHVsZSBkb24ndCBnZW5lcmF0ZSBhbnkgZGF0YSBmcm9tIGNvbnNvbGUuXG4gICAgfSk7XG4gICAgcnVuSXQuc3RkZXJyLm9uKCdkYXRhJywgKGNodW5rKSA9PiB7XG4gICAgICBsZXQgc3RyQ2h1bmsgPSBjaHVuay50b1N0cmluZygpO1xuICAgICAgY29uc29sZS5sb2codGhpcy5fbmFtZSwgRGF0ZS5ub3coKSxcbiAgICAgICAgYFNlbmQgYSBtZXNzYWdlIG9mIGNvbnNvbGUgZXJyb3I6ICR7IHN0ckNodW5rIH1gKTtcbiAgICAgIGNzcC5wdXRBc3luYyh0aGlzLl9vdXRwdXRDaGFubmVsLFxuICAgICAgICB7J3RvcGljJzogJ2Vycm9yJywgJ3NvdXJjZSc6IHRoaXMuX25hbWUsICdwYXlsb2FkJzogc3RyQ2h1bmt9KVxuICAgIH0pO1xuICAgIHJ1bkl0Lm9uKCdjbG9zZScsIChzdGF0dXMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuX25hbWUsIERhdGUubm93KCksXG4gICAgICAgIGBTZW5kIGEgbWVzc2FnZSBvZiBzdHJlYW0gY2xvc2VkOiAkeyBzdGF0dXMgfSBgKTtcbiAgICAgIGNzcC5wdXRBc3luYyh0aGlzLl9vdXRwdXRDaGFubmVsLFxuICAgICAgICB7J3RvcGljJzogJ3N0YXR1cycsICdzb3VyY2UnOiB0aGlzLl9uYW1lLCAncGF5bG9hZCc6IHN0YXR1c30pO1xuICAgIH0pO1xuXG4gICAgbGV0IG9uS2lsbERlZmVyID0gbmV3IERlZmVyKCk7XG4gICAgcnVuSXQub24oJ2V4aXQnLCAoKSA9PiB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbW1hbmREZXZpY2UodGhpcy5fYWRiUGF0aCkoJ3B1bGwnLFxuICAgICAgICAgIHRoaXMuX2RldmljZVRhcmdldFBhdGgsIHRoaXMuX2NvbnNvbGVUYXJnZXRQYXRoKTtcbiAgICAgICAgaWYoJ2RhcndpbicgPT09IG9zLnBsYXRmb3JtKCkpIHtcbiAgICAgICAgICAvLyBPciB0aGUgZmlsZSB3b24ndCBvcGVuLlxuICAgICAgICAgIHRoaXMuX2NoYW5nZURhcndpbkRlZmF1bHRHcm91cCh0aGlzLl9jb25zb2xlVGFyZ2V0UGF0aCk7XG4gICAgICAgIH1cbiAgICAgICAgb25LaWxsRGVmZXIucmVzb2x2ZSgpO1xuICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3Igd2hpbGUgdHJhbnNmZXJyaW5nIGluIFNjcmVlblJlY29yZCcsIGUpO1xuICAgICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgICB9LCA1MDApO1xuICAgIH0pO1xuXG4gICAgZGVmZXIucHJvbWlzZSA9XG4gICAgICBkZWZlci5wcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICBydW5JdC5raWxsKCdTSUdJTlQnKTtcbiAgICAgICAgcmV0dXJuIG9uS2lsbERlZmVyLnByb21pc2U7XG4gICAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfSk7XG4gIH1cblxuICBfY29sbGVjdGluZyhkZWZlcikge1xuICAgIGlmICgwID09PSBmcy5sc3RhdFN5bmModGhpcy5fY29uc29sZVRhcmdldFBhdGgpLnNpemUpIHtcbiAgICAgIC8vIFJlY29yZGVkIG5vdGhpbmcuXG4gICAgICByZXR1cm47XG4gICAgfVxuXHRcdGxldCB3YXRjaGVyID0gZnMud2F0Y2gocGF0aC5kaXJuYW1lKHRoaXMuX2NvbnNvbGVUYXJnZXRQYXRoKSxcbiAgICAoZXZlbnQsIGZpbGVuYW1lKSA9PiB7XG5cdFx0XHRpZiAoZmlsZW5hbWUgJiYgJy4nICsgdGhpcy5fZXh0cmFjdGVkRnJhbWVGaWxlVHlwZSA9PT0gcGF0aC5leHRuYW1lKGZpbGVuYW1lKSkge1xuICAgICAgICBsZXQgZnVsbFBhdGggPSBgJHtwYXRoLmRpcm5hbWUodGhpcy5fY29uc29sZVRhcmdldFBhdGgpICsgcGF0aC5zZXAgKyBmaWxlbmFtZX1gO1xuICAgICAgICBsZXQgcGF5bG9hZCA9IHsndHlwZSc6ICdleHRyYWN0ZWRmcmFtZScsXG4gICAgICAgICAnb2Zmc2V0JzogdGhpcy5fdGltZU9mZnNldEZyb21GaWxlTmFtZShmaWxlbmFtZSksICdjb250ZW50JzogZnVsbFBhdGh9O1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX25hbWUsIERhdGUubm93KCksXG4gICAgICAgICAgYFNlbmQgYSBtZXNzYWdlIG9mIHJlY29yZGVkIGZpbGUgY2hhbmdlZDogJHsgdXRpbC5pbnNwZWN0KHBheWxvYWQpIH0gYCk7XG4gICAgICAgIGNzcC5wdXRBc3luYyh0aGlzLl9vdXRwdXRDaGFubmVsLCB7XG4gICAgICAgICAgJ3RvcGljJzogJ2xvZycsXG4gICAgICAgICAgJ3NvdXJjZSc6IHRoaXMuX25hbWUsXG4gICAgICAgICAgJ3BheWxvYWQnOiBwYXlsb2FkXG4gICAgICAgIH0pO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG4gICAgbGV0IGNvbW1hbmREZWZlciA9IG5ldyBEZWZlcigpO1xuICAgIC8vZmZtcGVnIC1pIDx0aGUgZmlsZT4gLi90ZW1wL2ltYWdlJTA4ZC5wbmdcbiAgICBjaGlsZF9wcm9jZXNzLmV4ZWNGaWxlKHRoaXMuX2ZmbXBlZ1BhdGgsXG4gICAgICBbJy1pJywgdGhpcy5fY29uc29sZVRhcmdldFBhdGgsIHRoaXMuX2V4dHJhY3RlZEZyYW1lc1BhdGhdLFxuICAgICAgKGVycm9yKSA9PiB7XG4gICAgICAgIHdhdGNoZXIuY2xvc2UoKTtcbiAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgICAgY29tbWFuZERlZmVyLnJlamVjdChlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29tbWFuZERlZmVyLnJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBjb21tYW5kRGVmZXIucHJvbWlzZTtcbiAgfVxuXG4gIF90ZXJtaW5hdGluZyhkZWZlcikge31cblxuICBfdGltZU9mZnNldEZyb21GaWxlTmFtZShmaWxlbmFtZSkge1xuICAgIC8vIGV4OiB0ZXN0Lm1wNF8wMDAwMDAwMV9cbiAgICBsZXQgc2VncyA9IGZpbGVuYW1lLnNwbGl0KCdfJyk7XG4gICAgLy8gZXg6IFsndGVzdC5tcDQnLi4uLi4uLCAnMDAwMDAwMDEnLCAnJ107XG4gICAgbGV0IGlkID0gcGFyc2VJbnQoc2Vnc1tzZWdzLmxlbmd0aCAtIDJdLCAxMCk7XG4gICAgaWYgKGlzTmFOKGlkKSkgeyB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBleHRyYWN0IGluZGV4IGZyb20gZmlsZSBuYW1lOiAnICsgZmlsZW5hbWUpOyB9XG4gICAgLy8gQXNzdW1lIHRoZSBmaXJzdCBmcmFtZSAoJzAwMDAwMDEnKSBtZWFucyB0aGUgc2Vjb25kcyAwLlxuICAgIGxldCBvZmZzZXQgPSB0aGlzLl9yZWNvcmRpbmdGUFMgKiAoaWQgLSAxKTtcbiAgICByZXR1cm4gb2Zmc2V0O1xuICB9XG5cblx0X3NldFByZWZlcmVuY2UoKSB7XG5cdFx0bGV0IHVzZXJQcmVmZXJlbmNlcyA9IHRoaXMuX2ZldGNoUHJlZmVyZW5jZXModGhpcy5fcHJlZmVyZW5jZXNQYXRoKTtcblx0XHRpZiAoISF1c2VyUHJlZmVyZW5jZXNbdGhpcy5fcHJlZmVyZW5jZU5hbWVdKSB7XG5cdFx0XHRyZXR1cm47ICAvLyBUaGUgcHJlZmVyZW5jZSBoYXMgYmVlbiBzZXRcblx0XHR9XG5cdFx0dXNlclByZWZlcmVuY2VzW3RoaXMuX3ByZWZlcmVuY2VOYW1lXSA9IHRydWU7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuX3B1dFByZWZlcmVuY2VzKHVzZXJQcmVmZXJlbmNlcyk7XG5cdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cnMgd2hlbiBwdXQgdGhlIHVwZGF0ZWQgcHJlZmVyZW5jZXMgYmFjaycsIGUpO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9IGZpbmFsbHkge1xuXHRcdFx0dGhpcy5fY2xlYXJMb2NhbFByZWZlcmVuY2VzKCk7XG4gICAgICBjb21tYW5kRGV2aWNlKHRoaXMuX2FkYlBhdGgpKCdyZWJvb3QnKTtcblx0XHR9XG5cdH1cblxuXHRfdW5zZXRQcmVmZXJlbmNlKCkge1xuXHRcdGxldCB1c2VyUHJlZmVyZW5jZXMgPSB0aGlzLl9mZXRjaFByZWZlcmVuY2VzKHRoaXMuX3ByZWZlcmVuY2VzUGF0aCk7XG5cdFx0aWYgKCF0aGlzLl91c2VyUHJlZmVyZW5jZXNbdGhpcy5fcHJlZmVyZW5jZU5hbWVdKSB7XG5cdFx0XHRyZXR1cm47ICAvLyBUaGUgcHJlZmVyZW5jZSBoYXMgYmVlbiB1bnNldFxuXHRcdH1cblx0XHRkZWxldGUgdGhpcy5fdXNlclByZWZlcmVuY2VzW3RoaXMuX3ByZWZlcmVuY2VOYW1lXTtcblx0XHR0cnkge1xuXHRcdFx0dGhpcy5fcHV0UHJlZmVyZW5jZXModGhpcy5fdXNlclByZWZlcmVuY2VzKTtcblx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VycyB3aGVuIHB1dCB0aGUgdXBkYXRlZCBwcmVmZXJlbmNlcyBiYWNrJywgZSk7XG5cdFx0XHR0aHJvdyBlO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHR0aGlzLl9jbGVhckxvY2FsUHJlZmVyZW5jZXMoKTtcblx0XHRcdGNvbW1hbmREZXZpY2UodGhpcy5fYWRiUGF0aCkoJ3JlYm9vdCcpO1xuXHRcdH1cblx0fVxuXG5cdF9wdXRQcmVmZXJlbmNlcyhwcmVmZXJlbmNlcykge1xuXHRcdHRyeSB7XG5cdFx0XHRsZXQgbGluZXMgPSBPYmplY3Qua2V5cyhwcmVmZXJlbmNlcykubWFwKGZ1bmN0aW9uKGtleSkge1xuXHRcdFx0XHRsZXQgdmFsdWUgPSBwcmVmZXJlbmNlc1trZXldO1xuICAgICAgICBpZiAoJ3N0cmluZycgIT09IHR5cGVvZiB2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBgcHJlZignJHtrZXl9JywgJHt2YWx1ZX0pO2A7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGBwcmVmKCcke2tleX0nLCBcIiR7dmFsdWV9XCIpO2A7XG4gICAgICAgIH1cblx0XHRcdH0pO1xuXHRcdFx0ZnMud3JpdGVGaWxlU3luYyh0aGlzLl9wcmVmZXJlbmNlc1RlbXBGaWxlUGF0aCwgbGluZXMuam9pbignXFxuJykpO1xuXHRcdFx0Y29tbWFuZERldmljZSh0aGlzLl9hZGJQYXRoKSgncm9vdCcpO1xuXHRcdFx0Y29tbWFuZERldmljZSh0aGlzLl9hZGJQYXRoKSgncmVtb3VudCcpO1xuXHRcdFx0Y29tbWFuZERldmljZSh0aGlzLl9hZGJQYXRoKSgncHVzaCcsXG4gICAgICAgIHRoaXMuX3ByZWZlcmVuY2VzVGVtcEZpbGVQYXRoLCB0aGlzLl9wcmVmZXJlbmNlc1BhdGgpO1xuXHRcdH0gZmluYWxseSB7XG5cdFx0XHRmcy5hY2Nlc3ModGhpcy5fcHJlZmVyZW5jZXNUZW1wRmlsZVBhdGgsIGZzLkZfT0ssIChhY2Nlc3NFcnJvcikgPT4ge1xuXHRcdFx0XHRpZiAoIWFjY2Vzc0Vycm9yKSB7XG5cdFx0XHRcdFx0ZnMudW5saW5rU3luYyh0aGlzLl9wcmVmZXJlbmNlc1RlbXBGaWxlUGF0aCk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXG5cdC8vIENsZWFyIHRoZSBjYWNoZWQgYW5kIGNvbnRhbWluYXRlZCB2ZXJzaW9uLlxuXHRfY2xlYXJMb2NhbFByZWZlcmVuY2VzKCkge1xuXHRcdGRlbGV0ZSB0aGlzLl91c2VyUHJlZmVyZW5jZXM7XG5cdH1cblxuXHRfZmV0Y2hQcmVmZXJlbmNlcyhwcmVmZXJlbmNlUGF0aCkge1xuXHRcdGlmICh0aGlzLl91c2VyUHJlZmVyZW5jZXMpIHtcblx0XHRcdHJldHVybiB0aGlzLl91c2VyUHJlZmVyZW5jZXM7XG5cdFx0fVxuXHRcdGxldCBzdHJQcmVmcyA9XG5cdFx0XHRjb21tYW5kRGV2aWNlKHRoaXMuX2FkYlBhdGgpKCdzaGVsbCcsICdjYXQnLCBwcmVmZXJlbmNlUGF0aCk7XG5cdFx0dHJ5IHtcblx0XHRcdHRoaXMuX3VzZXJQcmVmZXJlbmNlcyA9IHRoaXMuX2V2YWxQcmVmcyhzdHJQcmVmcyk7XG5cdFx0XHRyZXR1cm4gdGhpcy5fdXNlclByZWZlcmVuY2VzO1xuXHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0Y29uc29sZS5lcnJvcignRXJyb3Igb2NjdXJzIHdoZW4gcmVhZGluZyB0aGUgcHJlZmVyZW5jZXM6ICcsIGUpO1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9XG5cdH1cblxuXHQvLyBPdGhlcndpc2UgaXQncyBkaWZmaWN1bHQgdG8gZ3JlcCB0aGUgcHJlZmVyZW5jZSBhbmQgaXQncyB2YWx1ZS5cblx0X2V2YWxQcmVmcyhzdHJQcmVmcykge1xuXHRcdGxldCBwcmVmZXJlbmNlcyA9IHt9O1xuXHRcdGxldCBwcmVmID0gZnVuY3Rpb24oZW50cnksIHZhbHVlKSB7XG5cdFx0XHRwcmVmZXJlbmNlc1tlbnRyeV0gPSB2YWx1ZTtcblx0XHR9O1xuXHRcdGV2YWwoc3RyUHJlZnMpOyAvL2VzbGludC1kaXNhYmxlLWxpbmVcblx0XHRyZXR1cm4gcHJlZmVyZW5jZXM7XG5cdH1cblxuICBfY2hhbmdlRGFyd2luRGVmYXVsdEdyb3VwKHJlY29yZEZpbGVQYXRoKSB7XG4gICAgY2hpbGRfcHJvY2Vzcy5leGVjU3luYyhgY2hncnAgc3RhZmYgJHtyZWNvcmRGaWxlUGF0aH1gKTtcbiAgfVxuXG4gIF9idWlsZEV4dHJhY3RlZEZyYW1lc1BhdGgoY29uc29sZVRhcmdldFBhdGgpIHtcbiAgICByZXR1cm4gYCR7Y29uc29sZVRhcmdldFBhdGh9XyUwOGRfLiR7dGhpcy5fZXh0cmFjdGVkRnJhbWVGaWxlVHlwZX1gO1xuICB9XG5cbiAgX29uSW5pdGlhbGl6ZWQoaW5pdGlhbGl6ZWRSb3V0ZXJzKSB7XG4gICAgc3VwZXIuX29uSW5pdGlhbGl6ZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9vblN0YWdlQ2hhbmdlKHN0YWdlKSB7XG4gICAgc3dpdGNoKHN0YWdlKSB7XG4gICAgICBjYXNlICdjb2xsZWN0aW5nJzpcbiAgICAgICAgdGhpcy5fdHJhbnNmZXJUb0NvbGxlY3RpbmdTdGFnZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Rlcm1pbmF0aW5nJzpcbiAgICAgICAgdGhpcy5fdHJhbnNmZXJUb1Rlcm1pbmF0aW5nU3RhZ2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgX3RyYW5zZmVyVG9SZWNvcmRpbmdTdGFnZSgpIHtcbiAgICB0aGlzLl90cmFuc2ZlclRvKHRoaXMuX3JlY29yZGluZyk7XG4gIH1cblxuICBfdHJhbnNmZXJUb0NvbGxlY3RpbmdTdGFnZSgpIHtcbiAgICB0aGlzLl90cmFuc2ZlclRvKHRoaXMuX2NvbGxlY3RpbmcpO1xuICB9XG5cbiAgX3RyYW5zZmVyVG9UZXJtaW5hdGluZ1N0YWdlKCkge1xuICAgIHRoaXMuX3RyYW5zZmVyVG8odGhpcy5fdGVybWluYXRpbmcpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb3V0ZXJzL1NjcmVlblJlY29yZC5qc1xuICoqLyIsInZhciBmcyAgID0gcmVxdWlyZSgnZnMnKSxcbiAgICBwYXRoID0gcmVxdWlyZSgncGF0aCcpLFxuICAgIGNuc3QgPSByZXF1aXJlKCdjb25zdGFudHMnKTtcblxudmFyIHJpbXJhZiAgICAgPSByZXF1aXJlKCdyaW1yYWYnKSxcbiAgICBvc1RtcGRpciAgID0gcmVxdWlyZSgnb3MtdG1wZGlyJyksXG4gICAgcmltcmFmU3luYyA9IHJpbXJhZi5zeW5jO1xuXG4vKiBIRUxQRVJTICovXG5cbnZhciBSRFdSX0VYQ0wgPSBjbnN0Lk9fQ1JFQVQgfCBjbnN0Lk9fVFJVTkMgfCBjbnN0Lk9fUkRXUiB8IGNuc3QuT19FWENMO1xuXG52YXIgZ2VuZXJhdGVOYW1lID0gZnVuY3Rpb24ocmF3QWZmaXhlcywgZGVmYXVsdFByZWZpeCkge1xuICB2YXIgYWZmaXhlcyA9IHBhcnNlQWZmaXhlcyhyYXdBZmZpeGVzLCBkZWZhdWx0UHJlZml4KTtcbiAgdmFyIG5vdyA9IG5ldyBEYXRlKCk7XG4gIHZhciBuYW1lID0gW2FmZml4ZXMucHJlZml4LFxuICAgICAgICAgICAgICBub3cuZ2V0WWVhcigpLCBub3cuZ2V0TW9udGgoKSwgbm93LmdldERhdGUoKSxcbiAgICAgICAgICAgICAgJy0nLFxuICAgICAgICAgICAgICBwcm9jZXNzLnBpZCxcbiAgICAgICAgICAgICAgJy0nLFxuICAgICAgICAgICAgICAoTWF0aC5yYW5kb20oKSAqIDB4MTAwMDAwMDAwICsgMSkudG9TdHJpbmcoMzYpLFxuICAgICAgICAgICAgICBhZmZpeGVzLnN1ZmZpeF0uam9pbignJyk7XG4gIHJldHVybiBwYXRoLmpvaW4oYWZmaXhlcy5kaXIgfHwgZXhwb3J0cy5kaXIsIG5hbWUpO1xufTtcblxudmFyIHBhcnNlQWZmaXhlcyA9IGZ1bmN0aW9uKHJhd0FmZml4ZXMsIGRlZmF1bHRQcmVmaXgpIHtcbiAgdmFyIGFmZml4ZXMgPSB7cHJlZml4OiBudWxsLCBzdWZmaXg6IG51bGx9O1xuICBpZihyYXdBZmZpeGVzKSB7XG4gICAgc3dpdGNoICh0eXBlb2YocmF3QWZmaXhlcykpIHtcbiAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgYWZmaXhlcy5wcmVmaXggPSByYXdBZmZpeGVzO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgIGFmZml4ZXMgPSByYXdBZmZpeGVzO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlVua25vd24gYWZmaXggZGVjbGFyYXRpb246IFwiICsgYWZmaXhlcyk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGFmZml4ZXMucHJlZml4ID0gZGVmYXVsdFByZWZpeDtcbiAgfVxuICByZXR1cm4gYWZmaXhlcztcbn07XG5cbi8qIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIERvbid0IGZvcmdldCB0byBjYWxsIHRyYWNrKCkgaWYgeW91IHdhbnQgZmlsZSB0cmFja2luZyBhbmQgZXhpdCBoYW5kbGVycyFcbiAqIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAqIFdoZW4gYW55IHRlbXAgZmlsZSBvciBkaXJlY3RvcnkgaXMgY3JlYXRlZCwgaXQgaXMgYWRkZWQgdG8gZmlsZXNUb0RlbGV0ZVxuICogb3IgZGlyc1RvRGVsZXRlLiBUaGUgZmlyc3QgdGltZSBhbnkgdGVtcCBmaWxlIGlzIGNyZWF0ZWQsIGEgbGlzdGVuZXIgaXNcbiAqIGFkZGVkIHRvIHJlbW92ZSBhbGwgdGVtcCBmaWxlcyBhbmQgZGlyZWN0b3JpZXMgYXQgZXhpdC5cbiAqL1xudmFyIHRyYWNraW5nID0gZmFsc2U7XG52YXIgdHJhY2sgPSBmdW5jdGlvbih2YWx1ZSkge1xuICB0cmFja2luZyA9ICh2YWx1ZSAhPT0gZmFsc2UpO1xuICByZXR1cm4gbW9kdWxlLmV4cG9ydHM7IC8vIGNoYWluYWJsZVxufTtcbnZhciBleGl0TGlzdGVuZXJBdHRhY2hlZCA9IGZhbHNlO1xudmFyIGZpbGVzVG9EZWxldGUgPSBbXTtcbnZhciBkaXJzVG9EZWxldGUgPSBbXTtcblxuZnVuY3Rpb24gZGVsZXRlRmlsZU9uRXhpdChmaWxlUGF0aCkge1xuICBpZiAoIXRyYWNraW5nKSByZXR1cm4gZmFsc2U7XG4gIGF0dGFjaEV4aXRMaXN0ZW5lcigpO1xuICBmaWxlc1RvRGVsZXRlLnB1c2goZmlsZVBhdGgpO1xufVxuXG5mdW5jdGlvbiBkZWxldGVEaXJPbkV4aXQoZGlyUGF0aCkge1xuICBpZiAoIXRyYWNraW5nKSByZXR1cm4gZmFsc2U7XG4gIGF0dGFjaEV4aXRMaXN0ZW5lcigpO1xuICBkaXJzVG9EZWxldGUucHVzaChkaXJQYXRoKTtcbn1cblxuZnVuY3Rpb24gYXR0YWNoRXhpdExpc3RlbmVyKCkge1xuICBpZiAoIXRyYWNraW5nKSByZXR1cm4gZmFsc2U7XG4gIGlmICghZXhpdExpc3RlbmVyQXR0YWNoZWQpIHtcbiAgICBwcm9jZXNzLmFkZExpc3RlbmVyKCdleGl0JywgY2xlYW51cFN5bmMpO1xuICAgIGV4aXRMaXN0ZW5lckF0dGFjaGVkID0gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhbnVwRmlsZXNTeW5jKCkge1xuICBpZiAoIXRyYWNraW5nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBjb3VudCA9IDA7XG4gIHZhciB0b0RlbGV0ZTtcbiAgd2hpbGUgKCh0b0RlbGV0ZSA9IGZpbGVzVG9EZWxldGUuc2hpZnQoKSkgIT09IHVuZGVmaW5lZCkge1xuICAgIHJpbXJhZlN5bmModG9EZWxldGUpO1xuICAgIGNvdW50Kys7XG4gIH1cbiAgcmV0dXJuIGNvdW50O1xufVxuXG5mdW5jdGlvbiBjbGVhbnVwRmlsZXMoY2FsbGJhY2spIHtcbiAgaWYgKCF0cmFja2luZykge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2sobmV3IEVycm9yKFwibm90IHRyYWNraW5nXCIpKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBjb3VudCA9IDA7XG4gIHZhciBsZWZ0ID0gZmlsZXNUb0RlbGV0ZS5sZW5ndGg7XG4gIGlmICghbGVmdCkge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2sobnVsbCwgY291bnQpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIHRvRGVsZXRlO1xuICB2YXIgcmltcmFmQ2FsbGJhY2sgPSBmdW5jdGlvbihlcnIpIHtcbiAgICBpZiAoIWxlZnQpIHtcbiAgICAgIC8vIFByZXZlbnQgcHJvY2Vzc2luZyBpZiBhYm9ydGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChlcnIpIHtcbiAgICAgIC8vIFRoaXMgc2hvdWxkbid0IGhhcHBlbjsgcGFzcyBlcnJvciB0byBjYWxsYmFjayBhbmQgYWJvcnRcbiAgICAgIC8vIHByb2Nlc3NpbmdcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhlcnIpO1xuICAgICAgfVxuICAgICAgbGVmdCA9IDA7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvdW50Kys7XG4gICAgfVxuICAgIGxlZnQtLTtcbiAgICBpZiAoIWxlZnQgJiYgY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKG51bGwsIGNvdW50KTtcbiAgICB9XG4gIH07XG4gIHdoaWxlICgodG9EZWxldGUgPSBmaWxlc1RvRGVsZXRlLnNoaWZ0KCkpICE9PSB1bmRlZmluZWQpIHtcbiAgICByaW1yYWYodG9EZWxldGUsIHJpbXJhZkNhbGxiYWNrKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbGVhbnVwRGlyc1N5bmMoKSB7XG4gIGlmICghdHJhY2tpbmcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGNvdW50ID0gMDtcbiAgdmFyIHRvRGVsZXRlO1xuICB3aGlsZSAoKHRvRGVsZXRlID0gZGlyc1RvRGVsZXRlLnNoaWZ0KCkpICE9PSB1bmRlZmluZWQpIHtcbiAgICByaW1yYWZTeW5jKHRvRGVsZXRlKTtcbiAgICBjb3VudCsrO1xuICB9XG4gIHJldHVybiBjb3VudDtcbn1cblxuZnVuY3Rpb24gY2xlYW51cERpcnMoY2FsbGJhY2spIHtcbiAgaWYgKCF0cmFja2luZykge1xuICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2sobmV3IEVycm9yKFwibm90IHRyYWNraW5nXCIpKTtcbiAgICB9XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBjb3VudCA9IDA7XG4gIHZhciBsZWZ0ID0gZGlyc1RvRGVsZXRlLmxlbmd0aDtcbiAgaWYgKCFsZWZ0KSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayhudWxsLCBjb3VudCk7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuICB2YXIgdG9EZWxldGU7XG4gIHZhciByaW1yYWZDYWxsYmFjayA9IGZ1bmN0aW9uIChlcnIpIHtcbiAgICBpZiAoIWxlZnQpIHtcbiAgICAgIC8vIFByZXZlbnQgcHJvY2Vzc2luZyBpZiBhYm9ydGVkXG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChlcnIpIHtcbiAgICAgIC8vIHJpbXJhZiBoYW5kbGVzIG1vc3QgXCJub3JtYWxcIiBlcnJvcnM7IHBhc3MgdGhlIGVycm9yIHRvIHRoZVxuICAgICAgLy8gY2FsbGJhY2sgYW5kIGFib3J0IHByb2Nlc3NpbmdcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICBjYWxsYmFjayhlcnIsIGNvdW50KTtcbiAgICAgIH1cbiAgICAgIGxlZnQgPSAwO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb3VudDtcbiAgICB9XG4gICAgbGVmdC0tO1xuICAgIGlmICghbGVmdCAmJiBjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2sobnVsbCwgY291bnQpO1xuICAgIH1cbiAgfTtcbiAgd2hpbGUgKCh0b0RlbGV0ZSA9IGRpcnNUb0RlbGV0ZS5zaGlmdCgpKSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmltcmFmKHRvRGVsZXRlLCByaW1yYWZDYWxsYmFjayk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2xlYW51cFN5bmMoKSB7XG4gIGlmICghdHJhY2tpbmcpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGZpbGVDb3VudCA9IGNsZWFudXBGaWxlc1N5bmMoKTtcbiAgdmFyIGRpckNvdW50ICA9IGNsZWFudXBEaXJzU3luYygpO1xuICByZXR1cm4ge2ZpbGVzOiBmaWxlQ291bnQsIGRpcnM6IGRpckNvdW50fTtcbn1cblxuZnVuY3Rpb24gY2xlYW51cChjYWxsYmFjaykge1xuICBpZiAoIXRyYWNraW5nKSB7XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayhuZXcgRXJyb3IoXCJub3QgdHJhY2tpbmdcIikpO1xuICAgIH1cbiAgICByZXR1cm47XG4gIH1cbiAgY2xlYW51cEZpbGVzKGZ1bmN0aW9uKGZpbGVFcnIsIGZpbGVDb3VudCkge1xuICAgIGlmIChmaWxlRXJyKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgY2FsbGJhY2soZmlsZUVyciwge2ZpbGVzOiBmaWxlQ291bnR9KVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjbGVhbnVwRGlycyhmdW5jdGlvbihkaXJFcnIsIGRpckNvdW50KSB7XG4gICAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICAgIGNhbGxiYWNrKGRpckVyciwge2ZpbGVzOiBmaWxlQ291bnQsIGRpcnM6IGRpckNvdW50fSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSk7XG59XG5cbi8qIERJUkVDVE9SSUVTICovXG5cbmZ1bmN0aW9uIG1rZGlyKGFmZml4ZXMsIGNhbGxiYWNrKSB7XG4gIHZhciBkaXJQYXRoID0gZ2VuZXJhdGVOYW1lKGFmZml4ZXMsICdkLScpO1xuICBmcy5ta2RpcihkaXJQYXRoLCAwNzAwLCBmdW5jdGlvbihlcnIpIHtcbiAgICBpZiAoIWVycikge1xuICAgICAgZGVsZXRlRGlyT25FeGl0KGRpclBhdGgpO1xuICAgIH1cbiAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKGVyciwgZGlyUGF0aCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gbWtkaXJTeW5jKGFmZml4ZXMpIHtcbiAgdmFyIGRpclBhdGggPSBnZW5lcmF0ZU5hbWUoYWZmaXhlcywgJ2QtJyk7XG4gIGZzLm1rZGlyU3luYyhkaXJQYXRoLCAwNzAwKTtcbiAgZGVsZXRlRGlyT25FeGl0KGRpclBhdGgpO1xuICByZXR1cm4gZGlyUGF0aDtcbn1cblxuLyogRklMRVMgKi9cblxuZnVuY3Rpb24gb3BlbihhZmZpeGVzLCBjYWxsYmFjaykge1xuICB2YXIgZmlsZVBhdGggPSBnZW5lcmF0ZU5hbWUoYWZmaXhlcywgJ2YtJyk7XG4gIGZzLm9wZW4oZmlsZVBhdGgsIFJEV1JfRVhDTCwgMDYwMCwgZnVuY3Rpb24oZXJyLCBmZCkge1xuICAgIGlmICghZXJyKSB7XG4gICAgICBkZWxldGVGaWxlT25FeGl0KGZpbGVQYXRoKTtcbiAgICB9XG4gICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICBjYWxsYmFjayhlcnIsIHtwYXRoOiBmaWxlUGF0aCwgZmQ6IGZkfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gb3BlblN5bmMoYWZmaXhlcykge1xuICB2YXIgZmlsZVBhdGggPSBnZW5lcmF0ZU5hbWUoYWZmaXhlcywgJ2YtJyk7XG4gIHZhciBmZCA9IGZzLm9wZW5TeW5jKGZpbGVQYXRoLCBSRFdSX0VYQ0wsIDA2MDApO1xuICBkZWxldGVGaWxlT25FeGl0KGZpbGVQYXRoKTtcbiAgcmV0dXJuIHtwYXRoOiBmaWxlUGF0aCwgZmQ6IGZkfTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlV3JpdGVTdHJlYW0oYWZmaXhlcykge1xuICB2YXIgZmlsZVBhdGggPSBnZW5lcmF0ZU5hbWUoYWZmaXhlcywgJ3MtJyk7XG4gIHZhciBzdHJlYW0gPSBmcy5jcmVhdGVXcml0ZVN0cmVhbShmaWxlUGF0aCwge2ZsYWdzOiBSRFdSX0VYQ0wsIG1vZGU6IDA2MDB9KTtcbiAgZGVsZXRlRmlsZU9uRXhpdChmaWxlUGF0aCk7XG4gIHJldHVybiBzdHJlYW07XG59XG5cbi8qIEVYUE9SVFMgKi9cbi8vIFNldHRpbmdzXG5leHBvcnRzLmRpciAgICAgICAgICAgICAgID0gcGF0aC5yZXNvbHZlKG9zVG1wZGlyKCkpO1xuZXhwb3J0cy50cmFjayAgICAgICAgICAgICA9IHRyYWNrO1xuLy8gRnVuY3Rpb25zXG5leHBvcnRzLm1rZGlyICAgICAgICAgICAgID0gbWtkaXI7XG5leHBvcnRzLm1rZGlyU3luYyAgICAgICAgID0gbWtkaXJTeW5jO1xuZXhwb3J0cy5vcGVuICAgICAgICAgICAgICA9IG9wZW47XG5leHBvcnRzLm9wZW5TeW5jICAgICAgICAgID0gb3BlblN5bmM7XG5leHBvcnRzLnBhdGggICAgICAgICAgICAgID0gZ2VuZXJhdGVOYW1lO1xuZXhwb3J0cy5jbGVhbnVwICAgICAgICAgICA9IGNsZWFudXA7XG5leHBvcnRzLmNsZWFudXBTeW5jICAgICAgID0gY2xlYW51cFN5bmM7XG5leHBvcnRzLmNyZWF0ZVdyaXRlU3RyZWFtID0gY3JlYXRlV3JpdGVTdHJlYW07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi90ZW1wL2xpYi90ZW1wLmpzXG4gKiogbW9kdWxlIGlkID0gMjIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb25zdGFudHNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImNvbnN0YW50c1wiXG4gKiogbW9kdWxlIGlkID0gMjIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJpbXJhZlxucmltcmFmLnN5bmMgPSByaW1yYWZTeW5jXG5cbnZhciBhc3NlcnQgPSByZXF1aXJlKFwiYXNzZXJ0XCIpXG52YXIgcGF0aCA9IHJlcXVpcmUoXCJwYXRoXCIpXG52YXIgZnMgPSByZXF1aXJlKFwiZnNcIilcblxuLy8gZm9yIEVNRklMRSBoYW5kbGluZ1xudmFyIHRpbWVvdXQgPSAwXG5leHBvcnRzLkVNRklMRV9NQVggPSAxMDAwXG5leHBvcnRzLkJVU1lUUklFU19NQVggPSAzXG5cbnZhciBpc1dpbmRvd3MgPSAocHJvY2Vzcy5wbGF0Zm9ybSA9PT0gXCJ3aW4zMlwiKVxuXG5mdW5jdGlvbiBkZWZhdWx0cyAob3B0aW9ucykge1xuICB2YXIgbWV0aG9kcyA9IFtcbiAgICAndW5saW5rJyxcbiAgICAnY2htb2QnLFxuICAgICdzdGF0JyxcbiAgICAncm1kaXInLFxuICAgICdyZWFkZGlyJ1xuICBdXG4gIG1ldGhvZHMuZm9yRWFjaChmdW5jdGlvbihtKSB7XG4gICAgb3B0aW9uc1ttXSA9IG9wdGlvbnNbbV0gfHwgZnNbbV1cbiAgICBtID0gbSArICdTeW5jJ1xuICAgIG9wdGlvbnNbbV0gPSBvcHRpb25zW21dIHx8IGZzW21dXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJpbXJhZiAocCwgb3B0aW9ucywgY2IpIHtcbiAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY2IgPSBvcHRpb25zXG4gICAgb3B0aW9ucyA9IHt9XG4gIH1cbiAgYXNzZXJ0KHApXG4gIGFzc2VydChvcHRpb25zKVxuICBhc3NlcnQodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKVxuXG4gIGRlZmF1bHRzKG9wdGlvbnMpXG5cbiAgaWYgKCFjYikgdGhyb3cgbmV3IEVycm9yKFwiTm8gY2FsbGJhY2sgcGFzc2VkIHRvIHJpbXJhZigpXCIpXG5cbiAgdmFyIGJ1c3lUcmllcyA9IDBcbiAgcmltcmFmXyhwLCBvcHRpb25zLCBmdW5jdGlvbiBDQiAoZXIpIHtcbiAgICBpZiAoZXIpIHtcbiAgICAgIGlmIChpc1dpbmRvd3MgJiYgKGVyLmNvZGUgPT09IFwiRUJVU1lcIiB8fCBlci5jb2RlID09PSBcIkVOT1RFTVBUWVwiKSAmJlxuICAgICAgICAgIGJ1c3lUcmllcyA8IGV4cG9ydHMuQlVTWVRSSUVTX01BWCkge1xuICAgICAgICBidXN5VHJpZXMgKytcbiAgICAgICAgdmFyIHRpbWUgPSBidXN5VHJpZXMgKiAxMDBcbiAgICAgICAgLy8gdHJ5IGFnYWluLCB3aXRoIHRoZSBzYW1lIGV4YWN0IGNhbGxiYWNrIGFzIHRoaXMgb25lLlxuICAgICAgICByZXR1cm4gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgcmltcmFmXyhwLCBvcHRpb25zLCBDQilcbiAgICAgICAgfSwgdGltZSlcbiAgICAgIH1cblxuICAgICAgLy8gdGhpcyBvbmUgd29uJ3QgaGFwcGVuIGlmIGdyYWNlZnVsLWZzIGlzIHVzZWQuXG4gICAgICBpZiAoZXIuY29kZSA9PT0gXCJFTUZJTEVcIiAmJiB0aW1lb3V0IDwgZXhwb3J0cy5FTUZJTEVfTUFYKSB7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICByaW1yYWZfKHAsIG9wdGlvbnMsIENCKVxuICAgICAgICB9LCB0aW1lb3V0ICsrKVxuICAgICAgfVxuXG4gICAgICAvLyBhbHJlYWR5IGdvbmVcbiAgICAgIGlmIChlci5jb2RlID09PSBcIkVOT0VOVFwiKSBlciA9IG51bGxcbiAgICB9XG5cbiAgICB0aW1lb3V0ID0gMFxuICAgIGNiKGVyKVxuICB9KVxufVxuXG4vLyBUd28gcG9zc2libGUgc3RyYXRlZ2llcy5cbi8vIDEuIEFzc3VtZSBpdCdzIGEgZmlsZS4gIHVubGluayBpdCwgdGhlbiBkbyB0aGUgZGlyIHN0dWZmIG9uIEVQRVJNIG9yIEVJU0RJUlxuLy8gMi4gQXNzdW1lIGl0J3MgYSBkaXJlY3RvcnkuICByZWFkZGlyLCB0aGVuIGRvIHRoZSBmaWxlIHN0dWZmIG9uIEVOT1RESVJcbi8vXG4vLyBCb3RoIHJlc3VsdCBpbiBhbiBleHRyYSBzeXNjYWxsIHdoZW4geW91IGd1ZXNzIHdyb25nLiAgSG93ZXZlciwgdGhlcmVcbi8vIGFyZSBsaWtlbHkgZmFyIG1vcmUgbm9ybWFsIGZpbGVzIGluIHRoZSB3b3JsZCB0aGFuIGRpcmVjdG9yaWVzLiAgVGhpc1xuLy8gaXMgYmFzZWQgb24gdGhlIGFzc3VtcHRpb24gdGhhdCBhIHRoZSBhdmVyYWdlIG51bWJlciBvZiBmaWxlcyBwZXJcbi8vIGRpcmVjdG9yeSBpcyA+PSAxLlxuLy9cbi8vIElmIGFueW9uZSBldmVyIGNvbXBsYWlucyBhYm91dCB0aGlzLCB0aGVuIEkgZ3Vlc3MgdGhlIHN0cmF0ZWd5IGNvdWxkXG4vLyBiZSBtYWRlIGNvbmZpZ3VyYWJsZSBzb21laG93LiAgQnV0IHVudGlsIHRoZW4sIFlBR05JLlxuZnVuY3Rpb24gcmltcmFmXyAocCwgb3B0aW9ucywgY2IpIHtcbiAgYXNzZXJ0KHApXG4gIGFzc2VydChvcHRpb25zKVxuICBhc3NlcnQodHlwZW9mIGNiID09PSAnZnVuY3Rpb24nKVxuXG4gIG9wdGlvbnMudW5saW5rKHAsIGZ1bmN0aW9uIChlcikge1xuICAgIGlmIChlcikge1xuICAgICAgaWYgKGVyLmNvZGUgPT09IFwiRU5PRU5UXCIpXG4gICAgICAgIHJldHVybiBjYihudWxsKVxuICAgICAgaWYgKGVyLmNvZGUgPT09IFwiRVBFUk1cIilcbiAgICAgICAgcmV0dXJuIChpc1dpbmRvd3MpXG4gICAgICAgICAgPyBmaXhXaW5FUEVSTShwLCBvcHRpb25zLCBlciwgY2IpXG4gICAgICAgICAgOiBybWRpcihwLCBvcHRpb25zLCBlciwgY2IpXG4gICAgICBpZiAoZXIuY29kZSA9PT0gXCJFSVNESVJcIilcbiAgICAgICAgcmV0dXJuIHJtZGlyKHAsIG9wdGlvbnMsIGVyLCBjYilcbiAgICB9XG4gICAgcmV0dXJuIGNiKGVyKVxuICB9KVxufVxuXG5mdW5jdGlvbiBmaXhXaW5FUEVSTSAocCwgb3B0aW9ucywgZXIsIGNiKSB7XG4gIGFzc2VydChwKVxuICBhc3NlcnQob3B0aW9ucylcbiAgYXNzZXJ0KHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJylcbiAgaWYgKGVyKVxuICAgIGFzc2VydChlciBpbnN0YW5jZW9mIEVycm9yKVxuXG4gIG9wdGlvbnMuY2htb2QocCwgNjY2LCBmdW5jdGlvbiAoZXIyKSB7XG4gICAgaWYgKGVyMilcbiAgICAgIGNiKGVyMi5jb2RlID09PSBcIkVOT0VOVFwiID8gbnVsbCA6IGVyKVxuICAgIGVsc2VcbiAgICAgIG9wdGlvbnMuc3RhdChwLCBmdW5jdGlvbihlcjMsIHN0YXRzKSB7XG4gICAgICAgIGlmIChlcjMpXG4gICAgICAgICAgY2IoZXIzLmNvZGUgPT09IFwiRU5PRU5UXCIgPyBudWxsIDogZXIpXG4gICAgICAgIGVsc2UgaWYgKHN0YXRzLmlzRGlyZWN0b3J5KCkpXG4gICAgICAgICAgcm1kaXIocCwgb3B0aW9ucywgZXIsIGNiKVxuICAgICAgICBlbHNlXG4gICAgICAgICAgb3B0aW9ucy51bmxpbmsocCwgY2IpXG4gICAgICB9KVxuICB9KVxufVxuXG5mdW5jdGlvbiBmaXhXaW5FUEVSTVN5bmMgKHAsIG9wdGlvbnMsIGVyKSB7XG4gIGFzc2VydChwKVxuICBhc3NlcnQob3B0aW9ucylcbiAgaWYgKGVyKVxuICAgIGFzc2VydChlciBpbnN0YW5jZW9mIEVycm9yKVxuXG4gIHRyeSB7XG4gICAgb3B0aW9ucy5jaG1vZFN5bmMocCwgNjY2KVxuICB9IGNhdGNoIChlcjIpIHtcbiAgICBpZiAoZXIyLmNvZGUgPT09IFwiRU5PRU5UXCIpXG4gICAgICByZXR1cm5cbiAgICBlbHNlXG4gICAgICB0aHJvdyBlclxuICB9XG5cbiAgdHJ5IHtcbiAgICB2YXIgc3RhdHMgPSBvcHRpb25zLnN0YXRTeW5jKHApXG4gIH0gY2F0Y2ggKGVyMykge1xuICAgIGlmIChlcjMuY29kZSA9PT0gXCJFTk9FTlRcIilcbiAgICAgIHJldHVyblxuICAgIGVsc2VcbiAgICAgIHRocm93IGVyXG4gIH1cblxuICBpZiAoc3RhdHMuaXNEaXJlY3RvcnkoKSlcbiAgICBybWRpclN5bmMocCwgb3B0aW9ucywgZXIpXG4gIGVsc2VcbiAgICBvcHRpb25zLnVubGlua1N5bmMocClcbn1cblxuZnVuY3Rpb24gcm1kaXIgKHAsIG9wdGlvbnMsIG9yaWdpbmFsRXIsIGNiKSB7XG4gIGFzc2VydChwKVxuICBhc3NlcnQob3B0aW9ucylcbiAgaWYgKG9yaWdpbmFsRXIpXG4gICAgYXNzZXJ0KG9yaWdpbmFsRXIgaW5zdGFuY2VvZiBFcnJvcilcbiAgYXNzZXJ0KHR5cGVvZiBjYiA9PT0gJ2Z1bmN0aW9uJylcblxuICAvLyB0cnkgdG8gcm1kaXIgZmlyc3QsIGFuZCBvbmx5IHJlYWRkaXIgb24gRU5PVEVNUFRZIG9yIEVFWElTVCAoU3VuT1MpXG4gIC8vIGlmIHdlIGd1ZXNzZWQgd3JvbmcsIGFuZCBpdCdzIG5vdCBhIGRpcmVjdG9yeSwgdGhlblxuICAvLyByYWlzZSB0aGUgb3JpZ2luYWwgZXJyb3IuXG4gIG9wdGlvbnMucm1kaXIocCwgZnVuY3Rpb24gKGVyKSB7XG4gICAgaWYgKGVyICYmIChlci5jb2RlID09PSBcIkVOT1RFTVBUWVwiIHx8IGVyLmNvZGUgPT09IFwiRUVYSVNUXCIgfHwgZXIuY29kZSA9PT0gXCJFUEVSTVwiKSlcbiAgICAgIHJta2lkcyhwLCBvcHRpb25zLCBjYilcbiAgICBlbHNlIGlmIChlciAmJiBlci5jb2RlID09PSBcIkVOT1RESVJcIilcbiAgICAgIGNiKG9yaWdpbmFsRXIpXG4gICAgZWxzZVxuICAgICAgY2IoZXIpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJta2lkcyhwLCBvcHRpb25zLCBjYikge1xuICBhc3NlcnQocClcbiAgYXNzZXJ0KG9wdGlvbnMpXG4gIGFzc2VydCh0eXBlb2YgY2IgPT09ICdmdW5jdGlvbicpXG5cbiAgb3B0aW9ucy5yZWFkZGlyKHAsIGZ1bmN0aW9uIChlciwgZmlsZXMpIHtcbiAgICBpZiAoZXIpXG4gICAgICByZXR1cm4gY2IoZXIpXG4gICAgdmFyIG4gPSBmaWxlcy5sZW5ndGhcbiAgICBpZiAobiA9PT0gMClcbiAgICAgIHJldHVybiBvcHRpb25zLnJtZGlyKHAsIGNiKVxuICAgIHZhciBlcnJTdGF0ZVxuICAgIGZpbGVzLmZvckVhY2goZnVuY3Rpb24gKGYpIHtcbiAgICAgIHJpbXJhZihwYXRoLmpvaW4ocCwgZiksIG9wdGlvbnMsIGZ1bmN0aW9uIChlcikge1xuICAgICAgICBpZiAoZXJyU3RhdGUpXG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIGlmIChlcilcbiAgICAgICAgICByZXR1cm4gY2IoZXJyU3RhdGUgPSBlcilcbiAgICAgICAgaWYgKC0tbiA9PT0gMClcbiAgICAgICAgICBvcHRpb25zLnJtZGlyKHAsIGNiKVxuICAgICAgfSlcbiAgICB9KVxuICB9KVxufVxuXG4vLyB0aGlzIGxvb2tzIHNpbXBsZXIsIGFuZCBpcyBzdHJpY3RseSAqZmFzdGVyKiwgYnV0IHdpbGxcbi8vIHRpZSB1cCB0aGUgSmF2YVNjcmlwdCB0aHJlYWQgYW5kIGZhaWwgb24gZXhjZXNzaXZlbHlcbi8vIGRlZXAgZGlyZWN0b3J5IHRyZWVzLlxuZnVuY3Rpb24gcmltcmFmU3luYyAocCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fVxuICBkZWZhdWx0cyhvcHRpb25zKVxuXG4gIGFzc2VydChwKVxuICBhc3NlcnQob3B0aW9ucylcblxuICB0cnkge1xuICAgIG9wdGlvbnMudW5saW5rU3luYyhwKVxuICB9IGNhdGNoIChlcikge1xuICAgIGlmIChlci5jb2RlID09PSBcIkVOT0VOVFwiKVxuICAgICAgcmV0dXJuXG4gICAgaWYgKGVyLmNvZGUgPT09IFwiRVBFUk1cIilcbiAgICAgIHJldHVybiBpc1dpbmRvd3MgPyBmaXhXaW5FUEVSTVN5bmMocCwgb3B0aW9ucywgZXIpIDogcm1kaXJTeW5jKHAsIG9wdGlvbnMsIGVyKVxuICAgIGlmIChlci5jb2RlICE9PSBcIkVJU0RJUlwiKVxuICAgICAgdGhyb3cgZXJcbiAgICBybWRpclN5bmMocCwgb3B0aW9ucywgZXIpXG4gIH1cbn1cblxuZnVuY3Rpb24gcm1kaXJTeW5jIChwLCBvcHRpb25zLCBvcmlnaW5hbEVyKSB7XG4gIGFzc2VydChwKVxuICBhc3NlcnQob3B0aW9ucylcbiAgaWYgKG9yaWdpbmFsRXIpXG4gICAgYXNzZXJ0KG9yaWdpbmFsRXIgaW5zdGFuY2VvZiBFcnJvcilcblxuICB0cnkge1xuICAgIG9wdGlvbnMucm1kaXJTeW5jKHApXG4gIH0gY2F0Y2ggKGVyKSB7XG4gICAgaWYgKGVyLmNvZGUgPT09IFwiRU5PRU5UXCIpXG4gICAgICByZXR1cm5cbiAgICBpZiAoZXIuY29kZSA9PT0gXCJFTk9URElSXCIpXG4gICAgICB0aHJvdyBvcmlnaW5hbEVyXG4gICAgaWYgKGVyLmNvZGUgPT09IFwiRU5PVEVNUFRZXCIgfHwgZXIuY29kZSA9PT0gXCJFRVhJU1RcIiB8fCBlci5jb2RlID09PSBcIkVQRVJNXCIpXG4gICAgICBybWtpZHNTeW5jKHAsIG9wdGlvbnMpXG4gIH1cbn1cblxuZnVuY3Rpb24gcm1raWRzU3luYyAocCwgb3B0aW9ucykge1xuICBhc3NlcnQocClcbiAgYXNzZXJ0KG9wdGlvbnMpXG4gIG9wdGlvbnMucmVhZGRpclN5bmMocCkuZm9yRWFjaChmdW5jdGlvbiAoZikge1xuICAgIHJpbXJhZlN5bmMocGF0aC5qb2luKHAsIGYpLCBvcHRpb25zKVxuICB9KVxuICBvcHRpb25zLnJtZGlyU3luYyhwLCBvcHRpb25zKVxufVxuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vdGVtcC9+L3JpbXJhZi9yaW1yYWYuanNcbiAqKiBtb2R1bGUgaWQgPSAyMjJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImFzc2VydFwiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiYXNzZXJ0XCJcbiAqKiBtb2R1bGUgaWQgPSAyMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBpc1dpbmRvd3MgPSBwcm9jZXNzLnBsYXRmb3JtID09PSAnd2luMzInO1xudmFyIHRyYWlsaW5nU2xhc2hSZSA9IGlzV2luZG93cyA/IC9bXjpdXFxcXCQvIDogLy5cXC8kLztcblxuLy8gaHR0cHM6Ly9naXRodWIuY29tL25vZGVqcy9pby5qcy9ibG9iLzNlN2ExNDM4MTQ5N2EzYjczZGRhNjhkMDViNTEzMDU2M2NkYWI0MjAvbGliL29zLmpzI0wyNS1MNDNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuXHR2YXIgcGF0aDtcblxuXHRpZiAoaXNXaW5kb3dzKSB7XG5cdFx0cGF0aCA9IHByb2Nlc3MuZW52LlRFTVAgfHxcblx0XHRcdHByb2Nlc3MuZW52LlRNUCB8fFxuXHRcdFx0KHByb2Nlc3MuZW52LlN5c3RlbVJvb3QgfHwgcHJvY2Vzcy5lbnYud2luZGlyKSArICdcXFxcdGVtcCc7XG5cdH0gZWxzZSB7XG5cdFx0cGF0aCA9IHByb2Nlc3MuZW52LlRNUERJUiB8fFxuXHRcdFx0cHJvY2Vzcy5lbnYuVE1QIHx8XG5cdFx0XHRwcm9jZXNzLmVudi5URU1QIHx8XG5cdFx0XHQnL3RtcCc7XG5cdH1cblxuXHRpZiAodHJhaWxpbmdTbGFzaFJlLnRlc3QocGF0aCkpIHtcblx0XHRwYXRoID0gcGF0aC5zbGljZSgwLCAtMSk7XG5cdH1cblxuXHRyZXR1cm4gcGF0aDtcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi90ZW1wL34vb3MtdG1wZGlyL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMjI0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvc1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwib3NcIlxuICoqIG1vZHVsZSBpZCA9IDIyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgY3NwIGZyb20gJ2pzLWNzcCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ3JvdXRlcnMvUm91dGVyJztcbmltcG9ydCBEZWZlciBmcm9tICdEZWZlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ25hbCBleHRlbmRzIFJvdXRlciB7XG5cbiAgY29uc3RydWN0b3IoY29uZmlncykge1xuICAgIHN1cGVyKGNvbmZpZ3MpO1xuICAgIHRoaXMuX25hbWUgPSAnc2lnbmFsJztcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIC8vIENvbmNhdCB0aGUgZmlyc3Qgc3RhZ2UgaGFuZGxlci5cbiAgICB0aGlzLl90cmFuc2ZlclRvUmVjb3JkaW5nU3RhZ2UoKTtcbiAgICAvLyBLaWNrLW9mZiBpdC5cbiAgICB0aGlzLl9zdGFnZXMucmVzb2x2ZSgpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLl9zdG9wTGlzdGVuVG9Db250cm9sQ2hhbm5lbCgpO1xuICAgIHRoaXMuX2Nsb3NlQ2hhbm5lbHMoKTtcbiAgfVxuXG4gIF9yZWNvcmRpbmcoKSB7XG4gICAgLy8gVHdvIFwic2lnbmFsc1wiOiBpbnB1dHMgZnJvbSBzdGRpbiBhbmQgc3lzdGVtIHNpZ25hbHMuXG4gICAgbGV0IHRlcm1pbmF0aW5nU2lnbmFscyA9IFtcbiAgICAgICdTSUdIVVAnLFxuICAgICAgJ1NJR1RFUk0nLFxuICAgICAgJ1NJR0lOVCdcbiAgICBdO1xuICAgIHRoaXMuX25leHRTdGFnZUJ5U2lnbmFsID0gJ2NvbGxlY3RpbmcnO1xuICAgIHRlcm1pbmF0aW5nU2lnbmFscy5mb3JFYWNoKChzaWduYWwpID0+IHtcbiAgICAgIHByb2Nlc3Mub24oc2lnbmFsLCB0aGlzOjp0aGlzLl9vblN0YWdlVHJhbnNmZXJyaW5nU2lnbmFsKTtcbiAgICB9KTtcblxuICAgIGxldCBzdGRpbiA9IHByb2Nlc3Mub3BlblN0ZGluKCk7XG4gICAgc3RkaW4uc2V0UmF3TW9kZSh0cnVlKTtcbiAgICBzdGRpbi5vbignZGF0YScsIHRoaXM6OnRoaXMuX29uSW5wdXQpO1xuICB9XG5cbiAgX2NvbGxlY3RpbmcoZGVmZXIpIHtcbiAgICB0aGlzLl9uZXh0U3RhZ2VCeVNpZ25hbCA9ICd0ZXJtaW5hdGluZyc7XG4gIH1cblxuICBfdGVybWluYXRpbmcoZGVmZXIpIHtcbiAgICB0aGlzLl9uZXh0U3RhZ2VCeVNpZ25hbCA9IG51bGw7XG4gICAgY29uc29sZS5sb2codGhpcy5fbmFtZSwgRGF0ZS5ub3coKSxcbiAgICAgIGBTZW5kIHRoZSBtZXNzYWdlIGZyb20gdGVybWluYXRpbmcgc2lnbmFsIG91dCAofGZpbmFsaXplfClgKTtcbiAgICBjc3AucHV0QXN5bmModGhpcy5fb3V0cHV0Q2hhbm5lbCwgeyd0b3BpYyc6ICdzdGF0dXMnLCAnc291cmNlJzogdGhpcy5fbmFtZSxcbiAgICAgICdwYXlsb2FkJzogeyd0eXBlJzogJ2ZpbmFsaXplJ30gfSk7XG5cbiAgICBkZWZlci5wcm9taXNlID0gZGVmZXIucHJvbWlzZS50aGVuKCgpID0+IHtcbiAgICAgIC8vIFN0b3AgcmVhZGluZyB0aGUgc3RkaW4uXG4gICAgICBwcm9jZXNzLnN0ZGluLnBhdXNlKCk7XG4gICAgfSk7XG4gIH1cblxuICBfb25JbnB1dChjb2RlKSB7XG4gICAgLy8gUG9sbGluZyBzdGRpbiB0byBtYWtlIGl0IGNvbnRpbnVlcyBsaXN0ZW4gdG8gdXNlciBpbnB1dHMuXG4gICAgLy8gVGhpcyBoYW5kbGVyIGRlYWxzIHdpdGggb3RoZXIgJ3NpZ25hbHMnIG90aGVyIHRoYW4gc3lzdGVtIHNpZ25hbHMuXG4gICAgaWYgKCdcXHUwMDFCJyA9PT0gY29kZS50b1N0cmluZygpIHx8ICdhJyA9PT0gY29kZS50b1N0cmluZygpKSB7XG4gICAgICB0aGlzLl9vblN0YWdlVHJhbnNmZXJyaW5nU2lnbmFsKCk7XG4gICAgfVxuICB9XG5cbiAgX29uU3RhZ2VUcmFuc2ZlcnJpbmdTaWduYWwoKSB7XG4gICAgaWYgKHRoaXMuX3N0b3BTZW5kaW5nU3RhZ2VDaGFuZ2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5fbmFtZSwgRGF0ZS5ub3coKSxcbiAgICAgIGBTZW5kIHRoZSBtZXNzYWdlIG9mIHxzdGFnZWNoYW5nZXwgb3V0OyBzdGFnYWU6ICR7IHRoaXMuX25leHRTdGFnZUJ5U2lnbmFsIH0gYCk7XG4gICAgY3NwLnB1dEFzeW5jKHRoaXMuX291dHB1dENoYW5uZWwsIHsndG9waWMnOiAnc3RhdHVzJywgJ3NvdXJjZSc6IHRoaXMuX25hbWUsXG4gICAgICAncGF5bG9hZCc6ICB7J3R5cGUnOiAnc3RhZ2VjaGFuZ2UnLCAnZGV0YWlsJzogdGhpcy5fbmV4dFN0YWdlQnlTaWduYWwgfX0pO1xuXG4gICAgLy8gSWYgaW50ZXJydXB0cyBmaXJlZCBtdWx0aXBsZSB0aW1lcyBpbiB0aGlzIHN0YWdlLCB3ZSBuZWVkIGEgd2F5XG4gICAgLy8gdG8gYmxvY2sgdGhlIG11bHRpcGxlIHN0YWdlY2hhbmdlIGV2ZW50LiBUaGlzIGlzIGEgc2ltcGxlIHdheSB0b1xuICAgIC8vIGRvIHRoYXQuXG4gICAgaWYgKCd0ZXJtaW5hdGluZycgPT09IHRoaXMuX25leHRTdGFnZUJ5U2lnbmFsKSB7XG4gICAgICAvLyBXZSBjYW5ub3QgcmVtb3ZlIHRoZSBzaWduYWwgbGlzdGVuZXJzIGJlY2F1c2Ugd2Ugc3RpbGwgbmVlZCB0b1xuICAgICAgLy8gcHJldmVudCB1c2VyIGludGVycnVwdGluZyB0aGUgcHJvZ3JhbSBiZWZvcmUgYWxsIHN0ZXBzIGRvbmUuXG4gICAgICB0aGlzLl9zdG9wU2VuZGluZ1N0YWdlQ2hhbmdlID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBfb25TdGFnZUNoYW5nZShzdGFnZSkge1xuICAgIHN3aXRjaChzdGFnZSkge1xuICAgICAgY2FzZSAnY29sbGVjdGluZyc6XG4gICAgICAgIHRoaXMuX3RyYW5zZmVyVG9Db2xsZWN0aW5nU3RhZ2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0ZXJtaW5hdGluZyc6XG4gICAgICAgIHRoaXMuX3RyYW5zZmVyVG9UZXJtaW5hdGluZ1N0YWdlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIF9yZW1vdmVTaWduYWxIYW5kbGVyKCkge1xuICAgIGxldCB0ZXJtaW5hdGluZ1NpZ25hbHMgPSBbXG4gICAgICAnU0lHSFVQJyxcbiAgICAgICdTSUdURVJNJyxcbiAgICAgICdTSUdJTlQnXG4gICAgXTtcbiAgICB0ZXJtaW5hdGluZ1NpZ25hbHMuZm9yRWFjaCgoc2lnbmFsKSA9PiB7XG4gICAgICAvLyBTbyB3ZSBkb24ndCBmaXJlIHN0YWdlY2hhbmdlIGFjY29yZGluZyB0byB0aGUgc2lnbmFsIGFueW1vcmUuXG4gICAgICBwcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyhzaWduYWwpO1xuICAgIH0pO1xuICB9XG5cbiAgX3RyYW5zZmVyVG9SZWNvcmRpbmdTdGFnZSgpIHtcbiAgICB0aGlzLl90cmFuc2ZlclRvKHRoaXMuX3JlY29yZGluZyk7XG4gIH1cblxuICBfdHJhbnNmZXJUb0NvbGxlY3RpbmdTdGFnZSgpIHtcbiAgICB0aGlzLl90cmFuc2ZlclRvKHRoaXMuX2NvbGxlY3RpbmcpO1xuICB9XG5cbiAgX3RyYW5zZmVyVG9UZXJtaW5hdGluZ1N0YWdlKCkge1xuICAgIHRoaXMuX3RyYW5zZmVyVG8odGhpcy5fdGVybWluYXRpbmcpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb3V0ZXJzL1NpZ25hbC5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IHV0aWwgZnJvbSAndXRpbCc7XG5pbXBvcnQgZnMgZnJvbSAnZnMnO1xuaW1wb3J0IGNzcCBmcm9tICdqcy1jc3AnO1xuaW1wb3J0IFJvdXRlciBmcm9tICdyb3V0ZXJzL1JvdXRlcic7XG5pbXBvcnQgRGVmZXIgZnJvbSAnRGVmZXInO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBUaW1lbGluZVJlY29yZCB9IGZyb20gJ3JlY29yZC9UaW1lbGluZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVsaW5lIGV4dGVuZHMgUm91dGVyIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWdzKSB7XG4gICAgc3VwZXIoY29uZmlncyk7XG4gICAgdGhpcy5fbmFtZSA9ICd0aW1lbGluZSc7XG4gICAgdGhpcy5fdGltZWxpbmUgPSB7fTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIC8vIENvbmNhdCB0aGUgZmlyc3Qgc3RhZ2UgaGFuZGxlci5cbiAgICB0aGlzLl90cmFuc2ZlclRvUmVjb3JkaW5nU3RhZ2UoKTtcbiAgICAvLyBLaWNrLW9mZiBpdC5cbiAgICB0aGlzLl9zdGFnZXMucmVzb2x2ZSgpO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLl9zdG9wTGlzdGVuVG9Db250cm9sQ2hhbm5lbCgpO1xuICAgIHRoaXMuX2Nsb3NlQ2hhbm5lbHMoKTtcbiAgfVxuXG4gIF9yZWNvcmRpbmcoKSB7fVxuICBfY29sbGVjdGluZygpIHt9XG5cbiAgLyoqXG4gICAqIEluIGZhY3Qgd2Ugb25seSBuZWVkIG9uZSBzdGFnZS4gSG93ZXZlciwgdG8ga2VlcCBpbnRlcmZhY2UgYWxpZ25lZCxcbiAgICogd2UgZG8gdGhlIHNhbWUgdGhpbmcgbGlrZSBvdGhlciByb3V0ZXJzLlxuICAgKi9cbiAgX3Rlcm1pbmF0aW5nKGRlZmVyKSB7XG4gICAgLy8gWFhYOiBtYWtlIGNodW5rcyBhbmQgYSBiZXR0ZXIgc2VyaWFsaXppbmcgd2F5IHRvIHByZXZlbnQgd3JpdGluZyBibG9ja3MuXG4gICAgbGV0IHN0clRpbWVsaW5lID0gSlNPTi5zdHJpbmdpZnkodGhpcy5fdGltZWxpbmUpO1xuICAgIGxldCB3cml0aW5nRGVmZXIgPSBuZXcgRGVmZXIoKTtcbiAgICBsZXQgc3RyZWFtID0gZnMuY3JlYXRlV3JpdGVTdHJlYW0odGhpcy5jb25maWdzLnBhdGgub3V0cHV0KTtcblxuICAgIGNvbnNvbGUubG9nKHRoaXMuX25hbWUsIERhdGUubm93KCksXG4gICAgICBgV3JpdGUgdGhlIGZpbGUgXCIkeyB0aGlzLmNvbmZpZ3MucGF0aC5vdXRwdXQgfVwiIHdpdGggcmVwb3J0IG9mIHRpbWVsaW5lIGNvbGxlY3Rpbmcgb3V0OmAsXG4gICAgICB1dGlsLmluc3BlY3QodGhpcy5fdGltZWxpbmUpKTtcblxuICAgIGlmICghc3RyZWFtLndyaXRlKHN0clRpbWVsaW5lKSkge1xuICAgICAgc3RyZWFtLm9uKCdkcmFpbicsICgpID0+IHtcbiAgICAgICAgc3RyZWFtLndyaXRlKHN0clRpbWVsaW5lKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzdHJlYW0ub24oJ2Vycm9yJywgd3JpdGluZ0RlZmVyLnJlamVjdCk7XG4gICAgc3RyZWFtLmVuZCgpO1xuICAgIHN0cmVhbS5vbignZmluaXNoJywgd3JpdGluZ0RlZmVyLnJlc29sdmUpO1xuXG4gICAgZGVmZXIucHJvbWlzZSA9IGRlZmVyLnByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICByZXR1cm4gd3JpdGluZ0RlZmVyLnByb21pc2U7XG4gICAgfSkuY2F0Y2goKGUpID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIG9jY3VyZWQgd2hlbiB3YWl0aW5nIHRoZSBmaWxlIHdyaXRpbmcgb3V0Jyk7XG4gICAgICB0aHJvdyBlO1xuICAgIH0pO1xuICB9XG5cbiAgX29uSW5pdGlhbGl6ZShyb3V0ZXJzKSB7XG4gICAgc3VwZXIuX29uSW5pdGlhbGl6ZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIE9iamVjdC5rZXlzKHJvdXRlcnMpLmZvckVhY2goKG5hbWUpID0+IHtcbiAgICAgIGxldCByb3V0ZXIgPSByb3V0ZXJzW25hbWVdO1xuICAgICAgc3dpdGNoIChuYW1lKSB7XG4gICAgICAgIGNhc2UgJ3NjcmVlbnJlY29yZCc6XG4gICAgICAgIGNhc2UgJ2RldmljZWxvZyc6XG4gICAgICAgICAgcm91dGVyLnN1YnNjcmliZSh0aGlzLl9jb25uZWN0LmJpbmQodGhpcykpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuX2NvbnN1bWVNZXNzYWdlKCk7XG4gIH1cblxuICBfY29ubmVjdChwdWJsaWNhdGlvbikge1xuICAgIGNzcC5vcGVyYXRpb25zLnB1Yi5zdWIocHVibGljYXRpb24sICdsb2cnLCB0aGlzLl9pbnB1dENoYW5uZWwpO1xuICB9XG5cbiAgX2NvbnN1bWVNZXNzYWdlKCkge1xuICAgIGNzcC5nbygoZnVuY3Rpb24qKCkge1xuICAgICAgbGV0IHZhbHVlID0geWllbGQgdGhpcy5faW5wdXRDaGFubmVsO1xuICAgICAgd2hpbGUgKGNzcC5DTE9TRUQgIT09IHZhbHVlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuX25hbWUsIERhdGUubm93KCksXG4gICAgICAgICAgYFJlY2VpdmVkIGEgbWVzc2FnZSBvZiBjb2xsZWN0ZWQgZGF0YTogJHsgdXRpbC5pbnNwZWN0KHZhbHVlKSB9IGApO1xuICAgICAgICB0aGlzLl9vbklucHV0KHZhbHVlKTtcbiAgICAgICAgdmFsdWUgPSB5aWVsZCB0aGlzLl9pbnB1dENoYW5uZWw7XG4gICAgICB9XG4gICAgfSkuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogT25jZSB3ZSBjb2xsZWN0IGRpZmZlcmVudCBjaGFubmVscyBpbnRvIG9uZSwgd2Ugb25seSBjYXJlIGFib3V0IHRoZWlyIGNvbW1vbiBhdHRyaWJ1dGVzLlxuICAgKi9cbiAgX29uSW5wdXQodmFsdWUpIHtcbiAgICBsZXQgc291cmNlID0gdmFsdWUuc291cmNlO1xuICAgIGlmICghdmFsdWUucGF5bG9hZCkgeyByZXR1cm47IH1cbiAgICBpZiAoIXRoaXMuX2NoZWNrTG9nVmFsaWQodmFsdWUucGF5bG9hZCkpIHsgcmV0dXJuOyB9XG4gICAgbGV0IHsgb2Zmc2V0LCB0eXBlLCBjb250ZW50IH0gPSB2YWx1ZS5wYXlsb2FkO1xuICAgIGlmICghdGhpcy5fdGltZWxpbmVbb2Zmc2V0XSkge1xuICAgICAgdGhpcy5fdGltZWxpbmVbb2Zmc2V0XSA9IG5ldyBUaW1lbGluZVJlY29yZChvZmZzZXQpO1xuICAgIH1cbiAgICB0aGlzLl90aW1lbGluZVtvZmZzZXRdLnB1c2goc291cmNlLCB0eXBlLCBjb250ZW50KTtcbiAgfVxuXG4gIF9jaGVja0xvZ1ZhbGlkKGxvZykge1xuICAgIGlmICghbG9nLm9mZnNldCB8fCAhbG9nLnR5cGUgfHwgIWxvZy5jb250ZW50KSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIF9vblN0YWdlQ2hhbmdlKHN0YWdlKSB7XG4gICAgc3dpdGNoKHN0YWdlKSB7XG4gICAgICBjYXNlICdjb2xsZWN0aW5nJzpcbiAgICAgICAgdGhpcy5fdHJhbnNmZXJUb0NvbGxlY3RpbmdTdGFnZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Rlcm1pbmF0aW5nJzpcbiAgICAgICAgdGhpcy5fdHJhbnNmZXJUb1Rlcm1pbmF0aW5nU3RhZ2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgX3RyYW5zZmVyVG9SZWNvcmRpbmdTdGFnZSgpIHtcbiAgICB0aGlzLl90cmFuc2ZlclRvKHRoaXMuX3JlY29yZGluZyk7XG4gIH1cblxuICBfdHJhbnNmZXJUb0NvbGxlY3RpbmdTdGFnZSgpIHtcbiAgICB0aGlzLl90cmFuc2ZlclRvKHRoaXMuX2NvbGxlY3RpbmcpO1xuICB9XG5cbiAgX3RyYW5zZmVyVG9UZXJtaW5hdGluZ1N0YWdlKCkge1xuICAgIHRoaXMuX3RyYW5zZmVyVG8odGhpcy5fdGVybWluYXRpbmcpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb3V0ZXJzL1RpbWVsaW5lLmpzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==