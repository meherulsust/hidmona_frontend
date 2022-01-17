import { ComponentStory, Meta } from '@storybook/react';
import { useState } from '@storybook/addons';
import { action } from '@storybook/addon-actions';

import { VSButton } from '../Button';
import VSModal from './Modal';
import VSModalHeader from './ModalHeader';
import VSModalBody from './ModalBody';

const meta: Meta = {
  title: 'VSModal',
  component: VSModal,
  argTypes: {
    width: {
      defaultValue: 'w-1/2',
      control: 'text',
    },
    disableOutsideClick: {
      defaultValue: false,
      control: 'boolean',
    },
    isOpen: {
      defaultValue: false,
      control: 'boolean',
    },
    onClose: {
      action: action('clicked'),
    },
  },
  parameters: {},
};

export default meta;

// Tempalte
const Template: ComponentStory<typeof VSModal> = ({
  isOpen,
  onClose,
  ...args
}) => {
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(!openModal);
  };

  return (
    <div>
      <VSButton onClick={handleOpenModal}>Open</VSButton>

      <VSModal isOpen={openModal} onClose={handleOpenModal} {...args}>
        <VSModalHeader onClose={handleOpenModal}>
          This is the title
        </VSModalHeader>
        <VSModalBody>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam
          quasi deleniti ipsa ad illum obcaecati esse perferendis perspiciatis,
          molestias et, aspernatur quam placeat ab fuga!
        </VSModalBody>
      </VSModal>
    </div>
  );
};

// Default
export const Default = Template.bind({});
Default.args = {
  isOpen: false,
};

// Medium
export const Medium = Template.bind({});
Medium.args = {
  ...Default.args,
  width: 'w-2/3',
};

// Full width
export const FullWidth = Template.bind({});
FullWidth.args = {
  ...Default.args,
  width: 'w-full',
};
