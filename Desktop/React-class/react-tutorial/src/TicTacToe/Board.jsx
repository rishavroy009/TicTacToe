import React, {useState} from "react";
import Square from "./Square";
const Board=()=>{
    const [state, setstate] = useState(Array(9).fill(null));
    const [isXTurn, setisXTurn] = useState(true);
    const checkWinner=()=>{
        const winnerLogic=[
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let logic of winnerLogic){
            const [a,b,c]=logic;
            if(state[a]!=null&&state[a]===state[b]&&state[a]===state[c]){
                return state[a];
            }
        }
        let p=0;
        for(let y=0;y<9;y++){
            if(state[y]===null){
                p=1;
                break;
            }
        }
        if(p===0){
            return "None";
        }
        return false;
    };
const isWinner=checkWinner();
    const handleClick=(index)=>{
if(state[index]!==null){
    return;
}
        const copyState=[...state];
        copyState[index]=isXTurn?'X':'O';
        setisXTurn(!isXTurn);
        setstate(copyState);
    }
    return (
        <>

        {isWinner?(<><h1 className="text-center text-3xl text-orange-200">{isWinner} won the Game...</h1><button className='m-auto mt-8 border-2 border-yellow-600 rounded text-red-400 text-2xl block p-3' onClick={()=>setstate(Array(9).fill(null))}>
                Play Again
            </button>
            </>):(<>
        <h4 className="text-3xl text-red-500 text-center font-light font-mono">Player {isXTurn?"X":"O"} please move</h4>
        
        <div className='border-solid m-auto mt-6 border-2 border-red-400 w-80 h-80 p-2'>
           
           
            
            <div className="board-row h-[33%] flex justify-evenly ">
            <Square onClick={()=>handleClick(0)} value={state[0]}/>
            <Square onClick={()=>handleClick(1)} value={state[1]}/>
            <Square onClick={()=>handleClick(2)} value={state[2]}/>
            </div>
            
            <div className="board-row h-[33%] flex justify-evenly ">
            <Square onClick={()=>handleClick(3)} value={state[3]}/>
            <Square onClick={()=>handleClick(4)} value={state[4]}/>
            <Square onClick={()=>handleClick(5)} value={state[5]}/></div> 
            <div className="board-row h-[33%] flex justify-evenly ">
            <Square onClick={()=>handleClick(6)} value={state[6]}/>
            <Square onClick={()=>handleClick(7)} value={state[7]}/>
            <Square onClick={()=>handleClick(8)} value={state[8]}/>
            </div>
        </div></>)}</>
    );
}
export default Board;