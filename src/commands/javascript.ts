import { JavascriptHandler } from './../handlers/javascript'
import { program } from '../program'

// javascript
const javascriptHandler = new JavascriptHandler()
export default () => {
  program
    .command('javascript')
    .argument('[command]', 'command')
    .alias('js')
    .action((command) => {
      if (command === 'reset') {
        javascriptHandler.reset()
        return
      }
      javascriptHandler.run()
    })
    .description('Build and load javascript playground')
}
