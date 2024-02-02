import { DeviceFrameset } from "react-device-frameset";
import "react-device-frameset/styles/marvel-devices.min.css";

const Emulator = () => {
  return (
    <DeviceFrameset device="iPhone X" color="gold" height={650} width={340}>
      <div>Hello world</div>
    </DeviceFrameset>
  );
};

export default Emulator;
