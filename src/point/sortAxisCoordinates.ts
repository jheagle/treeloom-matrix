import 'core-js/stable'
import { AxisCoordinate, AxisCoordinatePairs, Point } from './types'

/**
 * Take a point and sort the coordinates, return an array of them sorted.
 * @param pnt - the Point to be sorted
 * @param direction - 'asc'|'desc'
 */
const sortAxisCoordinates = (pnt: Point, direction: 'asc' | 'desc' = 'desc'): AxisCoordinatePairs => {
  const sortFn = direction === 'desc'
    ? (a: AxisCoordinate, b: AxisCoordinate) => b.coordinate - a.coordinate
    : (a: AxisCoordinate, b: AxisCoordinate) => a.coordinate - b.coordinate
  const axisCoordinatePairs: AxisCoordinatePairs = [
    { axis: 'x', coordinate: pnt.x },
    { axis: 'y', coordinate: pnt.y },
    { axis: 'z', coordinate: pnt.z }
  ]
  return axisCoordinatePairs.sort(sortFn)
}

export default sortAxisCoordinates
