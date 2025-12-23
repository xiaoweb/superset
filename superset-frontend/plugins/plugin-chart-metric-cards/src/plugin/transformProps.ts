import { ChartProps, TimeseriesDataRecord } from '@superset-ui/core';

export default function transformProps(chartProps: ChartProps) {
  const { width, height, formData, queriesData } = chartProps;
  const { boldText, headerFontSize, headerText, backgroundColor } = formData;
  window.console.log(queriesData, 111);

  return {
    width,
    height,
    data: queriesData,
    boldText,
    headerFontSize,
    headerText,
    backgroundColor: backgroundColor
      ? `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`
      : 'transparent',
  };
}
