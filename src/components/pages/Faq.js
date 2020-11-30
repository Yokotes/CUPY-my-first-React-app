import React from 'react'
import Button from '../core/Button'
import './Home.css'
import CardItem from '../core/CardItem'

export default function Home() {
    return (
        <>
            {/* Hero section */}
            <section className="home-hero">

                {/* Video */}
                <div className="hero-video-wrapper">
                    <video loop autoPlay muted>
                        <source src='/works/cupy/img/home_video.mp4' type='video/mp4'/>
                    </video>
                </div>

                <div className="container h-100">
                    <div className="hero-content h-100 d-flex flex-column justify-content-center align-items-center">

                        {/* Title */}
                        <h1 className="hero-title text-center">
                            FAQ
                        </h1>

                        {/* Button */}
                        <Button path="/" buttonStyles="primary-btn hero-btn">
                            Read more
                        </Button>
                    </div>
                </div>
            </section>
        
            {/* Items */}
            <section className="home-items">
                <div className="container">
                    <div className="row">

                        {/* Item */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <CardItem path="/" title="Wish and make wishes come true" img="/works/cupy/img/header_bg.png" />
                        </div>

                        {/* Item */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <CardItem path="/" title="Wish and make wishes come true" img="/works/cupy/img/header_bg.png" />
                        </div>

                        {/* Item */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <CardItem path="/" title="Wish and make wishes come true" img="/works/cupy/img/header_bg.png" />
                        </div>

                        {/* Item */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <CardItem path="/" title="Wish and make wishes come true" img="/works/cupy/img/header_bg.png" />
                        </div>

                        {/* Item */}
                        <div className="col-12 col-md-6 col-lg-4">
                            <CardItem path="/" title="Wish and make wishes come true" img="/works/cupy/img/header_bg.png" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
