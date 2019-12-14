import { caseStudyElement } from '../domain';
export default function createCaseStudyElementFactory ({ caseStudyElementDb }) {
  return async function createCaseStudyElement (caseStudyElementInfo) {
    const newCaseStudyElement = caseStudyElement(caseStudyElementInfo)

    return caseStudyElementDb.insertCaseStudyElement({
      caseStudyId: newCaseStudyElement.getcaseStudyId(),
      description: newCaseStudyElement.getdescription(),
      order: newCaseStudyElement.getrorder()
    })
  };
}
