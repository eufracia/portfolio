import React from 'react';
import {render} from 'react-dom';

const Exp = (props) => {
  let duties = Array.isArray(props.jobDuties) && props.jobDuties.map((duty, i) => {
     return <p key={i}>•{duty}</p>
  });
  return <div>
    <div style={style.box}>
      <div style={style.jobTitle}>
        <h3>{props.jobTitle}</h3>
      </div>
      <div style={style.jobPeriod}>
        <h3>{props.jobPeriod}</h3>
      </div>
    </div>
    <div style={style.box}>
      <div style={style.jobPlace}>
        <h4>{props.jobPlace}</h4>
      </div>
    </div>
    <div style={style.box}>
      <div style={style.jobDesc}>
        <p>{props.jobDesc}</p>
      </div>
    </div>
    <div style={style.box}>
      <div style={style.jobDuties}>
        {duties}
      </div>
    </div>
  </div>
}

class Experience extends React.Component {
  render() {
    return(
      <section>
        <h1>Work Experiences</h1>
        <div>
          <Exp
            jobTitle="Sales Associate"
            jobPeriod="September 2016 - Current"
            jobPlace="Gymboree, Kingsway Garden Mall, Edmonton, Alberta"
            jobDesc={`Gymboree is known as a an extensive children clothes store with an outstanding clothes quality,
                      excellent customer service, and great working culture.
                      As a Sales Associate at Gymboree, I am the first person whose customeres meet when they enter the store.
                      Sales Associate plays an important role to maintain a good relationship with customers
                      in order to achieve the sales goal as well as represent the positive manners of company. `}
            jobDuties={[
              'Greet customers and let them know about the promotion, e.g. using the Gymbucks promotion.',
              'Identify customers needs by asking them the purpose of their shopping, e.g. ask them for who they are shopping for, such as relatives or friends.',
              'Responsible for a transaction in the cashier, e.g. process customer’s transaction in the till by credit card, debit, or cash.'
            ]} />
          <Exp
            jobTitle="Lab Monitor"
            jobPeriod="September 2014 - April 2016"
            jobPlace="NAIT Digital Media Information and Technology, Edmonton, Alberta"
            jobDesc={`Digital Media Information and Tehnology provides open labs that can be used specifically for
                      the Digital Media Information and Technology students. Each labs provide different kind of applications that students
                      can access for their learning. As a lab monitor, I assist students by directing them to a particular lab room as well as
                      help them if they have difficulties to use the application installed on the computer.`}
            jobDuties={[
              'Greet customers and let them know about the promotion, e.g. using the Gymbucks promotion.',
              'Identify customers needs by asking them the purpose of their shopping, e.g. ask them for who they are shopping for, such as relatives or friends.',
              'Responsible for a transaction in the cashier, e.g. process customer’s transaction in the till by credit card, debit, or cash.'
            ]} />
          <Exp
            jobTitle="Help Desk(Lab Supervisor)"
            jobPeriod="May - December 2015"
            jobPlace="NAITSA(Northern Alberta Institution of Technology Student Association Computer Commons, Edmonton, Alberta"
            jobDesc={`NAIT Computer Commons is a general lab room where students from all programs are welcome to use. They can have an access to this service by
                     login to the computer using their NAIT accounts. As a help desk at NAITSA, I am working wih different people at NAIT which they are expertise in their field.
                     Also, I learned lots from this job on how to operate printer, photocopier machine and maintain students account.`}
            jobDuties={[
              'Documented technical issues and solutions including hardware and software issues, e.g. software that is challenging to use for some people such as Adobe Illustrator.',
              'Managed records and generated report for the supervisor to review the progress in the computer commons lab, e.g. generated report for every shift to be sent to the supervisor that is related to the performance in computer lab.',
              'Maintained the usage of printer, photocopy, scanner machine and informed the IT technician when problems occurred, e.g. inform the technician if the printer didn’t show file list that students want to print.'
            ]} />
          <Exp
            jobTitle="Sales Associate"
            jobPeriod="May - August  2015"
            jobPlace="Sirens, Kingsway Garden Mall, Edmonton Alberta"
            jobDesc={`Sirens is a store where I learned my first experience as a sales associate. How to provide a good customer service and always be professinal at work.
                      Sales Associate is a person who customers will meet at first customers come inside the store.
              `}
            jobDuties={[
              'Greeted customers and told them about the sales or promotion.',
              'Accept payment from the customers (cashier).',
              'Maintained the neatness of the store by sweeping and mopping the floor at the end of the day night shift.'
            ]} />
          <Exp
            jobTitle="Sales Associate"
            jobPeriod="May - July 2015"
            jobPlace="Forever21, Kingsway Garden Mall, Edmonton Alberta"
            jobDesc={`Forever21 is a big well-known teenager clothes that sell a good products and has a good customer service. As a sales associate,
                      my main goal is to sell the products with providing a good customer service to all customers from different background. Sirens is a store where I learned my first experience as a sales associate
              `}
            jobDuties={[
              'Approached customer with a nice and polite attitude as well as asked for their shopping needs, e.g. asked if they are looking for specific clothes for kids or adults.',
              'Organized clothes, display table, and store equipment in order to maintain their tidiness and cleanliness, e.g. put in order the clothes based on the size.'
            ]} />
        </div>
      </section>
   )
  }
};

let style = {
  box: {
    display: 'flex',
    flexDirection: 'row nowrap',
  },
  jobTitle: {
    flex: 3,
    fontSize: 20,
  },
  jobPeriod: {
    flex: 2,
    fontSize: 15,
  },
  jobPlace: {
    flex: 1,
    marginBottom: 30,
  },
  jobDesc: {
    flex: 1,
    marginBottom: 30,
  },
  jobDuties: {
    flex: 1,
    marginBottom: 30,
  },
};

export default Experience;
