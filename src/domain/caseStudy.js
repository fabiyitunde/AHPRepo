export default function caseStudyFactory ({ makeId }) {
  return function caseStudy ({
    id = makeId(),
    userid,
    description,
    remarks,
    createdOn = new Date()
  } = {}) {
    return Object.freeze({
      getId: () => id,
      getUserId: () => userid,
      getdescription: () => description,
      getremarks: () => remarks,
      getCreatedOn: () => createdOn
    })
  };
}
