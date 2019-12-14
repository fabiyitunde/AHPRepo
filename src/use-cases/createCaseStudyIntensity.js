import { caseStudyIntensity } from '../domain';
export default function createcaseStudyIntensityFactory ({ caseStudyDb }) {
  return async function createCaseStudyIntensity (caseStudyIntensityInfo) {
    const newcaseStudyIntensity = caseStudyIntensity(caseStudyIntensityInfo)

    return caseStudyDb.insertCaseStudyIntensity({
      caseStudyId: newcaseStudyIntensity.getcaseStudyId(),
      description: newcaseStudyIntensity.getdescription(),
      intensity: newcaseStudyIntensity.getintensity()
    })
  };
}
