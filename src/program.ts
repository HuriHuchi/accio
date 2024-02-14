import { Command } from '@commander-js/extra-typings'
import js from './commands/javascript'
import react from './commands/react'
import { version } from '../package.json'

export const program = new Command()

program
  .name('accio')
  .description('Build and load your code playground easily and quickly by just one command')
  .version(version)

// commands
js()
react()
