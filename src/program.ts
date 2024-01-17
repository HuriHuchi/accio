import { Command } from '@commander-js/extra-typings'
import { js, react } from './handlers'
import figlet from 'figlet'
import { log } from './lib/utils'

log(figlet.textSync('Accio Playground'))

export const program = new Command()

program
  .name('accio-playground')
  .description('Build and load your code playground easily and quickly by just one command')
  .version('0.0.1')

program
  .command('accio')
  .description('load or build playground')
  .argument('<playground>', 'playground to build')
  .action((p: string) => {
    const playground = p.toLowerCase()
    if (playground === 'react') {
      react()
    } else if (['javascript', 'js'].includes(playground)) {
      js()
    } else {
      console.log('working on 😅')
    }
  })
