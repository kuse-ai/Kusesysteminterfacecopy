import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SplitButton } from '@/components/SplitButton';

const meta: Meta<typeof SplitButton> = {
  title: 'Components/SplitButton',
  component: SplitButton,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    isWebSearch: {
      control: 'boolean',
      description: 'Whether web search is enabled/active',
    },
    label: {
      control: 'text',
      description: 'Text label to display on the right side of the button',
    },
    onToggleWebSearch: {
      action: 'web search toggled',
      description: 'Callback when the web search icon is clicked',
    },
    onTextClick: {
      action: 'text clicked',
      description: 'Callback when the text portion is clicked',
    },
  },
  args: {
    onToggleWebSearch: () => console.log('Web search toggled'),
    onTextClick: () => console.log('Text clicked'),
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    isWebSearch: false,
    label: 'All sources',
  },
};

export const WebSearchEnabled: Story = {
  args: {
    isWebSearch: true,
    label: 'All sources',
  },
};

export const WithSourceCount: Story = {
  args: {
    isWebSearch: false,
    label: '3 sources',
  },
};

export const WebSearchEnabledWithCount: Story = {
  args: {
    isWebSearch: true,
    label: '5 sources',
  },
};

export const LongLabel: Story = {
  args: {
    isWebSearch: false,
    label: 'Multiple selected sources',
  },
};

export const Interactive: Story = {
  render: function InteractiveSplitButton(args: any) {
    const [isWebSearch, setIsWebSearch] = React.useState(args.isWebSearch || false);
    const [sourceCount, setSourceCount] = React.useState(3);

    // Sync external args.isWebSearch changes
    React.useEffect(() => {
      setIsWebSearch(args.isWebSearch || false);
    }, [args.isWebSearch]);

    const handleToggleWebSearch = () => {
      const newState = !isWebSearch;
      setIsWebSearch(newState);
      args.onToggleWebSearch?.(newState);
    };

    const handleTextClick = () => {
      // Simulate adding/removing sources
      const newCount = sourceCount === 3 ? 5 : 3;
      setSourceCount(newCount);
      args.onTextClick?.();
    };

    const label = sourceCount === 3 ? 'All sources' : `${sourceCount} sources`;

    return React.createElement(SplitButton, {
      ...args,
      isWebSearch: isWebSearch,
      label: label,
      onToggleWebSearch: handleToggleWebSearch,
      onTextClick: handleTextClick,
    });
  },
  args: {
    isWebSearch: false,
    label: 'All sources',
  },
};

export const NoTextClick: Story = {
  name: 'No Text Click Handler',
  args: {
    isWebSearch: false,
    label: 'All sources',
    onTextClick: undefined,
  },
};

export const WithCustomStyling: Story = {
  name: 'With Custom Class',
  args: {
    isWebSearch: true,
    label: 'Custom styled',
    className: 'custom-split-button',
  },
  decorators: [
    (Story) => React.createElement('div', {
      style: {
        '--sb-bg-color': '#f0f8ff',
        '--sb-border-color': '#4a90e2',
        '--sb-text-color': '#2c5282',
      }
    }, React.createElement(Story)),
  ],
};