import React from "react"
import "./Portfolio.css"
import Card from "./Card"
import Portfolio_data from "./Portfolio_data"
import port1 from "../pic/portfolio/south.png"
import port2 from "../pic/portfolio/chattr.png"
import port3 from "../pic/portfolio/moneyfest.png"
import port4 from "../pic/portfolio/Auditory.png"
import port5 from "../pic/portfolio/portfolio.png"
import port6 from "../pic/portfolio/mockflatterie.PNG"

const Portfolio = () => {
  return (
    <>
      <section className='Portfolio top' id='portfolio'>
        <div className='container'>
          <div className='heading text-center '>
            <h1>My Portfolio</h1>
          </div>

          <div className='content grid'>
            {/* {Portfolio_data.map((value, index) => {
              return <Card key={index} image={value.image} category={value.category} totalLike={value.totalLike} title={value.title} />
            })} */}

            <div className='box btn_shadow '>
              <div className='img'>
                  <img src={port1} alt='' />
              </div>
              <div className='category d_flex'>
                 <a href="https://github.com/jeffjcb/southcartel-app"> <span>South Cartel 55</span></a>
              </div>

              <div className='title'>
                <a href='https://github.com/jeffjcb/southcartel-app' >
                  <h2>E-commerce web application designed with machine learning.</h2>
                </a>
                  <label>
                     Django | HTML | CSS | Javascript | Postgres | Paypal | Machine Learning | Heroku
                  </label>
              </div>
            </div>

            <div className='box btn_shadow '>
              <div className='img'>
                  <img src={port2} alt='' />
              </div>
              <a href='https://github.com/jeffjcb/Chattr'>
              <div className='category d_flex'>
                  <span>Chattr</span> 
              </div>
              </a>
              <div className='title'>
                <a href='https://github.com/jeffjcb/Chattr' >
                  <h2>Chat Application deployed using Docker</h2>
                </a>
                  <label>
                     Django | Docker | AWS | Postgres | Nginx | HTML | CSS | Javascript 
                  </label>
              </div>
            </div>
            
            <div className='box btn_shadow '>
              <div className='img'>
                  <img src={port3} alt='' />
              </div>
              <a href="https://github.com/jeffjcb/moneyfest">
              <div className='category d_flex'>
                  <span>Moneyfest</span>
              </div></a>
              <div className='title'>
                <a href='https://github.com/jeffjcb/moneyfest' >
                  <h2>Income and Expense Tracker</h2>
                </a>
                  <label>
                     Django | HTML | CSS | Javascript | mySQL | Heroku
                  </label>
              </div>
            </div>

            
            <div className='box btn_shadow '>
              <div className='img'>
                  <img src={port5} alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Portfolio website</span>
              </div>
              <div className='title'>
                <a href='' >
                  <h2>Simple Portfolio website using React</h2>
                </a>
                  <label>
                     React JS | AWS Amplify | AWS Code Pipiline | CICD
                  </label>
              </div>
            </div>

                        
            <div className='box btn_shadow '>
              <div className='img'>
                  <img src={port4} alt='' />
              </div>
              <a href="https://github.com/jeffjcb/Audio-Transcripter-w-GUI">
              <div className='category d_flex'>
                  <span>Auditory</span>
              </div></a>
              <div className='title'>
                <a href='https://github.com/jeffjcb/Audio-Transcripter-w-GUI' >
                  <h2>Audio transcripter built around tkinter and python.</h2>
                </a>
                  <label>
                     Python | Tkinter | Google Speech Recognition
                  </label>
              </div>
            </div>

            <div className='box btn_shadow '>
              <div className='img'>
                  <img src={port6} alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Mock Flatterie</span>
              </div>
              <div className='title'>
                <a href='' >
                  <h2>A Mock E-commerce website for Flatterie Restaurant.</h2>
                </a>
                  <label>
                     HTML | CSS | Javascript | 000webhosting | Figma
                  </label>
              </div>
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
