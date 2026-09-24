/**
 * @jest-environment jsdom
 */
import testPointsBetween from './testPointsBetween.js'
import getDomItemFromPoint from '../lookup/getDomItemFromPoint.js'
import point from '../point/point.js'
import buildMatrix from '../grid/buildMatrix.js'

const validClass = 'valid-item'
const testFn = (pn, m) => getDomItemFromPoint(pn, m).attributes.className.includes(validClass)

describe('testPointsBetween', () => {
    test('test points that have a certain class', () => {
        const matrix = buildMatrix({ x: 3, y: 3, z: 3 })
        matrix.children[0].children[1].children[2].attributes.className += ` ${validClass}`
        const firstTest = testPointsBetween(point(2, 0, 0), point(2, 2, 0), matrix, testFn)
        expect(firstTest.true).toEqual([{ x: 2, y: 1, z: 0 }])
        expect(firstTest.false).toEqual([{ x: 2, y: 0, z: 0 }, { x: 2, y: 2, z: 0 }])
        matrix.children[1].children[2].children[0].attributes.className += ` ${validClass}`
        const secondTest = testPointsBetween(point(0, 2, 0), point(0, 2, 2), matrix, testFn)
        expect(secondTest.true).toEqual([{ x: 0, y: 2, z: 1 }])
        expect(secondTest.false).toEqual([{ x: 0, y: 2, z: 0 }, { x: 0, y: 2, z: 2 }])
        matrix.children[2].children[0].children[1].attributes.className += ` ${validClass}`
        const thirdTest = testPointsBetween(point(0, 0, 2), point(2, 0, 2), matrix, testFn)
        expect(thirdTest.true).toEqual([{ x: 1, y: 0, z: 2 }])
        expect(thirdTest.false).toEqual([{ x: 0, y: 0, z: 2 }, { x: 2, y: 0, z: 2 }])
    })

    test('checks points with start and end excluded', () => {
        const matrix = buildMatrix({ x: 10, y: 1, z: 1 })
        // start
        matrix.children[0].children[0].children[0].attributes.className += ` ${validClass}`
        // end
        matrix.children[0].children[0].children[9].attributes.className += ` ${validClass}`
        // 4 and 5
        matrix.children[0].children[0].children[4].attributes.className += ` ${validClass}`
        matrix.children[0].children[0].children[5].attributes.className += ` ${validClass}`
        const resultsIncluded = testPointsBetween(point(9, 0, 0), point(0, 0, 0), matrix, testFn, true)
        expect(resultsIncluded.true).toEqual([
            { x: 9, y: 0, z: 0 },
            { x: 5, y: 0, z: 0 },
            { x: 4, y: 0, z: 0 },
            { x: 0, y: 0, z: 0 }
        ])
        expect(resultsIncluded.false).toEqual([
            { x: 8, y: 0, z: 0 },
            { x: 7, y: 0, z: 0 },
            { x: 6, y: 0, z: 0 },
            { x: 3, y: 0, z: 0 },
            { x: 2, y: 0, z: 0 },
            { x: 1, y: 0, z: 0 }
        ])
        const resultsExcluded = testPointsBetween(point(9, 0, 0), point(0, 0, 0), matrix, testFn, false)
        expect(resultsExcluded.true).toEqual([
            { x: 5, y: 0, z: 0 },
            { x: 4, y: 0, z: 0 }
        ])
        expect(resultsExcluded.false).toEqual([
            { x: 8, y: 0, z: 0 },
            { x: 7, y: 0, z: 0 },
            { x: 6, y: 0, z: 0 },
            { x: 3, y: 0, z: 0 },
            { x: 2, y: 0, z: 0 },
            { x: 1, y: 0, z: 0 }
        ])
    })

    test('checks points win diagonal with start and end excluded', () => {
        const matrix = buildMatrix({ x: 7, y: 5, z: 3 })
        matrix.children[1].children[2].children[3].attributes.className += ` ${validClass}`
        const results = testPointsBetween(point(0, 0, 0), point(6, 4, 2), matrix, testFn, false)
        expect(results.true).toEqual([{ x: 3, y: 2, z: 1 }])
        expect(results.false).toEqual([
            { x: 1, y: 1, z: 0 },
            { x: 2, y: 1, z: 1 },
            { x: 4, y: 3, z: 1 },
            { x: 5, y: 3, z: 2 }
        ])
    })
})
