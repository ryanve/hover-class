# hover-class
Angular `hover-class` directive

## [Demo](https://ryanve.github.io/hover-class/)

#### Hover to activate

```html
<div hover-class="area--activated" class="area">area</div>
```

#### Hover to activate target element(s)
```html
<div hover-class='{".target": ".target--activated"}'>area</div>
```

## Setup

#### Install via npm

```
npm install hover-class --save
```

#### Declare dependency on your app

```js
angular.module('yourApp', ['hoverClass'])
```

#### **Or** define the directive on your app

```js
angular.module('yourApp', []).directive('hoverClass', require('hover-class'))
```

## Develop

```
npm test
```

## Other directives
- [click-class](https://www.npmjs.com/package/click-class)
- [label-class](https://www.npmjs.com/package/label-class)
