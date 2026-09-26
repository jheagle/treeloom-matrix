import 'core-js/stable'
import siFunciona from 'si-funciona'
import jsonDom from 'json-dom'
import tile from './tile'
import './traits'
import { Matrix, MatrixProps } from './types'
import { Point } from '../point/types'

/**
 * Create a 3d matrix of i with x by y by z size, add additional objects for each layer as well
 * @param dimensions - The dimensions of the matrix to be created (x is the width, y the height, z the depth)
 * @param props - Additional properties to be added to each level of the matrix
 */
const matrix = (
  dimensions: Point = { x: 0, y: 0, z: 1 },
  props: MatrixProps = { x: {}, y: {}, z: {}, matrix: {} }
): Matrix => siFunciona.mergeObjects(
  jsonDom.createDomItem(
    {
      has: { 'matrix.matrix': true },
      tagName: 'div',
      attributes: {
        className: 'matrix'
      },
      children: siFunciona.buildArray(
        siFunciona.mergeObjectsMutable(
          jsonDom.createDomItem(
            {
              axis: 'z',
              has: { 'matrix.layer': true },
              tagName: 'div',
              attributes: {
                className: 'layer'
              },
              children: siFunciona.buildArray(
                siFunciona.mergeObjectsMutable(
                  jsonDom.createDomItem(
                    {
                      axis: 'y',
                      has: { 'matrix.row': true },
                      tagName: 'div',
                      attributes: {
                        className: 'row'
                      },
                      children: siFunciona.buildArray(
                        siFunciona.mergeObjectsMutable(
                          jsonDom.createDomItem(
                            {
                              axis: 'x',
                              has: { 'matrix.column': true },
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
