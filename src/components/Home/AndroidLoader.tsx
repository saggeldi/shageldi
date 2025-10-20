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

  return <primitive object={obj} {...props} />;
}
