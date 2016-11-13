import React from 'react';
import {render} from 'react-dom';

import styles from './styles.css';

const Works = (props) => <div className={`${styles.project}`}>
  <div className={`${styles.image} ${props.style}`} />
  <div className={styles.desc}>{props.desc}</div>
  <div className={styles.year}>{props.year}</div>
</div>

const SocMed = (props) => < div className={`${styles.socmed}`}>
  <div className={styles.socImage} style={props.socImage ? {
    backgroundImage: `url(${props.socImage})`,
      backgroundSize: 'cover',
  } : {}} />
</div>

class Projects extends React.Component {
  render() {
    return(
        <section className={styles.section}>
          <a name="projects" />
          <div className={styles.header}>
            <h1>Projects</h1>
            <p>To design and create websites and apps with a thoughtful approach.</p>
            <p>My projects below were designed with a combination of programming languages,
            databases and frameworks as mentioned in my timeline.</p>
          </div>
          <div className={styles.container}>
            <div className={styles.row}>
              <Works desc="Grading Scale Conversion" year="2016" style={styles.project_01} />
            </div>
            <div className={styles.contact}>
             <SocMed socImage="" />
            </div>
          </div>
        </section>
    )
  }
};

export default Projects;
