import { Matrix, MatrixProps } from './types';
import { Point } from '../point/types';
/**
 * Create the matrix and assign the correct points to each tile.
 * @param dimensions - The dimensions of the matrix to be created (x is the width, y the height, z the depth)
 * @param props - Additional properties to be added to each level of the matrix
 */
declare const buildMatrix: (dimensions?: Point, props?: MatrixProps) => Matrix;
export default buildMatrix;
