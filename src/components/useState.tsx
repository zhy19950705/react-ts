import React, { useState, useEffect } from 'react';
let testUser = { name: 'why' }
function Example() {
    let [count, setCount] = useState(testUser);
    if (count !== testUser) {
        testUser = count
        console.log(testUser)
    }
  return (
    <div>
      <button onClick={() => setCount({ name: 'zhy'})}>
        Click me
      </button>
    </div>
  );
}
export default Example