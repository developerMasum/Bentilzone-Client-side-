import { useNavigate, useSearchParams } from "react-router-dom";
import Menu from "../Menu/Menu";
import qs from 'query-string'


const DishesBox = ({ name, icon:Icon }) => {
  const [params, setParams] = useSearchParams()

  const navigate = useNavigate()
  const handleClick = () => {
    let currentQuery = {}
    if (params) {
      currentQuery = qs.parse(params.toString())
    }
    const updatedQuery = {
      ...currentQuery,
      category: name,
    }

    const url = qs.stringifyUrl(
      {
        url: '/',
        query: updatedQuery,
      },
      { skipNull: true }
    )

    navigate(url)
  }
  return (
    <button onClick={handleClick} className="flex flex-col items-center justify-center gap-2 px-6 py-5 rounded-md bg-slate-100 shadow-2xl mb-16 hover:bg-red-600 hover:text-slate-100 ">
     <div className="px-5 py-5 rounded-full bg-red-600 hover:bg-slate-400 text-slate-100"> <Icon size={15} /></div>
      <p className="text-center">{name}</p>
     
      
    </button>
  );
};

export default DishesBox;
