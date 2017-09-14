// { "framework": "Vue"} 

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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 204);
/******/ })
/************************************************************************/
/******/ ({

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(18)
)

/* script */
__vue_exports__ = __webpack_require__(15)

/* template */
var __vue_template__ = __webpack_require__(20)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/dzc/que/ucar/ucar-weex/src/include/navbar.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-6529303a"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(17)
)

/* script */
__vue_exports__ = __webpack_require__(16)

/* template */
var __vue_template__ = __webpack_require__(19)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/dzc/que/ucar/ucar-weex/src/include/navpage.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-43235710"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__


/***/ }),

/***/ 140:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"],
    on: {
      "onAndroidBack": _vm.onAndroidBack,
      "ready": _vm.ready,
      "actived": _vm.actived,
      "deactived": _vm.deactived
    }
  }, [_c('navpage', {
    attrs: {
      "leftItemTitle": "返回",
      "backgroundColor": "#3e50b5",
      "title": "pageA"
    },
    on: {
      "naviBarLeftItemClick": _vm.naviBarLeftItemClick
    }
  }), _c('div', {
    staticClass: ["button"],
    on: {
      "click": _vm.onClick
    }
  }, [_vm._v("\n        打开PageA\n    ")])], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

module.exports = {
  props: {
    dataRole: { default: 'navbar' },
    //导航条背景色
    backgroundColor: { default: 'black' },
    //导航条高度
    height: { default: 88 },
    //导航条标题
    title: { default: '' },
    //导航条标题颜色
    titleColor: { default: 'black' },
    //title紧邻的图片
    centerTitleImageSrc: { default: '' },
    //右侧按钮图片
    rightItemSrc: { default: '' },
    //右侧第二个按钮图片
    rightItemSiblingSrc: { default: '' },
    //右侧按钮标题
    rightItemTitle: { default: '' },
    //右侧按钮标题颜色
    rightItemColor: { default: 'black' },
    //左侧按钮图片
    leftItemSrc: { default: '' },
    //左侧第二个按钮图片
    leftItemSiblingSrc: { default: '' },
    //左侧按钮标题
    leftItemTitle: { default: '' },
    //左侧按钮颜色
    leftItemColor: { default: 'black' }
  },
  methods: {
    onclickrightitem: function onclickrightitem(e) {
      this.$emit('naviBarRightItemClick');
    },
    onclickleftitem: function onclickleftitem(e) {
      this.$emit('naviBarLeftItemClick');
    },
    onclickrightsiblingitem: function onclickrightsiblingitem(e) {
      this.$emit('naviBarRightSiblingItemClick');
    },
    onclickleftsiblingitem: function onclickleftsiblingitem(e) {
      this.$emit('naviBarLeftSiblingItemClick');
    },
    onClickCenterTitleImage: function onClickCenterTitleImage(e) {
      this.$emit('onClickCenterTitleImage');
    }
  },
  events: {
    naviBarLeftItemClick: function naviBarLeftItemClick(e) {
      //navigator.pop(()=>{})
      console.log('pop');
    }
  }
};

/***/ }),

/***/ 16:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var config = __webpack_require__(4);

module.exports = {
  components: {
    navbar: __webpack_require__(13)
  },

  props: {
    dataRole: { default: 'none' },
    backgroundColor: { default: "#385198" },
    height: { default: weex.config.env.platform == 'android' ? 100 : 128 },
    title: { default: "" },
    titleColor: { default: "#ffffff" },
    rightItemSrc: { default: '' },
    rightItemTitle: { default: '' },
    rightItemColor: { default: "#ffffff" },
    rightItemSiblingSrc: { default: '' },
    leftItemSrc: { default: config.image('icon_arrow_back.png') },
    leftItemTitle: { default: '' },
    leftItemColor: { default: "#ffffff" },
    leftItemSiblingSrc: { default: '' },
    centerTitleImageSrc: { default: '' }
  },
  methods: {
    naviBarRightItemClick: function naviBarRightItemClick(e) {
      this.$emit('naviBarRightItemClick', e);
    },
    naviBarRightSiblingItemClick: function naviBarRightSiblingItemClick(e) {
      this.$emit('naviBarRightSiblingItemClick', e);
    },
    naviBarLeftItemClick: function naviBarLeftItemClick(e) {
      this.$emit('naviBarLeftItemClick', e);
    },
    naviBarLeftSiblingItemClick: function naviBarLeftSiblingItemClick(e) {
      this.$emit('naviBarLeftSiblingItemClick', e);
    },
    onClickCenterTitleImage: function onClickCenterTitleImage(e) {
      this.$emit('onClickCenterTitleImage', e);
    }
  }
};

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

module.exports = {
  "wrapper": {
    "top": 0,
    "left": 0,
    "right": 0,
    "bottom": 0,
    "width": 750
  }
}

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = {
  "container": {
    "flexDirection": "row",
    "position": "fixed",
    "top": 0,
    "left": 0,
    "right": 0,
    "width": 750
  },
  "right-text-outer": {
    "position": "absolute",
    "bottom": 0,
    "right": 0,
    "minWidth": 88,
    "minHeight": 88,
    "flexDirection": "row",
    "justifyContent": "flex-end",
    "alignItems": "center"
  },
  "right-text": {
    "lineHeight": 88,
    "fontSize": 32,
    "marginRight": 20
  },
  "left-text": {
    "position": "absolute",
    "bottom": 5,
    "left": 10,
    "minWidth": 80,
    "lineHeight": 80,
    "textAlign": "center",
    "fontSize": 32,
    "marginLeft": 50
  },
  "center-title": {
    "position": "absolute",
    "bottom": 25,
    "left": 172,
    "right": 172,
    "display": "flex",
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "center-text": {
    "textAlign": "center",
    "fontSize": 36,
    "fontWeight": "bold"
  },
  "center-title-image": {
    "width": 50,
    "height": 50,
    "marginLeft": 10
  },
  "left-image": {
    "position": "absolute",
    "bottom": 20,
    "left": 28,
    "width": 50,
    "height": 50
  },
  "right-image-outer": {
    "position": "absolute",
    "bottom": 0,
    "right": 0,
    "height": 88,
    "minWidth": 88,
    "flexDirection": "row",
    "alignItems": "center",
    "justifyContent": "center"
  },
  "right-image": {
    "width": 50,
    "height": 50
  },
  "right-image-sibling": {
    "position": "absolute",
    "bottom": 20,
    "right": 100,
    "width": 50,
    "height": 50
  },
  "left-image-sibling": {
    "position": "absolute",
    "bottom": 20,
    "left": 100,
    "width": 50,
    "height": 50
  }
}

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["wrapper"]
  }, [_c('navbar', {
    attrs: {
      "dataRole": _vm.dataRole,
      "height": _vm.height,
      "backgroundColor": _vm.backgroundColor,
      "title": _vm.title,
      "titleColor": _vm.titleColor,
      "leftItemSrc": _vm.leftItemSrc,
      "leftItemTitle": _vm.leftItemTitle,
      "leftItemColor": _vm.leftItemColor,
      "leftItemSiblingSrc": _vm.leftItemSiblingSrc,
      "rightItemSrc": _vm.rightItemSrc,
      "rightItemTitle": _vm.rightItemTitle,
      "rightItemColor": _vm.rightItemColor,
      "rightItemSiblingSrc": _vm.rightItemSiblingSrc,
      "centerTitleImageSrc": _vm.centerTitleImageSrc
    },
    on: {
      "naviBarRightItemClick": _vm.naviBarRightItemClick,
      "naviBarRightSiblingItemClick": _vm.naviBarRightSiblingItemClick,
      "naviBarLeftItemClick": _vm.naviBarLeftItemClick,
      "naviBarLeftSiblingItemClick": _vm.naviBarLeftSiblingItemClick,
      "onClickCenterTitleImage": _vm.onClickCenterTitleImage
    }
  }), _c('div', {
    staticClass: ["wrapper"],
    style: {
      marginTop: _vm.height
    }
  })], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: ["container"],
    style: {
      height: _vm.height,
      backgroundColor: _vm.backgroundColor
    },
    attrs: {
      "dataRole": _vm.dataRole
    }
  }, [(_vm.rightItemTitle) ? _c('div', {
    staticClass: ["right-text-outer"],
    on: {
      "click": _vm.onclickrightitem
    }
  }, [_c('text', {
    staticClass: ["right-text"],
    style: {
      color: _vm.rightItemColor
    },
    attrs: {
      "naviItemPosition": "right"
    }
  }, [_vm._v(_vm._s(_vm.rightItemTitle))])]) : _vm._e(), (_vm.rightItemSrc) ? _c('div', {
    staticClass: ["right-image-outer"],
    on: {
      "click": _vm.onclickrightitem
    }
  }, [_c('image', {
    staticClass: ["right-image"],
    attrs: {
      "naviItemPosition": "right",
      "src": _vm.rightItemSrc
    }
  })]) : _vm._e(), (_vm.rightItemSiblingSrc) ? _c('image', {
    staticClass: ["right-image-sibling"],
    attrs: {
      "naviItemPosition": "right",
      "src": _vm.rightItemSiblingSrc
    },
    on: {
      "click": _vm.onclickrightsiblingitem
    }
  }) : _vm._e(), (_vm.leftItemTitle) ? _c('text', {
    staticClass: ["left-text"],
    style: {
      color: _vm.leftItemColor
    },
    attrs: {
      "naviItemPosition": "left"
    },
    on: {
      "click": _vm.onclickleftitem
    }
  }, [_vm._v(_vm._s(_vm.leftItemTitle))]) : _vm._e(), (_vm.leftItemSrc) ? _c('image', {
    staticClass: ["left-image"],
    attrs: {
      "naviItemPosition": "left",
      "src": _vm.leftItemSrc
    },
    on: {
      "click": _vm.onclickleftitem
    }
  }) : _vm._e(), (_vm.leftItemSiblingSrc) ? _c('image', {
    staticClass: ["left-image-sibling"],
    attrs: {
      "naviItemPosition": "left",
      "src": _vm.leftItemSiblingSrc
    },
    on: {
      "click": _vm.onclickleftsiblingitem
    }
  }) : _vm._e(), _c('div', {
    staticClass: ["center-title"]
  }, [_c('text', {
    staticClass: ["center-text"],
    style: {
      color: _vm.titleColor
    },
    attrs: {
      "naviItemPosition": "center"
    }
  }, [_vm._v(_vm._s(_vm.title))]), (_vm.centerTitleImageSrc) ? _c('image', {
    staticClass: ["center-title-image"],
    attrs: {
      "naviItemPosition": "center",
      "src": _vm.centerTitleImageSrc
    },
    on: {
      "click": _vm.onClickCenterTitleImage
    }
  }) : _vm._e()])])
},staticRenderFns: []}
module.exports.render._withStripped = true

/***/ }),

/***/ 200:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/** eslint linebreak-style: [0] */
function _trim(str, isGlobal) {
  var result = str.replace(/(^\s+)|(\s+$)/g, '');
  if (isGlobal) {
    result = result.replace(/\s/g, '');
  }
  return result;
}

function _isNumber(o) {
  return !isNaN(o - 0) && o !== null && o !== "" && o !== false;
}

function _encodeURIComponent(item) {
  var json = JSON.stringify(item);
  return encodeURIComponent(json);
}

function _decodeURIComponent(item) {
  return JSON.parse(decodeURIComponent(item));
}

exports.default = {
  //
  isNumber: _isNumber,
  trim: _trim,
  encodeURIComponent: _encodeURIComponent,
  decodeURIComponent: _decodeURIComponent

};

/***/ }),

/***/ 204:
/***/ (function(module, exports, __webpack_require__) {

var __vue_exports__, __vue_options__
var __vue_styles__ = []

/* styles */
__vue_styles__.push(__webpack_require__(96)
)

/* script */
__vue_exports__ = __webpack_require__(39)

/* template */
var __vue_template__ = __webpack_require__(140)
__vue_options__ = __vue_exports__ = __vue_exports__ || {}
if (
  typeof __vue_exports__.default === "object" ||
  typeof __vue_exports__.default === "function"
) {
if (Object.keys(__vue_exports__).some(function (key) { return key !== "default" && key !== "__esModule" })) {console.error("named exports are not supported in *.vue files.")}
__vue_options__ = __vue_exports__ = __vue_exports__.default
}
if (typeof __vue_options__ === "function") {
  __vue_options__ = __vue_options__.options
}
__vue_options__.__file = "/Users/dzc/que/ucar/ucar-weex/src/views/custom/pageA.vue"
__vue_options__.render = __vue_template__.render
__vue_options__.staticRenderFns = __vue_template__.staticRenderFns
__vue_options__._scopeId = "data-v-078499d8"
__vue_options__.style = __vue_options__.style || {}
__vue_styles__.forEach(function (module) {
  for (var name in module) {
    __vue_options__.style[name] = module[name]
  }
})
if (typeof __register_static_styles__ === "function") {
  __register_static_styles__(__vue_options__._scopeId, __vue_styles__)
}

module.exports = __vue_exports__
module.exports.el = 'true'
new Vue(module.exports)


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _uNavigator = weex.requireModule('UNavigator');

/**
 * 进入下级页面
 * */
function push(options, callback) {
  //参数添加自定义默认数值
  var url = _index2.default.js(options.url);
  var param = !options.param ? {} : options.param;
  //
  var height = weex.config.env.platform == 'android' ? 100.0 : 64.0;
  var navBar = !options.navBar ? { height: height, backgroundColor: '#3e50b5' } : options.navBar;
  var animated = !options.animated ? 'true' : options.animated;
  var _options = {
    url: url,
    param: param,
    navBar: navBar,
    animated: animated
  };
  _uNavigator.push(_options, callback);
}

/**
 * 回到上级页面
 */
function popTo(options, callback) {
  //参数添加自定义默认值
  var index = !options.index ? -1 : options.index;
  var tagCode = !options.tagCode ? '' : options.tagCode;
  var param = !options.param ? {} : options.param;
  var animated = !options.animated ? 'true' : options.animated;
  var _options = {
    index: index,
    tagCode: tagCode,
    param: param,
    animated: animated
  };
  _uNavigator.pop(_options, callback);
}
/**
 * 回到上级页面
 */
function pop() {
  //参数添加自定义默认值
  var _options = {
    index: -1,
    animated: 'true'
  };
  _uNavigator.pop(_options, function () {});
}

/**
 *  回到当前堆栈根节点
 * */
function home(options, callback) {
  var _options = !options ? {} : options;
  _uNavigator.home(_options, callback);
}

exports.default = {
  push: push,
  pop: pop,
  popTo: popTo,
  home: home
};

/***/ }),

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _UNavigator = __webpack_require__(24);

var _UNavigator2 = _interopRequireDefault(_UNavigator);

var _index = __webpack_require__(4);

var _index2 = _interopRequireDefault(_index);

var _UString = __webpack_require__(200);

var _UString2 = _interopRequireDefault(_UString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var modal = weex.requireModule('modal');
exports.default = {
    components: {
        navpage: __webpack_require__(14)
    },
    data: function data() {
        return {
            price: '',
            pageName: 'pageA'
        };
    },

    beforeCreate: function beforeCreate() {
        console.log(this.pageName + ':beforeCreate');
    },
    created: function created() {
        console.log(this.pageName + ':created');
        var param = _UString2.default.decodeURIComponent(_index2.default.params('param'));
        console.log(param);
    },
    beforeMount: function beforeMount() {
        console.log(this.pageName + ':beforeMount');
    },
    mounted: function mounted() {
        console.log(this.pageName + ':mounted');
    },
    beforeUpdate: function beforeUpdate() {
        console.log(this.pageName + ':beforeUpdate');
    },
    updated: function updated() {
        console.log(this.pageName + ':updated');
    },
    beforeDestroy: function beforeDestroy() {
        console.log(this.pageName + ':beforeDestroy');
    },
    destroyed: function destroyed() {
        console.log(this.pageName + ':destroyed');
    },
    methods: {
        //
        ready: function ready(param) {
            console.log(this.pageName + ':ready');
        },
        actived: function actived(e) {
            console.log(this.pageName + ':actived');
            //                let p = JSON.stringify(e.param)
            console.log('pageB回传参数=' + e.tagCode + e.param);
        },
        deactived: function deactived() {
            console.log(this.pageName + ':deactived');
        },
        naviBarLeftItemClick: function naviBarLeftItemClick(e) {
            // 测试数据返回接收
            var options = {
                index: -1,
                tagCode: 'PAGE_INDEX',
                param: {
                    'KEY': 'VALUE',
                    'KEY1': 'VALUE1'
                }
            };
            _UNavigator2.default.popTo(options, function () {});
        },
        onAndroidBack: function onAndroidBack() {
            _UNavigator2.default.pop();
        },
        onClick: function onClick() {
            _UNavigator2.default.push({
                url: 'pageB.js',
                param: {
                    api: "push"
                }
            }, function () {});
        }
    }
};

/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.image = image;
function js(jsURL) {
    var bundleUrl = weex.config.bundleUrl;
    var baseURL = bundleUrl.substring(0, bundleUrl.lastIndexOf("/"));
    //是否在同级目录，若不在，则需要以下处理
    var flag = jsURL.indexOf('../') !== -1;
    if (flag) {
        var arr = jsURL.split('../');
        for (var index = 0; index < arr.length - 1; index++) {
            baseURL = baseURL.substring(0, baseURL.lastIndexOf('/'));
        }
        jsURL = arr[arr.length - 1];
    }
    return baseURL + '/' + jsURL;
}

function params(key) {
    var bundleUrl = weex.config.bundleUrl;
    var reg = new RegExp('[?|&]' + key + '=([^&]+)');
    var match = bundleUrl.match(reg);
    return match && match[1];
}

function getParams() {
    var paramsJson = params('params');
    if (paramsJson) {
        return JSON.parse(paramsJson);
    }
    return '';
}
function toParams(obj) {
    var param = "";
    for (var name in obj) {
        if (typeof obj[name] != 'function') {
            param += "&" + name + "=" + encodeURI(obj[name]);
        }
    }
    return param.substring(1);
}

/**
 *
 * */
function image(imgURL) {
    // if (weex.config.env.platform == 'android') {
    //     return "assets:///image/" + imgURL;
    // } else {
    //     return "assets:///image/" + imgURL
    // }
    return "assets:///image/" + imgURL;
}

exports.default = {
    js: js,
    image: image,
    params: params,
    toParams: toParams,
    getParams: getParams
};

/***/ }),

/***/ 96:
/***/ (function(module, exports) {

module.exports = {
  "button": {
    "width": 200,
    "height": 80,
    "backgroundColor": "#3e50b5",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "container": {
    "backgroundColor": "#f3f3f3",
    "flexDirection": "column",
    "flex": 1,
    "justifyContent": "center",
    "alignItems": "center"
  }
}

/***/ })

/******/ });