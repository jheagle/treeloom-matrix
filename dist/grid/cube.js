"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
const buildMatrix_1 = __importDefault(require("./buildMatrix"));
/**
 * Return a matrix where x, y, and z are equal
 * @param props - Additional data to append to each level: x for each column (the tile data), y for each row, z for
 * each layer and matrix for the matrix itself. Each is a single configuration object, not an array.
 * @param size - Used to define the width, height and depth as equal values
 */
const cube = ({
  x = {},
  y = {},
  z = {},
  matrix = {}
} = {}, size) => (0, buildMatrix_1.default)({
  x: size,
  y: size,
  z: size
}, {
  x,
  y,
  z,
  matrix
});
exports.default = cube;