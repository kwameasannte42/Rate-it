import React from 'react'
import { TopNav } from './TopNav/TopNav'
import logo from '../assets/logo.png'
import styles from './LandingPage.module.css'
import Searchbar from '../SearchBar/Searchbar'

export function LandingPage(){
  return(
    <div>
      <TopNav />
      <img src={logo} className={styles.logo} alt='logo' />
      <Searchbar />
    </div>
  )
}