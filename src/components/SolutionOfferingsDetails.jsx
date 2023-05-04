import React from 'react'
import dataJson from '../Data/data.json'
const SolutionOfferingsDetails = () => {
  return (
    <>
      <section className='SolutionOfferingsDetails'>
        <div className=''>
          {
            dataJson.SolutionOfferingsDetails.map((d, i) => {
              return (
                <React.Fragment key={d.id}>
                  <div className=''>
                    <h2>{d.id}</h2>
                    <p>{d.title}</p>
                  </div>
                </React.Fragment>
              )
            })
          }
        </div>
      </section>

    </>
  )
}

export default SolutionOfferingsDetails
