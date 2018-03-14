import { Test } from './Test'
import { Transport as T } from './lib/transport'
import { Spreadsheet as S } from './lib/spreadsheet'

global.test = () => {
  const test = new Test()
  test.echo("world.")
}

global.doGet = (e) => {
  Logger.log(JSON.stringify(e))
  let sheet = S.connect()
  sheet.appendRow([Date.now(), JSON.stringify(e)])
  return T.text('foo')
}

