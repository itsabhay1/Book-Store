import React from 'react'
import { useAuth } from '../context/AuthProvider'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function Logout() {
    const [_, setAuthUser] = useAuth()
    const navigate = useNavigate()

    const handleLogout = () => {
        try {
            setAuthUser(undefined)
            localStorage.removeItem("Users")
            toast.success("Logged out successfully")
            navigate("/")
        } catch (error) {
            toast.error("Error: " + error.message)
        }
    }

    return (
        <div>
            <button
                className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer'
                onClick={handleLogout}
            >
                Logout
            </button>
        </div>
    )
}

export default Logout
