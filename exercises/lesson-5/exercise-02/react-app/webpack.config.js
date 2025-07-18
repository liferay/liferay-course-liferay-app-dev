/**
 * SPDX-FileCopyrightText: (c) 2000 Liferay, Inc. https://liferay.com
 * SPDX-License-Identifier: LGPL-2.1-or-later OR LicenseRef-Liferay-DXP-EULA-2.0.0-2023-06
 */

const path = require('path');
const webpack = require('webpack');

const DEVELOPMENT = process.env.NODE_ENV === 'development';
const WEBPACK_SERVE = !!process.env.WEBPACK_SERVE;

module.exports = {
	devServer: {
		headers: {
			'Access-Control-Allow-Origin': '*',
		},
		port: 3000,
	},
	devtool: DEVELOPMENT ? 'source-map' : false,
	entry: {
		index: './index.js',
	},
	externals: {
		'react': 'react',
		'react-dom': 'react-dom',
	},
	experiments: {
		outputModule: true,
	},
	mode: DEVELOPMENT ? 'development' : 'production',
	module: {
        rules: [
            {
                test: /\.(js|jsx)$/, // Process .js and .jsx files
                exclude: /node_modules/, // Exclude dependencies
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                    },
                },
            },
            {
                test: /\.css$/, // Process .css files
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx'], // Add .jsx to extensions
    },
	optimization: {
		minimize: !DEVELOPMENT,
	},
	output: {
		clean: true,
		environment: {
			dynamicImport: true,
			module: true,
		},
		filename: WEBPACK_SERVE ? '[name].js' : '[name].[contenthash].js',
		path: path.resolve('build', 'static'),
	},
	plugins: [
		new webpack.optimize.LimitChunkCountPlugin({
			maxChunks: 1,
		}),
	],
};
