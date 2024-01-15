import { program } from '@commander-js/extra-typings'
import reactHandler from './handlers/react.js'
import javascriptHandler from './handlers/javascript.js'

// todo - 파일 확장자 없애기
// ts-node 사용하기?
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
       reactHandler()
    } else if (['javascript', 'js'].includes(playground)) {
       javascriptHandler()
    } else {
      console.log('working on 😅')
    }
  })

program.parse()
