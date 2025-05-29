
function AddToCard() {
  return (
    <div className="flex justify-between items-center absolute bottom-22 left-11 bg-amber-700 px-4 py-1 rounded-3xl w-32 mx-auto text-white transition duration-75">
        <button className="flex justify-center items-center border-1 border-white hover:bg-white hover:text-amber-800 active:scale-95 rounded-full w-4 h-4 pb-1 cursor-pointer transition duration-75">-</button>
        <p>1</p>
        <button className="flex justify-center items-center border-1 border-white hover:bg-white hover:text-amber-800 active:scale-95 rounded-full w-4 h-4 pb-1 cursor-pointer transition duration-75">+</button>
    </div>
  )
}

export default AddToCard