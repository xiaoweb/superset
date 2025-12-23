import { useEffect, createRef } from 'react';
import { styled } from '@superset-ui/core';
import {
  SupersetPluginChartMetricCardsProps,
  SupersetPluginChartMetricCardsStylesProps,
} from './types';

const Styles = styled.div<SupersetPluginChartMetricCardsStylesProps>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  padding: ${({ theme }) => theme.gridUnit * 4}px;
  border-radius: ${({ theme }) => theme.gridUnit * 2}px;
  height: ${({ height }) => height}px;
  width: ${({ width }) => width}px;
`;

export default function SupersetPluginChartMetricCards(
  props: SupersetPluginChartMetricCardsProps,
) {
  const { headerText, height, width, backgroundColor } = props;

  const rootElem = createRef<HTMLDivElement>();

  useEffect(() => {
    const root = rootElem.current as HTMLElement;
  });
  return (
    <Styles
      ref={rootElem}
      boldText={props.boldText}
      headerFontSize={props.headerFontSize}
      height={height}
      width={width}
      backgroundColor={backgroundColor}
    >
      {headerText}
    </Styles>
  );
}
