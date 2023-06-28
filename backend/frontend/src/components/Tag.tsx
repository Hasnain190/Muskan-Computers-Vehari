import { useDispatch } from "react-redux";
import { useAppDispatch } from "../app/hooks";
import { getProductsByCategory } from "../features/category/actions";

interface TagProps {

    category: string;
    id:string| number
}

export default function Tag({ category,id }: TagProps) {



    const dispatch = useAppDispatch()


    return (
        <div onClick={()=>dispatch(getProductsByCategory(String(id)))} className="tag px-3 bg-lightBlue rounded-xl w-fit hover:bg-primary cursor-pointer text-black hover:text-white transition mx-4">
            {category}
        </div>
    );
}

