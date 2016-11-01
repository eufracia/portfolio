import React from 'react';
import {render} from 'react-dom';

import styles from './styles.css';

const Proj= (props) => {
  return <div>
          <div className={styles.header}>
             <h3>{props.projTitle}</h3>
             <p>{props.projPeriod}</p>
          </div>
          <div>
            <div className={styles.description}>
              <p>{props.projDesc}</p>
            </div>
          </div>
          <div>
            <div>
              <p className={styles.duties}>{props.projDuties}</p>
            </div>
          </div>
  </div>
}

const Works = (props) => <div className={`${styles.project}`}>
  { props.img && <div className={styles.image}>
    <div className={styles.desc}>{props.desc}</div>
    <div className={styles.year}>{props.year}</div>
  </div> }
</div>

class Projects extends React.Component {
  render() {
    return(
        <section className={styles.container}>
          <h1 className={styles.title}>Projects</h1>
          <div className={styles.projContainer}>
            <div className={styles.work}>
              <Works desc="Capstone Project" year="January-April 2016"/>
              <div className={styles.workProject}>
                <Works desc="Capstone Project" year="January-April 2016"/>
              </div>
            </div>
          </div>
        </section>
    )
  }
};

export default Projects;
