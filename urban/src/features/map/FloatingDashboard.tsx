import { ellipsis32, x24 } from "@esri/calcite-ui-icons";
import LandInformation from "./components/LandInformation";

export default function FloatingDashboard() {
  return (
    <div className="bg-white text-black p-5 m-5 w-[40vw] lg:w-[30vw] h-[87vh] rounded-lg">
      <section className="flex flex-row justify-between mb-5">
        <h1 className="text-2xl font-black">Parcel Overview</h1>
        <div className="flex flex-row items-center">
          {/* <div className="cursor-pointer hover:text-blue-600">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d={ellipsis32} />
            </svg>
          </div> */}
          <div className="cursor-pointer hover:text-blue-600">
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
              <path d={x24} />
            </svg>
          </div>
        </div>
      </section>
      <main>
        <LandInformation />
      </main>
    </div>
  );
}
