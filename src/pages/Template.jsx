import {Outlet} from 'react-router-dom'
import { Toaster } from "react-hot-toast"

const Template = () => {
  return (
    <div>
    <Toaster />
    <Outlet/>
    </div>
  )
}

export default Template