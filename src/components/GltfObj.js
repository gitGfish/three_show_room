import { useGLTF } from "@react-three/drei";
import { folder, useControls } from "leva";
import { useEffect } from "react";
import * as THREE from "three";
import * as constants from "../constants/SceneConstants";
export default function GltfObj() {
  const { gltf_path } = useControls({
    gltf_path: folder({
      gltf_path:
        "https://vazxmixjsiawhamofees.supabase.co/storage/v1/object/public/models/zombie-car/model.gltf"
    })
  });
  const gltf = useGLTF(gltf_path);

  useEffect(() => {
    gltf.scene.traverse(function (object) {
      if (object.isMesh) {
        object.castShadow = true;
      }
    });

    let BBox = new THREE.Box3().setFromObject(gltf.scene);
    let BBox_center = BBox.getCenter(new THREE.Vector3());

    let deltaX = Math.abs(BBox.min.x - BBox.max.x);
    let deltaY = Math.abs(BBox.min.y - BBox.max.y);
    let deltaZ = Math.abs(BBox.min.z - BBox.max.z);
    let scale_factor =
      ((1 / Math.max(deltaX, deltaY, deltaZ)) * constants.ROOM_SIZE) / 4;
    gltf.scene.scale.set(scale_factor, scale_factor, scale_factor);
    gltf.scene.position.x =
      gltf.scene.position.x - BBox_center.x * scale_factor;
    gltf.scene.position.z =
      gltf.scene.position.z - BBox_center.z * scale_factor;
    gltf.scene.position.y = -BBox.min.y * scale_factor;
  }, [gltf]);

  return (
    <>
      <primitive object={gltf.scene} />
    </>
  );
}
