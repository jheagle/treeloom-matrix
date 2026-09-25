/**
 * A string representing an axis: x, y, z
 */
export type Axis = 'x' | 'y' | 'z';
/**
 * A number representing a coordinate in a Matrix
 */
export type Coordinate = number;
/**
 * Point stores a location in a Matrix defined by three key-value pairs (axis => coordinate)
 */
export interface Point extends PointLike<Coordinate> {
}
/**
 * The shape of a point with any kind of value for its coordinates (for example null when a coordinate is unknown).
 */
export interface PointLike<Value> {
    /** The X-coordinate of a Point */
    x: Value;
    /** The Y-coordinate of a Point */
    y: Value;
    /** The Z-coordinate of a Point */
    z: Value;
}
/**
 * Direction represents the delta from one point to another and indicates the direction of travel.
 */
export interface Direction extends Point {
    /** Get the next point in the direction from a starting point */
    next: (start: Point) => Point;
    /** Get the previous point in the direction from an ending point */
    prev: (end: Point) => Point;
}
/**
 * A function to alter one coordinate of a point, it returns the new value for the coordinate
 * @param coordinate - The coordinate to alter
 * @param axis - The axis for the coordinate being altered
 * @param point - The point that the coordinate is part of
 */
export type AlterCoordinate<Value = Coordinate | null, Input = Coordinate, Source = Point> = (coordinate: Input, axis: Axis, point: Source) => Value;
/**
 * An object for an axis-coordinate pair
 */
export interface AxisCoordinate {
    /** The string representing the axis: 'x', 'y', or 'z' */
    axis: Axis;
    /** The number representing the coordinate at this axis */
    coordinate: Coordinate;
}
/**
 * An array of the pairs from a Point
 */
export type AxisCoordinatePairs = AxisCoordinate[];
