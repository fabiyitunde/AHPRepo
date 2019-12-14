import { caseStudyInputResult } from '../domain';
export default function createCaseStudyInputResultFactory ({ caseStudyDb }) {
  return async function createCaseStudyInputResult (caseStudyInputResultInfo) {
    const newrec = caseStudyInputResult(caseStudyInputResultInfo)
    const existingrec = caseStudyDb.findCaseStudyInputResultRecord({
      caseStudyInputId: newrec.getcaseStudyInputId(),
      rowCaseStudyElementId: newrec.getrowCaseStudyElementId(),
      columnCaseStudyElementId: newrec.getcolumnCaseStudyElementId()
    })
    if (existingrec) {
      return caseStudyDb.updateCaseStudyInputResult({
        caseStudyInputId: newrec.getcaseStudyInputId(),
        caseStudyIntensityId: newrec.getcaseStudyIntensityId(),
        rowCaseStudyElementId: newrec.getrowCaseStudyElementId(),
        columnCaseStudyElementId: newrec.getcolumnCaseStudyElementId(),
        isInFavourOfRow: newrec.geisInFavourOfRow()
      })
    } else {
      return caseStudyDb.insertCaseStudyInputResult({
        caseStudyInputId: newrec.getcaseStudyInputId(),
        caseStudyIntensityId: newrec.getcaseStudyIntensityId(),
        rowCaseStudyElementId: newrec.getrowCaseStudyElementId(),
        columnCaseStudyElementId: newrec.getcolumnCaseStudyElementId(),
        isInFavourOfRow: newrec.geisInFavourOfRow()
      })
    }
  }
}
