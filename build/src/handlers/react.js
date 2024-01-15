"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const child_process_1 = require("child_process");
const utils_js_1 = require("../lib/utils.js");
const chalk_1 = __importDefault(require("chalk"));
const console_1 = require("console");
const KEY = 'react';
function reactHandler() {
    return __awaiter(this, void 0, void 0, function* () {
        const projectPath = (0, utils_js_1.getProjectPath)(KEY);
        if ((0, utils_js_1.isDirExist)(projectPath)) {
            (0, utils_js_1.openVsCode)(projectPath);
            return;
        }
        const app = (0, child_process_1.spawn)('npx', ['create-react-app', projectPath]);
        app.stdout.on('data', (data) => {
            console.log(data.toString());
        });
        app.on('close', (code) => {
            if (code === 0) {
                (0, console_1.log)(chalk_1.default.green('React project created successfully'));
                (0, utils_js_1.openVsCode)(projectPath);
            }
            else {
                (0, console_1.log)('🟥 Error');
            }
        });
    });
}
exports.default = reactHandler;
