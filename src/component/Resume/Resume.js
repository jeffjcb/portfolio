import React from "react"
import "./Resume.css"
import ResumeApi from "./ResumeApi"
import Card from "./Card"

const Resume = () => {
  return (
    <>
      <section className='Resume' id='resume'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>Fresh Graduate</h4>
            <h1>Resume</h1>
          </div>

          <div className='content-section mtop d_flex'>
            <div className='left'>
              <div className='heading'>
                <h4>2018-2023</h4>
                <h1>Education Quality</h1>
              </div>

              <div className='content'>
                {/* {ResumeApi.map((val, id) => {
                  if (val.category === "education") {
                    return <Card key={id} title={val.title} year={val.year} rate={val.rate} desc={val.desc} />
                  }
                })} */}

                <div className='box btn_shadow'>
                  <div className='title_content d_flex'>
                    <div className='title'>
                      <h2>FEU Institute of Technology</h2>
                      <span>2018 - 2023</span>
                    </div>
                    <div className='rate'>
                      <button className='btn_shadow '>3.74 / 4.0</button>
                      <h4>Running for Latin Honors</h4>
                    </div>
                  </div>
                  <hr />
                  <b>BS Information Technology with Specialization in Service Management and Business Analytics</b>
                  <p> 
Coursework: Data Analysis, Data Management, Machine Learning, Frontend and Backend Programming, Cloud architecture, Networking, Project Management, UI Design
</p>
                </div>


              </div>
            </div>
            <div className='left'>
              <div className='heading'>
                <h4>2022-Present</h4>
                <h1>Job Experience</h1>
              </div>

              <div className='content'>
                {ResumeApi.map((val, index) => {
                  if (val.category === "experience") {
                    return <Card key={index} title={val.title} year={val.year} desc={val.desc} />
                  }
                })}
                
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Resume
