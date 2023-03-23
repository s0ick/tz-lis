import React, {FC} from 'react';

import {ISlickSlider} from '../../common/models/slick-slider-models';

const defaultStyles = {
  height: '768px',
  width: '4px',
  backgroundColor: '#CCC',
  transition: 'background-color .35s'
};

export const AppSlickSlider: FC<ISlickSlider> = ({isMouseDown}) => {
  return (
    <div
      style={{
        ...defaultStyles,
        backgroundColor: isMouseDown ? '#1890FF' : '#CCC',
        position: 'relative'
    }}
    >
      <div
        id={'slider-button-id'}
        style={{
          position: 'absolute',
          top: '48%',
          left: isMouseDown ? '-16px' : '-11px',
          width: isMouseDown ? '36px' : '28px',
          height: isMouseDown ? '36px' : '28px',
          borderRadius: '50%',
          backgroundColor: '#1890ff',
          cursor: 'pointer',
          zIndex: 9999,
          transition: 'width .35s, height .35s, left .35s'
        }}
      >
      </div>
    </div>
  );
}
