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
* minification of html, js and css

## installation

```
mkdir testproject
cd testproject
wget https://github.com/vielhuber/boilerplate/archive/master.zip
unzip master.zip -d .
mv boilerplate-master/{.[!.],}* .
rm -r boilerplate-master
rm master.zip
npm install
gulp
```