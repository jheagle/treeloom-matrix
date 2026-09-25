import 'core-js/stable';
declare const _default: {
    randDirection: (matrix: import("../grid/types").Matrix, start?: import("../point/types").Point | null, maxRanges?: import("../point/types").Point | null) => import("../point/types").Direction;
    randDirectionWithInterval: (matrix: import("../grid/types").Matrix, start?: import("../point/types").Point | null, interval?: number | null, maxRanges?: import("../point/types").Point | null) => import("../point/types").Direction;
    randomPoint: (matrix: import("../grid/types").Matrix, maxRanges?: import("../point/types").Point | null) => import("../point/types").Point;
    randomStart: (matrix: import("../grid/types").Matrix, length?: number | null, dir?: import("../point/types").Direction | null, maxRanges?: import("../point/types").Point | null) => import("../point/types").Point;
    testIntervalFits: (matrix: import("../grid/types").Matrix, interval?: number | null, maxRanges?: import("../point/types").Point | null) => import("./types").IntervalFits;
};
export default _default;
