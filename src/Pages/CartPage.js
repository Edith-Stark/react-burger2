import { useState } from "react";

function CartPage({ cart, removeHandler }) {
  const [quantity, setquantity] = useState(1);
  cart.totalPrice = cart.price * cart.quantity;

  const quantityPlus = () => {
    setquantity((prev) => prev + 1);
    cart.quantity += 1;
  };

  const quantityMinus = () => {
    if (cart.quantity > 1) {
      setquantity((prev) => prev - 1);
      cart.quantity -= 1;
    } else {
      setquantity(1);
      cart.quantity = 1;
    }
  };

  return (
    <div key={cart.id}>
      <div className="w-wmenuw22 h-hcart cursor-pointer mt-4">
        <div className="flex ml-4 ">
          <div className="w-wcart2  object-cover">
            <img src={cart.img} className="rounded object-cover" />
          </div>
          <div className="py-4 pl-4">
            <p>{cart.name}</p>
          </div>
          <div className="flex ">
            <button
              onClick={quantityPlus}
              className="ml-4 bg-gray-200 w-8 text-xl border-2 border-gray-400 hover:bg-white"
            >
              +
            </button>
            <p className="ml-4 py-4  ">{quantity}</p>
            <button
              onClick={quantityMinus}
              className="ml-4 bg-gray-200 w-8 text-xl border-2 border-gray-400 hover:bg-white"
            >
              -
            </button>
          </div>

          <button
            className="p-4 ml-8 bg-red-500 hover:bg-red-200 transition-all ease-in-out"
            onClick={() => {
              removeHandler(cart.id);
            }}
          >
            X
          </button>

          <div className="p-4 ml-10">
            <p>${cart.totalPrice}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
