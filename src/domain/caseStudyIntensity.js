export default function caseStudyIntensityFactory ({ makeId }) {
  return function caseStudyIntensity ({
    id = makeId(),
    caseStudyId,
    description,
    intensity
  } = {}) {
    return Object.freeze({
      getId: () => id,
      getcaseStudyId: () => caseStudyId,
      getdescription: () => description,
      getintensity: () => intensity
    })
  };
}
