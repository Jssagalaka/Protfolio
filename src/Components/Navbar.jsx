import {useState} from 'react'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import pic from '../../public/mypic.jfif'
import { Zoom } from 'react-reveal';
import { Link } from 'react-scroll';

function Navbar() {

  const [menu, setmenu] = useState(false)

  const navItems = () =>[
    {
      id : 1,
      text : "Home"
    },
    {
      id : 2,
      text : "About"
    },
    {
      id : 3,
      text : "Protfolio"
    },
    {
      id : 4,
      text : "Skills"
    },
    {
      id : 5,
      text : "Contact"
    },
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-white">
        <div className="flex justify-between items-center h-16">
          <div className=" flex space-x-2">
            <Zoom>

            <img src={pic} className="h-12 w-12 rounded-full" alt="" />
            </Zoom>
            
            <h1 className="font-semibold text-xl cursor-pointer">
              Jayd<span className="text-green-500 text-2xl">eep</span>
              <p className="text-sm">Web Developer</p>
            </h1>
          </div>
          {/* desktop navbar */}
          <div>
            <ul className='hidden md:flex space-x-8'>
          {navItems().map(({id,text}) => (
                  <li key={id} className="hover:scale-105 duration-200 cursor-pointer">
                    <Link to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass='active'
                    >
                    {text}
                    </Link>
                    
                    </li>
          ))}

            </ul>
           <div onClick={() => setmenu(!menu)} className='md:hidden'> {menu ?<IoCloseSharp size={24} />:<AiOutlineMenuUnfold size={24}/>}</div>
          </div>
        </div>
        {/* mobile navbar */}
     {
      menu && (
        <div className='bg-white'>
        <ul className='md:hidden flex flex-col h-screen items-center justify-center space-y-4'>
        {navItems().map(({id,text}) => (
                  <li key={id} className="hover:scale-105 duration-200 font-semibold cursor-pointer">
                     <Link 
                     onClick={() => setmenu(!menu)}
                     to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass='active'
                    >
                    {text}
                    </Link>
                  </li>
          ))}
          
        </ul>
        
      </div>
      
      )
     }
     
      </div>
    </>
  )
}

export default Navbar