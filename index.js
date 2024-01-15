import { program } from 'commander'
import reactHandler from './src/handlers/react.js'
import javascriptHandler from './src/handlers/javascript.js'

program.name('accio-playground').description('build playground with CLI').version('0.0.1')

program
  .command('accio')
  .description('Build a Playground on terminal')
  .argument('<framework>', 'framework to build')
  .action((f) => {
    const framework = f.toLowerCase()
    if (framework === 'react') {
      return reactHandler()
    } else if (['javascript', 'js'].includes(framework)) {
      return javascriptHandler()
    } else {
      console.log('working on 😅')
    }
  })

program.parse(process.argv)
if (!process.argv.slice(2).length) {
  program.outputHelp()
}
