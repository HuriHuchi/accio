import { getProjectPath, isDirExist, openVsCode } from '../lib/utils'
import { initJavascript } from '../scripts/init-javascript'

const KEY = 'js'

async function javascriptHandler() {
  const projectPath = getProjectPath(KEY)

  if (isDirExist(projectPath)) {
    openVsCode(projectPath)
    return
  }

  try {
    await initJavascript()
    openVsCode(projectPath)
  } catch (e) {
    console.error(e)
  }
}

export default javascriptHandler
