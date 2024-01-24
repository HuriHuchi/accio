import { spawn } from 'child_process'
import { getProjectPath, isDirExist, openVsCode } from '../lib/utils'
import { log } from 'console'

const dir = getProjectPath('react')
export class ReactHandler {
  constructor() {}

  async run() {
    if (isDirExist(dir)) {
      openVsCode(dir)
      return
    }
    const app = spawn('npx', ['create-react-app', dir])
    app.stdout.on('data', (data) => {
      log(data.toString())
    })

    app.on('close', (code) => {
      if (code === 0) {
        log('React project created successfully')
        openVsCode(dir)
      } else {
        log('🟥 Error')
      }
    })
  }
}
