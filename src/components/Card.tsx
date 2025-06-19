
import AddToCard from "./AddToCard";
import type { Tdata } from "../types/data";

function Card(data: Tdata) {
  return (
    <div className="relative flex flex-col w-full h-full">
      <img src={data.image} alt="baklava" className="w-full h-full rounded-lg object-cover" />
      <div>
        <AddToCard product={data} />
      </div>
      <div className="mt-5">
        <span className="text-amber-500 block">{data.subTitle}</span>
        <h4 className="font-semibold text-lg text-slate-900">
          {data.title}
        </h4>
        <p className="text-xl text-amber-600">${data.price}</p>
      </div>
    </div>
  );
}

export default Card;
