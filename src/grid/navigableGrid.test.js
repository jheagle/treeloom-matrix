/**
 * @jest-environment jsdom
 */
import jsonDom from 'json-dom'
import navigableGrid, { gridFocusin, gridKeydown } from './navigableGrid'
import buildMatrix from './buildMatrix'
import square from './square'
import point from '../point/point'

const cell = (grid, x, y, z = 0) => grid.children[z].children[y].children[x]
const tabStops = grid => grid.children.flatMap(layer => layer.children.flatMap(row => row.children))
  .filter(column => column.element.tabIndex === 0)
const press = (element, key, options = {}) => {
  const event = new window.KeyboardEvent('keydown', { key, bubbles: true, cancelable: true, ...options })
  element.dispatchEvent(event)
  return event
}
const live = (grid, start) => jsonDom.renderHtml(navigableGrid(grid, start))

afterEach(() => { document.body.innerHTML = '' })

describe('navigableGrid', () => {
  test('makes the first cell the only Tab stop, the rest focusable by script', () => {
    const grid = live(square({}, 3))
    expect(cell(grid, 0, 0).element.tabIndex).toBe(0)
    expect(cell(grid, 2, 1).element.tabIndex).toBe(-1)
    expect(tabStops(grid)).toHaveLength(1)
  })

  test('a start point picks the first Tab stop', () => {
    const grid = live(square({}, 3), point(1, 2, 0))
    expect(tabStops(grid)).toEqual([cell(grid, 1, 2)])
  })

  test('arrow keys move focus and the Tab stop, and stop at the edges', () => {
    const grid = live(square({}, 3))
    cell(grid, 0, 0).element.focus()
    const event = press(cell(grid, 0, 0).element, 'ArrowRight')
    expect(event.defaultPrevented).toBe(true)
    expect(document.activeElement).toBe(cell(grid, 1, 0).element)
    press(document.activeElement, 'ArrowDown')
    expect(document.activeElement).toBe(cell(grid, 1, 1).element)
    press(document.activeElement, 'ArrowLeft')
    press(document.activeElement, 'ArrowLeft')
    expect(document.activeElement).toBe(cell(grid, 0, 1).element)
    press(document.activeElement, 'ArrowUp')
    press(document.activeElement, 'ArrowUp')
    expect(document.activeElement).toBe(cell(grid, 0, 0).element)
    expect(tabStops(grid)).toEqual([cell(grid, 0, 0)])
    expect(cell(grid, 0, 0).attributes.tabIndex).toBe(0)
    expect(cell(grid, 1, 1).attributes.tabIndex).toBe(-1)
  })

  test('Home / End go along the row, Ctrl+Home / Ctrl+End to the corners', () => {
    const grid = live(square({}, 4))
    cell(grid, 1, 2).element.focus()
    press(document.activeElement, 'End')
    expect(document.activeElement).toBe(cell(grid, 3, 2).element)
    press(document.activeElement, 'Home')
    expect(document.activeElement).toBe(cell(grid, 0, 2).element)
    press(document.activeElement, 'End', { ctrlKey: true })
    expect(document.activeElement).toBe(cell(grid, 3, 3).element)
    press(document.activeElement, 'Home', { ctrlKey: true })
    expect(document.activeElement).toBe(cell(grid, 0, 0).element)
  })

  test('Page Up / Page Down change layer in a cube', () => {
    const grid = live(buildMatrix({ x: 2, y: 2, z: 3 }))
    cell(grid, 1, 1, 0).element.focus()
    press(document.activeElement, 'PageDown')
    expect(document.activeElement).toBe(cell(grid, 1, 1, 1).element)
    press(document.activeElement, 'PageDown')
    press(document.activeElement, 'PageDown')
    expect(document.activeElement).toBe(cell(grid, 1, 1, 2).element)
    press(document.activeElement, 'PageUp')
    expect(document.activeElement).toBe(cell(grid, 1, 1, 1).element)
  })

  test('Enter and Space click the focused cell, so click listeners handle the keyboard too', () => {
    const grid = live(square({}, 2))
    const clicked = []
    grid.element.addEventListener('click', event => clicked.push(event.target))
    const target = cell(grid, 1, 0).element
    target.focus()
    expect(press(target, 'Enter').defaultPrevented).toBe(true)
    expect(press(target, ' ').defaultPrevented).toBe(true)
    expect(clicked).toEqual([target, target])
  })

  test('other keys are left alone', () => {
    const grid = live(square({}, 2))
    cell(grid, 0, 0).element.focus()
    expect(press(document.activeElement, 'a').defaultPrevented).toBe(false)
    expect(document.activeElement).toBe(cell(grid, 0, 0).element)
  })

  test('Page Up / Page Down are left to the page in a single layer grid (it can still scroll)', () => {
    const grid = live(square({}, 3))
    cell(grid, 1, 1).element.focus()
    expect(press(document.activeElement, 'PageDown').defaultPrevented).toBe(false)
    expect(press(document.activeElement, 'PageUp').defaultPrevented).toBe(false)
    expect(document.activeElement).toBe(cell(grid, 1, 1).element)
  })

  test('keys with Alt or Shift, and arrows with Ctrl / Meta, are left to the browser', () => {
    const grid = live(square({}, 3))
    cell(grid, 1, 1).element.focus()
    expect(press(document.activeElement, 'ArrowLeft', { altKey: true }).defaultPrevented).toBe(false)
    expect(press(document.activeElement, 'ArrowRight', { shiftKey: true }).defaultPrevented).toBe(false)
    expect(press(document.activeElement, 'ArrowDown', { ctrlKey: true }).defaultPrevented).toBe(false)
    expect(press(document.activeElement, 'ArrowUp', { metaKey: true }).defaultPrevented).toBe(false)
    expect(press(document.activeElement, 'Home', { altKey: true }).defaultPrevented).toBe(false)
    expect(press(document.activeElement, 'Enter', { ctrlKey: true }).defaultPrevented).toBe(false)
    expect(document.activeElement).toBe(cell(grid, 1, 1).element)
  })

  test('a matrix with no cells is returned unchanged', () => {
    const empty = buildMatrix({ x: 0, y: 0, z: 0 })
    expect(navigableGrid(empty)).toBe(empty)
    expect(empty.attributes.role).toBeUndefined()
    expect(navigableGrid(buildMatrix({ x: 0, y: 2, z: 1 })).attributes.role).toBeUndefined()
  })

  test('focusing a cell another way (a click) makes it the Tab stop', () => {
    const grid = live(square({}, 3))
    cell(grid, 2, 2).element.focus()
    expect(tabStops(grid)).toEqual([cell(grid, 2, 2)])
  })

  test('keeps existing listeners and does not add its own twice', () => {
    const grid = square({ matrix: { eventListeners: { click: [{ listenerFunc: 'attack', listenerArgs: {}, listenerOptions: false }] } } }, 2)
    navigableGrid(navigableGrid(grid))
    expect(grid.eventListeners.click[0].listenerFunc).toBe('attack')
    expect(grid.eventListeners.keydown.map(listener => listener.listenerFunc)).toEqual([gridKeydown])
    expect(grid.eventListeners.focusin.map(listener => listener.listenerFunc)).toEqual([gridFocusin])
  })

  describe('ARIA grid roles', () => {
    test('a plain matrix has no roles (a layout of cards is not a grid)', () => {
      const grid = square({}, 2)
      expect(grid.attributes.role).toBeUndefined()
      expect(cell(grid, 0, 0).attributes.role).toBeUndefined()
    })

    test('a single layer matrix becomes the grid: rowgroup, rows and gridcells, with its size', () => {
      const grid = navigableGrid(buildMatrix({ x: 3, y: 2, z: 1 }))
      expect(grid.attributes).toMatchObject({ className: 'matrix', role: 'grid', 'aria-rowcount': 2, 'aria-colcount': 3 })
      expect(grid.children[0].attributes.role).toBe('rowgroup')
      expect(grid.children[0].children[1].attributes.role).toBe('row')
      expect(cell(grid, 2, 1).attributes.role).toBe('gridcell')
    })

    test('a matrix of several layers becomes a group of labelled grids', () => {
      const grid = navigableGrid(buildMatrix({ x: 2, y: 3, z: 2 }))
      expect(grid.attributes.role).toBe('group')
      expect(grid.attributes['aria-rowcount']).toBeUndefined()
      expect(grid.children[1].attributes).toMatchObject({ role: 'grid', 'aria-rowcount': 3, 'aria-colcount': 2, 'aria-label': 'Layer 2' })
      expect(grid.children[1].children[0].attributes.role).toBe('row')
      expect(cell(grid, 0, 0, 1).attributes.role).toBe('gridcell')
    })

    test('attributes from the props are kept: the grid name, and a replaced role', () => {
      const grid = navigableGrid(square({ matrix: { attributes: { 'aria-label': 'Your board' } }, x: { attributes: { role: 'button' } } }, 2))
      expect(grid.attributes).toMatchObject({ role: 'grid', 'aria-label': 'Your board', className: 'matrix' })
      expect(cell(grid, 0, 0).attributes.role).toBe('button')
    })

    test('the roles are on the rendered elements', () => {
      const grid = live(square({}, 2))
      expect(grid.element.getAttribute('role')).toBe('grid')
      expect(grid.element.getAttribute('aria-rowcount')).toBe('2')
      expect(cell(grid, 1, 1).element.getAttribute('role')).toBe('gridcell')
    })
  })
})
