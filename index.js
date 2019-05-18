const { Toolkit } = require('actions-toolkit')
const Table = require('cli-table2');

const table = new Table();
const tools = new Toolkit;

console.log('## Environment variables');

[
    'GITHUB_WORKFLOW',
    'GITHUB_ACTION',
    'GITHUB_ACTOR',
    'GITHUB_REPOSITORY',
    'GITHUB_EVENT_NAME',
    'GITHUB_EVENT_PATH',
    'GITHUB_WORKSPACE',
    'GITHUB_SHA',
].forEach((key) => {
    let x = {};
    x[key] = process.env[key];
    table.push(x);
});

console.log(table.toString());

console.log(tools.context.payload);
