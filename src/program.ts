import { Command } from '@commander-js/extra-typings'
import { js, react } from './handlers'

export const program = new Command()

program
  .name('accio-playground')
  .description('Build and load your code playground easily and quickly by just one command')
  .version('0.0.1')

// react
program.command('react').alias('React').action(react).description('Build and load react playground')

// javascript
program
  .command('javascript')
  .alias('js')
  .action(js)
  .description('Build and load javascript playground')
