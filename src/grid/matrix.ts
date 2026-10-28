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
      // Each level is built fresh per array element (not built once then cloned via buildArray) so every
      // createDomItem call actually runs and stamps its own real id - cloning a single built item would copy
      // that one id onto every layer/row/tile instead (the id-collision bug behind JSON-DOM#100).
      children: Array.from({ length: dimensions.z }, () => siFunciona.mergeObjectsMutable(
        jsonDom.createDomItem(
          {
            axis: 'z',
            has: { 'matrix.layer': true },
            tagName: 'div',
            attributes: {
              className: 'layer'
            },
            children: Array.from({ length: dimensions.y }, () => siFunciona.mergeObjectsMutable(
              jsonDom.createDomItem(
                {
                  axis: 'y',
                  has: { 'matrix.row': true },
                  tagName: 'div',
                  attributes: {
                    className: 'row'
                  },
                  children: Array.from({ length: dimensions.x }, () => siFunciona.mergeObjectsMutable(
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
                  ))
                }
              ),
              props.y
            ))
          }
        ),
        props.z
      ))
    }
  ),
  props.matrix
)

export default matrix
