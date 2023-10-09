import { menu } from "../MenuList";
import Cart from "../Assets/carts.png";
import Realmenu from "./Realmenu";
import { useState } from "react";
import "./Menu.css";
import CartPage from "./CartPage";

export default function Menu() {
  const [carts, setCarts] = useState([]);
  let total = [];
  console.log(carts);
  carts.map((cart) => {
    total.push(cart.price * cart.quantity);
  });
  console.log(total);
  let sum = 0;
  let shipping = 5;
  total.map((total) => {
    sum = sum + total;
  });
  console.log(sum);

  const removeHandler = (id) => {
    setCarts((prev) => prev.filter((cart) => cart.id != id));
    carts.map((cart) => {
      if (cart.id == id) {
        cart.Added = false;
        cart.quantity = 1;
        cart.totalPrice = cart.price;
      }
    });
  };
  let visible = false;
  const closeCartHandler = () => {
    document.getElementById("hideId").classList.add("hidden");
    document.getElementById("menuId").classList.remove("grid");
    document.getElementById("menuId").classList.remove("grid-cols-2");
    document.getElementById("menuId2").classList.remove("overflow-y-scroll");
    visible = !visible;
  };

  const cartClick = () => {
    visible = !visible;

    if (visible) {
      document.getElementById("hideId").classList.remove("hidden");
      document.getElementById("menuId").classList.add("grid");
      document.getElementById("menuId").classList.add("grid-cols-2");
      document.getElementById("menuId2").classList.add("overflow-y-scroll");
    } else {
      document.getElementById("hideId").classList.add("hidden");
      document.getElementById("menuId").classList.remove("grid");
      document.getElementById("menuId").classList.remove("grid-cols-2");
      document.getElementById("menuId2").classList.remove("overflow-y-scroll");
    }
  };

  return (
    <div>
      <div>
        <div className="flex justify-between  ml-ml2 m-6">
          <h1 className="text-4xl text-orange-400 italic">Enjoy Your Meal!</h1>
          <div>
            <div
              onClick={cartClick}
              className="mr-8 flex justify-center align-middle px-4 pt-2 border-2 cursor-pointer  border-red-200 rounded-xl hover:bg-blue-950 hover:scale-105 ease-in-out transition-all "
            >
              <p className="font-bold text-2xl   text-red-600 align-middle">
                Cart
              </p>
              <div className="relative">
                <div
                  className={`${
                    carts.length == 0 ? `hidden` : ``
                  }bg-red-400 w-5 h-5 absolute rounded-full  object-cover justify-center flex align-middle text-lg right-0 z-10`}
                >
                  <p
                    className={`${
                      carts.length == 0 ? `hidden` : ``
                    } -mt-1 text-white`}
                  >
                    {carts.length}
                  </p>
                </div>
                <img src={Cart} className="w-12 " />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="menuId" className="">
        <div
          id="menuId2"
          className={` scroll h-hm flex flex-wrap ml-4 classname`}
        >
          {menu.map((menu) => {
            return (
              <div className="">
                <Realmenu
                  key={menu.id}
                  carts={carts}
                  setCarts={setCarts}
                  menus={menu}
                />
              </div>
            );
          })}
        </div>
        <div id="hideId" className="hidden   ">
          <div className="bg-gray-400 w-wmenuw2 h-hm m-12 rounded text-gray-800 justify-center align-middle flex py-2">
            <div className="bg-white w-wmenuw22 h-hm1">
              <div className="">
                <div className="flex justify-between mx-16 pt-4">
                  <p className="text-2xl font-semibold">Shopping Cart</p>
                  <button
                    onClick={closeCartHandler}
                    className="bg-red-500  w-16 rounded-lg hover:bg-gray-200"
                  >
                    Close
                  </button>
                </div>
                <div className="flex justify-between m-12 pl-16 italic">
                  <p>Description</p>
                  <p>Quantity</p>
                  <p>Remove</p>
                  <p>Price</p>
                </div>

                <div
                  id="cartId"
                  className={`scroll1  h-hmcart overflow-y-scroll overflow-hidden -mt-4  `}
                >
                  {carts.map((carts) => {
                    return (
                      <>
                        <CartPage
                          cart={carts}
                          removeHandler={removeHandler}
                          className="z-10"
                          total={total}
                        />
                      </>
                    );
                  })}
                </div>
                <div>
                  <div className="grid grid-cols-2 bg-gray-200 -z-10 overflow-hidden h-hcheckout rounded">
                    <div className="m-2">
                      <h1 className="font-semibold mx-4">PROMO CODE</h1>
                      <input
                        className=" border-b-2 m-2 mt-4 border-gray-600 bg-gray-200 focus:outline-none "
                        placeholder="Enter Your Code"
                        type="text"
                      />
                      <br />
                      <button className="bg-red-500 px-4 py-2 text-white rounded m-4 hover:bg-red-400">
                        APPLY
                      </button>
                    </div>

                    <div>
                      <div>
                        <div className="flex justify-between px-6 py-1 font-semibold">
                          <p>ITEMS</p>
                          <p>${sum}</p>
                        </div>
                        <div className="flex justify-between px-6 py-1 font-semibold">
                          <p>SHIPPING</p>
                          <p>$5</p>
                        </div>
                        <hr className="bg-gray-100 h-1 rounded" />
                        <div className="flex justify-between px-6 py-1 font-semibold ">
                          <p>TOTAL COST</p>
                          <p>${sum + shipping}</p>
                        </div>
                        <div className=" justify-between px-6 py-2">
                          <button className="bg-blue-600 px-4 py-2 rounded ml-4 hover:bg-blue-400">
                            CHECKOUT
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
