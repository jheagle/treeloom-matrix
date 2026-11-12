import treeloomMatrix from '../src/main'
import { hasTrait } from '../src/grid/traits'
import type { Direction, Point } from '../src/point/types'
import type { Matrix, MatrixColumn } from '../src/grid/types'

const grid: Matrix = treeloomMatrix.square({}, 3)

// the levels of a matrix are typed down to the tile
const column: MatrixColumn = grid.children[0].children[0].children[0]
const point: Point = column.point
const axis: 'x' = column.axis
const rowAxis: 'y' = grid.children[0].children[0].axis
const layerAxis: 'z' = grid.children[0].axis

// hasTrait narrows an item to what the trait puts on it
const item = grid.children[0] as import('treeloom/dist/domItem/types').CoreItem
if (hasTrait(item, 'matrix.row')) {
  const y: 'y' = item.axis
}
if (hasTrait(item, 'matrix.column')) {
  const p: Point = item.point
}

// directions know how to step
const dir: Direction = treeloomMatrix.direction(1, 0)
const next: Point = dir.next(treeloomMatrix.point(0, 0))

// lookups may fail
const found = treeloomMatrix.getDomItemFromPoint(treeloomMatrix.point(0, 0), grid)
// @ts-expect-error - false has no point
found.point
if (found) {
  const p: Point = found.point
}

// nullable coordinates are only there when the function can return them
const shifted = treeloomMatrix.alterCoordinates(treeloomMatrix.point(1, 2), (c) => c + 1)
const total: number = shifted.x + shifted.y
const maybe = treeloomMatrix.alterCoordinates(treeloomMatrix.point(1, 2), (c) => c > 1 ? c : null)
// @ts-expect-error - a coordinate may be null
const notNull: number = maybe.x

// @ts-expect-error - a point needs numbers
treeloomMatrix.point('1', 2)
// @ts-expect-error - the axis of a row is y
const wrongAxis: 'x' = grid.children[0].children[0].axis
// @ts-expect-error - there is no such trait
hasTrait(item, 'matrix.cell')
// @ts-expect-error - a line type has to be one of the known methods
treeloomMatrix.getLinePoints(treeloomMatrix.point(0, 0), treeloomMatrix.point(1, 1), 'curved')
// @ts-expect-error - the props are single objects, not arrays of them
treeloomMatrix.square({ x: [{}] }, 3)
// @ts-expect-error - a matrix is needed, not a point
treeloomMatrix.getAxisLengths(treeloomMatrix.point(1, 1))

export { axis, rowAxis, layerAxis, next, total, notNull, wrongAxis, point }
