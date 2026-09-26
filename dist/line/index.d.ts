/**
 * Lines between points: find the points a line passes through, and test the points along it.
 */
import 'core-js/stable';
declare const _default: {
    checkInBetween: (start: import("../point/types").Point, end: import("../point/types").Point, matrix: import("../grid/types").Matrix, func: import("./types").TestPointStatus, inclusive?: boolean) => boolean;
    getLineIntersectPoints: (start: import("../point/types").Point, end: import("../point/types").Point, line?: import("./types").Line) => import("./types").Line;
    getLinePoints: (start: import("../point/types").Point, end: import("../point/types").Point, type?: import("./types").LineType, line?: import("./types").Line) => import("./types").Line;
    getLineRelativePoints: (start: import("../point/types").Point, end: import("../point/types").Point, line?: import("./types").Line) => import("./types").Line;
    getLineTransitionPoints: (start: import("../point/types").Point, end: import("../point/types").Point, line?: import("./types").Line, transitions?: number | null) => import("./types").Line;
    getPointsForLines: (lines: import("./types").LineSegment[]) => import("./types").Line;
    lineEndPoint: (start: import("../point/types").Point, length: number, dir: import("../point/types").Point | import("../point/types").Direction) => import("../point/types").Point;
    pointsToStep: (start: import("../point/types").Point, end: import("../point/types").Point) => import("../point/types").Point | import("../point/types").Direction;
    testPointsBetween: (start: import("../point/types").Point, end: import("../point/types").Point, matrix: import("../grid/types").Matrix, func: import("./types").TestPointStatus, inclusive?: boolean) => import("./types").PointsBetween;
};
export default _default;
