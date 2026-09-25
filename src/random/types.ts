/**
 * An object that has boolean values for each axis indicating whether the interval fits within the matrix.
 */
export interface IntervalFits {
  /** Whether the interval fits within the x-axis of the matrix */
  x: boolean
  /** Whether the interval fits within the y-axis of the matrix */
  y: boolean
  /** Whether the interval fits within the z-axis of the matrix */
  z: boolean
}
