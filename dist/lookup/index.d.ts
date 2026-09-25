import 'core-js/stable';
declare const _default: {
    getDomItemFromElement: (elem: Node, matrix: import("../grid/types").Matrix) => import("../grid/types").MatrixColumn | false;
    getDomItemFromPoint: (pnt: import("../point/types").Point, matrix: import("../grid/types").Matrix) => import("../grid/types").MatrixColumn | false;
    getPointFromDomItem: (domItem: import("../grid/types").MatrixColumn, useIfExists?: boolean) => import("../point/types").Point;
    getPointFromElement: (elem: Node) => import("../point/types").Point;
};
export default _default;
