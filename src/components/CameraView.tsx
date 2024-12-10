import { CameraOptions, requestPermissions, isAvailable } from '@nativescript/camera';
import * as camera from '@nativescript/camera';
import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { ImageAsset, alert } from '@nativescript/core';

interface CameraViewProps {
  onImageCaptured: (image: ImageAsset) => void;
}

export function CameraView({ onImageCaptured }: CameraViewProps) {
  const [hasPermission, setHasPermission] = React.useState(false);

  React.useEffect(() => {
    // checkPermissions();
  }, []);

  const checkPermissions = async () => {
    // try {
    //   // First check if camera is available
    //   if (!isAvailable()) {
    //     alert({
    //       title: "Error",
    //       message: "Camera is not available on this device",
    //       okButtonText: "OK"
    //     });
    //     return;
    //   }

    //   // Request camera permissions
    //   const permission = await requestPermissions();
    //   setHasPermission(permission);
      
    //   if (!permission) {
    //     alert({
    //       title: "Permission Required",
    //       message: "Camera permission is required to take pictures",
    //       okButtonText: "OK"
    //     });
    //   }
    // } catch (err) {
    //   console.error('Error checking camera permissions:', err);
    // }
  };

  const takePicture = async () => {
    try {
      // if (!hasPermission) {
      //   await checkPermissions();
      //   return;
      // }

      const options: CameraOptions = {
        width: 300,
        height: 300,
        keepAspectRatio: true,
        saveToGallery: false,
        cameraFacing: 'rear'
      };

      const asset = await camera.takePicture(options);
      onImageCaptured(asset);
    } catch (err) {
      console.error('Error taking picture:', err);
      alert({
        title: "Error",
        message: "Failed to take picture: " + err.message,
        okButtonText: "OK"
      });
    }
  };

  return (
    <flexboxLayout style={styles.container}>
      <button
        className="bg-blue-500 text-white p-4 rounded-lg"
        onTap={takePicture}
      >
        Take Picture
      </button>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  }
});