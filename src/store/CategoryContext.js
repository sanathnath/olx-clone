import { createContext, useState } from "react";

export const CategoryContext = createContext()

function Category({children}){
    const [Catgry, setCatgry] = useState('')
    return(
        <CategoryContext.Provider value={{Catgry,setCatgry}}>
            {children}
        </CategoryContext.Provider>
    )
}
export default Category;