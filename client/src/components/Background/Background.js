import React, { Component } from 'react';

const Background = props => {
  return (
    <div className="bg">
      <img className="bg-img" src={props.img} alt="" />
      <section className="bg-content valign">
        <div className="bg-content-center">{props.children}</div>
      </section>
    </div>
  );
};

export default Background;
