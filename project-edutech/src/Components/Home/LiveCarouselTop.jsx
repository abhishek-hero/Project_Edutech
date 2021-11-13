import React from 'react'
import './Styles/LiveCarouselTop.css'
import {Link} from "react-router-dom"

export const LiveCarouselTop = ({ title, background1, background2, background3 }) => {
  return (

    <>
      <div className="carousel_heading">
        <span className='carousel_title'>{title}</span>
        <Link to="/AllDemoPage">
        <span className='carousel_link'>See all</span>
        
        </Link>
      </div>

      <div className="carousel_home">

        <span>

          <div className="Livecarousel_div" style={{ backgroundImage: `url(${background1})` }}>
            <div className='overlay'>
              <div className='card_btn_top'>
                <p>6 pm Tuesday</p>
                <span>
                  <button>LIVE</button>
                </span>
              </div>

              <div className='card_btn_middle'>
                <p>Mostly used cameras by experts</p>
              </div>

              <div className='card_btn_bottom'>
                <img src="/Images/cameraMan.png" alt="" />
                <span>
                  <strong>Ashwath Ram</strong>
                  <small>Wild Life Photographer</small>
                </span>
              </div>
            </div>
          </div>

        </span>
        <span>

          <div className="Livecarousel_div" style={{ backgroundImage: `url(${background2})` }}>
            <div className='overlay'>
              <div className='card_btn_top'>
                <p>6 pm Tuesday</p>
                <span>
                  <button>LIVE</button>
                </span>
              </div>

              <div className='card_btn_middle'>
                <p>Mostly used cameras by experts</p>
              </div>

              <div className='card_btn_bottom'>
                <img src="/Images/cameraMan.png" alt="" />
                <span>
                  <strong>Ashwath Ram</strong>
                  <small>Wild Life Photographer</small>
                </span>
              </div>
            </div>
          </div>
        </span>
        <span>

          <div className="Livecarousel_div" style={{ backgroundImage: `url(${background3})` }}>
            <div className='overlay'>
              <div className='card_btn_top'>
                <p>6 pm Tuesday</p>
                <span>
                  <button>LIVE</button>
                </span>
              </div>

              <div className='card_btn_middle'>
                <p>Mostly used cameras by experts</p>
              </div>

              <div className='card_btn_bottom'>
                <img src="/Images/cameraMan.png" alt="" />
                <span>
                  <strong>Ashwath Ram</strong>
                  <small>Wild Life Photographer</small>
                </span>
              </div>
            </div>
          </div>

        </span>
        <span>

          <div className="Livecarousel_div" style={{ backgroundImage: `url(${background1})` }}>
            <div className='overlay'>
              <div className='card_btn_top'>
                <p>6 pm Tuesday</p>
                <span>
                  <button>LIVE</button>
                </span>
              </div>

              <div className='card_btn_middle'>
                <p>Mostly used cameras by experts</p>
              </div>

              <div className='card_btn_bottom'>
                <img src="/Images/cameraMan.png" alt="" />
                <span>
                  <strong>Ashwath Ram</strong>
                  <small>Wild Life Photographer</small>
                </span>
              </div>
            </div>
          </div>

        </span>
        <span>

          <div className="Livecarousel_div" style={{ backgroundImage: `url(${background1})` }}>
            <div className='overlay'>
              <div className='card_btn_top'>
                <p>6 pm Tuesday</p>
                <span>
                  <button>LIVE</button>
                </span>
              </div>

              <div className='card_btn_middle'>
                <p>Mostly used cameras by experts</p>
              </div>

              <div className='card_btn_bottom'>
                <img src="/Images/cameraMan.png" alt="" />
                <span>
                  <strong>Ashwath Ram</strong>
                  <small>Wild Life Photographer</small>
                </span>
              </div>
            </div>
          </div>

        </span>
      </div>

    </>
  )
}
