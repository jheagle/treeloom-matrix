import { Point } from '../point/types';
import { MatrixLevel } from '../grid/types';
/**
 * Return just the points on one z-layer of the matrix - the same points getAllPoints would find, filtered down to
 * a single layer. A convenience for the repeated getAllPoints(matrix).filter(p => p.z === z) pattern.
 * @param matrix - The matrix (or any level of it) to retrieve points from.
 * @param z - The layer to keep points from.
 */
declare const getLayerPoints: (matrix: MatrixLevel, z: Point["z"]) => Point[];
export default getLayerPoints;
