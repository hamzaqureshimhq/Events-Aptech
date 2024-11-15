// import { useState } from "react";

// function Stateb(){
//     function main(){
//      return{
//         width:'45%',height:'65vh', border:'solid 3px black', overflow:"hidden", borderRadius:'20px'
//      }
//      }
//      function mainb(){
//         return{
//         height:'10vh', width:'100%', backgroundColor:'white'
//         }
//     }
//     const [like, setlike] = useState (0);
//     function likeadd(){
//         return setlike(like+1);
//     }
//     const likea = like == 1 ? "bi bi-hand-thumbs-up text-success" : "bi bi-hand-thumbs-up";
//     const [dislike, setdislike] = useState (0);
//     function removelike(){
//         return setdislike(dislike+1);
//     }
//     const dislikea = dislike == 1 ? "bi bi-hand-thumbs-down text-danger" : "bi bi-hand-thumbs-down";
//     const [heart, setheart] = useState (0);
//     function addheart(){
//         return setheart(heart+1);
//     }
//     const hearta = heart == 1 ? "bi bi-heart text-danger" : "bi bi-heart";
//     // const [save, setsave] = useState ("Like: "+ like +"\n" + "DisLike: "+ dislike + "\n"+ "Heart: "+ heart);
    
//     function savea(){
//         alert("Like: "+ like +"\n" + "DisLike: "+ dislike + "\n"+ "Heart: "+ heart);
//     }
//     const [savelikea, savelikeb] =useState (0);
//     const [savedislikea, savedislikeb] =useState (0);
//     const [savehearta, saveheartb] =useState(0);
//     function savedata(){
//         return savelikeb(savelikea+like),
//         savedislikeb(savedislikea+dislike),
//         saveheartb(savehearta+heart);
//     }
//     return(
//         <>
//         <center>
        
//             <br /><br /><br /><br />
//             <div style={main()}>
//                 <img style={{height:'56vh', width:'100%'}} src="https://media.newyorker.com/photos/63daa8ae7308263e9d096cc5/master/w_2560%2Cc_limit/Chotiner%2520-%2520Imran%2520Khan%2520-%2520Redux_15731262.jpg" alt="" />
//                 <div style={mainb()}>
//                     <ul style={{listStyleType: 'none', display:'flex', padding:'0px', marginTop:'4px'}}>
//                         <li ><button onClick={likeadd} disabled={like == 1} className="btn btn-light border-0"><i className={likea}></i> {like} Like</button></li>
//                         <li ><button style={{backgroundColor: dislikea}} onClick={removelike} disabled={dislike == 1} className="btn btn-light border-0"><i className={dislikea}></i> {dislike} Dislike</button></li>
//                         <li ><button style={{backgroundColor: hearta}} onClick={addheart} disabled={heart == 1} className="btn btn-light border-0"><i className={hearta}></i> {heart} Like</button></li>
//                         <li ><button onClick={savedata} className="btn btn-light border-0"><i className=""></i>save</button></li>
//                         {/* <li ><button onClick={savea} className="btn btn-light border-0"><i className=""></i>save</button></li> */}

//                     </ul>
//                 </div>
//             </div>
//             <br />
//             <div style={{border:'solid 3px black', width:'15%'}}>
//                 <br />
//                 {/* <h1>Save Data</h1> */}
//                 <p>Save Data</p>
                
//             <ul style={{listStyleType:'none', textAlign:'left'}}>
//                 <li>like: {savelikea}</li>
//                 <li>like: {savedislikea}</li>
//                 <li>like: {savehearta}</li>
//             </ul>
//             </div>
//             <br /><br />
//         </center>
             
//         </>
//     )
// }
// export default Stateb;