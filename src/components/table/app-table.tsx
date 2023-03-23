import React, {FC, useCallback, useState} from 'react';
import {useDispatch} from 'react-redux';
import {Table} from 'antd';

import {columnsTableMock, contentTableMock} from '../../common/mocks/table';
import {IRow, ITable} from '../../common/models/table-models';
import {replaceCoords, setCoords} from '../../redux/reducers/map-reducer';

const defaultStyles = {
  backgroundColor: '#fff',
  minWidth: '400px',
  overflow: 'auto',
  paddingRight: '5px'
};

export const AppTable: FC <ITable> = ({width}) => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<Array<string>>([]);
  const dispatch = useDispatch();

  const onSelectRow = useCallback(
    (row: IRow) => {
      return {
        onClick: () => {
          const clear = () => {
            setSelectedRowKeys([]);
            dispatch(replaceCoords());
          };

          if (row.key === selectedRowKeys[0]) {
            clear();
          } else {
            clear();
            // lazy dispatch
            setTimeout(() => {
              setSelectedRowKeys([row.key]);
              dispatch(setCoords(row));
            }, 10);
          }
        }
      }
    }, [selectedRowKeys, dispatch]
  );

  return (
    <div style={{...defaultStyles, width}}>
      <Table
        onRow={onSelectRow}
        columns={columnsTableMock}
        dataSource={contentTableMock}
        rowSelection={{selectedRowKeys}}
      />
    </div>
  );
};
