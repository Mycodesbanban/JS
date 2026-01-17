import { useQuery } from "../../hooks/useQuery"
import { useFeactDocuments } from "../../hooks/useFeatchDocuments"
import styes from "./Search.module.css"
import React from 'react'
import PostDetail from "../../components/PostDetail"
import { Link } from "react-router-dom"
const Search = () => {
    const query = useQuery()
    const search = query.get("q")

    const {documents:posts} = useFeactDocuments("posts", search)
  return (
    
    <div className={styes.search_container}>
        <h2>
            Search
        </h2>
        <div>
            {posts && posts.length=== 0 && (
                <>

                <p>Nao foram encontrados posts apartir de sua busca </p>
                <p>seje o primeiro a postar com essa tag clique aqui <Link to="/posts/create" className="btn btn-dark">Clique aqui para criar um post</Link></p>
                </>
            )}
            {posts && posts.map((post) => 
                <PostDetail key={post.id} post={post}/>
            )}
        </div>

    </div>
  )
}

export default Search