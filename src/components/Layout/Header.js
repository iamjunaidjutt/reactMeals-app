import React from 'react'

import HeaderCartButton from './HeaderCartButton'
import meals from '../../assets/meals.jpg'
import styles from './Header.module.css'

const Header = () => {
  return (
    <>
        <header className={styles.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton />
        </header>
        <div className={styles['main-image']}>
            <img src={meals} alt='Image filled with delicious food'/>
        </div>
    </>
  )
}

export default Header