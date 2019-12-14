import Id from '../Id';

export default function caseStudyDbFactory ({ makeDb }) {
  return Object.freeze({
    findAll,
    findById,
    insertCaseStudy,
    updateCaseStudyInputResult,
    findCaseStudyByUserId,
    insertCaseStudyIntensity,
    insertCaseStudyInput,
    insertCaseStudyInputResult,
    findCaseStudyInputResultRecord,
    findCaseStudyElementByCaseStudyId,
    findCaseStudyInputByCaseStudyId,
    findCaseStudyIntensityByCaseStudyId,
    findCaseStudyElementById
  })
  async function findAll ({ publishedOnly = true } = {}) {
    const db = await makeDb()
    const query = publishedOnly ? { published: true } : {}
    const result = await db.collection('caseStudy').find(query)
    return (await result.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found
    }))
  }
  async function findById ({ id: _id }) {
    const db = await makeDb()
    const result = await db.collection('caseStudy').find({ _id })
    const found = await result.toArray()
    if (found.length === 0) {
      return null
    }
    const { _id: id, ...info } = found[0]
    return { id, ...info }
  }
  async function findCaseStudyElementById ({ id: _id }) {
    const db = await makeDb()
    const result = await db.collection('caseStudyElement').find({ _id })
    const found = await result.toArray()
    if (found.length === 0) {
      return null
    }
    const { _id: id, ...info } = found[0]
    return { id, ...info }
  }
  async function findCaseStudyByUserId ({ userid }) {
    const db = await makeDb()
    const query = { userid }
    var sortorder = { createdOn: -1 }
    const result = await db
      .collection('caseStudy')
      .find(query)
      .sort(sortorder)
    return (await result.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found
    }))
  }
  async function findCaseStudyElementByCaseStudyId ({ caseStudyId }) {
    const db = await makeDb()
    const query = { caseStudyId }
    var sortorder = { order: -1 }
    const result = await db
      .collection('caseStudyElement')
      .find(query)
      .sort(sortorder)
    return (await result.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found
    }))
  }
  async function findCaseStudyInputByCaseStudyId ({ caseStudyId }) {
    const db = await makeDb()
    const query = { caseStudyId }
    var sortorder = { description: -1 }
    const result = await db
      .collection('caseStudyInput')
      .find(query)
      .sort(sortorder)
    return (await result.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found
    }))
  }
  async function findCaseStudyIntensityByCaseStudyId ({ caseStudyId }) {
    const db = await makeDb()
    const query = { caseStudyId }
    var sortorder = { intensity: -1 }
    const result = await db
      .collection('caseStudyIntensity')
      .find(query)
      .sort(sortorder)
    return (await result.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found
    }))
  }
  async function findCaseStudyInputResultRecord ({
    caseStudyInputId,
    rowCaseStudyElementId,
    columnCaseStudyElementId
  }) {
    const db = await makeDb()
    const result = await db.collection('caseStudyInputResult').find({
      caseStudyInputId,
      rowCaseStudyElementId,
      columnCaseStudyElementId
    })
    const found = await result.toArray()
    if (found.length === 0) {
      return null
    }
    const { _id: id, ...info } = found[0]
    return { id, ...info }
  }
  async function insertCaseStudy ({ id: _id = Id.makeId(), ...caseStudyInfo }) {
    const db = await makeDb()
    const result = await db
      .collection('caseStudy')
      .insertOne({ _id, ...caseStudyInfo })
    const { _id: id, ...insertedInfo } = result.ops[0]
    return { id, ...insertedInfo }
  }
  async function insertCaseStudyIntensity ({
    id: _id = Id.makeId(),
    ...caseStudyIntensityInfo
  }) {
    const db = await makeDb()
    const result = await db
      .collection('caseStudyIntensity')
      .insertOne({ _id, ...caseStudyIntensityInfo })
    const { _id: id, ...insertedInfo } = result.ops[0]
    return { id, ...insertedInfo }
  }
  async function insertCaseStudyInput ({
    id: _id = Id.makeId(),
    ...caseStudyInputInfo
  }) {
    const db = await makeDb()
    const result = await db
      .collection('caseStudyInput')
      .insertOne({ _id, ...caseStudyInputInfo })
    const { _id: id, ...insertedInfo } = result.ops[0]
    return { id, ...insertedInfo }
  }
  async function insertCaseStudyInputResult ({
    id: _id = Id.makeId(),
    ...caseStudyInputResultInfo
  }) {
    const db = await makeDb()
    const result = await db
      .collection('caseStudyInputResult')
      .insertOne({ _id, ...caseStudyInputResultInfo })
    const { _id: id, ...insertedInfo } = result.ops[0]
    return { id, ...insertedInfo }
  }
  async function updateCaseStudyInputResult ({
    id: _id,
    ...caseStudyInputResultInfo
  }) {
    const db = await makeDb()
    const result = await db
      .collection('caseStudyInputResult')
      .updateOne({ _id }, { $set: { ...caseStudyInputResultInfo } })
    return result.modifiedCount > 0
      ? { id: _id, ...caseStudyInputResultInfo }
      : null
  }
}
