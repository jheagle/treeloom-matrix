import 'core-js/stable';
import alterCoordinates from './alterCoordinates';
declare const _default: {
    alterCoordinates: typeof alterCoordinates;
    areEqualPoints: (p1: import("./types").Point, p2: import("./types").Point) => boolean;
    direction: (x: import("./types").Coordinate, y: import("./types").Coordinate, z?: import("./types").Coordinate) => import("./types").Direction;
    getAbsolutePoint: (pnt: import("./types").Point) => import("./types").Point;
    getFirstAxisOfCoordinate: (pnt: import("./types").Point, coordinate: import("./types").Coordinate) => import("./types").Axis | false;
    getHighestAbsoluteCoordinate: (pnt: import("./types").Point) => import("./types").Coordinate;
    nextCell: (pnt: import("./types").Point, dir: import("./types").Point | import("./types").Direction) => import("./types").Point;
    point: (x: import("./types").Coordinate, y: import("./types").Coordinate, z?: import("./types").Coordinate) => import("./types").Point;
    pointDifference: (start: import("./types").Point, end: import("./types").Point) => import("./types").Point;
    prevCell: (pnt: import("./types").Point, dir: import("./types").Point | import("./types").Direction) => import("./types").Point;
    sortAxisCoordinates: (pnt: import("./types").Point, direction?: "asc" | "desc") => import("./types").AxisCoordinatePairs;
};
export default _default;
