import React, { useState } from "react";
import ModalVideo from "react-modal-video";
import "react-modal-video/scss/modal-video.scss";

function VideoModal(props) {
  const [isOpen, setOpen] = useState(false)
  return (
    <React.Fragment>
      <ModalVideo 
      channel='youtube' autoplay isOpen={isOpen} 
      videoId={props.videoId} onClose={() => setOpen(false)} />
   </React.Fragment>
  )
}

export default VideoModal;