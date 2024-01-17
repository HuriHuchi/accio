import path from 'path'
import { getProjectPath, isDirExist, log, openVsCode } from '../lib/utils'
import { exec } from 'child_process'
import chalk from 'chalk'

const KEY = 'js'

async function javascriptHandler() {
  const projectPath = getProjectPath(KEY)
  const scriptPath = path.join(process.cwd(), 'scripts', 'init-javascript.sh')

  if (isDirExist(projectPath)) {
    openVsCode(projectPath)
    return
  }

  exec(`sh ${scriptPath}`, (e, stdout, stderr) => {
    if (e || stderr) {
      log('Error occured', e?.message)
      return
    }

    log(chalk.green('Javascript project created successfully'))
  })
}

export default javascriptHandler
