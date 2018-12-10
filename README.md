<div align="center">
  <h1>
    react-variable-fonts
    <br/>
    <br/>
    🖋️
    <br/>
    <br/>
  </h1>
  <br/>
  <sup>
    <a href="https://reactjs.org/docs/hooks-intro.html">React Hook</a> for loading and manipulating variable fonts.</em>
    <br/>
    You need React <code>16.7.0-alpha.0</code> or later installed to use Hooks.
  </sup>
</div>

## Setup
#### Install the package
<pre>npm i <a href="https://www.npmjs.com/package/react-variable-fonts">react-variable-fonts</a></pre>

#### Define your font-face somewhere in your stylesheet
```css
@font-face {
    font-family: "Rocher";
    src: url("./Rocher.woff2") format("woff2");
    font-display: block;
    font-weight: normal;
}
```


## Usage
#### The hook takes a font-family and initial variation settings as arguments

#### Font variation settings are defined as object literals
```javascript
const settings = {
  // axis: value,
  SHDW: 40,
  BVEL: 100
}
```

#### The first return of the hook will be a CSS property object.
```javascript
const [normalStyles] = useVariableFont("Rocher", "normal");
return <p style={{...normalStyles}}>Hello world</p>
```

#### The second return will be an update function
```javascript
const [styles, updateStyles] = useVariableFont("Rocher", { BVEL: 10 });

updateStyles({SHDW: 100});
```
* New settings override previous settings. 
* passing `normal` resets the variation settings

## Example
```javascript
import React from "react";
import useVariableFont from "react-variable-fonts";

const initialSettings = {
    BVEL: 20,
    SHDW: 50
}

const Demo = () => {
  const [normalStyles] = useVariableFont("Rocher", "normal");
  const [customStyles, updateStyles] = useVariableFont("Rocher", initialSettings);

  const randomSetting = () => Math.floor(Math.random() * 100);

  return (
    <>
      <h1 style={{ ...normalStyles }}>Hello World</h1>
      <h1 style={{ ...customStyles }}>Hello Variable Fonts</h1>
      <button onClick={() => updateStyles({ SHDW: randomSetting() })}>
        ▲ bevel
      </button>
    </>
  );
};
```
___
## What Can My font do?

1. Firefox Developer tools 

1. [Wakamaifondue](https://wakamaifondue.com/)
