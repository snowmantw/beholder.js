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
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	//import Raptor from 'routers/Raptor';
	//import Error from 'routers/Error';
	//import ScreenRecord from 'routers/ScreenRecord';
	
	var _jsCsp = __webpack_require__(191);
	
	var _jsCsp2 = _interopRequireDefault(_jsCsp);
	
	var _Configure = __webpack_require__(201);
	
	var _Configure2 = _interopRequireDefault(_Configure);
	
	var _RecordingStage = __webpack_require__(214);
	
	var _RecordingStage2 = _interopRequireDefault(_RecordingStage);
	
	var _RecordingStage3 = __webpack_require__(209);
	
	var _RecordingStage4 = _interopRequireDefault(_RecordingStage3);
	
	var _RecordingStage5 = __webpack_require__(215);
	
	var _RecordingStage6 = _interopRequireDefault(_RecordingStage5);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } step("next"); }); }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	/**
	 * This launcher & controller module will send initialized
	 * message to all other modules, and then forward stage changes
	 * from the main module. Itself doesn't belong to the command-module
	 * system, but can deal with the protocol.
	 **/
	
	var Beholder = (function () {
	  function Beholder() {
	    _classCallCheck(this, Beholder);
	
	    this._outputChannel = _jsCsp2.default.chan();
	    this._mainRouterChannel = _jsCsp2.default.chan();
	    this._signalChannel = _jsCsp2.default.chan();
	
	    this._publication = _jsCsp2.default.operations.pub(this._outputChannel, function (e) {
	      return e.topic;
	    });
	  }
	
	  _createClass(Beholder, [{
	    key: 'start',
	    value: function start() {
	      var configure = new _Configure2.default();
	      this.configs = configure.setup();
	      this._routers = {
	        devicelog: new _RecordingStage4.default(this.configs),
	        log: new _RecordingStage2.default(this.configs),
	        signal: new _RecordingStage6.default(this.configs)
	      };
	      this._initializeRouters();
	    }
	  }, {
	    key: '_initializeRouters',
	    value: function _initializeRouters() {
	      var mainRouter = undefined;
	      var initialized = {};
	      var mainRouterIdentity = this.configs.routers.__main__;
	
	      this._transferredPromises = [];
	
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;
	
	      try {
	        for (var _iterator = this.configs.routers[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var routerIdendity = _step.value;
	
	          var router = this._routers[routerIdendity];
	          if (!router) {
	            console.error('!!!!!!Cannot find router ' + routerIdendity + ' from ' + this.configs.routers);
	            throw new Error('Cannot find router ' + routerIdendity + ' from ' + this.configs.routers);
	          }
	          router.connectToController(this._publication);
	          initialized[routerIdendity] = router;
	          this._transferredPromises.push(router.start());
	          if (mainRouterIdentity === routerIdendity) {
	            mainRouter = router;
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
	
	      if (!mainRouter) {
	        throw new Error('Found no main module: ' + mainRouterIdentity);
	      }
	      this._routersInitialized = initialized;
	
	      // So that modules could connect to each other by themselves.
	      // TODO::::: problematic line
	      _jsCsp2.default.putAsync(this._outputChannel, { 'topic': 'status',
	        'payload': { 'type': 'initialized', 'detail': initialized } });
	
	      // Controller needs to listen to signals.
	      this._routers.signal.subscribe(this._connectToSignals.bind(this));
	      //mainRouter.subscribe(this::this._connectToMainRouter);
	    }
	  }, {
	    key: '_terminate',
	    value: (function () {
	      var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee() {
	        var waitAllTerminated;
	        return regeneratorRuntime.wrap(function _callee$(_context) {
	          while (1) {
	            switch (_context.prev = _context.next) {
	              case 0:
	                waitAllTerminated = Promise.all(this._transferredPromises);
	
	                console.log('>>>> terminating sent');
	                _jsCsp2.default.putAsync(this._outputChannel, { 'topic': 'status',
	                  'payload': { 'type': 'stagechange', 'detail': 'terminating' } });
	                _context.next = 5;
	                return waitAllTerminated;
	
	              case 5:
	
	                console.log('>>>> after wait it');
	                // TODO: need to distinguish the difference between abnormal and normal terminating ?
	                process.exit(0);
	
	              case 7:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }));
	
	      return function _terminate() {
	        return ref.apply(this, arguments);
	      };
	    })()
	  }, {
	    key: '_connectToMainRouter',
	    value: function _connectToMainRouter(publication, transferredDeferred) {
	      _jsCsp2.default.operations.pub.sub(publication, 'status', this._mainRouterChannel);
	      this._mainRouterTransferredDeferred = transferredDeferred;
	      this._consumeStageChanges();
	    }
	  }, {
	    key: '_connectToSignals',
	    value: function _connectToSignals(publication, transferredDeferred) {
	      _jsCsp2.default.operations.pub.sub(publication, 'data', this._signalChannel);
	      this._signalTransferredDeferred = transferredDeferred;
	      this._consumeSignals();
	    }
	  }, {
	    key: '_consumeSignals',
	    value: function _consumeSignals() {
	      _jsCsp2.default.go(regeneratorRuntime.mark(function _callee2() {
	        var value;
	        return regeneratorRuntime.wrap(function _callee2$(_context2) {
	          while (1) {
	            switch (_context2.prev = _context2.next) {
	              case 0:
	                _context2.next = 2;
	                return this._signalChannel;
	
	              case 2:
	                value = _context2.sent;
	
	              case 3:
	                if (!(_jsCsp2.default.CLOSED !== value)) {
	                  _context2.next = 11;
	                  break;
	                }
	
	                console.log('>>>>> consume signal: ', value);
	                if ('terminating' === value.payload) {
	                  console.log('>>>>> got signal terminating', 'Controller');
	                  this._terminate();
	                }
	                _context2.next = 8;
	                return this._signalChannel;
	
	              case 8:
	                value = _context2.sent;
	                _context2.next = 3;
	                break;
	
	              case 11:
	              case 'end':
	                return _context2.stop();
	            }
	          }
	        }, _callee2, this);
	      }).bind(this));
	    }
	
	    /**
	     * Main module should fire stage change messages, so other modules could
	     * change their stage as well. And since modules have all the list of initialized
	     * ones, they can handle the re-subscription issues by themselves.
	     */
	
	  }, {
	    key: '_consumeStageChanges',
	    value: function _consumeStageChanges() {
	      _jsCsp2.default.go(regeneratorRuntime.mark(function _callee3() {
	        var value;
	        return regeneratorRuntime.wrap(function _callee3$(_context3) {
	          while (1) {
	            switch (_context3.prev = _context3.next) {
	              case 0:
	                _context3.next = 2;
	                return this._mainRouterChannel;
	
	              case 2:
	                value = _context3.sent;
	
	              case 3:
	                if (!(_jsCsp2.default.CLOSED !== value)) {
	                  _context3.next = 11;
	                  break;
	                }
	
	                console.log('>>>>> consume main');
	                if ('stagechange' === valule.payload.type) {
	                  this._dispatchStage(value.payload);
	                }
	                _context3.next = 8;
	                return this._mainRouterChannel;
	
	              case 8:
	                value = _context3.sent;
	                _context3.next = 3;
	                break;
	
	              case 11:
	              case 'end':
	                return _context3.stop();
	            }
	          }
	        }, _callee3, this);
	      }).bind(this));
	    }
	
	    /**
	     * Re-dispatch again. Since this is a Facade.
	     */
	
	  }, {
	    key: '_dispatchStage',
	    value: function _dispatchStage(stagePayload) {
	      _jsCsp2.default.putAsync(this._outputChannel, { 'topic': 'status',
	        'payload': stagePayload });
	    }
	  }]);
	
	  return Beholder;
	})();
	
	var beholder = new Beholder();
	beholder.start();
	//
	/*
	let configure = new Configure();
	let configs = configure.setup();
	let signal = new Signal();
	let devicelog = new DeviceLog();
	devicelog.run(configs);
	signal.run();
	*/
	//setTimeout(() => {}, 30 * 1000);
	
	/*
	export async function main() {
	  try {
	    let raptor = new Raptor();
	    let log = new LogRecordingStage();
	    let error = new Error();
	    let record = new ScreenRecord();
	    let configure = new Configure();
	    let devicelog = new DeviceLog();
	    let signal = new Signal();
	
	    let configs = configure.setup();
	
	    // Must have signal handling.
	    signal.run();
	
	    // Run modules before connecting them.
	    //record.run(configs);
	
	    // Passive modules do not need configs: they only need channel results.
	    log.run();
	    error.run();
	
	    for (let moduleIdendity of configs.modules) {
	      switch(moduleIdendity) {
	
	        case 'adb':
	          signal.subscribe(
	            devicelog::devicelog.connectSignals
	          );
	          devicelog.subscribe(
	            log::log.connect,
	            error::error.errorFromLogChannel,
	            error::error.errorFromErrorChannel,
	          ).run(configs);
	          break;
	        case 'raptor':
	          signal.subscribe(
	            raptor::raptor.connectSignals
	          );
	          for (let testFilePath of configs.tests) {
	            raptor.subscribe(
	              log::log.connect,
	              error::error.connect,
	              //record::record.connect
	            ).run(configs, testFilePath);
	          }
	          break;
	        case 'screenrecord':
	          signal.subscribe(
	            record::record.connectSignals
	          );
	          record.run(configs);
	          break;
	      }
	    }
	
	  } catch(e) {
	    console.error('>>>>>>>> ERROR', e, e.stack);
	    throw e;
	  }
	}
	
	main();
	*/

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var csp = __webpack_require__(192);
	var operations = __webpack_require__(199);
	var pipeline = __webpack_require__(200);
	
	csp.operations = operations;
	csp.operations.pipeline = pipeline.pipeline;
	csp.operations.pipelineAsync = pipeline.pipelineAsync;
	
	module.exports = csp;


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var buffers = __webpack_require__(193);
	var channels = __webpack_require__(194);
	var select = __webpack_require__(196);
	var process = __webpack_require__(197);
	var timers = __webpack_require__(198);
	
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
/* 193 */
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
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var buffers = __webpack_require__(193);
	var dispatch = __webpack_require__(195);
	
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
/* 195 */
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
	
	var buffers = __webpack_require__(193);
	
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
/* 196 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Box = __webpack_require__(194).Box;
	
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
/* 197 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var dispatch = __webpack_require__(195);
	var select = __webpack_require__(196);
	var Channel = __webpack_require__(194).Channel;
	
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
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var dispatch = __webpack_require__(195);
	var channels = __webpack_require__(194);
	
	exports.timeout = function timeout_channel(msecs) {
	  var chan = channels.chan();
	  dispatch.queue_delay(function() {
	    chan.close();
	  }, msecs);
	  return chan;
	};


/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var Box = __webpack_require__(194).Box;
	
	var csp = __webpack_require__(192),
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
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	
	var csp = __webpack_require__(192);
	
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
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _nodeGetopt = __webpack_require__(202);
	
	var _nodeGetopt2 = _interopRequireDefault(_nodeGetopt);
	
	var _fs = __webpack_require__(204);
	
	var _fs2 = _interopRequireDefault(_fs);
	
	var _path = __webpack_require__(205);
	
	var _path2 = _interopRequireDefault(_path);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Configure = (function () {
	  function Configure() {
	    _classCallCheck(this, Configure);
	
	    this.opts = _nodeGetopt2.default.create([['r', 'raptor=ARG', 'where the raptor executable file is'], ['p', 'phase=ARG', 'where the running phase is'], ['c', 'config=ARG', 'config file (command line arguments will surpass it)'], ['', 'adb=ARG', 'where the `adb` command is`'], ['', 'record-target-device=ARG', 'where to put the record on the device'], ['', 'record-target-console=ARG', 'where to pull the record to the console'], ['r', 'routers=ARG+', 'invoke what routers'], ['', 'main=ARG', 'default is Raptor; once it ends the process will end, too'], ['h', 'help', 'display this help'], ['v', 'version', 'show version']]).bindHelp('Usage: beholder <test-file-path> --<optional options>');
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
	          var moduleIdendity = _step.value;
	
	          switch (moduleIdendity) {
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
	        defaultConfigs = __webpack_require__(206)(options.config);
	      } else {
	        defaultConfigs = this.generateDefaultConfigs();
	      }
	
	      // Overwrite the existent one in the default file.
	      defaultConfigs.path.phase = options.phase || defaultConfigs.path.phase;
	      defaultConfigs.path.raptor = options.raptor || defaultConfigs.path.raptor;
	      defaultConfigs.path.adb = options.adb || defaultConfigs.path.adb;
	
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
	})();
	
	exports.default = Configure;

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(203);


/***/ },
/* 203 */
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
/* 204 */
/***/ function(module, exports) {

	module.exports = require("fs");

/***/ },
/* 205 */
/***/ function(module, exports) {

	module.exports = require("path");

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./Configure": 201,
		"./Configure.js": 201,
		"./Defer": 207,
		"./Defer.js": 207,
		"./beholder": 190,
		"./beholder.js": 190,
		"./record/Log": 208,
		"./record/Log.js": 208,
		"./routers/DeviceLog/RecordingStage": 209,
		"./routers/DeviceLog/RecordingStage.js": 209,
		"./routers/Log/CollectingStage": 212,
		"./routers/Log/CollectingStage.js": 212,
		"./routers/Log/RecordingStage": 214,
		"./routers/Log/RecordingStage.js": 214,
		"./routers/Log/TerminatingStage": 213,
		"./routers/Log/TerminatingStage.js": 213,
		"./routers/Router": 211,
		"./routers/Router.js": 211,
		"./routers/Signal/RecordingStage": 215,
		"./routers/Signal/RecordingStage.js": 215
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
	webpackContext.id = 206;


/***/ },
/* 207 */
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
/* 208 */
/***/ function(module, exports) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Log = (function () {
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
	})();
	
	exports.default = Log;

/***/ },
/* 209 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsCsp = __webpack_require__(191);
	
	var _jsCsp2 = _interopRequireDefault(_jsCsp);
	
	var _child_process = __webpack_require__(210);
	
	var _child_process2 = _interopRequireDefault(_child_process);
	
	var _Router2 = __webpack_require__(211);
	
	var _Router3 = _interopRequireDefault(_Router2);
	
	var _Defer = __webpack_require__(207);
	
	var _Defer2 = _interopRequireDefault(_Defer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RecordingStage = (function (_Router) {
	  _inherits(RecordingStage, _Router);
	
	  function RecordingStage(configsInstance) {
	    _classCallCheck(this, RecordingStage);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RecordingStage).call(this, arguments));
	
	    _this.configs = configsInstance;
	    _this._adbPath = _this.configs.path.adb;
	    _this._name = 'devicelog';
	    return _this;
	  }
	
	  _createClass(RecordingStage, [{
	    key: 'start',
	    value: function start() {
	      var _this2 = this;
	
	      console.log('>>>>> device log runs');
	      var runIt = _child_process2.default.spawn(this._adbPath, ['logcat'], { detached: true });
	      console.log('>>>>> device log runs spawn');
	      runIt.unref();
	      runIt.stdout.on('data', function (data) {
	        console.log('>>>>> data adb');
	        _jsCsp2.default.putAsync(_this2._outputChannel, { 'topic': 'log', 'payload': data });
	      });
	      runIt.stderr.on('data', function (data) {
	        console.log('>>>>> error adb');
	        _jsCsp2.default.putAsync(_this2._outputChannel, { 'topic': 'error', 'payload': data });
	      });
	      runIt.on('close', function (status) {
	        console.log('>>>>> close adb');
	        _jsCsp2.default.putAsync(_this2._outputChannel, { 'topic': 'status', 'payload': status });
	      });
	      console.log('>>>>> device log runs spawn done');
	
	      this._transferredDeferred.promise = this._transferredDeferred.promise.then(function () {
	        // After close, kill the adb logcat process.
	        // This is the 'stop' method this command has.
	        // Since it mainly forwards to other module,
	        // we only need to kill the listener.
	        runIt.kill();
	      }).catch(function (e) {
	        console.error(e);
	        throw e;
	      });
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      // Since this is an actually all-in-one router without any stage,
	      // we need to implement the method in this stage.
	      this._stopListenToControlChannel();
	      this._closeChannels();
	    }
	  }, {
	    key: '_onInitialized',
	    value: function _onInitialized(initializedRouters) {
	      _get(Object.getPrototypeOf(RecordingStage.prototype), '_onInitialized', this).call(this, arguments);
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
	    key: '_transferToCollectingStage',
	    value: function _transferToCollectingStage() {
	      // Don't actually transfer since we will do nothing in that stage.
	      var deferred = this._transferredDeferred;
	      this._transferredDeferred = new _Defer2.default();
	      deferred.resolve();
	    }
	  }, {
	    key: '_transferToTerminatingStage',
	    value: function _transferToTerminatingStage() {
	      // Don't actually transfer since we will do nothing in that stage.
	      var deferred = this._transferredDeferred;
	      this._transferredDeferred = new _Defer2.default();
	      deferred.resolve();
	    }
	  }]);
	
	  return RecordingStage;
	})(_Router3.default);
	
	exports.default = RecordingStage;

/***/ },
/* 210 */
/***/ function(module, exports) {

	module.exports = require("child_process");

/***/ },
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsCsp = __webpack_require__(191);
	
	var _jsCsp2 = _interopRequireDefault(_jsCsp);
	
	var _Defer = __webpack_require__(207);
	
	var _Defer2 = _interopRequireDefault(_Defer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	var Router = (function () {
	
	  /**
	   * After constructor this router should be able to listen to control messages.
	   */
	
	  function Router(previousStageInstance) {
	    _classCallCheck(this, Router);
	
	    this._name = '__router__'; // Extend by client.
	    this._controlChannel = _jsCsp2.default.chan();
	    this._outputChannel = _jsCsp2.default.chan();
	    this._inputChannel = _jsCsp2.default.chan();
	    this._publication = _jsCsp2.default.operations.pub(this._outputChannel, function (e) {
	      return e.topic;
	    });
	    this._previousStage = previousStageInstance;
	
	    // Only when all transferring stuff done, this Defer will be resolved.
	    this._transferredDeferred = new _Defer2.default();
	    this._consumeControlMessage();
	  }
	
	  /**
	   * After started the router should be able to emit message to the output channel.
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
	        sub(_this._publication, _this._transferredDeferred.promise);
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
	                  _context.next = 21;
	                  break;
	                }
	
	                _value$payload = value.payload;
	                type = _value$payload.type;
	                detail = _value$payload.detail;
	                _context.t0 = type;
	                _context.next = _context.t0 === 'initialized' ? 10 : _context.t0 === 'stagechange' ? 12 : 16;
	                break;
	
	              case 10:
	                this._onInitialized(detail);
	                return _context.abrupt('break', 16);
	
	              case 12:
	                this._stopListenToControlChannel();
	                this._closeChannels();
	                this._onStageChange(detail);
	                return _context.abrupt('break', 16);
	
	              case 16:
	                _context.next = 18;
	                return this._controlChannel;
	
	              case 18:
	                value = _context.sent;
	                _context.next = 3;
	                break;
	
	              case 21:
	              case 'end':
	                return _context.stop();
	            }
	          }
	        }, _callee, this);
	      }).bind(this));
	    }
	  }, {
	    key: '_onInitialized',
	    value: function _onInitialized(initializedRouters) {
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
	    key: '_stopListenToControlChannel',
	    value: function _stopListenToControlChannel() {
	      _jsCsp2.default.operations.pub.unsub(this._controllerPublication, 'status', this._controlChannel);
	    }
	  }, {
	    key: '_closeChannels',
	    value: function _closeChannels() {
	      this._inputChannel.close();
	      this._outputChannel.close();
	    }
	  }, {
	    key: '_transferTo',
	    value: function _transferTo(routerStageClass) {
	      // Extend this procedure if it's necessary.
	      var nextStage = new routerStageClass(this);
	      this._routers[this._name] = nextStage;
	      this._transferredDeferred.resolve();
	      nextStage.start();
	    }
	  }]);
	
	  return Router;
	})();
	
	exports.default = Router;

/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsCsp = __webpack_require__(191);
	
	var _jsCsp2 = _interopRequireDefault(_jsCsp);
	
	var _Router2 = __webpack_require__(211);
	
	var _Router3 = _interopRequireDefault(_Router2);
	
	var _TerminatingStage = __webpack_require__(213);
	
	var _TerminatingStage2 = _interopRequireDefault(_TerminatingStage);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	// TODO: We need to do time alignment in this stage when it's ready.
	
	var CollectingStage = (function (_Router) {
	  _inherits(CollectingStage, _Router);
	
	  function CollectingStage() {
	    _classCallCheck(this, CollectingStage);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(CollectingStage).call(this, arguments));
	
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
	})(_Router3.default);
	
	exports.default = CollectingStage;

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsCsp = __webpack_require__(191);
	
	var _jsCsp2 = _interopRequireDefault(_jsCsp);
	
	var _Router2 = __webpack_require__(211);
	
	var _Router3 = _interopRequireDefault(_Router2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var TerminatingStage = (function (_Router) {
	  _inherits(TerminatingStage, _Router);
	
	  function TerminatingStage() {
	    _classCallCheck(this, TerminatingStage);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TerminatingStage).call(this, arguments));
	
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
	})(_Router3.default);
	
	exports.default = TerminatingStage;

/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsCsp = __webpack_require__(191);
	
	var _jsCsp2 = _interopRequireDefault(_jsCsp);
	
	var _Router2 = __webpack_require__(211);
	
	var _Router3 = _interopRequireDefault(_Router2);
	
	var _CollectingStage = __webpack_require__(212);
	
	var _CollectingStage2 = _interopRequireDefault(_CollectingStage);
	
	var _TerminatingStage = __webpack_require__(213);
	
	var _TerminatingStage2 = _interopRequireDefault(_TerminatingStage);
	
	var _Log = __webpack_require__(208);
	
	var _Log2 = _interopRequireDefault(_Log);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RecordingStage = (function (_Router) {
	  _inherits(RecordingStage, _Router);
	
	  function RecordingStage() {
	    _classCallCheck(this, RecordingStage);
	
	    // Router name: 'log'
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RecordingStage).call(this, arguments));
	
	    _this._name = 'log';
	
	    // The devicelog router will emit log/error.
	    _this._deviceLogTopic = 'log';
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
	      _get(Object.getPrototypeOf(RecordingStage.prototype), '_onInitialized', this).call(this, arguments);
	      this._routers.devicelog.subscribe(this._connectToDeviceLog.bind(this));
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
	})(_Router3.default);
	
	exports.default = RecordingStage;

/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _jsCsp = __webpack_require__(191);
	
	var _jsCsp2 = _interopRequireDefault(_jsCsp);
	
	var _Router2 = __webpack_require__(211);
	
	var _Router3 = _interopRequireDefault(_Router2);
	
	var _Defer = __webpack_require__(207);
	
	var _Defer2 = _interopRequireDefault(_Defer);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
	
	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var RecordingStage = (function (_Router) {
	  _inherits(RecordingStage, _Router);
	
	  function RecordingStage(configsInstance) {
	    _classCallCheck(this, RecordingStage);
	
	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RecordingStage).call(this, arguments));
	
	    _this.configs = configsInstance;
	    _this._name = 'devicelog';
	    return _this;
	  }
	
	  _createClass(RecordingStage, [{
	    key: 'start',
	    value: function start() {
	      var _this2 = this;
	
	      var signals = ['SIGHUP', 'SIGINT', 'SIGTERM'];
	      console.log('>>> Signals run');
	      signals.forEach(function (signal) {
	        console.log('>>>> book: ', signal);
	        process.on(signal, function () {
	          console.log('>>>>>> send kill signal');
	          _jsCsp2.default.putAsync(_this2._outputChannel, { 'topic': 'data', 'payload': 'terminating' });
	        });
	      });
	
	      this._transferredDeferred.promise = this._transferredDeferred.promise.then(function () {
	        process.exit();
	      }).catch(function (e) {
	        console.error(e);
	        throw e;
	      });
	      return this._transferredDeferred.promise;
	    }
	  }, {
	    key: 'stop',
	    value: function stop() {
	      // Since this is an actually all-in-one router without any stage,
	      // we need to implement the method in this stage.
	      this._stopListenToControlChannel();
	      this._closeChannels();
	    }
	  }, {
	    key: '_onInitialized',
	    value: function _onInitialized(initializedRouters) {
	      _get(Object.getPrototypeOf(RecordingStage.prototype), '_onInitialized', this).call(this, arguments);
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
	    key: '_transferToCollectingStage',
	    value: function _transferToCollectingStage() {
	      // Don't actually transfer since we will do nothing in that stage.
	      var deferred = this._transferredDeferred;
	      this._transferredDeferred = new _Defer2.default();
	      deferred.resolve();
	    }
	  }, {
	    key: '_transferToTerminatingStage',
	    value: function _transferToTerminatingStage() {
	      // Don't actually transfer since we will do nothing in that stage.
	      var deferred = this._transferredDeferred;
	      this._transferredDeferred = new _Defer2.default();
	      deferred.resolve();
	    }
	  }]);
	
	  return RecordingStage;
	})(_Router3.default);
	
	exports.default = RecordingStage;

/***/ }
/******/ ])));
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTYxYWRjNTI2ZjE5ZTYxNzIxZjkiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvc2hpbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmV4cG9ydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5jb3JlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5oaWRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZmFpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnJlZGVmaW5lLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC51aWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmN0eC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYS1mdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZG9tLWNyZWF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXMtb2JqZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5oYXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmNvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaW52b2tlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnRvLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQudG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQudG8taW50ZWdlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQudG8taW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnRvLWxlbmd0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktbWV0aG9kcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktc3BlY2llcy1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlzLWFycmF5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC53a3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnNoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3ltYm9sLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQua2V5b2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmdldC1uYW1lcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZW51bS1rZXlzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm9iamVjdC1hc3NpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zYW1lLXZhbHVlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zZXQtcHJvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5vYmplY3Qtc2FwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5wcmV2ZW50LWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLWZyb3plbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtc2VhbGVkLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1leHRlbnNpYmxlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1vd24tcHJvcGVydHktbmFtZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuZnVuY3Rpb24ubmFtZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5oYXMtaW5zdGFuY2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC50by1wcmltaXRpdmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnN0cmluZy10cmltLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5lcHNpbG9uLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1maW5pdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlzLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLW5hbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuaXMtc2FmZS1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5tYXgtc2FmZS1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5taW4tc2FmZS1pbnRlZ2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1mbG9hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtaW50LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguYWNvc2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm1hdGgtbG9nMXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hc2luaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmF0YW5oLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2JydC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQubWF0aC1zaWduLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY2x6MzIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jb3NoLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguZXhwbTEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm1hdGgtZXhwbTEuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5mcm91bmQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5oeXBvdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmltdWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cxMC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmxvZzFwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnNpZ24uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaW5oLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgudGFuaC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLnRydW5jLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnJhdy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcudHJpbS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnN0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLml0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmNvZGUtcG9pbnQtYXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLmVuZHMtd2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuc3RyaW5nLWNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlzLXJlZ2V4cC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZmFpbHMtaXMtcmVnZXhwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5pbmNsdWRlcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcucmVwZWF0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zdHJpbmctcmVwZWF0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlzLWFycmF5LWl0ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLml0ZXItZGV0ZWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lm9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5hZGQtdG8tdW5zY29wYWJsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLml0ZXItc3RlcC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5zcGVjaWVzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5jb3B5LXdpdGhpbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktY29weS13aXRoaW4uanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktZmlsbC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maW5kLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5mbGFncy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuZmxhZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLm1hdGNoLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5maXgtcmUtd2tzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5yZXBsYWNlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zZWFyY2guanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnNwbGl0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnN0cmljdC1uZXcuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmZvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuc3BlY2llcy1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQubWljcm90YXNrLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC50YXNrLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5yZWRlZmluZS1hbGwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWFwLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5jb2xsZWN0aW9uLXN0cm9uZy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYud2Vhay1tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmNvbGxlY3Rpb24td2Vhay5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLXNldC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmFwcGx5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuY29uc3RydWN0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVmaW5lLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZGVsZXRlLXByb3BlcnR5LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZW51bWVyYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuZ2V0LXByb3RvdHlwZS1vZi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0Lmhhcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmlzLWV4dGVuc2libGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5vd24ta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQub3duLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5wcmV2ZW50LWV4dGVuc2lvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5zZXQtcHJvdG90eXBlLW9mLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LmFycmF5LmluY2x1ZGVzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy5hdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLWxlZnQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnN0cmluZy1wYWQuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnBhZC1yaWdodC5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcudHJpbS1sZWZ0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy50cmltLXJpZ2h0LmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZ2V4cC5lc2NhcGUuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnJlcGxhY2VyLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm9iamVjdC10by1hcnJheS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZW50cmllcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5tYXAudG8tanNvbi5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY29sbGVjdGlvbi10by1qc29uLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnNldC50by1qc29uLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvanMuYXJyYXkuc3RhdGljcy5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL3dlYi50aW1lcnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnBhcnRpYWwuanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy93ZWIuaW1tZWRpYXRlLmpzIiwid2VicGFjazovLy8uL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2JhYmVsLXBvbHlmaWxsL34vYmFiZWwtcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9iZWhvbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9+L2pzLWNzcC9zcmMvY3NwLmpzIiwid2VicGFjazovLy8uL34vanMtY3NwL3NyYy9jc3AuY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9+L2pzLWNzcC9zcmMvaW1wbC9idWZmZXJzLmpzIiwid2VicGFjazovLy8uL34vanMtY3NwL3NyYy9pbXBsL2NoYW5uZWxzLmpzIiwid2VicGFjazovLy8uL34vanMtY3NwL3NyYy9pbXBsL2Rpc3BhdGNoLmpzIiwid2VicGFjazovLy8uL34vanMtY3NwL3NyYy9pbXBsL3NlbGVjdC5qcyIsIndlYnBhY2s6Ly8vLi9+L2pzLWNzcC9zcmMvaW1wbC9wcm9jZXNzLmpzIiwid2VicGFjazovLy8uL34vanMtY3NwL3NyYy9pbXBsL3RpbWVycy5qcyIsIndlYnBhY2s6Ly8vLi9+L2pzLWNzcC9zcmMvY3NwLm9wZXJhdGlvbnMuanMiLCJ3ZWJwYWNrOi8vLy4vfi9qcy1jc3Avc3JjL2NzcC5waXBlbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvQ29uZmlndXJlLmpzIiwid2VicGFjazovLy8uL34vbm9kZS1nZXRvcHQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vfi9ub2RlLWdldG9wdC9saWIvZ2V0b3B0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicGF0aFwiIiwid2VicGFjazovLy8uL3NyYyBeXFwuXFwvLiokIiwid2VicGFjazovLy8uL3NyYy9EZWZlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcmVjb3JkL0xvZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVycy9EZXZpY2VMb2cvUmVjb3JkaW5nU3RhZ2UuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXJzL1JvdXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVycy9Mb2cvQ29sbGVjdGluZ1N0YWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXJzL0xvZy9UZXJtaW5hdGluZ1N0YWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXJzL0xvZy9SZWNvcmRpbmdTdGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVycy9TaWduYWwvUmVjb3JkaW5nU3RhZ2UuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHVCQUFlO0FBQ2Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQ3RDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSw4Qjs7Ozs7O0FDVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Qzs7Ozs7O0FDdkdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZDQUE0QyxnQkFBZ0IsVUFBVSxHQUFHO0FBQ3pFLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxNQUFLLFVBQVU7QUFDZjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUssVUFBVTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0wsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBLDJCQUEwQixTQUFTO0FBQ25DO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUyxVQUFVO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLDhCQUE2QixpQ0FBaUM7O0FBRTlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUyxzQ0FBc0M7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVMsV0FBVztBQUNwQjtBQUNBO0FBQ0EsRUFBQzs7QUFFRDtBQUNBLDZCQUE0QixnQkFBZ0Isa0JBQWtCLEdBQUc7O0FBRWpFO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLEVBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7QUNuUkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0ZBQXFGLHVCQUF1QjtBQUM1RyxvRUFBbUU7QUFDbkUsaUVBQWdFO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWM7QUFDZCxlQUFjO0FBQ2QsZUFBYztBQUNkLGVBQWM7QUFDZCxnQkFBZTtBQUNmLGdCQUFlO0FBQ2YsMEI7Ozs7OztBQ3hDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBdUMsZ0M7Ozs7OztBQ0h2Qyw4QkFBNkI7QUFDN0Isc0NBQXFDLGdDOzs7Ozs7QUNEckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBLEc7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDUEE7QUFDQTtBQUNBLGtDQUFpQyxRQUFRLGdCQUFnQixVQUFVLEdBQUc7QUFDdEUsRUFBQyxFOzs7Ozs7QUNIRDtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBLEc7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEVBQUM7QUFDRDtBQUNBLEVBQUMsRTs7Ozs7O0FDMUJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNuQkE7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDSEEsOEU7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ05BO0FBQ0E7QUFDQSxHOzs7Ozs7QUNGQSx3QkFBdUI7QUFDdkI7QUFDQTtBQUNBLEc7Ozs7OztBQ0hBLGtCQUFpQjs7QUFFakI7QUFDQTtBQUNBLEc7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0gsRzs7Ozs7O0FDZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDSkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNERBQTJE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QTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7OztBQ1REO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7OztBQ1BEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7OztBQ1ZEO0FBQ0E7O0FBRUEsZ0NBQStCLGtDQUFpQyxFOzs7Ozs7QUNIaEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ1JBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7OztBQ2ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGdDQUErQixTQUFTLEU7Ozs7OztBQzVCeEM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7OztBQ2REO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRCxzQzs7Ozs7O0FDWEE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7OztBQ1REO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7O0FDUkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7OztBQ1JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7O0FDTkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7QUNORDtBQUNBO0FBQ0EsMERBQXdEOztBQUV4RCwrQkFBOEIsNEJBQTRCLGdCQUFnQixHQUFHOzs7Ozs7O0FDSjdFO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxHOzs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxFQUFDLEU7Ozs7OztBQ3RCRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7OztBQ1JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0EsRzs7Ozs7O0FDZkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQyxFOzs7Ozs7QUNSRDtBQUNBOztBQUVBLDRCQUEyQix3Q0FBaUQsRTs7Ozs7O0FDSDVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRzs7Ozs7O0FDVkE7QUFDQTs7QUFFQSw0QkFBMkIsd0NBQWlELEU7Ozs7OztBQ0g1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0M7Ozs7OztBQ2hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzRUFBcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDLEU7Ozs7OztBQ25CRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixXQUFXO0FBQzlCO0FBQ0E7QUFDQTtBQUNBLEc7Ozs7OztBQ3ZCQSx5Qzs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUMsRTs7Ozs7O0FDTEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBFOzs7Ozs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGlCQUFnQjtBQUNoQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFjO0FBQ2QsTUFBSztBQUNMLGVBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQ0FBMEMsV0FBVztBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSw0QkFBMkI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxZQUFXO0FBQ1g7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsVUFBUztBQUNUO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBVztBQUNYO0FBQ0E7O0FBRUEsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxrQ0FBaUMsa0JBQWtCO0FBQ25EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFpQjs7QUFFakI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXdCLGlCQUFpQjtBQUN6QztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQVk7QUFDWjtBQUNBOztBQUVBO0FBQ0EsYUFBWTtBQUNaOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSzs7QUFFTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxNQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7O0FDbkVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7QUM5TEE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN6VUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7Ozs7OztBQ2pGQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxjQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBLGNBQWEsT0FBTztBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxrQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBUztBQUNULFFBQU87QUFDUCxNQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1QsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7OztBQzlHQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xNQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7Ozs7Ozs7QUNYQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQUs7QUFDTDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFxQixZQUFZO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixZQUFZO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQixZQUFZO0FBQ2pDO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFpQixZQUFZO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9CQUFtQixPQUFPO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQSxVQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFxQixPQUFPO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBQzs7QUFFRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWUsT0FBTztBQUN0QjtBQUNBO0FBQ0E7QUFDQSxJQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBYyxVQUFVLFdBQVc7QUFDbkM7QUFDQSxrQkFBaUIsWUFBWTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLElBQUc7QUFDSDtBQUNBO0FBQ0E7O0FB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T0FBTyxDQUFDLElBQUksQ0FBQyxZQUFNO0FBQzNDLGdCQUFPLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEIsQ0FBQyxDQUFDLEtBQUssQ0FBQyxVQUFDLENBQUMsRUFBSztBQUNkLGdCQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ2pCLGVBQU0sQ0FBQyxDQUFDO1FBQ1QsQ0FBQyxDQUFDO0FBQ0wsY0FBTyxJQUFJLENBQUMsb0JBQW9CLENBQUMsT0FBTyxDQUFDO01BQzFDOzs7NEJBRU07OztBQUdMLFdBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0FBQ25DLFdBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztNQUN2Qjs7O29DQUVjLGtCQUFrQixFQUFFO0FBQ2pDLGtDQXpDaUIsY0FBYyxnREF5Q1YsU0FBUyxFQUFHO01BQ2xDOzs7b0NBRWMsS0FBSyxFQUFFO0FBQ3BCLGVBQU8sS0FBSztBQUNWLGNBQUssWUFBWTtBQUNmLGVBQUksQ0FBQywwQkFBMEIsRUFBRSxDQUFDO0FBQ2xDLGlCQUFNO0FBQ1IsY0FBSyxhQUFhO0FBQ2hCLGVBQUksQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0FBQ25DLGlCQUFNO0FBQUEsUUFDVDtNQUNGOzs7a0RBQzRCOztBQUUzQixXQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUM7QUFDekMsV0FBSSxDQUFDLG9CQUFvQixHQUFHLHFCQUFXLENBQUM7QUFDeEMsZUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO01BQ3BCOzs7bURBRTZCOztBQUU1QixXQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsb0JBQW9CLENBQUM7QUFDekMsV0FBSSxDQUFDLG9CQUFvQixHQUFHLHFCQUFXLENBQUM7QUFDeEMsZUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO01BQ3BCOzs7VUFsRWtCLGNBQWM7OzttQkFBZCxjQUFjLEMiLCJmaWxlIjoiYmVob2xkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSlcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcblxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0ZXhwb3J0czoge30sXG4gXHRcdFx0aWQ6IG1vZHVsZUlkLFxuIFx0XHRcdGxvYWRlZDogZmFsc2VcbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHdlYnBhY2svYm9vdHN0cmFwIGU2MWFkYzUyNmYxOWU2MTcyMWY5XG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnJlcXVpcmUoXCJjb3JlLWpzL3NoaW1cIik7XG5cbnJlcXVpcmUoXCJiYWJlbC1yZWdlbmVyYXRvci1ydW50aW1lXCIpO1xuXG5pZiAoZ2xvYmFsLl9iYWJlbFBvbHlmaWxsKSB7XG4gIHRocm93IG5ldyBFcnJvcihcIm9ubHkgb25lIGluc3RhbmNlIG9mIGJhYmVsLXBvbHlmaWxsIGlzIGFsbG93ZWRcIik7XG59XG5nbG9iYWwuX2JhYmVsUG9seWZpbGwgPSB0cnVlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL2xpYi9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInJlcXVpcmUoJy4vbW9kdWxlcy9lczUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3ltYm9sJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5hc3NpZ24nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmlzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmZyZWV6ZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3Quc2VhbCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QucHJldmVudC1leHRlbnNpb25zJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1mcm96ZW4nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYub2JqZWN0LmlzLXNlYWxlZCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuaXMtZXh0ZW5zaWJsZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5vYmplY3QuZ2V0LW93bi1wcm9wZXJ0eS1kZXNjcmlwdG9yJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5rZXlzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LW5hbWVzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmZ1bmN0aW9uLm5hbWUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuZnVuY3Rpb24uaGFzLWluc3RhbmNlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5jb25zdHJ1Y3RvcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIuZXBzaWxvbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIuaXMtZmluaXRlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5pcy1pbnRlZ2VyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm51bWJlci5pcy1uYW4nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLmlzLXNhZmUtaW50ZWdlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIubWF4LXNhZmUtaW50ZWdlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIubWluLXNhZmUtaW50ZWdlcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5udW1iZXIucGFyc2UtZmxvYXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubnVtYmVyLnBhcnNlLWludCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmFjb3NoJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguYXNpbmgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5hdGFuaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmNicnQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5jbHozMicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmNvc2gnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5leHBtMScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmZyb3VuZCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmh5cG90Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguaW11bCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLmxvZzEwJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGgubG9nMXAnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC5sb2cyJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGguc2lnbicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXRoLnNpbmgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYubWF0aC50YW5oJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2Lm1hdGgudHJ1bmMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc3RyaW5nLmZyb20tY29kZS1wb2ludCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcucmF3Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy50cmltJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuY29kZS1wb2ludC1hdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcuZW5kcy13aXRoJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5pbmNsdWRlcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5zdHJpbmcucmVwZWF0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnN0cmluZy5zdGFydHMtd2l0aCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5mcm9tJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5Lm9mJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LnNwZWNpZXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuYXJyYXkuZmlsbCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5hcnJheS5maW5kJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LmFycmF5LmZpbmQtaW5kZXgnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVnZXhwLmNvbnN0cnVjdG9yJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZ2V4cC5mbGFncycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWdleHAubWF0Y2gnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVnZXhwLnJlcGxhY2UnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVnZXhwLnNlYXJjaCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWdleHAuc3BsaXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5tYXAnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYuc2V0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LndlYWstbWFwJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LndlYWstc2V0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuYXBwbHknKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5jb25zdHJ1Y3QnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5kZWZpbmUtcHJvcGVydHknKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5kZWxldGUtcHJvcGVydHknKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5lbnVtZXJhdGUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5nZXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3InKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtcHJvdG90eXBlLW9mJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuaGFzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QuaXMtZXh0ZW5zaWJsZScpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNi5yZWZsZWN0Lm93bi1rZXlzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3QucHJldmVudC1leHRlbnNpb25zJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LXByb3RvdHlwZS1vZicpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5hcnJheS5pbmNsdWRlcycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zdHJpbmcuYXQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuc3RyaW5nLnBhZC1sZWZ0Jyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3LnN0cmluZy5wYWQtcmlnaHQnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuc3RyaW5nLnRyaW0tbGVmdCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5zdHJpbmcudHJpbS1yaWdodCcpO1xucmVxdWlyZSgnLi9tb2R1bGVzL2VzNy5yZWdleHAuZXNjYXBlJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3JzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcub2JqZWN0LmVudHJpZXMnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcubWFwLnRvLWpzb24nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9lczcuc2V0LnRvLWpzb24nKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy9qcy5hcnJheS5zdGF0aWNzJyk7XG5yZXF1aXJlKCcuL21vZHVsZXMvd2ViLnRpbWVycycpO1xucmVxdWlyZSgnLi9tb2R1bGVzL3dlYi5pbW1lZGlhdGUnKTtcbnJlcXVpcmUoJy4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vbW9kdWxlcy8kLmNvcmUnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvc2hpbS5qc1xuICoqIG1vZHVsZSBpZCA9IDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgJGV4cG9ydCAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBERVNDUklQVE9SUyAgICAgICA9IHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpXG4gICwgY3JlYXRlRGVzYyAgICAgICAgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpXG4gICwgaHRtbCAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZG9tLWNyZWF0ZScpXG4gICwgaGFzICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGFzJylcbiAgLCBjb2YgICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5jb2YnKVxuICAsIGludm9rZSAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmludm9rZScpXG4gICwgZmFpbHMgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZmFpbHMnKVxuICAsIGFuT2JqZWN0ICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgYUZ1bmN0aW9uICAgICAgICAgPSByZXF1aXJlKCcuLyQuYS1mdW5jdGlvbicpXG4gICwgaXNPYmplY3QgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCB0b09iamVjdCAgICAgICAgICA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKVxuICAsIHRvSU9iamVjdCAgICAgICAgID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKVxuICAsIHRvSW50ZWdlciAgICAgICAgID0gcmVxdWlyZSgnLi8kLnRvLWludGVnZXInKVxuICAsIHRvSW5kZXggICAgICAgICAgID0gcmVxdWlyZSgnLi8kLnRvLWluZGV4JylcbiAgLCB0b0xlbmd0aCAgICAgICAgICA9IHJlcXVpcmUoJy4vJC50by1sZW5ndGgnKVxuICAsIElPYmplY3QgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmlvYmplY3QnKVxuICAsIElFX1BST1RPICAgICAgICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpKCdfX3Byb3RvX18nKVxuICAsIGNyZWF0ZUFycmF5TWV0aG9kID0gcmVxdWlyZSgnLi8kLmFycmF5LW1ldGhvZHMnKVxuICAsIGFycmF5SW5kZXhPZiAgICAgID0gcmVxdWlyZSgnLi8kLmFycmF5LWluY2x1ZGVzJykoZmFsc2UpXG4gICwgT2JqZWN0UHJvdG8gICAgICAgPSBPYmplY3QucHJvdG90eXBlXG4gICwgQXJyYXlQcm90byAgICAgICAgPSBBcnJheS5wcm90b3R5cGVcbiAgLCBhcnJheVNsaWNlICAgICAgICA9IEFycmF5UHJvdG8uc2xpY2VcbiAgLCBhcnJheUpvaW4gICAgICAgICA9IEFycmF5UHJvdG8uam9pblxuICAsIGRlZmluZVByb3BlcnR5ICAgID0gJC5zZXREZXNjXG4gICwgZ2V0T3duRGVzY3JpcHRvciAgPSAkLmdldERlc2NcbiAgLCBkZWZpbmVQcm9wZXJ0aWVzICA9ICQuc2V0RGVzY3NcbiAgLCBmYWN0b3JpZXMgICAgICAgICA9IHt9XG4gICwgSUU4X0RPTV9ERUZJTkU7XG5cbmlmKCFERVNDUklQVE9SUyl7XG4gIElFOF9ET01fREVGSU5FID0gIWZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KGNlbCgnZGl2JyksICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG4gIH0pO1xuICAkLnNldERlc2MgPSBmdW5jdGlvbihPLCBQLCBBdHRyaWJ1dGVzKXtcbiAgICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgICAgcmV0dXJuIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpO1xuICAgIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgICBpZignZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgICBpZigndmFsdWUnIGluIEF0dHJpYnV0ZXMpYW5PYmplY3QoTylbUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICAgIHJldHVybiBPO1xuICB9O1xuICAkLmdldERlc2MgPSBmdW5jdGlvbihPLCBQKXtcbiAgICBpZihJRThfRE9NX0RFRklORSl0cnkge1xuICAgICAgcmV0dXJuIGdldE93bkRlc2NyaXB0b3IoTywgUCk7XG4gICAgfSBjYXRjaChlKXsgLyogZW1wdHkgKi8gfVxuICAgIGlmKGhhcyhPLCBQKSlyZXR1cm4gY3JlYXRlRGVzYyghT2JqZWN0UHJvdG8ucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChPLCBQKSwgT1tQXSk7XG4gIH07XG4gICQuc2V0RGVzY3MgPSBkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24oTywgUHJvcGVydGllcyl7XG4gICAgYW5PYmplY3QoTyk7XG4gICAgdmFyIGtleXMgICA9ICQuZ2V0S2V5cyhQcm9wZXJ0aWVzKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBpID0gMFxuICAgICAgLCBQO1xuICAgIHdoaWxlKGxlbmd0aCA+IGkpJC5zZXREZXNjKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICAgIHJldHVybiBPO1xuICB9O1xufVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhREVTQ1JJUFRPUlMsICdPYmplY3QnLCB7XG4gIC8vIDE5LjEuMi42IC8gMTUuMi4zLjMgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihPLCBQKVxuICBnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3I6ICQuZ2V0RGVzYyxcbiAgLy8gMTkuMS4yLjQgLyAxNS4yLjMuNiBPYmplY3QuZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcylcbiAgZGVmaW5lUHJvcGVydHk6ICQuc2V0RGVzYyxcbiAgLy8gMTkuMS4yLjMgLyAxNS4yLjMuNyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKVxuICBkZWZpbmVQcm9wZXJ0aWVzOiBkZWZpbmVQcm9wZXJ0aWVzXG59KTtcblxuICAvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG52YXIga2V5czEgPSAoJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsJyArXG4gICAgICAgICAgICAndG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZicpLnNwbGl0KCcsJylcbiAgLy8gQWRkaXRpb25hbCBrZXlzIGZvciBnZXRPd25Qcm9wZXJ0eU5hbWVzXG4gICwga2V5czIgPSBrZXlzMS5jb25jYXQoJ2xlbmd0aCcsICdwcm90b3R5cGUnKVxuICAsIGtleXNMZW4xID0ga2V5czEubGVuZ3RoO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbigpe1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gY2VsKCdpZnJhbWUnKVxuICAgICwgaSAgICAgID0ga2V5c0xlbjFcbiAgICAsIGd0ICAgICA9ICc+J1xuICAgICwgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICBodG1sLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKCc8c2NyaXB0PmRvY3VtZW50LkY9T2JqZWN0PC9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUoaS0tKWRlbGV0ZSBjcmVhdGVEaWN0LnByb3RvdHlwZVtrZXlzMVtpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xudmFyIGNyZWF0ZUdldEtleXMgPSBmdW5jdGlvbihuYW1lcywgbGVuZ3RoKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKG9iamVjdCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgICAsIGkgICAgICA9IDBcbiAgICAgICwgcmVzdWx0ID0gW11cbiAgICAgICwga2V5O1xuICAgIGZvcihrZXkgaW4gTylpZihrZXkgIT0gSUVfUFJPVE8paGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gICAgd2hpbGUobGVuZ3RoID4gaSlpZihoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpe1xuICAgICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG52YXIgRW1wdHkgPSBmdW5jdGlvbigpe307XG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbiAgZ2V0UHJvdG90eXBlT2Y6ICQuZ2V0UHJvdG8gPSAkLmdldFByb3RvIHx8IGZ1bmN0aW9uKE8pe1xuICAgIE8gPSB0b09iamVjdChPKTtcbiAgICBpZihoYXMoTywgSUVfUFJPVE8pKXJldHVybiBPW0lFX1BST1RPXTtcbiAgICBpZih0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKXtcbiAgICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xuICB9LFxuICAvLyAxOS4xLjIuNyAvIDE1LjIuMy40IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKE8pXG4gIGdldE93blByb3BlcnR5TmFtZXM6ICQuZ2V0TmFtZXMgPSAkLmdldE5hbWVzIHx8IGNyZWF0ZUdldEtleXMoa2V5czIsIGtleXMyLmxlbmd0aCwgdHJ1ZSksXG4gIC8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxuICBjcmVhdGU6ICQuY3JlYXRlID0gJC5jcmVhdGUgfHwgZnVuY3Rpb24oTywgLyo/Ki9Qcm9wZXJ0aWVzKXtcbiAgICB2YXIgcmVzdWx0O1xuICAgIGlmKE8gIT09IG51bGwpe1xuICAgICAgRW1wdHkucHJvdG90eXBlID0gYW5PYmplY3QoTyk7XG4gICAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICAgIEVtcHR5LnByb3RvdHlwZSA9IG51bGw7XG4gICAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHNoaW1cbiAgICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICAgIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gICAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRlZmluZVByb3BlcnRpZXMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbiAgfSxcbiAgLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG4gIGtleXM6ICQuZ2V0S2V5cyA9ICQuZ2V0S2V5cyB8fCBjcmVhdGVHZXRLZXlzKGtleXMxLCBrZXlzTGVuMSwgZmFsc2UpXG59KTtcblxudmFyIGNvbnN0cnVjdCA9IGZ1bmN0aW9uKEYsIGxlbiwgYXJncyl7XG4gIGlmKCEobGVuIGluIGZhY3Rvcmllcykpe1xuICAgIGZvcih2YXIgbiA9IFtdLCBpID0gMDsgaSA8IGxlbjsgaSsrKW5baV0gPSAnYVsnICsgaSArICddJztcbiAgICBmYWN0b3JpZXNbbGVuXSA9IEZ1bmN0aW9uKCdGLGEnLCAncmV0dXJuIG5ldyBGKCcgKyBuLmpvaW4oJywnKSArICcpJyk7XG4gIH1cbiAgcmV0dXJuIGZhY3Rvcmllc1tsZW5dKEYsIGFyZ3MpO1xufTtcblxuLy8gMTkuMi4zLjIgLyAxNS4zLjQuNSBGdW5jdGlvbi5wcm90b3R5cGUuYmluZCh0aGlzQXJnLCBhcmdzLi4uKVxuJGV4cG9ydCgkZXhwb3J0LlAsICdGdW5jdGlvbicsIHtcbiAgYmluZDogZnVuY3Rpb24gYmluZCh0aGF0IC8qLCBhcmdzLi4uICovKXtcbiAgICB2YXIgZm4gICAgICAgPSBhRnVuY3Rpb24odGhpcylcbiAgICAgICwgcGFydEFyZ3MgPSBhcnJheVNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcbiAgICB2YXIgYm91bmQgPSBmdW5jdGlvbigvKiBhcmdzLi4uICovKXtcbiAgICAgIHZhciBhcmdzID0gcGFydEFyZ3MuY29uY2F0KGFycmF5U2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgYm91bmQgPyBjb25zdHJ1Y3QoZm4sIGFyZ3MubGVuZ3RoLCBhcmdzKSA6IGludm9rZShmbiwgYXJncywgdGhhdCk7XG4gICAgfTtcbiAgICBpZihpc09iamVjdChmbi5wcm90b3R5cGUpKWJvdW5kLnByb3RvdHlwZSA9IGZuLnByb3RvdHlwZTtcbiAgICByZXR1cm4gYm91bmQ7XG4gIH1cbn0pO1xuXG4vLyBmYWxsYmFjayBmb3Igbm90IGFycmF5LWxpa2UgRVMzIHN0cmluZ3MgYW5kIERPTSBvYmplY3RzXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIGZhaWxzKGZ1bmN0aW9uKCl7XG4gIGlmKGh0bWwpYXJyYXlTbGljZS5jYWxsKGh0bWwpO1xufSksICdBcnJheScsIHtcbiAgc2xpY2U6IGZ1bmN0aW9uKGJlZ2luLCBlbmQpe1xuICAgIHZhciBsZW4gICA9IHRvTGVuZ3RoKHRoaXMubGVuZ3RoKVxuICAgICAgLCBrbGFzcyA9IGNvZih0aGlzKTtcbiAgICBlbmQgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IGVuZDtcbiAgICBpZihrbGFzcyA9PSAnQXJyYXknKXJldHVybiBhcnJheVNsaWNlLmNhbGwodGhpcywgYmVnaW4sIGVuZCk7XG4gICAgdmFyIHN0YXJ0ICA9IHRvSW5kZXgoYmVnaW4sIGxlbilcbiAgICAgICwgdXBUbyAgID0gdG9JbmRleChlbmQsIGxlbilcbiAgICAgICwgc2l6ZSAgID0gdG9MZW5ndGgodXBUbyAtIHN0YXJ0KVxuICAgICAgLCBjbG9uZWQgPSBBcnJheShzaXplKVxuICAgICAgLCBpICAgICAgPSAwO1xuICAgIGZvcig7IGkgPCBzaXplOyBpKyspY2xvbmVkW2ldID0ga2xhc3MgPT0gJ1N0cmluZydcbiAgICAgID8gdGhpcy5jaGFyQXQoc3RhcnQgKyBpKVxuICAgICAgOiB0aGlzW3N0YXJ0ICsgaV07XG4gICAgcmV0dXJuIGNsb25lZDtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChJT2JqZWN0ICE9IE9iamVjdCksICdBcnJheScsIHtcbiAgam9pbjogZnVuY3Rpb24gam9pbihzZXBhcmF0b3Ipe1xuICAgIHJldHVybiBhcnJheUpvaW4uY2FsbChJT2JqZWN0KHRoaXMpLCBzZXBhcmF0b3IgPT09IHVuZGVmaW5lZCA/ICcsJyA6IHNlcGFyYXRvcik7XG4gIH1cbn0pO1xuXG4vLyAyMi4xLjIuMiAvIDE1LjQuMy4yIEFycmF5LmlzQXJyYXkoYXJnKVxuJGV4cG9ydCgkZXhwb3J0LlMsICdBcnJheScsIHtpc0FycmF5OiByZXF1aXJlKCcuLyQuaXMtYXJyYXknKX0pO1xuXG52YXIgY3JlYXRlQXJyYXlSZWR1Y2UgPSBmdW5jdGlvbihpc1JpZ2h0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uKGNhbGxiYWNrZm4sIG1lbW8pe1xuICAgIGFGdW5jdGlvbihjYWxsYmFja2ZuKTtcbiAgICB2YXIgTyAgICAgID0gSU9iamVjdCh0aGlzKVxuICAgICAgLCBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAgICwgaW5kZXggID0gaXNSaWdodCA/IGxlbmd0aCAtIDEgOiAwXG4gICAgICAsIGkgICAgICA9IGlzUmlnaHQgPyAtMSA6IDE7XG4gICAgaWYoYXJndW1lbnRzLmxlbmd0aCA8IDIpZm9yKDs7KXtcbiAgICAgIGlmKGluZGV4IGluIE8pe1xuICAgICAgICBtZW1vID0gT1tpbmRleF07XG4gICAgICAgIGluZGV4ICs9IGk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaW5kZXggKz0gaTtcbiAgICAgIGlmKGlzUmlnaHQgPyBpbmRleCA8IDAgOiBsZW5ndGggPD0gaW5kZXgpe1xuICAgICAgICB0aHJvdyBUeXBlRXJyb3IoJ1JlZHVjZSBvZiBlbXB0eSBhcnJheSB3aXRoIG5vIGluaXRpYWwgdmFsdWUnKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZm9yKDtpc1JpZ2h0ID8gaW5kZXggPj0gMCA6IGxlbmd0aCA+IGluZGV4OyBpbmRleCArPSBpKWlmKGluZGV4IGluIE8pe1xuICAgICAgbWVtbyA9IGNhbGxiYWNrZm4obWVtbywgT1tpbmRleF0sIGluZGV4LCB0aGlzKTtcbiAgICB9XG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59O1xuXG52YXIgbWV0aG9kaXplID0gZnVuY3Rpb24oJGZuKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKGFyZzEvKiwgYXJnMiA9IHVuZGVmaW5lZCAqLyl7XG4gICAgcmV0dXJuICRmbih0aGlzLCBhcmcxLCBhcmd1bWVudHNbMV0pO1xuICB9O1xufTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHtcbiAgLy8gMjIuMS4zLjEwIC8gMTUuNC40LjE4IEFycmF5LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gIGZvckVhY2g6ICQuZWFjaCA9ICQuZWFjaCB8fCBtZXRob2RpemUoY3JlYXRlQXJyYXlNZXRob2QoMCkpLFxuICAvLyAyMi4xLjMuMTUgLyAxNS40LjQuMTkgQXJyYXkucHJvdG90eXBlLm1hcChjYWxsYmFja2ZuIFssIHRoaXNBcmddKVxuICBtYXA6IG1ldGhvZGl6ZShjcmVhdGVBcnJheU1ldGhvZCgxKSksXG4gIC8vIDIyLjEuMy43IC8gMTUuNC40LjIwIEFycmF5LnByb3RvdHlwZS5maWx0ZXIoY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcbiAgZmlsdGVyOiBtZXRob2RpemUoY3JlYXRlQXJyYXlNZXRob2QoMikpLFxuICAvLyAyMi4xLjMuMjMgLyAxNS40LjQuMTcgQXJyYXkucHJvdG90eXBlLnNvbWUoY2FsbGJhY2tmbiBbLCB0aGlzQXJnXSlcbiAgc29tZTogbWV0aG9kaXplKGNyZWF0ZUFycmF5TWV0aG9kKDMpKSxcbiAgLy8gMjIuMS4zLjUgLyAxNS40LjQuMTYgQXJyYXkucHJvdG90eXBlLmV2ZXJ5KGNhbGxiYWNrZm4gWywgdGhpc0FyZ10pXG4gIGV2ZXJ5OiBtZXRob2RpemUoY3JlYXRlQXJyYXlNZXRob2QoNCkpLFxuICAvLyAyMi4xLjMuMTggLyAxNS40LjQuMjEgQXJyYXkucHJvdG90eXBlLnJlZHVjZShjYWxsYmFja2ZuIFssIGluaXRpYWxWYWx1ZV0pXG4gIHJlZHVjZTogY3JlYXRlQXJyYXlSZWR1Y2UoZmFsc2UpLFxuICAvLyAyMi4xLjMuMTkgLyAxNS40LjQuMjIgQXJyYXkucHJvdG90eXBlLnJlZHVjZVJpZ2h0KGNhbGxiYWNrZm4gWywgaW5pdGlhbFZhbHVlXSlcbiAgcmVkdWNlUmlnaHQ6IGNyZWF0ZUFycmF5UmVkdWNlKHRydWUpLFxuICAvLyAyMi4xLjMuMTEgLyAxNS40LjQuMTQgQXJyYXkucHJvdG90eXBlLmluZGV4T2Yoc2VhcmNoRWxlbWVudCBbLCBmcm9tSW5kZXhdKVxuICBpbmRleE9mOiBtZXRob2RpemUoYXJyYXlJbmRleE9mKSxcbiAgLy8gMjIuMS4zLjE0IC8gMTUuNC40LjE1IEFycmF5LnByb3RvdHlwZS5sYXN0SW5kZXhPZihzZWFyY2hFbGVtZW50IFssIGZyb21JbmRleF0pXG4gIGxhc3RJbmRleE9mOiBmdW5jdGlvbihlbCwgZnJvbUluZGV4IC8qID0gQFsqLTFdICovKXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KHRoaXMpXG4gICAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICAgLCBpbmRleCAgPSBsZW5ndGggLSAxO1xuICAgIGlmKGFyZ3VtZW50cy5sZW5ndGggPiAxKWluZGV4ID0gTWF0aC5taW4oaW5kZXgsIHRvSW50ZWdlcihmcm9tSW5kZXgpKTtcbiAgICBpZihpbmRleCA8IDApaW5kZXggPSB0b0xlbmd0aChsZW5ndGggKyBpbmRleCk7XG4gICAgZm9yKDtpbmRleCA+PSAwOyBpbmRleC0tKWlmKGluZGV4IGluIE8paWYoT1tpbmRleF0gPT09IGVsKXJldHVybiBpbmRleDtcbiAgICByZXR1cm4gLTE7XG4gIH1cbn0pO1xuXG4vLyAyMC4zLjMuMSAvIDE1LjkuNC40IERhdGUubm93KClcbiRleHBvcnQoJGV4cG9ydC5TLCAnRGF0ZScsIHtub3c6IGZ1bmN0aW9uKCl7IHJldHVybiArbmV3IERhdGU7IH19KTtcblxudmFyIGx6ID0gZnVuY3Rpb24obnVtKXtcbiAgcmV0dXJuIG51bSA+IDkgPyBudW0gOiAnMCcgKyBudW07XG59O1xuXG4vLyAyMC4zLjQuMzYgLyAxNS45LjUuNDMgRGF0ZS5wcm90b3R5cGUudG9JU09TdHJpbmcoKVxuLy8gUGhhbnRvbUpTIC8gb2xkIFdlYktpdCBoYXMgYSBicm9rZW4gaW1wbGVtZW50YXRpb25zXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gbmV3IERhdGUoLTVlMTMgLSAxKS50b0lTT1N0cmluZygpICE9ICcwMzg1LTA3LTI1VDA3OjA2OjM5Ljk5OVonO1xufSkgfHwgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gIG5ldyBEYXRlKE5hTikudG9JU09TdHJpbmcoKTtcbn0pKSwgJ0RhdGUnLCB7XG4gIHRvSVNPU3RyaW5nOiBmdW5jdGlvbiB0b0lTT1N0cmluZygpe1xuICAgIGlmKCFpc0Zpbml0ZSh0aGlzKSl0aHJvdyBSYW5nZUVycm9yKCdJbnZhbGlkIHRpbWUgdmFsdWUnKTtcbiAgICB2YXIgZCA9IHRoaXNcbiAgICAgICwgeSA9IGQuZ2V0VVRDRnVsbFllYXIoKVxuICAgICAgLCBtID0gZC5nZXRVVENNaWxsaXNlY29uZHMoKVxuICAgICAgLCBzID0geSA8IDAgPyAnLScgOiB5ID4gOTk5OSA/ICcrJyA6ICcnO1xuICAgIHJldHVybiBzICsgKCcwMDAwMCcgKyBNYXRoLmFicyh5KSkuc2xpY2UocyA/IC02IDogLTQpICtcbiAgICAgICctJyArIGx6KGQuZ2V0VVRDTW9udGgoKSArIDEpICsgJy0nICsgbHooZC5nZXRVVENEYXRlKCkpICtcbiAgICAgICdUJyArIGx6KGQuZ2V0VVRDSG91cnMoKSkgKyAnOicgKyBseihkLmdldFVUQ01pbnV0ZXMoKSkgK1xuICAgICAgJzonICsgbHooZC5nZXRVVENTZWNvbmRzKCkpICsgJy4nICsgKG0gPiA5OSA/IG0gOiAnMCcgKyBseihtKSkgKyAnWic7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNS5qc1xuICoqIG1vZHVsZSBpZCA9IDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkT2JqZWN0ID0gT2JqZWN0O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIGNyZWF0ZTogICAgICRPYmplY3QuY3JlYXRlLFxuICBnZXRQcm90bzogICAkT2JqZWN0LmdldFByb3RvdHlwZU9mLFxuICBpc0VudW06ICAgICB7fS5wcm9wZXJ0eUlzRW51bWVyYWJsZSxcbiAgZ2V0RGVzYzogICAgJE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IsXG4gIHNldERlc2M6ICAgICRPYmplY3QuZGVmaW5lUHJvcGVydHksXG4gIHNldERlc2NzOiAgICRPYmplY3QuZGVmaW5lUHJvcGVydGllcyxcbiAgZ2V0S2V5czogICAgJE9iamVjdC5rZXlzLFxuICBnZXROYW1lczogICAkT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMsXG4gIGdldFN5bWJvbHM6ICRPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzLFxuICBlYWNoOiAgICAgICBbXS5mb3JFYWNoXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuanNcbiAqKiBtb2R1bGUgaWQgPSA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgY29yZSAgICAgID0gcmVxdWlyZSgnLi8kLmNvcmUnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vJC5oaWRlJylcbiAgLCByZWRlZmluZSAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKVxuICAsIGN0eCAgICAgICA9IHJlcXVpcmUoJy4vJC5jdHgnKVxuICAsIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uKHR5cGUsIG5hbWUsIHNvdXJjZSl7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GXG4gICAgLCBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HXG4gICAgLCBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TXG4gICAgLCBJU19QUk9UTyAgPSB0eXBlICYgJGV4cG9ydC5QXG4gICAgLCBJU19CSU5EICAgPSB0eXBlICYgJGV4cG9ydC5CXG4gICAgLCB0YXJnZXQgICAgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV1cbiAgICAsIGV4cG9ydHMgICA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pXG4gICAgLCBleHBQcm90byAgPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KVxuICAgICwga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZihJU19HTE9CQUwpc291cmNlID0gbmFtZTtcbiAgZm9yKGtleSBpbiBzb3VyY2Upe1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIGtleSBpbiB0YXJnZXQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmKHRhcmdldCAmJiAhb3duKXJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmKGV4cG9ydHNba2V5XSAhPSBvdXQpaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgLy8gd3JhcFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZXhwb3J0LmpzXG4gKiogbW9kdWxlIGlkID0gNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZiA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZih0eXBlb2YgX19nID09ICdudW1iZXInKV9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZ2xvYmFsLmpzXG4gKiogbW9kdWxlIGlkID0gNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHt2ZXJzaW9uOiAnMS4yLjYnfTtcbmlmKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY29yZS5qc1xuICoqIG1vZHVsZSBpZCA9IDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJykgPyBmdW5jdGlvbihvYmplY3QsIGtleSwgdmFsdWUpe1xuICByZXR1cm4gJC5zZXREZXNjKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24ob2JqZWN0LCBrZXksIHZhbHVlKXtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5oaWRlLmpzXG4gKiogbW9kdWxlIGlkID0gOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihiaXRtYXAsIHZhbHVlKXtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlICA6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlICAgIDogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZSAgICAgICA6IHZhbHVlXG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQucHJvcGVydHktZGVzYy5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vJC5mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywge2dldDogZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH19KS5hICE9IDc7XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmRlc2NyaXB0b3JzLmpzXG4gKiogbW9kdWxlIGlkID0gMTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oZXhlYyl7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoKGUpe1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZmFpbHMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmdcbi8vIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxudmFyIGdsb2JhbCAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGhpZGUgICAgICA9IHJlcXVpcmUoJy4vJC5oaWRlJylcbiAgLCBTUkMgICAgICAgPSByZXF1aXJlKCcuLyQudWlkJykoJ3NyYycpXG4gICwgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJ1xuICAsICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR11cbiAgLCBUUEwgICAgICAgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vJC5jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE8sIGtleSwgdmFsLCBzYWZlKXtcbiAgaWYodHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nKXtcbiAgICB2YWwuaGFzT3duUHJvcGVydHkoU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gICAgdmFsLmhhc093blByb3BlcnR5KCduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgfVxuICBpZihPID09PSBnbG9iYWwpe1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBpZighc2FmZSlkZWxldGUgT1trZXldO1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5yZWRlZmluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaWQgPSAwXG4gICwgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihrZXkpe1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnVpZC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLyQuYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihmbiwgdGhhdCwgbGVuZ3RoKXtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYodGhhdCA9PT0gdW5kZWZpbmVkKXJldHVybiBmbjtcbiAgc3dpdGNoKGxlbmd0aCl7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24oYSl7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbihhLCBiLCBjKXtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmN0eC5qc1xuICoqIG1vZHVsZSBpZCA9IDE0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmEtZnVuY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJykuZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaHRtbC5qc1xuICoqIG1vZHVsZSBpZCA9IDE2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBkb2N1bWVudCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKS5kb2N1bWVudFxuICAvLyBpbiBvbGQgSUUgdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCdcbiAgLCBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmRvbS1jcmVhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXMtb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwga2V5KXtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaGFzLmpzXG4gKiogbW9kdWxlIGlkID0gMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5jb2YuanNcbiAqKiBtb2R1bGUgaWQgPSAyMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGZuLCBhcmdzLCB0aGF0KXtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2goYXJncy5sZW5ndGgpe1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiAgICAgICAgICAgICAgZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaW52b2tlLmpzXG4gKiogbW9kdWxlIGlkID0gMjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICBpZighaXNPYmplY3QoaXQpKXRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmFuLW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDIyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQudG8tb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgaWYoaXQgPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmRlZmluZWQuanNcbiAqKiBtb2R1bGUgaWQgPSAyNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vJC5pb2JqZWN0JylcbiAgLCBkZWZpbmVkID0gcmVxdWlyZSgnLi8kLmRlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQudG8taW9iamVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDI1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5pb2JqZWN0LmpzXG4gKiogbW9kdWxlIGlkID0gMjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgID0gTWF0aC5jZWlsXG4gICwgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCl7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnRvLWludGVnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAyN1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vJC50by1pbnRlZ2VyJylcbiAgLCBtYXggICAgICAgPSBNYXRoLm1heFxuICAsIG1pbiAgICAgICA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpbmRleCwgbGVuZ3RoKXtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC50by1pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDI4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuLyQudG8taW50ZWdlcicpXG4gICwgbWluICAgICAgID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC50by1sZW5ndGguanNcbiAqKiBtb2R1bGUgaWQgPSAyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMCAtPiBBcnJheSNmb3JFYWNoXG4vLyAxIC0+IEFycmF5I21hcFxuLy8gMiAtPiBBcnJheSNmaWx0ZXJcbi8vIDMgLT4gQXJyYXkjc29tZVxuLy8gNCAtPiBBcnJheSNldmVyeVxuLy8gNSAtPiBBcnJheSNmaW5kXG4vLyA2IC0+IEFycmF5I2ZpbmRJbmRleFxudmFyIGN0eCAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgSU9iamVjdCAgPSByZXF1aXJlKCcuLyQuaW9iamVjdCcpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0JylcbiAgLCB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vJC50by1sZW5ndGgnKVxuICAsIGFzYyAgICAgID0gcmVxdWlyZSgnLi8kLmFycmF5LXNwZWNpZXMtY3JlYXRlJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKFRZUEUpe1xuICB2YXIgSVNfTUFQICAgICAgICA9IFRZUEUgPT0gMVxuICAgICwgSVNfRklMVEVSICAgICA9IFRZUEUgPT0gMlxuICAgICwgSVNfU09NRSAgICAgICA9IFRZUEUgPT0gM1xuICAgICwgSVNfRVZFUlkgICAgICA9IFRZUEUgPT0gNFxuICAgICwgSVNfRklORF9JTkRFWCA9IFRZUEUgPT0gNlxuICAgICwgTk9fSE9MRVMgICAgICA9IFRZUEUgPT0gNSB8fCBJU19GSU5EX0lOREVYO1xuICByZXR1cm4gZnVuY3Rpb24oJHRoaXMsIGNhbGxiYWNrZm4sIHRoYXQpe1xuICAgIHZhciBPICAgICAgPSB0b09iamVjdCgkdGhpcylcbiAgICAgICwgc2VsZiAgID0gSU9iamVjdChPKVxuICAgICAgLCBmICAgICAgPSBjdHgoY2FsbGJhY2tmbiwgdGhhdCwgMylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoc2VsZi5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IDBcbiAgICAgICwgcmVzdWx0ID0gSVNfTUFQID8gYXNjKCR0aGlzLCBsZW5ndGgpIDogSVNfRklMVEVSID8gYXNjKCR0aGlzLCAwKSA6IHVuZGVmaW5lZFxuICAgICAgLCB2YWwsIHJlcztcbiAgICBmb3IoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKWlmKE5PX0hPTEVTIHx8IGluZGV4IGluIHNlbGYpe1xuICAgICAgdmFsID0gc2VsZltpbmRleF07XG4gICAgICByZXMgPSBmKHZhbCwgaW5kZXgsIE8pO1xuICAgICAgaWYoVFlQRSl7XG4gICAgICAgIGlmKElTX01BUClyZXN1bHRbaW5kZXhdID0gcmVzOyAgICAgICAgICAgIC8vIG1hcFxuICAgICAgICBlbHNlIGlmKHJlcylzd2l0Y2goVFlQRSl7XG4gICAgICAgICAgY2FzZSAzOiByZXR1cm4gdHJ1ZTsgICAgICAgICAgICAgICAgICAgIC8vIHNvbWVcbiAgICAgICAgICBjYXNlIDU6IHJldHVybiB2YWw7ICAgICAgICAgICAgICAgICAgICAgLy8gZmluZFxuICAgICAgICAgIGNhc2UgNjogcmV0dXJuIGluZGV4OyAgICAgICAgICAgICAgICAgICAvLyBmaW5kSW5kZXhcbiAgICAgICAgICBjYXNlIDI6IHJlc3VsdC5wdXNoKHZhbCk7ICAgICAgICAgICAgICAgLy8gZmlsdGVyXG4gICAgICAgIH0gZWxzZSBpZihJU19FVkVSWSlyZXR1cm4gZmFsc2U7ICAgICAgICAgIC8vIGV2ZXJ5XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBJU19GSU5EX0lOREVYID8gLTEgOiBJU19TT01FIHx8IElTX0VWRVJZID8gSVNfRVZFUlkgOiByZXN1bHQ7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYXJyYXktbWV0aG9kcy5qc1xuICoqIG1vZHVsZSBpZCA9IDMwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA5LjQuMi4zIEFycmF5U3BlY2llc0NyZWF0ZShvcmlnaW5hbEFycmF5LCBsZW5ndGgpXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBpc0FycmF5ICA9IHJlcXVpcmUoJy4vJC5pcy1hcnJheScpXG4gICwgU1BFQ0lFUyAgPSByZXF1aXJlKCcuLyQud2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ob3JpZ2luYWwsIGxlbmd0aCl7XG4gIHZhciBDO1xuICBpZihpc0FycmF5KG9yaWdpbmFsKSl7XG4gICAgQyA9IG9yaWdpbmFsLmNvbnN0cnVjdG9yO1xuICAgIC8vIGNyb3NzLXJlYWxtIGZhbGxiYWNrXG4gICAgaWYodHlwZW9mIEMgPT0gJ2Z1bmN0aW9uJyAmJiAoQyA9PT0gQXJyYXkgfHwgaXNBcnJheShDLnByb3RvdHlwZSkpKUMgPSB1bmRlZmluZWQ7XG4gICAgaWYoaXNPYmplY3QoQykpe1xuICAgICAgQyA9IENbU1BFQ0lFU107XG4gICAgICBpZihDID09PSBudWxsKUMgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9IHJldHVybiBuZXcgKEMgPT09IHVuZGVmaW5lZCA/IEFycmF5IDogQykobGVuZ3RoKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5hcnJheS1zcGVjaWVzLWNyZWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjIuMiBJc0FycmF5KGFyZ3VtZW50KVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vJC5jb2YnKTtcbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbihhcmcpe1xuICByZXR1cm4gY29mKGFyZykgPT0gJ0FycmF5Jztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5pcy1hcnJheS5qc1xuICoqIG1vZHVsZSBpZCA9IDMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgc3RvcmUgID0gcmVxdWlyZSgnLi8kLnNoYXJlZCcpKCd3a3MnKVxuICAsIHVpZCAgICA9IHJlcXVpcmUoJy4vJC51aWQnKVxuICAsIFN5bWJvbCA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKS5TeW1ib2w7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG5hbWUpe1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBTeW1ib2wgJiYgU3ltYm9sW25hbWVdIHx8IChTeW1ib2wgfHwgdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQud2tzLmpzXG4gKiogbW9kdWxlIGlkID0gMzNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJ1xuICAsIHN0b3JlICA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuc2hhcmVkLmpzXG4gKiogbW9kdWxlIGlkID0gMzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKVxuICAsIHRvTGVuZ3RoICA9IHJlcXVpcmUoJy4vJC50by1sZW5ndGgnKVxuICAsIHRvSW5kZXggICA9IHJlcXVpcmUoJy4vJC50by1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihJU19JTkNMVURFUyl7XG4gIHJldHVybiBmdW5jdGlvbigkdGhpcywgZWwsIGZyb21JbmRleCl7XG4gICAgdmFyIE8gICAgICA9IHRvSU9iamVjdCgkdGhpcylcbiAgICAgICwgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpXG4gICAgICAsIGluZGV4ICA9IHRvSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpXG4gICAgICAsIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICBpZihJU19JTkNMVURFUyAmJiBlbCAhPSBlbCl3aGlsZShsZW5ndGggPiBpbmRleCl7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICBpZih2YWx1ZSAhPSB2YWx1ZSlyZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSN0b0luZGV4IGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvcig7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspaWYoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTyl7XG4gICAgICBpZihPW2luZGV4XSA9PT0gZWwpcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4O1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5hcnJheS1pbmNsdWRlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDM1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBFQ01BU2NyaXB0IDYgc3ltYm9scyBzaGltXG52YXIgJCAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGdsb2JhbCAgICAgICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgaGFzICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGFzJylcbiAgLCBERVNDUklQVE9SUyAgICA9IHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpXG4gICwgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCByZWRlZmluZSAgICAgICA9IHJlcXVpcmUoJy4vJC5yZWRlZmluZScpXG4gICwgJGZhaWxzICAgICAgICAgPSByZXF1aXJlKCcuLyQuZmFpbHMnKVxuICAsIHNoYXJlZCAgICAgICAgID0gcmVxdWlyZSgnLi8kLnNoYXJlZCcpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIHVpZCAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpXG4gICwgd2tzICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQud2tzJylcbiAgLCBrZXlPZiAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5rZXlvZicpXG4gICwgJG5hbWVzICAgICAgICAgPSByZXF1aXJlKCcuLyQuZ2V0LW5hbWVzJylcbiAgLCBlbnVtS2V5cyAgICAgICA9IHJlcXVpcmUoJy4vJC5lbnVtLWtleXMnKVxuICAsIGlzQXJyYXkgICAgICAgID0gcmVxdWlyZSgnLi8kLmlzLWFycmF5JylcbiAgLCBhbk9iamVjdCAgICAgICA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIHRvSU9iamVjdCAgICAgID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKVxuICAsIGNyZWF0ZURlc2MgICAgID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKVxuICAsIGdldERlc2MgICAgICAgID0gJC5nZXREZXNjXG4gICwgc2V0RGVzYyAgICAgICAgPSAkLnNldERlc2NcbiAgLCBfY3JlYXRlICAgICAgICA9ICQuY3JlYXRlXG4gICwgZ2V0TmFtZXMgICAgICAgPSAkbmFtZXMuZ2V0XG4gICwgJFN5bWJvbCAgICAgICAgPSBnbG9iYWwuU3ltYm9sXG4gICwgJEpTT04gICAgICAgICAgPSBnbG9iYWwuSlNPTlxuICAsIF9zdHJpbmdpZnkgICAgID0gJEpTT04gJiYgJEpTT04uc3RyaW5naWZ5XG4gICwgc2V0dGVyICAgICAgICAgPSBmYWxzZVxuICAsIEhJRERFTiAgICAgICAgID0gd2tzKCdfaGlkZGVuJylcbiAgLCBpc0VudW0gICAgICAgICA9ICQuaXNFbnVtXG4gICwgU3ltYm9sUmVnaXN0cnkgPSBzaGFyZWQoJ3N5bWJvbC1yZWdpc3RyeScpXG4gICwgQWxsU3ltYm9scyAgICAgPSBzaGFyZWQoJ3N5bWJvbHMnKVxuICAsIHVzZU5hdGl2ZSAgICAgID0gdHlwZW9mICRTeW1ib2wgPT0gJ2Z1bmN0aW9uJ1xuICAsIE9iamVjdFByb3RvICAgID0gT2JqZWN0LnByb3RvdHlwZTtcblxuLy8gZmFsbGJhY2sgZm9yIG9sZCBBbmRyb2lkLCBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL3Y4L2lzc3Vlcy9kZXRhaWw/aWQ9Njg3XG52YXIgc2V0U3ltYm9sRGVzYyA9IERFU0NSSVBUT1JTICYmICRmYWlscyhmdW5jdGlvbigpe1xuICByZXR1cm4gX2NyZWF0ZShzZXREZXNjKHt9LCAnYScsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uKCl7IHJldHVybiBzZXREZXNjKHRoaXMsICdhJywge3ZhbHVlOiA3fSkuYTsgfVxuICB9KSkuYSAhPSA3O1xufSkgPyBmdW5jdGlvbihpdCwga2V5LCBEKXtcbiAgdmFyIHByb3RvRGVzYyA9IGdldERlc2MoT2JqZWN0UHJvdG8sIGtleSk7XG4gIGlmKHByb3RvRGVzYylkZWxldGUgT2JqZWN0UHJvdG9ba2V5XTtcbiAgc2V0RGVzYyhpdCwga2V5LCBEKTtcbiAgaWYocHJvdG9EZXNjICYmIGl0ICE9PSBPYmplY3RQcm90bylzZXREZXNjKE9iamVjdFByb3RvLCBrZXksIHByb3RvRGVzYyk7XG59IDogc2V0RGVzYztcblxudmFyIHdyYXAgPSBmdW5jdGlvbih0YWcpe1xuICB2YXIgc3ltID0gQWxsU3ltYm9sc1t0YWddID0gX2NyZWF0ZSgkU3ltYm9sLnByb3RvdHlwZSk7XG4gIHN5bS5fayA9IHRhZztcbiAgREVTQ1JJUFRPUlMgJiYgc2V0dGVyICYmIHNldFN5bWJvbERlc2MoT2JqZWN0UHJvdG8sIHRhZywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBzZXQ6IGZ1bmN0aW9uKHZhbHVlKXtcbiAgICAgIGlmKGhhcyh0aGlzLCBISURERU4pICYmIGhhcyh0aGlzW0hJRERFTl0sIHRhZykpdGhpc1tISURERU5dW3RhZ10gPSBmYWxzZTtcbiAgICAgIHNldFN5bWJvbERlc2ModGhpcywgdGFnLCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHN5bTtcbn07XG5cbnZhciBpc1N5bWJvbCA9IGZ1bmN0aW9uKGl0KXtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PSAnc3ltYm9sJztcbn07XG5cbnZhciAkZGVmaW5lUHJvcGVydHkgPSBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShpdCwga2V5LCBEKXtcbiAgaWYoRCAmJiBoYXMoQWxsU3ltYm9scywga2V5KSl7XG4gICAgaWYoIUQuZW51bWVyYWJsZSl7XG4gICAgICBpZighaGFzKGl0LCBISURERU4pKXNldERlc2MoaXQsIEhJRERFTiwgY3JlYXRlRGVzYygxLCB7fSkpO1xuICAgICAgaXRbSElEREVOXVtrZXldID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSlpdFtISURERU5dW2tleV0gPSBmYWxzZTtcbiAgICAgIEQgPSBfY3JlYXRlKEQsIHtlbnVtZXJhYmxlOiBjcmVhdGVEZXNjKDAsIGZhbHNlKX0pO1xuICAgIH0gcmV0dXJuIHNldFN5bWJvbERlc2MoaXQsIGtleSwgRCk7XG4gIH0gcmV0dXJuIHNldERlc2MoaXQsIGtleSwgRCk7XG59O1xudmFyICRkZWZpbmVQcm9wZXJ0aWVzID0gZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhpdCwgUCl7XG4gIGFuT2JqZWN0KGl0KTtcbiAgdmFyIGtleXMgPSBlbnVtS2V5cyhQID0gdG9JT2JqZWN0KFApKVxuICAgICwgaSAgICA9IDBcbiAgICAsIGwgPSBrZXlzLmxlbmd0aFxuICAgICwga2V5O1xuICB3aGlsZShsID4gaSkkZGVmaW5lUHJvcGVydHkoaXQsIGtleSA9IGtleXNbaSsrXSwgUFtrZXldKTtcbiAgcmV0dXJuIGl0O1xufTtcbnZhciAkY3JlYXRlID0gZnVuY3Rpb24gY3JlYXRlKGl0LCBQKXtcbiAgcmV0dXJuIFAgPT09IHVuZGVmaW5lZCA/IF9jcmVhdGUoaXQpIDogJGRlZmluZVByb3BlcnRpZXMoX2NyZWF0ZShpdCksIFApO1xufTtcbnZhciAkcHJvcGVydHlJc0VudW1lcmFibGUgPSBmdW5jdGlvbiBwcm9wZXJ0eUlzRW51bWVyYWJsZShrZXkpe1xuICB2YXIgRSA9IGlzRW51bS5jYWxsKHRoaXMsIGtleSk7XG4gIHJldHVybiBFIHx8ICFoYXModGhpcywga2V5KSB8fCAhaGFzKEFsbFN5bWJvbHMsIGtleSkgfHwgaGFzKHRoaXMsIEhJRERFTikgJiYgdGhpc1tISURERU5dW2tleV1cbiAgICA/IEUgOiB0cnVlO1xufTtcbnZhciAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGl0LCBrZXkpe1xuICB2YXIgRCA9IGdldERlc2MoaXQgPSB0b0lPYmplY3QoaXQpLCBrZXkpO1xuICBpZihEICYmIGhhcyhBbGxTeW1ib2xzLCBrZXkpICYmICEoaGFzKGl0LCBISURERU4pICYmIGl0W0hJRERFTl1ba2V5XSkpRC5lbnVtZXJhYmxlID0gdHJ1ZTtcbiAgcmV0dXJuIEQ7XG59O1xudmFyICRnZXRPd25Qcm9wZXJ0eU5hbWVzID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnZXROYW1lcyh0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZighaGFzKEFsbFN5bWJvbHMsIGtleSA9IG5hbWVzW2krK10pICYmIGtleSAhPSBISURERU4pcmVzdWx0LnB1c2goa2V5KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJGdldE93blByb3BlcnR5U3ltYm9scyA9IGZ1bmN0aW9uIGdldE93blByb3BlcnR5U3ltYm9scyhpdCl7XG4gIHZhciBuYW1lcyAgPSBnZXROYW1lcyh0b0lPYmplY3QoaXQpKVxuICAgICwgcmVzdWx0ID0gW11cbiAgICAsIGkgICAgICA9IDBcbiAgICAsIGtleTtcbiAgd2hpbGUobmFtZXMubGVuZ3RoID4gaSlpZihoYXMoQWxsU3ltYm9scywga2V5ID0gbmFtZXNbaSsrXSkpcmVzdWx0LnB1c2goQWxsU3ltYm9sc1trZXldKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn07XG52YXIgJHN0cmluZ2lmeSA9IGZ1bmN0aW9uIHN0cmluZ2lmeShpdCl7XG4gIGlmKGl0ID09PSB1bmRlZmluZWQgfHwgaXNTeW1ib2woaXQpKXJldHVybjsgLy8gSUU4IHJldHVybnMgc3RyaW5nIG9uIHVuZGVmaW5lZFxuICB2YXIgYXJncyA9IFtpdF1cbiAgICAsIGkgICAgPSAxXG4gICAgLCAkJCAgID0gYXJndW1lbnRzXG4gICAgLCByZXBsYWNlciwgJHJlcGxhY2VyO1xuICB3aGlsZSgkJC5sZW5ndGggPiBpKWFyZ3MucHVzaCgkJFtpKytdKTtcbiAgcmVwbGFjZXIgPSBhcmdzWzFdO1xuICBpZih0eXBlb2YgcmVwbGFjZXIgPT0gJ2Z1bmN0aW9uJykkcmVwbGFjZXIgPSByZXBsYWNlcjtcbiAgaWYoJHJlcGxhY2VyIHx8ICFpc0FycmF5KHJlcGxhY2VyKSlyZXBsYWNlciA9IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgIGlmKCRyZXBsYWNlcil2YWx1ZSA9ICRyZXBsYWNlci5jYWxsKHRoaXMsIGtleSwgdmFsdWUpO1xuICAgIGlmKCFpc1N5bWJvbCh2YWx1ZSkpcmV0dXJuIHZhbHVlO1xuICB9O1xuICBhcmdzWzFdID0gcmVwbGFjZXI7XG4gIHJldHVybiBfc3RyaW5naWZ5LmFwcGx5KCRKU09OLCBhcmdzKTtcbn07XG52YXIgYnVnZ3lKU09OID0gJGZhaWxzKGZ1bmN0aW9uKCl7XG4gIHZhciBTID0gJFN5bWJvbCgpO1xuICAvLyBNUyBFZGdlIGNvbnZlcnRzIHN5bWJvbCB2YWx1ZXMgdG8gSlNPTiBhcyB7fVxuICAvLyBXZWJLaXQgY29udmVydHMgc3ltYm9sIHZhbHVlcyB0byBKU09OIGFzIG51bGxcbiAgLy8gVjggdGhyb3dzIG9uIGJveGVkIHN5bWJvbHNcbiAgcmV0dXJuIF9zdHJpbmdpZnkoW1NdKSAhPSAnW251bGxdJyB8fCBfc3RyaW5naWZ5KHthOiBTfSkgIT0gJ3t9JyB8fCBfc3RyaW5naWZ5KE9iamVjdChTKSkgIT0gJ3t9Jztcbn0pO1xuXG4vLyAxOS40LjEuMSBTeW1ib2woW2Rlc2NyaXB0aW9uXSlcbmlmKCF1c2VOYXRpdmUpe1xuICAkU3ltYm9sID0gZnVuY3Rpb24gU3ltYm9sKCl7XG4gICAgaWYoaXNTeW1ib2wodGhpcykpdGhyb3cgVHlwZUVycm9yKCdTeW1ib2wgaXMgbm90IGEgY29uc3RydWN0b3InKTtcbiAgICByZXR1cm4gd3JhcCh1aWQoYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpKTtcbiAgfTtcbiAgcmVkZWZpbmUoJFN5bWJvbC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCl7XG4gICAgcmV0dXJuIHRoaXMuX2s7XG4gIH0pO1xuXG4gIGlzU3ltYm9sID0gZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiBpdCBpbnN0YW5jZW9mICRTeW1ib2w7XG4gIH07XG5cbiAgJC5jcmVhdGUgICAgID0gJGNyZWF0ZTtcbiAgJC5pc0VudW0gICAgID0gJHByb3BlcnR5SXNFbnVtZXJhYmxlO1xuICAkLmdldERlc2MgICAgPSAkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAkLnNldERlc2MgICAgPSAkZGVmaW5lUHJvcGVydHk7XG4gICQuc2V0RGVzY3MgICA9ICRkZWZpbmVQcm9wZXJ0aWVzO1xuICAkLmdldE5hbWVzICAgPSAkbmFtZXMuZ2V0ID0gJGdldE93blByb3BlcnR5TmFtZXM7XG4gICQuZ2V0U3ltYm9scyA9ICRnZXRPd25Qcm9wZXJ0eVN5bWJvbHM7XG5cbiAgaWYoREVTQ1JJUFRPUlMgJiYgIXJlcXVpcmUoJy4vJC5saWJyYXJ5Jykpe1xuICAgIHJlZGVmaW5lKE9iamVjdFByb3RvLCAncHJvcGVydHlJc0VudW1lcmFibGUnLCAkcHJvcGVydHlJc0VudW1lcmFibGUsIHRydWUpO1xuICB9XG59XG5cbnZhciBzeW1ib2xTdGF0aWNzID0ge1xuICAvLyAxOS40LjIuMSBTeW1ib2wuZm9yKGtleSlcbiAgJ2Zvcic6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuIGhhcyhTeW1ib2xSZWdpc3RyeSwga2V5ICs9ICcnKVxuICAgICAgPyBTeW1ib2xSZWdpc3RyeVtrZXldXG4gICAgICA6IFN5bWJvbFJlZ2lzdHJ5W2tleV0gPSAkU3ltYm9sKGtleSk7XG4gIH0sXG4gIC8vIDE5LjQuMi41IFN5bWJvbC5rZXlGb3Ioc3ltKVxuICBrZXlGb3I6IGZ1bmN0aW9uIGtleUZvcihrZXkpe1xuICAgIHJldHVybiBrZXlPZihTeW1ib2xSZWdpc3RyeSwga2V5KTtcbiAgfSxcbiAgdXNlU2V0dGVyOiBmdW5jdGlvbigpeyBzZXR0ZXIgPSB0cnVlOyB9LFxuICB1c2VTaW1wbGU6IGZ1bmN0aW9uKCl7IHNldHRlciA9IGZhbHNlOyB9XG59O1xuLy8gMTkuNC4yLjIgU3ltYm9sLmhhc0luc3RhbmNlXG4vLyAxOS40LjIuMyBTeW1ib2wuaXNDb25jYXRTcHJlYWRhYmxlXG4vLyAxOS40LjIuNCBTeW1ib2wuaXRlcmF0b3Jcbi8vIDE5LjQuMi42IFN5bWJvbC5tYXRjaFxuLy8gMTkuNC4yLjggU3ltYm9sLnJlcGxhY2Vcbi8vIDE5LjQuMi45IFN5bWJvbC5zZWFyY2hcbi8vIDE5LjQuMi4xMCBTeW1ib2wuc3BlY2llc1xuLy8gMTkuNC4yLjExIFN5bWJvbC5zcGxpdFxuLy8gMTkuNC4yLjEyIFN5bWJvbC50b1ByaW1pdGl2ZVxuLy8gMTkuNC4yLjEzIFN5bWJvbC50b1N0cmluZ1RhZ1xuLy8gMTkuNC4yLjE0IFN5bWJvbC51bnNjb3BhYmxlc1xuJC5lYWNoLmNhbGwoKFxuICAnaGFzSW5zdGFuY2UsaXNDb25jYXRTcHJlYWRhYmxlLGl0ZXJhdG9yLG1hdGNoLHJlcGxhY2Usc2VhcmNoLCcgK1xuICAnc3BlY2llcyxzcGxpdCx0b1ByaW1pdGl2ZSx0b1N0cmluZ1RhZyx1bnNjb3BhYmxlcydcbikuc3BsaXQoJywnKSwgZnVuY3Rpb24oaXQpe1xuICB2YXIgc3ltID0gd2tzKGl0KTtcbiAgc3ltYm9sU3RhdGljc1tpdF0gPSB1c2VOYXRpdmUgPyBzeW0gOiB3cmFwKHN5bSk7XG59KTtcblxuc2V0dGVyID0gdHJ1ZTtcblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcsIHtTeW1ib2w6ICRTeW1ib2x9KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdTeW1ib2wnLCBzeW1ib2xTdGF0aWNzKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhdXNlTmF0aXZlLCAnT2JqZWN0Jywge1xuICAvLyAxOS4xLjIuMiBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG4gIGNyZWF0ZTogJGNyZWF0ZSxcbiAgLy8gMTkuMS4yLjQgT2JqZWN0LmRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpXG4gIGRlZmluZVByb3BlcnR5OiAkZGVmaW5lUHJvcGVydHksXG4gIC8vIDE5LjEuMi4zIE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpXG4gIGRlZmluZVByb3BlcnRpZXM6ICRkZWZpbmVQcm9wZXJ0aWVzLFxuICAvLyAxOS4xLjIuNiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKE8sIFApXG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogJGdldE93blByb3BlcnR5RGVzY3JpcHRvcixcbiAgLy8gMTkuMS4yLjcgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMoTylcbiAgZ2V0T3duUHJvcGVydHlOYW1lczogJGdldE93blByb3BlcnR5TmFtZXMsXG4gIC8vIDE5LjEuMi44IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoTylcbiAgZ2V0T3duUHJvcGVydHlTeW1ib2xzOiAkZ2V0T3duUHJvcGVydHlTeW1ib2xzXG59KTtcblxuLy8gMjQuMy4yIEpTT04uc3RyaW5naWZ5KHZhbHVlIFssIHJlcGxhY2VyIFssIHNwYWNlXV0pXG4kSlNPTiAmJiAkZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghdXNlTmF0aXZlIHx8IGJ1Z2d5SlNPTiksICdKU09OJywge3N0cmluZ2lmeTogJHN0cmluZ2lmeX0pO1xuXG4vLyAxOS40LjMuNSBTeW1ib2wucHJvdG90eXBlW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZygkU3ltYm9sLCAnU3ltYm9sJyk7XG4vLyAyMC4yLjEuOSBNYXRoW0BAdG9TdHJpbmdUYWddXG5zZXRUb1N0cmluZ1RhZyhNYXRoLCAnTWF0aCcsIHRydWUpO1xuLy8gMjQuMy4zIEpTT05bQEB0b1N0cmluZ1RhZ11cbnNldFRvU3RyaW5nVGFnKGdsb2JhbC5KU09OLCAnSlNPTicsIHRydWUpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zeW1ib2wuanNcbiAqKiBtb2R1bGUgaWQgPSAzNlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vJCcpLnNldERlc2NcbiAgLCBoYXMgPSByZXF1aXJlKCcuLyQuaGFzJylcbiAgLCBUQUcgPSByZXF1aXJlKCcuLyQud2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQsIHRhZywgc3RhdCl7XG4gIGlmKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpZGVmKGl0LCBUQUcsIHtjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWd9KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zZXQtdG8tc3RyaW5nLXRhZy5qc1xuICoqIG1vZHVsZSBpZCA9IDM3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJCAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCB0b0lPYmplY3QgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihvYmplY3QsIGVsKXtcbiAgdmFyIE8gICAgICA9IHRvSU9iamVjdChvYmplY3QpXG4gICAgLCBrZXlzICAgPSAkLmdldEtleXMoTylcbiAgICAsIGxlbmd0aCA9IGtleXMubGVuZ3RoXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBrZXk7XG4gIHdoaWxlKGxlbmd0aCA+IGluZGV4KWlmKE9ba2V5ID0ga2V5c1tpbmRleCsrXV0gPT09IGVsKXJldHVybiBrZXk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQua2V5b2YuanNcbiAqKiBtb2R1bGUgaWQgPSAzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gZmFsbGJhY2sgZm9yIElFMTEgYnVnZ3kgT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMgd2l0aCBpZnJhbWUgYW5kIHdpbmRvd1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0JylcbiAgLCBnZXROYW1lcyAgPSByZXF1aXJlKCcuLyQnKS5nZXROYW1lc1xuICAsIHRvU3RyaW5nICA9IHt9LnRvU3RyaW5nO1xuXG52YXIgd2luZG93TmFtZXMgPSB0eXBlb2Ygd2luZG93ID09ICdvYmplY3QnICYmIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzXG4gID8gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMod2luZG93KSA6IFtdO1xuXG52YXIgZ2V0V2luZG93TmFtZXMgPSBmdW5jdGlvbihpdCl7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGdldE5hbWVzKGl0KTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4gd2luZG93TmFtZXMuc2xpY2UoKTtcbiAgfVxufTtcblxubW9kdWxlLmV4cG9ydHMuZ2V0ID0gZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlOYW1lcyhpdCl7XG4gIGlmKHdpbmRvd05hbWVzICYmIHRvU3RyaW5nLmNhbGwoaXQpID09ICdbb2JqZWN0IFdpbmRvd10nKXJldHVybiBnZXRXaW5kb3dOYW1lcyhpdCk7XG4gIHJldHVybiBnZXROYW1lcyh0b0lPYmplY3QoaXQpKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5nZXQtbmFtZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gYWxsIGVudW1lcmFibGUgb2JqZWN0IGtleXMsIGluY2x1ZGVzIHN5bWJvbHNcbnZhciAkID0gcmVxdWlyZSgnLi8kJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIGtleXMgICAgICAgPSAkLmdldEtleXMoaXQpXG4gICAgLCBnZXRTeW1ib2xzID0gJC5nZXRTeW1ib2xzO1xuICBpZihnZXRTeW1ib2xzKXtcbiAgICB2YXIgc3ltYm9scyA9IGdldFN5bWJvbHMoaXQpXG4gICAgICAsIGlzRW51bSAgPSAkLmlzRW51bVxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUoc3ltYm9scy5sZW5ndGggPiBpKWlmKGlzRW51bS5jYWxsKGl0LCBrZXkgPSBzeW1ib2xzW2krK10pKWtleXMucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiBrZXlzO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmVudW0ta2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDQwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQubGlicmFyeS5qc1xuICoqIG1vZHVsZSBpZCA9IDQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjMuMSBPYmplY3QuYXNzaWduKHRhcmdldCwgc291cmNlKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GLCAnT2JqZWN0Jywge2Fzc2lnbjogcmVxdWlyZSgnLi8kLm9iamVjdC1hc3NpZ24nKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuYXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMi4xIE9iamVjdC5hc3NpZ24odGFyZ2V0LCBzb3VyY2UsIC4uLilcbnZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgdG9PYmplY3QgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0JylcbiAgLCBJT2JqZWN0ICA9IHJlcXVpcmUoJy4vJC5pb2JqZWN0Jyk7XG5cbi8vIHNob3VsZCB3b3JrIHdpdGggc3ltYm9scyBhbmQgc2hvdWxkIGhhdmUgZGV0ZXJtaW5pc3RpYyBwcm9wZXJ0eSBvcmRlciAoVjggYnVnKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICB2YXIgYSA9IE9iamVjdC5hc3NpZ25cbiAgICAsIEEgPSB7fVxuICAgICwgQiA9IHt9XG4gICAgLCBTID0gU3ltYm9sKClcbiAgICAsIEsgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3QnO1xuICBBW1NdID0gNztcbiAgSy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbihrKXsgQltrXSA9IGs7IH0pO1xuICByZXR1cm4gYSh7fSwgQSlbU10gIT0gNyB8fCBPYmplY3Qua2V5cyhhKHt9LCBCKSkuam9pbignJykgIT0gSztcbn0pID8gZnVuY3Rpb24gYXNzaWduKHRhcmdldCwgc291cmNlKXsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bnVzZWQtdmFyc1xuICB2YXIgVCAgICAgPSB0b09iamVjdCh0YXJnZXQpXG4gICAgLCAkJCAgICA9IGFyZ3VtZW50c1xuICAgICwgJCRsZW4gPSAkJC5sZW5ndGhcbiAgICAsIGluZGV4ID0gMVxuICAgICwgZ2V0S2V5cyAgICA9ICQuZ2V0S2V5c1xuICAgICwgZ2V0U3ltYm9scyA9ICQuZ2V0U3ltYm9sc1xuICAgICwgaXNFbnVtICAgICA9ICQuaXNFbnVtO1xuICB3aGlsZSgkJGxlbiA+IGluZGV4KXtcbiAgICB2YXIgUyAgICAgID0gSU9iamVjdCgkJFtpbmRleCsrXSlcbiAgICAgICwga2V5cyAgID0gZ2V0U3ltYm9scyA/IGdldEtleXMoUykuY29uY2F0KGdldFN5bWJvbHMoUykpIDogZ2V0S2V5cyhTKVxuICAgICAgLCBsZW5ndGggPSBrZXlzLmxlbmd0aFxuICAgICAgLCBqICAgICAgPSAwXG4gICAgICAsIGtleTtcbiAgICB3aGlsZShsZW5ndGggPiBqKWlmKGlzRW51bS5jYWxsKFMsIGtleSA9IGtleXNbaisrXSkpVFtrZXldID0gU1trZXldO1xuICB9XG4gIHJldHVybiBUO1xufSA6IE9iamVjdC5hc3NpZ247XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5vYmplY3QtYXNzaWduLmpzXG4gKiogbW9kdWxlIGlkID0gNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMy4xMCBPYmplY3QuaXModmFsdWUxLCB2YWx1ZTIpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge2lzOiByZXF1aXJlKCcuLyQuc2FtZS12YWx1ZScpfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy5qc1xuICoqIG1vZHVsZSBpZCA9IDQ0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyA3LjIuOSBTYW1lVmFsdWUoeCwgeSlcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmlzIHx8IGZ1bmN0aW9uIGlzKHgsIHkpe1xuICByZXR1cm4geCA9PT0geSA/IHggIT09IDAgfHwgMSAvIHggPT09IDEgLyB5IDogeCAhPSB4ICYmIHkgIT0geTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zYW1lLXZhbHVlLmpzXG4gKiogbW9kdWxlIGlkID0gNDVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMy4xOSBPYmplY3Quc2V0UHJvdG90eXBlT2YoTywgcHJvdG8pXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnT2JqZWN0Jywge3NldFByb3RvdHlwZU9mOiByZXF1aXJlKCcuLyQuc2V0LXByb3RvJykuc2V0fSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZXQtcHJvdG90eXBlLW9mLmpzXG4gKiogbW9kdWxlIGlkID0gNDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIFdvcmtzIHdpdGggX19wcm90b19fIG9ubHkuIE9sZCB2OCBjYW4ndCB3b3JrIHdpdGggbnVsbCBwcm90byBvYmplY3RzLlxuLyogZXNsaW50LWRpc2FibGUgbm8tcHJvdG8gKi9cbnZhciBnZXREZXNjICA9IHJlcXVpcmUoJy4vJCcpLmdldERlc2NcbiAgLCBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xudmFyIGNoZWNrID0gZnVuY3Rpb24oTywgcHJvdG8pe1xuICBhbk9iamVjdChPKTtcbiAgaWYoIWlzT2JqZWN0KHByb3RvKSAmJiBwcm90byAhPT0gbnVsbCl0aHJvdyBUeXBlRXJyb3IocHJvdG8gKyBcIjogY2FuJ3Qgc2V0IGFzIHByb3RvdHlwZSFcIik7XG59O1xubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8ICgnX19wcm90b19fJyBpbiB7fSA/IC8vIGVzbGludC1kaXNhYmxlLWxpbmVcbiAgICBmdW5jdGlvbih0ZXN0LCBidWdneSwgc2V0KXtcbiAgICAgIHRyeSB7XG4gICAgICAgIHNldCA9IHJlcXVpcmUoJy4vJC5jdHgnKShGdW5jdGlvbi5jYWxsLCBnZXREZXNjKE9iamVjdC5wcm90b3R5cGUsICdfX3Byb3RvX18nKS5zZXQsIDIpO1xuICAgICAgICBzZXQodGVzdCwgW10pO1xuICAgICAgICBidWdneSA9ICEodGVzdCBpbnN0YW5jZW9mIEFycmF5KTtcbiAgICAgIH0gY2F0Y2goZSl7IGJ1Z2d5ID0gdHJ1ZTsgfVxuICAgICAgcmV0dXJuIGZ1bmN0aW9uIHNldFByb3RvdHlwZU9mKE8sIHByb3RvKXtcbiAgICAgICAgY2hlY2soTywgcHJvdG8pO1xuICAgICAgICBpZihidWdneSlPLl9fcHJvdG9fXyA9IHByb3RvO1xuICAgICAgICBlbHNlIHNldChPLCBwcm90byk7XG4gICAgICAgIHJldHVybiBPO1xuICAgICAgfTtcbiAgICB9KHt9LCBmYWxzZSkgOiB1bmRlZmluZWQpLFxuICBjaGVjazogY2hlY2tcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zZXQtcHJvdG8uanNcbiAqKiBtb2R1bGUgaWQgPSA0N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vJC5jbGFzc29mJylcbiAgLCB0ZXN0ICAgID0ge307XG50ZXN0W3JlcXVpcmUoJy4vJC53a3MnKSgndG9TdHJpbmdUYWcnKV0gPSAneic7XG5pZih0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKXtcbiAgcmVxdWlyZSgnLi8kLnJlZGVmaW5lJykoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKXtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nLmpzXG4gKiogbW9kdWxlIGlkID0gNDhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi8kLmNvZicpXG4gICwgVEFHID0gcmVxdWlyZSgnLi8kLndrcycpKCd0b1N0cmluZ1RhZycpXG4gIC8vIEVTMyB3cm9uZyBoZXJlXG4gICwgQVJHID0gY29mKGZ1bmN0aW9uKCl7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSAoTyA9IE9iamVjdChpdCkpW1RBR10pID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmNsYXNzb2YuanNcbiAqKiBtb2R1bGUgaWQgPSA0OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjUgT2JqZWN0LmZyZWV6ZShPKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdmcmVlemUnLCBmdW5jdGlvbigkZnJlZXplKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZyZWV6ZShpdCl7XG4gICAgcmV0dXJuICRmcmVlemUgJiYgaXNPYmplY3QoaXQpID8gJGZyZWV6ZShpdCkgOiBpdDtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuZnJlZXplLmpzXG4gKiogbW9kdWxlIGlkID0gNTBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIG1vc3QgT2JqZWN0IG1ldGhvZHMgYnkgRVM2IHNob3VsZCBhY2NlcHQgcHJpbWl0aXZlc1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBjb3JlICAgID0gcmVxdWlyZSgnLi8kLmNvcmUnKVxuICAsIGZhaWxzICAgPSByZXF1aXJlKCcuLyQuZmFpbHMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBleGVjKXtcbiAgdmFyIGZuICA9IChjb3JlLk9iamVjdCB8fCB7fSlbS0VZXSB8fCBPYmplY3RbS0VZXVxuICAgICwgZXhwID0ge307XG4gIGV4cFtLRVldID0gZXhlYyhmbik7XG4gICRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXsgZm4oMSk7IH0pLCAnT2JqZWN0JywgZXhwKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5vYmplY3Qtc2FwLmpzXG4gKiogbW9kdWxlIGlkID0gNTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMi4xNyBPYmplY3Quc2VhbChPKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdzZWFsJywgZnVuY3Rpb24oJHNlYWwpe1xuICByZXR1cm4gZnVuY3Rpb24gc2VhbChpdCl7XG4gICAgcmV0dXJuICRzZWFsICYmIGlzT2JqZWN0KGl0KSA/ICRzZWFsKGl0KSA6IGl0O1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5zZWFsLmpzXG4gKiogbW9kdWxlIGlkID0gNTJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMi4xNSBPYmplY3QucHJldmVudEV4dGVuc2lvbnMoTylcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcblxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgncHJldmVudEV4dGVuc2lvbnMnLCBmdW5jdGlvbigkcHJldmVudEV4dGVuc2lvbnMpe1xuICByZXR1cm4gZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnMoaXQpe1xuICAgIHJldHVybiAkcHJldmVudEV4dGVuc2lvbnMgJiYgaXNPYmplY3QoaXQpID8gJHByZXZlbnRFeHRlbnNpb25zKGl0KSA6IGl0O1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5wcmV2ZW50LWV4dGVuc2lvbnMuanNcbiAqKiBtb2R1bGUgaWQgPSA1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjEyIE9iamVjdC5pc0Zyb3plbihPKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdpc0Zyb3plbicsIGZ1bmN0aW9uKCRpc0Zyb3plbil7XG4gIHJldHVybiBmdW5jdGlvbiBpc0Zyb3plbihpdCl7XG4gICAgcmV0dXJuIGlzT2JqZWN0KGl0KSA/ICRpc0Zyb3plbiA/ICRpc0Zyb3plbihpdCkgOiBmYWxzZSA6IHRydWU7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmlzLWZyb3plbi5qc1xuICoqIG1vZHVsZSBpZCA9IDU0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuMTMgT2JqZWN0LmlzU2VhbGVkKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5cbnJlcXVpcmUoJy4vJC5vYmplY3Qtc2FwJykoJ2lzU2VhbGVkJywgZnVuY3Rpb24oJGlzU2VhbGVkKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGlzU2VhbGVkKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gJGlzU2VhbGVkID8gJGlzU2VhbGVkKGl0KSA6IGZhbHNlIDogdHJ1ZTtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3QuaXMtc2VhbGVkLmpzXG4gKiogbW9kdWxlIGlkID0gNTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMi4xMSBPYmplY3QuaXNFeHRlbnNpYmxlKE8pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0Jyk7XG5cbnJlcXVpcmUoJy4vJC5vYmplY3Qtc2FwJykoJ2lzRXh0ZW5zaWJsZScsIGZ1bmN0aW9uKCRpc0V4dGVuc2libGUpe1xuICByZXR1cm4gZnVuY3Rpb24gaXNFeHRlbnNpYmxlKGl0KXtcbiAgICByZXR1cm4gaXNPYmplY3QoaXQpID8gJGlzRXh0ZW5zaWJsZSA/ICRpc0V4dGVuc2libGUoaXQpIDogdHJ1ZSA6IGZhbHNlO1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5pcy1leHRlbnNpYmxlLmpzXG4gKiogbW9kdWxlIGlkID0gNTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDE5LjEuMi42IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTywgUClcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuLyQudG8taW9iamVjdCcpO1xuXG5yZXF1aXJlKCcuLyQub2JqZWN0LXNhcCcpKCdnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3InLCBmdW5jdGlvbigkZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldE93blByb3BlcnR5RGVzY3JpcHRvcihpdCwga2V5KXtcbiAgICByZXR1cm4gJGdldE93blByb3BlcnR5RGVzY3JpcHRvcih0b0lPYmplY3QoaXQpLCBrZXkpO1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA1N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjkgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0Jyk7XG5cbnJlcXVpcmUoJy4vJC5vYmplY3Qtc2FwJykoJ2dldFByb3RvdHlwZU9mJywgZnVuY3Rpb24oJGdldFByb3RvdHlwZU9mKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIGdldFByb3RvdHlwZU9mKGl0KXtcbiAgICByZXR1cm4gJGdldFByb3RvdHlwZU9mKHRvT2JqZWN0KGl0KSk7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYub2JqZWN0LmdldC1wcm90b3R5cGUtb2YuanNcbiAqKiBtb2R1bGUgaWQgPSA1OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMTkuMS4yLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuLyQudG8tb2JqZWN0Jyk7XG5cbnJlcXVpcmUoJy4vJC5vYmplY3Qtc2FwJykoJ2tleXMnLCBmdW5jdGlvbigka2V5cyl7XG4gIHJldHVybiBmdW5jdGlvbiBrZXlzKGl0KXtcbiAgICByZXR1cm4gJGtleXModG9PYmplY3QoaXQpKTtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5vYmplY3Qua2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDU5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAxOS4xLjIuNyBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhPKVxucmVxdWlyZSgnLi8kLm9iamVjdC1zYXAnKSgnZ2V0T3duUHJvcGVydHlOYW1lcycsIGZ1bmN0aW9uKCl7XG4gIHJldHVybiByZXF1aXJlKCcuLyQuZ2V0LW5hbWVzJykuZ2V0O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC5nZXQtb3duLXByb3BlcnR5LW5hbWVzLmpzXG4gKiogbW9kdWxlIGlkID0gNjBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBzZXREZXNjICAgID0gcmVxdWlyZSgnLi8kJykuc2V0RGVzY1xuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpXG4gICwgaGFzICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIEZQcm90byAgICAgPSBGdW5jdGlvbi5wcm90b3R5cGVcbiAgLCBuYW1lUkUgICAgID0gL15cXHMqZnVuY3Rpb24gKFteIChdKikvXG4gICwgTkFNRSAgICAgICA9ICduYW1lJztcbi8vIDE5LjIuNC4yIG5hbWVcbk5BTUUgaW4gRlByb3RvIHx8IHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpICYmIHNldERlc2MoRlByb3RvLCBOQU1FLCB7XG4gIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbigpe1xuICAgIHZhciBtYXRjaCA9ICgnJyArIHRoaXMpLm1hdGNoKG5hbWVSRSlcbiAgICAgICwgbmFtZSAgPSBtYXRjaCA/IG1hdGNoWzFdIDogJyc7XG4gICAgaGFzKHRoaXMsIE5BTUUpIHx8IHNldERlc2ModGhpcywgTkFNRSwgY3JlYXRlRGVzYyg1LCBuYW1lKSk7XG4gICAgcmV0dXJuIG5hbWU7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5mdW5jdGlvbi5uYW1lLmpzXG4gKiogbW9kdWxlIGlkID0gNjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBpc09iamVjdCAgICAgID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgSEFTX0lOU1RBTkNFICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaGFzSW5zdGFuY2UnKVxuICAsIEZ1bmN0aW9uUHJvdG8gPSBGdW5jdGlvbi5wcm90b3R5cGU7XG4vLyAxOS4yLjMuNiBGdW5jdGlvbi5wcm90b3R5cGVbQEBoYXNJbnN0YW5jZV0oVilcbmlmKCEoSEFTX0lOU1RBTkNFIGluIEZ1bmN0aW9uUHJvdG8pKSQuc2V0RGVzYyhGdW5jdGlvblByb3RvLCBIQVNfSU5TVEFOQ0UsIHt2YWx1ZTogZnVuY3Rpb24oTyl7XG4gIGlmKHR5cGVvZiB0aGlzICE9ICdmdW5jdGlvbicgfHwgIWlzT2JqZWN0KE8pKXJldHVybiBmYWxzZTtcbiAgaWYoIWlzT2JqZWN0KHRoaXMucHJvdG90eXBlKSlyZXR1cm4gTyBpbnN0YW5jZW9mIHRoaXM7XG4gIC8vIGZvciBlbnZpcm9ubWVudCB3L28gbmF0aXZlIGBAQGhhc0luc3RhbmNlYCBsb2dpYyBlbm91Z2ggYGluc3RhbmNlb2ZgLCBidXQgYWRkIHRoaXM6XG4gIHdoaWxlKE8gPSAkLmdldFByb3RvKE8pKWlmKHRoaXMucHJvdG90eXBlID09PSBPKXJldHVybiB0cnVlO1xuICByZXR1cm4gZmFsc2U7XG59fSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmZ1bmN0aW9uLmhhcy1pbnN0YW5jZS5qc1xuICoqIG1vZHVsZSBpZCA9IDYyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJCAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgaGFzICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGFzJylcbiAgLCBjb2YgICAgICAgICA9IHJlcXVpcmUoJy4vJC5jb2YnKVxuICAsIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi8kLnRvLXByaW1pdGl2ZScpXG4gICwgZmFpbHMgICAgICAgPSByZXF1aXJlKCcuLyQuZmFpbHMnKVxuICAsICR0cmltICAgICAgID0gcmVxdWlyZSgnLi8kLnN0cmluZy10cmltJykudHJpbVxuICAsIE5VTUJFUiAgICAgID0gJ051bWJlcidcbiAgLCAkTnVtYmVyICAgICA9IGdsb2JhbFtOVU1CRVJdXG4gICwgQmFzZSAgICAgICAgPSAkTnVtYmVyXG4gICwgcHJvdG8gICAgICAgPSAkTnVtYmVyLnByb3RvdHlwZVxuICAvLyBPcGVyYSB+MTIgaGFzIGJyb2tlbiBPYmplY3QjdG9TdHJpbmdcbiAgLCBCUk9LRU5fQ09GICA9IGNvZigkLmNyZWF0ZShwcm90bykpID09IE5VTUJFUlxuICAsIFRSSU0gICAgICAgID0gJ3RyaW0nIGluIFN0cmluZy5wcm90b3R5cGU7XG5cbi8vIDcuMS4zIFRvTnVtYmVyKGFyZ3VtZW50KVxudmFyIHRvTnVtYmVyID0gZnVuY3Rpb24oYXJndW1lbnQpe1xuICB2YXIgaXQgPSB0b1ByaW1pdGl2ZShhcmd1bWVudCwgZmFsc2UpO1xuICBpZih0eXBlb2YgaXQgPT0gJ3N0cmluZycgJiYgaXQubGVuZ3RoID4gMil7XG4gICAgaXQgPSBUUklNID8gaXQudHJpbSgpIDogJHRyaW0oaXQsIDMpO1xuICAgIHZhciBmaXJzdCA9IGl0LmNoYXJDb2RlQXQoMClcbiAgICAgICwgdGhpcmQsIHJhZGl4LCBtYXhDb2RlO1xuICAgIGlmKGZpcnN0ID09PSA0MyB8fCBmaXJzdCA9PT0gNDUpe1xuICAgICAgdGhpcmQgPSBpdC5jaGFyQ29kZUF0KDIpO1xuICAgICAgaWYodGhpcmQgPT09IDg4IHx8IHRoaXJkID09PSAxMjApcmV0dXJuIE5hTjsgLy8gTnVtYmVyKCcrMHgxJykgc2hvdWxkIGJlIE5hTiwgb2xkIFY4IGZpeFxuICAgIH0gZWxzZSBpZihmaXJzdCA9PT0gNDgpe1xuICAgICAgc3dpdGNoKGl0LmNoYXJDb2RlQXQoMSkpe1xuICAgICAgICBjYXNlIDY2IDogY2FzZSA5OCAgOiByYWRpeCA9IDI7IG1heENvZGUgPSA0OTsgYnJlYWs7IC8vIGZhc3QgZXF1YWwgL14wYlswMV0rJC9pXG4gICAgICAgIGNhc2UgNzkgOiBjYXNlIDExMSA6IHJhZGl4ID0gODsgbWF4Q29kZSA9IDU1OyBicmVhazsgLy8gZmFzdCBlcXVhbCAvXjBvWzAtN10rJC9pXG4gICAgICAgIGRlZmF1bHQgOiByZXR1cm4gK2l0O1xuICAgICAgfVxuICAgICAgZm9yKHZhciBkaWdpdHMgPSBpdC5zbGljZSgyKSwgaSA9IDAsIGwgPSBkaWdpdHMubGVuZ3RoLCBjb2RlOyBpIDwgbDsgaSsrKXtcbiAgICAgICAgY29kZSA9IGRpZ2l0cy5jaGFyQ29kZUF0KGkpO1xuICAgICAgICAvLyBwYXJzZUludCBwYXJzZXMgYSBzdHJpbmcgdG8gYSBmaXJzdCB1bmF2YWlsYWJsZSBzeW1ib2xcbiAgICAgICAgLy8gYnV0IFRvTnVtYmVyIHNob3VsZCByZXR1cm4gTmFOIGlmIGEgc3RyaW5nIGNvbnRhaW5zIHVuYXZhaWxhYmxlIHN5bWJvbHNcbiAgICAgICAgaWYoY29kZSA8IDQ4IHx8IGNvZGUgPiBtYXhDb2RlKXJldHVybiBOYU47XG4gICAgICB9IHJldHVybiBwYXJzZUludChkaWdpdHMsIHJhZGl4KTtcbiAgICB9XG4gIH0gcmV0dXJuICtpdDtcbn07XG5cbmlmKCEkTnVtYmVyKCcgMG8xJykgfHwgISROdW1iZXIoJzBiMScpIHx8ICROdW1iZXIoJysweDEnKSl7XG4gICROdW1iZXIgPSBmdW5jdGlvbiBOdW1iZXIodmFsdWUpe1xuICAgIHZhciBpdCA9IGFyZ3VtZW50cy5sZW5ndGggPCAxID8gMCA6IHZhbHVlXG4gICAgICAsIHRoYXQgPSB0aGlzO1xuICAgIHJldHVybiB0aGF0IGluc3RhbmNlb2YgJE51bWJlclxuICAgICAgLy8gY2hlY2sgb24gMS4uY29uc3RydWN0b3IoZm9vKSBjYXNlXG4gICAgICAmJiAoQlJPS0VOX0NPRiA/IGZhaWxzKGZ1bmN0aW9uKCl7IHByb3RvLnZhbHVlT2YuY2FsbCh0aGF0KTsgfSkgOiBjb2YodGhhdCkgIT0gTlVNQkVSKVxuICAgICAgICA/IG5ldyBCYXNlKHRvTnVtYmVyKGl0KSkgOiB0b051bWJlcihpdCk7XG4gIH07XG4gICQuZWFjaC5jYWxsKHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpID8gJC5nZXROYW1lcyhCYXNlKSA6IChcbiAgICAvLyBFUzM6XG4gICAgJ01BWF9WQUxVRSxNSU5fVkFMVUUsTmFOLE5FR0FUSVZFX0lORklOSVRZLFBPU0lUSVZFX0lORklOSVRZLCcgK1xuICAgIC8vIEVTNiAoaW4gY2FzZSwgaWYgbW9kdWxlcyB3aXRoIEVTNiBOdW1iZXIgc3RhdGljcyByZXF1aXJlZCBiZWZvcmUpOlxuICAgICdFUFNJTE9OLGlzRmluaXRlLGlzSW50ZWdlcixpc05hTixpc1NhZmVJbnRlZ2VyLE1BWF9TQUZFX0lOVEVHRVIsJyArXG4gICAgJ01JTl9TQUZFX0lOVEVHRVIscGFyc2VGbG9hdCxwYXJzZUludCxpc0ludGVnZXInXG4gICkuc3BsaXQoJywnKSwgZnVuY3Rpb24oa2V5KXtcbiAgICBpZihoYXMoQmFzZSwga2V5KSAmJiAhaGFzKCROdW1iZXIsIGtleSkpe1xuICAgICAgJC5zZXREZXNjKCROdW1iZXIsIGtleSwgJC5nZXREZXNjKEJhc2UsIGtleSkpO1xuICAgIH1cbiAgfSk7XG4gICROdW1iZXIucHJvdG90eXBlID0gcHJvdG87XG4gIHByb3RvLmNvbnN0cnVjdG9yID0gJE51bWJlcjtcbiAgcmVxdWlyZSgnLi8kLnJlZGVmaW5lJykoZ2xvYmFsLCBOVU1CRVIsICROdW1iZXIpO1xufVxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5udW1iZXIuY29uc3RydWN0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA2M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXHJcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcclxuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2VcclxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgUyl7XHJcbiAgaWYoIWlzT2JqZWN0KGl0KSlyZXR1cm4gaXQ7XHJcbiAgdmFyIGZuLCB2YWw7XHJcbiAgaWYoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xyXG4gIGlmKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpcmV0dXJuIHZhbDtcclxuICBpZighUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSlyZXR1cm4gdmFsO1xyXG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcclxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnRvLXByaW1pdGl2ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGRlZmluZWQgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpXG4gICwgZmFpbHMgICA9IHJlcXVpcmUoJy4vJC5mYWlscycpXG4gICwgc3BhY2VzICA9ICdcXHgwOVxceDBBXFx4MEJcXHgwQ1xceDBEXFx4MjBcXHhBMFxcdTE2ODBcXHUxODBFXFx1MjAwMFxcdTIwMDFcXHUyMDAyXFx1MjAwMycgK1xuICAgICAgJ1xcdTIwMDRcXHUyMDA1XFx1MjAwNlxcdTIwMDdcXHUyMDA4XFx1MjAwOVxcdTIwMEFcXHUyMDJGXFx1MjA1RlxcdTMwMDBcXHUyMDI4XFx1MjAyOVxcdUZFRkYnXG4gICwgc3BhY2UgICA9ICdbJyArIHNwYWNlcyArICddJ1xuICAsIG5vbiAgICAgPSAnXFx1MjAwYlxcdTAwODUnXG4gICwgbHRyaW0gICA9IFJlZ0V4cCgnXicgKyBzcGFjZSArIHNwYWNlICsgJyonKVxuICAsIHJ0cmltICAgPSBSZWdFeHAoc3BhY2UgKyBzcGFjZSArICcqJCcpO1xuXG52YXIgZXhwb3J0ZXIgPSBmdW5jdGlvbihLRVksIGV4ZWMpe1xuICB2YXIgZXhwICA9IHt9O1xuICBleHBbS0VZXSA9IGV4ZWModHJpbSk7XG4gICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZmFpbHMoZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gISFzcGFjZXNbS0VZXSgpIHx8IG5vbltLRVldKCkgIT0gbm9uO1xuICB9KSwgJ1N0cmluZycsIGV4cCk7XG59O1xuXG4vLyAxIC0+IFN0cmluZyN0cmltTGVmdFxuLy8gMiAtPiBTdHJpbmcjdHJpbVJpZ2h0XG4vLyAzIC0+IFN0cmluZyN0cmltXG52YXIgdHJpbSA9IGV4cG9ydGVyLnRyaW0gPSBmdW5jdGlvbihzdHJpbmcsIFRZUEUpe1xuICBzdHJpbmcgPSBTdHJpbmcoZGVmaW5lZChzdHJpbmcpKTtcbiAgaWYoVFlQRSAmIDEpc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UobHRyaW0sICcnKTtcbiAgaWYoVFlQRSAmIDIpc3RyaW5nID0gc3RyaW5nLnJlcGxhY2UocnRyaW0sICcnKTtcbiAgcmV0dXJuIHN0cmluZztcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0ZXI7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zdHJpbmctdHJpbS5qc1xuICoqIG1vZHVsZSBpZCA9IDY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4xLjIuMSBOdW1iZXIuRVBTSUxPTlxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge0VQU0lMT046IE1hdGgucG93KDIsIC01Mil9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmVwc2lsb24uanNcbiAqKiBtb2R1bGUgaWQgPSA2NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMS4yLjIgTnVtYmVyLmlzRmluaXRlKG51bWJlcilcbnZhciAkZXhwb3J0ICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBfaXNGaW5pdGUgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJykuaXNGaW5pdGU7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge1xuICBpc0Zpbml0ZTogZnVuY3Rpb24gaXNGaW5pdGUoaXQpe1xuICAgIHJldHVybiB0eXBlb2YgaXQgPT0gJ251bWJlcicgJiYgX2lzRmluaXRlKGl0KTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1maW5pdGUuanNcbiAqKiBtb2R1bGUgaWQgPSA2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMS4yLjMgTnVtYmVyLmlzSW50ZWdlcihudW1iZXIpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7aXNJbnRlZ2VyOiByZXF1aXJlKCcuLyQuaXMtaW50ZWdlcicpfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1pbnRlZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjEuMi4zIE51bWJlci5pc0ludGVnZXIobnVtYmVyKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgZmxvb3IgICAgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBpc0ludGVnZXIoaXQpe1xuICByZXR1cm4gIWlzT2JqZWN0KGl0KSAmJiBpc0Zpbml0ZShpdCkgJiYgZmxvb3IoaXQpID09PSBpdDtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5pcy1pbnRlZ2VyLmpzXG4gKiogbW9kdWxlIGlkID0gNjlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjEuMi40IE51bWJlci5pc05hTihudW1iZXIpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7XG4gIGlzTmFOOiBmdW5jdGlvbiBpc05hTihudW1iZXIpe1xuICAgIHJldHVybiBudW1iZXIgIT0gbnVtYmVyO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLW5hbi5qc1xuICoqIG1vZHVsZSBpZCA9IDcwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4xLjIuNSBOdW1iZXIuaXNTYWZlSW50ZWdlcihudW1iZXIpXG52YXIgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgaXNJbnRlZ2VyID0gcmVxdWlyZSgnLi8kLmlzLWludGVnZXInKVxuICAsIGFicyAgICAgICA9IE1hdGguYWJzO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtcbiAgaXNTYWZlSW50ZWdlcjogZnVuY3Rpb24gaXNTYWZlSW50ZWdlcihudW1iZXIpe1xuICAgIHJldHVybiBpc0ludGVnZXIobnVtYmVyKSAmJiBhYnMobnVtYmVyKSA8PSAweDFmZmZmZmZmZmZmZmZmO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLmlzLXNhZmUtaW50ZWdlci5qc1xuICoqIG1vZHVsZSBpZCA9IDcxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4xLjIuNiBOdW1iZXIuTUFYX1NBRkVfSU5URUdFUlxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge01BWF9TQUZFX0lOVEVHRVI6IDB4MWZmZmZmZmZmZmZmZmZ9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLm1heC1zYWZlLWludGVnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA3MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMS4yLjEwIE51bWJlci5NSU5fU0FGRV9JTlRFR0VSXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7TUlOX1NBRkVfSU5URUdFUjogLTB4MWZmZmZmZmZmZmZmZmZ9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubnVtYmVyLm1pbi1zYWZlLWludGVnZXIuanNcbiAqKiBtb2R1bGUgaWQgPSA3M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMS4yLjEyIE51bWJlci5wYXJzZUZsb2F0KHN0cmluZylcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ051bWJlcicsIHtwYXJzZUZsb2F0OiBwYXJzZUZsb2F0fSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1mbG9hdC5qc1xuICoqIG1vZHVsZSBpZCA9IDc0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4xLjIuMTMgTnVtYmVyLnBhcnNlSW50KHN0cmluZywgcmFkaXgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdOdW1iZXInLCB7cGFyc2VJbnQ6IHBhcnNlSW50fSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5wYXJzZS1pbnQuanNcbiAqKiBtb2R1bGUgaWQgPSA3NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjMgTWF0aC5hY29zaCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBsb2cxcCAgID0gcmVxdWlyZSgnLi8kLm1hdGgtbG9nMXAnKVxuICAsIHNxcnQgICAgPSBNYXRoLnNxcnRcbiAgLCAkYWNvc2ggID0gTWF0aC5hY29zaDtcblxuLy8gVjggYnVnIGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zNTA5XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoJGFjb3NoICYmIE1hdGguZmxvb3IoJGFjb3NoKE51bWJlci5NQVhfVkFMVUUpKSA9PSA3MTApLCAnTWF0aCcsIHtcbiAgYWNvc2g6IGZ1bmN0aW9uIGFjb3NoKHgpe1xuICAgIHJldHVybiAoeCA9ICt4KSA8IDEgPyBOYU4gOiB4ID4gOTQ5MDYyNjUuNjI0MjUxNTZcbiAgICAgID8gTWF0aC5sb2coeCkgKyBNYXRoLkxOMlxuICAgICAgOiBsb2cxcCh4IC0gMSArIHNxcnQoeCAtIDEpICogc3FydCh4ICsgMSkpO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hY29zaC5qc1xuICoqIG1vZHVsZSBpZCA9IDc2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4yLjIuMjAgTWF0aC5sb2cxcCh4KVxubW9kdWxlLmV4cG9ydHMgPSBNYXRoLmxvZzFwIHx8IGZ1bmN0aW9uIGxvZzFwKHgpe1xuICByZXR1cm4gKHggPSAreCkgPiAtMWUtOCAmJiB4IDwgMWUtOCA/IHggLSB4ICogeCAvIDIgOiBNYXRoLmxvZygxICsgeCk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQubWF0aC1sb2cxcC5qc1xuICoqIG1vZHVsZSBpZCA9IDc3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4yLjIuNSBNYXRoLmFzaW5oKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuZnVuY3Rpb24gYXNpbmgoeCl7XG4gIHJldHVybiAhaXNGaW5pdGUoeCA9ICt4KSB8fCB4ID09IDAgPyB4IDogeCA8IDAgPyAtYXNpbmgoLXgpIDogTWF0aC5sb2coeCArIE1hdGguc3FydCh4ICogeCArIDEpKTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge2FzaW5oOiBhc2luaH0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmFzaW5oLmpzXG4gKiogbW9kdWxlIGlkID0gNzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi43IE1hdGguYXRhbmgoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGF0YW5oOiBmdW5jdGlvbiBhdGFuaCh4KXtcbiAgICByZXR1cm4gKHggPSAreCkgPT0gMCA/IHggOiBNYXRoLmxvZygoMSArIHgpIC8gKDEgLSB4KSkgLyAyO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5hdGFuaC5qc1xuICoqIG1vZHVsZSBpZCA9IDc5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4yLjIuOSBNYXRoLmNicnQoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgc2lnbiAgICA9IHJlcXVpcmUoJy4vJC5tYXRoLXNpZ24nKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBjYnJ0OiBmdW5jdGlvbiBjYnJ0KHgpe1xuICAgIHJldHVybiBzaWduKHggPSAreCkgKiBNYXRoLnBvdyhNYXRoLmFicyh4KSwgMSAvIDMpO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5jYnJ0LmpzXG4gKiogbW9kdWxlIGlkID0gODBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4yOCBNYXRoLnNpZ24oeClcbm1vZHVsZS5leHBvcnRzID0gTWF0aC5zaWduIHx8IGZ1bmN0aW9uIHNpZ24oeCl7XG4gIHJldHVybiAoeCA9ICt4KSA9PSAwIHx8IHggIT0geCA/IHggOiB4IDwgMCA/IC0xIDogMTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5tYXRoLXNpZ24uanNcbiAqKiBtb2R1bGUgaWQgPSA4MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjExIE1hdGguY2x6MzIoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGNsejMyOiBmdW5jdGlvbiBjbHozMih4KXtcbiAgICByZXR1cm4gKHggPj4+PSAwKSA/IDMxIC0gTWF0aC5mbG9vcihNYXRoLmxvZyh4ICsgMC41KSAqIE1hdGguTE9HMkUpIDogMzI7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmNsejMyLmpzXG4gKiogbW9kdWxlIGlkID0gODJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4xMiBNYXRoLmNvc2goeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgZXhwICAgICA9IE1hdGguZXhwO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGNvc2g6IGZ1bmN0aW9uIGNvc2goeCl7XG4gICAgcmV0dXJuIChleHAoeCA9ICt4KSArIGV4cCgteCkpIC8gMjtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguY29zaC5qc1xuICoqIG1vZHVsZSBpZCA9IDgzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4yLjIuMTQgTWF0aC5leHBtMSh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtleHBtMTogcmVxdWlyZSgnLi8kLm1hdGgtZXhwbTEnKX0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmV4cG0xLmpzXG4gKiogbW9kdWxlIGlkID0gODRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4xNCBNYXRoLmV4cG0xKHgpXG5tb2R1bGUuZXhwb3J0cyA9IE1hdGguZXhwbTEgfHwgZnVuY3Rpb24gZXhwbTEoeCl7XG4gIHJldHVybiAoeCA9ICt4KSA9PSAwID8geCA6IHggPiAtMWUtNiAmJiB4IDwgMWUtNiA/IHggKyB4ICogeCAvIDIgOiBNYXRoLmV4cCh4KSAtIDE7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQubWF0aC1leHBtMS5qc1xuICoqIG1vZHVsZSBpZCA9IDg1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4yLjIuMTYgTWF0aC5mcm91bmQoeClcbnZhciAkZXhwb3J0ICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBzaWduICAgICAgPSByZXF1aXJlKCcuLyQubWF0aC1zaWduJylcbiAgLCBwb3cgICAgICAgPSBNYXRoLnBvd1xuICAsIEVQU0lMT04gICA9IHBvdygyLCAtNTIpXG4gICwgRVBTSUxPTjMyID0gcG93KDIsIC0yMylcbiAgLCBNQVgzMiAgICAgPSBwb3coMiwgMTI3KSAqICgyIC0gRVBTSUxPTjMyKVxuICAsIE1JTjMyICAgICA9IHBvdygyLCAtMTI2KTtcblxudmFyIHJvdW5kVGllc1RvRXZlbiA9IGZ1bmN0aW9uKG4pe1xuICByZXR1cm4gbiArIDEgLyBFUFNJTE9OIC0gMSAvIEVQU0lMT047XG59O1xuXG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgZnJvdW5kOiBmdW5jdGlvbiBmcm91bmQoeCl7XG4gICAgdmFyICRhYnMgID0gTWF0aC5hYnMoeClcbiAgICAgICwgJHNpZ24gPSBzaWduKHgpXG4gICAgICAsIGEsIHJlc3VsdDtcbiAgICBpZigkYWJzIDwgTUlOMzIpcmV0dXJuICRzaWduICogcm91bmRUaWVzVG9FdmVuKCRhYnMgLyBNSU4zMiAvIEVQU0lMT04zMikgKiBNSU4zMiAqIEVQU0lMT04zMjtcbiAgICBhID0gKDEgKyBFUFNJTE9OMzIgLyBFUFNJTE9OKSAqICRhYnM7XG4gICAgcmVzdWx0ID0gYSAtIChhIC0gJGFicyk7XG4gICAgaWYocmVzdWx0ID4gTUFYMzIgfHwgcmVzdWx0ICE9IHJlc3VsdClyZXR1cm4gJHNpZ24gKiBJbmZpbml0eTtcbiAgICByZXR1cm4gJHNpZ24gKiByZXN1bHQ7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5tYXRoLmZyb3VuZC5qc1xuICoqIG1vZHVsZSBpZCA9IDg2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4yLjIuMTcgTWF0aC5oeXBvdChbdmFsdWUxWywgdmFsdWUyWywg4oCmIF1dXSlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgYWJzICAgICA9IE1hdGguYWJzO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7XG4gIGh5cG90OiBmdW5jdGlvbiBoeXBvdCh2YWx1ZTEsIHZhbHVlMil7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgc3VtICAgPSAwXG4gICAgICAsIGkgICAgID0gMFxuICAgICAgLCAkJCAgICA9IGFyZ3VtZW50c1xuICAgICAgLCAkJGxlbiA9ICQkLmxlbmd0aFxuICAgICAgLCBsYXJnICA9IDBcbiAgICAgICwgYXJnLCBkaXY7XG4gICAgd2hpbGUoaSA8ICQkbGVuKXtcbiAgICAgIGFyZyA9IGFicygkJFtpKytdKTtcbiAgICAgIGlmKGxhcmcgPCBhcmcpe1xuICAgICAgICBkaXYgID0gbGFyZyAvIGFyZztcbiAgICAgICAgc3VtICA9IHN1bSAqIGRpdiAqIGRpdiArIDE7XG4gICAgICAgIGxhcmcgPSBhcmc7XG4gICAgICB9IGVsc2UgaWYoYXJnID4gMCl7XG4gICAgICAgIGRpdiAgPSBhcmcgLyBsYXJnO1xuICAgICAgICBzdW0gKz0gZGl2ICogZGl2O1xuICAgICAgfSBlbHNlIHN1bSArPSBhcmc7XG4gICAgfVxuICAgIHJldHVybiBsYXJnID09PSBJbmZpbml0eSA/IEluZmluaXR5IDogbGFyZyAqIE1hdGguc3FydChzdW0pO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5oeXBvdC5qc1xuICoqIG1vZHVsZSBpZCA9IDg3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4yLjIuMTggTWF0aC5pbXVsKHgsIHkpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsICRpbXVsICAgPSBNYXRoLmltdWw7XG5cbi8vIHNvbWUgV2ViS2l0IHZlcnNpb25zIGZhaWxzIHdpdGggYmlnIG51bWJlcnMsIHNvbWUgaGFzIHdyb25nIGFyaXR5XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vJC5mYWlscycpKGZ1bmN0aW9uKCl7XG4gIHJldHVybiAkaW11bCgweGZmZmZmZmZmLCA1KSAhPSAtNSB8fCAkaW11bC5sZW5ndGggIT0gMjtcbn0pLCAnTWF0aCcsIHtcbiAgaW11bDogZnVuY3Rpb24gaW11bCh4LCB5KXtcbiAgICB2YXIgVUlOVDE2ID0gMHhmZmZmXG4gICAgICAsIHhuID0gK3hcbiAgICAgICwgeW4gPSAreVxuICAgICAgLCB4bCA9IFVJTlQxNiAmIHhuXG4gICAgICAsIHlsID0gVUlOVDE2ICYgeW47XG4gICAgcmV0dXJuIDAgfCB4bCAqIHlsICsgKChVSU5UMTYgJiB4biA+Pj4gMTYpICogeWwgKyB4bCAqIChVSU5UMTYgJiB5biA+Pj4gMTYpIDw8IDE2ID4+PiAwKTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguaW11bC5qc1xuICoqIG1vZHVsZSBpZCA9IDg4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4yLjIuMjEgTWF0aC5sb2cxMCh4KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgbG9nMTA6IGZ1bmN0aW9uIGxvZzEwKHgpe1xuICAgIHJldHVybiBNYXRoLmxvZyh4KSAvIE1hdGguTE4xMDtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGgubG9nMTAuanNcbiAqKiBtb2R1bGUgaWQgPSA4OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjAuMi4yLjIwIE1hdGgubG9nMXAoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7bG9nMXA6IHJlcXVpcmUoJy4vJC5tYXRoLWxvZzFwJyl9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cxcC5qc1xuICoqIG1vZHVsZSBpZCA9IDkwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4yLjIuMjIgTWF0aC5sb2cyKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICBsb2cyOiBmdW5jdGlvbiBsb2cyKHgpe1xuICAgIHJldHVybiBNYXRoLmxvZyh4KSAvIE1hdGguTE4yO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5sb2cyLmpzXG4gKiogbW9kdWxlIGlkID0gOTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4yOCBNYXRoLnNpZ24oeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ01hdGgnLCB7c2lnbjogcmVxdWlyZSgnLi8kLm1hdGgtc2lnbicpfSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2Lm1hdGguc2lnbi5qc1xuICoqIG1vZHVsZSBpZCA9IDkyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMC4yLjIuMzAgTWF0aC5zaW5oKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGV4cG0xICAgPSByZXF1aXJlKCcuLyQubWF0aC1leHBtMScpXG4gICwgZXhwICAgICA9IE1hdGguZXhwO1xuXG4vLyBWOCBuZWFyIENocm9taXVtIDM4IGhhcyBhIHByb2JsZW0gd2l0aCB2ZXJ5IHNtYWxsIG51bWJlcnNcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmV0dXJuICFNYXRoLnNpbmgoLTJlLTE3KSAhPSAtMmUtMTc7XG59KSwgJ01hdGgnLCB7XG4gIHNpbmg6IGZ1bmN0aW9uIHNpbmgoeCl7XG4gICAgcmV0dXJuIE1hdGguYWJzKHggPSAreCkgPCAxXG4gICAgICA/IChleHBtMSh4KSAtIGV4cG0xKC14KSkgLyAyXG4gICAgICA6IChleHAoeCAtIDEpIC0gZXhwKC14IC0gMSkpICogKE1hdGguRSAvIDIpO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC5zaW5oLmpzXG4gKiogbW9kdWxlIGlkID0gOTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4zMyBNYXRoLnRhbmgoeClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgZXhwbTEgICA9IHJlcXVpcmUoJy4vJC5tYXRoLWV4cG0xJylcbiAgLCBleHAgICAgID0gTWF0aC5leHA7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTWF0aCcsIHtcbiAgdGFuaDogZnVuY3Rpb24gdGFuaCh4KXtcbiAgICB2YXIgYSA9IGV4cG0xKHggPSAreClcbiAgICAgICwgYiA9IGV4cG0xKC14KTtcbiAgICByZXR1cm4gYSA9PSBJbmZpbml0eSA/IDEgOiBiID09IEluZmluaXR5ID8gLTEgOiAoYSAtIGIpIC8gKGV4cCh4KSArIGV4cCgteCkpO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC50YW5oLmpzXG4gKiogbW9kdWxlIGlkID0gOTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIwLjIuMi4zNCBNYXRoLnRydW5jKHgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdNYXRoJywge1xuICB0cnVuYzogZnVuY3Rpb24gdHJ1bmMoaXQpe1xuICAgIHJldHVybiAoaXQgPiAwID8gTWF0aC5mbG9vciA6IE1hdGguY2VpbCkoaXQpO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWF0aC50cnVuYy5qc1xuICoqIG1vZHVsZSBpZCA9IDk1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgJGV4cG9ydCAgICAgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCB0b0luZGV4ICAgICAgICA9IHJlcXVpcmUoJy4vJC50by1pbmRleCcpXG4gICwgZnJvbUNoYXJDb2RlICAgPSBTdHJpbmcuZnJvbUNoYXJDb2RlXG4gICwgJGZyb21Db2RlUG9pbnQgPSBTdHJpbmcuZnJvbUNvZGVQb2ludDtcblxuLy8gbGVuZ3RoIHNob3VsZCBiZSAxLCBvbGQgRkYgcHJvYmxlbVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoISEkZnJvbUNvZGVQb2ludCAmJiAkZnJvbUNvZGVQb2ludC5sZW5ndGggIT0gMSksICdTdHJpbmcnLCB7XG4gIC8vIDIxLjEuMi4yIFN0cmluZy5mcm9tQ29kZVBvaW50KC4uLmNvZGVQb2ludHMpXG4gIGZyb21Db2RlUG9pbnQ6IGZ1bmN0aW9uIGZyb21Db2RlUG9pbnQoeCl7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgICB2YXIgcmVzICAgPSBbXVxuICAgICAgLCAkJCAgICA9IGFyZ3VtZW50c1xuICAgICAgLCAkJGxlbiA9ICQkLmxlbmd0aFxuICAgICAgLCBpICAgICA9IDBcbiAgICAgICwgY29kZTtcbiAgICB3aGlsZSgkJGxlbiA+IGkpe1xuICAgICAgY29kZSA9ICskJFtpKytdO1xuICAgICAgaWYodG9JbmRleChjb2RlLCAweDEwZmZmZikgIT09IGNvZGUpdGhyb3cgUmFuZ2VFcnJvcihjb2RlICsgJyBpcyBub3QgYSB2YWxpZCBjb2RlIHBvaW50Jyk7XG4gICAgICByZXMucHVzaChjb2RlIDwgMHgxMDAwMFxuICAgICAgICA/IGZyb21DaGFyQ29kZShjb2RlKVxuICAgICAgICA6IGZyb21DaGFyQ29kZSgoKGNvZGUgLT0gMHgxMDAwMCkgPj4gMTApICsgMHhkODAwLCBjb2RlICUgMHg0MDAgKyAweGRjMDApXG4gICAgICApO1xuICAgIH0gcmV0dXJuIHJlcy5qb2luKCcnKTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5mcm9tLWNvZGUtcG9pbnQuanNcbiAqKiBtb2R1bGUgaWQgPSA5NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICRleHBvcnQgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0JylcbiAgLCB0b0xlbmd0aCAgPSByZXF1aXJlKCcuLyQudG8tbGVuZ3RoJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnU3RyaW5nJywge1xuICAvLyAyMS4xLjIuNCBTdHJpbmcucmF3KGNhbGxTaXRlLCAuLi5zdWJzdGl0dXRpb25zKVxuICByYXc6IGZ1bmN0aW9uIHJhdyhjYWxsU2l0ZSl7XG4gICAgdmFyIHRwbCAgID0gdG9JT2JqZWN0KGNhbGxTaXRlLnJhdylcbiAgICAgICwgbGVuICAgPSB0b0xlbmd0aCh0cGwubGVuZ3RoKVxuICAgICAgLCAkJCAgICA9IGFyZ3VtZW50c1xuICAgICAgLCAkJGxlbiA9ICQkLmxlbmd0aFxuICAgICAgLCByZXMgICA9IFtdXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB3aGlsZShsZW4gPiBpKXtcbiAgICAgIHJlcy5wdXNoKFN0cmluZyh0cGxbaSsrXSkpO1xuICAgICAgaWYoaSA8ICQkbGVuKXJlcy5wdXNoKFN0cmluZygkJFtpXSkpO1xuICAgIH0gcmV0dXJuIHJlcy5qb2luKCcnKTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5yYXcuanNcbiAqKiBtb2R1bGUgaWQgPSA5N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjEuMS4zLjI1IFN0cmluZy5wcm90b3R5cGUudHJpbSgpXG5yZXF1aXJlKCcuLyQuc3RyaW5nLXRyaW0nKSgndHJpbScsIGZ1bmN0aW9uKCR0cmltKXtcbiAgcmV0dXJuIGZ1bmN0aW9uIHRyaW0oKXtcbiAgICByZXR1cm4gJHRyaW0odGhpcywgMyk7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnRyaW0uanNcbiAqKiBtb2R1bGUgaWQgPSA5OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vJC5pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24oKXtcbiAgdmFyIE8gICAgID0gdGhpcy5fdFxuICAgICwgaW5kZXggPSB0aGlzLl9pXG4gICAgLCBwb2ludDtcbiAgaWYoaW5kZXggPj0gTy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHt2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSA5OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vJC50by1pbnRlZ2VyJylcbiAgLCBkZWZpbmVkICAgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oVE9fU1RSSU5HKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKHRoYXQsIHBvcyl7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAgICwgaSA9IHRvSW50ZWdlcihwb3MpXG4gICAgICAsIGwgPSBzLmxlbmd0aFxuICAgICAgLCBhLCBiO1xuICAgIGlmKGkgPCAwIHx8IGkgPj0gbClyZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnN0cmluZy1hdC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgICAgICAgID0gcmVxdWlyZSgnLi8kLmxpYnJhcnknKVxuICAsICRleHBvcnQgICAgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgcmVkZWZpbmUgICAgICAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUnKVxuICAsIGhpZGUgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhpZGUnKVxuICAsIGhhcyAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmhhcycpXG4gICwgSXRlcmF0b3JzICAgICAgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJylcbiAgLCAkaXRlckNyZWF0ZSAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLWNyZWF0ZScpXG4gICwgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuLyQuc2V0LXRvLXN0cmluZy10YWcnKVxuICAsIGdldFByb3RvICAgICAgID0gcmVxdWlyZSgnLi8kJykuZ2V0UHJvdG9cbiAgLCBJVEVSQVRPUiAgICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEJVR0dZICAgICAgICAgID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpIC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbiAgLCBGRl9JVEVSQVRPUiAgICA9ICdAQGl0ZXJhdG9yJ1xuICAsIEtFWVMgICAgICAgICAgID0gJ2tleXMnXG4gICwgVkFMVUVTICAgICAgICAgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpe1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbihraW5kKXtcbiAgICBpZighQlVHR1kgJiYga2luZCBpbiBwcm90bylyZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoKGtpbmQpe1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKXsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCl7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgICAgICAgID0gTkFNRSArICcgSXRlcmF0b3InXG4gICAgLCBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVNcbiAgICAsIFZBTFVFU19CVUcgPSBmYWxzZVxuICAgICwgcHJvdG8gICAgICA9IEJhc2UucHJvdG90eXBlXG4gICAgLCAkbmF0aXZlICAgID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdXG4gICAgLCAkZGVmYXVsdCAgID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVClcbiAgICAsIG1ldGhvZHMsIGtleTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZigkbmF0aXZlKXtcbiAgICB2YXIgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90bygkZGVmYXVsdC5jYWxsKG5ldyBCYXNlKSk7XG4gICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgIC8vIEZGIGZpeFxuICAgIGlmKCFMSUJSQVJZICYmIGhhcyhwcm90bywgRkZfSVRFUkFUT1IpKWhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gICAgaWYoREVGX1ZBTFVFUyAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUyl7XG4gICAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCl7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gICAgfVxuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZigoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSl7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSAgPSByZXR1cm5UaGlzO1xuICBpZihERUZBVUxUKXtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiAgREVGX1ZBTFVFUyAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogICAgSVNfU0VUICAgICAgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKVxuICAgIH07XG4gICAgaWYoRk9SQ0VEKWZvcihrZXkgaW4gbWV0aG9kcyl7XG4gICAgICBpZighKGtleSBpbiBwcm90bykpcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLml0ZXItZGVmaW5lLmpzXG4gKiogbW9kdWxlIGlkID0gMTAxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXRlcmF0b3JzLmpzXG4gKiogbW9kdWxlIGlkID0gMTAyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJCAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGRlc2NyaXB0b3IgICAgID0gcmVxdWlyZSgnLi8kLnByb3BlcnR5LWRlc2MnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJylcbiAgLCBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi8kLmhpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpe1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSAkLmNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwge25leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCl9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXRlci1jcmVhdGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgJGF0ICAgICA9IHJlcXVpcmUoJy4vJC5zdHJpbmctYXQnKShmYWxzZSk7XG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcbiAgLy8gMjEuMS4zLjMgU3RyaW5nLnByb3RvdHlwZS5jb2RlUG9pbnRBdChwb3MpXG4gIGNvZGVQb2ludEF0OiBmdW5jdGlvbiBjb2RlUG9pbnRBdChwb3Mpe1xuICAgIHJldHVybiAkYXQodGhpcywgcG9zKTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnN0cmluZy5jb2RlLXBvaW50LWF0LmpzXG4gKiogbW9kdWxlIGlkID0gMTA0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMS4xLjMuNiBTdHJpbmcucHJvdG90eXBlLmVuZHNXaXRoKHNlYXJjaFN0cmluZyBbLCBlbmRQb3NpdGlvbl0pXG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgdG9MZW5ndGggID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpXG4gICwgY29udGV4dCAgID0gcmVxdWlyZSgnLi8kLnN0cmluZy1jb250ZXh0JylcbiAgLCBFTkRTX1dJVEggPSAnZW5kc1dpdGgnXG4gICwgJGVuZHNXaXRoID0gJydbRU5EU19XSVRIXTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuLyQuZmFpbHMtaXMtcmVnZXhwJykoRU5EU19XSVRIKSwgJ1N0cmluZycsIHtcbiAgZW5kc1dpdGg6IGZ1bmN0aW9uIGVuZHNXaXRoKHNlYXJjaFN0cmluZyAvKiwgZW5kUG9zaXRpb24gPSBAbGVuZ3RoICovKXtcbiAgICB2YXIgdGhhdCA9IGNvbnRleHQodGhpcywgc2VhcmNoU3RyaW5nLCBFTkRTX1dJVEgpXG4gICAgICAsICQkICAgPSBhcmd1bWVudHNcbiAgICAgICwgZW5kUG9zaXRpb24gPSAkJC5sZW5ndGggPiAxID8gJCRbMV0gOiB1bmRlZmluZWRcbiAgICAgICwgbGVuICAgID0gdG9MZW5ndGgodGhhdC5sZW5ndGgpXG4gICAgICAsIGVuZCAgICA9IGVuZFBvc2l0aW9uID09PSB1bmRlZmluZWQgPyBsZW4gOiBNYXRoLm1pbih0b0xlbmd0aChlbmRQb3NpdGlvbiksIGxlbilcbiAgICAgICwgc2VhcmNoID0gU3RyaW5nKHNlYXJjaFN0cmluZyk7XG4gICAgcmV0dXJuICRlbmRzV2l0aFxuICAgICAgPyAkZW5kc1dpdGguY2FsbCh0aGF0LCBzZWFyY2gsIGVuZClcbiAgICAgIDogdGhhdC5zbGljZShlbmQgLSBzZWFyY2gubGVuZ3RoLCBlbmQpID09PSBzZWFyY2g7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuZW5kcy13aXRoLmpzXG4gKiogbW9kdWxlIGlkID0gMTA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBoZWxwZXIgZm9yIFN0cmluZyN7c3RhcnRzV2l0aCwgZW5kc1dpdGgsIGluY2x1ZGVzfVxudmFyIGlzUmVnRXhwID0gcmVxdWlyZSgnLi8kLmlzLXJlZ2V4cCcpXG4gICwgZGVmaW5lZCAgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRoYXQsIHNlYXJjaFN0cmluZywgTkFNRSl7XG4gIGlmKGlzUmVnRXhwKHNlYXJjaFN0cmluZykpdGhyb3cgVHlwZUVycm9yKCdTdHJpbmcjJyArIE5BTUUgKyBcIiBkb2Vzbid0IGFjY2VwdCByZWdleCFcIik7XG4gIHJldHVybiBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuc3RyaW5nLWNvbnRleHQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMi44IElzUmVnRXhwKGFyZ3VtZW50KVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgY29mICAgICAgPSByZXF1aXJlKCcuLyQuY29mJylcbiAgLCBNQVRDSCAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnbWF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICB2YXIgaXNSZWdFeHA7XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgKChpc1JlZ0V4cCA9IGl0W01BVENIXSkgIT09IHVuZGVmaW5lZCA/ICEhaXNSZWdFeHAgOiBjb2YoaXQpID09ICdSZWdFeHAnKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5pcy1yZWdleHAuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBNQVRDSCA9IHJlcXVpcmUoJy4vJC53a3MnKSgnbWF0Y2gnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZKXtcbiAgdmFyIHJlID0gLy4vO1xuICB0cnkge1xuICAgICcvLi8nW0tFWV0ocmUpO1xuICB9IGNhdGNoKGUpe1xuICAgIHRyeSB7XG4gICAgICByZVtNQVRDSF0gPSBmYWxzZTtcbiAgICAgIHJldHVybiAhJy8uLydbS0VZXShyZSk7XG4gICAgfSBjYXRjaChmKXsgLyogZW1wdHkgKi8gfVxuICB9IHJldHVybiB0cnVlO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmZhaWxzLWlzLXJlZ2V4cC5qc1xuICoqIG1vZHVsZSBpZCA9IDEwOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjEuMS4zLjcgU3RyaW5nLnByb3RvdHlwZS5pbmNsdWRlcyhzZWFyY2hTdHJpbmcsIHBvc2l0aW9uID0gMClcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGNvbnRleHQgID0gcmVxdWlyZSgnLi8kLnN0cmluZy1jb250ZXh0JylcbiAgLCBJTkNMVURFUyA9ICdpbmNsdWRlcyc7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi8kLmZhaWxzLWlzLXJlZ2V4cCcpKElOQ0xVREVTKSwgJ1N0cmluZycsIHtcbiAgaW5jbHVkZXM6IGZ1bmN0aW9uIGluY2x1ZGVzKHNlYXJjaFN0cmluZyAvKiwgcG9zaXRpb24gPSAwICovKXtcbiAgICByZXR1cm4gISF+Y29udGV4dCh0aGlzLCBzZWFyY2hTdHJpbmcsIElOQ0xVREVTKVxuICAgICAgLmluZGV4T2Yoc2VhcmNoU3RyaW5nLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaW5jbHVkZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxMDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcbiAgLy8gMjEuMS4zLjEzIFN0cmluZy5wcm90b3R5cGUucmVwZWF0KGNvdW50KVxuICByZXBlYXQ6IHJlcXVpcmUoJy4vJC5zdHJpbmctcmVwZWF0Jylcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcucmVwZWF0LmpzXG4gKiogbW9kdWxlIGlkID0gMTEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi8kLnRvLWludGVnZXInKVxuICAsIGRlZmluZWQgICA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gcmVwZWF0KGNvdW50KXtcbiAgdmFyIHN0ciA9IFN0cmluZyhkZWZpbmVkKHRoaXMpKVxuICAgICwgcmVzID0gJydcbiAgICAsIG4gICA9IHRvSW50ZWdlcihjb3VudCk7XG4gIGlmKG4gPCAwIHx8IG4gPT0gSW5maW5pdHkpdGhyb3cgUmFuZ2VFcnJvcihcIkNvdW50IGNhbid0IGJlIG5lZ2F0aXZlXCIpO1xuICBmb3IoO24gPiAwOyAobiA+Pj49IDEpICYmIChzdHIgKz0gc3RyKSlpZihuICYgMSlyZXMgKz0gc3RyO1xuICByZXR1cm4gcmVzO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnN0cmluZy1yZXBlYXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIxLjEuMy4xOCBTdHJpbmcucHJvdG90eXBlLnN0YXJ0c1dpdGgoc2VhcmNoU3RyaW5nIFssIHBvc2l0aW9uIF0pXG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCAgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vJC50by1sZW5ndGgnKVxuICAsIGNvbnRleHQgICAgID0gcmVxdWlyZSgnLi8kLnN0cmluZy1jb250ZXh0JylcbiAgLCBTVEFSVFNfV0lUSCA9ICdzdGFydHNXaXRoJ1xuICAsICRzdGFydHNXaXRoID0gJydbU1RBUlRTX1dJVEhdO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIHJlcXVpcmUoJy4vJC5mYWlscy1pcy1yZWdleHAnKShTVEFSVFNfV0lUSCksICdTdHJpbmcnLCB7XG4gIHN0YXJ0c1dpdGg6IGZ1bmN0aW9uIHN0YXJ0c1dpdGgoc2VhcmNoU3RyaW5nIC8qLCBwb3NpdGlvbiA9IDAgKi8pe1xuICAgIHZhciB0aGF0ICAgPSBjb250ZXh0KHRoaXMsIHNlYXJjaFN0cmluZywgU1RBUlRTX1dJVEgpXG4gICAgICAsICQkICAgICA9IGFyZ3VtZW50c1xuICAgICAgLCBpbmRleCAgPSB0b0xlbmd0aChNYXRoLm1pbigkJC5sZW5ndGggPiAxID8gJCRbMV0gOiB1bmRlZmluZWQsIHRoYXQubGVuZ3RoKSlcbiAgICAgICwgc2VhcmNoID0gU3RyaW5nKHNlYXJjaFN0cmluZyk7XG4gICAgcmV0dXJuICRzdGFydHNXaXRoXG4gICAgICA/ICRzdGFydHNXaXRoLmNhbGwodGhhdCwgc2VhcmNoLCBpbmRleClcbiAgICAgIDogdGhhdC5zbGljZShpbmRleCwgaW5kZXggKyBzZWFyY2gubGVuZ3RoKSA9PT0gc2VhcmNoO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuc3RyaW5nLnN0YXJ0cy13aXRoLmpzXG4gKiogbW9kdWxlIGlkID0gMTEyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgY3R4ICAgICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCAkZXhwb3J0ICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHRvT2JqZWN0ICAgID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vJC5pcy1hcnJheS1pdGVyJylcbiAgLCB0b0xlbmd0aCAgICA9IHJlcXVpcmUoJy4vJC50by1sZW5ndGgnKVxuICAsIGdldEl0ZXJGbiAgID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIXJlcXVpcmUoJy4vJC5pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpeyBBcnJheS5mcm9tKGl0ZXIpOyB9KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMSBBcnJheS5mcm9tKGFycmF5TGlrZSwgbWFwZm4gPSB1bmRlZmluZWQsIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gIGZyb206IGZ1bmN0aW9uIGZyb20oYXJyYXlMaWtlLyosIG1hcGZuID0gdW5kZWZpbmVkLCB0aGlzQXJnID0gdW5kZWZpbmVkKi8pe1xuICAgIHZhciBPICAgICAgID0gdG9PYmplY3QoYXJyYXlMaWtlKVxuICAgICAgLCBDICAgICAgID0gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheVxuICAgICAgLCAkJCAgICAgID0gYXJndW1lbnRzXG4gICAgICAsICQkbGVuICAgPSAkJC5sZW5ndGhcbiAgICAgICwgbWFwZm4gICA9ICQkbGVuID4gMSA/ICQkWzFdIDogdW5kZWZpbmVkXG4gICAgICAsIG1hcHBpbmcgPSBtYXBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICAsIGluZGV4ICAgPSAwXG4gICAgICAsIGl0ZXJGbiAgPSBnZXRJdGVyRm4oTylcbiAgICAgICwgbGVuZ3RoLCByZXN1bHQsIHN0ZXAsIGl0ZXJhdG9yO1xuICAgIGlmKG1hcHBpbmcpbWFwZm4gPSBjdHgobWFwZm4sICQkbGVuID4gMiA/ICQkWzJdIDogdW5kZWZpbmVkLCAyKTtcbiAgICAvLyBpZiBvYmplY3QgaXNuJ3QgaXRlcmFibGUgb3IgaXQncyBhcnJheSB3aXRoIGRlZmF1bHQgaXRlcmF0b3IgLSB1c2Ugc2ltcGxlIGNhc2VcbiAgICBpZihpdGVyRm4gIT0gdW5kZWZpbmVkICYmICEoQyA9PSBBcnJheSAmJiBpc0FycmF5SXRlcihpdGVyRm4pKSl7XG4gICAgICBmb3IoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChPKSwgcmVzdWx0ID0gbmV3IEM7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTsgaW5kZXgrKyl7XG4gICAgICAgIHJlc3VsdFtpbmRleF0gPSBtYXBwaW5nID8gY2FsbChpdGVyYXRvciwgbWFwZm4sIFtzdGVwLnZhbHVlLCBpbmRleF0sIHRydWUpIDogc3RlcC52YWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgICAgZm9yKHJlc3VsdCA9IG5ldyBDKGxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKXtcbiAgICAgICAgcmVzdWx0W2luZGV4XSA9IG1hcHBpbmcgPyBtYXBmbihPW2luZGV4XSwgaW5kZXgpIDogT1tpbmRleF07XG4gICAgICB9XG4gICAgfVxuICAgIHJlc3VsdC5sZW5ndGggPSBpbmRleDtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5mcm9tLmpzXG4gKiogbW9kdWxlIGlkID0gMTEzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpe1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2goZSl7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZihyZXQgIT09IHVuZGVmaW5lZClhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5pdGVyLWNhbGwuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnaXRlcmF0b3InKVxuICAsIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXQpe1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmlzLWFycmF5LWl0ZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjbGFzc29mICAgPSByZXF1aXJlKCcuLyQuY2xhc3NvZicpXG4gICwgSVRFUkFUT1IgID0gcmVxdWlyZSgnLi8kLndrcycpKCdpdGVyYXRvcicpXG4gICwgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24oaXQpe1xuICBpZihpdCAhPSB1bmRlZmluZWQpcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBJVEVSQVRPUiAgICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbigpeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbigpeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihleGVjLCBza2lwQ2xvc2luZyl7XG4gIGlmKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKXJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyICA9IFs3XVxuICAgICAgLCBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uKCl7IHNhZmUgPSB0cnVlOyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbigpeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2goZSl7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXRlci1kZXRlY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4vLyBXZWJLaXQgQXJyYXkub2YgaXNuJ3QgZ2VuZXJpY1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICBmdW5jdGlvbiBGKCl7fVxuICByZXR1cm4gIShBcnJheS5vZi5jYWxsKEYpIGluc3RhbmNlb2YgRik7XG59KSwgJ0FycmF5Jywge1xuICAvLyAyMi4xLjIuMyBBcnJheS5vZiggLi4uaXRlbXMpXG4gIG9mOiBmdW5jdGlvbiBvZigvKiAuLi5hcmdzICovKXtcbiAgICB2YXIgaW5kZXggID0gMFxuICAgICAgLCAkJCAgICAgPSBhcmd1bWVudHNcbiAgICAgICwgJCRsZW4gID0gJCQubGVuZ3RoXG4gICAgICAsIHJlc3VsdCA9IG5ldyAodHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyA/IHRoaXMgOiBBcnJheSkoJCRsZW4pO1xuICAgIHdoaWxlKCQkbGVuID4gaW5kZXgpcmVzdWx0W2luZGV4XSA9ICQkW2luZGV4KytdO1xuICAgIHJlc3VsdC5sZW5ndGggPSAkJGxlbjtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkub2YuanNcbiAqKiBtb2R1bGUgaWQgPSAxMThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi8kLmFkZC10by11bnNjb3BhYmxlcycpXG4gICwgc3RlcCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLXN0ZXAnKVxuICAsIEl0ZXJhdG9ycyAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlcmF0b3JzJylcbiAgLCB0b0lPYmplY3QgICAgICAgID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uKCl7XG4gIHZhciBPICAgICA9IHRoaXMuX3RcbiAgICAsIGtpbmQgID0gdGhpcy5fa1xuICAgICwgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKXtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmKGtpbmQgPT0gJ2tleXMnICApcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZihraW5kID09ICd2YWx1ZXMnKXJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuaXRlcmF0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxMTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vJC53a3MnKSgndW5zY29wYWJsZXMnKVxuICAsIEFycmF5UHJvdG8gID0gQXJyYXkucHJvdG90eXBlO1xuaWYoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKXJlcXVpcmUoJy4vJC5oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oa2V5KXtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuYWRkLXRvLXVuc2NvcGFibGVzLmpzXG4gKiogbW9kdWxlIGlkID0gMTIwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGRvbmUsIHZhbHVlKXtcbiAgcmV0dXJuIHt2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZX07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuaXRlci1zdGVwLmpzXG4gKiogbW9kdWxlIGlkID0gMTIxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJyZXF1aXJlKCcuLyQuc2V0LXNwZWNpZXMnKSgnQXJyYXknKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuc3BlY2llcy5qc1xuICoqIG1vZHVsZSBpZCA9IDEyMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCAgICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgJCAgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJylcbiAgLCBTUEVDSUVTICAgICA9IHJlcXVpcmUoJy4vJC53a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKEtFWSl7XG4gIHZhciBDID0gZ2xvYmFsW0tFWV07XG4gIGlmKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pJC5zZXREZXNjKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbigpeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zZXQtc3BlY2llcy5qc1xuICoqIG1vZHVsZSBpZCA9IDEyM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjIuMS4zLjMgQXJyYXkucHJvdG90eXBlLmNvcHlXaXRoaW4odGFyZ2V0LCBzdGFydCwgZW5kID0gdGhpcy5sZW5ndGgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHtjb3B5V2l0aGluOiByZXF1aXJlKCcuLyQuYXJyYXktY29weS13aXRoaW4nKX0pO1xuXG5yZXF1aXJlKCcuLyQuYWRkLXRvLXVuc2NvcGFibGVzJykoJ2NvcHlXaXRoaW4nKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuY29weS13aXRoaW4uanNcbiAqKiBtb2R1bGUgaWQgPSAxMjRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDIyLjEuMy4zIEFycmF5LnByb3RvdHlwZS5jb3B5V2l0aGluKHRhcmdldCwgc3RhcnQsIGVuZCA9IHRoaXMubGVuZ3RoKVxuJ3VzZSBzdHJpY3QnO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi8kLnRvLW9iamVjdCcpXG4gICwgdG9JbmRleCAgPSByZXF1aXJlKCcuLyQudG8taW5kZXgnKVxuICAsIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IFtdLmNvcHlXaXRoaW4gfHwgZnVuY3Rpb24gY29weVdpdGhpbih0YXJnZXQvKj0gMCovLCBzdGFydC8qPSAwLCBlbmQgPSBAbGVuZ3RoKi8pe1xuICB2YXIgTyAgICAgPSB0b09iamVjdCh0aGlzKVxuICAgICwgbGVuICAgPSB0b0xlbmd0aChPLmxlbmd0aClcbiAgICAsIHRvICAgID0gdG9JbmRleCh0YXJnZXQsIGxlbilcbiAgICAsIGZyb20gID0gdG9JbmRleChzdGFydCwgbGVuKVxuICAgICwgJCQgICAgPSBhcmd1bWVudHNcbiAgICAsIGVuZCAgID0gJCQubGVuZ3RoID4gMiA/ICQkWzJdIDogdW5kZWZpbmVkXG4gICAgLCBjb3VudCA9IE1hdGgubWluKChlbmQgPT09IHVuZGVmaW5lZCA/IGxlbiA6IHRvSW5kZXgoZW5kLCBsZW4pKSAtIGZyb20sIGxlbiAtIHRvKVxuICAgICwgaW5jICAgPSAxO1xuICBpZihmcm9tIDwgdG8gJiYgdG8gPCBmcm9tICsgY291bnQpe1xuICAgIGluYyAgPSAtMTtcbiAgICBmcm9tICs9IGNvdW50IC0gMTtcbiAgICB0byAgICs9IGNvdW50IC0gMTtcbiAgfVxuICB3aGlsZShjb3VudC0tID4gMCl7XG4gICAgaWYoZnJvbSBpbiBPKU9bdG9dID0gT1tmcm9tXTtcbiAgICBlbHNlIGRlbGV0ZSBPW3RvXTtcbiAgICB0byAgICs9IGluYztcbiAgICBmcm9tICs9IGluYztcbiAgfSByZXR1cm4gTztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5hcnJheS1jb3B5LXdpdGhpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDEyNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjIuMS4zLjYgQXJyYXkucHJvdG90eXBlLmZpbGwodmFsdWUsIHN0YXJ0ID0gMCwgZW5kID0gdGhpcy5sZW5ndGgpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHtmaWxsOiByZXF1aXJlKCcuLyQuYXJyYXktZmlsbCcpfSk7XG5cbnJlcXVpcmUoJy4vJC5hZGQtdG8tdW5zY29wYWJsZXMnKSgnZmlsbCcpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5hcnJheS5maWxsLmpzXG4gKiogbW9kdWxlIGlkID0gMTI2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMi4xLjMuNiBBcnJheS5wcm90b3R5cGUuZmlsbCh2YWx1ZSwgc3RhcnQgPSAwLCBlbmQgPSB0aGlzLmxlbmd0aClcbid1c2Ugc3RyaWN0JztcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vJC50by1vYmplY3QnKVxuICAsIHRvSW5kZXggID0gcmVxdWlyZSgnLi8kLnRvLWluZGV4JylcbiAgLCB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vJC50by1sZW5ndGgnKTtcbm1vZHVsZS5leHBvcnRzID0gW10uZmlsbCB8fCBmdW5jdGlvbiBmaWxsKHZhbHVlIC8qLCBzdGFydCA9IDAsIGVuZCA9IEBsZW5ndGggKi8pe1xuICB2YXIgTyAgICAgID0gdG9PYmplY3QodGhpcylcbiAgICAsIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKVxuICAgICwgJCQgICAgID0gYXJndW1lbnRzXG4gICAgLCAkJGxlbiAgPSAkJC5sZW5ndGhcbiAgICAsIGluZGV4ICA9IHRvSW5kZXgoJCRsZW4gPiAxID8gJCRbMV0gOiB1bmRlZmluZWQsIGxlbmd0aClcbiAgICAsIGVuZCAgICA9ICQkbGVuID4gMiA/ICQkWzJdIDogdW5kZWZpbmVkXG4gICAgLCBlbmRQb3MgPSBlbmQgPT09IHVuZGVmaW5lZCA/IGxlbmd0aCA6IHRvSW5kZXgoZW5kLCBsZW5ndGgpO1xuICB3aGlsZShlbmRQb3MgPiBpbmRleClPW2luZGV4KytdID0gdmFsdWU7XG4gIHJldHVybiBPO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmFycmF5LWZpbGwuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIDIyLjEuMy44IEFycmF5LnByb3RvdHlwZS5maW5kKHByZWRpY2F0ZSwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgJGZpbmQgICA9IHJlcXVpcmUoJy4vJC5hcnJheS1tZXRob2RzJykoNSlcbiAgLCBLRVkgICAgID0gJ2ZpbmQnXG4gICwgZm9yY2VkICA9IHRydWU7XG4vLyBTaG91bGRuJ3Qgc2tpcCBob2xlc1xuaWYoS0VZIGluIFtdKUFycmF5KDEpW0tFWV0oZnVuY3Rpb24oKXsgZm9yY2VkID0gZmFsc2U7IH0pO1xuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiBmb3JjZWQsICdBcnJheScsIHtcbiAgZmluZDogZnVuY3Rpb24gZmluZChjYWxsYmFja2ZuLyosIHRoYXQgPSB1bmRlZmluZWQgKi8pe1xuICAgIHJldHVybiAkZmluZCh0aGlzLCBjYWxsYmFja2ZuLCBhcmd1bWVudHMubGVuZ3RoID4gMSA/IGFyZ3VtZW50c1sxXSA6IHVuZGVmaW5lZCk7XG4gIH1cbn0pO1xucmVxdWlyZSgnLi8kLmFkZC10by11bnNjb3BhYmxlcycpKEtFWSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5LmZpbmQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMjhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIDIyLjEuMy45IEFycmF5LnByb3RvdHlwZS5maW5kSW5kZXgocHJlZGljYXRlLCB0aGlzQXJnID0gdW5kZWZpbmVkKVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCAkZmluZCAgID0gcmVxdWlyZSgnLi8kLmFycmF5LW1ldGhvZHMnKSg2KVxuICAsIEtFWSAgICAgPSAnZmluZEluZGV4J1xuICAsIGZvcmNlZCAgPSB0cnVlO1xuLy8gU2hvdWxkbid0IHNraXAgaG9sZXNcbmlmKEtFWSBpbiBbXSlBcnJheSgxKVtLRVldKGZ1bmN0aW9uKCl7IGZvcmNlZCA9IGZhbHNlOyB9KTtcbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogZm9yY2VkLCAnQXJyYXknLCB7XG4gIGZpbmRJbmRleDogZnVuY3Rpb24gZmluZEluZGV4KGNhbGxiYWNrZm4vKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG4gICAgcmV0dXJuICRmaW5kKHRoaXMsIGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkKTtcbiAgfVxufSk7XG5yZXF1aXJlKCcuLyQuYWRkLXRvLXVuc2NvcGFibGVzJykoS0VZKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYuYXJyYXkuZmluZC1pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDEyOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBnbG9iYWwgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGlzUmVnRXhwID0gcmVxdWlyZSgnLi8kLmlzLXJlZ2V4cCcpXG4gICwgJGZsYWdzICAgPSByZXF1aXJlKCcuLyQuZmxhZ3MnKVxuICAsICRSZWdFeHAgID0gZ2xvYmFsLlJlZ0V4cFxuICAsIEJhc2UgICAgID0gJFJlZ0V4cFxuICAsIHByb3RvICAgID0gJFJlZ0V4cC5wcm90b3R5cGVcbiAgLCByZTEgICAgICA9IC9hL2dcbiAgLCByZTIgICAgICA9IC9hL2dcbiAgLy8gXCJuZXdcIiBjcmVhdGVzIGEgbmV3IG9iamVjdCwgb2xkIHdlYmtpdCBidWdneSBoZXJlXG4gICwgQ09SUkVDVF9ORVcgPSBuZXcgJFJlZ0V4cChyZTEpICE9PSByZTE7XG5cbmlmKHJlcXVpcmUoJy4vJC5kZXNjcmlwdG9ycycpICYmICghQ09SUkVDVF9ORVcgfHwgcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKXtcbiAgcmUyW3JlcXVpcmUoJy4vJC53a3MnKSgnbWF0Y2gnKV0gPSBmYWxzZTtcbiAgLy8gUmVnRXhwIGNvbnN0cnVjdG9yIGNhbiBhbHRlciBmbGFncyBhbmQgSXNSZWdFeHAgd29ya3MgY29ycmVjdCB3aXRoIEBAbWF0Y2hcbiAgcmV0dXJuICRSZWdFeHAocmUxKSAhPSByZTEgfHwgJFJlZ0V4cChyZTIpID09IHJlMiB8fCAkUmVnRXhwKHJlMSwgJ2knKSAhPSAnL2EvaSc7XG59KSkpe1xuICAkUmVnRXhwID0gZnVuY3Rpb24gUmVnRXhwKHAsIGYpe1xuICAgIHZhciBwaVJFID0gaXNSZWdFeHAocClcbiAgICAgICwgZmlVICA9IGYgPT09IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gISh0aGlzIGluc3RhbmNlb2YgJFJlZ0V4cCkgJiYgcGlSRSAmJiBwLmNvbnN0cnVjdG9yID09PSAkUmVnRXhwICYmIGZpVSA/IHBcbiAgICAgIDogQ09SUkVDVF9ORVdcbiAgICAgICAgPyBuZXcgQmFzZShwaVJFICYmICFmaVUgPyBwLnNvdXJjZSA6IHAsIGYpXG4gICAgICAgIDogQmFzZSgocGlSRSA9IHAgaW5zdGFuY2VvZiAkUmVnRXhwKSA/IHAuc291cmNlIDogcCwgcGlSRSAmJiBmaVUgPyAkZmxhZ3MuY2FsbChwKSA6IGYpO1xuICB9O1xuICAkLmVhY2guY2FsbCgkLmdldE5hbWVzKEJhc2UpLCBmdW5jdGlvbihrZXkpe1xuICAgIGtleSBpbiAkUmVnRXhwIHx8ICQuc2V0RGVzYygkUmVnRXhwLCBrZXksIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24oKXsgcmV0dXJuIEJhc2Vba2V5XTsgfSxcbiAgICAgIHNldDogZnVuY3Rpb24oaXQpeyBCYXNlW2tleV0gPSBpdDsgfVxuICAgIH0pO1xuICB9KTtcbiAgcHJvdG8uY29uc3RydWN0b3IgPSAkUmVnRXhwO1xuICAkUmVnRXhwLnByb3RvdHlwZSA9IHByb3RvO1xuICByZXF1aXJlKCcuLyQucmVkZWZpbmUnKShnbG9iYWwsICdSZWdFeHAnLCAkUmVnRXhwKTtcbn1cblxucmVxdWlyZSgnLi8kLnNldC1zcGVjaWVzJykoJ1JlZ0V4cCcpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuY29uc3RydWN0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0Jztcbi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCl7XG4gIHZhciB0aGF0ICAgPSBhbk9iamVjdCh0aGlzKVxuICAgICwgcmVzdWx0ID0gJyc7XG4gIGlmKHRoYXQuZ2xvYmFsKSAgICAgcmVzdWx0ICs9ICdnJztcbiAgaWYodGhhdC5pZ25vcmVDYXNlKSByZXN1bHQgKz0gJ2knO1xuICBpZih0aGF0Lm11bHRpbGluZSkgIHJlc3VsdCArPSAnbSc7XG4gIGlmKHRoYXQudW5pY29kZSkgICAgcmVzdWx0ICs9ICd1JztcbiAgaWYodGhhdC5zdGlja3kpICAgICByZXN1bHQgKz0gJ3knO1xuICByZXR1cm4gcmVzdWx0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmZsYWdzLmpzXG4gKiogbW9kdWxlIGlkID0gMTMxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyMS4yLjUuMyBnZXQgUmVnRXhwLnByb3RvdHlwZS5mbGFncygpXG52YXIgJCA9IHJlcXVpcmUoJy4vJCcpO1xuaWYocmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJykgJiYgLy4vZy5mbGFncyAhPSAnZycpJC5zZXREZXNjKFJlZ0V4cC5wcm90b3R5cGUsICdmbGFncycsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IHJlcXVpcmUoJy4vJC5mbGFncycpXG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzLmpzXG4gKiogbW9kdWxlIGlkID0gMTMyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBAQG1hdGNoIGxvZ2ljXG5yZXF1aXJlKCcuLyQuZml4LXJlLXdrcycpKCdtYXRjaCcsIDEsIGZ1bmN0aW9uKGRlZmluZWQsIE1BVENIKXtcbiAgLy8gMjEuMS4zLjExIFN0cmluZy5wcm90b3R5cGUubWF0Y2gocmVnZXhwKVxuICByZXR1cm4gZnVuY3Rpb24gbWF0Y2gocmVnZXhwKXtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIE8gID0gZGVmaW5lZCh0aGlzKVxuICAgICAgLCBmbiA9IHJlZ2V4cCA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiByZWdleHBbTUFUQ0hdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkID8gZm4uY2FsbChyZWdleHAsIE8pIDogbmV3IFJlZ0V4cChyZWdleHApW01BVENIXShTdHJpbmcoTykpO1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5tYXRjaC5qc1xuICoqIG1vZHVsZSBpZCA9IDEzM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGhpZGUgICAgID0gcmVxdWlyZSgnLi8kLmhpZGUnKVxuICAsIHJlZGVmaW5lID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJylcbiAgLCBmYWlscyAgICA9IHJlcXVpcmUoJy4vJC5mYWlscycpXG4gICwgZGVmaW5lZCAgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpXG4gICwgd2tzICAgICAgPSByZXF1aXJlKCcuLyQud2tzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oS0VZLCBsZW5ndGgsIGV4ZWMpe1xuICB2YXIgU1lNQk9MICAgPSB3a3MoS0VZKVxuICAgICwgb3JpZ2luYWwgPSAnJ1tLRVldO1xuICBpZihmYWlscyhmdW5jdGlvbigpe1xuICAgIHZhciBPID0ge307XG4gICAgT1tTWU1CT0xdID0gZnVuY3Rpb24oKXsgcmV0dXJuIDc7IH07XG4gICAgcmV0dXJuICcnW0tFWV0oTykgIT0gNztcbiAgfSkpe1xuICAgIHJlZGVmaW5lKFN0cmluZy5wcm90b3R5cGUsIEtFWSwgZXhlYyhkZWZpbmVkLCBTWU1CT0wsIG9yaWdpbmFsKSk7XG4gICAgaGlkZShSZWdFeHAucHJvdG90eXBlLCBTWU1CT0wsIGxlbmd0aCA9PSAyXG4gICAgICAvLyAyMS4yLjUuOCBSZWdFeHAucHJvdG90eXBlW0BAcmVwbGFjZV0oc3RyaW5nLCByZXBsYWNlVmFsdWUpXG4gICAgICAvLyAyMS4yLjUuMTEgUmVnRXhwLnByb3RvdHlwZVtAQHNwbGl0XShzdHJpbmcsIGxpbWl0KVxuICAgICAgPyBmdW5jdGlvbihzdHJpbmcsIGFyZyl7IHJldHVybiBvcmlnaW5hbC5jYWxsKHN0cmluZywgdGhpcywgYXJnKTsgfVxuICAgICAgLy8gMjEuMi41LjYgUmVnRXhwLnByb3RvdHlwZVtAQG1hdGNoXShzdHJpbmcpXG4gICAgICAvLyAyMS4yLjUuOSBSZWdFeHAucHJvdG90eXBlW0BAc2VhcmNoXShzdHJpbmcpXG4gICAgICA6IGZ1bmN0aW9uKHN0cmluZyl7IHJldHVybiBvcmlnaW5hbC5jYWxsKHN0cmluZywgdGhpcyk7IH1cbiAgICApO1xuICB9XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuZml4LXJlLXdrcy5qc1xuICoqIG1vZHVsZSBpZCA9IDEzNFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gQEByZXBsYWNlIGxvZ2ljXG5yZXF1aXJlKCcuLyQuZml4LXJlLXdrcycpKCdyZXBsYWNlJywgMiwgZnVuY3Rpb24oZGVmaW5lZCwgUkVQTEFDRSwgJHJlcGxhY2Upe1xuICAvLyAyMS4xLjMuMTQgU3RyaW5nLnByb3RvdHlwZS5yZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpXG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKHNlYXJjaFZhbHVlLCByZXBsYWNlVmFsdWUpe1xuICAgICd1c2Ugc3RyaWN0JztcbiAgICB2YXIgTyAgPSBkZWZpbmVkKHRoaXMpXG4gICAgICAsIGZuID0gc2VhcmNoVmFsdWUgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogc2VhcmNoVmFsdWVbUkVQTEFDRV07XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWRcbiAgICAgID8gZm4uY2FsbChzZWFyY2hWYWx1ZSwgTywgcmVwbGFjZVZhbHVlKVxuICAgICAgOiAkcmVwbGFjZS5jYWxsKFN0cmluZyhPKSwgc2VhcmNoVmFsdWUsIHJlcGxhY2VWYWx1ZSk7XG4gIH07XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLnJlcGxhY2UuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIEBAc2VhcmNoIGxvZ2ljXG5yZXF1aXJlKCcuLyQuZml4LXJlLXdrcycpKCdzZWFyY2gnLCAxLCBmdW5jdGlvbihkZWZpbmVkLCBTRUFSQ0gpe1xuICAvLyAyMS4xLjMuMTUgU3RyaW5nLnByb3RvdHlwZS5zZWFyY2gocmVnZXhwKVxuICByZXR1cm4gZnVuY3Rpb24gc2VhcmNoKHJlZ2V4cCl7XG4gICAgJ3VzZSBzdHJpY3QnO1xuICAgIHZhciBPICA9IGRlZmluZWQodGhpcylcbiAgICAgICwgZm4gPSByZWdleHAgPT0gdW5kZWZpbmVkID8gdW5kZWZpbmVkIDogcmVnZXhwW1NFQVJDSF07XG4gICAgcmV0dXJuIGZuICE9PSB1bmRlZmluZWQgPyBmbi5jYWxsKHJlZ2V4cCwgTykgOiBuZXcgUmVnRXhwKHJlZ2V4cClbU0VBUkNIXShTdHJpbmcoTykpO1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC5zZWFyY2guanNcbiAqKiBtb2R1bGUgaWQgPSAxMzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIEBAc3BsaXQgbG9naWNcbnJlcXVpcmUoJy4vJC5maXgtcmUtd2tzJykoJ3NwbGl0JywgMiwgZnVuY3Rpb24oZGVmaW5lZCwgU1BMSVQsICRzcGxpdCl7XG4gIC8vIDIxLjEuMy4xNyBTdHJpbmcucHJvdG90eXBlLnNwbGl0KHNlcGFyYXRvciwgbGltaXQpXG4gIHJldHVybiBmdW5jdGlvbiBzcGxpdChzZXBhcmF0b3IsIGxpbWl0KXtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgdmFyIE8gID0gZGVmaW5lZCh0aGlzKVxuICAgICAgLCBmbiA9IHNlcGFyYXRvciA9PSB1bmRlZmluZWQgPyB1bmRlZmluZWQgOiBzZXBhcmF0b3JbU1BMSVRdO1xuICAgIHJldHVybiBmbiAhPT0gdW5kZWZpbmVkXG4gICAgICA/IGZuLmNhbGwoc2VwYXJhdG9yLCBPLCBsaW1pdClcbiAgICAgIDogJHNwbGl0LmNhbGwoU3RyaW5nKE8pLCBzZXBhcmF0b3IsIGxpbWl0KTtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWdleHAuc3BsaXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxMzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBMSUJSQVJZICAgID0gcmVxdWlyZSgnLi8kLmxpYnJhcnknKVxuICAsIGdsb2JhbCAgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCBjdHggICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgY2xhc3NvZiAgICA9IHJlcXVpcmUoJy4vJC5jbGFzc29mJylcbiAgLCAkZXhwb3J0ICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgaXNPYmplY3QgICA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIGFuT2JqZWN0ICAgPSByZXF1aXJlKCcuLyQuYW4tb2JqZWN0JylcbiAgLCBhRnVuY3Rpb24gID0gcmVxdWlyZSgnLi8kLmEtZnVuY3Rpb24nKVxuICAsIHN0cmljdE5ldyAgPSByZXF1aXJlKCcuLyQuc3RyaWN0LW5ldycpXG4gICwgZm9yT2YgICAgICA9IHJlcXVpcmUoJy4vJC5mb3Itb2YnKVxuICAsIHNldFByb3RvICAgPSByZXF1aXJlKCcuLyQuc2V0LXByb3RvJykuc2V0XG4gICwgc2FtZSAgICAgICA9IHJlcXVpcmUoJy4vJC5zYW1lLXZhbHVlJylcbiAgLCBTUEVDSUVTICAgID0gcmVxdWlyZSgnLi8kLndrcycpKCdzcGVjaWVzJylcbiAgLCBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuLyQuc3BlY2llcy1jb25zdHJ1Y3RvcicpXG4gICwgYXNhcCAgICAgICA9IHJlcXVpcmUoJy4vJC5taWNyb3Rhc2snKVxuICAsIFBST01JU0UgICAgPSAnUHJvbWlzZSdcbiAgLCBwcm9jZXNzICAgID0gZ2xvYmFsLnByb2Nlc3NcbiAgLCBpc05vZGUgICAgID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2VzcydcbiAgLCBQICAgICAgICAgID0gZ2xvYmFsW1BST01JU0VdXG4gICwgV3JhcHBlcjtcblxudmFyIHRlc3RSZXNvbHZlID0gZnVuY3Rpb24oc3ViKXtcbiAgdmFyIHRlc3QgPSBuZXcgUChmdW5jdGlvbigpe30pO1xuICBpZihzdWIpdGVzdC5jb25zdHJ1Y3RvciA9IE9iamVjdDtcbiAgcmV0dXJuIFAucmVzb2x2ZSh0ZXN0KSA9PT0gdGVzdDtcbn07XG5cbnZhciBVU0VfTkFUSVZFID0gZnVuY3Rpb24oKXtcbiAgdmFyIHdvcmtzID0gZmFsc2U7XG4gIGZ1bmN0aW9uIFAyKHgpe1xuICAgIHZhciBzZWxmID0gbmV3IFAoeCk7XG4gICAgc2V0UHJvdG8oc2VsZiwgUDIucHJvdG90eXBlKTtcbiAgICByZXR1cm4gc2VsZjtcbiAgfVxuICB0cnkge1xuICAgIHdvcmtzID0gUCAmJiBQLnJlc29sdmUgJiYgdGVzdFJlc29sdmUoKTtcbiAgICBzZXRQcm90byhQMiwgUCk7XG4gICAgUDIucHJvdG90eXBlID0gJC5jcmVhdGUoUC5wcm90b3R5cGUsIHtjb25zdHJ1Y3Rvcjoge3ZhbHVlOiBQMn19KTtcbiAgICAvLyBhY3R1YWwgRmlyZWZveCBoYXMgYnJva2VuIHN1YmNsYXNzIHN1cHBvcnQsIHRlc3QgdGhhdFxuICAgIGlmKCEoUDIucmVzb2x2ZSg1KS50aGVuKGZ1bmN0aW9uKCl7fSkgaW5zdGFuY2VvZiBQMikpe1xuICAgICAgd29ya3MgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gYWN0dWFsIFY4IGJ1ZywgaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxNjJcbiAgICBpZih3b3JrcyAmJiByZXF1aXJlKCcuLyQuZGVzY3JpcHRvcnMnKSl7XG4gICAgICB2YXIgdGhlbmFibGVUaGVuR290dGVuID0gZmFsc2U7XG4gICAgICBQLnJlc29sdmUoJC5zZXREZXNjKHt9LCAndGhlbicsIHtcbiAgICAgICAgZ2V0OiBmdW5jdGlvbigpeyB0aGVuYWJsZVRoZW5Hb3R0ZW4gPSB0cnVlOyB9XG4gICAgICB9KSk7XG4gICAgICB3b3JrcyA9IHRoZW5hYmxlVGhlbkdvdHRlbjtcbiAgICB9XG4gIH0gY2F0Y2goZSl7IHdvcmtzID0gZmFsc2U7IH1cbiAgcmV0dXJuIHdvcmtzO1xufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgc2FtZUNvbnN0cnVjdG9yID0gZnVuY3Rpb24oYSwgYil7XG4gIC8vIGxpYnJhcnkgd3JhcHBlciBzcGVjaWFsIGNhc2VcbiAgaWYoTElCUkFSWSAmJiBhID09PSBQICYmIGIgPT09IFdyYXBwZXIpcmV0dXJuIHRydWU7XG4gIHJldHVybiBzYW1lKGEsIGIpO1xufTtcbnZhciBnZXRDb25zdHJ1Y3RvciA9IGZ1bmN0aW9uKEMpe1xuICB2YXIgUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdO1xuICByZXR1cm4gUyAhPSB1bmRlZmluZWQgPyBTIDogQztcbn07XG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uKGl0KXtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbihDKXtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24oJCRyZXNvbHZlLCAkJHJlamVjdCl7XG4gICAgaWYocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKXRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCAgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKSxcbiAgdGhpcy5yZWplY3QgID0gYUZ1bmN0aW9uKHJlamVjdClcbn07XG52YXIgcGVyZm9ybSA9IGZ1bmN0aW9uKGV4ZWMpe1xuICB0cnkge1xuICAgIGV4ZWMoKTtcbiAgfSBjYXRjaChlKXtcbiAgICByZXR1cm4ge2Vycm9yOiBlfTtcbiAgfVxufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbihyZWNvcmQsIGlzUmVqZWN0KXtcbiAgaWYocmVjb3JkLm4pcmV0dXJuO1xuICByZWNvcmQubiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHJlY29yZC5jO1xuICBhc2FwKGZ1bmN0aW9uKCl7XG4gICAgdmFyIHZhbHVlID0gcmVjb3JkLnZcbiAgICAgICwgb2sgICAgPSByZWNvcmQucyA9PSAxXG4gICAgICAsIGkgICAgID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24ocmVhY3Rpb24pe1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbFxuICAgICAgICAsIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlXG4gICAgICAgICwgcmVqZWN0ICA9IHJlYWN0aW9uLnJlamVjdFxuICAgICAgICAsIHJlc3VsdCwgdGhlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmKGhhbmRsZXIpe1xuICAgICAgICAgIGlmKCFvaylyZWNvcmQuaCA9IHRydWU7XG4gICAgICAgICAgcmVzdWx0ID0gaGFuZGxlciA9PT0gdHJ1ZSA/IHZhbHVlIDogaGFuZGxlcih2YWx1ZSk7XG4gICAgICAgICAgaWYocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKXtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpe1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlKGNoYWluLmxlbmd0aCA+IGkpcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIGNoYWluLmxlbmd0aCA9IDA7XG4gICAgcmVjb3JkLm4gPSBmYWxzZTtcbiAgICBpZihpc1JlamVjdClzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgcHJvbWlzZSA9IHJlY29yZC5wXG4gICAgICAgICwgaGFuZGxlciwgY29uc29sZTtcbiAgICAgIGlmKGlzVW5oYW5kbGVkKHByb21pc2UpKXtcbiAgICAgICAgaWYoaXNOb2RlKXtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pe1xuICAgICAgICAgIGhhbmRsZXIoe3Byb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWV9KTtcbiAgICAgICAgfSBlbHNlIGlmKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3Ipe1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSByZWNvcmQuYSA9IHVuZGVmaW5lZDtcbiAgICB9LCAxKTtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24ocHJvbWlzZSl7XG4gIHZhciByZWNvcmQgPSBwcm9taXNlLl9kXG4gICAgLCBjaGFpbiAgPSByZWNvcmQuYSB8fCByZWNvcmQuY1xuICAgICwgaSAgICAgID0gMFxuICAgICwgcmVhY3Rpb247XG4gIGlmKHJlY29yZC5oKXJldHVybiBmYWxzZTtcbiAgd2hpbGUoY2hhaW4ubGVuZ3RoID4gaSl7XG4gICAgcmVhY3Rpb24gPSBjaGFpbltpKytdO1xuICAgIGlmKHJlYWN0aW9uLmZhaWwgfHwgIWlzVW5oYW5kbGVkKHJlYWN0aW9uLnByb21pc2UpKXJldHVybiBmYWxzZTtcbiAgfSByZXR1cm4gdHJ1ZTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uKHZhbHVlKXtcbiAgdmFyIHJlY29yZCA9IHRoaXM7XG4gIGlmKHJlY29yZC5kKXJldHVybjtcbiAgcmVjb3JkLmQgPSB0cnVlO1xuICByZWNvcmQgPSByZWNvcmQuciB8fCByZWNvcmQ7IC8vIHVud3JhcFxuICByZWNvcmQudiA9IHZhbHVlO1xuICByZWNvcmQucyA9IDI7XG4gIHJlY29yZC5hID0gcmVjb3JkLmMuc2xpY2UoKTtcbiAgbm90aWZ5KHJlY29yZCwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24odmFsdWUpe1xuICB2YXIgcmVjb3JkID0gdGhpc1xuICAgICwgdGhlbjtcbiAgaWYocmVjb3JkLmQpcmV0dXJuO1xuICByZWNvcmQuZCA9IHRydWU7XG4gIHJlY29yZCA9IHJlY29yZC5yIHx8IHJlY29yZDsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYocmVjb3JkLnAgPT09IHZhbHVlKXRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSl7XG4gICAgICBhc2FwKGZ1bmN0aW9uKCl7XG4gICAgICAgIHZhciB3cmFwcGVyID0ge3I6IHJlY29yZCwgZDogZmFsc2V9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoKGUpe1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlY29yZC52ID0gdmFsdWU7XG4gICAgICByZWNvcmQucyA9IDE7XG4gICAgICBub3RpZnkocmVjb3JkLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoKGUpe1xuICAgICRyZWplY3QuY2FsbCh7cjogcmVjb3JkLCBkOiBmYWxzZX0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZighVVNFX05BVElWRSl7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gIFAgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKXtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIHZhciByZWNvcmQgPSB0aGlzLl9kID0ge1xuICAgICAgcDogc3RyaWN0TmV3KHRoaXMsIFAsIFBST01JU0UpLCAgICAgICAgIC8vIDwtIHByb21pc2VcbiAgICAgIGM6IFtdLCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICAgIGE6IHVuZGVmaW5lZCwgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgICAgczogMCwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgICBkOiBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gZG9uZVxuICAgICAgdjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICBoOiBmYWxzZSwgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gaGFuZGxlZCByZWplY3Rpb25cbiAgICAgIG46IGZhbHNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgICB9O1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHJlY29yZCwgMSksIGN0eCgkcmVqZWN0LCByZWNvcmQsIDEpKTtcbiAgICB9IGNhdGNoKGVycil7XG4gICAgICAkcmVqZWN0LmNhbGwocmVjb3JkLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgcmVxdWlyZSgnLi8kLnJlZGVmaW5lLWFsbCcpKFAucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKXtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgUCkpXG4gICAgICAgICwgcHJvbWlzZSAgPSByZWFjdGlvbi5wcm9taXNlXG4gICAgICAgICwgcmVjb3JkICAgPSB0aGlzLl9kO1xuICAgICAgcmVhY3Rpb24ub2sgICA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlY29yZC5jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYocmVjb3JkLmEpcmVjb3JkLmEucHVzaChyZWFjdGlvbik7XG4gICAgICBpZihyZWNvcmQucylub3RpZnkocmVjb3JkLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24ob25SZWplY3RlZCl7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwge1Byb21pc2U6IFB9KTtcbnJlcXVpcmUoJy4vJC5zZXQtdG8tc3RyaW5nLXRhZycpKFAsIFBST01JU0UpO1xucmVxdWlyZSgnLi8kLnNldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi8kLmNvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKXtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ldyBQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlamVjdCAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICghVVNFX05BVElWRSB8fCB0ZXN0UmVzb2x2ZSh0cnVlKSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCl7XG4gICAgLy8gaW5zdGFuY2VvZiBpbnN0ZWFkIG9mIGludGVybmFsIHNsb3QgY2hlY2sgYmVjYXVzZSB3ZSBzaG91bGQgZml4IGl0IHdpdGhvdXQgcmVwbGFjZW1lbnQgbmF0aXZlIFByb21pc2UgY29yZVxuICAgIGlmKHggaW5zdGFuY2VvZiBQICYmIHNhbWVDb25zdHJ1Y3Rvcih4LmNvbnN0cnVjdG9yLCB0aGlzKSlyZXR1cm4geDtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ldyBQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKVxuICAgICAgLCAkJHJlc29sdmUgID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgICQkcmVzb2x2ZSh4KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vJC5pdGVyLWRldGVjdCcpKGZ1bmN0aW9uKGl0ZXIpe1xuICBQLmFsbChpdGVyKVsnY2F0Y2gnXShmdW5jdGlvbigpe30pO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSl7XG4gICAgdmFyIEMgICAgICAgICAgPSBnZXRDb25zdHJ1Y3Rvcih0aGlzKVxuICAgICAgLCBjYXBhYmlsaXR5ID0gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICAsIHJlc29sdmUgICAgPSBjYXBhYmlsaXR5LnJlc29sdmVcbiAgICAgICwgcmVqZWN0ICAgICA9IGNhcGFiaWxpdHkucmVqZWN0XG4gICAgICAsIHZhbHVlcyAgICAgPSBbXTtcbiAgICB2YXIgYWJydXB0ID0gcGVyZm9ybShmdW5jdGlvbigpe1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCB2YWx1ZXMucHVzaCwgdmFsdWVzKTtcbiAgICAgIHZhciByZW1haW5pbmcgPSB2YWx1ZXMubGVuZ3RoXG4gICAgICAgICwgcmVzdWx0cyAgID0gQXJyYXkocmVtYWluaW5nKTtcbiAgICAgIGlmKHJlbWFpbmluZykkLmVhY2guY2FsbCh2YWx1ZXMsIGZ1bmN0aW9uKHByb21pc2UsIGluZGV4KXtcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgICAgICAgIGlmKGFscmVhZHlDYWxsZWQpcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHJlc3VsdHNbaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZShyZXN1bHRzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgZWxzZSByZXNvbHZlKHJlc3VsdHMpO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpe1xuICAgIHZhciBDICAgICAgICAgID0gZ2V0Q29uc3RydWN0b3IodGhpcylcbiAgICAgICwgY2FwYWJpbGl0eSA9IG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgLCByZWplY3QgICAgID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIGFicnVwdCA9IHBlcmZvcm0oZnVuY3Rpb24oKXtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24ocHJvbWlzZSl7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmKGFicnVwdClyZWplY3QoYWJydXB0LmVycm9yKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZS5qc1xuICoqIG1vZHVsZSBpZCA9IDEzOFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdCwgQ29uc3RydWN0b3IsIG5hbWUpe1xuICBpZighKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKXRocm93IFR5cGVFcnJvcihuYW1lICsgXCI6IHVzZSB0aGUgJ25ldycgb3BlcmF0b3IhXCIpO1xuICByZXR1cm4gaXQ7XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuc3RyaWN0LW5ldy5qc1xuICoqIG1vZHVsZSBpZCA9IDEzOVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIGN0eCAgICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgY2FsbCAgICAgICAgPSByZXF1aXJlKCcuLyQuaXRlci1jYWxsJylcbiAgLCBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vJC5pcy1hcnJheS1pdGVyJylcbiAgLCBhbk9iamVjdCAgICA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIHRvTGVuZ3RoICAgID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpXG4gICwgZ2V0SXRlckZuICAgPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQpe1xuICB2YXIgaXRlckZuID0gZ2V0SXRlckZuKGl0ZXJhYmxlKVxuICAgICwgZiAgICAgID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpXG4gICAgLCBpbmRleCAgPSAwXG4gICAgLCBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yO1xuICBpZih0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZihpc0FycmF5SXRlcihpdGVyRm4pKWZvcihsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKyl7XG4gICAgZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICB9IGVsc2UgZm9yKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7ICl7XG4gICAgY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gIH1cbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5mb3Itb2YuanNcbiAqKiBtb2R1bGUgaWQgPSAxNDBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ICA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vJC5hLWZ1bmN0aW9uJylcbiAgLCBTUEVDSUVTICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTywgRCl7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3IsIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5zcGVjaWVzLWNvbnN0cnVjdG9yLmpzXG4gKiogbW9kdWxlIGlkID0gMTQxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJ2YXIgZ2xvYmFsICAgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpXG4gICwgbWFjcm90YXNrID0gcmVxdWlyZSgnLi8kLnRhc2snKS5zZXRcbiAgLCBPYnNlcnZlciAgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlclxuICAsIHByb2Nlc3MgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgUHJvbWlzZSAgID0gZ2xvYmFsLlByb21pc2VcbiAgLCBpc05vZGUgICAgPSByZXF1aXJlKCcuLyQuY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnXG4gICwgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG52YXIgZmx1c2ggPSBmdW5jdGlvbigpe1xuICB2YXIgcGFyZW50LCBkb21haW4sIGZuO1xuICBpZihpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSl7XG4gICAgcHJvY2Vzcy5kb21haW4gPSBudWxsO1xuICAgIHBhcmVudC5leGl0KCk7XG4gIH1cbiAgd2hpbGUoaGVhZCl7XG4gICAgZG9tYWluID0gaGVhZC5kb21haW47XG4gICAgZm4gICAgID0gaGVhZC5mbjtcbiAgICBpZihkb21haW4pZG9tYWluLmVudGVyKCk7XG4gICAgZm4oKTsgLy8gPC0gY3VycmVudGx5IHdlIHVzZSBpdCBvbmx5IGZvciBQcm9taXNlIC0gdHJ5IC8gY2F0Y2ggbm90IHJlcXVpcmVkXG4gICAgaWYoZG9tYWluKWRvbWFpbi5leGl0KCk7XG4gICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICBpZihwYXJlbnQpcGFyZW50LmVudGVyKCk7XG59O1xuXG4vLyBOb2RlLmpzXG5pZihpc05vZGUpe1xuICBub3RpZnkgPSBmdW5jdGlvbigpe1xuICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICB9O1xuLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyXG59IGVsc2UgaWYoT2JzZXJ2ZXIpe1xuICB2YXIgdG9nZ2xlID0gMVxuICAgICwgbm9kZSAgID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwge2NoYXJhY3RlckRhdGE6IHRydWV9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgbm90aWZ5ID0gZnVuY3Rpb24oKXtcbiAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAtdG9nZ2xlO1xuICB9O1xuLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2Vcbn0gZWxzZSBpZihQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSl7XG4gIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihmbHVzaCk7XG4gIH07XG4vLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuLy8gLSBzZXRJbW1lZGlhdGVcbi8vIC0gTWVzc2FnZUNoYW5uZWxcbi8vIC0gd2luZG93LnBvc3RNZXNzYWdcbi8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4vLyAtIHNldFRpbWVvdXRcbn0gZWxzZSB7XG4gIG5vdGlmeSA9IGZ1bmN0aW9uKCl7XG4gICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGFzYXAoZm4pe1xuICB2YXIgdGFzayA9IHtmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCwgZG9tYWluOiBpc05vZGUgJiYgcHJvY2Vzcy5kb21haW59O1xuICBpZihsYXN0KWxhc3QubmV4dCA9IHRhc2s7XG4gIGlmKCFoZWFkKXtcbiAgICBoZWFkID0gdGFzaztcbiAgICBub3RpZnkoKTtcbiAgfSBsYXN0ID0gdGFzaztcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5taWNyb3Rhc2suanNcbiAqKiBtb2R1bGUgaWQgPSAxNDJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciBjdHggICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCBpbnZva2UgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaW52b2tlJylcbiAgLCBodG1sICAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaHRtbCcpXG4gICwgY2VsICAgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmRvbS1jcmVhdGUnKVxuICAsIGdsb2JhbCAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIHByb2Nlc3MgICAgICAgICAgICA9IGdsb2JhbC5wcm9jZXNzXG4gICwgc2V0VGFzayAgICAgICAgICAgID0gZ2xvYmFsLnNldEltbWVkaWF0ZVxuICAsIGNsZWFyVGFzayAgICAgICAgICA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZVxuICAsIE1lc3NhZ2VDaGFubmVsICAgICA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbFxuICAsIGNvdW50ZXIgICAgICAgICAgICA9IDBcbiAgLCBxdWV1ZSAgICAgICAgICAgICAgPSB7fVxuICAsIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnXG4gICwgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24oKXtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIGlmKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSl7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0bmVyID0gZnVuY3Rpb24oZXZlbnQpe1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZighc2V0VGFzayB8fCAhY2xlYXJUYXNrKXtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbil7XG4gICAgdmFyIGFyZ3MgPSBbXSwgaSA9IDE7XG4gICAgd2hpbGUoYXJndW1lbnRzLmxlbmd0aCA+IGkpYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24oKXtcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCl7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmKHJlcXVpcmUoJy4vJC5jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcycpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmKE1lc3NhZ2VDaGFubmVsKXtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsO1xuICAgIHBvcnQgICAgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdG5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZihnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0Jykpe1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24oKXtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24oaWQpe1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6ICAgc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnRhc2suanNcbiAqKiBtb2R1bGUgaWQgPSAxNDNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vJC5yZWRlZmluZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih0YXJnZXQsIHNyYyl7XG4gIGZvcih2YXIga2V5IGluIHNyYylyZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0pO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnJlZGVmaW5lLWFsbC5qc1xuICoqIG1vZHVsZSBpZCA9IDE0NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyIHN0cm9uZyA9IHJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uLXN0cm9uZycpO1xuXG4vLyAyMy4xIE1hcCBPYmplY3RzXG5yZXF1aXJlKCcuLyQuY29sbGVjdGlvbicpKCdNYXAnLCBmdW5jdGlvbihnZXQpe1xuICByZXR1cm4gZnVuY3Rpb24gTWFwKCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4xLjMuNiBNYXAucHJvdG90eXBlLmdldChrZXkpXG4gIGdldDogZnVuY3Rpb24gZ2V0KGtleSl7XG4gICAgdmFyIGVudHJ5ID0gc3Ryb25nLmdldEVudHJ5KHRoaXMsIGtleSk7XG4gICAgcmV0dXJuIGVudHJ5ICYmIGVudHJ5LnY7XG4gIH0sXG4gIC8vIDIzLjEuMy45IE1hcC5wcm90b3R5cGUuc2V0KGtleSwgdmFsdWUpXG4gIHNldDogZnVuY3Rpb24gc2V0KGtleSwgdmFsdWUpe1xuICAgIHJldHVybiBzdHJvbmcuZGVmKHRoaXMsIGtleSA9PT0gMCA/IDAgOiBrZXksIHZhbHVlKTtcbiAgfVxufSwgc3Ryb25nLCB0cnVlKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYubWFwLmpzXG4gKiogbW9kdWxlIGlkID0gMTQ1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJCAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBoaWRlICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGlkZScpXG4gICwgcmVkZWZpbmVBbGwgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lLWFsbCcpXG4gICwgY3R4ICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmN0eCcpXG4gICwgc3RyaWN0TmV3ICAgID0gcmVxdWlyZSgnLi8kLnN0cmljdC1uZXcnKVxuICAsIGRlZmluZWQgICAgICA9IHJlcXVpcmUoJy4vJC5kZWZpbmVkJylcbiAgLCBmb3JPZiAgICAgICAgPSByZXF1aXJlKCcuLyQuZm9yLW9mJylcbiAgLCAkaXRlckRlZmluZSAgPSByZXF1aXJlKCcuLyQuaXRlci1kZWZpbmUnKVxuICAsIHN0ZXAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5pdGVyLXN0ZXAnKVxuICAsIElEICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC51aWQnKSgnaWQnKVxuICAsICRoYXMgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIGlzT2JqZWN0ICAgICA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKVxuICAsIHNldFNwZWNpZXMgICA9IHJlcXVpcmUoJy4vJC5zZXQtc3BlY2llcycpXG4gICwgREVTQ1JJUFRPUlMgID0gcmVxdWlyZSgnLi8kLmRlc2NyaXB0b3JzJylcbiAgLCBpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlIHx8IGlzT2JqZWN0XG4gICwgU0laRSAgICAgICAgID0gREVTQ1JJUFRPUlMgPyAnX3MnIDogJ3NpemUnXG4gICwgaWQgICAgICAgICAgID0gMDtcblxudmFyIGZhc3RLZXkgPSBmdW5jdGlvbihpdCwgY3JlYXRlKXtcbiAgLy8gcmV0dXJuIHByaW1pdGl2ZSB3aXRoIHByZWZpeFxuICBpZighaXNPYmplY3QoaXQpKXJldHVybiB0eXBlb2YgaXQgPT0gJ3N5bWJvbCcgPyBpdCA6ICh0eXBlb2YgaXQgPT0gJ3N0cmluZycgPyAnUycgOiAnUCcpICsgaXQ7XG4gIGlmKCEkaGFzKGl0LCBJRCkpe1xuICAgIC8vIGNhbid0IHNldCBpZCB0byBmcm96ZW4gb2JqZWN0XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShpdCkpcmV0dXJuICdGJztcbiAgICAvLyBub3QgbmVjZXNzYXJ5IHRvIGFkZCBpZFxuICAgIGlmKCFjcmVhdGUpcmV0dXJuICdFJztcbiAgICAvLyBhZGQgbWlzc2luZyBvYmplY3QgaWRcbiAgICBoaWRlKGl0LCBJRCwgKytpZCk7XG4gIC8vIHJldHVybiBvYmplY3QgaWQgd2l0aCBwcmVmaXhcbiAgfSByZXR1cm4gJ08nICsgaXRbSURdO1xufTtcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24odGhhdCwga2V5KXtcbiAgLy8gZmFzdCBjYXNlXG4gIHZhciBpbmRleCA9IGZhc3RLZXkoa2V5KSwgZW50cnk7XG4gIGlmKGluZGV4ICE9PSAnRicpcmV0dXJuIHRoYXQuX2lbaW5kZXhdO1xuICAvLyBmcm96ZW4gb2JqZWN0IGNhc2VcbiAgZm9yKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubil7XG4gICAgaWYoZW50cnkuayA9PSBrZXkpcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpe1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBpdGVyYWJsZSl7XG4gICAgICBzdHJpY3ROZXcodGhhdCwgQywgTkFNRSk7XG4gICAgICB0aGF0Ll9pID0gJC5jcmVhdGUobnVsbCk7IC8vIGluZGV4XG4gICAgICB0aGF0Ll9mID0gdW5kZWZpbmVkOyAgICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAgIC8vIGxhc3QgZW50cnlcbiAgICAgIHRoYXRbU0laRV0gPSAwOyAgICAgICAgICAgLy8gc2l6ZVxuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMS4zLjEgTWFwLnByb3RvdHlwZS5jbGVhcigpXG4gICAgICAvLyAyMy4yLjMuMiBTZXQucHJvdG90eXBlLmNsZWFyKClcbiAgICAgIGNsZWFyOiBmdW5jdGlvbiBjbGVhcigpe1xuICAgICAgICBmb3IodmFyIHRoYXQgPSB0aGlzLCBkYXRhID0gdGhhdC5faSwgZW50cnkgPSB0aGF0Ll9mOyBlbnRyeTsgZW50cnkgPSBlbnRyeS5uKXtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihlbnRyeS5wKWVudHJ5LnAgPSBlbnRyeS5wLm4gPSB1bmRlZmluZWQ7XG4gICAgICAgICAgZGVsZXRlIGRhdGFbZW50cnkuaV07XG4gICAgICAgIH1cbiAgICAgICAgdGhhdC5fZiA9IHRoYXQuX2wgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRoYXRbU0laRV0gPSAwO1xuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy4zIE1hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjIuMy40IFNldC5wcm90b3R5cGUuZGVsZXRlKHZhbHVlKVxuICAgICAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICAgICAsIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICAgICAgaWYoZW50cnkpe1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkublxuICAgICAgICAgICAgLCBwcmV2ID0gZW50cnkucDtcbiAgICAgICAgICBkZWxldGUgdGhhdC5faVtlbnRyeS5pXTtcbiAgICAgICAgICBlbnRyeS5yID0gdHJ1ZTtcbiAgICAgICAgICBpZihwcmV2KXByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYobmV4dCluZXh0LnAgPSBwcmV2O1xuICAgICAgICAgIGlmKHRoYXQuX2YgPT0gZW50cnkpdGhhdC5fZiA9IG5leHQ7XG4gICAgICAgICAgaWYodGhhdC5fbCA9PSBlbnRyeSl0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiwgdGhhdCA9IHVuZGVmaW5lZCAqLyl7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKVxuICAgICAgICAgICwgZW50cnk7XG4gICAgICAgIHdoaWxlKGVudHJ5ID0gZW50cnkgPyBlbnRyeS5uIDogdGhpcy5fZil7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIC8vIDIzLjEuMy43IE1hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjIuMy43IFNldC5wcm90b3R5cGUuaGFzKHZhbHVlKVxuICAgICAgaGFzOiBmdW5jdGlvbiBoYXMoa2V5KXtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodGhpcywga2V5KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZihERVNDUklQVE9SUykkLnNldERlc2MoQy5wcm90b3R5cGUsICdzaXplJywge1xuICAgICAgZ2V0OiBmdW5jdGlvbigpe1xuICAgICAgICByZXR1cm4gZGVmaW5lZCh0aGlzW1NJWkVdKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gQztcbiAgfSxcbiAgZGVmOiBmdW5jdGlvbih0aGF0LCBrZXksIHZhbHVlKXtcbiAgICB2YXIgZW50cnkgPSBnZXRFbnRyeSh0aGF0LCBrZXkpXG4gICAgICAsIHByZXYsIGluZGV4O1xuICAgIC8vIGNoYW5nZSBleGlzdGluZyBlbnRyeVxuICAgIGlmKGVudHJ5KXtcbiAgICAgIGVudHJ5LnYgPSB2YWx1ZTtcbiAgICAvLyBjcmVhdGUgbmV3IGVudHJ5XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoYXQuX2wgPSBlbnRyeSA9IHtcbiAgICAgICAgaTogaW5kZXggPSBmYXN0S2V5KGtleSwgdHJ1ZSksIC8vIDwtIGluZGV4XG4gICAgICAgIGs6IGtleSwgICAgICAgICAgICAgICAgICAgICAgICAvLyA8LSBrZXlcbiAgICAgICAgdjogdmFsdWUsICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHZhbHVlXG4gICAgICAgIHA6IHByZXYgPSB0aGF0Ll9sLCAgICAgICAgICAgICAvLyA8LSBwcmV2aW91cyBlbnRyeVxuICAgICAgICBuOiB1bmRlZmluZWQsICAgICAgICAgICAgICAgICAgLy8gPC0gbmV4dCBlbnRyeVxuICAgICAgICByOiBmYWxzZSAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0gcmVtb3ZlZFxuICAgICAgfTtcbiAgICAgIGlmKCF0aGF0Ll9mKXRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmKHByZXYpcHJldi5uID0gZW50cnk7XG4gICAgICB0aGF0W1NJWkVdKys7XG4gICAgICAvLyBhZGQgdG8gaW5kZXhcbiAgICAgIGlmKGluZGV4ICE9PSAnRicpdGhhdC5faVtpbmRleF0gPSBlbnRyeTtcbiAgICB9IHJldHVybiB0aGF0O1xuICB9LFxuICBnZXRFbnRyeTogZ2V0RW50cnksXG4gIHNldFN0cm9uZzogZnVuY3Rpb24oQywgTkFNRSwgSVNfTUFQKXtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24oaXRlcmF0ZWQsIGtpbmQpe1xuICAgICAgdGhpcy5fdCA9IGl0ZXJhdGVkOyAgLy8gdGFyZ2V0XG4gICAgICB0aGlzLl9rID0ga2luZDsgICAgICAvLyBraW5kXG4gICAgICB0aGlzLl9sID0gdW5kZWZpbmVkOyAvLyBwcmV2aW91c1xuICAgIH0sIGZ1bmN0aW9uKCl7XG4gICAgICB2YXIgdGhhdCAgPSB0aGlzXG4gICAgICAgICwga2luZCAgPSB0aGF0Ll9rXG4gICAgICAgICwgZW50cnkgPSB0aGF0Ll9sO1xuICAgICAgLy8gcmV2ZXJ0IHRvIHRoZSBsYXN0IGV4aXN0aW5nIGVudHJ5XG4gICAgICB3aGlsZShlbnRyeSAmJiBlbnRyeS5yKWVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZighdGhhdC5fdCB8fCAhKHRoYXQuX2wgPSBlbnRyeSA9IGVudHJ5ID8gZW50cnkubiA6IHRoYXQuX3QuX2YpKXtcbiAgICAgICAgLy8gb3IgZmluaXNoIHRoZSBpdGVyYXRpb25cbiAgICAgICAgdGhhdC5fdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgcmV0dXJuIHN0ZXAoMSk7XG4gICAgICB9XG4gICAgICAvLyByZXR1cm4gc3RlcCBieSBraW5kXG4gICAgICBpZihraW5kID09ICdrZXlzJyAgKXJldHVybiBzdGVwKDAsIGVudHJ5LmspO1xuICAgICAgaWYoa2luZCA9PSAndmFsdWVzJylyZXR1cm4gc3RlcCgwLCBlbnRyeS52KTtcbiAgICAgIHJldHVybiBzdGVwKDAsIFtlbnRyeS5rLCBlbnRyeS52XSk7XG4gICAgfSwgSVNfTUFQID8gJ2VudHJpZXMnIDogJ3ZhbHVlcycgLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmNvbGxlY3Rpb24tc3Ryb25nLmpzXG4gKiogbW9kdWxlIGlkID0gMTQ2XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsICAgICAgICAgPSByZXF1aXJlKCcuLyQuZ2xvYmFsJylcbiAgLCAkZXhwb3J0ICAgICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHJlZGVmaW5lICAgICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJylcbiAgLCByZWRlZmluZUFsbCAgICA9IHJlcXVpcmUoJy4vJC5yZWRlZmluZS1hbGwnKVxuICAsIGZvck9mICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmZvci1vZicpXG4gICwgc3RyaWN0TmV3ICAgICAgPSByZXF1aXJlKCcuLyQuc3RyaWN0LW5ldycpXG4gICwgaXNPYmplY3QgICAgICAgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBmYWlscyAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5mYWlscycpXG4gICwgJGl0ZXJEZXRlY3QgICAgPSByZXF1aXJlKCcuLyQuaXRlci1kZXRlY3QnKVxuICAsIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi8kLnNldC10by1zdHJpbmctdGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oTkFNRSwgd3JhcHBlciwgbWV0aG9kcywgY29tbW9uLCBJU19NQVAsIElTX1dFQUspe1xuICB2YXIgQmFzZSAgPSBnbG9iYWxbTkFNRV1cbiAgICAsIEMgICAgID0gQmFzZVxuICAgICwgQURERVIgPSBJU19NQVAgPyAnc2V0JyA6ICdhZGQnXG4gICAgLCBwcm90byA9IEMgJiYgQy5wcm90b3R5cGVcbiAgICAsIE8gICAgID0ge307XG4gIHZhciBmaXhNZXRob2QgPSBmdW5jdGlvbihLRVkpe1xuICAgIHZhciBmbiA9IHByb3RvW0tFWV07XG4gICAgcmVkZWZpbmUocHJvdG8sIEtFWSxcbiAgICAgIEtFWSA9PSAnZGVsZXRlJyA/IGZ1bmN0aW9uKGEpe1xuICAgICAgICByZXR1cm4gSVNfV0VBSyAmJiAhaXNPYmplY3QoYSkgPyBmYWxzZSA6IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTtcbiAgICAgIH0gOiBLRVkgPT0gJ2hhcycgPyBmdW5jdGlvbiBoYXMoYSl7XG4gICAgICAgIHJldHVybiBJU19XRUFLICYmICFpc09iamVjdChhKSA/IGZhbHNlIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnZ2V0JyA/IGZ1bmN0aW9uIGdldChhKXtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gdW5kZWZpbmVkIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnYWRkJyA/IGZ1bmN0aW9uIGFkZChhKXsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpOyByZXR1cm4gdGhpczsgfVxuICAgICAgICA6IGZ1bmN0aW9uIHNldChhLCBiKXsgZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEsIGIpOyByZXR1cm4gdGhpczsgfVxuICAgICk7XG4gIH07XG4gIGlmKHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uKCl7XG4gICAgbmV3IEMoKS5lbnRyaWVzKCkubmV4dCgpO1xuICB9KSkpe1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGluc3RhbmNlICAgICAgICAgICAgID0gbmV3IENcbiAgICAgIC8vIGVhcmx5IGltcGxlbWVudGF0aW9ucyBub3Qgc3VwcG9ydHMgY2hhaW5pbmdcbiAgICAgICwgSEFTTlRfQ0hBSU5JTkcgICAgICAgPSBpbnN0YW5jZVtBRERFUl0oSVNfV0VBSyA/IHt9IDogLTAsIDEpICE9IGluc3RhbmNlXG4gICAgICAvLyBWOCB+ICBDaHJvbWl1bSA0MC0gd2Vhay1jb2xsZWN0aW9ucyB0aHJvd3Mgb24gcHJpbWl0aXZlcywgYnV0IHNob3VsZCByZXR1cm4gZmFsc2VcbiAgICAgICwgVEhST1dTX09OX1BSSU1JVElWRVMgPSBmYWlscyhmdW5jdGlvbigpeyBpbnN0YW5jZS5oYXMoMSk7IH0pXG4gICAgICAvLyBtb3N0IGVhcmx5IGltcGxlbWVudGF0aW9ucyBkb2Vzbid0IHN1cHBvcnRzIGl0ZXJhYmxlcywgbW9zdCBtb2Rlcm4gLSBub3QgY2xvc2UgaXQgY29ycmVjdGx5XG4gICAgICAsIEFDQ0VQVF9JVEVSQUJMRVMgICAgID0gJGl0ZXJEZXRlY3QoZnVuY3Rpb24oaXRlcil7IG5ldyBDKGl0ZXIpOyB9KSAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgICAgLy8gZm9yIGVhcmx5IGltcGxlbWVudGF0aW9ucyAtMCBhbmQgKzAgbm90IHRoZSBzYW1lXG4gICAgICAsIEJVR0dZX1pFUk87XG4gICAgaWYoIUFDQ0VQVF9JVEVSQUJMRVMpeyBcbiAgICAgIEMgPSB3cmFwcGVyKGZ1bmN0aW9uKHRhcmdldCwgaXRlcmFibGUpe1xuICAgICAgICBzdHJpY3ROZXcodGFyZ2V0LCBDLCBOQU1FKTtcbiAgICAgICAgdmFyIHRoYXQgPSBuZXcgQmFzZTtcbiAgICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgICB9KTtcbiAgICAgIEMucHJvdG90eXBlID0gcHJvdG87XG4gICAgICBwcm90by5jb25zdHJ1Y3RvciA9IEM7XG4gICAgfVxuICAgIElTX1dFQUsgfHwgaW5zdGFuY2UuZm9yRWFjaChmdW5jdGlvbih2YWwsIGtleSl7XG4gICAgICBCVUdHWV9aRVJPID0gMSAvIGtleSA9PT0gLUluZmluaXR5O1xuICAgIH0pO1xuICAgIGlmKFRIUk9XU19PTl9QUklNSVRJVkVTIHx8IEJVR0dZX1pFUk8pe1xuICAgICAgZml4TWV0aG9kKCdkZWxldGUnKTtcbiAgICAgIGZpeE1ldGhvZCgnaGFzJyk7XG4gICAgICBJU19NQVAgJiYgZml4TWV0aG9kKCdnZXQnKTtcbiAgICB9XG4gICAgaWYoQlVHR1lfWkVSTyB8fCBIQVNOVF9DSEFJTklORylmaXhNZXRob2QoQURERVIpO1xuICAgIC8vIHdlYWsgY29sbGVjdGlvbnMgc2hvdWxkIG5vdCBjb250YWlucyAuY2xlYXIgbWV0aG9kXG4gICAgaWYoSVNfV0VBSyAmJiBwcm90by5jbGVhcilkZWxldGUgcHJvdG8uY2xlYXI7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAoQyAhPSBCYXNlKSwgTyk7XG5cbiAgaWYoIUlTX1dFQUspY29tbW9uLnNldFN0cm9uZyhDLCBOQU1FLCBJU19NQVApO1xuXG4gIHJldHVybiBDO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmNvbGxlY3Rpb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxNDdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciBzdHJvbmcgPSByZXF1aXJlKCcuLyQuY29sbGVjdGlvbi1zdHJvbmcnKTtcblxuLy8gMjMuMiBTZXQgT2JqZWN0c1xucmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24nKSgnU2V0JywgZnVuY3Rpb24oZ2V0KXtcbiAgcmV0dXJuIGZ1bmN0aW9uIFNldCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuMi4zLjEgU2V0LnByb3RvdHlwZS5hZGQodmFsdWUpXG4gIGFkZDogZnVuY3Rpb24gYWRkKHZhbHVlKXtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih0aGlzLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnNldC5qc1xuICoqIG1vZHVsZSBpZCA9IDE0OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xudmFyICQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgcmVkZWZpbmUgICAgID0gcmVxdWlyZSgnLi8kLnJlZGVmaW5lJylcbiAgLCB3ZWFrICAgICAgICAgPSByZXF1aXJlKCcuLyQuY29sbGVjdGlvbi13ZWFrJylcbiAgLCBpc09iamVjdCAgICAgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBoYXMgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGFzJylcbiAgLCBmcm96ZW5TdG9yZSAgPSB3ZWFrLmZyb3plblN0b3JlXG4gICwgV0VBSyAgICAgICAgID0gd2Vhay5XRUFLXG4gICwgaXNFeHRlbnNpYmxlID0gT2JqZWN0LmlzRXh0ZW5zaWJsZSB8fCBpc09iamVjdFxuICAsIHRtcCAgICAgICAgICA9IHt9O1xuXG4vLyAyMy4zIFdlYWtNYXAgT2JqZWN0c1xudmFyICRXZWFrTWFwID0gcmVxdWlyZSgnLi8kLmNvbGxlY3Rpb24nKSgnV2Vha01hcCcsIGZ1bmN0aW9uKGdldCl7XG4gIHJldHVybiBmdW5jdGlvbiBXZWFrTWFwKCl7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4zLjMuMyBXZWFrTWFwLnByb3RvdHlwZS5nZXQoa2V5KVxuICBnZXQ6IGZ1bmN0aW9uIGdldChrZXkpe1xuICAgIGlmKGlzT2JqZWN0KGtleSkpe1xuICAgICAgaWYoIWlzRXh0ZW5zaWJsZShrZXkpKXJldHVybiBmcm96ZW5TdG9yZSh0aGlzKS5nZXQoa2V5KTtcbiAgICAgIGlmKGhhcyhrZXksIFdFQUspKXJldHVybiBrZXlbV0VBS11bdGhpcy5faV07XG4gICAgfVxuICB9LFxuICAvLyAyMy4zLjMuNSBXZWFrTWFwLnByb3RvdHlwZS5zZXQoa2V5LCB2YWx1ZSlcbiAgc2V0OiBmdW5jdGlvbiBzZXQoa2V5LCB2YWx1ZSl7XG4gICAgcmV0dXJuIHdlYWsuZGVmKHRoaXMsIGtleSwgdmFsdWUpO1xuICB9XG59LCB3ZWFrLCB0cnVlLCB0cnVlKTtcblxuLy8gSUUxMSBXZWFrTWFwIGZyb3plbiBrZXlzIGZpeFxuaWYobmV3ICRXZWFrTWFwKCkuc2V0KChPYmplY3QuZnJlZXplIHx8IE9iamVjdCkodG1wKSwgNykuZ2V0KHRtcCkgIT0gNyl7XG4gICQuZWFjaC5jYWxsKFsnZGVsZXRlJywgJ2hhcycsICdnZXQnLCAnc2V0J10sIGZ1bmN0aW9uKGtleSl7XG4gICAgdmFyIHByb3RvICA9ICRXZWFrTWFwLnByb3RvdHlwZVxuICAgICAgLCBtZXRob2QgPSBwcm90b1trZXldO1xuICAgIHJlZGVmaW5lKHByb3RvLCBrZXksIGZ1bmN0aW9uKGEsIGIpe1xuICAgICAgLy8gc3RvcmUgZnJvemVuIG9iamVjdHMgb24gbGVha3kgbWFwXG4gICAgICBpZihpc09iamVjdChhKSAmJiAhaXNFeHRlbnNpYmxlKGEpKXtcbiAgICAgICAgdmFyIHJlc3VsdCA9IGZyb3plblN0b3JlKHRoaXMpW2tleV0oYSwgYik7XG4gICAgICAgIHJldHVybiBrZXkgPT0gJ3NldCcgPyB0aGlzIDogcmVzdWx0O1xuICAgICAgLy8gc3RvcmUgYWxsIHRoZSByZXN0IG9uIG5hdGl2ZSB3ZWFrbWFwXG4gICAgICB9IHJldHVybiBtZXRob2QuY2FsbCh0aGlzLCBhLCBiKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LndlYWstbWFwLmpzXG4gKiogbW9kdWxlIGlkID0gMTQ5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgaGlkZSAgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuaGlkZScpXG4gICwgcmVkZWZpbmVBbGwgICAgICAgPSByZXF1aXJlKCcuLyQucmVkZWZpbmUtYWxsJylcbiAgLCBhbk9iamVjdCAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIGlzT2JqZWN0ICAgICAgICAgID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgc3RyaWN0TmV3ICAgICAgICAgPSByZXF1aXJlKCcuLyQuc3RyaWN0LW5ldycpXG4gICwgZm9yT2YgICAgICAgICAgICAgPSByZXF1aXJlKCcuLyQuZm9yLW9mJylcbiAgLCBjcmVhdGVBcnJheU1ldGhvZCA9IHJlcXVpcmUoJy4vJC5hcnJheS1tZXRob2RzJylcbiAgLCAkaGFzICAgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsIFdFQUsgICAgICAgICAgICAgID0gcmVxdWlyZSgnLi8kLnVpZCcpKCd3ZWFrJylcbiAgLCBpc0V4dGVuc2libGUgICAgICA9IE9iamVjdC5pc0V4dGVuc2libGUgfHwgaXNPYmplY3RcbiAgLCBhcnJheUZpbmQgICAgICAgICA9IGNyZWF0ZUFycmF5TWV0aG9kKDUpXG4gICwgYXJyYXlGaW5kSW5kZXggICAgPSBjcmVhdGVBcnJheU1ldGhvZCg2KVxuICAsIGlkICAgICAgICAgICAgICAgID0gMDtcblxuLy8gZmFsbGJhY2sgZm9yIGZyb3plbiBrZXlzXG52YXIgZnJvemVuU3RvcmUgPSBmdW5jdGlvbih0aGF0KXtcbiAgcmV0dXJuIHRoYXQuX2wgfHwgKHRoYXQuX2wgPSBuZXcgRnJvemVuU3RvcmUpO1xufTtcbnZhciBGcm96ZW5TdG9yZSA9IGZ1bmN0aW9uKCl7XG4gIHRoaXMuYSA9IFtdO1xufTtcbnZhciBmaW5kRnJvemVuID0gZnVuY3Rpb24oc3RvcmUsIGtleSl7XG4gIHJldHVybiBhcnJheUZpbmQoc3RvcmUuYSwgZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiBpdFswXSA9PT0ga2V5O1xuICB9KTtcbn07XG5Gcm96ZW5TdG9yZS5wcm90b3R5cGUgPSB7XG4gIGdldDogZnVuY3Rpb24oa2V5KXtcbiAgICB2YXIgZW50cnkgPSBmaW5kRnJvemVuKHRoaXMsIGtleSk7XG4gICAgaWYoZW50cnkpcmV0dXJuIGVudHJ5WzFdO1xuICB9LFxuICBoYXM6IGZ1bmN0aW9uKGtleSl7XG4gICAgcmV0dXJuICEhZmluZEZyb3plbih0aGlzLCBrZXkpO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGtleSwgdmFsdWUpe1xuICAgIHZhciBlbnRyeSA9IGZpbmRGcm96ZW4odGhpcywga2V5KTtcbiAgICBpZihlbnRyeSllbnRyeVsxXSA9IHZhbHVlO1xuICAgIGVsc2UgdGhpcy5hLnB1c2goW2tleSwgdmFsdWVdKTtcbiAgfSxcbiAgJ2RlbGV0ZSc6IGZ1bmN0aW9uKGtleSl7XG4gICAgdmFyIGluZGV4ID0gYXJyYXlGaW5kSW5kZXgodGhpcy5hLCBmdW5jdGlvbihpdCl7XG4gICAgICByZXR1cm4gaXRbMF0gPT09IGtleTtcbiAgICB9KTtcbiAgICBpZih+aW5kZXgpdGhpcy5hLnNwbGljZShpbmRleCwgMSk7XG4gICAgcmV0dXJuICEhfmluZGV4O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uKHdyYXBwZXIsIE5BTUUsIElTX01BUCwgQURERVIpe1xuICAgIHZhciBDID0gd3JhcHBlcihmdW5jdGlvbih0aGF0LCBpdGVyYWJsZSl7XG4gICAgICBzdHJpY3ROZXcodGhhdCwgQywgTkFNRSk7XG4gICAgICB0aGF0Ll9pID0gaWQrKzsgICAgICAvLyBjb2xsZWN0aW9uIGlkXG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAvLyBsZWFrIHN0b3JlIGZvciBmcm96ZW4gb2JqZWN0c1xuICAgICAgaWYoaXRlcmFibGUgIT0gdW5kZWZpbmVkKWZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICB9KTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwge1xuICAgICAgLy8gMjMuMy4zLjIgV2Vha01hcC5wcm90b3R5cGUuZGVsZXRlKGtleSlcbiAgICAgIC8vIDIzLjQuMy4zIFdlYWtTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbihrZXkpe1xuICAgICAgICBpZighaXNPYmplY3Qoa2V5KSlyZXR1cm4gZmFsc2U7XG4gICAgICAgIGlmKCFpc0V4dGVuc2libGUoa2V5KSlyZXR1cm4gZnJvemVuU3RvcmUodGhpcylbJ2RlbGV0ZSddKGtleSk7XG4gICAgICAgIHJldHVybiAkaGFzKGtleSwgV0VBSykgJiYgJGhhcyhrZXlbV0VBS10sIHRoaXMuX2kpICYmIGRlbGV0ZSBrZXlbV0VBS11bdGhpcy5faV07XG4gICAgICB9LFxuICAgICAgLy8gMjMuMy4zLjQgV2Vha01hcC5wcm90b3R5cGUuaGFzKGtleSlcbiAgICAgIC8vIDIzLjQuMy40IFdlYWtTZXQucHJvdG90eXBlLmhhcyh2YWx1ZSlcbiAgICAgIGhhczogZnVuY3Rpb24gaGFzKGtleSl7XG4gICAgICAgIGlmKCFpc09iamVjdChrZXkpKXJldHVybiBmYWxzZTtcbiAgICAgICAgaWYoIWlzRXh0ZW5zaWJsZShrZXkpKXJldHVybiBmcm96ZW5TdG9yZSh0aGlzKS5oYXMoa2V5KTtcbiAgICAgICAgcmV0dXJuICRoYXMoa2V5LCBXRUFLKSAmJiAkaGFzKGtleVtXRUFLXSwgdGhpcy5faSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIEM7XG4gIH0sXG4gIGRlZjogZnVuY3Rpb24odGhhdCwga2V5LCB2YWx1ZSl7XG4gICAgaWYoIWlzRXh0ZW5zaWJsZShhbk9iamVjdChrZXkpKSl7XG4gICAgICBmcm96ZW5TdG9yZSh0aGF0KS5zZXQoa2V5LCB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICRoYXMoa2V5LCBXRUFLKSB8fCBoaWRlKGtleSwgV0VBSywge30pO1xuICAgICAga2V5W1dFQUtdW3RoYXQuX2ldID0gdmFsdWU7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZnJvemVuU3RvcmU6IGZyb3plblN0b3JlLFxuICBXRUFLOiBXRUFLXG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQuY29sbGVjdGlvbi13ZWFrLmpzXG4gKiogbW9kdWxlIGlkID0gMTUwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgd2VhayA9IHJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uLXdlYWsnKTtcblxuLy8gMjMuNCBXZWFrU2V0IE9iamVjdHNcbnJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uJykoJ1dlYWtTZXQnLCBmdW5jdGlvbihnZXQpe1xuICByZXR1cm4gZnVuY3Rpb24gV2Vha1NldCgpeyByZXR1cm4gZ2V0KHRoaXMsIGFyZ3VtZW50cy5sZW5ndGggPiAwID8gYXJndW1lbnRzWzBdIDogdW5kZWZpbmVkKTsgfTtcbn0sIHtcbiAgLy8gMjMuNC4zLjEgV2Vha1NldC5wcm90b3R5cGUuYWRkKHZhbHVlKVxuICBhZGQ6IGZ1bmN0aW9uIGFkZCh2YWx1ZSl7XG4gICAgcmV0dXJuIHdlYWsuZGVmKHRoaXMsIHZhbHVlLCB0cnVlKTtcbiAgfVxufSwgd2VhaywgZmFsc2UsIHRydWUpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi53ZWFrLXNldC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjYuMS4xIFJlZmxlY3QuYXBwbHkodGFyZ2V0LCB0aGlzQXJndW1lbnQsIGFyZ3VtZW50c0xpc3QpXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIF9hcHBseSAgPSBGdW5jdGlvbi5hcHBseTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBhcHBseTogZnVuY3Rpb24gYXBwbHkodGFyZ2V0LCB0aGlzQXJndW1lbnQsIGFyZ3VtZW50c0xpc3Qpe1xuICAgIHJldHVybiBfYXBwbHkuY2FsbCh0YXJnZXQsIHRoaXNBcmd1bWVudCwgYXJndW1lbnRzTGlzdCk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmFwcGx5LmpzXG4gKiogbW9kdWxlIGlkID0gMTUyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyNi4xLjIgUmVmbGVjdC5jb25zdHJ1Y3QodGFyZ2V0LCBhcmd1bWVudHNMaXN0IFssIG5ld1RhcmdldF0pXG52YXIgJCAgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCAkZXhwb3J0ICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBhRnVuY3Rpb24gPSByZXF1aXJlKCcuLyQuYS1mdW5jdGlvbicpXG4gICwgYW5PYmplY3QgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgaXNPYmplY3QgID0gcmVxdWlyZSgnLi8kLmlzLW9iamVjdCcpXG4gICwgYmluZCAgICAgID0gRnVuY3Rpb24uYmluZCB8fCByZXF1aXJlKCcuLyQuY29yZScpLkZ1bmN0aW9uLnByb3RvdHlwZS5iaW5kO1xuXG4vLyBNUyBFZGdlIHN1cHBvcnRzIG9ubHkgMiBhcmd1bWVudHNcbi8vIEZGIE5pZ2h0bHkgc2V0cyB0aGlyZCBhcmd1bWVudCBhcyBgbmV3LnRhcmdldGAsIGJ1dCBkb2VzIG5vdCBjcmVhdGUgYHRoaXNgIGZyb20gaXRcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogcmVxdWlyZSgnLi8kLmZhaWxzJykoZnVuY3Rpb24oKXtcbiAgZnVuY3Rpb24gRigpe31cbiAgcmV0dXJuICEoUmVmbGVjdC5jb25zdHJ1Y3QoZnVuY3Rpb24oKXt9LCBbXSwgRikgaW5zdGFuY2VvZiBGKTtcbn0pLCAnUmVmbGVjdCcsIHtcbiAgY29uc3RydWN0OiBmdW5jdGlvbiBjb25zdHJ1Y3QoVGFyZ2V0LCBhcmdzIC8qLCBuZXdUYXJnZXQqLyl7XG4gICAgYUZ1bmN0aW9uKFRhcmdldCk7XG4gICAgdmFyIG5ld1RhcmdldCA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gVGFyZ2V0IDogYUZ1bmN0aW9uKGFyZ3VtZW50c1syXSk7XG4gICAgaWYoVGFyZ2V0ID09IG5ld1RhcmdldCl7XG4gICAgICAvLyB3L28gYWx0ZXJlZCBuZXdUYXJnZXQsIG9wdGltaXphdGlvbiBmb3IgMC00IGFyZ3VtZW50c1xuICAgICAgaWYoYXJncyAhPSB1bmRlZmluZWQpc3dpdGNoKGFuT2JqZWN0KGFyZ3MpLmxlbmd0aCl7XG4gICAgICAgIGNhc2UgMDogcmV0dXJuIG5ldyBUYXJnZXQ7XG4gICAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSk7XG4gICAgICAgIGNhc2UgMjogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICAgIGNhc2UgMzogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgICAgIGNhc2UgNDogcmV0dXJuIG5ldyBUYXJnZXQoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gICAgICB9XG4gICAgICAvLyB3L28gYWx0ZXJlZCBuZXdUYXJnZXQsIGxvdCBvZiBhcmd1bWVudHMgY2FzZVxuICAgICAgdmFyICRhcmdzID0gW251bGxdO1xuICAgICAgJGFyZ3MucHVzaC5hcHBseSgkYXJncywgYXJncyk7XG4gICAgICByZXR1cm4gbmV3IChiaW5kLmFwcGx5KFRhcmdldCwgJGFyZ3MpKTtcbiAgICB9XG4gICAgLy8gd2l0aCBhbHRlcmVkIG5ld1RhcmdldCwgbm90IHN1cHBvcnQgYnVpbHQtaW4gY29uc3RydWN0b3JzXG4gICAgdmFyIHByb3RvICAgID0gbmV3VGFyZ2V0LnByb3RvdHlwZVxuICAgICAgLCBpbnN0YW5jZSA9ICQuY3JlYXRlKGlzT2JqZWN0KHByb3RvKSA/IHByb3RvIDogT2JqZWN0LnByb3RvdHlwZSlcbiAgICAgICwgcmVzdWx0ICAgPSBGdW5jdGlvbi5hcHBseS5jYWxsKFRhcmdldCwgaW5zdGFuY2UsIGFyZ3MpO1xuICAgIHJldHVybiBpc09iamVjdChyZXN1bHQpID8gcmVzdWx0IDogaW5zdGFuY2U7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmNvbnN0cnVjdC5qc1xuICoqIG1vZHVsZSBpZCA9IDE1M1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjYuMS4zIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcylcbnZhciAkICAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgJGV4cG9ydCAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcblxuLy8gTVMgRWRnZSBoYXMgYnJva2VuIFJlZmxlY3QuZGVmaW5lUHJvcGVydHkgLSB0aHJvd2luZyBpbnN0ZWFkIG9mIHJldHVybmluZyBmYWxzZVxuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiByZXF1aXJlKCcuLyQuZmFpbHMnKShmdW5jdGlvbigpe1xuICBSZWZsZWN0LmRlZmluZVByb3BlcnR5KCQuc2V0RGVzYyh7fSwgMSwge3ZhbHVlOiAxfSksIDEsIHt2YWx1ZTogMn0pO1xufSksICdSZWZsZWN0Jywge1xuICBkZWZpbmVQcm9wZXJ0eTogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSwgYXR0cmlidXRlcyl7XG4gICAgYW5PYmplY3QodGFyZ2V0KTtcbiAgICB0cnkge1xuICAgICAgJC5zZXREZXNjKHRhcmdldCwgcHJvcGVydHlLZXksIGF0dHJpYnV0ZXMpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlZmluZS1wcm9wZXJ0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDE1NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjYuMS40IFJlZmxlY3QuZGVsZXRlUHJvcGVydHkodGFyZ2V0LCBwcm9wZXJ0eUtleSlcbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGdldERlc2MgID0gcmVxdWlyZSgnLi8kJykuZ2V0RGVzY1xuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGRlbGV0ZVByb3BlcnR5OiBmdW5jdGlvbiBkZWxldGVQcm9wZXJ0eSh0YXJnZXQsIHByb3BlcnR5S2V5KXtcbiAgICB2YXIgZGVzYyA9IGdldERlc2MoYW5PYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpO1xuICAgIHJldHVybiBkZXNjICYmICFkZXNjLmNvbmZpZ3VyYWJsZSA/IGZhbHNlIDogZGVsZXRlIHRhcmdldFtwcm9wZXJ0eUtleV07XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmRlbGV0ZS1wcm9wZXJ0eS5qc1xuICoqIG1vZHVsZSBpZCA9IDE1NVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjYuMS41IFJlZmxlY3QuZW51bWVyYXRlKHRhcmdldClcbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xudmFyIEVudW1lcmF0ZSA9IGZ1bmN0aW9uKGl0ZXJhdGVkKXtcbiAgdGhpcy5fdCA9IGFuT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdmFyIGtleXMgPSB0aGlzLl9rID0gW10gICAgICAgLy8ga2V5c1xuICAgICwga2V5O1xuICBmb3Ioa2V5IGluIGl0ZXJhdGVkKWtleXMucHVzaChrZXkpO1xufTtcbnJlcXVpcmUoJy4vJC5pdGVyLWNyZWF0ZScpKEVudW1lcmF0ZSwgJ09iamVjdCcsIGZ1bmN0aW9uKCl7XG4gIHZhciB0aGF0ID0gdGhpc1xuICAgICwga2V5cyA9IHRoYXQuX2tcbiAgICAsIGtleTtcbiAgZG8ge1xuICAgIGlmKHRoYXQuX2kgPj0ga2V5cy5sZW5ndGgpcmV0dXJuIHt2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlfTtcbiAgfSB3aGlsZSghKChrZXkgPSBrZXlzW3RoYXQuX2krK10pIGluIHRoYXQuX3QpKTtcbiAgcmV0dXJuIHt2YWx1ZToga2V5LCBkb25lOiBmYWxzZX07XG59KTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBlbnVtZXJhdGU6IGZ1bmN0aW9uIGVudW1lcmF0ZSh0YXJnZXQpe1xuICAgIHJldHVybiBuZXcgRW51bWVyYXRlKHRhcmdldCk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmVudW1lcmF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE1NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gMjYuMS42IFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcGVydHlLZXkgWywgcmVjZWl2ZXJdKVxudmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBoYXMgICAgICA9IHJlcXVpcmUoJy4vJC5oYXMnKVxuICAsICRleHBvcnQgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgaXNPYmplY3QgPSByZXF1aXJlKCcuLyQuaXMtb2JqZWN0JylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcblxuZnVuY3Rpb24gZ2V0KHRhcmdldCwgcHJvcGVydHlLZXkvKiwgcmVjZWl2ZXIqLyl7XG4gIHZhciByZWNlaXZlciA9IGFyZ3VtZW50cy5sZW5ndGggPCAzID8gdGFyZ2V0IDogYXJndW1lbnRzWzJdXG4gICAgLCBkZXNjLCBwcm90bztcbiAgaWYoYW5PYmplY3QodGFyZ2V0KSA9PT0gcmVjZWl2ZXIpcmV0dXJuIHRhcmdldFtwcm9wZXJ0eUtleV07XG4gIGlmKGRlc2MgPSAkLmdldERlc2ModGFyZ2V0LCBwcm9wZXJ0eUtleSkpcmV0dXJuIGhhcyhkZXNjLCAndmFsdWUnKVxuICAgID8gZGVzYy52YWx1ZVxuICAgIDogZGVzYy5nZXQgIT09IHVuZGVmaW5lZFxuICAgICAgPyBkZXNjLmdldC5jYWxsKHJlY2VpdmVyKVxuICAgICAgOiB1bmRlZmluZWQ7XG4gIGlmKGlzT2JqZWN0KHByb3RvID0gJC5nZXRQcm90byh0YXJnZXQpKSlyZXR1cm4gZ2V0KHByb3RvLCBwcm9wZXJ0eUtleSwgcmVjZWl2ZXIpO1xufVxuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7Z2V0OiBnZXR9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNTdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDI2LjEuNyBSZWZsZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIHByb3BlcnR5S2V5KVxudmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGdldE93blByb3BlcnR5RGVzY3JpcHRvcjogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwgcHJvcGVydHlLZXkpe1xuICAgIHJldHVybiAkLmdldERlc2MoYW5PYmplY3QodGFyZ2V0KSwgcHJvcGVydHlLZXkpO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5nZXQtb3duLXByb3BlcnR5LWRlc2NyaXB0b3IuanNcbiAqKiBtb2R1bGUgaWQgPSAxNThcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDI2LjEuOCBSZWZsZWN0LmdldFByb3RvdHlwZU9mKHRhcmdldClcbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGdldFByb3RvID0gcmVxdWlyZSgnLi8kJykuZ2V0UHJvdG9cbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBnZXRQcm90b3R5cGVPZjogZnVuY3Rpb24gZ2V0UHJvdG90eXBlT2YodGFyZ2V0KXtcbiAgICByZXR1cm4gZ2V0UHJvdG8oYW5PYmplY3QodGFyZ2V0KSk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmdldC1wcm90b3R5cGUtb2YuanNcbiAqKiBtb2R1bGUgaWQgPSAxNTlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDI2LjEuOSBSZWZsZWN0Lmhhcyh0YXJnZXQsIHByb3BlcnR5S2V5KVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUmVmbGVjdCcsIHtcbiAgaGFzOiBmdW5jdGlvbiBoYXModGFyZ2V0LCBwcm9wZXJ0eUtleSl7XG4gICAgcmV0dXJuIHByb3BlcnR5S2V5IGluIHRhcmdldDtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QuaGFzLmpzXG4gKiogbW9kdWxlIGlkID0gMTYwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyNi4xLjEwIFJlZmxlY3QuaXNFeHRlbnNpYmxlKHRhcmdldClcbnZhciAkZXhwb3J0ICAgICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgYW5PYmplY3QgICAgICA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsICRpc0V4dGVuc2libGUgPSBPYmplY3QuaXNFeHRlbnNpYmxlO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIGlzRXh0ZW5zaWJsZTogZnVuY3Rpb24gaXNFeHRlbnNpYmxlKHRhcmdldCl7XG4gICAgYW5PYmplY3QodGFyZ2V0KTtcbiAgICByZXR1cm4gJGlzRXh0ZW5zaWJsZSA/ICRpc0V4dGVuc2libGUodGFyZ2V0KSA6IHRydWU7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LmlzLWV4dGVuc2libGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjFcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIDI2LjEuMTEgUmVmbGVjdC5vd25LZXlzKHRhcmdldClcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7b3duS2V5czogcmVxdWlyZSgnLi8kLm93bi1rZXlzJyl9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczYucmVmbGVjdC5vd24ta2V5cy5qc1xuICoqIG1vZHVsZSBpZCA9IDE2MlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gYWxsIG9iamVjdCBrZXlzLCBpbmNsdWRlcyBub24tZW51bWVyYWJsZSBhbmQgc3ltYm9sc1xudmFyICQgICAgICAgID0gcmVxdWlyZSgnLi8kJylcbiAgLCBhbk9iamVjdCA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsIFJlZmxlY3QgID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpLlJlZmxlY3Q7XG5tb2R1bGUuZXhwb3J0cyA9IFJlZmxlY3QgJiYgUmVmbGVjdC5vd25LZXlzIHx8IGZ1bmN0aW9uIG93bktleXMoaXQpe1xuICB2YXIga2V5cyAgICAgICA9ICQuZ2V0TmFtZXMoYW5PYmplY3QoaXQpKVxuICAgICwgZ2V0U3ltYm9scyA9ICQuZ2V0U3ltYm9scztcbiAgcmV0dXJuIGdldFN5bWJvbHMgPyBrZXlzLmNvbmNhdChnZXRTeW1ib2xzKGl0KSkgOiBrZXlzO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLm93bi1rZXlzLmpzXG4gKiogbW9kdWxlIGlkID0gMTYzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyNi4xLjEyIFJlZmxlY3QucHJldmVudEV4dGVuc2lvbnModGFyZ2V0KVxudmFyICRleHBvcnQgICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIGFuT2JqZWN0ICAgICAgICAgICA9IHJlcXVpcmUoJy4vJC5hbi1vYmplY3QnKVxuICAsICRwcmV2ZW50RXh0ZW5zaW9ucyA9IE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucztcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge1xuICBwcmV2ZW50RXh0ZW5zaW9uczogZnVuY3Rpb24gcHJldmVudEV4dGVuc2lvbnModGFyZ2V0KXtcbiAgICBhbk9iamVjdCh0YXJnZXQpO1xuICAgIHRyeSB7XG4gICAgICBpZigkcHJldmVudEV4dGVuc2lvbnMpJHByZXZlbnRFeHRlbnNpb25zKHRhcmdldCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3QucHJldmVudC1leHRlbnNpb25zLmpzXG4gKiogbW9kdWxlIGlkID0gMTY0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyNi4xLjEzIFJlZmxlY3Quc2V0KHRhcmdldCwgcHJvcGVydHlLZXksIFYgWywgcmVjZWl2ZXJdKVxudmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIGhhcyAgICAgICAgPSByZXF1aXJlKCcuLyQuaGFzJylcbiAgLCAkZXhwb3J0ICAgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vJC5wcm9wZXJ0eS1kZXNjJylcbiAgLCBhbk9iamVjdCAgID0gcmVxdWlyZSgnLi8kLmFuLW9iamVjdCcpXG4gICwgaXNPYmplY3QgICA9IHJlcXVpcmUoJy4vJC5pcy1vYmplY3QnKTtcblxuZnVuY3Rpb24gc2V0KHRhcmdldCwgcHJvcGVydHlLZXksIFYvKiwgcmVjZWl2ZXIqLyl7XG4gIHZhciByZWNlaXZlciA9IGFyZ3VtZW50cy5sZW5ndGggPCA0ID8gdGFyZ2V0IDogYXJndW1lbnRzWzNdXG4gICAgLCBvd25EZXNjICA9ICQuZ2V0RGVzYyhhbk9iamVjdCh0YXJnZXQpLCBwcm9wZXJ0eUtleSlcbiAgICAsIGV4aXN0aW5nRGVzY3JpcHRvciwgcHJvdG87XG4gIGlmKCFvd25EZXNjKXtcbiAgICBpZihpc09iamVjdChwcm90byA9ICQuZ2V0UHJvdG8odGFyZ2V0KSkpe1xuICAgICAgcmV0dXJuIHNldChwcm90bywgcHJvcGVydHlLZXksIFYsIHJlY2VpdmVyKTtcbiAgICB9XG4gICAgb3duRGVzYyA9IGNyZWF0ZURlc2MoMCk7XG4gIH1cbiAgaWYoaGFzKG93bkRlc2MsICd2YWx1ZScpKXtcbiAgICBpZihvd25EZXNjLndyaXRhYmxlID09PSBmYWxzZSB8fCAhaXNPYmplY3QocmVjZWl2ZXIpKXJldHVybiBmYWxzZTtcbiAgICBleGlzdGluZ0Rlc2NyaXB0b3IgPSAkLmdldERlc2MocmVjZWl2ZXIsIHByb3BlcnR5S2V5KSB8fCBjcmVhdGVEZXNjKDApO1xuICAgIGV4aXN0aW5nRGVzY3JpcHRvci52YWx1ZSA9IFY7XG4gICAgJC5zZXREZXNjKHJlY2VpdmVyLCBwcm9wZXJ0eUtleSwgZXhpc3RpbmdEZXNjcmlwdG9yKTtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gb3duRGVzYy5zZXQgPT09IHVuZGVmaW5lZCA/IGZhbHNlIDogKG93bkRlc2Muc2V0LmNhbGwocmVjZWl2ZXIsIFYpLCB0cnVlKTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWZsZWN0Jywge3NldDogc2V0fSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZmxlY3Quc2V0LmpzXG4gKiogbW9kdWxlIGlkID0gMTY1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyAyNi4xLjE0IFJlZmxlY3Quc2V0UHJvdG90eXBlT2YodGFyZ2V0LCBwcm90bylcbnZhciAkZXhwb3J0ICA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsIHNldFByb3RvID0gcmVxdWlyZSgnLi8kLnNldC1wcm90bycpO1xuXG5pZihzZXRQcm90bykkZXhwb3J0KCRleHBvcnQuUywgJ1JlZmxlY3QnLCB7XG4gIHNldFByb3RvdHlwZU9mOiBmdW5jdGlvbiBzZXRQcm90b3R5cGVPZih0YXJnZXQsIHByb3RvKXtcbiAgICBzZXRQcm90by5jaGVjayh0YXJnZXQsIHByb3RvKTtcbiAgICB0cnkge1xuICAgICAgc2V0UHJvdG8uc2V0KHRhcmdldCwgcHJvdG8pO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaChlKXtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNi5yZWZsZWN0LnNldC1wcm90b3R5cGUtb2YuanNcbiAqKiBtb2R1bGUgaWQgPSAxNjZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCAkaW5jbHVkZXMgPSByZXF1aXJlKCcuLyQuYXJyYXktaW5jbHVkZXMnKSh0cnVlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAsICdBcnJheScsIHtcbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2RvbWVuaWMvQXJyYXkucHJvdG90eXBlLmluY2x1ZGVzXG4gIGluY2x1ZGVzOiBmdW5jdGlvbiBpbmNsdWRlcyhlbCAvKiwgZnJvbUluZGV4ID0gMCAqLyl7XG4gICAgcmV0dXJuICRpbmNsdWRlcyh0aGlzLCBlbCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQpO1xuICB9XG59KTtcblxucmVxdWlyZSgnLi8kLmFkZC10by11bnNjb3BhYmxlcycpKCdpbmNsdWRlcycpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5hcnJheS5pbmNsdWRlcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE2N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL21hdGhpYXNieW5lbnMvU3RyaW5nLnByb3RvdHlwZS5hdFxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCAkYXQgICAgID0gcmVxdWlyZSgnLi8kLnN0cmluZy1hdCcpKHRydWUpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcbiAgYXQ6IGZ1bmN0aW9uIGF0KHBvcyl7XG4gICAgcmV0dXJuICRhdCh0aGlzLCBwb3MpO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLmF0LmpzXG4gKiogbW9kdWxlIGlkID0gMTY4XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsICRwYWQgICAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLXBhZCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ1N0cmluZycsIHtcbiAgcGFkTGVmdDogZnVuY3Rpb24gcGFkTGVmdChtYXhMZW5ndGggLyosIGZpbGxTdHJpbmcgPSAnICcgKi8pe1xuICAgIHJldHVybiAkcGFkKHRoaXMsIG1heExlbmd0aCwgYXJndW1lbnRzLmxlbmd0aCA+IDEgPyBhcmd1bWVudHNbMV0gOiB1bmRlZmluZWQsIHRydWUpO1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcuc3RyaW5nLnBhZC1sZWZ0LmpzXG4gKiogbW9kdWxlIGlkID0gMTY5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vbGpoYXJiL3Byb3Bvc2FsLXN0cmluZy1wYWQtbGVmdC1yaWdodFxudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi8kLnRvLWxlbmd0aCcpXG4gICwgcmVwZWF0ICAgPSByZXF1aXJlKCcuLyQuc3RyaW5nLXJlcGVhdCcpXG4gICwgZGVmaW5lZCAgPSByZXF1aXJlKCcuLyQuZGVmaW5lZCcpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKHRoYXQsIG1heExlbmd0aCwgZmlsbFN0cmluZywgbGVmdCl7XG4gIHZhciBTICAgICAgICAgICAgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSlcbiAgICAsIHN0cmluZ0xlbmd0aCA9IFMubGVuZ3RoXG4gICAgLCBmaWxsU3RyICAgICAgPSBmaWxsU3RyaW5nID09PSB1bmRlZmluZWQgPyAnICcgOiBTdHJpbmcoZmlsbFN0cmluZylcbiAgICAsIGludE1heExlbmd0aCA9IHRvTGVuZ3RoKG1heExlbmd0aCk7XG4gIGlmKGludE1heExlbmd0aCA8PSBzdHJpbmdMZW5ndGgpcmV0dXJuIFM7XG4gIGlmKGZpbGxTdHIgPT0gJycpZmlsbFN0ciA9ICcgJztcbiAgdmFyIGZpbGxMZW4gPSBpbnRNYXhMZW5ndGggLSBzdHJpbmdMZW5ndGhcbiAgICAsIHN0cmluZ0ZpbGxlciA9IHJlcGVhdC5jYWxsKGZpbGxTdHIsIE1hdGguY2VpbChmaWxsTGVuIC8gZmlsbFN0ci5sZW5ndGgpKTtcbiAgaWYoc3RyaW5nRmlsbGVyLmxlbmd0aCA+IGZpbGxMZW4pc3RyaW5nRmlsbGVyID0gc3RyaW5nRmlsbGVyLnNsaWNlKDAsIGZpbGxMZW4pO1xuICByZXR1cm4gbGVmdCA/IHN0cmluZ0ZpbGxlciArIFMgOiBTICsgc3RyaW5nRmlsbGVyO1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnN0cmluZy1wYWQuanNcbiAqKiBtb2R1bGUgaWQgPSAxNzBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpXG4gICwgJHBhZCAgICA9IHJlcXVpcmUoJy4vJC5zdHJpbmctcGFkJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QLCAnU3RyaW5nJywge1xuICBwYWRSaWdodDogZnVuY3Rpb24gcGFkUmlnaHQobWF4TGVuZ3RoIC8qLCBmaWxsU3RyaW5nID0gJyAnICovKXtcbiAgICByZXR1cm4gJHBhZCh0aGlzLCBtYXhMZW5ndGgsIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCBmYWxzZSk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcucGFkLXJpZ2h0LmpzXG4gKiogbW9kdWxlIGlkID0gMTcxXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vc2VibWFya2JhZ2UvZWNtYXNjcmlwdC1zdHJpbmctbGVmdC1yaWdodC10cmltXG5yZXF1aXJlKCcuLyQuc3RyaW5nLXRyaW0nKSgndHJpbUxlZnQnLCBmdW5jdGlvbigkdHJpbSl7XG4gIHJldHVybiBmdW5jdGlvbiB0cmltTGVmdCgpe1xuICAgIHJldHVybiAkdHJpbSh0aGlzLCAxKTtcbiAgfTtcbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5zdHJpbmcudHJpbS1sZWZ0LmpzXG4gKiogbW9kdWxlIGlkID0gMTcyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vc2VibWFya2JhZ2UvZWNtYXNjcmlwdC1zdHJpbmctbGVmdC1yaWdodC10cmltXG5yZXF1aXJlKCcuLyQuc3RyaW5nLXRyaW0nKSgndHJpbVJpZ2h0JywgZnVuY3Rpb24oJHRyaW0pe1xuICByZXR1cm4gZnVuY3Rpb24gdHJpbVJpZ2h0KCl7XG4gICAgcmV0dXJuICR0cmltKHRoaXMsIDIpO1xuICB9O1xufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnN0cmluZy50cmltLXJpZ2h0LmpzXG4gKiogbW9kdWxlIGlkID0gMTczXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vYmVuamFtaW5nci9SZXhFeHAuZXNjYXBlXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsICRyZSAgICAgPSByZXF1aXJlKCcuLyQucmVwbGFjZXInKSgvW1xcXFxeJCorPy4oKXxbXFxde31dL2csICdcXFxcJCYnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdSZWdFeHAnLCB7ZXNjYXBlOiBmdW5jdGlvbiBlc2NhcGUoaXQpeyByZXR1cm4gJHJlKGl0KTsgfX0pO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3LnJlZ2V4cC5lc2NhcGUuanNcbiAqKiBtb2R1bGUgaWQgPSAxNzRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24ocmVnRXhwLCByZXBsYWNlKXtcbiAgdmFyIHJlcGxhY2VyID0gcmVwbGFjZSA9PT0gT2JqZWN0KHJlcGxhY2UpID8gZnVuY3Rpb24ocGFydCl7XG4gICAgcmV0dXJuIHJlcGxhY2VbcGFydF07XG4gIH0gOiByZXBsYWNlO1xuICByZXR1cm4gZnVuY3Rpb24oaXQpe1xuICAgIHJldHVybiBTdHJpbmcoaXQpLnJlcGxhY2UocmVnRXhwLCByZXBsYWNlcik7XG4gIH07XG59O1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQucmVwbGFjZXIuanNcbiAqKiBtb2R1bGUgaWQgPSAxNzVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGh0dHBzOi8vZ2lzdC5naXRodWIuY29tL1dlYlJlZmxlY3Rpb24vOTM1Mzc4MVxudmFyICQgICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsICRleHBvcnQgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBvd25LZXlzICAgID0gcmVxdWlyZSgnLi8kLm93bi1rZXlzJylcbiAgLCB0b0lPYmplY3QgID0gcmVxdWlyZSgnLi8kLnRvLWlvYmplY3QnKVxuICAsIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuLyQucHJvcGVydHktZGVzYycpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yczogZnVuY3Rpb24gZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyhvYmplY3Qpe1xuICAgIHZhciBPICAgICAgID0gdG9JT2JqZWN0KG9iamVjdClcbiAgICAgICwgc2V0RGVzYyA9ICQuc2V0RGVzY1xuICAgICAgLCBnZXREZXNjID0gJC5nZXREZXNjXG4gICAgICAsIGtleXMgICAgPSBvd25LZXlzKE8pXG4gICAgICAsIHJlc3VsdCAgPSB7fVxuICAgICAgLCBpICAgICAgID0gMFxuICAgICAgLCBrZXksIEQ7XG4gICAgd2hpbGUoa2V5cy5sZW5ndGggPiBpKXtcbiAgICAgIEQgPSBnZXREZXNjKE8sIGtleSA9IGtleXNbaSsrXSk7XG4gICAgICBpZihrZXkgaW4gcmVzdWx0KXNldERlc2MocmVzdWx0LCBrZXksIGNyZWF0ZURlc2MoMCwgRCkpO1xuICAgICAgZWxzZSByZXN1bHRba2V5XSA9IEQ7XG4gICAgfSByZXR1cm4gcmVzdWx0O1xuICB9XG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LmdldC1vd24tcHJvcGVydHktZGVzY3JpcHRvcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNzZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGh0dHA6Ly9nb28uZ2wvWGtCcmpEXG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsICR2YWx1ZXMgPSByZXF1aXJlKCcuLyQub2JqZWN0LXRvLWFycmF5JykoZmFsc2UpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ09iamVjdCcsIHtcbiAgdmFsdWVzOiBmdW5jdGlvbiB2YWx1ZXMoaXQpe1xuICAgIHJldHVybiAkdmFsdWVzKGl0KTtcbiAgfVxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvZXM3Lm9iamVjdC52YWx1ZXMuanNcbiAqKiBtb2R1bGUgaWQgPSAxNzdcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsInZhciAkICAgICAgICAgPSByZXF1aXJlKCcuLyQnKVxuICAsIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vJC50by1pb2JqZWN0JylcbiAgLCBpc0VudW0gICAgPSAkLmlzRW51bTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24oaXNFbnRyaWVzKXtcbiAgcmV0dXJuIGZ1bmN0aW9uKGl0KXtcbiAgICB2YXIgTyAgICAgID0gdG9JT2JqZWN0KGl0KVxuICAgICAgLCBrZXlzICAgPSAkLmdldEtleXMoTylcbiAgICAgICwgbGVuZ3RoID0ga2V5cy5sZW5ndGhcbiAgICAgICwgaSAgICAgID0gMFxuICAgICAgLCByZXN1bHQgPSBbXVxuICAgICAgLCBrZXk7XG4gICAgd2hpbGUobGVuZ3RoID4gaSlpZihpc0VudW0uY2FsbChPLCBrZXkgPSBrZXlzW2krK10pKXtcbiAgICAgIHJlc3VsdC5wdXNoKGlzRW50cmllcyA/IFtrZXksIE9ba2V5XV0gOiBPW2tleV0pO1xuICAgIH0gcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvJC5vYmplY3QtdG8tYXJyYXkuanNcbiAqKiBtb2R1bGUgaWQgPSAxNzhcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGh0dHA6Ly9nb28uZ2wvWGtCcmpEXG52YXIgJGV4cG9ydCAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCAkZW50cmllcyA9IHJlcXVpcmUoJy4vJC5vYmplY3QtdG8tYXJyYXknKSh0cnVlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIGVudHJpZXM6IGZ1bmN0aW9uIGVudHJpZXMoaXQpe1xuICAgIHJldHVybiAkZW50cmllcyhpdCk7XG4gIH1cbn0pO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzL2VzNy5vYmplY3QuZW50cmllcy5qc1xuICoqIG1vZHVsZSBpZCA9IDE3OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ01hcCcsIHt0b0pTT046IHJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uLXRvLWpzb24nKSgnTWFwJyl9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcubWFwLnRvLWpzb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxODBcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9EYXZpZEJydWFudC9NYXAtU2V0LnByb3RvdHlwZS50b0pTT05cbnZhciBmb3JPZiAgID0gcmVxdWlyZSgnLi8kLmZvci1vZicpXG4gICwgY2xhc3NvZiA9IHJlcXVpcmUoJy4vJC5jbGFzc29mJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKE5BTUUpe1xuICByZXR1cm4gZnVuY3Rpb24gdG9KU09OKCl7XG4gICAgaWYoY2xhc3NvZih0aGlzKSAhPSBOQU1FKXRocm93IFR5cGVFcnJvcihOQU1FICsgXCIjdG9KU09OIGlzbid0IGdlbmVyaWNcIik7XG4gICAgdmFyIGFyciA9IFtdO1xuICAgIGZvck9mKHRoaXMsIGZhbHNlLCBhcnIucHVzaCwgYXJyKTtcbiAgICByZXR1cm4gYXJyO1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLmNvbGxlY3Rpb24tdG8tanNvbi5qc1xuICoqIG1vZHVsZSBpZCA9IDE4MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL0RhdmlkQnJ1YW50L01hcC1TZXQucHJvdG90eXBlLnRvSlNPTlxudmFyICRleHBvcnQgID0gcmVxdWlyZSgnLi8kLmV4cG9ydCcpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCwgJ1NldCcsIHt0b0pTT046IHJlcXVpcmUoJy4vJC5jb2xsZWN0aW9uLXRvLWpzb24nKSgnU2V0Jyl9KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9lczcuc2V0LnRvLWpzb24uanNcbiAqKiBtb2R1bGUgaWQgPSAxODJcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIi8vIEphdmFTY3JpcHQgMS42IC8gU3RyYXdtYW4gYXJyYXkgc3RhdGljcyBzaGltXG52YXIgJCAgICAgICA9IHJlcXVpcmUoJy4vJCcpXG4gICwgJGV4cG9ydCA9IHJlcXVpcmUoJy4vJC5leHBvcnQnKVxuICAsICRjdHggICAgPSByZXF1aXJlKCcuLyQuY3R4JylcbiAgLCAkQXJyYXkgID0gcmVxdWlyZSgnLi8kLmNvcmUnKS5BcnJheSB8fCBBcnJheVxuICAsIHN0YXRpY3MgPSB7fTtcbnZhciBzZXRTdGF0aWNzID0gZnVuY3Rpb24oa2V5cywgbGVuZ3RoKXtcbiAgJC5lYWNoLmNhbGwoa2V5cy5zcGxpdCgnLCcpLCBmdW5jdGlvbihrZXkpe1xuICAgIGlmKGxlbmd0aCA9PSB1bmRlZmluZWQgJiYga2V5IGluICRBcnJheSlzdGF0aWNzW2tleV0gPSAkQXJyYXlba2V5XTtcbiAgICBlbHNlIGlmKGtleSBpbiBbXSlzdGF0aWNzW2tleV0gPSAkY3R4KEZ1bmN0aW9uLmNhbGwsIFtdW2tleV0sIGxlbmd0aCk7XG4gIH0pO1xufTtcbnNldFN0YXRpY3MoJ3BvcCxyZXZlcnNlLHNoaWZ0LGtleXMsdmFsdWVzLGVudHJpZXMnLCAxKTtcbnNldFN0YXRpY3MoJ2luZGV4T2YsZXZlcnksc29tZSxmb3JFYWNoLG1hcCxmaWx0ZXIsZmluZCxmaW5kSW5kZXgsaW5jbHVkZXMnLCAzKTtcbnNldFN0YXRpY3MoJ2pvaW4sc2xpY2UsY29uY2F0LHB1c2gsc3BsaWNlLHVuc2hpZnQsc29ydCxsYXN0SW5kZXhPZiwnICtcbiAgICAgICAgICAgJ3JlZHVjZSxyZWR1Y2VSaWdodCxjb3B5V2l0aGluLGZpbGwnKTtcbiRleHBvcnQoJGV4cG9ydC5TLCAnQXJyYXknLCBzdGF0aWNzKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy9qcy5hcnJheS5zdGF0aWNzLmpzXG4gKiogbW9kdWxlIGlkID0gMTgzXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIvLyBpZTktIHNldFRpbWVvdXQgJiBzZXRJbnRlcnZhbCBhZGRpdGlvbmFsIHBhcmFtZXRlcnMgZml4XG52YXIgZ2xvYmFsICAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsICRleHBvcnQgICAgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCBpbnZva2UgICAgID0gcmVxdWlyZSgnLi8kLmludm9rZScpXG4gICwgcGFydGlhbCAgICA9IHJlcXVpcmUoJy4vJC5wYXJ0aWFsJylcbiAgLCBuYXZpZ2F0b3IgID0gZ2xvYmFsLm5hdmlnYXRvclxuICAsIE1TSUUgICAgICAgPSAhIW5hdmlnYXRvciAmJiAvTVNJRSAuXFwuLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpOyAvLyA8LSBkaXJ0eSBpZTktIGNoZWNrXG52YXIgd3JhcCA9IGZ1bmN0aW9uKHNldCl7XG4gIHJldHVybiBNU0lFID8gZnVuY3Rpb24oZm4sIHRpbWUgLyosIC4uLmFyZ3MgKi8pe1xuICAgIHJldHVybiBzZXQoaW52b2tlKFxuICAgICAgcGFydGlhbCxcbiAgICAgIFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAyKSxcbiAgICAgIHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbilcbiAgICApLCB0aW1lKTtcbiAgfSA6IHNldDtcbn07XG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuQiArICRleHBvcnQuRiAqIE1TSUUsIHtcbiAgc2V0VGltZW91dDogIHdyYXAoZ2xvYmFsLnNldFRpbWVvdXQpLFxuICBzZXRJbnRlcnZhbDogd3JhcChnbG9iYWwuc2V0SW50ZXJ2YWwpXG59KTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy93ZWIudGltZXJzLmpzXG4gKiogbW9kdWxlIGlkID0gMTg0XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG52YXIgcGF0aCAgICAgID0gcmVxdWlyZSgnLi8kLnBhdGgnKVxuICAsIGludm9rZSAgICA9IHJlcXVpcmUoJy4vJC5pbnZva2UnKVxuICAsIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vJC5hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKC8qIC4uLnBhcmdzICovKXtcbiAgdmFyIGZuICAgICA9IGFGdW5jdGlvbih0aGlzKVxuICAgICwgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aFxuICAgICwgcGFyZ3MgID0gQXJyYXkobGVuZ3RoKVxuICAgICwgaSAgICAgID0gMFxuICAgICwgXyAgICAgID0gcGF0aC5fXG4gICAgLCBob2xkZXIgPSBmYWxzZTtcbiAgd2hpbGUobGVuZ3RoID4gaSlpZigocGFyZ3NbaV0gPSBhcmd1bWVudHNbaSsrXSkgPT09IF8paG9sZGVyID0gdHJ1ZTtcbiAgcmV0dXJuIGZ1bmN0aW9uKC8qIC4uLmFyZ3MgKi8pe1xuICAgIHZhciB0aGF0ICA9IHRoaXNcbiAgICAgICwgJCQgICAgPSBhcmd1bWVudHNcbiAgICAgICwgJCRsZW4gPSAkJC5sZW5ndGhcbiAgICAgICwgaiA9IDAsIGsgPSAwLCBhcmdzO1xuICAgIGlmKCFob2xkZXIgJiYgISQkbGVuKXJldHVybiBpbnZva2UoZm4sIHBhcmdzLCB0aGF0KTtcbiAgICBhcmdzID0gcGFyZ3Muc2xpY2UoKTtcbiAgICBpZihob2xkZXIpZm9yKDtsZW5ndGggPiBqOyBqKyspaWYoYXJnc1tqXSA9PT0gXylhcmdzW2pdID0gJCRbaysrXTtcbiAgICB3aGlsZSgkJGxlbiA+IGspYXJncy5wdXNoKCQkW2srK10pO1xuICAgIHJldHVybiBpbnZva2UoZm4sIGFyZ3MsIHRoYXQpO1xuICB9O1xufTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9iYWJlbC1wb2x5ZmlsbC9+L2NvcmUtanMvbW9kdWxlcy8kLnBhcnRpYWwuanNcbiAqKiBtb2R1bGUgaWQgPSAxODVcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi8kLmdsb2JhbCcpO1xuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vY29yZS1qcy9tb2R1bGVzLyQucGF0aC5qc1xuICoqIG1vZHVsZSBpZCA9IDE4NlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyICRleHBvcnQgPSByZXF1aXJlKCcuLyQuZXhwb3J0JylcbiAgLCAkdGFzayAgID0gcmVxdWlyZSgnLi8kLnRhc2snKTtcbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5CLCB7XG4gIHNldEltbWVkaWF0ZTogICAkdGFzay5zZXQsXG4gIGNsZWFySW1tZWRpYXRlOiAkdGFzay5jbGVhclxufSk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvd2ViLmltbWVkaWF0ZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE4N1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwicmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnbG9iYWwgICAgICA9IHJlcXVpcmUoJy4vJC5nbG9iYWwnKVxuICAsIGhpZGUgICAgICAgID0gcmVxdWlyZSgnLi8kLmhpZGUnKVxuICAsIEl0ZXJhdG9ycyAgID0gcmVxdWlyZSgnLi8kLml0ZXJhdG9ycycpXG4gICwgSVRFUkFUT1IgICAgPSByZXF1aXJlKCcuLyQud2tzJykoJ2l0ZXJhdG9yJylcbiAgLCBOTCAgICAgICAgICA9IGdsb2JhbC5Ob2RlTGlzdFxuICAsIEhUQyAgICAgICAgID0gZ2xvYmFsLkhUTUxDb2xsZWN0aW9uXG4gICwgTkxQcm90byAgICAgPSBOTCAmJiBOTC5wcm90b3R5cGVcbiAgLCBIVENQcm90byAgICA9IEhUQyAmJiBIVEMucHJvdG90eXBlXG4gICwgQXJyYXlWYWx1ZXMgPSBJdGVyYXRvcnMuTm9kZUxpc3QgPSBJdGVyYXRvcnMuSFRNTENvbGxlY3Rpb24gPSBJdGVyYXRvcnMuQXJyYXk7XG5pZihOTFByb3RvICYmICFOTFByb3RvW0lURVJBVE9SXSloaWRlKE5MUHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG5pZihIVENQcm90byAmJiAhSFRDUHJvdG9bSVRFUkFUT1JdKWhpZGUoSFRDUHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vYmFiZWwtcG9seWZpbGwvfi9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qc1xuICoqIG1vZHVsZSBpZCA9IDE4OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLyoqXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTQsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogaHR0cHM6Ly9yYXcuZ2l0aHViLmNvbS9mYWNlYm9vay9yZWdlbmVyYXRvci9tYXN0ZXIvTElDRU5TRSBmaWxlLiBBblxuICogYWRkaXRpb25hbCBncmFudCBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluXG4gKiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuIShmdW5jdGlvbihnbG9iYWwpIHtcbiAgXCJ1c2Ugc3RyaWN0XCI7XG5cbiAgdmFyIGhhc093biA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG4gIHZhciB1bmRlZmluZWQ7IC8vIE1vcmUgY29tcHJlc3NpYmxlIHRoYW4gdm9pZCAwLlxuICB2YXIgaXRlcmF0b3JTeW1ib2wgPVxuICAgIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IgfHwgXCJAQGl0ZXJhdG9yXCI7XG5cbiAgdmFyIGluTW9kdWxlID0gdHlwZW9mIG1vZHVsZSA9PT0gXCJvYmplY3RcIjtcbiAgdmFyIHJ1bnRpbWUgPSBnbG9iYWwucmVnZW5lcmF0b3JSdW50aW1lO1xuICBpZiAocnVudGltZSkge1xuICAgIGlmIChpbk1vZHVsZSkge1xuICAgICAgLy8gSWYgcmVnZW5lcmF0b3JSdW50aW1lIGlzIGRlZmluZWQgZ2xvYmFsbHkgYW5kIHdlJ3JlIGluIGEgbW9kdWxlLFxuICAgICAgLy8gbWFrZSB0aGUgZXhwb3J0cyBvYmplY3QgaWRlbnRpY2FsIHRvIHJlZ2VuZXJhdG9yUnVudGltZS5cbiAgICAgIG1vZHVsZS5leHBvcnRzID0gcnVudGltZTtcbiAgICB9XG4gICAgLy8gRG9uJ3QgYm90aGVyIGV2YWx1YXRpbmcgdGhlIHJlc3Qgb2YgdGhpcyBmaWxlIGlmIHRoZSBydW50aW1lIHdhc1xuICAgIC8vIGFscmVhZHkgZGVmaW5lZCBnbG9iYWxseS5cbiAgICByZXR1cm47XG4gIH1cblxuICAvLyBEZWZpbmUgdGhlIHJ1bnRpbWUgZ2xvYmFsbHkgKGFzIGV4cGVjdGVkIGJ5IGdlbmVyYXRlZCBjb2RlKSBhcyBlaXRoZXJcbiAgLy8gbW9kdWxlLmV4cG9ydHMgKGlmIHdlJ3JlIGluIGEgbW9kdWxlKSBvciBhIG5ldywgZW1wdHkgb2JqZWN0LlxuICBydW50aW1lID0gZ2xvYmFsLnJlZ2VuZXJhdG9yUnVudGltZSA9IGluTW9kdWxlID8gbW9kdWxlLmV4cG9ydHMgOiB7fTtcblxuICBmdW5jdGlvbiB3cmFwKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgLy8gSWYgb3V0ZXJGbiBwcm92aWRlZCwgdGhlbiBvdXRlckZuLnByb3RvdHlwZSBpbnN0YW5jZW9mIEdlbmVyYXRvci5cbiAgICB2YXIgZ2VuZXJhdG9yID0gT2JqZWN0LmNyZWF0ZSgob3V0ZXJGbiB8fCBHZW5lcmF0b3IpLnByb3RvdHlwZSk7XG4gICAgdmFyIGNvbnRleHQgPSBuZXcgQ29udGV4dCh0cnlMb2NzTGlzdCB8fCBbXSk7XG5cbiAgICAvLyBUaGUgLl9pbnZva2UgbWV0aG9kIHVuaWZpZXMgdGhlIGltcGxlbWVudGF0aW9ucyBvZiB0aGUgLm5leHQsXG4gICAgLy8gLnRocm93LCBhbmQgLnJldHVybiBtZXRob2RzLlxuICAgIGdlbmVyYXRvci5faW52b2tlID0gbWFrZUludm9rZU1ldGhvZChpbm5lckZuLCBzZWxmLCBjb250ZXh0KTtcblxuICAgIHJldHVybiBnZW5lcmF0b3I7XG4gIH1cbiAgcnVudGltZS53cmFwID0gd3JhcDtcblxuICAvLyBUcnkvY2F0Y2ggaGVscGVyIHRvIG1pbmltaXplIGRlb3B0aW1pemF0aW9ucy4gUmV0dXJucyBhIGNvbXBsZXRpb25cbiAgLy8gcmVjb3JkIGxpa2UgY29udGV4dC50cnlFbnRyaWVzW2ldLmNvbXBsZXRpb24uIFRoaXMgaW50ZXJmYWNlIGNvdWxkXG4gIC8vIGhhdmUgYmVlbiAoYW5kIHdhcyBwcmV2aW91c2x5KSBkZXNpZ25lZCB0byB0YWtlIGEgY2xvc3VyZSB0byBiZVxuICAvLyBpbnZva2VkIHdpdGhvdXQgYXJndW1lbnRzLCBidXQgaW4gYWxsIHRoZSBjYXNlcyB3ZSBjYXJlIGFib3V0IHdlXG4gIC8vIGFscmVhZHkgaGF2ZSBhbiBleGlzdGluZyBtZXRob2Qgd2Ugd2FudCB0byBjYWxsLCBzbyB0aGVyZSdzIG5vIG5lZWRcbiAgLy8gdG8gY3JlYXRlIGEgbmV3IGZ1bmN0aW9uIG9iamVjdC4gV2UgY2FuIGV2ZW4gZ2V0IGF3YXkgd2l0aCBhc3N1bWluZ1xuICAvLyB0aGUgbWV0aG9kIHRha2VzIGV4YWN0bHkgb25lIGFyZ3VtZW50LCBzaW5jZSB0aGF0IGhhcHBlbnMgdG8gYmUgdHJ1ZVxuICAvLyBpbiBldmVyeSBjYXNlLCBzbyB3ZSBkb24ndCBoYXZlIHRvIHRvdWNoIHRoZSBhcmd1bWVudHMgb2JqZWN0LiBUaGVcbiAgLy8gb25seSBhZGRpdGlvbmFsIGFsbG9jYXRpb24gcmVxdWlyZWQgaXMgdGhlIGNvbXBsZXRpb24gcmVjb3JkLCB3aGljaFxuICAvLyBoYXMgYSBzdGFibGUgc2hhcGUgYW5kIHNvIGhvcGVmdWxseSBzaG91bGQgYmUgY2hlYXAgdG8gYWxsb2NhdGUuXG4gIGZ1bmN0aW9uIHRyeUNhdGNoKGZuLCBvYmosIGFyZykge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcIm5vcm1hbFwiLCBhcmc6IGZuLmNhbGwob2JqLCBhcmcpIH07XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICByZXR1cm4geyB0eXBlOiBcInRocm93XCIsIGFyZzogZXJyIH07XG4gICAgfVxuICB9XG5cbiAgdmFyIEdlblN0YXRlU3VzcGVuZGVkU3RhcnQgPSBcInN1c3BlbmRlZFN0YXJ0XCI7XG4gIHZhciBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkID0gXCJzdXNwZW5kZWRZaWVsZFwiO1xuICB2YXIgR2VuU3RhdGVFeGVjdXRpbmcgPSBcImV4ZWN1dGluZ1wiO1xuICB2YXIgR2VuU3RhdGVDb21wbGV0ZWQgPSBcImNvbXBsZXRlZFwiO1xuXG4gIC8vIFJldHVybmluZyB0aGlzIG9iamVjdCBmcm9tIHRoZSBpbm5lckZuIGhhcyB0aGUgc2FtZSBlZmZlY3QgYXNcbiAgLy8gYnJlYWtpbmcgb3V0IG9mIHRoZSBkaXNwYXRjaCBzd2l0Y2ggc3RhdGVtZW50LlxuICB2YXIgQ29udGludWVTZW50aW5lbCA9IHt9O1xuXG4gIC8vIER1bW15IGNvbnN0cnVjdG9yIGZ1bmN0aW9ucyB0aGF0IHdlIHVzZSBhcyB0aGUgLmNvbnN0cnVjdG9yIGFuZFxuICAvLyAuY29uc3RydWN0b3IucHJvdG90eXBlIHByb3BlcnRpZXMgZm9yIGZ1bmN0aW9ucyB0aGF0IHJldHVybiBHZW5lcmF0b3JcbiAgLy8gb2JqZWN0cy4gRm9yIGZ1bGwgc3BlYyBjb21wbGlhbmNlLCB5b3UgbWF5IHdpc2ggdG8gY29uZmlndXJlIHlvdXJcbiAgLy8gbWluaWZpZXIgbm90IHRvIG1hbmdsZSB0aGUgbmFtZXMgb2YgdGhlc2UgdHdvIGZ1bmN0aW9ucy5cbiAgZnVuY3Rpb24gR2VuZXJhdG9yKCkge31cbiAgZnVuY3Rpb24gR2VuZXJhdG9yRnVuY3Rpb24oKSB7fVxuICBmdW5jdGlvbiBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSgpIHt9XG5cbiAgdmFyIEdwID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUucHJvdG90eXBlID0gR2VuZXJhdG9yLnByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb24ucHJvdG90eXBlID0gR3AuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZTtcbiAgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUuY29uc3RydWN0b3IgPSBHZW5lcmF0b3JGdW5jdGlvbjtcbiAgR2VuZXJhdG9yRnVuY3Rpb24uZGlzcGxheU5hbWUgPSBcIkdlbmVyYXRvckZ1bmN0aW9uXCI7XG5cbiAgLy8gSGVscGVyIGZvciBkZWZpbmluZyB0aGUgLm5leHQsIC50aHJvdywgYW5kIC5yZXR1cm4gbWV0aG9kcyBvZiB0aGVcbiAgLy8gSXRlcmF0b3IgaW50ZXJmYWNlIGluIHRlcm1zIG9mIGEgc2luZ2xlIC5faW52b2tlIG1ldGhvZC5cbiAgZnVuY3Rpb24gZGVmaW5lSXRlcmF0b3JNZXRob2RzKHByb3RvdHlwZSkge1xuICAgIFtcIm5leHRcIiwgXCJ0aHJvd1wiLCBcInJldHVyblwiXS5mb3JFYWNoKGZ1bmN0aW9uKG1ldGhvZCkge1xuICAgICAgcHJvdG90eXBlW21ldGhvZF0gPSBmdW5jdGlvbihhcmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2ludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcnVudGltZS5pc0dlbmVyYXRvckZ1bmN0aW9uID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgdmFyIGN0b3IgPSB0eXBlb2YgZ2VuRnVuID09PSBcImZ1bmN0aW9uXCIgJiYgZ2VuRnVuLmNvbnN0cnVjdG9yO1xuICAgIHJldHVybiBjdG9yXG4gICAgICA/IGN0b3IgPT09IEdlbmVyYXRvckZ1bmN0aW9uIHx8XG4gICAgICAgIC8vIEZvciB0aGUgbmF0aXZlIEdlbmVyYXRvckZ1bmN0aW9uIGNvbnN0cnVjdG9yLCB0aGUgYmVzdCB3ZSBjYW5cbiAgICAgICAgLy8gZG8gaXMgdG8gY2hlY2sgaXRzIC5uYW1lIHByb3BlcnR5LlxuICAgICAgICAoY3Rvci5kaXNwbGF5TmFtZSB8fCBjdG9yLm5hbWUpID09PSBcIkdlbmVyYXRvckZ1bmN0aW9uXCJcbiAgICAgIDogZmFsc2U7XG4gIH07XG5cbiAgcnVudGltZS5tYXJrID0gZnVuY3Rpb24oZ2VuRnVuKSB7XG4gICAgaWYgKE9iamVjdC5zZXRQcm90b3R5cGVPZikge1xuICAgICAgT2JqZWN0LnNldFByb3RvdHlwZU9mKGdlbkZ1biwgR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBnZW5GdW4uX19wcm90b19fID0gR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGU7XG4gICAgfVxuICAgIGdlbkZ1bi5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEdwKTtcbiAgICByZXR1cm4gZ2VuRnVuO1xuICB9O1xuXG4gIC8vIFdpdGhpbiB0aGUgYm9keSBvZiBhbnkgYXN5bmMgZnVuY3Rpb24sIGBhd2FpdCB4YCBpcyB0cmFuc2Zvcm1lZCB0b1xuICAvLyBgeWllbGQgcmVnZW5lcmF0b3JSdW50aW1lLmF3cmFwKHgpYCwgc28gdGhhdCB0aGUgcnVudGltZSBjYW4gdGVzdFxuICAvLyBgdmFsdWUgaW5zdGFuY2VvZiBBd2FpdEFyZ3VtZW50YCB0byBkZXRlcm1pbmUgaWYgdGhlIHlpZWxkZWQgdmFsdWUgaXNcbiAgLy8gbWVhbnQgdG8gYmUgYXdhaXRlZC4gU29tZSBtYXkgY29uc2lkZXIgdGhlIG5hbWUgb2YgdGhpcyBtZXRob2QgdG9vXG4gIC8vIGN1dGVzeSwgYnV0IHRoZXkgYXJlIGN1cm11ZGdlb25zLlxuICBydW50aW1lLmF3cmFwID0gZnVuY3Rpb24oYXJnKSB7XG4gICAgcmV0dXJuIG5ldyBBd2FpdEFyZ3VtZW50KGFyZyk7XG4gIH07XG5cbiAgZnVuY3Rpb24gQXdhaXRBcmd1bWVudChhcmcpIHtcbiAgICB0aGlzLmFyZyA9IGFyZztcbiAgfVxuXG4gIGZ1bmN0aW9uIEFzeW5jSXRlcmF0b3IoZ2VuZXJhdG9yKSB7XG4gICAgLy8gVGhpcyBpbnZva2UgZnVuY3Rpb24gaXMgd3JpdHRlbiBpbiBhIHN0eWxlIHRoYXQgYXNzdW1lcyBzb21lXG4gICAgLy8gY2FsbGluZyBmdW5jdGlvbiAob3IgUHJvbWlzZSkgd2lsbCBoYW5kbGUgZXhjZXB0aW9ucy5cbiAgICBmdW5jdGlvbiBpbnZva2UobWV0aG9kLCBhcmcpIHtcbiAgICAgIHZhciByZXN1bHQgPSBnZW5lcmF0b3JbbWV0aG9kXShhcmcpO1xuICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgQXdhaXRBcmd1bWVudFxuICAgICAgICA/IFByb21pc2UucmVzb2x2ZSh2YWx1ZS5hcmcpLnRoZW4oaW52b2tlTmV4dCwgaW52b2tlVGhyb3cpXG4gICAgICAgIDogUHJvbWlzZS5yZXNvbHZlKHZhbHVlKS50aGVuKGZ1bmN0aW9uKHVud3JhcHBlZCkge1xuICAgICAgICAgICAgLy8gV2hlbiBhIHlpZWxkZWQgUHJvbWlzZSBpcyByZXNvbHZlZCwgaXRzIGZpbmFsIHZhbHVlIGJlY29tZXNcbiAgICAgICAgICAgIC8vIHRoZSAudmFsdWUgb2YgdGhlIFByb21pc2U8e3ZhbHVlLGRvbmV9PiByZXN1bHQgZm9yIHRoZVxuICAgICAgICAgICAgLy8gY3VycmVudCBpdGVyYXRpb24uIElmIHRoZSBQcm9taXNlIGlzIHJlamVjdGVkLCBob3dldmVyLCB0aGVcbiAgICAgICAgICAgIC8vIHJlc3VsdCBmb3IgdGhpcyBpdGVyYXRpb24gd2lsbCBiZSByZWplY3RlZCB3aXRoIHRoZSBzYW1lXG4gICAgICAgICAgICAvLyByZWFzb24uIE5vdGUgdGhhdCByZWplY3Rpb25zIG9mIHlpZWxkZWQgUHJvbWlzZXMgYXJlIG5vdFxuICAgICAgICAgICAgLy8gdGhyb3duIGJhY2sgaW50byB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBhcyBpcyB0aGUgY2FzZVxuICAgICAgICAgICAgLy8gd2hlbiBhbiBhd2FpdGVkIFByb21pc2UgaXMgcmVqZWN0ZWQuIFRoaXMgZGlmZmVyZW5jZSBpblxuICAgICAgICAgICAgLy8gYmVoYXZpb3IgYmV0d2VlbiB5aWVsZCBhbmQgYXdhaXQgaXMgaW1wb3J0YW50LCBiZWNhdXNlIGl0XG4gICAgICAgICAgICAvLyBhbGxvd3MgdGhlIGNvbnN1bWVyIHRvIGRlY2lkZSB3aGF0IHRvIGRvIHdpdGggdGhlIHlpZWxkZWRcbiAgICAgICAgICAgIC8vIHJlamVjdGlvbiAoc3dhbGxvdyBpdCBhbmQgY29udGludWUsIG1hbnVhbGx5IC50aHJvdyBpdCBiYWNrXG4gICAgICAgICAgICAvLyBpbnRvIHRoZSBnZW5lcmF0b3IsIGFiYW5kb24gaXRlcmF0aW9uLCB3aGF0ZXZlcikuIFdpdGhcbiAgICAgICAgICAgIC8vIGF3YWl0LCBieSBjb250cmFzdCwgdGhlcmUgaXMgbm8gb3Bwb3J0dW5pdHkgdG8gZXhhbWluZSB0aGVcbiAgICAgICAgICAgIC8vIHJlamVjdGlvbiByZWFzb24gb3V0c2lkZSB0aGUgZ2VuZXJhdG9yIGZ1bmN0aW9uLCBzbyB0aGVcbiAgICAgICAgICAgIC8vIG9ubHkgb3B0aW9uIGlzIHRvIHRocm93IGl0IGZyb20gdGhlIGF3YWl0IGV4cHJlc3Npb24sIGFuZFxuICAgICAgICAgICAgLy8gbGV0IHRoZSBnZW5lcmF0b3IgZnVuY3Rpb24gaGFuZGxlIHRoZSBleGNlcHRpb24uXG4gICAgICAgICAgICByZXN1bHQudmFsdWUgPSB1bndyYXBwZWQ7XG4gICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2YgcHJvY2VzcyA9PT0gXCJvYmplY3RcIiAmJiBwcm9jZXNzLmRvbWFpbikge1xuICAgICAgaW52b2tlID0gcHJvY2Vzcy5kb21haW4uYmluZChpbnZva2UpO1xuICAgIH1cblxuICAgIHZhciBpbnZva2VOZXh0ID0gaW52b2tlLmJpbmQoZ2VuZXJhdG9yLCBcIm5leHRcIik7XG4gICAgdmFyIGludm9rZVRocm93ID0gaW52b2tlLmJpbmQoZ2VuZXJhdG9yLCBcInRocm93XCIpO1xuICAgIHZhciBpbnZva2VSZXR1cm4gPSBpbnZva2UuYmluZChnZW5lcmF0b3IsIFwicmV0dXJuXCIpO1xuICAgIHZhciBwcmV2aW91c1Byb21pc2U7XG5cbiAgICBmdW5jdGlvbiBlbnF1ZXVlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBmdW5jdGlvbiBjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpIHtcbiAgICAgICAgcmV0dXJuIGludm9rZShtZXRob2QsIGFyZyk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBwcmV2aW91c1Byb21pc2UgPVxuICAgICAgICAvLyBJZiBlbnF1ZXVlIGhhcyBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gd2Ugd2FudCB0byB3YWl0IHVudGlsXG4gICAgICAgIC8vIGFsbCBwcmV2aW91cyBQcm9taXNlcyBoYXZlIGJlZW4gcmVzb2x2ZWQgYmVmb3JlIGNhbGxpbmcgaW52b2tlLFxuICAgICAgICAvLyBzbyB0aGF0IHJlc3VsdHMgYXJlIGFsd2F5cyBkZWxpdmVyZWQgaW4gdGhlIGNvcnJlY3Qgb3JkZXIuIElmXG4gICAgICAgIC8vIGVucXVldWUgaGFzIG5vdCBiZWVuIGNhbGxlZCBiZWZvcmUsIHRoZW4gaXQgaXMgaW1wb3J0YW50IHRvXG4gICAgICAgIC8vIGNhbGwgaW52b2tlIGltbWVkaWF0ZWx5LCB3aXRob3V0IHdhaXRpbmcgb24gYSBjYWxsYmFjayB0byBmaXJlLFxuICAgICAgICAvLyBzbyB0aGF0IHRoZSBhc3luYyBnZW5lcmF0b3IgZnVuY3Rpb24gaGFzIHRoZSBvcHBvcnR1bml0eSB0byBkb1xuICAgICAgICAvLyBhbnkgbmVjZXNzYXJ5IHNldHVwIGluIGEgcHJlZGljdGFibGUgd2F5LiBUaGlzIHByZWRpY3RhYmlsaXR5XG4gICAgICAgIC8vIGlzIHdoeSB0aGUgUHJvbWlzZSBjb25zdHJ1Y3RvciBzeW5jaHJvbm91c2x5IGludm9rZXMgaXRzXG4gICAgICAgIC8vIGV4ZWN1dG9yIGNhbGxiYWNrLCBhbmQgd2h5IGFzeW5jIGZ1bmN0aW9ucyBzeW5jaHJvbm91c2x5XG4gICAgICAgIC8vIGV4ZWN1dGUgY29kZSBiZWZvcmUgdGhlIGZpcnN0IGF3YWl0LiBTaW5jZSB3ZSBpbXBsZW1lbnQgc2ltcGxlXG4gICAgICAgIC8vIGFzeW5jIGZ1bmN0aW9ucyBpbiB0ZXJtcyBvZiBhc3luYyBnZW5lcmF0b3JzLCBpdCBpcyBlc3BlY2lhbGx5XG4gICAgICAgIC8vIGltcG9ydGFudCB0byBnZXQgdGhpcyByaWdodCwgZXZlbiB0aG91Z2ggaXQgcmVxdWlyZXMgY2FyZS5cbiAgICAgICAgcHJldmlvdXNQcm9taXNlID8gcHJldmlvdXNQcm9taXNlLnRoZW4oXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmcsXG4gICAgICAgICAgLy8gQXZvaWQgcHJvcGFnYXRpbmcgZmFpbHVyZXMgdG8gUHJvbWlzZXMgcmV0dXJuZWQgYnkgbGF0ZXJcbiAgICAgICAgICAvLyBpbnZvY2F0aW9ucyBvZiB0aGUgaXRlcmF0b3IuXG4gICAgICAgICAgY2FsbEludm9rZVdpdGhNZXRob2RBbmRBcmdcbiAgICAgICAgKSA6IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlKSB7XG4gICAgICAgICAgcmVzb2x2ZShjYWxsSW52b2tlV2l0aE1ldGhvZEFuZEFyZygpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgLy8gRGVmaW5lIHRoZSB1bmlmaWVkIGhlbHBlciBtZXRob2QgdGhhdCBpcyB1c2VkIHRvIGltcGxlbWVudCAubmV4dCxcbiAgICAvLyAudGhyb3csIGFuZCAucmV0dXJuIChzZWUgZGVmaW5lSXRlcmF0b3JNZXRob2RzKS5cbiAgICB0aGlzLl9pbnZva2UgPSBlbnF1ZXVlO1xuICB9XG5cbiAgZGVmaW5lSXRlcmF0b3JNZXRob2RzKEFzeW5jSXRlcmF0b3IucHJvdG90eXBlKTtcblxuICAvLyBOb3RlIHRoYXQgc2ltcGxlIGFzeW5jIGZ1bmN0aW9ucyBhcmUgaW1wbGVtZW50ZWQgb24gdG9wIG9mXG4gIC8vIEFzeW5jSXRlcmF0b3Igb2JqZWN0czsgdGhleSBqdXN0IHJldHVybiBhIFByb21pc2UgZm9yIHRoZSB2YWx1ZSBvZlxuICAvLyB0aGUgZmluYWwgcmVzdWx0IHByb2R1Y2VkIGJ5IHRoZSBpdGVyYXRvci5cbiAgcnVudGltZS5hc3luYyA9IGZ1bmN0aW9uKGlubmVyRm4sIG91dGVyRm4sIHNlbGYsIHRyeUxvY3NMaXN0KSB7XG4gICAgdmFyIGl0ZXIgPSBuZXcgQXN5bmNJdGVyYXRvcihcbiAgICAgIHdyYXAoaW5uZXJGbiwgb3V0ZXJGbiwgc2VsZiwgdHJ5TG9jc0xpc3QpXG4gICAgKTtcblxuICAgIHJldHVybiBydW50aW1lLmlzR2VuZXJhdG9yRnVuY3Rpb24ob3V0ZXJGbilcbiAgICAgID8gaXRlciAvLyBJZiBvdXRlckZuIGlzIGEgZ2VuZXJhdG9yLCByZXR1cm4gdGhlIGZ1bGwgaXRlcmF0b3IuXG4gICAgICA6IGl0ZXIubmV4dCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgcmV0dXJuIHJlc3VsdC5kb25lID8gcmVzdWx0LnZhbHVlIDogaXRlci5uZXh0KCk7XG4gICAgICAgIH0pO1xuICB9O1xuXG4gIGZ1bmN0aW9uIG1ha2VJbnZva2VNZXRob2QoaW5uZXJGbiwgc2VsZiwgY29udGV4dCkge1xuICAgIHZhciBzdGF0ZSA9IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQ7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gaW52b2tlKG1ldGhvZCwgYXJnKSB7XG4gICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlRXhlY3V0aW5nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IHJ1bm5pbmdcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChzdGF0ZSA9PT0gR2VuU3RhdGVDb21wbGV0ZWQpIHtcbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJ0aHJvd1wiKSB7XG4gICAgICAgICAgdGhyb3cgYXJnO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQmUgZm9yZ2l2aW5nLCBwZXIgMjUuMy4zLjMuMyBvZiB0aGUgc3BlYzpcbiAgICAgICAgLy8gaHR0cHM6Ly9wZW9wbGUubW96aWxsYS5vcmcvfmpvcmVuZG9yZmYvZXM2LWRyYWZ0Lmh0bWwjc2VjLWdlbmVyYXRvcnJlc3VtZVxuICAgICAgICByZXR1cm4gZG9uZVJlc3VsdCgpO1xuICAgICAgfVxuXG4gICAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgICB2YXIgZGVsZWdhdGUgPSBjb250ZXh0LmRlbGVnYXRlO1xuICAgICAgICBpZiAoZGVsZWdhdGUpIHtcbiAgICAgICAgICBpZiAobWV0aG9kID09PSBcInJldHVyblwiIHx8XG4gICAgICAgICAgICAgIChtZXRob2QgPT09IFwidGhyb3dcIiAmJiBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2RdID09PSB1bmRlZmluZWQpKSB7XG4gICAgICAgICAgICAvLyBBIHJldHVybiBvciB0aHJvdyAod2hlbiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIG5vIHRocm93XG4gICAgICAgICAgICAvLyBtZXRob2QpIGFsd2F5cyB0ZXJtaW5hdGVzIHRoZSB5aWVsZCogbG9vcC5cbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBJZiB0aGUgZGVsZWdhdGUgaXRlcmF0b3IgaGFzIGEgcmV0dXJuIG1ldGhvZCwgZ2l2ZSBpdCBhXG4gICAgICAgICAgICAvLyBjaGFuY2UgdG8gY2xlYW4gdXAuXG4gICAgICAgICAgICB2YXIgcmV0dXJuTWV0aG9kID0gZGVsZWdhdGUuaXRlcmF0b3JbXCJyZXR1cm5cIl07XG4gICAgICAgICAgICBpZiAocmV0dXJuTWV0aG9kKSB7XG4gICAgICAgICAgICAgIHZhciByZWNvcmQgPSB0cnlDYXRjaChyZXR1cm5NZXRob2QsIGRlbGVnYXRlLml0ZXJhdG9yLCBhcmcpO1xuICAgICAgICAgICAgICBpZiAocmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICAgICAgICAgIC8vIElmIHRoZSByZXR1cm4gbWV0aG9kIHRocmV3IGFuIGV4Y2VwdGlvbiwgbGV0IHRoYXRcbiAgICAgICAgICAgICAgICAvLyBleGNlcHRpb24gcHJldmFpbCBvdmVyIHRoZSBvcmlnaW5hbCByZXR1cm4gb3IgdGhyb3cuXG4gICAgICAgICAgICAgICAgbWV0aG9kID0gXCJ0aHJvd1wiO1xuICAgICAgICAgICAgICAgIGFyZyA9IHJlY29yZC5hcmc7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJyZXR1cm5cIikge1xuICAgICAgICAgICAgICAvLyBDb250aW51ZSB3aXRoIHRoZSBvdXRlciByZXR1cm4sIG5vdyB0aGF0IHRoZSBkZWxlZ2F0ZVxuICAgICAgICAgICAgICAvLyBpdGVyYXRvciBoYXMgYmVlbiB0ZXJtaW5hdGVkLlxuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goXG4gICAgICAgICAgICBkZWxlZ2F0ZS5pdGVyYXRvclttZXRob2RdLFxuICAgICAgICAgICAgZGVsZWdhdGUuaXRlcmF0b3IsXG4gICAgICAgICAgICBhcmdcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuXG4gICAgICAgICAgICAvLyBMaWtlIHJldHVybmluZyBnZW5lcmF0b3IudGhyb3codW5jYXVnaHQpLCBidXQgd2l0aG91dCB0aGVcbiAgICAgICAgICAgIC8vIG92ZXJoZWFkIG9mIGFuIGV4dHJhIGZ1bmN0aW9uIGNhbGwuXG4gICAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgICBhcmcgPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLy8gRGVsZWdhdGUgZ2VuZXJhdG9yIHJhbiBhbmQgaGFuZGxlZCBpdHMgb3duIGV4Y2VwdGlvbnMgc29cbiAgICAgICAgICAvLyByZWdhcmRsZXNzIG9mIHdoYXQgdGhlIG1ldGhvZCB3YXMsIHdlIGNvbnRpbnVlIGFzIGlmIGl0IGlzXG4gICAgICAgICAgLy8gXCJuZXh0XCIgd2l0aCBhbiB1bmRlZmluZWQgYXJnLlxuICAgICAgICAgIG1ldGhvZCA9IFwibmV4dFwiO1xuICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcblxuICAgICAgICAgIHZhciBpbmZvID0gcmVjb3JkLmFyZztcbiAgICAgICAgICBpZiAoaW5mby5kb25lKSB7XG4gICAgICAgICAgICBjb250ZXh0W2RlbGVnYXRlLnJlc3VsdE5hbWVdID0gaW5mby52YWx1ZTtcbiAgICAgICAgICAgIGNvbnRleHQubmV4dCA9IGRlbGVnYXRlLm5leHRMb2M7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnRleHQuZGVsZWdhdGUgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICBjb250ZXh0Ll9zZW50ID0gYXJnO1xuXG4gICAgICAgICAgaWYgKHN0YXRlID09PSBHZW5TdGF0ZVN1c3BlbmRlZFlpZWxkKSB7XG4gICAgICAgICAgICBjb250ZXh0LnNlbnQgPSBhcmc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnRleHQuc2VudCA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAobWV0aG9kID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBpZiAoc3RhdGUgPT09IEdlblN0YXRlU3VzcGVuZGVkU3RhcnQpIHtcbiAgICAgICAgICAgIHN0YXRlID0gR2VuU3RhdGVDb21wbGV0ZWQ7XG4gICAgICAgICAgICB0aHJvdyBhcmc7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKGNvbnRleHQuZGlzcGF0Y2hFeGNlcHRpb24oYXJnKSkge1xuICAgICAgICAgICAgLy8gSWYgdGhlIGRpc3BhdGNoZWQgZXhjZXB0aW9uIHdhcyBjYXVnaHQgYnkgYSBjYXRjaCBibG9jayxcbiAgICAgICAgICAgIC8vIHRoZW4gbGV0IHRoYXQgY2F0Y2ggYmxvY2sgaGFuZGxlIHRoZSBleGNlcHRpb24gbm9ybWFsbHkuXG4gICAgICAgICAgICBtZXRob2QgPSBcIm5leHRcIjtcbiAgICAgICAgICAgIGFyZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgfSBlbHNlIGlmIChtZXRob2QgPT09IFwicmV0dXJuXCIpIHtcbiAgICAgICAgICBjb250ZXh0LmFicnVwdChcInJldHVyblwiLCBhcmcpO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUgPSBHZW5TdGF0ZUV4ZWN1dGluZztcblxuICAgICAgICB2YXIgcmVjb3JkID0gdHJ5Q2F0Y2goaW5uZXJGbiwgc2VsZiwgY29udGV4dCk7XG4gICAgICAgIGlmIChyZWNvcmQudHlwZSA9PT0gXCJub3JtYWxcIikge1xuICAgICAgICAgIC8vIElmIGFuIGV4Y2VwdGlvbiBpcyB0aHJvd24gZnJvbSBpbm5lckZuLCB3ZSBsZWF2ZSBzdGF0ZSA9PT1cbiAgICAgICAgICAvLyBHZW5TdGF0ZUV4ZWN1dGluZyBhbmQgbG9vcCBiYWNrIGZvciBhbm90aGVyIGludm9jYXRpb24uXG4gICAgICAgICAgc3RhdGUgPSBjb250ZXh0LmRvbmVcbiAgICAgICAgICAgID8gR2VuU3RhdGVDb21wbGV0ZWRcbiAgICAgICAgICAgIDogR2VuU3RhdGVTdXNwZW5kZWRZaWVsZDtcblxuICAgICAgICAgIHZhciBpbmZvID0ge1xuICAgICAgICAgICAgdmFsdWU6IHJlY29yZC5hcmcsXG4gICAgICAgICAgICBkb25lOiBjb250ZXh0LmRvbmVcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgaWYgKHJlY29yZC5hcmcgPT09IENvbnRpbnVlU2VudGluZWwpIHtcbiAgICAgICAgICAgIGlmIChjb250ZXh0LmRlbGVnYXRlICYmIG1ldGhvZCA9PT0gXCJuZXh0XCIpIHtcbiAgICAgICAgICAgICAgLy8gRGVsaWJlcmF0ZWx5IGZvcmdldCB0aGUgbGFzdCBzZW50IHZhbHVlIHNvIHRoYXQgd2UgZG9uJ3RcbiAgICAgICAgICAgICAgLy8gYWNjaWRlbnRhbGx5IHBhc3MgaXQgb24gdG8gdGhlIGRlbGVnYXRlLlxuICAgICAgICAgICAgICBhcmcgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBpbmZvO1xuICAgICAgICAgIH1cblxuICAgICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICBzdGF0ZSA9IEdlblN0YXRlQ29tcGxldGVkO1xuICAgICAgICAgIC8vIERpc3BhdGNoIHRoZSBleGNlcHRpb24gYnkgbG9vcGluZyBiYWNrIGFyb3VuZCB0byB0aGVcbiAgICAgICAgICAvLyBjb250ZXh0LmRpc3BhdGNoRXhjZXB0aW9uKGFyZykgY2FsbCBhYm92ZS5cbiAgICAgICAgICBtZXRob2QgPSBcInRocm93XCI7XG4gICAgICAgICAgYXJnID0gcmVjb3JkLmFyZztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvLyBEZWZpbmUgR2VuZXJhdG9yLnByb3RvdHlwZS57bmV4dCx0aHJvdyxyZXR1cm59IGluIHRlcm1zIG9mIHRoZVxuICAvLyB1bmlmaWVkIC5faW52b2tlIGhlbHBlciBtZXRob2QuXG4gIGRlZmluZUl0ZXJhdG9yTWV0aG9kcyhHcCk7XG5cbiAgR3BbaXRlcmF0b3JTeW1ib2xdID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgR3AudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gXCJbb2JqZWN0IEdlbmVyYXRvcl1cIjtcbiAgfTtcblxuICBmdW5jdGlvbiBwdXNoVHJ5RW50cnkobG9jcykge1xuICAgIHZhciBlbnRyeSA9IHsgdHJ5TG9jOiBsb2NzWzBdIH07XG5cbiAgICBpZiAoMSBpbiBsb2NzKSB7XG4gICAgICBlbnRyeS5jYXRjaExvYyA9IGxvY3NbMV07XG4gICAgfVxuXG4gICAgaWYgKDIgaW4gbG9jcykge1xuICAgICAgZW50cnkuZmluYWxseUxvYyA9IGxvY3NbMl07XG4gICAgICBlbnRyeS5hZnRlckxvYyA9IGxvY3NbM107XG4gICAgfVxuXG4gICAgdGhpcy50cnlFbnRyaWVzLnB1c2goZW50cnkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVzZXRUcnlFbnRyeShlbnRyeSkge1xuICAgIHZhciByZWNvcmQgPSBlbnRyeS5jb21wbGV0aW9uIHx8IHt9O1xuICAgIHJlY29yZC50eXBlID0gXCJub3JtYWxcIjtcbiAgICBkZWxldGUgcmVjb3JkLmFyZztcbiAgICBlbnRyeS5jb21wbGV0aW9uID0gcmVjb3JkO1xuICB9XG5cbiAgZnVuY3Rpb24gQ29udGV4dCh0cnlMb2NzTGlzdCkge1xuICAgIC8vIFRoZSByb290IGVudHJ5IG9iamVjdCAoZWZmZWN0aXZlbHkgYSB0cnkgc3RhdGVtZW50IHdpdGhvdXQgYSBjYXRjaFxuICAgIC8vIG9yIGEgZmluYWxseSBibG9jaykgZ2l2ZXMgdXMgYSBwbGFjZSB0byBzdG9yZSB2YWx1ZXMgdGhyb3duIGZyb21cbiAgICAvLyBsb2NhdGlvbnMgd2hlcmUgdGhlcmUgaXMgbm8gZW5jbG9zaW5nIHRyeSBzdGF0ZW1lbnQuXG4gICAgdGhpcy50cnlFbnRyaWVzID0gW3sgdHJ5TG9jOiBcInJvb3RcIiB9XTtcbiAgICB0cnlMb2NzTGlzdC5mb3JFYWNoKHB1c2hUcnlFbnRyeSwgdGhpcyk7XG4gICAgdGhpcy5yZXNldCh0cnVlKTtcbiAgfVxuXG4gIHJ1bnRpbWUua2V5cyA9IGZ1bmN0aW9uKG9iamVjdCkge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgZm9yICh2YXIga2V5IGluIG9iamVjdCkge1xuICAgICAga2V5cy5wdXNoKGtleSk7XG4gICAgfVxuICAgIGtleXMucmV2ZXJzZSgpO1xuXG4gICAgLy8gUmF0aGVyIHRoYW4gcmV0dXJuaW5nIGFuIG9iamVjdCB3aXRoIGEgbmV4dCBtZXRob2QsIHdlIGtlZXBcbiAgICAvLyB0aGluZ3Mgc2ltcGxlIGFuZCByZXR1cm4gdGhlIG5leHQgZnVuY3Rpb24gaXRzZWxmLlxuICAgIHJldHVybiBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgd2hpbGUgKGtleXMubGVuZ3RoKSB7XG4gICAgICAgIHZhciBrZXkgPSBrZXlzLnBvcCgpO1xuICAgICAgICBpZiAoa2V5IGluIG9iamVjdCkge1xuICAgICAgICAgIG5leHQudmFsdWUgPSBrZXk7XG4gICAgICAgICAgbmV4dC5kb25lID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVG8gYXZvaWQgY3JlYXRpbmcgYW4gYWRkaXRpb25hbCBvYmplY3QsIHdlIGp1c3QgaGFuZyB0aGUgLnZhbHVlXG4gICAgICAvLyBhbmQgLmRvbmUgcHJvcGVydGllcyBvZmYgdGhlIG5leHQgZnVuY3Rpb24gb2JqZWN0IGl0c2VsZi4gVGhpc1xuICAgICAgLy8gYWxzbyBlbnN1cmVzIHRoYXQgdGhlIG1pbmlmaWVyIHdpbGwgbm90IGFub255bWl6ZSB0aGUgZnVuY3Rpb24uXG4gICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuICAgICAgcmV0dXJuIG5leHQ7XG4gICAgfTtcbiAgfTtcblxuICBmdW5jdGlvbiB2YWx1ZXMoaXRlcmFibGUpIHtcbiAgICBpZiAoaXRlcmFibGUpIHtcbiAgICAgIHZhciBpdGVyYXRvck1ldGhvZCA9IGl0ZXJhYmxlW2l0ZXJhdG9yU3ltYm9sXTtcbiAgICAgIGlmIChpdGVyYXRvck1ldGhvZCkge1xuICAgICAgICByZXR1cm4gaXRlcmF0b3JNZXRob2QuY2FsbChpdGVyYWJsZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgaXRlcmFibGUubmV4dCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiBpdGVyYWJsZTtcbiAgICAgIH1cblxuICAgICAgaWYgKCFpc05hTihpdGVyYWJsZS5sZW5ndGgpKSB7XG4gICAgICAgIHZhciBpID0gLTEsIG5leHQgPSBmdW5jdGlvbiBuZXh0KCkge1xuICAgICAgICAgIHdoaWxlICgrK2kgPCBpdGVyYWJsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGlmIChoYXNPd24uY2FsbChpdGVyYWJsZSwgaSkpIHtcbiAgICAgICAgICAgICAgbmV4dC52YWx1ZSA9IGl0ZXJhYmxlW2ldO1xuICAgICAgICAgICAgICBuZXh0LmRvbmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgbmV4dC52YWx1ZSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICBuZXh0LmRvbmUgPSB0cnVlO1xuXG4gICAgICAgICAgcmV0dXJuIG5leHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIG5leHQubmV4dCA9IG5leHQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gUmV0dXJuIGFuIGl0ZXJhdG9yIHdpdGggbm8gdmFsdWVzLlxuICAgIHJldHVybiB7IG5leHQ6IGRvbmVSZXN1bHQgfTtcbiAgfVxuICBydW50aW1lLnZhbHVlcyA9IHZhbHVlcztcblxuICBmdW5jdGlvbiBkb25lUmVzdWx0KCkge1xuICAgIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgfVxuXG4gIENvbnRleHQucHJvdG90eXBlID0ge1xuICAgIGNvbnN0cnVjdG9yOiBDb250ZXh0LFxuXG4gICAgcmVzZXQ6IGZ1bmN0aW9uKHNraXBUZW1wUmVzZXQpIHtcbiAgICAgIHRoaXMucHJldiA9IDA7XG4gICAgICB0aGlzLm5leHQgPSAwO1xuICAgICAgdGhpcy5zZW50ID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5kb25lID0gZmFsc2U7XG4gICAgICB0aGlzLmRlbGVnYXRlID0gbnVsbDtcblxuICAgICAgdGhpcy50cnlFbnRyaWVzLmZvckVhY2gocmVzZXRUcnlFbnRyeSk7XG5cbiAgICAgIGlmICghc2tpcFRlbXBSZXNldCkge1xuICAgICAgICBmb3IgKHZhciBuYW1lIGluIHRoaXMpIHtcbiAgICAgICAgICAvLyBOb3Qgc3VyZSBhYm91dCB0aGUgb3B0aW1hbCBvcmRlciBvZiB0aGVzZSBjb25kaXRpb25zOlxuICAgICAgICAgIGlmIChuYW1lLmNoYXJBdCgwKSA9PT0gXCJ0XCIgJiZcbiAgICAgICAgICAgICAgaGFzT3duLmNhbGwodGhpcywgbmFtZSkgJiZcbiAgICAgICAgICAgICAgIWlzTmFOKCtuYW1lLnNsaWNlKDEpKSkge1xuICAgICAgICAgICAgdGhpc1tuYW1lXSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9LFxuXG4gICAgc3RvcDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLmRvbmUgPSB0cnVlO1xuXG4gICAgICB2YXIgcm9vdEVudHJ5ID0gdGhpcy50cnlFbnRyaWVzWzBdO1xuICAgICAgdmFyIHJvb3RSZWNvcmQgPSByb290RW50cnkuY29tcGxldGlvbjtcbiAgICAgIGlmIChyb290UmVjb3JkLnR5cGUgPT09IFwidGhyb3dcIikge1xuICAgICAgICB0aHJvdyByb290UmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMucnZhbDtcbiAgICB9LFxuXG4gICAgZGlzcGF0Y2hFeGNlcHRpb246IGZ1bmN0aW9uKGV4Y2VwdGlvbikge1xuICAgICAgaWYgKHRoaXMuZG9uZSkge1xuICAgICAgICB0aHJvdyBleGNlcHRpb247XG4gICAgICB9XG5cbiAgICAgIHZhciBjb250ZXh0ID0gdGhpcztcbiAgICAgIGZ1bmN0aW9uIGhhbmRsZShsb2MsIGNhdWdodCkge1xuICAgICAgICByZWNvcmQudHlwZSA9IFwidGhyb3dcIjtcbiAgICAgICAgcmVjb3JkLmFyZyA9IGV4Y2VwdGlvbjtcbiAgICAgICAgY29udGV4dC5uZXh0ID0gbG9jO1xuICAgICAgICByZXR1cm4gISFjYXVnaHQ7XG4gICAgICB9XG5cbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICB2YXIgcmVjb3JkID0gZW50cnkuY29tcGxldGlvbjtcblxuICAgICAgICBpZiAoZW50cnkudHJ5TG9jID09PSBcInJvb3RcIikge1xuICAgICAgICAgIC8vIEV4Y2VwdGlvbiB0aHJvd24gb3V0c2lkZSBvZiBhbnkgdHJ5IGJsb2NrIHRoYXQgY291bGQgaGFuZGxlXG4gICAgICAgICAgLy8gaXQsIHNvIHNldCB0aGUgY29tcGxldGlvbiB2YWx1ZSBvZiB0aGUgZW50aXJlIGZ1bmN0aW9uIHRvXG4gICAgICAgICAgLy8gdGhyb3cgdGhlIGV4Y2VwdGlvbi5cbiAgICAgICAgICByZXR1cm4gaGFuZGxlKFwiZW5kXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYpIHtcbiAgICAgICAgICB2YXIgaGFzQ2F0Y2ggPSBoYXNPd24uY2FsbChlbnRyeSwgXCJjYXRjaExvY1wiKTtcbiAgICAgICAgICB2YXIgaGFzRmluYWxseSA9IGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIik7XG5cbiAgICAgICAgICBpZiAoaGFzQ2F0Y2ggJiYgaGFzRmluYWxseSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJldiA8IGVudHJ5LmNhdGNoTG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuY2F0Y2hMb2MsIHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0NhdGNoKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wcmV2IDwgZW50cnkuY2F0Y2hMb2MpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGhhbmRsZShlbnRyeS5jYXRjaExvYywgdHJ1ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2UgaWYgKGhhc0ZpbmFsbHkpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByZXYgPCBlbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgICAgICAgIHJldHVybiBoYW5kbGUoZW50cnkuZmluYWxseUxvYyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwidHJ5IHN0YXRlbWVudCB3aXRob3V0IGNhdGNoIG9yIGZpbmFsbHlcIik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIGFicnVwdDogZnVuY3Rpb24odHlwZSwgYXJnKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA8PSB0aGlzLnByZXYgJiZcbiAgICAgICAgICAgIGhhc093bi5jYWxsKGVudHJ5LCBcImZpbmFsbHlMb2NcIikgJiZcbiAgICAgICAgICAgIHRoaXMucHJldiA8IGVudHJ5LmZpbmFsbHlMb2MpIHtcbiAgICAgICAgICB2YXIgZmluYWxseUVudHJ5ID0gZW50cnk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKGZpbmFsbHlFbnRyeSAmJlxuICAgICAgICAgICh0eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICAgdHlwZSA9PT0gXCJjb250aW51ZVwiKSAmJlxuICAgICAgICAgIGZpbmFsbHlFbnRyeS50cnlMb2MgPD0gYXJnICYmXG4gICAgICAgICAgYXJnIDw9IGZpbmFsbHlFbnRyeS5maW5hbGx5TG9jKSB7XG4gICAgICAgIC8vIElnbm9yZSB0aGUgZmluYWxseSBlbnRyeSBpZiBjb250cm9sIGlzIG5vdCBqdW1waW5nIHRvIGFcbiAgICAgICAgLy8gbG9jYXRpb24gb3V0c2lkZSB0aGUgdHJ5L2NhdGNoIGJsb2NrLlxuICAgICAgICBmaW5hbGx5RW50cnkgPSBudWxsO1xuICAgICAgfVxuXG4gICAgICB2YXIgcmVjb3JkID0gZmluYWxseUVudHJ5ID8gZmluYWxseUVudHJ5LmNvbXBsZXRpb24gOiB7fTtcbiAgICAgIHJlY29yZC50eXBlID0gdHlwZTtcbiAgICAgIHJlY29yZC5hcmcgPSBhcmc7XG5cbiAgICAgIGlmIChmaW5hbGx5RW50cnkpIHtcbiAgICAgICAgdGhpcy5uZXh0ID0gZmluYWxseUVudHJ5LmZpbmFsbHlMb2M7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKHJlY29yZCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgIH0sXG5cbiAgICBjb21wbGV0ZTogZnVuY3Rpb24ocmVjb3JkLCBhZnRlckxvYykge1xuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgdGhyb3cgcmVjb3JkLmFyZztcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcImJyZWFrXCIgfHxcbiAgICAgICAgICByZWNvcmQudHlwZSA9PT0gXCJjb250aW51ZVwiKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IHJlY29yZC5hcmc7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcInJldHVyblwiKSB7XG4gICAgICAgIHRoaXMucnZhbCA9IHJlY29yZC5hcmc7XG4gICAgICAgIHRoaXMubmV4dCA9IFwiZW5kXCI7XG4gICAgICB9IGVsc2UgaWYgKHJlY29yZC50eXBlID09PSBcIm5vcm1hbFwiICYmIGFmdGVyTG9jKSB7XG4gICAgICAgIHRoaXMubmV4dCA9IGFmdGVyTG9jO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBmaW5pc2g6IGZ1bmN0aW9uKGZpbmFsbHlMb2MpIHtcbiAgICAgIGZvciAodmFyIGkgPSB0aGlzLnRyeUVudHJpZXMubGVuZ3RoIC0gMTsgaSA+PSAwOyAtLWkpIHtcbiAgICAgICAgdmFyIGVudHJ5ID0gdGhpcy50cnlFbnRyaWVzW2ldO1xuICAgICAgICBpZiAoZW50cnkuZmluYWxseUxvYyA9PT0gZmluYWxseUxvYykge1xuICAgICAgICAgIHRoaXMuY29tcGxldGUoZW50cnkuY29tcGxldGlvbiwgZW50cnkuYWZ0ZXJMb2MpO1xuICAgICAgICAgIHJlc2V0VHJ5RW50cnkoZW50cnkpO1xuICAgICAgICAgIHJldHVybiBDb250aW51ZVNlbnRpbmVsO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcblxuICAgIFwiY2F0Y2hcIjogZnVuY3Rpb24odHJ5TG9jKSB7XG4gICAgICBmb3IgKHZhciBpID0gdGhpcy50cnlFbnRyaWVzLmxlbmd0aCAtIDE7IGkgPj0gMDsgLS1pKSB7XG4gICAgICAgIHZhciBlbnRyeSA9IHRoaXMudHJ5RW50cmllc1tpXTtcbiAgICAgICAgaWYgKGVudHJ5LnRyeUxvYyA9PT0gdHJ5TG9jKSB7XG4gICAgICAgICAgdmFyIHJlY29yZCA9IGVudHJ5LmNvbXBsZXRpb247XG4gICAgICAgICAgaWYgKHJlY29yZC50eXBlID09PSBcInRocm93XCIpIHtcbiAgICAgICAgICAgIHZhciB0aHJvd24gPSByZWNvcmQuYXJnO1xuICAgICAgICAgICAgcmVzZXRUcnlFbnRyeShlbnRyeSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiB0aHJvd247XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLy8gVGhlIGNvbnRleHQuY2F0Y2ggbWV0aG9kIG11c3Qgb25seSBiZSBjYWxsZWQgd2l0aCBhIGxvY2F0aW9uXG4gICAgICAvLyBhcmd1bWVudCB0aGF0IGNvcnJlc3BvbmRzIHRvIGEga25vd24gY2F0Y2ggYmxvY2suXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbGxlZ2FsIGNhdGNoIGF0dGVtcHRcIik7XG4gICAgfSxcblxuICAgIGRlbGVnYXRlWWllbGQ6IGZ1bmN0aW9uKGl0ZXJhYmxlLCByZXN1bHROYW1lLCBuZXh0TG9jKSB7XG4gICAgICB0aGlzLmRlbGVnYXRlID0ge1xuICAgICAgICBpdGVyYXRvcjogdmFsdWVzKGl0ZXJhYmxlKSxcbiAgICAgICAgcmVzdWx0TmFtZTogcmVzdWx0TmFtZSxcbiAgICAgICAgbmV4dExvYzogbmV4dExvY1xuICAgICAgfTtcblxuICAgICAgcmV0dXJuIENvbnRpbnVlU2VudGluZWw7XG4gICAgfVxuICB9O1xufSkoXG4gIC8vIEFtb25nIHRoZSB2YXJpb3VzIHRyaWNrcyBmb3Igb2J0YWluaW5nIGEgcmVmZXJlbmNlIHRvIHRoZSBnbG9iYWxcbiAgLy8gb2JqZWN0LCB0aGlzIHNlZW1zIHRvIGJlIHRoZSBtb3N0IHJlbGlhYmxlIHRlY2huaXF1ZSB0aGF0IGRvZXMgbm90XG4gIC8vIHVzZSBpbmRpcmVjdCBldmFsICh3aGljaCB2aW9sYXRlcyBDb250ZW50IFNlY3VyaXR5IFBvbGljeSkuXG4gIHR5cGVvZiBnbG9iYWwgPT09IFwib2JqZWN0XCIgPyBnbG9iYWwgOlxuICB0eXBlb2Ygd2luZG93ID09PSBcIm9iamVjdFwiID8gd2luZG93IDpcbiAgdHlwZW9mIHNlbGYgPT09IFwib2JqZWN0XCIgPyBzZWxmIDogdGhpc1xuKTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2JhYmVsLXBvbHlmaWxsL34vYmFiZWwtcmVnZW5lcmF0b3ItcnVudGltZS9ydW50aW1lLmpzXG4gKiogbW9kdWxlIGlkID0gMTg5XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBjc3AgZnJvbSAnanMtY3NwJztcbmltcG9ydCBDb25maWd1cmUgZnJvbSAnQ29uZmlndXJlJ1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBMb2cgfSBmcm9tICdyb3V0ZXJzL0xvZy9SZWNvcmRpbmdTdGFnZSc7XG4vL2ltcG9ydCBSYXB0b3IgZnJvbSAncm91dGVycy9SYXB0b3InO1xuLy9pbXBvcnQgRXJyb3IgZnJvbSAncm91dGVycy9FcnJvcic7XG4vL2ltcG9ydCBTY3JlZW5SZWNvcmQgZnJvbSAncm91dGVycy9TY3JlZW5SZWNvcmQnO1xuaW1wb3J0IHsgZGVmYXVsdCBhcyBEZXZpY2VMb2cgfSBmcm9tICdyb3V0ZXJzL0RldmljZUxvZy9SZWNvcmRpbmdTdGFnZSc7XG5pbXBvcnQgeyBkZWZhdWx0IGFzIFNpZ25hbCB9IGZyb20gJ3JvdXRlcnMvU2lnbmFsL1JlY29yZGluZ1N0YWdlJztcblxuLyoqXG4gKiBUaGlzIGxhdW5jaGVyICYgY29udHJvbGxlciBtb2R1bGUgd2lsbCBzZW5kIGluaXRpYWxpemVkXG4gKiBtZXNzYWdlIHRvIGFsbCBvdGhlciBtb2R1bGVzLCBhbmQgdGhlbiBmb3J3YXJkIHN0YWdlIGNoYW5nZXNcbiAqIGZyb20gdGhlIG1haW4gbW9kdWxlLiBJdHNlbGYgZG9lc24ndCBiZWxvbmcgdG8gdGhlIGNvbW1hbmQtbW9kdWxlXG4gKiBzeXN0ZW0sIGJ1dCBjYW4gZGVhbCB3aXRoIHRoZSBwcm90b2NvbC5cbiAqKi9cbmNsYXNzIEJlaG9sZGVyIHtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9vdXRwdXRDaGFubmVsID0gY3NwLmNoYW4oKTtcbiAgICB0aGlzLl9tYWluUm91dGVyQ2hhbm5lbCA9IGNzcC5jaGFuKCk7XG4gICAgdGhpcy5fc2lnbmFsQ2hhbm5lbCA9IGNzcC5jaGFuKCk7XG5cbiAgICB0aGlzLl9wdWJsaWNhdGlvbiA9IGNzcC5vcGVyYXRpb25zLnB1YihcbiAgICAgIHRoaXMuX291dHB1dENoYW5uZWwsIChlKSA9PiBlLnRvcGljKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIGxldCBjb25maWd1cmUgPSBuZXcgQ29uZmlndXJlKCk7XG4gICAgdGhpcy5jb25maWdzID0gY29uZmlndXJlLnNldHVwKCk7XG4gICAgdGhpcy5fcm91dGVycyA9IHtcbiAgICAgIGRldmljZWxvZzogbmV3IERldmljZUxvZyh0aGlzLmNvbmZpZ3MpLFxuICAgICAgbG9nOiBuZXcgTG9nKHRoaXMuY29uZmlncyksXG4gICAgICBzaWduYWw6IG5ldyBTaWduYWwodGhpcy5jb25maWdzKVxuICAgIH07XG4gICAgdGhpcy5faW5pdGlhbGl6ZVJvdXRlcnMoKTtcbiAgfVxuXG4gIF9pbml0aWFsaXplUm91dGVycygpIHtcbiAgICBsZXQgbWFpblJvdXRlcjtcbiAgICBsZXQgaW5pdGlhbGl6ZWQgPSB7fTtcbiAgICBsZXQgbWFpblJvdXRlcklkZW50aXR5ID0gdGhpcy5jb25maWdzLnJvdXRlcnMuX19tYWluX187XG5cbiAgICB0aGlzLl90cmFuc2ZlcnJlZFByb21pc2VzID0gW107XG5cbiAgICBmb3IgKGxldCByb3V0ZXJJZGVuZGl0eSBvZiB0aGlzLmNvbmZpZ3Mucm91dGVycykge1xuICAgICAgbGV0IHJvdXRlciA9IHRoaXMuX3JvdXRlcnNbcm91dGVySWRlbmRpdHldO1xuICAgICAgaWYgKCFyb3V0ZXIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihgISEhISEhQ2Fubm90IGZpbmQgcm91dGVyICR7cm91dGVySWRlbmRpdHl9IGZyb20gJHt0aGlzLmNvbmZpZ3Mucm91dGVyc31gKTtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCByb3V0ZXIgJHtyb3V0ZXJJZGVuZGl0eX0gZnJvbSAke3RoaXMuY29uZmlncy5yb3V0ZXJzfWApO1xuICAgICAgfVxuICAgICAgcm91dGVyLmNvbm5lY3RUb0NvbnRyb2xsZXIodGhpcy5fcHVibGljYXRpb24pO1xuICAgICAgaW5pdGlhbGl6ZWRbcm91dGVySWRlbmRpdHldID0gcm91dGVyO1xuICAgICAgdGhpcy5fdHJhbnNmZXJyZWRQcm9taXNlcy5wdXNoKHJvdXRlci5zdGFydCgpKTtcbiAgICAgIGlmIChtYWluUm91dGVySWRlbnRpdHkgPT09IHJvdXRlcklkZW5kaXR5KSB7XG4gICAgICAgIG1haW5Sb3V0ZXIgPSByb3V0ZXI7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFtYWluUm91dGVyKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZvdW5kIG5vIG1haW4gbW9kdWxlOiAke21haW5Sb3V0ZXJJZGVudGl0eX1gKTtcbiAgICB9XG4gICAgdGhpcy5fcm91dGVyc0luaXRpYWxpemVkID0gaW5pdGlhbGl6ZWQ7XG5cbiAgICAvLyBTbyB0aGF0IG1vZHVsZXMgY291bGQgY29ubmVjdCB0byBlYWNoIG90aGVyIGJ5IHRoZW1zZWx2ZXMuXG4gICAgLy8gVE9ETzo6Ojo6IHByb2JsZW1hdGljIGxpbmVcbiAgICBjc3AucHV0QXN5bmModGhpcy5fb3V0cHV0Q2hhbm5lbCwgeyd0b3BpYyc6ICdzdGF0dXMnLFxuICAgICAgJ3BheWxvYWQnOiB7J3R5cGUnOiAnaW5pdGlhbGl6ZWQnLCAnZGV0YWlsJzogaW5pdGlhbGl6ZWR9IH0pO1xuXG4gICAgLy8gQ29udHJvbGxlciBuZWVkcyB0byBsaXN0ZW4gdG8gc2lnbmFscy5cbiAgICB0aGlzLl9yb3V0ZXJzLnNpZ25hbC5zdWJzY3JpYmUodGhpczo6dGhpcy5fY29ubmVjdFRvU2lnbmFscyk7XG4gICAgLy9tYWluUm91dGVyLnN1YnNjcmliZSh0aGlzOjp0aGlzLl9jb25uZWN0VG9NYWluUm91dGVyKTtcbiAgfVxuXG4gIGFzeW5jIF90ZXJtaW5hdGUoKSB7XG4gICAgbGV0IHdhaXRBbGxUZXJtaW5hdGVkID0gUHJvbWlzZS5hbGwodGhpcy5fdHJhbnNmZXJyZWRQcm9taXNlcyk7XG4gICAgY29uc29sZS5sb2coJz4+Pj4gdGVybWluYXRpbmcgc2VudCcpO1xuICAgIGNzcC5wdXRBc3luYyh0aGlzLl9vdXRwdXRDaGFubmVsLCB7J3RvcGljJzogJ3N0YXR1cycsXG4gICAgICAncGF5bG9hZCc6IHsndHlwZSc6ICdzdGFnZWNoYW5nZScsICdkZXRhaWwnOiAndGVybWluYXRpbmcnfSB9KTtcbiAgICBhd2FpdCB3YWl0QWxsVGVybWluYXRlZDtcblxuICAgIGNvbnNvbGUubG9nKCc+Pj4+IGFmdGVyIHdhaXQgaXQnKTtcbiAgICAvLyBUT0RPOiBuZWVkIHRvIGRpc3Rpbmd1aXNoIHRoZSBkaWZmZXJlbmNlIGJldHdlZW4gYWJub3JtYWwgYW5kIG5vcm1hbCB0ZXJtaW5hdGluZyA/XG4gICAgcHJvY2Vzcy5leGl0KDApO1xuICB9XG5cbiAgX2Nvbm5lY3RUb01haW5Sb3V0ZXIocHVibGljYXRpb24sIHRyYW5zZmVycmVkRGVmZXJyZWQpIHtcbiAgICBjc3Aub3BlcmF0aW9ucy5wdWIuc3ViKHB1YmxpY2F0aW9uLCAnc3RhdHVzJywgdGhpcy5fbWFpblJvdXRlckNoYW5uZWwpO1xuICAgIHRoaXMuX21haW5Sb3V0ZXJUcmFuc2ZlcnJlZERlZmVycmVkID0gdHJhbnNmZXJyZWREZWZlcnJlZDtcbiAgICB0aGlzLl9jb25zdW1lU3RhZ2VDaGFuZ2VzKCk7XG4gIH1cblxuICBfY29ubmVjdFRvU2lnbmFscyhwdWJsaWNhdGlvbiwgdHJhbnNmZXJyZWREZWZlcnJlZCkge1xuICAgIGNzcC5vcGVyYXRpb25zLnB1Yi5zdWIocHVibGljYXRpb24sICdkYXRhJywgdGhpcy5fc2lnbmFsQ2hhbm5lbCk7XG4gICAgdGhpcy5fc2lnbmFsVHJhbnNmZXJyZWREZWZlcnJlZCA9IHRyYW5zZmVycmVkRGVmZXJyZWQ7XG4gICAgdGhpcy5fY29uc3VtZVNpZ25hbHMoKTtcbiAgfVxuXG5cdF9jb25zdW1lU2lnbmFscygpIHtcbiAgICBjc3AuZ28oKGZ1bmN0aW9uKigpIHtcbiAgICAgIGxldCB2YWx1ZSA9IHlpZWxkIHRoaXMuX3NpZ25hbENoYW5uZWw7XG4gICAgICB3aGlsZSAoY3NwLkNMT1NFRCAhPT0gdmFsdWUpIHtcbiAgICAgICAgY29uc29sZS5sb2coJz4+Pj4+IGNvbnN1bWUgc2lnbmFsOiAnLCB2YWx1ZSk7XG4gICAgICAgIGlmICgndGVybWluYXRpbmcnID09PSB2YWx1ZS5wYXlsb2FkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJz4+Pj4+IGdvdCBzaWduYWwgdGVybWluYXRpbmcnLCAnQ29udHJvbGxlcicpO1xuICAgICAgICAgIHRoaXMuX3Rlcm1pbmF0ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlID0geWllbGQgdGhpcy5fc2lnbmFsQ2hhbm5lbDtcbiAgICAgIH1cbiAgICB9KS5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWluIG1vZHVsZSBzaG91bGQgZmlyZSBzdGFnZSBjaGFuZ2UgbWVzc2FnZXMsIHNvIG90aGVyIG1vZHVsZXMgY291bGRcbiAgICogY2hhbmdlIHRoZWlyIHN0YWdlIGFzIHdlbGwuIEFuZCBzaW5jZSBtb2R1bGVzIGhhdmUgYWxsIHRoZSBsaXN0IG9mIGluaXRpYWxpemVkXG4gICAqIG9uZXMsIHRoZXkgY2FuIGhhbmRsZSB0aGUgcmUtc3Vic2NyaXB0aW9uIGlzc3VlcyBieSB0aGVtc2VsdmVzLlxuICAgKi9cbiAgX2NvbnN1bWVTdGFnZUNoYW5nZXMoKSB7XG4gICAgY3NwLmdvKChmdW5jdGlvbiooKSB7XG4gICAgICBsZXQgdmFsdWUgPSB5aWVsZCB0aGlzLl9tYWluUm91dGVyQ2hhbm5lbDtcbiAgICAgIHdoaWxlIChjc3AuQ0xPU0VEICE9PSB2YWx1ZSkge1xuICAgICAgICBjb25zb2xlLmxvZygnPj4+Pj4gY29uc3VtZSBtYWluJyk7XG4gICAgICAgIGlmICgnc3RhZ2VjaGFuZ2UnID09PSB2YWx1bGUucGF5bG9hZC50eXBlKSB7XG4gICAgICAgICAgdGhpcy5fZGlzcGF0Y2hTdGFnZSh2YWx1ZS5wYXlsb2FkKTtcbiAgICAgICAgfVxuICAgICAgICB2YWx1ZSA9IHlpZWxkIHRoaXMuX21haW5Sb3V0ZXJDaGFubmVsO1xuICAgICAgfVxuICAgIH0pLmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlLWRpc3BhdGNoIGFnYWluLiBTaW5jZSB0aGlzIGlzIGEgRmFjYWRlLlxuICAgKi9cbiAgX2Rpc3BhdGNoU3RhZ2Uoc3RhZ2VQYXlsb2FkKSB7XG4gICAgY3NwLnB1dEFzeW5jKHRoaXMuX291dHB1dENoYW5uZWwsIHsndG9waWMnOiAnc3RhdHVzJyxcbiAgICAgICdwYXlsb2FkJzogc3RhZ2VQYXlsb2FkIH0pO1xuICB9XG59XG5cbmxldCBiZWhvbGRlciA9IG5ldyBCZWhvbGRlcigpO1xuYmVob2xkZXIuc3RhcnQoKTtcbi8vXG4vKlxubGV0IGNvbmZpZ3VyZSA9IG5ldyBDb25maWd1cmUoKTtcbmxldCBjb25maWdzID0gY29uZmlndXJlLnNldHVwKCk7XG5sZXQgc2lnbmFsID0gbmV3IFNpZ25hbCgpO1xubGV0IGRldmljZWxvZyA9IG5ldyBEZXZpY2VMb2coKTtcbmRldmljZWxvZy5ydW4oY29uZmlncyk7XG5zaWduYWwucnVuKCk7XG4qL1xuLy9zZXRUaW1lb3V0KCgpID0+IHt9LCAzMCAqIDEwMDApO1xuXG4vKlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XG4gIHRyeSB7XG4gICAgbGV0IHJhcHRvciA9IG5ldyBSYXB0b3IoKTtcbiAgICBsZXQgbG9nID0gbmV3IExvZ1JlY29yZGluZ1N0YWdlKCk7XG4gICAgbGV0IGVycm9yID0gbmV3IEVycm9yKCk7XG4gICAgbGV0IHJlY29yZCA9IG5ldyBTY3JlZW5SZWNvcmQoKTtcbiAgICBsZXQgY29uZmlndXJlID0gbmV3IENvbmZpZ3VyZSgpO1xuICAgIGxldCBkZXZpY2Vsb2cgPSBuZXcgRGV2aWNlTG9nKCk7XG4gICAgbGV0IHNpZ25hbCA9IG5ldyBTaWduYWwoKTtcblxuICAgIGxldCBjb25maWdzID0gY29uZmlndXJlLnNldHVwKCk7XG5cbiAgICAvLyBNdXN0IGhhdmUgc2lnbmFsIGhhbmRsaW5nLlxuICAgIHNpZ25hbC5ydW4oKTtcblxuICAgIC8vIFJ1biBtb2R1bGVzIGJlZm9yZSBjb25uZWN0aW5nIHRoZW0uXG4gICAgLy9yZWNvcmQucnVuKGNvbmZpZ3MpO1xuXG4gICAgLy8gUGFzc2l2ZSBtb2R1bGVzIGRvIG5vdCBuZWVkIGNvbmZpZ3M6IHRoZXkgb25seSBuZWVkIGNoYW5uZWwgcmVzdWx0cy5cbiAgICBsb2cucnVuKCk7XG4gICAgZXJyb3IucnVuKCk7XG5cbiAgICBmb3IgKGxldCBtb2R1bGVJZGVuZGl0eSBvZiBjb25maWdzLm1vZHVsZXMpIHtcbiAgICAgIHN3aXRjaChtb2R1bGVJZGVuZGl0eSkge1xuXG4gICAgICAgIGNhc2UgJ2FkYic6XG4gICAgICAgICAgc2lnbmFsLnN1YnNjcmliZShcbiAgICAgICAgICAgIGRldmljZWxvZzo6ZGV2aWNlbG9nLmNvbm5lY3RTaWduYWxzXG4gICAgICAgICAgKTtcbiAgICAgICAgICBkZXZpY2Vsb2cuc3Vic2NyaWJlKFxuICAgICAgICAgICAgbG9nOjpsb2cuY29ubmVjdCxcbiAgICAgICAgICAgIGVycm9yOjplcnJvci5lcnJvckZyb21Mb2dDaGFubmVsLFxuICAgICAgICAgICAgZXJyb3I6OmVycm9yLmVycm9yRnJvbUVycm9yQ2hhbm5lbCxcbiAgICAgICAgICApLnJ1bihjb25maWdzKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmFwdG9yJzpcbiAgICAgICAgICBzaWduYWwuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmFwdG9yOjpyYXB0b3IuY29ubmVjdFNpZ25hbHNcbiAgICAgICAgICApO1xuICAgICAgICAgIGZvciAobGV0IHRlc3RGaWxlUGF0aCBvZiBjb25maWdzLnRlc3RzKSB7XG4gICAgICAgICAgICByYXB0b3Iuc3Vic2NyaWJlKFxuICAgICAgICAgICAgICBsb2c6OmxvZy5jb25uZWN0LFxuICAgICAgICAgICAgICBlcnJvcjo6ZXJyb3IuY29ubmVjdCxcbiAgICAgICAgICAgICAgLy9yZWNvcmQ6OnJlY29yZC5jb25uZWN0XG4gICAgICAgICAgICApLnJ1bihjb25maWdzLCB0ZXN0RmlsZVBhdGgpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnc2NyZWVucmVjb3JkJzpcbiAgICAgICAgICBzaWduYWwuc3Vic2NyaWJlKFxuICAgICAgICAgICAgcmVjb3JkOjpyZWNvcmQuY29ubmVjdFNpZ25hbHNcbiAgICAgICAgICApO1xuICAgICAgICAgIHJlY29yZC5ydW4oY29uZmlncyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gIH0gY2F0Y2goZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoJz4+Pj4+Pj4+IEVSUk9SJywgZSwgZS5zdGFjayk7XG4gICAgdGhyb3cgZTtcbiAgfVxufVxuXG5tYWluKCk7XG4qL1xuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvYmVob2xkZXIuanNcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGNzcCA9IHJlcXVpcmUoXCIuL2NzcC5jb3JlXCIpO1xudmFyIG9wZXJhdGlvbnMgPSByZXF1aXJlKFwiLi9jc3Aub3BlcmF0aW9uc1wiKTtcbnZhciBwaXBlbGluZSA9IHJlcXVpcmUoJy4vY3NwLnBpcGVsaW5lJyk7XG5cbmNzcC5vcGVyYXRpb25zID0gb3BlcmF0aW9ucztcbmNzcC5vcGVyYXRpb25zLnBpcGVsaW5lID0gcGlwZWxpbmUucGlwZWxpbmU7XG5jc3Aub3BlcmF0aW9ucy5waXBlbGluZUFzeW5jID0gcGlwZWxpbmUucGlwZWxpbmVBc3luYztcblxubW9kdWxlLmV4cG9ydHMgPSBjc3A7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9qcy1jc3Avc3JjL2NzcC5qc1xuICoqIG1vZHVsZSBpZCA9IDE5MVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBidWZmZXJzID0gcmVxdWlyZShcIi4vaW1wbC9idWZmZXJzXCIpO1xudmFyIGNoYW5uZWxzID0gcmVxdWlyZShcIi4vaW1wbC9jaGFubmVsc1wiKTtcbnZhciBzZWxlY3QgPSByZXF1aXJlKFwiLi9pbXBsL3NlbGVjdFwiKTtcbnZhciBwcm9jZXNzID0gcmVxdWlyZShcIi4vaW1wbC9wcm9jZXNzXCIpO1xudmFyIHRpbWVycyA9IHJlcXVpcmUoXCIuL2ltcGwvdGltZXJzXCIpO1xuXG5mdW5jdGlvbiBzcGF3bihnZW4sIGNyZWF0b3IpIHtcbiAgdmFyIGNoID0gY2hhbm5lbHMuY2hhbihidWZmZXJzLmZpeGVkKDEpKTtcbiAgKG5ldyBwcm9jZXNzLlByb2Nlc3MoZ2VuLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSA9PT0gY2hhbm5lbHMuQ0xPU0VEKSB7XG4gICAgICBjaC5jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9jZXNzLnB1dF90aGVuX2NhbGxiYWNrKGNoLCB2YWx1ZSwgZnVuY3Rpb24ob2spIHtcbiAgICAgICAgY2guY2xvc2UoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgY3JlYXRvcikpLnJ1bigpO1xuICByZXR1cm4gY2g7XG59O1xuXG5mdW5jdGlvbiBnbyhmLCBhcmdzKSB7XG4gIGFyZ3MgPSBhcmdzIHx8IFtdO1xuXG4gIHZhciBnZW4gPSBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICByZXR1cm4gc3Bhd24oZ2VuLCBmKTtcbn07XG5cbmZ1bmN0aW9uIGNoYW4oYnVmZmVyT3JOdW1iZXIsIHhmb3JtLCBleEhhbmRsZXIpIHtcbiAgdmFyIGJ1ZjtcbiAgaWYgKGJ1ZmZlck9yTnVtYmVyID09PSAwKSB7XG4gICAgYnVmZmVyT3JOdW1iZXIgPSBudWxsO1xuICB9XG4gIGlmICh0eXBlb2YgYnVmZmVyT3JOdW1iZXIgPT09IFwibnVtYmVyXCIpIHtcbiAgICBidWYgPSBidWZmZXJzLmZpeGVkKGJ1ZmZlck9yTnVtYmVyKTtcbiAgfSBlbHNlIHtcbiAgICBidWYgPSBidWZmZXJPck51bWJlcjtcbiAgfVxuICByZXR1cm4gY2hhbm5lbHMuY2hhbihidWYsIHhmb3JtLCBleEhhbmRsZXIpO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgYnVmZmVyczoge1xuICAgIGZpeGVkOiBidWZmZXJzLmZpeGVkLFxuICAgIGRyb3BwaW5nOiBidWZmZXJzLmRyb3BwaW5nLFxuICAgIHNsaWRpbmc6IGJ1ZmZlcnMuc2xpZGluZ1xuICB9LFxuXG4gIHNwYXduOiBzcGF3bixcbiAgZ286IGdvLFxuICBjaGFuOiBjaGFuLFxuICBERUZBVUxUOiBzZWxlY3QuREVGQVVMVCxcbiAgQ0xPU0VEOiBjaGFubmVscy5DTE9TRUQsXG5cbiAgcHV0OiBwcm9jZXNzLnB1dCxcbiAgdGFrZTogcHJvY2Vzcy50YWtlLFxuICBvZmZlcjogcHJvY2Vzcy5vZmZlcixcbiAgcG9sbDogcHJvY2Vzcy5wb2xsLFxuICBzbGVlcDogcHJvY2Vzcy5zbGVlcCxcbiAgYWx0czogcHJvY2Vzcy5hbHRzLFxuICBwdXRBc3luYzogcHJvY2Vzcy5wdXRfdGhlbl9jYWxsYmFjayxcbiAgdGFrZUFzeW5jOiBwcm9jZXNzLnRha2VfdGhlbl9jYWxsYmFjayxcbiAgTk9fVkFMVUU6IHByb2Nlc3MuTk9fVkFMVUUsXG5cbiAgdGltZW91dDogdGltZXJzLnRpbWVvdXRcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9qcy1jc3Avc3JjL2NzcC5jb3JlLmpzXG4gKiogbW9kdWxlIGlkID0gMTkyXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxuLy8gVE9ETzogQ29uc2lkZXIgRW1wdHlFcnJvciAmIEZ1bGxFcnJvciB0byBhdm9pZCByZWR1bmRhbnQgYm91bmRcbi8vIGNoZWNrcywgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZSAobWF5IG5lZWQgYmVuY2htYXJrcylcblxuZnVuY3Rpb24gYWNvcHkoc3JjLCBzcmNfc3RhcnQsIGRzdCwgZHN0X3N0YXJ0LCBsZW5ndGgpIHtcbiAgdmFyIGNvdW50ID0gMDtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICBpZiAoY291bnQgPj0gbGVuZ3RoKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgZHN0W2RzdF9zdGFydCArIGNvdW50XSA9IHNyY1tzcmNfc3RhcnQgKyBjb3VudF07XG4gICAgY291bnQgKys7XG4gIH1cbn1cblxudmFyIEVNUFRZID0ge1xuICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBFTVBUWV1cIjtcbiAgfVxufTtcblxudmFyIFJpbmdCdWZmZXIgPSBmdW5jdGlvbihoZWFkLCB0YWlsLCBsZW5ndGgsIGFycmF5KSB7XG4gIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICB0aGlzLmFycmF5ID0gYXJyYXk7XG4gIHRoaXMuaGVhZCA9IGhlYWQ7XG4gIHRoaXMudGFpbCA9IHRhaWw7XG59O1xuXG4vLyBJbnRlcm5hbCBtZXRob2QsIGNhbGxlcnMgbXVzdCBkbyBib3VuZCBjaGVja1xuUmluZ0J1ZmZlci5wcm90b3R5cGUuX3Vuc2hpZnQgPSBmdW5jdGlvbihpdGVtKSB7XG4gIHZhciBhcnJheSA9IHRoaXMuYXJyYXk7XG4gIHZhciBoZWFkID0gdGhpcy5oZWFkO1xuICBhcnJheVtoZWFkXSA9IGl0ZW07XG4gIHRoaXMuaGVhZCA9IChoZWFkICsgMSkgJSBhcnJheS5sZW5ndGg7XG4gIHRoaXMubGVuZ3RoICsrO1xufTtcblxuUmluZ0J1ZmZlci5wcm90b3R5cGUuX3Jlc2l6ZSA9IGZ1bmN0aW9uKCkge1xuICB2YXIgYXJyYXkgPSB0aGlzLmFycmF5O1xuICB2YXIgbmV3X2xlbmd0aCA9IDIgKiBhcnJheS5sZW5ndGg7XG4gIHZhciBuZXdfYXJyYXkgPSBuZXcgQXJyYXkobmV3X2xlbmd0aCk7XG4gIHZhciBoZWFkID0gdGhpcy5oZWFkO1xuICB2YXIgdGFpbCA9IHRoaXMudGFpbDtcbiAgdmFyIGxlbmd0aCA9IHRoaXMubGVuZ3RoO1xuICBpZiAodGFpbCA8IGhlYWQpIHtcbiAgICBhY29weShhcnJheSwgdGFpbCwgbmV3X2FycmF5LCAwLCBsZW5ndGgpO1xuICAgIHRoaXMudGFpbCA9IDA7XG4gICAgdGhpcy5oZWFkID0gbGVuZ3RoO1xuICAgIHRoaXMuYXJyYXkgPSBuZXdfYXJyYXk7XG4gIH0gZWxzZSBpZiAodGFpbCA+IGhlYWQpIHtcbiAgICBhY29weShhcnJheSwgdGFpbCwgbmV3X2FycmF5LCAwLCBhcnJheS5sZW5ndGggLSB0YWlsKTtcbiAgICBhY29weShhcnJheSwgMCwgbmV3X2FycmF5LCBhcnJheS5sZW5ndGggLSB0YWlsLCBoZWFkKTtcbiAgICB0aGlzLnRhaWwgPSAwO1xuICAgIHRoaXMuaGVhZCA9IGxlbmd0aDtcbiAgICB0aGlzLmFycmF5ID0gbmV3X2FycmF5O1xuICB9IGVsc2UgaWYgKHRhaWwgPT09IGhlYWQpIHtcbiAgICB0aGlzLnRhaWwgPSAwO1xuICAgIHRoaXMuaGVhZCA9IDA7XG4gICAgdGhpcy5hcnJheSA9IG5ld19hcnJheTtcbiAgfVxufTtcblxuUmluZ0J1ZmZlci5wcm90b3R5cGUudW5ib3VuZGVkX3Vuc2hpZnQgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGlmICh0aGlzLmxlbmd0aCArIDEgPT09IHRoaXMuYXJyYXkubGVuZ3RoKSB7XG4gICAgdGhpcy5fcmVzaXplKCk7XG4gIH1cbiAgdGhpcy5fdW5zaGlmdChpdGVtKTtcbn07XG5cblJpbmdCdWZmZXIucHJvdG90eXBlLnBvcCA9IGZ1bmN0aW9uKCkge1xuICBpZiAodGhpcy5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gRU1QVFk7XG4gIH1cbiAgdmFyIGFycmF5ID0gdGhpcy5hcnJheTtcbiAgdmFyIHRhaWwgPSB0aGlzLnRhaWw7XG4gIHZhciBpdGVtID0gYXJyYXlbdGFpbF07XG4gIGFycmF5W3RhaWxdID0gbnVsbDtcbiAgdGhpcy50YWlsID0gKHRhaWwgKyAxKSAlIGFycmF5Lmxlbmd0aDtcbiAgdGhpcy5sZW5ndGggLS07XG4gIHJldHVybiBpdGVtO1xufTtcblxuUmluZ0J1ZmZlci5wcm90b3R5cGUuY2xlYW51cCA9IGZ1bmN0aW9uKHByZWRpY2F0ZSkge1xuICB2YXIgbGVuZ3RoID0gdGhpcy5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IHRoaXMucG9wKCk7XG4gICAgaWYgKHByZWRpY2F0ZShpdGVtKSkge1xuICAgICAgdGhpcy5fdW5zaGlmdChpdGVtKTtcbiAgICB9XG4gIH1cbn07XG5cbnZhciBGaXhlZEJ1ZmZlciA9IGZ1bmN0aW9uKGJ1ZiwgIG4pIHtcbiAgdGhpcy5idWYgPSBidWY7XG4gIHRoaXMubiA9IG47XG59O1xuXG5GaXhlZEJ1ZmZlci5wcm90b3R5cGUuaXNfZnVsbCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5idWYubGVuZ3RoID49IHRoaXMubjtcbn07XG5cbkZpeGVkQnVmZmVyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuYnVmLnBvcCgpO1xufTtcblxuRml4ZWRCdWZmZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgLy8gTm90ZSB0aGF0IGV2ZW4gdGhvdWdoIHRoZSB1bmRlcmx5aW5nIGJ1ZmZlciBtYXkgZ3JvdywgXCJuXCIgaXNcbiAgLy8gZml4ZWQgc28gYWZ0ZXIgb3ZlcmZsb3dpbmcgdGhlIGJ1ZmZlciBpcyBzdGlsbCBjb25zaWRlcmVkIGZ1bGwuXG4gIHRoaXMuYnVmLnVuYm91bmRlZF91bnNoaWZ0KGl0ZW0pO1xufTtcblxuRml4ZWRCdWZmZXIucHJvdG90eXBlLmNvdW50ID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmJ1Zi5sZW5ndGg7XG59O1xuXG5cbnZhciBEcm9wcGluZ0J1ZmZlciA9IGZ1bmN0aW9uKGJ1Ziwgbikge1xuICB0aGlzLmJ1ZiA9IGJ1ZjtcbiAgdGhpcy5uID0gbjtcbn07XG5cbkRyb3BwaW5nQnVmZmVyLnByb3RvdHlwZS5pc19mdWxsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cbkRyb3BwaW5nQnVmZmVyLnByb3RvdHlwZS5yZW1vdmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuYnVmLnBvcCgpO1xufTtcblxuRHJvcHBpbmdCdWZmZXIucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgaWYgKHRoaXMuYnVmLmxlbmd0aCA8IHRoaXMubikge1xuICAgIHRoaXMuYnVmLl91bnNoaWZ0KGl0ZW0pO1xuICB9XG59O1xuXG5Ecm9wcGluZ0J1ZmZlci5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuYnVmLmxlbmd0aDtcbn07XG5cblxudmFyIFNsaWRpbmdCdWZmZXIgPSBmdW5jdGlvbihidWYsIG4pIHtcbiAgdGhpcy5idWYgPSBidWY7XG4gIHRoaXMubiA9IG47XG59O1xuXG5TbGlkaW5nQnVmZmVyLnByb3RvdHlwZS5pc19mdWxsID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiBmYWxzZTtcbn07XG5cblNsaWRpbmdCdWZmZXIucHJvdG90eXBlLnJlbW92ZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5idWYucG9wKCk7XG59O1xuXG5TbGlkaW5nQnVmZmVyLnByb3RvdHlwZS5hZGQgPSBmdW5jdGlvbihpdGVtKSB7XG4gIGlmICh0aGlzLmJ1Zi5sZW5ndGggPT09IHRoaXMubikge1xuICAgIHRoaXMuYnVmLnBvcCgpO1xuICB9XG4gIHRoaXMuYnVmLl91bnNoaWZ0KGl0ZW0pO1xufTtcblxuU2xpZGluZ0J1ZmZlci5wcm90b3R5cGUuY291bnQgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuYnVmLmxlbmd0aDtcbn07XG5cblxudmFyIHJpbmcgPSBleHBvcnRzLnJpbmcgPSBmdW5jdGlvbiByaW5nX2J1ZmZlcihuKSB7XG4gIHJldHVybiBuZXcgUmluZ0J1ZmZlcigwLCAwLCAwLCBuZXcgQXJyYXkobikpO1xufTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgYnVmZmVyIHRoYXQgaXMgY29uc2lkZXJlZCBcImZ1bGxcIiB3aGVuIGl0IHJlYWNoZXMgc2l6ZSBuLFxuICogYnV0IHN0aWxsIGFjY2VwdHMgYWRkaXRpb25hbCBpdGVtcywgZWZmZWN0aXZlbHkgYWxsb3cgb3ZlcmZsb3dpbmcuXG4gKiBUaGUgb3ZlcmZsb3dpbmcgYmVoYXZpb3IgaXMgdXNlZnVsIGZvciBzdXBwb3J0aW5nIFwiZXhwYW5kaW5nXCJcbiAqIHRyYW5zZHVjZXJzLCB3aGVyZSB3ZSB3YW50IHRvIGNoZWNrIGlmIGEgYnVmZmVyIGlzIGZ1bGwgYmVmb3JlXG4gKiBydW5uaW5nIHRoZSB0cmFuc2R1Y2VkIHN0ZXAgZnVuY3Rpb24sIHdoaWxlIHN0aWxsIGFsbG93aW5nIGFcbiAqIHRyYW5zZHVjZWQgc3RlcCB0byBleHBhbmQgaW50byBtdWx0aXBsZSBcImVzc2VuY2VcIiBzdGVwcy5cbiAqL1xuZXhwb3J0cy5maXhlZCA9IGZ1bmN0aW9uIGZpeGVkX2J1ZmZlcihuKSB7XG4gIHJldHVybiBuZXcgRml4ZWRCdWZmZXIocmluZyhuKSwgbik7XG59O1xuXG5leHBvcnRzLmRyb3BwaW5nID0gZnVuY3Rpb24gZHJvcHBpbmdfYnVmZmVyKG4pIHtcbiAgcmV0dXJuIG5ldyBEcm9wcGluZ0J1ZmZlcihyaW5nKG4pLCBuKTtcbn07XG5cbmV4cG9ydHMuc2xpZGluZyA9IGZ1bmN0aW9uIHNsaWRpbmdfYnVmZmVyKG4pIHtcbiAgcmV0dXJuIG5ldyBTbGlkaW5nQnVmZmVyKHJpbmcobiksIG4pO1xufTtcblxuZXhwb3J0cy5FTVBUWSA9IEVNUFRZO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vanMtY3NwL3NyYy9pbXBsL2J1ZmZlcnMuanNcbiAqKiBtb2R1bGUgaWQgPSAxOTNcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgYnVmZmVycyA9IHJlcXVpcmUoXCIuL2J1ZmZlcnNcIik7XG52YXIgZGlzcGF0Y2ggPSByZXF1aXJlKFwiLi9kaXNwYXRjaFwiKTtcblxudmFyIE1BWF9ESVJUWSA9IDY0O1xudmFyIE1BWF9RVUVVRV9TSVpFID0gMTAyNDtcblxudmFyIENMT1NFRCA9IG51bGw7XG5cbnZhciBCb3ggPSBmdW5jdGlvbih2YWx1ZSkge1xuICB0aGlzLnZhbHVlID0gdmFsdWU7XG59O1xuXG52YXIgUHV0Qm94ID0gZnVuY3Rpb24oaGFuZGxlciwgdmFsdWUpIHtcbiAgdGhpcy5oYW5kbGVyID0gaGFuZGxlcjtcbiAgdGhpcy52YWx1ZSA9IHZhbHVlO1xufTtcblxudmFyIENoYW5uZWwgPSBmdW5jdGlvbih0YWtlcywgcHV0cywgYnVmLCB4Zm9ybSkge1xuICB0aGlzLmJ1ZiA9IGJ1ZjtcbiAgdGhpcy54Zm9ybSA9IHhmb3JtO1xuICB0aGlzLnRha2VzID0gdGFrZXM7XG4gIHRoaXMucHV0cyA9IHB1dHM7XG5cbiAgdGhpcy5kaXJ0eV90YWtlcyA9IDA7XG4gIHRoaXMuZGlydHlfcHV0cyA9IDA7XG4gIHRoaXMuY2xvc2VkID0gZmFsc2U7XG59O1xuXG5mdW5jdGlvbiBpc1JlZHVjZWQodikge1xuICByZXR1cm4gdiAmJiB2W1wiQEB0cmFuc2R1Y2VyL3JlZHVjZWRcIl07XG59XG5cbmZ1bmN0aW9uIHNjaGVkdWxlKGYsIHYpIHtcbiAgZGlzcGF0Y2gucnVuKGZ1bmN0aW9uKCkge1xuICAgIGYodik7XG4gIH0pO1xufVxuXG5DaGFubmVsLnByb3RvdHlwZS5fcHV0ID0gZnVuY3Rpb24odmFsdWUsIGhhbmRsZXIpIHtcbiAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgcHV0IENMT1NFRCBvbiBhIGNoYW5uZWwuXCIpO1xuICB9XG5cbiAgLy8gVE9ETzogSSdtIG5vdCBzdXJlIGhvdyB0aGlzIGNhbiBoYXBwZW4sIGJlY2F1c2UgdGhlIG9wZXJhdGlvbnNcbiAgLy8gYXJlIHJlZ2lzdGVyZWQgaW4gMSB0aWNrLCBhbmQgdGhlIG9ubHkgd2F5IGZvciB0aGlzIHRvIGJlIGluYWN0aXZlXG4gIC8vIGlzIGZvciBhIHByZXZpb3VzIG9wZXJhdGlvbiBpbiB0aGUgc2FtZSBhbHQgdG8gaGF2ZSByZXR1cm5lZFxuICAvLyBpbW1lZGlhdGVseSwgd2hpY2ggd291bGQgaGF2ZSBzaG9ydC1jaXJjdWl0ZWQgdG8gcHJldmVudCB0aGlzIHRvXG4gIC8vIGJlIGV2ZXIgcmVnaXN0ZXIgYW55d2F5LiBUaGUgc2FtZSB0aGluZyBnb2VzIGZvciB0aGUgYWN0aXZlIGNoZWNrXG4gIC8vIGluIFwiX3Rha2VcIi5cbiAgaWYgKCFoYW5kbGVyLmlzX2FjdGl2ZSgpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIHJldHVybiBuZXcgQm94KGZhbHNlKTtcbiAgfVxuXG4gIHZhciB0YWtlciwgY2FsbGJhY2s7XG5cbiAgLy8gU29hayB0aGUgdmFsdWUgdGhyb3VnaCB0aGUgYnVmZmVyIGZpcnN0LCBldmVuIGlmIHRoZXJlIGlzIGFcbiAgLy8gcGVuZGluZyB0YWtlci4gVGhpcyB3YXkgdGhlIHN0ZXAgZnVuY3Rpb24gaGFzIGEgY2hhbmNlIHRvIGFjdCBvbiB0aGVcbiAgLy8gdmFsdWUuXG4gIGlmICh0aGlzLmJ1ZiAmJiAhdGhpcy5idWYuaXNfZnVsbCgpKSB7XG4gICAgaGFuZGxlci5jb21taXQoKTtcbiAgICB2YXIgZG9uZSA9IGlzUmVkdWNlZCh0aGlzLnhmb3JtW1wiQEB0cmFuc2R1Y2VyL3N0ZXBcIl0odGhpcy5idWYsIHZhbHVlKSk7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmICh0aGlzLmJ1Zi5jb3VudCgpID09PSAwKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgdGFrZXIgPSB0aGlzLnRha2VzLnBvcCgpO1xuICAgICAgaWYgKHRha2VyID09PSBidWZmZXJzLkVNUFRZKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKHRha2VyLmlzX2FjdGl2ZSgpKSB7XG4gICAgICAgIHZhbHVlID0gdGhpcy5idWYucmVtb3ZlKCk7XG4gICAgICAgIGNhbGxiYWNrID0gdGFrZXIuY29tbWl0KCk7XG4gICAgICAgIHNjaGVkdWxlKGNhbGxiYWNrLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChkb25lKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgQm94KHRydWUpO1xuICB9XG5cbiAgLy8gRWl0aGVyIHRoZSBidWZmZXIgaXMgZnVsbCwgaW4gd2hpY2ggY2FzZSB0aGVyZSB3b24ndCBiZSBhbnlcbiAgLy8gcGVuZGluZyB0YWtlcywgb3Igd2UgZG9uJ3QgaGF2ZSBhIGJ1ZmZlciwgaW4gd2hpY2ggY2FzZSB0aGlzIGxvb3BcbiAgLy8gZnVsZmlsbHMgdGhlIGZpcnN0IG9mIHRoZW0gdGhhdCBpcyBhY3RpdmUgKG5vdGUgdGhhdCB3ZSBkb24ndFxuICAvLyBoYXZlIHRvIHdvcnJ5IGFib3V0IHRyYW5zZHVjZXJzIGhlcmUgc2luY2Ugd2UgcmVxdWlyZSBhIGJ1ZmZlclxuICAvLyBmb3IgdGhhdCkuXG4gIHdoaWxlICh0cnVlKSB7XG4gICAgdGFrZXIgPSB0aGlzLnRha2VzLnBvcCgpO1xuICAgIGlmICh0YWtlciA9PT0gYnVmZmVycy5FTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmICh0YWtlci5pc19hY3RpdmUoKSkge1xuICAgICAgaGFuZGxlci5jb21taXQoKTtcbiAgICAgIGNhbGxiYWNrID0gdGFrZXIuY29tbWl0KCk7XG4gICAgICBzY2hlZHVsZShjYWxsYmFjaywgdmFsdWUpO1xuICAgICAgcmV0dXJuIG5ldyBCb3godHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgLy8gTm8gYnVmZmVyLCBmdWxsIGJ1ZmZlciwgbm8gcGVuZGluZyB0YWtlcy4gUXVldWUgdGhpcyBwdXQgbm93IGlmIGJsb2NrYWJsZS5cbiAgaWYgKHRoaXMuZGlydHlfcHV0cyA+IE1BWF9ESVJUWSkge1xuICAgIHRoaXMucHV0cy5jbGVhbnVwKGZ1bmN0aW9uKHB1dHRlcikge1xuICAgICAgcmV0dXJuIHB1dHRlci5oYW5kbGVyLmlzX2FjdGl2ZSgpO1xuICAgIH0pO1xuICAgIHRoaXMuZGlydHlfcHV0cyA9IDA7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kaXJ0eV9wdXRzICsrO1xuICB9XG4gIGlmIChoYW5kbGVyLmlzX2Jsb2NrYWJsZSgpKSB7XG4gICAgaWYgKHRoaXMucHV0cy5sZW5ndGggPj0gTUFYX1FVRVVFX1NJWkUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbW9yZSB0aGFuIFwiICsgTUFYX1FVRVVFX1NJWkUgKyBcIiBwZW5kaW5nIHB1dHMgYXJlIGFsbG93ZWQgb24gYSBzaW5nbGUgY2hhbm5lbC5cIik7XG4gICAgfVxuICAgIHRoaXMucHV0cy51bmJvdW5kZWRfdW5zaGlmdChuZXcgUHV0Qm94KGhhbmRsZXIsIHZhbHVlKSk7XG4gIH1cbiAgcmV0dXJuIG51bGw7XG59O1xuXG5DaGFubmVsLnByb3RvdHlwZS5fdGFrZSA9IGZ1bmN0aW9uKGhhbmRsZXIpIHtcbiAgaWYgKCFoYW5kbGVyLmlzX2FjdGl2ZSgpKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICB2YXIgcHV0dGVyLCBwdXRfaGFuZGxlciwgY2FsbGJhY2ssIHZhbHVlO1xuXG4gIGlmICh0aGlzLmJ1ZiAmJiB0aGlzLmJ1Zi5jb3VudCgpID4gMCkge1xuICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgdmFsdWUgPSB0aGlzLmJ1Zi5yZW1vdmUoKTtcbiAgICAvLyBXZSBuZWVkIHRvIGNoZWNrIHBlbmRpbmcgcHV0cyBoZXJlLCBvdGhlciB3aXNlIHRoZXkgd29uJ3RcbiAgICAvLyBiZSBhYmxlIHRvIHByb2NlZWQgdW50aWwgdGhlaXIgbnVtYmVyIHJlYWNoZXMgTUFYX0RJUlRZXG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIGlmICh0aGlzLmJ1Zi5pc19mdWxsKCkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwdXR0ZXIgPSB0aGlzLnB1dHMucG9wKCk7XG4gICAgICBpZiAocHV0dGVyID09PSBidWZmZXJzLkVNUFRZKSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgcHV0X2hhbmRsZXIgPSBwdXR0ZXIuaGFuZGxlcjtcbiAgICAgIGlmIChwdXRfaGFuZGxlci5pc19hY3RpdmUoKSkge1xuICAgICAgICBjYWxsYmFjayA9IHB1dF9oYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICBzY2hlZHVsZShjYWxsYmFjaywgdHJ1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzUmVkdWNlZCh0aGlzLnhmb3JtW1wiQEB0cmFuc2R1Y2VyL3N0ZXBcIl0odGhpcy5idWYsIHB1dHRlci52YWx1ZSkpKSB7XG4gICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgQm94KHZhbHVlKTtcbiAgfVxuXG4gIC8vIEVpdGhlciB0aGUgYnVmZmVyIGlzIGVtcHR5LCBpbiB3aGljaCBjYXNlIHRoZXJlIHdvbid0IGJlIGFueVxuICAvLyBwZW5kaW5nIHB1dHMsIG9yIHdlIGRvbid0IGhhdmUgYSBidWZmZXIsIGluIHdoaWNoIGNhc2UgdGhpcyBsb29wXG4gIC8vIGZ1bGZpbGxzIHRoZSBmaXJzdCBvZiB0aGVtIHRoYXQgaXMgYWN0aXZlIChub3RlIHRoYXQgd2UgZG9uJ3RcbiAgLy8gaGF2ZSB0byB3b3JyeSBhYm91dCB0cmFuc2R1Y2VycyBoZXJlIHNpbmNlIHdlIHJlcXVpcmUgYSBidWZmZXJcbiAgLy8gZm9yIHRoYXQpLlxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHB1dHRlciA9IHRoaXMucHV0cy5wb3AoKTtcbiAgICB2YWx1ZSA9IHB1dHRlci52YWx1ZTtcbiAgICBpZiAocHV0dGVyID09PSBidWZmZXJzLkVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgcHV0X2hhbmRsZXIgPSBwdXR0ZXIuaGFuZGxlcjtcbiAgICBpZiAocHV0X2hhbmRsZXIuaXNfYWN0aXZlKCkpIHtcbiAgICAgIGhhbmRsZXIuY29tbWl0KCk7XG4gICAgICBjYWxsYmFjayA9IHB1dF9oYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgaWYgKGNhbGxiYWNrKSB7XG4gICAgICAgIHNjaGVkdWxlKGNhbGxiYWNrLCB0cnVlKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBuZXcgQm94KHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBpZiAodGhpcy5jbG9zZWQpIHtcbiAgICBoYW5kbGVyLmNvbW1pdCgpO1xuICAgIHJldHVybiBuZXcgQm94KENMT1NFRCk7XG4gIH1cblxuICAvLyBObyBidWZmZXIsIGVtcHR5IGJ1ZmZlciwgbm8gcGVuZGluZyBwdXRzLiBRdWV1ZSB0aGlzIHRha2Ugbm93IGlmIGJsb2NrYWJsZS5cbiAgaWYgKHRoaXMuZGlydHlfdGFrZXMgPiBNQVhfRElSVFkpIHtcbiAgICB0aGlzLnRha2VzLmNsZWFudXAoZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgcmV0dXJuIGhhbmRsZXIuaXNfYWN0aXZlKCk7XG4gICAgfSk7XG4gICAgdGhpcy5kaXJ0eV90YWtlcyA9IDA7XG4gIH0gZWxzZSB7XG4gICAgdGhpcy5kaXJ0eV90YWtlcyArKztcbiAgfVxuICBpZiAoaGFuZGxlci5pc19ibG9ja2FibGUoKSkge1xuICAgIGlmICh0aGlzLnRha2VzLmxlbmd0aCA+PSBNQVhfUVVFVUVfU0laRSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gbW9yZSB0aGFuIFwiICsgTUFYX1FVRVVFX1NJWkUgKyBcIiBwZW5kaW5nIHRha2VzIGFyZSBhbGxvd2VkIG9uIGEgc2luZ2xlIGNoYW5uZWwuXCIpO1xuICAgIH1cbiAgICB0aGlzLnRha2VzLnVuYm91bmRlZF91bnNoaWZ0KGhhbmRsZXIpO1xuICB9XG4gIHJldHVybiBudWxsO1xufTtcblxuQ2hhbm5lbC5wcm90b3R5cGUuY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgaWYgKHRoaXMuY2xvc2VkKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHRoaXMuY2xvc2VkID0gdHJ1ZTtcblxuICAvLyBUT0RPOiBEdXBsaWNhdGUgY29kZS4gTWFrZSBhIFwiX2ZsdXNoXCIgZnVuY3Rpb24gb3Igc29tZXRoaW5nXG4gIGlmICh0aGlzLmJ1Zikge1xuICAgIHRoaXMueGZvcm1bXCJAQHRyYW5zZHVjZXIvcmVzdWx0XCJdKHRoaXMuYnVmKTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgaWYgKHRoaXMuYnVmLmNvdW50KCkgPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB0YWtlciA9IHRoaXMudGFrZXMucG9wKCk7XG4gICAgICBpZiAodGFrZXIgPT09IGJ1ZmZlcnMuRU1QVFkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAodGFrZXIuaXNfYWN0aXZlKCkpIHtcbiAgICAgICAgY2FsbGJhY2sgPSB0YWtlci5jb21taXQoKTtcbiAgICAgICAgdmFyIHZhbHVlID0gdGhpcy5idWYucmVtb3ZlKCk7XG4gICAgICAgIHNjaGVkdWxlKGNhbGxiYWNrLCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgd2hpbGUgKHRydWUpIHtcbiAgICB2YXIgdGFrZXIgPSB0aGlzLnRha2VzLnBvcCgpO1xuICAgIGlmICh0YWtlciA9PT0gYnVmZmVycy5FTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmICh0YWtlci5pc19hY3RpdmUoKSkge1xuICAgICAgdmFyIGNhbGxiYWNrID0gdGFrZXIuY29tbWl0KCk7XG4gICAgICBzY2hlZHVsZShjYWxsYmFjaywgQ0xPU0VEKTtcbiAgICB9XG4gIH1cblxuICB3aGlsZSAodHJ1ZSkge1xuICAgIHZhciBwdXR0ZXIgPSB0aGlzLnB1dHMucG9wKCk7XG4gICAgaWYgKHB1dHRlciA9PT0gYnVmZmVycy5FTVBUWSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChwdXR0ZXIuaGFuZGxlci5pc19hY3RpdmUoKSkge1xuICAgICAgdmFyIHB1dF9jYWxsYmFjayA9IHB1dHRlci5oYW5kbGVyLmNvbW1pdCgpO1xuICAgICAgaWYgKHB1dF9jYWxsYmFjaykge1xuICAgICAgICBzY2hlZHVsZShwdXRfY2FsbGJhY2ssIGZhbHNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cblxuQ2hhbm5lbC5wcm90b3R5cGUuaXNfY2xvc2VkID0gZnVuY3Rpb24oKSB7XG4gIHJldHVybiB0aGlzLmNsb3NlZDtcbn07XG5cbmZ1bmN0aW9uIGRlZmF1bHRIYW5kbGVyKGUpIHtcbiAgY29uc29sZS5sb2coJ2Vycm9yIGluIGNoYW5uZWwgdHJhbnNmb3JtZXInLCBlLnN0YWNrKTtcbiAgcmV0dXJuIENMT1NFRDtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRXgoYnVmLCBleEhhbmRsZXIsIGUpIHtcbiAgdmFyIGRlZiA9IChleEhhbmRsZXIgfHwgZGVmYXVsdEhhbmRsZXIpKGUpO1xuICBpZiAoZGVmICE9PSBDTE9TRUQpIHtcbiAgICBidWYuYWRkKGRlZik7XG4gIH1cbiAgcmV0dXJuIGJ1Zjtcbn1cblxuLy8gVGhlIGJhc2UgdHJhbnNmb3JtZXIgb2JqZWN0IHRvIHVzZSB3aXRoIHRyYW5zZHVjZXJzXG5mdW5jdGlvbiBBZGRUcmFuc2Zvcm1lcigpIHtcbn1cblxuQWRkVHJhbnNmb3JtZXIucHJvdG90eXBlW1wiQEB0cmFuc2R1Y2VyL2luaXRcIl0gPSBmdW5jdGlvbigpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdpbml0IG5vdCBhdmFpbGFibGUnKTtcbn07XG5cbkFkZFRyYW5zZm9ybWVyLnByb3RvdHlwZVtcIkBAdHJhbnNkdWNlci9yZXN1bHRcIl0gPSBmdW5jdGlvbih2KSB7XG4gIHJldHVybiB2O1xufTtcblxuQWRkVHJhbnNmb3JtZXIucHJvdG90eXBlW1wiQEB0cmFuc2R1Y2VyL3N0ZXBcIl0gPSBmdW5jdGlvbihidWZmZXIsIGlucHV0KSB7XG4gIGJ1ZmZlci5hZGQoaW5wdXQpO1xuICByZXR1cm4gYnVmZmVyO1xufTtcblxuXG5mdW5jdGlvbiBoYW5kbGVFeGNlcHRpb24oZXhIYW5kbGVyKSB7XG4gIHJldHVybiBmdW5jdGlvbih4Zm9ybSkge1xuICAgIHJldHVybiB7XG4gICAgICBcIkBAdHJhbnNkdWNlci9zdGVwXCI6IGZ1bmN0aW9uKGJ1ZmZlciwgaW5wdXQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICByZXR1cm4geGZvcm1bXCJAQHRyYW5zZHVjZXIvc3RlcFwiXShidWZmZXIsIGlucHV0KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIHJldHVybiBoYW5kbGVFeChidWZmZXIsIGV4SGFuZGxlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBcIkBAdHJhbnNkdWNlci9yZXN1bHRcIjogZnVuY3Rpb24oYnVmZmVyKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcmV0dXJuIHhmb3JtW1wiQEB0cmFuc2R1Y2VyL3Jlc3VsdFwiXShidWZmZXIpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgcmV0dXJuIGhhbmRsZUV4KGJ1ZmZlciwgZXhIYW5kbGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG4gIH07XG59XG5cbi8vIFhYWDogVGhpcyBpcyBpbmNvbnNpc3RlbnQuIFdlIHNob3VsZCBlaXRoZXIgY2FsbCB0aGUgcmVkdWNpbmdcbi8vIGZ1bmN0aW9uIHhmb3JtLCBvciBjYWxsIHRoZSB0cmFuc2R1Y2VyIHhmb3JtLCBub3QgYm90aFxuZXhwb3J0cy5jaGFuID0gZnVuY3Rpb24oYnVmLCB4Zm9ybSwgZXhIYW5kbGVyKSB7XG4gIGlmICh4Zm9ybSkge1xuICAgIGlmICghYnVmKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJPbmx5IGJ1ZmZlcmVkIGNoYW5uZWxzIGNhbiB1c2UgdHJhbnNkdWNlcnNcIik7XG4gICAgfVxuXG4gICAgeGZvcm0gPSB4Zm9ybShuZXcgQWRkVHJhbnNmb3JtZXIoKSk7XG4gIH0gZWxzZSB7XG4gICAgeGZvcm0gPSBuZXcgQWRkVHJhbnNmb3JtZXIoKTtcbiAgfVxuICB4Zm9ybSA9IGhhbmRsZUV4Y2VwdGlvbihleEhhbmRsZXIpKHhmb3JtKTtcblxuICByZXR1cm4gbmV3IENoYW5uZWwoYnVmZmVycy5yaW5nKDMyKSwgYnVmZmVycy5yaW5nKDMyKSwgYnVmLCB4Zm9ybSk7XG59O1xuXG5leHBvcnRzLkJveCA9IEJveDtcbmV4cG9ydHMuQ2hhbm5lbCA9IENoYW5uZWw7XG5leHBvcnRzLkNMT1NFRCA9IENMT1NFRDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2pzLWNzcC9zcmMvaW1wbC9jaGFubmVscy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5NFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8vIFRPRE86IFVzZSBwcm9jZXNzLm5leHRUaWNrIGlmIGl0J3MgYXZhaWxhYmxlIHNpbmNlIGl0J3MgbW9yZVxuLy8gZWZmaWNpZW50XG4vLyBodHRwOi8vaG93dG9ub2RlLm9yZy91bmRlcnN0YW5kaW5nLXByb2Nlc3MtbmV4dC10aWNrXG4vLyBNYXliZSB3ZSBkb24ndCBldmVuIG5lZWQgdG8gcXVldWUgb3Vyc2VsdmVzIGluIHRoYXQgY2FzZT9cblxuLy8gWFhYOiBCdXQgaHR0cDovL2Jsb2cubm9kZWpzLm9yZy8yMDEzLzAzLzExL25vZGUtdjAtMTAtMC1zdGFibGUvXG4vLyBMb29rcyBsaWtlIGl0IHdpbGwgYmxvdyB1cCB0aGUgc3RhY2sgKG9yIGlzIHRoYXQganVzdCBhYm91dFxuLy8gcHJlLWVtcHRpbmcgSU8gKGJ1dCB0aGF0J3MgYWxyZWFkeSBiYWQgZW5vdWdoIElNTyk/KVxuXG4vLyBMb29rcyBsaWtlXG4vLyBodHRwOi8vbm9kZWpzLm9yZy9hcGkvcHJvY2Vzcy5odG1sI3Byb2Nlc3NfcHJvY2Vzc19uZXh0dGlja19jYWxsYmFja1xuLy8gaXMgdGhlIGVxdWl2YWxlbnQgb2Ygb3VyIFRBU0tfQkFUQ0hfU0laRVxuXG52YXIgYnVmZmVycyA9IHJlcXVpcmUoXCIuL2J1ZmZlcnNcIik7XG5cbnZhciBUQVNLX0JBVENIX1NJWkUgPSAxMDI0O1xuXG52YXIgdGFza3MgPSBidWZmZXJzLnJpbmcoMzIpO1xudmFyIHJ1bm5pbmcgPSBmYWxzZTtcbnZhciBxdWV1ZWQgPSBmYWxzZTtcblxudmFyIHF1ZXVlX2Rpc3BhdGNoZXI7XG5cbmZ1bmN0aW9uIHByb2Nlc3NfbWVzc2FnZXMoKSB7XG4gIHJ1bm5pbmcgPSB0cnVlO1xuICBxdWV1ZWQgPSBmYWxzZTtcbiAgdmFyIGNvdW50ID0gMDtcbiAgd2hpbGUgKHRydWUpIHtcbiAgICB2YXIgdGFzayA9IHRhc2tzLnBvcCgpO1xuICAgIGlmICh0YXNrID09PSBidWZmZXJzLkVNUFRZKSB7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgLy8gVE9ETzogRG9uJ3Qgd2UgbmVlZCBhIHRyeS9maW5hbGx5IGhlcmU/XG4gICAgdGFzaygpO1xuICAgIGlmIChjb3VudCA+PSBUQVNLX0JBVENIX1NJWkUpIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBjb3VudCArKztcbiAgfVxuICBydW5uaW5nID0gZmFsc2U7XG4gIGlmICh0YXNrcy5sZW5ndGggPiAwKSB7XG4gICAgcXVldWVfZGlzcGF0Y2hlcigpO1xuICB9XG59XG5cbmlmICh0eXBlb2YgTWVzc2FnZUNoYW5uZWwgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgdmFyIG1lc3NhZ2VfY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICBtZXNzYWdlX2NoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZnVuY3Rpb24oXykge1xuICAgIHByb2Nlc3NfbWVzc2FnZXMoKTtcbiAgfTtcbiAgcXVldWVfZGlzcGF0Y2hlciA9IGZ1bmN0aW9uKCkgIHtcbiAgICBpZiAoIShxdWV1ZWQgJiYgcnVubmluZykpIHtcbiAgICAgIHF1ZXVlZCA9IHRydWU7XG4gICAgICBtZXNzYWdlX2NoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gICAgfVxuICB9O1xufSBlbHNlIGlmICh0eXBlb2Ygc2V0SW1tZWRpYXRlICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIHF1ZXVlX2Rpc3BhdGNoZXIgPSBmdW5jdGlvbigpIHtcbiAgICBpZiAoIShxdWV1ZWQgJiYgcnVubmluZykpIHtcbiAgICAgIHF1ZXVlZCA9IHRydWU7XG4gICAgICBzZXRJbW1lZGlhdGUocHJvY2Vzc19tZXNzYWdlcyk7XG4gICAgfVxuICB9O1xufSBlbHNlIHtcbiAgcXVldWVfZGlzcGF0Y2hlciA9IGZ1bmN0aW9uKCkge1xuICAgIGlmICghKHF1ZXVlZCAmJiBydW5uaW5nKSkge1xuICAgICAgcXVldWVkID0gdHJ1ZTtcbiAgICAgIHNldFRpbWVvdXQocHJvY2Vzc19tZXNzYWdlcywgMCk7XG4gICAgfVxuICB9O1xufVxuXG5leHBvcnRzLnJ1biA9IGZ1bmN0aW9uIChmKSB7XG4gIHRhc2tzLnVuYm91bmRlZF91bnNoaWZ0KGYpO1xuICBxdWV1ZV9kaXNwYXRjaGVyKCk7XG59O1xuXG5leHBvcnRzLnF1ZXVlX2RlbGF5ID0gZnVuY3Rpb24oZiwgZGVsYXkpIHtcbiAgc2V0VGltZW91dChmLCBkZWxheSk7XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vanMtY3NwL3NyYy9pbXBsL2Rpc3BhdGNoLmpzXG4gKiogbW9kdWxlIGlkID0gMTk1XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIEJveCA9IHJlcXVpcmUoXCIuL2NoYW5uZWxzXCIpLkJveDtcblxudmFyIEFsdEhhbmRsZXIgPSBmdW5jdGlvbihmbGFnLCBmKSB7XG4gIHRoaXMuZiA9IGY7XG4gIHRoaXMuZmxhZyA9IGZsYWc7XG59O1xuXG5BbHRIYW5kbGVyLnByb3RvdHlwZS5pc19hY3RpdmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMuZmxhZy52YWx1ZTtcbn07XG5cbkFsdEhhbmRsZXIucHJvdG90eXBlLmlzX2Jsb2NrYWJsZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbkFsdEhhbmRsZXIucHJvdG90eXBlLmNvbW1pdCA9IGZ1bmN0aW9uKCkge1xuICB0aGlzLmZsYWcudmFsdWUgPSBmYWxzZTtcbiAgcmV0dXJuIHRoaXMuZjtcbn07XG5cbnZhciBBbHRSZXN1bHQgPSBmdW5jdGlvbih2YWx1ZSwgY2hhbm5lbCkge1xuICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gIHRoaXMuY2hhbm5lbCA9IGNoYW5uZWw7XG59O1xuXG5mdW5jdGlvbiByYW5kX2ludChuKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobiArIDEpKTtcbn1cblxuZnVuY3Rpb24gcmFuZG9tX2FycmF5KG4pIHtcbiAgdmFyIGEgPSBuZXcgQXJyYXkobik7XG4gIHZhciBpO1xuICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgYVtpXSA9IDA7XG4gIH1cbiAgZm9yIChpID0gMTsgaSA8IG47IGkrKykge1xuICAgIHZhciBqID0gcmFuZF9pbnQoaSk7XG4gICAgYVtpXSA9IGFbal07XG4gICAgYVtqXSA9IGk7XG4gIH1cbiAgcmV0dXJuIGE7XG59XG5cbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG5cbnZhciBERUZBVUxUID0ge1xuICB0b1N0cmluZzogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIFwiW29iamVjdCBERUZBVUxUXVwiO1xuICB9XG59O1xuXG4vLyBUT0RPOiBBY2NlcHQgYSBwcmlvcml0eSBmdW5jdGlvbiBvciBzb21ldGhpbmdcbmV4cG9ydHMuZG9fYWx0cyA9IGZ1bmN0aW9uKG9wZXJhdGlvbnMsIGNhbGxiYWNrLCBvcHRpb25zKSB7XG4gIHZhciBsZW5ndGggPSBvcGVyYXRpb25zLmxlbmd0aDtcbiAgLy8gWFhYIEhtbVxuICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiRW1wdHkgYWx0IGxpc3RcIik7XG4gIH1cblxuICB2YXIgcHJpb3JpdHkgPSAob3B0aW9ucyAmJiBvcHRpb25zLnByaW9yaXR5KSA/IHRydWUgOiBmYWxzZTtcbiAgaWYgKCFwcmlvcml0eSkge1xuICAgIHZhciBpbmRleGVzID0gcmFuZG9tX2FycmF5KGxlbmd0aCk7XG4gIH1cblxuICB2YXIgZmxhZyA9IG5ldyBCb3godHJ1ZSk7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgIHZhciBvcGVyYXRpb24gPSBvcGVyYXRpb25zW3ByaW9yaXR5ID8gaSA6IGluZGV4ZXNbaV1dO1xuICAgIHZhciBwb3J0LCByZXN1bHQ7XG4gICAgLy8gWFhYIEhtbVxuICAgIGlmIChvcGVyYXRpb24gaW5zdGFuY2VvZiBBcnJheSkge1xuICAgICAgdmFyIHZhbHVlID0gb3BlcmF0aW9uWzFdO1xuICAgICAgcG9ydCA9IG9wZXJhdGlvblswXTtcbiAgICAgIC8vIFdlIHdyYXAgdGhpcyBpbiBhIGZ1bmN0aW9uIHRvIGNhcHR1cmUgdGhlIHZhbHVlIG9mIFwicG9ydFwiLFxuICAgICAgLy8gYmVjYXVzZSBqcycgY2xvc3VyZSBjYXB0dXJlcyB2YXJzIGJ5IFwicmVmZXJlbmNlc1wiLCBub3RcbiAgICAgIC8vIHZhbHVlcy4gXCJsZXQgcG9ydFwiIHdvdWxkIGhhdmUgd29ya2VkLCBidXQgSSBkb24ndCB3YW50IHRvXG4gICAgICAvLyByYWlzZSB0aGUgcnVudGltZSByZXF1aXJlbWVudCB5ZXQuIFRPRE86IFNvIGNoYW5nZSB0aGlzIHdoZW5cbiAgICAgIC8vIG1vc3QgcnVudGltZXMgYXJlIG1vZGVybiBlbm91Z2guXG4gICAgICByZXN1bHQgPSBwb3J0Ll9wdXQodmFsdWUsIChmdW5jdGlvbihwb3J0KSB7XG4gICAgICAgIHJldHVybiBuZXcgQWx0SGFuZGxlcihmbGFnLCBmdW5jdGlvbihvaykge1xuICAgICAgICAgIGNhbGxiYWNrKG5ldyBBbHRSZXN1bHQob2ssIHBvcnQpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KShwb3J0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHBvcnQgPSBvcGVyYXRpb247XG4gICAgICByZXN1bHQgPSBwb3J0Ll90YWtlKChmdW5jdGlvbihwb3J0KSB7XG4gICAgICAgIHJldHVybiBuZXcgQWx0SGFuZGxlcihmbGFnLCBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICAgIGNhbGxiYWNrKG5ldyBBbHRSZXN1bHQodmFsdWUsIHBvcnQpKTtcbiAgICAgICAgfSk7XG4gICAgICB9KShwb3J0KSk7XG4gICAgfVxuICAgIC8vIFhYWCBIbW1cbiAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgQm94KSB7XG4gICAgICBjYWxsYmFjayhuZXcgQWx0UmVzdWx0KHJlc3VsdC52YWx1ZSwgcG9ydCkpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgaWYgKCEocmVzdWx0IGluc3RhbmNlb2YgQm94KVxuICAgICAgJiYgb3B0aW9uc1xuICAgICAgJiYgaGFzT3duUHJvcGVydHkuY2FsbChvcHRpb25zLCBcImRlZmF1bHRcIikpIHtcbiAgICBpZiAoZmxhZy52YWx1ZSkge1xuICAgICAgZmxhZy52YWx1ZSA9IGZhbHNlO1xuICAgICAgY2FsbGJhY2sobmV3IEFsdFJlc3VsdChvcHRpb25zW1wiZGVmYXVsdFwiXSwgREVGQVVMVCkpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0cy5ERUZBVUxUID0gREVGQVVMVDtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2pzLWNzcC9zcmMvaW1wbC9zZWxlY3QuanNcbiAqKiBtb2R1bGUgaWQgPSAxOTZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgZGlzcGF0Y2ggPSByZXF1aXJlKFwiLi9kaXNwYXRjaFwiKTtcbnZhciBzZWxlY3QgPSByZXF1aXJlKFwiLi9zZWxlY3RcIik7XG52YXIgQ2hhbm5lbCA9IHJlcXVpcmUoXCIuL2NoYW5uZWxzXCIpLkNoYW5uZWw7XG5cbnZhciBOT19WQUxVRSA9IHt9O1xuXG52YXIgRm5IYW5kbGVyID0gZnVuY3Rpb24oYmxvY2thYmxlLCBmKSB7XG4gIHRoaXMuZiA9IGY7XG4gIHRoaXMuYmxvY2thYmxlID0gYmxvY2thYmxlO1xufTtcblxuRm5IYW5kbGVyLnByb3RvdHlwZS5pc19hY3RpdmUgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRydWU7XG59O1xuXG5GbkhhbmRsZXIucHJvdG90eXBlLmlzX2Jsb2NrYWJsZSA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5ibG9ja2FibGU7XG59O1xuXG5GbkhhbmRsZXIucHJvdG90eXBlLmNvbW1pdCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5mO1xufTtcblxuZnVuY3Rpb24gcHV0X3RoZW5fY2FsbGJhY2soY2hhbm5lbCwgdmFsdWUsIGNhbGxiYWNrKSB7XG4gIHZhciByZXN1bHQgPSBjaGFubmVsLl9wdXQodmFsdWUsIG5ldyBGbkhhbmRsZXIodHJ1ZSwgY2FsbGJhY2spKTtcbiAgaWYgKHJlc3VsdCAmJiBjYWxsYmFjaykge1xuICAgIGNhbGxiYWNrKHJlc3VsdC52YWx1ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdGFrZV90aGVuX2NhbGxiYWNrKGNoYW5uZWwsIGNhbGxiYWNrKSB7XG4gIHZhciByZXN1bHQgPSBjaGFubmVsLl90YWtlKG5ldyBGbkhhbmRsZXIodHJ1ZSwgY2FsbGJhY2spKTtcbiAgaWYgKHJlc3VsdCkge1xuICAgIGNhbGxiYWNrKHJlc3VsdC52YWx1ZSk7XG4gIH1cbn1cblxudmFyIFByb2Nlc3MgPSBmdW5jdGlvbihnZW4sIG9uRmluaXNoLCBjcmVhdG9yKSB7XG4gIHRoaXMuZ2VuID0gZ2VuO1xuICB0aGlzLmNyZWF0b3JGdW5jID0gY3JlYXRvcjtcbiAgdGhpcy5maW5pc2hlZCA9IGZhbHNlO1xuICB0aGlzLm9uRmluaXNoID0gb25GaW5pc2g7XG59O1xuXG52YXIgSW5zdHJ1Y3Rpb24gPSBmdW5jdGlvbihvcCwgZGF0YSkge1xuICB0aGlzLm9wID0gb3A7XG4gIHRoaXMuZGF0YSA9IGRhdGE7XG59O1xuXG52YXIgVEFLRSA9IFwidGFrZVwiO1xudmFyIFBVVCA9IFwicHV0XCI7XG52YXIgU0xFRVAgPSBcInNsZWVwXCI7XG52YXIgQUxUUyA9IFwiYWx0c1wiO1xuXG4vLyBUT0RPIEZJWCBYWFg6IFRoaXMgaXMgYSAocHJvYmFibHkpIHRlbXBvcmFyeSBoYWNrIHRvIGF2b2lkIGJsb3dpbmdcbi8vIHVwIHRoZSBzdGFjaywgYnV0IGl0IG1lYW5zIGRvdWJsZSBxdWV1ZWluZyB3aGVuIHRoZSB2YWx1ZSBpcyBub3Rcbi8vIGltbWVkaWF0ZWx5IGF2YWlsYWJsZVxuUHJvY2Vzcy5wcm90b3R5cGUuX2NvbnRpbnVlID0gZnVuY3Rpb24ocmVzcG9uc2UpIHtcbiAgdmFyIHNlbGYgPSB0aGlzO1xuICBkaXNwYXRjaC5ydW4oZnVuY3Rpb24oKSB7XG4gICAgc2VsZi5ydW4ocmVzcG9uc2UpO1xuICB9KTtcbn07XG5cblByb2Nlc3MucHJvdG90eXBlLl9kb25lID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgaWYgKCF0aGlzLmZpbmlzaGVkKSB7XG4gICAgdGhpcy5maW5pc2hlZCA9IHRydWU7XG4gICAgdmFyIG9uRmluaXNoID0gdGhpcy5vbkZpbmlzaDtcbiAgICBpZiAodHlwZW9mIG9uRmluaXNoID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGRpc3BhdGNoLnJ1bihmdW5jdGlvbigpIHtcbiAgICAgICAgb25GaW5pc2godmFsdWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59O1xuXG5Qcm9jZXNzLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbihyZXNwb25zZSkge1xuICBpZiAodGhpcy5maW5pc2hlZCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8vIFRPRE86IFNob3VsZG4ndCB3ZSAob3B0aW9uYWxseSkgc3RvcCBlcnJvciBwcm9wYWdhdGlvbiBoZXJlIChhbmRcbiAgLy8gc2lnbmFsIHRoZSBlcnJvciB0aHJvdWdoIGEgY2hhbm5lbCBvciBzb21ldGhpbmcpPyBPdGhlcndpc2UgdGhlXG4gIC8vIHVuY2F1Z2h0IGV4Y2VwdGlvbiB3aWxsIGNyYXNoIHNvbWUgcnVudGltZXMgKGUuZy4gTm9kZSlcbiAgdmFyIGl0ZXIgPSB0aGlzLmdlbi5uZXh0KHJlc3BvbnNlKTtcbiAgaWYgKGl0ZXIuZG9uZSkge1xuICAgIHRoaXMuX2RvbmUoaXRlci52YWx1ZSk7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGlucyA9IGl0ZXIudmFsdWU7XG4gIHZhciBzZWxmID0gdGhpcztcblxuICBpZiAoaW5zIGluc3RhbmNlb2YgSW5zdHJ1Y3Rpb24pIHtcbiAgICBzd2l0Y2ggKGlucy5vcCkge1xuICAgIGNhc2UgUFVUOlxuICAgICAgdmFyIGRhdGEgPSBpbnMuZGF0YTtcbiAgICAgIHB1dF90aGVuX2NhbGxiYWNrKGRhdGEuY2hhbm5lbCwgZGF0YS52YWx1ZSwgZnVuY3Rpb24ob2spIHtcbiAgICAgICAgc2VsZi5fY29udGludWUob2spO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgVEFLRTpcbiAgICAgIHZhciBjaGFubmVsID0gaW5zLmRhdGE7XG4gICAgICB0YWtlX3RoZW5fY2FsbGJhY2soY2hhbm5lbCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgICAgc2VsZi5fY29udGludWUodmFsdWUpO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcblxuICAgIGNhc2UgU0xFRVA6XG4gICAgICB2YXIgbXNlY3MgPSBpbnMuZGF0YTtcbiAgICAgIGRpc3BhdGNoLnF1ZXVlX2RlbGF5KGZ1bmN0aW9uKCkge1xuICAgICAgICBzZWxmLnJ1bihudWxsKTtcbiAgICAgIH0sIG1zZWNzKTtcbiAgICAgIGJyZWFrO1xuXG4gICAgY2FzZSBBTFRTOlxuICAgICAgc2VsZWN0LmRvX2FsdHMoaW5zLmRhdGEub3BlcmF0aW9ucywgZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIHNlbGYuX2NvbnRpbnVlKHJlc3VsdCk7XG4gICAgICB9LCBpbnMuZGF0YS5vcHRpb25zKTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBlbHNlIGlmKGlucyBpbnN0YW5jZW9mIENoYW5uZWwpIHtcbiAgICB2YXIgY2hhbm5lbCA9IGlucztcbiAgICB0YWtlX3RoZW5fY2FsbGJhY2soY2hhbm5lbCwgZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIHNlbGYuX2NvbnRpbnVlKHZhbHVlKTtcbiAgICB9KTtcbiAgfVxuICBlbHNlIHtcbiAgICB0aGlzLl9jb250aW51ZShpbnMpO1xuICB9XG59O1xuXG5mdW5jdGlvbiB0YWtlKGNoYW5uZWwpIHtcbiAgcmV0dXJuIG5ldyBJbnN0cnVjdGlvbihUQUtFLCBjaGFubmVsKTtcbn1cblxuZnVuY3Rpb24gcHV0KGNoYW5uZWwsIHZhbHVlKSB7XG4gIHJldHVybiBuZXcgSW5zdHJ1Y3Rpb24oUFVULCB7XG4gICAgY2hhbm5lbDogY2hhbm5lbCxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHBvbGwoY2hhbm5lbCkge1xuICBpZiAoY2hhbm5lbC5jbG9zZWQpIHtcbiAgICByZXR1cm4gTk9fVkFMVUU7XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gY2hhbm5lbC5fdGFrZShuZXcgRm5IYW5kbGVyKGZhbHNlKSk7XG4gIGlmIChyZXN1bHQpIHtcbiAgICByZXR1cm4gcmVzdWx0LnZhbHVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBOT19WQUxVRTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvZmZlcihjaGFubmVsLCB2YWx1ZSkge1xuICBpZiAoY2hhbm5lbC5jbG9zZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgcmVzdWx0ID0gY2hhbm5lbC5fcHV0KHZhbHVlLCBuZXcgRm5IYW5kbGVyKGZhbHNlKSk7XG4gIGlmIChyZXN1bHQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2xlZXAobXNlY3MpIHtcbiAgcmV0dXJuIG5ldyBJbnN0cnVjdGlvbihTTEVFUCwgbXNlY3MpO1xufVxuXG5mdW5jdGlvbiBhbHRzKG9wZXJhdGlvbnMsIG9wdGlvbnMpIHtcbiAgcmV0dXJuIG5ldyBJbnN0cnVjdGlvbihBTFRTLCB7XG4gICAgb3BlcmF0aW9uczogb3BlcmF0aW9ucyxcbiAgICBvcHRpb25zOiBvcHRpb25zXG4gIH0pO1xufVxuXG5leHBvcnRzLnB1dF90aGVuX2NhbGxiYWNrID0gcHV0X3RoZW5fY2FsbGJhY2s7XG5leHBvcnRzLnRha2VfdGhlbl9jYWxsYmFjayA9IHRha2VfdGhlbl9jYWxsYmFjaztcbmV4cG9ydHMucHV0ID0gcHV0O1xuZXhwb3J0cy50YWtlID0gdGFrZTtcbmV4cG9ydHMub2ZmZXIgPSBvZmZlcjtcbmV4cG9ydHMucG9sbCA9IHBvbGw7XG5leHBvcnRzLnNsZWVwID0gc2xlZXA7XG5leHBvcnRzLmFsdHMgPSBhbHRzO1xuZXhwb3J0cy5JbnN0cnVjdGlvbiA9IEluc3RydWN0aW9uO1xuZXhwb3J0cy5Qcm9jZXNzID0gUHJvY2VzcztcbmV4cG9ydHMuTk9fVkFMVUUgPSBOT19WQUxVRTtcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9+L2pzLWNzcC9zcmMvaW1wbC9wcm9jZXNzLmpzXG4gKiogbW9kdWxlIGlkID0gMTk3XG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGRpc3BhdGNoID0gcmVxdWlyZShcIi4vZGlzcGF0Y2hcIik7XG52YXIgY2hhbm5lbHMgPSByZXF1aXJlKFwiLi9jaGFubmVsc1wiKTtcblxuZXhwb3J0cy50aW1lb3V0ID0gZnVuY3Rpb24gdGltZW91dF9jaGFubmVsKG1zZWNzKSB7XG4gIHZhciBjaGFuID0gY2hhbm5lbHMuY2hhbigpO1xuICBkaXNwYXRjaC5xdWV1ZV9kZWxheShmdW5jdGlvbigpIHtcbiAgICBjaGFuLmNsb3NlKCk7XG4gIH0sIG1zZWNzKTtcbiAgcmV0dXJuIGNoYW47XG59O1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vanMtY3NwL3NyYy9pbXBsL3RpbWVycy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5OFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBCb3ggPSByZXF1aXJlKFwiLi9pbXBsL2NoYW5uZWxzXCIpLkJveDtcblxudmFyIGNzcCA9IHJlcXVpcmUoXCIuL2NzcC5jb3JlXCIpLFxuICAgIGdvID0gY3NwLmdvLFxuICAgIHRha2UgPSBjc3AudGFrZSxcbiAgICBwdXQgPSBjc3AucHV0LFxuICAgIHRha2VBc3luYyA9IGNzcC50YWtlQXN5bmMsXG4gICAgcHV0QXN5bmMgPSBjc3AucHV0QXN5bmMsXG4gICAgYWx0cyA9IGNzcC5hbHRzLFxuICAgIGNoYW4gPSBjc3AuY2hhbixcbiAgICBDTE9TRUQgPSBjc3AuQ0xPU0VEO1xuXG5cbmZ1bmN0aW9uIG1hcEZyb20oZiwgY2gpIHtcbiAgcmV0dXJuIHtcbiAgICBpc19jbG9zZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGNoLmlzX2Nsb3NlZCgpO1xuICAgIH0sXG4gICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgY2guY2xvc2UoKTtcbiAgICB9LFxuICAgIF9wdXQ6IGZ1bmN0aW9uKHZhbHVlLCBoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gY2guX3B1dCh2YWx1ZSwgaGFuZGxlcik7XG4gICAgfSxcbiAgICBfdGFrZTogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgdmFyIHJlc3VsdCA9IGNoLl90YWtlKHtcbiAgICAgICAgaXNfYWN0aXZlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gaGFuZGxlci5pc19hY3RpdmUoKTtcbiAgICAgICAgfSxcbiAgICAgICAgY29tbWl0OiBmdW5jdGlvbigpIHtcbiAgICAgICAgICB2YXIgdGFrZV9jYiA9IGhhbmRsZXIuY29tbWl0KCk7XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm4gdGFrZV9jYih2YWx1ZSA9PT0gQ0xPU0VEID8gQ0xPU0VEIDogZih2YWx1ZSkpO1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICB2YXIgdmFsdWUgPSByZXN1bHQudmFsdWU7XG4gICAgICAgIHJldHVybiBuZXcgQm94KHZhbHVlID09PSBDTE9TRUQgPyBDTE9TRUQgOiBmKHZhbHVlKSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcEludG8oZiwgY2gpIHtcbiAgcmV0dXJuIHtcbiAgICBpc19jbG9zZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGNoLmlzX2Nsb3NlZCgpO1xuICAgIH0sXG4gICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgY2guY2xvc2UoKTtcbiAgICB9LFxuICAgIF9wdXQ6IGZ1bmN0aW9uKHZhbHVlLCBoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gY2guX3B1dChmKHZhbHVlKSwgaGFuZGxlcik7XG4gICAgfSxcbiAgICBfdGFrZTogZnVuY3Rpb24oaGFuZGxlcikge1xuICAgICAgcmV0dXJuIGNoLl90YWtlKGhhbmRsZXIpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyRnJvbShwLCBjaCwgYnVmZmVyT3JOKSB7XG4gIHZhciBvdXQgPSBjaGFuKGJ1ZmZlck9yTik7XG4gIGdvKGZ1bmN0aW9uKigpIHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIHZhbHVlID0geWllbGQgdGFrZShjaCk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBvdXQuY2xvc2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAocCh2YWx1ZSkpIHtcbiAgICAgICAgeWllbGQgcHV0KG91dCwgdmFsdWUpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIGZpbHRlckludG8ocCwgY2gpIHtcbiAgcmV0dXJuIHtcbiAgICBpc19jbG9zZWQ6IGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIGNoLmlzX2Nsb3NlZCgpO1xuICAgIH0sXG4gICAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgICAgY2guY2xvc2UoKTtcbiAgICB9LFxuICAgIF9wdXQ6IGZ1bmN0aW9uKHZhbHVlLCBoYW5kbGVyKSB7XG4gICAgICBpZiAocCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIGNoLl9wdXQodmFsdWUsIGhhbmRsZXIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIG5ldyBCb3goIWNoLmlzX2Nsb3NlZCgpKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIF90YWtlOiBmdW5jdGlvbihoYW5kbGVyKSB7XG4gICAgICByZXR1cm4gY2guX3Rha2UoaGFuZGxlcik7XG4gICAgfVxuICB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmVGcm9tKHAsIGNoKSB7XG4gIHJldHVybiBmaWx0ZXJGcm9tKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuICFwKHZhbHVlKTtcbiAgfSwgY2gpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVJbnRvKHAsIGNoKSB7XG4gIHJldHVybiBmaWx0ZXJJbnRvKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuICFwKHZhbHVlKTtcbiAgfSwgY2gpO1xufVxuXG5mdW5jdGlvbiogbWFwY2F0KGYsIHNyYywgZHN0KSB7XG4gIHdoaWxlICh0cnVlKSB7XG4gICAgdmFyIHZhbHVlID0geWllbGQgdGFrZShzcmMpO1xuICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICBkc3QuY2xvc2UoKTtcbiAgICAgIGJyZWFrO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgc2VxID0gZih2YWx1ZSk7XG4gICAgICB2YXIgbGVuZ3RoID0gc2VxLmxlbmd0aDtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgeWllbGQgcHV0KGRzdCwgc2VxW2ldKTtcbiAgICAgIH1cbiAgICAgIGlmIChkc3QuaXNfY2xvc2VkKCkpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hcGNhdEZyb20oZiwgY2gsIGJ1ZmZlck9yTikge1xuICB2YXIgb3V0ID0gY2hhbihidWZmZXJPck4pO1xuICBnbyhtYXBjYXQsIFtmLCBjaCwgb3V0XSk7XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIG1hcGNhdEludG8oZiwgY2gsIGJ1ZmZlck9yTikge1xuICB2YXIgc3JjID0gY2hhbihidWZmZXJPck4pO1xuICBnbyhtYXBjYXQsIFtmLCBzcmMsIGNoXSk7XG4gIHJldHVybiBzcmM7XG59XG5cbmZ1bmN0aW9uIHBpcGUoc3JjLCBkc3QsIGtlZXBPcGVuKSB7XG4gIGdvKGZ1bmN0aW9uKigpIHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIHZhbHVlID0geWllbGQgdGFrZShzcmMpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgaWYgKCFrZWVwT3Blbikge1xuICAgICAgICAgIGRzdC5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKCEoeWllbGQgcHV0KGRzdCwgdmFsdWUpKSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuICByZXR1cm4gZHN0O1xufVxuXG5mdW5jdGlvbiBzcGxpdChwLCBjaCwgdHJ1ZUJ1ZmZlck9yTiwgZmFsc2VCdWZmZXJPck4pIHtcbiAgdmFyIHRjaCA9IGNoYW4odHJ1ZUJ1ZmZlck9yTik7XG4gIHZhciBmY2ggPSBjaGFuKGZhbHNlQnVmZmVyT3JOKTtcbiAgZ28oZnVuY3Rpb24qKCkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB2YXIgdmFsdWUgPSB5aWVsZCB0YWtlKGNoKTtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIHRjaC5jbG9zZSgpO1xuICAgICAgICBmY2guY2xvc2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB5aWVsZCBwdXQocCh2YWx1ZSkgPyB0Y2ggOiBmY2gsIHZhbHVlKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gW3RjaCwgZmNoXTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlKGYsIGluaXQsIGNoKSB7XG4gIHJldHVybiBnbyhmdW5jdGlvbiooKSB7XG4gICAgdmFyIHJlc3VsdCA9IGluaXQ7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHlpZWxkIHRha2UoY2gpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdCA9IGYocmVzdWx0LCB2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9LCBbXSwgdHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIG9udG8oY2gsIGNvbGwsIGtlZXBPcGVuKSB7XG4gIHJldHVybiBnbyhmdW5jdGlvbiooKSB7XG4gICAgdmFyIGxlbmd0aCA9IGNvbGwubGVuZ3RoO1xuICAgIC8vIEZJWDogU2hvdWxkIGJlIGEgZ2VuZXJpYyBsb29waW5nIGludGVyZmFjZSAoZm9yLi4uaW4/KVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgIHlpZWxkIHB1dChjaCwgY29sbFtpXSk7XG4gICAgfVxuICAgIGlmICgha2VlcE9wZW4pIHtcbiAgICAgIGNoLmNsb3NlKCk7XG4gICAgfVxuICB9KTtcbn1cblxuLy8gVE9ETzogQm91bmRlZD9cbmZ1bmN0aW9uIGZyb21Db2xsKGNvbGwpIHtcbiAgdmFyIGNoID0gY2hhbihjb2xsLmxlbmd0aCk7XG4gIG9udG8oY2gsIGNvbGwpO1xuICByZXR1cm4gY2g7XG59XG5cbmZ1bmN0aW9uIG1hcChmLCBjaHMsIGJ1ZmZlck9yTikge1xuICB2YXIgb3V0ID0gY2hhbihidWZmZXJPck4pO1xuICB2YXIgbGVuZ3RoID0gY2hzLmxlbmd0aDtcbiAgLy8gQXJyYXkgaG9sZGluZyAxIHJvdW5kIG9mIHZhbHVlc1xuICB2YXIgdmFsdWVzID0gbmV3IEFycmF5KGxlbmd0aCk7XG4gIC8vIFRPRE86IE5vdCBzdXJlIHdoeSB3ZSBuZWVkIGEgc2l6ZS0xIGJ1ZmZlciBoZXJlXG4gIHZhciBkY2hhbiA9IGNoYW4oMSk7XG4gIC8vIEhvdyBtYW55IG1vcmUgaXRlbXMgdGhpcyByb3VuZFxuICB2YXIgZGNvdW50O1xuICAvLyBwdXQgY2FsbGJhY2tzIGZvciBlYWNoIGNoYW5uZWxcbiAgdmFyIGRjYWxsYmFja3MgPSBuZXcgQXJyYXkobGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKyspIHtcbiAgICBkY2FsbGJhY2tzW2ldID0gKGZ1bmN0aW9uKGkpIHtcbiAgICAgIHJldHVybiBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgICB2YWx1ZXNbaV0gPSB2YWx1ZTtcbiAgICAgICAgZGNvdW50IC0tO1xuICAgICAgICBpZiAoZGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgcHV0QXN5bmMoZGNoYW4sIHZhbHVlcy5zbGljZSgwKSk7XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfShpKSk7XG4gIH1cbiAgZ28oZnVuY3Rpb24qKCkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBkY291bnQgPSBsZW5ndGg7XG4gICAgICAvLyBXZSBjb3VsZCBqdXN0IGxhdW5jaCBuIGdvcm91dGluZXMgaGVyZSwgYnV0IGZvciBlZmZjaWVuY3kgd2VcbiAgICAgIC8vIGRvbid0XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbmd0aDsgaSArKykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRha2VBc3luYyhjaHNbaV0sIGRjYWxsYmFja3NbaV0pO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gRklYOiBIbW0gd2h5IGNhdGNoaW5nIGhlcmU/XG4gICAgICAgICAgZGNvdW50IC0tO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgdmFsdWVzID0geWllbGQgdGFrZShkY2hhbik7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgbGVuZ3RoOyBpICsrKSB7XG4gICAgICAgIGlmICh2YWx1ZXNbaV0gPT09IENMT1NFRCkge1xuICAgICAgICAgIG91dC5jbG9zZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgeWllbGQgcHV0KG91dCwgZi5hcHBseShudWxsLCB2YWx1ZXMpKTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBtZXJnZShjaHMsIGJ1ZmZlck9yTikge1xuICB2YXIgb3V0ID0gY2hhbihidWZmZXJPck4pO1xuICB2YXIgYWN0aXZlcyA9IGNocy5zbGljZSgwKTtcbiAgZ28oZnVuY3Rpb24qKCkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICBpZiAoYWN0aXZlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB2YXIgciA9IHlpZWxkIGFsdHMoYWN0aXZlcyk7XG4gICAgICB2YXIgdmFsdWUgPSByLnZhbHVlO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgLy8gUmVtb3ZlIGNsb3NlZCBjaGFubmVsXG4gICAgICAgIHZhciBpID0gYWN0aXZlcy5pbmRleE9mKHIuY2hhbm5lbCk7XG4gICAgICAgIGFjdGl2ZXMuc3BsaWNlKGksIDEpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHlpZWxkIHB1dChvdXQsIHZhbHVlKTtcbiAgICB9XG4gICAgb3V0LmNsb3NlKCk7XG4gIH0pO1xuICByZXR1cm4gb3V0O1xufVxuXG5mdW5jdGlvbiBpbnRvKGNvbGwsIGNoKSB7XG4gIHZhciByZXN1bHQgPSBjb2xsLnNsaWNlKDApO1xuICByZXR1cm4gcmVkdWNlKGZ1bmN0aW9uKHJlc3VsdCwgaXRlbSkge1xuICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0sIHJlc3VsdCwgY2gpO1xufVxuXG5mdW5jdGlvbiB0YWtlTihuLCBjaCwgYnVmZmVyT3JOKSB7XG4gIHZhciBvdXQgPSBjaGFuKGJ1ZmZlck9yTik7XG4gIGdvKGZ1bmN0aW9uKigpIHtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG47IGkgKyspIHtcbiAgICAgIHZhciB2YWx1ZSA9IHlpZWxkIHRha2UoY2gpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICB5aWVsZCBwdXQob3V0LCB2YWx1ZSk7XG4gICAgfVxuICAgIG91dC5jbG9zZSgpO1xuICB9KTtcbiAgcmV0dXJuIG91dDtcbn1cblxudmFyIE5PVEhJTkcgPSB7fTtcblxuZnVuY3Rpb24gdW5pcXVlKGNoLCBidWZmZXJPck4pIHtcbiAgdmFyIG91dCA9IGNoYW4oYnVmZmVyT3JOKTtcbiAgdmFyIGxhc3QgPSBOT1RISU5HO1xuICBnbyhmdW5jdGlvbiooKSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHlpZWxkIHRha2UoY2gpO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWUgPT09IGxhc3QpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBsYXN0ID0gdmFsdWU7XG4gICAgICB5aWVsZCBwdXQob3V0LCB2YWx1ZSk7XG4gICAgfVxuICAgIG91dC5jbG9zZSgpO1xuICB9KTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gcGFydGl0aW9uQnkoZiwgY2gsIGJ1ZmZlck9yTikge1xuICB2YXIgb3V0ID0gY2hhbihidWZmZXJPck4pO1xuICB2YXIgcGFydCA9IFtdO1xuICB2YXIgbGFzdCA9IE5PVEhJTkc7XG4gIGdvKGZ1bmN0aW9uKigpIHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIHZhbHVlID0geWllbGQgdGFrZShjaCk7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBpZiAocGFydC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgeWllbGQgcHV0KG91dCwgcGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgb3V0LmNsb3NlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIG5ld0l0ZW0gPSBmKHZhbHVlKTtcbiAgICAgICAgaWYgKG5ld0l0ZW0gPT09IGxhc3QgfHwgbGFzdCA9PT0gTk9USElORykge1xuICAgICAgICAgIHBhcnQucHVzaCh2YWx1ZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgeWllbGQgcHV0KG91dCwgcGFydCk7XG4gICAgICAgICAgcGFydCA9IFt2YWx1ZV07XG4gICAgICAgIH1cbiAgICAgICAgbGFzdCA9IG5ld0l0ZW07XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG91dDtcbn1cblxuZnVuY3Rpb24gcGFydGl0aW9uKG4sIGNoLCBidWZmZXJPck4pIHtcbiAgdmFyIG91dCA9IGNoYW4oYnVmZmVyT3JOKTtcbiAgZ28oZnVuY3Rpb24qKCkge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB2YXIgcGFydCA9IG5ldyBBcnJheShuKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHlpZWxkIHRha2UoY2gpO1xuICAgICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgeWllbGQgcHV0KG91dCwgcGFydC5zbGljZSgwLCBpKSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIG91dC5jbG9zZSgpO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBwYXJ0W2ldID0gdmFsdWU7XG4gICAgICB9XG4gICAgICB5aWVsZCBwdXQob3V0LCBwYXJ0KTtcbiAgICB9XG4gIH0pO1xuICByZXR1cm4gb3V0O1xufVxuXG4vLyBGb3IgY2hhbm5lbCBpZGVudGlmaWNhdGlvblxudmFyIGdlbklkID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgaSA9IDA7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICBpICsrO1xuICAgIHJldHVybiBcIlwiICsgaTtcbiAgfTtcbn0pKCk7XG5cbnZhciBJRF9BVFRSID0gXCJfX2NzcF9jaGFubmVsX2lkXCI7XG5cbi8vIFRPRE86IERvIHdlIG5lZWQgdG8gY2hlY2sgd2l0aCBoYXNPd25Qcm9wZXJ0eT9cbmZ1bmN0aW9uIGxlbihvYmopIHtcbiAgdmFyIGNvdW50ID0gMDtcbiAgZm9yICh2YXIgcCBpbiBvYmopIHtcbiAgICBjb3VudCArKztcbiAgfVxuICByZXR1cm4gY291bnQ7XG59XG5cbmZ1bmN0aW9uIGNoYW5JZChjaCkge1xuICB2YXIgaWQgPSBjaFtJRF9BVFRSXTtcbiAgaWYgKGlkID09PSB1bmRlZmluZWQpIHtcbiAgICBpZCA9IGNoW0lEX0FUVFJdID0gZ2VuSWQoKTtcbiAgfVxuICByZXR1cm4gaWQ7XG59XG5cbnZhciBNdWx0ID0gZnVuY3Rpb24oY2gpIHtcbiAgdGhpcy50YXBzID0ge307XG4gIHRoaXMuY2ggPSBjaDtcbn07XG5cbnZhciBUYXAgPSBmdW5jdGlvbihjaGFubmVsLCBrZWVwT3Blbikge1xuICB0aGlzLmNoYW5uZWwgPSBjaGFubmVsO1xuICB0aGlzLmtlZXBPcGVuID0ga2VlcE9wZW47XG59O1xuXG5NdWx0LnByb3RvdHlwZS5tdXhjaCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5jaDtcbn07XG5cbk11bHQucHJvdG90eXBlLnRhcCA9IGZ1bmN0aW9uKGNoLCBrZWVwT3Blbikge1xuICB2YXIgaWQgPSBjaGFuSWQoY2gpO1xuICB0aGlzLnRhcHNbaWRdID0gbmV3IFRhcChjaCwga2VlcE9wZW4pO1xufTtcblxuTXVsdC5wcm90b3R5cGUudW50YXAgPSBmdW5jdGlvbihjaCkge1xuICBkZWxldGUgdGhpcy50YXBzW2NoYW5JZChjaCldO1xufTtcblxuTXVsdC5wcm90b3R5cGUudW50YXBBbGwgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy50YXBzID0ge307XG59O1xuXG5mdW5jdGlvbiBtdWx0KGNoKSB7XG4gIHZhciBtID0gbmV3IE11bHQoY2gpO1xuICB2YXIgZGNoYW4gPSBjaGFuKDEpO1xuICB2YXIgZGNvdW50O1xuICBmdW5jdGlvbiBtYWtlRG9uZUNhbGxiYWNrKHRhcCkge1xuICAgIHJldHVybiBmdW5jdGlvbihzdGlsbE9wZW4pIHtcbiAgICAgIGRjb3VudCAtLTtcbiAgICAgIGlmIChkY291bnQgPT09IDApIHtcbiAgICAgICAgcHV0QXN5bmMoZGNoYW4sIHRydWUpO1xuICAgICAgfVxuICAgICAgaWYgKCFzdGlsbE9wZW4pIHtcbiAgICAgICAgbS51bnRhcCh0YXAuY2hhbm5lbCk7XG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBnbyhmdW5jdGlvbiooKSB7XG4gICAgd2hpbGUgKHRydWUpIHtcbiAgICAgIHZhciB2YWx1ZSA9IHlpZWxkIHRha2UoY2gpO1xuICAgICAgdmFyIGlkLCB0O1xuICAgICAgdmFyIHRhcHMgPSBtLnRhcHM7XG4gICAgICBpZiAodmFsdWUgPT09IENMT1NFRCkge1xuICAgICAgICBmb3IgKGlkIGluIHRhcHMpIHtcbiAgICAgICAgICB0ID0gdGFwc1tpZF07XG4gICAgICAgICAgaWYgKCF0LmtlZXBPcGVuKSB7XG4gICAgICAgICAgICB0LmNoYW5uZWwuY2xvc2UoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gVE9ETzogSXMgdGhpcyBuZWNlc3Nhcnk/XG4gICAgICAgIG0udW50YXBBbGwoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBkY291bnQgPSBsZW4odGFwcyk7XG4gICAgICAvLyBYWFg6IFRoaXMgaXMgYmVjYXVzZSBwdXRBc3luYyBjYW4gYWN0dWFsbHkgY2FsbCBiYWNrXG4gICAgICAvLyBpbW1lZGlhdGVseS4gRml4IHRoYXRcbiAgICAgIHZhciBpbml0RGNvdW50ID0gZGNvdW50O1xuICAgICAgLy8gUHV0IHZhbHVlIG9uIHRhcHBpbmcgY2hhbm5lbHMuLi5cbiAgICAgIGZvciAoaWQgaW4gdGFwcykge1xuICAgICAgICB0ID0gdGFwc1tpZF07XG4gICAgICAgIHB1dEFzeW5jKHQuY2hhbm5lbCwgdmFsdWUsIG1ha2VEb25lQ2FsbGJhY2sodCkpO1xuICAgICAgfVxuICAgICAgLy8gLi4uIHdhaXRpbmcgZm9yIGFsbCBwdXRzIHRvIGNvbXBsZXRlXG4gICAgICBpZiAoaW5pdERjb3VudCA+IDApIHtcbiAgICAgICAgeWllbGQgdGFrZShkY2hhbik7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG07XG59XG5cbm11bHQudGFwID0gZnVuY3Rpb24gdGFwKG0sIGNoLCBrZWVwT3Blbikge1xuICBtLnRhcChjaCwga2VlcE9wZW4pO1xuICByZXR1cm4gY2g7XG59O1xuXG5tdWx0LnVudGFwID0gZnVuY3Rpb24gdW50YXAobSwgY2gpIHtcbiAgbS51bnRhcChjaCk7XG59O1xuXG5tdWx0LnVudGFwQWxsID0gZnVuY3Rpb24gdW50YXBBbGwobSkge1xuICBtLnVudGFwQWxsKCk7XG59O1xuXG52YXIgTWl4ID0gZnVuY3Rpb24oY2gpIHtcbiAgdGhpcy5jaCA9IGNoO1xuICB0aGlzLnN0YXRlTWFwID0ge307XG4gIHRoaXMuY2hhbmdlID0gY2hhbigpO1xuICB0aGlzLnNvbG9Nb2RlID0gbWl4Lk1VVEU7XG59O1xuXG5NaXgucHJvdG90eXBlLl9jaGFuZ2VkID0gZnVuY3Rpb24oKSB7XG4gIHB1dEFzeW5jKHRoaXMuY2hhbmdlLCB0cnVlKTtcbn07XG5cbk1peC5wcm90b3R5cGUuX2dldEFsbFN0YXRlID0gZnVuY3Rpb24oKSB7XG4gIHZhciBhbGxTdGF0ZSA9IHt9O1xuICB2YXIgc3RhdGVNYXAgPSB0aGlzLnN0YXRlTWFwO1xuICB2YXIgc29sb3MgPSBbXTtcbiAgdmFyIG11dGVzID0gW107XG4gIHZhciBwYXVzZXMgPSBbXTtcbiAgdmFyIHJlYWRzO1xuICBmb3IgKHZhciBpZCBpbiBzdGF0ZU1hcCkge1xuICAgIHZhciBjaGFuRGF0YSA9IHN0YXRlTWFwW2lkXTtcbiAgICB2YXIgc3RhdGUgPSBjaGFuRGF0YS5zdGF0ZTtcbiAgICB2YXIgY2hhbm5lbCA9IGNoYW5EYXRhLmNoYW5uZWw7XG4gICAgaWYgKHN0YXRlW21peC5TT0xPXSkge1xuICAgICAgc29sb3MucHVzaChjaGFubmVsKTtcbiAgICB9XG4gICAgLy8gVE9ET1xuICAgIGlmIChzdGF0ZVttaXguTVVURV0pIHtcbiAgICAgIG11dGVzLnB1c2goY2hhbm5lbCk7XG4gICAgfVxuICAgIGlmIChzdGF0ZVttaXguUEFVU0VdKSB7XG4gICAgICBwYXVzZXMucHVzaChjaGFubmVsKTtcbiAgICB9XG4gIH1cbiAgdmFyIGksIG47XG4gIGlmICh0aGlzLnNvbG9Nb2RlID09PSBtaXguUEFVU0UgJiYgc29sb3MubGVuZ3RoID4gMCkge1xuICAgIG4gPSBzb2xvcy5sZW5ndGg7XG4gICAgcmVhZHMgPSBuZXcgQXJyYXkobiArIDEpO1xuICAgIGZvciAoaSA9IDA7IGkgPCBuOyBpKyspIHtcbiAgICAgIHJlYWRzW2ldID0gc29sb3NbaV07XG4gICAgfVxuICAgIHJlYWRzW25dID0gdGhpcy5jaGFuZ2U7XG4gIH0gZWxzZSB7XG4gICAgcmVhZHMgPSBbXTtcbiAgICBmb3IgKGlkIGluIHN0YXRlTWFwKSB7XG4gICAgICBjaGFuRGF0YSA9IHN0YXRlTWFwW2lkXTtcbiAgICAgIGNoYW5uZWwgPSBjaGFuRGF0YS5jaGFubmVsO1xuICAgICAgaWYgKHBhdXNlcy5pbmRleE9mKGNoYW5uZWwpIDwgMCkge1xuICAgICAgICByZWFkcy5wdXNoKGNoYW5uZWwpO1xuICAgICAgfVxuICAgIH1cbiAgICByZWFkcy5wdXNoKHRoaXMuY2hhbmdlKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgc29sb3M6IHNvbG9zLFxuICAgIG11dGVzOiBtdXRlcyxcbiAgICByZWFkczogcmVhZHNcbiAgfTtcbn07XG5cbk1peC5wcm90b3R5cGUuYWRtaXggPSBmdW5jdGlvbihjaCkge1xuICB0aGlzLnN0YXRlTWFwW2NoYW5JZChjaCldID0ge1xuICAgIGNoYW5uZWw6IGNoLFxuICAgIHN0YXRlOiB7fVxuICB9O1xuICB0aGlzLl9jaGFuZ2VkKCk7XG59O1xuXG5NaXgucHJvdG90eXBlLnVubWl4ID0gZnVuY3Rpb24oY2gpIHtcbiAgZGVsZXRlIHRoaXMuc3RhdGVNYXBbY2hhbklkKGNoKV07XG4gIHRoaXMuX2NoYW5nZWQoKTtcbn07XG5cbk1peC5wcm90b3R5cGUudW5taXhBbGwgPSBmdW5jdGlvbigpIHtcbiAgdGhpcy5zdGF0ZU1hcCA9IHt9O1xuICB0aGlzLl9jaGFuZ2VkKCk7XG59O1xuXG5NaXgucHJvdG90eXBlLnRvZ2dsZSA9IGZ1bmN0aW9uKHVwZGF0ZVN0YXRlTGlzdCkge1xuICAvLyBbW2NoMSwge31dLCBbY2gyLCB7c29sbzogdHJ1ZX1dXTtcbiAgdmFyIGxlbmd0aCA9IHVwZGF0ZVN0YXRlTGlzdC5sZW5ndGg7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgY2ggPSB1cGRhdGVTdGF0ZUxpc3RbaV1bMF07XG4gICAgdmFyIGlkID0gY2hhbklkKGNoKTtcbiAgICB2YXIgdXBkYXRlU3RhdGUgPSB1cGRhdGVTdGF0ZUxpc3RbaV1bMV07XG4gICAgdmFyIGNoYW5EYXRhID0gdGhpcy5zdGF0ZU1hcFtpZF07XG4gICAgaWYgKCFjaGFuRGF0YSkge1xuICAgICAgY2hhbkRhdGEgPSB0aGlzLnN0YXRlTWFwW2lkXSA9IHtcbiAgICAgICAgY2hhbm5lbDogY2gsXG4gICAgICAgIHN0YXRlOiB7fVxuICAgICAgfTtcbiAgICB9XG4gICAgZm9yICh2YXIgbW9kZSBpbiB1cGRhdGVTdGF0ZSkge1xuICAgICAgY2hhbkRhdGEuc3RhdGVbbW9kZV0gPSB1cGRhdGVTdGF0ZVttb2RlXTtcbiAgICB9XG4gIH1cbiAgdGhpcy5fY2hhbmdlZCgpO1xufTtcblxuTWl4LnByb3RvdHlwZS5zZXRTb2xvTW9kZSA9IGZ1bmN0aW9uKG1vZGUpIHtcbiAgaWYgKFZBTElEX1NPTE9fTU9ERVMuaW5kZXhPZihtb2RlKSA8IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJNb2RlIG11c3QgYmUgb25lIG9mOiBcIiwgVkFMSURfU09MT19NT0RFUy5qb2luKFwiLCBcIikpO1xuICB9XG4gIHRoaXMuc29sb01vZGUgPSBtb2RlO1xuICB0aGlzLl9jaGFuZ2VkKCk7XG59O1xuXG5mdW5jdGlvbiBtaXgob3V0KSB7XG4gIHZhciBtID0gbmV3IE1peChvdXQpO1xuICBnbyhmdW5jdGlvbiooKSB7XG4gICAgdmFyIHN0YXRlID0gbS5fZ2V0QWxsU3RhdGUoKTtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIHJlc3VsdCA9IHlpZWxkIGFsdHMoc3RhdGUucmVhZHMpO1xuICAgICAgdmFyIHZhbHVlID0gcmVzdWx0LnZhbHVlO1xuICAgICAgdmFyIGNoYW5uZWwgPSByZXN1bHQuY2hhbm5lbDtcbiAgICAgIGlmICh2YWx1ZSA9PT0gQ0xPU0VEKSB7XG4gICAgICAgIGRlbGV0ZSBtLnN0YXRlTWFwW2NoYW5JZChjaGFubmVsKV07XG4gICAgICAgIHN0YXRlID0gbS5fZ2V0QWxsU3RhdGUoKTtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAoY2hhbm5lbCA9PT0gbS5jaGFuZ2UpIHtcbiAgICAgICAgc3RhdGUgPSBtLl9nZXRBbGxTdGF0ZSgpO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHZhciBzb2xvcyA9IHN0YXRlLnNvbG9zO1xuICAgICAgaWYgKHNvbG9zLmluZGV4T2YoY2hhbm5lbCkgPiAtMSB8fFxuICAgICAgICAgIChzb2xvcy5sZW5ndGggPT09IDAgJiYgIShzdGF0ZS5tdXRlcy5pbmRleE9mKGNoYW5uZWwpID4gLTEpKSkge1xuICAgICAgICB2YXIgc3RpbGxPcGVuID0geWllbGQgcHV0KG91dCwgdmFsdWUpO1xuICAgICAgICBpZiAoIXN0aWxsT3Blbikge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIG07XG59XG5cbm1peC5NVVRFID0gXCJtdXRlXCI7XG5taXguUEFVU0UgPSBcInBhdXNlXCI7XG5taXguU09MTyA9IFwic29sb1wiO1xudmFyIFZBTElEX1NPTE9fTU9ERVMgPSBbbWl4Lk1VVEUsIG1peC5QQVVTRV07XG5cbm1peC5hZGQgPSBmdW5jdGlvbiBhZG1peChtLCBjaCkge1xuICBtLmFkbWl4KGNoKTtcbn07XG5cbm1peC5yZW1vdmUgPSBmdW5jdGlvbiB1bm1peChtLCBjaCkge1xuICBtLnVubWl4KGNoKTtcbn07XG5cbm1peC5yZW1vdmVBbGwgPSBmdW5jdGlvbiB1bm1peEFsbChtKSB7XG4gIG0udW5taXhBbGwoKTtcbn07XG5cbm1peC50b2dnbGUgPSBmdW5jdGlvbiB0b2dnbGUobSwgdXBkYXRlU3RhdGVMaXN0KSB7XG4gIG0udG9nZ2xlKHVwZGF0ZVN0YXRlTGlzdCk7XG59O1xuXG5taXguc2V0U29sb01vZGUgPSBmdW5jdGlvbiBzZXRTb2xvTW9kZShtLCBtb2RlKSB7XG4gIG0uc2V0U29sb01vZGUobW9kZSk7XG59O1xuXG5mdW5jdGlvbiBjb25zdGFudGx5TnVsbCgpIHtcbiAgcmV0dXJuIG51bGw7XG59XG5cbnZhciBQdWIgPSBmdW5jdGlvbihjaCwgdG9waWNGbiwgYnVmZmVyRm4pIHtcbiAgdGhpcy5jaCA9IGNoO1xuICB0aGlzLnRvcGljRm4gPSB0b3BpY0ZuO1xuICB0aGlzLmJ1ZmZlckZuID0gYnVmZmVyRm47XG4gIHRoaXMubXVsdHMgPSB7fTtcbn07XG5cblB1Yi5wcm90b3R5cGUuX2Vuc3VyZU11bHQgPSBmdW5jdGlvbih0b3BpYykge1xuICB2YXIgbSA9IHRoaXMubXVsdHNbdG9waWNdO1xuICB2YXIgYnVmZmVyRm4gPSB0aGlzLmJ1ZmZlckZuO1xuICBpZiAoIW0pIHtcbiAgICBtID0gdGhpcy5tdWx0c1t0b3BpY10gPSBtdWx0KGNoYW4oYnVmZmVyRm4odG9waWMpKSk7XG4gIH1cbiAgcmV0dXJuIG07XG59O1xuXG5QdWIucHJvdG90eXBlLnN1YiA9IGZ1bmN0aW9uKHRvcGljLCBjaCwga2VlcE9wZW4pIHtcbiAgdmFyIG0gPSB0aGlzLl9lbnN1cmVNdWx0KHRvcGljKTtcbiAgcmV0dXJuIG11bHQudGFwKG0sIGNoLCBrZWVwT3Blbik7XG59O1xuXG5QdWIucHJvdG90eXBlLnVuc3ViID0gZnVuY3Rpb24odG9waWMsIGNoKSB7XG4gIHZhciBtID0gdGhpcy5tdWx0c1t0b3BpY107XG4gIGlmIChtKSB7XG4gICAgbXVsdC51bnRhcChtLCBjaCk7XG4gIH1cbn07XG5cblB1Yi5wcm90b3R5cGUudW5zdWJBbGwgPSBmdW5jdGlvbih0b3BpYykge1xuICBpZiAodG9waWMgPT09IHVuZGVmaW5lZCkge1xuICAgIHRoaXMubXVsdHMgPSB7fTtcbiAgfSBlbHNlIHtcbiAgICBkZWxldGUgdGhpcy5tdWx0c1t0b3BpY107XG4gIH1cbn07XG5cbmZ1bmN0aW9uIHB1YihjaCwgdG9waWNGbiwgYnVmZmVyRm4pIHtcbiAgYnVmZmVyRm4gPSBidWZmZXJGbiB8fCBjb25zdGFudGx5TnVsbDtcbiAgdmFyIHAgPSBuZXcgUHViKGNoLCB0b3BpY0ZuLCBidWZmZXJGbik7XG4gIGdvKGZ1bmN0aW9uKigpIHtcbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgdmFyIHZhbHVlID0geWllbGQgdGFrZShjaCk7XG4gICAgICB2YXIgbXVsdHMgPSBwLm11bHRzO1xuICAgICAgdmFyIHRvcGljO1xuICAgICAgaWYgKHZhbHVlID09PSBDTE9TRUQpIHtcbiAgICAgICAgZm9yICh0b3BpYyBpbiBtdWx0cykge1xuICAgICAgICAgIG11bHRzW3RvcGljXS5tdXhjaCgpLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICAvLyBUT0RPOiBTb21laG93IGVuc3VyZS9kb2N1bWVudCB0aGF0IHRoaXMgbXVzdCByZXR1cm4gYSBzdHJpbmdcbiAgICAgIC8vIChvdGhlcndpc2UgdXNlIHByb3BlciAoaGFzaCltYXBzKVxuICAgICAgdG9waWMgPSB0b3BpY0ZuKHZhbHVlKTtcbiAgICAgIHZhciBtID0gbXVsdHNbdG9waWNdO1xuICAgICAgaWYgKG0pIHtcbiAgICAgICAgdmFyIHN0aWxsT3BlbiA9IHlpZWxkIHB1dChtLm11eGNoKCksIHZhbHVlKTtcbiAgICAgICAgaWYgKCFzdGlsbE9wZW4pIHtcbiAgICAgICAgICBkZWxldGUgbXVsdHNbdG9waWNdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIHA7XG59XG5cbnB1Yi5zdWIgPSBmdW5jdGlvbiBzdWIocCwgdG9waWMsIGNoLCBrZWVwT3Blbikge1xuICByZXR1cm4gcC5zdWIodG9waWMsIGNoLCBrZWVwT3Blbik7XG59O1xuXG5wdWIudW5zdWIgPSBmdW5jdGlvbiB1bnN1YihwLCB0b3BpYywgY2gpIHtcbiAgcC51bnN1Yih0b3BpYywgY2gpO1xufTtcblxucHViLnVuc3ViQWxsID0gZnVuY3Rpb24gdW5zdWJBbGwocCwgdG9waWMpIHtcbiAgcC51bnN1YkFsbCh0b3BpYyk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgbWFwRnJvbTogbWFwRnJvbSxcbiAgbWFwSW50bzogbWFwSW50byxcbiAgZmlsdGVyRnJvbTogZmlsdGVyRnJvbSxcbiAgZmlsdGVySW50bzogZmlsdGVySW50byxcbiAgcmVtb3ZlRnJvbTogcmVtb3ZlRnJvbSxcbiAgcmVtb3ZlSW50bzogcmVtb3ZlSW50byxcbiAgbWFwY2F0RnJvbTogbWFwY2F0RnJvbSxcbiAgbWFwY2F0SW50bzogbWFwY2F0SW50byxcblxuICBwaXBlOiBwaXBlLFxuICBzcGxpdDogc3BsaXQsXG4gIHJlZHVjZTogcmVkdWNlLFxuICBvbnRvOiBvbnRvLFxuICBmcm9tQ29sbDogZnJvbUNvbGwsXG5cbiAgbWFwOiBtYXAsXG4gIG1lcmdlOiBtZXJnZSxcbiAgaW50bzogaW50byxcbiAgdGFrZTogdGFrZU4sXG4gIHVuaXF1ZTogdW5pcXVlLFxuICBwYXJ0aXRpb246IHBhcnRpdGlvbixcbiAgcGFydGl0aW9uQnk6IHBhcnRpdGlvbkJ5LFxuXG4gIG11bHQ6IG11bHQsXG4gIG1peDogbWl4LFxuICBwdWI6IHB1YlxufTtcblxuXG4vLyBQb3NzaWJsZSBcImZsdWlkXCIgaW50ZXJmYWNlczpcblxuLy8gdGhyZWFkKFxuLy8gICBbZnJvbUNvbGwsIFsxLCAyLCAzLCA0XV0sXG4vLyAgIFttYXBGcm9tLCBpbmNdLFxuLy8gICBbaW50bywgW11dXG4vLyApXG5cbi8vIHRocmVhZChcbi8vICAgW2Zyb21Db2xsLCBbMSwgMiwgMywgNF1dLFxuLy8gICBbbWFwRnJvbSwgaW5jLCBfXSxcbi8vICAgW2ludG8sIFtdLCBfXVxuLy8gKVxuXG4vLyB3cmFwKClcbi8vICAgLmZyb21Db2xsKFsxLCAyLCAzLCA0XSlcbi8vICAgLm1hcEZyb20oaW5jKVxuLy8gICAuaW50byhbXSlcbi8vICAgLnVud3JhcCgpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vanMtY3NwL3NyYy9jc3Aub3BlcmF0aW9ucy5qc1xuICoqIG1vZHVsZSBpZCA9IDE5OVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBjc3AgPSByZXF1aXJlKCcuL2NzcC5jb3JlJyk7XG5cbmZ1bmN0aW9uIHBpcGVsaW5lSW50ZXJuYWwobiwgdG8sIGZyb20sIGNsb3NlLCB0YXNrRm4pIHtcbiAgaWYgKG4gPD0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignbiBtdXN0IGJlIHBvc2l0aXZlJyk7XG4gIH1cblxuICB2YXIgam9icyA9IGNzcC5jaGFuKG4pO1xuICB2YXIgcmVzdWx0cyA9IGNzcC5jaGFuKG4pO1xuXG4gIGZvcih2YXIgXyA9IDA7IF8gPCBuOyBfKyspIHtcbiAgICBjc3AuZ28oZnVuY3Rpb24qICh0YXNrRm4sIGpvYnMsIHJlc3VsdHMpIHtcbiAgICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICAgIHZhciBqb2IgPSB5aWVsZCBjc3AudGFrZShqb2JzKTtcblxuICAgICAgICBpZiAoIXRhc2tGbihqb2IpKSB7XG4gICAgICAgICAgcmVzdWx0cy5jbG9zZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSwgW3Rhc2tGbiwgam9icywgcmVzdWx0c10pO1xuICB9XG5cbiAgY3NwLmdvKGZ1bmN0aW9uKiAoam9icywgZnJvbSwgcmVzdWx0cykge1xuICAgIHdoaWxlICh0cnVlKSB7XG4gICAgICB2YXIgdiA9IHlpZWxkIGNzcC50YWtlKGZyb20pO1xuICAgICAgaWYgKHYgPT09IGNzcC5DTE9TRUQpIHtcbiAgICAgICAgam9icy5jbG9zZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBwID0gY3NwLmNoYW4oMSk7XG5cbiAgICAgICAgeWllbGQgY3NwLnB1dChqb2JzLCBbdiwgcF0pO1xuICAgICAgICB5aWVsZCBjc3AucHV0KHJlc3VsdHMsIHApO1xuICAgICAgfVxuICAgIH1cbiAgfSwgW2pvYnMsIGZyb20sIHJlc3VsdHNdKTtcblxuICBjc3AuZ28oZnVuY3Rpb24qIChyZXN1bHRzLCBjbG9zZSwgdG8pIHtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgcCA9IHlpZWxkIGNzcC50YWtlKHJlc3VsdHMpO1xuICAgICAgaWYgKHAgPT09IGNzcC5DTE9TRUQpIHtcbiAgICAgICAgaWYgKGNsb3NlKSB7XG4gICAgICAgICAgdG8uY2xvc2UoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciByZXMgPSB5aWVsZCBjc3AudGFrZShwKTtcbiAgICAgICAgd2hpbGUodHJ1ZSkge1xuICAgICAgICAgIHZhciB2ID0geWllbGQgY3NwLnRha2UocmVzKTtcbiAgICAgICAgICBpZiAodiAhPT0gY3NwLkNMT1NFRCkge1xuICAgICAgICAgICAgeWllbGQgY3NwLnB1dCh0bywgdik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSwgW3Jlc3VsdHMsIGNsb3NlLCB0b10pO1xuXG4gIHJldHVybiB0bztcbn1cblxuZnVuY3Rpb24gcGlwZWxpbmUodG8sIHhmLCBmcm9tLCBrZWVwT3BlbiwgZXhIYW5kbGVyKSB7XG5cbiAgZnVuY3Rpb24gdGFza0ZuKGpvYikge1xuICAgIGlmIChqb2IgPT09IGNzcC5DTE9TRUQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdiA9IGpvYlswXTtcbiAgICAgIHZhciBwID0gam9iWzFdO1xuICAgICAgdmFyIHJlcyA9IGNzcC5jaGFuKDEsIHhmLCBleEhhbmRsZXIpO1xuXG4gICAgICBjc3AuZ28oZnVuY3Rpb24qIChyZXMsIHYpIHtcbiAgICAgICAgeWllbGQgY3NwLnB1dChyZXMsIHYpO1xuICAgICAgICByZXMuY2xvc2UoKTtcbiAgICAgIH0sIFtyZXMsIHZdKTtcblxuICAgICAgY3NwLnB1dEFzeW5jKHAsIHJlcyk7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwaXBlbGluZUludGVybmFsKDEsIHRvLCBmcm9tLCAha2VlcE9wZW4sIHRhc2tGbik7XG59XG5cbmZ1bmN0aW9uIHBpcGVsaW5lQXN5bmMobiwgdG8sIGFmLCBmcm9tLCBrZWVwT3Blbikge1xuXG4gIGZ1bmN0aW9uIHRhc2tGbihqb2IpIHtcbiAgICBpZiAoam9iID09PSBjc3AuQ0xPU0VEKSB7XG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHYgPSBqb2JbMF07XG4gICAgICB2YXIgcCA9IGpvYlsxXTtcbiAgICAgIHZhciByZXMgPSBjc3AuY2hhbigxKTtcbiAgICAgIGFmKHYsIHJlcyk7XG4gICAgICBjc3AucHV0QXN5bmMocCwgcmVzKTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBwaXBlbGluZUludGVybmFsKG4sIHRvLCBmcm9tLCAha2VlcE9wZW4sIHRhc2tGbik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBwaXBlbGluZTogcGlwZWxpbmUsXG4gIHBpcGVsaW5lQXN5bmM6IHBpcGVsaW5lQXN5bmNcbn07XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9qcy1jc3Avc3JjL2NzcC5waXBlbGluZS5qc1xuICoqIG1vZHVsZSBpZCA9IDIwMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgZ2V0b3B0IGZyb20gJ25vZGUtZ2V0b3B0JztcbmltcG9ydCBmcyBmcm9tICdmcyc7XG5pbXBvcnQgcGF0aCBmcm9tICdwYXRoJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlndXJlIHtcbiAgY29uc3RydWN0b3IoKSB7XG5cdFx0dGhpcy5vcHRzID0gZ2V0b3B0LmNyZWF0ZShbXG5cdFx0XHRbJ3InLCAncmFwdG9yPUFSRycgLCAnd2hlcmUgdGhlIHJhcHRvciBleGVjdXRhYmxlIGZpbGUgaXMnXSxcblx0XHRcdFsncCcsICdwaGFzZT1BUkcnICwgJ3doZXJlIHRoZSBydW5uaW5nIHBoYXNlIGlzJ10sXG5cdFx0XHRbJ2MnLCAnY29uZmlnPUFSRycsICdjb25maWcgZmlsZSAoY29tbWFuZCBsaW5lIGFyZ3VtZW50cyB3aWxsIHN1cnBhc3MgaXQpJ10sXG4gICAgICBbJycsICAnYWRiPUFSRycsICd3aGVyZSB0aGUgYGFkYmAgY29tbWFuZCBpc2AnXSxcblx0XHRcdFsnJywgICdyZWNvcmQtdGFyZ2V0LWRldmljZT1BUkcnLCAnd2hlcmUgdG8gcHV0IHRoZSByZWNvcmQgb24gdGhlIGRldmljZSddLFxuXHRcdFx0WycnLCAgJ3JlY29yZC10YXJnZXQtY29uc29sZT1BUkcnLCAnd2hlcmUgdG8gcHVsbCB0aGUgcmVjb3JkIHRvIHRoZSBjb25zb2xlJ10sXG4gICAgICBbJ3InLCAncm91dGVycz1BUkcrJywgJ2ludm9rZSB3aGF0IHJvdXRlcnMnXSxcbiAgICAgIFsnJywgICdtYWluPUFSRycsICdkZWZhdWx0IGlzIFJhcHRvcjsgb25jZSBpdCBlbmRzIHRoZSBwcm9jZXNzIHdpbGwgZW5kLCB0b28nXSxcblx0XHRcdFsnaCcsICdoZWxwJywgJ2Rpc3BsYXkgdGhpcyBoZWxwJ10sXG5cdFx0XHRbJ3YnLCAndmVyc2lvbicsICdzaG93IHZlcnNpb24nXVxuXHRcdF0pXG5cdFx0LmJpbmRIZWxwKCdVc2FnZTogYmVob2xkZXIgPHRlc3QtZmlsZS1wYXRoPiAtLTxvcHRpb25hbCBvcHRpb25zPicpO1xuICAgIC8vIFRPRE86IHByaW50IGFsbCBhdmFpbGFibGUgcm91dGVycyBhZnRlciBzb21lIHNwZWNpYWwgaGVscCBjb21tYW5kLlxuXHR9XG5cbiAgc2V0dXAoKSB7XG4gICAgcmV0dXJuIHRoaXMuYnVpbGQoLi4udGhpcy5nZXRvcHRzKCkpO1xuICB9XG5cbiAgLyoqXG4gICAqIFdpbGwgdGhyb3cgZXJyb3Igd2hlbiBjYXJyeWluZyBpbnZhbGlkIG9wdGlvbnMuXG4gICAqL1xuICBidWlsZChhcmd2LCBvcHRpb25zKSB7XG4gICAgbGV0IHRlc3RGaWxlUGF0aHMgPSBhcmd2O1xuICAgIHRoaXMudmFsaWRhdGVUZXN0RmlsZXModGVzdEZpbGVQYXRocyk7XG4gICAgbGV0IGNvbmZpZ3MgPSB0aGlzLmZyb21PcHRpb25zKG9wdGlvbnMpO1xuICAgIGNvbmZpZ3MudGVzdHMgPSB0ZXN0RmlsZVBhdGhzO1xuICAgIHRoaXMudmFsaWRhdGVNb2R1bGVDb21tYW5kcyhjb25maWdzKTtcbiAgICByZXR1cm4gY29uZmlncztcbiAgfVxuXG4gIGdldG9wdHMoKSB7XG4gICAgbGV0IHBhcnNlZE9wdGlvbnMgPSB0aGlzLm9wdHMucGFyc2VTeXN0ZW0oKTtcblx0XHQvLyBwYXJzZSBjb21tYW5kIGxpbmUgYW5kIGdldCB0aGUgcmVzdWx0LlxuXHRcdHRoaXMub3B0cyA9IHBhcnNlZE9wdGlvbnMub3B0aW9ucztcbiAgICB0aGlzLmFyZ3YgPSBwYXJzZWRPcHRpb25zLmFyZ3Y7XG5cdFx0cmV0dXJuIFt0aGlzLmFyZ3YsIHRoaXMub3B0c107XG4gIH1cblxuICB2YWxpZGF0ZVRlc3RGaWxlcyh0ZXN0RmlsZVBhdGhzKSB7XG4gICAgaWYgKDAgPT09IHRlc3RGaWxlUGF0aHMubGVuZ3RoKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ011c3Qgc3BlY2lmeSB0ZXN0IGZpbGVzLicgK1xuICAgICAgICAnRXhhbXBsZTogYmVob2xkZXIgdGVzdC0xLmpzIHRlc3QtMi5qcycpO1xuICAgIH1cbiAgICB0ZXN0RmlsZVBhdGhzLmZvckVhY2goKHBhdGgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZzLmFjY2Vzc1N5bmMocGF0aCk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQ2Fubm90IGFjY2VzcyB0aGUgdGVzdDogJywgcGF0aCk7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YWxpZGF0ZVJhcHRvcihjb25maWdzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGZzLmFjY2Vzc1N5bmMoY29uZmlncy5wYXRoLnJhcHRvcik7XG4gICAgfSBjYXRjaChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGBDYW5ub3QgYWNjZXNzIHRoZSBSYXB0b3IgY29tbWFuZDogXCIke2NvbmZpZ3MucGF0aC5yYXB0b3J9XCJgKTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVQaGFzZShjb25maWdzKSB7XG4gICAgdHJ5IHtcbiAgICAgIGZzLmFjY2Vzc1N5bmMoY29uZmlncy5wYXRoLnBoYXNlKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYENhbm5vdCBhY2Nlc3MgdGhlIHJ1bm5pbmcgcGhhc2U6IFwiJHtjb25maWdzLnBhdGgucGhhc2V9XCJgKTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG5cbiAgdmFsaWRhdGVBbmRyb2lkRGFlbW9uQnVzKGNvbmZpZ3MpIHtcbiAgICB0cnkge1xuICAgICAgZnMuYWNjZXNzU3luYyhjb25maWdzLnBhdGguYWRiKTtcbiAgICB9IGNhdGNoKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoYENhbm5vdCBhY2Nlc3MgdGhlIEFuZHJvaWQgZGFlbW9uIGJ1czogXCIke2NvbmZpZ3MucGF0aC5hZGJ9XCJgKTtcbiAgICAgIHRocm93IGU7XG4gICAgfVxuICB9XG5cblx0dmFsaWRhdGVSZWNvcmRDb25zb2xlVGFyZ2V0KGNvbmZpZ3MpIHtcbiAgICB0cnkge1xuICAgICAgZnMuYWNjZXNzU3luYyhwYXRoLmRpcm5hbWUoY29uZmlncy5wYXRoLnJlY29yZC50YXJnZXQuY29uc29sZSkpO1xuICAgIH0gY2F0Y2goZSkge1xuICAgICAgY29uc29sZS5lcnJvcihgQ2Fubm90IGFjY2VzcyB0aGUgdGFyZ2V0IHRvIHB1dCB0aGUgdGFyZ2V0OiBcIiR7Y29uZmlncy5wYXRoLnJlY29yZC50YXJnZXQuY29uc29sZX1cImApO1xuICAgICAgdGhyb3cgZTtcbiAgICB9XG5cdH1cblxuICB2YWxpZGF0ZU1vZHVsZUNvbW1hbmRzKGNvbmZpZ3MpIHtcbiAgICBmb3IgKGxldCBtb2R1bGVJZGVuZGl0eSBvZiBjb25maWdzLnJvdXRlcnMpIHtcbiAgICAgIHN3aXRjaChtb2R1bGVJZGVuZGl0eSkge1xuICAgICAgICBjYXNlICdyYXB0b3InOlxuICAgICAgICAgIHRoaXMudmFsaWRhdGVSYXB0b3IoY29uZmlncyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BoYXNlJzpcbiAgICAgICAgICB0aGlzLnZhbGlkYXRlUGhhc2UoY29uZmlncyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2FkYic6XG4gICAgICAgICAgdGhpcy52YWxpZGF0ZUFuZHJvaWREYWVtb25CdXMoY29uZmlncyk7XG4gICAgICAgICAgYnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3NjcmVlbnJlY29yZCc6XG4gICAgICAgICAgdGhpcy52YWxpZGF0ZUFuZHJvaWREYWVtb25CdXMoY29uZmlncyk7XG5cdFx0XHRcdFx0dGhpcy52YWxpZGF0ZVJlY29yZENvbnNvbGVUYXJnZXQoY29uZmlncyk7XG5cdFx0XHRcdFx0YnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnJvbU9wdGlvbnMob3B0aW9ucykge1xuICAgIGxldCBkZWZhdWx0Q29uZmlncztcbiAgICBvcHRpb25zLmNvbmZpZyA9IG9wdGlvbnMuY29uZmlnO1xuICAgIGlmIChvcHRpb25zLmNvbmZpZykge1xuICAgICAgZGVmYXVsdENvbmZpZ3MgPSByZXF1aXJlKG9wdGlvbnMuY29uZmlnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGVmYXVsdENvbmZpZ3MgPSB0aGlzLmdlbmVyYXRlRGVmYXVsdENvbmZpZ3MoKTtcbiAgICB9XG5cbiAgICAvLyBPdmVyd3JpdGUgdGhlIGV4aXN0ZW50IG9uZSBpbiB0aGUgZGVmYXVsdCBmaWxlLlxuICAgIGRlZmF1bHRDb25maWdzLnBhdGgucGhhc2UgPSBvcHRpb25zLnBoYXNlIHx8IGRlZmF1bHRDb25maWdzLnBhdGgucGhhc2U7XG4gICAgZGVmYXVsdENvbmZpZ3MucGF0aC5yYXB0b3IgPSBvcHRpb25zLnJhcHRvciB8fCBkZWZhdWx0Q29uZmlncy5wYXRoLnJhcHRvcjtcbiAgICBkZWZhdWx0Q29uZmlncy5wYXRoLmFkYiA9IG9wdGlvbnMuYWRiIHx8IGRlZmF1bHRDb25maWdzLnBhdGguYWRiO1xuXG5cdFx0Ly8gRm9yIFNjcmVlblJlY29yZCBtb2R1bGUuXG4gICAgZGVmYXVsdENvbmZpZ3MucGF0aC5yZWNvcmQgPSBkZWZhdWx0Q29uZmlncy5wYXRoLnJlY29yZCB8fCB7XG5cdFx0XHR0YXJnZXQ6IHsgY29uc29sZTogbnVsbCwgZGV2aWNlOiBudWxsIH1cblx0XHR9O1xuXHRcdGRlZmF1bHRDb25maWdzLnBhdGgucmVjb3JkLnRhcmdldC5kZXZpY2UgPSBvcHRpb25zWydyZWNvcmQtdGFyZ2V0LWRldmljZSddIHx8XG5cdFx0XHRkZWZhdWx0Q29uZmlncy5wYXRoLnJlY29yZC50YXJnZXQuZGV2aWNlO1xuXHRcdGRlZmF1bHRDb25maWdzLnBhdGgucmVjb3JkLnRhcmdldC5jb25zb2xlID0gb3B0aW9uc1sncmVjb3JkLXRhcmdldC1jb25zb2xlJ10gfHxcblx0XHRcdGRlZmF1bHRDb25maWdzLnBhdGgucmVjb3JkLnRhcmdldC5jb25zb2xlO1xuXG4gICAgZGVmYXVsdENvbmZpZ3Mucm91dGVycyA9IG9wdGlvbnMucm91dGVyc3x8IGRlZmF1bHRDb25maWdzLnJvdXRlcnMgfHwgW107XG4gICAgZGVmYXVsdENvbmZpZ3Mucm91dGVycy5fX21haW5fXyA9IG9wdGlvbnNbJ21haW4nXSB8fFxuICAgICAgZGVmYXVsdENvbmZpZ3Mucm91dGVycy5fX21haW5fX3x8ICdyYXB0b3InO1xuXG4gICAgaWYgKCFkZWZhdWx0Q29uZmlncy5yb3V0ZXJzLmluY2x1ZGVzKCdzaWduYWwnKSkge1xuICAgICAgZGVmYXVsdENvbmZpZ3Mucm91dGVycy5wdXNoKCdzaWduYWwnKTtcbiAgICB9XG4gICAgcmV0dXJuIGRlZmF1bHRDb25maWdzO1xuICB9XG5cbiAgZ2VuZXJhdGVEZWZhdWx0Q29uZmlncygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgcGF0aDoge1xuICAgICAgICBwaGFzZTogJycsXG4gICAgICAgIHJhcHRvcjogJydcbiAgICAgIH0sXG4gICAgICB0ZXN0czogW11cbiAgICB9O1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9Db25maWd1cmUuanNcbiAqKi8iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoX19kaXJuYW1lICsgJy9saWIvZ2V0b3B0LmpzJyk7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vfi9ub2RlLWdldG9wdC9pbmRleC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwMlxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwiLy8gR2VuZXJhdGVkIGJ5IFRvZmZlZVNjcmlwdCAxLjQuMFxuKGZ1bmN0aW9uKCkge1xuICB2YXIgR2V0b3B0LCBQYXJzZWRPcHRpb24sXG4gICAgX19oYXNQcm9wID0ge30uaGFzT3duUHJvcGVydHksXG4gICAgX19tYXRjaGVzID0gbnVsbDtcblxuICBQYXJzZWRPcHRpb24gPSAoZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiBQYXJzZWRPcHRpb24oYXJndiwgb3B0aW9ucykge1xuICAgICAgdGhpcy5hcmd2ID0gYXJndjtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgfVxuXG4gICAgUGFyc2VkT3B0aW9uLnByb3RvdHlwZS5lbXB0eSA9IGZ1bmN0aW9uKCkge1xuICAgICAgdmFyIGssIHYsIF9yZWY7XG4gICAgICBpZiAodGhpcy5hcmd2Lmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBfcmVmID0gdGhpcy5vcHRpb25zO1xuICAgICAgZm9yIChrIGluIF9yZWYpIHtcbiAgICAgICAgaWYgKCFfX2hhc1Byb3AuY2FsbChfcmVmLCBrKSkgY29udGludWU7XG4gICAgICAgIHYgPSBfcmVmW2tdO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIFBhcnNlZE9wdGlvbjtcblxuICB9KSgpO1xuXG4gIEdldG9wdCA9IChmdW5jdGlvbigpIHtcblxuICAgIEdldG9wdC5IQVNfQVJHVU1FTlQgPSB0cnVlO1xuXG4gICAgR2V0b3B0Lk5PX0FSR1VNRU5UID0gZmFsc2U7XG5cbiAgICBHZXRvcHQuTVVMVElfU1VQUE9SVEVEID0gdHJ1ZTtcblxuICAgIEdldG9wdC5TSU5HTEVfT05MWSA9IGZhbHNlO1xuXG4gICAgR2V0b3B0LlZFUlNJT04gPSAnMC4yLjMnO1xuXG4gICAgZnVuY3Rpb24gR2V0b3B0KG9wdGlvbnMpIHtcbiAgICAgIHZhciBjb21tZW50LCBkZWZpbml0aW9uLCBoYXNfYXJndW1lbnQsIGxvbmdfbmFtZSwgbXVsdGlfc3VwcG9ydGVkLCBuYW1lLCBvcHRpb24sIG9wdGlvbmFsLCBzaG9ydF9uYW1lLCBfaSwgX2xlbiwgX3JlZjtcbiAgICAgIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG4gICAgICB0aGlzLnNob3J0X29wdGlvbnMgPSB7fTtcbiAgICAgIHRoaXMubG9uZ19vcHRpb25zID0ge307XG4gICAgICB0aGlzLmxvbmdfbmFtZXMgPSBbXTtcbiAgICAgIHRoaXMuZXZlbnRzID0ge307XG4gICAgICB0aGlzLmV2ZW50X25hbWVzID0gW107XG4gICAgICB0aGlzLmVycm9yRnVuYyA9IGZ1bmN0aW9uKGUpIHtcbiAgICAgICAgY29uc29sZS5pbmZvKGUubWVzc2FnZSk7XG4gICAgICAgIHJldHVybiBwcm9jZXNzLmV4aXQoMSk7XG4gICAgICB9O1xuICAgICAgaWYgKHByb2Nlc3MuYXJndlsxXSkge1xuICAgICAgICB0aGlzLmhlbHAgPSBcIlVzYWdlOiBub2RlIFwiICsgKHByb2Nlc3MuYXJndlsxXS5tYXRjaCgvKD86LipbXFwvXFxcXF0pPyguKikkLylbMV0pICsgXCJcXG5cXG5bW09QVElPTlNdXVxcblwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5oZWxwID0gXCJbW09QVElPTlNdXVwiO1xuICAgICAgfVxuICAgICAgX3JlZiA9IHRoaXMub3B0aW9ucztcbiAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICBvcHRpb24gPSBfcmVmW19pXTtcbiAgICAgICAgc2hvcnRfbmFtZSA9IG9wdGlvblswXSwgZGVmaW5pdGlvbiA9IG9wdGlvblsxXSwgY29tbWVudCA9IG9wdGlvblsyXTtcbiAgICAgICAgaWYgKGNvbW1lbnQgPT0gbnVsbCkge1xuICAgICAgICAgIGNvbW1lbnQgPSAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmaW5pdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgZGVmaW5pdGlvbiA9ICcnO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaG9ydF9uYW1lID09IG51bGwpIHtcbiAgICAgICAgICBzaG9ydF9uYW1lID0gJyc7XG4gICAgICAgIH1cbiAgICAgICAgKF9fbWF0Y2hlcyA9IGRlZmluaXRpb24ubWF0Y2goL14oW1xcd1xcLV0qKS8pKTtcbiAgICAgICAgbG9uZ19uYW1lID0gX19tYXRjaGVzWzFdO1xuICAgICAgICBoYXNfYXJndW1lbnQgPSBkZWZpbml0aW9uLmluZGV4T2YoJz0nKSAhPT0gLTE7XG4gICAgICAgIG11bHRpX3N1cHBvcnRlZCA9IGRlZmluaXRpb24uaW5kZXhPZignKycpICE9PSAtMTtcbiAgICAgICAgb3B0aW9uYWwgPSAvXFxbPS4qP1xcXS8udGVzdChkZWZpbml0aW9uKTtcbiAgICAgICAgbG9uZ19uYW1lID0gbG9uZ19uYW1lLnRyaW0oKTtcbiAgICAgICAgc2hvcnRfbmFtZSA9IHNob3J0X25hbWUudHJpbSgpO1xuICAgICAgICBpZiAob3B0aW9uYWwgJiYgc2hvcnRfbmFtZSkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcignb3B0aW9uYWwgYXJndW1lbnQgY2FuIG9ubHkgd29yayB3aXRoIGxvbmcgb3B0aW9uJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFsb25nX25hbWUpIHtcbiAgICAgICAgICBsb25nX25hbWUgPSBzaG9ydF9uYW1lO1xuICAgICAgICB9XG4gICAgICAgIG5hbWUgPSBsb25nX25hbWU7XG4gICAgICAgIGlmIChsb25nX25hbWUgPT09ICcnKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiZW1wdHkgb3B0aW9uIGZvdW5kLiB0aGUgbGFzdCBvcHRpb24gbmFtZSBpcyBcIiArICh0aGlzLmxvbmdfbmFtZXMuc2xpY2UoLTEpKSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubG9uZ19vcHRpb25zW2xvbmdfbmFtZV0gPT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMubG9uZ19uYW1lcy5wdXNoKGxvbmdfbmFtZSk7XG4gICAgICAgICAgdGhpcy5sb25nX29wdGlvbnNbbG9uZ19uYW1lXSA9IHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICBzaG9ydF9uYW1lOiBzaG9ydF9uYW1lLFxuICAgICAgICAgICAgbG9uZ19uYW1lOiBsb25nX25hbWUsXG4gICAgICAgICAgICBoYXNfYXJndW1lbnQ6IGhhc19hcmd1bWVudCxcbiAgICAgICAgICAgIG11bHRpX3N1cHBvcnRlZDogbXVsdGlfc3VwcG9ydGVkLFxuICAgICAgICAgICAgY29tbWVudDogY29tbWVudCxcbiAgICAgICAgICAgIG9wdGlvbmFsOiBvcHRpb25hbCxcbiAgICAgICAgICAgIGRlZmluaXRpb246IGRlZmluaXRpb25cbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIm9wdGlvbiBcIiArIGxvbmdfbmFtZSArIFwiIHJlZGVmaW5lZC5cIik7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNob3J0X25hbWUgIT09ICcnKSB7XG4gICAgICAgICAgaWYgKHNob3J0X25hbWUubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3Nob3J0IG9wdGlvbiBtdXN0IGJlIHNpbmdsZSBjaGFyYWN0ZXJzJyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRoaXMuc2hvcnRfb3B0aW9uc1tzaG9ydF9uYW1lXSA9IHRoaXMubG9uZ19vcHRpb25zW2xvbmdfbmFtZV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXM7XG4gICAgfVxuXG4gICAgR2V0b3B0LnByb3RvdHlwZS5vbiA9IGZ1bmN0aW9uKG5hbWUsIGNiKSB7XG4gICAgICB0aGlzLmV2ZW50c1tuYW1lXSA9IGNiO1xuICAgICAgdGhpcy5ldmVudF9uYW1lcy5wdXNoKG5hbWUpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEdldG9wdC5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uKG5hbWUsIGNiKSB7XG4gICAgICBpZiAodGhpcy5ldmVudHNbbmFtZV0pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZXZlbnRzW25hbWVdLmNhbGwodGhpcywgdGhpcy5wYXJzZWRPcHRpb24uYXJndiwgdGhpcy5wYXJzZWRPcHRpb24ub3B0aW9ucyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJHZXRvcHQgdHJpZ2dlciAnXCIgKyBuYW1lICsgXCInIGlzIG5vdCBmb3VuZFwiKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgR2V0b3B0LnByb3RvdHlwZS50cmlnZ2VyX2V2ZW50c18gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBuYW1lLCBvcHRpb25zLCBfaSwgX2xlbiwgX3JlZjtcbiAgICAgIG9wdGlvbnMgPSB0aGlzLnBhcnNlZE9wdGlvbi5vcHRpb25zO1xuICAgICAgX3JlZiA9IHRoaXMuZXZlbnRfbmFtZXM7XG4gICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IF9yZWYubGVuZ3RoOyBfaSA8IF9sZW47IF9pKyspIHtcbiAgICAgICAgbmFtZSA9IF9yZWZbX2ldO1xuICAgICAgICBpZiAob3B0aW9uc1tuYW1lXSAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5lbWl0KG5hbWUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgR2V0b3B0LnByb3RvdHlwZS5zYXZlX29wdGlvbl8gPSBmdW5jdGlvbihvcHRpb25zLCBvcHRpb24sIGFyZ3YpIHtcbiAgICAgIHZhciBuYW1lLCBuYW1lcywgdmFsdWUsIF9pLCBfbGVuLCBfcmVmO1xuICAgICAgaWYgKG9wdGlvbi5oYXNfYXJndW1lbnQpIHtcbiAgICAgICAgaWYgKGFyZ3YubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwib3B0aW9uIFwiICsgb3B0aW9uLmxvbmdfbmFtZSArIFwiIG5lZWQgYXJndW1lbnRcIik7XG4gICAgICAgIH1cbiAgICAgICAgdmFsdWUgPSBhcmd2LnNoaWZ0KCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YWx1ZSA9IHRydWU7XG4gICAgICB9XG4gICAgICBuYW1lcyA9IFtvcHRpb24ubmFtZV07XG4gICAgICBmb3IgKF9pID0gMCwgX2xlbiA9IG5hbWVzLmxlbmd0aDsgX2kgPCBfbGVuOyBfaSsrKSB7XG4gICAgICAgIG5hbWUgPSBuYW1lc1tfaV07XG4gICAgICAgIGlmIChvcHRpb24ubXVsdGlfc3VwcG9ydGVkKSB7XG4gICAgICAgICAgaWYgKChfcmVmID0gb3B0aW9uc1tuYW1lXSkgPT0gbnVsbCkge1xuICAgICAgICAgICAgb3B0aW9uc1tuYW1lXSA9IFtdO1xuICAgICAgICAgIH1cbiAgICAgICAgICBvcHRpb25zW25hbWVdLnB1c2godmFsdWUpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9wdGlvbnNbbmFtZV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuICAgIEdldG9wdC5wcm90b3R5cGUucGFyc2UgPSBmdW5jdGlvbihhcmd2KSB7XG4gICAgICB2YXIgYXJnLCBpLCBsb25nX25hbWUsIG9wdGlvbiwgcnRfYXJndiwgcnRfb3B0aW9ucywgc2hvcnRfbmFtZSwgc2hvcnRfbmFtZXMsIHZhbHVlLCBfaSwgX2xlbjtcbiAgICAgIHRyeSB7XG4gICAgICAgIGFyZ3YgPSBhcmd2LnNsaWNlKDApO1xuICAgICAgICBydF9vcHRpb25zID0ge307XG4gICAgICAgIHJ0X2FyZ3YgPSBbXTtcbiAgICAgICAgd2hpbGUgKChhcmcgPSBhcmd2LnNoaWZ0KCkpICE9IG51bGwpIHtcbiAgICAgICAgICBpZiAoKF9fbWF0Y2hlcyA9IGFyZy5tYXRjaCgvXi0oXFx3W1xcd1xcLV0qKS8pKSkge1xuICAgICAgICAgICAgc2hvcnRfbmFtZXMgPSBfX21hdGNoZXNbMV07XG4gICAgICAgICAgICBmb3IgKGkgPSBfaSA9IDAsIF9sZW4gPSBzaG9ydF9uYW1lcy5sZW5ndGg7IF9pIDwgX2xlbjsgaSA9ICsrX2kpIHtcbiAgICAgICAgICAgICAgc2hvcnRfbmFtZSA9IHNob3J0X25hbWVzW2ldO1xuICAgICAgICAgICAgICBvcHRpb24gPSB0aGlzLnNob3J0X29wdGlvbnNbc2hvcnRfbmFtZV07XG4gICAgICAgICAgICAgIGlmICghb3B0aW9uKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiaW52YWxpZCBvcHRpb24gXCIgKyBzaG9ydF9uYW1lKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAob3B0aW9uLmhhc19hcmd1bWVudCkge1xuICAgICAgICAgICAgICAgIGlmIChpIDwgYXJnLmxlbmd0aCAtIDIpIHtcbiAgICAgICAgICAgICAgICAgIGFyZ3YudW5zaGlmdChhcmcuc2xpY2UoaSArIDIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5zYXZlX29wdGlvbl8ocnRfb3B0aW9ucywgb3B0aW9uLCBhcmd2KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNhdmVfb3B0aW9uXyhydF9vcHRpb25zLCBvcHRpb24sIGFyZ3YpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICgoX19tYXRjaGVzID0gYXJnLm1hdGNoKC9eLS0oXFx3W1xcd1xcLV0qKSgoPzo9LiopPykkLykpKSB7XG4gICAgICAgICAgICBsb25nX25hbWUgPSBfX21hdGNoZXNbMV07XG4gICAgICAgICAgICB2YWx1ZSA9IF9fbWF0Y2hlc1syXTtcbiAgICAgICAgICAgIG9wdGlvbiA9IHRoaXMubG9uZ19vcHRpb25zW2xvbmdfbmFtZV07XG4gICAgICAgICAgICBpZiAoIW9wdGlvbikge1xuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJpbnZhbGlkIG9wdGlvbiBcIiArIGxvbmdfbmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsdWUgIT09ICcnKSB7XG4gICAgICAgICAgICAgIHZhbHVlID0gdmFsdWUuc2xpY2UoMSk7XG4gICAgICAgICAgICAgIGFyZ3YudW5zaGlmdCh2YWx1ZSk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9wdGlvbi5vcHRpb25hbCkge1xuICAgICAgICAgICAgICBhcmd2LnVuc2hpZnQoJycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5zYXZlX29wdGlvbl8ocnRfb3B0aW9ucywgb3B0aW9uLCBhcmd2KTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGFyZyA9PT0gJy0tJykge1xuICAgICAgICAgICAgcnRfYXJndiA9IHJ0X2FyZ3YuY29uY2F0KGFyZ3YpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJ0X2FyZ3YucHVzaChhcmcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICB0aGlzLmVycm9yRnVuYyhlKTtcbiAgICAgIH1cbiAgICAgIHRoaXMucGFyc2VkT3B0aW9uID0gbmV3IFBhcnNlZE9wdGlvbihydF9hcmd2LCBydF9vcHRpb25zKTtcbiAgICAgIHRoaXMudHJpZ2dlcl9ldmVudHNfKCk7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZWRPcHRpb247XG4gICAgfTtcblxuICAgIEdldG9wdC5wcm90b3R5cGUucGFyc2Vfc3lzdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZShwcm9jZXNzLmFyZ3Yuc2xpY2UoMikpO1xuICAgIH07XG5cbiAgICBHZXRvcHQucHJvdG90eXBlLnBhcnNlU3lzdGVtID0gZnVuY3Rpb24oKSB7XG4gICAgICByZXR1cm4gdGhpcy5wYXJzZV9zeXN0ZW0oKTtcbiAgICB9O1xuXG4gICAgR2V0b3B0LnByb3RvdHlwZS5zZXRIZWxwID0gZnVuY3Rpb24oaGVscCkge1xuICAgICAgdGhpcy5oZWxwID0gaGVscDtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBHZXRvcHQucHJvdG90eXBlLmdldEhlbHAgPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBjb21tZW50LCBkZWZpbml0aW9uLCBsb25nX25hbWUsIG9wdCwgb3B0aW9uLCBvcHRpb25zLCBzaG9ydF9uYW1lLCBzdHJzLCB3cywgX2ksIF9sZW4sIF9yZWY7XG4gICAgICB3cyA9IFtdO1xuICAgICAgb3B0aW9ucyA9IFtdO1xuICAgICAgX3JlZiA9IHRoaXMubG9uZ19uYW1lcztcbiAgICAgIGZvciAoX2kgPSAwLCBfbGVuID0gX3JlZi5sZW5ndGg7IF9pIDwgX2xlbjsgX2krKykge1xuICAgICAgICBsb25nX25hbWUgPSBfcmVmW19pXTtcbiAgICAgICAgb3B0aW9uID0gdGhpcy5sb25nX29wdGlvbnNbbG9uZ19uYW1lXTtcbiAgICAgICAgc2hvcnRfbmFtZSA9IG9wdGlvbi5zaG9ydF9uYW1lLCBsb25nX25hbWUgPSBvcHRpb24ubG9uZ19uYW1lLCBjb21tZW50ID0gb3B0aW9uLmNvbW1lbnQsIGRlZmluaXRpb24gPSBvcHRpb24uZGVmaW5pdGlvbjtcbiAgICAgICAgaWYgKHNob3J0X25hbWUgJiYgc2hvcnRfbmFtZSA9PT0gbG9uZ19uYW1lKSB7XG4gICAgICAgICAgb3B0ID0gXCItXCIgKyBzaG9ydF9uYW1lO1xuICAgICAgICB9IGVsc2UgaWYgKHNob3J0X25hbWUpIHtcbiAgICAgICAgICBvcHQgPSBcIi1cIiArIHNob3J0X25hbWUgKyBcIiwgLS1cIiArIGRlZmluaXRpb247XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb3B0ID0gXCIgICAgLS1cIiArIGRlZmluaXRpb247XG4gICAgICAgIH1cbiAgICAgICAgd3NbMF0gPSBNYXRoLm1heCh3c1swXSA+PiAwLCBvcHQubGVuZ3RoKTtcbiAgICAgICAgb3B0aW9ucy5wdXNoKFtvcHQsIGNvbW1lbnRdKTtcbiAgICAgIH1cbiAgICAgIHN0cnMgPSAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBfaiwgX2xlbjEsIF9yZXN1bHRzO1xuICAgICAgICBfcmVzdWx0cyA9IFtdO1xuICAgICAgICBmb3IgKF9qID0gMCwgX2xlbjEgPSBvcHRpb25zLmxlbmd0aDsgX2ogPCBfbGVuMTsgX2orKykge1xuICAgICAgICAgIG9wdGlvbiA9IG9wdGlvbnNbX2pdO1xuICAgICAgICAgIG9wdCA9IG9wdGlvblswXSwgY29tbWVudCA9IG9wdGlvblsxXTtcbiAgICAgICAgICB3aGlsZSAob3B0Lmxlbmd0aCA8IHdzWzBdKSB7XG4gICAgICAgICAgICBvcHQgKz0gJyAnO1xuICAgICAgICAgIH1cbiAgICAgICAgICBfcmVzdWx0cy5wdXNoKFwiICBcIiArIG9wdCArIFwiICBcIiArIGNvbW1lbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfcmVzdWx0cztcbiAgICAgIH0pKCk7XG4gICAgICByZXR1cm4gdGhpcy5oZWxwLnJlcGxhY2UoJ1tbT1BUSU9OU11dJywgc3Rycy5qb2luKFwiXFxuXCIpKTtcbiAgICB9O1xuXG4gICAgR2V0b3B0LnByb3RvdHlwZS5zaG93SGVscCA9IGZ1bmN0aW9uKCkge1xuICAgICAgY29uc29sZS5pbmZvKHRoaXMuZ2V0SGVscCgpKTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBHZXRvcHQucHJvdG90eXBlLmJpbmRIZWxwID0gZnVuY3Rpb24oaGVscCkge1xuICAgICAgaWYgKGhlbHApIHtcbiAgICAgICAgdGhpcy5zZXRIZWxwKGhlbHApO1xuICAgICAgfVxuICAgICAgdGhpcy5vbignaGVscCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICB0aGlzLnNob3dIZWxwKCk7XG4gICAgICAgIHJldHVybiBwcm9jZXNzLmV4aXQoMCk7XG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH07XG5cbiAgICBHZXRvcHQucHJvdG90eXBlLmdldFZlcnNpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBHZXRvcHQuVkVSU0lPTjtcbiAgICB9O1xuXG4gICAgR2V0b3B0LnByb3RvdHlwZS5lcnJvciA9IGZ1bmN0aW9uKGVycm9yRnVuYykge1xuICAgICAgdGhpcy5lcnJvckZ1bmMgPSBlcnJvckZ1bmM7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4gICAgR2V0b3B0LmdldFZlcnNpb24gPSBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiB0aGlzLlZFUlNJT047XG4gICAgfTtcblxuICAgIEdldG9wdC5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICByZXR1cm4gbmV3IEdldG9wdChvcHRpb25zKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIEdldG9wdDtcblxuICB9KSgpO1xuXG4gIG1vZHVsZS5leHBvcnRzID0gR2V0b3B0O1xuXG59KS5jYWxsKHRoaXMpO1xuXG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiAuL34vbm9kZS1nZXRvcHQvbGliL2dldG9wdC5qc1xuICoqIG1vZHVsZSBpZCA9IDIwM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiZnNcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcImZzXCJcbiAqKiBtb2R1bGUgaWQgPSAyMDRcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhdGhcIik7XG5cblxuLyoqKioqKioqKioqKioqKioqXG4gKiogV0VCUEFDSyBGT09URVJcbiAqKiBleHRlcm5hbCBcInBhdGhcIlxuICoqIG1vZHVsZSBpZCA9IDIwNVxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIiwidmFyIG1hcCA9IHtcblx0XCIuL0NvbmZpZ3VyZVwiOiAyMDEsXG5cdFwiLi9Db25maWd1cmUuanNcIjogMjAxLFxuXHRcIi4vRGVmZXJcIjogMjA3LFxuXHRcIi4vRGVmZXIuanNcIjogMjA3LFxuXHRcIi4vYmVob2xkZXJcIjogMTkwLFxuXHRcIi4vYmVob2xkZXIuanNcIjogMTkwLFxuXHRcIi4vcmVjb3JkL0xvZ1wiOiAyMDgsXG5cdFwiLi9yZWNvcmQvTG9nLmpzXCI6IDIwOCxcblx0XCIuL3JvdXRlcnMvRGV2aWNlTG9nL1JlY29yZGluZ1N0YWdlXCI6IDIwOSxcblx0XCIuL3JvdXRlcnMvRGV2aWNlTG9nL1JlY29yZGluZ1N0YWdlLmpzXCI6IDIwOSxcblx0XCIuL3JvdXRlcnMvTG9nL0NvbGxlY3RpbmdTdGFnZVwiOiAyMTIsXG5cdFwiLi9yb3V0ZXJzL0xvZy9Db2xsZWN0aW5nU3RhZ2UuanNcIjogMjEyLFxuXHRcIi4vcm91dGVycy9Mb2cvUmVjb3JkaW5nU3RhZ2VcIjogMjE0LFxuXHRcIi4vcm91dGVycy9Mb2cvUmVjb3JkaW5nU3RhZ2UuanNcIjogMjE0LFxuXHRcIi4vcm91dGVycy9Mb2cvVGVybWluYXRpbmdTdGFnZVwiOiAyMTMsXG5cdFwiLi9yb3V0ZXJzL0xvZy9UZXJtaW5hdGluZ1N0YWdlLmpzXCI6IDIxMyxcblx0XCIuL3JvdXRlcnMvUm91dGVyXCI6IDIxMSxcblx0XCIuL3JvdXRlcnMvUm91dGVyLmpzXCI6IDIxMSxcblx0XCIuL3JvdXRlcnMvU2lnbmFsL1JlY29yZGluZ1N0YWdlXCI6IDIxNSxcblx0XCIuL3JvdXRlcnMvU2lnbmFsL1JlY29yZGluZ1N0YWdlLmpzXCI6IDIxNVxufTtcbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyh3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSk7XG59O1xuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRyZXR1cm4gbWFwW3JlcV0gfHwgKGZ1bmN0aW9uKCkgeyB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInLlwiKSB9KCkpO1xufTtcbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSAyMDY7XG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vc3JjIF5cXC5cXC8uKiRcbiAqKiBtb2R1bGUgaWQgPSAyMDZcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGVmZXIge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLnByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICB0aGlzLnJlc29sdmUgPSByZXNvbHZlO1xuICAgICAgdGhpcy5yZWplY3QgPSByZWplY3Q7XG4gICAgfSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL0RlZmVyLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMb2cge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLl9zdG9yZSA9IFtdO1xuICB9XG5cbiAgcHVzaChkYXRhKSB7XG4gICAgdGhpcy5fc3RvcmUucHVzaChkYXRhKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcmVjb3JkL0xvZy5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGNzcCBmcm9tICdqcy1jc3AnO1xuaW1wb3J0IGNoaWxkX3Byb2Nlc3MgZnJvbSAnY2hpbGRfcHJvY2Vzcyc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ3JvdXRlcnMvUm91dGVyJztcbmltcG9ydCBEZWZlciBmcm9tICdEZWZlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY29yZGluZ1N0YWdlIGV4dGVuZHMgUm91dGVyIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWdzSW5zdGFuY2UpIHtcbiAgICBzdXBlcihhcmd1bWVudHMpO1xuICAgIHRoaXMuY29uZmlncyA9IGNvbmZpZ3NJbnN0YW5jZTtcbiAgICB0aGlzLl9hZGJQYXRoID0gdGhpcy5jb25maWdzLnBhdGguYWRiO1xuICAgIHRoaXMuX25hbWUgPSAnZGV2aWNlbG9nJztcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIGNvbnNvbGUubG9nKCc+Pj4+PiBkZXZpY2UgbG9nIHJ1bnMnKTtcbiAgICBsZXQgcnVuSXQgPSBjaGlsZF9wcm9jZXNzLnNwYXduKFxuICAgICAgdGhpcy5fYWRiUGF0aCxcbiAgICAgIFsnbG9nY2F0J10sXG4gICAgICB7IGRldGFjaGVkOiB0cnVlIH1cbiAgICApO1xuICAgIGNvbnNvbGUubG9nKCc+Pj4+PiBkZXZpY2UgbG9nIHJ1bnMgc3Bhd24nKTtcbiAgICBydW5JdC51bnJlZigpO1xuICAgIHJ1bkl0LnN0ZG91dC5vbignZGF0YScsIChkYXRhKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZygnPj4+Pj4gZGF0YSBhZGInKTtcbiAgICAgIGNzcC5wdXRBc3luYyh0aGlzLl9vdXRwdXRDaGFubmVsLCB7J3RvcGljJzogJ2xvZycsICdwYXlsb2FkJzogIGRhdGF9KTtcbiAgICB9KTtcbiAgICBydW5JdC5zdGRlcnIub24oJ2RhdGEnLCAoZGF0YSkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJz4+Pj4+IGVycm9yIGFkYicpO1xuICAgICAgY3NwLnB1dEFzeW5jKHRoaXMuX291dHB1dENoYW5uZWwsIHsndG9waWMnOiAnZXJyb3InLCAncGF5bG9hZCc6IGRhdGF9KVxuICAgIH0pO1xuICAgIHJ1bkl0Lm9uKCdjbG9zZScsIChzdGF0dXMpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKCc+Pj4+PiBjbG9zZSBhZGInKTtcbiAgICAgIGNzcC5wdXRBc3luYyh0aGlzLl9vdXRwdXRDaGFubmVsLCB7J3RvcGljJzogJ3N0YXR1cycsICdwYXlsb2FkJzogc3RhdHVzfSk7XG4gICAgfSk7XG4gICAgY29uc29sZS5sb2coJz4+Pj4+IGRldmljZSBsb2cgcnVucyBzcGF3biBkb25lJyk7XG5cbiAgdGhpcy5fdHJhbnNmZXJyZWREZWZlcnJlZC5wcm9taXNlID1cbiAgICB0aGlzLl90cmFuc2ZlcnJlZERlZmVycmVkLnByb21pc2UudGhlbigoKSA9PiB7XG4gICAgICAvLyBBZnRlciBjbG9zZSwga2lsbCB0aGUgYWRiIGxvZ2NhdCBwcm9jZXNzLlxuICAgICAgLy8gVGhpcyBpcyB0aGUgJ3N0b3AnIG1ldGhvZCB0aGlzIGNvbW1hbmQgaGFzLlxuICAgICAgLy8gU2luY2UgaXQgbWFpbmx5IGZvcndhcmRzIHRvIG90aGVyIG1vZHVsZSxcbiAgICAgIC8vIHdlIG9ubHkgbmVlZCB0byBraWxsIHRoZSBsaXN0ZW5lci5cbiAgICAgIHJ1bkl0LmtpbGwoKTtcbiAgICB9KS5jYXRjaCgoZSkgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgIHRocm93IGU7XG4gICAgfSk7XG4gIH1cblxuICBzdG9wKCkge1xuICAgIC8vIFNpbmNlIHRoaXMgaXMgYW4gYWN0dWFsbHkgYWxsLWluLW9uZSByb3V0ZXIgd2l0aG91dCBhbnkgc3RhZ2UsXG4gICAgLy8gd2UgbmVlZCB0byBpbXBsZW1lbnQgdGhlIG1ldGhvZCBpbiB0aGlzIHN0YWdlLlxuICAgIHRoaXMuX3N0b3BMaXN0ZW5Ub0NvbnRyb2xDaGFubmVsKCk7XG4gICAgdGhpcy5fY2xvc2VDaGFubmVscygpO1xuICB9XG5cbiAgX29uSW5pdGlhbGl6ZWQoaW5pdGlhbGl6ZWRSb3V0ZXJzKSB7XG4gICAgc3VwZXIuX29uSW5pdGlhbGl6ZWQoYXJndW1lbnRzKTtcbiAgfVxuXG4gIF9vblN0YWdlQ2hhbmdlKHN0YWdlKSB7XG4gICAgc3dpdGNoKHN0YWdlKSB7XG4gICAgICBjYXNlICdjb2xsZWN0aW5nJzpcbiAgICAgICAgdGhpcy5fdHJhbnNmZXJUb0NvbGxlY3RpbmdTdGFnZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Rlcm1pbmF0aW5nJzpcbiAgICAgICAgdGhpcy5fdHJhbnNmZXJUb1Rlcm1pbmF0aW5nU3RhZ2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIF90cmFuc2ZlclRvQ29sbGVjdGluZ1N0YWdlKCkge1xuICAgIC8vIERvbid0IGFjdHVhbGx5IHRyYW5zZmVyIHNpbmNlIHdlIHdpbGwgZG8gbm90aGluZyBpbiB0aGF0IHN0YWdlLlxuICAgIGxldCBkZWZlcnJlZCA9IHRoaXMuX3RyYW5zZmVycmVkRGVmZXJyZWQ7XG4gICAgdGhpcy5fdHJhbnNmZXJyZWREZWZlcnJlZCA9IG5ldyBEZWZlcigpO1xuICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgfVxuXG4gIF90cmFuc2ZlclRvVGVybWluYXRpbmdTdGFnZSgpIHtcbiAgICAvLyBEb24ndCBhY3R1YWxseSB0cmFuc2ZlciBzaW5jZSB3ZSB3aWxsIGRvIG5vdGhpbmcgaW4gdGhhdCBzdGFnZS5cbiAgICBsZXQgZGVmZXJyZWQgPSB0aGlzLl90cmFuc2ZlcnJlZERlZmVycmVkO1xuICAgIHRoaXMuX3RyYW5zZmVycmVkRGVmZXJyZWQgPSBuZXcgRGVmZXIoKTtcbiAgICBkZWZlcnJlZC5yZXNvbHZlKCk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvdXRlcnMvRGV2aWNlTG9nL1JlY29yZGluZ1N0YWdlLmpzXG4gKiovIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2hpbGRfcHJvY2Vzc1wiKTtcblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIGV4dGVybmFsIFwiY2hpbGRfcHJvY2Vzc1wiXG4gKiogbW9kdWxlIGlkID0gMjEwXG4gKiogbW9kdWxlIGNodW5rcyA9IDBcbiAqKi8iLCIndXNlIHN0cmljdCc7XG5cbmltcG9ydCBjc3AgZnJvbSAnanMtY3NwJztcbmltcG9ydCBEZWZlciBmcm9tICdEZWZlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJvdXRlciB7XG5cbiAgLyoqXG4gICAqIEFmdGVyIGNvbnN0cnVjdG9yIHRoaXMgcm91dGVyIHNob3VsZCBiZSBhYmxlIHRvIGxpc3RlbiB0byBjb250cm9sIG1lc3NhZ2VzLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHJldmlvdXNTdGFnZUluc3RhbmNlKSB7XG4gICAgdGhpcy5fbmFtZSA9ICdfX3JvdXRlcl9fJzsgIC8vIEV4dGVuZCBieSBjbGllbnQuXG4gICAgdGhpcy5fY29udHJvbENoYW5uZWwgPSBjc3AuY2hhbigpO1xuICAgIHRoaXMuX291dHB1dENoYW5uZWwgPSBjc3AuY2hhbigpO1xuICAgIHRoaXMuX2lucHV0Q2hhbm5lbCA9IGNzcC5jaGFuKCk7XG4gICAgdGhpcy5fcHVibGljYXRpb24gPSBjc3Aub3BlcmF0aW9ucy5wdWIoXG4gICAgICB0aGlzLl9vdXRwdXRDaGFubmVsLCAoZSkgPT4gZS50b3BpYyk7XG4gICAgdGhpcy5fcHJldmlvdXNTdGFnZSA9IHByZXZpb3VzU3RhZ2VJbnN0YW5jZTtcblxuICAgIC8vIE9ubHkgd2hlbiBhbGwgdHJhbnNmZXJyaW5nIHN0dWZmIGRvbmUsIHRoaXMgRGVmZXIgd2lsbCBiZSByZXNvbHZlZC5cbiAgICB0aGlzLl90cmFuc2ZlcnJlZERlZmVycmVkID0gbmV3IERlZmVyKCk7XG4gICAgdGhpcy5fY29uc3VtZUNvbnRyb2xNZXNzYWdlKCk7XG4gIH1cblxuICAvKipcbiAgICogQWZ0ZXIgc3RhcnRlZCB0aGUgcm91dGVyIHNob3VsZCBiZSBhYmxlIHRvIGVtaXQgbWVzc2FnZSB0byB0aGUgb3V0cHV0IGNoYW5uZWwuXG4gICAqL1xuICBzdGFydCgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0luc3RhbmNlIHNob3VsZCBleHRlbmQgdGhpcyBtZXRob2QuJyk7XG4gIH1cblxuICAvKipcbiAgICogT25seSBiZSBpbnZva2VkIHdoZW4gdGhlIGxhc3Qgc3RhZ2Ugb2YgdGhlIHJvdXRlciBuZWVkIHRvIGJlIGZpbmlzaGVkLlxuICAgKiBJbiBtb3N0IG9mIGNhc2VzLCB0aGlzIG1lYW5zIHRoZSBlbmQgb2YgdGhlIHByb2dyYW0uXG4gICAqIFRoZXJlZm9yZSBvbmx5IHRoZSBsYXN0IHN0YWdlIG5lZWQgdG8gaW1wbGVtZW50IHRoaXMgdG8gcmVsZWFzZSByZXNvdXJjZXNcbiAgICogb3IgZmluYWxpemUgYWxsIGZ1bmN0aW9ucy5cbiAgICpcbiAgICogT3RoZXIgaW50ZXJtZWRpYXRlIHN0YWdlcyB3aWxsIGJlIHRyYW5zZmVycmVkLCB3aGljaCBpcyBhbm90aGVyIGV4aXQgb2ZcbiAgICogdGhlIHJvdXRlciB0byBjbGVhciBpdHNlbGYuXG4gICAqL1xuICBzdG9wKCkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW5zdGFuY2Ugc2hvdWxkIGV4dGVuZCB0aGlzIG1ldGhvZC4nKTtcbiAgfVxuXG4gIHN1YnNjcmliZSguLi5zdWJzKSB7XG4gICAgc3Vicy5mb3JFYWNoKChzdWIpID0+IHtcbiAgICAgIHN1Yih0aGlzLl9wdWJsaWNhdGlvbiwgdGhpcy5fdHJhbnNmZXJyZWREZWZlcnJlZC5wcm9taXNlKTtcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIGNvbm5lY3RUb0NvbnRyb2xsZXIocHVibGljYXRpb24pIHtcbiAgICB0aGlzLl9jb250cm9sbGVyUHVibGljYXRpb24gPSBwdWJsaWNhdGlvbjtcbiAgICBjc3Aub3BlcmF0aW9ucy5wdWIuc3ViKHB1YmxpY2F0aW9uLCAnc3RhdHVzJywgdGhpcy5fY29udHJvbENoYW5uZWwpO1xuICAgIHRoaXMuX2NvbnN1bWVDb250cm9sTWVzc2FnZSgpO1xuICB9XG5cbiAgX2NvbnN1bWVDb250cm9sTWVzc2FnZSgpIHtcbiAgICBjc3AuZ28oKGZ1bmN0aW9uKigpIHtcbiAgICAgIGxldCB2YWx1ZSA9IHlpZWxkIHRoaXMuX2NvbnRyb2xDaGFubmVsO1xuICAgICAgd2hpbGUgKGNzcC5DTE9TRUQgIT09IHZhbHVlKSB7XG4gICAgICAgIGxldCB7dHlwZSwgZGV0YWlsfSA9IHZhbHVlLnBheWxvYWQ7XG4gICAgICAgIHN3aXRjaCh0eXBlKSB7XG4gICAgICAgICAgY2FzZSAnaW5pdGlhbGl6ZWQnOlxuICAgICAgICAgICAgdGhpcy5fb25Jbml0aWFsaXplZChkZXRhaWwpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnc3RhZ2VjaGFuZ2UnOlxuICAgICAgICAgICAgdGhpcy5fc3RvcExpc3RlblRvQ29udHJvbENoYW5uZWwoKTtcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlQ2hhbm5lbHMoKTtcbiAgICAgICAgICAgIHRoaXMuX29uU3RhZ2VDaGFuZ2UoZGV0YWlsKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHZhbHVlID0geWllbGQgdGhpcy5fY29udHJvbENoYW5uZWw7XG4gICAgICB9XG4gICAgfSkuYmluZCh0aGlzKSk7XG4gIH1cblxuICBfb25Jbml0aWFsaXplZChpbml0aWFsaXplZFJvdXRlcnMpIHtcbiAgICB0aGlzLl9yb3V0ZXJzID0gaW5pdGlhbGl6ZWRSb3V0ZXJzO1xuICB9XG5cbiAgLyoqXG4gICAqIE9ubHkgaW50ZXJtZWRpYXRlIHN0YWdlcyBuZWVkIHRvIGltcGxlbWVudCB0aGlzIG1ldGhvZCwgc2luY2UgaXQgZG9lc24ndCBleGl0XG4gICAqIHZpYSB0aGUgYHN0b3BgIG1ldGhvZCwgYnV0IHRoZSBzdGF0ZSB0cmFuc2ZlcnJpbmcuXG4gICAqL1xuICBfb25TdGFnZUNoYW5nZShzdGFnZSkge1xuICAgIHRocm93IG5ldyBFcnJvcignSW5zdGFuY2Ugc2hvdWxkIGV4dGVuZCB0aGlzIG1ldGhvZC4nKTtcbiAgfVxuXG4gIF9zdG9wTGlzdGVuVG9Db250cm9sQ2hhbm5lbCgpIHtcbiAgICBjc3Aub3BlcmF0aW9ucy5wdWIudW5zdWIoXG4gICAgICB0aGlzLl9jb250cm9sbGVyUHVibGljYXRpb24sICdzdGF0dXMnLCB0aGlzLl9jb250cm9sQ2hhbm5lbCk7XG4gIH1cblxuICBfY2xvc2VDaGFubmVscygpIHtcbiAgICB0aGlzLl9pbnB1dENoYW5uZWwuY2xvc2UoKTtcbiAgICB0aGlzLl9vdXRwdXRDaGFubmVsLmNsb3NlKCk7XG4gIH1cblxuICBfdHJhbnNmZXJUbyhyb3V0ZXJTdGFnZUNsYXNzKSB7XG4gICAgLy8gRXh0ZW5kIHRoaXMgcHJvY2VkdXJlIGlmIGl0J3MgbmVjZXNzYXJ5LlxuICAgIGxldCBuZXh0U3RhZ2UgPSBuZXcgcm91dGVyU3RhZ2VDbGFzcyh0aGlzKTtcbiAgICB0aGlzLl9yb3V0ZXJzW3RoaXMuX25hbWVdID0gbmV4dFN0YWdlO1xuICAgIHRoaXMuX3RyYW5zZmVycmVkRGVmZXJyZWQucmVzb2x2ZSgpO1xuICAgIG5leHRTdGFnZS5zdGFydCgpO1xuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiAuL3NyYy9yb3V0ZXJzL1JvdXRlci5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGNzcCBmcm9tICdqcy1jc3AnO1xuaW1wb3J0IFJvdXRlciBmcm9tICdyb3V0ZXJzL1JvdXRlcic7XG5pbXBvcnQgVGVybWluYXRpbmdTdGFnZSBmcm9tICdyb3V0ZXJzL0xvZy9UZXJtaW5hdGluZ1N0YWdlJztcblxuLy8gVE9ETzogV2UgbmVlZCB0byBkbyB0aW1lIGFsaWdubWVudCBpbiB0aGlzIHN0YWdlIHdoZW4gaXQncyByZWFkeS5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbGxlY3RpbmdTdGFnZSBleHRlbmRzIFJvdXRlciB7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoYXJndW1lbnRzKTtcbiAgICB0aGlzLl9uYW1lID0gdGhpcy5fcHJldmlvdXNTdGFnZS5fbmFtZTtcbiAgICB0aGlzLl9yZWNvcmQgPSB0aGlzLl9wcmV2aW91c1N0YWdlLl9yZWNvcmQ7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICAvLyBUT0RPOiBXZSBuZWVkIHRvIGRvIHRpbWUgYWxpZ25tZW50IGluIHRoaXMgc3RhZ2Ugd2hlbiBpdCdzIHJlYWR5LlxuICB9XG5cbiAgX29uU3RhZ2VDaGFuZ2Uoc3RhZ2UpIHtcbiAgICBzd2l0Y2goc3RhZ2UpIHtcbiAgICAgIGNhc2UgJ3Rlcm1pbmF0aW5nJzpcbiAgICAgICAgdGhpcy5fdHJhbnNmZXJUb1Rlcm1pbmF0aW5nU3RhZ2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgX3RyYW5zZmVyVG9UZXJtaW5hdGluZ1N0YWdlKCkge1xuICAgIHRoaXMuX3RyYW5zZmVyVG8oVGVybWluYXRpbmdTdGFnZSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvdXRlcnMvTG9nL0NvbGxlY3RpbmdTdGFnZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGNzcCBmcm9tICdqcy1jc3AnO1xuaW1wb3J0IFJvdXRlciBmcm9tICdyb3V0ZXJzL1JvdXRlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRlcm1pbmF0aW5nU3RhZ2UgZXh0ZW5kcyBSb3V0ZXIge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKGFyZ3VtZW50cyk7XG4gICAgdGhpcy5fcmVjb3JkID0gdGhpcy5fcHJldmlvdXNTdGFnZS5fcmVjb3JkO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgLy8gU2VuZCBvdXQgdGhlIGZpbmFsIGRhdGEuXG4gICAgY3NwLnB1dEFzeW5jKHRoaXMuX291dHB1dENoYW5uZWwsXG4gICAgICB7J3RvcGljJzogJ2RhdGEnLCAncGF5bG9hZCc6IHRoaXMuX3JlY29yZH0pO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICB0aGlzLl9zdG9wTGlzdGVuVG9Db250cm9sQ2hhbm5lbCgpO1xuICAgIHRoaXMuX2Nsb3NlQ2hhbm5lbHMoKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm91dGVycy9Mb2cvVGVybWluYXRpbmdTdGFnZS5qc1xuICoqLyIsIid1c2Ugc3RyaWN0JztcblxuaW1wb3J0IGNzcCBmcm9tICdqcy1jc3AnO1xuaW1wb3J0IFJvdXRlciBmcm9tICdyb3V0ZXJzL1JvdXRlcic7XG5pbXBvcnQgQ29sbGVjdGluZ1N0YWdlIGZyb20gJ3JvdXRlcnMvTG9nL0NvbGxlY3RpbmdTdGFnZSc7XG5pbXBvcnQgVGVybWluYXRpbmdTdGFnZSBmcm9tICdyb3V0ZXJzL0xvZy9UZXJtaW5hdGluZ1N0YWdlJztcblxuaW1wb3J0IHsgZGVmYXVsdCBhcyBMb2dSZWNvcmQgfSBmcm9tICdyZWNvcmQvTG9nJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjb3JkaW5nU3RhZ2UgZXh0ZW5kcyBSb3V0ZXIge1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKGFyZ3VtZW50cyk7XG4gICAgLy8gUm91dGVyIG5hbWU6ICdsb2cnXG4gICAgdGhpcy5fbmFtZSA9ICdsb2cnO1xuXG4gICAgLy8gVGhlIGRldmljZWxvZyByb3V0ZXIgd2lsbCBlbWl0IGxvZy9lcnJvci5cbiAgICB0aGlzLl9kZXZpY2VMb2dUb3BpYyA9ICdsb2cnO1xuICB9XG5cbiAgc3RhcnQoKSB7XG4gICAgdGhpcy5fcmVjb3JkID0gbmV3IExvZ1JlY29yZCgpO1xuICB9XG5cbiAgX29uSW5pdGlhbGl6ZWQoaW5pdGlhbGl6ZWRSb3V0ZXJzKSB7XG4gICAgc3VwZXIuX29uSW5pdGlhbGl6ZWQoYXJndW1lbnRzKTtcbiAgICB0aGlzLl9yb3V0ZXJzLmRldmljZWxvZy5zdWJzY3JpYmUodGhpczo6dGhpcy5fY29ubmVjdFRvRGV2aWNlTG9nKTtcbiAgfVxuXG4gIF9vblN0YWdlQ2hhbmdlKHN0YWdlKSB7XG4gICAgc3dpdGNoKHN0YWdlKSB7XG4gICAgICBjYXNlICdjb2xsZWN0aW5nJzpcbiAgICAgICAgdGhpcy5fdHJhbnNmZXJUb0NvbGxlY3RpbmdTdGFnZSgpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3Rlcm1pbmF0aW5nJzpcbiAgICAgICAgdGhpcy5fdHJhbnNmZXJUb1Rlcm1pbmF0aW5nU3RhZ2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgX29uTG9nKGxvZykge1xuICAgIHRoaXMuX3JlY29yZC5wdXNoKGxvZyk7XG4gIH1cblxuICAvKipcbiAgICogTm90ZTogdGhpcyByb3V0ZXIgaWdub3JlcyB0aGUgYHRyYW5zZmVycmVkRGVmZXJyZWRgIGJlY2F1c2VcbiAgICogYWZ0ZXIgdGhlIHN0YWdlIHRyYW5zZmVycmVkLCB0aGVyZSBpcyBubyBuZWVkIHRvIGxpc3RlbiB0b1xuICAgKiB0aGUgZGV2aWNlbG9nIHJvdXRlciBhZ2Fpbiwgc28gd2UgZG9uJ3QgbmVlZCB0byByZWNvbm5lY3QgdG8gaXQuXG4gICAqL1xuICBfY29ubmVjdFRvRGV2aWNlTG9nKHB1YmxpY2F0aW9uLCB0cmFuc2ZlcnJlZERlZmVycmVkKSB7XG4gICAgY3NwLm9wZXJhdGlvbnMucHViLnN1YihwdWJsaWNhdGlvbixcbiAgICAgICAgdGhpcy5fZGV2aWNlTG9nVG9waWMsIHRoaXMuX2lucHV0Q2hhbm5lbCk7XG4gICAgdGhpcy5fY29uc3VtZUxvZ3MoKTtcbiAgfVxuXG4gIF9jb25zdW1lTG9ncygpIHtcbiAgICBjc3AuZ28oKGZ1bmN0aW9uKigpIHtcbiAgICAgIGxldCB2YWx1ZSA9IHlpZWxkIHRoaXMuX2lucHV0Q2hhbm5lbDtcbiAgICAgIHdoaWxlIChjc3AuQ0xPU0VEICE9PSB2YWx1ZSkge1xuICAgICAgICB0aGlzLl9vbkxvZyh2YWx1ZSk7XG4gICAgICAgIHZhbHVlID0geWllbGQgdGhpcy5faW5wdXRDaGFubmVsO1xuICAgICAgfVxuICAgIH0pLmJpbmQodGhpcykpO1xuICB9XG5cbiAgX3RyYW5zZmVyVG9Db2xsZWN0aW5nU3RhZ2UoKSB7XG4gICAgdGhpcy5fdHJhbnNmZXJUbyhDb2xsZWN0aW5nU3RhZ2UpO1xuICB9XG5cbiAgX3RyYW5zZmVyVG9UZXJtaW5hdGluZ1N0YWdlKCkge1xuICAgIHRoaXMuX3RyYW5zZmVyVG8oVGVybWluYXRpbmdTdGFnZSk7XG4gIH1cbn1cblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIC4vc3JjL3JvdXRlcnMvTG9nL1JlY29yZGluZ1N0YWdlLmpzXG4gKiovIiwiJ3VzZSBzdHJpY3QnO1xuXG5pbXBvcnQgY3NwIGZyb20gJ2pzLWNzcCc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ3JvdXRlcnMvUm91dGVyJztcbmltcG9ydCBEZWZlciBmcm9tICdEZWZlcic7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlY29yZGluZ1N0YWdlIGV4dGVuZHMgUm91dGVyIHtcblxuICBjb25zdHJ1Y3Rvcihjb25maWdzSW5zdGFuY2UpIHtcbiAgICBzdXBlcihhcmd1bWVudHMpO1xuICAgIHRoaXMuY29uZmlncyA9IGNvbmZpZ3NJbnN0YW5jZTtcbiAgICB0aGlzLl9uYW1lID0gJ2RldmljZWxvZyc7XG4gIH1cblxuICBzdGFydCgpIHtcbiAgICBsZXQgc2lnbmFscyA9IFtcbiAgICAgICdTSUdIVVAnLFxuICAgICAgJ1NJR0lOVCcsXG4gICAgICAnU0lHVEVSTSdcbiAgICBdO1xuICAgIGNvbnNvbGUubG9nKCc+Pj4gU2lnbmFscyBydW4nKTtcbiAgICBzaWduYWxzLmZvckVhY2goKHNpZ25hbCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coJz4+Pj4gYm9vazogJywgc2lnbmFsKTtcbiAgICAgIHByb2Nlc3Mub24oc2lnbmFsLCAoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKCc+Pj4+Pj4gc2VuZCBraWxsIHNpZ25hbCcpO1xuICAgICAgICBjc3AucHV0QXN5bmModGhpcy5fb3V0cHV0Q2hhbm5lbCwgeyd0b3BpYyc6ICdkYXRhJywgJ3BheWxvYWQnOiAgJ3Rlcm1pbmF0aW5nJ30pO1xuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLl90cmFuc2ZlcnJlZERlZmVycmVkLnByb21pc2UgPVxuICAgICAgdGhpcy5fdHJhbnNmZXJyZWREZWZlcnJlZC5wcm9taXNlLnRoZW4oKCkgPT4ge1xuICAgICAgICBwcm9jZXNzLmV4aXQoKTtcbiAgICAgIH0pLmNhdGNoKChlKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5fdHJhbnNmZXJyZWREZWZlcnJlZC5wcm9taXNlO1xuICB9XG5cbiAgc3RvcCgpIHtcbiAgICAvLyBTaW5jZSB0aGlzIGlzIGFuIGFjdHVhbGx5IGFsbC1pbi1vbmUgcm91dGVyIHdpdGhvdXQgYW55IHN0YWdlLFxuICAgIC8vIHdlIG5lZWQgdG8gaW1wbGVtZW50IHRoZSBtZXRob2QgaW4gdGhpcyBzdGFnZS5cbiAgICB0aGlzLl9zdG9wTGlzdGVuVG9Db250cm9sQ2hhbm5lbCgpO1xuICAgIHRoaXMuX2Nsb3NlQ2hhbm5lbHMoKTtcbiAgfVxuXG4gIF9vbkluaXRpYWxpemVkKGluaXRpYWxpemVkUm91dGVycykge1xuICAgIHN1cGVyLl9vbkluaXRpYWxpemVkKGFyZ3VtZW50cykgO1xuICB9XG5cbiAgX29uU3RhZ2VDaGFuZ2Uoc3RhZ2UpIHtcbiAgICBzd2l0Y2goc3RhZ2UpIHtcbiAgICAgIGNhc2UgJ2NvbGxlY3RpbmcnOlxuICAgICAgICB0aGlzLl90cmFuc2ZlclRvQ29sbGVjdGluZ1N0YWdlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGVybWluYXRpbmcnOlxuICAgICAgICB0aGlzLl90cmFuc2ZlclRvVGVybWluYXRpbmdTdGFnZSgpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgX3RyYW5zZmVyVG9Db2xsZWN0aW5nU3RhZ2UoKSB7XG4gICAgLy8gRG9uJ3QgYWN0dWFsbHkgdHJhbnNmZXIgc2luY2Ugd2Ugd2lsbCBkbyBub3RoaW5nIGluIHRoYXQgc3RhZ2UuXG4gICAgbGV0IGRlZmVycmVkID0gdGhpcy5fdHJhbnNmZXJyZWREZWZlcnJlZDtcbiAgICB0aGlzLl90cmFuc2ZlcnJlZERlZmVycmVkID0gbmV3IERlZmVyKCk7XG4gICAgZGVmZXJyZWQucmVzb2x2ZSgpO1xuICB9XG5cbiAgX3RyYW5zZmVyVG9UZXJtaW5hdGluZ1N0YWdlKCkge1xuICAgIC8vIERvbid0IGFjdHVhbGx5IHRyYW5zZmVyIHNpbmNlIHdlIHdpbGwgZG8gbm90aGluZyBpbiB0aGF0IHN0YWdlLlxuICAgIGxldCBkZWZlcnJlZCA9IHRoaXMuX3RyYW5zZmVycmVkRGVmZXJyZWQ7XG4gICAgdGhpcy5fdHJhbnNmZXJyZWREZWZlcnJlZCA9IG5ldyBEZWZlcigpO1xuICAgIGRlZmVycmVkLnJlc29sdmUoKTtcbiAgfVxufVxuXG5cblxuLyoqIFdFQlBBQ0sgRk9PVEVSICoqXG4gKiogLi9zcmMvcm91dGVycy9TaWduYWwvUmVjb3JkaW5nU3RhZ2UuanNcbiAqKi8iXSwic291cmNlUm9vdCI6IiJ9