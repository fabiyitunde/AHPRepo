export default function getCaseStudyIntensityListFactory ({ caseStudyDb }) {
  return async function getCaseStudyIntensityList ({ caseStudyId } = {}) {
    const returnlist = await caseStudyDb.findCaseStudyIntensityByCaseStudyId({
      caseStudyId
    })

    return returnlist
  };
}
