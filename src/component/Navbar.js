
import facebook from "../asset/icons/facebook.png";
import github from "../asset/icons/github.png";
import twitter from "../asset/icons/twitter.png";

const Navbar = () =>{
    return(
        <div className="flex justify-between items-center"> 
            <img src={facebook} alt="facebook" width={50}/>
            <ul className="hidden md:flex">
                <li className="px-2">
                    <a href="https://www.facebook.com/?locale=th_TH" target="blank">
                        <img src={facebook} alt="facebook" width={30}/>
                    </a>
                </li>
                <li className="px-2">
                    <a href="https://www.youtube.com" target="blank">
                        <img src={twitter} alt="twitter" width={30} />
                        </a>
                </li>
                <li className="px-2">
                    <a href="https://chat.openai.com" target="blank">
                        <img src={github} alt="github" width={30}/>
                        </a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;