import type { DomItem, DomItemConfig, WithTraits } from 'treeloom/dist/domItem/types';
import type { Point } from '../point/types';
/**
 * The traits of a matrix: which level of the grid an item is. They are added to treeloom's TraitRegistry, so
 * `hasTrait(item, 'matrix.row')` narrows an item to a MatrixRow.
 */
declare module 'treeloom/dist/domItem/types' {
    interface TraitRegistry {
        /** The item is the top level of a grid, it contains the layers. */
        'matrix.matrix': {};
        /** The item is a layer (the z axis), it contains the rows. */
        'matrix.layer': {
            axis: 'z';
        };
        /** The item is a row (the y axis), it contains the columns. */
        'matrix.row': {
            axis: 'y';
        };
        /** The item is a column (the x axis), it holds the tile: the point of the item in the matrix. */
        'matrix.column': {
            axis: 'x';
            point: Point;
        };
    }
}
/**
 * MatrixColumn is a DomItem which represents the x axis and holds the tile (its point in the matrix).
 */
export type MatrixColumn = DomItem & WithTraits<'matrix.column'>;
/**
 * MatrixRow is the parent of a group of MatrixColumn (the y axis).
 */
export type MatrixRow = DomItem & WithTraits<'matrix.row'> & {
    children: MatrixColumn[];
};
/**
 * MatrixLayer is the parent of a group of MatrixRow (the z axis).
 */
export type MatrixLayer = DomItem & WithTraits<'matrix.layer'> & {
    children: MatrixRow[];
};
/**
 * Matrix is a multi-level DomItem which is used to visually represent a mathematical grid / matrix.
 * The matrix consists of four levels: the Matrix container (class matrix), the layers for the z axis (class layer), the
 * rows for the y axis (class row) and the columns for the x axis (class column) which each hold a tile.
 * The number of children at each level is defined by the size of the matrix.
 */
export type Matrix = DomItem & WithTraits<'matrix.matrix'> & {
    children: MatrixLayer[];
};
/**
 * Any level of the matrix: the matrix, one of its layers, rows or columns.
 */
export type MatrixLevel = Matrix | MatrixLayer | MatrixRow | MatrixColumn;
/**
 * A default tile of the Matrix: it stores the point of its column, which is set once the matrix is built.
 */
export interface MatrixTile {
    point: Point;
}
/**
 * Additional properties to be added to each level of the matrix (each may be given a DomItem configuration).
 */
export interface MatrixProps {
    /** Additional properties for each column (the x axis), this is where tile data goes */
    x?: DomItemConfig;
    /** Additional properties for each row (the y axis) */
    y?: DomItemConfig;
    /** Additional properties for each layer (the z axis) */
    z?: DomItemConfig;
    /** Additional properties for the matrix itself */
    matrix?: DomItemConfig;
}
