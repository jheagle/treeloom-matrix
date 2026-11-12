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
const point_1 = __importDefault(require("../point/point"));
/**
 * Retrieve the point associated with the provided DomItem.
 * @param domItem - Provide a DomItem (a column) associated with a point.
 * @param useIfExists - Whether to use the existing point if it exists.
 */
const getPointFromDomItem = (domItem, useIfExists = true) => {
  if (typeof domItem?.parentItem?.parentItem?.parentItem?.children === 'undefined') {
    throw Error('Invalid DomItem or not a DomItem representing a matrix point.');
  }
  if (useIfExists && domItem.point) {
    return domItem.point;
  }
  // The check above confirms each of these parents exists
  const row = domItem.parentItem;
  const layer = row.parentItem;
  const matrix = layer.parentItem;
  return (0, point_1.default)(Array.from(row.children).indexOf(domItem), Array.from(layer.children).indexOf(row), Array.from(matrix.children).indexOf(layer));
};
exports.default = getPointFromDomItem;