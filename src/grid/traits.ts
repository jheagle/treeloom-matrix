/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at https://mozilla.org/MPL/2.0/. */

import treeloom from 'treeloom'
import type hasTraitType from 'treeloom/dist/domItem/traits/hasTrait'

/**
 * The typed version of treeloom's hasTrait, it narrows an item to the trait it was checked for.
 */
export const hasTrait: typeof hasTraitType = treeloom.hasTrait

treeloom.defineTrait('matrix.matrix', { keys: [] })
treeloom.defineTrait('matrix.layer', { keys: ['axis'] })
treeloom.defineTrait('matrix.row', { keys: ['axis'] })
treeloom.defineTrait('matrix.column', { keys: ['axis', 'point'] })
