import {
  fileReport24,
  areaHashFilled24,
  dateTime24,
  money24,
  colorCodedMap24,
  parcel24,
  information24,
  h3Hexagon24,
  layerVectorTile24,
} from "@esri/calcite-ui-icons";

export interface Parcel {
  parcelId: string;
  landUseType: string;
  totalHectares: number;
  assessedYear: number;
  assessedValue: number;
  typeOfDeed: string;
}

export const mockParcels: Parcel[] = [
  {
    parcelId: "dvo-250-302",
    landUseType: "Residential Land",
    totalHectares: 50.52,
    assessedYear: 2024,
    assessedValue: 25000,
    typeOfDeed: "Deed of Sale",
  },
  {
    parcelId: "dvo-120-111",
    landUseType: "Agricultural Land",
    totalHectares: 120.1,
    assessedYear: 2023,
    assessedValue: 18000,
    typeOfDeed: "Tax Declaration",
  },
];

export function buildLandInformation(parcel: Parcel) {
  return [
    { label: "Parcel ID:", value: parcel.parcelId, icon: information24 },
    { label: "Land Use:", value: parcel.landUseType, icon: layerVectorTile24 },
    { label: "Area:", value: `${parcel.totalHectares} ha`, icon: parcel24 },
    { label: "Assessed Year:", value: parcel.assessedYear, icon: dateTime24 },
    { label: "Value:", value: `₱ ${parcel.assessedValue}`, icon: money24 },
    { label: "Deed:", value: parcel.typeOfDeed, icon: fileReport24 },
  ];
}
