import { ComponentStory, Meta } from '@storybook/react';

import VSButton from './Button';

const sizes = {
  auto: 'auto',
  sm: 'sm',
  lg: 'lg',
  xl: 'xl',
};

const types = {
  button: 'button',
  submit: 'submit',
  reset: 'reset',
};

const variants = {
  primary: 'primary',
  primaryOutline: 'primary-outline',
  danger: 'danger',
  dangerOutline: 'danger-outline',
  link: 'link',
};

const meta: Meta = {
  title: 'VSButton',
  component: VSButton,
  argTypes: {
    size: {
      options: Object.keys(sizes),
      mapping: sizes,
      defaultValue: 'auto',
      control: {
        type: 'select',
        labels: {
          auto: 'auto',
          sm: 'sm',
          lg: 'lg',
          xl: 'xl',
        },
      },
    },
    type: {
      options: Object.keys(types),
      mapping: types,
      defaultValue: 'button',
      control: {
        type: 'select',
        labels: {
          button: 'button',
          submit: 'submit',
          reset: 'reset',
        },
      },
    },
    variant: {
      options: Object.keys(variants),
      mapping: variants,
      defaultValue: 'primary',
      control: {
        type: 'select',
        labels: {
          primary: 'Primary',
          primaryOutline: 'Primary Outline',
          danger: 'Danger',
          dangerOutline: 'Danger Outline',
          link: 'Link',
        },
      },
    },
    onClick: {
      action: 'clicked',
    },
    disabled: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    block: {
      defaultValue: false,
      control: {
        type: 'boolean',
      },
    },
    className: {
      defaultValue: '',
      control: 'text',
    },
  },
};

export default meta;

// Template
const Template: ComponentStory<typeof VSButton> = (args) => (
  <VSButton {...args} />
);

// Primary
export const Primary = Template.bind({});
Primary.args = {
  children: 'Vivasoft',
};

// Primary Outline
export const PrimaryOutline = Template.bind({});
PrimaryOutline.args = {
  ...Primary.args,
  variant: 'primary-outline',
};

// Danger
export const Danger = Template.bind({});
Danger.args = {
  ...Primary.args,
  variant: 'danger',
};

// Danger
export const DangerOutline = Template.bind({});
DangerOutline.args = {
  ...Primary.args,
  variant: 'danger-outline',
};

// Link
export const Link = Template.bind({});
Link.args = {
  ...Primary.args,
  variant: 'link',
};

// Disabled
export const Disabled = Template.bind({});
Disabled.args = {
  ...Primary.args,
  disabled: true,
};

// SM
export const ButtonSM = Template.bind({});
ButtonSM.args = {
  ...Primary.args,
  size: 'sm',
};

// LG
export const ButtonLG = Template.bind({});
ButtonLG.args = {
  ...Primary.args,
  size: 'lg',
};

// XL
export const ButtonXL = Template.bind({});
ButtonXL.args = {
  ...Primary.args,
  size: 'xl',
};
