import Id from '../Id';

export default function makeUsersDb ({ makeDb }) {
  return Object.freeze({
    findAll,
    findById,
    insertuser,
    updateuser,
    findByUserId
  })
  async function findAll ({ publishedOnly = true } = {}) {
    const db = await makeDb()
    const query = publishedOnly ? { published: true } : {}
    const result = await db.collection('userInfo').find(query)
    return (await result.toArray()).map(({ _id: id, ...found }) => ({
      id,
      ...found
    }))
  }
  async function findById ({ id: _id }) {
    const db = await makeDb()
    const result = await db.collection('userInfo').find({ _id })
    const found = await result.toArray()
    if (found.length === 0) {
      return null
    }
    const { _id: id, ...info } = found[0]
    return { id, ...info }
  }
  async function findByUserId ({ userid }) {
    const db = await makeDb()
    const result = await db.collection('userInfo').find({ userid })
    const found = await result.toArray()
    if (found.length === 0) {
      return null
    }
    const { _id: id, ...info } = found[0]
    return { id, ...info }
  }
  async function insertuser ({ id: _id = Id.makeId(), ...userInfo }) {
    const db = await makeDb()
    const result = await db
      .collection('userInfo')
      .insertOne({ _id, ...userInfo })
    const { _id: id, ...insertedInfo } = result.ops[0]
    return { id, ...insertedInfo }
  }

  async function updateuser ({ id: _id, ...userInfo }) {
    const db = await makeDb()
    const result = await db
      .collection('userInfo')
      .updateOne({ _id }, { $set: { ...userInfo } })
    return result.modifiedCount > 0 ? { id: _id, ...userInfo } : null
  }
}
