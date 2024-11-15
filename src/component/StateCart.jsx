// import { useState } from "react";

// export default function  StateCart(){

//     const [cart, SetCart] = useState(0);
//     function addCart(){
//         return SetCart(cart+1);
//     }

//     function RemoveCart(){
//         return SetCart(cart-1);
//     }
    
//     return(
    
//         <div className="container">
//             <button className="btn btn-primary" onClick={addCart} > Add to Cart </button>
//             <h1><i class="bi bi-cart"></i><span class="badge text-bg-secondary">{cart}</span></h1>
//             <button className="btn btn-danger" onClick={RemoveCart} disabled={cart <=0}> Remove from Cart </button>
//             </div>
            
    
//         );
// } 