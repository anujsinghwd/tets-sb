import type { Meta, StoryObj } from '@storybook/react';

import { BGButton } from '../lib';

const meta = {
  title: 'Lib/Button',
  component: BGButton,
  tags: ['autodocs'],
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} satisfies Meta<typeof BGButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};