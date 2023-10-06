import "./Menu.css";
export const ACTIONS = {
  add: "add",
  remove: "remove",
};
function Realmenu({ menus, carts, setCarts }) {
  function addHandler() {
    if (menus.Added) {
      const index = carts.indexOf(menus);
      if (index > -1) {
        carts.splice(index, 1);
      }

      setCarts([...carts]);
    } else {
      setCarts([...carts, menus]);
    }

    menus.Added = !menus.Added;
  }

  return (
    <div>
      <div>
        <div>
          <div className="mt-mtest ml-8 ">
            <div className="w-wmw h-wraph  bg-gray-300">
              <div>
                <div>
                  <img
                    src={menus.img}
                    className="object-cover h-h20px overflow-hidden"
                  />
                </div>
                <div className="m-2">
                  <p className="text-gray-800 font-bold text-xl">
                    {menus.name}
                  </p>
                  <p className="italic text-gray-800  overflow-hidden  flex flex-wrap ">
                    {menus.ingridients}
                  </p>
                  <p className="m-2 mt-4 text-black font-bold text-xl">
                    ${menus.price}
                  </p>
                  <button
                    className={` ${
                      menus.Added ? "bg-green-500" : "bg-red-500"
                    } rounded h-8  w-widithsearch cursor-pointer hover:bg-yellow-500`}
                    onClick={addHandler}
                  >
                    {menus.Added ? "REMOVE" : "ADD TO CART"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Realmenu;
