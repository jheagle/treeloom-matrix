import 'core-js/stable';
import './traits';
import { Matrix, MatrixProps } from './types';
import { Point } from '../point/types';
/**
 * Create a 3d matrix of i with x by y by z size, add additional objects for each layer as well
 * @param dimensions - The dimensions of the matrix to be created (x is the width, y the height, z the depth)
 * @param props - Additional properties to be added to each level of the matrix
 */
declare const matrix: (dimensions?: Point, props?: MatrixProps) => Matrix;
export default matrix;
