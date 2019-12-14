export default function caseStudyElementFactory ({ makeId }) {
  return function caseStudyElement ({
    id = makeId(),
    caseStudyId,
    description,
    order
  } = {}) {
    return Object.freeze({
      getId: () => id,
      getcaseStudyId: () => caseStudyId,
      getdescription: () => description,
      getrorder: () => order
    })
  };
}
