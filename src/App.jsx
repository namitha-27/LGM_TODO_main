import { useState } from "react";
import "./App.css";

// RESPONSIVE TO-DO REACT APP!

function App() {
  const [input, setInput] = useState("");
  const [arr, setArr] = useState([]);

  const handleClick = () => {
    // e.preventDefault()
    // console.log("input",input);
    if (input.length > 0) {
      setArr([...arr, { input }]);
      setInput("");
    } else {
      alert("Empty!!");
    }
  };
  console.log("arr:", arr);

  const removItem = (i) => {
    // console.log(i);
    const copy = arr;
    copy.splice(i, 1);
    console.log(copy);
    setArr([...copy]);
  };

  return (
    <>
      <div className=" w-full bg-slate-50 h-[850px] flex justify-center items-center ">
        <div className=" h-[700px] w-[360px] md:w-[600px] flex justify-center items-center flex-col">
          <div className="flex justify-center ">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              className="border border-black  mt-10 me-1 h-[40px] p-2 w-[200px] md:w-[290px]  rounded-lg"
              type="text"
              placeholder="enter"
            />
            <button
              onClick={handleClick}
              className="border border-black  mt-10 ml-1 h-[40px] w-[90px] md:w-[100px]  rounded-lg"
            >
              {" "}
              add{" "}
            </button>
          </div>

          <hr className="mt-[10px] border border-black w-[300px] md:w-[400px]" />

          <div className="m-3  h-[900px] w-[300px] md:w-[400px] ">
            <div className="  ">
              <div className="flex justify-center items-center ">
                <div className="flex flex-col">
                  {arr.map((ele, i) => {
                    return (
                      <div className="flex">
                        <div className="flex justify-between p-2 w-[300px] md:w-[400px]">
                          <div
                            className="bg-black w-full flex items-center text-white p-1 rounded-bl-lg"
                            key={i}
                          >
                            {ele.input}
                          </div>
                          <button
                            className="bg-black  text-white p-2 rounded-tr-lg  "
                            onClick={() => removItem(i)}
                          >
                            remove
                          </button>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
{
  /* <div className='flex flex-col'>
{
          arr.map((o)=>{
            return(
              <>
              <ul>
                <li>
                {o.input}

                </li>
              </ul>
              </>
            )
          })
        }
        <input onChange={(e)=>setInput(e.target.value)} value={input} className='mt-10 me-1 h-[40px] p-2 w-[250px] ' type='text' placeholder='enter'/>
        <button onClick={handleClick}  className='mt-10 ml-1 h-[40px] w-[100px]  '> add </button>

</div> */
}
