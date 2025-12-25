export interface SupersetPluginChartMetricCardsStylesProps {
  height: number;
  width: number;
  backgroundColor: string;
}

interface SupersetPluginChartMetricCardsCustomizeProps {
  headerText: string;
  parentClassName: string;
  dateFormat: string;
  tips?: string;
  numberFormat: string;
  momFormat: string;
}

export type SupersetPluginChartMetricCardsProps =
  SupersetPluginChartMetricCardsStylesProps &
    SupersetPluginChartMetricCardsCustomizeProps & {
      data: {
        metricA: number;
        metricB: number;
        metricC: number;
        metricD: number;
      };
    };
