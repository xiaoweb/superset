import { t } from '@superset-ui/core';
import {
  ControlPanelConfig,
  D3_FORMAT_OPTIONS,
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
      expanded: true,
      controlSetRows: [
        [
          {
            name: 'background_color',
            config: {
              type: 'ColorPickerControl',
              label: t('Background Color'),
              default: { r: 238, g: 236, b: 234, a: 1 }, // 默认值
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
              label: t('Header Text'),
              description: t('The text you want to see in the header'),
            },
          },
        ],
        [
          {
            name: 'number_format',
            config: {
              type: 'SelectControl',
              label: t('Digital format'),
              renderTrigger: true,
              default: ',d',
              choices: D3_FORMAT_OPTIONS,
            },
          },
        ],
        [
          {
            name: 'empty_text',
            config: {
              type: 'TextControl',
              label: t('Empty Text'),
              renderTrigger: true,
              default: '-',
            },
          },
        ],
        [
          {
            name: 'MOM_format',
            config: {
              type: 'SelectControl',
              label: t('MOM format'),
              renderTrigger: true,
              default: ',.1f',
              choices: [
                [',.1f', ',.1f (12345.432 => 12,345.4)'],
                [',.2f', ',.2f (12345.432 => 12,345.43)'],
                [',.3f', ',.3f (12345.432 => 12,345.432)'],
              ],
            },
          },
        ],
        [
          {
            name: 'MOM_invert',
            config: {
              type: 'CheckboxControl',
              label: t('Invert MOM'),
              renderTrigger: true,
              default: false,
            },
          },
        ],
        [
          {
            name: 'date_format',
            config: {
              type: 'TextControl',
              default: 'YYYYMMM',
              renderTrigger: true,
              label: t('Date Format'),
            },
          },
        ],
        [
          {
            name: 'tips',
            config: {
              type: 'TextControl',
              label: t('Tips'),
              renderTrigger: true,
            },
          },
        ],
      ],
    },
  ],
};

export default config;
