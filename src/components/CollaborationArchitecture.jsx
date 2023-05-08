import React, { useEffect } from 'react'
import Aos from 'aos';
import dataJson from '../Data/data.json';

const CollaborationArchitecture = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className='wrapper'>
        <div className='box'>
          {dataJson['Collaboration Architecture'].map((d, i) => {
            return (
              <React.Fragment key={d.id}>
                <div className="d-flex" data-aos="fade-up" data-aos-offset="300">
                  <p>0{d.id}</p>
                  <h2>{d.title}</h2>
                </div>
                <ul data-aos="fade-up" data-aos-offset="300">
                  {d.link1 && <li>{d.link1}</li>}
                  {d.link2 && <li>{d.link2}</li>}
                  {d.link3 && <li>{d.link3}</li>}
                  {d.link4 && <li>{d.link4}</li>}
                  {d.link5 && <li>{d.link5}</li>}
                  {d.link6 && <li>{d.link6}</li>}
                </ul>
              </React.Fragment>
            );
          })}
        </div>
        <div className="image">
          {dataJson.img2.map((d, i) => {
            return <img key={i} src={d.img} alt='' />;
          })}
        </div>
        <div className="dec">
          {dataJson['Solution Offering'].map((d, i) => {
            return (
              <React.Fragment key={i}>
               <h2 data-aos="fade-up" data-aos-offset="400">{d.title}</h2>
                  <p data-aos="fade-up" data-aos-offset="500">{d.desc}</p>
                <div className='btn'>
                  <button>{d.btn}</button>
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default CollaborationArchitecture;