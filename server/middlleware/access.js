module.exports = {
  admin: (app) => {
    return async (req, res, next) => {
      const assert = require('http-assert')

      assert(req.user.level === '3', 403, "您的权限不够")

      next()

    }
  },
  teacher: (app) => {
    return async (req, res, next) => {
      const assert = require('http-assert')

      assert(req.user.level === '2', 403, "您的权限不够")

      next()

    }
  }
}
