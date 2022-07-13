import React from "react";

const GalleryCard = ({ image, title, desc }) => {
    return (<>

        <div className="img-thumbnail col-3-lg col-12-sm">
            <img src={process.env.PUBLIC_URL + image} alt={desc} />
            <h3>{title}</h3>
            <p>{desc}</p>

        </div>

    </>)
}


export default GalleryCard;