import FloatingDashboard from "@/features/map/floating/FloatingDashboard";
import MapComponent from "@/features/map/MapComponents";
import MapNavbar from "@/features/map/navbar/MapNavbar";
import SearchPanel from "@/features/map/search/SearchSection";

export default function MapPage() {
  return (
    <div className="h-screen flex flex-col">
      <MapNavbar />

      <div className="relative flex-1">
        <MapComponent />

        <div className="absolute top-0 left-0 z-50">
          <SearchPanel />
          <FloatingDashboard />
        </div>
      </div>
    </div>
  );
}
