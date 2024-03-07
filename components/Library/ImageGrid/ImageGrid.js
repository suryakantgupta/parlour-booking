import { Dialog, DialogContent, DialogTitle, IconButton, ImageList, ImageListItem } from '@mui/material'
import React, { useState } from 'react'
import Lightbox from 'react-image-lightbox'
import { Close } from '@mui/icons-material'

const ImageGrid = (props) => {

    const [showImage, setShowImage] = useState(false)
    const [selectedImage, setSelectedImage] = useState('')

    return (
        <div>
            {/* {Array(props.times).fill(0).map((item, i) => (
            <img
            src={}
            />
        ))} */}

            <ImageList
                sx={{ width: 300, height: 450 }}
                cols={3}
                rowHeight={164}
                variant="woven"
            >
                {Array.from(Array(43).keys()).map((data, index) => {
                    if (!index) {
                        return
                    }
                    return (
                        <ImageListItem
                            key={data}
                            onClick={() => {
                                setShowImage(true)
                                setSelectedImage(`/galleryimages/${data}.jpeg`)
                            }}
                        >
                            <img
                                src={`/galleryimages/${data}.jpeg`}
                                loading="lazy"
                            />
                        </ImageListItem>
                    )
                })}
            </ImageList>

            <Dialog
                open={showImage}
                onClose={() => {
                    setShowImage(false)
                }}
            >
                <DialogTitle sx={{ m: 0, p: 2 }}>
                    <IconButton
                        onClick={() => {
                            setShowImage(false)
                        }}
                        sx={{
                            position: 'absolute',
                            right: 8,
                            top: 8,
                            color: (theme) => theme.palette.grey[500],
                        }}
                    >
                        <Close />
                    </IconButton>
                </DialogTitle>
                <DialogContent>
                    <img
                        style={{
                            width: '100%',
                            objectFit: 'contain'
                        }}
                        src={selectedImage}
                    />
                </DialogContent>
            </Dialog>
        </div>
    )
}

export default ImageGrid