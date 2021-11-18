import "./productList.css";
import Product from "../product/Product";
import { products } from "../../data.js";

const ProductList = () => {
  return (
    <div className="pl">
      <div className="pl-texts">
        <h1 className="pl-title">Create & inspire. It's uddeshya</h1>
        <p className="pl-desc">
          This is a creative portfolio created my me, you can access each and
          every project visuals and source code in my githum account . here is
          the link: www.github.com/yudi1O1
        </p>
      </div>
      <div className="pl-list">
        {products.map((item) => (
          <Product key={item.id} img={item.img} link={item.link} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
