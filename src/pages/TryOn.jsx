// src/pages/TryOn.jsx
import * as bodyPix from '@tensorflow-models/body-pix';
import '@tensorflow/tfjs';
import { useRef, useEffect } from 'react';

const TryOn = () => {
  const videoRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const setup = async () => {
      const net = await bodyPix.load();
      const video = videoRef.current;

      navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
        video.srcObject = stream;
        video.play();

        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');

        const segment = async () => {
          const segmentation = await net.segmentPerson(video);
          const mask = bodyPix.toMask(segmentation);
          ctx.putImageData(mask, 0, 0);
          requestAnimationFrame(segment);
        };

        segment();
      });
    };

    setup();
  }, []);

  return (
    <div className="p-8 text-center">
      <h2 className="text-2xl mb-4">Virtual Try-On</h2>
      <video ref={videoRef} className="w-64 h-64 mx-auto" />
      <canvas ref={canvasRef} className="w-64 h-64 mx-auto mt-4" />
      <p className="text-sm text-gray-400 mt-2">T-shirt overlay will appear in this demo (mockup stage)</p>
    </div>
  );
};

export default TryOn;
