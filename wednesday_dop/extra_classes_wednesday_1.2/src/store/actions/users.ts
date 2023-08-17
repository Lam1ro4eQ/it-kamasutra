import {UserType} from 'types';
import {v1} from "uuid";
import {generateRandomName} from "../../utils";

export const plusUserCount = () => ({
  type: 'PLUS_USER_COUNT',
}) as const;

export const createUser = (user: UserType) => ({
  type: 'CREATE_USER',
  payload: user
}) as const;


// export const createUserAC = () => ({ type: 'СREATE_USER', id: v1(), name: generateRandomName()}) as const