# hover-class
Angular `hover-class` directive

- [Demo](https://ryanve.github.io/hover-class/)
- [Usage](#usage)
- [Setup](#setup)
- [npm: <b>hover-class</b>](https://www.npmjs.com/package/hover-class)

## Usage

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

## Development

```
npm test
```

## Other directives
- [click-class](https://github.com/ryanve/click-class)
- [label-class](https://github.com/ryanve/label-class)
