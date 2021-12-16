import MainNavigation from './MainNavigation';
import classes from './Layout.module.css';
import { Fragment } from 'react';

const Layout = prop => {
  return(
    <Fragment>
      <MainNavigation />
      <main className={classes.main}>
        {prop.children}
      </main>
    </Fragment> 
  )
}

export default Layout;