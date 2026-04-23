import {
  map24,
  organization24,
  parcel24,
} from '@esri/calcite-ui-icons';

export const icons = {
  office: organization24,
  parcel: parcel24,
  zone: map24,
};

type NavButtonProps = {
  label: string;
  icon: keyof typeof icons;
  route: string;
};

export const navbuttons: NavButtonProps[] = [
  { label: 'Offices', icon: 'office', route: "/office" },
  { label: 'Parcel Map', icon: 'parcel', route: "/parcel"},
  { label: 'Land Zone', icon: 'zone', route: "/zone" },
];
