const { inlineSource } = require('inline-source')

function InlineSourceWebpackPlugin(options) {
	// Setup the plugin instance with options...
	this.options = options
}

const HtmlWebpackPlugin = require('html-webpack-plugin')

if (!HtmlWebpackPlugin) {
	throw new Error(
		'The HtmlWebpackPlugin was not found! Ensure HtmlWebpackPlugin is installed and was initialized before this plugin.'
	)
}

InlineSourceWebpackPlugin.prototype.apply = function(compiler) {
	compiler.hooks.compilation.tap('InlineSourceWebpackPlugin', compilation => {
		HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
			'InlineSourceWebpackPlugin',
			(htmlPluginData, callback) => {
				var html = htmlPluginData.html
				inlineSource(html, this.options)
					.then(html => {
						htmlPluginData.html = html
						callback(null, htmlPluginData)
					})
					.catch(err => {
						callback(err)
					})
			}
		)
	})
}

module.exports = InlineSourceWebpackPlugin
