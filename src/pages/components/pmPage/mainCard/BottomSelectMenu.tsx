import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import ShareIcon from '@mui/icons-material/Share';
import { cardInfo } from '../../../../interfaces/cardInfoEnum';

const BottomSelectMenu = ({expanded, setExpanded, setContainerName}:{expanded:boolean, setExpanded:any, setContainerName: any}) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const changeInfo = (el: any) =>{
    setContainerName(el.target.outerText);
    !expanded&&setExpanded(true);
    handleClose();
  };
  return (
    <div>
      <Button
        id="fade-button"
        sx={{borderRadius: '50%'}}
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        <ShareIcon />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem defaultValue={cardInfo.REPORTS} onClick={changeInfo}>Reports</MenuItem>
        <MenuItem defaultValue={cardInfo.TASKS} onClick={changeInfo}>Tasks</MenuItem>
        <MenuItem defaultValue={cardInfo.INFO} onClick={changeInfo}>Info</MenuItem>
      </Menu>
    </div>
  );
};

export default BottomSelectMenu;