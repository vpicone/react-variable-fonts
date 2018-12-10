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
  <br/>
  <sup>
    A <a href="https://reactjs.org/docs/hooks-intro.html">React Hook</a> for loading and manipulating <a href="https://v-fonts.com/">variable fonts.</a></em>
    <br/>
    You need React <code>^16.7.0-alpha.0</code> to use Hooks.
      <br/>
  <a href="https://wakamaifondue.com/">What can my font do?</a>
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
#### Pass in a font-family string and some initial settings (or `normal`).

```javascript
const settings = {
  // axis: value,
  SHDW: 40,
  BVEL: 100
}

const [styles] = useVariableFont("Rocher", settings);
```

#### The first index will be CSS property object.
```javascript
const [normalStyles] = useVariableFont("Rocher", "normal");

return <p style={{...normalStyles}}>Hello world</p>
```

#### The second index will be function to update the settings
```javascript
const [styles, updateStyles] = useVariableFont("Rocher", "normal");

updateStyles({SHDW: 100});
```
* Same rules as initial settings
* New settings override previous settings
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
