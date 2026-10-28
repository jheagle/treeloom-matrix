"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const point_1 = __importDefault(require("./point"));
const nextCell_1 = __importDefault(require("./nextCell"));
const prevCell_1 = __importDefault(require("./prevCell"));
const si_funciona_1 = __importDefault(require("si-funciona"));
/**
 * Create a direction object having x, y, z properties and next/prev methods
 * @param x - The x difference along the line
 * @param y - The y difference along the line
 * @param z - The z difference along the line
 */
const direction = (x, y, z = 0) => {
  const simplifiedCoordinates = si_funciona_1.default.simplestRatio(x, y, z);
  const [dx, dy, dz] = simplifiedCoordinates;
  const dir = (0, point_1.default)(dx, dy, dz);
  dir.next = start => (0, nextCell_1.default)(start, dir);
  dir.prev = end => (0, prevCell_1.default)(end, dir);
  return dir;
};
exports.default = direction;