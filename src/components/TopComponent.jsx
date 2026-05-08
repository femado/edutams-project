import { Link } from "react-router-dom";
import { IoMdLogOut } from "react-icons/io";

const TopComponent = () => {
  return (
    <div>
        <div><span>Having troubles? <Link>Get Help</Link></span> <IoMdLogOut />Logout</div>
    </div>
  )
}

export default TopComponent