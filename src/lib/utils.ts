import fs from 'fs'
import path from 'path'
import { exec } from 'child_process'
import chalk from 'chalk'
import { REPO_PATH } from './constants'

export const log = console.log

export function isDirExist(path: string) {
  return fs.existsSync(path)
}

export function openVsCode(path: string) {
  exec(`code ${path}`, (error, stdout, stderr) => {
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

export function getProjectPath(key: string) {
  return path.join(REPO_PATH, `${key}-playground`)
}
