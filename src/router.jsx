import {createBrowserRouter} from 'react-router-dom'
import Home from './components/Home/Home'


const router = createBrowserRouter([
    {
        path: '/',
        element: <Home />
    },
    
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);