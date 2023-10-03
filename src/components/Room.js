import React from "react";
import { Plane } from "@react-three/drei";
import * as constants from "../constants/SceneConstants";
export default function Room() {
  const walls = [
    {
      rotation_x: -Math.PI / 2,
      rotation_y: 0,
      position: [0, 0, 0],
      size: [constants.ROOM_SIZE, constants.ROOM_SIZE],
      color: constants.GROUND_COLOR
    },
    {
      rotation_x: Math.PI * 2,
      rotation_y: -Math.PI / 2,
      position: [constants.ROOM_SIZE / 2, constants.ROOM_SIZE / 4, 0]
    },
    {
      rotation_x: 0,
      rotation_y: Math.PI / 2,
      position: [-constants.ROOM_SIZE / 2, constants.ROOM_SIZE / 4, 0]
    },
    {
      rotation_x: 0,
      rotation_y: 0,
      position: [0, constants.ROOM_SIZE / 4, -constants.ROOM_SIZE / 2]
    },
    {
      rotation_x: 0,
      rotation_y: Math.PI,
      position: [0, constants.ROOM_SIZE / 4, constants.ROOM_SIZE / 2]
    },
    {
      rotation_x: Math.PI / -2,
      rotation_y: Math.PI,
      position: [0, constants.ROOM_SIZE / 2, 0],
      size: [constants.ROOM_SIZE, constants.ROOM_SIZE]
    }
  ];

  return (
    <>
      {walls.map((translation, key) => {
        return (
          <mesh
            key={key}
            rotation-x={translation.rotation_x}
            rotation-y={translation.rotation_y}
            position={translation.position}
            receiveShadow
          >
            <Plane
              args={
                translation.size
                  ? translation.size
                  : [constants.ROOM_SIZE, constants.ROOM_SIZE / 2]
              }
              receiveShadow
            >
              <meshPhongMaterial
                receiveShadow
                attach="material"
                color={
                  translation.color ? translation.color : constants.WALL_COLOR
                }
              />
            </Plane>
          </mesh>
        );
      })}
    </>
  );
}
