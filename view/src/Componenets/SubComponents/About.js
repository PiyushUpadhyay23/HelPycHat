import React from 'react';
import '../../CSS/About.css';

const members = [
  {
    name: 'Piyush Upadhyay',
    role: 'Front End Developer',
    image: '/view/src/Assest/Piyush.jpg/150',
    bio: 'I am Piyush, I worked as a Front End developer in this project'
  },
  {
    name: 'Lucky Verma',
    role: 'Back End Developer',
    image: 'https://via.placeholder.com/150',
    bio: 'I am Lucky, I worked as a Back End developer in this project'
  },
  {
    name2: 'Ritika Singh',
    role2: 'Front End Developer',
    image2: 'https://via.placeholder.com/150',
    bio2: 'I am Ritika, I worked as a Front End developer in this project'
  }
];

function About() {
  const firstContainerMembers = members.filter(member => member.name === 'Piyush Upadhyay' || member.role === 'Front End Developer');
  const secondContainerMembers = members.filter(member => member.name === 'Lucky Verma' || member.role === 'Back End Developer');
  const thirdContainerMembers = members.filter(member => member.name2 === 'Ritika Singh' || member.role2 === 'Front End Developer');

  return (
    <>
      <div className="aboutpage">
        <div className="imagecontforabout">
          <img src='https://img.freepik.com/free-vector/technology-wire-mesh-network-connection-digital-background_1017-28407.jpg' alt="aboutpage" />
        </div>

        <div className="containeroddabout">
          {firstContainerMembers.map(member => (
            <div key={member.name} className="member-block">
              <div className="Piyush">
                <img src={member.image} alt={member.name} />
              </div>

              <h3>{member.name}</h3>
              <h5>{member.role}</h5>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="containerevenabout">
          {secondContainerMembers.map(member => (
            <div key={member.name} className="member-block">
              <div className="Lucky">
                <img src={member.image} alt={member.name} />
              </div>

              <h3>{member.name}</h3>
              <h5>{member.role}</h5>
              <p>{member.bio}</p>
            </div>
          ))}
        </div>

        <div className="containeroddabout">
          {thirdContainerMembers.map(member => (
            <div key={member.name2} className="member-block">
              <div className="Ritika">
                <img src={member.image2} alt={member.name2} />
              </div>

              <h3>{member.name2}</h3>
              <h5>{member.role2}</h5>
              <p>{member.bio2}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default About;
