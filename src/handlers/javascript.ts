import { getProjectPath, isDirExist, openVsCode } from '../lib/utils'
import { initJavascript } from '../scripts/init-javascript'
import fs from 'fs'

const dir = getProjectPath('js')
export class JavascriptHandler {
  constructor() {}
  reset() {
    if (fs.existsSync(dir)) {
      fs.rm(dir, { recursive: true }, (err) => {
        if (err) {
          console.error(err)
        }
      })
    }

    initJavascript()
  }

  async run() {
    if (isDirExist(dir)) {
      openVsCode(dir)
      return
    }

    try {
      await initJavascript()
      openVsCode(dir)
    } catch (e) {
      console.error(e)
    }
  }
}
