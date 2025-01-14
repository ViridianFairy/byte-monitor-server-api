const logService = require('../services/logService');

/**
 * TodoController
 * Controller 是业务入口，由 HTTP 路由解析后调用
 * 包含待办事项的增删改查功能
 */
class LogController {
  /**
   * 列出所有待办事项
   * 响应格式
   * {
   *   list: [todo1, todo2]
   * }
   * @param ctx Koa 的上下文参数
   */
  async listAll(ctx) {
    // const list = await todoService.listAll();
    // ctx.body = {list};
    ctx.body = {status: 'ok'}
  }

  /**
   * 创建一条待办事项
   * 响应格式
   * {
   *   result: newTodo
   * }
   * @param ctx Koa 的上下文参数
   */
  async create(ctx) {
    // const {title, done = false} = ctx.request.body;
    // const result = await todoService.create({title, done});
    // ctx.body = {result};
    ctx.body = {status: 'ok'}

  }

  /**
   * 删除一条待办事项
   * 响应格式
   * {
   *   ok: true
   * }
   * @param ctx Koa 的上下文参数
   */
  async delete(ctx) {
    // await todoService.delete(ctx.params.id);
    // ctx.body = {ok: true};
    ctx.body = {status: 'ok'}
  }

  /**
   * 删除所有待办事项
   * 响应格式
   * {
   *   ok: true
   * }
   * @param ctx Koa 的上下文参数
   */
  async deleteAll(ctx) {
    // await todoService.deleteAll();
    // ctx.body = {ok: true};
    ctx.body = {status: 'ok'}

  }

  /**
   * 将一条待办事项状态设为 done
   * 响应格式
   * {
   *   ok: true
   * }
   * @param ctx Koa 的上下文参数
   */
  async done(ctx) {
    // await todoService.update(ctx.params.id, {done: true});
    // ctx.body = {ok: true};
    console.log(ctx.params);
    let body = ctx.request.body
    let deviceInfo = JSON.parse(body.deviceInfo)
    
    ctx.body = {status: 'ok'}

  }

  /**
   * 将一条待办事项状态设为 undone
   * 响应格式
   * {
   *   ok: true
   * }
   * @param ctx Koa 的上下文参数
   */
  async undone(ctx) {
    // await todoService.update(ctx.params.id, {done: false});
    // ctx.body = {ok: true};
    ctx.body = {status: 'ok'}
  }
}

// 导出 Controller 的实例
module.exports = new LogController();
