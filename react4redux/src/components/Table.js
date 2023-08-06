import axios from "axios"
import { useState, useEffect } from "react"

export default function Table() {
    const [data, setData] = useState([]);
    const [editData, setEditData] = useState({});
    const [isEditing, setIsEditing] = useState(false);

    function getData() {
        axios.get("https://64c763fc0a25021fde926797.mockapi.io/crud")
            .then((res) => {
                // console.log(res.data);
                setData(res.data)
            });

    }
    const handleDelete = (id) => {
        alert("Do you really want to delete this data?")
        axios.delete(`https://64c763fc0a25021fde926797.mockapi.io/crud/${id}`)
            .then(() => {
                getData()
            })
    }

    const handleEdit = (data) => {
        setEditData(data);
        setIsEditing(true);
    };

    const handleCancelEdit = () => {
        setIsEditing(false);
    };

    const handleUpdate = () => {
        axios
            .put(`https://64c763fc0a25021fde926797.mockapi.io/crud/${editData.id}`, editData)
            .then(() => {
                setIsEditing(false);
                getData();
            });
    };


    useEffect(() => {
        getData();
    }, []);

    return (
        <>
            <h2>CRUD Operation</h2>
            <table className="table">
                <thead>
                    <tr>
                        {/* <th scope="col">#</th> */}
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Operation</th>

                    </tr>
                </thead>
                {
                    data.map((eachData) => {
                        return (<>
                            <tbody>
                                <tr scope="row">
                                    {/* <td>{eachData.id}</td> */}
                                    <td>{eachData.name}</td>
                                    <td>{eachData.email}</td>
                                    <td>
                                        <button className="btn btn-success" onClick={() => handleEdit(eachData)}>
                                            Edit
                                        </button>
                                        &nbsp; &nbsp;
                                        <button className="btn btn-danger" onClick={() => handleDelete(eachData.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            </tbody>
                        </>)
                    })
                }
            </table>
            {isEditing && (
                <div>
                    <h3>Edit Data</h3>
                    <table className="table table-secondary">
                        <thead>
                            <tr>
                                {/* <th scope="col">#</th> */}
                                <th scope="col">Name</th>
                                <th scope="col">Email</th>
                                <th scope="col">Operation</th>

                            </tr>
                        </thead>
                        <tbody>
                            <tr scope="row">
                                {/* <td>{eachData.id}</td> */}
                                <td><input
                                    type="text"
                                    value={editData.name}
                                    onChange={(e) => setEditData({ ...editData, name: e.target.value })}
                                /></td>
                                <td><input
                                    type="text"
                                    value={editData.email}
                                    onChange={(e) => setEditData({ ...editData, email: e.target.value })}
                                /></td>
                                <td>
                                    <button className="btn btn-primary px-2 py-1 " onClick={handleUpdate}>Save</button>
                                    &nbsp; &nbsp;
                                    <button className="btn btn-info px-2 py-1 " onClick={handleCancelEdit}>Cancel</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            )}
        </>
    )
}