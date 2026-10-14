"use strict";

var __importDefault = void 0 && (void 0).__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};
Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Points and directions in a matrix: create them, compare them and step from one to the next.
 */
require("core-js/stable");
const alterCoordinates_1 = __importDefault(require("./alterCoordinates"));
const areEqualPoints_1 = __importDefault(require("./areEqualPoints"));
const direction_1 = __importDefault(require("./direction"));
const getAbsolutePoint_1 = __importDefault(require("./getAbsolutePoint"));
const getFirstAxisOfCoordinate_1 = __importDefault(require("./getFirstAxisOfCoordinate"));
const getHighestAbsoluteCoordinate_1 = __importDefault(require("./getHighestAbsoluteCoordinate"));
const nextCell_1 = __importDefault(require("./nextCell"));
const point_1 = __importDefault(require("./point"));
const pointDifference_1 = __importDefault(require("./pointDifference"));
const prevCell_1 = __importDefault(require("./prevCell"));
const sortAxisCoordinates_1 = __importDefault(require("./sortAxisCoordinates"));
exports.default = {
  alterCoordinates: alterCoordinates_1.default,
  areEqualPoints: areEqualPoints_1.default,
  direction: direction_1.default,
  getAbsolutePoint: getAbsolutePoint_1.default,
  getFirstAxisOfCoordinate: getFirstAxisOfCoordinate_1.default,
  getHighestAbsoluteCoordinate: getHighestAbsoluteCoordinate_1.default,
  nextCell: nextCell_1.default,
  point: point_1.default,
  pointDifference: pointDifference_1.default,
  prevCell: prevCell_1.default,
  sortAxisCoordinates: sortAxisCoordinates_1.default
};