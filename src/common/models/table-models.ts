import {ID_FIELDS} from '../../utils/constants';

export interface ITable {
  width: number
}

export interface IRow {
  key: string,
  number: number,
  [ID_FIELDS.FROM_LAT]: number,
  [ID_FIELDS.FROM_LNG]: number,
  [ID_FIELDS.UP_TO_LAT]: number,
  [ID_FIELDS.UP_TO_LNG]: number
}
