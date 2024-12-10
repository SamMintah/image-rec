import * as imagepicker from "@nativescript/imagepicker";
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { ImageAsset } from '@nativescript/core';

interface ImagePickerProps {
  onImageSelected: (image: ImageAsset) => void;
}

export function ImagePicker({ onImageSelected }: ImagePickerProps) {
  const selectImage = async () => {
    const context = imagepicker.create({
      mode: "single"
    });

    try {
      const selection = await context.present();
      if (selection.length > 0) {
        onImageSelected(selection[0]);
      }
    } catch (err) {
      console.error('Error selecting image:', err);
    }
  };

  return (
    <button
      className="bg-green-500 text-white p-4 rounded-lg mt-4"
      onTap={selectImage}
    >
      Select from Gallery
    </button>
  );
}

const styles = StyleSheet.create({
  container: {
    margin: 10
  }
});