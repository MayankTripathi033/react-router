import React, {lazy, Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
// import Layout from './Layout.jsx'
// import Home from './components/Home/Home.jsx'
// import About from './components/About/About.jsx'
// import Contact from './components/Contact/Contact.jsx'
// import User from './components/User/User.jsx'
// import Github from './components/Github/Github.jsx'
import { getGithubLoader } from './components/Github/Github.jsx'


  const Home = lazy(() => import('./components/Home/Home.jsx'))
  const Layout = lazy(() => import('./Layout.jsx'))
  const About = lazy(() => import('./components/About/About.jsx'))
  const Contact = lazy(() => import('./components/Contact/Contact.jsx'))
  const User = lazy(() => import('./components/User/User.jsx'))
  const Github = lazy(() => import('./components/Github/Github.jsx'))

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout/>,
//     children: [{
//       path: "",
//       element: <Home/>,
//     },
//     {
//       path: "about", 
//       element: <About/>
//     },
//     {
//       path: "contact",
//       element: <Contact />
//     }
//   ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path='' element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="contact" element={<Contact />} />
      <Route path="user/:userid" element={<User />} />
      <Route 
      loader={getGithubLoader}
      path="Github" 
      element={<Github />} 
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <Suspense fallback={<div>Loading...</div>}>
    <RouterProvider router={router}/>
    </Suspense>
  </>
)
