# 📦 boilerplate 📦

this is a boilerplate starter kit for rapid web development. it is based on [npm scripts](https://docs.npmjs.com/misc/scripts) of alternatively on [gulp](http://gulpjs.com).

## includes

* [Babel (es2017)](https://babeljs.io)
* [Sass (+sourcemaps/autoprefixing)](http://sass-lang.com)
* [Browsersync](https://www.browsersync.io)
* [Vue.js](https://vuejs.org)
* [eslint](https://eslint.org)
* [Jest](https://github.com/facebook/jest) with [Puppeteer](https://github.com/smooth-code/jest-puppeteer)
* [hlp](https://github.com/vielhuber/hlp)
* [Prettier](https://github.com/prettier/prettier) and [Prettier PHP Plugin](https://github.com/prettier/plugin-php)

## features

* watchers for file changes
* copy scripts
* minification of html, js and css
* bundling of external libs
* extracting of critical css for [above-the-fold-content](https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent)
* deferred loading of google analytics
* google page speed 100/100 ready
* full ie11 support

## installation

```
mkdir testproject
cd testproject
wget https://github.com/vielhuber/boilerplate/archive/master.zip
unzip master.zip -d .
mv boilerplate-master/{.[!.],}* .
rm -r boilerplate-master
rm master.zip
rm README.md
npm install
```

## usage

### npm scripts (recommened)

```
npm run build
```

### gulp

```
gulp
```