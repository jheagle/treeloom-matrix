"use strict";

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */
var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const getDomItemFromPoint_1 = __importDefault(require("./getDomItemFromPoint"));
const getPointFromElement_1 = __importDefault(require("./getPointFromElement"));
/**
 * Retrieve the DomItem associated with the provided element in the matrix
 * @param elem - Provide an element having an associated DomItem.
 * @param matrix - The matrix potentially containing the DomItem with Point.
 * @returns The DomItem (a column), or false when the element is not in the matrix
 */
const getDomItemFromElement = (elem, matrix) => (0, getDomItemFromPoint_1.default)((0, getPointFromElement_1.default)(elem), matrix);
exports.default = getDomItemFromElement;