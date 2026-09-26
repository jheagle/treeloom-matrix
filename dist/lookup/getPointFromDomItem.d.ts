import { Point } from '../point/types';
import { MatrixColumn } from '../grid/types';
/**
 * Retrieve the point associated with the provided DomItem.
 * @param domItem - Provide a DomItem (a column) associated with a point.
 * @param useIfExists - Whether to use the existing point if it exists.
 */
declare const getPointFromDomItem: (domItem: MatrixColumn, useIfExists?: boolean) => Point;
export default getPointFromDomItem;
