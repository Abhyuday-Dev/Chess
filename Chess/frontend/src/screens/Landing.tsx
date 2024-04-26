import { useNavigate } from "react-router-dom";

const Landing = () => {
    const navigate=useNavigate();
  return (
    <div className="flex justify-center">
      <div className="pt-2 max-w-screen-lg">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex justify-center">
            <img src={"/chess.jpg"} className="max-w-xs"/>
          </div>
          <div>
            <h1 className="text-4xl font-bold text-white">Welcome to Chess</h1>
            <div className="mt-8 flex justify-center">
              <button  onClick={()=>{
                navigate("/game")
              }} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Play Online
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
