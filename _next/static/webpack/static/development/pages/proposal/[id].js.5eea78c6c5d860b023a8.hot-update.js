webpackHotUpdate("static/development/pages/proposal/[id].js",{

/***/ "./pages/proposal/[id].js":
/*!********************************!*\
  !*** ./pages/proposal/[id].js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/FormControl */ "./node_modules/@material-ui/core/esm/FormControl/index.js");
/* harmony import */ var _material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/FormLabel */ "./node_modules/@material-ui/core/esm/FormLabel/index.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/Done */ "./node_modules/@material-ui/icons/Done.js");
/* harmony import */ var _material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Table__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Table */ "./node_modules/@material-ui/core/esm/Table/index.js");
/* harmony import */ var _material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/TableBody */ "./node_modules/@material-ui/core/esm/TableBody/index.js");
/* harmony import */ var _material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/TableCell */ "./node_modules/@material-ui/core/esm/TableCell/index.js");
/* harmony import */ var _material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/TableContainer */ "./node_modules/@material-ui/core/esm/TableContainer/index.js");
/* harmony import */ var _material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/core/TableHead */ "./node_modules/@material-ui/core/esm/TableHead/index.js");
/* harmony import */ var _material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/core/TableRow */ "./node_modules/@material-ui/core/esm/TableRow/index.js");
/* harmony import */ var _services_substrate__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../services/substrate */ "./services/substrate.js");



var _jsxFileName = "/ssd-extra/remote.com/voting-tests/pages/proposal/[id].js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;




















var Proposal = function Proposal() {
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();
  var hash = router.query.id;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      proposal = _useState[0],
      setProposal = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      voteRecords = _useState2[0],
      setVoteRecords = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(),
      results = _useState3[0],
      setResults = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      vote = _useState4[0],
      setVote = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isSubmitting = _useState5[0],
      setIsSubmitting = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      hasSubmitted = _useState6[0],
      setHasSubmitted = _useState6[1];

  function loadProposal() {
    var data, voteRecords, voteData, voteResults, revealsCount, i, reveal, votedOptions, c, option;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.async(function loadProposal$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_services_substrate__WEBPACK_IMPORTED_MODULE_21__["default"].getProposal(hash));

          case 2:
            data = _context.sent;
            setProposal(data.toJSON());
            _context.next = 6;
            return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.awrap(_services_substrate__WEBPACK_IMPORTED_MODULE_21__["default"].getVoteRecords(data.toJSON().vote_id));

          case 6:
            voteRecords = _context.sent;
            voteData = voteRecords.toJSON();
            setVoteRecords(voteData);
            console.log('voteData', voteData);

            if (voteData) {
              voteResults = {};
              revealsCount = voteData.reveals.length;

              for (i = 0; i < revealsCount; i++) {
                reveal = voteData.reveals[i]; // const voterAddress = reveal[0];

                votedOptions = reveal[1];

                for (c = 0; c < votedOptions.length; c++) {
                  option = votedOptions[c];

                  if (voteResults[option]) {
                    voteResults[option]++;
                  } else {
                    voteResults[option] = 1;
                  }
                }
              }

              setResults(voteResults);
            }

          case 11:
          case "end":
            return _context.stop();
        }
      }
    });
  }

  var handleVoteChange = function handleVoteChange(event) {
    setVote(event.target.value);
  };

  function hexToAscii(str) {
    var hex = str.toString().substr(2, str.length);
    var result = '';

    for (var n = 0; n < hex.length; n += 2) {
      var intInput = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_1___default()(hex.substr(n, 2), 16);

      if (intInput !== 0) {
        result += String.fromCharCode(intInput);
      }
    }

    return result;
  }

  function handleVote() {
    setIsSubmitting(true);
    _services_substrate__WEBPACK_IMPORTED_MODULE_21__["default"].vote(voteRecords.id, vote, false, function () {
      setIsSubmitting(false);
      setHasSubmitted(true);
    }, function () {
      setIsSubmitting(false);
    });
  }

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!proposal && hash) {
      loadProposal();
    }
  }, [proposal]);

  if (proposal) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "h4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    }, proposal.title), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 101
      },
      __self: this
    }), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 102
      },
      __self: this
    }, __jsx(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "h5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, proposal.contents), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "h6",
      color: "textSecondary",
      gutterBottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "Hash: ", hash), voteRecords && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "h6",
      color: "textSecondary",
      gutterBottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 114
      },
      __self: this
    }, "Author: ", proposal.author), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "h6",
      color: "textSecondary",
      gutterBottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
      },
      __self: this
    }, "Stage: ", _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(voteRecords.data.stage)[0]), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "h6",
      color: "textSecondary",
      gutterBottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, "Vote Type: ", voteRecords.data.vote_type.binary === null ? 'Binary' : 'MultiOption'), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "h6",
      color: "textSecondary",
      gutterBottom: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    }, "Tally Type: ", voteRecords.data.tally_type.oneperson === null ? 'OnePerson' : 'OneCoin'), __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "h6",
      color: "textSecondary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 126
      },
      __self: this
    }, "Is Commit/Reveal: ", voteRecords.data.is_commit_reveal ? 'true' : 'false'), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 130
      },
      __self: this
    }), __jsx(_material_ui_core_FormControl__WEBPACK_IMPORTED_MODULE_12__["default"], {
      component: "fieldset",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 132
      },
      __self: this
    }, __jsx(_material_ui_core_FormLabel__WEBPACK_IMPORTED_MODULE_13__["default"], {
      component: "legend",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }, "Votes"), __jsx(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_10__["default"], {
      "aria-label": "vote",
      name: "vote",
      value: vote,
      onChange: handleVoteChange,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 134
      },
      __self: this
    }, voteRecords.outcomes.map(function (outcome, index) {
      return __jsx(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_11__["default"], {
        key: index,
        value: outcome,
        control: __jsx(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_9__["default"], {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }),
        label: "".concat(hexToAscii(outcome), " - ").concat(results ? results[outcome] || 0 : 0, "/").concat(voteRecords ? voteRecords.reveals.length : 0, " votes"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      });
    }))), _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(voteRecords.data.stage)[0] === 'voting' && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 143
      },
      __self: this
    }), __jsx(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      variant: "contained",
      type: "button",
      onClick: handleVote,
      disabled: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 144
      },
      __self: this
    }, "Submit Vote"))))), __jsx(Snackbar, {
      open: isSubmitting,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 159
      },
      __self: this
    }, __jsx(Alert, {
      severity: "info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 160
      },
      __self: this
    }, "Submitting transaction, please wait...")), __jsx(Snackbar, {
      open: hasSubmitted,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 163
      },
      __self: this
    }, __jsx(Alert, {
      severity: "success",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 164
      },
      __self: this
    }, "Vote submitted!")), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 167
      },
      __self: this
    }), voteRecords && __jsx(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, null, __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 171
      },
      __self: this
    }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_18__["default"], {
      component: _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 172
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "h5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 173
      },
      __self: this
    }, "Reveals: ", voteRecords ? voteRecords.reveals.length : 0), __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_15__["default"], {
      "aria-label": "Reveals table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 177
      },
      __self: this
    }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_19__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 178
      },
      __self: this
    }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_20__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 179
      },
      __self: this
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 180
      },
      __self: this
    }, "Voter Address"), voteRecords.outcomes.map(function (outcome, index) {
      return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
        align: "right",
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 182
        },
        __self: this
      }, hexToAscii(outcome));
    }))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_16__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 186
      },
      __self: this
    }, voteRecords.reveals.map(function (row, index) {
      return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_20__["default"], {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 188
        },
        __self: this
      }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
        component: "th",
        scope: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, row[0]), voteRecords.outcomes.map(function (outcome, index) {
        return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
          align: "right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 193
          },
          __self: this
        }, row[1].indexOf(outcome) > -1 && __jsx(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_14___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 195
          },
          __self: this
        }));
      }));
    }))))), __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 206
      },
      __self: this
    }), __jsx(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 208
      },
      __self: this
    }, __jsx(_material_ui_core_TableContainer__WEBPACK_IMPORTED_MODULE_18__["default"], {
      component: _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_8__["default"],
      __source: {
        fileName: _jsxFileName,
        lineNumber: 209
      },
      __self: this
    }, __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "h5",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 210
      },
      __self: this
    }, "Commitments: ", voteRecords ? voteRecords.commitments.length : 0), __jsx(_material_ui_core_Table__WEBPACK_IMPORTED_MODULE_15__["default"], {
      "aria-label": "Reveals table",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 214
      },
      __self: this
    }, __jsx(_material_ui_core_TableHead__WEBPACK_IMPORTED_MODULE_19__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 215
      },
      __self: this
    }, __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_20__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 216
      },
      __self: this
    }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 217
      },
      __self: this
    }, "Voter Address"), voteRecords.outcomes.map(function (outcome, index) {
      return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
        align: "right",
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 219
        },
        __self: this
      }, hexToAscii(outcome));
    }))), __jsx(_material_ui_core_TableBody__WEBPACK_IMPORTED_MODULE_16__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 223
      },
      __self: this
    }, voteRecords.commitments.map(function (row, index) {
      return __jsx(_material_ui_core_TableRow__WEBPACK_IMPORTED_MODULE_20__["default"], {
        key: index,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 225
        },
        __self: this
      }, __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
        component: "th",
        scope: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      }, row[0]), voteRecords.outcomes.map(function (outcome, index) {
        return __jsx(_material_ui_core_TableCell__WEBPACK_IMPORTED_MODULE_17__["default"], {
          align: "right",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 230
          },
          __self: this
        }, row[1].indexOf(outcome) > -1 && __jsx(_material_ui_icons_Done__WEBPACK_IMPORTED_MODULE_14___default.a, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232
          },
          __self: this
        }));
      }));
    })))))));
  } else {
    return __jsx(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
      variant: "h4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 248
      },
      __self: this
    }, "Loading...");
  }
};

/* harmony default export */ __webpack_exports__["default"] = (Proposal);

/***/ })

})
//# sourceMappingURL=[id].js.5eea78c6c5d860b023a8.hot-update.js.map