export const getTestAnalysisItemList = () => {
  var analysisitemlist = []
  analysisitemlist.push({ id: 1, description: 'Lexus GX470' })
  analysisitemlist.push({ id: 2, description: 'Range Rover Sport' })
  analysisitemlist.push({ id: 3, description: 'Audi QX' })
  analysisitemlist.push({ id: 4, description: 'GWagon' })
  analysisitemlist.push({ id: 5, description: 'Avensis' })
  analysisitemlist.push({ id: 6, description: 'X6 BMW' })
  return analysisitemlist
};

export const getDataToLoadMatrix = () => {
  var datalist = []

  const oneoverfive = 1 / 5
  const oneoverseven = 1 / 7
  const oneoversix = 1 / 6

  // process Lexus GX470 row 1
  datalist.push({
    rowanalysisitemid: 1,
    columnanalysisitemid: 2,
    value: oneoverseven
  })
  datalist.push({
    rowanalysisitemid: 1,
    columnanalysisitemid: 3,
    value: 9
  })
  datalist.push({
    rowanalysisitemid: 1,
    columnanalysisitemid: 4,
    value: 5
  })
  datalist.push({
    rowanalysisitemid: 1,
    columnanalysisitemid: 5,
    value: 9
  })
  datalist.push({
    rowanalysisitemid: 1,
    columnanalysisitemid: 6,
    value: oneoverfive
  })
  // process Range Rover Sport row 2
  datalist.push({
    rowanalysisitemid: 2,
    columnanalysisitemid: 3,
    value: 9
  })
  datalist.push({
    rowanalysisitemid: 2,
    columnanalysisitemid: 4,
    value: 5
  })
  datalist.push({
    rowanalysisitemid: 2,
    columnanalysisitemid: 5,
    value: 9
  })
  datalist.push({
    rowanalysisitemid: 2,
    columnanalysisitemid: 6,
    value: oneoversix
  })
  // process Range Rover Sport row 3
  datalist.push({
    rowanalysisitemid: 3,
    columnanalysisitemid: 4,
    value: 3
  })
  datalist.push({
    rowanalysisitemid: 3,
    columnanalysisitemid: 5,
    value: 4
  })
  datalist.push({
    rowanalysisitemid: 3,
    columnanalysisitemid: 6,
    value: oneoverseven
  })
  datalist.push({
    rowanalysisitemid: 4,
    columnanalysisitemid: 5,
    value: 2
  })
  datalist.push({
    rowanalysisitemid: 4,
    columnanalysisitemid: 6,
    value: oneoversix
  })
  datalist.push({
    rowanalysisitemid: 5,
    columnanalysisitemid: 6,
    value: oneoverseven
  })
  return datalist
};
