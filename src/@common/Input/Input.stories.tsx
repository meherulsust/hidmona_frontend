import { ComponentStory, Meta } from '@storybook/react';

import VSInput from './Input';

const types = {
  text: 'text',
  password: 'password',
  email: 'email',
  number: 'number',
  phone: 'phone',
};

const meta: Meta = {
  title: 'VSInput',
  component: VSInput,
  argTypes: {
    type: {
      options: Object.keys(types),
      mapping: types,
      defaultValue: 'text',
      control: {
        type: 'select',
        labels: {
          text: 'Text',
          password: 'Password',
          email: 'Email',
          number: 'Number',
          phone: 'Phone',
        },
      },
    },
    name: {
      defaultValue: 'firstName',
      control: 'text',
    },
    label: {
      defaultValue: 'First Name',
      control: 'text',
    },
    placeholder: {
      defaultValue: 'Enater your first name',
      control: 'text',
    },
    disabled: {
      defaultValue: false,
      control: 'boolean',
    },
    readOnly: {
      defaultValue: false,
      control: 'boolean',
    },
    hassError: {
      defaultValue: false,
      control: 'boolean',
    },
    className: {
      defaultValue: '',
      control: 'text',
    },
    inputClass: {
      defaultValue: '',
      control: 'text',
    },
    hint: {
      defaultValue: '',
      control: 'text',
    },
    value: {
      options: ['text', 'number'],
      defaultValue: '',
      control: 'text',
    },
    onChange: {
      action: 'changed',
    },
  },
};

export default meta;

// Template
const Template: ComponentStory<typeof VSInput> = (args) => (
  <VSInput {...args} />
);

// Input
export const Input = Template.bind({});
Input.args = {
  id: 'firstName',
};

// Input without id
export const InputWithoutID = Template.bind({});
InputWithoutID.args = {
  name: 'email',
  id: 'email',
  type: 'email',
  label: 'Email',
  placeholder: 'Enter your email',
};

// Input with hint
export const InputWithHint = Template.bind({});
InputWithHint.args = {
  id: 'firstName',
  hint: 'Code is poetry',
};

// Input with hint
export const InputWithError = Template.bind({});
InputWithError.args = {
  id: 'firstName',
  hint: 'Error has occured',
  hasError: true,
};

// Input with disabled
export const InputWithDisabled = Template.bind({});
InputWithDisabled.args = {
  id: 'firstName',
  hint: 'Error has occured',
  value: 'Input is disabled',
  disabled: true,
};
