import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div>
        <br></br>
        <h1 className="text-4xl ml-6 font-bold hover:underline underline-offset-8	 hover:cursor-pointer">
          Login Page
        </h1>
        <hr></hr>
        <p className="m-6 border-4 border-blue-400 p-12 rounded-3xl border-dashed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
          magnam autem, cum voluptatum exercitationem consequuntur eius hic
          corporis porro minus similique dolorum praesentium recusandae mollitia
          perferendis pariatur qui tempora iure. Vel consequuntur tempora
          placeat quis expedita quaerat magni, fugiat ullam impedit est sit
          corrupti at quae earum iure adipisci facilis atque voluptas! Modi a
          totam corrupti nihil voluptate velit magnam? Aliquid recusandae, alias
          voluptatum porro et minus labore, sint quo reiciendis reprehenderit
          ducimus deserunt provident officia, ipsum numquam eligendi autem iusto
          minima sed! Illo, odit laboriosam sit, quidem veniam minima voluptas
          impedit vel in iusto accusamus ab obcaecati mollitia, voluptate
          dolorum hic consequatur asperiores officiis fuga neque! Nostrum
          dolorum soluta nemo, animi architecto accusantium quidem, unde
          corrupti nulla, porro magni delectus eum sed dolorem ut ipsam
          distinctio velit ab neque nam esse quo sit? Temporibus ipsam a ut
          fugit cupiditate odit perspiciatis amet quae eaque nemo asperiores,
          est optio dolore minima necessitatibus dolorem illo, assumenda magnam
          earum, expedita quidem illum. Dolorum molestias ab dolorem corrupti
          perferendis amet, suscipit facere totam veniam. Vel labore unde
          nostrum reiciendis corporis porro, consequuntur ratione quam officiis
          exercitationem excepturi libero minus eos aliquam possimus architecto
          itaque nam laudantium ipsa. Ab, enim eius dignissimos, debitis
          quibusdam accusamus eaque, blanditiis necessitatibus deleniti nostrum
          id nam ipsum exercitationem. Rerum, sapiente velit quas atque,
          consectetur, dignissimos tempore facilis delectus esse culpa laborum.
          Magni ratione voluptatibus quasi facere, deserunt explicabo quae
          blanditiis ut dicta voluptates iste? Magnam explicabo atque, quis
          incidunt nulla dignissimos iure ad?
        </p>
        <br />
      </div>
      <Link to="/">
        <button
          className="button"
          style={{ marginLeft: 555, backgroundColor: "black", color: "white" }}
        >
          Click me Home page
        </button>
      </Link>
    </div>
  );
};

export default Login;
