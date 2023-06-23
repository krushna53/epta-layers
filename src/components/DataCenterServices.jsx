import React, { useEffect } from 'react'

import dataJson from '../Data/data.json';
const DataCenterServices = () => {
 
    return (
        <>
            <div className='wrapper'>
                <div className='box'>
                    {dataJson['Data Center Services'].map((d, i) => {
                        return (
                            <React.Fragment key={d.id}>
                                <div>
                                <div className="d-flex">
                                    <p>0{d.id}</p>
                                    <h2>{d.title}</h2>
                                </div>
                                <ul >
                                    {d.link1 && <li>{d.link1}</li>}
                                    {d.link2 && <li>{d.link2}</li>}
                                    {d.link3 && <li>{d.link3}</li>}
                                    {d.link4 && <li>{d.link4}</li>}
                                    {d.link5 && <li>{d.link5}</li>}
                                    {d.link6 && <li>{d.link6}</li>}
                                </ul>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
                <div className="image">
                    {dataJson.img3.map((d, i) => {
                        return <img key={i} src={d.img} alt='' />;
                    })}
                </div>
                <div className="dec">
                    {dataJson['Solution Offerin'].map((d, i) => {
                        return (
                            <React.Fragment key={i}>
                                <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                                <div className='btn'>
                                <button> <a href='#Getintouch'>{d.btn}</a></button>
                                </div>
                            </React.Fragment>
                        );
                    })}
                </div>
            </div>
        </>
    )
}

export default DataCenterServices
