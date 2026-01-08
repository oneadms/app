# CRMEB UniApp 项目 CLI 模式使用说明

## 项目改造完成

本项目已成功从 HBuilderX 模式改造为 Vue CLI 模式，现在可以通过命令行进行开发和编译。

## 项目结构

```
app/
├── src/                    # 源代码目录
│   ├── pages/             # 页面
│   ├── components/        # 组件
│   ├── static/            # 静态资源
│   ├── App.vue            # 应用入口
│   ├── main.js            # 主文件
│   └── pages.json         # 页面配置
├── babel.config.js        # Babel 配置
├── postcss.config.js      # PostCSS 配置
├── vue.config.js          # Vue CLI 配置
└── package.json           # 项目配置
```

## 可用命令

### H5 平台
```bash
# 开发模式
npm run dev:h5

# 生产编译
npm run build:h5
```

### 微信小程序
```bash
# 开发模式（带watch）
npm run dev:mp-weixin

# 生产编译
npm run build:mp-weixin
```

### 支付宝小程序
```bash
# 开发模式
npm run dev:mp-alipay

# 生产编译
npm run build:mp-alipay
```

### 其他平台
- **百度小程序**: `npm run dev:mp-baidu` / `npm run build:mp-baidu`
- **头条小程序**: `npm run dev:mp-toutiao` / `npm run build:mp-toutiao`
- **App Plus**: `npm run dev:app-plus` / `npm run build:app-plus`

## 编译产物

编译完成后，产物会生成在以下目录：

- **开发模式**: `unpackage/dist/dev/[platform]/`
- **生产模式**: `unpackage/dist/build/[platform]/`

例如：
- 微信小程序开发版：`unpackage/dist/dev/mp-weixin/`
- 微信小程序生产版：`unpackage/dist/build/mp-weixin/`

## 已完成的优化

1. **内存优化**
   - 所有脚本添加了 8GB 内存限制 (`NODE_OPTIONS=--max_old_space_size=8192`)
   - 关闭了 source map 以减少内存占用
   - 优化了 webpack 配置

2. **Sass 语法修复**
   - 修复了 `calc()` 函数中运算符缺少空格的问题
   - 所有 `calc(100rpx+` 已修改为 `calc(100rpx +`

3. **配置文件优化**
   - 添加了完整的 babel.config.js
   - 添加了 postcss.config.js
   - 优化了 vue.config.js 配置

## 注意事项

### 内存问题

由于项目规模较大，编译时可能需要较多内存。如果遇到内存不足问题：

1. **升级 Node.js 版本**
   - 当前使用 Node.js v14.21.3
   - 建议升级到 Node.js 18 或 20 以获得更好的内存管理

2. **增加内存限制**
   - 可以在 package.json 中继续增加内存限制值
   - 例如：`NODE_OPTIONS=--max_old_space_size=12288` (12GB)

3. **使用生产模式**
   - 生产模式内存占用相对较少
   - H5 开发模式可能会遇到内存问题，建议使用小程序模式或直接使用生产模式

### 小程序开发

使用微信开发者工具导入编译后的代码：

1. 运行 `npm run dev:mp-weixin`
2. 打开微信开发者工具
3. 导入项目目录：`unpackage/dist/dev/mp-weixin/`

## 常见问题

### 1. 编译内存溢出
- 尝试增加内存限制
- 使用生产模式编译
- 升级 Node.js 版本

### 2. Sass 编译错误
- 确保 calc() 函数中的运算符有空格
- 检查选择器语法是否正确

### 3. H5 页面无法访问
- 检查开发服务器是否正常启动
- 确认端口 8080 未被占用
- 访问 http://localhost:8080

## 更新日志

### 2024-01-08
- ✅ 完成项目结构改造
- ✅ 配置所有必要的配置文件
- ✅ 修复 Sass 语法错误
- ✅ 优化内存配置
- ✅ 测试微信小程序编译成功

## 技术支持

如有问题，请检查：
1. Node.js 版本（建议 v18+）
2. 依赖是否完整安装（`npm install`）
3. 编译日志中的错误信息
