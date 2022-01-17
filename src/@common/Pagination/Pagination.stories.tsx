import { ComponentStory, Meta } from '@storybook/react';

import VSPagination from './Pagination';

const meta: Meta = {
  title: 'VSPagination',
  component: VSPagination,
};

export default meta;

// Template
const Template: ComponentStory<typeof VSPagination> = (args) => (
  <VSPagination {...args} />
);

// Pagination
export const Pagination = Template.bind({});
Pagination.args = {
  total: 80,
  perPage: 1,
};
