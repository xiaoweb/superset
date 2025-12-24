import { useEffect, useRef } from 'react';
import { styled } from '@superset-ui/core';
import dayjs from 'dayjs';

import {
  SupersetPluginChartMetricCardsProps,
  SupersetPluginChartMetricCardsStylesProps,
} from './types';

const Styles = styled.div<SupersetPluginChartMetricCardsStylesProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ theme }) => theme.gridUnit * 4}px;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;

export default function SupersetPluginChartMetricCards(
  props: SupersetPluginChartMetricCardsProps,
) {
  const {
    headerText,
    height,
    width,
    backgroundColor,
    parentClassName,
    data,
    dateFormat,
  } = props;
  const rootElem = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = rootElem.current as HTMLElement;
    if (parentClassName) {
      root.closest('.dragdroppable')?.classList?.add(parentClassName);
    }
  }, [parentClassName, rootElem]);
  return (
    <Styles
      ref={rootElem}
      boldText={props.boldText}
      headerFontSize={props.headerFontSize}
      height={height}
      width={width}
      backgroundColor={backgroundColor}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div
          style={{
            fontSize: '14px',
            lineHeight: '22px',
            color: '#141414',
          }}
        >
          <div
            style={{
              color: '#141414',
              lineHeight: '22px',
              padding: '5px 0',
            }}
          >
            {headerText}
          </div>
          <div
            style={{
              fontSize: '30px',
              lineHeight: '40px',
              color: '#222121',
              fontWeight: 500,
            }}
          >
            {data?.metricA}
          </div>
        </div>
        <div
          style={{
            width: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.06)',
            height: '1px',
            margin: '9px 0',
          }}
        />
        <div
          style={{
            display: 'flex',
          }}
        >
          <div
            style={{
              flex: 2,
              textAlign: 'left',
            }}
          >
            <div
              style={{
                fontSize: '14px',
                lineHeight: '22px',
                color: '#888B8D',
              }}
            >
              {dayjs(data?.metricB).format(dateFormat)}
            </div>
            <div
              style={{
                fontSize: '16px',
                lineHeight: '28px',
                color: 'rgba(0, 0, 0, 0.85)',
                padding: '2px 0',
              }}
            >
              {data?.metricC}
            </div>
          </div>
          <div
            style={{
              flex: 0.8,
            }}
          >
            <div
              style={{
                width: '1px',
                backgroundColor: 'rgba(0, 0, 0, 0.06)',
                textAlign: 'center',
                height: '100%',
                marginTop: '6px',
                display: 'inline-block',
              }}
            />
          </div>
          <div
            style={{
              flex: 2,
              textAlign: 'left',
            }}
          >
            <div
              style={{
                fontSize: '14px',
                lineHeight: '22px',
                color: '#888B8D',
              }}
            >
              MoM
            </div>
            <div
              style={{
                fontSize: '16px',
                lineHeight: '28px',
                color: 'rgba(158, 42, 43, 1)',
                padding: '2px 0',
              }}
            >
              {(data?.metricD * 100).toFixed(2)}{' '}
              <span
                style={{
                  fontSize: '12px',
                }}
              >
                %
              </span>
            </div>
          </div>
        </div>
      </div>
    </Styles>
  );
}
