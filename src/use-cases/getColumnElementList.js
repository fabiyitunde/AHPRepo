import { matrixmaker } from '../domain/index';
export default function getColumnElementListFactory ({ caseStudyDb }) {
  return async function getColumElementList ({ caseStudyElementId } = {}) {
    const existingrec = await caseStudyDb.findCaseStudyElementById({
      id: caseStudyElementId
    })
    const casestudyelementlist = await caseStudyDb.findCaseStudyElementByCaseStudyId(
      { caseStudyId: existingrec.caseStudyId }
    )
    const matrix = matrixmaker(casestudyelementlist)
    return casestudyelementlist.reduce((returnlist, elementitem) => {
      const matrixitem = matrix.find(
        a =>
          a.rowelement.id === caseStudyElementId &&
          a.columnelement.id === elementitem.id
      )
      if (matrixitem.columnindex > matrixitem.rowindex) {
        returnlist.push(elementitem)
      }
      return returnlist
    }, [])
  };
}
