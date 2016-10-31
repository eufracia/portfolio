import React from 'react';
import {render} from 'react-dom';

import styles from './styles.css';

const Event = (props) => <div className={`${styles.dot} ${styles[`dot${props.num}`]}`}>
  { props.desc && <div className={styles.line}>
    <div className={styles.desc}>{props.desc}</div>
  </div> }
  { props.year && <div className={styles.year}>{props.year}</div> }
</div>

class Timeline extends React.Component {
  render() {
    return(
      <section>
        <div className={styles.container}>
          <div className={styles.header}>
           <h1>Timeline</h1>
           <p>Different journeys in my life constantly developed and growth. </p>
          </div>
        </div>
        <div className={styles.container}>
          <div className={styles.timeline}>
           <Event num={1} desc="High School" year="2009-2012" />
           <Event num={2} desc="NAIT" year="2014-2016" />
           <Event num={3} desc="C#" />
           <Event num={4} desc="ASP.NET" />
           <Event num={5} desc="Javascript" />
           <Event num={6} desc="HTML5 & CSS3" />
           <Event num={7} desc="iOS" />
           <Event num={8} desc="React" year="2016" />
           <Event num={9} desc="Go" />
         </div>
        </div>
      </section>
    )
  }
};

export default Timeline;
