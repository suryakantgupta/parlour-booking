import React from 'react';
import styles from './Gallery.module.scss';

const Gallery = () => {

    const images = [
        '/galleryimages/1.jpeg',
        '/galleryimages/2.jpeg',
        '/galleryimages/3.jpeg',
        '/galleryimages/4.jpeg',
        '/galleryimages/5.jpeg',
        '/galleryimages/6.jpeg',
        '/galleryimages/7.jpeg',
        '/galleryimages/8.jpeg',
        '/galleryimages/9.jpeg',
        '/galleryimages/10.jpeg',
        '/galleryimages/11.jpeg',
        '/galleryimages/12.jpeg',
        '/galleryimages/13.jpeg',
        '/galleryimages/14.jpeg',
        '/galleryimages/15.jpeg',
        '/galleryimages/16.jpeg',
        '/galleryimages/17.jpeg',
        '/galleryimages/18.jpeg',
        '/galleryimages/19.jpeg',
        '/galleryimages/20.jpeg',
        '/galleryimages/21.jpeg',
        '/galleryimages/22.jpeg',
        '/galleryimages/23.jpeg'
    ]

    return (
        <div
            className={styles.gallery_container}
        >
            <div
                className={styles.my_work_text}
            >
                MY WORK
            </div>

            <div
                className={styles.image_container}
            >
                {Array.from(Array(43).keys()).map((data, index) => {
                    if(!index){
                        return
                    }
                    return (
                        <img
                            className={styles.images}
                            src={`/galleryimages/${data}.jpeg`}
                        />
                    )
                })}

            </div>
        </div>
    )
}

export default Gallery