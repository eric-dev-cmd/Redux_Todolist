import "./App.css";
import "./Product.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
// import Product from "./components/Product";
// import Math from "./components/Math";
// import Ref from "./components/Ref";
// import State from "./components/State";
// import ChangeColorSize from "./components/Changecolorsize";
// import Form from "./components/Form";
import Todolist from "./components/Todolist";
import { Component } from "react";

class App extends Component {
  onHandleClick() {
    console.log("clicked!");
  }
  render() {
    // let elements = products.map((product, index) => {
    //   let result = "";
    //   if (product.status) {
    //     result = (
    //       <Product
    //         key={index}
    //         name={product.name}
    //         price_new={product.price_new}
    //         price_old={product.price_old}
    //         sold={product.sold}
    //         discount={product.discount}
    //         status={product.status}
    //       ></Product>
    //     );
    //     return result;
    //   }
    // });
    return (
      <div>
        <Header></Header>
        <div className="container">
          {/* <Math /> */}
          <div className="row">
            <div className="col">
              <div className="home_product">
                {/* <div className="row">{elements}</div> */}
                {/* <div className="row my-2">
                  <div className="col-12">
                    <button
                      type="button"
                      className="btn btn-danger btn-lg"
                      onClick={this.onHandleClick}
                    >
                      Click me!
                    </button>
                  </div>
                </div> 
                <div className="row my-2">
                  <div className="col-12"><Ref /></div>
                </div>
                <div className="row my-2">
                  <div className="col-12"><State /></div>
                </div>
                <div className="row my-2">
                  <div className="col-12"><ChangeColorSize /></div>
                </div>
                <div className="row my-2">
                  <div className="col-12"><Form /></div>
                </div>*/}
                <div className="row my-2">
                  <div className="col-12">
                    <Todolist />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;
