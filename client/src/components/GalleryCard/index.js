import React from "react";

const GalleryCard = ({ image, title, desc }) => {
    return (<>
        <div className="col-lg-6 col-sm-12">
            <div className="img-thumbnail">
                <img src={process.env.PUBLIC_URL + image} alt={desc} />
                <h3>{title}</h3>
                <p>{desc}</p>
            </div>
        </div>
    </>)
}


export default GalleryCard;