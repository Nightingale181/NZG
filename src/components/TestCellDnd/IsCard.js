import CompanyCard from "../CompanyCard";
import {Square} from "./Square";
export const IsCard = ({ G,item,isCard,key }) => isCard ? null : <CompanyCard G={G} item={item} key={key}/>
