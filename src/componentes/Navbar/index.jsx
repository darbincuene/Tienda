import darbin from "../../assets/camisa.png";
import hola from "../../assets/wasap.png";
import bu from"../../assets/instagram.png";
import pu from "../../assets/facebook.png"
import '../Navbar/style.css'

function Navbar() {
   
  return (
    <>
    <div className="bg-slate-900 h-32  w-full  flex justify-between" >
    <img className="w-28 ml-10 h-24 m-4"
        src={darbin} />
    <article className="text-8xl font-mono co ">Shirt Store</article>
   
    <div className="flex min-w-min m-4  ">
    <img className="w-20 h-20 ml-14  "
            src={hola}
            />
            <img className="w-20 h-20 ml-8"
            src={bu} />
            <img className="w-20 h-20 ml-8 "
            src={pu} />
    </div>
</div>





</>
    )
}

export default Navbar