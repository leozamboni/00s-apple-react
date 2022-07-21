import React, { Component } from 'react';
import './../../style.css'

class Navbar extends Component{
  render() {
      return (
        <section>
          <div style={{
            background: 'repeating-linear-gradient(to bottom, var(--light-gray) 0px, var(--light-gray) 2.5px, var(--gray) 2.5px,var(--gray) 5px)',
            height: '50px',
          }} />
          <div style={{
            background: 'linear-gradient(0deg, var(--light-gray), var(--dark-gray))',
            height: '20px',
            border: '0.5px solid black',
            boxShadow: '0px 1px 5px black',
          }}>

          </div>
        </section>
      );
  }
}

export default Navbar