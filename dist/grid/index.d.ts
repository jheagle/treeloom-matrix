/**
 * The grid itself: a matrix of layers, rows and columns (json-dom items with the matrix.* traits), where each
 * column holds a tile with its point.
 */
import 'core-js/stable';
declare const _default: {
    buildMatrix: (dimensions?: import("../point/types").Point, props?: import("./types").MatrixProps) => import("./types").Matrix;
    cube: ({ x, y, z, matrix }: import("./types").MatrixProps | undefined, size: number) => import("./types").Matrix;
    matrix: (dimensions?: import("../point/types").Point, props?: import("./types").MatrixProps) => import("./types").Matrix;
    square: ({ x, y, z, matrix }: import("./types").MatrixProps | undefined, size: number) => import("./types").Matrix;
    tile: () => import("./types").MatrixTile;
    updateMatrixPoints: (matrix: import("./types").Matrix) => import("./types").Matrix;
};
export default _default;
