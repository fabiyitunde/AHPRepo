import Id from '../Id';

export default function caseStudyElementDbFactory ({ makeDb }) {
  return Object.freeze({
    findAll,
    findById,
    insertCaseStudy,
    updateCaseStudy,
    findByCaseStudyId
  })
  async function findAll () {
    const db = await makeDb()

    const result = await db.collection('caseStudyElement').find()
    return (await result.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found
    }))
  }
  async function findById ({ id: _id }) {
    const db = await makeDb()
    const result = await db.collection('caseStudyElement').find({ _id })
    const found = await result.toArray()
    if (found.length === 0) {
      return null
    }
    const { _id: id, ...info } = found[0]
    return { id, ...info }
  }
  async function findByCaseStudyId ({ caseStudyId }) {
    const db = await makeDb()
    const query = { caseStudyId }
    const result = await db.collection('caseStudyElement').find(query)
    return (await result.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found
    }))
  }
  async function insertCaseStudy ({
    id: _id = Id.makeId(),
    ...caseStudyElementInfo
  }) {
    const db = await makeDb()
    const result = await db
      .collection('caseStudyElement')
      .insertOne({ _id, ...caseStudyElementInfo })
    const { _id: id, ...insertedInfo } = result.ops[0]
    return { id, ...insertedInfo }
  }

  async function updateCaseStudy ({ id: _id, ...caseStudyElementInfo }) {
    const db = await makeDb()
    const result = await db
      .collection('caseStudyElement')
      .updateOne({ _id }, { $set: { ...caseStudyElementInfo } })
    return result.modifiedCount > 0
      ? { id: _id, ...caseStudyElementInfo }
      : null
  }
}
