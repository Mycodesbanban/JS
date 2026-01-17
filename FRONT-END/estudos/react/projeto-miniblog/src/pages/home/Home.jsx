import React from 'react'
import styles from "./Home.module.css"
import { useNavigate, Link } from 'react-router-dom'
import {useState} from "react"
import { useFeactDocuments } from '../../hooks/useFeatchDocuments'
import PostDetail from '../../components/PostDetail'

const Home = () => {

  const [query , setQuery] = useState("")
  const {documents:posts,loading } = useFeactDocuments("posts")
  const navigate = useNavigate()


 


  const handleSumbit = (e) => {
    e.preventDefault()
    if(query){
      return navigate(`/search?q=${query}`)
    }

  } 


  return (
    <div className={styles.home}>
    <h1>Veja nossos posts mais recentes</h1>
    <form onSubmit={handleSumbit} className={styles.search_form}>
    <input type="text" placeholder='Ou busque por tags...' onChange={(e) => setQuery(e.target.value)}/>
    <button className='btn btn-dark'>Pesquisar</button>

    </form>
    <div>
      <h1>Posts de alguns usuarios</h1>
      {loading && <p>Carregando...</p>}
      {posts && posts.map((post)=>(

        <PostDetail post={post} key={post.id}/>
      )
      )}
    {posts && posts.length === 0&& (
     <div className={styles.nopost}><p>Nenhum post foi encontrado</p>

      
<Link to="/posts/create" className='btn'>Crie um post</Link>
      
      </div>
    )}
    </div>
    </div>
  )
}

export default Home