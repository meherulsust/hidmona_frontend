import { ComponentStory, Meta } from '@storybook/react';

import VSDropdown from './Dropdown';

const meta: Meta = {
  title: 'VSDropdown',
  component: VSDropdown,
};

export default meta;

// Template
const Template: ComponentStory<typeof VSDropdown> = (args) => (
  <VSDropdown {...args}>
    <VSDropdown.Toggle as="button">Dropdown</VSDropdown.Toggle>
    <VSDropdown.Menu>
      <VSDropdown.Item>Dropdown Item - 1</VSDropdown.Item>
      <VSDropdown.Item>Dropdown Item - 2</VSDropdown.Item>
      <VSDropdown.Item>Dropdown Item - 3</VSDropdown.Item>
      <VSDropdown.Item>Dropdown Item - 4</VSDropdown.Item>
    </VSDropdown.Menu>
  </VSDropdown>
);

// Dropdown
export const Dropdown = Template.bind({});
