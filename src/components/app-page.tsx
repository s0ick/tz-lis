import React, {useCallback, useEffect, useRef, useState} from 'react';
import {Space, Layout, Spin} from 'antd';

import {useElementWidth} from '../common/hooks/useElementWidth';

import {AppTable} from './table/app-table';
import {AppMap} from './map/app-map';
import {AppSlickSlider} from './slick-slider/app-slick-slider';

const {Content} = Layout;

export const AppPage = () => {
  const containerRef = useRef<HTMLElement>(null);
  const containerWidth = useElementWidth(containerRef.current, 0);

  const [tableWidth, setTableWidth] = useState<number>(768);
  const [mapWidth, setMapWidth] = useState<number>(768);
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const setWidth = useCallback(
    (x: number) => {
      if (x >= containerWidth * 0.25 && x <= containerWidth * 0.72) {
        setTableWidth(x);
        setMapWidth(containerWidth - 45 - x);
      }
    }, [containerWidth]
  );

  const onMouseDownBtn =(event: React.MouseEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;

    if (target.id === 'slider-button-id') {
      setIsMouseDown(true);
    }
  };

  const onMouseUpBtn = () => setIsMouseDown(false);

  const onMouseMoveBtn = useCallback(
    (event: React.MouseEvent<EventTarget>) => {
      if (isMouseDown) {
        setWidth(event.clientX - 28); // 28: Btn width
      }
    }, [isMouseDown]
  );

  const onMouseOutBtn = (event: React.MouseEvent<EventTarget>) => {
    const target = event.target as HTMLInputElement;

    if (target.id === 'container-slider') {
      setIsMouseDown(false);
    }
  }

  useEffect(() => {
    if (containerWidth || containerRef.current) {
      setTableWidth((containerWidth - 45) / 2);
      setMapWidth((containerWidth - 45) / 2);
      setIsLoading(false);
    }
  }, [containerWidth, containerRef.current]);

  return (
    <Layout className={'layout'} ref={containerRef}>
      <Content style={{padding: '20px'}}>
        <div
          id={'container-slider'}
          onMouseDown={onMouseDownBtn}
          onMouseUp={onMouseUpBtn}
          onMouseMove={onMouseMoveBtn}
          onMouseOut={onMouseOutBtn}
        >
          {isLoading && <Spin size={'large'}/>}
          {!isLoading &&
            <Space align={'start'} size={0}>
              <AppTable width={tableWidth}/>
              <AppSlickSlider isMouseDown={isMouseDown}/>
              <AppMap width={mapWidth}/>
            </Space>
          }
        </div>
      </Content>
    </Layout>
  );
};
