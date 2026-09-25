import 'core-js/stable';
import { Point } from '../point/types';
/**
 * Retrieve the point associated with the provided element.
 * @function
 * @param elem - Provide an element associated with a point.
 */
declare const getPointFromElement: (elem: Node) => Point;
export default getPointFromElement;
