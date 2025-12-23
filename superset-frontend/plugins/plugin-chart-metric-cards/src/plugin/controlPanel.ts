import { t, validateNonEmpty } from '@superset-ui/core';
import {
  ControlPanelConfig,
  sharedControls,
} from '@superset-ui/chart-controls';

const config: ControlPanelConfig = {
  controlPanelSections: [
    {
      label: t('Query'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'metric_a',
            config: {
              ...sharedControls.metrics,
              label: t('top'),
              multi: false,
              validators: [],
            },
          },
        ],
        // 第二行：上月
        [
          {
            name: 'metric_b',
            config: {
              ...sharedControls.metrics,
              label: t('left-date'),
              multi: false,
            },
          },
          {
            name: 'metric_c',
            config: {
              ...sharedControls.metrics,
              label: t('left-content'),
              multi: false,
            },
          },
        ],
        // 第三行：增长率
        [
          {
            name: 'metric_d',
            config: {
              ...sharedControls.metrics,
              label: t('right'),
              multi: false,
            },
          },
        ],
        ['adhoc_filters'],
      ],
    },
    {
      label: t('Hello Controls!'),
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'background_color', // 对应 formData 中的 key
            config: {
              type: 'ColorPickerControl',
              label: t('Background Color'),
              default: { r: 225, g: 223, b: 221, a: 1 }, // 默认值
              renderTrigger: true, // 修改后立即触发重绘
              description: t('Select a background color for the chart'),
            },
          },
        ],
        [
          {
            name: 'header_text',
            config: {
              type: 'TextControl',
              default: 'Hello, World!',
              renderTrigger: true,
              // ^ this makes it apply instantaneously, without triggering a "run query" button
              label: t('Header Text'),
              description: t('The text you want to see in the header'),
            },
          },
        ],
        [
          {
            name: 'header_font_size',
            config: {
              type: 'SelectControl',
              label: t('Font Size'),
              default: 'xl',
              choices: [
                // [value, label]
                ['xxs', 'xx-small'],
                ['xs', 'x-small'],
                ['s', 'small'],
                ['m', 'medium'],
                ['l', 'large'],
                ['xl', 'x-large'],
                ['xxl', 'xx-large'],
              ],
              renderTrigger: true,
              description: t('The size of your header font'),
            },
          },
        ],
      ],
    },
  ],
};

export default config;
