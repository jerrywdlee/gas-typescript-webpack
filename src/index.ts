import { Test } from "./Test";
import { Transport as T } from "./lib/transport"

global.test = () => {
  const test = new Test()
  test.echo("world.")
}

global.doGet = (e) => {
  Logger.log(JSON.stringify(e))
  return T.text('foo')
}

