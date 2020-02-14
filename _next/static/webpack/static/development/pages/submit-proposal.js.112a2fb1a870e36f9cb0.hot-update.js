webpackHotUpdate("static/development/pages/submit-proposal.js",{

/***/ "./services/substrate.js":
/*!*******************************!*\
  !*** ./services/substrate.js ***!
  \*******************************/
/*! exports provided: nodeAddress, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nodeAddress", function() { return nodeAddress; });
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-properties */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-properties.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptors */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptors.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _polkadot_api__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @polkadot/api */ "./node_modules/@polkadot/api/index.js");
/* harmony import */ var _polkadot_api__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_polkadot_api__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var edgeware_node_types_dist_identity__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! edgeware-node-types/dist/identity */ "./node_modules/edgeware-node-types/dist/identity.js");
/* harmony import */ var edgeware_node_types_dist_identity__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(edgeware_node_types_dist_identity__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var edgeware_node_types_dist_voting__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! edgeware-node-types/dist/voting */ "./node_modules/edgeware-node-types/dist/voting.js");
/* harmony import */ var edgeware_node_types_dist_voting__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(edgeware_node_types_dist_voting__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var edgeware_node_types_dist_signaling__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! edgeware-node-types/dist/signaling */ "./node_modules/edgeware-node-types/dist/signaling.js");
/* harmony import */ var edgeware_node_types_dist_signaling__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(edgeware_node_types_dist_signaling__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var edgeware_node_types_dist_treasuryReward__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! edgeware-node-types/dist/treasuryReward */ "./node_modules/edgeware-node-types/dist/treasuryReward.js");
/* harmony import */ var edgeware_node_types_dist_treasuryReward__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(edgeware_node_types_dist_treasuryReward__WEBPACK_IMPORTED_MODULE_18__);














function ownKeys(object, enumerableOnly) { var keys = _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_5___default()(object); if (_babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default.a) { var symbols = _babel_runtime_corejs2_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_4___default()(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_9__["default"])(target, key, source[key]); }); } else if (_babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default.a) { _babel_runtime_corejs2_core_js_object_define_properties__WEBPACK_IMPORTED_MODULE_1___default()(target, _babel_runtime_corejs2_core_js_object_get_own_property_descriptors__WEBPACK_IMPORTED_MODULE_2___default()(source)); } else { ownKeys(Object(source)).forEach(function (key) { _babel_runtime_corejs2_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, key, _babel_runtime_corejs2_core_js_object_get_own_property_descriptor__WEBPACK_IMPORTED_MODULE_3___default()(source, key)); }); } } return target; }








var nodeAddress = 'ws://127.0.0.1:9944';

var SubstrateService =
/*#__PURE__*/
function () {
  function SubstrateService() {
    var _this = this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_11__["default"])(this, SubstrateService);

    this.state = {};
    this.onConnectCallbacks = [];
    this.onUpdateState = new rxjs__WEBPACK_IMPORTED_MODULE_14__["Observable"](function (observer) {
      _this.onUpdateStateObserver = observer;
    });
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_12__["default"])(SubstrateService, [{
    key: "connect",
    value: function connect() {
      var _this2 = this;

      var provider, keyring, _ref, _ref2, chain, nodeName, nodeVersion, i, callback;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function connect$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!this.state.connected) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              if (!this.state.connecting) {
                _context.next = 7;
                break;
              }

              console.log('still connecting, adding callback');
              return _context.abrupt("return", new _babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_10___default.a(function (resolve) {
                _this2.onConnectCallbacks.push(resolve);
              }));

            case 7:
              this.state.connecting = true; // Initialise the provider to connect to the local node

              provider = new _polkadot_api__WEBPACK_IMPORTED_MODULE_13__["WsProvider"](nodeAddress);
              keyring = new _polkadot_api__WEBPACK_IMPORTED_MODULE_13__["Keyring"]({
                type: 'sr25519'
              });
              this.keyring = keyring;
              this.account = this.keyring.addFromUri('//Alice', {
                name: 'Alice'
              }); // dev only, of course

              this.keyring.addFromUri('//Bob', {
                name: 'Bob'
              }); // dev only, of course
              // Create the API and wait until ready

              _context.next = 15;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(_polkadot_api__WEBPACK_IMPORTED_MODULE_13__["ApiPromise"].create({
                provider: provider,
                types: _objectSpread({}, edgeware_node_types_dist_identity__WEBPACK_IMPORTED_MODULE_15__["IdentityTypes"], {}, edgeware_node_types_dist_voting__WEBPACK_IMPORTED_MODULE_16__["VotingTypes"], {}, edgeware_node_types_dist_signaling__WEBPACK_IMPORTED_MODULE_17__["SignalingTypes"], {}, edgeware_node_types_dist_treasuryReward__WEBPACK_IMPORTED_MODULE_18__["TreasuryRewardTypes"], {}, edgeware_node_types_dist_treasuryReward__WEBPACK_IMPORTED_MODULE_18__["Balance2"])
              }));

            case 15:
              this.api = _context.sent;
              _context.next = 18;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(_babel_runtime_corejs2_core_js_promise__WEBPACK_IMPORTED_MODULE_10___default.a.all([this.api.rpc.system.chain(), this.api.rpc.system.name(), this.api.rpc.system.version()]));

            case 18:
              _ref = _context.sent;
              _ref2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_8__["default"])(_ref, 3);
              chain = _ref2[0];
              nodeName = _ref2[1];
              nodeVersion = _ref2[2];
              this.state.connected = true;
              this.state.connecting = false; // loop on connect callbacks

              for (i = 0; i < this.onConnectCallbacks.length; i++) {
                callback = this.onConnectCallbacks[i];
                callback();
              }

              this.onConnectCallbacks = [];
              return _context.abrupt("return", this.setState(_objectSpread({}, this.state, {
                chain: chain,
                nodeName: nodeName,
                nodeVersion: nodeVersion
              })));

            case 28:
            case "end":
              return _context.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "getVoteRecords",
    value: function getVoteRecords(index) {
      var _this3 = this;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function getVoteRecords$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (this.state.connected) {
                _context2.next = 2;
                break;
              }

              return _context2.abrupt("return", this.connect().then(function () {
                return _this3.getVoteRecords(index);
              }));

            case 2:
              return _context2.abrupt("return", this.api.query.voting.voteRecords(index));

            case 3:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "getProposal",
    value: function getProposal(hash) {
      var _this4 = this;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function getProposal$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (hash) {
                _context3.next = 2;
                break;
              }

              return _context3.abrupt("return");

            case 2:
              if (this.state.connected) {
                _context3.next = 4;
                break;
              }

              return _context3.abrupt("return", this.connect().then(function () {
                return _this4.getProposal(hash);
              }));

            case 4:
              return _context3.abrupt("return", this.api.query.signaling.proposalOf(hash));

            case 5:
            case "end":
              return _context3.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "getActiveProposals",
    value: function getActiveProposals(callback) {
      var _this5 = this;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function getActiveProposals$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              if (this.state.connected) {
                _context4.next = 2;
                break;
              }

              return _context4.abrupt("return", this.connect().then(function () {
                return _this5.getActiveProposals(callback);
              }));

            case 2:
              this.api.query.signaling.activeProposals(function (proposals) {
                callback(_this5.formatProposalList(proposals.toArray()));
              });

            case 3:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "getCompletedProposals",
    value: function getCompletedProposals(callback) {
      var _this6 = this;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function getCompletedProposals$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              if (this.state.connected) {
                _context5.next = 2;
                break;
              }

              return _context5.abrupt("return", this.connect().then(function () {
                return _this6.getCompletedProposals(callback);
              }));

            case 2:
              this.api.query.signaling.completedProposals(function (proposals) {
                callback(_this6.formatProposalList(proposals.toArray()));
              });

            case 3:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "getInactiveProposals",
    value: function getInactiveProposals(callback) {
      var _this7 = this;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function getInactiveProposals$(_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              if (this.state.connected) {
                _context6.next = 2;
                break;
              }

              return _context6.abrupt("return", this.connect().then(function () {
                return _this7.getInactiveProposals(callback);
              }));

            case 2:
              this.api.query.signaling.inactiveProposals(function (proposals) {
                callback(_this7.formatProposalList(proposals.toArray()));
              });

            case 3:
            case "end":
              return _context6.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "advanceProposal",
    value: function advanceProposal(hash, onComplete, onError) {
      var _this8 = this;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function advanceProposal$(_context7) {
        while (1) {
          switch (_context7.prev = _context7.next) {
            case 0:
              if (this.state.connected) {
                _context7.next = 2;
                break;
              }

              return _context7.abrupt("return", this.connect().then(function () {
                return _this8.advanceProposal(hash);
              }));

            case 2:
              return _context7.abrupt("return", this.signAndSend(this.api.tx.signaling.advanceProposal(hash), onComplete, onError));

            case 3:
            case "end":
              return _context7.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "createProposal",
    value: function createProposal(_ref3, onComplete, onError) {
      var _this9 = this;

      var title, contents, outcomes, voteType, tallyType;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function createProposal$(_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              title = _ref3.title, contents = _ref3.contents, outcomes = _ref3.outcomes, voteType = _ref3.voteType, tallyType = _ref3.tallyType;

              if (this.state.connected) {
                _context8.next = 3;
                break;
              }

              return _context8.abrupt("return", this.connect().then(function () {
                return _this9.createProposal(title, contents, outcomes, voteType, tallyType);
              }));

            case 3:
              return _context8.abrupt("return", this.signAndSend(this.api.tx.signaling.createProposal(title, contents, outcomes, voteType, tallyType), onComplete, onError));

            case 4:
            case "end":
              return _context8.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "vote",
    value: function vote(id, outcome, isCommitReveal, onComplete, onError) {
      var resultOutcome, options;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function vote$(_context9) {
        while (1) {
          switch (_context9.prev = _context9.next) {
            case 0:
              resultOutcome = new Uint8Array(outcome.substr(2, outcome.length).match(/.{1,2}/g).map(function (_byte) {
                return _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_6___default()(_byte, 16);
              }));

              if (!isCommitReveal) {
                _context9.next = 5;
                break;
              }

              return _context9.abrupt("return", this.signAndSend(this.api.tx.voting.commit(id, resultOutcome), onComplete, onError));

            case 5:
              // general purpose vote
              options = [resultOutcome]; // TODO: support multiple options

              return _context9.abrupt("return", this.signAndSend(this.api.tx.voting.reveal(id, options, null), onComplete, onError));

            case 7:
            case "end":
              return _context9.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "signAndSend",
    value: function signAndSend(transfer, onComplete, onError) {
      var unsub;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.async(function signAndSend$(_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              _context10.next = 2;
              return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_7___default.a.awrap(transfer.signAndSend(this.getAccount(), function (_ref4) {
                var _ref4$events = _ref4.events,
                    events = _ref4$events === void 0 ? [] : _ref4$events,
                    status = _ref4.status;
                console.log("Current status is ".concat(status.type), status);

                if (status.isFinalized) {
                  console.log("Transaction included at blockHash ".concat(status.asFinalized)); // Loop through Vec<EventRecord> to display all events

                  events.forEach(function (_ref5) {
                    var phase = _ref5.phase,
                        _ref5$event = _ref5.event,
                        data = _ref5$event.data,
                        method = _ref5$event.method,
                        section = _ref5$event.section;
                    console.log("\t' ".concat(phase, ": ").concat(section, ".").concat(method, ":: ").concat(data));
                  });

                  if (onComplete) {
                    onComplete(status, events);
                  }

                  unsub();
                }
              })["catch"](function (error) {
                if (onError) {
                  onError(error);
                }
              }));

            case 2:
              unsub = _context10.sent;

            case 3:
            case "end":
              return _context10.stop();
          }
        }
      }, null, this);
    }
  }, {
    key: "formatProposalList",
    value: function formatProposalList(proposals) {
      var _this10 = this;

      var result = [];
      proposals.forEach(function (proposal) {
        var baseData = proposal.toJSON();
        var proposalData = {
          hash: baseData[0]
        };

        _this10.getProposal(baseData[0]).then(function (data) {
          proposalData.data = data.toJSON();
        });

        result.push(proposalData);
      });
      return result;
    }
  }, {
    key: "getAccounts",
    value: function getAccounts() {
      if (this.keyring && this.state && this.state.connected) {
        return this.keyring.getPairs();
      } else {
        return [];
      }
    }
  }, {
    key: "setAccount",
    value: function setAccount(account) {
      this.account = account;
    }
  }, {
    key: "getAccount",
    value: function getAccount() {
      if (this.account) {
        return this.account;
      }

      if (this.keyring) {
        var accounts = this.getAccounts();

        if (accounts.length) {
          return accounts[0];
        }
      }
    }
  }, {
    key: "connected",
    value: function connected() {
      return this.state.connected;
    }
  }, {
    key: "setState",
    value: function setState(value) {
      this.state = value;
      this.onUpdateStateObserver.next(value);
      return value;
    }
  }]);

  return SubstrateService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new SubstrateService());

/***/ })

})
//# sourceMappingURL=submit-proposal.js.112a2fb1a870e36f9cb0.hot-update.js.map