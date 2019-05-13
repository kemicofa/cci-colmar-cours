<!-- page_number: true -->

# [React Hooks](https://reactjs.org/docs/hooks-intro.html)

Using `state` globally and without a class

![](https://media.giphy.com/media/l4pT6owvWSmHzKUtW/giphy.gif)

Kevin Faulhaber
CCI Colmar

---

What is a "Hook" ?
===

> Essentially it's a place in code that allows you to tap in to a module to either provide different behavior or to react when something happens.
> 

-- [Micah](https://stackoverflow.com/a/467568/3589092)

---

useState
===

```
import React, { useState } from 'react';

function Example() {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```