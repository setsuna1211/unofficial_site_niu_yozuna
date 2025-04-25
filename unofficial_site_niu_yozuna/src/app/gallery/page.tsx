"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface ImageData {
  src: string;
  title: string;
}

export default function Home() {
  const [messageImages, setMessageImages] = useState<ImageData[]>([]);
  const [galleryImages, setGalleryImages] = useState<ImageData[]>([]);
  const [selectedImage, setSelectedImage] = useState<ImageData | null>(null);

  useEffect(() => {
    async function fetchImages(
      url: string,
      setImages: (images: ImageData[]) => void
    ) {
      try {
        const res = await fetch(url);
        const data = await res.json();
        if (res.ok) {
          setImages(data.images);
        }
      } catch (error) {
        console.error("Failed to load images", error);
      }
    }
    fetchImages("/api/images/message", setMessageImages);
    fetchImages("/api/images/gallery", setGalleryImages);
  }, []);
  const closeModal = () => setSelectedImage(null);

  return (
    <div className="min-h-screen">
      <main className="relative z-20 container mx-auto px-4 py-8">
        <section className="text-center py-12">
          <motion.h2
            className="text-4xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            寄せ書き
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {messageImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="flex justify-center items-center w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.title}
                      width={300}
                      height={200}
                      className="rounded-lg cursor-pointer object-cover"
                      onClick={() => setSelectedImage(image)}
                    />
                  </div>
                  <p className="mt-2 font-bold">{image.title}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.h2
            className="text-4xl font-extrabold mb-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            フォトギャラリー
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <div className="flex justify-center items-center w-full h-full">
                    <Image
                      src={image.src}
                      alt={image.title}
                      width={300}
                      height={200}
                      className="rounded-lg cursor-pointer object-cover"
                      onClick={() => setSelectedImage(image)}
                    />
                  </div>
                  <p className="mt-2 font-bold">{image.title}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {selectedImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.3 }}
              onClick={closeModal}
            >
              <motion.div
                className="max-w-full max-h-full"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 50 }}
                transition={{ duration: 0.3 }}
              >
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  width={900}
                  height={500}
                  className="w-auto h-auto max-w-full max-h-[80vh] object-contain"
                />
                <p className="mt-4 text-center text-xl font-bold">
                  {selectedImage.title}
                </p>
              </motion.div>
            </motion.div>
          )}
        </section>
      </main>
    </div>
  );
}
