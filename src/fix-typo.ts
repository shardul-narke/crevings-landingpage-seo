import fs from 'fs';

const filePath = 'src/App.tsx';
let content = fs.readFileSync(filePath, 'utf-8');

content = content.replace(/bg-blue-900\/200/g, 'bg-blue-500');

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Fixed bg-blue-900/200 typo.');

