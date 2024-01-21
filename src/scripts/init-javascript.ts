import fs from 'fs'
import path from 'path'
import { createRepo, hasRepo } from '../lib/utils'

const projectName = 'js-playground'

export async function initJavascript() {
  if (!hasRepo()) {
    createRepo()
  }

  process.chdir('.accio/repos')

  const projectDir = path.join('.', projectName)

  if (!fs.existsSync(projectDir)) {
    fs.mkdirSync(projectDir, { recursive: true })
  }

  // index.html 파일 생성
  const htmlContent = `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${projectName}</title>
    <!-- Add your HTML head content here -->
  </head>
  <body>
    <h1>Hello, ${projectName}!</h1>
    <!-- Add your HTML body content here -->
    <script src="index.js"></script>
  </body>
  </html>`

  fs.writeFileSync(path.join(projectDir, 'index.html'), htmlContent)

  // index.js 파일 생성
  const jsContent = '// Add your JavaScript code here'
  fs.writeFileSync(path.join(projectDir, 'index.js'), jsContent)
}
