let mix = require('laravel-mix');

mix.js('./src/js/main.js', '../dist/js');
mix.options({ processCssUrls: false});
