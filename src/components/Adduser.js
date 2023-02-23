import { useState } from 'react'
import jsonfile from '../data.json'



function Adduser() {
    const col = jsonfile.user;
    const data = jsonfile.posts;
    const [column, setColumn] = useState([""])

    const [user, newUser] = useState({
        name: "",
        contact: "",
        email: ""
    })

    const onchan = (e) => {
        newUser({ ...user, [e.target.name]: e.target.value })
    }

    const datasubmitted = async (e) => {
        e.preventDefault();
        data.push(user);
        newUser({
            name: "",
            contact: "",
            email: ""
        })
        const last = col[col.length-1];
        data.map(i=>(i[last]=null));
        console.log(data)
    }

    const added = (e) => {
        e.preventDefault();
        col.push(column)
        setColumn([""])
                                    
    }




    return (
        <>
            <div className='container my-3'>
                <form>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                        <input type="text" className="form-control" name='name' value={data.name} onChange={(e) => onchan(e)} id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Contact</label>
                        <input type="text" className="form-control" name='contact' value={data.contact} onChange={(e) => onchan(e)} id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" name='email' value={data.email} onChange={(e) => onchan(e)} id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={(e) => datasubmitted(e)} >Submit</button>
                </form>
            </div>

            <div className='container my-5'>

                <button type="button" className="btn btn-primary my-2 d-flex justify-content-start" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add Column
                </button>

                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5" id="exampleModalLabel">Add Column</h1>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <input type="text" className="form-control" id="exampleInputPassword1" onChange={(e) => setColumn(e.target.value)} />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="button" className="btn btn-primary" onClick={(e) => added(e)}>Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
                <table className="table">
                    <thead>
                        <tr>
                            {col.map(element => <th>{element}</th>)}
                            {/* <th onClick={(e) => added(e)}></th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map(user => <tr>
                            <td>{user.name}</td>
                            <td>{user.contact}</td>
                            <td>{user.email}</td>
                            <td contentEditable="true"></td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default Adduser
