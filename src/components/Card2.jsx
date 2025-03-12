import React from "react";
import { ImBin } from "react-icons/im";
import { useDispatch } from "react-redux";
import { DecrementQty, IncrementQty, RemoveItem } from "../Redux/CartSlice";

function Card2({ name, id, image, price, qty }) {
    let dispatch=useDispatch()
    return (
        <div className="w-full h-[120px] p-2 shadow-lg flex justify-between items-center">
            <div className="w-[50%] h-full flex gap-5">
                <div className="w-[50%] h-full overflow-hidden rounded-b-lg">
                    <img src={image} alt={name} className="object-cover w-full h-full" />
                </div>
                <div className="w-[40%] h-full flex flex-col gap-3">
                    <div className="text-lg text-gray-600 font-semibold">{name}</div>
                    <div className="w-[110px] h-[50px] bg-slate-400 flex rounded-lg overflow-hidden shadow-lg font-bold border-2 border-green-400 text-xl">
                        <button className="w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200" onClick={()=>{qty>1?dispatch(DecrementQty({id:id})):1}}>-</button>
                        <span className="w-[40%] h-full bg-slate-200 flex justify-center items-center text-green-400">{qty}</span>
                        <button className="w-[30%] h-full bg-white flex justify-center items-center text-green-400 hover:bg-gray-200" onClick={()=>{dispatch(IncrementQty({id:id}))}}>+</button>
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-start items-end gap-6 pr-7">
                <span className="text-xl text-green-400 font-semibold">₹{price}</span>
                <ImBin className="w-[30px] h-[30px] text-red-500 cursor-pointer" onClick={() => dispatch(RemoveItem(id))} />
                </div>
        </div>
    );
}

export default Card2;
