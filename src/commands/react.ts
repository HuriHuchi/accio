import { ReactHandler } from '../handlers/react'
import { program } from '../program'

const reactHandler = new ReactHandler()
export default () => {
  program
    .command('react')
    .alias('React')
    .action(reactHandler.run)
    .description('Build and load react playground')
}
