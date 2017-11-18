'use strict'

let koa = require('koa')
let static_ = require('koa-static')
let bodyParser = require('koa-bodyparser')
let views = require('koa-views')
let path = require('path')
let fs = require('fs')

let app = new koa()

// static
app.use(static_(path.join(__dirname, './static')))

// post data
app.use(bodyParser())

// template
app.use(views(path.join(__dirname, './template'), {
    extension: 'ejs'
}))

app.use(async (ctx, next) => {
	if (ctx.request.path === '/')
	await ctx.render('index')
    await next()
})

app.listen(3000)