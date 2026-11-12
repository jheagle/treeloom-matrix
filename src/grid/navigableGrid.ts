/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import type { DomItem } from 'treeloom/dist/domItem/types'
import type { EventProxy, ListenerFunction } from 'treeloom/dist/events/types'
import getDomItemFromPoint from '../lookup/getDomItemFromPoint'
import point from '../point/point'
import { Point } from '../point/types'
import { hasTrait } from './traits'
import { Matrix, MatrixColumn, MatrixLayer } from './types'

/**
 * The column (gridcell) an event happened in: the event's target item, or the column it is inside.
 * @param event - The event, as treeloom gives it to a listener
 * @param matrix - The matrix the listener is attached to (the search stops there)
 */
const eventColumn = (event: EventProxy | Event, matrix: DomItem): MatrixColumn | null => {
  let item: DomItem | null = (event as EventProxy).domItemTarget ?? null
  while (item && item !== matrix && !hasTrait(item, 'matrix.column')) {
    item = item.parentItem as DomItem | null
  }
  return item && item !== matrix ? item as MatrixColumn : null
}

/**
 * Set an item's tabIndex, on the item and on its element when it is rendered.
 * @param item - A column of the matrix
 * @param tabIndex - 0 to be in the Tab order, -1 to be focusable by script and click only
 */
const setTabIndex = (item: MatrixColumn, tabIndex: number): void => {
  item.attributes.tabIndex = tabIndex
  if (item.element) {
    (item.element as HTMLElement).tabIndex = tabIndex
  }
}

/**
 * Set an attribute unless the item already has one (so attributes given in the matrix props win).
 * @param item - An item of the matrix
 * @param attributes - The default attributes
 */
const setDefaultAttributes = (item: DomItem, attributes: Record<string, string | number>): void => {
  for (const [name, value] of Object.entries(attributes)) {
    if (item.attributes[name] === undefined) {
      item.attributes[name] = value
    }
  }
}

/**
 * Give the matrix the ARIA grid roles: a single layer matrix is the grid (its layer a rowgroup), a matrix of several
 * layers is a group of grids (one per layer, labelled "Layer 1", "Layer 2", ...). Each row is a row and each column
 * a gridcell. The grid gets its size (aria-rowcount / aria-colcount).
 * @param matrix - The matrix
 */
const setGridRoles = (matrix: Matrix): void => {
  const layered = matrix.children.length > 1
  const gridAttributes = (layer: MatrixLayer): Record<string, string | number> => ({
    role: 'grid',
    'aria-rowcount': layer.children.length,
    'aria-colcount': layer.children[0]?.children.length ?? 0
  })
  setDefaultAttributes(matrix, layered ? { role: 'group' } : gridAttributes(matrix.children[0]))
  ;(matrix.children as MatrixLayer[]).forEach((layer, z) => {
    setDefaultAttributes(layer, layered ? { ...gridAttributes(layer), 'aria-label': `Layer ${z + 1}` } : { role: 'rowgroup' })
    layer.children.forEach(row => {
      setDefaultAttributes(row, { role: 'row' })
      row.children.forEach(column => setDefaultAttributes(column, { role: 'gridcell' }))
    })
  })
}

/**
 * Every column of the matrix.
 * @param matrix - The matrix
 */
const allColumns = (matrix: Matrix): MatrixColumn[] => matrix.children.flatMap(layer => layer.children.flatMap(row => row.children as MatrixColumn[]))

/**
 * Make one column the matrix's single Tab stop (roving tabindex): it gets tabIndex 0, the one which had it gets -1.
 * @param matrix - The matrix
 * @param column - The column to become the Tab stop
 */
const setTabStop = (matrix: Matrix, column: MatrixColumn): void => {
  allColumns(matrix).forEach(item => {
    if (item !== column && item.attributes.tabIndex !== -1) {
      setTabIndex(item, -1)
    }
  })
  setTabIndex(column, 0)
}

/**
 * Where a key moves to from a point, following the ARIA grid pattern: the arrows move one cell, Home and End go to
 * the start and end of the row, Ctrl+Home and Ctrl+End to the first and last cell, and Page Up / Page Down to the
 * previous / next layer (only when there are several). Movement stops at the edges (no wrapping). Keys held with
 * Alt or Shift, and arrows held with Ctrl / Meta, are left to the browser (Alt+Left is Back).
 * @param event - The keyboard event
 * @param from - The point of the focused cell
 * @param size - The axis lengths of the matrix
 * @returns The point to move to, or null when the key is not a navigation key
 */
const keyTarget = (event: KeyboardEvent, from: Point, size: Point): Point | null => {
  const ctrl = event.ctrlKey || event.metaKey
  if (event.altKey || event.shiftKey || (ctrl && event.key !== 'Home' && event.key !== 'End')) {
    return null
  }
  switch (event.key) {
    case 'ArrowRight': return point(Math.min(from.x + 1, size.x - 1), from.y, from.z)
    case 'ArrowLeft': return point(Math.max(from.x - 1, 0), from.y, from.z)
    case 'ArrowDown': return point(from.x, Math.min(from.y + 1, size.y - 1), from.z)
    case 'ArrowUp': return point(from.x, Math.max(from.y - 1, 0), from.z)
    case 'Home': return ctrl ? point(0, 0, from.z) : point(0, from.y, from.z)
    case 'End': return ctrl ? point(size.x - 1, size.y - 1, from.z) : point(size.x - 1, from.y, from.z)
    case 'PageUp': return size.z > 1 ? point(from.x, from.y, Math.max(from.z - 1, 0)) : null
    case 'PageDown': return size.z > 1 ? point(from.x, from.y, Math.min(from.z + 1, size.z - 1)) : null
    default: return null
  }
}

/**
 * The keydown listener on the matrix: moves focus between cells, and activates the focused cell on Enter or Space
 * by clicking it (so the cell's existing click listeners handle the keyboard too).
 * @param event - The keydown event
 * @param target - The matrix the listener is attached to
 */
export const gridKeydown = (event: EventProxy | Event, target: DomItem): void => {
  const column = eventColumn(event, target)
  if (!column || !hasTrait(target, 'matrix.matrix')) {
    return
  }
  const matrix = target as Matrix
  const keyEvent = event as KeyboardEvent
  if ((keyEvent.key === 'Enter' || keyEvent.key === ' ') && !keyEvent.altKey && !keyEvent.ctrlKey && !keyEvent.metaKey) {
    keyEvent.preventDefault()
    ;(column.element as HTMLElement | undefined)?.click()
    return
  }
  const layer = matrix.children[column.point.z]
  const size = point(layer.children[0].children.length, layer.children.length, matrix.children.length)
  const to = keyTarget(keyEvent, column.point, size)
  if (!to) {
    return
  }
  keyEvent.preventDefault()
  const next = getDomItemFromPoint(to, matrix)
  if (!next) {
    return
  }
  setTabStop(matrix, next)
  ;(next.element as HTMLElement | undefined)?.focus()
}

/**
 * The focusin listener on the matrix: whichever cell gets focus (by keyboard or by clicking it) becomes the Tab
 * stop, so Tab returns to the last cell used.
 * @param event - The focusin event
 * @param target - The matrix the listener is attached to
 */
export const gridFocusin = (event: EventProxy | Event, target: DomItem): void => {
  const column = eventColumn(event, target)
  if (column && hasTrait(target, 'matrix.matrix')) {
    setTabStop(target as Matrix, column)
  }
}

/**
 * Make a matrix an interactive ARIA grid: screen readers announce its rows and cells, and it is keyboard navigable.
 *
 * Roles: a single layer matrix becomes the grid (role grid with aria-rowcount / aria-colcount, its layer a
 * rowgroup), a matrix of several layers a group of grids, one per layer, labelled "Layer 1", "Layer 2", ... Each row
 * is a row and each column a gridcell. Attributes already set (from the matrix props) are kept, so give the grid
 * its name there, e.g. `square({ matrix: { attributes: { 'aria-label': 'Your board' } } }, 10)`.
 *
 * Keyboard, following the ARIA grid pattern: the matrix is a single Tab stop (the start
 * cell, then whichever cell was used last), the arrow keys move between cells, Home / End go to the start / end
 * of the row, Ctrl+Home / Ctrl+End to the first / last cell, Page Up / Page Down change layer, and Enter or Space
 * clicks the focused cell.
 *
 * Only for a grid people interact with cell by cell (a game board, a seat map): a layout of cards is not a grid.
 * Call it before rendering the matrix. The cells themselves take focus, so put the click listener on the matrix
 * (or the cells) rather than on buttons inside the cells.
 * @param matrix - A matrix (from buildMatrix, square, cube or matrix)
 * @param start - The cell which is the Tab stop at first (default the first cell)
 * @returns The same matrix (unchanged when it has no cells), with the grid roles, tabIndex on each cell and the keydown and focusin listeners on the
 * matrix
 */
const navigableGrid = (matrix: Matrix, start: Point = point(0, 0, 0)): Matrix => {
  const columns = allColumns(matrix)
  if (!columns.length) {
    // Nothing to navigate (e.g. a size of 0 from dynamic data)
    return matrix
  }
  setGridRoles(matrix)
  const first = getDomItemFromPoint(start, matrix) || columns[0]
  columns.forEach(column => setTabIndex(column, column === first ? 0 : -1))
  // The functions themselves, not names registered with treeloom's registerListener: a name lives on one treeloom
  // root, and treeloom-matrix's browser bundle carries its own copy of treeloom, so a page rendering with its own
  // treeloom would not find it ("Undefined listener function").
  const listeners: Record<string, ListenerFunction> = { keydown: gridKeydown, focusin: gridFocusin }
  for (const [eventName, listenerFunc] of Object.entries(listeners)) {
    const listeners = matrix.eventListeners[eventName] ?? []
    if (!listeners.some(listener => listener.listenerFunc === listenerFunc)) {
      matrix.eventListeners[eventName] = [...listeners, { listenerFunc, listenerArgs: {}, listenerOptions: false }]
    }
  }
  return matrix
}

export default navigableGrid
