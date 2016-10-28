import React, {PropTypes} from 'react'
import MenuButton from 'components/menu-button'
import { logout } from 'utilities/auth'
import { withRouter } from 'react-router'
import styles from './index.css'
import ProfilePic from 'components/profile-pic'

function NavigationBar({menuItems, applicationTitle, router, user}){
  return(
    <header className={styles.navigationBar}>
      <MenuButton menuItems={menuItems}/>
      <p>{applicationTitle}</p>
      <div className={styles.userInfo}>
        <ProfilePic
          firstName={user.firstName}
          lastName={user.lastName}
          profilePic={user.profilePic}
          id={user.id}/>
      <div className={styles.nameAndLogoutContainer}>
        <p className={styles.userFullName}>{`${user.firstName} ${user.lastName}`}</p>
        <a href="#" className={styles.logoutLink} onClick={ e => { e.preventDefault(); handleLogout(router) } }>Logout</a>
      </div>
      </div>
    </header>

  )
}
NavigationBar.propTypes = {
  menuItems:PropTypes.array.isRequired,
  applicationTitle:PropTypes.string.isRequired,
  router:PropTypes.any,
  user:PropTypes.object
}
function handleLogout(router){
  logout()
  router.replace('/login')
}

export default withRouter(NavigationBar)
