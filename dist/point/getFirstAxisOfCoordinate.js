"use strict";

require("core-js/modules/esnext.iterator.constructor.js");
require("core-js/modules/esnext.iterator.filter.js");
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Having provided a coordinate number, find all corresponding axis, return the first match.
 * @param pnt - The Point containing a matching coordinate.
 * @param coordinate - The coordinate to search for.
 * @returns The first matching axis, or false when no axis matches
 */
const getFirstAxisOfCoordinate = (pnt, coordinate) => Object.keys(pnt).filter(key => pnt[key] === coordinate)[0] || false;
exports.default = getFirstAxisOfCoordinate;