import 'core-js/stable'
import buildMatrix from './buildMatrix'
import { Matrix, MatrixProps } from './types'

/**
 * Return a single layer matrix where x and y are equal
 * @param props - Additional data to append to each level: x for each column (the tile data), y for each row, z for
 * each layer and matrix for the matrix itself. Each is a single configuration object, not an array.
 * @param size - Used to define the width and height as equal values (depth is set to 1)
 */
const square = ({ x = {}, y = {}, z = {}, matrix = {} }: MatrixProps = {}, size: number): Matrix => buildMatrix(
  { x: size, y: size, z: 1 },
  { x: x, y: y, z: z, matrix: matrix }
)

export default square
