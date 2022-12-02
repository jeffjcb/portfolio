import React from "react"
import "./Home.css"
import hero from "../pic/hero2.png"
import skill1 from "../pic/aws.png"
import skill2 from "../pic/docker-logo.png"
import skill3 from "../pic/python1.png"
import { Typewriter } from "react-simple-typewriter"

const Home = () => {
  return (
    <>
      <section className='hero' id='home'>
        <div className='container f_flex top'>
          <div className='left top'>
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I’m <span>Jeffrey Jacobo</span>
            </h1>
            <h2>
              an
              <span>
                <Typewriter words={[" Aspiring Cloud Engineer.", " Aspiring Solutions Architect."]} loop cursor cursorStyle='|' typeSpeed={70} deleteSpeed={50} delaySpeed={1000} />
              </span>
            </h2>

            <p>I am committed to life long learning and develop personal projects to enhance my skills. I'm also eager to learn more to as a fresh graduate by applying what I have learned from the past.</p>

            <div className='hero_btn d_flex'>
              <div className='col_1'>
                <h4>FIND ME ON</h4>
                <div className='button'>
                <a href='https://www.linkedin.com/in/jeffrey-rafael-j-67b5b61b1/'>
                  <button className='btn_shadow'>
                    <i class='fab fa-linkedin-in'></i>
                  </button></a>
                  <a href='https://www.instagram.com/jeffrealll/'>
                  <button className='btn_shadow'>
                    <i class='fab fa-instagram'></i>
                  </button></a>
                </div>
              </div>
              <div className='col_1'>
                <h4>BEST SKILL ON</h4>
                <button className='btn_shadow'>
                  <img src={skill1} style={{ width: "2rem", height: "2rem" }} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill2} style={{ width: "2rem", height: "2rem" }} alt='' />
                </button>
                <button className='btn_shadow'>
                  <img src={skill3} style={{ width: "2rem", height: "2rem" }} alt='' />
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <div className='right_img'>
              <img src={hero} alt='' />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home
