const fs = require('fs')
var glob = require('glob')

class CustomReporter {
	constructor(globalConfig, reporterOptions, reporterContext) {
		this._globalConfig = globalConfig
		this._options = reporterOptions
		this._context = reporterContext
	}

	onRunComplete() {
		glob('public/coverage/index.html', function (err, files) {
			files.map((path) => {
				fs.readFile(path, 'utf8', (err, data) => {
					if (err) {
						console.log('err', err)
						return
					}
					let replaced = data.replace(/src="/g, 'src="coverage/')
					replaced = replaced.replace(/href="/g, 'href="coverage/')

					fs.writeFile(path, replaced, 'utf-8', function (err) {
						console.log('error', err)
					})
				})
			})
		})
	}

	getLastError() {
		if (this._shouldFail) {
			return new Error('Custom error reported!')
		}
	}
}

module.exports = CustomReporter
