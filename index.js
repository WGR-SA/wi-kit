import sass from 'sass';
import fs from 'fs';

fs.writeFileSync('./build/main.css', sass.compile('./src/scss/main.scss').css);

