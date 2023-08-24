import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import Combine from './Combine_profile';
const MainProBtn = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    < >
      <button id="pro"  onClick={showDrawer}>
       <b> Profile</b>
      </button>
     <Drawer title="Profile setting" className="drawer1" placement="right" width={600} onClose={onClose} open={open} >
        <Combine/>
      </Drawer>
    </>
  );
};
export default MainProBtn;