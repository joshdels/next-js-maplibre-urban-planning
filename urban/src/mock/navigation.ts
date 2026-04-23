import {
  map24,
  fileReport24,
  organization24,
  parcel24,
} from '@esri/calcite-ui-icons';

export const icons = {
  office: organization24,
  parcel: parcel24,
  zone: map24,
  report: fileReport24,
};

type NavButtonProps = {
  label: string;
  icon: keyof typeof icons;
};

export const navbuttons: NavButtonProps[] = [
  { label: 'Office', icon: 'office' },
  { label: 'Parcel Map', icon: 'parcel' },
  { label: 'Land Zone', icon: 'zone' },
  // { label: 'Report', icon: 'report' },
];
