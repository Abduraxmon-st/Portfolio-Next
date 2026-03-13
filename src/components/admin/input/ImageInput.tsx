"use client";
import { useRef } from "react";
import { Download } from "lucide-react";

interface ImageUploaderProps {
  images: File[];
  setImages: (images: File[]) => void;
}

export default function ImageUploader({ images, setImages }: ImageUploaderProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFiles = (files: FileList | null) => {
    if (!files) return;
    const newImages: File[] = Array.from(files).filter(file => file.type.startsWith("image/"));
    if (newImages.length === 0) {
      alert("Please select image files");
      return;
    }
    setImages([...images, ...newImages]); // arrayga qo‘shib boradi
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-full w-full border-2 border-dashed border-gray-500 rounded-lg cursor-pointer hover:border-gray-300 transition-colors"
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      onClick={() => inputRef.current?.click()}
    >
      <div className="flex flex-col items-center justify-center h-full text-gray-400">
        <Download size={60} className="opacity-50" />
        <p>Drag & drop here</p>
        <p>or <span className="text-thirtyColor">Choose</span></p>
      </div>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        ref={inputRef}
        multiple
        onChange={(e) => handleFiles(e.target.files)}
      />
    </div>
  );
}