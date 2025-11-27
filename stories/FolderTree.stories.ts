import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { FolderTree, FileNode } from '../src/components/FolderTree';

// Sample data for testing
const sampleData: FileNode[] = [
  {
    id: '1',
    name: 'Documents',
    type: 'folder',
    children: [
      {
        id: '2',
        name: 'Resume.pdf',
        type: 'pdf',
      },
      {
        id: '3',
        name: 'Cover Letter.doc',
        type: 'doc',
      },
      {
        id: '4',
        name: 'Portfolio',
        type: 'folder',
        children: [
          {
            id: '5',
            name: 'Project Images',
            type: 'folder',
            children: [
              {
                id: '6',
                name: 'screenshot1.png',
                type: 'image',
              },
              {
                id: '7',
                name: 'demo.jpg',
                type: 'image',
              },
            ],
          },
          {
            id: '8',
            name: 'presentation.ppt',
            type: 'ppt',
          },
        ],
      },
    ],
  },
  {
    id: '9',
    name: 'Shared with me',
    type: 'folder',
    children: [
      {
        id: '10',
        name: 'Team Project.xlsx',
        type: 'excel',
      },
      {
        id: '11',
        name: 'meeting-notes.html',
        type: 'html',
      },
    ],
  },
  {
    id: '12',
    name: 'Media',
    type: 'folder',
    children: [
      {
        id: '13',
        name: 'vacation-video.mp4',
        type: 'video',
      },
      {
        id: '14',
        name: 'readme.txt',
        type: 'file',
      },
    ],
  },
];

const meta: Meta<typeof FolderTree> = {
  title: 'Components/FolderTree',
  component: FolderTree,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    data: {
      control: 'object',
      description: 'Array of file nodes to display in the tree',
    },
    checkedIds: {
      control: 'object',
      description: 'Set of IDs that are currently checked',
    },
    onToggle: {
      action: 'node toggled',
      description: 'Callback when a node is toggled',
    },
  },
  args: {
    onToggle: (node: FileNode) => console.log('Node toggled:', node),
  },
  decorators: [
    (Story) => React.createElement('div', {
      style: {
        width: '400px',
        height: '500px',
        border: '1px solid #e0e0e0',
        borderRadius: '8px',
        padding: '16px',
      }
    }, React.createElement(Story)),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    data: sampleData,
    checkedIds: new Set(),
  },
};

export const WithSomeSelected: Story = {
  args: {
    data: sampleData,
    checkedIds: new Set(['2', '6', '10']),
  },
};

export const WithFolderSelected: Story = {
  args: {
    data: sampleData,
    checkedIds: new Set(['4', '5', '6', '7', '8']), // Portfolio folder and all its children
  },
};

export const AllSelected: Story = {
  args: {
    data: sampleData,
    checkedIds: new Set(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14']),
  },
};

export const EmptyTree: Story = {
  args: {
    data: [],
    checkedIds: new Set(),
  },
};

export const SingleFile: Story = {
  args: {
    data: [
      {
        id: 'single',
        name: 'single-document.pdf',
        type: 'pdf',
      },
    ],
    checkedIds: new Set(),
  },
};

export const Interactive: Story = {
  render: function InteractiveFolderTree(args: any) {
    const [checkedIds, setCheckedIds] = React.useState<Set<string>>(args.checkedIds || new Set());

    // Sync external args.checkedIds changes
    React.useEffect(() => {
      setCheckedIds(args.checkedIds || new Set());
    }, [args.checkedIds]);

    const getSelectionState = (node: FileNode, checkedIds: Set<string>): 'checked' | 'unchecked' | 'indeterminate' => {
      if (node.children && node.children.length > 0) {
        const childrenStates = node.children.map(child => getSelectionState(child, checkedIds));
        const allChecked = childrenStates.every(s => s === 'checked');
        const allUnchecked = childrenStates.every(s => s === 'unchecked');

        if (allChecked) return 'checked';
        if (allUnchecked) return 'unchecked';
        return 'indeterminate';
      }
      return checkedIds.has(node.id) ? 'checked' : 'unchecked';
    };

    const handleToggle = (node: FileNode) => {
      setCheckedIds(prev => {
        const currentState = getSelectionState(node, prev);
        const targetChecked = currentState !== 'checked';
        const newSet = new Set(prev);

        const toggleRecursively = (n: FileNode) => {
          if (targetChecked) newSet.add(n.id);
          else newSet.delete(n.id);

          if (n.children) n.children.forEach(toggleRecursively);
        };

        toggleRecursively(node);
        return newSet;
      });

      args.onToggle?.(node);
    };

    return React.createElement(FolderTree, {
      ...args,
      checkedIds: checkedIds,
      onToggle: handleToggle,
    });
  },
  args: {
    data: sampleData,
    checkedIds: new Set(['2']),
  },
};