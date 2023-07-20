import { useNavigate } from "react-router-dom"

export default function AdminDashboard() {
    let navigate = useNavigate()
    return (
        <>
            <h3>Admin Dashboard</h3>
            {/* Button for going back component */}
            <button onClick={() => navigate("../")}>User Profile</button>
            <br />
            <button onClick={() => navigate("../../")}>Home</button>
        </>
    )
}