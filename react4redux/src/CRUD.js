import { Link } from "react-router-dom";

export default function CRUD() {
    return (
        <div className="crud">
            <h4>Welcome to CRUD Operation</h4>
            <button><Link to='create'>Create</Link ></button>
            <button><Link to='crud'>Show CRUD</Link ></button>
        </div>
    )
}