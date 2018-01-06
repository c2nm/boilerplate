# 📦 boilerplate 📦

this is a boilerplate starter kit for rapid web development.

## includes

* [gulp](http://gulpjs.com)
* [babel (es2017)](https://babeljs.io)
* [sass (with sourcemaps and autoprefixing)](http://sass-lang.com)
* minification of html, js and css
* [browsersync](https://www.browsersync.io)

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