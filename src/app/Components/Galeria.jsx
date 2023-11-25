"use client";
import React, { useState } from "react";
import { AiOutlineExpandAlt } from "react-icons/ai";
import Lightbox from "yet-another-react-lightbox";
import Zoom from "yet-another-react-lightbox/plugins/zoom";
import "yet-another-react-lightbox/styles.css";

const Galeria = () => {
  const [open, setOpen] = useState(false);
  const [image, setImage] = useState("");

  const galleryTab = [
    // you can add more image if you want
    {
      imageUrl:
        "https://telemedellin.tv/wp-content/uploads/2023/01/WhatsApp-Image-2023-01-17-at-7.19.13-PM.jpeg",
      type: "Nature",
      title: "Beautiful Work",
    },
    {
      imageUrl:
        "https://cdnwordpresstest-f0ekdgevcngegudb.z01.azurefd.net/es/wp-content/uploads/2023/05/Panoramica-Mural-Constelaciones-2.jpg",
      type: "Nature",
      title: "Beautiful Work",
    },
    {
      imageUrl:
        "https://estaticos.elcolombiano.com/binrepository/848x565/34c0/780d565/none/11101/XCGB/camanrique-grafitis-10_42336509_20230509190445.jpg",
      type: "Nature",
      title: "Beautiful Work",
    },
    {
      imageUrl:
        "https://estaticos.elcolombiano.com/binrepository/848x562/0c0/0d0/none/11101/TUBD/camanrique-grafitis-33_42341461_20230512104354.jpg",
      type: "Nature",
      title: "Beautiful Work",
    },
    {
      imageUrl:
        "https://estaticos.elcolombiano.com/binrepository/848x565/34c0/780d565/none/11101/VKGB/camanrique-grafitis-18_42336485_20230509190442.jpg",
      type: "Nature",
      title: "Beautiful Work",
    },
  ];

  const slides = galleryTab.map((item) => ({
    src: item.imageUrl,
    width: 3840,
    height: 2560,
    srcSet: [
      { src: item.imageUrl, width: 320, height: 213 },
      { src: item.imageUrl, width: 640, height: 426 },
      { src: item.imageUrl, width: 1200, height: 800 },
      { src: item.imageUrl, width: 2048, height: 1365 },
      { src: item.imageUrl, width: 3840, height: 2560 },
    ],
  }));

  return (
    <div className="w-full">
      <div className=" ">
        <div className="flex flex-col md:grid md:grid-cols-3  gap-0 flex-wrap mx-2 md:mx-0">
          {galleryTab.map((x, index) => {
            return (
              <div key={index} className="h-52 relative">
                <div className="group h-full">
                  <div
                    className="bg-cover bg-center h-full w-full bg-no-repeat"
                    style={{ backgroundImage: `url("${x.imageUrl}")` }}
                  >
                    <div className="text-3xl text-white absolute bottom-0 left-2 z-10">
                      <div>{x.type}</div>
                      <div>{x.title}</div>
                    </div>
                  </div>
                  <div
                    className="bg-black opacity-0 group-hover:opacity-75 absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out"
                    onClick={() => {
                      setOpen(true);
                      setImage(x.imageUrl);
                    }}
                  >
                    <p className="text-white">
                      <AiOutlineExpandAlt className="text-5xl border w-16 h-16 bg-neutral-500 hover:bg-white hover:text-black p-3 cursor-pointer rounded-full" />
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Lightbox
        open={open}
        close={() => setOpen(false)}
        plugins={[Zoom]}
        showPrevNext={false}
        slides={slides}
      />
    </div>
  );
};

export default Galeria;
