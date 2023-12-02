// import React from "react";

// const Child = (props) => {
//   return (
//     <div>
//       {props.name}
//       {props.red};
//     </div>
//   );
// };

// export default Child;

import React from "react";

const Child = ({ name, color }) => {
  return (
    <div>
      {name}
      <br />
      {color}
    </div>
  );
};

export default Child;
