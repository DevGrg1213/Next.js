import Link from 'next/link'
import React from 'react'
import classes from './Button.module.css'
function Button({children,link}) {
  if(link){
    return (
      <Link className={classes.btn} href={link}>
          {children}
      </Link>
    )
  }
  return (
    <button className={classes.btn} href={link}>
        {children}
    </button>
  )
}

export default Button