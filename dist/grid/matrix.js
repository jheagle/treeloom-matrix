"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
require("core-js/stable");
const si_funciona_1 = __importDefault(require("si-funciona"));
const json_dom_1 = __importDefault(require("json-dom"));
const tile_1 = __importDefault(require("./tile"));
require("./traits");
/**
 * Create a 3d matrix of i with x by y by z size, add additional objects for each layer as well
 * @param dimensions - The dimensions of the matrix to be created (x is the width, y the height, z the depth)
 * @param props - Additional properties to be added to each level of the matrix
 */
const matrix = (dimensions = {
  x: 0,
  y: 0,
  z: 1
}, props = {
  x: {},
  y: {},
  z: {},
  matrix: {}
}) => si_funciona_1.default.mergeObjects(json_dom_1.default.createDomItem({
  has: {
    'matrix.matrix': true
  },
  tagName: 'div',
  attributes: {
    className: 'matrix'
  },
  children: si_funciona_1.default.buildArray(si_funciona_1.default.mergeObjectsMutable(json_dom_1.default.createDomItem({
    axis: 'z',
    has: {
      'matrix.layer': true
    },
    tagName: 'div',
    attributes: {
      className: 'layer'
    },
    children: si_funciona_1.default.buildArray(si_funciona_1.default.mergeObjectsMutable(json_dom_1.default.createDomItem({
      axis: 'y',
      has: {
        'matrix.row': true
      },
      tagName: 'div',
      attributes: {
        className: 'row'
      },
      children: si_funciona_1.default.buildArray(si_funciona_1.default.mergeObjectsMutable(json_dom_1.default.createDomItem({
        axis: 'x',
        has: {
          'matrix.column': true
        },
        tagName: 'div',
        attributes: {
          className: 'column'
        },
        children: []
      }), (0, tile_1.default)(), props.x), dimensions.x)
    }), props.y), dimensions.y)
  }), props.z), dimensions.z)
}), props.matrix);
exports.default = matrix;