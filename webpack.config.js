var webpack = require('webpack');
var CommonsChunkPlugin = require("webpack/lib/optimize/CommonsChunkPlugin")
var uglifyJsPlugin = webpack.optimize.UglifyJsPlugin
var ExtractTextPlugin = require("extract-text-webpack-plugin")

// =======================================
// webpack client & backend(for nodejs)
// =======================================

module.exports = [
	
	// =======================================
	// client side javascript webpack config
	// =======================================
	
	{
		name: "web",
		// entry内で定義したentoryポイントとなる各.jsファイルの保存パス
		context: __dirname + "/src/web",
		// entry内で指定されているキーがoutputで指定されたディレクトリにそれぞれのキー名.jsとして出力される
		entry: {
			main: './main.js',
			'angular2/main': './angular2/main.ts'
			// 'pages/home': './pages/home.js',
		},
		// entryで設定されたキー毎にファイルが生成される
		output: {
			path: __dirname + "/public/dist",
			filename: '[name].js'
		},
		// module: で設定された拡張子のファイルはrequireで読み込めるが、require("~~.jade")のように
		// 拡張子も含めないで読み込みたいなら以下に設定する
		resolve: {
			extensions: ['', '.webpack.js', '.web.js', '.ts', '.tsx', '.js', 'es6']
		},
		devtool: 'inline-source-map',
		// entryとなる各.jsファイルからrequire("~~")で読み込める拡張子を設定する
		module: {
			loaders: [
				{ test: /\.jade$/,
					loader: "jade" },
				// css3 & postcss
				{ test: /\.css$/,
					loader: ExtractTextPlugin.extract("style-loader", "css-loader!postcss-loader") },
				{ test: /\.scss$/,
					loader: ExtractTextPlugin.extract(
						"style-loader", "css-loader!autoprefixer-loader?browsers=last 2 version!sass-loader") },
				{ test: /\.less$/,
					loader: ExtractTextPlugin.extract(
						"style-loader", "css-loader!autoprefixer-loader?browsers=last 2 version!less-loader") },
				{ test: /\.(png|jpg)$/,
					loader: 'url-loader?limit=8192', },
				{ test: /\.es6$/,
					exclude: /node_modules/,
					loader: 'babel-loader?presets[]=es2015', },
				{ test: /\.jsx$/,
					exclude: /node_modules/,
					loader: 'babel-loader?presets[]=es2015&presets[]=react' },
				{ test: /\.tsx?$/,
					loader: 'ts-loader?compiler=ntypescript' },
				{ test: /\.coffee$/,
					loader: 'coffee-loader' }
			]
		},
		postcss: function () {
			var autoprefixer = require('autoprefixer');
			var precss       = require('precss');
			return [autoprefixer, precss];
		},
		// tsキーの有無で挙動がどうなるか未検証
		ts: {
			compiler: 'ntypescript'
		},
		plugins: [
			// entryで設定された各生成後のファイルで共通化できるコードはこのファイルにまとめて外出しできる
			// なので必ずhtml側では init.js は常に script src="init.js" で読み込むこと
			new CommonsChunkPlugin('init.js'),
			// requireしたCSSは、entryで指定された各entryポイントとなるjsファイルの名前毎にcssファイルが生成される
			new ExtractTextPlugin("[name].css"),
			// 生成されるすべてのファイルが圧縮されたものにしたいなら以下の設定を行う
			// new uglifyJsPlugin({
			// 	compress: {
			// 		warnings: false
			// 	}
			// }),
		],
		// 指定のモジュールを予めグローバル変数にできるらしい
		// ここの使い方はまだよくわかっていない
		// 参考URL: http://qiita.com/shn/items/7bd544a39ee7ac858669
		// html側で CDN などでライブラリを読み込むならここでの指定は不要という程度の理解
		externals: {
			// 'React': 'React',
			// 'ReactDOM': 'ReactDOM',
			// 'jquery': '$',
		}
	},
	
	// ===========================================
	// backend webpack config (for nodejs server)
	// ===========================================
	
	{
		name: "backend",
		context: __dirname + "/src/backend",
		entry: {
			server: './server.js',
			// バッチ作るならこんな感じ？
			'batch.basic': './batch/basic.js',
		},
		target: 'node',
		output: {
			path: __dirname + "/backend/dist",
			filename: '[name].js'
		},
		externals: getNodeModules(),
		devtool: 'sourcemap'
	},
]

// for backend transpiling for ignore npm install node_modules.
function getNodeModules() {
	var path = require('path');
	var fs = require('fs');
	var nodeModules = {}
	fs.readdirSync('node_modules')
	.filter(function(x) {
		return ['.bin'].indexOf(x) === -1
	})
	.forEach(function(module) {
		nodeModules[module] = 'commonjs ' + module
	})
	return nodeModules
}
