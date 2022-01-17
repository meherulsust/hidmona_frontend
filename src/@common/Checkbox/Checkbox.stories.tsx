import React from 'react';
import { ComponentStory, Meta } from '@storybook/react';

import VSCheckbox from './Checkbox';

const sizes = {
  sm: 'sm',
  md: 'md',
  lg: 'lg',
  xl: 'xl',
};

const meta: Meta<typeof VSCheckbox> = {
  title: 'VSCheckbox',
  component: VSCheckbox,
  argTypes: {
    size: {
      options: Object.keys(sizes),
      mapping: sizes,
      defaultValue: 'md',
      control: {
        type: 'select',
        labels: {
          sm: 'sm',
          md: 'md',
          lg: 'lg',
          xl: 'xl',
        },
      },
    },
    disabled: {
      defaultValue: false,
      control: 'boolean',
    },
    checked: {
      defaultValue: false,
      control: 'boolean',
    },
    className: {
      defaultValue: '',
      control: 'text',
    },
    onChange: {
      action: 'changed',
    },
    value: {
      defaultValue: '',
      control: 'text',
    },
    label: {
      defaultValue: '',
      control: 'text',
    },
    children: {
      defaultValue: '',
      control: 'text',
    },
    labelClassName: {
      defaultValue: '',
      control: 'text',
    },
  },
};

export default meta;

// Template
const Template: ComponentStory<typeof VSCheckbox> = (args) => (
  <VSCheckbox {...args} />
);

// Checkbox
export const Checkbox = Template.bind({});
Checkbox.args = {
  label: 'Checkbox',
};

// Checkbox checked
export const CheckboxChecked = Template.bind({});
CheckboxChecked.args = {
  children: 'Checked',
  checked: true,
};

// Checkbox disabled
export const CheckboxDisabled = Template.bind({});
CheckboxDisabled.args = {
  label: 'Disabled',
  disabled: true,
};
