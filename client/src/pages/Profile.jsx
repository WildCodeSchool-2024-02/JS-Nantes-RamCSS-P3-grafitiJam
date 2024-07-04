import './styles/profile.css'

function Profile() {
  return (
    <main>
      <div className='profile-container'>
      <div className='profile-picture-container' >
      <img className='profile-picture' src="http://localhost:3310/assets/images/graff1.jpg" alt="Profile" />
      </div>

      <div className='infos-profile-container'>
      
      <div className='alias-container'>
        <p className='alias-text'>Alias : Zorro</p>
      </div>

<div className='geek-level-container'>
  <p className='geek-level-text'>Geek level</p>
  <div className='level-indicators'>
    <div className='level-indicator' />
    <div className='level-indicator' />
    <div className='level-indicator' />
    <div className='level-indicator' />
  </div>
</div>

</div>

</div>

    </main>
  );
}

export default Profile;
