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
 * Return a single layer matrix where x and y are equal
 * @param props - Additional data to append to each level: x for each column (the tile data), y for each row, z for
 * each layer and matrix for the matrix itself. Each is a single configuration object, not an array.
 * @param size - Used to define the width and height as equal values (depth is set to 1)
 */
const square = ({
  x = {},
  y = {},
  z = {},
  matrix = {}
} = {}, size) => (0, buildMatrix_1.default)({
  x: size,
  y: size,
  z: 1
}, {
  x,
  y,
  z,
  matrix
});
exports.default = square;