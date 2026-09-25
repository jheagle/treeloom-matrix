# matrix-DOM

Use JSON-DOM to generate grids that can be rendered in the DOM.

## Modules

<dl>
<dt><a href="#module_matrixDom">matrixDom</a></dt>
<dd><p>All of the Matrix DOM functions and objects necessary to create DOM Matrices</p>
</dd>
</dl>

## Members

<dl>
<dt><a href="#hasTrait">hasTrait</a></dt>
<dd><p>The typed version of json-dom&#39;s hasTrait, it narrows an item to the trait it was checked for.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#testIntervalFits">testIntervalFits(matrix, interval, maxRanges)</a></dt>
<dd><p>Check each axis of the matrix to see if a length interval would fit within.</p>
</dd>
<dt><a href="#randomStart">randomStart(matrix, length, dir, maxRanges)</a></dt>
<dd><p>Generate a random starting point for a line with the provided length and direction.</p>
</dd>
<dt><a href="#randPoint">randPoint(matrix, maxRanges)</a></dt>
<dd><p>Get random point within a matrix</p>
</dd>
<dt><a href="#randDirectionWithInterval">randDirectionWithInterval(matrix, start, interval, maxRanges)</a></dt>
<dd><p>Get random direction point.
NOTE: It is possible that the direction is 0,0,0 indicating no move.</p>
</dd>
<dt><a href="#randDirection">randDirection(matrix, start, maxRanges)</a></dt>
<dd><p>Get random direction point.
NOTE: It is possible that the direction is 0,0,0 indicating no move.</p>
</dd>
<dt><a href="#sortAxisCoordinates">sortAxisCoordinates(pnt, direction)</a></dt>
<dd><p>Take a point and sort the coordinates, return an array of them sorted.</p>
</dd>
<dt><a href="#prevCell">prevCell(pnt, dir)</a></dt>
<dd><p>Based on provided point and point direction generate previous point.</p>
</dd>
<dt><a href="#pointDifference">pointDifference(start, end)</a></dt>
<dd><p>Based on provided point and another point, get a point with the difference between each axis</p>
</dd>
<dt><a href="#point">point(x, y, z)</a></dt>
<dd><p>Store the point data for an x, y, z Matrix.</p>
</dd>
<dt><a href="#nextCell">nextCell(pnt, dir)</a></dt>
<dd><p>Based on provided point and point direction generate next point.</p>
</dd>
<dt><a href="#getHighestAbsoluteCoordinate">getHighestAbsoluteCoordinate(pnt)</a></dt>
<dd><p>Return the first coordinate number with the highest absolute value.</p>
</dd>
<dt><a href="#getFirstAxisOfCoordinate">getFirstAxisOfCoordinate(pnt, coordinate)</a> ⇒</dt>
<dd><p>Having provided a coordinate number, find all corresponding axis, return the first match.</p>
</dd>
<dt><a href="#getAbsolutePoint">getAbsolutePoint(pnt)</a></dt>
<dd><p>Return the point with absolute coordinates.</p>
</dd>
<dt><a href="#direction">direction(x, y, z)</a></dt>
<dd><p>Create a direction object having x, y, z properties and next/prev methods</p>
</dd>
<dt><a href="#areEqualPoints">areEqualPoints(p1, p2)</a></dt>
<dd><p>Given two points, compare the x, y, and z of each to see if they are the same</p>
</dd>
<dt><a href="#getPointFromElement">getPointFromElement(elem)</a></dt>
<dd><p>Retrieve the point associated with the provided element.</p>
</dd>
<dt><a href="#getPointFromDomItem">getPointFromDomItem(domItem, useIfExists)</a></dt>
<dd><p>Retrieve the point associated with the provided DomItem.</p>
</dd>
<dt><a href="#getDomItemFromPoint">getDomItemFromPoint(pnt, matrix)</a> ⇒</dt>
<dd><p>Retrieve the DomItem associated with the provided point</p>
</dd>
<dt><a href="#getDomItemFromElement">getDomItemFromElement(elem, matrix)</a> ⇒</dt>
<dd><p>Retrieve the DomItem associated with the provided element in the matrix</p>
</dd>
<dt><a href="#testPointsBetween">testPointsBetween(start, end, matrix, func, inclusive)</a></dt>
<dd><p>Given a start and end point, test the points between with the provided function. Return the points as part of true
and / or false properties based on the test.</p>
</dd>
<dt><a href="#pointsToStep">pointsToStep(start, end)</a> ⇒</dt>
<dd><p>Find the lowest common ratio of the difference between the coordinates of two points.</p>
</dd>
<dt><a href="#lineEndPoint">lineEndPoint(start, length, dir)</a></dt>
<dd><p>Given a start point, line length, and a direction, generate the end point of the line.</p>
</dd>
<dt><a href="#getPointsForLines">getPointsForLines(lines)</a> ⇒</dt>
<dd><p>Takes an array of arrays containing two points each. Calls getPointsLine for each array of points. Returns an
array of all points captured for each line segment</p>
</dd>
<dt><a href="#getLineTransitionPoints">getLineTransitionPoints(start, end, line, transitions)</a></dt>
<dd><p>Having provided two points, return an array of transition points connecting &#39;start&#39; and &#39;end&#39;. Return array
includes &#39;start&#39; (line[0]) and &#39;end&#39; (line[line.length-1])</p>
</dd>
<dt><a href="#getLineRelativePoints">getLineRelativePoints(start, end, line)</a></dt>
<dd><p>Having provided two points, return an array of integer transition points connecting &#39;start&#39; and &#39;end&#39;.</p>
</dd>
<dt><a href="#getLinePoints">getLinePoints(start, end, type, line)</a> ⇒</dt>
<dd><p>Find the points that a line would cross from &#39;start&#39; to &#39;end&#39; and return the array of points</p>
</dd>
<dt><a href="#nextIntersect">nextIntersect(direction, start, end, line)</a></dt>
<dd><p>Recursively find the next point in a line from &#39;start&#39; to &#39;end&#39; using the provided direction. Return an array of points connecting &#39;start&#39; and &#39;end&#39;.</p>
</dd>
<dt><a href="#getLineIntersectPoints">getLineIntersectPoints(start, end, line)</a></dt>
<dd><p>Having provided two points, return an array of transition points connecting &#39;start&#39; and &#39;end&#39;. Return array
includes &#39;start&#39; (line[0]) and &#39;end&#39; (line[line.length-1]). Line contains only exactly matched points</p>
</dd>
<dt><a href="#checkInBetween">checkInBetween(start, end, matrix, func, inclusive)</a> ⇒</dt>
<dd><p>Given two points, check the cells between using specified function.
When inclusive is set to true the provided start and end points will also be tested</p>
</dd>
<dt><a href="#updateMatrixPoints">updateMatrixPoints(matrix)</a> ⇒</dt>
<dd><p>Update the points for each DomItem in a matrix.</p>
</dd>
<dt><a href="#tile">tile()</a></dt>
<dd><p>A default tile in the Matrix, the point is filled in once the matrix is built (see updateMatrixPoints).</p>
</dd>
<dt><a href="#square">square(props, size)</a></dt>
<dd><p>Return a single layer matrix where x and y are equal</p>
</dd>
<dt><a href="#matrix">matrix(dimensions, props)</a></dt>
<dd><p>Create a 3d matrix of i with x by y by z size, add additional objects for each layer as well</p>
</dd>
<dt><a href="#cube">cube(props, size)</a></dt>
<dd><p>Return a matrix where x, y, and z are equal</p>
</dd>
<dt><a href="#buildMatrix">buildMatrix(dimensions, props)</a></dt>
<dd><p>Create the matrix and assign the correct points to each tile.</p>
</dd>
<dt><a href="#getMatrixRange">getMatrixRange(matrix)</a> ⇒</dt>
<dd><p>Get the lowest and highest points in the matrix as the range.</p>
</dd>
<dt><a href="#getCoordinateRanges">getCoordinateRanges(minPoint, maxPoint, maxRanges)</a> ⇒</dt>
<dd><p>Using a max an min point, find the ranges for each coordinate.</p>
</dd>
<dt><a href="#getAxisLengths">getAxisLengths(matrix)</a></dt>
<dd><p>Return point-like object with all of the axis lengths.</p>
</dd>
<dt><a href="#getAvailableRanges">getAvailableRanges(matrix, maxRanges)</a> ⇒</dt>
<dd><p>Find the range of the matrix from smallest to largest point.</p>
</dd>
<dt><a href="#getAllPoints">getAllPoints(matrix, allPoints)</a></dt>
<dd><p>Return an array of all the points in the matrix</p>
</dd>
<dt><a href="#checkValidPoint">checkValidPoint(pnt, matrix)</a></dt>
<dd><p>Test if the provided point exists in the matrix.</p>
</dd>
<dt><a href="#adjacentPoints">adjacentPoints(pnt, matrix)</a></dt>
<dd><p>Return all valid points surrounding a provided point</p>
</dd>
<dt><a href="#adjacentEdgePoints">adjacentEdgePoints(pnt, matrix)</a></dt>
<dd><p>Return all points which touch on edges (not diagonal)</p>
</dd>
</dl>

<a name="module_matrixDom"></a>

## matrixDom
All of the Matrix DOM functions and objects necessary to create DOM Matrices

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [matrixDom](#module_matrixDom)
    * [~root](#module_matrixDom..root)
    * [~previousMatrixDom](#module_matrixDom..previousMatrixDom)
    * [~matrixDom](#module_matrixDom..matrixDom)

<a name="module_matrixDom..root"></a>

### matrixDom~root
Store a reference to the global scope which will be Window if rendered via browser

**Kind**: inner constant of [<code>matrixDom</code>](#module_matrixDom)  
<a name="module_matrixDom..previousMatrixDom"></a>

### matrixDom~previousMatrixDom
Store reference to any pre-existing module of the same name

**Kind**: inner constant of [<code>matrixDom</code>](#module_matrixDom)  
<a name="module_matrixDom..matrixDom"></a>

### matrixDom~matrixDom
All the functions of matrix-dom.

**Kind**: inner constant of [<code>matrixDom</code>](#module_matrixDom)  
<a name="hasTrait"></a>

## hasTrait
The typed version of json-dom's hasTrait, it narrows an item to the trait it was checked for.

**Kind**: global variable  
<a name="testIntervalFits"></a>

## testIntervalFits(matrix, interval, maxRanges)
Check each axis of the matrix to see if a length interval would fit within.

**Kind**: global function  

| Param | Default | Description |
| --- | --- | --- |
| matrix |  | The matrix that the point will be contained within. |
| interval | <code></code> | An interval where a line would intersect in the direction, null for unspecified |
| maxRanges | <code></code> | The maximum ranges for the point. If null, the matrix will be used. |

<a name="randomStart"></a>

## randomStart(matrix, length, dir, maxRanges)
Generate a random starting point for a line with the provided length and direction.

**Kind**: global function  

| Param | Default | Description |
| --- | --- | --- |
| matrix |  | The matrix in which the line will be drawn. |
| length | <code></code> | The intended length (intersected tiles) of the resulting line, null will use a random length within the matrix |
| dir | <code></code> | The direction the line will extend towards, null will use a random direction within the matrix |
| maxRanges | <code></code> | The maximum ranges for the point. If null, the matrix will be used. |

<a name="randPoint"></a>

## randPoint(matrix, maxRanges)
Get random point within a matrix

**Kind**: global function  

| Param | Default | Description |
| --- | --- | --- |
| matrix |  | The matrix that the point will be contained within. |
| maxRanges | <code></code> | The maximum ranges for the point. If null, the matrix will be used. |

<a name="randDirectionWithInterval"></a>

## randDirectionWithInterval(matrix, start, interval, maxRanges)
Get random direction point.
NOTE: It is possible that the direction is 0,0,0 indicating no move.

**Kind**: global function  

| Param | Default | Description |
| --- | --- | --- |
| matrix |  | The matrix that the point will be contained within. |
| start | <code></code> | The point the direction will start from, null for random |
| interval | <code></code> | An interval where a line would intersect in the direction, null for random |
| maxRanges | <code></code> | The maximum ranges for the point. If null, the matrix will be used. |

<a name="randDirection"></a>

## randDirection(matrix, start, maxRanges)
Get random direction point.
NOTE: It is possible that the direction is 0,0,0 indicating no move.

**Kind**: global function  

| Param | Default | Description |
| --- | --- | --- |
| matrix |  | The matrix that the point will be contained within. |
| start | <code></code> | The point the direction will start from, null for random |
| maxRanges | <code></code> | The maximum ranges for the point. If null, the matrix will be used. |

<a name="sortAxisCoordinates"></a>

## sortAxisCoordinates(pnt, direction)
Take a point and sort the coordinates, return an array of them sorted.

**Kind**: global function  

| Param | Default | Description |
| --- | --- | --- |
| pnt |  | the Point to be sorted |
| direction | <code>desc</code> | 'asc'|'desc' |

<a name="prevCell"></a>

## prevCell(pnt, dir)
Based on provided point and point direction generate previous point.

**Kind**: global function  

| Param | Description |
| --- | --- |
| pnt | Provide the current / initial point |
| dir | Provide the direction to be applied to find the previous point |

<a name="pointDifference"></a>

## pointDifference(start, end)
Based on provided point and another point, get a point with the difference between each axis

**Kind**: global function  

| Param | Description |
| --- | --- |
| start | The first point to compare |
| end | The other point to be compared |

<a name="point"></a>

## point(x, y, z)
Store the point data for an x, y, z Matrix.

**Kind**: global function  

| Param | Default | Description |
| --- | --- | --- |
| x |  | The numeric value for X-coordinate |
| y |  | The numeric value for Y-coordinate |
| z | <code>0</code> | The numeric value for Z-coordinate (default to 0 for 2D Matrix) |

<a name="nextCell"></a>

## nextCell(pnt, dir)
Based on provided point and point direction generate next point.

**Kind**: global function  

| Param | Description |
| --- | --- |
| pnt | Provide the current / initial point |
| dir | Provide the direction to be applied to find the next point |

<a name="getHighestAbsoluteCoordinate"></a>

## getHighestAbsoluteCoordinate(pnt)
Return the first coordinate number with the highest absolute value.

**Kind**: global function  

| Param | Description |
| --- | --- |
| pnt | A Point to be assessed. |

<a name="getFirstAxisOfCoordinate"></a>

## getFirstAxisOfCoordinate(pnt, coordinate) ⇒
Having provided a coordinate number, find all corresponding axis, return the first match.

**Kind**: global function  
**Returns**: The first matching axis, or false when no axis matches  

| Param | Description |
| --- | --- |
| pnt | The Point containing a matching coordinate. |
| coordinate | The coordinate to search for. |

<a name="getAbsolutePoint"></a>

## getAbsolutePoint(pnt)
Return the point with absolute coordinates.

**Kind**: global function  

| Param | Description |
| --- | --- |
| pnt | A Point to have coordinates switched to absolute units. |

<a name="direction"></a>

## direction(x, y, z)
Create a direction object having x, y, z properties and next/prev methods

**Kind**: global function  

| Param | Default | Description |
| --- | --- | --- |
| x |  | The x difference along the line |
| y |  | The y difference along the line |
| z | <code>0</code> | The z difference along the line |

<a name="areEqualPoints"></a>

## areEqualPoints(p1, p2)
Given two points, compare the x, y, and z of each to see if they are the same

**Kind**: global function  

| Param | Description |
| --- | --- |
| p1 | The first point to compare |
| p2 | The other point to be compared |

<a name="getPointFromElement"></a>

## getPointFromElement(elem)
Retrieve the point associated with the provided element.

**Kind**: global function  

| Param | Description |
| --- | --- |
| elem | Provide an element associated with a point. |

<a name="getPointFromDomItem"></a>

## getPointFromDomItem(domItem, useIfExists)
Retrieve the point associated with the provided DomItem.

**Kind**: global function  

| Param | Default | Description |
| --- | --- | --- |
| domItem |  | Provide a DomItem (a column) associated with a point. |
| useIfExists | <code>true</code> | Whether to use the existing point if it exists. |

<a name="getDomItemFromPoint"></a>

## getDomItemFromPoint(pnt, matrix) ⇒
Retrieve the DomItem associated with the provided point

**Kind**: global function  
**Returns**: The DomItem (a column), or false when the point is not in the matrix  

| Param | Description |
| --- | --- |
| pnt | A point corresponding to a DomItem. |
| matrix | The matrix containing the point. |

<a name="getDomItemFromElement"></a>

## getDomItemFromElement(elem, matrix) ⇒
Retrieve the DomItem associated with the provided element in the matrix

**Kind**: global function  
**Returns**: The DomItem (a column), or false when the element is not in the matrix  

| Param | Description |
| --- | --- |
| elem | Provide an element having an associated DomItem. |
| matrix | The matrix potentially containing the DomItem with Point. |

<a name="testPointsBetween"></a>

## testPointsBetween(start, end, matrix, func, inclusive)
Given a start and end point, test the points between with the provided function. Return the points as part of true
and / or false properties based on the test.

**Kind**: global function  

| Param | Default | Description |
| --- | --- | --- |
| start |  | The beginning point to check. |
| end |  | The terminating point to check between. |
| matrix |  | The grid of points all the points can exist on. |
| func |  | The test function which will return true or false. |
| inclusive | <code>true</code> | Choose whether to include or exclude the start and end points in the results. |

<a name="pointsToStep"></a>

## pointsToStep(start, end) ⇒
Find the lowest common ratio of the difference between the coordinates of two points.

**Kind**: global function  
**Returns**: A Direction, or just the point 0, 0, 0 when both points are the same  

| Param | Description |
| --- | --- |
| start | The first point to assess. |
| end | The other point to assess. |

<a name="lineEndPoint"></a>

## lineEndPoint(start, length, dir)
Given a start point, line length, and a direction, generate the end point of the line.

**Kind**: global function  

| Param | Description |
| --- | --- |
| start | The selected starting point. |
| length | The total length of the line. |
| dir | The direction of the line. |

<a name="getPointsForLines"></a>

## getPointsForLines(lines) ⇒
Takes an array of arrays containing two points each. Calls getPointsLine for each array of points. Returns an
array of all points captured for each line segment

**Kind**: global function  
**Returns**: All the points of all the lines in one array  

| Param | Description |
| --- | --- |
| lines | An array of line segments, each is the arguments for getLinePoints (start, end, and optionally the type). |

<a name="getLineTransitionPoints"></a>

## getLineTransitionPoints(start, end, line, transitions)
Having provided two points, return an array of transition points connecting 'start' and 'end'. Return array
includes 'start' (line[0]) and 'end' (line[line.length-1])

**Kind**: global function  

| Param | Default | Description |
| --- | --- | --- |
| start |  | The starting location of the line. |
| end |  | The final line destination. |
| line |  | The resulting line to connect start and end. |
| transitions | <code></code> | specify the desired number of transitions, resulting points will be transitions+1 (defaults to the largest absolute difference between the points). |

<a name="getLineRelativePoints"></a>

## getLineRelativePoints(start, end, line)
Having provided two points, return an array of integer transition points connecting 'start' and 'end'.

**Kind**: global function  

| Param | Description |
| --- | --- |
| start | The starting location of the line. |
| end | The final line destination. |
| line | The resulting line to connect start and end. |

<a name="getLinePoints"></a>

## getLinePoints(start, end, type, line) ⇒
Find the points that a line would cross from 'start' to 'end' and return the array of points

**Kind**: global function  
**Returns**: The points connecting start and end  

| Param | Default | Description |
| --- | --- | --- |
| start |  | The starting location of the line. |
| end |  | The final line destination. |
| type | <code>relative</code> | select the method used for finding the points: 'relative'|'intersect'|'transition' |
| line |  | The points found so far, the resulting points are added to it. |

<a name="nextIntersect"></a>

## nextIntersect(direction, start, end, line)
Recursively find the next point in a line from 'start' to 'end' using the provided direction. Return an array of points connecting 'start' and 'end'.

**Kind**: global function  

| Param | Description |
| --- | --- |
| direction | The step from each point to the next |
| start | The point to add to the line, then continue from |
| end | The final line destination |
| line | The points found so far |

<a name="getLineIntersectPoints"></a>

## getLineIntersectPoints(start, end, line)
Having provided two points, return an array of transition points connecting 'start' and 'end'. Return array
includes 'start' (line[0]) and 'end' (line[line.length-1]). Line contains only exactly matched points

**Kind**: global function  

| Param | Description |
| --- | --- |
| start | The starting location of the line. |
| end | The final line destination. |
| line | The resulting line to connect start and end. |

<a name="checkInBetween"></a>

## checkInBetween(start, end, matrix, func, inclusive) ⇒
Given two points, check the cells between using specified function.
When inclusive is set to true the provided start and end points will also be tested

**Kind**: global function  
**Returns**: Whether at least one of the points passed the test  

| Param | Default | Description |
| --- | --- | --- |
| start |  | The beginning point to check. |
| end |  | The terminating point to check between. |
| matrix |  | The grid of points all the points can exist on. |
| func |  | The test function which will return true or false. |
| inclusive | <code>true</code> | Choose whether to include or exclude the start and end points in the results. |

<a name="updateMatrixPoints"></a>

## updateMatrixPoints(matrix) ⇒
Update the points for each DomItem in a matrix.

**Kind**: global function  
**Returns**: The same matrix, with the point of each column updated  

| Param | Description |
| --- | --- |
| matrix | Provide a matrix to update the points for. |

<a name="tile"></a>

## tile()
A default tile in the Matrix, the point is filled in once the matrix is built (see updateMatrixPoints).

**Kind**: global function  
<a name="square"></a>

## square(props, size)
Return a single layer matrix where x and y are equal

**Kind**: global function  

| Param | Description |
| --- | --- |
| props | Additional data to append to each level: x for each column (the tile data), y for each row, z for each layer and matrix for the matrix itself. Each is a single configuration object, not an array. |
| size | Used to define the width and height as equal values (depth is set to 1) |

<a name="matrix"></a>

## matrix(dimensions, props)
Create a 3d matrix of i with x by y by z size, add additional objects for each layer as well

**Kind**: global function  

| Param | Description |
| --- | --- |
| dimensions | The dimensions of the matrix to be created (x is the width, y the height, z the depth) |
| props | Additional properties to be added to each level of the matrix |

<a name="cube"></a>

## cube(props, size)
Return a matrix where x, y, and z are equal

**Kind**: global function  

| Param | Description |
| --- | --- |
| props | Additional data to append to each level: x for each column (the tile data), y for each row, z for each layer and matrix for the matrix itself. Each is a single configuration object, not an array. |
| size | Used to define the width, height and depth as equal values |

<a name="buildMatrix"></a>

## buildMatrix(dimensions, props)
Create the matrix and assign the correct points to each tile.

**Kind**: global function  

| Param | Description |
| --- | --- |
| dimensions | The dimensions of the matrix to be created (x is the width, y the height, z the depth) |
| props | Additional properties to be added to each level of the matrix |

<a name="getMatrixRange"></a>

## getMatrixRange(matrix) ⇒
Get the lowest and highest points in the matrix as the range.

**Kind**: global function  
**Returns**: The lowest point followed by the highest point (empty when the matrix has no points)  

| Param | Description |
| --- | --- |
| matrix | The matrix to find the range of. |

<a name="getCoordinateRanges"></a>

## getCoordinateRanges(minPoint, maxPoint, maxRanges) ⇒
Using a max an min point, find the ranges for each coordinate.

**Kind**: global function  
**Returns**: The number of available coordinates on each axis  

| Param | Default | Description |
| --- | --- | --- |
| minPoint |  | The smallest point in the matrix |
| maxPoint |  | The largest point in the matrix |
| maxRanges | <code></code> | The maximum ranges for the point. If null, the matrix will be used. |

<a name="getAxisLengths"></a>

## getAxisLengths(matrix)
Return point-like object with all of the axis lengths.

**Kind**: global function  

| Param | Description |
| --- | --- |
| matrix | The matrix to get the dimensions of. |

<a name="getAvailableRanges"></a>

## getAvailableRanges(matrix, maxRanges) ⇒
Find the range of the matrix from smallest to largest point.

**Kind**: global function  
**Returns**: The number of available coordinates on each axis  

| Param | Default | Description |
| --- | --- | --- |
| matrix |  | The matrix that the point will be contained within. |
| maxRanges | <code></code> | The maximum ranges for the point. If null, the matrix will be used. |

<a name="getAllPoints"></a>

## getAllPoints(matrix, allPoints)
Return an array of all the points in the matrix

**Kind**: global function  

| Param | Description |
| --- | --- |
| matrix | The matrix (or any level of it) to retrieve points from. |
| allPoints | The array of points to add the found points to. |

<a name="checkValidPoint"></a>

## checkValidPoint(pnt, matrix)
Test if the provided point exists in the matrix.

**Kind**: global function  

| Param | Description |
| --- | --- |
| pnt | Provide a point to validate. |
| matrix | The matrix that contains valid points. |

<a name="adjacentPoints"></a>

## adjacentPoints(pnt, matrix)
Return all valid points surrounding a provided point

**Kind**: global function  

| Param | Description |
| --- | --- |
| pnt | The point we want to find adjacent points for. |
| matrix | The matrix having the point. |

<a name="adjacentEdgePoints"></a>

## adjacentEdgePoints(pnt, matrix)
Return all points which touch on edges (not diagonal)

**Kind**: global function  

| Param | Description |
| --- | --- |
| pnt | The point we want to find adjacent points for. |
| matrix | The matrix having the point. |

