import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/pages/layout';
import Login from '@/pages/login';
import AuthRouter from '@/components/AuthRouter';


const router = createBrowserRouter([
  {
    path: "/",
    element:  <AuthRouter> <Layout/> </AuthRouter>
  },
  {
    path: "/login",
    element:  <Login />
  }
])
export default router