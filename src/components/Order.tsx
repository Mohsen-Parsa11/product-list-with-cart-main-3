import close from '../assets/icon-remove-item.svg'
import type { CartDataType } from '../types/CartDataType'

function Order(cart: CartDataType) {
  return (
    <div className="flex justify-between items-center border-b border-slate-300 pb-3 pt-3">
        <div className="space-y-2">
            <h3 className="font-semibold">{cart.title}</h3>
            <span className="text-amber-700 pr-3">{cart.discount}</span>
            <span className="text-gray-400">@ ${cart.remain}</span>
            <span className="text-gray-600"> ${cart.total}</span>
        </div>
        <img src={close} alt="close button" className="h-5 w-5 border p-1 border-amber-600 cursor-pointer hover:border-amber-800 active:scale-95 rounded-full transition duration-75" />
    </div>
  )
}

export default Order