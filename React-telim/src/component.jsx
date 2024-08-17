import { useState } from "react";

function Component() {
    const [count, SetCount] = useState(0)
    return(
      <div>
        <p>say:{count}</p>
        <button onClick={()=>SetCount(count+1)}>artir</button>
        <button onClick={()=>SetCount(count-1)}>azalt</button>
      </div>
    )
}
export default Component
