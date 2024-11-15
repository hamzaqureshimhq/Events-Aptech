
export default function ShowMarks(prop){

    return(

        <table className="table table-bordered" >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>English</th>
                    <th>Urdu</th>
                    <th>Math</th>
                    <th>Total</th>
                    <th>Percentage</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{prop.a}</td>
                    <td>{prop.b}</td>
                    <td>{prop.c}</td>
                    <td>{prop.d}</td>
                    <td>{prop.e}</td>
                    <td>{prop.f}</td>

                </tr>
            </tbody>
    
        </table>
    );
}


