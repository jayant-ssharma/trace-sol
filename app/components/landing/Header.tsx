import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div
      className="flex justify-between py-5 px-3 lg:px-7" >
      <div
      className="flex gap-2">
        <h3
          className="text-white lg:text-xl">
          Built on Solana
        </h3>
        
          <img 
          className='h-6 lg:h-8 w-fit'
          src="/solana.png" alt="Solana Logo" />
        

      </div>
      <div
       className="flex gap-2">
       <h3
       className="text-white lg:text-xl">
        Open Source
       </h3>
        <a href="https://github.com/jayant-ssharma">
          <FaGithub className="text-2xl lg:text-3xl text-white" />
        </a>
      </div>


    </div>
  )
}

export default Header