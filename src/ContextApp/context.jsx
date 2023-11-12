import{createContext,useState} from 'react';
import { useNavigate } from 'react-router-dom';
import {baseUrl} from '../baseUrl'


export const AppContext = createContext();

export default function AppContextProvider({children}){
    const[loading,setLoading]=useState(false);
     const[page,setPage]=useState(1);
     const[posts,setPosts]=useState([]);
     const[totalPages,setTotalPages]=useState(null);

     const navigate = useNavigate();


    //Data Filling

    const fetchBlogPosts = async (page=1, tag=null, category) => {
        setLoading(true);
         let url = `${baseUrl}?page=${page}`;
         if(tag) {
            url += `&tag=${tag}`;
         }
         if(category) {
            url += `&category=${category}`;
         }
        try{
           const result = await fetch (url);
           const data = await result.json();
           if(!data.posts || data.posts.length === 0) 
           throw new Error("Something went wrong")
           setPage(data.page);
           setPosts(data.posts);
           setTotalPages(data.totalPages)
        }
        catch(error){
          setPage(1);
           setPosts([]);
           setTotalPages(null)
        }
        setLoading(false);
    }

    function handlePageChange(page){
        navigate( {search: `?page=${page}`});
        setPage(page);
    }

    const value={
        loading,
        setLoading,
        page,
        setPage,
       posts,
       setPosts,
       totalPages,
       setTotalPages,
       fetchBlogPosts,
       handlePageChange
    };

    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>
}