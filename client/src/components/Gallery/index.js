import React from 'react';

import GalleryCard from "../GalleryCard";

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
        <div className="flex-row">

            {galleryContents.map((galleryContents) => (
                <GalleryCard
                    key={galleryContents._id}
                    image={galleryContents.image}
                    title={galleryContents.title}
                    desc={galleryContents.desc}

                />
            ))}

        </div>

    )

}
export default Gallery