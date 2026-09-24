/**
 * @jest-environment jsdom
 */
import updateMatrixPoints from './updateMatrixPoints.js'
import matrix from './matrix.js'

describe('updateMatrixPoints', () => {
    test('should update the points for each DomItem in a matrix', () => {
        // create a matrix with 2 layers, 2 rows, and 2 tiles
        const testMatrix = matrix({ x: 2, y: 2, z: 2 })
        // update the points for each DomItem in the matrix
        const updatedMatrix = updateMatrixPoints(testMatrix)
        // assert that the points have been updated
        expect(updatedMatrix.children[0].children[0].children[0].point).toEqual({ x: 0, y: 0, z: 0 })
        expect(updatedMatrix.children[0].children[0].children[1].point).toEqual({ x: 1, y: 0, z: 0 })
        expect(updatedMatrix.children[0].children[1].children[0].point).toEqual({ x: 0, y: 1, z: 0 })
        expect(updatedMatrix.children[0].children[1].children[1].point).toEqual({ x: 1, y: 1, z: 0 })
        expect(updatedMatrix.children[1].children[0].children[0].point).toEqual({ x: 0, y: 0, z: 1 })
        expect(updatedMatrix.children[1].children[0].children[1].point).toEqual({ x: 1, y: 0, z: 1 })
        expect(updatedMatrix.children[1].children[1].children[0].point).toEqual({ x: 0, y: 1, z: 1 })
        expect(updatedMatrix.children[1].children[1].children[1].point).toEqual({ x: 1, y: 1, z: 1 })
    })

    // test that the function throws an error if the provided matrixdoes not have the 'is:matrix'
    test('should throw an error if the provided matrix does not have the "is:matrix"', () => {
        const testMatrix = matrix({ x: 2, y: 2, z: 2 })
        // remove the 'is' property from the matrix
        delete testMatrix.is
        expect(() => updateMatrixPoints(testMatrix)).toThrow("The provided matrix does not have the 'is:matrix'.")
    })

    // test that update points will skip any children that do not have the 'is' property of 'layer', 'row', or 'column'
    test('should skip any children that do not have the "is" property of "layer", "row", or "column"', () => {
        const testMatrix = matrix({ x: 2, y: 2, z: 2 })
        // add a child to the matrix that does not have the 'is' property of 'layer'
        testMatrix.children.push({ is: 'not-a-layer' })
        // update the points for each DomItem in the matrix
        const updatedMatrix = updateMatrixPoints(testMatrix)
        // assert that the points have been updated
        expect(updatedMatrix.children[0].children[0].children[0].point).toEqual({ x: 0, y: 0, z: 0 })
    })
})
