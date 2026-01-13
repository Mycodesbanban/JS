import React from 'react'
import styles from "./About.module.css"
import { Link } from 'react-router'
const About = () => {
  return (
    <div className={styles.About}>
      <h2>Sobre o mini <span>Blog</span></h2>
      <p>esse projeto consiste em um blog feito com React front-end e Firebase no back-end  </p>
      <Link to="/posts/create" className='btn'>Criar Post</Link>
    </div>
  )
}

export default About