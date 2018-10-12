// 使用koa2进行加载静态资源 使用这个
const Koa = require('koa')
const path = require('path')
const static = require('koa-static')
const app = new Koa()
var fs = require('fs')
var koaRouter = require('koa-router')
const router = koaRouter()
//设置静态资源的路径
const staticPath = '../siku'

const indexFile = fs.readFileSync(path.normalize( staticPath + '/souye.html'), 'utf-8');
// 使用fs来登陆首页
// app.use(async function(ctx,next){
//   var url = ctx.request.url
//   if (url === '/') {
//     console.log('1234')
//     console.log(url)
//     console.log(indexFile,'111')
//     ctx.body = indexFile
//   }
//   await next()
// })
app.use(static(
  path.join( __dirname,  staticPath)
))
// 使用koa-router来登陆首页
router.get('*', async function(ctx, next){
  ctx.body = indexFile;
  await next();
} )
app.use(router.routes()) // 将路由规则挂载到Koa上。






// app.use( async ( ctx ) => {
//   ctx.body = 'hello world'
// })



app.listen(9002, () => {
  console.log('server is starting at port 9002')
})
