import fs from 'fs'
import path from 'path'
import { exec, execSync } from 'child_process'
import { REPO_PATH } from './constants'
import chalk from 'chalk'

export const log = console.log

export function isDirExist(path: string) {
  return fs.existsSync(path)
}

function openFinder(path: string) {
  execSync(`open ${path}`)
}

export function openVsCode(path: string) {
  exec(`code ${path}`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error opening VSCode: ${error.message}`)
      openFinder(path)
      return
    }

    if (stderr) {
      console.error(`Error opening VSCode: ${stderr}`)
      openFinder(path)
      return
    }

    log(chalk.green('VSCode opened successfully.'))
  })
}

export function getProjectPath(key: string) {
  return path.join(REPO_PATH, `${key}-playground`)
}

export function hasRepo() {
  return isDirExist('.accio') || isDirExist('.accio/repos')
}

export function createRepo() {
  if (!isDirExist('.accio')) {
    fs.mkdirSync('.accio')
  }

  if (!isDirExist('.accio/repos')) {
    fs.mkdirSync('.accio/repos')
  }
}
