import getLinesOfLength from './getLinesOfLength'
import point from '../point/point'

describe('getLinesOfLength', () => {
  test('finds every horizontal and vertical line of the given length in a small grid', () => {
    const lines = getLinesOfLength(point(3, 3, 0), 2)
    // 3x3 grid, length 2: 2 horizontal starts per row (3 rows) + 2 vertical starts per column (3 columns)
    expect(lines).toHaveLength(12)
    expect(lines).toContainEqual([point(0, 0, 0), point(1, 0, 0)])
    expect(lines).toContainEqual([point(0, 0, 0), point(0, 1, 0)])
  })

  test('every line has exactly `length` points, each with z 0', () => {
    const lines = getLinesOfLength(point(4, 4, 0), 3)
    lines.forEach(line => {
      expect(line).toHaveLength(3)
      line.forEach(p => expect(p.z).toBe(0))
    })
  })

  test('a length equal to the grid dimension gives exactly one line per row and per column', () => {
    const lines = getLinesOfLength(point(5, 5, 0), 5)
    expect(lines).toHaveLength(10)
  })

  test('a length longer than both dimensions finds nothing', () => {
    expect(getLinesOfLength(point(3, 3, 0), 4)).toEqual([])
  })

  test('an empty grid finds nothing', () => {
    expect(getLinesOfLength(point(0, 0, 0), 2)).toEqual([])
  })
})
