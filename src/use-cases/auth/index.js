import createUserFactory from './createUser';
import authenticateUserFactory from './authenticateUser';
import {
  encryptpassword,
  comparepasswords
} from '../../providers/encryptionProvider';
import { generateToken } from '../../providers/jwebTokenProvider';
import { usersDb } from '../../data-access/index';

const createUser = createUserFactory(encryptpassword, usersDb, generateToken)
const authenticateUser = authenticateUserFactory(
  comparepasswords,
  usersDb,
  generateToken
)
export { createUser, authenticateUser }
