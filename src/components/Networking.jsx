import React, { useEffect } from 'react'

const Networking = () => {

  return (
    <>
        <nav aria-label="breadcrumb">
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <a className="active" href="/">Home</a> 
            </li>
            <i class="fa-solid fa-angle-right"></i>
            <li className="breadcrumb-item" aria-current="page">
              About
            </li>
          </ul>
        </nav>
      <section className="networking">
        <div className="networking_wrapper">
          <div className="d-flex">
            <div className="left_img"></div>
            <div className="right_con">
              <p>
                Epta Layers is a single-point enterprise solutions provider that
                works with IT world leaders to deliver tailor-made solutions for
                networking and communication Infrastructure.
              </p>
              <p className="second">
                Epta stands for 'seven' in Greek. It encapsulates our vision to
                focus on the <b>7 layers of networking</b> in the OSI model.
              </p>
              <div className="img">
                <img src="../images/OSI Model new.png" alt="osl" />
                <p>Open Systems Interconnection (OSI) model</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Networking
