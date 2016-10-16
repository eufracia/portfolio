import React from 'react';
import {render} from 'react-dom';

const Proj= (props) => {
  return <div>
          <div style={style.box}>
            <div style={style.projTitle}>
              <h3>{props.projTitle}</h3>
            </div>
            <div style={style.projPeriod}>
              <h3>{props.projPeriod}</h3>
            </div>
          </div>
          <div style={style.box}>
            <div style={style.projDesc}>
              <p>{props.projDesc}</p>
            </div>
          </div>
          <div style={style.box}>
            <div style={style.projDuties}>
              <p>{props.projDuties}</p>
            </div>
          </div>
  </div>
}

class Projects extends React.Component {
  render() {
    return(
        <section>
          <h1>Projects Achievement</h1>
            <div>
              <Proj
                projTitle="Capstone Project"
                projPeriod="January - April 2016"
                projDesc={`Capstone Project is a required project for the last semester students in Digital Media Information and Technology
                  which last 4 months long, divided in 3 groups with different projects for each. I and my team, AppBright Solution,
                  was assigned to work in a Grading Scale Conversion Application for the NAIT Registrar Office.
                  We were using Microsoft Visual Studio Software, ASP.NET Entity Framework MVC 5, C# for creating the application.
                  Also, we combined them with HTML, CSS and Bootstrap for the front end. For the design and documentation,
                  we used Agile methodology, Microsoft Visio, as well as Microsoft Word. For the deployment, we use
                  Microsoft server that is hosted only internally in campus. As the result of our work, we achieved A+ as our final mark. `} />
            </div>
        </section>
    )
  }
};

let style= {
  box: {
    display: 'flex',
    flexDirection: 'row nowrap',
    justifyContent: 'space-around',
    alignContent: 'space-around',
    alignItems: 'center',
  },
  projTitle: {
    flex: 1,
    width: 50,
    height: 30,
  },
  projPeriod: {
    flex: 1,
    width: 40,
    height: 40,
  },
  projDesc: {
    flex: 1,
    width: 40,
    height: 40,
    marginTop: 20,
  },
};
export default Projects;
