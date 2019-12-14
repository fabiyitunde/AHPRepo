import { caseStudyInput } from '../domain';
export default function createCaseStudyInputFactory ({ caseStudyDb }) {
  return async function createCaseStudyInput (caseStudyInputInfo) {
    const newrec = caseStudyInput(caseStudyInputInfo)

    return caseStudyDb.insertCaseStudyInput({
      caseStudyId: newrec.getcaseStudyId(),
      description: newrec.getdescription()
    })
  };
}
