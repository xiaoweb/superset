import {
  ChartProps,
  DataRecord,
  PlainObject,
  QueryData,
} from '@superset-ui/core';

const getData = (formData: PlainObject, [queriesData]: QueryData[]) => {
  const data = {};
  const metricAField = formData?.metricA?.label;
  const metricBField = formData?.metricB?.label;
  const metricCField = formData?.metricC?.label;
  const metricDField = formData?.metricD?.label;

  queriesData?.data?.forEach?.((queryData: DataRecord) => {
    Object.assign(data, {
      metricA: queryData[metricAField],
      metricB: queryData[metricBField],
      metricC: queryData[metricCField],
      metricD: queryData[metricDField],
    });
  });

  return data;
};

export default function transformProps(chartProps: ChartProps) {
  const { width, height, formData, queriesData } = chartProps;
  const {
    boldText,
    headerFontSize,
    headerText,
    backgroundColor,
    parentClassName,
    dateFormat,
    tips,
    numberFormat,
    momFormat,
  } = formData;

  return {
    width,
    height,
    data: getData(formData, queriesData),
    boldText,
    headerFontSize,
    headerText,
    parentClassName,
    dateFormat,
    tips,
    numberFormat,
    momFormat,
    backgroundColor: backgroundColor
      ? `rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`
      : 'transparent',
  };
}
