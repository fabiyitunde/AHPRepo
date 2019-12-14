export default function caseStudyInputResultFactory ({ makeId }) {
  return function caseStudyInputResult ({
    id = makeId(),
    caseStudyInputId,
    rowCaseStudyElementId,
    columnCaseStudyElementId,
    caseStudyIntensityId,
    isInFavourOfRow
  } = {}) {
    return Object.freeze({
      getId: () => id,
      getcaseStudyInputId: () => caseStudyInputId,
      getrowCaseStudyElementId: () => rowCaseStudyElementId,
      getcolumnCaseStudyElementId: () => columnCaseStudyElementId,
      getcaseStudyIntensityId: () => caseStudyIntensityId,
      geisInFavourOfRow: () => isInFavourOfRow
    })
  };
}
