import { Outlet, Link, useNavigate } from "react-router-dom"

export default function AdminProfile() {
    let navigate = useNavigate()
    return (
        <>
            <h2>Admin Profile</h2>
            {/* Admin Profile component with list of other component links */}
            <ul>
                <li>
                    <Link to="dashboard">Admin Dashboard</Link>
                </li>
            </ul>
            {/* Button for going back comopnent */}
            <button onClick={() => navigate("../")}>Home</button>
            <hr />
            {/* outlet used for nested routing */}
            <Outlet />
        </>
    )
}