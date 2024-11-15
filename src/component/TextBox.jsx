import { useState } from "react";
import  Table from './ShowMarks';

function TextBox(){
    var[name,setname] = useState("");
    var[eng,setEng] = useState(0);
    var[math,setMath] = useState(0);
    var[urdu,setUrdu] = useState(0);
    var[total,setTotal] = useState(0);
    var[perc,setPerc] = useState(0);

    function Calculator(jama){
        jama.preventDefault();
        total = parseFloat(eng) + parseFloat(urdu) + parseFloat(math);
        setTotal(total);

        perc = total/3
        setPerc(perc);

        console.log(total + " " + perc);
    }

    function boxColor(subject){
        return (subject > 100 || subject < 0) ? {borderColor:"red"} :{} && (subject < 100 || subject > 0) ? {borderColor:"green"} :{}
    }

    return( 
    
         <div className="container">
            <form action="" method="post" onSubmit={Calculator} >

            <p style={{color:"blue"}} > Namae</p>
            <input type="text" className="form-control" value={name} onChange={(a)=> {setname(a.target.value)}} style={boxColor(name)} />

              <p style={{color:"blue"}} > Enter English Marks</p>
               <input type="number" className="form-control" value={eng} onChange={(a)=> {setEng(a.target.value)}} style={boxColor(eng)} />

               <p  style={{color:"blue"}} >Enter Urdu Marks</p>
               <input type="number" className="form-control" value={urdu} onChange={(a)=> {setUrdu(a.target.value)}} style={boxColor(urdu)} />

               <p   style={{color:"blue"}}>Enter Math Marks</p>
               <input type="number" className="form-control" value={math} onChange={(a)=> {setMath(a.target.value)}} style={boxColor(math)} />
               <br />
               <center>
               <button type="submit" className="btn btn-primary" 
               disabled={ math > 100 || urdu > 100 || eng > 100 || math < 0 || eng < 0 || urdu < 0} >Submit Marks</button> </center>
            </form>
            <br />
            {/* Pass states to property */}

            {( math > 100 || urdu > 100 || eng > 100 || math < 0 || eng < 0 || urdu < 0) && 
            <div class="alert alert-danger" role="alert" >
                Invalid Marks
            </div> }

            {!( math > 100 || urdu > 100 || eng > 100 || math < 0 || eng < 0 || urdu < 0) &&  

            <Table   a={name}  b={eng} c={urdu} d={math} e={total} f={perc} /> }

        </div>
    )
   }

export default TextBox;