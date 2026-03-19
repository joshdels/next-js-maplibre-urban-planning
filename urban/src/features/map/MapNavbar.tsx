import { map24, fileReport24, signOut24, browserMap24 } from "@esri/calcite-ui-icons";

export default function MapNavbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-white text-black shadow-sm h-[8vh]">
      <h1 className="text-xl font-bold">Urban Lands</h1>

      <div className="flex items-center gap-10">
        <div className="flex flex-col items-center cursor-pointer hover:text-blue-600">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d={map24} />
          </svg>
          <span className="text-sm mt-1">Parcel Map</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer hover:text-blue-600">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d={browserMap24} />
          </svg>
          <span className="text-sm mt-1">Land Zone</span>
        </div>

        <div className="flex flex-col items-center cursor-pointer hover:text-blue-600">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
            <path d={fileReport24} />
          </svg>
          <span className="text-sm mt-1">Reports</span>
        </div>
      </div>

      <div className="flex flex-col items-center cursor-pointer hover:text-red-600">
        <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
          <path d={signOut24} />
        </svg>
        <span className="text-sm mt-1">Logout</span>
      </div>
    </nav>
  );
}
