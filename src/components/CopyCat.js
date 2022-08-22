import React from 'react';
import {styles} from '../styles';
import PropTypes from 'prop-types';
import copycat from '../images/copycat.png';
import quietcat from '../images/quietcat.png';

const images = {
  copycat: copycat,
  quietcat: quietcat
};


export class CopyCat extends React.Component {
  render() {
    const { copying, toggleTape, value, handleChange, name } = this.props;
    
    return (
      <div style={styles.divStyles}>
        <h1 style={{marginBottom: 80}}>Copy Cat {name || "Juan"}</h1>
        <input 
          type="text" 
          value={value} 
          onChange={handleChange} 
        />
        <img 
          alt='cat'
          src={copying ? images.copycat : images.quietcat}
          onClick={toggleTape}
          style={styles.imgStyles}
        />
        <p>{copying && value}</p>
      </div>
    );
  };
}

CopyCat.propTypes = {
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string,
}