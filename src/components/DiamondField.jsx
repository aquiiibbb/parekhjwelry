import React from 'react';
import './DiamondField.css';
import video from '../assest/diamonds-falling.mp4'; // Updated path & filename

// Fallback online video and poster (Pixabay / Pexels)
const FALLBACK_VIDEO_URL = 'https://cdn.pixabay.com/video/2016/05/12/3125-166335844_large.mp4';
const DIAMOND_VIDEO_POSTER =
  'https://images.pexels.com/videos/855854/free-video-855854.jpg?auto=compress&cs=tinysrgb&h=800&fit=crop';

// Main Diamond Field Component - video background of falling diamonds
export default function DiamondField() {
  return (
    <div className="diamond-field" aria-hidden="true">
      <video
        className="diamond-video"
        poster={DIAMOND_VIDEO_POSTER}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={video} type="video/mp4" />
        <source src={FALLBACK_VIDEO_URL} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}