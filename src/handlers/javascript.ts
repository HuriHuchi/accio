import { getProjectPath, isDirExist, openVsCode } from '../lib/utils'
import { initJavascript } from '../scripts/init-javascript'
import fs from 'fs'

const PLAYGROUND_PATH = getProjectPath('js')
export class JavascriptHandler {
  constructor() {}
  reset() {
    if (isDirExist(PLAYGROUND_PATH)) {
      fs.rm(PLAYGROUND_PATH, { recursive: true }, (err) => {
        if (err) console.error(err)
      })
    }

    initJavascript()
  }

  async run() {
    if (isDirExist(PLAYGROUND_PATH)) {
      openVsCode(PLAYGROUND_PATH)
      return
    }

    try {
      await initJavascript()
      openVsCode(PLAYGROUND_PATH)
    } catch (e) {
      console.error(e)
    }
  }
}
