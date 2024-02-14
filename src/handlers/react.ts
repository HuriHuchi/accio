import { spawn } from 'child_process'
import { createRepo, getProjectPath, hasRepo, isDirExist, openVsCode } from '../lib/utils'
import { log } from 'console'
import { REPO_PATH } from '../lib/constants'

const PLAYGROUND_PATH = getProjectPath('react')
const PLAYGROUND_NAME = 'react-playground'
const command = 'yarn'
const args = ['create', 'vite', PLAYGROUND_NAME, '--template', 'react-ts']
const options = { cwd: REPO_PATH }

export class ReactHandler {
  constructor() {}

  async run() {
    // if dir exist
    if (isDirExist(PLAYGROUND_PATH)) {
      openVsCode(PLAYGROUND_PATH)
      return
    }

    // if not,
    if (!hasRepo()) {
      createRepo()
    }

    const app = spawn(command, args, options)

    app.stdout.on('data', (data) => {
      log(data.toString())
    })

    app.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`)
    })

    app.on('close', (code) => {
      if (code === 0) {
        log('React project created successfully')
        openVsCode(PLAYGROUND_PATH)
      } else {
        log('🟥 Error')
      }
    })
  }
}
