import { Navigate, Outlet } from 'react-router-dom';
const ProtectedRouter = ({Login}) => {
return (
    Login ? <Outlet/>: <Navigate to='/login'/> 
  )
}
export default ProtectedRouter;