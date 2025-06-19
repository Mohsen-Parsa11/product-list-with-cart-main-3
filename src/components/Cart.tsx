import Order from './Order'
import carbon_delivery from '../assets/icon-carbon-neutral.svg'
import { useCartStore, type CartItem } from '../lib/store/store';
import cake from '/cake.jpg';

function Cart() {
  const hanleOrder= ()=>{
    alert("Your Order is complete successfully");
  }
   const { items, clearCart, totalPrice, totalQuantity } = useCartStore();
  if (items.length === 0) return (
    <div className="w-full rounded-md px-6 py-5 bg-white md:-translate-y-14">
          <h2 className="text-2xl text-amber-700 font-semibold pb-3">Your Cart ({totalQuantity()}) </h2>
      <div className='py-5'>
        <img src={cake} alt="cake" className='size-40 mx-auto' />
      </div>
      <p className='text-center py-4 text-gray-900'>Your added items will apear here</p>
    </div>
  )
  return (
    <div className="w-full rounded-md px-6 py-5 bg-white md:-translate-y-14">
        <div className="flex justify-between items-center">
          <h2 className="text-2xl text-amber-700 font-semibold pb-3">Your Cart ({totalQuantity()}) </h2>
        <button onClick={clearCart} className="bg-red-500 hover:bg-red-600 active:scale-99 rounded-lg shadow p-2 text-white text-sm cursor-pointer">Clear Cart</button>
        </div>
        {
          items.map((item: CartItem)=>(
            <Order key={item.id} {...item} />
          ))
        }
        <div className="my-5 flex justify-between">
            <h3>Order Total</h3>
            <h3 className="font-bold text-2xl">${totalPrice()}</h3>
        </div>
        <div className="my-4 flex space-x-2 md:space-x-4 bg-amber-50 px-3 md:px-10 py-4 rounded">
            <img src={carbon_delivery} alt="" />
            <p className="text-gray-400 text-xs">This is a <span className="text-black">Carbon-delivery</span> neutral</p>
        </div>
        <button onClick={hanleOrder} className="px-4 py-2 bg-amber-800 rounded-full w-full text-white text-lg hover:opacity-90 active:scale-99 cursor-pointer transition duration-75">Confirm Order</button>
    </div>
  )
}

export default Cart