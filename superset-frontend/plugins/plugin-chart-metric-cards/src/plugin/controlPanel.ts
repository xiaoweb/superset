import { t } from '@superset-ui/core';
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
              label: t('Header Text'),
              description: t('The text you want to see in the header'),
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
            name: 'parent_class_name',
            config: {
              type: 'TextControl',
              label: t('Parent add className'),
              description:
                'Add a custom class to the parent element of the class dragdroppabl',
              renderTrigger: true,
            },
          },
        ],
      ],
    },
  ],
};

export default config;
