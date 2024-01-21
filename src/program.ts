import { Command } from '@commander-js/extra-typings'
import jsCommand from './commands/javascript'
import reactCommand from './commands/react'

export const program = new Command()

program
  .name('accio-playground')
  .description('Build and load your code playground easily and quickly by just one command')
  .version('0.0.1')

// commands
jsCommand()
reactCommand()
