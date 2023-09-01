import React, { useState } from 'react';
import { Select, Space } from 'antd';
// import { SearchBar } from 'rsuite/esm/Picker';
const options = [];
for (let i = 10; i < 36; i++) {
  const value = i.toString(36) + i;
  options.push({
    label: "San Ramon, CA",
    value,
  });
}
function Searchbar  () {
  const [value, setValue] = useState([]);
  const selectProps = {
    mode: 'multiple',
    style: {
      width: '100%',
    },
    value,
    options,
    onChange: (newValue) => {
      setValue(newValue);
    },
    placeholder: 'Select Item...',
    maxTagCount: 'responsive',
  };
  return (
    <Space
      direction="vertical"
      
      className='SearchBarRight'
    >
      <Select {...selectProps} className='Select' />
      
    </Space>
  );
};
export default Searchbar;