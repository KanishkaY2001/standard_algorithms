import { Fragment } from 'react';
import Header from './Page/Head';
import './Algorithms.css';

const Algorithms = () => {

  const socials = {
    linkedin: "https://www.linkedin.com/in/kanishka-yamani-a36799204/",
    github: "https://github.com/orangeNspice16"
  }

  return (
    <Fragment>
      <Header socials={socials}/>
    </Fragment>
  );
};

export default Algorithms;