import React, { memo } from 'react';
import PillNav from './PillNav';
import logo from '../assets/logo.svg';

const Header = memo(() => {
  const navItems = [
    { href: '#home', label: 'Home', ariaLabel: 'Go to Home' },
    { href: '#services', label: 'Services', ariaLabel: 'View Services' },
    { href: '#products', label: 'Products', ariaLabel: 'Browse Products' },
    { href: '#contact', label: 'Contact', ariaLabel: 'Contact Us' }
  ];

  return (
    <PillNav
      logo={logo}
      logoAlt="Shokon Auto Logo"
      items={navItems}
      activeHref={window.location.hash || '#home'}
      baseColor="#fff"
      pillColor="#ff4500"
      hoveredPillTextColor="#fff"
      pillTextColor="#fff"
      ease="power3.easeOut"
      initialLoadAnimation={true}
    />
  );
});

Header.displayName = 'Header';

export default Header;
