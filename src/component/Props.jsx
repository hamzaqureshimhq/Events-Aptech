function Props(props) {
    return (
        <div>
            <center>
                <table border={1}>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                    </tr>
                    <tr>
                        <td>{props.id}</td>
                        <td>{props.Name}</td>

                    </tr>

                </table>
            </center>
        </div>
    )
}


export default Props;