import GetGeolocation from "./components/getGeolocation/getGeolocation";
import Header from "./components/header/header";
export default function App() {
  return (
    <div className={"container"}>
      <Header />
      <GetGeolocation />
    </div>
  );
}
