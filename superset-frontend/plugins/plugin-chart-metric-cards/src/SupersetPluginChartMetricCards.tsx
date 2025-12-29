import { useEffect, useRef } from 'react';
import { getNumberFormatter, styled } from '@superset-ui/core';
import dayjs from 'dayjs';
import { css, Global } from '@emotion/react';
import { Tooltip } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';
import {
  SupersetPluginChartMetricCardsProps,
  SupersetPluginChartMetricCardsStylesProps,
} from './types';

const redSvg =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDE0IDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMy4yODkzIDBIMC40NjEyMTdDMC4wNzY0NTE4IDAgLTAuMTM4MzkyIDAuNDA2MjUgMC4wOTk4ODkzIDAuNjgzNTk0TDYuNTEzOTUgOC4xMjEwOUM2LjY5NzU1IDguMzMzOTkgNy4wNTEwNiA4LjMzMzk5IDcuMjM2NjEgOC4xMjEwOUwxMy42NTA3IDAuNjgzNTk0QzEzLjg4OSAwLjQwNjI1IDEzLjY3NDEgMCAxMy4yODkzIDBaIiBmaWxsPSIjOUUyQTJCIi8+Cjwvc3ZnPgo=';
const greenSvg =
  'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iOSIgdmlld0JveD0iMCAwIDE0IDkiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxwYXRoIGQ9Ik0xMy4yODkzIDguMjgxMjVIMC40NjEyMTdDMC4wNzY0NTE4IDguMjgxMjUgLTAuMTM4MzkyIDcuODc1IDAuMDk5ODg5MyA3LjU5NzY2TDYuNTEzOTUgMC4xNjAxNTdDNi42OTc1NSAtMC4wNTI3MzM0IDcuMDUxMDYgLTAuMDUyNzMzNCA3LjIzNjYxIDAuMTYwMTU3TDEzLjY1MDcgNy41OTc2NkMxMy44ODkgNy44NzUgMTMuNjc0MSA4LjI4MTI1IDEzLjI4OTMgOC4yODEyNVoiIGZpbGw9IiM0NzZEM0IiLz4KPC9zdmc+Cg==';

const Styles = styled.div<SupersetPluginChartMetricCardsStylesProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  // padding: ${({ theme }) => theme.gridUnit * 4}px;
  padding: 16px 20px;
  width: ${({ width }) => width}px;
  position: relative;
`;

export default function SupersetPluginChartMetricCards(
  props: SupersetPluginChartMetricCardsProps,
) {
  const {
    headerText,
    height,
    width,
    backgroundColor,
    data,
    dateFormat,
    tips,
    numberFormat,
    momFormat,
    momInvert,
  } = props;
  const rootElem = useRef<HTMLDivElement>(null);

  const isTop = momInvert ? !(data?.metricD > 0) : data?.metricD > 0;
  const smartFormatter = getNumberFormatter(numberFormat);

  useEffect(() => {
    const root = rootElem.current as HTMLElement;
    const prent = root.closest('.resizable-container');
    if (prent) {
      prent.classList.add('__volvo_card_parent');
    }
  });

  return (
    <Styles
      ref={rootElem}
      height={height}
      width={width}
      backgroundColor={backgroundColor}
    >
      {tips ? (
        <Tooltip title={tips} placement="top">
          <InfoCircleOutlined
            style={{
              cursor: 'pointer',
              color: '#888B8D',
              fontSize: 16,
              position: 'absolute',
              right: 20,
              top: 24,
            }}
          />
        </Tooltip>
      ) : null}
      <Global
        styles={css`
          .__volvo_card_parent {
            .dashboard-component-chart-holder {
              display: flex;
              flex-direction: column;
              padding: 0 !important;
              div[data-test='slice-header'] {
                display: none;
              }
              .header-title,
              .header-controls {
                display: none;
              }
              .chart-slice {
                flex: 1;
                .dashboard-chart {
                  height: 100%;
                  .chart-container {
                    height: 100%;
                    .slice_container {
                      height: 100%;
                      & > div {
                        height: 100%;
                      }
                      .metric_cards {
                        height: 100%;
                        & > div {
                          height: 100%;
                          width: 100%;
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `}
      />
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
            title={headerText}
            style={{
              color: '#141414',
              lineHeight: '22px',
              padding: '5px 0',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
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
            {smartFormatter(data?.metricA || 0)}
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
              {smartFormatter(data?.metricC || 0)}
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
                height: 'calc(100% - 24px)',
                marginTop: '12px',
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
                color: isTop ? 'rgba(71, 109, 59, 1)' : 'rgba(158, 42, 43, 1)',
                padding: '2px 0',
              }}
            >
              <img
                width={14}
                style={{
                  marginRight: 10,
                  verticalAlign: '1px',
                }}
                src={isTop ? greenSvg : redSvg}
                alt=""
              />
              <span>
                {getNumberFormatter(momFormat)?.((data?.metricD || 0) * 100)}{' '}
              </span>
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
