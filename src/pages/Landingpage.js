import header from "../asset/icons/image/header.jpg";
import { useNavigate } from "react-router-dom";
function LandingPage ()  {
const navigate = useNavigate();
const handleToDetail = () =>{
    navigate("/details");
};

    return (
        <div className="text-center">
            <p className="font-mono text-2xl font-bold uppercase">About Me</p>
            <p className="text-md mt-2 font-bold text-black mx-36"> 
            <div className="flex justify-center">
            <img src={header}alt="Avatar" width={600}/>
            </div>
           7 Day to die{"\n"}
            </p>{" "}
            <br />
            <button className="text-xl text-[3f5f5dc] underline"
            onClick={()=> handleToDetail()}>NEXT</button>
        </div>
    );
}
export default LandingPage;