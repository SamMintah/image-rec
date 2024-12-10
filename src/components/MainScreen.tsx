import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { ImageAsset } from '@nativescript/core';
import { CameraView } from "./CameraView";
import { ImagePicker } from "./ImagePicker";
import { ImageRecognition } from "./ImageRecognition";

export function MainScreen() {
  const [selectedImage, setSelectedImage] = React.useState<ImageAsset | null>(null);

  const handleImageSelected = (image: ImageAsset) => {
    setSelectedImage(image);
  };

  return (
    <scrollView>
      <stackLayout style={styles.container}>
        <label className="text-2xl font-bold mb-6">
          Image Recognition App
        </label>
        
        <CameraView onImageCaptured={handleImageSelected} />
        <ImagePicker onImageSelected={handleImageSelected} />
        
        {selectedImage && (
          <stackLayout className="mt-6">
            <image
              src={selectedImage}
              stretch="aspectFit"
              width={300}
              height={300}
            />
            <ImageRecognition image={selectedImage} />
          </stackLayout>
        )}
      </stackLayout>
    </scrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: "center"
  }
});