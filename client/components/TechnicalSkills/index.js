import React from 'react';
import {render} from 'react-dom';

import styles from './styles.css';

const Skills = (props) => {
  return <div style={style.skillsContainer}>
    {props.skills.map((skill, i) => {
      return <p key={i}>{skill}</p>
    })}
  </div>
}

class TechnicalSkills extends React.Component {
  render(){
    return(
      <section>
        <h1 className={styles.title}>Technical Skills</h1>
        <div className={styles.items}>
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
            "C# Entity Framework Code First",
            "C# Entity Framework 5",
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
