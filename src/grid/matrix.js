import 'core-js/stable'
import siFunciona from 'si-funciona'
import jsonDom from 'json-dom'
import tile from './tile'

/**
 * MatrixColumn is a DomItem which represents the x axis and also stores {@link module:matrixObjects~MatrixTile}
 * @typedef {
 * module:domObjects~DomItem|module:matrixObjects~MatrixTile
 * } module:matrixObjects~MatrixColumn
 * @property {module:matrixObjects~axis} axis - The axis will be 'x'
 * @property {module:domObjects~DomItem:is} is - The is will be 'column'
 */

/**
 * MatrixRow is the parent of a group of {@link module:matrixObjects~MatrixTile}
 * @typedef {module:domObjects~DomItem} module:matrixObjects~MatrixRow
 * @property {module:matrixObjects~axis} axis - The axis will be 'y'
 * @property {module:domObjects~DomItem:is} is - The is will be 'row'
 * @property {Array.<module:matrixObjects~MatrixColumn>} children - all of the MatrixTile items as part of this
 * MatrixRow
 */

/**
 * MatrixLayer is the parent of a group of {@link module:matrixObjects~MatrixTile}
 * @typedef {module:domObjects~DomItem} module:matrixObjects~MatrixLayer
 * @property {module:matrixObjects~axis} axis - The axis will be 'z'
 * @property {module:domObjects~DomItem:is} is - The is will be 'layer'
 * @property {Array.<module:matrixObjects~MatrixRow>} children - all of the MatrixRow items as part of this
 * MatrixLayer
 */

/**
 * Matrix is a multi-level {@link module:domObjects~DomItem} which is used to visually represent a
 * mathematical grid / matrix.
 * The matrix consists of four DomItem levels, at the top tier is the Matrix container with class matrix.
 * The second tier represents the z axis (with property axis='z') and has the class layer.
 * The third tier represents the y axis (with property axis='y') and has the class row.
 * The fourth (final) tier represents the x axis (with property axis='x') and has the class column.
 * The {@link module:matrixObjects~MatrixTile} is attached on the x axis tier.
 * The number of children at each level is defined by the size of the matrix, the end result is a multidimensional
 * array.
 * @typedef {module:domObjects~DomItem} module:matrixObjects~Matrix
 * @augments module:domObjects~DomItem
 * @property {module:domObjects~DomItem:is} is - The is will be 'matrix'
 */

/**
 * Create a 3d matrix of i with x by y by z size, add additional objects for each layer as well
 * @function
 * @param {module:matrixObjects~Point} dimensions - The dimensions of the matrix to be created
 * @param {module:matrixObjects~coordinate} dimensions.x - The width of the matrix
 * @param {module:matrixObjects~coordinate} dimensions.y - The height of the matrix
 * @param {module:matrixObjects~coordinate} dimensions.z - The depth of the matrix
 * @param {Object} props - Additional properties to be added to the matrix
 * @param {Array.<module:matrixObjects~MatrixTile>} props.x - Additional properties to be added to the x axis
 * @param {Array.<module:matrixObjects~MatrixRow>} props.y - Additional properties to be added to the y axis
 * @param {Array.<module:matrixObjects~MatrixLayer>} props.z - Additional properties to be added to the z axis
 * @param {Array.<module:matrixObjects~Matrix>} props.matrix - Additional properties to be added to the matrix
 * @returns {module:matrixObjects~Matrix}
 */
const matrix = (
  dimensions = { x: 0, y: 0, z: 1 },
  props = { x: [], y: [], z: [], matrix: [] }
) => siFunciona.mergeObjects(
  jsonDom.createDomItem(
    {
      is: 'matrix',
      tagName: 'div',
      attributes: {
        className: 'matrix'
      },
      children: siFunciona.buildArray(
        siFunciona.mergeObjectsMutable(
          jsonDom.createDomItem(
            {
              axis: 'z',
              is: 'layer',
              tagName: 'div',
              attributes: {
                className: 'layer'
              },
              children: siFunciona.buildArray(
                siFunciona.mergeObjectsMutable(
                  jsonDom.createDomItem(
                    {
                      axis: 'y',
                      is: 'row',
                      tagName: 'div',
                      attributes: {
                        className: 'row'
                      },
                      children: siFunciona.buildArray(
                        siFunciona.mergeObjectsMutable(
                          jsonDom.createDomItem(
                            {
                              axis: 'x',
                              is: 'column',
                              tagName: 'div',
                              attributes: {
                                className: 'column'
                              },
                              children: []
                            }
                          ),
                          tile(),
                          props.x
                        ),
                        dimensions.x
                      )
                    }
                  ),
                  props.y
                ),
                dimensions.y
              )
            }
          ),
          props.z
        ),
        dimensions.z
      )
    }
  ),
  props.matrix
)

export default matrix
