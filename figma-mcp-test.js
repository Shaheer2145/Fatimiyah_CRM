require('dotenv').config();
const { spawn } = require('child_process');

const command = 'npx';
const args = ['-y', 'figma-mcp', '--stdio'];
const env = Object.assign({}, process.env, {
  FIGMA_API_KEY: process.env.FIGMA_API_KEY 
});

console.log('Starting figma-mcp server to test connection...');

const child = spawn(command, args, { env });

child.stdout.on('data', (data) => {
  console.log(`STDOUT: ${data}`);
});

child.stderr.on('data', (data) => {
  console.error(`STDERR: ${data}`);
});

child.on('close', (code) => {
  console.log(`figma-mcp process exited with code ${code}`);
});
