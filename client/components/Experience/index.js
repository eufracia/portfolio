import React from 'react';
import {render} from 'react-dom';

import styles from './styles.css';

const Exp = (props) => {
  let duties = Array.isArray(props.jobDuties) && props.jobDuties.map((duty, i) => {
     return <p key={i} className={styles.dutyItem}>• {duty}</p>
  });
  return <div>
    <div className={styles.header}>
      <h3>{props.jobTitle}</h3>
      <p>{props.jobPeriod}</p>
    </div>
    <h4 className={styles.jobPlace}>{props.jobPlace}</h4>
    <p className={styles.jobDesc}>{props.jobDesc}</p>
    <div className={styles.listDuties}>
      {duties}
    </div>
  </div>
}

class Experience extends React.Component {
  render() {
    return(
      <section className={styles.container}>
        <h1 className={styles.title}>Work Experiences</h1>
        <div>
          <Exp
            jobTitle="Sales Associate"
            jobPeriod="September 2016 - Current"
            jobPlace="Gymboree, Kingsway Garden Mall, Edmonton, Alberta"
            jobDesc={`Gymboree is known as a great children clothes store with an outstanding clothes quality,
                      excellent customer service, and great working culture.
                      As a Sales Associate at Gymboree, I am the first person who customers meet when they enter the store.
                      Sales Associate plays an important role to maintain a good relationship with customers
                      in order to achieve the sales goal as well as represent the positive manners of the company. `}
            jobDuties={[
              'Greet customers and let them know about the promotion, e.g. using the Gymbucks promotion.',
              'Identify customer needs by asking them the purpose of their shopping, e.g. ask them for who they are shopping for, such as relatives or friends.',
              'Responsible for a transaction in the cashier, e.g. process customer’s transaction in the till by credit card, debit, or cash.',
              'Maintain the cleanliness of the store by sweeping, mopping and put back clothes.'
            ]} />
          <Exp
            jobTitle="Lab Monitor"
            jobPeriod="September 2014 - April 2016"
            jobPlace="NAIT Digital Media Information and Technology, Edmonton, Alberta"
            jobDesc={`Digital Media Information and Tehnology provides students with open labs that can be used only for
                      the Digital Media Information and Technology students. Each lab provides different kind of applications that students
                      can access for their learning purpose. As a lab monitor, I assisted students by directing them to a particular lab room as well as
                      help them if they have any difficulties to use the application installed on the computer.`}
            jobDuties={[
              'Coordinated and assisted students to use lab room, e.g. guide students to a specific lab room to have access for a specific application.',
              'Managed records and generated reports of student room usage, e.g. inform the supervisor if some computers are broken or have issues that is related to NAIT system.',
              'Assured the security of the lab used by students during the evening time and weekend, e.g. maintain the completeness of computer supplies on each lab room.'
            ]} />
          <Exp
            jobTitle="Help Desk"
            jobPeriod="May - December 2015"
            jobPlace="NAITSA (Northern Alberta Institution of Technology Student Association Computer Commons, Edmonton, Alberta"
            jobDesc={`NAIT Computer Commons is a general lab room where students from all programs are welcome to use. They can have access to this service by
                     login to the computer using their NAIT accounts. Computer Commons not only provide free access computer and study space, as well it has photocopier, scanner,
                     printer and fax machine. As a help desk at NAITSA, I am working with different people at NAIT who has variant expertise in their field.
                     Personally, I gained some useful experiences on how to operate printer, photocopier machine and maintain students account.`}
            jobDuties={[
              'Documented technical issues and solutions including hardware and software issues, e.g. software that is challenging to use for some people such as Adobe Illustrator.',
              'Managed records and generated report for the supervisor to review the progress in the computer commons lab, e.g. generated report for every shift to be sent to the supervisor that is related to the performance in computer lab.',
              'Maintained the usage of printer, photocopy, scanner machine and informed the IT technician when problems occurred, e.g. inform the technician if the printer didn’t show file list that students want to print.'
            ]} />
          <Exp
            jobTitle="Sales Associate"
            jobPeriod="May - August  2015"
            jobPlace="Sirens, Kingsway Garden Mall, Edmonton Alberta"
            jobDesc={`Sirens is second place where I sharpen my customer service and sales skill as a Sales Associate. This place bring few advantages for me
                      as a beginner Sales Associates on how to behave toward customer, handle cash registration as well as a maintain clothes supplies.
                      I have to be able to maintain a good relationship with customer as well represent the company culture to the outside people.
              `}
            jobDuties={[
              'Greeted customers and told them about the sales or promotion.',
              'Accepted payment from the customers (cashier).',
              'Maintained the neatness of the store by sweeping and mopping the floor at the end of the day night shift.'
            ]} />
          <Exp
            jobTitle="Sales Associate"
            jobPeriod="May - July 2015"
            jobPlace="Forever21, Kingsway Garden Mall, Edmonton Alberta"
            jobDesc={`Forever21 is a well-known teenager clothes where was my first place to begin my experience as a Sales Associate. It is a good place to start
                      learning on how to work in reatil company. I was not only work as a Sales Associate, but I also maintain the usage of fitting room where people
                      usually try on the clothes before they buy it. The working culture in here is professional, friendly and fun.`}
            jobDuties={[
              'Approached customer with a nice and polite attitude as well as asked for their shopping needs, e.g. asked if they are looking for specific clothes for kids or adults.',
              'Organized clothes, display table, and store equipment in order to maintain their tidiness and cleanliness, e.g. put in order the clothes based on the size.'
            ]} />
        </div>
      </section>
   )
  }
};

export default Experience;
