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
    <a href="https://reactjs.org/docs/hooks-intro.html">React Hook</a> for loading and using variable fonts.</em>
    <br/>
    You need React <code>16.7.0-alpha.0</code> or later installed to use Hooks.
  </sup>
  <br/>
  <br />
  <pre>npm i <a href="https://www.npmjs.com/package/react-variable-fonts">react-variable-fonts</a></pre>
  <br />
</div>

<h2 align="center">Usage</h2>


```css
@font-face {
    font-family: "Rocher";
    src: url("./Rocher.woff2") format("woff2");
    font-display: block;
    font-weight: normal;
}
```
Define a font face somewhere in your project's style sheet.
___
```javascript
const [normalStyles] = useVariableFont("Rocher", "normal");
const [customStyles, updateStyles] = useVariableFont("Rocher", { BVEL: 10 });
```
* The first return of the hook will be a CSS property object.
* The second return will be an update function that takes either
    1. A settings object to be merged with the current settings
    1. `normal` to reset the settings
___
<h2 align="center">Example</h2>

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
<h2 align="center">"What can my font do?"</h2>
<div align="center"><sup>Get the most from your variable fonts</sup></div>

1. Firefox Developer tools 

1. [Wakamaifondue](https://wakamaifondue.com/)
