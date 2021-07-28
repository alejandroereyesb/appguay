import React from 'react';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import './Footer.css';

  
function Footer() {
    const [value, setValue] = React.useState('recents');
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (
      <BottomNavigation value={value} onChange={handleChange} className="Footer">
        <BottomNavigationAction label="Recientes" value="recents" icon={<RestoreIcon />} />
        <BottomNavigationAction label="Favoritos" value="favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Cercanos" value="nearby" icon={<LocationOnIcon />} />
        <BottomNavigationAction label="Fichero" value="folder" icon={<FolderIcon />} />
      </BottomNavigation>
    );
}

export default Footer
