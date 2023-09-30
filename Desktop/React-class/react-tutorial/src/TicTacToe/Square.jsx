import React from "react";

const Square=(props)=>{
    return(
        <div onClick={props.onClick} className='square flex justify-center items-center h-[100%] w-40 border-2 border-emerald-700'>
            <h5 className='text-orange-400 font-semibold text-2xl'>{props.value}</h5>
        </div>
    );
}
export default Square;