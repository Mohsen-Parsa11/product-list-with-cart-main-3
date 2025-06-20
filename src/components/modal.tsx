
import Order from './Order'
import tick from '/icon-order-confirmed.svg'
import { useCartStore, useModalStore, type CartItem } from '../lib/store/store';
import { useEffect, useRef } from 'react';

function ModalConfimrOrder() {
    const { items, totalPrice} = useCartStore();
    const { isOpen, closeModal } = useModalStore();
  const modalRef = useRef<HTMLDivElement | null>(null);


useEffect(() => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' || event.key === 'Enter') {
      event.preventDefault();
      closeModal();
    }
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      closeModal();
    }
  };

  document.addEventListener('keydown', handleKeyDown);
  document.addEventListener('mousedown', handleClickOutside);

  return () => {
    document.removeEventListener('keydown', handleKeyDown);
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [closeModal]);

  if (!isOpen) return null;


  return (
     <div className="h-screen flex justify-center items-center w-full bg-[rgba(000,000,000,0.5)] fixed inset-0 z-50 top-0">
        <div ref={modalRef} className="w-full rounded-md px-6 py-5 bg-white max-w-96">
        <div className="space-y-3">
            <img src={tick} alt="tick" className="size-10" />
            <div className="space-y-1">
            <h2 className="text-3xl font-bold ">Order Confirmed</h2>
            <p className="text-gray-500">We hope you enjoy your food!</p>
            </div>
        </div>
      <div className="bg-amber-50 p-5 my-5 rounded">
          {
          items.map((item: CartItem)=>(
            <Order key={item.id} {...item} />
          ))
        }
        <div className="my-5 flex justify-between">
            <h3>Order Total</h3>
            <h3 className="font-bold text-2xl">${totalPrice()}</h3>
        </div>
      </div>
        <button  onClick={closeModal} className="px-4 py-2 bg-amber-800 rounded-full w-full text-white text-lg hover:opacity-90 active:scale-99 cursor-pointer transition duration-75">Start New Order</button>
    </div>
     </div>
  )
}

export default ModalConfimrOrder