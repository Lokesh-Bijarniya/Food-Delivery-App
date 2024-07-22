import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import SearchIcon from "@mui/icons-material/Search";
import {useNavigate} from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-300 h-12 flex items-center">
      <div className="mx-24 flex justify-between w-full">
        <div>
          <FacebookOutlinedIcon className="ml-4" />
          <TwitterIcon className="ml-8" />
          <InstagramIcon className="ml-8" />
        </div>
        <div className="bg-white rounded-lg p-1">
          <SearchIcon/>
          <input
            type="text"
            placeholder="Search"
            className="outline-none rounded-lg px-2 placeholder:text-lg "
          />
        </div>
        <div className="flex justify-center items-center ">
              <button className="bg-green-300 rounded-lg px-4 py-1 text-lg" onClick={()=>
                navigate('/login')
              }>Login</button> 
          </div>
      </div>
    </div>
  );
}
