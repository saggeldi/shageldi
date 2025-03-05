import { useLoader } from "@react-three/fiber";
import { useSelector } from "react-redux";
import { OBJLoader, MTLLoader } from "three-stdlib";
import { RootState } from "../../features/store";

interface AndroidModelViewerProps {
  [key: string]: any;
}

export function AndroidModelViewer(props: AndroidModelViewerProps) {
  const theme = useSelector((state: RootState) => state.theme);

  const materials = useLoader(
    MTLLoader,
    `models/Android/${
      theme.value == "dark" ? "android dark.mtl" : "android.mtl"
    }`
  );

  const obj = useLoader(
    OBJLoader,
    `models/Android/${
      theme.value == "dark" ? "android dark.obj" : "android.obj"
    }`,
    (loader) => {
      materials.preload();

      loader.setMaterials(materials);
    }
  );
  //   const mtlLoader = useLoader(MTLLoader, "models/Android/android.mtl");

  //   useLayoutEffect(() => {
  //     obj.traverse((child) => {
  //       if (child.isMesh) {
  //         (child as THREE.Mesh).castShadow = (child as THREE.Mesh).receiveShadow =
  //           true;
  //         // texture.encoding = THREE.sRGBEncoding;
  //         // (child as THREE.Mesh).material.map = texture;
  //         (child as THREE.Mesh).material.toneMapped = false;
  //       }
  //     });
  //   }, [obj]);

  return <primitive object={obj} {...props} />;
}
