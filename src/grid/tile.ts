import { MatrixTile } from './types'

/**
 * A default tile in the Matrix, the point is filled in once the matrix is built (see updateMatrixPoints).
 */
const tile = (): MatrixTile => ({
  point: {} as MatrixTile['point']
})

export default tile
