/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@glidejs/glide/dist/glide.esm.js":
/*!*******************************************************!*\
  !*** ./node_modules/@glidejs/glide/dist/glide.esm.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Glide; }\n/* harmony export */ });\n/*!\n * Glide.js v3.7.1\n * (c) 2013-2024 Jędrzej Chałubek (https://github.com/jedrzejchalubek/)\n * Released under the MIT License.\n */\n\nfunction ownKeys(object, enumerableOnly) {\n  var keys = Object.keys(object);\n\n  if (Object.getOwnPropertySymbols) {\n    var symbols = Object.getOwnPropertySymbols(object);\n\n    if (enumerableOnly) {\n      symbols = symbols.filter(function (sym) {\n        return Object.getOwnPropertyDescriptor(object, sym).enumerable;\n      });\n    }\n\n    keys.push.apply(keys, symbols);\n  }\n\n  return keys;\n}\n\nfunction _objectSpread2(target) {\n  for (var i = 1; i < arguments.length; i++) {\n    var source = arguments[i] != null ? arguments[i] : {};\n\n    if (i % 2) {\n      ownKeys(Object(source), true).forEach(function (key) {\n        _defineProperty(target, key, source[key]);\n      });\n    } else if (Object.getOwnPropertyDescriptors) {\n      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));\n    } else {\n      ownKeys(Object(source)).forEach(function (key) {\n        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));\n      });\n    }\n  }\n\n  return target;\n}\n\nfunction _typeof(obj) {\n  \"@babel/helpers - typeof\";\n\n  if (typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\") {\n    _typeof = function (obj) {\n      return typeof obj;\n    };\n  } else {\n    _typeof = function (obj) {\n      return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj;\n    };\n  }\n\n  return _typeof(obj);\n}\n\nfunction _classCallCheck(instance, Constructor) {\n  if (!(instance instanceof Constructor)) {\n    throw new TypeError(\"Cannot call a class as a function\");\n  }\n}\n\nfunction _defineProperties(target, props) {\n  for (var i = 0; i < props.length; i++) {\n    var descriptor = props[i];\n    descriptor.enumerable = descriptor.enumerable || false;\n    descriptor.configurable = true;\n    if (\"value\" in descriptor) descriptor.writable = true;\n    Object.defineProperty(target, descriptor.key, descriptor);\n  }\n}\n\nfunction _createClass(Constructor, protoProps, staticProps) {\n  if (protoProps) _defineProperties(Constructor.prototype, protoProps);\n  if (staticProps) _defineProperties(Constructor, staticProps);\n  return Constructor;\n}\n\nfunction _defineProperty(obj, key, value) {\n  if (key in obj) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n  } else {\n    obj[key] = value;\n  }\n\n  return obj;\n}\n\nfunction _inherits(subClass, superClass) {\n  if (typeof superClass !== \"function\" && superClass !== null) {\n    throw new TypeError(\"Super expression must either be null or a function\");\n  }\n\n  subClass.prototype = Object.create(superClass && superClass.prototype, {\n    constructor: {\n      value: subClass,\n      writable: true,\n      configurable: true\n    }\n  });\n  if (superClass) _setPrototypeOf(subClass, superClass);\n}\n\nfunction _getPrototypeOf(o) {\n  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {\n    return o.__proto__ || Object.getPrototypeOf(o);\n  };\n  return _getPrototypeOf(o);\n}\n\nfunction _setPrototypeOf(o, p) {\n  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {\n    o.__proto__ = p;\n    return o;\n  };\n\n  return _setPrototypeOf(o, p);\n}\n\nfunction _isNativeReflectConstruct() {\n  if (typeof Reflect === \"undefined\" || !Reflect.construct) return false;\n  if (Reflect.construct.sham) return false;\n  if (typeof Proxy === \"function\") return true;\n\n  try {\n    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));\n    return true;\n  } catch (e) {\n    return false;\n  }\n}\n\nfunction _assertThisInitialized(self) {\n  if (self === void 0) {\n    throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\");\n  }\n\n  return self;\n}\n\nfunction _possibleConstructorReturn(self, call) {\n  if (call && (typeof call === \"object\" || typeof call === \"function\")) {\n    return call;\n  } else if (call !== void 0) {\n    throw new TypeError(\"Derived constructors may only return object or undefined\");\n  }\n\n  return _assertThisInitialized(self);\n}\n\nfunction _createSuper(Derived) {\n  var hasNativeReflectConstruct = _isNativeReflectConstruct();\n\n  return function _createSuperInternal() {\n    var Super = _getPrototypeOf(Derived),\n        result;\n\n    if (hasNativeReflectConstruct) {\n      var NewTarget = _getPrototypeOf(this).constructor;\n\n      result = Reflect.construct(Super, arguments, NewTarget);\n    } else {\n      result = Super.apply(this, arguments);\n    }\n\n    return _possibleConstructorReturn(this, result);\n  };\n}\n\nfunction _superPropBase(object, property) {\n  while (!Object.prototype.hasOwnProperty.call(object, property)) {\n    object = _getPrototypeOf(object);\n    if (object === null) break;\n  }\n\n  return object;\n}\n\nfunction _get() {\n  if (typeof Reflect !== \"undefined\" && Reflect.get) {\n    _get = Reflect.get;\n  } else {\n    _get = function _get(target, property, receiver) {\n      var base = _superPropBase(target, property);\n\n      if (!base) return;\n      var desc = Object.getOwnPropertyDescriptor(base, property);\n\n      if (desc.get) {\n        return desc.get.call(arguments.length < 3 ? target : receiver);\n      }\n\n      return desc.value;\n    };\n  }\n\n  return _get.apply(this, arguments);\n}\n\nvar defaults = {\n  /**\n   * Type of the movement.\n   *\n   * Available types:\n   * `slider` - Rewinds slider to the start/end when it reaches the first or last slide.\n   * `carousel` - Changes slides without starting over when it reaches the first or last slide.\n   *\n   * @type {String}\n   */\n  type: 'slider',\n\n  /**\n   * Start at specific slide number defined with zero-based index.\n   *\n   * @type {Number}\n   */\n  startAt: 0,\n\n  /**\n   * A number of slides visible on the single viewport.\n   *\n   * @type {Number}\n   */\n  perView: 1,\n\n  /**\n   * Focus currently active slide at a specified position in the track.\n   *\n   * Available inputs:\n   * `center` - Current slide will be always focused at the center of a track.\n   * `0,1,2,3...` - Current slide will be focused on the specified zero-based index.\n   *\n   * @type {String|Number}\n   */\n  focusAt: 0,\n\n  /**\n   * A size of the gap added between slides.\n   *\n   * @type {Number}\n   */\n  gap: 10,\n\n  /**\n   * Change slides after a specified interval. Use `false` for turning off autoplay.\n   *\n   * @type {Number|Boolean}\n   */\n  autoplay: false,\n\n  /**\n   * Stop autoplay on mouseover event.\n   *\n   * @type {Boolean}\n   */\n  hoverpause: true,\n\n  /**\n   * Allow for changing slides with left and right keyboard arrows.\n   *\n   * @type {Boolean}\n   */\n  keyboard: true,\n\n  /**\n   * Stop running `perView` number of slides from the end. Use this\n   * option if you don't want to have an empty space after\n   * a slider. Works only with `slider` type and a\n   * non-centered `focusAt` setting.\n   *\n   * @type {Boolean}\n   */\n  bound: false,\n\n  /**\n   * Minimal swipe distance needed to change the slide. Use `false` for turning off a swiping.\n   *\n   * @type {Number|Boolean}\n   */\n  swipeThreshold: 80,\n\n  /**\n   * Minimal mouse drag distance needed to change the slide. Use `false` for turning off a dragging.\n   *\n   * @type {Number|Boolean}\n   */\n  dragThreshold: 120,\n\n  /**\n   * A number of slides moved on single swipe.\n   *\n   * Available types:\n   * `` - Moves slider by one slide per swipe\n   * `|` - Moves slider between views per swipe (number of slides defined in `perView` options)\n   *\n   * @type {String}\n   */\n  perSwipe: '',\n\n  /**\n   * Moving distance ratio of the slides on a swiping and dragging.\n   *\n   * @type {Number}\n   */\n  touchRatio: 0.5,\n\n  /**\n   * Angle required to activate slides moving on swiping or dragging.\n   *\n   * @type {Number}\n   */\n  touchAngle: 45,\n\n  /**\n   * Duration of the animation in milliseconds.\n   *\n   * @type {Number}\n   */\n  animationDuration: 400,\n\n  /**\n   * Allows looping the `slider` type. Slider will rewind to the first/last slide when it's at the start/end.\n   *\n   * @type {Boolean}\n   */\n  rewind: true,\n\n  /**\n   * Duration of the rewinding animation of the `slider` type in milliseconds.\n   *\n   * @type {Number}\n   */\n  rewindDuration: 800,\n\n  /**\n   * Easing function for the animation.\n   *\n   * @type {String}\n   */\n  animationTimingFunc: 'cubic-bezier(.165, .840, .440, 1)',\n\n  /**\n   * Wait for the animation to finish until the next user input can be processed\n   *\n   * @type {boolean}\n   */\n  waitForTransition: true,\n\n  /**\n   * Throttle costly events at most once per every wait milliseconds.\n   *\n   * @type {Number}\n   */\n  throttle: 10,\n\n  /**\n   * Moving direction mode.\n   *\n   * Available inputs:\n   * - 'ltr' - left to right movement,\n   * - 'rtl' - right to left movement.\n   *\n   * @type {String}\n   */\n  direction: 'ltr',\n\n  /**\n   * The distance value of the next and previous viewports which\n   * have to peek in the current view. Accepts number and\n   * pixels as a string. Left and right peeking can be\n   * set up separately with a directions object.\n   *\n   * For example:\n   * `100` - Peek 100px on the both sides.\n   * { before: 100, after: 50 }` - Peek 100px on the left side and 50px on the right side.\n   *\n   * @type {Number|String|Object}\n   */\n  peek: 0,\n\n  /**\n   * Defines how many clones of current viewport will be generated.\n   *\n   * @type {Number}\n   */\n  cloningRatio: 1,\n\n  /**\n   * Collection of options applied at specified media breakpoints.\n   * For example: display two slides per view under 800px.\n   * `{\n   *   '800px': {\n   *     perView: 2\n   *   }\n   * }`\n   */\n  breakpoints: {},\n\n  /**\n   * Collection of internally used HTML classes.\n   *\n   * @todo Refactor `slider` and `carousel` properties to single `type: { slider: '', carousel: '' }` object\n   * @type {Object}\n   */\n  classes: {\n    swipeable: 'glide--swipeable',\n    dragging: 'glide--dragging',\n    direction: {\n      ltr: 'glide--ltr',\n      rtl: 'glide--rtl'\n    },\n    type: {\n      slider: 'glide--slider',\n      carousel: 'glide--carousel'\n    },\n    slide: {\n      clone: 'glide__slide--clone',\n      active: 'glide__slide--active'\n    },\n    arrow: {\n      disabled: 'glide__arrow--disabled'\n    },\n    nav: {\n      active: 'glide__bullet--active'\n    }\n  }\n};\n\n/**\n * Outputs warning message to the bowser console.\n *\n * @param  {String} msg\n * @return {Void}\n */\nfunction warn(msg) {\n  console.error(\"[Glide warn]: \".concat(msg));\n}\n\n/**\n * Converts value entered as number\n * or string to integer value.\n *\n * @param {String} value\n * @returns {Number}\n */\nfunction toInt(value) {\n  return parseInt(value);\n}\n/**\n * Converts value entered as number\n * or string to flat value.\n *\n * @param {String} value\n * @returns {Number}\n */\n\nfunction toFloat(value) {\n  return parseFloat(value);\n}\n/**\n * Indicates whether the specified value is a string.\n *\n * @param  {*}   value\n * @return {Boolean}\n */\n\nfunction isString(value) {\n  return typeof value === 'string';\n}\n/**\n * Indicates whether the specified value is an object.\n *\n * @param  {*} value\n * @return {Boolean}\n *\n * @see https://github.com/jashkenas/underscore\n */\n\nfunction isObject(value) {\n  var type = _typeof(value);\n\n  return type === 'function' || type === 'object' && !!value; // eslint-disable-line no-mixed-operators\n}\n/**\n * Indicates whether the specified value is a function.\n *\n * @param  {*} value\n * @return {Boolean}\n */\n\nfunction isFunction(value) {\n  return typeof value === 'function';\n}\n/**\n * Indicates whether the specified value is undefined.\n *\n * @param  {*} value\n * @return {Boolean}\n */\n\nfunction isUndefined(value) {\n  return typeof value === 'undefined';\n}\n/**\n * Indicates whether the specified value is an array.\n *\n * @param  {*} value\n * @return {Boolean}\n */\n\nfunction isArray(value) {\n  return value.constructor === Array;\n}\n\n/**\n * Creates and initializes specified collection of extensions.\n * Each extension receives access to instance of glide and rest of components.\n *\n * @param {Object} glide\n * @param {Object} extensions\n *\n * @returns {Object}\n */\n\nfunction mount(glide, extensions, events) {\n  var components = {};\n\n  for (var name in extensions) {\n    if (isFunction(extensions[name])) {\n      components[name] = extensions[name](glide, components, events);\n    } else {\n      warn('Extension must be a function');\n    }\n  }\n\n  for (var _name in components) {\n    if (isFunction(components[_name].mount)) {\n      components[_name].mount();\n    }\n  }\n\n  return components;\n}\n\n/**\n * Defines getter and setter property on the specified object.\n *\n * @param  {Object} obj         Object where property has to be defined.\n * @param  {String} prop        Name of the defined property.\n * @param  {Object} definition  Get and set definitions for the property.\n * @return {Void}\n */\nfunction define(obj, prop, definition) {\n  Object.defineProperty(obj, prop, definition);\n}\n/**\n * Sorts aphabetically object keys.\n *\n * @param  {Object} obj\n * @return {Object}\n */\n\nfunction sortKeys(obj) {\n  return Object.keys(obj).sort().reduce(function (r, k) {\n    r[k] = obj[k];\n    return r[k], r;\n  }, {});\n}\n/**\n * Merges passed settings object with default options.\n *\n * @param  {Object} defaults\n * @param  {Object} settings\n * @return {Object}\n */\n\nfunction mergeOptions(defaults, settings) {\n  var options = Object.assign({}, defaults, settings); // `Object.assign` do not deeply merge objects, so we\n  // have to do it manually for every nested object\n  // in options. Although it does not look smart,\n  // it's smaller and faster than some fancy\n  // merging deep-merge algorithm script.\n\n  if (settings.hasOwnProperty('classes')) {\n    options.classes = Object.assign({}, defaults.classes, settings.classes);\n    var properties = ['direction', 'type', 'slide', 'arrow', 'nav'];\n    properties.forEach(function (property) {\n      if (settings.classes.hasOwnProperty(property)) {\n        options.classes[property] = _objectSpread2(_objectSpread2({}, defaults.classes[property]), settings.classes[property]);\n      }\n    });\n  }\n\n  if (settings.hasOwnProperty('breakpoints')) {\n    options.breakpoints = Object.assign({}, defaults.breakpoints, settings.breakpoints);\n  }\n\n  return options;\n}\n\nvar EventsBus = /*#__PURE__*/function () {\n  /**\n   * Construct a EventBus instance.\n   *\n   * @param {Object} events\n   */\n  function EventsBus() {\n    var events = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, EventsBus);\n\n    this.events = events;\n    this.hop = events.hasOwnProperty;\n  }\n  /**\n   * Adds listener to the specifed event.\n   *\n   * @param {String|Array} event\n   * @param {Function} handler\n   */\n\n\n  _createClass(EventsBus, [{\n    key: \"on\",\n    value: function on(event, handler) {\n      if (isArray(event)) {\n        for (var i = 0; i < event.length; i++) {\n          this.on(event[i], handler);\n        }\n\n        return;\n      } // Create the event's object if not yet created\n\n\n      if (!this.hop.call(this.events, event)) {\n        this.events[event] = [];\n      } // Add the handler to queue\n\n\n      var index = this.events[event].push(handler) - 1; // Provide handle back for removal of event\n\n      return {\n        remove: function remove() {\n          delete this.events[event][index];\n        }\n      };\n    }\n    /**\n     * Runs registered handlers for specified event.\n     *\n     * @param {String|Array} event\n     * @param {Object=} context\n     */\n\n  }, {\n    key: \"emit\",\n    value: function emit(event, context) {\n      if (isArray(event)) {\n        for (var i = 0; i < event.length; i++) {\n          this.emit(event[i], context);\n        }\n\n        return;\n      } // If the event doesn't exist, or there's no handlers in queue, just leave\n\n\n      if (!this.hop.call(this.events, event)) {\n        return;\n      } // Cycle through events queue, fire!\n\n\n      this.events[event].forEach(function (item) {\n        item(context || {});\n      });\n    }\n  }]);\n\n  return EventsBus;\n}();\n\nvar Glide$1 = /*#__PURE__*/function () {\n  /**\r\n   * Construct glide.\r\n   *\r\n   * @param  {String} selector\r\n   * @param  {Object} options\r\n   */\n  function Glide(selector) {\n    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n\n    _classCallCheck(this, Glide);\n\n    this._c = {};\n    this._t = [];\n    this._e = new EventsBus();\n    this.disabled = false;\n    this.selector = selector;\n    this.settings = mergeOptions(defaults, options);\n    this.index = this.settings.startAt;\n  }\n  /**\r\n   * Initializes glide.\r\n   *\r\n   * @param {Object} extensions Collection of extensions to initialize.\r\n   * @return {Glide}\r\n   */\n\n\n  _createClass(Glide, [{\n    key: \"mount\",\n    value: function mount$1() {\n      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n      this._e.emit('mount.before');\n\n      if (isObject(extensions)) {\n        this._c = mount(this, extensions, this._e);\n      } else {\n        warn('You need to provide a object on `mount()`');\n      }\n\n      this._e.emit('mount.after');\n\n      return this;\n    }\n    /**\r\n     * Collects an instance `translate` transformers.\r\n     *\r\n     * @param  {Array} transformers Collection of transformers.\r\n     * @return {Void}\r\n     */\n\n  }, {\n    key: \"mutate\",\n    value: function mutate() {\n      var transformers = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n\n      if (isArray(transformers)) {\n        this._t = transformers;\n      } else {\n        warn('You need to provide a array on `mutate()`');\n      }\n\n      return this;\n    }\n    /**\r\n     * Updates glide with specified settings.\r\n     *\r\n     * @param {Object} settings\r\n     * @return {Glide}\r\n     */\n\n  }, {\n    key: \"update\",\n    value: function update() {\n      var settings = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      this.settings = mergeOptions(this.settings, settings);\n\n      if (settings.hasOwnProperty('startAt')) {\n        this.index = settings.startAt;\n      }\n\n      this._e.emit('update');\n\n      return this;\n    }\n    /**\r\n     * Change slide with specified pattern. A pattern must be in the special format:\r\n     * `>` - Move one forward\r\n     * `<` - Move one backward\r\n     * `={i}` - Go to {i} zero-based slide (eq. '=1', will go to second slide)\r\n     * `>>` - Rewinds to end (last slide)\r\n     * `<<` - Rewinds to start (first slide)\r\n     * `|>` - Move one viewport forward\r\n     * `|<` - Move one viewport backward\r\n     *\r\n     * @param {String} pattern\r\n     * @return {Glide}\r\n     */\n\n  }, {\n    key: \"go\",\n    value: function go(pattern) {\n      this._c.Run.make(pattern);\n\n      return this;\n    }\n    /**\r\n     * Move track by specified distance.\r\n     *\r\n     * @param {String} distance\r\n     * @return {Glide}\r\n     */\n\n  }, {\n    key: \"move\",\n    value: function move(distance) {\n      this._c.Transition.disable();\n\n      this._c.Move.make(distance);\n\n      return this;\n    }\n    /**\r\n     * Destroy instance and revert all changes done by this._c.\r\n     *\r\n     * @return {Glide}\r\n     */\n\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      this._e.emit('destroy');\n\n      return this;\n    }\n    /**\r\n     * Start instance autoplaying.\r\n     *\r\n     * @param {Boolean|Number} interval Run autoplaying with passed interval regardless of `autoplay` settings\r\n     * @return {Glide}\r\n     */\n\n  }, {\n    key: \"play\",\n    value: function play() {\n      var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;\n\n      if (interval) {\n        this.settings.autoplay = interval;\n      }\n\n      this._e.emit('play');\n\n      return this;\n    }\n    /**\r\n     * Stop instance autoplaying.\r\n     *\r\n     * @return {Glide}\r\n     */\n\n  }, {\n    key: \"pause\",\n    value: function pause() {\n      this._e.emit('pause');\n\n      return this;\n    }\n    /**\r\n     * Sets glide into a idle status.\r\n     *\r\n     * @return {Glide}\r\n     */\n\n  }, {\n    key: \"disable\",\n    value: function disable() {\n      this.disabled = true;\n      return this;\n    }\n    /**\r\n     * Sets glide into a active status.\r\n     *\r\n     * @return {Glide}\r\n     */\n\n  }, {\n    key: \"enable\",\n    value: function enable() {\n      this.disabled = false;\n      return this;\n    }\n    /**\r\n     * Adds cuutom event listener with handler.\r\n     *\r\n     * @param  {String|Array} event\r\n     * @param  {Function} handler\r\n     * @return {Glide}\r\n     */\n\n  }, {\n    key: \"on\",\n    value: function on(event, handler) {\n      this._e.on(event, handler);\n\n      return this;\n    }\n    /**\r\n     * Checks if glide is a precised type.\r\n     *\r\n     * @param  {String} name\r\n     * @return {Boolean}\r\n     */\n\n  }, {\n    key: \"isType\",\n    value: function isType(name) {\n      return this.settings.type === name;\n    }\n    /**\r\n     * Gets value of the core options.\r\n     *\r\n     * @return {Object}\r\n     */\n\n  }, {\n    key: \"settings\",\n    get: function get() {\n      return this._o;\n    }\n    /**\r\n     * Sets value of the core options.\r\n     *\r\n     * @param  {Object} o\r\n     * @return {Void}\r\n     */\n    ,\n    set: function set(o) {\n      if (isObject(o)) {\n        this._o = o;\n      } else {\n        warn('Options must be an `object` instance.');\n      }\n    }\n    /**\r\n     * Gets current index of the slider.\r\n     *\r\n     * @return {Object}\r\n     */\n\n  }, {\n    key: \"index\",\n    get: function get() {\n      return this._i;\n    }\n    /**\r\n     * Sets current index a slider.\r\n     *\r\n     * @return {Object}\r\n     */\n    ,\n    set: function set(i) {\n      this._i = toInt(i);\n    }\n    /**\r\n     * Gets type name of the slider.\r\n     *\r\n     * @return {String}\r\n     */\n\n  }, {\n    key: \"type\",\n    get: function get() {\n      return this.settings.type;\n    }\n    /**\r\n     * Gets value of the idle status.\r\n     *\r\n     * @return {Boolean}\r\n     */\n\n  }, {\n    key: \"disabled\",\n    get: function get() {\n      return this._d;\n    }\n    /**\r\n     * Sets value of the idle status.\r\n     *\r\n     * @return {Boolean}\r\n     */\n    ,\n    set: function set(status) {\n      this._d = !!status;\n    }\n  }]);\n\n  return Glide;\n}();\n\nfunction Run (Glide, Components, Events) {\n  var Run = {\n    /**\n     * Initializes autorunning of the glide.\n     *\n     * @return {Void}\n     */\n    mount: function mount() {\n      this._o = false;\n    },\n\n    /**\n     * Makes glides running based on the passed moving schema.\n     *\n     * @param {String} move\n     */\n    make: function make(move) {\n      var _this = this;\n\n      if (!Glide.disabled) {\n        !Glide.settings.waitForTransition || Glide.disable();\n        this.move = move;\n        Events.emit('run.before', this.move);\n        this.calculate();\n        Events.emit('run', this.move);\n        Components.Transition.after(function () {\n          if (_this.isStart()) {\n            Events.emit('run.start', _this.move);\n          }\n\n          if (_this.isEnd()) {\n            Events.emit('run.end', _this.move);\n          }\n\n          if (_this.isOffset()) {\n            _this._o = false;\n            Events.emit('run.offset', _this.move);\n          }\n\n          Events.emit('run.after', _this.move);\n          Glide.enable();\n        });\n      }\n    },\n\n    /**\n     * Calculates current index based on defined move.\n     *\n     * @return {Number|Undefined}\n     */\n    calculate: function calculate() {\n      var move = this.move,\n          length = this.length;\n      var steps = move.steps,\n          direction = move.direction; // By default assume that size of view is equal to one slide\n\n      var viewSize = 1; // While direction is `=` we want jump to\n      // a specified index described in steps.\n\n      if (direction === '=') {\n        // Check if bound is true, \n        // as we want to avoid whitespaces.\n        if (Glide.settings.bound && toInt(steps) > length) {\n          Glide.index = length;\n          return;\n        }\n\n        Glide.index = steps;\n        return;\n      } // When pattern is equal to `>>` we want\n      // fast forward to the last slide.\n\n\n      if (direction === '>' && steps === '>') {\n        Glide.index = length;\n        return;\n      } // When pattern is equal to `<<` we want\n      // fast forward to the first slide.\n\n\n      if (direction === '<' && steps === '<') {\n        Glide.index = 0;\n        return;\n      } // pagination movement\n\n\n      if (direction === '|') {\n        viewSize = Glide.settings.perView || 1;\n      } // we are moving forward\n\n\n      if (direction === '>' || direction === '|' && steps === '>') {\n        var index = calculateForwardIndex(viewSize);\n\n        if (index > length) {\n          this._o = true;\n        }\n\n        Glide.index = normalizeForwardIndex(index, viewSize);\n        return;\n      } // we are moving backward\n\n\n      if (direction === '<' || direction === '|' && steps === '<') {\n        var _index = calculateBackwardIndex(viewSize);\n\n        if (_index < 0) {\n          this._o = true;\n        }\n\n        Glide.index = normalizeBackwardIndex(_index, viewSize);\n        return;\n      }\n\n      warn(\"Invalid direction pattern [\".concat(direction).concat(steps, \"] has been used\"));\n    },\n\n    /**\n     * Checks if we are on the first slide.\n     *\n     * @return {Boolean}\n     */\n    isStart: function isStart() {\n      return Glide.index <= 0;\n    },\n\n    /**\n     * Checks if we are on the last slide.\n     *\n     * @return {Boolean}\n     */\n    isEnd: function isEnd() {\n      return Glide.index >= this.length;\n    },\n\n    /**\n     * Checks if we are making a offset run.\n     *\n     * @param {String} direction\n     * @return {Boolean}\n     */\n    isOffset: function isOffset() {\n      var direction = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : undefined;\n\n      if (!direction) {\n        return this._o;\n      }\n\n      if (!this._o) {\n        return false;\n      } // did we view to the right?\n\n\n      if (direction === '|>') {\n        return this.move.direction === '|' && this.move.steps === '>';\n      } // did we view to the left?\n\n\n      if (direction === '|<') {\n        return this.move.direction === '|' && this.move.steps === '<';\n      }\n\n      return this.move.direction === direction;\n    },\n\n    /**\n     * Checks if bound mode is active\n     *\n     * @return {Boolean}\n     */\n    isBound: function isBound() {\n      return Glide.isType('slider') && Glide.settings.focusAt !== 'center' && Glide.settings.bound;\n    }\n  };\n  /**\n   * Returns index value to move forward/to the right\n   *\n   * @param viewSize\n   * @returns {Number}\n   */\n\n  function calculateForwardIndex(viewSize) {\n    var index = Glide.index;\n\n    if (Glide.isType('carousel')) {\n      return index + viewSize;\n    }\n\n    return index + (viewSize - index % viewSize);\n  }\n  /**\n   * Normalizes the given forward index based on glide settings, preventing it to exceed certain boundaries\n   *\n   * @param index\n   * @param length\n   * @param viewSize\n   * @returns {Number}\n   */\n\n\n  function normalizeForwardIndex(index, viewSize) {\n    var length = Run.length;\n\n    if (index <= length) {\n      return index;\n    }\n\n    if (Glide.isType('carousel')) {\n      return index - (length + 1);\n    }\n\n    if (Glide.settings.rewind) {\n      // bound does funny things with the length, therefor we have to be certain\n      // that we are on the last possible index value given by bound\n      if (Run.isBound() && !Run.isEnd()) {\n        return length;\n      }\n\n      return 0;\n    }\n\n    if (Run.isBound()) {\n      return length;\n    }\n\n    return Math.floor(length / viewSize) * viewSize;\n  }\n  /**\n   * Calculates index value to move backward/to the left\n   *\n   * @param viewSize\n   * @returns {Number}\n   */\n\n\n  function calculateBackwardIndex(viewSize) {\n    var index = Glide.index;\n\n    if (Glide.isType('carousel')) {\n      return index - viewSize;\n    } // ensure our back navigation results in the same index as a forward navigation\n    // to experience a homogeneous paging\n\n\n    var view = Math.ceil(index / viewSize);\n    return (view - 1) * viewSize;\n  }\n  /**\n   * Normalizes the given backward index based on glide settings, preventing it to exceed certain boundaries\n   *\n   * @param index\n   * @param length\n   * @param viewSize\n   * @returns {*}\n   */\n\n\n  function normalizeBackwardIndex(index, viewSize) {\n    var length = Run.length;\n\n    if (index >= 0) {\n      return index;\n    }\n\n    if (Glide.isType('carousel')) {\n      return index + (length + 1);\n    }\n\n    if (Glide.settings.rewind) {\n      // bound does funny things with the length, therefor we have to be certain\n      // that we are on first possible index value before we to rewind to the length given by bound\n      if (Run.isBound() && Run.isStart()) {\n        return length;\n      }\n\n      return Math.floor(length / viewSize) * viewSize;\n    }\n\n    return 0;\n  }\n\n  define(Run, 'move', {\n    /**\n     * Gets value of the move schema.\n     *\n     * @returns {Object}\n     */\n    get: function get() {\n      return this._m;\n    },\n\n    /**\n     * Sets value of the move schema.\n     *\n     * @returns {Object}\n     */\n    set: function set(value) {\n      var step = value.substr(1);\n      this._m = {\n        direction: value.substr(0, 1),\n        steps: step ? toInt(step) ? toInt(step) : step : 0\n      };\n    }\n  });\n  define(Run, 'length', {\n    /**\n     * Gets value of the running distance based\n     * on zero-indexing number of slides.\n     *\n     * @return {Number}\n     */\n    get: function get() {\n      var settings = Glide.settings;\n      var length = Components.Html.slides.length; // If the `bound` option is active, a maximum running distance should be\n      // reduced by `perView` and `focusAt` settings. Running distance\n      // should end before creating an empty space after instance.\n\n      if (this.isBound()) {\n        return length - 1 - (toInt(settings.perView) - 1) + toInt(settings.focusAt);\n      }\n\n      return length - 1;\n    }\n  });\n  define(Run, 'offset', {\n    /**\n     * Gets status of the offsetting flag.\n     *\n     * @return {Boolean}\n     */\n    get: function get() {\n      return this._o;\n    }\n  });\n  return Run;\n}\n\n/**\n * Returns a current time.\n *\n * @return {Number}\n */\nfunction now() {\n  return new Date().getTime();\n}\n\n/**\n * Returns a function, that, when invoked, will only be triggered\n * at most once during a given window of time.\n *\n * @param {Function} func\n * @param {Number} wait\n * @param {Object=} options\n * @return {Function}\n *\n * @see https://github.com/jashkenas/underscore\n */\n\nfunction throttle(func, wait) {\n  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  var timeout, context, args, result;\n  var previous = 0;\n\n  var later = function later() {\n    previous = options.leading === false ? 0 : now();\n    timeout = null;\n    result = func.apply(context, args);\n    if (!timeout) context = args = null;\n  };\n\n  var throttled = function throttled() {\n    var at = now();\n    if (!previous && options.leading === false) previous = at;\n    var remaining = wait - (at - previous);\n    context = this;\n    args = arguments;\n\n    if (remaining <= 0 || remaining > wait) {\n      if (timeout) {\n        clearTimeout(timeout);\n        timeout = null;\n      }\n\n      previous = at;\n      result = func.apply(context, args);\n      if (!timeout) context = args = null;\n    } else if (!timeout && options.trailing !== false) {\n      timeout = setTimeout(later, remaining);\n    }\n\n    return result;\n  };\n\n  throttled.cancel = function () {\n    clearTimeout(timeout);\n    previous = 0;\n    timeout = context = args = null;\n  };\n\n  return throttled;\n}\n\nvar MARGIN_TYPE = {\n  ltr: ['marginLeft', 'marginRight'],\n  rtl: ['marginRight', 'marginLeft']\n};\nfunction Gaps (Glide, Components, Events) {\n  var Gaps = {\n    /**\n     * Applies gaps between slides. First and last\n     * slides do not receive it's edge margins.\n     *\n     * @param {HTMLCollection} slides\n     * @return {Void}\n     */\n    apply: function apply(slides) {\n      for (var i = 0, len = slides.length; i < len; i++) {\n        var style = slides[i].style;\n        var direction = Components.Direction.value;\n\n        if (i !== 0) {\n          style[MARGIN_TYPE[direction][0]] = \"\".concat(this.value / 2, \"px\");\n        } else {\n          style[MARGIN_TYPE[direction][0]] = '';\n        }\n\n        if (i !== slides.length - 1) {\n          style[MARGIN_TYPE[direction][1]] = \"\".concat(this.value / 2, \"px\");\n        } else {\n          style[MARGIN_TYPE[direction][1]] = '';\n        }\n      }\n    },\n\n    /**\n     * Removes gaps from the slides.\n     *\n     * @param {HTMLCollection} slides\n     * @returns {Void}\n    */\n    remove: function remove(slides) {\n      for (var i = 0, len = slides.length; i < len; i++) {\n        var style = slides[i].style;\n        style.marginLeft = '';\n        style.marginRight = '';\n      }\n    }\n  };\n  define(Gaps, 'value', {\n    /**\n     * Gets value of the gap.\n     *\n     * @returns {Number}\n     */\n    get: function get() {\n      return toInt(Glide.settings.gap);\n    }\n  });\n  define(Gaps, 'grow', {\n    /**\n     * Gets additional dimensions value caused by gaps.\n     * Used to increase width of the slides wrapper.\n     *\n     * @returns {Number}\n     */\n    get: function get() {\n      return Gaps.value * Components.Sizes.length;\n    }\n  });\n  define(Gaps, 'reductor', {\n    /**\n     * Gets reduction value caused by gaps.\n     * Used to subtract width of the slides.\n     *\n     * @returns {Number}\n     */\n    get: function get() {\n      var perView = Glide.settings.perView;\n      return Gaps.value * (perView - 1) / perView;\n    }\n  });\n  /**\n   * Apply calculated gaps:\n   * - after building, so slides (including clones) will receive proper margins\n   * - on updating via API, to recalculate gaps with new options\n   */\n\n  Events.on(['build.after', 'update'], throttle(function () {\n    Gaps.apply(Components.Html.wrapper.children);\n  }, 30));\n  /**\n   * Remove gaps:\n   * - on destroying to bring markup to its inital state\n   */\n\n  Events.on('destroy', function () {\n    Gaps.remove(Components.Html.wrapper.children);\n  });\n  return Gaps;\n}\n\n/**\n * Finds siblings nodes of the passed node.\n *\n * @param  {Element} node\n * @return {Array}\n */\nfunction siblings(node) {\n  if (node && node.parentNode) {\n    var n = node.parentNode.firstChild;\n    var matched = [];\n\n    for (; n; n = n.nextSibling) {\n      if (n.nodeType === 1 && n !== node) {\n        matched.push(n);\n      }\n    }\n\n    return matched;\n  }\n\n  return [];\n}\n/**\n * Coerces a NodeList to an Array.\n *\n * @param  {NodeList} nodeList\n * @return {Array}\n */\n\nfunction toArray(nodeList) {\n  return Array.prototype.slice.call(nodeList);\n}\n\nvar TRACK_SELECTOR = '[data-glide-el=\"track\"]';\nfunction Html (Glide, Components, Events) {\n  var Html = {\n    /**\n     * Setup slider HTML nodes.\n     *\n     * @param {Glide} glide\n     */\n    mount: function mount() {\n      this.root = Glide.selector;\n      this.track = this.root.querySelector(TRACK_SELECTOR);\n      this.collectSlides();\n    },\n\n    /**\n     * Collect slides\n     */\n    collectSlides: function collectSlides() {\n      this.slides = toArray(this.wrapper.children).filter(function (slide) {\n        return !slide.classList.contains(Glide.settings.classes.slide.clone);\n      });\n    }\n  };\n  define(Html, 'root', {\n    /**\n     * Gets node of the glide main element.\n     *\n     * @return {Object}\n     */\n    get: function get() {\n      return Html._r;\n    },\n\n    /**\n     * Sets node of the glide main element.\n     *\n     * @return {Object}\n     */\n    set: function set(r) {\n      if (isString(r)) {\n        r = document.querySelector(r);\n      }\n\n      if (r !== null) {\n        Html._r = r;\n      } else {\n        warn('Root element must be a existing Html node');\n      }\n    }\n  });\n  define(Html, 'track', {\n    /**\n     * Gets node of the glide track with slides.\n     *\n     * @return {Object}\n     */\n    get: function get() {\n      return Html._t;\n    },\n\n    /**\n     * Sets node of the glide track with slides.\n     *\n     * @return {Object}\n     */\n    set: function set(t) {\n      Html._t = t;\n    }\n  });\n  define(Html, 'wrapper', {\n    /**\n     * Gets node of the slides wrapper.\n     *\n     * @return {Object}\n     */\n    get: function get() {\n      return Html.track.children[0];\n    }\n  });\n  /**\n   * Add/remove/reorder dynamic slides\n   */\n\n  Events.on('update', function () {\n    Html.collectSlides();\n  });\n  return Html;\n}\n\nfunction Peek (Glide, Components, Events) {\n  var Peek = {\n    /**\n     * Setups how much to peek based on settings.\n     *\n     * @return {Void}\n     */\n    mount: function mount() {\n      this.value = Glide.settings.peek;\n    }\n  };\n  define(Peek, 'value', {\n    /**\n     * Gets value of the peek.\n     *\n     * @returns {Number|Object}\n     */\n    get: function get() {\n      return Peek._v;\n    },\n\n    /**\n     * Sets value of the peek.\n     *\n     * @param {Number|Object} value\n     * @return {Void}\n     */\n    set: function set(value) {\n      if (isObject(value)) {\n        value.before = toInt(value.before);\n        value.after = toInt(value.after);\n      } else {\n        value = toInt(value);\n      }\n\n      Peek._v = value;\n    }\n  });\n  define(Peek, 'reductor', {\n    /**\n     * Gets reduction value caused by peek.\n     *\n     * @returns {Number}\n     */\n    get: function get() {\n      var value = Peek.value;\n      var perView = Glide.settings.perView;\n\n      if (isObject(value)) {\n        return value.before / perView + value.after / perView;\n      }\n\n      return value * 2 / perView;\n    }\n  });\n  /**\n   * Recalculate peeking sizes on:\n   * - when resizing window to update to proper percents\n   */\n\n  Events.on(['resize', 'update'], function () {\n    Peek.mount();\n  });\n  return Peek;\n}\n\nfunction Move (Glide, Components, Events) {\n  var Move = {\n    /**\n     * Constructs move component.\n     *\n     * @returns {Void}\n     */\n    mount: function mount() {\n      this._o = 0;\n    },\n\n    /**\n     * Calculates a movement value based on passed offset and currently active index.\n     *\n     * @param  {Number} offset\n     * @return {Void}\n     */\n    make: function make() {\n      var _this = this;\n\n      var offset = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;\n      this.offset = offset;\n      Events.emit('move', {\n        movement: this.value\n      });\n      Components.Transition.after(function () {\n        Events.emit('move.after', {\n          movement: _this.value\n        });\n      });\n    }\n  };\n  define(Move, 'offset', {\n    /**\n     * Gets an offset value used to modify current translate.\n     *\n     * @return {Object}\n     */\n    get: function get() {\n      return Move._o;\n    },\n\n    /**\n     * Sets an offset value used to modify current translate.\n     *\n     * @return {Object}\n     */\n    set: function set(value) {\n      Move._o = !isUndefined(value) ? toInt(value) : 0;\n    }\n  });\n  define(Move, 'translate', {\n    /**\n     * Gets a raw movement value.\n     *\n     * @return {Number}\n     */\n    get: function get() {\n      return Components.Sizes.slideWidth * Glide.index;\n    }\n  });\n  define(Move, 'value', {\n    /**\n     * Gets an actual movement value corrected by offset.\n     *\n     * @return {Number}\n     */\n    get: function get() {\n      var offset = this.offset;\n      var translate = this.translate;\n\n      if (Components.Direction.is('rtl')) {\n        return translate + offset;\n      }\n\n      return translate - offset;\n    }\n  });\n  /**\n   * Make movement to proper slide on:\n   * - before build, so glide will start at `startAt` index\n   * - on each standard run to move to newly calculated index\n   */\n\n  Events.on(['build.before', 'run'], function () {\n    Move.make();\n  });\n  return Move;\n}\n\nfunction Sizes (Glide, Components, Events) {\n  var Sizes = {\n    /**\n     * Setups dimensions of slides.\n     *\n     * @return {Void}\n     */\n    setupSlides: function setupSlides() {\n      var width = \"\".concat(this.slideWidth, \"px\");\n      var slides = Components.Html.slides;\n\n      for (var i = 0; i < slides.length; i++) {\n        slides[i].style.width = width;\n      }\n    },\n\n    /**\n     * Setups dimensions of slides wrapper.\n     *\n     * @return {Void}\n     */\n    setupWrapper: function setupWrapper() {\n      Components.Html.wrapper.style.width = \"\".concat(this.wrapperSize, \"px\");\n    },\n\n    /**\n     * Removes applied styles from HTML elements.\n     *\n     * @returns {Void}\n     */\n    remove: function remove() {\n      var slides = Components.Html.slides;\n\n      for (var i = 0; i < slides.length; i++) {\n        slides[i].style.width = '';\n      }\n\n      Components.Html.wrapper.style.width = '';\n    }\n  };\n  define(Sizes, 'length', {\n    /**\n     * Gets count number of the slides.\n     *\n     * @return {Number}\n     */\n    get: function get() {\n      return Components.Html.slides.length;\n    }\n  });\n  define(Sizes, 'width', {\n    /**\n     * Gets width value of the slider (visible area).\n     *\n     * @return {Number}\n     */\n    get: function get() {\n      return Components.Html.track.offsetWidth;\n    }\n  });\n  define(Sizes, 'wrapperSize', {\n    /**\n     * Gets size of the slides wrapper.\n     *\n     * @return {Number}\n     */\n    get: function get() {\n      return Sizes.slideWidth * Sizes.length + Components.Gaps.grow + Components.Clones.grow;\n    }\n  });\n  define(Sizes, 'slideWidth', {\n    /**\n     * Gets width value of a single slide.\n     *\n     * @return {Number}\n     */\n    get: function get() {\n      return Sizes.width / Glide.settings.perView - Components.Peek.reductor - Components.Gaps.reductor;\n    }\n  });\n  /**\n   * Apply calculated glide's dimensions:\n   * - before building, so other dimensions (e.g. translate) will be calculated propertly\n   * - when resizing window to recalculate sildes dimensions\n   * - on updating via API, to calculate dimensions based on new options\n   */\n\n  Events.on(['build.before', 'resize', 'update'], function () {\n    Sizes.setupSlides();\n    Sizes.setupWrapper();\n  });\n  /**\n   * Remove calculated glide's dimensions:\n   * - on destoting to bring markup to its inital state\n   */\n\n  Events.on('destroy', function () {\n    Sizes.remove();\n  });\n  return Sizes;\n}\n\nfunction Build (Glide, Components, Events) {\n  var Build = {\n    /**\n     * Init glide building. Adds classes, sets\n     * dimensions and setups initial state.\n     *\n     * @return {Void}\n     */\n    mount: function mount() {\n      Events.emit('build.before');\n      this.typeClass();\n      this.activeClass();\n      Events.emit('build.after');\n    },\n\n    /**\n     * Adds `type` class to the glide element.\n     *\n     * @return {Void}\n     */\n    typeClass: function typeClass() {\n      Components.Html.root.classList.add(Glide.settings.classes.type[Glide.settings.type]);\n    },\n\n    /**\n     * Sets active class to current slide.\n     *\n     * @return {Void}\n     */\n    activeClass: function activeClass() {\n      var classes = Glide.settings.classes;\n      var slide = Components.Html.slides[Glide.index];\n\n      if (slide) {\n        slide.classList.add(classes.slide.active);\n        siblings(slide).forEach(function (sibling) {\n          sibling.classList.remove(classes.slide.active);\n        });\n      }\n    },\n\n    /**\n     * Removes HTML classes applied at building.\n     *\n     * @return {Void}\n     */\n    removeClasses: function removeClasses() {\n      var _Glide$settings$class = Glide.settings.classes,\n          type = _Glide$settings$class.type,\n          slide = _Glide$settings$class.slide;\n      Components.Html.root.classList.remove(type[Glide.settings.type]);\n      Components.Html.slides.forEach(function (sibling) {\n        sibling.classList.remove(slide.active);\n      });\n    }\n  };\n  /**\n   * Clear building classes:\n   * - on destroying to bring HTML to its initial state\n   * - on updating to remove classes before remounting component\n   */\n\n  Events.on(['destroy', 'update'], function () {\n    Build.removeClasses();\n  });\n  /**\n   * Remount component:\n   * - on resizing of the window to calculate new dimensions\n   * - on updating settings via API\n   */\n\n  Events.on(['resize', 'update'], function () {\n    Build.mount();\n  });\n  /**\n   * Swap active class of current slide:\n   * - after each move to the new index\n   */\n\n  Events.on('move.after', function () {\n    Build.activeClass();\n  });\n  return Build;\n}\n\nfunction Clones (Glide, Components, Events) {\n  var Clones = {\n    /**\n     * Create pattern map and collect slides to be cloned.\n     */\n    mount: function mount() {\n      this.items = [];\n\n      if (Glide.isType('carousel')) {\n        this.items = this.collect();\n      }\n    },\n\n    /**\n     * Collect clones with pattern.\n     *\n     * @return {[]}\n     */\n    collect: function collect() {\n      var items = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];\n      var slides = Components.Html.slides;\n      var _Glide$settings = Glide.settings,\n          perView = _Glide$settings.perView,\n          classes = _Glide$settings.classes,\n          cloningRatio = _Glide$settings.cloningRatio;\n\n      if (slides.length > 0) {\n        var peekIncrementer = +!!Glide.settings.peek;\n        var cloneCount = perView + peekIncrementer + Math.round(perView / 2);\n        var append = slides.slice(0, cloneCount).reverse();\n        var prepend = slides.slice(cloneCount * -1);\n\n        for (var r = 0; r < Math.max(cloningRatio, Math.floor(perView / slides.length)); r++) {\n          for (var i = 0; i < append.length; i++) {\n            var clone = append[i].cloneNode(true);\n            clone.classList.add(classes.slide.clone);\n            items.push(clone);\n          }\n\n          for (var _i = 0; _i < prepend.length; _i++) {\n            var _clone = prepend[_i].cloneNode(true);\n\n            _clone.classList.add(classes.slide.clone);\n\n            items.unshift(_clone);\n          }\n        }\n      }\n\n      return items;\n    },\n\n    /**\n     * Append cloned slides with generated pattern.\n     *\n     * @return {Void}\n     */\n    append: function append() {\n      var items = this.items;\n      var _Components$Html = Components.Html,\n          wrapper = _Components$Html.wrapper,\n          slides = _Components$Html.slides;\n      var half = Math.floor(items.length / 2);\n      var prepend = items.slice(0, half).reverse();\n      var append = items.slice(half * -1).reverse();\n      var width = \"\".concat(Components.Sizes.slideWidth, \"px\");\n\n      for (var i = 0; i < append.length; i++) {\n        wrapper.appendChild(append[i]);\n      }\n\n      for (var _i2 = 0; _i2 < prepend.length; _i2++) {\n        wrapper.insertBefore(prepend[_i2], slides[0]);\n      }\n\n      for (var _i3 = 0; _i3 < items.length; _i3++) {\n        items[_i3].style.width = width;\n      }\n    },\n\n    /**\n     * Remove all cloned slides.\n     *\n     * @return {Void}\n     */\n    remove: function remove() {\n      var items = this.items;\n\n      for (var i = 0; i < items.length; i++) {\n        Components.Html.wrapper.removeChild(items[i]);\n      }\n    }\n  };\n  define(Clones, 'grow', {\n    /**\n     * Gets additional dimensions value caused by clones.\n     *\n     * @return {Number}\n     */\n    get: function get() {\n      return (Components.Sizes.slideWidth + Components.Gaps.value) * Clones.items.length;\n    }\n  });\n  /**\n   * Append additional slide's clones:\n   * - while glide's type is `carousel`\n   */\n\n  Events.on('update', function () {\n    Clones.remove();\n    Clones.mount();\n    Clones.append();\n  });\n  /**\n   * Append additional slide's clones:\n   * - while glide's type is `carousel`\n   */\n\n  Events.on('build.before', function () {\n    if (Glide.isType('carousel')) {\n      Clones.append();\n    }\n  });\n  /**\n   * Remove clones HTMLElements:\n   * - on destroying, to bring HTML to its initial state\n   */\n\n  Events.on('destroy', function () {\n    Clones.remove();\n  });\n  return Clones;\n}\n\nvar EventsBinder = /*#__PURE__*/function () {\n  /**\n   * Construct a EventsBinder instance.\n   */\n  function EventsBinder() {\n    var listeners = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n\n    _classCallCheck(this, EventsBinder);\n\n    this.listeners = listeners;\n  }\n  /**\n   * Adds events listeners to arrows HTML elements.\n   *\n   * @param  {String|Array} events\n   * @param  {Element|Window|Document} el\n   * @param  {Function} closure\n   * @param  {Boolean|Object} capture\n   * @return {Void}\n   */\n\n\n  _createClass(EventsBinder, [{\n    key: \"on\",\n    value: function on(events, el, closure) {\n      var capture = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;\n\n      if (isString(events)) {\n        events = [events];\n      }\n\n      for (var i = 0; i < events.length; i++) {\n        this.listeners[events[i]] = closure;\n        el.addEventListener(events[i], this.listeners[events[i]], capture);\n      }\n    }\n    /**\n     * Removes event listeners from arrows HTML elements.\n     *\n     * @param  {String|Array} events\n     * @param  {Element|Window|Document} el\n     * @param  {Boolean|Object} capture\n     * @return {Void}\n     */\n\n  }, {\n    key: \"off\",\n    value: function off(events, el) {\n      var capture = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;\n\n      if (isString(events)) {\n        events = [events];\n      }\n\n      for (var i = 0; i < events.length; i++) {\n        el.removeEventListener(events[i], this.listeners[events[i]], capture);\n      }\n    }\n    /**\n     * Destroy collected listeners.\n     *\n     * @returns {Void}\n     */\n\n  }, {\n    key: \"destroy\",\n    value: function destroy() {\n      delete this.listeners;\n    }\n  }]);\n\n  return EventsBinder;\n}();\n\nfunction Resize (Glide, Components, Events) {\n  /**\n   * Instance of the binder for DOM Events.\n   *\n   * @type {EventsBinder}\n   */\n  var Binder = new EventsBinder();\n  var Resize = {\n    /**\n     * Initializes window bindings.\n     */\n    mount: function mount() {\n      this.bind();\n    },\n\n    /**\n     * Binds `rezsize` listener to the window.\n     * It's a costly event, so we are debouncing it.\n     *\n     * @return {Void}\n     */\n    bind: function bind() {\n      Binder.on('resize', window, throttle(function () {\n        Events.emit('resize');\n      }, Glide.settings.throttle));\n    },\n\n    /**\n     * Unbinds listeners from the window.\n     *\n     * @return {Void}\n     */\n    unbind: function unbind() {\n      Binder.off('resize', window);\n    }\n  };\n  /**\n   * Remove bindings from window:\n   * - on destroying, to remove added EventListener\n   */\n\n  Events.on('destroy', function () {\n    Resize.unbind();\n    Binder.destroy();\n  });\n  return Resize;\n}\n\nvar VALID_DIRECTIONS = ['ltr', 'rtl'];\nvar FLIPED_MOVEMENTS = {\n  '>': '<',\n  '<': '>',\n  '=': '='\n};\nfunction Direction (Glide, Components, Events) {\n  var Direction = {\n    /**\n     * Setups gap value based on settings.\n     *\n     * @return {Void}\n     */\n    mount: function mount() {\n      this.value = Glide.settings.direction;\n    },\n\n    /**\n     * Resolves pattern based on direction value\n     *\n     * @param {String} pattern\n     * @returns {String}\n     */\n    resolve: function resolve(pattern) {\n      var token = pattern.slice(0, 1);\n\n      if (this.is('rtl')) {\n        return pattern.split(token).join(FLIPED_MOVEMENTS[token]);\n      }\n\n      return pattern;\n    },\n\n    /**\n     * Checks value of direction mode.\n     *\n     * @param {String} direction\n     * @returns {Boolean}\n     */\n    is: function is(direction) {\n      return this.value === direction;\n    },\n\n    /**\n     * Applies direction class to the root HTML element.\n     *\n     * @return {Void}\n     */\n    addClass: function addClass() {\n      Components.Html.root.classList.add(Glide.settings.classes.direction[this.value]);\n    },\n\n    /**\n     * Removes direction class from the root HTML element.\n     *\n     * @return {Void}\n     */\n    removeClass: function removeClass() {\n      Components.Html.root.classList.remove(Glide.settings.classes.direction[this.value]);\n    }\n  };\n  define(Direction, 'value', {\n    /**\n     * Gets value of the direction.\n     *\n     * @returns {Number}\n     */\n    get: function get() {\n      return Direction._v;\n    },\n\n    /**\n     * Sets value of the direction.\n     *\n     * @param {String} value\n     * @return {Void}\n     */\n    set: function set(value) {\n      if (VALID_DIRECTIONS.indexOf(value) > -1) {\n        Direction._v = value;\n      } else {\n        warn('Direction value must be `ltr` or `rtl`');\n      }\n    }\n  });\n  /**\n   * Clear direction class:\n   * - on destroy to bring HTML to its initial state\n   * - on update to remove class before reappling bellow\n   */\n\n  Events.on(['destroy', 'update'], function () {\n    Direction.removeClass();\n  });\n  /**\n   * Remount component:\n   * - on update to reflect changes in direction value\n   */\n\n  Events.on('update', function () {\n    Direction.mount();\n  });\n  /**\n   * Apply direction class:\n   * - before building to apply class for the first time\n   * - on updating to reapply direction class that may changed\n   */\n\n  Events.on(['build.before', 'update'], function () {\n    Direction.addClass();\n  });\n  return Direction;\n}\n\n/**\n * Reflects value of glide movement.\n *\n * @param  {Object} Glide\n * @param  {Object} Components\n * @return {Object}\n */\nfunction Rtl (Glide, Components) {\n  return {\n    /**\n     * Negates the passed translate if glide is in RTL option.\n     *\n     * @param  {Number} translate\n     * @return {Number}\n     */\n    modify: function modify(translate) {\n      if (Components.Direction.is('rtl')) {\n        return -translate;\n      }\n\n      return translate;\n    }\n  };\n}\n\n/**\n * Updates glide movement with a `gap` settings.\n *\n * @param  {Object} Glide\n * @param  {Object} Components\n * @return {Object}\n */\nfunction Gap (Glide, Components) {\n  return {\n    /**\n     * Modifies passed translate value with number in the `gap` settings.\n     *\n     * @param  {Number} translate\n     * @return {Number}\n     */\n    modify: function modify(translate) {\n      var multiplier = Math.floor(translate / Components.Sizes.slideWidth);\n      return translate + Components.Gaps.value * multiplier;\n    }\n  };\n}\n\n/**\n * Updates glide movement with width of additional clones width.\n *\n * @param  {Object} Glide\n * @param  {Object} Components\n * @return {Object}\n */\nfunction Grow (Glide, Components) {\n  return {\n    /**\n     * Adds to the passed translate width of the half of clones.\n     *\n     * @param  {Number} translate\n     * @return {Number}\n     */\n    modify: function modify(translate) {\n      return translate + Components.Clones.grow / 2;\n    }\n  };\n}\n\n/**\n * Updates glide movement with a `peek` settings.\n *\n * @param  {Object} Glide\n * @param  {Object} Components\n * @return {Object}\n */\n\nfunction Peeking (Glide, Components) {\n  return {\n    /**\n     * Modifies passed translate value with a `peek` setting.\n     *\n     * @param  {Number} translate\n     * @return {Number}\n     */\n    modify: function modify(translate) {\n      if (Glide.settings.focusAt >= 0) {\n        var peek = Components.Peek.value;\n\n        if (isObject(peek)) {\n          return translate - peek.before;\n        }\n\n        return translate - peek;\n      }\n\n      return translate;\n    }\n  };\n}\n\n/**\n * Updates glide movement with a `focusAt` settings.\n *\n * @param  {Object} Glide\n * @param  {Object} Components\n * @return {Object}\n */\nfunction Focusing (Glide, Components) {\n  return {\n    /**\n     * Modifies passed translate value with index in the `focusAt` setting.\n     *\n     * @param  {Number} translate\n     * @return {Number}\n     */\n    modify: function modify(translate) {\n      var gap = Components.Gaps.value;\n      var width = Components.Sizes.width;\n      var focusAt = Glide.settings.focusAt;\n      var slideWidth = Components.Sizes.slideWidth;\n\n      if (focusAt === 'center') {\n        return translate - (width / 2 - slideWidth / 2);\n      }\n\n      return translate - slideWidth * focusAt - gap * focusAt;\n    }\n  };\n}\n\n/**\n * Applies diffrent transformers on translate value.\n *\n * @param  {Object} Glide\n * @param  {Object} Components\n * @return {Object}\n */\n\nfunction mutator (Glide, Components, Events) {\n  /**\n   * Merge instance transformers with collection of default transformers.\n   * It's important that the Rtl component be last on the list,\n   * so it reflects all previous transformations.\n   *\n   * @type {Array}\n   */\n  var TRANSFORMERS = [Gap, Grow, Peeking, Focusing].concat(Glide._t, [Rtl]);\n  return {\n    /**\n     * Piplines translate value with registered transformers.\n     *\n     * @param  {Number} translate\n     * @return {Number}\n     */\n    mutate: function mutate(translate) {\n      for (var i = 0; i < TRANSFORMERS.length; i++) {\n        var transformer = TRANSFORMERS[i];\n\n        if (isFunction(transformer) && isFunction(transformer().modify)) {\n          translate = transformer(Glide, Components, Events).modify(translate);\n        } else {\n          warn('Transformer should be a function that returns an object with `modify()` method');\n        }\n      }\n\n      return translate;\n    }\n  };\n}\n\nfunction Translate (Glide, Components, Events) {\n  var Translate = {\n    /**\n     * Sets value of translate on HTML element.\n     *\n     * @param {Number} value\n     * @return {Void}\n     */\n    set: function set(value) {\n      var transform = mutator(Glide, Components).mutate(value);\n      var translate3d = \"translate3d(\".concat(-1 * transform, \"px, 0px, 0px)\");\n      Components.Html.wrapper.style.mozTransform = translate3d; // needed for supported Firefox 10-15\n\n      Components.Html.wrapper.style.webkitTransform = translate3d; // needed for supported Chrome 10-35, Safari 5.1-8, and Opera 15-22\n\n      Components.Html.wrapper.style.transform = translate3d;\n    },\n\n    /**\n     * Removes value of translate from HTML element.\n     *\n     * @return {Void}\n     */\n    remove: function remove() {\n      Components.Html.wrapper.style.transform = '';\n    },\n\n    /**\n     * @return {number}\n     */\n    getStartIndex: function getStartIndex() {\n      var length = Components.Sizes.length;\n      var index = Glide.index;\n      var perView = Glide.settings.perView;\n\n      if (Components.Run.isOffset('>') || Components.Run.isOffset('|>')) {\n        return length + (index - perView);\n      } // \"modulo length\" converts an index that equals length to zero\n\n\n      return (index + perView) % length;\n    },\n\n    /**\n     * @return {number}\n     */\n    getTravelDistance: function getTravelDistance() {\n      var travelDistance = Components.Sizes.slideWidth * Glide.settings.perView;\n\n      if (Components.Run.isOffset('>') || Components.Run.isOffset('|>')) {\n        // reverse travel distance so that we don't have to change subtract operations\n        return travelDistance * -1;\n      }\n\n      return travelDistance;\n    }\n  };\n  /**\n   * Set new translate value:\n   * - on move to reflect index change\n   * - on updating via API to reflect possible changes in options\n   */\n\n  Events.on('move', function (context) {\n    if (!Glide.isType('carousel') || !Components.Run.isOffset()) {\n      return Translate.set(context.movement);\n    }\n\n    Components.Transition.after(function () {\n      Events.emit('translate.jump');\n      Translate.set(Components.Sizes.slideWidth * Glide.index);\n    });\n    var startWidth = Components.Sizes.slideWidth * Components.Translate.getStartIndex();\n    return Translate.set(startWidth - Components.Translate.getTravelDistance());\n  });\n  /**\n   * Remove translate:\n   * - on destroying to bring markup to its inital state\n   */\n\n  Events.on('destroy', function () {\n    Translate.remove();\n  });\n  return Translate;\n}\n\nfunction Transition (Glide, Components, Events) {\n  /**\n   * Holds inactivity status of transition.\n   * When true transition is not applied.\n   *\n   * @type {Boolean}\n   */\n  var disabled = false;\n  var Transition = {\n    /**\n     * Composes string of the CSS transition.\n     *\n     * @param {String} property\n     * @return {String}\n     */\n    compose: function compose(property) {\n      var settings = Glide.settings;\n\n      if (disabled) {\n        return \"\".concat(property, \" 0ms \").concat(settings.animationTimingFunc);\n      }\n\n      return \"\".concat(property, \" \").concat(this.duration, \"ms \").concat(settings.animationTimingFunc);\n    },\n\n    /**\n     * Sets value of transition on HTML element.\n     *\n     * @param {String=} property\n     * @return {Void}\n     */\n    set: function set() {\n      var property = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'transform';\n      Components.Html.wrapper.style.transition = this.compose(property);\n    },\n\n    /**\n     * Removes value of transition from HTML element.\n     *\n     * @return {Void}\n     */\n    remove: function remove() {\n      Components.Html.wrapper.style.transition = '';\n    },\n\n    /**\n     * Runs callback after animation.\n     *\n     * @param  {Function} callback\n     * @return {Void}\n     */\n    after: function after(callback) {\n      setTimeout(function () {\n        callback();\n      }, this.duration);\n    },\n\n    /**\n     * Enable transition.\n     *\n     * @return {Void}\n     */\n    enable: function enable() {\n      disabled = false;\n      this.set();\n    },\n\n    /**\n     * Disable transition.\n     *\n     * @return {Void}\n     */\n    disable: function disable() {\n      disabled = true;\n      this.set();\n    }\n  };\n  define(Transition, 'duration', {\n    /**\n     * Gets duration of the transition based\n     * on currently running animation type.\n     *\n     * @return {Number}\n     */\n    get: function get() {\n      var settings = Glide.settings;\n\n      if (Glide.isType('slider') && Components.Run.offset) {\n        return settings.rewindDuration;\n      }\n\n      return settings.animationDuration;\n    }\n  });\n  /**\n   * Set transition `style` value:\n   * - on each moving, because it may be cleared by offset move\n   */\n\n  Events.on('move', function () {\n    Transition.set();\n  });\n  /**\n   * Disable transition:\n   * - before initial build to avoid transitioning from `0` to `startAt` index\n   * - while resizing window and recalculating dimensions\n   * - on jumping from offset transition at start and end edges in `carousel` type\n   */\n\n  Events.on(['build.before', 'resize', 'translate.jump'], function () {\n    Transition.disable();\n  });\n  /**\n   * Enable transition:\n   * - on each running, because it may be disabled by offset move\n   */\n\n  Events.on('run', function () {\n    Transition.enable();\n  });\n  /**\n   * Remove transition:\n   * - on destroying to bring markup to its inital state\n   */\n\n  Events.on('destroy', function () {\n    Transition.remove();\n  });\n  return Transition;\n}\n\n/**\n * Test via a getter in the options object to see\n * if the passive property is accessed.\n *\n * @see https://github.com/WICG/EventListenerOptions/blob/gh-pages/explainer.md#feature-detection\n */\nvar supportsPassive = false;\n\ntry {\n  var opts = Object.defineProperty({}, 'passive', {\n    get: function get() {\n      supportsPassive = true;\n    }\n  });\n  window.addEventListener('testPassive', null, opts);\n  window.removeEventListener('testPassive', null, opts);\n} catch (e) {}\n\nvar supportsPassive$1 = supportsPassive;\n\nvar START_EVENTS = ['touchstart', 'mousedown'];\nvar MOVE_EVENTS = ['touchmove', 'mousemove'];\nvar END_EVENTS = ['touchend', 'touchcancel', 'mouseup', 'mouseleave'];\nvar MOUSE_EVENTS = ['mousedown', 'mousemove', 'mouseup', 'mouseleave'];\nfunction Swipe (Glide, Components, Events) {\n  /**\n   * Instance of the binder for DOM Events.\n   *\n   * @type {EventsBinder}\n   */\n  var Binder = new EventsBinder();\n  var swipeSin = 0;\n  var swipeStartX = 0;\n  var swipeStartY = 0;\n  var disabled = false;\n  var capture = supportsPassive$1 ? {\n    passive: true\n  } : false;\n  var Swipe = {\n    /**\n     * Initializes swipe bindings.\n     *\n     * @return {Void}\n     */\n    mount: function mount() {\n      this.bindSwipeStart();\n    },\n\n    /**\n     * Handler for `swipestart` event. Calculates entry points of the user's tap.\n     *\n     * @param {Object} event\n     * @return {Void}\n     */\n    start: function start(event) {\n      if (!disabled && !Glide.disabled) {\n        this.disable();\n        var swipe = this.touches(event);\n        swipeSin = null;\n        swipeStartX = toInt(swipe.pageX);\n        swipeStartY = toInt(swipe.pageY);\n        this.bindSwipeMove();\n        this.bindSwipeEnd();\n        Events.emit('swipe.start');\n      }\n    },\n\n    /**\n     * Handler for `swipemove` event. Calculates user's tap angle and distance.\n     *\n     * @param {Object} event\n     */\n    move: function move(event) {\n      if (!Glide.disabled) {\n        var _Glide$settings = Glide.settings,\n            touchAngle = _Glide$settings.touchAngle,\n            touchRatio = _Glide$settings.touchRatio,\n            classes = _Glide$settings.classes;\n        var swipe = this.touches(event);\n        var subExSx = toInt(swipe.pageX) - swipeStartX;\n        var subEySy = toInt(swipe.pageY) - swipeStartY;\n        var powEX = Math.abs(subExSx << 2);\n        var powEY = Math.abs(subEySy << 2);\n        var swipeHypotenuse = Math.sqrt(powEX + powEY);\n        var swipeCathetus = Math.sqrt(powEY);\n        swipeSin = Math.asin(swipeCathetus / swipeHypotenuse);\n\n        if (swipeSin * 180 / Math.PI < touchAngle) {\n          event.stopPropagation();\n          Components.Move.make(subExSx * toFloat(touchRatio));\n          Components.Html.root.classList.add(classes.dragging);\n          Events.emit('swipe.move');\n        } else {\n          return false;\n        }\n      }\n    },\n\n    /**\n     * Handler for `swipeend` event. Finitializes user's tap and decides about glide move.\n     *\n     * @param {Object} event\n     * @return {Void}\n     */\n    end: function end(event) {\n      if (!Glide.disabled) {\n        var _Glide$settings2 = Glide.settings,\n            perSwipe = _Glide$settings2.perSwipe,\n            touchAngle = _Glide$settings2.touchAngle,\n            classes = _Glide$settings2.classes;\n        var swipe = this.touches(event);\n        var threshold = this.threshold(event);\n        var swipeDistance = swipe.pageX - swipeStartX;\n        var swipeDeg = swipeSin * 180 / Math.PI;\n        this.enable();\n\n        if (swipeDistance > threshold && swipeDeg < touchAngle) {\n          Components.Run.make(Components.Direction.resolve(\"\".concat(perSwipe, \"<\")));\n        } else if (swipeDistance < -threshold && swipeDeg < touchAngle) {\n          Components.Run.make(Components.Direction.resolve(\"\".concat(perSwipe, \">\")));\n        } else {\n          // While swipe don't reach distance apply previous transform.\n          Components.Move.make();\n        }\n\n        Components.Html.root.classList.remove(classes.dragging);\n        this.unbindSwipeMove();\n        this.unbindSwipeEnd();\n        Events.emit('swipe.end');\n      }\n    },\n\n    /**\n     * Binds swipe's starting event.\n     *\n     * @return {Void}\n     */\n    bindSwipeStart: function bindSwipeStart() {\n      var _this = this;\n\n      var _Glide$settings3 = Glide.settings,\n          swipeThreshold = _Glide$settings3.swipeThreshold,\n          dragThreshold = _Glide$settings3.dragThreshold;\n\n      if (swipeThreshold) {\n        Binder.on(START_EVENTS[0], Components.Html.wrapper, function (event) {\n          _this.start(event);\n        }, capture);\n      }\n\n      if (dragThreshold) {\n        Binder.on(START_EVENTS[1], Components.Html.wrapper, function (event) {\n          _this.start(event);\n        }, capture);\n      }\n    },\n\n    /**\n     * Unbinds swipe's starting event.\n     *\n     * @return {Void}\n     */\n    unbindSwipeStart: function unbindSwipeStart() {\n      Binder.off(START_EVENTS[0], Components.Html.wrapper, capture);\n      Binder.off(START_EVENTS[1], Components.Html.wrapper, capture);\n    },\n\n    /**\n     * Binds swipe's moving event.\n     *\n     * @return {Void}\n     */\n    bindSwipeMove: function bindSwipeMove() {\n      var _this2 = this;\n\n      Binder.on(MOVE_EVENTS, Components.Html.wrapper, throttle(function (event) {\n        _this2.move(event);\n      }, Glide.settings.throttle), capture);\n    },\n\n    /**\n     * Unbinds swipe's moving event.\n     *\n     * @return {Void}\n     */\n    unbindSwipeMove: function unbindSwipeMove() {\n      Binder.off(MOVE_EVENTS, Components.Html.wrapper, capture);\n    },\n\n    /**\n     * Binds swipe's ending event.\n     *\n     * @return {Void}\n     */\n    bindSwipeEnd: function bindSwipeEnd() {\n      var _this3 = this;\n\n      Binder.on(END_EVENTS, Components.Html.wrapper, function (event) {\n        _this3.end(event);\n      });\n    },\n\n    /**\n     * Unbinds swipe's ending event.\n     *\n     * @return {Void}\n     */\n    unbindSwipeEnd: function unbindSwipeEnd() {\n      Binder.off(END_EVENTS, Components.Html.wrapper);\n    },\n\n    /**\n     * Normalizes event touches points accorting to different types.\n     *\n     * @param {Object} event\n     */\n    touches: function touches(event) {\n      if (MOUSE_EVENTS.indexOf(event.type) > -1) {\n        return event;\n      }\n\n      return event.touches[0] || event.changedTouches[0];\n    },\n\n    /**\n     * Gets value of minimum swipe distance settings based on event type.\n     *\n     * @return {Number}\n     */\n    threshold: function threshold(event) {\n      var settings = Glide.settings;\n\n      if (MOUSE_EVENTS.indexOf(event.type) > -1) {\n        return settings.dragThreshold;\n      }\n\n      return settings.swipeThreshold;\n    },\n\n    /**\n     * Enables swipe event.\n     *\n     * @return {self}\n     */\n    enable: function enable() {\n      disabled = false;\n      Components.Transition.enable();\n      return this;\n    },\n\n    /**\n     * Disables swipe event.\n     *\n     * @return {self}\n     */\n    disable: function disable() {\n      disabled = true;\n      Components.Transition.disable();\n      return this;\n    }\n  };\n  /**\n   * Add component class:\n   * - after initial building\n   */\n\n  Events.on('build.after', function () {\n    Components.Html.root.classList.add(Glide.settings.classes.swipeable);\n  });\n  /**\n   * Remove swiping bindings:\n   * - on destroying, to remove added EventListeners\n   */\n\n  Events.on('destroy', function () {\n    Swipe.unbindSwipeStart();\n    Swipe.unbindSwipeMove();\n    Swipe.unbindSwipeEnd();\n    Binder.destroy();\n  });\n  return Swipe;\n}\n\nfunction Images (Glide, Components, Events) {\n  /**\n   * Instance of the binder for DOM Events.\n   *\n   * @type {EventsBinder}\n   */\n  var Binder = new EventsBinder();\n  var Images = {\n    /**\n     * Binds listener to glide wrapper.\n     *\n     * @return {Void}\n     */\n    mount: function mount() {\n      this.bind();\n    },\n\n    /**\n     * Binds `dragstart` event on wrapper to prevent dragging images.\n     *\n     * @return {Void}\n     */\n    bind: function bind() {\n      Binder.on('dragstart', Components.Html.wrapper, this.dragstart);\n    },\n\n    /**\n     * Unbinds `dragstart` event on wrapper.\n     *\n     * @return {Void}\n     */\n    unbind: function unbind() {\n      Binder.off('dragstart', Components.Html.wrapper);\n    },\n\n    /**\n     * Event handler. Prevents dragging.\n     *\n     * @return {Void}\n     */\n    dragstart: function dragstart(event) {\n      event.preventDefault();\n    }\n  };\n  /**\n   * Remove bindings from images:\n   * - on destroying, to remove added EventListeners\n   */\n\n  Events.on('destroy', function () {\n    Images.unbind();\n    Binder.destroy();\n  });\n  return Images;\n}\n\nfunction Anchors (Glide, Components, Events) {\n  /**\n   * Instance of the binder for DOM Events.\n   *\n   * @type {EventsBinder}\n   */\n  var Binder = new EventsBinder();\n  /**\n   * Holds detaching status of anchors.\n   * Prevents detaching of already detached anchors.\n   *\n   * @private\n   * @type {Boolean}\n   */\n\n  var detached = false;\n  /**\n   * Holds preventing status of anchors.\n   * If `true` redirection after click will be disabled.\n   *\n   * @private\n   * @type {Boolean}\n   */\n\n  var prevented = false;\n  var Anchors = {\n    /**\n     * Setups a initial state of anchors component.\n     *\n     * @returns {Void}\n     */\n    mount: function mount() {\n      /**\n       * Holds collection of anchors elements.\n       *\n       * @private\n       * @type {HTMLCollection}\n       */\n      this._a = Components.Html.wrapper.querySelectorAll('a');\n      this.bind();\n    },\n\n    /**\n     * Binds events to anchors inside a track.\n     *\n     * @return {Void}\n     */\n    bind: function bind() {\n      Binder.on('click', Components.Html.wrapper, this.click);\n    },\n\n    /**\n     * Unbinds events attached to anchors inside a track.\n     *\n     * @return {Void}\n     */\n    unbind: function unbind() {\n      Binder.off('click', Components.Html.wrapper);\n    },\n\n    /**\n     * Handler for click event. Prevents clicks when glide is in `prevent` status.\n     *\n     * @param  {Object} event\n     * @return {Void}\n     */\n    click: function click(event) {\n      if (prevented) {\n        event.stopPropagation();\n        event.preventDefault();\n      }\n    },\n\n    /**\n     * Detaches anchors click event inside glide.\n     *\n     * @return {self}\n     */\n    detach: function detach() {\n      prevented = true;\n\n      if (!detached) {\n        for (var i = 0; i < this.items.length; i++) {\n          this.items[i].draggable = false;\n        }\n\n        detached = true;\n      }\n\n      return this;\n    },\n\n    /**\n     * Attaches anchors click events inside glide.\n     *\n     * @return {self}\n     */\n    attach: function attach() {\n      prevented = false;\n\n      if (detached) {\n        for (var i = 0; i < this.items.length; i++) {\n          this.items[i].draggable = true;\n        }\n\n        detached = false;\n      }\n\n      return this;\n    }\n  };\n  define(Anchors, 'items', {\n    /**\n     * Gets collection of the arrows HTML elements.\n     *\n     * @return {HTMLElement[]}\n     */\n    get: function get() {\n      return Anchors._a;\n    }\n  });\n  /**\n   * Detach anchors inside slides:\n   * - on swiping, so they won't redirect to its `href` attributes\n   */\n\n  Events.on('swipe.move', function () {\n    Anchors.detach();\n  });\n  /**\n   * Attach anchors inside slides:\n   * - after swiping and transitions ends, so they can redirect after click again\n   */\n\n  Events.on('swipe.end', function () {\n    Components.Transition.after(function () {\n      Anchors.attach();\n    });\n  });\n  /**\n   * Unbind anchors inside slides:\n   * - on destroying, to bring anchors to its initial state\n   */\n\n  Events.on('destroy', function () {\n    Anchors.attach();\n    Anchors.unbind();\n    Binder.destroy();\n  });\n  return Anchors;\n}\n\nvar NAV_SELECTOR = '[data-glide-el=\"controls[nav]\"]';\nvar CONTROLS_SELECTOR = '[data-glide-el^=\"controls\"]';\nvar PREVIOUS_CONTROLS_SELECTOR = \"\".concat(CONTROLS_SELECTOR, \" [data-glide-dir*=\\\"<\\\"]\");\nvar NEXT_CONTROLS_SELECTOR = \"\".concat(CONTROLS_SELECTOR, \" [data-glide-dir*=\\\">\\\"]\");\nfunction Controls (Glide, Components, Events) {\n  /**\n   * Instance of the binder for DOM Events.\n   *\n   * @type {EventsBinder}\n   */\n  var Binder = new EventsBinder();\n  var capture = supportsPassive$1 ? {\n    passive: true\n  } : false;\n  var Controls = {\n    /**\n     * Inits arrows. Binds events listeners\n     * to the arrows HTML elements.\n     *\n     * @return {Void}\n     */\n    mount: function mount() {\n      /**\n       * Collection of navigation HTML elements.\n       *\n       * @private\n       * @type {HTMLCollection}\n       */\n      this._n = Components.Html.root.querySelectorAll(NAV_SELECTOR);\n      /**\n       * Collection of controls HTML elements.\n       *\n       * @private\n       * @type {HTMLCollection}\n       */\n\n      this._c = Components.Html.root.querySelectorAll(CONTROLS_SELECTOR);\n      /**\n       * Collection of arrow control HTML elements.\n       *\n       * @private\n       * @type {Object}\n       */\n\n      this._arrowControls = {\n        previous: Components.Html.root.querySelectorAll(PREVIOUS_CONTROLS_SELECTOR),\n        next: Components.Html.root.querySelectorAll(NEXT_CONTROLS_SELECTOR)\n      };\n      this.addBindings();\n    },\n\n    /**\n     * Sets active class to current slide.\n     *\n     * @return {Void}\n     */\n    setActive: function setActive() {\n      for (var i = 0; i < this._n.length; i++) {\n        this.addClass(this._n[i].children);\n      }\n    },\n\n    /**\n     * Removes active class to current slide.\n     *\n     * @return {Void}\n     */\n    removeActive: function removeActive() {\n      for (var i = 0; i < this._n.length; i++) {\n        this.removeClass(this._n[i].children);\n      }\n    },\n\n    /**\n     * Toggles active class on items inside navigation.\n     *\n     * @param  {HTMLElement} controls\n     * @return {Void}\n     */\n    addClass: function addClass(controls) {\n      var settings = Glide.settings;\n      var item = controls[Glide.index];\n\n      if (!item) {\n        return;\n      }\n\n      item.classList.add(settings.classes.nav.active);\n      siblings(item).forEach(function (sibling) {\n        sibling.classList.remove(settings.classes.nav.active);\n      });\n    },\n\n    /**\n     * Removes active class from active control.\n     *\n     * @param  {HTMLElement} controls\n     * @return {Void}\n     */\n    removeClass: function removeClass(controls) {\n      var item = controls[Glide.index];\n      item === null || item === void 0 ? void 0 : item.classList.remove(Glide.settings.classes.nav.active);\n    },\n\n    /**\n     * Calculates, removes or adds `Glide.settings.classes.disabledArrow` class on the control arrows\n     */\n    setArrowState: function setArrowState() {\n      if (Glide.settings.rewind) {\n        return;\n      }\n\n      var next = Controls._arrowControls.next;\n      var previous = Controls._arrowControls.previous;\n      this.resetArrowState(next, previous);\n\n      if (Glide.index === 0) {\n        this.disableArrow(previous);\n      }\n\n      if (Glide.index === Components.Run.length) {\n        this.disableArrow(next);\n      }\n    },\n\n    /**\n     * Removes `Glide.settings.classes.disabledArrow` from given NodeList elements\n     *\n     * @param {NodeList[]} lists\n     */\n    resetArrowState: function resetArrowState() {\n      var settings = Glide.settings;\n\n      for (var _len = arguments.length, lists = new Array(_len), _key = 0; _key < _len; _key++) {\n        lists[_key] = arguments[_key];\n      }\n\n      lists.forEach(function (list) {\n        toArray(list).forEach(function (element) {\n          element.classList.remove(settings.classes.arrow.disabled);\n        });\n      });\n    },\n\n    /**\n     * Adds `Glide.settings.classes.disabledArrow` to given NodeList elements\n     *\n     * @param {NodeList[]} lists\n     */\n    disableArrow: function disableArrow() {\n      var settings = Glide.settings;\n\n      for (var _len2 = arguments.length, lists = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n        lists[_key2] = arguments[_key2];\n      }\n\n      lists.forEach(function (list) {\n        toArray(list).forEach(function (element) {\n          element.classList.add(settings.classes.arrow.disabled);\n        });\n      });\n    },\n\n    /**\n     * Adds handles to the each group of controls.\n     *\n     * @return {Void}\n     */\n    addBindings: function addBindings() {\n      for (var i = 0; i < this._c.length; i++) {\n        this.bind(this._c[i].children);\n      }\n    },\n\n    /**\n     * Removes handles from the each group of controls.\n     *\n     * @return {Void}\n     */\n    removeBindings: function removeBindings() {\n      for (var i = 0; i < this._c.length; i++) {\n        this.unbind(this._c[i].children);\n      }\n    },\n\n    /**\n     * Binds events to arrows HTML elements.\n     *\n     * @param {HTMLCollection} elements\n     * @return {Void}\n     */\n    bind: function bind(elements) {\n      for (var i = 0; i < elements.length; i++) {\n        Binder.on('click', elements[i], this.click);\n        Binder.on('touchstart', elements[i], this.click, capture);\n      }\n    },\n\n    /**\n     * Unbinds events binded to the arrows HTML elements.\n     *\n     * @param {HTMLCollection} elements\n     * @return {Void}\n     */\n    unbind: function unbind(elements) {\n      for (var i = 0; i < elements.length; i++) {\n        Binder.off(['click', 'touchstart'], elements[i]);\n      }\n    },\n\n    /**\n     * Handles `click` event on the arrows HTML elements.\n     * Moves slider in direction given via the\n     * `data-glide-dir` attribute.\n     *\n     * @param {Object} event\n     * @return {void}\n     */\n    click: function click(event) {\n      if (!supportsPassive$1 && event.type === 'touchstart') {\n        event.preventDefault();\n      }\n\n      var direction = event.currentTarget.getAttribute('data-glide-dir');\n      Components.Run.make(Components.Direction.resolve(direction));\n    }\n  };\n  define(Controls, 'items', {\n    /**\n     * Gets collection of the controls HTML elements.\n     *\n     * @return {HTMLElement[]}\n     */\n    get: function get() {\n      return Controls._c;\n    }\n  });\n  /**\n   * Swap active class of current navigation item:\n   * - after mounting to set it to initial index\n   * - after each move to the new index\n   */\n\n  Events.on(['mount.after', 'move.after'], function () {\n    Controls.setActive();\n  });\n  /**\n   * Add or remove disabled class of arrow elements\n   */\n\n  Events.on(['mount.after', 'run'], function () {\n    Controls.setArrowState();\n  });\n  /**\n   * Remove bindings and HTML Classes:\n   * - on destroying, to bring markup to its initial state\n   */\n\n  Events.on('destroy', function () {\n    Controls.removeBindings();\n    Controls.removeActive();\n    Binder.destroy();\n  });\n  return Controls;\n}\n\nfunction Keyboard (Glide, Components, Events) {\n  /**\n   * Instance of the binder for DOM Events.\n   *\n   * @type {EventsBinder}\n   */\n  var Binder = new EventsBinder();\n  var Keyboard = {\n    /**\n     * Binds keyboard events on component mount.\n     *\n     * @return {Void}\n     */\n    mount: function mount() {\n      if (Glide.settings.keyboard) {\n        this.bind();\n      }\n    },\n\n    /**\n     * Adds keyboard press events.\n     *\n     * @return {Void}\n     */\n    bind: function bind() {\n      Binder.on('keyup', document, this.press);\n    },\n\n    /**\n     * Removes keyboard press events.\n     *\n     * @return {Void}\n     */\n    unbind: function unbind() {\n      Binder.off('keyup', document);\n    },\n\n    /**\n     * Handles keyboard's arrows press and moving glide foward and backward.\n     *\n     * @param  {Object} event\n     * @return {Void}\n     */\n    press: function press(event) {\n      var perSwipe = Glide.settings.perSwipe;\n      var arrowSymbols = {\n        ArrowRight: '>',\n        ArrowLeft: '<'\n      };\n\n      if (['ArrowRight', 'ArrowLeft'].includes(event.code)) {\n        Components.Run.make(Components.Direction.resolve(\"\".concat(perSwipe).concat(arrowSymbols[event.code])));\n      }\n    }\n  };\n  /**\n   * Remove bindings from keyboard:\n   * - on destroying to remove added events\n   * - on updating to remove events before remounting\n   */\n\n  Events.on(['destroy', 'update'], function () {\n    Keyboard.unbind();\n  });\n  /**\n   * Remount component\n   * - on updating to reflect potential changes in settings\n   */\n\n  Events.on('update', function () {\n    Keyboard.mount();\n  });\n  /**\n   * Destroy binder:\n   * - on destroying to remove listeners\n   */\n\n  Events.on('destroy', function () {\n    Binder.destroy();\n  });\n  return Keyboard;\n}\n\nfunction Autoplay (Glide, Components, Events) {\n  /**\n   * Instance of the binder for DOM Events.\n   *\n   * @type {EventsBinder}\n   */\n  var Binder = new EventsBinder();\n  var Autoplay = {\n    /**\n     * Initializes autoplaying and events.\n     *\n     * @return {Void}\n     */\n    mount: function mount() {\n      this.enable();\n      this.start();\n\n      if (Glide.settings.hoverpause) {\n        this.bind();\n      }\n    },\n\n    /**\n     * Enables autoplaying\n     *\n     * @returns {Void}\n     */\n    enable: function enable() {\n      this._e = true;\n    },\n\n    /**\n     * Disables autoplaying.\n     *\n     * @returns {Void}\n     */\n    disable: function disable() {\n      this._e = false;\n    },\n\n    /**\n     * Starts autoplaying in configured interval.\n     *\n     * @param {Boolean|Number} force Run autoplaying with passed interval regardless of `autoplay` settings\n     * @return {Void}\n     */\n    start: function start() {\n      var _this = this;\n\n      if (!this._e) {\n        return;\n      }\n\n      this.enable();\n\n      if (Glide.settings.autoplay) {\n        if (isUndefined(this._i)) {\n          this._i = setInterval(function () {\n            _this.stop();\n\n            Components.Run.make('>');\n\n            _this.start();\n\n            Events.emit('autoplay');\n          }, this.time);\n        }\n      }\n    },\n\n    /**\n     * Stops autorunning of the glide.\n     *\n     * @return {Void}\n     */\n    stop: function stop() {\n      this._i = clearInterval(this._i);\n    },\n\n    /**\n     * Stops autoplaying while mouse is over glide's area.\n     *\n     * @return {Void}\n     */\n    bind: function bind() {\n      var _this2 = this;\n\n      Binder.on('mouseover', Components.Html.root, function () {\n        if (_this2._e) {\n          _this2.stop();\n        }\n      });\n      Binder.on('mouseout', Components.Html.root, function () {\n        if (_this2._e) {\n          _this2.start();\n        }\n      });\n    },\n\n    /**\n     * Unbind mouseover events.\n     *\n     * @returns {Void}\n     */\n    unbind: function unbind() {\n      Binder.off(['mouseover', 'mouseout'], Components.Html.root);\n    }\n  };\n  define(Autoplay, 'time', {\n    /**\n     * Gets time period value for the autoplay interval. Prioritizes\n     * times in `data-glide-autoplay` attrubutes over options.\n     *\n     * @return {Number}\n     */\n    get: function get() {\n      var autoplay = Components.Html.slides[Glide.index].getAttribute('data-glide-autoplay');\n\n      if (autoplay) {\n        return toInt(autoplay);\n      }\n\n      return toInt(Glide.settings.autoplay);\n    }\n  });\n  /**\n   * Stop autoplaying and unbind events:\n   * - on destroying, to clear defined interval\n   * - on updating via API to reset interval that may changed\n   */\n\n  Events.on(['destroy', 'update'], function () {\n    Autoplay.unbind();\n  });\n  /**\n   * Stop autoplaying:\n   * - before each run, to restart autoplaying\n   * - on pausing via API\n   * - on destroying, to clear defined interval\n   * - while starting a swipe\n   * - on updating via API to reset interval that may changed\n   */\n\n  Events.on(['run.before', 'swipe.start', 'update'], function () {\n    Autoplay.stop();\n  });\n  Events.on(['pause', 'destroy'], function () {\n    Autoplay.disable();\n    Autoplay.stop();\n  });\n  /**\n   * Start autoplaying:\n   * - after each run, to restart autoplaying\n   * - on playing via API\n   * - while ending a swipe\n   */\n\n  Events.on(['run.after', 'swipe.end'], function () {\n    Autoplay.start();\n  });\n  /**\n   * Start autoplaying:\n   * - after each run, to restart autoplaying\n   * - on playing via API\n   * - while ending a swipe\n   */\n\n  Events.on(['play'], function () {\n    Autoplay.enable();\n    Autoplay.start();\n  });\n  /**\n   * Remount autoplaying:\n   * - on updating via API to reset interval that may changed\n   */\n\n  Events.on('update', function () {\n    Autoplay.mount();\n  });\n  /**\n   * Destroy a binder:\n   * - on destroying glide instance to clearup listeners\n   */\n\n  Events.on('destroy', function () {\n    Binder.destroy();\n  });\n  return Autoplay;\n}\n\n/**\n * Sorts keys of breakpoint object so they will be ordered from lower to bigger.\n *\n * @param {Object} points\n * @returns {Object}\n */\n\nfunction sortBreakpoints(points) {\n  if (isObject(points)) {\n    return sortKeys(points);\n  } else {\n    warn(\"Breakpoints option must be an object\");\n  }\n\n  return {};\n}\n\nfunction Breakpoints (Glide, Components, Events) {\n  /**\n   * Instance of the binder for DOM Events.\n   *\n   * @type {EventsBinder}\n   */\n  var Binder = new EventsBinder();\n  /**\n   * Holds reference to settings.\n   *\n   * @type {Object}\n   */\n\n  var settings = Glide.settings;\n  /**\n   * Holds reference to breakpoints object in settings. Sorts breakpoints\n   * from smaller to larger. It is required in order to proper\n   * matching currently active breakpoint settings.\n   *\n   * @type {Object}\n   */\n\n  var points = sortBreakpoints(settings.breakpoints);\n  /**\n   * Cache initial settings before overwritting.\n   *\n   * @type {Object}\n   */\n\n  var defaults = Object.assign({}, settings);\n  var Breakpoints = {\n    /**\n     * Matches settings for currectly matching media breakpoint.\n     *\n     * @param {Object} points\n     * @returns {Object}\n     */\n    match: function match(points) {\n      if (typeof window.matchMedia !== 'undefined') {\n        for (var point in points) {\n          if (points.hasOwnProperty(point)) {\n            if (window.matchMedia(\"(max-width: \".concat(point, \"px)\")).matches) {\n              return points[point];\n            }\n          }\n        }\n      }\n\n      return defaults;\n    }\n  };\n  /**\n   * Overwrite instance settings with currently matching breakpoint settings.\n   * This happens right after component initialization.\n   */\n\n  Object.assign(settings, Breakpoints.match(points));\n  /**\n   * Update glide with settings of matched brekpoint:\n   * - window resize to update slider\n   */\n\n  Binder.on('resize', window, throttle(function () {\n    Glide.settings = mergeOptions(settings, Breakpoints.match(points));\n  }, Glide.settings.throttle));\n  /**\n   * Resort and update default settings:\n   * - on reinit via API, so breakpoint matching will be performed with options\n   */\n\n  Events.on('update', function () {\n    points = sortBreakpoints(points);\n    defaults = Object.assign({}, settings);\n  });\n  /**\n   * Unbind resize listener:\n   * - on destroying, to bring markup to its initial state\n   */\n\n  Events.on('destroy', function () {\n    Binder.off('resize', window);\n  });\n  return Breakpoints;\n}\n\nvar COMPONENTS = {\n  // Required\n  Html: Html,\n  Translate: Translate,\n  Transition: Transition,\n  Direction: Direction,\n  Peek: Peek,\n  Sizes: Sizes,\n  Gaps: Gaps,\n  Move: Move,\n  Clones: Clones,\n  Resize: Resize,\n  Build: Build,\n  Run: Run,\n  // Optional\n  Swipe: Swipe,\n  Images: Images,\n  Anchors: Anchors,\n  Controls: Controls,\n  Keyboard: Keyboard,\n  Autoplay: Autoplay,\n  Breakpoints: Breakpoints\n};\n\nvar Glide = /*#__PURE__*/function (_Core) {\n  _inherits(Glide, _Core);\n\n  var _super = _createSuper(Glide);\n\n  function Glide() {\n    _classCallCheck(this, Glide);\n\n    return _super.apply(this, arguments);\n  }\n\n  _createClass(Glide, [{\n    key: \"mount\",\n    value: function mount() {\n      var extensions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};\n      return _get(_getPrototypeOf(Glide.prototype), \"mount\", this).call(this, Object.assign({}, COMPONENTS, extensions));\n    }\n  }]);\n\n  return Glide;\n}(Glide$1);\n\n\n\n\n//# sourceURL=webpack://frontend-dev-test/./node_modules/@glidejs/glide/dist/glide.esm.js?");

/***/ }),

/***/ "./node_modules/ansi-html-community/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ansi-html-community/index.js ***!
  \***************************************************/
/***/ (function(module) {

"use strict";
eval("\n\nmodule.exports = ansiHTML\n\n// Reference to https://github.com/sindresorhus/ansi-regex\nvar _regANSI = /(?:(?:\\u001b\\[)|\\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\\u001b[A-M]/\n\nvar _defColors = {\n  reset: ['fff', '000'], // [FOREGROUD_COLOR, BACKGROUND_COLOR]\n  black: '000',\n  red: 'ff0000',\n  green: '209805',\n  yellow: 'e8bf03',\n  blue: '0000ff',\n  magenta: 'ff00ff',\n  cyan: '00ffee',\n  lightgrey: 'f0f0f0',\n  darkgrey: '888'\n}\nvar _styles = {\n  30: 'black',\n  31: 'red',\n  32: 'green',\n  33: 'yellow',\n  34: 'blue',\n  35: 'magenta',\n  36: 'cyan',\n  37: 'lightgrey'\n}\nvar _openTags = {\n  '1': 'font-weight:bold', // bold\n  '2': 'opacity:0.5', // dim\n  '3': '<i>', // italic\n  '4': '<u>', // underscore\n  '8': 'display:none', // hidden\n  '9': '<del>' // delete\n}\nvar _closeTags = {\n  '23': '</i>', // reset italic\n  '24': '</u>', // reset underscore\n  '29': '</del>' // reset delete\n}\n\n;[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {\n  _closeTags[n] = '</span>'\n})\n\n/**\n * Converts text with ANSI color codes to HTML markup.\n * @param {String} text\n * @returns {*}\n */\nfunction ansiHTML (text) {\n  // Returns the text if the string has no ANSI escape code.\n  if (!_regANSI.test(text)) {\n    return text\n  }\n\n  // Cache opened sequence.\n  var ansiCodes = []\n  // Replace with markup.\n  var ret = text.replace(/\\033\\[(\\d+)m/g, function (match, seq) {\n    var ot = _openTags[seq]\n    if (ot) {\n      // If current sequence has been opened, close it.\n      if (!!~ansiCodes.indexOf(seq)) { // eslint-disable-line no-extra-boolean-cast\n        ansiCodes.pop()\n        return '</span>'\n      }\n      // Open tag.\n      ansiCodes.push(seq)\n      return ot[0] === '<' ? ot : '<span style=\"' + ot + ';\">'\n    }\n\n    var ct = _closeTags[seq]\n    if (ct) {\n      // Pop sequence\n      ansiCodes.pop()\n      return ct\n    }\n    return ''\n  })\n\n  // Make sure tags are closed.\n  var l = ansiCodes.length\n  ;(l > 0) && (ret += Array(l + 1).join('</span>'))\n\n  return ret\n}\n\n/**\n * Customize colors.\n * @param {Object} colors reference to _defColors\n */\nansiHTML.setColors = function (colors) {\n  if (typeof colors !== 'object') {\n    throw new Error('`colors` parameter must be an Object.')\n  }\n\n  var _finalColors = {}\n  for (var key in _defColors) {\n    var hex = colors.hasOwnProperty(key) ? colors[key] : null\n    if (!hex) {\n      _finalColors[key] = _defColors[key]\n      continue\n    }\n    if ('reset' === key) {\n      if (typeof hex === 'string') {\n        hex = [hex]\n      }\n      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {\n        return typeof h !== 'string'\n      })) {\n        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000')\n      }\n      var defHexColor = _defColors[key]\n      if (!hex[0]) {\n        hex[0] = defHexColor[0]\n      }\n      if (hex.length === 1 || !hex[1]) {\n        hex = [hex[0]]\n        hex.push(defHexColor[1])\n      }\n\n      hex = hex.slice(0, 2)\n    } else if (typeof hex !== 'string') {\n      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000')\n    }\n    _finalColors[key] = hex\n  }\n  _setTags(_finalColors)\n}\n\n/**\n * Reset colors.\n */\nansiHTML.reset = function () {\n  _setTags(_defColors)\n}\n\n/**\n * Expose tags, including open and close.\n * @type {Object}\n */\nansiHTML.tags = {}\n\nif (Object.defineProperty) {\n  Object.defineProperty(ansiHTML.tags, 'open', {\n    get: function () { return _openTags }\n  })\n  Object.defineProperty(ansiHTML.tags, 'close', {\n    get: function () { return _closeTags }\n  })\n} else {\n  ansiHTML.tags.open = _openTags\n  ansiHTML.tags.close = _closeTags\n}\n\nfunction _setTags (colors) {\n  // reset all\n  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]\n  // inverse\n  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]\n  // dark grey\n  _openTags['90'] = 'color:#' + colors.darkgrey\n\n  for (var code in _styles) {\n    var color = _styles[code]\n    var oriColor = colors[color] || '000'\n    _openTags[code] = 'color:#' + oriColor\n    code = parseInt(code)\n    _openTags[(code + 10).toString()] = 'background:#' + oriColor\n  }\n}\n\nansiHTML.reset()\n\n\n//# sourceURL=webpack://frontend-dev-test/./node_modules/ansi-html-community/index.js?");

/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ (function(module) {

"use strict";
eval("// Copyright Joyent, Inc. and other Node contributors.\n//\n// Permission is hereby granted, free of charge, to any person obtaining a\n// copy of this software and associated documentation files (the\n// \"Software\"), to deal in the Software without restriction, including\n// without limitation the rights to use, copy, modify, merge, publish,\n// distribute, sublicense, and/or sell copies of the Software, and to permit\n// persons to whom the Software is furnished to do so, subject to the\n// following conditions:\n//\n// The above copyright notice and this permission notice shall be included\n// in all copies or substantial portions of the Software.\n//\n// THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS\n// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF\n// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN\n// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,\n// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR\n// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE\n// USE OR OTHER DEALINGS IN THE SOFTWARE.\n\n\n\nvar R = typeof Reflect === 'object' ? Reflect : null\nvar ReflectApply = R && typeof R.apply === 'function'\n  ? R.apply\n  : function ReflectApply(target, receiver, args) {\n    return Function.prototype.apply.call(target, receiver, args);\n  }\n\nvar ReflectOwnKeys\nif (R && typeof R.ownKeys === 'function') {\n  ReflectOwnKeys = R.ownKeys\n} else if (Object.getOwnPropertySymbols) {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target)\n      .concat(Object.getOwnPropertySymbols(target));\n  };\n} else {\n  ReflectOwnKeys = function ReflectOwnKeys(target) {\n    return Object.getOwnPropertyNames(target);\n  };\n}\n\nfunction ProcessEmitWarning(warning) {\n  if (console && console.warn) console.warn(warning);\n}\n\nvar NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {\n  return value !== value;\n}\n\nfunction EventEmitter() {\n  EventEmitter.init.call(this);\n}\nmodule.exports = EventEmitter;\nmodule.exports.once = once;\n\n// Backwards-compat with node 0.10.x\nEventEmitter.EventEmitter = EventEmitter;\n\nEventEmitter.prototype._events = undefined;\nEventEmitter.prototype._eventsCount = 0;\nEventEmitter.prototype._maxListeners = undefined;\n\n// By default EventEmitters will print a warning if more than 10 listeners are\n// added to it. This is a useful default which helps finding memory leaks.\nvar defaultMaxListeners = 10;\n\nfunction checkListener(listener) {\n  if (typeof listener !== 'function') {\n    throw new TypeError('The \"listener\" argument must be of type Function. Received type ' + typeof listener);\n  }\n}\n\nObject.defineProperty(EventEmitter, 'defaultMaxListeners', {\n  enumerable: true,\n  get: function() {\n    return defaultMaxListeners;\n  },\n  set: function(arg) {\n    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {\n      throw new RangeError('The value of \"defaultMaxListeners\" is out of range. It must be a non-negative number. Received ' + arg + '.');\n    }\n    defaultMaxListeners = arg;\n  }\n});\n\nEventEmitter.init = function() {\n\n  if (this._events === undefined ||\n      this._events === Object.getPrototypeOf(this)._events) {\n    this._events = Object.create(null);\n    this._eventsCount = 0;\n  }\n\n  this._maxListeners = this._maxListeners || undefined;\n};\n\n// Obviously not all Emitters should be limited to 10. This function allows\n// that to be increased. Set to zero for unlimited.\nEventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {\n  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {\n    throw new RangeError('The value of \"n\" is out of range. It must be a non-negative number. Received ' + n + '.');\n  }\n  this._maxListeners = n;\n  return this;\n};\n\nfunction _getMaxListeners(that) {\n  if (that._maxListeners === undefined)\n    return EventEmitter.defaultMaxListeners;\n  return that._maxListeners;\n}\n\nEventEmitter.prototype.getMaxListeners = function getMaxListeners() {\n  return _getMaxListeners(this);\n};\n\nEventEmitter.prototype.emit = function emit(type) {\n  var args = [];\n  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);\n  var doError = (type === 'error');\n\n  var events = this._events;\n  if (events !== undefined)\n    doError = (doError && events.error === undefined);\n  else if (!doError)\n    return false;\n\n  // If there is no 'error' event listener then throw.\n  if (doError) {\n    var er;\n    if (args.length > 0)\n      er = args[0];\n    if (er instanceof Error) {\n      // Note: The comments on the `throw` lines are intentional, they show\n      // up in Node's output if this results in an unhandled exception.\n      throw er; // Unhandled 'error' event\n    }\n    // At least give some kind of context to the user\n    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));\n    err.context = er;\n    throw err; // Unhandled 'error' event\n  }\n\n  var handler = events[type];\n\n  if (handler === undefined)\n    return false;\n\n  if (typeof handler === 'function') {\n    ReflectApply(handler, this, args);\n  } else {\n    var len = handler.length;\n    var listeners = arrayClone(handler, len);\n    for (var i = 0; i < len; ++i)\n      ReflectApply(listeners[i], this, args);\n  }\n\n  return true;\n};\n\nfunction _addListener(target, type, listener, prepend) {\n  var m;\n  var events;\n  var existing;\n\n  checkListener(listener);\n\n  events = target._events;\n  if (events === undefined) {\n    events = target._events = Object.create(null);\n    target._eventsCount = 0;\n  } else {\n    // To avoid recursion in the case that type === \"newListener\"! Before\n    // adding it to the listeners, first emit \"newListener\".\n    if (events.newListener !== undefined) {\n      target.emit('newListener', type,\n                  listener.listener ? listener.listener : listener);\n\n      // Re-assign `events` because a newListener handler could have caused the\n      // this._events to be assigned to a new object\n      events = target._events;\n    }\n    existing = events[type];\n  }\n\n  if (existing === undefined) {\n    // Optimize the case of one listener. Don't need the extra array object.\n    existing = events[type] = listener;\n    ++target._eventsCount;\n  } else {\n    if (typeof existing === 'function') {\n      // Adding the second element, need to change to array.\n      existing = events[type] =\n        prepend ? [listener, existing] : [existing, listener];\n      // If we've already got an array, just append.\n    } else if (prepend) {\n      existing.unshift(listener);\n    } else {\n      existing.push(listener);\n    }\n\n    // Check for listener leak\n    m = _getMaxListeners(target);\n    if (m > 0 && existing.length > m && !existing.warned) {\n      existing.warned = true;\n      // No error code for this since it is a Warning\n      // eslint-disable-next-line no-restricted-syntax\n      var w = new Error('Possible EventEmitter memory leak detected. ' +\n                          existing.length + ' ' + String(type) + ' listeners ' +\n                          'added. Use emitter.setMaxListeners() to ' +\n                          'increase limit');\n      w.name = 'MaxListenersExceededWarning';\n      w.emitter = target;\n      w.type = type;\n      w.count = existing.length;\n      ProcessEmitWarning(w);\n    }\n  }\n\n  return target;\n}\n\nEventEmitter.prototype.addListener = function addListener(type, listener) {\n  return _addListener(this, type, listener, false);\n};\n\nEventEmitter.prototype.on = EventEmitter.prototype.addListener;\n\nEventEmitter.prototype.prependListener =\n    function prependListener(type, listener) {\n      return _addListener(this, type, listener, true);\n    };\n\nfunction onceWrapper() {\n  if (!this.fired) {\n    this.target.removeListener(this.type, this.wrapFn);\n    this.fired = true;\n    if (arguments.length === 0)\n      return this.listener.call(this.target);\n    return this.listener.apply(this.target, arguments);\n  }\n}\n\nfunction _onceWrap(target, type, listener) {\n  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };\n  var wrapped = onceWrapper.bind(state);\n  wrapped.listener = listener;\n  state.wrapFn = wrapped;\n  return wrapped;\n}\n\nEventEmitter.prototype.once = function once(type, listener) {\n  checkListener(listener);\n  this.on(type, _onceWrap(this, type, listener));\n  return this;\n};\n\nEventEmitter.prototype.prependOnceListener =\n    function prependOnceListener(type, listener) {\n      checkListener(listener);\n      this.prependListener(type, _onceWrap(this, type, listener));\n      return this;\n    };\n\n// Emits a 'removeListener' event if and only if the listener was removed.\nEventEmitter.prototype.removeListener =\n    function removeListener(type, listener) {\n      var list, events, position, i, originalListener;\n\n      checkListener(listener);\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      list = events[type];\n      if (list === undefined)\n        return this;\n\n      if (list === listener || list.listener === listener) {\n        if (--this._eventsCount === 0)\n          this._events = Object.create(null);\n        else {\n          delete events[type];\n          if (events.removeListener)\n            this.emit('removeListener', type, list.listener || listener);\n        }\n      } else if (typeof list !== 'function') {\n        position = -1;\n\n        for (i = list.length - 1; i >= 0; i--) {\n          if (list[i] === listener || list[i].listener === listener) {\n            originalListener = list[i].listener;\n            position = i;\n            break;\n          }\n        }\n\n        if (position < 0)\n          return this;\n\n        if (position === 0)\n          list.shift();\n        else {\n          spliceOne(list, position);\n        }\n\n        if (list.length === 1)\n          events[type] = list[0];\n\n        if (events.removeListener !== undefined)\n          this.emit('removeListener', type, originalListener || listener);\n      }\n\n      return this;\n    };\n\nEventEmitter.prototype.off = EventEmitter.prototype.removeListener;\n\nEventEmitter.prototype.removeAllListeners =\n    function removeAllListeners(type) {\n      var listeners, events, i;\n\n      events = this._events;\n      if (events === undefined)\n        return this;\n\n      // not listening for removeListener, no need to emit\n      if (events.removeListener === undefined) {\n        if (arguments.length === 0) {\n          this._events = Object.create(null);\n          this._eventsCount = 0;\n        } else if (events[type] !== undefined) {\n          if (--this._eventsCount === 0)\n            this._events = Object.create(null);\n          else\n            delete events[type];\n        }\n        return this;\n      }\n\n      // emit removeListener for all listeners on all events\n      if (arguments.length === 0) {\n        var keys = Object.keys(events);\n        var key;\n        for (i = 0; i < keys.length; ++i) {\n          key = keys[i];\n          if (key === 'removeListener') continue;\n          this.removeAllListeners(key);\n        }\n        this.removeAllListeners('removeListener');\n        this._events = Object.create(null);\n        this._eventsCount = 0;\n        return this;\n      }\n\n      listeners = events[type];\n\n      if (typeof listeners === 'function') {\n        this.removeListener(type, listeners);\n      } else if (listeners !== undefined) {\n        // LIFO order\n        for (i = listeners.length - 1; i >= 0; i--) {\n          this.removeListener(type, listeners[i]);\n        }\n      }\n\n      return this;\n    };\n\nfunction _listeners(target, type, unwrap) {\n  var events = target._events;\n\n  if (events === undefined)\n    return [];\n\n  var evlistener = events[type];\n  if (evlistener === undefined)\n    return [];\n\n  if (typeof evlistener === 'function')\n    return unwrap ? [evlistener.listener || evlistener] : [evlistener];\n\n  return unwrap ?\n    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);\n}\n\nEventEmitter.prototype.listeners = function listeners(type) {\n  return _listeners(this, type, true);\n};\n\nEventEmitter.prototype.rawListeners = function rawListeners(type) {\n  return _listeners(this, type, false);\n};\n\nEventEmitter.listenerCount = function(emitter, type) {\n  if (typeof emitter.listenerCount === 'function') {\n    return emitter.listenerCount(type);\n  } else {\n    return listenerCount.call(emitter, type);\n  }\n};\n\nEventEmitter.prototype.listenerCount = listenerCount;\nfunction listenerCount(type) {\n  var events = this._events;\n\n  if (events !== undefined) {\n    var evlistener = events[type];\n\n    if (typeof evlistener === 'function') {\n      return 1;\n    } else if (evlistener !== undefined) {\n      return evlistener.length;\n    }\n  }\n\n  return 0;\n}\n\nEventEmitter.prototype.eventNames = function eventNames() {\n  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];\n};\n\nfunction arrayClone(arr, n) {\n  var copy = new Array(n);\n  for (var i = 0; i < n; ++i)\n    copy[i] = arr[i];\n  return copy;\n}\n\nfunction spliceOne(list, index) {\n  for (; index + 1 < list.length; index++)\n    list[index] = list[index + 1];\n  list.pop();\n}\n\nfunction unwrapListeners(arr) {\n  var ret = new Array(arr.length);\n  for (var i = 0; i < ret.length; ++i) {\n    ret[i] = arr[i].listener || arr[i];\n  }\n  return ret;\n}\n\nfunction once(emitter, name) {\n  return new Promise(function (resolve, reject) {\n    function errorListener(err) {\n      emitter.removeListener(name, resolver);\n      reject(err);\n    }\n\n    function resolver() {\n      if (typeof emitter.removeListener === 'function') {\n        emitter.removeListener('error', errorListener);\n      }\n      resolve([].slice.call(arguments));\n    };\n\n    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });\n    if (name !== 'error') {\n      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });\n    }\n  });\n}\n\nfunction addErrorHandlerIfEventEmitter(emitter, handler, flags) {\n  if (typeof emitter.on === 'function') {\n    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);\n  }\n}\n\nfunction eventTargetAgnosticAddListener(emitter, name, listener, flags) {\n  if (typeof emitter.on === 'function') {\n    if (flags.once) {\n      emitter.once(name, listener);\n    } else {\n      emitter.on(name, listener);\n    }\n  } else if (typeof emitter.addEventListener === 'function') {\n    // EventTarget does not have `error` event semantics like Node\n    // EventEmitters, we do not listen for `error` events here.\n    emitter.addEventListener(name, function wrapListener(arg) {\n      // IE does not have builtin `{ once: true }` support so we\n      // have to do it manually.\n      if (flags.once) {\n        emitter.removeEventListener(name, wrapListener);\n      }\n      listener(arg);\n    });\n  } else {\n    throw new TypeError('The \"emitter\" argument must be of type EventEmitter. Received type ' + typeof emitter);\n  }\n}\n\n\n//# sourceURL=webpack://frontend-dev-test/./node_modules/events/events.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js":
/*!***************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WebSocketClient; }\n/* harmony export */ });\n/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log.js */ \"./node_modules/webpack-dev-server/client/utils/log.js\");\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == typeof i ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != typeof i) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n\nvar WebSocketClient = /*#__PURE__*/function () {\n  /**\n   * @param {string} url\n   */\n  function WebSocketClient(url) {\n    _classCallCheck(this, WebSocketClient);\n    this.client = new WebSocket(url);\n    this.client.onerror = function (error) {\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_0__.log.error(error);\n    };\n  }\n\n  /**\n   * @param {(...args: any[]) => void} f\n   */\n  return _createClass(WebSocketClient, [{\n    key: \"onOpen\",\n    value: function onOpen(f) {\n      this.client.onopen = f;\n    }\n\n    /**\n     * @param {(...args: any[]) => void} f\n     */\n  }, {\n    key: \"onClose\",\n    value: function onClose(f) {\n      this.client.onclose = f;\n    }\n\n    // call f with the message string as the first argument\n    /**\n     * @param {(...args: any[]) => void} f\n     */\n  }, {\n    key: \"onMessage\",\n    value: function onMessage(f) {\n      this.client.onmessage = function (e) {\n        f(e.data);\n      };\n    }\n  }]);\n}();\n\n\n//# sourceURL=webpack://frontend-dev-test/./node_modules/webpack-dev-server/client/clients/WebSocketClient.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&overlay=%7B%22errors%22%3Atrue%2C%22warnings%22%3Afalse%7D&reconnect=10&hot=true&live-reload=true":
/*!*********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&overlay=%7B%22errors%22%3Atrue%2C%22warnings%22%3Afalse%7D&reconnect=10&hot=true&live-reload=true ***!
  \*********************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("var __resourceQuery = \"?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&overlay=%7B%22errors%22%3Atrue%2C%22warnings%22%3Afalse%7D&reconnect=10&hot=true&live-reload=true\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createSocketURL: function() { return /* binding */ createSocketURL; },\n/* harmony export */   getCurrentScriptSource: function() { return /* binding */ getCurrentScriptSource; },\n/* harmony export */   parseURL: function() { return /* binding */ parseURL; }\n/* harmony export */ });\n/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/log.js */ \"./node_modules/webpack/hot/log.js\");\n/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack/hot/emitter.js */ \"./node_modules/webpack/hot/emitter.js\");\n/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket.js */ \"./node_modules/webpack-dev-server/client/socket.js\");\n/* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay.js */ \"./node_modules/webpack-dev-server/client/overlay.js\");\n/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/log.js */ \"./node_modules/webpack-dev-server/client/utils/log.js\");\n/* harmony import */ var _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/sendMessage.js */ \"./node_modules/webpack-dev-server/client/utils/sendMessage.js\");\n/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progress.js */ \"./node_modules/webpack-dev-server/client/progress.js\");\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == typeof i ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != typeof i) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n/* global __resourceQuery, __webpack_hash__ */\n/// <reference types=\"webpack/module\" />\n\n\n\n\n\n\n\n\n/**\n * @typedef {Object} OverlayOptions\n * @property {boolean | (error: Error) => boolean} [warnings]\n * @property {boolean | (error: Error) => boolean} [errors]\n * @property {boolean | (error: Error) => boolean} [runtimeErrors]\n * @property {string} [trustedTypesPolicyName]\n */\n\n/**\n * @typedef {Object} Options\n * @property {boolean} hot\n * @property {boolean} liveReload\n * @property {boolean} progress\n * @property {boolean | OverlayOptions} overlay\n * @property {string} [logging]\n * @property {number} [reconnect]\n */\n\n/**\n * @typedef {Object} Status\n * @property {boolean} isUnloading\n * @property {string} currentHash\n * @property {string} [previousHash]\n */\n\n/**\n * @param {boolean | { warnings?: boolean | string; errors?: boolean | string; runtimeErrors?: boolean | string; }} overlayOptions\n */\nvar decodeOverlayOptions = function decodeOverlayOptions(overlayOptions) {\n  if (typeof overlayOptions === \"object\") {\n    [\"warnings\", \"errors\", \"runtimeErrors\"].forEach(function (property) {\n      if (typeof overlayOptions[property] === \"string\") {\n        var overlayFilterFunctionString = decodeURIComponent(overlayOptions[property]);\n\n        // eslint-disable-next-line no-new-func\n        overlayOptions[property] = new Function(\"message\", \"var callback = \".concat(overlayFilterFunctionString, \"\\n        return callback(message)\"));\n      }\n    });\n  }\n};\n\n/**\n * @type {Status}\n */\nvar status = {\n  isUnloading: false,\n  // eslint-disable-next-line camelcase\n  currentHash: __webpack_require__.h()\n};\n\n/**\n * @returns {string}\n */\nvar getCurrentScriptSource = function getCurrentScriptSource() {\n  // `document.currentScript` is the most accurate way to find the current script,\n  // but is not supported in all browsers.\n  if (document.currentScript) {\n    return document.currentScript.getAttribute(\"src\");\n  }\n\n  // Fallback to getting all scripts running in the document.\n  var scriptElements = document.scripts || [];\n  var scriptElementsWithSrc = Array.prototype.filter.call(scriptElements, function (element) {\n    return element.getAttribute(\"src\");\n  });\n  if (scriptElementsWithSrc.length > 0) {\n    var currentScript = scriptElementsWithSrc[scriptElementsWithSrc.length - 1];\n    return currentScript.getAttribute(\"src\");\n  }\n\n  // Fail as there was no script to use.\n  throw new Error(\"[webpack-dev-server] Failed to get current script source.\");\n};\n\n/**\n * @param {string} resourceQuery\n * @returns {{ [key: string]: string | boolean }}\n */\nvar parseURL = function parseURL(resourceQuery) {\n  /** @type {{ [key: string]: string }} */\n  var result = {};\n  if (typeof resourceQuery === \"string\" && resourceQuery !== \"\") {\n    var searchParams = resourceQuery.slice(1).split(\"&\");\n    for (var i = 0; i < searchParams.length; i++) {\n      var pair = searchParams[i].split(\"=\");\n      result[pair[0]] = decodeURIComponent(pair[1]);\n    }\n  } else {\n    // Else, get the url from the <script> this file was called with.\n    var scriptSource = getCurrentScriptSource();\n    var scriptSourceURL;\n    try {\n      // The placeholder `baseURL` with `window.location.href`,\n      // is to allow parsing of path-relative or protocol-relative URLs,\n      // and will have no effect if `scriptSource` is a fully valid URL.\n      scriptSourceURL = new URL(scriptSource, self.location.href);\n    } catch (error) {\n      // URL parsing failed, do nothing.\n      // We will still proceed to see if we can recover using `resourceQuery`\n    }\n    if (scriptSourceURL) {\n      result = scriptSourceURL;\n      result.fromCurrentScript = true;\n    }\n  }\n  return result;\n};\nvar parsedResourceQuery = parseURL(__resourceQuery);\nvar enabledFeatures = {\n  \"Hot Module Replacement\": false,\n  \"Live Reloading\": false,\n  Progress: false,\n  Overlay: false\n};\n\n/** @type {Options} */\nvar options = {\n  hot: false,\n  liveReload: false,\n  progress: false,\n  overlay: false\n};\nif (parsedResourceQuery.hot === \"true\") {\n  options.hot = true;\n  enabledFeatures[\"Hot Module Replacement\"] = true;\n}\nif (parsedResourceQuery[\"live-reload\"] === \"true\") {\n  options.liveReload = true;\n  enabledFeatures[\"Live Reloading\"] = true;\n}\nif (parsedResourceQuery.progress === \"true\") {\n  options.progress = true;\n  enabledFeatures.Progress = true;\n}\nif (parsedResourceQuery.overlay) {\n  try {\n    options.overlay = JSON.parse(parsedResourceQuery.overlay);\n  } catch (e) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.error(\"Error parsing overlay options from resource query:\", e);\n  }\n\n  // Fill in default \"true\" params for partially-specified objects.\n  if (typeof options.overlay === \"object\") {\n    options.overlay = _objectSpread({\n      errors: true,\n      warnings: true,\n      runtimeErrors: true\n    }, options.overlay);\n    decodeOverlayOptions(options.overlay);\n  }\n  enabledFeatures.Overlay = true;\n}\nif (parsedResourceQuery.logging) {\n  options.logging = parsedResourceQuery.logging;\n}\nif (typeof parsedResourceQuery.reconnect !== \"undefined\") {\n  options.reconnect = Number(parsedResourceQuery.reconnect);\n}\n\n/**\n * @param {string} level\n */\nvar setAllLogLevel = function setAllLogLevel(level) {\n  // This is needed because the HMR logger operate separately from dev server logger\n  webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default().setLogLevel(level === \"verbose\" || level === \"log\" ? \"info\" : level);\n  (0,_utils_log_js__WEBPACK_IMPORTED_MODULE_4__.setLogLevel)(level);\n};\nif (options.logging) {\n  setAllLogLevel(options.logging);\n}\nvar logEnabledFeatures = function logEnabledFeatures(features) {\n  var listEnabledFeatures = Object.keys(features);\n  if (!features || listEnabledFeatures.length === 0) {\n    return;\n  }\n  var logString = \"Server started:\";\n\n  // Server started: Hot Module Replacement enabled, Live Reloading enabled, Overlay disabled.\n  for (var i = 0; i < listEnabledFeatures.length; i++) {\n    var key = listEnabledFeatures[i];\n    logString += \" \".concat(key, \" \").concat(features[key] ? \"enabled\" : \"disabled\", \",\");\n  }\n  // replace last comma with a period\n  logString = logString.slice(0, -1).concat(\".\");\n  _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(logString);\n};\nlogEnabledFeatures(enabledFeatures);\nself.addEventListener(\"beforeunload\", function () {\n  status.isUnloading = true;\n});\nvar overlay = typeof window !== \"undefined\" ? (0,_overlay_js__WEBPACK_IMPORTED_MODULE_3__.createOverlay)(typeof options.overlay === \"object\" ? {\n  trustedTypesPolicyName: options.overlay.trustedTypesPolicyName,\n  catchRuntimeError: options.overlay.runtimeErrors\n} : {\n  trustedTypesPolicyName: false,\n  catchRuntimeError: options.overlay\n}) : {\n  send: function send() {}\n};\n\n/**\n * @param {Options} options\n * @param {Status} currentStatus\n */\nvar reloadApp = function reloadApp(_ref, currentStatus) {\n  var hot = _ref.hot,\n    liveReload = _ref.liveReload;\n  if (currentStatus.isUnloading) {\n    return;\n  }\n  var currentHash = currentStatus.currentHash,\n    previousHash = currentStatus.previousHash;\n  var isInitial = currentHash.indexOf(/** @type {string} */previousHash) >= 0;\n  if (isInitial) {\n    return;\n  }\n\n  /**\n   * @param {Window} rootWindow\n   * @param {number} intervalId\n   */\n  function applyReload(rootWindow, intervalId) {\n    clearInterval(intervalId);\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(\"App updated. Reloading...\");\n    rootWindow.location.reload();\n  }\n  var search = self.location.search.toLowerCase();\n  var allowToHot = search.indexOf(\"webpack-dev-server-hot=false\") === -1;\n  var allowToLiveReload = search.indexOf(\"webpack-dev-server-live-reload=false\") === -1;\n  if (hot && allowToHot) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(\"App hot update...\");\n    webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_1___default().emit(\"webpackHotUpdate\", currentStatus.currentHash);\n    if (typeof self !== \"undefined\" && self.window) {\n      // broadcast update to window\n      self.postMessage(\"webpackHotUpdate\".concat(currentStatus.currentHash), \"*\");\n    }\n  }\n  // allow refreshing the page only if liveReload isn't disabled\n  else if (liveReload && allowToLiveReload) {\n    var rootWindow = self;\n\n    // use parent window for reload (in case we're in an iframe with no valid src)\n    var intervalId = self.setInterval(function () {\n      if (rootWindow.location.protocol !== \"about:\") {\n        // reload immediately if protocol is valid\n        applyReload(rootWindow, intervalId);\n      } else {\n        rootWindow = rootWindow.parent;\n        if (rootWindow.parent === rootWindow) {\n          // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways\n          applyReload(rootWindow, intervalId);\n        }\n      }\n    });\n  }\n};\nvar ansiRegex = new RegExp([\"[\\\\u001B\\\\u009B][[\\\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\\\d\\\\/#&.:=?%@~_]+)*|[a-zA-Z\\\\d]+(?:;[-a-zA-Z\\\\d\\\\/#&.:=?%@~_]*)*)?\\\\u0007)\", \"(?:(?:\\\\d{1,4}(?:;\\\\d{0,4})*)?[\\\\dA-PR-TZcf-nq-uy=><~]))\"].join(\"|\"), \"g\");\n\n/**\n *\n * Strip [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code) from a string.\n * Adapted from code originally released by Sindre Sorhus\n * Licensed the MIT License\n *\n * @param {string} string\n * @return {string}\n */\nvar stripAnsi = function stripAnsi(string) {\n  if (typeof string !== \"string\") {\n    throw new TypeError(\"Expected a `string`, got `\".concat(typeof string, \"`\"));\n  }\n  return string.replace(ansiRegex, \"\");\n};\nvar onSocketMessage = {\n  hot: function hot() {\n    if (parsedResourceQuery.hot === \"false\") {\n      return;\n    }\n    options.hot = true;\n  },\n  liveReload: function liveReload() {\n    if (parsedResourceQuery[\"live-reload\"] === \"false\") {\n      return;\n    }\n    options.liveReload = true;\n  },\n  invalid: function invalid() {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(\"App updated. Recompiling...\");\n\n    // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.\n    if (options.overlay) {\n      overlay.send({\n        type: \"DISMISS\"\n      });\n    }\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"Invalid\");\n  },\n  /**\n   * @param {string} hash\n   */\n  hash: function hash(_hash) {\n    status.previousHash = status.currentHash;\n    status.currentHash = _hash;\n  },\n  logging: setAllLogLevel,\n  /**\n   * @param {boolean} value\n   */\n  overlay: function overlay(value) {\n    if (typeof document === \"undefined\") {\n      return;\n    }\n    options.overlay = value;\n    decodeOverlayOptions(options.overlay);\n  },\n  /**\n   * @param {number} value\n   */\n  reconnect: function reconnect(value) {\n    if (parsedResourceQuery.reconnect === \"false\") {\n      return;\n    }\n    options.reconnect = value;\n  },\n  /**\n   * @param {boolean} value\n   */\n  progress: function progress(value) {\n    options.progress = value;\n  },\n  /**\n   * @param {{ pluginName?: string, percent: number, msg: string }} data\n   */\n  \"progress-update\": function progressUpdate(data) {\n    if (options.progress) {\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(\"\".concat(data.pluginName ? \"[\".concat(data.pluginName, \"] \") : \"\").concat(data.percent, \"% - \").concat(data.msg, \".\"));\n    }\n    if ((0,_progress_js__WEBPACK_IMPORTED_MODULE_6__.isProgressSupported)()) {\n      if (typeof options.progress === \"string\") {\n        var progress = document.querySelector(\"wds-progress\");\n        if (!progress) {\n          (0,_progress_js__WEBPACK_IMPORTED_MODULE_6__.defineProgressElement)();\n          progress = document.createElement(\"wds-progress\");\n          document.body.appendChild(progress);\n        }\n        progress.setAttribute(\"progress\", data.percent);\n        progress.setAttribute(\"type\", options.progress);\n      }\n    }\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"Progress\", data);\n  },\n  \"still-ok\": function stillOk() {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(\"Nothing changed.\");\n    if (options.overlay) {\n      overlay.send({\n        type: \"DISMISS\"\n      });\n    }\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"StillOk\");\n  },\n  ok: function ok() {\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"Ok\");\n    if (options.overlay) {\n      overlay.send({\n        type: \"DISMISS\"\n      });\n    }\n    reloadApp(options, status);\n  },\n  /**\n   * @param {string} file\n   */\n  \"static-changed\": function staticChanged(file) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(\"\".concat(file ? \"\\\"\".concat(file, \"\\\"\") : \"Content\", \" from static directory was changed. Reloading...\"));\n    self.location.reload();\n  },\n  /**\n   * @param {Error[]} warnings\n   * @param {any} params\n   */\n  warnings: function warnings(_warnings, params) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.warn(\"Warnings while compiling.\");\n    var printableWarnings = _warnings.map(function (error) {\n      var _formatProblem = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_3__.formatProblem)(\"warning\", error),\n        header = _formatProblem.header,\n        body = _formatProblem.body;\n      return \"\".concat(header, \"\\n\").concat(stripAnsi(body));\n    });\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"Warnings\", printableWarnings);\n    for (var i = 0; i < printableWarnings.length; i++) {\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.warn(printableWarnings[i]);\n    }\n    var overlayWarningsSetting = typeof options.overlay === \"boolean\" ? options.overlay : options.overlay && options.overlay.warnings;\n    if (overlayWarningsSetting) {\n      var warningsToDisplay = typeof overlayWarningsSetting === \"function\" ? _warnings.filter(overlayWarningsSetting) : _warnings;\n      if (warningsToDisplay.length) {\n        overlay.send({\n          type: \"BUILD_ERROR\",\n          level: \"warning\",\n          messages: _warnings\n        });\n      }\n    }\n    if (params && params.preventReloading) {\n      return;\n    }\n    reloadApp(options, status);\n  },\n  /**\n   * @param {Error[]} errors\n   */\n  errors: function errors(_errors) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.error(\"Errors while compiling. Reload prevented.\");\n    var printableErrors = _errors.map(function (error) {\n      var _formatProblem2 = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_3__.formatProblem)(\"error\", error),\n        header = _formatProblem2.header,\n        body = _formatProblem2.body;\n      return \"\".concat(header, \"\\n\").concat(stripAnsi(body));\n    });\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"Errors\", printableErrors);\n    for (var i = 0; i < printableErrors.length; i++) {\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.error(printableErrors[i]);\n    }\n    var overlayErrorsSettings = typeof options.overlay === \"boolean\" ? options.overlay : options.overlay && options.overlay.errors;\n    if (overlayErrorsSettings) {\n      var errorsToDisplay = typeof overlayErrorsSettings === \"function\" ? _errors.filter(overlayErrorsSettings) : _errors;\n      if (errorsToDisplay.length) {\n        overlay.send({\n          type: \"BUILD_ERROR\",\n          level: \"error\",\n          messages: _errors\n        });\n      }\n    }\n  },\n  /**\n   * @param {Error} error\n   */\n  error: function error(_error) {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.error(_error);\n  },\n  close: function close() {\n    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(\"Disconnected!\");\n    if (options.overlay) {\n      overlay.send({\n        type: \"DISMISS\"\n      });\n    }\n    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(\"Close\");\n  }\n};\n\n/**\n * @param {{ protocol?: string, auth?: string, hostname?: string, port?: string, pathname?: string, search?: string, hash?: string, slashes?: boolean }} objURL\n * @returns {string}\n */\nvar formatURL = function formatURL(objURL) {\n  var protocol = objURL.protocol || \"\";\n  if (protocol && protocol.substr(-1) !== \":\") {\n    protocol += \":\";\n  }\n  var auth = objURL.auth || \"\";\n  if (auth) {\n    auth = encodeURIComponent(auth);\n    auth = auth.replace(/%3A/i, \":\");\n    auth += \"@\";\n  }\n  var host = \"\";\n  if (objURL.hostname) {\n    host = auth + (objURL.hostname.indexOf(\":\") === -1 ? objURL.hostname : \"[\".concat(objURL.hostname, \"]\"));\n    if (objURL.port) {\n      host += \":\".concat(objURL.port);\n    }\n  }\n  var pathname = objURL.pathname || \"\";\n  if (objURL.slashes) {\n    host = \"//\".concat(host || \"\");\n    if (pathname && pathname.charAt(0) !== \"/\") {\n      pathname = \"/\".concat(pathname);\n    }\n  } else if (!host) {\n    host = \"\";\n  }\n  var search = objURL.search || \"\";\n  if (search && search.charAt(0) !== \"?\") {\n    search = \"?\".concat(search);\n  }\n  var hash = objURL.hash || \"\";\n  if (hash && hash.charAt(0) !== \"#\") {\n    hash = \"#\".concat(hash);\n  }\n  pathname = pathname.replace(/[?#]/g,\n  /**\n   * @param {string} match\n   * @returns {string}\n   */\n  function (match) {\n    return encodeURIComponent(match);\n  });\n  search = search.replace(\"#\", \"%23\");\n  return \"\".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);\n};\n\n/**\n * @param {URL & { fromCurrentScript?: boolean }} parsedURL\n * @returns {string}\n */\nvar createSocketURL = function createSocketURL(parsedURL) {\n  var hostname = parsedURL.hostname;\n\n  // Node.js module parses it as `::`\n  // `new URL(urlString, [baseURLString])` parses it as '[::]'\n  var isInAddrAny = hostname === \"0.0.0.0\" || hostname === \"::\" || hostname === \"[::]\";\n\n  // why do we need this check?\n  // hostname n/a for file protocol (example, when using electron, ionic)\n  // see: https://github.com/webpack/webpack-dev-server/pull/384\n  if (isInAddrAny && self.location.hostname && self.location.protocol.indexOf(\"http\") === 0) {\n    hostname = self.location.hostname;\n  }\n  var socketURLProtocol = parsedURL.protocol || self.location.protocol;\n\n  // When https is used in the app, secure web sockets are always necessary because the browser doesn't accept non-secure web sockets.\n  if (socketURLProtocol === \"auto:\" || hostname && isInAddrAny && self.location.protocol === \"https:\") {\n    socketURLProtocol = self.location.protocol;\n  }\n  socketURLProtocol = socketURLProtocol.replace(/^(?:http|.+-extension|file)/i, \"ws\");\n  var socketURLAuth = \"\";\n\n  // `new URL(urlString, [baseURLstring])` doesn't have `auth` property\n  // Parse authentication credentials in case we need them\n  if (parsedURL.username) {\n    socketURLAuth = parsedURL.username;\n\n    // Since HTTP basic authentication does not allow empty username,\n    // we only include password if the username is not empty.\n    if (parsedURL.password) {\n      // Result: <username>:<password>\n      socketURLAuth = socketURLAuth.concat(\":\", parsedURL.password);\n    }\n  }\n\n  // In case the host is a raw IPv6 address, it can be enclosed in\n  // the brackets as the brackets are needed in the final URL string.\n  // Need to remove those as url.format blindly adds its own set of brackets\n  // if the host string contains colons. That would lead to non-working\n  // double brackets (e.g. [[::]]) host\n  //\n  // All of these web socket url params are optionally passed in through resourceQuery,\n  // so we need to fall back to the default if they are not provided\n  var socketURLHostname = (hostname || self.location.hostname || \"localhost\").replace(/^\\[(.*)\\]$/, \"$1\");\n  var socketURLPort = parsedURL.port;\n  if (!socketURLPort || socketURLPort === \"0\") {\n    socketURLPort = self.location.port;\n  }\n\n  // If path is provided it'll be passed in via the resourceQuery as a\n  // query param so it has to be parsed out of the querystring in order for the\n  // client to open the socket to the correct location.\n  var socketURLPathname = \"/ws\";\n  if (parsedURL.pathname && !parsedURL.fromCurrentScript) {\n    socketURLPathname = parsedURL.pathname;\n  }\n  return formatURL({\n    protocol: socketURLProtocol,\n    auth: socketURLAuth,\n    hostname: socketURLHostname,\n    port: socketURLPort,\n    pathname: socketURLPathname,\n    slashes: true\n  });\n};\nvar socketURL = createSocketURL(parsedResourceQuery);\n(0,_socket_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(socketURL, onSocketMessage, options.reconnect);\n\n\n//# sourceURL=webpack://frontend-dev-test/./node_modules/webpack-dev-server/client/index.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/modules/logger/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/modules/logger/index.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, exports) {

eval("/******/ (function() { // webpackBootstrap\n/******/ \t\"use strict\";\n/******/ \tvar __webpack_modules__ = ({\n\n/***/ \"./client-src/modules/logger/tapable.js\":\n/*!**********************************************!*\\\n  !*** ./client-src/modules/logger/tapable.js ***!\n  \\**********************************************/\n/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_372__) {\n\n__nested_webpack_require_372__.r(__nested_webpack_exports__);\n/* harmony export */ __nested_webpack_require_372__.d(__nested_webpack_exports__, {\n/* harmony export */   SyncBailHook: function() { return /* binding */ SyncBailHook; }\n/* harmony export */ });\nfunction SyncBailHook() {\n  return {\n    call: function call() {}\n  };\n}\n\n/**\n * Client stub for tapable SyncBailHook\n */\n// eslint-disable-next-line import/prefer-default-export\n\n\n/***/ }),\n\n/***/ \"./node_modules/webpack/lib/logging/Logger.js\":\n/*!****************************************************!*\\\n  !*** ./node_modules/webpack/lib/logging/Logger.js ***!\n  \\****************************************************/\n/***/ (function(module) {\n\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\n\n\nfunction _toConsumableArray(r) {\n  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();\n}\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _unsupportedIterableToArray(r, a) {\n  if (r) {\n    if (\"string\" == typeof r) return _arrayLikeToArray(r, a);\n    var t = {}.toString.call(r).slice(8, -1);\n    return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;\n  }\n}\nfunction _iterableToArray(r) {\n  if (\"undefined\" != typeof (typeof Symbol !== \"undefined\" ? Symbol : function (i) { return i; }) && null != r[(typeof Symbol !== \"undefined\" ? Symbol : function (i) { return i; }).iterator] || null != r[\"@@iterator\"]) return Array.from(r);\n}\nfunction _arrayWithoutHoles(r) {\n  if (Array.isArray(r)) return _arrayLikeToArray(r);\n}\nfunction _arrayLikeToArray(r, a) {\n  (null == a || a > r.length) && (a = r.length);\n  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];\n  return n;\n}\nfunction _classCallCheck(a, n) {\n  if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\");\n}\nfunction _defineProperties(e, r) {\n  for (var t = 0; t < r.length; t++) {\n    var o = r[t];\n    o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);\n  }\n}\nfunction _createClass(e, r, t) {\n  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", {\n    writable: !1\n  }), e;\n}\nfunction _toPropertyKey(t) {\n  var i = _toPrimitive(t, \"string\");\n  return \"symbol\" == typeof i ? i : i + \"\";\n}\nfunction _toPrimitive(t, r) {\n  if (\"object\" != typeof t || !t) return t;\n  var e = t[(typeof Symbol !== \"undefined\" ? Symbol : function (i) { return i; }).toPrimitive];\n  if (void 0 !== e) {\n    var i = e.call(t, r || \"default\");\n    if (\"object\" != typeof i) return i;\n    throw new TypeError(\"@@toPrimitive must return a primitive value.\");\n  }\n  return (\"string\" === r ? String : Number)(t);\n}\nvar LogType = Object.freeze({\n  error: (/** @type {\"error\"} */\"error\"),\n  // message, c style arguments\n  warn: (/** @type {\"warn\"} */\"warn\"),\n  // message, c style arguments\n  info: (/** @type {\"info\"} */\"info\"),\n  // message, c style arguments\n  log: (/** @type {\"log\"} */\"log\"),\n  // message, c style arguments\n  debug: (/** @type {\"debug\"} */\"debug\"),\n  // message, c style arguments\n\n  trace: (/** @type {\"trace\"} */\"trace\"),\n  // no arguments\n\n  group: (/** @type {\"group\"} */\"group\"),\n  // [label]\n  groupCollapsed: (/** @type {\"groupCollapsed\"} */\"groupCollapsed\"),\n  // [label]\n  groupEnd: (/** @type {\"groupEnd\"} */\"groupEnd\"),\n  // [label]\n\n  profile: (/** @type {\"profile\"} */\"profile\"),\n  // [profileName]\n  profileEnd: (/** @type {\"profileEnd\"} */\"profileEnd\"),\n  // [profileName]\n\n  time: (/** @type {\"time\"} */\"time\"),\n  // name, time as [seconds, nanoseconds]\n\n  clear: (/** @type {\"clear\"} */\"clear\"),\n  // no arguments\n  status: (/** @type {\"status\"} */\"status\") // message, arguments\n});\nmodule.exports.LogType = LogType;\n\n/** @typedef {typeof LogType[keyof typeof LogType]} LogTypeEnum */\n\nvar LOG_SYMBOL = (typeof Symbol !== \"undefined\" ? Symbol : function (i) { return i; })(\"webpack logger raw log method\");\nvar TIMERS_SYMBOL = (typeof Symbol !== \"undefined\" ? Symbol : function (i) { return i; })(\"webpack logger times\");\nvar TIMERS_AGGREGATES_SYMBOL = (typeof Symbol !== \"undefined\" ? Symbol : function (i) { return i; })(\"webpack logger aggregated times\");\nvar WebpackLogger = /*#__PURE__*/function () {\n  /**\n   * @param {function(LogTypeEnum, EXPECTED_ANY[]=): void} log log function\n   * @param {function(string | function(): string): WebpackLogger} getChildLogger function to create child logger\n   */\n  function WebpackLogger(log, getChildLogger) {\n    _classCallCheck(this, WebpackLogger);\n    this[LOG_SYMBOL] = log;\n    this.getChildLogger = getChildLogger;\n  }\n\n  /**\n   * @param {...EXPECTED_ANY} args args\n   */\n  return _createClass(WebpackLogger, [{\n    key: \"error\",\n    value: function error() {\n      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n        args[_key] = arguments[_key];\n      }\n      this[LOG_SYMBOL](LogType.error, args);\n    }\n\n    /**\n     * @param {...EXPECTED_ANY} args args\n     */\n  }, {\n    key: \"warn\",\n    value: function warn() {\n      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {\n        args[_key2] = arguments[_key2];\n      }\n      this[LOG_SYMBOL](LogType.warn, args);\n    }\n\n    /**\n     * @param {...EXPECTED_ANY} args args\n     */\n  }, {\n    key: \"info\",\n    value: function info() {\n      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {\n        args[_key3] = arguments[_key3];\n      }\n      this[LOG_SYMBOL](LogType.info, args);\n    }\n\n    /**\n     * @param {...EXPECTED_ANY} args args\n     */\n  }, {\n    key: \"log\",\n    value: function log() {\n      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {\n        args[_key4] = arguments[_key4];\n      }\n      this[LOG_SYMBOL](LogType.log, args);\n    }\n\n    /**\n     * @param {...EXPECTED_ANY} args args\n     */\n  }, {\n    key: \"debug\",\n    value: function debug() {\n      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {\n        args[_key5] = arguments[_key5];\n      }\n      this[LOG_SYMBOL](LogType.debug, args);\n    }\n\n    /**\n     * @param {EXPECTED_ANY} assertion assertion\n     * @param {...EXPECTED_ANY} args args\n     */\n  }, {\n    key: \"assert\",\n    value: function assert(assertion) {\n      if (!assertion) {\n        for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {\n          args[_key6 - 1] = arguments[_key6];\n        }\n        this[LOG_SYMBOL](LogType.error, args);\n      }\n    }\n  }, {\n    key: \"trace\",\n    value: function trace() {\n      this[LOG_SYMBOL](LogType.trace, [\"Trace\"]);\n    }\n  }, {\n    key: \"clear\",\n    value: function clear() {\n      this[LOG_SYMBOL](LogType.clear);\n    }\n\n    /**\n     * @param {...EXPECTED_ANY} args args\n     */\n  }, {\n    key: \"status\",\n    value: function status() {\n      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {\n        args[_key7] = arguments[_key7];\n      }\n      this[LOG_SYMBOL](LogType.status, args);\n    }\n\n    /**\n     * @param {...EXPECTED_ANY} args args\n     */\n  }, {\n    key: \"group\",\n    value: function group() {\n      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {\n        args[_key8] = arguments[_key8];\n      }\n      this[LOG_SYMBOL](LogType.group, args);\n    }\n\n    /**\n     * @param {...EXPECTED_ANY} args args\n     */\n  }, {\n    key: \"groupCollapsed\",\n    value: function groupCollapsed() {\n      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {\n        args[_key9] = arguments[_key9];\n      }\n      this[LOG_SYMBOL](LogType.groupCollapsed, args);\n    }\n  }, {\n    key: \"groupEnd\",\n    value: function groupEnd() {\n      this[LOG_SYMBOL](LogType.groupEnd);\n    }\n\n    /**\n     * @param {string=} label label\n     */\n  }, {\n    key: \"profile\",\n    value: function profile(label) {\n      this[LOG_SYMBOL](LogType.profile, [label]);\n    }\n\n    /**\n     * @param {string=} label label\n     */\n  }, {\n    key: \"profileEnd\",\n    value: function profileEnd(label) {\n      this[LOG_SYMBOL](LogType.profileEnd, [label]);\n    }\n\n    /**\n     * @param {string} label label\n     */\n  }, {\n    key: \"time\",\n    value: function time(label) {\n      /** @type {Map<string | undefined, [number, number]>} */\n      this[TIMERS_SYMBOL] = this[TIMERS_SYMBOL] || new Map();\n      this[TIMERS_SYMBOL].set(label, process.hrtime());\n    }\n\n    /**\n     * @param {string=} label label\n     */\n  }, {\n    key: \"timeLog\",\n    value: function timeLog(label) {\n      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);\n      if (!prev) {\n        throw new Error(\"No such label '\".concat(label, \"' for WebpackLogger.timeLog()\"));\n      }\n      var time = process.hrtime(prev);\n      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));\n    }\n\n    /**\n     * @param {string=} label label\n     */\n  }, {\n    key: \"timeEnd\",\n    value: function timeEnd(label) {\n      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);\n      if (!prev) {\n        throw new Error(\"No such label '\".concat(label, \"' for WebpackLogger.timeEnd()\"));\n      }\n      var time = process.hrtime(prev);\n      /** @type {Map<string | undefined, [number, number]>} */\n      this[TIMERS_SYMBOL].delete(label);\n      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));\n    }\n\n    /**\n     * @param {string=} label label\n     */\n  }, {\n    key: \"timeAggregate\",\n    value: function timeAggregate(label) {\n      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);\n      if (!prev) {\n        throw new Error(\"No such label '\".concat(label, \"' for WebpackLogger.timeAggregate()\"));\n      }\n      var time = process.hrtime(prev);\n      /** @type {Map<string | undefined, [number, number]>} */\n      this[TIMERS_SYMBOL].delete(label);\n      /** @type {Map<string | undefined, [number, number]>} */\n      this[TIMERS_AGGREGATES_SYMBOL] = this[TIMERS_AGGREGATES_SYMBOL] || new Map();\n      var current = this[TIMERS_AGGREGATES_SYMBOL].get(label);\n      if (current !== undefined) {\n        if (time[1] + current[1] > 1e9) {\n          time[0] += current[0] + 1;\n          time[1] = time[1] - 1e9 + current[1];\n        } else {\n          time[0] += current[0];\n          time[1] += current[1];\n        }\n      }\n      this[TIMERS_AGGREGATES_SYMBOL].set(label, time);\n    }\n\n    /**\n     * @param {string=} label label\n     */\n  }, {\n    key: \"timeAggregateEnd\",\n    value: function timeAggregateEnd(label) {\n      if (this[TIMERS_AGGREGATES_SYMBOL] === undefined) return;\n      var time = this[TIMERS_AGGREGATES_SYMBOL].get(label);\n      if (time === undefined) return;\n      this[TIMERS_AGGREGATES_SYMBOL].delete(label);\n      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));\n    }\n  }]);\n}();\nmodule.exports.Logger = WebpackLogger;\n\n/***/ }),\n\n/***/ \"./node_modules/webpack/lib/logging/createConsoleLogger.js\":\n/*!*****************************************************************!*\\\n  !*** ./node_modules/webpack/lib/logging/createConsoleLogger.js ***!\n  \\*****************************************************************/\n/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_12144__) {\n\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\n\n\nfunction _slicedToArray(r, e) {\n  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();\n}\nfunction _nonIterableRest() {\n  throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _iterableToArrayLimit(r, l) {\n  var t = null == r ? null : \"undefined\" != typeof (typeof Symbol !== \"undefined\" ? Symbol : function (i) { return i; }) && r[(typeof Symbol !== \"undefined\" ? Symbol : function (i) { return i; }).iterator] || r[\"@@iterator\"];\n  if (null != t) {\n    var e,\n      n,\n      i,\n      u,\n      a = [],\n      f = !0,\n      o = !1;\n    try {\n      if (i = (t = t.call(r)).next, 0 === l) {\n        if (Object(t) !== t) return;\n        f = !1;\n      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);\n    } catch (r) {\n      o = !0, n = r;\n    } finally {\n      try {\n        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;\n      } finally {\n        if (o) throw n;\n      }\n    }\n    return a;\n  }\n}\nfunction _arrayWithHoles(r) {\n  if (Array.isArray(r)) return r;\n}\nfunction _toConsumableArray(r) {\n  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();\n}\nfunction _nonIterableSpread() {\n  throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _unsupportedIterableToArray(r, a) {\n  if (r) {\n    if (\"string\" == typeof r) return _arrayLikeToArray(r, a);\n    var t = {}.toString.call(r).slice(8, -1);\n    return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;\n  }\n}\nfunction _iterableToArray(r) {\n  if (\"undefined\" != typeof (typeof Symbol !== \"undefined\" ? Symbol : function (i) { return i; }) && null != r[(typeof Symbol !== \"undefined\" ? Symbol : function (i) { return i; }).iterator] || null != r[\"@@iterator\"]) return Array.from(r);\n}\nfunction _arrayWithoutHoles(r) {\n  if (Array.isArray(r)) return _arrayLikeToArray(r);\n}\nfunction _arrayLikeToArray(r, a) {\n  (null == a || a > r.length) && (a = r.length);\n  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];\n  return n;\n}\nvar _require = __nested_webpack_require_12144__(/*! ./Logger */ \"./node_modules/webpack/lib/logging/Logger.js\"),\n  LogType = _require.LogType;\n\n/** @typedef {import(\"../../declarations/WebpackOptions\").FilterItemTypes} FilterItemTypes */\n/** @typedef {import(\"../../declarations/WebpackOptions\").FilterTypes} FilterTypes */\n/** @typedef {import(\"./Logger\").LogTypeEnum} LogTypeEnum */\n\n/** @typedef {function(string): boolean} FilterFunction */\n/** @typedef {function(string, LogTypeEnum, EXPECTED_ANY[]=): void} LoggingFunction */\n\n/**\n * @typedef {object} LoggerConsole\n * @property {function(): void} clear\n * @property {function(): void} trace\n * @property {(...args: EXPECTED_ANY[]) => void} info\n * @property {(...args: EXPECTED_ANY[]) => void} log\n * @property {(...args: EXPECTED_ANY[]) => void} warn\n * @property {(...args: EXPECTED_ANY[]) => void} error\n * @property {(...args: EXPECTED_ANY[]) => void=} debug\n * @property {(...args: EXPECTED_ANY[]) => void=} group\n * @property {(...args: EXPECTED_ANY[]) => void=} groupCollapsed\n * @property {(...args: EXPECTED_ANY[]) => void=} groupEnd\n * @property {(...args: EXPECTED_ANY[]) => void=} status\n * @property {(...args: EXPECTED_ANY[]) => void=} profile\n * @property {(...args: EXPECTED_ANY[]) => void=} profileEnd\n * @property {(...args: EXPECTED_ANY[]) => void=} logTime\n */\n\n/**\n * @typedef {object} LoggerOptions\n * @property {false|true|\"none\"|\"error\"|\"warn\"|\"info\"|\"log\"|\"verbose\"} level loglevel\n * @property {FilterTypes|boolean} debug filter for debug logging\n * @property {LoggerConsole} console the console to log to\n */\n\n/**\n * @param {FilterItemTypes} item an input item\n * @returns {FilterFunction | undefined} filter function\n */\nvar filterToFunction = function filterToFunction(item) {\n  if (typeof item === \"string\") {\n    var regExp = new RegExp(\"[\\\\\\\\/]\".concat(item.replace(/[-[\\]{}()*+?.\\\\^$|]/g, \"\\\\$&\"), \"([\\\\\\\\/]|$|!|\\\\?)\"));\n    return function (ident) {\n      return regExp.test(ident);\n    };\n  }\n  if (item && typeof item === \"object\" && typeof item.test === \"function\") {\n    return function (ident) {\n      return item.test(ident);\n    };\n  }\n  if (typeof item === \"function\") {\n    return item;\n  }\n  if (typeof item === \"boolean\") {\n    return function () {\n      return item;\n    };\n  }\n};\n\n/**\n * @enum {number}\n */\nvar LogLevel = {\n  none: 6,\n  false: 6,\n  error: 5,\n  warn: 4,\n  info: 3,\n  log: 2,\n  true: 2,\n  verbose: 1\n};\n\n/**\n * @param {LoggerOptions} options options object\n * @returns {LoggingFunction} logging function\n */\nmodule.exports = function (_ref) {\n  var _ref$level = _ref.level,\n    level = _ref$level === void 0 ? \"info\" : _ref$level,\n    _ref$debug = _ref.debug,\n    debug = _ref$debug === void 0 ? false : _ref$debug,\n    console = _ref.console;\n  var debugFilters = /** @type {FilterFunction[]} */\n\n  typeof debug === \"boolean\" ? [function () {\n    return debug;\n  }] : /** @type {FilterItemTypes[]} */[].concat(debug).map(filterToFunction);\n  /** @type {number} */\n  var loglevel = LogLevel[\"\".concat(level)] || 0;\n\n  /**\n   * @param {string} name name of the logger\n   * @param {LogTypeEnum} type type of the log entry\n   * @param {EXPECTED_ANY[]=} args arguments of the log entry\n   * @returns {void}\n   */\n  var logger = function logger(name, type, args) {\n    var labeledArgs = function labeledArgs() {\n      if (Array.isArray(args)) {\n        if (args.length > 0 && typeof args[0] === \"string\") {\n          return [\"[\".concat(name, \"] \").concat(args[0])].concat(_toConsumableArray(args.slice(1)));\n        }\n        return [\"[\".concat(name, \"]\")].concat(_toConsumableArray(args));\n      }\n      return [];\n    };\n    var debug = debugFilters.some(function (f) {\n      return f(name);\n    });\n    switch (type) {\n      case LogType.debug:\n        if (!debug) return;\n        if (typeof console.debug === \"function\") {\n          console.debug.apply(console, _toConsumableArray(labeledArgs()));\n        } else {\n          console.log.apply(console, _toConsumableArray(labeledArgs()));\n        }\n        break;\n      case LogType.log:\n        if (!debug && loglevel > LogLevel.log) return;\n        console.log.apply(console, _toConsumableArray(labeledArgs()));\n        break;\n      case LogType.info:\n        if (!debug && loglevel > LogLevel.info) return;\n        console.info.apply(console, _toConsumableArray(labeledArgs()));\n        break;\n      case LogType.warn:\n        if (!debug && loglevel > LogLevel.warn) return;\n        console.warn.apply(console, _toConsumableArray(labeledArgs()));\n        break;\n      case LogType.error:\n        if (!debug && loglevel > LogLevel.error) return;\n        console.error.apply(console, _toConsumableArray(labeledArgs()));\n        break;\n      case LogType.trace:\n        if (!debug) return;\n        console.trace();\n        break;\n      case LogType.groupCollapsed:\n        if (!debug && loglevel > LogLevel.log) return;\n        if (!debug && loglevel > LogLevel.verbose) {\n          if (typeof console.groupCollapsed === \"function\") {\n            console.groupCollapsed.apply(console, _toConsumableArray(labeledArgs()));\n          } else {\n            console.log.apply(console, _toConsumableArray(labeledArgs()));\n          }\n          break;\n        }\n      // falls through\n      case LogType.group:\n        if (!debug && loglevel > LogLevel.log) return;\n        if (typeof console.group === \"function\") {\n          console.group.apply(console, _toConsumableArray(labeledArgs()));\n        } else {\n          console.log.apply(console, _toConsumableArray(labeledArgs()));\n        }\n        break;\n      case LogType.groupEnd:\n        if (!debug && loglevel > LogLevel.log) return;\n        if (typeof console.groupEnd === \"function\") {\n          console.groupEnd();\n        }\n        break;\n      case LogType.time:\n        {\n          if (!debug && loglevel > LogLevel.log) return;\n          var _args = _slicedToArray(/** @type {[string, number, number]} */\n            args, 3),\n            label = _args[0],\n            start = _args[1],\n            end = _args[2];\n          var ms = start * 1000 + end / 1000000;\n          var msg = \"[\".concat(name, \"] \").concat(label, \": \").concat(ms, \" ms\");\n          if (typeof console.logTime === \"function\") {\n            console.logTime(msg);\n          } else {\n            console.log(msg);\n          }\n          break;\n        }\n      case LogType.profile:\n        if (typeof console.profile === \"function\") {\n          console.profile.apply(console, _toConsumableArray(labeledArgs()));\n        }\n        break;\n      case LogType.profileEnd:\n        if (typeof console.profileEnd === \"function\") {\n          console.profileEnd.apply(console, _toConsumableArray(labeledArgs()));\n        }\n        break;\n      case LogType.clear:\n        if (!debug && loglevel > LogLevel.log) return;\n        if (typeof console.clear === \"function\") {\n          console.clear();\n        }\n        break;\n      case LogType.status:\n        if (!debug && loglevel > LogLevel.info) return;\n        if (typeof console.status === \"function\") {\n          if (!args || args.length === 0) {\n            console.status();\n          } else {\n            console.status.apply(console, _toConsumableArray(labeledArgs()));\n          }\n        } else if (args && args.length !== 0) {\n          console.info.apply(console, _toConsumableArray(labeledArgs()));\n        }\n        break;\n      default:\n        throw new Error(\"Unexpected LogType \".concat(type));\n    }\n  };\n  return logger;\n};\n\n/***/ }),\n\n/***/ \"./node_modules/webpack/lib/logging/runtime.js\":\n/*!*****************************************************!*\\\n  !*** ./node_modules/webpack/lib/logging/runtime.js ***!\n  \\*****************************************************/\n/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_22489__) {\n\n/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\n\n\nfunction _extends() {\n  return _extends = Object.assign ? Object.assign.bind() : function (n) {\n    for (var e = 1; e < arguments.length; e++) {\n      var t = arguments[e];\n      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);\n    }\n    return n;\n  }, _extends.apply(null, arguments);\n}\nvar _require = __nested_webpack_require_22489__(/*! tapable */ \"./client-src/modules/logger/tapable.js\"),\n  SyncBailHook = _require.SyncBailHook;\nvar _require2 = __nested_webpack_require_22489__(/*! ./Logger */ \"./node_modules/webpack/lib/logging/Logger.js\"),\n  Logger = _require2.Logger;\nvar createConsoleLogger = __nested_webpack_require_22489__(/*! ./createConsoleLogger */ \"./node_modules/webpack/lib/logging/createConsoleLogger.js\");\n\n/** @type {createConsoleLogger.LoggerOptions} */\nvar currentDefaultLoggerOptions = {\n  level: \"info\",\n  debug: false,\n  console: console\n};\nvar currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);\n\n/**\n * @param {string} name name of the logger\n * @returns {Logger} a logger\n */\nmodule.exports.getLogger = function (name) {\n  return new Logger(function (type, args) {\n    if (module.exports.hooks.log.call(name, type, args) === undefined) {\n      currentDefaultLogger(name, type, args);\n    }\n  }, function (childName) {\n    return module.exports.getLogger(\"\".concat(name, \"/\").concat(childName));\n  });\n};\n\n/**\n * @param {createConsoleLogger.LoggerOptions} options new options, merge with old options\n * @returns {void}\n */\nmodule.exports.configureDefaultLogger = function (options) {\n  _extends(currentDefaultLoggerOptions, options);\n  currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);\n};\nmodule.exports.hooks = {\n  log: new SyncBailHook([\"origin\", \"type\", \"args\"])\n};\n\n/***/ })\n\n/******/ \t});\n/************************************************************************/\n/******/ \t// The module cache\n/******/ \tvar __webpack_module_cache__ = {};\n/******/ \t\n/******/ \t// The require function\n/******/ \tfunction __nested_webpack_require_24566__(moduleId) {\n/******/ \t\t// Check if module is in cache\n/******/ \t\tvar cachedModule = __webpack_module_cache__[moduleId];\n/******/ \t\tif (cachedModule !== undefined) {\n/******/ \t\t\treturn cachedModule.exports;\n/******/ \t\t}\n/******/ \t\t// Create a new module (and put it into the cache)\n/******/ \t\tvar module = __webpack_module_cache__[moduleId] = {\n/******/ \t\t\t// no module.id needed\n/******/ \t\t\t// no module.loaded needed\n/******/ \t\t\texports: {}\n/******/ \t\t};\n/******/ \t\n/******/ \t\t// Execute the module function\n/******/ \t\t__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_24566__);\n/******/ \t\n/******/ \t\t// Return the exports of the module\n/******/ \t\treturn module.exports;\n/******/ \t}\n/******/ \t\n/************************************************************************/\n/******/ \t/* webpack/runtime/define property getters */\n/******/ \t!function() {\n/******/ \t\t// define getter functions for harmony exports\n/******/ \t\t__nested_webpack_require_24566__.d = function(exports, definition) {\n/******/ \t\t\tfor(var key in definition) {\n/******/ \t\t\t\tif(__nested_webpack_require_24566__.o(definition, key) && !__nested_webpack_require_24566__.o(exports, key)) {\n/******/ \t\t\t\t\tObject.defineProperty(exports, key, { enumerable: true, get: definition[key] });\n/******/ \t\t\t\t}\n/******/ \t\t\t}\n/******/ \t\t};\n/******/ \t}();\n/******/ \t\n/******/ \t/* webpack/runtime/hasOwnProperty shorthand */\n/******/ \t!function() {\n/******/ \t\t__nested_webpack_require_24566__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }\n/******/ \t}();\n/******/ \t\n/******/ \t/* webpack/runtime/make namespace object */\n/******/ \t!function() {\n/******/ \t\t// define __esModule on exports\n/******/ \t\t__nested_webpack_require_24566__.r = function(exports) {\n/******/ \t\t\tif(typeof Symbol !== 'undefined' && Symbol.toStringTag) {\n/******/ \t\t\t\tObject.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });\n/******/ \t\t\t}\n/******/ \t\t\tObject.defineProperty(exports, '__esModule', { value: true });\n/******/ \t\t};\n/******/ \t}();\n/******/ \t\n/************************************************************************/\nvar __nested_webpack_exports__ = {};\n// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.\n!function() {\n/*!********************************************!*\\\n  !*** ./client-src/modules/logger/index.js ***!\n  \\********************************************/\n__nested_webpack_require_24566__.r(__nested_webpack_exports__);\n/* harmony export */ __nested_webpack_require_24566__.d(__nested_webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* reexport default export from named module */ webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__; }\n/* harmony export */ });\n/* harmony import */ var webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_24566__(/*! webpack/lib/logging/runtime.js */ \"./node_modules/webpack/lib/logging/runtime.js\");\n\n}();\nvar __webpack_export_target__ = exports;\nfor(var __webpack_i__ in __nested_webpack_exports__) __webpack_export_target__[__webpack_i__] = __nested_webpack_exports__[__webpack_i__];\nif(__nested_webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, \"__esModule\", { value: true });\n/******/ })()\n;\n\n//# sourceURL=webpack://frontend-dev-test/./node_modules/webpack-dev-server/client/modules/logger/index.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay.js":
/*!***********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay.js ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createOverlay: function() { return /* binding */ createOverlay; },\n/* harmony export */   formatProblem: function() { return /* binding */ formatProblem; }\n/* harmony export */ });\n/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ansi-html-community */ \"./node_modules/ansi-html-community/index.js\");\n/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ansi_html_community__WEBPACK_IMPORTED_MODULE_0__);\nfunction ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }\nfunction _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }\nfunction _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == typeof i ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != typeof i) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\n// The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)\n// They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).\n\n\n\n/**\n * @type {(input: string, position: number) => string}\n */\nvar getCodePoint = String.prototype.codePointAt ? function (input, position) {\n  return input.codePointAt(position);\n} : function (input, position) {\n  return (input.charCodeAt(position) - 0xd800) * 0x400 + input.charCodeAt(position + 1) - 0xdc00 + 0x10000;\n};\n\n/**\n * @param {string} macroText\n * @param {RegExp} macroRegExp\n * @param {(input: string) => string} macroReplacer\n * @returns {string}\n */\nvar replaceUsingRegExp = function replaceUsingRegExp(macroText, macroRegExp, macroReplacer) {\n  macroRegExp.lastIndex = 0;\n  var replaceMatch = macroRegExp.exec(macroText);\n  var replaceResult;\n  if (replaceMatch) {\n    replaceResult = \"\";\n    var replaceLastIndex = 0;\n    do {\n      if (replaceLastIndex !== replaceMatch.index) {\n        replaceResult += macroText.substring(replaceLastIndex, replaceMatch.index);\n      }\n      var replaceInput = replaceMatch[0];\n      replaceResult += macroReplacer(replaceInput);\n      replaceLastIndex = replaceMatch.index + replaceInput.length;\n      // eslint-disable-next-line no-cond-assign\n    } while (replaceMatch = macroRegExp.exec(macroText));\n    if (replaceLastIndex !== macroText.length) {\n      replaceResult += macroText.substring(replaceLastIndex);\n    }\n  } else {\n    replaceResult = macroText;\n  }\n  return replaceResult;\n};\nvar references = {\n  \"<\": \"&lt;\",\n  \">\": \"&gt;\",\n  '\"': \"&quot;\",\n  \"'\": \"&apos;\",\n  \"&\": \"&amp;\"\n};\n\n/**\n * @param {string} text text\n * @returns {string}\n */\nfunction encode(text) {\n  if (!text) {\n    return \"\";\n  }\n  return replaceUsingRegExp(text, /[<>'\"&]/g, function (input) {\n    var result = references[input];\n    if (!result) {\n      var code = input.length > 1 ? getCodePoint(input, 0) : input.charCodeAt(0);\n      result = \"&#\".concat(code, \";\");\n    }\n    return result;\n  });\n}\n\n/**\n * @typedef {Object} StateDefinitions\n * @property {{[event: string]: { target: string; actions?: Array<string> }}} [on]\n */\n\n/**\n * @typedef {Object} Options\n * @property {{[state: string]: StateDefinitions}} states\n * @property {object} context;\n * @property {string} initial\n */\n\n/**\n * @typedef {Object} Implementation\n * @property {{[actionName: string]: (ctx: object, event: any) => object}} actions\n */\n\n/**\n * A simplified `createMachine` from `@xstate/fsm` with the following differences:\n *\n *  - the returned machine is technically a \"service\". No `interpret(machine).start()` is needed.\n *  - the state definition only support `on` and target must be declared with { target: 'nextState', actions: [] } explicitly.\n *  - event passed to `send` must be an object with `type` property.\n *  - actions implementation will be [assign action](https://xstate.js.org/docs/guides/context.html#assign-action) if you return any value.\n *  Do not return anything if you just want to invoke side effect.\n *\n * The goal of this custom function is to avoid installing the entire `'xstate/fsm'` package, while enabling modeling using\n * state machine. You can copy the first parameter into the editor at https://stately.ai/viz to visualize the state machine.\n *\n * @param {Options} options\n * @param {Implementation} implementation\n */\nfunction createMachine(_ref, _ref2) {\n  var states = _ref.states,\n    context = _ref.context,\n    initial = _ref.initial;\n  var actions = _ref2.actions;\n  var currentState = initial;\n  var currentContext = context;\n  return {\n    send: function send(event) {\n      var currentStateOn = states[currentState].on;\n      var transitionConfig = currentStateOn && currentStateOn[event.type];\n      if (transitionConfig) {\n        currentState = transitionConfig.target;\n        if (transitionConfig.actions) {\n          transitionConfig.actions.forEach(function (actName) {\n            var actionImpl = actions[actName];\n            var nextContextValue = actionImpl && actionImpl(currentContext, event);\n            if (nextContextValue) {\n              currentContext = _objectSpread(_objectSpread({}, currentContext), nextContextValue);\n            }\n          });\n        }\n      }\n    }\n  };\n}\n\n/**\n * @typedef {Object} ShowOverlayData\n * @property {'warning' | 'error'} level\n * @property {Array<string  | { moduleIdentifier?: string, moduleName?: string, loc?: string, message?: string }>} messages\n * @property {'build' | 'runtime'} messageSource\n */\n\n/**\n * @typedef {Object} CreateOverlayMachineOptions\n * @property {(data: ShowOverlayData) => void} showOverlay\n * @property {() => void} hideOverlay\n */\n\n/**\n * @param {CreateOverlayMachineOptions} options\n */\nvar createOverlayMachine = function createOverlayMachine(options) {\n  var hideOverlay = options.hideOverlay,\n    showOverlay = options.showOverlay;\n  return createMachine({\n    initial: \"hidden\",\n    context: {\n      level: \"error\",\n      messages: [],\n      messageSource: \"build\"\n    },\n    states: {\n      hidden: {\n        on: {\n          BUILD_ERROR: {\n            target: \"displayBuildError\",\n            actions: [\"setMessages\", \"showOverlay\"]\n          },\n          RUNTIME_ERROR: {\n            target: \"displayRuntimeError\",\n            actions: [\"setMessages\", \"showOverlay\"]\n          }\n        }\n      },\n      displayBuildError: {\n        on: {\n          DISMISS: {\n            target: \"hidden\",\n            actions: [\"dismissMessages\", \"hideOverlay\"]\n          },\n          BUILD_ERROR: {\n            target: \"displayBuildError\",\n            actions: [\"appendMessages\", \"showOverlay\"]\n          }\n        }\n      },\n      displayRuntimeError: {\n        on: {\n          DISMISS: {\n            target: \"hidden\",\n            actions: [\"dismissMessages\", \"hideOverlay\"]\n          },\n          RUNTIME_ERROR: {\n            target: \"displayRuntimeError\",\n            actions: [\"appendMessages\", \"showOverlay\"]\n          },\n          BUILD_ERROR: {\n            target: \"displayBuildError\",\n            actions: [\"setMessages\", \"showOverlay\"]\n          }\n        }\n      }\n    }\n  }, {\n    actions: {\n      dismissMessages: function dismissMessages() {\n        return {\n          messages: [],\n          level: \"error\",\n          messageSource: \"build\"\n        };\n      },\n      appendMessages: function appendMessages(context, event) {\n        return {\n          messages: context.messages.concat(event.messages),\n          level: event.level || context.level,\n          messageSource: event.type === \"RUNTIME_ERROR\" ? \"runtime\" : \"build\"\n        };\n      },\n      setMessages: function setMessages(context, event) {\n        return {\n          messages: event.messages,\n          level: event.level || context.level,\n          messageSource: event.type === \"RUNTIME_ERROR\" ? \"runtime\" : \"build\"\n        };\n      },\n      hideOverlay: hideOverlay,\n      showOverlay: showOverlay\n    }\n  });\n};\n\n/**\n *\n * @param {Error} error\n */\nvar parseErrorToStacks = function parseErrorToStacks(error) {\n  if (!error || !(error instanceof Error)) {\n    throw new Error(\"parseErrorToStacks expects Error object\");\n  }\n  if (typeof error.stack === \"string\") {\n    return error.stack.split(\"\\n\").filter(function (stack) {\n      return stack !== \"Error: \".concat(error.message);\n    });\n  }\n};\n\n/**\n * @callback ErrorCallback\n * @param {ErrorEvent} error\n * @returns {void}\n */\n\n/**\n * @param {ErrorCallback} callback\n */\nvar listenToRuntimeError = function listenToRuntimeError(callback) {\n  window.addEventListener(\"error\", callback);\n  return function cleanup() {\n    window.removeEventListener(\"error\", callback);\n  };\n};\n\n/**\n * @callback UnhandledRejectionCallback\n * @param {PromiseRejectionEvent} rejectionEvent\n * @returns {void}\n */\n\n/**\n * @param {UnhandledRejectionCallback} callback\n */\nvar listenToUnhandledRejection = function listenToUnhandledRejection(callback) {\n  window.addEventListener(\"unhandledrejection\", callback);\n  return function cleanup() {\n    window.removeEventListener(\"unhandledrejection\", callback);\n  };\n};\n\n// Styles are inspired by `react-error-overlay`\n\nvar msgStyles = {\n  error: {\n    backgroundColor: \"rgba(206, 17, 38, 0.1)\",\n    color: \"#fccfcf\"\n  },\n  warning: {\n    backgroundColor: \"rgba(251, 245, 180, 0.1)\",\n    color: \"#fbf5b4\"\n  }\n};\nvar iframeStyle = {\n  position: \"fixed\",\n  top: 0,\n  left: 0,\n  right: 0,\n  bottom: 0,\n  width: \"100vw\",\n  height: \"100vh\",\n  border: \"none\",\n  \"z-index\": 9999999999\n};\nvar containerStyle = {\n  position: \"fixed\",\n  boxSizing: \"border-box\",\n  left: 0,\n  top: 0,\n  right: 0,\n  bottom: 0,\n  width: \"100vw\",\n  height: \"100vh\",\n  fontSize: \"large\",\n  padding: \"2rem 2rem 4rem 2rem\",\n  lineHeight: \"1.2\",\n  whiteSpace: \"pre-wrap\",\n  overflow: \"auto\",\n  backgroundColor: \"rgba(0, 0, 0, 0.9)\",\n  color: \"white\"\n};\nvar headerStyle = {\n  color: \"#e83b46\",\n  fontSize: \"2em\",\n  whiteSpace: \"pre-wrap\",\n  fontFamily: \"sans-serif\",\n  margin: \"0 2rem 2rem 0\",\n  flex: \"0 0 auto\",\n  maxHeight: \"50%\",\n  overflow: \"auto\"\n};\nvar dismissButtonStyle = {\n  color: \"#ffffff\",\n  lineHeight: \"1rem\",\n  fontSize: \"1.5rem\",\n  padding: \"1rem\",\n  cursor: \"pointer\",\n  position: \"absolute\",\n  right: 0,\n  top: 0,\n  backgroundColor: \"transparent\",\n  border: \"none\"\n};\nvar msgTypeStyle = {\n  color: \"#e83b46\",\n  fontSize: \"1.2em\",\n  marginBottom: \"1rem\",\n  fontFamily: \"sans-serif\"\n};\nvar msgTextStyle = {\n  lineHeight: \"1.5\",\n  fontSize: \"1rem\",\n  fontFamily: \"Menlo, Consolas, monospace\"\n};\n\n// ANSI HTML\n\nvar colors = {\n  reset: [\"transparent\", \"transparent\"],\n  black: \"181818\",\n  red: \"E36049\",\n  green: \"B3CB74\",\n  yellow: \"FFD080\",\n  blue: \"7CAFC2\",\n  magenta: \"7FACCA\",\n  cyan: \"C3C2EF\",\n  lightgrey: \"EBE7E3\",\n  darkgrey: \"6D7891\"\n};\nansi_html_community__WEBPACK_IMPORTED_MODULE_0___default().setColors(colors);\n\n/**\n * @param {string} type\n * @param {string  | { file?: string, moduleName?: string, loc?: string, message?: string; stack?: string[] }} item\n * @returns {{ header: string, body: string }}\n */\nvar formatProblem = function formatProblem(type, item) {\n  var header = type === \"warning\" ? \"WARNING\" : \"ERROR\";\n  var body = \"\";\n  if (typeof item === \"string\") {\n    body += item;\n  } else {\n    var file = item.file || \"\";\n    // eslint-disable-next-line no-nested-ternary\n    var moduleName = item.moduleName ? item.moduleName.indexOf(\"!\") !== -1 ? \"\".concat(item.moduleName.replace(/^(\\s|\\S)*!/, \"\"), \" (\").concat(item.moduleName, \")\") : \"\".concat(item.moduleName) : \"\";\n    var loc = item.loc;\n    header += \"\".concat(moduleName || file ? \" in \".concat(moduleName ? \"\".concat(moduleName).concat(file ? \" (\".concat(file, \")\") : \"\") : file).concat(loc ? \" \".concat(loc) : \"\") : \"\");\n    body += item.message || \"\";\n  }\n  if (Array.isArray(item.stack)) {\n    item.stack.forEach(function (stack) {\n      if (typeof stack === \"string\") {\n        body += \"\\r\\n\".concat(stack);\n      }\n    });\n  }\n  return {\n    header: header,\n    body: body\n  };\n};\n\n/**\n * @typedef {Object} CreateOverlayOptions\n * @property {string | null} trustedTypesPolicyName\n * @property {boolean | (error: Error) => void} [catchRuntimeError]\n */\n\n/**\n *\n * @param {CreateOverlayOptions} options\n */\nvar createOverlay = function createOverlay(options) {\n  /** @type {HTMLIFrameElement | null | undefined} */\n  var iframeContainerElement;\n  /** @type {HTMLDivElement | null | undefined} */\n  var containerElement;\n  /** @type {HTMLDivElement | null | undefined} */\n  var headerElement;\n  /** @type {Array<(element: HTMLDivElement) => void>} */\n  var onLoadQueue = [];\n  /** @type {TrustedTypePolicy | undefined} */\n  var overlayTrustedTypesPolicy;\n\n  /**\n   *\n   * @param {HTMLElement} element\n   * @param {CSSStyleDeclaration} style\n   */\n  function applyStyle(element, style) {\n    Object.keys(style).forEach(function (prop) {\n      element.style[prop] = style[prop];\n    });\n  }\n\n  /**\n   * @param {string | null} trustedTypesPolicyName\n   */\n  function createContainer(trustedTypesPolicyName) {\n    // Enable Trusted Types if they are available in the current browser.\n    if (window.trustedTypes) {\n      overlayTrustedTypesPolicy = window.trustedTypes.createPolicy(trustedTypesPolicyName || \"webpack-dev-server#overlay\", {\n        createHTML: function createHTML(value) {\n          return value;\n        }\n      });\n    }\n    iframeContainerElement = document.createElement(\"iframe\");\n    iframeContainerElement.id = \"webpack-dev-server-client-overlay\";\n    iframeContainerElement.src = \"about:blank\";\n    applyStyle(iframeContainerElement, iframeStyle);\n    iframeContainerElement.onload = function () {\n      var contentElement = /** @type {Document} */\n      (/** @type {HTMLIFrameElement} */\n      iframeContainerElement.contentDocument).createElement(\"div\");\n      containerElement = /** @type {Document} */\n      (/** @type {HTMLIFrameElement} */\n      iframeContainerElement.contentDocument).createElement(\"div\");\n      contentElement.id = \"webpack-dev-server-client-overlay-div\";\n      applyStyle(contentElement, containerStyle);\n      headerElement = document.createElement(\"div\");\n      headerElement.innerText = \"Compiled with problems:\";\n      applyStyle(headerElement, headerStyle);\n      var closeButtonElement = document.createElement(\"button\");\n      applyStyle(closeButtonElement, dismissButtonStyle);\n      closeButtonElement.innerText = \"×\";\n      closeButtonElement.ariaLabel = \"Dismiss\";\n      closeButtonElement.addEventListener(\"click\", function () {\n        // eslint-disable-next-line no-use-before-define\n        overlayService.send({\n          type: \"DISMISS\"\n        });\n      });\n      contentElement.appendChild(headerElement);\n      contentElement.appendChild(closeButtonElement);\n      contentElement.appendChild(containerElement);\n\n      /** @type {Document} */\n      (/** @type {HTMLIFrameElement} */\n      iframeContainerElement.contentDocument).body.appendChild(contentElement);\n      onLoadQueue.forEach(function (onLoad) {\n        onLoad(/** @type {HTMLDivElement} */contentElement);\n      });\n      onLoadQueue = [];\n\n      /** @type {HTMLIFrameElement} */\n      iframeContainerElement.onload = null;\n    };\n    document.body.appendChild(iframeContainerElement);\n  }\n\n  /**\n   * @param {(element: HTMLDivElement) => void} callback\n   * @param {string | null} trustedTypesPolicyName\n   */\n  function ensureOverlayExists(callback, trustedTypesPolicyName) {\n    if (containerElement) {\n      containerElement.innerHTML = overlayTrustedTypesPolicy ? overlayTrustedTypesPolicy.createHTML(\"\") : \"\";\n      // Everything is ready, call the callback right away.\n      callback(containerElement);\n      return;\n    }\n    onLoadQueue.push(callback);\n    if (iframeContainerElement) {\n      return;\n    }\n    createContainer(trustedTypesPolicyName);\n  }\n\n  // Successful compilation.\n  function hide() {\n    if (!iframeContainerElement) {\n      return;\n    }\n\n    // Clean up and reset internal state.\n    document.body.removeChild(iframeContainerElement);\n    iframeContainerElement = null;\n    containerElement = null;\n  }\n\n  // Compilation with errors (e.g. syntax error or missing modules).\n  /**\n   * @param {string} type\n   * @param {Array<string  | { moduleIdentifier?: string, moduleName?: string, loc?: string, message?: string }>} messages\n   * @param {string | null} trustedTypesPolicyName\n   * @param {'build' | 'runtime'} messageSource\n   */\n  function show(type, messages, trustedTypesPolicyName, messageSource) {\n    ensureOverlayExists(function () {\n      headerElement.innerText = messageSource === \"runtime\" ? \"Uncaught runtime errors:\" : \"Compiled with problems:\";\n      messages.forEach(function (message) {\n        var entryElement = document.createElement(\"div\");\n        var msgStyle = type === \"warning\" ? msgStyles.warning : msgStyles.error;\n        applyStyle(entryElement, _objectSpread(_objectSpread({}, msgStyle), {}, {\n          padding: \"1rem 1rem 1.5rem 1rem\"\n        }));\n        var typeElement = document.createElement(\"div\");\n        var _formatProblem = formatProblem(type, message),\n          header = _formatProblem.header,\n          body = _formatProblem.body;\n        typeElement.innerText = header;\n        applyStyle(typeElement, msgTypeStyle);\n        if (message.moduleIdentifier) {\n          applyStyle(typeElement, {\n            cursor: \"pointer\"\n          });\n          // element.dataset not supported in IE\n          typeElement.setAttribute(\"data-can-open\", true);\n          typeElement.addEventListener(\"click\", function () {\n            fetch(\"/webpack-dev-server/open-editor?fileName=\".concat(message.moduleIdentifier));\n          });\n        }\n\n        // Make it look similar to our terminal.\n        var text = ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default()(encode(body));\n        var messageTextNode = document.createElement(\"div\");\n        applyStyle(messageTextNode, msgTextStyle);\n        messageTextNode.innerHTML = overlayTrustedTypesPolicy ? overlayTrustedTypesPolicy.createHTML(text) : text;\n        entryElement.appendChild(typeElement);\n        entryElement.appendChild(messageTextNode);\n\n        /** @type {HTMLDivElement} */\n        containerElement.appendChild(entryElement);\n      });\n    }, trustedTypesPolicyName);\n  }\n  var overlayService = createOverlayMachine({\n    showOverlay: function showOverlay(_ref3) {\n      var _ref3$level = _ref3.level,\n        level = _ref3$level === void 0 ? \"error\" : _ref3$level,\n        messages = _ref3.messages,\n        messageSource = _ref3.messageSource;\n      return show(level, messages, options.trustedTypesPolicyName, messageSource);\n    },\n    hideOverlay: hide\n  });\n  if (options.catchRuntimeError) {\n    /**\n     * @param {Error | undefined} error\n     * @param {string} fallbackMessage\n     */\n    var handleError = function handleError(error, fallbackMessage) {\n      var errorObject = error instanceof Error ? error : new Error(error || fallbackMessage);\n      var shouldDisplay = typeof options.catchRuntimeError === \"function\" ? options.catchRuntimeError(errorObject) : true;\n      if (shouldDisplay) {\n        overlayService.send({\n          type: \"RUNTIME_ERROR\",\n          messages: [{\n            message: errorObject.message,\n            stack: parseErrorToStacks(errorObject)\n          }]\n        });\n      }\n    };\n    listenToRuntimeError(function (errorEvent) {\n      // error property may be empty in older browser like IE\n      var error = errorEvent.error,\n        message = errorEvent.message;\n      if (!error && !message) {\n        return;\n      }\n      handleError(error, message);\n    });\n    listenToUnhandledRejection(function (promiseRejectionEvent) {\n      var reason = promiseRejectionEvent.reason;\n      handleError(reason, \"Unknown promise rejection reason\");\n    });\n  }\n  return overlayService;\n};\n\n\n//# sourceURL=webpack://frontend-dev-test/./node_modules/webpack-dev-server/client/overlay.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/progress.js":
/*!************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/progress.js ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   defineProgressElement: function() { return /* binding */ defineProgressElement; },\n/* harmony export */   isProgressSupported: function() { return /* binding */ isProgressSupported; }\n/* harmony export */ });\nfunction _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError(\"Cannot call a class as a function\"); }\nfunction _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, \"value\" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }\nfunction _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, \"prototype\", { writable: !1 }), e; }\nfunction _toPropertyKey(t) { var i = _toPrimitive(t, \"string\"); return \"symbol\" == typeof i ? i : i + \"\"; }\nfunction _toPrimitive(t, r) { if (\"object\" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || \"default\"); if (\"object\" != typeof i) return i; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (\"string\" === r ? String : Number)(t); }\nfunction _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }\nfunction _possibleConstructorReturn(t, e) { if (e && (\"object\" == typeof e || \"function\" == typeof e)) return e; if (void 0 !== e) throw new TypeError(\"Derived constructors may only return object or undefined\"); return _assertThisInitialized(t); }\nfunction _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); return e; }\nfunction _inherits(t, e) { if (\"function\" != typeof e && null !== e) throw new TypeError(\"Super expression must either be null or a function\"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, \"prototype\", { writable: !1 }), e && _setPrototypeOf(t, e); }\nfunction _wrapNativeSuper(t) { var r = \"function\" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if (\"function\" != typeof t) throw new TypeError(\"Super expression must either be null or a function\"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }\nfunction _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }\nfunction _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }\nfunction _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf(\"[native code]\"); } catch (n) { return \"function\" == typeof t; } }\nfunction _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }\nfunction _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }\nfunction _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }\nfunction _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError(\"Cannot initialize the same private elements twice on an object\"); }\nfunction _assertClassBrand(e, t, n) { if (\"function\" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError(\"Private element is not present on this object\"); }\nfunction isProgressSupported() {\n  return \"customElements\" in self && !!HTMLElement.prototype.attachShadow;\n}\nfunction defineProgressElement() {\n  var _WebpackDevServerProgress;\n  if (customElements.get(\"wds-progress\")) {\n    return;\n  }\n  var _WebpackDevServerProgress_brand = /*#__PURE__*/new WeakSet();\n  var WebpackDevServerProgress = /*#__PURE__*/function (_HTMLElement) {\n    function WebpackDevServerProgress() {\n      var _this;\n      _classCallCheck(this, WebpackDevServerProgress);\n      _this = _callSuper(this, WebpackDevServerProgress);\n      _classPrivateMethodInitSpec(_this, _WebpackDevServerProgress_brand);\n      _this.attachShadow({\n        mode: \"open\"\n      });\n      _this.maxDashOffset = -219.99078369140625;\n      _this.animationTimer = null;\n      return _this;\n    }\n    _inherits(WebpackDevServerProgress, _HTMLElement);\n    return _createClass(WebpackDevServerProgress, [{\n      key: \"connectedCallback\",\n      value: function connectedCallback() {\n        _assertClassBrand(_WebpackDevServerProgress_brand, this, _reset).call(this);\n      }\n    }, {\n      key: \"attributeChangedCallback\",\n      value: function attributeChangedCallback(name, oldValue, newValue) {\n        if (name === \"progress\") {\n          _assertClassBrand(_WebpackDevServerProgress_brand, this, _update).call(this, Number(newValue));\n        } else if (name === \"type\") {\n          _assertClassBrand(_WebpackDevServerProgress_brand, this, _reset).call(this);\n        }\n      }\n    }], [{\n      key: \"observedAttributes\",\n      get: function get() {\n        return [\"progress\", \"type\"];\n      }\n    }]);\n  }(/*#__PURE__*/_wrapNativeSuper(HTMLElement));\n  _WebpackDevServerProgress = WebpackDevServerProgress;\n  function _reset() {\n    var _this$getAttribute, _Number;\n    clearTimeout(this.animationTimer);\n    this.animationTimer = null;\n    var typeAttr = (_this$getAttribute = this.getAttribute(\"type\")) === null || _this$getAttribute === void 0 ? void 0 : _this$getAttribute.toLowerCase();\n    this.type = typeAttr === \"circular\" ? \"circular\" : \"linear\";\n    var innerHTML = this.type === \"circular\" ? _circularTemplate.call(_WebpackDevServerProgress) : _linearTemplate.call(_WebpackDevServerProgress);\n    this.shadowRoot.innerHTML = innerHTML;\n    this.initialProgress = (_Number = Number(this.getAttribute(\"progress\"))) !== null && _Number !== void 0 ? _Number : 0;\n    _assertClassBrand(_WebpackDevServerProgress_brand, this, _update).call(this, this.initialProgress);\n  }\n  function _circularTemplate() {\n    return \"\\n        <style>\\n        :host {\\n            width: 200px;\\n            height: 200px;\\n            position: fixed;\\n            right: 5%;\\n            top: 5%;\\n            transition: opacity .25s ease-in-out;\\n            z-index: 2147483645;\\n        }\\n\\n        circle {\\n            fill: #282d35;\\n        }\\n\\n        path {\\n            fill: rgba(0, 0, 0, 0);\\n            stroke: rgb(186, 223, 172);\\n            stroke-dasharray: 219.99078369140625;\\n            stroke-dashoffset: -219.99078369140625;\\n            stroke-width: 10;\\n            transform: rotate(90deg) translate(0px, -80px);\\n        }\\n\\n        text {\\n            font-family: 'Open Sans', sans-serif;\\n            font-size: 18px;\\n            fill: #ffffff;\\n            dominant-baseline: middle;\\n            text-anchor: middle;\\n        }\\n\\n        tspan#percent-super {\\n            fill: #bdc3c7;\\n            font-size: 0.45em;\\n            baseline-shift: 10%;\\n        }\\n\\n        @keyframes fade {\\n            0% { opacity: 1; transform: scale(1); }\\n            100% { opacity: 0; transform: scale(0); }\\n        }\\n\\n        .disappear {\\n            animation: fade 0.3s;\\n            animation-fill-mode: forwards;\\n            animation-delay: 0.5s;\\n        }\\n\\n        .hidden {\\n            display: none;\\n        }\\n        </style>\\n        <svg id=\\\"progress\\\" class=\\\"hidden noselect\\\" viewBox=\\\"0 0 80 80\\\">\\n        <circle cx=\\\"50%\\\" cy=\\\"50%\\\" r=\\\"35\\\"></circle>\\n        <path d=\\\"M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0\\\"></path>\\n        <text x=\\\"50%\\\" y=\\\"51%\\\">\\n            <tspan id=\\\"percent-value\\\">0</tspan>\\n            <tspan id=\\\"percent-super\\\">%</tspan>\\n        </text>\\n        </svg>\\n      \";\n  }\n  function _linearTemplate() {\n    return \"\\n        <style>\\n        :host {\\n            position: fixed;\\n            top: 0;\\n            left: 0;\\n            height: 4px;\\n            width: 100vw;\\n            z-index: 2147483645;\\n        }\\n\\n        #bar {\\n            width: 0%;\\n            height: 4px;\\n            background-color: rgb(186, 223, 172);\\n        }\\n\\n        @keyframes fade {\\n            0% { opacity: 1; }\\n            100% { opacity: 0; }\\n        }\\n\\n        .disappear {\\n            animation: fade 0.3s;\\n            animation-fill-mode: forwards;\\n            animation-delay: 0.5s;\\n        }\\n\\n        .hidden {\\n            display: none;\\n        }\\n        </style>\\n        <div id=\\\"progress\\\"></div>\\n        \";\n  }\n  function _update(percent) {\n    var element = this.shadowRoot.querySelector(\"#progress\");\n    if (this.type === \"circular\") {\n      var path = this.shadowRoot.querySelector(\"path\");\n      var value = this.shadowRoot.querySelector(\"#percent-value\");\n      var offset = (100 - percent) / 100 * this.maxDashOffset;\n      path.style.strokeDashoffset = offset;\n      value.textContent = percent;\n    } else {\n      element.style.width = \"\".concat(percent, \"%\");\n    }\n    if (percent >= 100) {\n      _assertClassBrand(_WebpackDevServerProgress_brand, this, _hide).call(this);\n    } else if (percent > 0) {\n      _assertClassBrand(_WebpackDevServerProgress_brand, this, _show).call(this);\n    }\n  }\n  function _show() {\n    var element = this.shadowRoot.querySelector(\"#progress\");\n    element.classList.remove(\"hidden\");\n  }\n  function _hide() {\n    var _this2 = this;\n    var element = this.shadowRoot.querySelector(\"#progress\");\n    if (this.type === \"circular\") {\n      element.classList.add(\"disappear\");\n      element.addEventListener(\"animationend\", function () {\n        element.classList.add(\"hidden\");\n        _assertClassBrand(_WebpackDevServerProgress_brand, _this2, _update).call(_this2, 0);\n      }, {\n        once: true\n      });\n    } else if (this.type === \"linear\") {\n      element.classList.add(\"disappear\");\n      this.animationTimer = setTimeout(function () {\n        element.classList.remove(\"disappear\");\n        element.classList.add(\"hidden\");\n        element.style.width = \"0%\";\n        _this2.animationTimer = null;\n      }, 800);\n    }\n  }\n  customElements.define(\"wds-progress\", WebpackDevServerProgress);\n}\n\n//# sourceURL=webpack://frontend-dev-test/./node_modules/webpack-dev-server/client/progress.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/socket.js":
/*!**********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/socket.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   client: function() { return /* binding */ client; }\n/* harmony export */ });\n/* harmony import */ var _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients/WebSocketClient.js */ \"./node_modules/webpack-dev-server/client/clients/WebSocketClient.js\");\n/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/log.js */ \"./node_modules/webpack-dev-server/client/utils/log.js\");\n/* provided dependency */ var __webpack_dev_server_client__ = __webpack_require__(/*! ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js */ \"./node_modules/webpack-dev-server/client/clients/WebSocketClient.js\");\n/* global __webpack_dev_server_client__ */\n\n\n\n\n// this WebsocketClient is here as a default fallback, in case the client is not injected\n/* eslint-disable camelcase */\nvar Client =\n// eslint-disable-next-line no-nested-ternary\ntypeof __webpack_dev_server_client__ !== \"undefined\" ? typeof __webpack_dev_server_client__.default !== \"undefined\" ? __webpack_dev_server_client__.default : __webpack_dev_server_client__ : _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"];\n/* eslint-enable camelcase */\n\nvar retries = 0;\nvar maxRetries = 10;\n\n// Initialized client is exported so external consumers can utilize the same instance\n// It is mutable to enforce singleton\n// eslint-disable-next-line import/no-mutable-exports\nvar client = null;\n\n/**\n * @param {string} url\n * @param {{ [handler: string]: (data?: any, params?: any) => any }} handlers\n * @param {number} [reconnect]\n */\nvar socket = function initSocket(url, handlers, reconnect) {\n  client = new Client(url);\n  client.onOpen(function () {\n    retries = 0;\n    if (typeof reconnect !== \"undefined\") {\n      maxRetries = reconnect;\n    }\n  });\n  client.onClose(function () {\n    if (retries === 0) {\n      handlers.close();\n    }\n\n    // Try to reconnect.\n    client = null;\n\n    // After 10 retries stop trying, to prevent logspam.\n    if (retries < maxRetries) {\n      // Exponentially increase timeout to reconnect.\n      // Respectfully copied from the package `got`.\n      // eslint-disable-next-line no-restricted-properties\n      var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;\n      retries += 1;\n      _utils_log_js__WEBPACK_IMPORTED_MODULE_1__.log.info(\"Trying to reconnect...\");\n      setTimeout(function () {\n        socket(url, handlers, reconnect);\n      }, retryInMs);\n    }\n  });\n  client.onMessage(\n  /**\n   * @param {any} data\n   */\n  function (data) {\n    var message = JSON.parse(data);\n    if (handlers[message.type]) {\n      handlers[message.type](message.data, message.params);\n    }\n  });\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (socket);\n\n//# sourceURL=webpack://frontend-dev-test/./node_modules/webpack-dev-server/client/socket.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/log.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   log: function() { return /* binding */ log; },\n/* harmony export */   setLogLevel: function() { return /* binding */ setLogLevel; }\n/* harmony export */ });\n/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/logger/index.js */ \"./node_modules/webpack-dev-server/client/modules/logger/index.js\");\n/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__);\n\nvar name = \"webpack-dev-server\";\n// default level is set on the client side, so it does not need\n// to be set by the CLI or API\nvar defaultLevel = \"info\";\n\n// options new options, merge with old options\n/**\n * @param {false | true | \"none\" | \"error\" | \"warn\" | \"info\" | \"log\" | \"verbose\"} level\n * @returns {void}\n */\nfunction setLogLevel(level) {\n  _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().configureDefaultLogger({\n    level: level\n  });\n}\nsetLogLevel(defaultLevel);\nvar log = _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().getLogger(name);\n\n\n//# sourceURL=webpack://frontend-dev-test/./node_modules/webpack-dev-server/client/utils/log.js?");

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/sendMessage.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/sendMessage.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* global __resourceQuery WorkerGlobalScope */\n\n// Send messages to the outside, so plugins can consume it.\n/**\n * @param {string} type\n * @param {any} [data]\n */\nfunction sendMsg(type, data) {\n  if (typeof self !== \"undefined\" && (typeof WorkerGlobalScope === \"undefined\" || !(self instanceof WorkerGlobalScope))) {\n    self.postMessage({\n      type: \"webpack\".concat(type),\n      data: data\n    }, \"*\");\n  }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (sendMsg);\n\n//# sourceURL=webpack://frontend-dev-test/./node_modules/webpack-dev-server/client/utils/sendMessage.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/dev-server.js":
/*!************************************************!*\
  !*** ./node_modules/webpack/hot/dev-server.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n/* globals __webpack_hash__ */\nif (true) {\n\t/** @type {undefined|string} */\n\tvar lastHash;\n\tvar upToDate = function upToDate() {\n\t\treturn /** @type {string} */ (lastHash).indexOf(__webpack_require__.h()) >= 0;\n\t};\n\tvar log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n\tvar check = function check() {\n\t\tmodule.hot\n\t\t\t.check(true)\n\t\t\t.then(function (updatedModules) {\n\t\t\t\tif (!updatedModules) {\n\t\t\t\t\tlog(\n\t\t\t\t\t\t\"warning\",\n\t\t\t\t\t\t\"[HMR] Cannot find update. \" +\n\t\t\t\t\t\t\t(typeof window !== \"undefined\"\n\t\t\t\t\t\t\t\t? \"Need to do a full reload!\"\n\t\t\t\t\t\t\t\t: \"Please reload manually!\")\n\t\t\t\t\t);\n\t\t\t\t\tlog(\n\t\t\t\t\t\t\"warning\",\n\t\t\t\t\t\t\"[HMR] (Probably because of restarting the webpack-dev-server)\"\n\t\t\t\t\t);\n\t\t\t\t\tif (typeof window !== \"undefined\") {\n\t\t\t\t\t\twindow.location.reload();\n\t\t\t\t\t}\n\t\t\t\t\treturn;\n\t\t\t\t}\n\n\t\t\t\tif (!upToDate()) {\n\t\t\t\t\tcheck();\n\t\t\t\t}\n\n\t\t\t\t__webpack_require__(/*! ./log-apply-result */ \"./node_modules/webpack/hot/log-apply-result.js\")(updatedModules, updatedModules);\n\n\t\t\t\tif (upToDate()) {\n\t\t\t\t\tlog(\"info\", \"[HMR] App is up to date.\");\n\t\t\t\t}\n\t\t\t})\n\t\t\t.catch(function (err) {\n\t\t\t\tvar status = module.hot.status();\n\t\t\t\tif ([\"abort\", \"fail\"].indexOf(status) >= 0) {\n\t\t\t\t\tlog(\n\t\t\t\t\t\t\"warning\",\n\t\t\t\t\t\t\"[HMR] Cannot apply update. \" +\n\t\t\t\t\t\t\t(typeof window !== \"undefined\"\n\t\t\t\t\t\t\t\t? \"Need to do a full reload!\"\n\t\t\t\t\t\t\t\t: \"Please reload manually!\")\n\t\t\t\t\t);\n\t\t\t\t\tlog(\"warning\", \"[HMR] \" + log.formatError(err));\n\t\t\t\t\tif (typeof window !== \"undefined\") {\n\t\t\t\t\t\twindow.location.reload();\n\t\t\t\t\t}\n\t\t\t\t} else {\n\t\t\t\t\tlog(\"warning\", \"[HMR] Update failed: \" + log.formatError(err));\n\t\t\t\t}\n\t\t\t});\n\t};\n\tvar hotEmitter = __webpack_require__(/*! ./emitter */ \"./node_modules/webpack/hot/emitter.js\");\n\thotEmitter.on(\"webpackHotUpdate\", function (currentHash) {\n\t\tlastHash = currentHash;\n\t\tif (!upToDate() && module.hot.status() === \"idle\") {\n\t\t\tlog(\"info\", \"[HMR] Checking for updates on the server...\");\n\t\t\tcheck();\n\t\t}\n\t});\n\tlog(\"info\", \"[HMR] Waiting for update signal from WDS...\");\n} else {}\n\n\n//# sourceURL=webpack://frontend-dev-test/./node_modules/webpack/hot/dev-server.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/emitter.js":
/*!*********************************************!*\
  !*** ./node_modules/webpack/hot/emitter.js ***!
  \*********************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("var EventEmitter = __webpack_require__(/*! events */ \"./node_modules/events/events.js\");\nmodule.exports = new EventEmitter();\n\n\n//# sourceURL=webpack://frontend-dev-test/./node_modules/webpack/hot/emitter.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval("/*\n\tMIT License http://www.opensource.org/licenses/mit-license.php\n\tAuthor Tobias Koppers @sokra\n*/\n\n/**\n * @param {(string | number)[]} updatedModules updated modules\n * @param {(string | number)[] | null} renewedModules renewed modules\n */\nmodule.exports = function (updatedModules, renewedModules) {\n\tvar unacceptedModules = updatedModules.filter(function (moduleId) {\n\t\treturn renewedModules && renewedModules.indexOf(moduleId) < 0;\n\t});\n\tvar log = __webpack_require__(/*! ./log */ \"./node_modules/webpack/hot/log.js\");\n\n\tif (unacceptedModules.length > 0) {\n\t\tlog(\n\t\t\t\"warning\",\n\t\t\t\"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)\"\n\t\t);\n\t\tunacceptedModules.forEach(function (moduleId) {\n\t\t\tlog(\"warning\", \"[HMR]  - \" + moduleId);\n\t\t});\n\t}\n\n\tif (!renewedModules || renewedModules.length === 0) {\n\t\tlog(\"info\", \"[HMR] Nothing hot updated.\");\n\t} else {\n\t\tlog(\"info\", \"[HMR] Updated modules:\");\n\t\trenewedModules.forEach(function (moduleId) {\n\t\t\tif (typeof moduleId === \"string\" && moduleId.indexOf(\"!\") !== -1) {\n\t\t\t\tvar parts = moduleId.split(\"!\");\n\t\t\t\tlog.groupCollapsed(\"info\", \"[HMR]  - \" + parts.pop());\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t\tlog.groupEnd(\"info\");\n\t\t\t} else {\n\t\t\t\tlog(\"info\", \"[HMR]  - \" + moduleId);\n\t\t\t}\n\t\t});\n\t\tvar numberIds = renewedModules.every(function (moduleId) {\n\t\t\treturn typeof moduleId === \"number\";\n\t\t});\n\t\tif (numberIds)\n\t\t\tlog(\n\t\t\t\t\"info\",\n\t\t\t\t'[HMR] Consider using the optimization.moduleIds: \"named\" for module names.'\n\t\t\t);\n\t}\n};\n\n\n//# sourceURL=webpack://frontend-dev-test/./node_modules/webpack/hot/log-apply-result.js?");

/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ (function(module) {

eval("/** @typedef {\"info\" | \"warning\" | \"error\"} LogLevel */\n\n/** @type {LogLevel} */\nvar logLevel = \"info\";\n\nfunction dummy() {}\n\n/**\n * @param {LogLevel} level log level\n * @returns {boolean} true, if should log\n */\nfunction shouldLog(level) {\n\tvar shouldLog =\n\t\t(logLevel === \"info\" && level === \"info\") ||\n\t\t([\"info\", \"warning\"].indexOf(logLevel) >= 0 && level === \"warning\") ||\n\t\t([\"info\", \"warning\", \"error\"].indexOf(logLevel) >= 0 && level === \"error\");\n\treturn shouldLog;\n}\n\n/**\n * @param {(msg?: string) => void} logFn log function\n * @returns {(level: LogLevel, msg?: string) => void} function that logs when log level is sufficient\n */\nfunction logGroup(logFn) {\n\treturn function (level, msg) {\n\t\tif (shouldLog(level)) {\n\t\t\tlogFn(msg);\n\t\t}\n\t};\n}\n\n/**\n * @param {LogLevel} level log level\n * @param {string|Error} msg message\n */\nmodule.exports = function (level, msg) {\n\tif (shouldLog(level)) {\n\t\tif (level === \"info\") {\n\t\t\tconsole.log(msg);\n\t\t} else if (level === \"warning\") {\n\t\t\tconsole.warn(msg);\n\t\t} else if (level === \"error\") {\n\t\t\tconsole.error(msg);\n\t\t}\n\t}\n};\n\nvar group = console.group || dummy;\nvar groupCollapsed = console.groupCollapsed || dummy;\nvar groupEnd = console.groupEnd || dummy;\n\nmodule.exports.group = logGroup(group);\n\nmodule.exports.groupCollapsed = logGroup(groupCollapsed);\n\nmodule.exports.groupEnd = logGroup(groupEnd);\n\n/**\n * @param {LogLevel} level log level\n */\nmodule.exports.setLogLevel = function (level) {\n\tlogLevel = level;\n};\n\n/**\n * @param {Error} err error\n * @returns {string} formatted error\n */\nmodule.exports.formatError = function (err) {\n\tvar message = err.message;\n\tvar stack = err.stack;\n\tif (!stack) {\n\t\treturn message;\n\t} else if (stack.indexOf(message) < 0) {\n\t\treturn message + \"\\n\" + stack;\n\t}\n\treturn stack;\n};\n\n\n//# sourceURL=webpack://frontend-dev-test/./node_modules/webpack/hot/log.js?");

/***/ }),

/***/ "./src/ts/components/Parallax.ts":
/*!***************************************!*\
  !*** ./src/ts/components/Parallax.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _snippets_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../snippets/helpers */ \"./src/ts/snippets/helpers.ts\");\n\r\nclass Parallax {\r\n    constructor(parallax) {\r\n        this.dataMovement = 0;\r\n        this.movementPercentage = 0;\r\n        this.lerpMovementPercentage = 0;\r\n        this.sensitivePercentage = 0.03;\r\n        this.parallax = parallax;\r\n        this.parallaxItems = this.parallax.querySelectorAll(\".js-parallax-item\");\r\n        this.init();\r\n    }\r\n    init() {\r\n        this.parallaxItems.forEach((item) => {\r\n            const movement = item.getAttribute(\"data-movement\");\r\n            if (movement) {\r\n                this.dataMovement = parseFloat(movement);\r\n                // Set initial position based on movement value\r\n                item.style.top = `${this.dataMovement / 2}px`;\r\n            }\r\n        });\r\n    }\r\n    updateItem() {\r\n        const rect = this.parallax.getBoundingClientRect();\r\n        if (rect.bottom < 0 || rect.top > window.innerHeight) {\r\n            return; // Skip update if container is outside viewport (performance optimization)\r\n        }\r\n        this.parallaxItems.forEach((item) => {\r\n            // Calculate element's position relative to viewport\r\n            const rect = item.getBoundingClientRect();\r\n            const position = rect.top - window.innerHeight;\r\n            const maxHeight = rect.height + window.innerHeight;\r\n            const movement = item.getAttribute(\"data-movement\");\r\n            if (movement) {\r\n                this.dataMovement = parseFloat(movement);\r\n                // Normalize position to a percentage value\r\n                this.movementPercentage = position / maxHeight;\r\n                // Smooth transition using linear interpolation\r\n                this.lerpMovementPercentage = (0,_snippets_helpers__WEBPACK_IMPORTED_MODULE_0__.lerp)(this.lerpMovementPercentage, this.movementPercentage, this.sensitivePercentage);\r\n                // Calculate final movement value\r\n                const moveAmount = this.lerpMovementPercentage * this.dataMovement;\r\n                (0,_snippets_helpers__WEBPACK_IMPORTED_MODULE_0__.transform)(item, `translate3d(0px, ${moveAmount}px, 0px)`);\r\n            }\r\n        });\r\n    }\r\n}\r\nconst parallaxItems = document.querySelectorAll(\".js-parallax\");\r\nconst parallaxInstances = [];\r\nparallaxItems.forEach((parallaxItem) => {\r\n    if (parallaxItem instanceof HTMLElement) {\r\n        parallaxInstances.push(new Parallax(parallaxItem));\r\n    }\r\n});\r\nconst animate = () => {\r\n    parallaxInstances.forEach((parallaxInstance) => {\r\n        parallaxInstance.updateItem();\r\n    });\r\n    requestAnimationFrame(animate);\r\n};\r\nanimate();\r\n\n\n//# sourceURL=webpack://frontend-dev-test/./src/ts/components/Parallax.ts?");

/***/ }),

/***/ "./src/ts/components/anchorController.ts":
/*!***********************************************!*\
  !*** ./src/ts/components/anchorController.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst anchorController = () => {\r\n    const btn = document.querySelector(\".js-back-to-top\");\r\n    const links = document.querySelectorAll(\".js-section-link a\");\r\n    const sections = document.querySelectorAll(\".js-section\");\r\n    const navigation = document.querySelector(\"#navigation\");\r\n    const scrollToTarget = (element, top) => {\r\n        if (!element)\r\n            return;\r\n        element.addEventListener(\"click\", (e) => {\r\n            e.preventDefault();\r\n            window.scrollTo({\r\n                top,\r\n                left: 0,\r\n                behavior: \"smooth\",\r\n            });\r\n            if (navigation.classList.contains(\"navigation--mobile-active\")) {\r\n                navigation.classList.remove(\"navigation--mobile-active\");\r\n            }\r\n        });\r\n    };\r\n    links.forEach((link) => {\r\n        const dataName = link.parentElement.getAttribute(\"data-name\");\r\n        sections.forEach((section) => {\r\n            const sectionID = section.id;\r\n            if (dataName === sectionID)\r\n                scrollToTarget(link, section.offsetTop - 60);\r\n        });\r\n    });\r\n    scrollToTarget(btn, 0);\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (anchorController);\r\n\n\n//# sourceURL=webpack://frontend-dev-test/./src/ts/components/anchorController.ts?");

/***/ }),

/***/ "./src/ts/components/navigation.ts":
/*!*****************************************!*\
  !*** ./src/ts/components/navigation.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst navigation = () => {\r\n    const siteNavigation = document.getElementById(\"navigation\");\r\n    const mobileNavTrigger = document.getElementById(\"navigation-header-mobile-toggle\");\r\n    const mobileNavTriggerTitle = document.getElementById(\"navigation-header-mobile-toggle-title\");\r\n    const submenuToggleButtons = document.querySelectorAll(\".navigation-menu__submenu-toggle\");\r\n    let mobileMenuOpen = false;\r\n    // Mobile Menu Toggle Active\r\n    const toggleMobileActive = () => {\r\n        mobileMenuOpen = !mobileMenuOpen;\r\n        siteNavigation.classList.toggle(\"navigation--mobile-active\");\r\n        mobileNavTriggerTitle.innerHTML = mobileMenuOpen ? \"Close\" : \"Menu\";\r\n    };\r\n    // Toggle Submenu Elements\r\n    const toggleSubmenuActive = (submenuParent) => {\r\n        submenuParent.classList.toggle(\"navigation-menu__item--submenu-active\");\r\n    };\r\n    // Adding Event Listeners to Touch and Click Events\r\n    const customEventListener = (element, functionCall) => {\r\n        if (typeof window.ontouchstart === \"undefined\") {\r\n            element.addEventListener(\"click\", functionCall);\r\n        }\r\n        else {\r\n            element.addEventListener(\"touchstart\", functionCall);\r\n        }\r\n    };\r\n    // Set Sticky Navigation on Scroll\r\n    const setStickyNav = (currentScroll) => {\r\n        if (currentScroll > 0) {\r\n            siteNavigation.classList.add(\"navigation--sticky\");\r\n        }\r\n        else {\r\n            siteNavigation.classList.remove(\"navigation--sticky\");\r\n        }\r\n    };\r\n    // Add Event Listener to Window to Check if Navigation Has Scrolled\r\n    const handleScroll = () => {\r\n        const currentScroll = document.scrollingElement\r\n            ? document.scrollingElement.scrollTop\r\n            : document.documentElement.scrollTop;\r\n        setStickyNav(currentScroll);\r\n    };\r\n    // Initialize Mobile Menu Toggle Event\r\n    customEventListener(mobileNavTrigger, toggleMobileActive);\r\n    // Initialize Submenu Toggle Event\r\n    submenuToggleButtons.forEach((button) => {\r\n        customEventListener(button, () => {\r\n            const submenuParent = button.closest(\".navigation-menu__item--has-submenu\");\r\n            if (submenuParent) {\r\n                toggleSubmenuActive(submenuParent);\r\n            }\r\n        });\r\n    });\r\n    // Add Event Listener to Window to Check if Navigation Has Scrolled\r\n    window.addEventListener(\"scroll\", handleScroll);\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (navigation);\r\n\n\n//# sourceURL=webpack://frontend-dev-test/./src/ts/components/navigation.ts?");

/***/ }),

/***/ "./src/ts/components/testemonialsCarousel.ts":
/*!***************************************************!*\
  !*** ./src/ts/components/testemonialsCarousel.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @glidejs/glide */ \"./node_modules/@glidejs/glide/dist/glide.esm.js\");\n\r\nconst testemonialsCarousel = () => {\r\n    var _a, _b;\r\n    const minTwoDigits = (n) => (n < 10 ? \"0\" : \"\") + n;\r\n    // If needed, init counter values\r\n    const initCountValues = (totalCount, $currentItemContainer, $totalItemsContainer) => {\r\n        $currentItemContainer.innerHTML = \"01\";\r\n        $totalItemsContainer.innerHTML = minTwoDigits(totalCount);\r\n    };\r\n    // Adding Event Listeners to Touch and Click Events\r\n    const customEventListener = (element, functionCall) => {\r\n        const eventType = typeof window.ontouchstart === \"undefined\" ? \"click\" : \"touchstart\";\r\n        element.addEventListener(eventType, functionCall);\r\n    };\r\n    const testimonialsCarousel = document.getElementById(\"testimonials-carousel\");\r\n    const testimonialsCurrentItemContainer = document.getElementById(\"testimonials-carousel-nav-pagination-count-current\");\r\n    const testimonialsTotalItemsContainer = document.getElementById(\"testimonials-carousel-nav-pagination-count-total\");\r\n    const totalSlides = (_b = (_a = document.querySelector(\"#testimonials-carousel .glide__slides\")) === null || _a === void 0 ? void 0 : _a.childElementCount) !== null && _b !== void 0 ? _b : 0;\r\n    const testimonialsNavButtonPrevious = document.getElementById(\"testimonials-carousel-nav-button-previous\");\r\n    const testimonialsNavButtonNext = document.getElementById(\"testimonials-carousel-nav-button-next\");\r\n    let glideCarousel = null;\r\n    const onTestimonialsCarouselChange = (newIndex) => {\r\n        testimonialsCurrentItemContainer.innerHTML = minTwoDigits(newIndex);\r\n    };\r\n    const initCarousel = () => {\r\n        glideCarousel = new _glidejs_glide__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"#testimonials-carousel\", {\r\n            perView: 3,\r\n            focusAt: \"center\",\r\n            type: \"carousel\",\r\n            gap: 60,\r\n            keyboard: false,\r\n            breakpoints: {\r\n                1440: {\r\n                    gap: 40,\r\n                },\r\n                1200: {\r\n                    gap: 30,\r\n                },\r\n                1024: {\r\n                    gap: 20,\r\n                },\r\n                768: {\r\n                    gap: 0,\r\n                },\r\n            },\r\n        });\r\n        glideCarousel.on(\"mount.before\", function () {\r\n            testimonialsCurrentItemContainer.innerHTML = \"01\";\r\n            testimonialsTotalItemsContainer.innerHTML = minTwoDigits(totalSlides);\r\n        });\r\n        glideCarousel.on(\"move\", function () {\r\n            onTestimonialsCarouselChange(glideCarousel.index + 1);\r\n        });\r\n        glideCarousel.mount();\r\n    };\r\n    const destroyCarousel = () => {\r\n        if (glideCarousel) {\r\n            glideCarousel.destroy();\r\n        }\r\n    };\r\n    const handleResize = () => {\r\n        if (window.innerWidth < 1024) {\r\n            glideCarousel === null || glideCarousel === void 0 ? void 0 : glideCarousel.enable();\r\n        }\r\n        else {\r\n            glideCarousel === null || glideCarousel === void 0 ? void 0 : glideCarousel.disable();\r\n        }\r\n    };\r\n    if (testimonialsCarousel) {\r\n        customEventListener(testimonialsNavButtonPrevious, () => {\r\n            glideCarousel === null || glideCarousel === void 0 ? void 0 : glideCarousel.go(\"<\");\r\n        });\r\n        customEventListener(testimonialsNavButtonNext, () => {\r\n            glideCarousel === null || glideCarousel === void 0 ? void 0 : glideCarousel.go(\">\");\r\n        });\r\n        initCarousel();\r\n        handleResize();\r\n        window.addEventListener(\"resize\", handleResize);\r\n    }\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (testemonialsCarousel);\r\n\n\n//# sourceURL=webpack://frontend-dev-test/./src/ts/components/testemonialsCarousel.ts?");

/***/ }),

/***/ "./src/ts/main.ts":
/*!************************!*\
  !*** ./src/ts/main.ts ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_navigation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/navigation */ \"./src/ts/components/navigation.ts\");\n/* harmony import */ var _components_testemonialsCarousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/testemonialsCarousel */ \"./src/ts/components/testemonialsCarousel.ts\");\n/* harmony import */ var _components_anchorController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/anchorController */ \"./src/ts/components/anchorController.ts\");\n/* harmony import */ var _components_Parallax__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Parallax */ \"./src/ts/components/Parallax.ts\");\n\r\n\r\n\r\n\r\nconst app = () => {\r\n    (0,_components_navigation__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\r\n    (0,_components_testemonialsCarousel__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\r\n    (0,_components_anchorController__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\r\n};\r\napp();\r\n\n\n//# sourceURL=webpack://frontend-dev-test/./src/ts/main.ts?");

/***/ }),

/***/ "./src/ts/snippets/helpers.ts":
/*!************************************!*\
  !*** ./src/ts/snippets/helpers.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   clamp: function() { return /* binding */ clamp; },\n/* harmony export */   createArr: function() { return /* binding */ createArr; },\n/* harmony export */   lerp: function() { return /* binding */ lerp; },\n/* harmony export */   splitNum: function() { return /* binding */ splitNum; },\n/* harmony export */   transform: function() { return /* binding */ transform; }\n/* harmony export */ });\nconst createArr = (n) => {\r\n    const newArr = [];\r\n    for (let i = 1; i <= n; i++) {\r\n        newArr.push(i);\r\n    }\r\n    return newArr;\r\n};\r\nconst lerp = (start, end, amt) => {\r\n    return (1 - amt) * start + amt * end;\r\n};\r\nconst clamp = (value, min, max) => {\r\n    return Math.min(Math.max(value, min), max);\r\n};\r\nfunction transform(el, transformValue) {\r\n    el.style.webkitTransform = transformValue;\r\n    el.style.msTransform = transformValue;\r\n    el.style.transform = transformValue;\r\n}\r\nconst splitNum = (num) => {\r\n    return String(Math.abs(Math.floor(num)))\r\n        .split('')\r\n        .map((o) => parseInt(o));\r\n};\r\n\n\n//# sourceURL=webpack://frontend-dev-test/./src/ts/snippets/helpers.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.miniCssF = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	!function() {
/******/ 		__webpack_require__.hmrF = function() { return "main." + __webpack_require__.h() + ".hot-update.json"; };
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	!function() {
/******/ 		__webpack_require__.h = function() { return "e1e8ead4926bc692fff2"; }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	!function() {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "frontend-dev-test:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = function(url, done, key, chunkId) {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = function(prev, event) {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach(function(fn) { return fn(event); });
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	!function() {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	!function() {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = function(chunkId, fullhref, oldTag, resolve, reject) {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			if (__webpack_require__.nc) {
/******/ 				linkTag.nonce = __webpack_require__.nc;
/******/ 			}
/******/ 			var onLinkComplete = function(event) {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && event.type;
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + errorType + ": " + realHref + ")");
/******/ 					err.name = "ChunkLoadError";
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = function(href, fullhref) {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = function(chunkId) {
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = function(options) {
/******/ 			return { dispose: function() {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: function() {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = function(chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach(function(chunkId) {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise(function(resolve, reject) {
/******/ 					var tag = createStylesheet(chunkId, fullhref, oldTag, function() {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise(function(resolve, reject) {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = function(event) {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatefrontend_dev_test"] = function(chunkId, moreModules, runtime) {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err1) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err1,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err1);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = function() {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then(function(response) {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=8080&pathname=%2Fws&logging=info&overlay=%7B%22errors%22%3Atrue%2C%22warnings%22%3Afalse%7D&reconnect=10&hot=true&live-reload=true");
/******/ 	__webpack_require__("./node_modules/webpack/hot/dev-server.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/ts/main.ts");
/******/ 	
/******/ })()
;