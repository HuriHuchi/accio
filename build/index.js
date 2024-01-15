"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const commander_1 = require("commander");
const react_js_1 = __importDefault(require("./src/handlers/react.js"));
const javascript_js_1 = __importDefault(require("./src/handlers/javascript.js"));
commander_1.program
    .name('accio-playground')
    .description('Build and load your code playground easily and quickly by just one command')
    .version('0.0.1');
commander_1.program
    .command('accio')
    .description('load or build playground')
    .argument('<playground>', 'playground to build')
    .action((p) => {
    const playground = p.toLowerCase();
    if (playground === 'react') {
        return (0, react_js_1.default)();
    }
    else if (['javascript', 'js'].includes(playground)) {
        return (0, javascript_js_1.default)();
    }
    else {
        console.log('working on 😅');
    }
});
commander_1.program.parse();
