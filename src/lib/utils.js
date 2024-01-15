import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'
import chalk from 'chalk'
import { REPO_PATH } from './constants.js'

export const log = console.log

export function isDirExist(dirPath) {
  return fs.existsSync(dirPath)
}

export function openVsCode(projectPath) {
  exec(`code ${projectPath}`, (error, stdout, stderr) => {
    if (error) {
      console.error(chalk.red(`Error opening VSCode: ${error.message}`))
      return
    }

    if (stderr) {
      console.error(chalk.red(`Error opening VSCode: ${stderr}`))
      return
    }

    log(chalk.green('VSCode opened successfully.'))
  })
}

export function getProjectPath(key) {
  return path.join(REPO_PATH, `${key}-playground`)
}
