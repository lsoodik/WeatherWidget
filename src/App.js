import Card from "./components/Card/Card";
import GetGeolocation from "./components/getGeolocation/getGeolocation";
import Input from "./components/input/input";
export default function App() {
  return (
    <div className={"container-fluid"}>
      <Input />
      <GetGeolocation />
      <Card/>
    </div>
  );
}
