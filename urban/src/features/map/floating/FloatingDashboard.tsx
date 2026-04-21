import { x24 } from '@esri/calcite-ui-icons';
import FloatingSideBar from './FloatingSideBar';
import OwnerInformation from './OwnerInformation';
import LandInformation from './LandInformation';

export default function FloatingDashboard() {
  return (
    <div className="bg-white text-black m-5 w-[30vw] h-[80vh] rounded-lg flex flex-row gap-5">
      <aside className="w-[20%] bg-gray-200 p-3 rounded-lg">
        <FloatingSideBar />
      </aside>

      <main className="flex-1 bg-white p-3 rounded-lg">
        <section className="flex flex-row justify-between mb-5">
          <h1 className="text-2xl font-black">Parcel Overview</h1>
          <div className="flex flex-row items-center">
            <div className="cursor-pointer hover:text-blue-600">
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d={x24} />
              </svg>
            </div>
          </div>
        </section>
        <section>
          <OwnerInformation />
          <LandInformation />
        </section>
      </main>
    </div>
  );
}
