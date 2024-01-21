import { program } from '../program'

export default () => {
  program
    .command('react')
    .alias('React')
    .action(() => {})
    .description('Build and load react playground')
}
