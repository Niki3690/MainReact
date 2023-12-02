// import React, { useEffect, useState } from "react";

// const Effect = () => {
//   let [count, setCount] = useState(0);

//   let Add = () => {
//     setCount((preve) => preve + 1);
//   };

//   let Minus = () => {
//     setCount((preve) => preve - 1);
//   };

//   useEffect(() => {
//       console.log("The code is:",count);
//   }, [
//     count
//   ]
// );

//   return (
//     <div>
//       <div className="section">
//         <div className="container">
//           <div className="box">
//             <button className="button is-link" onClick={Add}>
//               ADD
//             </button>
//             <h1 className="is-size-1">{count}</h1>
//             <button className="button is-link" onClick={Minus}>
//               MINUS
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Effect;

// import React, { useEffect, useState } from "react";

// const Effect = () => {
//   let [count, setCount] = useState(0);
//   let [name, setName] = useState(0);
//   useEffect(() => {
//     console.log("work1");
//   });

//   useEffect(() => {
//     console.log("work2");
//   }, [name]);
//   return (
//     <div>
//       <h1>{count}</h1>
//       <button className="button" onClick={() => setCount(count + 1)}>
//         Click me!
//       </button>
//     </div>
//   );
// };

// export default Effect;

import React from "react";
import { useEffect } from "react";

const Effect = () => {
  useEffect(() => {
    console.log("HEllo useEffect");
  });

  console.log("Hello Outside");
  return (
    <div>
      <h1>Hello UseEffect</h1>
    </div>
  );
};

export default Effect;
