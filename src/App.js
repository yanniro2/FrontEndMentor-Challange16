import "./index.css"
import logo from "./images/logo.svg"
import illustration from "./images/illustration-dashboard.png"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
function App()
{
  return (
    <div className="App min-h-screen min-w-screen flex items-center justify-center font-Libre">
      <div className="content w-1/2 h-full flex flex-col items-center p-5 gap-5 mt-[4rem] Mobile:w-full Mobile:p-10 transition-all ease-in-out">
        <img src={logo} alt="logo img" />
        <div className="heading flex  flex-col  items-center gap-1">
          <h1 className="text-[2rem] font-ms text-Gray">We are launching <span className="font-lg text-Very-Dark-Blue">soon!</span> </h1>
          <h4 className=" text-Very-Dark-Blue"> Subscribe and get notified</h4>
        </div>


        <div className="box flex items-center justify-center gap-3 w-full mb-[4rem] relative Mobile:flex-col Mobile:mb-[2rem]">
          <input type="email" name="email" placeholder="Your email address" className="peer border-[1px]  border-Pale-Blue p-5 w-[70%] rounded-full pl-8 required invalid:border-Light-Red Mobile:w-full Mobile:p-3 Mobile:pl-5" />
          <div className="hidden  text-Light-Red italic Mobile:peer-invalid:block">Please provide a valid email address</div>

          <button className="rounded-full text-[#fff] bg-Blue p-5 border-[1px]   border-Blue font-lg block w-[30%] drop-shadow-lg hover:tracking-widest transition-all hover:bg-[#fff] hover:text-Blue Mobile:w-full Mobile:p-3">Notify Me</button>
          <div className="hidden absolute left-8 -bottom-8 text-Light-Red italic peer-invalid:block Mobile:peer-invalid:hidden">Please provide a valid email address</div>
        </div>

        <div className="box-2 Mobile:mb-[4rem]">
          <img src={illustration} alt="illustration img" />
        </div>

        <footer>
          <div className="icons flex items-center justify-center gap-5 p-5">
            <FaFacebookF className="text-Blue text-ms cursor-pointer hover:bg-Blue hover:text-[#fff] w-[2rem] h-[2rem] p-2 rounded-full transition-all" />
            <FaTwitter className="text-Blue text-ms cursor-pointer hover:bg-Blue hover:text-[#fff] w-[2rem] h-[2rem] p-2 rounded-full transition-all" />
            <FaInstagram className="text-Blue text-ms cursor-pointer hover:bg-Blue hover:text-[#fff] w-[2rem] h-[2rem] p-2 rounded-full transition-all" />

          </div>
          <p className=" text-Gray"> © Copyright Ping. All rights reserved.</p>
        </footer>
      </div>

    </div>
  );
}

export default App;
