export default function getCaseStudyListForUserFactory ({ caseStudyDb }) {
  return async function getCaseStudyListForUser ({ userid } = {}) {
    const casestudylist = await caseStudyDb.findCaseStudyByUserId({ userid })

    return casestudylist.reduce((returnlist, casestudyitem) => {
      var casestudy = {}
      const elementlist = caseStudyDb.findCaseStudyElementByCaseStudyId({
        caseStudyId: casestudyitem.id
      })
      const inputlist = caseStudyDb.findCaseStudyInputByCaseStudyId({
        caseStudyId: casestudyitem.id
      })
      casestudy.id = casestudyitem.id
      casestudy.description = casestudyitem.description
      casestudy.remarks = casestudyitem.remarks
      casestudy.createdOn = casestudyitem.createdOn
      casestudy.elementlistcount = elementlist.length
      casestudy.inputlistcount = inputlist.length
      returnlist.push(casestudy)
      return returnlist
    }, [])

    // If this gets slow introduce caching.
  };
}
