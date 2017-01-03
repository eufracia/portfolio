import React from 'react';
import {render} from 'react-dom';

import ImageZoom from 'react-medium-image-zoom'

import gradingScaleImage from './images/gradingscale01.png';
import todoImage from './images/todo01.png';

import styles from './styles.css';

const Works = (props) => <div className={`${styles.project}`}>
  <ImageZoom
    image={{
      src: props.image,
      alt: props.desc,
      className: styles.image,
      style: {
        width: '100%',
      }
    }}
    zoomImage={{
      src: props.image,
      alt: props.desc,
    }}
  />
  <div className={styles.desc}>
    { props.link
      ? <a target="__blank" href={props.link}>{props.desc}</a>
      : props.desc
    }
  </div>
  <div className={styles.year}>{props.year}</div>
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
              <Works image={gradingScaleImage} desc="Grading Scale Conversion" year="2016" link="https://www.youtube.com/watch?v=gSlk8bn1p0o" />
            </div>
            <div className={styles.row}>
              <Works image={todoImage} desc="Todo - Ruby on Rails" year="2016" link="https://todo.eufracia.me" />
            </div>
          </div>
        </section>
    )
  }
};

export default Projects;
