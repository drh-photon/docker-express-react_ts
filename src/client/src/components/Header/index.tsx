import React from 'react';
import './header.css';

const Header = ({ title }: { title: string }) => {
  return <div className="heading">{ title }</div>;
}

export default Header;

