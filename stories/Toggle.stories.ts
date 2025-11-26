import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Toggle } from '@/components/Toggle';

const meta: Meta<typeof Toggle> = {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    pressed: {
      control: 'boolean',
      description: 'Whether the toggle is pressed/active',
    },
    onPressedChange: {
      action: 'pressed changed',
      description: 'Callback when toggle state changes',
    },
  },
  args: {
    onPressedChange: (pressed: boolean) => console.log('Toggle pressed:', pressed),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    pressed: false,
  },
};

export const Pressed: Story = {
  args: {
    pressed: true,
  },
};


export const Interactive: Story = {
  render: function InteractiveToggle(args: any) {
    const [pressed, setPressed] = React.useState(args.pressed || false);

    // 同步外部 args.pressed 的变化
    React.useEffect(() => {
      setPressed(args.pressed || false);
    }, [args.pressed]);

    return React.createElement(Toggle, {
      ...args,
      pressed: pressed,
      onPressedChange: (newPressed: boolean) => {
        setPressed(newPressed);
        args.onPressedChange?.(newPressed);
      }
    });
  },
  args: {
    pressed: false,
    onPressedChange: (pressed: boolean) => {
      console.log('Interactive toggle changed to:', pressed);
    },
  },
};
