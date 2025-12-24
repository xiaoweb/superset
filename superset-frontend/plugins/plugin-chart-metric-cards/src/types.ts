import { supersetTheme } from '@superset-ui/core';

export interface SupersetPluginChartMetricCardsStylesProps {
  height: number;
  width: number;
  headerFontSize: keyof typeof supersetTheme.typography.sizes;
  boldText: boolean;
  backgroundColor: string;
}

interface SupersetPluginChartMetricCardsCustomizeProps {
  headerText: string;
  parentClassName: string;
  dateFormat: string;
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
