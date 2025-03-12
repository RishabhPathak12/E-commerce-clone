import { TiThSmallOutline } from "react-icons/ti";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { TbSoup } from "react-icons/tb";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { MdFoodBank } from "react-icons/md";
export const categories=[
    {
        id:1,
        name:"All",
        icon:<TiThSmallOutline className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id:2,
        name:"breakfast",
        icon:<MdOutlineFreeBreakfast className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id:3,
        name:"soups",
        icon:<TbSoup className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id:4,
        name:"pasta",
        icon:<TiThSmallOutline className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id:5,
        name:"main_course",
        icon:<MdFoodBank  className="w-[60px] h-[60px] text-green-600"/>
    },
    {
        id:6,
        name:"pizza",
        icon:<GiFullPizza className="w-[60px] h-[60px] text-green-600" />
    },
    {
        id:7,
        name:"burger",
        icon:<GiHamburger className="w-[60px] h-[60px] text-green-600"/>
    },
]
