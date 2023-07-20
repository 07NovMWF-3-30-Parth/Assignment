import { Outlet, Link, useNavigate } from "react-router-dom";

export default function UserProfile() {
    let navigate = useNavigate()
    return (
        <>
            <h2>User Profile</h2>
            {/* User Profile component with list of other component links */}
            <ul>
                <li>
                    <Link to="userid">User Page</Link>
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