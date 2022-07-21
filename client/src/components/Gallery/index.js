import React from 'react';

import GalleryCard from "../GalleryCard";
import Hero from '../Hero';

const Gallery = () => {
    const galleryContents = [
        {
            image: "/images/fish1.jpeg",
            title: 'Fish on the Dock',
            desc: 'A picture of a fish lying on the dock.'

        },
        {
            image: "/images/fish2.jpeg",
            title: 'On the hook!',
            desc: 'A fisherman with a fish in the boat'

        },
        {
            image: "/images/fish3.jpeg",
            title: "This Big!",
            desc: "A tiny fish caught by one fisherman"


        },
        {
            image: "/images/fish4.jpeg",
            title: "In the boat at dusk",
            desc: "An image of a boat at sundown"


        },
        {
            image: "/images/fish5.jpeg",
            title: 'Fisherman and duck',
            desc: 'A man fishing with a duck swimming away'

        },
        {
            image: "/images/fish6.jpeg",
            title: 'One to throw back',
            desc: 'A small fish ready to be released'

        }]


    return (
    <>
    <Hero/>
    <div className='container min-height'>
        <div className="row-flex justify-content-evenly">
            <div className='col-12 col-lg-8'>

            </div>

        <div class="carousel slide" data-bs-ride="false" id='gallery-carousel'>
                <div className='carousel-indicators'>
                    <button type="button" data-bs-target="#gallery-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#gallery-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#gallery-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#gallery-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#gallery-carousel" data-bs-slide-to="4" aria-label="Slide 5"></button>
                    <button type="button" data-bs-target="#gallery-carousel" data-bs-slide-to="5" aria-label="Slide 6"></button>
                </div>

                <div className='carousel-inner'>
                        {galleryContents.map((galleryContents, index) => (
                        <GalleryCard
                            key={galleryContents.title}
                            image={galleryContents.image}
                            title={galleryContents.title}
                            desc={galleryContents.desc}
                            index = {index}
                        />
                        ))}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#gallery-carousel" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                
                <button class="carousel-control-next" type="button" data-bs-target="#gallery-carousel" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    </div>
    </>
    )

}
export default Gallery