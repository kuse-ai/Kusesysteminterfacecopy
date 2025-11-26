# @kuse/system-interface - NPM Package 发布指南

## 📦 包已成功配置并构建

### 🎉 完成的工作

1. **✅ 包配置**
   - 创建了 `package.npm.json` - NPM 包的 package.json
   - 配置了 peer dependencies 和依赖关系
   - 设置了正确的入口点和类型声明

2. **✅ 构建配置**
   - 创建了 `vite.config.lib.ts` - 库构建配置
   - 配置了 TypeScript 声明文件生成
   - 支持 ES 和 UMD 格式输出

3. **✅ TypeScript 支持**
   - 创建了 `src/vite-env.d.ts` 用于 SVG 导入类型声明
   - 创建了 `tsconfig.lib.json` 用于库构建
   - 生成了完整的类型声明文件

4. **✅ 入口文件**
   - 创建了 `src/lib/index.ts` 导出所有核心组件
   - 包含主要组件：SplitButton, SelectSourcesDialog, FolderTree, Toggle
   - 包含 UI 组件和工具函数

5. **✅ 构建脚本**
   - 创建了 `build-lib.sh` 自动化构建脚本
   - 自动复制 CSS 和资源文件
   - 修复了版本特定的导入问题

6. **✅ 文档**
   - 更新了 README.md 包含完整的使用说明
   - 包含所有组件的 API 文档和示例

## 📁 构建输出

构建成功生成以下文件：

```
dist/
├── index.esm.js          # ES 模块版本 (267KB)
├── index.umd.js          # UMD 版本 (168KB)
├── index.d.ts            # TypeScript 声明文件
├── system-interface.css  # 合并的 CSS 样式
├── components/           # 单独的组件 CSS 文件
├── assets/              # 所有 SVG 和图片资源
└── [type declarations]   # 完整的 TS 声明
```

## 🚀 发布步骤

### 1. 登录 NPM
```bash
npm login
```

### 2. 构建包
```bash
./build-lib.sh
```

### 3. 发布包
```bash
# 复制 NPM 配置
cp package.npm.json package.json

# 发布到 NPM
npm publish

# 恢复原始配置（可选）
git checkout package.json
```

### 4. 验证发布
```bash
npm info @kuse/system-interface
```

## 📖 使用方式

### 安装
```bash
npm install @kuse/system-interface
```

### 基本使用
```tsx
import React, { useState } from 'react';
import {
  SplitButton,
  SelectSourcesDialog,
  FolderTree
} from '@kuse/system-interface';
import '@kuse/system-interface/dist/system-interface.css';

function App() {
  const [isWebSearch, setIsWebSearch] = useState(false);
  const [checkedIds, setCheckedIds] = useState(new Set());

  return (
    <div>
      <SplitButton
        isWebSearch={isWebSearch}
        onToggleWebSearch={() => setIsWebSearch(!isWebSearch)}
        label="All sources"
        onTextClick={() => console.log('Clicked')}
      />

      <SelectSourcesDialog
        data={fileData}
        checkedIds={checkedIds}
        isWebSearch={isWebSearch}
        onSave={(ids, webSearch) => {
          setCheckedIds(ids);
          setIsWebSearch(webSearch);
        }}
      >
        <button>Open Dialog</button>
      </SelectSourcesDialog>
    </div>
  );
}
```

## 🔧 核心组件

- **SplitButton** - 分割按钮组件，支持 Web 搜索切换
- **SelectSourcesDialog** - 源选择对话框
- **FolderTree** - 文件树组件
- **Toggle** - 自定义切换组件

## 📦 包信息

- **名称**: `@kuse/system-interface`
- **版本**: `0.1.0`
- **格式**: ES Modules + UMD
- **TypeScript**: 完全支持
- **依赖**: 基于 Radix UI 构建

## ⚠️ 注意事项

1. **Peer Dependencies**: 需要 React 18+ 作为 peer dependency
2. **CSS 导入**: 必须手动导入 CSS 文件
3. **版本兼容**: 已修复所有版本特定的导入问题
4. **类型支持**: 包含完整的 TypeScript 声明

## 🎯 下一步

1. 测试在真实项目中的使用
2. 根据反馈优化 API
3. 添加更多组件
4. 完善文档和示例

---

🎉 **包已准备好发布！** 运行 `./build-lib.sh && npm publish` 即可发布到 NPM。