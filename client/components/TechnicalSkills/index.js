import React from 'react';
import {render} from 'react-dom';

import styles from './styles.css';

const Skills = (props) => {
  return <div className={styles.skillItems}>
    {props.skills.map((skill, i) => {
      return <p className={styles.skillItem} key={i}>{skill}</p>
    })}
  </div>
}

class TechnicalSkills extends React.Component {
  render(){
    return(
      <section className={styles.container}>
        <h1 className={styles.title}>Technical Skills</h1>
        <div className={styles.skillsContainer}>
          <Skills skills={[
             "Microsoft Visual Studio 2013",
             "Android Development",
             "iOS Development",
             "VIM",
             "Microsoft SQL"]} />
          <Skills skills={[
            "ASP.NET MVC 3.5",
            "C#",
            "HTML 5 and CSS 3",
            "Java",
            "Objective C and Swift",
            "Javascript ES6",
            "MS SQL 2012",
            "JSON",
            "Bootstrap",
            "LINQ"]} />
          <Skills skills={[
            ".NET Framework",
            "jQuery",
            "React",
            "Apache Tomcat"]} />
        </div>
      </section>
    )
  }
};

let style ={
  box: {
    display: 'flex',
    flexDirection: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    alignContent: 'flex-start',
  },
  section: {
    display: 'flex',
    flexDirection: 'row',
  },
  skillsContainer: {
    flex: 1,
  },
};

export default TechnicalSkills;
