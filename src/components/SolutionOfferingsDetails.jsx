import React, { useEffect } from 'react'
// import Aos from 'aos';
import dataJson from '../Data/data.json'
import CollaborationArchitecture from './CollaborationArchitecture';
import DataCenterServices from './DataCenterServices';
import SolutionOffering from './SolutionOfferings';
import SolutionOffering_backhround from "../images/solution-offering-background-image.png";

const SolutionOfferingsDetails = () => {

  return (
    <>
    <section className='SolutionOfferingsDetails'>
      <div className='wrapper'>
        <div className='box'>
          {
            dataJson['Enterprise Network'].map((d, i) => {
              return (
                <>
                <div>
                  <div className="d-flex" >
                    <p>0{d.id}</p>
                    <h2>{d.title}</h2>
                  </div>
                  <ul>
                    {d.link1 && <li>{d.link1}</li>}
                    {d.link2 && <li>{d.link2}</li>}
                    {d.link3 && <li>{d.link3}</li>}
                    {d.link4 && <li>{d.link4}</li>}
                    {d.link5 && <li>{d.link5}</li>}
                    {d.link6 && <li>{d.link6}</li>}
                  </ul>
                </div>
                </>
              )
            })
          }
        </div>
        <div className="image">
          {
            dataJson.img.map((d, i) => {
              return (
                <>
                  <img src={d.img} alt="" />
                </>
              )
            })
          }
        </div>
        <div className="dec">
          {
            dataJson['Solution Offerings'].map((d, i) => {
              return (
                <>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <div className='btn'>
                  <button> <a href='#Getintouch'>{d.btn}</a></button>
                  </div>
                </>
              )
            })
          }
        </div>
      </div>
    
    
    </section>
      <section className='CollaborationArchitecture'>
      <CollaborationArchitecture />
    </section>
      <section className='DataCenterServices'>
      <DataCenterServices />
    </section>
    </>
  );
};

export default SolutionOfferingsDetails;
