export default function getCaseStudyElementListFactory ({ caseStudyDb }) {
  return async function getCaseStudyElementList ({ caseStudyId } = {}) {
    const casestudyelementlist = await caseStudyDb.findCaseStudyElementByCaseStudyId(
      { caseStudyId }
    )

    return casestudyelementlist
  };
}
