import React from 'react';
import {render} from 'react-dom';

import styles from './styles.css';

const Works = (props) => <div className={`${styles.project}`}>
  <div className={styles.image} style={props.image ? {
    backgroundImage: `url(${props.image})`,
    backgroundSize: 'cover',
  } : {}} />
  <div className={styles.desc}>{props.desc}</div>
  <div className={styles.year}>{props.year}</div>
</div>

class Projects extends React.Component {
  render() {
    return(
        <section className={styles.section}>
          <div className={styles.header}>
            <h1>Projects</h1>
            <p>Design and create web and apps with a thoughtful mind.</p>
            <p>My projects below designed  with the combination of programming languages, databases and frameworks that I listed
            on my timeline.</p>
          </div>
          <div className={styles.container}>
            <div className={styles.row}>
              <Works desc="NAIT Grading Scale Conversion" image="http://eufracia.me/images/asp-net-project.png" year="2016" />
              <Works desc="Penny Juice - Website Redesign" image="" year="2016" />
              <Works desc="Money Smart" image="" year="2016" />
            </div>
          </div>
        </section>
    )
  }
};

export default Projects;
