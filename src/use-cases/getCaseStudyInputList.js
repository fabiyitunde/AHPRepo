export default function getCaseStudyInputListFactory ({ caseStudyDb }) {
  return async function getCaseStudyInputList ({ caseStudyId } = {}) {
    const returnlist = await caseStudyDb.findCaseStudyInputByCaseStudyId({
      caseStudyId
    })

    return returnlist
  };
}
