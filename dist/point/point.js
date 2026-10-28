"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Store the point data for an x, y, z Matrix.
 * @param x - The numeric value for X-coordinate
 * @param y - The numeric value for Y-coordinate
 * @param z - The numeric value for Z-coordinate (default to 0 for 2D Matrix)
 */
const point = (x, y, z = 0) => ({
  x,
  y,
  z
});
exports.default = point;