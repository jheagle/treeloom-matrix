"use strict";

/**
 * All of the Matrix DOM functions and objects necessary to create DOM Matrices
 */
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
require("core-js/stable");
const index_1 = __importDefault(require("./point/index"));
const index_2 = __importDefault(require("./line/index"));
const index_3 = __importDefault(require("./grid/index"));
const index_4 = __importDefault(require("./bounds/index"));
const index_5 = __importDefault(require("./lookup/index"));
const index_6 = __importDefault(require("./random/index"));
/**
 * Store a reference to the global scope which will be Window if rendered via browser
 */
const root = typeof window !== 'undefined' ? window : {};
/**
 * All the functions of matrix-dom.
 */
const matrixDom = {
  ...index_1.default,
  ...index_2.default,
  ...index_3.default,
  ...index_4.default,
  ...index_5.default,
  ...index_6.default
};
root.matrixDom = matrixDom;
module.exports = matrixDom;