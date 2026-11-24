import sharp from 'sharp';
await sharp('public/sky-vision-logo.svg').resize(1024,1024).png().toFile('resources/icon.png');
await sharp('public/sky-vision-logo.svg').resize(1024,1024).png().toFile('resources/splash.png');
