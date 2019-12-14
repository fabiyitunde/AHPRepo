import { caseStudy } from '../domain';
export default function createCaseStudyFactory ({ caseStudyDb }) {
  return async function createCaseStudy (caseStudyInfo) {
    const newCaseStudy = caseStudy(caseStudyInfo)

    return caseStudyDb.insertCaseStudy({
      userid: newCaseStudy.getUserId(),
      description: newCaseStudy.getdescription(),
      remarks: newCaseStudy.getremarks()
    })
  };
}
