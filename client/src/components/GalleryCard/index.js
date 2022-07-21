import React from "react";

const GalleryCard = ({ image, title, desc, index }) => {
    if (index === 0) {
        return (
            <div className="carousel-item active">
                <img src={process.env.PUBLIC_URL + image} alt={desc} className='d-block w-100'/>
                <div className="carousel-caption d-none d-md-block">
                    <h5>{title}</h5>
                    <p>{desc}</p>
                </div>
            </div>
        )
    } else {
        return (
            <div className="carousel-item">
            <img src={process.env.PUBLIC_URL + image} alt={desc} className='d-block w-100'/>
            <div className="carousel-caption d-none d-md-block">
                <h5>{title}</h5>
                <p>{desc}</p>
            </div>
        </div>
        );
    }
}


export default GalleryCard;