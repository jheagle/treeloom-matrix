/**
 * @jest-environment jsdom
 */
import checkInBetween from './checkInBetween.js'
import getDomItemFromPoint from '../lookup/getDomItemFromPoint.js'
import point from '../point/point.js'
import buildMatrix from '../grid/buildMatrix.js'

const validClass = 'valid-item'
const testFn = (pn, m) => getDomItemFromPoint(pn, m).attributes.className.includes(validClass)

describe('checkInBetween', () => {
    test('checks points with start and end excluded', () => {
        const matrix = buildMatrix({ x: 10, y: 1, z: 1 })
        // start
        matrix.children[0].children[0].children[0].attributes.className += ` ${validClass}`
        // end
        matrix.children[0].children[0].children[9].attributes.className += ` ${validClass}`
        // 4 and 5
        matrix.children[0].children[0].children[4].attributes.className += ` ${validClass}`
        matrix.children[0].children[0].children[5].attributes.className += ` ${validClass}`
        expect(checkInBetween(point(9, 0, 0), point(0, 0, 0), matrix, testFn, true)).toBe(true)
    })

    test('checks points win diagonal with start and end excluded', () => {
        const matrix = buildMatrix({ x: 7, y: 5, z: 3 })
        matrix.children[1].children[2].children[3].attributes.className += ` ${validClass}`
        expect(checkInBetween(point(0, 0, 0), point(6, 4, 2), matrix, testFn, true)).toBe(true)
    })

    test('checks points but none match so false', () => {
        const matrix = buildMatrix({ x: 7, y: 5, z: 3 })
        expect(checkInBetween(point(0, 0, 0), point(6, 4, 2), matrix, testFn, true)).toBe(false)
    })
})
