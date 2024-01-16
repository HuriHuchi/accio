import path from 'path'
import { getProjectPath, isDirExist, log, openVsCode } from '../lib/utils.js'
import { exec } from 'child_process'

const KEY = 'js'

async function javascriptHandler() {
  const projectPath = getProjectPath(KEY)
  const scriptPath = path.join(process.cwd(), 'src', 'scripts', 'init-javascript.sh')

  if (isDirExist(projectPath)) {
    openVsCode(projectPath)
    return
  }

  exec(`sh ${scriptPath}`, (e, stdout, stderr) => {
    if (e || stderr) {
      log('Error occured')
      return
    }

    log('Javascript project created successfully')
  })
}

export default javascriptHandler
