/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

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
