import React from "react"
import "../Portfolio/Portfolio.css"
import "../Blog/Blog.css"
import Card from "./Card"
import BlogApi from "./BlogApi"

const Blog = () => {
  return (
    <>
      <section className='Portfolio Blog' id='blog'>
        <div className='container top'>
          <div className='heading text-center'>
            <h4>Coming Soon...</h4>
            <h1>Blogs</h1>
          </div>

          <div className='content grid'>
            {/* {BlogApi.map((value, index) => {
              return <Card key={index} image={value.image} date={value.date} title_one={value.title_one} title_two={value.title_two} title_three={value.title_three} desc_one={value.desc_one} desc_two={value.desc_two} desc_three={value.desc_three} />
            })} */}

          <div className='box btn_shadow '>
              <div className='img'>
                  <img src="" alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Coming Soon</span>
              </div>
              <div className='title'>
                <a href='' >
                  <h2>Coming Soon</h2>
                </a>
              </div>
            </div>

            <div className='box btn_shadow '>
              <div className='img'>
                  <img src="" alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Coming Soon</span>
              </div>
              <div className='title'>
                <a href='' >
                  <h2>Coming Soon</h2>
                </a>
              </div>
            </div>

            <div className='box btn_shadow '>
              <div className='img'>
                  <img src="" alt='' />
              </div>
              <div className='category d_flex'>
                  <span>Coming Soon</span>
              </div>
              <div className='title'>
                <a href='' >
                  <h2>Coming Soon</h2>
                </a>
              </div>
            </div>
            
          </div>
          
        </div>
      </section>
    </>
  )
}

export default Blog
