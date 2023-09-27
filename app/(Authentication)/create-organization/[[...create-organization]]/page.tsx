import { CreateOrganization } from "@clerk/nextjs";
import styles from '../../../styles/styles.module.scss'

export default function CreateOrganizationPage() {
  return (<>
    <div className="grid grid-cols-7 gap-5 place-content-center	">  
      <div className="col-span-4 h-screen">    
        <img
          className={`w-full ${styles.image_fluid}`}
          src="/images/soufiane-boissady-SmYgs9HJZu8-unsplash.jpg"        
          alt="soufiane-boissady-SmYgs9HJZu8-unsplash"
        />
      </div>
      <div className="col-span-3 py-5 justify-self-center flex items-center ">
        <CreateOrganization />
      </div>
    </div>
  </>);
}