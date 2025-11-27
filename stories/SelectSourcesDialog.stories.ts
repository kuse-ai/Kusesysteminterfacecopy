import type { Meta, StoryObj } from '@storybook/react';
import React from 'react';
import { SelectSourcesDialog } from '../src/components/SelectSourcesDialog';
import { FileNode } from '../src/components/FolderTree';

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

const meta: Meta<typeof SelectSourcesDialog> = {
  title: 'Components/SelectSourcesDialog',
  component: SelectSourcesDialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    children: {
      control: 'text',
      description: 'Trigger element that opens the dialog',
    },
    data: {
      control: 'object',
      description: 'Array of file nodes to display in the tree',
    },
    checkedIds: {
      control: 'object',
      description: 'Set of IDs that are currently checked',
    },
    isWebSearch: {
      control: 'boolean',
      description: 'Whether web search is enabled',
    },
    onSave: {
      action: 'save clicked',
      description: 'Callback when save button is clicked',
    },
  },
  args: {
    onSave: (ids: Set<string>, isWebSearch: boolean) => {
      console.log('Save clicked:', {
        selectedIds: Array.from(ids),
        webSearch: isWebSearch,
      });
    },
  },
  decorators: [
    (Story) => React.createElement('div', {
      style: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }
    }, React.createElement(Story)),
  ],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: React.createElement('button', {
      style: {
        padding: '8px 16px',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }
    }, 'Select Sources'),
    data: sampleData,
    checkedIds: new Set(),
    isWebSearch: false,
  },
};

export const WithWebSearch: Story = {
  args: {
    children: React.createElement('button', {
      style: {
        padding: '8px 16px',
        backgroundColor: '#28a745',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }
    }, 'Select Sources (Web Search Enabled)'),
    data: sampleData,
    checkedIds: new Set(),
    isWebSearch: true,
  },
};

export const WithPreselectedItems: Story = {
  args: {
    children: React.createElement('button', {
      style: {
        padding: '8px 16px',
        backgroundColor: '#17a2b8',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }
    }, 'Select Sources (3 items selected)'),
    data: sampleData,
    checkedIds: new Set(['2', '6', '10']),
    isWebSearch: false,
  },
};

export const WithFolderSelected: Story = {
  args: {
    children: React.createElement('button', {
      style: {
        padding: '8px 16px',
        backgroundColor: '#6f42c1',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }
    }, 'Select Sources (Portfolio folder selected)'),
    data: sampleData,
    checkedIds: new Set(['4', '5', '6', '7', '8']),
    isWebSearch: true,
  },
};

export const EmptyData: Story = {
  args: {
    children: React.createElement('button', {
      style: {
        padding: '8px 16px',
        backgroundColor: '#6c757d',
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
      }
    }, 'Select Sources (No data)'),
    data: [],
    checkedIds: new Set(),
    isWebSearch: false,
  },
};

export const CustomTrigger: Story = {
  args: {
    children: React.createElement('div', {
      style: {
        padding: '12px 20px',
        backgroundColor: '#f8f9fa',
        border: '2px dashed #6c757d',
        borderRadius: '8px',
        cursor: 'pointer',
        textAlign: 'center',
        color: '#6c757d',
        fontWeight: 'bold',
      }
    }, '📁 Click to select files'),
    data: sampleData,
    checkedIds: new Set(['2', '3']),
    isWebSearch: false,
  },
};

export const Interactive: Story = {
  render: function InteractiveSelectSourcesDialog(args: any) {
    const [checkedIds, setCheckedIds] = React.useState<Set<string>>(args.checkedIds || new Set());
    const [isWebSearch, setIsWebSearch] = React.useState(args.isWebSearch || false);

    // Sync external args changes
    React.useEffect(() => {
      setCheckedIds(args.checkedIds || new Set());
    }, [args.checkedIds]);

    React.useEffect(() => {
      setIsWebSearch(args.isWebSearch || false);
    }, [args.isWebSearch]);

    const handleSave = (ids: Set<string>, webSearch: boolean) => {
      setCheckedIds(ids);
      setIsWebSearch(webSearch);
      args.onSave?.(ids, webSearch);
    };

    const selectedCount = checkedIds.size;
    const buttonText = selectedCount > 0
      ? `Select Sources (${selectedCount} selected${isWebSearch ? ', web search enabled' : ''})`
      : `Select Sources${isWebSearch ? ' (web search enabled)' : ''}`;

    return React.createElement(SelectSourcesDialog, {
      ...args,
      children: React.createElement('button', {
        style: {
          padding: '8px 16px',
          backgroundColor: selectedCount > 0 ? '#28a745' : '#007bff',
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
        }
      }, buttonText),
      checkedIds: checkedIds,
      isWebSearch: isWebSearch,
      onSave: handleSave,
    });
  },
  args: {
    data: sampleData,
    checkedIds: new Set(['2']),
    isWebSearch: false,
  },
};