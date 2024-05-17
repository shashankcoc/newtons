import React, { useRef, useEffect, useState } from "react";
import * as tf from "@tensorflow/tfjs";
import * as cocossd from "@tensorflow-models/coco-ssd";
import Webcam from "react-webcam";
import "./detection.css";
import { drawRect } from "../../utilities";
import Navbar from "../Navbar/Navbar";
function Detection() {
  const webcamRef = useRef(null);
  const canvasRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);

  // Main function
  const runCoco = async () => {
    setIsLoading(false);
    const net = await cocossd.load();
    console.log("Handpose model loaded.");
    //  Loop and detect hands
    setInterval(() => {
      detect(net);
    }, 10);
  };

  const detect = async (net) => {
    // Check data is available
    if (
      typeof webcamRef.current !== "undefined" &&
      webcamRef.current !== null &&
      webcamRef.current.video.readyState === 4
    ) {
      // Get Video Properties
      const video = webcamRef.current.video;
      const videoWidth = webcamRef.current.video.videoWidth;
      const videoHeight = webcamRef.current.video.videoHeight;

      // Set video width
      webcamRef.current.video.width = videoWidth;
      webcamRef.current.video.height = videoHeight;

      // Set canvas height and width
      canvasRef.current.width = videoWidth;
      canvasRef.current.height = videoHeight;

      // Make Detections
      const obj = await net.detect(video);

      // Draw mesh
      const ctx = canvasRef.current.getContext("2d");
      drawRect(obj, ctx);
    }
  };

  useEffect(() => {
    runCoco();
  }, []);
  if (isLoading) {
    return <div style={{ color: "white" }}>Loading...</div>;
  } else {
    return (
      <div className="App">
        <Navbar />
        <header className="App-header">
          <div className="object-titles">
            <h3 className="object-titles-1">Live Object Detection</h3>
            <h4 className="object-titles-2">
              Please wait while Loooooooooding large model
            </h4>
            <p className="object-titles-3">
              Try the model with different objects
            </p>
          </div>
          <Webcam
            ref={webcamRef}
            muted={true}
            style={{
              position: "absolute",
              marginLeft: "auto",
              marginRight: "auto",
              left: 0,
              right: 0,
              textAlign: "center",
              zindex: 9,
              width: 640,
              height: 480,
            }}
          />
          <canvas ref={canvasRef} className="canvas" />
        </header>
      </div>
    );
  }
}

export default Detection;
