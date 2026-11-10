/**
 * All of the Matrix DOM functions and objects necessary to create DOM Matrices
 */
/**
 * All the functions of matrix-dom.
 */
declare const matrixDom: {
    randDirection: (matrix: import("./grid/types").Matrix, start?: import("./point/types").Point | null, maxRanges?: import("./point/types").Point | null) => import("./point/types").Direction;
    randDirectionWithInterval: (matrix: import("./grid/types").Matrix, start?: import("./point/types").Point | null, interval?: number | null, maxRanges?: import("./point/types").Point | null) => import("./point/types").Direction;
    randomPoint: (matrix: import("./grid/types").Matrix, maxRanges?: import("./point/types").Point | null) => import("./point/types").Point;
    randomStart: (matrix: import("./grid/types").Matrix, length?: number | null, dir?: import("./point/types").Direction | null, maxRanges?: import("./point/types").Point | null) => import("./point/types").Point;
    testIntervalFits: (matrix: import("./grid/types").Matrix, interval?: number | null, maxRanges?: import("./point/types").Point | null) => import("./random/types").IntervalFits;
    getDomItemFromElement: (elem: Node, matrix: import("./grid/types").Matrix) => import("./grid/types").MatrixColumn | false;
    getDomItemFromPoint: (pnt: import("./point/types").Point, matrix: import("./grid/types").Matrix) => import("./grid/types").MatrixColumn | false;
    getPointFromDomItem: (domItem: import("./grid/types").MatrixColumn, useIfExists?: boolean) => import("./point/types").Point;
    getPointFromElement: (elem: Node) => import("./point/types").Point;
    adjacentEdgePoints: (pnt: import("./point/types").Point, matrix: import("./grid/types").Matrix) => import("./point/types").Point[];
    adjacentPoints: (pnt: import("./point/types").Point, matrix: import("./grid/types").Matrix) => import("./point/types").Point[];
    checkValidPoint: (pnt: import("./point/types").Point, matrix: import("./grid/types").Matrix) => boolean;
    getAllPoints: (matrix: import("./grid/types").MatrixLevel, allPoints?: import("./point/types").Point[]) => import("./point/types").Point[];
    getAvailableRanges: (matrix: import("./grid/types").Matrix, maxRanges?: import("./point/types").Point | null) => import("./point/types").Point;
    getAxisLengths: (matrix: import("./grid/types").Matrix) => import("./point/types").Point;
    getCoordinateRanges: (minPoint: import("./point/types").Point, maxPoint: import("./point/types").Point, maxRanges?: import("./point/types").Point | null) => import("./point/types").Point;
    getLayerPoints: (matrix: import("./grid/types").MatrixLevel, z: import("./point/types").Point["z"]) => import("./point/types").Point[];
    getMatrixRange: (matrix: import("./grid/types").Matrix) => import("./point/types").Point[];
    buildMatrix: (dimensions?: import("./point/types").Point, props?: import("./grid/types").MatrixProps) => import("./grid/types").Matrix;
    cube: ({ x, y, z, matrix }: import("./grid/types").MatrixProps | undefined, size: number) => import("./grid/types").Matrix;
    matrix: (dimensions?: import("./point/types").Point, props?: import("./grid/types").MatrixProps) => import("./grid/types").Matrix;
    navigableGrid: (matrix: import("./grid/types").Matrix, start?: import("./point/types").Point) => import("./grid/types").Matrix;
    square: ({ x, y, z, matrix }: import("./grid/types").MatrixProps | undefined, size: number) => import("./grid/types").Matrix;
    tile: () => import("./grid/types").MatrixTile;
    updateMatrixPoints: (matrix: import("./grid/types").Matrix) => import("./grid/types").Matrix;
    checkInBetween: (start: import("./point/types").Point, end: import("./point/types").Point, matrix: import("./grid/types").Matrix, func: import("./line/types").TestPointStatus, inclusive?: boolean) => boolean;
    getLineIntersectPoints: (start: import("./point/types").Point, end: import("./point/types").Point, line?: import("./line/types").Line) => import("./line/types").Line;
    getLinePoints: (start: import("./point/types").Point, end: import("./point/types").Point, type?: import("./line/types").LineType, line?: import("./line/types").Line) => import("./line/types").Line;
    getLineRelativePoints: (start: import("./point/types").Point, end: import("./point/types").Point, line?: import("./line/types").Line) => import("./line/types").Line;
    getLineTransitionPoints: (start: import("./point/types").Point, end: import("./point/types").Point, line?: import("./line/types").Line, transitions?: number | null) => import("./line/types").Line;
    getLinesOfLength: (dimensions: import("./point/types").Point, length: number) => import("./line/types").Line[];
    getPointsForLines: (lines: import("./line/types").LineSegment[]) => import("./line/types").Line;
    lineEndPoint: (start: import("./point/types").Point, length: number, dir: import("./point/types").Point | import("./point/types").Direction) => import("./point/types").Point;
    pointsToStep: (start: import("./point/types").Point, end: import("./point/types").Point) => import("./point/types").Point | import("./point/types").Direction;
    testPointsBetween: (start: import("./point/types").Point, end: import("./point/types").Point, matrix: import("./grid/types").Matrix, func: import("./line/types").TestPointStatus, inclusive?: boolean) => import("./line/types").PointsBetween;
    alterCoordinates: typeof import("./point/alterCoordinates").default;
    areEqualPoints: (p1: import("./point/types").Point, p2: import("./point/types").Point) => boolean;
    direction: (x: import("./point/types").Coordinate, y: import("./point/types").Coordinate, z?: import("./point/types").Coordinate) => import("./point/types").Direction;
    getAbsolutePoint: (pnt: import("./point/types").Point) => import("./point/types").Point;
    getFirstAxisOfCoordinate: (pnt: import("./point/types").Point, coordinate: import("./point/types").Coordinate) => import("./point/types").Axis | false;
    getHighestAbsoluteCoordinate: (pnt: import("./point/types").Point) => import("./point/types").Coordinate;
    nextCell: (pnt: import("./point/types").Point, dir: import("./point/types").Point | import("./point/types").Direction) => import("./point/types").Point;
    point: (x: import("./point/types").Coordinate, y: import("./point/types").Coordinate, z?: import("./point/types").Coordinate) => import("./point/types").Point;
    pointDifference: (start: import("./point/types").Point, end: import("./point/types").Point) => import("./point/types").Point;
    prevCell: (pnt: import("./point/types").Point, dir: import("./point/types").Point | import("./point/types").Direction) => import("./point/types").Point;
    sortAxisCoordinates: (pnt: import("./point/types").Point, direction?: "asc" | "desc") => import("./point/types").AxisCoordinatePairs;
};
export = matrixDom;
