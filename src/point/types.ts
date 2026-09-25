/**
 * A string representing an axis: x, y, z
 */
export type Axis = 'x' | 'y' | 'z'

/**
 * A number representing a coordinate in a Matrix
 */
export type Coordinate = number

/**
 * Point stores a location in a Matrix defined by three key-value pairs (axis => coordinate)
 */
export interface Point {
  /** The X-coordinate of a Point */
  x: Coordinate
  /** The Y-coordinate of a Point */
  y: Coordinate
  /** The Z-coordinate of a Point */
  z: Coordinate
}

/**
 * Direction represents the delta from one point to another and indicates the direction of travel.
 */
export interface Direction extends Point {
  /** Get the next point in the direction from a starting point */
  next: (start: Point) => Point
  /** Get the previous point in the direction from an ending point */
  prev: (end: Point) => Point
}

/**
 * A function to alter one coordinate of a point
 * @param coordinate - The coordinate to alter (null when the point itself is missing)
 * @param axis - The axis for the coordinate being altered
 * @param point - The point that the coordinate is part of
 */
export type AlterCoordinate = (coordinate: Coordinate | null, axis: Axis, point: Point | null) => Coordinate

/**
 * An object for an axis-coordinate pair
 */
export interface AxisCoordinate {
  /** The string representing the axis: 'x', 'y', or 'z' */
  axis: Axis
  /** The number representing the coordinate at this axis */
  coordinate: Coordinate
}

/**
 * An array of the pairs from a Point
 */
export type AxisCoordinatePairs = AxisCoordinate[]
