import { footers1, footers2, footers3 } from "../../constants/footer/footerConstant";

/**
 * View/Page Login
 *
 * @author Kathleen Vierstraete
 */
const Footer = () => {

return (

  <footer className="bg-neutral-200 text-center text-neutral-600 lg:text-left mt-5">
    <div className="mx-6 py-10 text-center md:text-left ">      
      <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4"> 
        <div className=""> 
          <h6 className="mb-4 flex justify-center font-semibold md:justify-start">
            A propos      
          </h6>          
            {footers1.map((footer1) => (              
              <p key={footer1.id} className="mb-4">
                <a href={footer1.url} className="text-neutral-600 ">  
                  {footer1.name}
                </a>    
              </p>     
            ))}         
        </div>
              
        <div className="">
          <h6 className="mb-4 flex justify-center font-semibold md:justify-start">
            Aide, SAV & Services       
          </h6>            
            {footers2.map((footer2) => (    
              <p key={footer2.id} className="mb-4">
                <a href={footer2.url} className="text-neutral-600">
                    {footer2.name}
                </a>
              </p> 
            ))}      
        </div>          
                     
        <div className="">          
          <h6 className="mb-4 flex justify-center font-semibold md:justify-start">
            Suivez nous      
          </h6>          
            {footers3.map((footer3) => (
              <p key={footer3.id} className="mb-4">  
                <a href={footer3.url} className="text-neutral-600">
                  {footer3.name}
                </a>          
              </p> 
            ))}      
        </div>
                    
        <div className="">
          <h6 className="mb-4 flex justify-center font-semibold md:justify-start">
            Newsletter      
          </h6>             
            <div>
              <input type="text" id="small-input" className=" mb-4 block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500" placeholder="Saisissez votre email"/>                        
            </div>       
            <div>
              <button type="button" className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium  leading-normal text-white">
                Subscribe    
              </button>       
            </div>        
            
          </div>
        </div>
      </div>         
                        
      <div className="bg-neutral-300 p-6 text-center">    
        <span>© 2023 Copyright : </span>    
            <a className="font-semibold text-neutral-600" href="#">
              Pixel Perfect  
            </a>  
      </div>        
  </footer>
  )
}

export default Footer;
