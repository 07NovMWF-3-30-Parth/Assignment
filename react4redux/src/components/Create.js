import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

export default function Create() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const table = useNavigate();

    const header = { "Access-Control-Allow-Origin": "*" };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log({ name, email })
        axios.post("https://64c763fc0a25021fde926797.mockapi.io/crud", {
            name: name,
            email: email,
            header
        })
        setName('')
        setEmail('')
    }
    const showCRUD = () => {
        table("/crud")
    }

    return (
        <>
            <h2>Create the Data from Login Form</h2>
            <form>
                <div className="container">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name :</label>
                        <input type="text" value={name} placeholder="Enter Name" className="form-control" onChange={(e) => setName(e.target.value)} />
                    </div>
                    <div className="my-5">
                        <label htmlFor="email" className="form-label">Email :</label>
                        <input type="email" value={email} placeholder="Enter email" className="form-control" onChange={(e) => setEmail(e.target.value)} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <button className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                    <button className="btn btn-secondary mx-3" onClick={showCRUD}>CRUD Table</button>
                </div>
            </form>
        </>
    )
}