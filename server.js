const { spawn } = require('child_process');

const server = spawn('npx', ['tsx', 'backend/server.ts'], {
  stdio: 'inherit',
  shell: true,
});

server.on('exit', (code) => process.exit(code));
process.on('SIGTERM', () => server.kill('SIGTERM'));
process.on('SIGINT', () => server.kill('SIGINT'));
