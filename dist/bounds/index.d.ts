declare const _default: {
    adjacentEdgePoints: (pnt: import("../point/types").Point, matrix: import("../grid/types").Matrix) => import("../point/types").Point[];
    adjacentPoints: (pnt: import("../point/types").Point, matrix: import("../grid/types").Matrix) => import("../point/types").Point[];
    checkValidPoint: (pnt: import("../point/types").Point, matrix: import("../grid/types").Matrix) => boolean;
    getAllPoints: (matrix: import("../grid/types").MatrixLevel, allPoints?: import("../point/types").Point[]) => import("../point/types").Point[];
    getAvailableRanges: (matrix: import("../grid/types").Matrix, maxRanges?: import("../point/types").Point | null) => import("../point/types").Point;
    getAxisLengths: (matrix: import("../grid/types").Matrix) => import("../point/types").Point;
    getCoordinateRanges: (minPoint: import("../point/types").Point, maxPoint: import("../point/types").Point, maxRanges?: import("../point/types").Point | null) => import("../point/types").Point;
    getLayerPoints: (matrix: import("../grid/types").MatrixLevel, z: import("../point/types").Point["z"]) => import("../point/types").Point[];
    getMatrixRange: (matrix: import("../grid/types").Matrix) => import("../point/types").Point[];
};
export default _default;
