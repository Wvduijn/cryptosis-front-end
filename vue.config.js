module.exports = {
	devServer: {
		proxy: {
			'/api': {
				target: 'http://localhost:3000/api/',
				changeOrigin: true,
				pathRewrite: {
					'^/api': '',
				},
			},
		},
	},
	css: {
		loaderOptions: {
			sass: {
				data: `
            @import "@/assets/scss/main.scss";
          `,
			},
		},
	},
}
