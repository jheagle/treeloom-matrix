import type { DomItem } from 'treeloom/dist/domItem/types';
import type { EventProxy } from 'treeloom/dist/events/types';
import { Point } from '../point/types';
import { Matrix } from './types';
/**
 * The keydown listener on the matrix: moves focus between cells, and activates the focused cell on Enter or Space
 * by clicking it (so the cell's existing click listeners handle the keyboard too).
 * @param event - The keydown event
 * @param target - The matrix the listener is attached to
 */
export declare const gridKeydown: (event: EventProxy | Event, target: DomItem) => void;
/**
 * The focusin listener on the matrix: whichever cell gets focus (by keyboard or by clicking it) becomes the Tab
 * stop, so Tab returns to the last cell used.
 * @param event - The focusin event
 * @param target - The matrix the listener is attached to
 */
export declare const gridFocusin: (event: EventProxy | Event, target: DomItem) => void;
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
declare const navigableGrid: (matrix: Matrix, start?: Point) => Matrix;
export default navigableGrid;
