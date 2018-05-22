# 📦 boilerplate 📦

this is a boilerplate starter kit for rapid web development.

## includes

* [gulp](http://gulpjs.com)
* [Babel (es2017)](https://babeljs.io)
* [Sass (with sourcemaps and autoprefixing)](http://sass-lang.com)
* [Browsersync](https://www.browsersync.io)
* [Vue.js](https://vuejs.org)
* [eslint](https://eslint.org)
* [Jest](https://github.com/facebook/jest)
* [hlp](https://github.com/vielhuber/hlp)
* minification of html, js and css
* bundling of external libs
* extracting of critical css for [above-the-fold-content](https://developers.google.com/speed/docs/insights/PrioritizeVisibleContent)
* deferred loading of google analytics
* google page speed 100/100 ready

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
gulp
```