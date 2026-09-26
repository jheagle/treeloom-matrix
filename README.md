# matrix-DOM

Use JSON-DOM to generate grids that can be rendered in the DOM.

A **matrix** is a [json-dom](https://github.com/jheagle/JSON-DOM) tree of layers, rows and columns. Every column holds a
tile which knows its point, so you can render the grid, put your own data on its tiles, and work with points, lines and
random placements on it.

## Install

matrix-dom is not published to npm, install it from GitHub. json-dom is a **peer dependency** (the matrix is a json-dom
tree and its traits are registered with json-dom, so there must be exactly one copy of json-dom), so install that too:

```shell
npm install github:jheagle/JSON-DOM github:jheagle/matrix-DOM
```

It is written in TypeScript and ships its types.

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
