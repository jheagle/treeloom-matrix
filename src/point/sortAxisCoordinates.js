import 'core-js/stable'

/**
 * An object for an axis-coordinate pair
 * @typedef {Object} module:matrixObjects~axisCoordinate
 * @property {module:matrixObjects~axis} axis - The string representing the axis: 'x', 'y', or 'z'
 * @property {module:matrixObjects~coordinate} coordinate - The number representing the coordinate at this axis
 */

/**
 * An array of the pairs from a Point
 * @typedef {Array.<module:matrixObjects~axisCoordinate>} module:matrixObjects~axisCoordinatePairs
 */

/**
 * Take a point and sort the coordinates, return an array of them sorted.
 * @function
 * @param {module:matrixObjects~Point} pnt - the Point to be sorted
 * @param {string} direction - 'asc'|'desc'
 * @returns {module:matrixObjects~axisCoordinatePairs}
 */
const sortAxisCoordinates = (pnt, direction = 'desc') => {
    const sortFn = direction === 'desc'
        ? (a, b) => b.coordinate - a.coordinate
        : (a, b) => a.coordinate - b.coordinate
    const axisCoordinatePairs = [
        { axis: 'x', coordinate: pnt.x },
        { axis: 'y', coordinate: pnt.y },
        { axis: 'z', coordinate: pnt.z }
    ]
    return axisCoordinatePairs.sort(sortFn)
}

export default sortAxisCoordinates