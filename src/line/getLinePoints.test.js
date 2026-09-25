import getLinePoints from './getLinePoints'
import getLineIntersectPoints from './getLineIntersectPoints'
import getLineRelativePoints from './getLineRelativePoints'
import getLineTransitionPoints from './getLineTransitionPoints'
import point from '../point/point'

describe('getLinePoints', () => {
  test('test defaults to relative', () => {
    const start = point(0, 0, 0)
    const end = point(6, 4, 2)
    const expectedResult = getLineRelativePoints(start, end)
    const expectedLength = expectedResult.length
    const relativeResult = getLinePoints(start, end, 'relative')
    expect(relativeResult).toHaveLength(expectedLength)
    expect(relativeResult[0]).toEqual(start)
    expect(relativeResult[1]).toEqual(expectedResult[1])
    expect(relativeResult[2]).toEqual(expectedResult[2])
    expect(relativeResult[3]).toEqual(expectedResult[3])
    expect(relativeResult[4]).toEqual(expectedResult[4])
    expect(relativeResult[5]).toEqual(expectedResult[5])
    expect(relativeResult[6]).toEqual(end)
    const defaultResult = getLinePoints(start, end)
    expect(defaultResult).toHaveLength(expectedLength)
    expect(defaultResult[0]).toEqual(relativeResult[0])
    expect(defaultResult[1]).toEqual(relativeResult[1])
    expect(defaultResult[2]).toEqual(relativeResult[2])
    expect(defaultResult[3]).toEqual(relativeResult[3])
    expect(defaultResult[4]).toEqual(relativeResult[4])
    expect(defaultResult[5]).toEqual(relativeResult[5])
    expect(defaultResult[6]).toEqual(relativeResult[6])
  })

  test('transistion will match transition results', () => {
    const start = point(0, 0, 0)
    const end = point(6, 4, 2)
    const expectedResult = getLineTransitionPoints(start, end)
    const expectedLength = expectedResult.length
    const result = getLinePoints(start, end, 'transition')
    expect(result).toHaveLength(expectedLength)
    expect(result[0]).toEqual(start)
    expect(result[1]).toEqual(expectedResult[1])
    expect(result[2]).toEqual(expectedResult[2])
    expect(result[3]).toEqual(expectedResult[3])
    expect(result[4]).toEqual(expectedResult[4])
    expect(result[5]).toEqual(expectedResult[5])
    expect(result[6]).toEqual(end)
  })

  test('intersect will match intersect results', () => {
    const start = point(0, 0, 0)
    const end = point(6, 4, 2)
    const expectedResult = getLineIntersectPoints(start, end)
    const expectedLength = expectedResult.length
    const result = getLinePoints(start, end, 'intersect')
    expect(result).toHaveLength(expectedLength)
    expect(result[0]).toEqual(start)
    expect(result[1]).toEqual(expectedResult[1])
    expect(result[2]).toEqual(end)
  })

  test('invalid type throws and error', () => {
    const start = point(0, 0, 0)
    const end = point(6, 4, 2)
    const type = 'bresenham'
    expect(() => getLinePoints(start, end, type)).toThrow(`The given type: '${type}' is invalid. Valid types are 'relative', 'intersect', 'transition'`)
  })
})
