import close from '../assets/icon-remove-item.svg'
import { useCartStore, type CartItem } from '../lib/store/store'

function Order(item: CartItem) {
  const {removeItem} = useCartStore();
  return (
    <div className="flex justify-between items-center border-b border-slate-300 pb-3 pt-3">
        <div className="space-y-2">
            <h3 className="font-semibold">{item.title}</h3>
            <span className="text-gray-600">Price: ${item.price}</span>
            <span className="text-gray-600"> Quantity: ({item.quantity})</span>
        </div>
        <img onClick={()=>removeItem(item.id)} src={close} alt="close button" className="h-5 w-5 border p-1 border-amber-600 cursor-pointer hover:border-amber-800 active:scale-95 rounded-full transition duration-75" />
    </div>
  )
}

export default Order