import { SignUp } from "@clerk/nextjs";
import styles from '../../../styles/styles.module.scss'
 
export default function Page() {
  return (
  <>
    <div className="grid grid-cols-7 gap-5 place-content-center	">  
      <div className="col-span-4 h-screen">    
        <img
          className={`w-full ${styles.image_fluid}`}
          src="/images/istockphoto-1426988809-1024x1024.jpg"        
          alt="istockphoto-1426988809-1024x1024"
        />
      </div>
      <div className="col-span-3 py-5 justify-self-center flex items-center ">
        <SignUp />
      </div>
    </div>
  </>
);
}