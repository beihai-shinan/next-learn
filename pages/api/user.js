const Mock = require('mockjs')
const gen = Mock.Random;

function wrapperResult(result) {
  return {
    message: '',
    code: 200,
    result: true,
    object: result
  }
}

export default function users(req, res) {
  const result = Mock.mock({
    'list|1-50': [{
      'id|+1': 1
    }],
    name: {
      first: '@FIRST',
      middle: '@FIRST',
      last: '@LAST',
      full: '@first @middle @last'
    },
    address: gen.city(),
    content: gen.csentence()
  })
  res.send(wrapperResult(result))
}
