import jsonDom from 'json-dom'
import type hasTraitType from 'json-dom/dist/domItem/traits/hasTrait'

/**
 * The typed version of json-dom's hasTrait, it narrows an item to the trait it was checked for.
 */
export const hasTrait: typeof hasTraitType = jsonDom.hasTrait

jsonDom.defineTrait('matrix.matrix', { keys: [] })
jsonDom.defineTrait('matrix.layer', { keys: ['axis'] })
jsonDom.defineTrait('matrix.row', { keys: ['axis'] })
jsonDom.defineTrait('matrix.column', { keys: ['axis', 'point'] })
