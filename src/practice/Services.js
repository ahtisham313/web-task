import { useState } from "react";
import Checkout from "../checkout";
function Services(){

   const [Membership, setMembership] = useState("free Membership");
   const [price, setPrice] = useState(0);

   function handleMembershipPlan(){
    setMembership("plantinum Membership");
    setPrice(1500);
   }
        return(
            <div>
                <h1>Services: {Membership}</h1>
  <h2>price: {price}</h2>
  <button onClick={handleMembershipPlan}>change membership plan</button>
            

           < Checkout serviceName={Membership} servicePrice= {price}/>
            
            </div>
        );
    }
export default Services;