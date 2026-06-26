import { spawn } from 'child_process';
import { createServer } from 'http';

// Shim to boot the Express backend via tsx
const child = spawn('npx', ['tsx', 'backend/server.ts'], {
  stdio: 'inherit',
  shell: true,
});

process.on('SIGTERM', () => child.kill('SIGTERM'));
process.on('SIGINT', () => child.kill('SIGINT'));
process.on('exit', () => child.kill());
