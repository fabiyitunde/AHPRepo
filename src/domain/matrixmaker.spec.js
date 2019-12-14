import {
  getTestAnalysisItemList,
  getDataToLoadMatrix
} from '../../__test__/fixtures/matrix/analysisitemlist';
import {
  matrixmaker,
  matrixdataloader,
  matrixcolumnsumcalculator,
  matrixSymetricValueFactory,
  matrixNormalizationFactory,
  matrixRowsNormalizedSumcalculator
} from './';
describe('matrix', () => {
  it('intitalized with 5 x 5 items', () => {
    const analysisitemlist = getTestAnalysisItemList()
    const matrix = matrixmaker(analysisitemlist)

    expect(matrix.length).toBe(36)
  })
  it('must have any item compared with self have value equals to 1', () => {
    const analysisitemlist = getTestAnalysisItemList()
    const matrix = matrixmaker(analysisitemlist)
    for (let rowindex = 0; rowindex < analysisitemlist.length; rowindex++) {
      for (
        let columnindex = 0;
        columnindex < analysisitemlist.length;
        columnindex++
      ) {
        const matrixcellitem = matrix.filter(
          cell => cell.rowindex === rowindex && cell.columnindex === columnindex
        )
        if (rowindex === columnindex) {
          expect(matrixcellitem[0].value).toBe(1)
        }
      }
    }
    expect(matrix.length).toBe(36)
  })

  it('must have loaded data only on upper right of the matrix', () => {
    const analysisitemlist = getTestAnalysisItemList()
    const data = getDataToLoadMatrix()
    const matrix = matrixmaker(analysisitemlist)
    const loadedmatrix = matrixdataloader(data, matrix, analysisitemlist)
    const cell04 = loadedmatrix.find(
      a => a.columnindex === 4 && a.rowindex === 0
    )
    expect(cell04.value).toBe(9)
  })
  it('must calculate column sum correctly', () => {
    const analysisitemlist = getTestAnalysisItemList()
    const data = getDataToLoadMatrix()
    const matrix = matrixmaker(analysisitemlist)
    const loadedmatrix = matrixdataloader(data, matrix, analysisitemlist)
    const columnsumlist = matrixcolumnsumcalculator(
      loadedmatrix,
      analysisitemlist
    )
    expect(columnsumlist[0].value).toBe(1)
  })
  it('must set symetric values with inverse values of upper right cell', () => {
    const analysisitemlist = getTestAnalysisItemList()
    const data = getDataToLoadMatrix()
    const matrix = matrixmaker(analysisitemlist)
    const loadedmatrix = matrixdataloader(data, matrix, analysisitemlist)
    const loadedmatrixWithSymetriValues = matrixSymetricValueFactory(
      loadedmatrix,
      analysisitemlist
    )
    const oneovernine = 1 / 9
    expect(
      loadedmatrixWithSymetriValues.find(
        a => a.rowindex === 4 && a.columnindex === 0
      ).value
    ).toBe(oneovernine)
    const columnsumlist = matrixcolumnsumcalculator(
      loadedmatrixWithSymetriValues,
      analysisitemlist
    )
    expect(columnsumlist[0].value).toBe(13.42222222222222)
  })
  it('must calculate normailization values for each cell of the matrix', () => {
    const analysisitemlist = getTestAnalysisItemList()
    const data = getDataToLoadMatrix()
    const matrix = matrixmaker(analysisitemlist)
    const loadedmatrix = matrixdataloader(data, matrix, analysisitemlist)
    const loadedmatrixWithSymetriValues = matrixSymetricValueFactory(
      loadedmatrix,
      analysisitemlist
    )
    const columnsumlist = matrixcolumnsumcalculator(
      loadedmatrixWithSymetriValues,
      analysisitemlist
    )
    const normalizedmatrix = matrixNormalizationFactory(
      loadedmatrixWithSymetriValues,
      analysisitemlist,
      columnsumlist
    )
    const expectednormalizedvalueforrow1col3 =
      loadedmatrixWithSymetriValues.find(
        a => a.rowindex === 0 && a.columnindex === 2
      ).value / columnsumlist[2].value
    const recievednormalizedvalue = normalizedmatrix.find(
      a => a.rowindex === 0 && a.columnindex === 2
    ).normalizedvalue
    expect(recievednormalizedvalue).toBe(expectednormalizedvalueforrow1col3)
  })
  it('must determine the score for each requirement', () => {
    const analysisitemlist = getTestAnalysisItemList()
    const data = getDataToLoadMatrix()
    const matrix = matrixmaker(analysisitemlist)
    const loadedmatrix = matrixdataloader(data, matrix, analysisitemlist)
    const loadedmatrixWithSymetriValues = matrixSymetricValueFactory(
      loadedmatrix,
      analysisitemlist
    )
    const columnsumlist = matrixcolumnsumcalculator(
      loadedmatrixWithSymetriValues,
      analysisitemlist
    )
    const normalizedmatrix = matrixNormalizationFactory(
      loadedmatrixWithSymetriValues,
      analysisitemlist,
      columnsumlist
    )
    const eugenvector = matrixRowsNormalizedSumcalculator(
      normalizedmatrix,
      analysisitemlist
    )
    expect(eugenvector[5].average).toBe(0.41502141760308314)
  })
})
