# treeloom-matrix

Use treeloom to generate grids that can be rendered in the DOM.

A **matrix** is a [treeloom](https://github.com/jheagle/treeloom) tree of layers, rows and columns. Every column holds a
tile which knows its point, so you can render the grid, put your own data on its tiles, and work with points, lines and
random placements on it.

## Install

treeloom-matrix is not on npm yet, install it from GitHub. treeloom is a **peer dependency** (the matrix is a treeloom
tree and its traits are registered with treeloom, so there must be exactly one copy of treeloom), so install that too:

```shell
npm install treeloom github:jheagle/treeloom-matrix
```

It is written in TypeScript and ships its types.

## Example

```js
const treeloomMatrix = require('treeloom-matrix')
const treeloom = require('treeloom')

const grid = treeloomMatrix.square({}, 5)              // one layer of 5 by 5 columns
const start = treeloomMatrix.point(0, 1)               // z defaults to 0
const end = treeloomMatrix.lineEndPoint(start, 3, treeloomMatrix.direction(1, 0)) // a line 3 long, going along x
const line = treeloomMatrix.getLinePoints(start, end)  // (0,1,0), (1,1,0), (2,1,0)

const tiles = line.map(pnt => treeloomMatrix.getDomItemFromPoint(pnt, grid))
tiles.forEach(tile => { tile.hasShip = true })         // the tile is a treeloom item: put your own data on it

treeloomMatrix.getPointFromDomItem(tiles[2])           // { x: 2, y: 1, z: 0 }
treeloomMatrix.adjacentEdgePoints(end, grid)           // the 4 valid points touching (2,1,0)
treeloomMatrix.randomStart(grid, 3)                    // a random start for a line of 3 which fits in the grid

treeloom.renderHtml(grid)                              // <div class="matrix"><div class="layer">...
```

## Accessibility

`navigableGrid` turns a matrix into an ARIA grid, so screen readers announce its rows and cells (a matrix rendered
without it has no roles): a single layer matrix gets `role="grid"` (and `aria-rowcount` / `aria-colcount`), its layer a
`rowgroup`, each row a `row` and each column a `gridcell`. A matrix of several layers becomes a `group` of grids, one per
layer, labelled "Layer 1", "Layer 2", ... Give the grid a name, and replace any default, with attributes in the props:

```js
const board = treeloomMatrix.square({ matrix: { attributes: { 'aria-label': 'Your board' } } }, 10)
```

It also makes the grid keyboard navigable, following the ARIA grid pattern: the grid is one Tab stop (the first cell,
then whichever cell was used last), the arrow keys move between cells, Home / End go to the start / end of the row,
Ctrl+Home / Ctrl+End to the first / last cell, Page Up / Page Down change layer, and Enter or Space clicks the focused
cell, so a click listener on the matrix handles the keyboard too. Call it before rendering:

```js
treeloom.renderHtml(treeloomMatrix.navigableGrid(board))
```

The cells take the focus themselves, so put the click listener on the matrix (or the cells), not on buttons inside them.

## Documentation

The reference for every function and type is in [`docs/`](docs/index.html) (open `docs/index.html` in a browser). It is
generated from the TypeScript source, and each module is a folder of `src/`:

| Module | What it does |
| --- | --- |
| `point` | Points and directions, and the maths on them |
| `line` | The points a line passes through, and testing the points along it |
| `grid` | Build the matrix itself and give its columns their points |
| `bounds` | Measure a matrix, check a point is valid, find the points around a point |
| `lookup` | Move between the points, the items and the elements of a matrix |
| `random` | Random points and directions, to place a line of a given length |

## Development

```shell
npm install
npm test          # the tests
npm run typecheck # the types, and the type tests
npm run build     # dist/, browser/ and docs/
npm run docs      # only the documentation
```

## License

[Mozilla Public License 2.0](https://mozilla.org/MPL/2.0/) (MPL-2.0), see [LICENSE](LICENSE). In short: changes to this library's own files are shared under the same license; apps that use it can be licensed however you like.
