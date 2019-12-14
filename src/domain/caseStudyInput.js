export default function caseStudyInputFactory ({ makeId }) {
  return function caseStudyInput ({
    id = makeId(),
    caseStudyId,
    description
  } = {}) {
    return Object.freeze({
      getId: () => id,
      getcaseStudyId: () => caseStudyId,
      getdescription: () => description
    })
  };
}
