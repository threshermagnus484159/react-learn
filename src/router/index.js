import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/pages/layout';
import Login from '@/pages/login';
import AuthRouter from '@/components/AuthRouter';
import Home from '@/pages/home';
import Article from '@/pages/article';
import Publish from '@/pages/publish';


const router = createBrowserRouter([
  {
    path: "/",
    element:  <AuthRouter> <Layout/> </AuthRouter>,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "article",
        element: <Article />
        
      },
      {
        path: "publish",
        element: <Publish />
      }
    ]
  },
  {
    path: "/login",
    element:  <Login />
  }
])
export default router