import React from "react"
import "./Features.css"
import data from "./Features-Api"
import Card from "./Card"
import cert1 from "../pic/certs/ccp.png"
import cert2 from "../pic/certs/cloudfound.png"
import cert3 from "../pic/certs/its.png"
import cert4 from "../pic/certs/nse2.png"
import cert5 from "../pic/certs/ccnaacad.png"
import cert6 from "../pic/certs/cyberops.png"
import cert7 from "../pic/certs/mta.png"
import cert8 from "../pic/certs/nse1.png"

const Features = () => {
  return (
    <>
      <section className='features top' id='features'>
        <div className='container'>
          <div className='heading'>
            <h1>Certifications</h1>
          </div>

          <div className='content grid'>
            {/* {data.map((val, index) => {
              return <Card key={index} image={val.image} title={val.title} desc={val.desc} />
            })} */}

            <div className='box btn_shadow'>
              <img src={cert1} style={{ width: "10rem", height: "10rem" }} alt='' />
              <h2>AWS Certified Cloud Practitioner</h2>
              <p>Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud.  Badge owners are able to identify essential AWS services necessary to set up AWS-focused projects.</p>
              <a href='https://www.credly.com/badges/4b2a5aa7-ca59-4782-8c79-5095536331a1?source=linked_in_profile'>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            <div className='box btn_shadow'>
              <img src={cert2} style={{ width: "10rem", height: "10rem" }} alt='' />
              <h2>AWS Academy Graduate - AWS Academy Cloud Foundations</h2>
              <p>Earners of this badge have taken the AWS Academy Cloud Foundations course.</p>
              <a href='https://www.credly.com/badges/22cb8e44-f340-42aa-a807-fdf7785325c1?source=linked_in_profile'>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            <div className='box btn_shadow'>
              <img src={cert3} style={{ width: "10rem", height: "10rem" }} alt='' />
              <h2>IT Specialist - Networking</h2>
              <p>Earners of this badge demonstrate foundational networking knowledge and skills, including TCP/IP, networking services, networking topologies, and troubleshooting in wired and wireless environments.</p>
              <a href='https://www.credly.com/badges/281cb132-4c27-4a3b-a982-d516ee1b5b7f/public_url'>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            <div className='box btn_shadow'>
            <img src={cert8} style={{ width: "10rem", height: "10rem" }} alt='' />
              <h2>NSE 1 Network Security Associate</h2>
              <p>Credential ID: P25VaqEmCM | In NSE 1 the students learned about the threat landscape and the security problems facing organizations and individuals.</p>
              <a href='https://training.fortinet.com/mod/customcert/verify_certificate.php'>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            <div className='box btn_shadow'>
            <img src={cert4} style={{ width: "10rem", height: "10rem" }} alt='' />
              <h2>NSE 2 Network Security Associate</h2>
              <p>Credential ID: j3SND9v4km | In NSE 2 The Evolution of Cybersecurity course, the students learned about the types of security products that security vendors created to address those problems.</p>
              <a href='https://training.fortinet.com/mod/customcert/verify_certificate.php'>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            <div className='box btn_shadow'>
            <img src={cert5} style={{ width: "10rem", height: "10rem" }} alt='' />
              <h2>CCNA: Switching, Routing, and Wireless Essentials</h2>
              <p>The earner has a foundation in switching operations, wired and wireless LAN configuration using security best practices, redundancy protocols, and developed problem-solving skills.</p>
              <a href='https://www.credly.com/badges/6ce3cc58-ef39-4297-805e-66581d2bad71/public_url'>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            <div className='box btn_shadow'>
            <img src={cert6} style={{ width: "10rem", height: "10rem" }} alt='' />
              <h2>CyberOps Associate</h2>
              <p>The holder of this student-level credential has a broad understanding of Security Operations. They developed problem-solving skills to detect and analyze intrusions and monitor the network by completing up to 30 hours of 52 hands-on labs using virtual machines (Security Onion - ELK) and/or Cisco Packet Tracer.</p>
              <a href='https://www.credly.com/badges/0d485746-cacb-4821-adb5-cfab6614fab4/public_url'>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
            <div className='box btn_shadow'>
            <img src={cert7} style={{ width: "10rem", height: "10rem" }} alt='' />
              <h2>MTA: Database Fundamentals - Certified 2019</h2>
              <p>Earners of the MTA: Database Fundamentals certification have demonstrated introductory knowledge of and skills with databases, including relational databases, such as Microsoft SQL Server. </p>
              <a href='https://www.credly.com/badges/cdab62c1-71eb-498a-b127-2106bc1fe7c4/public_url'>
                <i class='fas fa-arrow-right'></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Features
