import Card from "./components/card";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <div className="bg-amber-100 w-full h-screen mx-auto py-10 px-8">
        <div className="grid grid-cols-5 gap-6">
          <div className="grid col-span-3 grid-cols-3 gap-6">
            {/* <h2 className="text-3xl text-slate-600 font-semibold my-4">Desserts</h2> */}
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <div className="col-span-2">
            <Cart />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
