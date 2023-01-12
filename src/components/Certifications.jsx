import React from 'react';
import timeline from '../data/timeline';
import certifications from '../data/certifications';
import TimelineItem from './TimelineItem';
import CertificationItem from './CertificationItem';
import Title from './Title';

function Certifications() {
   return (
      <div className="flex flex-col md:flex-row justify-center my-20">
         <div className="w-full md:w-7/12">
            <Title>Certifications</Title>
            {certifications.map(item => (
               <CertificationItem 
                  key={item.title}
                  title={item.title}
                  duration={item.validityPeriod}
               />
            ))}
         </div>
      </div>
   )
}

export default Certifications;