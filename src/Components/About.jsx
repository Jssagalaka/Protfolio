import React from "react";

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { MdSchool } from "react-icons/md";
function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-20"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">About</h1>
        <p>
          Hello, I'm Jaydeep, a passionate Web developer with a keen eye for MERN
          Stack . With a background in IT, I strive to create impactful and
          visually stunning Software solutions that leave a lasting impression.
        </p>
        <br />
        <h1 className="text-green-600 font-semibold text-xl">
          Education & Training
        </h1>
        <br />
        {/* <span>
        BCA(Bachelor Of Computer Application)<br /> Bhakt Kavi Narshi Mehta University<br/> 2024 <br /><br />
        HSC<br /> Bhakt Kavi Narshi Mehta University<br/> 2024 <br />
        </span> */}
        <div className="bg-gray-100">
          <VerticalTimeline>
          
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2021-2024"
    iconStyle={{ background: 'green', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title text-green-600 text-2xl">BCA</h3>
    <h4 className="vertical-timeline-element-subtitle">PVM-KESHOD</h4>
    
  </VerticalTimelineElement>

  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'white', color: 'black' }}
    contentArrowStyle={{ borderRight: '7px solid  white' }}
    date="2020-2021"
    iconStyle={{ background: 'green', color: '#fff' }}
    icon={<MdSchool />}
  >
    <h3 className="vertical-timeline-element-title text-green-600 text-2xl">HSC</h3>
    <h4 className="vertical-timeline-element-subtitle">Swami Vivekanand School - Ajab</h4>
    
  </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
        <br />
        <br />
       
       
      
        <h1 className="text-green-600 font-semibold text-xl">
          Mission Statement
        </h1>
        <p>
          My mission is to leverage my skills and creativity to deliver
          innovative [Your Field] solutions that exceed client expectations and
          contribute positively to the digital landscape. I am committed to
          continuous learning and growth, always seeking new challenges and
          opportunities to expand my horizons.
        </p>
      </div>
    </div>
  );
}

export default About;
