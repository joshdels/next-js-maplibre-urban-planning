import {
  fileReport24,
  dateTime24,
  money24,
  parcel24,
  information24,
  layerVectorTile24,
} from '@esri/calcite-ui-icons';

export type Parcel = {
  parcelId: string;
  landUseType: string;
  totalHectares: number;
  assessedYear: number;
  assessedValue: number;
  typeOfDeed: string;
};

export function buildLandInformation(parcel: Parcel) {
  return [
    { label: 'Parcel ID:', value: parcel.parcelId, icon: information24 },
    { label: 'Land Use:', value: parcel.landUseType, icon: layerVectorTile24 },
    { label: 'Area:', value: `${parcel.totalHectares} sqm`, icon: parcel24 },
    { label: 'Assessed Year:', value: parcel.assessedYear, icon: dateTime24 },
    { label: 'Value:', value: `₱ ${parcel.assessedValue}`, icon: money24 },
    { label: 'Deed:', value: parcel.typeOfDeed, icon: fileReport24 },
  ];
}
