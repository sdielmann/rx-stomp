(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@stomp/stompjs"), require("rxjs"), require("rxjs/operators"));
	else if(typeof define === 'function' && define.amd)
		define("RxStomp", ["@stomp/stompjs", "rxjs", "rxjs/operators"], factory);
	else if(typeof exports === 'object')
		exports["RxStomp"] = factory(require("@stomp/stompjs"), require("rxjs"), require("rxjs/operators"));
	else
		root["RxStomp"] = factory(root["StompJs"], root["rxjs"], root["rxjs"]["operators"]);
})(typeof self !== 'undefined' ? self : this, function(__WEBPACK_EXTERNAL_MODULE__stomp_stompjs__, __WEBPACK_EXTERNAL_MODULE_rxjs__, __WEBPACK_EXTERNAL_MODULE_rxjs_operators__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/angular2-uuid/index.js":
/*!*********************************************!*\
  !*** ./node_modules/angular2-uuid/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var UUID = (function () {
    function UUID() {
        // no-op
    }
    UUID.UUID = function () {
        if (typeof (window) !== "undefined" && typeof (window.crypto) !== "undefined" && typeof (window.crypto.getRandomValues) !== "undefined") {
            // If we have a cryptographically secure PRNG, use that
            // http://stackoverflow.com/questions/6906916/collisions-when-generating-uuids-in-javascript
            var buf = new Uint16Array(8);
            window.crypto.getRandomValues(buf);
            return (this.pad4(buf[0]) + this.pad4(buf[1]) + "-" + this.pad4(buf[2]) + "-" + this.pad4(buf[3]) + "-" + this.pad4(buf[4]) + "-" + this.pad4(buf[5]) + this.pad4(buf[6]) + this.pad4(buf[7]));
        }
        else {
            // Otherwise, just use Math.random
            // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
            // https://stackoverflow.com/questions/11605068/why-does-jshint-argue-against-bitwise-operators-how-should-i-express-this-code
            return this.random4() + this.random4() + "-" + this.random4() + "-" + this.random4() + "-" +
                this.random4() + "-" + this.random4() + this.random4() + this.random4();
        }
    };
    UUID.pad4 = function (num) {
        var ret = num.toString(16);
        while (ret.length < 4) {
            ret = "0" + ret;
        }
        return ret;
    };
    UUID.random4 = function () {
        return Math.floor((1 + Math.random()) * 0x10000)
            .toString(16)
            .substring(1);
    };
    return UUID;
}());
exports.UUID = UUID;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! exports provided: RxStompConfig, RxStomp, RxStompState, RxStompRPCConfig, RxStompRPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _rx_stomp_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rx-stomp-config */ "./src/rx-stomp-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RxStompConfig", function() { return _rx_stomp_config__WEBPACK_IMPORTED_MODULE_0__["RxStompConfig"]; });

/* harmony import */ var _rx_stomp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rx-stomp */ "./src/rx-stomp.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RxStomp", function() { return _rx_stomp__WEBPACK_IMPORTED_MODULE_1__["RxStomp"]; });

/* harmony import */ var _rx_stomp_state__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rx-stomp-state */ "./src/rx-stomp-state.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RxStompState", function() { return _rx_stomp_state__WEBPACK_IMPORTED_MODULE_2__["RxStompState"]; });

/* harmony import */ var _rx_stomp_rpc_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rx-stomp-rpc-config */ "./src/rx-stomp-rpc-config.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RxStompRPCConfig", function() { return _rx_stomp_rpc_config__WEBPACK_IMPORTED_MODULE_3__["RxStompRPCConfig"]; });

/* harmony import */ var _rx_stomp_rpc__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./rx-stomp-rpc */ "./src/rx-stomp-rpc.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RxStompRPC", function() { return _rx_stomp_rpc__WEBPACK_IMPORTED_MODULE_4__["RxStompRPC"]; });








/***/ }),

/***/ "./src/rx-stomp-config.ts":
/*!********************************!*\
  !*** ./src/rx-stomp-config.ts ***!
  \********************************/
/*! exports provided: RxStompConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxStompConfig", function() { return RxStompConfig; });
/**
 * Represents a configuration object for RxSTOMP.
 * Instance of this can be passed to [RxStomp#configure]{@link RxStomp#configure}
 *
 * All the attributes of this calls are optional.
 *
 * Part of `@stomp/rx-stomp`
 */
var RxStompConfig = /** @class */ (function () {
    function RxStompConfig() {
    }
    return RxStompConfig;
}());



/***/ }),

/***/ "./src/rx-stomp-rpc-config.ts":
/*!************************************!*\
  !*** ./src/rx-stomp-rpc-config.ts ***!
  \************************************/
/*! exports provided: RxStompRPCConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxStompRPCConfig", function() { return RxStompRPCConfig; });
/**
 * RPC Config. See the guide for example.
 */
var RxStompRPCConfig = /** @class */ (function () {
    function RxStompRPCConfig() {
    }
    return RxStompRPCConfig;
}());



/***/ }),

/***/ "./src/rx-stomp-rpc.ts":
/*!*****************************!*\
  !*** ./src/rx-stomp-rpc.ts ***!
  \*****************************/
/*! exports provided: RxStompRPC */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxStompRPC", function() { return RxStompRPC; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-uuid */ "./node_modules/angular2-uuid/index.js");
/* harmony import */ var angular2_uuid__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_uuid__WEBPACK_IMPORTED_MODULE_2__);



/**
 * An implementation of Remote Procedure Call (RPC) using messaging.
 *
 * Please see the [guide](/guide/rx-stomp/ng2-stompjs/remote-procedure-call.html) for details.
 *
 * Part of `@stomp/rx-stomp`
 */
var RxStompRPC = /** @class */ (function () {
    /**
     * Create an instance, see the [guide](/guide/rx-stomp/ng2-stompjs/remote-procedure-call.html) for details.
     */
    function RxStompRPC(rxStomp, stompRPCConfig) {
        var _this = this;
        this.rxStomp = rxStomp;
        this.stompRPCConfig = stompRPCConfig;
        this._replyQueueName = '/temp-queue/rpc-replies';
        this._setupReplyQueue = function () {
            return _this.rxStomp.unhandledMessage$;
        };
        if (stompRPCConfig) {
            if (stompRPCConfig.replyQueueName) {
                this._replyQueueName = stompRPCConfig.replyQueueName;
            }
            if (stompRPCConfig.setupReplyQueue) {
                this._setupReplyQueue = stompRPCConfig.setupReplyQueue;
            }
        }
    }
    /**
     * Make an RPC request.
     * See the [guide](/guide/rx-stomp/ng2-stompjs/remote-procedure-call.html) for example.
     *
     * It is a simple wrapper around [RxStompRPC#stream]{@link RxStompRPC#stream}.
     */
    RxStompRPC.prototype.rpc = function (params) {
        // We know there will be only one message in reply
        return this.stream(params).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["first"])());
    };
    /**
     * Make an RPC stream request. See the [guide](/guide/rx-stomp/ng2-stompjs/remote-procedure-call.html).
     *
     * Note: This call internally takes care of generating a correlation id,
     * however, if `correlation-id` is passed via `headers`, that will be used instead.
     */
    RxStompRPC.prototype.stream = function (params) {
        var _this = this;
        var headers = Object.assign({}, params.headers || {});
        var destination = params.destination, body = params.body, binaryBody = params.binaryBody;
        if (!this._repliesObservable) {
            this._repliesObservable = this._setupReplyQueue(this._replyQueueName, this.rxStomp);
        }
        return rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (rpcObserver) {
            var defaultMessagesSubscription;
            var correlationId = headers['correlation-id'] || angular2_uuid__WEBPACK_IMPORTED_MODULE_2__["UUID"].UUID();
            defaultMessagesSubscription = _this._repliesObservable
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (message) {
                return message.headers['correlation-id'] === correlationId;
            }))
                .subscribe(function (message) {
                rpcObserver.next(message);
            });
            // send an RPC request
            headers['reply-to'] = _this._replyQueueName;
            headers['correlation-id'] = correlationId;
            _this.rxStomp.publish({ destination: destination, body: body, binaryBody: binaryBody, headers: headers });
            return function () {
                // Cleanup
                defaultMessagesSubscription.unsubscribe();
            };
        });
    };
    return RxStompRPC;
}());



/***/ }),

/***/ "./src/rx-stomp-state.ts":
/*!*******************************!*\
  !*** ./src/rx-stomp-state.ts ***!
  \*******************************/
/*! exports provided: RxStompState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxStompState", function() { return RxStompState; });
/**
 * Possible states for the RxStomp
 *
 * Part of `@stomp/rx-stomp`
 */
var RxStompState;
(function (RxStompState) {
    RxStompState[RxStompState["CONNECTING"] = 0] = "CONNECTING";
    RxStompState[RxStompState["OPEN"] = 1] = "OPEN";
    RxStompState[RxStompState["CLOSING"] = 2] = "CLOSING";
    RxStompState[RxStompState["CLOSED"] = 3] = "CLOSED";
})(RxStompState || (RxStompState = {}));


/***/ }),

/***/ "./src/rx-stomp.ts":
/*!*************************!*\
  !*** ./src/rx-stomp.ts ***!
  \*************************/
/*! exports provided: RxStomp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RxStomp", function() { return RxStomp; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @stomp/stompjs */ "@stomp/stompjs");
/* harmony import */ var _stomp_stompjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_stomp_stompjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _rx_stomp_state__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./rx-stomp-state */ "./src/rx-stomp-state.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




/**
 * This is the main Stomp Client.
 * Typically you will create an instance of this to connect to the STOMP broker.
 *
 * This wraps [@stomp/stompjs]{@link https://github.com/stomp-js/stompjs}
 * {@link Client} class.
 *
 * The key difference is that it exposes operations as RxJS Observables.
 * For example when a STOMP endpoint is subscribed it returns an Observable
 * that will stream all received messages.
 *
 * With exception of beforeConnect, functionality related to all callbacks in
 * [@stomp/stompjs Client]{@link Client}
 * is exposed as Observables/Subjects/BehaviorSubjects.
 *
 * RxStomp also tries to transparently handle connection failures.
 *
 * Part of `@stomp/rx-stomp`
 */
var RxStomp = /** @class */ (function () {
    /**
     * Constructor
     */
    function RxStomp() {
        var _this = this;
        /**
         * Internal array to hold locally queued messages when STOMP broker is not connected.
         */
        this._queuedMessages = [];
        this._stompClient = new _stomp_stompjs__WEBPACK_IMPORTED_MODULE_2__["Client"]();
        var noOp = function () { };
        // Before connect is no op by default
        this._beforeConnect = noOp;
        // debug is no-op by default
        this._debug = noOp;
        // Initial state is CLOSED
        this._connectionStatePre$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](_rx_stomp_state__WEBPACK_IMPORTED_MODULE_3__["RxStompState"].CLOSED);
        this._connectedPre$ = this._connectionStatePre$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (currentState) {
            return currentState === _rx_stomp_state__WEBPACK_IMPORTED_MODULE_3__["RxStompState"].OPEN;
        }));
        // Initial state is CLOSED
        this.connectionState$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](_rx_stomp_state__WEBPACK_IMPORTED_MODULE_3__["RxStompState"].CLOSED);
        this.connected$ = this.connectionState$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (currentState) {
            return currentState === _rx_stomp_state__WEBPACK_IMPORTED_MODULE_3__["RxStompState"].OPEN;
        }));
        // Setup sending queuedMessages
        this.connected$.subscribe(function () {
            _this._sendQueuedMessages();
        });
        this._serverHeadersBehaviourSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](null);
        this.serverHeaders$ = this._serverHeadersBehaviourSubject$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["filter"])(function (headers) {
            return headers !== null;
        }));
        this.stompErrors$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.unhandledMessage$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.unhandledReceipts$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.unhandledFrame$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.webSocketErrors$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
    }
    Object.defineProperty(RxStomp.prototype, "stompClient", {
        /**
         * Instance of actual
         * [@stomp/stompjs]{@link https://github.com/stomp-js/stompjs}
         * {@link Client}.
         *
         * **Be careful in calling methods on it directly - you may get unintended consequences.**
         */
        get: function () {
            return this._stompClient;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Set configuration. This method may be called multiple times.
     * Each call will add to the existing configuration.
     *
     * Example:
     *
     * ```javascript
     *        const rxStomp = new RxStomp();
     *        rxStomp.configure({
     *          brokerURL: 'ws://127.0.0.1:15674/ws',
     *          connectHeaders: {
     *            login: 'guest',
     *            passcode: 'guest'
     *          },
     *          heartbeatIncoming: 0,
     *          heartbeatOutgoing: 20000,
     *          reconnectDelay: 200,
     *          debug: (msg: string): void => {
     *            console.log(new Date(), msg);
     *          }
     *        });
     *        rxStomp.activate();
     * ```
     *
     * Maps to: [Client#configure]{@link Client#configure}
     */
    RxStomp.prototype.configure = function (rxStompConfig) {
        var stompConfig = Object.assign({}, rxStompConfig);
        if (stompConfig.beforeConnect) {
            this._beforeConnect = stompConfig.beforeConnect;
            delete stompConfig.beforeConnect;
        }
        // RxStompConfig has subset of StompConfig fields
        this._stompClient.configure(stompConfig);
        if (stompConfig.debug) {
            this._debug = stompConfig.debug;
        }
    };
    /**
     * Initiate the connection with the broker.
     * If the connection breaks, as per [RxStompConfig#reconnectDelay]{@link RxStompConfig#reconnectDelay},
     * it will keep trying to reconnect.
     *
     * Call [RxStomp#deactivate]{@link RxStomp#deactivate} to disconnect and stop reconnection attempts.
     *
     * Maps to: [Client#activate]{@link Client#activate}
     */
    RxStomp.prototype.activate = function () {
        var _this = this;
        this._stompClient.configure({
            beforeConnect: function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this._changeState(_rx_stomp_state__WEBPACK_IMPORTED_MODULE_3__["RxStompState"].CONNECTING);
                            // Call handler
                            return [4 /*yield*/, this._beforeConnect(this)];
                        case 1:
                            // Call handler
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); },
            onConnect: function (frame) {
                _this._serverHeadersBehaviourSubject$.next(frame.headers);
                // Indicate our connected state to observers
                _this._changeState(_rx_stomp_state__WEBPACK_IMPORTED_MODULE_3__["RxStompState"].OPEN);
            },
            onStompError: function (frame) {
                // Trigger the frame subject
                _this.stompErrors$.next(frame);
            },
            onWebSocketClose: function () {
                _this._changeState(_rx_stomp_state__WEBPACK_IMPORTED_MODULE_3__["RxStompState"].CLOSED);
            },
            onUnhandledMessage: function (message) {
                _this.unhandledMessage$.next(message);
            },
            onUnhandledReceipt: function (frame) {
                _this.unhandledReceipts$.next(frame);
            },
            onUnhandledFrame: function (frame) {
                _this.unhandledFrame$.next(frame);
            },
            onWebSocketError: function (evt) {
                _this.webSocketErrors$.next(evt);
            },
        });
        // Attempt connection
        this._stompClient.activate();
    };
    /**
     * Disconnect if connected and stop auto reconnect loop.
     * Appropriate callbacks will be invoked if underlying STOMP connection was connected.
     *
     * To reactivate you can call [RxStomp#activate]{@link RxStomp#activate}.
     *
     * Maps to: [Client#deactivate]{@link Client#deactivate}
     */
    RxStomp.prototype.deactivate = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this._changeState(_rx_stomp_state__WEBPACK_IMPORTED_MODULE_3__["RxStompState"].CLOSING);
                        // The promise will be resolved immediately if there are no active connection
                        // otherwise, after it has successfully disconnected.
                        return [4 /*yield*/, this._stompClient.deactivate()];
                    case 1:
                        // The promise will be resolved immediately if there are no active connection
                        // otherwise, after it has successfully disconnected.
                        _a.sent();
                        this._changeState(_rx_stomp_state__WEBPACK_IMPORTED_MODULE_3__["RxStompState"].CLOSED);
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * It will return `true` if STOMP broker is connected and `false` otherwise.
     */
    RxStomp.prototype.connected = function () {
        return this.connectionState$.getValue() === _rx_stomp_state__WEBPACK_IMPORTED_MODULE_3__["RxStompState"].OPEN;
    };
    Object.defineProperty(RxStomp.prototype, "active", {
        /**
         * If the client is active (connected or going to reconnect).
         *
         *  Maps to: [Client#active]{@link Client#active}
         */
        get: function () {
            return this.stompClient.active;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Send a message to a named destination. Refer to your STOMP broker documentation for types
     * and naming of destinations.
     *
     * STOMP protocol specifies and suggests some headers and also allows broker specific headers.
     *
     * `body` must be String.
     * You will need to covert the payload to string in case it is not string (e.g. JSON).
     *
     * To send a binary message body use binaryBody parameter. It should be a
     * [Uint8Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).
     * Sometimes brokers may not support binary frames out of the box.
     * Please check your broker documentation.
     *
     * `content-length` header is automatically added to the STOMP Frame sent to the broker.
     * Set `skipContentLengthHeader` to indicate that `content-length` header should not be added.
     * For binary messages `content-length` header is always added.
     *
     * Caution: The broker will, most likely, report an error and disconnect if message body has NULL octet(s)
     * and `content-length` header is missing.
     *
     * The message will get locally queued if the STOMP broker is not connected. It will attempt to
     * publish queued messages as soon as the broker gets connected.
     * If you do not want that behavior,
     * please set [retryIfDisconnected]{@link IRxStompPublishParams#retryIfDisconnected} to `false`
     * in the parameters.
     * When `false`, this function will raise an error if message could not be sent immediately.
     *
     * Maps to: [Client#publish]{@link Client#publish}
     *
     * See: {@link IRxStompPublishParams} and {@link IPublishParams}
     *
     * ```javascript
     *        rxStomp.publish({destination: "/queue/test", headers: {priority: 9}, body: "Hello, STOMP"});
     *
     *        // Only destination is mandatory parameter
     *        rxStomp.publish({destination: "/queue/test", body: "Hello, STOMP"});
     *
     *        // Skip content-length header in the frame to the broker
     *        rxStomp.publish({"/queue/test", body: "Hello, STOMP", skipContentLengthHeader: true});
     *
     *        var binaryData = generateBinaryData(); // This need to be of type Uint8Array
     *        // setting content-type header is not mandatory, however a good practice
     *        rxStomp.publish({destination: '/topic/special', binaryBody: binaryData,
     *                         headers: {'content-type': 'application/octet-stream'}});
     * ```
     */
    RxStomp.prototype.publish = function (parameters) {
        // retry behaviour is defaulted to true
        var shouldRetry = parameters.retryIfDisconnected == null
            ? true
            : parameters.retryIfDisconnected;
        if (this.connected()) {
            this._stompClient.publish(parameters);
        }
        else if (shouldRetry) {
            this._debug("Not connected, queueing");
            this._queuedMessages.push(parameters);
        }
        else {
            throw new Error('Cannot publish while broker is not connected');
        }
    };
    /** It will send queued messages. */
    RxStomp.prototype._sendQueuedMessages = function () {
        var queuedMessages = this._queuedMessages;
        this._queuedMessages = [];
        if (queuedMessages.length === 0) {
            return;
        }
        this._debug("Will try sending  " + queuedMessages.length + " queued message(s)");
        for (var _i = 0, queuedMessages_1 = queuedMessages; _i < queuedMessages_1.length; _i++) {
            var queuedMessage = queuedMessages_1[_i];
            this._debug("Attempting to send " + queuedMessage);
            this.publish(queuedMessage);
        }
    };
    RxStomp.prototype.watch = function (opts, headers) {
        var _this = this;
        if (headers === void 0) { headers = {}; }
        var defaults = {
            subHeaders: {},
            unsubHeaders: {},
            subscribeOnlyOnce: false,
        };
        var params;
        if (typeof opts === 'string') {
            params = Object.assign({}, defaults, {
                destination: opts,
                subHeaders: headers,
            });
        }
        else {
            params = Object.assign({}, defaults, opts);
        }
        /* Well the logic is complicated but works beautifully. RxJS is indeed wonderful.
         *
         * We need to activate the underlying subscription immediately if Stomp is connected. If not it should
         * subscribe when it gets next connected. Further it should re establish the subscription whenever Stomp
         * successfully reconnects.
         *
         * Actual implementation is simple, we filter the BehaviourSubject 'state' so that we can trigger whenever Stomp is
         * connected. Since 'state' is a BehaviourSubject, if Stomp is already connected, it will immediately trigger.
         *
         * The observable that we return to caller remains same across all reconnects, so no special handling needed at
         * the message subscriber.
         */
        this._debug("Request to subscribe " + params.destination);
        var coldObservable = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (messages) {
            /*
             * These variables will be used as part of the closure and work their magic during unsubscribe
             */
            var stompSubscription; // Stomp
            var stompConnectedSubscription; // RxJS
            var connectedPre$ = _this._connectedPre$;
            if (params.subscribeOnlyOnce) {
                connectedPre$ = connectedPre$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1));
            }
            stompConnectedSubscription = connectedPre$.subscribe(function () {
                _this._debug("Will subscribe to " + params.destination);
                stompSubscription = _this._stompClient.subscribe(params.destination, function (message) {
                    messages.next(message);
                }, params.subHeaders);
            });
            return function () {
                /* cleanup function, will be called when no subscribers are left */
                _this._debug("Stop watching connection state (for " + params.destination + ")");
                stompConnectedSubscription.unsubscribe();
                if (_this.connected()) {
                    _this._debug("Will unsubscribe from " + params.destination + " at Stomp");
                    var unsubHeaders = params.unsubHeaders;
                    if (typeof unsubHeaders === 'function') {
                        unsubHeaders = unsubHeaders();
                    }
                    stompSubscription.unsubscribe(unsubHeaders);
                }
                else {
                    _this._debug("Stomp not connected, no need to unsubscribe from " + params.destination + " at Stomp");
                }
            };
        });
        /**
         * Important - convert it to hot Observable - otherwise, if the user code subscribes
         * to this observable twice, it will subscribe twice to Stomp broker. (This was happening in the current example).
         * A long but good explanatory article at https://medium.com/@benlesh/hot-vs-cold-observables-f8094ed53339
         */
        return coldObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["share"])());
    };
    /**
     * STOMP brokers may carry out operation asynchronously and allow requesting for acknowledgement.
     * To request an acknowledgement, a `receipt` header needs to be sent with the actual request.
     * The value (say receipt-id) for this header needs to be unique for each use. Typically a sequence, a UUID, a
     * random number or a combination may be used.
     *
     * A complaint broker will send a RECEIPT frame when an operation has actually been completed.
     * The operation needs to be matched based in the value of the receipt-id.
     *
     * This method allow watching for a receipt and invoke the callback
     * when corresponding receipt has been received.
     *
     * The actual {@link Frame}
     * will be passed as parameter to the callback.
     *
     * Example:
     * ```javascript
     *        // Publishing with acknowledgement
     *        let receiptId = randomText();
     *
     *        rxStomp.watchForReceipt(receiptId, function() {
     *          // Will be called after server acknowledges
     *        });
     *        rxStomp.publish({destination: '/topic/special', headers: {receipt: receiptId}, body: msg});
     * ```
     *
     * Maps to: [Client#watchForReceipt]{@link Client#watchForReceipt}
     */
    RxStomp.prototype.watchForReceipt = function (receiptId, callback) {
        this._stompClient.watchForReceipt(receiptId, callback);
    };
    RxStomp.prototype._changeState = function (state) {
        this._connectionStatePre$.next(state);
        this.connectionState$.next(state);
    };
    return RxStomp;
}());



/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dediels/projects/rx-stomp/src/index.ts */"./src/index.ts");


/***/ }),

/***/ "@stomp/stompjs":
/*!*******************************************************************************************************************!*\
  !*** external {"commonjs":"@stomp/stompjs","commonjs2":"@stomp/stompjs","amd":"@stomp/stompjs","root":"StompJs"} ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__stomp_stompjs__;

/***/ }),

/***/ "rxjs":
/*!************************************************************************************!*\
  !*** external {"root":["rxjs"],"commonjs":"rxjs","commonjs2":"rxjs","amd":"rxjs"} ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs__;

/***/ }),

/***/ "rxjs/operators":
/*!******************************************************************************************************************************!*\
  !*** external {"root":["rxjs","operators"],"commonjs":"rxjs/operators","commonjs2":"rxjs/operators","amd":"rxjs/operators"} ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_rxjs_operators__;

/***/ })

/******/ });
});
//# sourceMappingURL=rx-stomp.umd.js.map