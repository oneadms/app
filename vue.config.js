// +----------------------------------------------------------------------
// | CRMEB [ CRMEB赋能开发者，助力企业发展 ]
// +----------------------------------------------------------------------
// | Copyright (c) 2016~2025 https://www.crmeb.com All rights reserved.
// +----------------------------------------------------------------------
// | Licensed CRMEB并不是自由软件，未经许可不能去掉CRMEB相关版权
// +----------------------------------------------------------------------
// | Author: CRMEB Team <admin@crmeb.com>
// +----------------------------------------------------------------------

module.exports = {
	productionSourceMap: false, // 关闭 source map 以减少内存占用
	// 开发环境也关闭 source map
	css: {
		sourceMap: false
	},
	configureWebpack: config => {
		// 开发环境也关闭 source map
		config.devtool = false

		if (process.env.NODE_ENV === 'production') {
			// 检查 minimizer 是否存在
			if (config.optimization && config.optimization.minimizer && config.optimization.minimizer[0]) {
				//注释可看见打印，解开看不见
				if (config.optimization.minimizer[0].options && config.optimization.minimizer[0].options.terserOptions) {
					config.optimization.minimizer[0].options.terserOptions.compress = config.optimization.minimizer[0].options.terserOptions.compress || {}
					config.optimization.minimizer[0].options.terserOptions.compress.warnings = false
					config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
					config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
					config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log']
				}
			}
		}
	},
	chainWebpack: config => {
		// 优化构建性能
		config.optimization.splitChunks({
			chunks: 'all',
			cacheGroups: {
				libs: {
					name: 'chunk-libs',
					test: /[\\/]node_modules[\\/]/,
					priority: 10,
					chunks: 'initial'
				}
			}
		})
	}
}
