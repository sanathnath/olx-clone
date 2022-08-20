import { createContext, useState } from "react";

export const PostContext = createContext()

function Post({children}){
    const [PostDetails, setPostDetails] = useState()
    const [isLoading, setIsLoading] = useState(true)

    return(
        <PostContext.Provider value={{PostDetails,
        setPostDetails, 
        isLoading, 
        setIsLoading}} >
            {children}
        </PostContext.Provider>
    )
}

export default Post