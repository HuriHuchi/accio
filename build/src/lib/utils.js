"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectPath = exports.openVsCode = exports.isDirExist = exports.log = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const child_process_1 = require("child_process");
const chalk_1 = __importDefault(require("chalk"));
const constants_1 = require("./constants");
exports.log = console.log;
function isDirExist(path) {
    return fs_1.default.existsSync(path);
}
exports.isDirExist = isDirExist;
function openVsCode(path) {
    (0, child_process_1.exec)(`code ${path}`, (error, stdout, stderr) => {
        if (error) {
            console.error(chalk_1.default.red(`Error opening VSCode: ${error.message}`));
            return;
        }
        if (stderr) {
            console.error(chalk_1.default.red(`Error opening VSCode: ${stderr}`));
            return;
        }
        (0, exports.log)(chalk_1.default.green('VSCode opened successfully.'));
    });
}
exports.openVsCode = openVsCode;
function getProjectPath(key) {
    return path_1.default.join(constants_1.REPO_PATH, `${key}-playground`);
}
exports.getProjectPath = getProjectPath;
