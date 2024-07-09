
import './styles/profile.css';
import { useContext } from 'react';
import { ConnexionContext } from '../Contextes/ConnexionContexte';


function Profile() {
  const { isConnected, alias, graffitiGeekLevel, userId } = useContext(ConnexionContext);


  return (
    <main>
      <div className='profile-container'>
      <div className='profile-picture-container' >
      <img className='profile-picture' src="http://localhost:3310/assets/images/graff1.jpg" alt="Profile" />
      </div>

      <div className='infos-profile-container'>
      
      <div className='alias-container'>
        {isConnected && (
          <p className='alias-text'>Alias : {alias}</p>
        )}

      </div>

<div className='geek-level-container'>
  <p className='geek-level-text'>Geek level</p>
  <div className='level-indicators'>
  {Array.from({ length: graffitiGeekLevel }).map(() => (
  <div key={`level-${userId}`} className='level-indicator' />
))}
  </div>
</div>

</div>

</div>


    </main>
  );
}

export default Profile;
