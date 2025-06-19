
import addToCardIcon from "../assets/icon-add-to-cart.svg";
import { useCartStore } from "../lib/store/store";


function AddToCard({ product }: { product: { id: number; title: string; price: number } }) {
  const { items, addItem, increase, decrease } = useCartStore();
  const found = items.find((i) => i.id === product.id);
  const quantity = found?.quantity || 0;
  return quantity === 0 ? (
    <button onClick={()=>addItem(product)} className="flex justify-between items-center absolute bottom-22 left-16 md:left-9 lg:left-5 xl:left-10 hover:bg-gray-50 cursor-pointer active:scale-99 bg-white px-4 py-2 border-1 border-amber-700 rounded-3xl w-36 mx-auto transition duration-75">
      <img src={addToCardIcon} alt="addToCardIcon" />
      <span className="text-sm text-amber-700">Add to Card</span>
    </button>
  ) : (
    <div className="flex justify-between items-center absolute bottom-22 left-11 bg-amber-700 px-4 py-1 rounded-3xl w-32 mx-auto text-white transition duration-75">
      <button onClick={()=>decrease(product.id)} className="flex justify-center items-center border-1 border-white hover:bg-white hover:text-amber-800 active:scale-95 rounded-full w-4 h-4 pb-1 cursor-pointer transition duration-75">
        -
      </button>
      <p>{quantity}</p>
      <button onClick={()=>increase(product.id)} className="flex justify-center items-center border-1 border-white hover:bg-white hover:text-amber-800 active:scale-95 rounded-full w-4 h-4 pb-1 cursor-pointer transition duration-75">
        +
      </button>
    </div>
  );
}

export default AddToCard;
