# inline-source-webpack-plugin

> Inline all `<script>`, `<link>` and `<img>` tags that contain the `inline` attribute with [inline-source](https://github.com/popeindustries/inline-source).

## Installation


```shell
npm install --save-dev inline-source-webpack-plugin
```

## Basic Usage
Require the plugin in your webpack config:

```javascript
var InlineSourceWebpackPlugin = require('inline-source-webpack-plugin');
```

Add the plugin to your webpack config as follows:

```javascript
plugins: [
  new HtmlWebpackPlugin(),
  new InlineSourceWebpackPlugin()
  /*
  // option
  new InlineSourceWebpackPlugin({
    // the option with https://github.com/popeindustries/inline-source
  }) 
  */
]  
```

Add the tag to your html template as follows:

```html
<!DOCTYPE html>
<html>
  <head>
    <script inline src="your_file.js"></script>
  </head>
  <body>
  </body>
</html>
```
