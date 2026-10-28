import { Matrix, MatrixProps } from './types';
/**
 * Return a single layer matrix where x and y are equal
 * @param props - Additional data to append to each level: x for each column (the tile data), y for each row, z for
 * each layer and matrix for the matrix itself. Each is a single configuration object, not an array.
 * @param size - Used to define the width and height as equal values (depth is set to 1)
 */
declare const square: ({ x, y, z, matrix }: MatrixProps | undefined, size: number) => Matrix;
export default square;
