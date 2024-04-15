import React from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link as MuiLink } from '@mui/material';
import { useNavigate, useLocation } from 'react-router-dom';

interface CustomLinkProps {
  id: string;
  children: React.ReactNode;
  onClick?: () => void;
}

const CustomLink: React.FC<CustomLinkProps> = ({ id, children, onClick }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const homepagePath = '/home'; // Define your homepage path accordingly

  const handleScrollLinkClick = () => {
    if (location.pathname !== homepagePath) {
      // Navigate to the homepage then potentially trigger scroll to id
      navigate(homepagePath);
      setTimeout(() => {
        onClick?.();
      }, 0); // Set a delay to allow for the navigation to complete
    } else {
      onClick?.();
    }
  };

  if (id.includes('/')) {
    return (
      <MuiLink href={id} onClick={onClick}>
        {children}
      </MuiLink>
    );
  } else {
    return (
      <ScrollLink
        activeClass="active"
        to={id}
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
        onClick={handleScrollLinkClick}
      >
        {children}
      </ScrollLink>
    );
  }
};

export { CustomLink };