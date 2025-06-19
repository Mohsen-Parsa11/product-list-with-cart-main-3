import Order from './Order'
import carbon_delivery from '../assets/icon-carbon-neutral.svg'
import { CartData } from '../lib/CartData'
import type { CartDataType } from '../types/CartDataType'

function Cart() {
  return (
    <div className="w-full rounded-md px-6 py-5 bg-white md:-translate-y-14">
        <h2 className="text-2xl text-amber-700 font-semibold pb-3">Your Cart (7) </h2>
        {
          CartData.map((Cart: CartDataType)=>(
            <Order key={Cart.id} {...Cart} />
          ))
        }
        <div className="my-5 flex justify-between">
            <h3>Order Total</h3>
            <h3 className="font-bold text-2xl">$46.50</h3>
        </div>
        <div className="my-4 flex space-x-2 md:space-x-4 bg-amber-50 px-3 md:px-10 py-4 rounded">
            <img src={carbon_delivery} alt="" />
            <p className="text-gray-400 text-xs">This is a <span className="text-black">Carbon-delivery</span> neutral</p>
        </div>
        <button className="px-4 py-2 bg-amber-800 rounded-full w-full text-white text-lg hover:opacity-90 active:scale-99 cursor-pointer transition duration-75">Confirm Order</button>
    </div>
  )
}

export default Cart