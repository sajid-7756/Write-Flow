"use client";
import Image from "next/image";
import React, { useState } from "react";

export default function BlogDetailImage({ blog }) {
  console.log(blog);
  const [imgSrc, setImgSrc] = useState(
    blog?.image ||
      "https://i.ibb.co.com/xqK8n5hs/be1c0e59-9d14-4c37-b01a-9e9bd46ec3dc.jpg"
  );
  return (
    <>
      <Image
        src={imgSrc}
        alt={blog.title}
        width={800}
        height={600}
        className="object-cover rounded-t-xl"
        onError={() =>
          setImgSrc(
            "https://i.ibb.co.com/xqK8n5hs/be1c0e59-9d14-4c37-b01a-9e9bd46ec3dc.jpg"
          )
        }
        unoptimized
      />
    </>
  );
}
