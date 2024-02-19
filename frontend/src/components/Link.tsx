import React from 'react';
import { Link } from 'react-scroll';

  const link = (id: string, content: React.ReactNode, onClick?: () => void) => {
    return (
      <Link
        activeClass="active"
        to={id}
        spy={true}
        smooth={true}
        offset={-150}
        duration={500}
        onClick={onClick}
      >
          {content}
      </Link>
    );
  };

    export { link };