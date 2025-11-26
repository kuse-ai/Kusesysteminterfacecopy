import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const meta: Meta<typeof Tooltip> = {
  title: 'UI/Tooltip',
  component: Tooltip,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    delayDuration: {
      control: { type: 'number', min: 0, max: 2000, step: 100 },
      description: 'Duration in milliseconds before the tooltip shows',
    },
    side: {
      control: { type: 'select' },
      options: ['top', 'right', 'bottom', 'left'],
      description: 'Preferred side of the trigger to render against when open',
    },
    sideOffset: {
      control: { type: 'number', min: 0, max: 50 },
      description: 'Distance in pixels from the trigger',
    },
  },
  args: {
    delayDuration: 0,
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => {
    return React.createElement(
      TooltipProvider,
      { delayDuration: args.delayDuration },
      React.createElement(
        Tooltip,
        {},
        React.createElement(
          TooltipTrigger,
          { asChild: true },
          React.createElement(
            'button',
            {
              className: 'px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors',
            },
            'Hover me'
          )
        ),
        React.createElement(
          TooltipContent,
          { side: args.side, sideOffset: args.sideOffset },
          React.createElement('p', {}, 'This is a tooltip')
        )
      )
    );
  },
  args: {
    delayDuration: 0,
    side: 'top',
    sideOffset: 6,
  },
};

export const WithDelay: Story = {
  render: (args) => {
    return React.createElement(
      TooltipProvider,
      { delayDuration: args.delayDuration },
      React.createElement(
        Tooltip,
        {},
        React.createElement(
          TooltipTrigger,
          { asChild: true },
          React.createElement(
            'button',
            {
              className: 'px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors',
            },
            'Hover with delay'
          )
        ),
        React.createElement(
          TooltipContent,
          { side: args.side, sideOffset: args.sideOffset },
          React.createElement('p', {}, 'This tooltip has a delay')
        )
      )
    );
  },
  args: {
    delayDuration: 700,
    side: 'top',
    sideOffset: 6,
  },
};

export const DifferentSides: Story = {
  render: () => {
    const buttonStyle = 'px-3 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 transition-colors m-2';

    return React.createElement(
      TooltipProvider,
      { delayDuration: 0 },
      React.createElement(
        'div',
        { className: 'grid grid-cols-2 gap-4 p-8' },
        // Top
        React.createElement(
          Tooltip,
          {},
          React.createElement(
            TooltipTrigger,
            { asChild: true },
            React.createElement('button', { className: buttonStyle }, 'Top')
          ),
          React.createElement(
            TooltipContent,
            { side: 'top' },
            React.createElement('p', {}, 'Tooltip on top')
          )
        ),
        // Right
        React.createElement(
          Tooltip,
          {},
          React.createElement(
            TooltipTrigger,
            { asChild: true },
            React.createElement('button', { className: buttonStyle }, 'Right')
          ),
          React.createElement(
            TooltipContent,
            { side: 'right' },
            React.createElement('p', {}, 'Tooltip on right')
          )
        ),
        // Bottom
        React.createElement(
          Tooltip,
          {},
          React.createElement(
            TooltipTrigger,
            { asChild: true },
            React.createElement('button', { className: buttonStyle }, 'Bottom')
          ),
          React.createElement(
            TooltipContent,
            { side: 'bottom' },
            React.createElement('p', {}, 'Tooltip on bottom')
          )
        ),
        // Left
        React.createElement(
          Tooltip,
          {},
          React.createElement(
            TooltipTrigger,
            { asChild: true },
            React.createElement('button', { className: buttonStyle }, 'Left')
          ),
          React.createElement(
            TooltipContent,
            { side: 'left' },
            React.createElement('p', {}, 'Tooltip on left')
          )
        )
      )
    );
  },
};

export const WithLongText: Story = {
  render: () => {
    return React.createElement(
      TooltipProvider,
      { delayDuration: 0 },
      React.createElement(
        Tooltip,
        {},
        React.createElement(
          TooltipTrigger,
          { asChild: true },
          React.createElement(
            'button',
            {
              className: 'px-4 py-2 bg-purple-500 text-white rounded hover:bg-purple-600 transition-colors',
            },
            'Long tooltip'
          )
        ),
        React.createElement(
          TooltipContent,
          { side: 'top', sideOffset: 6 },
          React.createElement(
            'p',
            { style: { maxWidth: '200px' } },
            'This is a much longer tooltip text that demonstrates how the tooltip handles longer content and text wrapping.'
          )
        )
      )
    );
  },
};

export const Interactive: Story = {
  render: function InteractiveTooltip(args: any) {
    const [side, setSide] = React.useState(args.side || 'top');
    const [sideOffset, setSideOffset] = React.useState(args.sideOffset || 6);
    const [delayDuration, setDelayDuration] = React.useState(args.delayDuration || 0);

    // Sync with external args changes
    React.useEffect(() => {
      setSide(args.side || 'top');
      setSideOffset(args.sideOffset || 6);
      setDelayDuration(args.delayDuration || 0);
    }, [args.side, args.sideOffset, args.delayDuration]);

    return React.createElement(
      'div',
      { className: 'space-y-4' },
      React.createElement(
        'div',
        { className: 'space-y-2' },
        React.createElement(
          'div',
          {},
          React.createElement('label', { className: 'block text-sm font-medium' }, 'Side: '),
          React.createElement(
            'select',
            {
              value: side,
              onChange: (e: React.ChangeEvent<HTMLSelectElement>) => setSide(e.target.value as any),
              className: 'mt-1 block w-32 px-3 py-2 border border-gray-300 rounded-md',
            },
            React.createElement('option', { value: 'top' }, 'Top'),
            React.createElement('option', { value: 'right' }, 'Right'),
            React.createElement('option', { value: 'bottom' }, 'Bottom'),
            React.createElement('option', { value: 'left' }, 'Left')
          )
        ),
        React.createElement(
          'div',
          {},
          React.createElement('label', { className: 'block text-sm font-medium' }, `Side Offset: ${sideOffset}px`),
          React.createElement('input', {
            type: 'range',
            min: 0,
            max: 50,
            value: sideOffset,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setSideOffset(Number(e.target.value)),
            className: 'mt-1 block w-32',
          })
        ),
        React.createElement(
          'div',
          {},
          React.createElement('label', { className: 'block text-sm font-medium' }, `Delay: ${delayDuration}ms`),
          React.createElement('input', {
            type: 'range',
            min: 0,
            max: 2000,
            step: 100,
            value: delayDuration,
            onChange: (e: React.ChangeEvent<HTMLInputElement>) => setDelayDuration(Number(e.target.value)),
            className: 'mt-1 block w-32',
          })
        )
      ),
      React.createElement(
        TooltipProvider,
        { delayDuration: delayDuration },
        React.createElement(
          Tooltip,
          {},
          React.createElement(
            TooltipTrigger,
            { asChild: true },
            React.createElement(
              'button',
              {
                className: 'px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors',
              },
              'Interactive tooltip'
            )
          ),
          React.createElement(
            TooltipContent,
            { side: side as any, sideOffset: sideOffset },
            React.createElement('p', {}, `Side: ${side}, Offset: ${sideOffset}px, Delay: ${delayDuration}ms`)
          )
        )
      )
    );
  },
  args: {
    side: 'top',
    sideOffset: 6,
    delayDuration: 0,
  },
};