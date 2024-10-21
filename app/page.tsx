'use client'

import { useState } from 'react'
import Image from 'next/image'

const mofundoImages = [
  "https://drive.google.com/uc?export=view&id=1rX2x6tlrXkL5wO7uwJbsx7bJgpcGEkdh",
  "https://drive.google.com/uc?export=view&id=1INOJaBCxZKJtDFaVnGNOKdemyBmpwpZ7",
  "https://drive.google.com/uc?export=view&id=15TEMCHf2yrJEKFUGR7xSCCxrDJTDsRlj"
]

export default function Home() {
  const [currentImage, setCurrentImage] = useState('')

  const generateRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * mofundoImages.length)
    setCurrentImage(mofundoImages[randomIndex])
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">MOFUNDO Photo Generator</h1>
        <p className="mb-6 text-gray-600">Click the button to generate a random MOFUNDO photo. Click again for a new version!</p>
        
        <button 
          onClick={generateRandomImage} 
          className="mb-6 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors"
        >
          Generate MOFUNDO
        </button>
        
        {currentImage && (
          <div className="mt-6">
            <Image 
              src={currentImage} 
              alt="Random MOFUNDO" 
              width={300}
              height={300}
              className="w-full h-auto rounded-lg mb-4"
            />
            <a 
              href={currentImage} 
              download="mofundo.jpg"
              className="inline-block bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors"
            >
              Save this photo
            </a>
          </div>
        )}
      </div>
    </div>
  )
}