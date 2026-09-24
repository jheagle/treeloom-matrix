# matrix-DOM

Use JSON-DOM to generate grids that can be rendered in the DOM.

## Modules

<dl>
<dt><a href="#module_matrixDom">matrixDom</a></dt>
<dd><p>All of the Matrix DOM functions and objects necessary to create DOM Matrices</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#testIntervalFits">testIntervalFits(matrix, [interval], [maxRanges])</a> ⇒ <code>module:matrixObjects~IntervalFits</code></dt>
<dd><p>Check each axis of the matrix to see if a length interval would fit within.</p>
</dd>
<dt><a href="#randomStart">randomStart(matrix, [length], [dir], maxRanges)</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Generate a random starting point for a line with the provided length and direction.</p>
</dd>
<dt><a href="#randPoint">randPoint(matrix, maxRanges)</a> ⇒ <code><a href="#module_matrixObjects..Direction">Direction</a></code></dt>
<dd><p>Get random point within a matrix</p>
</dd>
<dt><a href="#randDirectionWithInterval">randDirectionWithInterval(matrix, [start], [interval], [maxRanges])</a> ⇒ <code><a href="#module_matrixObjects..Direction">Direction</a></code></dt>
<dd><p>Get random direction point.
NOTE: It is possible that the direction is 0,0,0 indicating no move.</p>
</dd>
<dt><a href="#randDirection">randDirection(matrix, [start], [maxRanges])</a> ⇒ <code><a href="#module_matrixObjects..Direction">Direction</a></code></dt>
<dd><p>Get random direction point.
NOTE: It is possible that the direction is 0,0,0 indicating no move.</p>
</dd>
<dt><a href="#sortAxisCoordinates">sortAxisCoordinates(pnt, direction)</a> ⇒ <code><a href="#module_matrixObjects..axisCoordinatePairs">axisCoordinatePairs</a></code></dt>
<dd><p>Take a point and sort the coordinates, return an array of them sorted.</p>
</dd>
<dt><a href="#prevCell">prevCell(pnt, dir)</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Based on provided point and point direction generate previous point.</p>
</dd>
<dt><a href="#pointDifference">pointDifference(start, end)</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Based on provided point and another point, get a point with the difference between each axis</p>
</dd>
<dt><a href="#point">point(x, y, [z])</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Store the point data for an x, y, z <a href="#module_matrixObjects..Matrix">Matrix</a>.</p>
</dd>
<dt><a href="#nextCell">nextCell(pnt, dir)</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Based on provided point and point direction generate next point.</p>
</dd>
<dt><a href="#getHighestAbsoluteCoordinate">getHighestAbsoluteCoordinate(pnt)</a> ⇒ <code><a href="#module_matrixObjects..coordinate">coordinate</a></code></dt>
<dd><p>Return the first coordinate number with the highest absolute value.</p>
</dd>
<dt><a href="#getFirstAxisOfCoordinate">getFirstAxisOfCoordinate(pnt, coordinate)</a> ⇒ <code>false</code> | <code><a href="#module_matrixObjects..axis">axis</a></code></dt>
<dd><p>Having provided a coordinate number, find all corresponding axis, return the first match.</p>
</dd>
<dt><a href="#getAbsolutePoint">getAbsolutePoint(pnt)</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Return the point with absolute coordinates.</p>
</dd>
<dt><a href="#prev - Get the previous point in the direction from a starting point">prev - Get the previous point in the direction from a starting point()</a> : <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Direction represents the delta from on point to another and indicactes the direction of travel.</p>
</dd>
<dt><a href="#direction">direction(x, y, z)</a> ⇒ <code><a href="#module_matrixObjects..Direction">Direction</a></code></dt>
<dd><p>Create a direction object having x, y, z properties and next/prev methods</p>
</dd>
<dt><a href="#areEqualPoints">areEqualPoints(p1, p2)</a> ⇒ <code>boolean</code></dt>
<dd><p>Given two points, compare the x, y, and z of each to see if they are the same</p>
</dd>
<dt><a href="#alterCoordinates">alterCoordinates(pnt, fn)</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Alter the coordinates of a point using a function</p>
</dd>
<dt><a href="#getPointFromElement">getPointFromElement(elem)</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Retrieve the point associated with the provided element.</p>
</dd>
<dt><a href="#getPointFromDomItem">getPointFromDomItem(domItem, useIfExists)</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Retrieve the point associated with the provided DomItem.</p>
</dd>
<dt><a href="#getDomItemFromPoint">getDomItemFromPoint(pnt, matrix)</a> ⇒ <code>false</code> | <code>module:domObjects~DomItem</code></dt>
<dd><p>Retrieve the DomItem associated with the provided point</p>
</dd>
<dt><a href="#getDomItemFromElement">getDomItemFromElement(elem, matrix)</a> ⇒ <code>false</code> | <code>module:domObjects~DomItem</code></dt>
<dd><p>Retrieve the DomItem associated with the provided element in the matrix</p>
</dd>
<dt><a href="#testPointsBetween">testPointsBetween(start, end, matrix, func, [inclusive])</a> ⇒ <code>Object.&lt;string, Array.&lt;module:matrixObjects~Point&gt;&gt;</code></dt>
<dd><p>Given a start and end point, test the points between with the provided function. Return the points as part of true
and / or false properties based on the test.</p>
</dd>
<dt><a href="#pointsToStep">pointsToStep(start, end)</a> ⇒ <code><a href="#module_matrixObjects..Direction">Direction</a></code></dt>
<dd><p>Find the lowest common ratio of the difference between the coordinates of two points.</p>
</dd>
<dt><a href="#lineEndPoint">lineEndPoint(start, length, dir)</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Given a start point, line length, and a direction, generate the end point of the line.</p>
</dd>
<dt><a href="#getPointsForLines">getPointsForLines(lines)</a> ⇒ <code>Array.&lt;Array.&lt;module:matrixObjects~Point&gt;&gt;</code></dt>
<dd><p>Takes an array of arrays containing two points each. Calls getPointsLine for each array of points. Returns an
array of all points captured for each line segment</p>
</dd>
<dt><a href="#getLineTransitionPoints">getLineTransitionPoints(start, end, transistions, [line])</a> ⇒ <code><a href="#module_matrixObjects..Point">Array.&lt;Point&gt;</a></code></dt>
<dd><p>Having provided two points, return an array of transition points connecting &#39;start&#39; and &#39;end&#39;. Return array
includes &#39;start&#39; (line[0]) and &#39;end&#39; (line[line.length-1])</p>
</dd>
<dt><a href="#getLineRelativePoints">getLineRelativePoints(start, end, [line])</a> ⇒ <code><a href="#module_matrixObjects..Point">Array.&lt;Point&gt;</a></code></dt>
<dd><p>Having provided two points, return an array of integer transition points connecting &#39;start&#39; and &#39;end&#39;.</p>
</dd>
<dt><a href="#getLinePoints">getLinePoints(start, end, [type], [lines])</a> ⇒ <code>Array.&lt;Array.&lt;module:matrixObjects~Point&gt;&gt;</code></dt>
<dd><p>Find the points that a line would cross from &#39;start&#39; to &#39;end&#39; and return the array of points</p>
</dd>
<dt><a href="#nextIntersect">nextIntersect(direction, start, end, line)</a> ⇒ <code><a href="#module_matrixObjects..Point">Array.&lt;Point&gt;</a></code></dt>
<dd><p>Recursively find the next point in a line from &#39;start&#39; to &#39;end&#39; using the provided direction. Return an array of points connecting &#39;start&#39; and &#39;end&#39;.</p>
</dd>
<dt><a href="#getLineIntersectPoints">getLineIntersectPoints(start, end, [line])</a> ⇒ <code><a href="#module_matrixObjects..Point">Array.&lt;Point&gt;</a></code></dt>
<dd><p>Having provided two points, return an array of transition points connecting &#39;start&#39; and &#39;end&#39;. Return array
includes &#39;start&#39; (line[0]) and &#39;end&#39; (line[line.length-1]). Line contains only exactly matched points</p>
</dd>
<dt><a href="#checkInBetween">checkInBetween(...args)</a> ⇒ <code>boolean</code></dt>
<dd><p>Given two points, check the cells between using specified function.
When inclusive is set to true the provided start and end points will also be tested</p>
</dd>
<dt><a href="#updateMatrixPoints">updateMatrixPoints(matrix)</a> ⇒ <code><a href="#module_matrixObjects..Matrix">Matrix</a></code></dt>
<dd><p>Update the points for each DomItem in a matrix.</p>
</dd>
<dt><a href="#tile">tile()</a> ⇒ <code><a href="#module_matrixObjects..MatrixTile">MatrixTile</a></code></dt>
<dd><p>A default tile in the <a href="#module_matrixObjects..Matrix">Matrix</a></p>
</dd>
<dt><a href="#square">square([x], [y], [z], [matrix], size)</a> ⇒ <code><a href="#module_matrixObjects..Matrix">Matrix</a></code></dt>
<dd><p>Return a single layer matrix where x and y are equal</p>
</dd>
<dt><a href="#matrix">matrix(dimensions, props)</a> ⇒ <code><a href="#module_matrixObjects..Matrix">Matrix</a></code></dt>
<dd><p>Create a 3d matrix of i with x by y by z size, add additional objects for each layer as well</p>
</dd>
<dt><a href="#cube">cube([x], [y], [z], [matrixProps], size)</a> ⇒ <code><a href="#module_matrixObjects..Matrix">Matrix</a></code></dt>
<dd><p>Return a matrix where x, y, and z are equal</p>
</dd>
<dt><a href="#buildMatrix">buildMatrix(dimensions, props)</a> ⇒ <code><a href="#module_matrixObjects..Matrix">Matrix</a></code></dt>
<dd><p>Create the matrix and assign the correct points to each tile.</p>
</dd>
<dt><a href="#getMatrixRange">getMatrixRange(matrix)</a> ⇒ <code><a href="#module_matrixObjects..Point">Array.&lt;Point&gt;</a></code></dt>
<dd><p>Get the lowest and highest points in the matrix as the range.</p>
</dd>
<dt><a href="#getCoordinateRanges">getCoordinateRanges(minPoint, maxPoint, maxRanges)</a> ⇒ <code><a href="#module_matrixObjects..Direction">Direction</a></code></dt>
<dd><p>Using a max an min point, find the ranges for each coordinate.</p>
</dd>
<dt><a href="#getAxisLengths">getAxisLengths(matrix)</a> ⇒ <code><a href="#module_matrixObjects..Point">Point</a></code></dt>
<dd><p>Return point-like object with all of the axis lengths.</p>
</dd>
<dt><a href="#getAvailableRanges">getAvailableRanges(matrix, maxRanges)</a> ⇒ <code><a href="#module_matrixObjects..Direction">Direction</a></code></dt>
<dd><p>Find the range of the matrix from smallest to largest point.</p>
</dd>
<dt><a href="#getAllPoints">getAllPoints(matrix, [allPoints])</a> ⇒ <code><a href="#module_matrixObjects..Point">Array.&lt;Point&gt;</a></code></dt>
<dd><p>Return an array of all the points in the matrix</p>
</dd>
<dt><a href="#checkValidPoint">checkValidPoint(pnt, matrix)</a> ⇒ <code>boolean</code></dt>
<dd><p>Test if the provided point exists in the matrix.</p>
</dd>
<dt><a href="#adjacentPoints">adjacentPoints(pnt, matrix)</a> ⇒ <code><a href="#module_matrixObjects..Point">Array.&lt;Point&gt;</a></code></dt>
<dd><p>Return all valid points surrounding a provided point</p>
</dd>
<dt><a href="#adjacentEdgePoints">adjacentEdgePoints(pnt, matrix)</a> ⇒ <code><a href="#module_matrixObjects..Point">Array.&lt;Point&gt;</a></code></dt>
<dd><p>Return all points which touch on edges (not diagonal)</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#IntervalFits">IntervalFits</a> : <code>Object</code></dt>
<dd><p>An object that has boolean values for each axis indicating whether the interval fits within the matrix.</p>
</dd>
<dt><a href="#alterCoordinate">alterCoordinate</a> ⇒ <code><a href="#module_matrixObjects..coordinate">coordinate</a></code> | <code>null</code></dt>
<dd></dd>
</dl>

<a name="module_matrixDom"></a>

## matrixDom
All of the Matrix DOM functions and objects necessary to create DOM Matrices

**Version**: 1.0.0  
**Author**: Joshua Heagle <joshuaheagle@gmail.com>  

* [matrixDom](#module_matrixDom)
    * [~root](#module_matrixDom..root)
    * [~previousMatrixDom](#module_matrixDom..previousMatrixDom) : <code>module</code> \| <code>\*</code>
    * [~noConflict()](#module_matrixDom..noConflict) ⇒ [<code>matrixDom</code>](#module_matrixDom..matrixDom) \| <code>module:matrixFunctions</code> \| <code>module:matrixObjects</code>
    * [~matrixDom](#module_matrixDom..matrixDom) : [<code>matrixDom</code>](#module_matrixDom)

<a name="module_matrixDom..root"></a>

### matrixDom~root
Store a reference to this scope which will be Window if rendered via browser

**Kind**: inner constant of [<code>matrixDom</code>](#module_matrixDom)  
<a name="module_matrixDom..previousMatrixDom"></a>

### matrixDom~previousMatrixDom : <code>module</code> \| <code>\*</code>
Store reference to any pre-existing module of the same name

**Kind**: inner constant of [<code>matrixDom</code>](#module_matrixDom)  
<a name="module_matrixDom..noConflict"></a>

### matrixDom~noConflict() ⇒ [<code>matrixDom</code>](#module_matrixDom..matrixDom) \| <code>module:matrixFunctions</code> \| <code>module:matrixObjects</code>
Return a reference to this library while preserving the original same-named library

**Kind**: inner method of [<code>matrixDom</code>](#module_matrixDom)  
<a name="module_matrixDom..matrixDom"></a>

### matrixDom~matrixDom : [<code>matrixDom</code>](#module_matrixDom)
All methods exported from this module are encapsulated within jsonDom.

**Kind**: inner typedef of [<code>matrixDom</code>](#module_matrixDom)  
<a name="testIntervalFits"></a>

## testIntervalFits(matrix, [interval], [maxRanges]) ⇒ <code>module:matrixObjects~IntervalFits</code>
Check each axis of the matrix to see if a length interval would fit within.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) |  | The matrix that the point will be contained within. |
| [interval] | <code>number</code> \| <code>null</code> | <code></code> | An interval where a line would intersect in the direction, null for unspecified |
| [maxRanges] | [<code>Point</code>](#module_matrixObjects..Point) \| <code>null</code> | <code></code> | The maximum ranges for the point. If null, the matrix will be used. |

<a name="randomStart"></a>

## randomStart(matrix, [length], [dir], maxRanges) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Generate a random starting point for a line with the provided length and direction.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) |  | The matrix in which the line will be drawn. |
| [length] | <code>number</code> \| <code>null</code> | <code></code> | The intended length (intersected tiles) of the resulting line, null will use a random length within the matrix |
| [dir] | [<code>Direction</code>](#module_matrixObjects..Direction) \| <code>null</code> | <code></code> | The direction the line will extend towards, null will use a random direction within the matrix |
| maxRanges | [<code>Point</code>](#module_matrixObjects..Point) | <code></code> | The maximum ranges for the point. If null, the matrix will be used. |

<a name="randPoint"></a>

## randPoint(matrix, maxRanges) ⇒ [<code>Direction</code>](#module_matrixObjects..Direction)
Get random point within a matrix

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) |  | The matrix that the point will be contained within. |
| maxRanges | [<code>Point</code>](#module_matrixObjects..Point) \| <code>null</code> | <code></code> | The maximum ranges for the point. If null, the matrix will be used. |

<a name="randDirectionWithInterval"></a>

## randDirectionWithInterval(matrix, [start], [interval], [maxRanges]) ⇒ [<code>Direction</code>](#module_matrixObjects..Direction)
Get random direction point.NOTE: It is possible that the direction is 0,0,0 indicating no move.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) |  | The matrix that the point will be contained within. |
| [start] | [<code>Point</code>](#module_matrixObjects..Point) \| <code>null</code> | <code></code> | The point the direction will start from, null for random |
| [interval] | <code>number</code> \| <code>null</code> | <code></code> | An interval where a line would intersect in the direction, null for random |
| [maxRanges] | [<code>Point</code>](#module_matrixObjects..Point) \| <code>null</code> | <code></code> | The maximum ranges for the point. If null, the matrix will be used. |

<a name="randDirection"></a>

## randDirection(matrix, [start], [maxRanges]) ⇒ [<code>Direction</code>](#module_matrixObjects..Direction)
Get random direction point.NOTE: It is possible that the direction is 0,0,0 indicating no move.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) |  | The matrix that the point will be contained within. |
| [start] | [<code>Point</code>](#module_matrixObjects..Point) \| <code>null</code> | <code></code> | The point the direction will start from, null for random |
| [maxRanges] | [<code>Point</code>](#module_matrixObjects..Point) \| <code>null</code> | <code></code> | The maximum ranges for the point. If null, the matrix will be used. |

<a name="sortAxisCoordinates"></a>

## sortAxisCoordinates(pnt, direction) ⇒ [<code>axisCoordinatePairs</code>](#module_matrixObjects..axisCoordinatePairs)
Take a point and sort the coordinates, return an array of them sorted.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) |  | the Point to be sorted |
| direction | <code>string</code> | <code>&quot;desc&quot;</code> | 'asc'|'desc' |

<a name="prevCell"></a>

## prevCell(pnt, dir) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Based on provided point and point direction generate previous point.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | Provide the current / initial point |
| dir | [<code>Direction</code>](#module_matrixObjects..Direction) | Provide the direction to be applied to find the previous point |

<a name="pointDifference"></a>

## pointDifference(start, end) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Based on provided point and another point, get a point with the difference between each axis

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| start | [<code>Point</code>](#module_matrixObjects..Point) | The first point to compare |
| end | [<code>Point</code>](#module_matrixObjects..Point) | The other point to be compared |

<a name="point"></a>

## point(x, y, [z]) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Store the point data for an x, y, z [Matrix](#module_matrixObjects..Matrix).

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| x | [<code>coordinate</code>](#module_matrixObjects..coordinate) |  | The numeric value for X-coordinate |
| y | [<code>coordinate</code>](#module_matrixObjects..coordinate) |  | The numeric value for Y-coordinate |
| [z] | [<code>coordinate</code>](#module_matrixObjects..coordinate) | <code>0</code> | The numeric value for Z-coordinate (default to 0 for 2D [Matrix](#module_matrixObjects..Matrix)) |

<a name="nextCell"></a>

## nextCell(pnt, dir) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Based on provided point and point direction generate next point.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | Provide the current / initial point |
| dir | [<code>Direction</code>](#module_matrixObjects..Direction) | Provide the direction to be applied to find the next point |

<a name="getHighestAbsoluteCoordinate"></a>

## getHighestAbsoluteCoordinate(pnt) ⇒ [<code>coordinate</code>](#module_matrixObjects..coordinate)
Return the first coordinate number with the highest absolute value.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | A Point to be assessed. |

<a name="getFirstAxisOfCoordinate"></a>

## getFirstAxisOfCoordinate(pnt, coordinate) ⇒ <code>false</code> \| [<code>axis</code>](#module_matrixObjects..axis)
Having provided a coordinate number, find all corresponding axis, return the first match.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | The Point containing a matching coordinate. |
| coordinate | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The coordinate to search for. |

<a name="getAbsolutePoint"></a>

## getAbsolutePoint(pnt) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Return the point with absolute coordinates.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | A Point to have coordinates switched to absolute units. |

<a name="prev - Get the previous point in the direction from a starting point"></a>

## prev - Get the previous point in the direction from a starting point() : [<code>Point</code>](#module_matrixObjects..Point)
Direction represents the delta from on point to another and indicactes the direction of travel.

**Kind**: global function  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| x | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The X-coordinate is the x difference from starting to end point along a line. |
| y | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The Y-coordinate is the x difference from starting to end point along a line. |
| z | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The Z-coordinate is the x difference from starting to end point along a line. |

<a name="direction"></a>

## direction(x, y, z) ⇒ [<code>Direction</code>](#module_matrixObjects..Direction)
Create a direction object having x, y, z properties and next/prev methods

**Kind**: global function  

| Param | Type | Default |
| --- | --- | --- |
| x | <code>number</code> |  | 
| y | <code>number</code> |  | 
| z | <code>number</code> | <code>0</code> | 

<a name="areEqualPoints"></a>

## areEqualPoints(p1, p2) ⇒ <code>boolean</code>
Given two points, compare the x, y, and z of each to see if they are the same

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| p1 | [<code>Point</code>](#module_matrixObjects..Point) | The first point to compare |
| p2 | [<code>Point</code>](#module_matrixObjects..Point) | The other point to be compared |

<a name="alterCoordinates"></a>

## alterCoordinates(pnt, fn) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Alter the coordinates of a point using a function

**Kind**: global function  

| Param | Type |
| --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) \| <code>null</code> | 
| fn | <code>module:matrixFunctions~alterCoordinate</code> | 

<a name="getPointFromElement"></a>

## getPointFromElement(elem) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Retrieve the point associated with the provided element.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Node</code> \| <code>HTMLElement</code> | Provide an element associated with a point. |

<a name="getPointFromDomItem"></a>

## getPointFromDomItem(domItem, useIfExists) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Retrieve the point associated with the provided DomItem.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| domItem | <code>DomItem</code> |  | Provide a DomItem associated with a point. |
| useIfExists | <code>boolean</code> | <code>true</code> | Whether to use the existing point if it exists. |

<a name="getDomItemFromPoint"></a>

## getDomItemFromPoint(pnt, matrix) ⇒ <code>false</code> \| <code>module:domObjects~DomItem</code>
Retrieve the DomItem associated with the provided point

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | A point corresponding to a DomItem. |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) | The matrix containing the point. |

<a name="getDomItemFromElement"></a>

## getDomItemFromElement(elem, matrix) ⇒ <code>false</code> \| <code>module:domObjects~DomItem</code>
Retrieve the DomItem associated with the provided element in the matrix

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| elem | <code>Node</code> \| <code>HTMLElement</code> | Provide an element having an associated DomItem. |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) | The matrix potentially containing the DomItem with Point. |

<a name="testPointsBetween"></a>

## testPointsBetween(start, end, matrix, func, [inclusive]) ⇒ <code>Object.&lt;string, Array.&lt;module:matrixObjects~Point&gt;&gt;</code>
Given a start and end point, test the points between with the provided function. Return the points as part of trueand / or false properties based on the test.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Point</code>](#module_matrixObjects..Point) |  | The beginning point to check. |
| end | [<code>Point</code>](#module_matrixObjects..Point) |  | The terminating point to check between. |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) |  | The grid of points all the points can exist on. |
| func | [<code>testPointStatus</code>](#module_matrixFunctions..testPointStatus) |  | The test function which will return true or false. |
| [inclusive] | <code>boolean</code> | <code>true</code> | Choose whether to include or exclude the start and end points in the results. |

<a name="pointsToStep"></a>

## pointsToStep(start, end) ⇒ [<code>Direction</code>](#module_matrixObjects..Direction)
Find the lowest common ratio of the difference between the coordinates of two points.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| start | [<code>Point</code>](#module_matrixObjects..Point) | The first point to assess. |
| end | [<code>Point</code>](#module_matrixObjects..Point) | The other point to assess. |

<a name="lineEndPoint"></a>

## lineEndPoint(start, length, dir) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Given a start point, line length, and a direction, generate the end point of the line.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| start | [<code>Point</code>](#module_matrixObjects..Point) | The selected starting point. |
| length | <code>number</code> | The total length of the line. |
| dir | [<code>Direction</code>](#module_matrixObjects..Direction) | The direction of the line. |

<a name="getPointsForLines"></a>

## getPointsForLines(lines) ⇒ <code>Array.&lt;Array.&lt;module:matrixObjects~Point&gt;&gt;</code>
Takes an array of arrays containing two points each. Calls getPointsLine for each array of points. Returns anarray of all points captured for each line segment

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| lines | <code>Array.&lt;Array.&lt;module:matrixObjects~Point&gt;&gt;</code> | An array of lines only containing start and end. |

<a name="getLineTransitionPoints"></a>

## getLineTransitionPoints(start, end, transistions, [line]) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point)
Having provided two points, return an array of transition points connecting 'start' and 'end'. Return arrayincludes 'start' (line[0]) and 'end' (line[line.length-1])

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Point</code>](#module_matrixObjects..Point) |  | The starting location of the line. |
| end | [<code>Point</code>](#module_matrixObjects..Point) |  | The final line destination. |
| transistions | <code>number</code> \| <code>null</code> |  | specify the desired number of transitions, resulting points will be transistions+1. |
| [line] | [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point) | <code>[]</code> | The resulting line to connect start and end. |

<a name="getLineRelativePoints"></a>

## getLineRelativePoints(start, end, [line]) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point)
Having provided two points, return an array of integer transition points connecting 'start' and 'end'.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Point</code>](#module_matrixObjects..Point) |  | The starting location of the line. |
| end | [<code>Point</code>](#module_matrixObjects..Point) |  | The final line destination. |
| [line] | [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point) | <code>[]</code> | The resulting line to connect start and end. |

<a name="getLinePoints"></a>

## getLinePoints(start, end, [type], [lines]) ⇒ <code>Array.&lt;Array.&lt;module:matrixObjects~Point&gt;&gt;</code>
Find the points that a line would cross from 'start' to 'end' and return the array of points

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Point</code>](#module_matrixObjects..Point) |  |  |
| end | [<code>Point</code>](#module_matrixObjects..Point) |  |  |
| [type] | <code>string</code> \| <code>&#x27;relative&#x27;</code> \| <code>&#x27;intersect&#x27;</code> \| <code>&#x27;transition&#x27;</code> | <code>&quot;&#x27;relative&#x27;&quot;</code> | select the method used for finding the points: 'relative'|'intersect'|'transition' |
| [lines] | <code>Array.&lt;Array.&lt;module:matrixObjects~Point&gt;&gt;</code> | <code>[]</code> | An array of lines only containing start and end. |

<a name="nextIntersect"></a>

## nextIntersect(direction, start, end, line) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point)
Recursively find the next point in a line from 'start' to 'end' using the provided direction. Return an array of points connecting 'start' and 'end'.

**Kind**: global function  

| Param | Type |
| --- | --- |
| direction | [<code>Direction</code>](#module_matrixObjects..Direction) | 
| start | [<code>Point</code>](#module_matrixObjects..Point) | 
| end | [<code>Point</code>](#module_matrixObjects..Point) | 
| line | [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point) | 

<a name="getLineIntersectPoints"></a>

## getLineIntersectPoints(start, end, [line]) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point)
Having provided two points, return an array of transition points connecting 'start' and 'end'. Return arrayincludes 'start' (line[0]) and 'end' (line[line.length-1]). Line contains only exactly matched points

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| start | [<code>Point</code>](#module_matrixObjects..Point) |  | The starting location of the line. |
| end | [<code>Point</code>](#module_matrixObjects..Point) |  | The final line destination. |
| [line] | [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point) | <code>[]</code> | The resulting line to connect start and end. |

<a name="checkInBetween"></a>

## checkInBetween(...args) ⇒ <code>boolean</code>
Given two points, check the cells between using specified function.When inclusive is set to true the provided start and end points will also be tested

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| ...args | <code>\*</code> | These args match the parameter list for [module:matrixFunctions~testPointsBetween](module:matrixFunctions~testPointsBetween) |

<a name="updateMatrixPoints"></a>

## updateMatrixPoints(matrix) ⇒ [<code>Matrix</code>](#module_matrixObjects..Matrix)
Update the points for each DomItem in a matrix.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) | Provide a matrix to update the points for. |

<a name="tile"></a>

## tile() ⇒ [<code>MatrixTile</code>](#module_matrixObjects..MatrixTile)
A default tile in the [Matrix](#module_matrixObjects..Matrix)

**Kind**: global function  
<a name="square"></a>

## square([x], [y], [z], [matrix], size) ⇒ [<code>Matrix</code>](#module_matrixObjects..Matrix)
Return a single layer matrix where x and y are equal

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [x] | [<code>Array.&lt;MatrixTile&gt;</code>](#module_matrixObjects..MatrixTile) | <code>[]</code> | All the data to be presented as part of the specified point, requires MatrixTile base |
| [y] | [<code>Array.&lt;MatrixRow&gt;</code>](#module_matrixObjects..MatrixRow) | <code>[]</code> | Additional data to append to the MatrixRow |
| [z] | [<code>Array.&lt;MatrixLayer&gt;</code>](#module_matrixObjects..MatrixLayer) | <code>[]</code> | Additional data to append to the MatrixLayer |
| [matrix] | [<code>Array.&lt;Matrix&gt;</code>](#module_matrixObjects..Matrix) | <code>[]</code> | Additional data to append to the Matrix |
| size | <code>number</code> |  | Used to define height and width as equal values (depth is set to 1) |

<a name="matrix"></a>

## matrix(dimensions, props) ⇒ [<code>Matrix</code>](#module_matrixObjects..Matrix)
Create a 3d matrix of i with x by y by z size, add additional objects for each layer as well

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| dimensions | [<code>Point</code>](#module_matrixObjects..Point) | The dimensions of the matrix to be created |
| dimensions.x | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The width of the matrix |
| dimensions.y | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The height of the matrix |
| dimensions.z | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The depth of the matrix |
| props | <code>Object</code> | Additional properties to be added to the matrix |
| props.x | [<code>Array.&lt;MatrixTile&gt;</code>](#module_matrixObjects..MatrixTile) | Additional properties to be added to the x axis |
| props.y | [<code>Array.&lt;MatrixRow&gt;</code>](#module_matrixObjects..MatrixRow) | Additional properties to be added to the y axis |
| props.z | [<code>Array.&lt;MatrixLayer&gt;</code>](#module_matrixObjects..MatrixLayer) | Additional properties to be added to the z axis |
| props.matrix | [<code>Array.&lt;Matrix&gt;</code>](#module_matrixObjects..Matrix) | Additional properties to be added to the matrix |

<a name="cube"></a>

## cube([x], [y], [z], [matrixProps], size) ⇒ [<code>Matrix</code>](#module_matrixObjects..Matrix)
Return a matrix where x, y, and z are equal

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [x] | [<code>Array.&lt;MatrixTile&gt;</code>](#module_matrixObjects..MatrixTile) | <code>[]</code> | All the data to be presented as part of the specified point, requires MatrixTile base |
| [y] | [<code>Array.&lt;MatrixRow&gt;</code>](#module_matrixObjects..MatrixRow) | <code>[]</code> | Additional data to append to the MatrixRow |
| [z] | [<code>Array.&lt;MatrixLayer&gt;</code>](#module_matrixObjects..MatrixLayer) | <code>[]</code> | Additional data to append to the MatrixLayer |
| [matrixProps] | [<code>Array.&lt;Matrix&gt;</code>](#module_matrixObjects..Matrix) | <code>[]</code> | Additional data to append to the Matrix |
| size | <code>number</code> |  | Used to define height, width, and depth as equal values |

<a name="buildMatrix"></a>

## buildMatrix(dimensions, props) ⇒ [<code>Matrix</code>](#module_matrixObjects..Matrix)
Create the matrix and assign the correct points to each tile.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| dimensions | [<code>Point</code>](#module_matrixObjects..Point) | The dimensions of the matrix to be created |
| dimensions.x | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The width of the matrix |
| dimensions.y | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The height of the matrix |
| dimensions.z | [<code>coordinate</code>](#module_matrixObjects..coordinate) | The depth of the matrix |
| props | <code>Object</code> | Additional properties to be added to the matrix |
| props.x | [<code>Array.&lt;MatrixTile&gt;</code>](#module_matrixObjects..MatrixTile) | Additional properties to be added to the x axis |
| props.y | [<code>Array.&lt;MatrixRow&gt;</code>](#module_matrixObjects..MatrixRow) | Additional properties to be added to the y axis |
| props.z | [<code>Array.&lt;MatrixLayer&gt;</code>](#module_matrixObjects..MatrixLayer) | Additional properties to be added to the z axis |
| props.matrix | [<code>Array.&lt;Matrix&gt;</code>](#module_matrixObjects..Matrix) | Additional properties to be added to the matrix |

<a name="getMatrixRange"></a>

## getMatrixRange(matrix) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point)
Get the lowest and highest points in the matrix as the range.

**Kind**: global function  

| Param | Type |
| --- | --- |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) | 

<a name="getCoordinateRanges"></a>

## getCoordinateRanges(minPoint, maxPoint, maxRanges) ⇒ [<code>Direction</code>](#module_matrixObjects..Direction)
Using a max an min point, find the ranges for each coordinate.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| minPoint | [<code>Point</code>](#module_matrixObjects..Point) |  | The smallest point in the matrix |
| maxPoint | [<code>Point</code>](#module_matrixObjects..Point) |  | The largest point in the matrix |
| maxRanges | [<code>Point</code>](#module_matrixObjects..Point) \| <code>null</code> | <code></code> | The maximum ranges for the point. If null, the matrix will be used. |

<a name="getAxisLengths"></a>

## getAxisLengths(matrix) ⇒ [<code>Point</code>](#module_matrixObjects..Point)
Return point-like object with all of the axis lengths.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) | The matrix to get the dimensions of. |

<a name="getAvailableRanges"></a>

## getAvailableRanges(matrix, maxRanges) ⇒ [<code>Direction</code>](#module_matrixObjects..Direction)
Find the range of the matrix from smallest to largest point.

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) |  | The matrix that the point will be contained within. |
| maxRanges | [<code>Point</code>](#module_matrixObjects..Point) \| <code>null</code> | <code></code> | The maximum ranges for the point. If null, the matrix will be used. |

<a name="getAllPoints"></a>

## getAllPoints(matrix, [allPoints]) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point)
Return an array of all the points in the matrix

**Kind**: global function  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) \| [<code>MatrixColumn</code>](#module_matrixObjects..MatrixColumn) |  | The matrix to retrieve points from. |
| [allPoints] | [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point) | <code>[]</code> | The array of points to be returned |

<a name="checkValidPoint"></a>

## checkValidPoint(pnt, matrix) ⇒ <code>boolean</code>
Test if the provided point exists in the matrix.

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | Provide a point to validate. |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) | The matrix that contains valid points. |

<a name="adjacentPoints"></a>

## adjacentPoints(pnt, matrix) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point)
Return all valid points surrounding a provided point

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | The point we want to find adjacent points for. |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) | The matrix having the point. |

<a name="adjacentEdgePoints"></a>

## adjacentEdgePoints(pnt, matrix) ⇒ [<code>Array.&lt;Point&gt;</code>](#module_matrixObjects..Point)
Return all points which touch on edges (not diagonal)

**Kind**: global function  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>Point</code>](#module_matrixObjects..Point) | The point we want to find adjacent points for. |
| matrix | [<code>Matrix</code>](#module_matrixObjects..Matrix) | The matrix having the point. |

<a name="IntervalFits"></a>

## IntervalFits : <code>Object</code>
An object that has boolean values for each axis indicating whether the interval fits within the matrix.

**Kind**: global typedef  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| x | <code>boolean</code> | Whether the interval fits within the x-axis of the matrix |
| y | <code>boolean</code> | Whether the interval fits within the y-axis of the matrix |
| z | <code>boolean</code> | Whether the interval fits within the z-axis of the matrix |

<a name="alterCoordinate"></a>

## alterCoordinate ⇒ [<code>coordinate</code>](#module_matrixObjects..coordinate) \| <code>null</code>
**Kind**: global typedef  
**Returns**: [<code>coordinate</code>](#module_matrixObjects..coordinate) \| <code>null</code> - - The altered coordinate  

| Param | Type | Description |
| --- | --- | --- |
| pnt | [<code>coordinate</code>](#module_matrixObjects..coordinate) \| <code>null</code> | The coordinate to alter |
| axis | [<code>axis</code>](#module_matrixObjects..axis) | The axis for the coordinate being altered |
| point | [<code>Point</code>](#module_matrixObjects..Point) \| <code>null</code> | The point that the coordinate is part of |

