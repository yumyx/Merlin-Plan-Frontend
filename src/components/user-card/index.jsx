import React, { PropTypes } from 'react';
import UserDetails from 'components/user-details'
import ProfilePic from 'components/profile-pic'
import Tag from 'components/tag'
import Break from 'components/break'
import styles from './index.css'

let fallbackUserModal = {
  firstName:'Unnamed',
  lastName:'Unnamed',
  email:'No Email',
  id:'',
  roles:[],
  groups:[]
} 

const UserCard = ({user = fallbackUserModal, clickFunction, selected}) => {
  let selectedStyling = {border: '1px solid rgb(154, 135, 210)'}
  return (
  <div 
    key={user.id} 
    onClick={
      () => { clickFunction(user) }
    } 
    style={selected?selectedStyling:{}}
    className={styles.userCard}>
    <header>
      <ProfilePic
        firstName={user.firstName}
        lastName={user.lastName}
        profilePic={user.profilePic}
        id={user.id}/>
      <UserDetails
        firstName={user.firstName}
        lastName={user.lastName}
        email={user.email}
        id={user.employeeId}/>
    </header>
    <Break width="full" thickness="hair"/>
    <p className={styles.heading}>
      Roles:
      {user.roles.map( role => <span key={role}> {role} </span>)}
    </p>
    <div className={styles.groupContainer}>
    <p className={styles.heading}>Groups:</p>
      {user.groups.map( group => <Tag key={group.id} name={group.name}/>)}
    </div>
  </div>
) };

UserCard.propTypes = {
  user: PropTypes.object,
  clickFunction: PropTypes.func,
  selected: PropTypes.bool
}

export default UserCard;
