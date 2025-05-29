import image from "../../public/image-creme-brulee-desktop.jpg";
import addToCardIcon from "../../public/icon-add-to-cart.svg";

import AddToCard from "./AddToCard";

function Card() {
  return (
    <div className="relative flex flex-col w-full h-full">
      <img src={image} alt="baklava" className="w-full h-full rounded-lg object-cover" />
      <div>
          <button className="flex justify-between items-center absolute bottom-22 left-10 hover:bg-gray-50 cursor-pointer active:scale-99 bg-white px-4 py-2 border-1 border-amber-700 rounded-3xl w-36 mx-auto transition duration-75">
            <img src={addToCardIcon} alt="addToCardIcon" />
            <span className="text-sm text-amber-700">Add to Card</span>
          </button>
        <div className="hidden">
          <AddToCard />
        </div>
      </div>
      <div className="mt-5">
        <span className="text-amber-500 block">Waffle</span>
        <h4 className="font-semibold text-lg text-slate-900">
          Waffle with Barries
        </h4>
        <p className="text-xl text-amber-600">$6.50</p>
      </div>
    </div>
  );
}

export default Card;
