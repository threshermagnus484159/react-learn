import { createBrowserRouter } from 'react-router-dom'
import Layout from '@/pages/layout';
import Login from '@/pages/login';
import AuthRouter from '@/components/AuthRouter';

import { lazy, Suspense } from 'react';

const Home = lazy(() => import('@/pages/home'))
const Article = lazy(() => import('@/pages/article'))
const Publish = lazy(() => import('@/pages/publish'))


const router = createBrowserRouter([
  {
    path: "/",
    element:  <AuthRouter> <Layout/> </AuthRouter>,
    children: [
      {
        index: true,
        element: <Suspense fallback = {'加载中'}><Home /></Suspense>
      },
      {
        path: "article",
        element: <Suspense fallback = {'加载中'}><Article /></Suspense>
        
      },
      {
        path: "publish",
        element: <Suspense fallback = {'加载中'}><Publish /></Suspense>
      }
    ]
  },
  {
    path: "/login",
    element:  <Login />
  }
])
export default router