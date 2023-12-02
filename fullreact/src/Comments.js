import React from "react";
import { CommentsData } from "./CommentsData";

const Comments = () => {
  return (
    <div className="ooo">
      {CommentsData.map((item) => (
        <div
          className="box"
          style={{
            backgroundColor: "black",
            color: "wheat",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: 25, textAlign: "center", fontWeight: 700 }}>
            {item.id}
          </div>
          <hr />
          <div>{item.body}</div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
