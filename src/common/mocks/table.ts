import {ID_FIELDS} from '../../utils/constants';

export const columnsTableMock = [
  {
    title: '№',
    dataIndex: 'number',
    key: 'number'
  },
  {
    title: 'Координаты от lat',
    dataIndex: ID_FIELDS.FROM_LAT,
    key: ID_FIELDS.FROM_LAT
  },
  {
    title: 'Координаты от lng',
    dataIndex: ID_FIELDS.FROM_LNG,
    key: ID_FIELDS.FROM_LNG
  },
  {
    title: 'Координаты до lat',
    dataIndex: ID_FIELDS.UP_TO_LAT,
    key: ID_FIELDS.UP_TO_LAT
  },
  {
    title: 'Координаты до lng',
    dataIndex: ID_FIELDS.UP_TO_LNG,
    key: ID_FIELDS.UP_TO_LNG
  }
];

export const contentTableMock = [
  {
    key: '1',
    number: 1,
    [ID_FIELDS.FROM_LAT]: 59.84660399,
    [ID_FIELDS.FROM_LNG]: 30.29496392,
    [ID_FIELDS.UP_TO_LAT]: 59.82934196,
    [ID_FIELDS.UP_TO_LNG]: 30.42423701
  },
  {
    key: '2',
    number: 2,
    [ID_FIELDS.FROM_LAT]: 59.82934196,
    [ID_FIELDS.FROM_LNG]: 30.42423701,
    [ID_FIELDS.UP_TO_LAT]: 59.82761295,
    [ID_FIELDS.UP_TO_LNG]: 30.41705607
  },
  {
    key: '3',
    number: 3,
    [ID_FIELDS.FROM_LAT]: 59.83567701,
    [ID_FIELDS.FROM_LNG]: 30.38064206,
    [ID_FIELDS.UP_TO_LAT]: 59.84660399,
    [ID_FIELDS.UP_TO_LNG]: 30.29496392
  },
  {
    key: '4',
    number: 4,
    [ID_FIELDS.FROM_LAT]: 59.84660399,
    [ID_FIELDS.FROM_LNG]: 30.29496392,
    [ID_FIELDS.UP_TO_LAT]: 59.82761295,
    [ID_FIELDS.UP_TO_LNG]: 30.41705607
  },
  {
    key: '5',
    number: 5,
    [ID_FIELDS.FROM_LAT]: 59.83567701,
    [ID_FIELDS.FROM_LNG]: 30.38064206,
    [ID_FIELDS.UP_TO_LAT]: 59.84660399,
    [ID_FIELDS.UP_TO_LNG]: 30.29496392
  }
];
