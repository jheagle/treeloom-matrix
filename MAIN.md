# matrix-DOM

Use JSON-DOM to generate grids that can be rendered in the DOM.

A **matrix** is a [json-dom](https://github.com/jheagle/JSON-DOM) tree of four levels: the matrix, its **layers** (the z
axis), each layer's **rows** (y) and each row's **columns** (x). Every column is a json-dom item which holds a **tile**,
and the tile knows its `point`. Because it is a json-dom tree, a matrix renders to real elements like any other, and you
can keep your own data on the tiles (a ship on a cell, a piece on a square).

The four levels are json-dom **traits**: `matrix.matrix`, `matrix.layer`, `matrix.row` and `matrix.column`. In TypeScript,
`hasTrait(item, 'matrix.row')` narrows an item to a `MatrixRow`, and the levels are typed all the way down to the tile.

## The modules

Each module of the documentation is a folder of the source:

* `point`: points and directions, and the maths on them (compare, step to the next point).
* `line`: the points a line passes through, and testing the points along it.
* `grid`: build the matrix itself (`square`, `cube`, `matrix`) and give its columns their points.
* `bounds`: measure a matrix, check a point is valid in it, and find the points around a point.
* `lookup`: move between the points, the items and the elements of a matrix.
* `random`: random points and directions, for example to place a line of a given length.

## Example

```js
const matrixDom = require('matrix-dom').default
const jsonDom = require('json-dom').default

const grid = matrixDom.square({}, 5)                  // one layer of 5 by 5 columns
const start = matrixDom.point(0, 1)                    // z defaults to 0
const end = matrixDom.lineEndPoint(start, 3, matrixDom.direction(1, 0)) // a line 3 long, going along x
const line = matrixDom.getLinePoints(start, end)       // (0,1,0), (1,1,0), (2,1,0)

const tiles = line.map(pnt => matrixDom.getDomItemFromPoint(pnt, grid))
tiles.forEach(tile => { tile.hasShip = true })         // the tile is a json-dom item: put your own data on it

matrixDom.getPointFromDomItem(tiles[2])                // { x: 2, y: 1, z: 0 }
matrixDom.adjacentEdgePoints(end, grid)                // the 4 valid points touching (2,1,0)
matrixDom.randomStart(grid, 3)                         // a random start for a line of 3 which fits in the grid

jsonDom.renderHtml(grid)                               // <div class="matrix"><div class="layer">...
```

## Accessibility

A matrix is an ARIA grid, so screen readers announce its rows and cells: a single layer matrix renders with
`role="grid"` (and `aria-rowcount` / `aria-colcount`), its layer a `rowgroup`, each row a `row` and each column a
`gridcell`. A matrix of several layers is a `group` of grids, one per layer, labelled "Layer 1", "Layer 2", ... Give
the grid a name, and replace any default, with attributes in the props:

```js
const board = matrixDom.square({ matrix: { attributes: { 'aria-label': 'Your board' } } }, 10)
```

`navigableGrid` makes it keyboard navigable, following the ARIA grid pattern: the grid is one Tab stop (the first cell,
then whichever cell was used last), the arrow keys move between cells, Home / End go to the start / end of the row,
Ctrl+Home / Ctrl+End to the first / last cell, Page Up / Page Down change layer, and Enter or Space clicks the focused
cell, so a click listener on the matrix handles the keyboard too. Call it before rendering:

```js
jsonDom.renderHtml(matrixDom.navigableGrid(board))
```

The cells take the focus themselves, so put the click listener on the matrix (or the cells), not on buttons inside them.
