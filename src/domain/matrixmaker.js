export const buildmatrixmaker = () => {
  return analysisitemlist => {
    var matrixitemlist = []
    for (let rowindex = 0; rowindex < analysisitemlist.length; rowindex++) {
      const rowelement = analysisitemlist[rowindex]
      for (
        let columnindex = 0;
        columnindex < analysisitemlist.length;
        columnindex++
      ) {
        const columnelement = analysisitemlist[columnindex]
        var matrixitem = {}
        matrixitem.rowindex = rowindex
        matrixitem.columnindex = columnindex
        matrixitem.rowelement = rowelement
        matrixitem.columnelement = columnelement
        matrixitem.value = rowelement === columnelement ? 1.0 : 0
        matrixitem.normalizedvalue = 0
        matrixitemlist.push(matrixitem)
      }
    }
    return matrixitemlist
  };
}

export const buildmatrixdataloader = () => {
  return (data, matrix, analysisitemlist) => {
    for (let rowindex = 0; rowindex < analysisitemlist.length; rowindex++) {
      const rowelement = analysisitemlist[rowindex]
      for (
        let columnindex = 0;
        columnindex < analysisitemlist.length;
        columnindex++
      ) {
        const columnelement = analysisitemlist[columnindex]
        if (columnindex > rowindex) {
          const dataitem = data.find(
            a =>
              a.rowanalysisitemid === rowelement.id &&
              a.columnanalysisitemid === columnelement.id
          )
          if (dataitem) {
            var matrixitem = matrix.find(
              a => a.rowindex === rowindex && a.columnindex === columnindex
            )
            matrixitem.value = dataitem.value
          }
        }
      }
    }
    return matrix
  };
}

export const buildmatrixcolumnsumcalculator = () => {
  return (matrix, analysisitemlist) => {
    var columntotallist = []
    for (
      let columnindex = 0;
      columnindex < analysisitemlist.length;
      columnindex++
    ) {
      const currentcolumndatalist = matrix.filter(
        a => a.columnindex === columnindex
      )

      const columnsum = currentcolumndatalist.reduce((acc, cellitem) => {
        acc = acc + cellitem.value
        return acc
      }, 0)

      columntotallist.push({ index: columnindex, value: columnsum })
    }

    return columntotallist
  };
}

export const buildMatrixSymetricValueFactory = () => {
  return (matrix, analysisitemlist) => {
    for (let rowindex = 0; rowindex < analysisitemlist.length; rowindex++) {
      for (
        let columnindex = 0;
        columnindex < analysisitemlist.length;
        columnindex++
      ) {
        if (rowindex > columnindex) {
          const upperrightvalue = matrix.find(
            a => a.rowindex === columnindex && a.columnindex === rowindex
          )
          const lowerleftvalue = matrix.find(
            a => a.rowindex === rowindex && a.columnindex === columnindex
          )
          lowerleftvalue.value =
            upperrightvalue.value !== 0 ? 1 / upperrightvalue.value : 0
        }
      }
    }
    return matrix
  };
}

export const buildMatrixNormalizationFactory = () => {
  return (matrix, analysisitemlist, columnsumlist) => {
    for (
      let columnindex = 0;
      columnindex < analysisitemlist.length;
      columnindex++
    ) {
      const currentcolumnsum = columnsumlist[columnindex]
      const currentcolumnMatrixItemList = matrix.filter(
        a => a.columnindex === columnindex
      )
      currentcolumnMatrixItemList.forEach(element => {
        element.normalizedvalue = element.value / currentcolumnsum.value
      })
    }
    return matrix
  };
}
export const buildMatrixRowsNormalizedSumcalculator = () => {
  return (matrix, analysisitemlist) => {
    var rowstotallist = []
    for (let rowindex = 0; rowindex < analysisitemlist.length; rowindex++) {
      const currentrowdatalist = matrix.filter(a => a.rowindex === rowindex)

      const rowsum = currentrowdatalist.reduce((acc, cellitem) => {
        acc = acc + cellitem.normalizedvalue
        return acc
      }, 0)
      const average = rowsum / analysisitemlist.length
      rowstotallist.push({ index: rowindex, value: rowsum, average: average })
    }

    return rowstotallist
  };
}
