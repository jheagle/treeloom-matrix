import 'core-js/stable'
import buildMatrix from './buildMatrix'
import { Matrix, MatrixProps } from './types'

/**
 * Return a matrix where x, y, and z are equal
 * @function
 * @param props - Additional data to append to each level: x for each column (the tile data), y for each row, z for
 * each layer and matrix for the matrix itself. Each is a single configuration object, not an array.
 * @param size - Used to define the width, height and depth as equal values
 */
const cube = ({ x = {}, y = {}, z = {}, matrix = {} }: MatrixProps = {}, size: number): Matrix => buildMatrix(
  { x: size, y: size, z: size },
  { x: x, y: y, z: z, matrix: matrix }
)

export default cube
