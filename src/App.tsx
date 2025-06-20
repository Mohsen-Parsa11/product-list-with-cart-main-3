import Card from "./components/Card";
import Cart from "./components/Cart";
import ModalConfimrOrder from "./components/modal";
import { cardData } from "./lib/data";
import type { Tdata } from "./types/data";

function App() {
  return (
    <>
      <div className="relative bg-orange-50">
        <ModalConfimrOrder />
        <div className=" w-full container mx-auto py-10 px-6 xl:px-0">
          <h2 className="text-3xl text-slate-950 pb-8">Desserts</h2>
          <div className="md:grid md:grid-cols-5 space-y-14 md:space-y-0 md:gap-6 ">
            <div className="grid col-span-3 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* <h2 className="text-3xl text-slate-600 font-semibold my-4">Desserts</h2> */}
              {
                cardData.map((data: Tdata) =>(
                  <Card key={data.id} {...data} />
                ))
              }
            </div>
            <div className="col-span-2">
              <Cart />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
