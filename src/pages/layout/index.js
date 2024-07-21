import { Link ,useNavigate} from "react-router-dom"
const Layout = () =>{
    const navigate = useNavigate()
    return (
        <div>
            <h1 onClick={()=>navigate('/login')}>Layout</h1>
            

        </div>
    )
}
export default Layout