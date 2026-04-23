import {
  fileReport24,
  information24,
  map24,
  organization24,
  parcel24,
} from '@esri/calcite-ui-icons';

export const icons = {
  office: organization24,
  parcel: parcel24,
  zone: map24,
  information: information24,
  report: fileReport24,
};

interface NavButtonProps {
  label: string;
  icon: keyof typeof icons;
  route?: string;
}

export const navbuttons: NavButtonProps[] = [
  { label: 'Offices', icon: 'office', route: '/office' },
  { label: 'Parcel Map', icon: 'parcel', route: '/parcel' },
  { label: 'Land Zone', icon: 'zone', route: '/zone' },
];

export const sidebuttons: NavButtonProps[] = [
  {
    label: 'Information',
    icon: 'information',
  },
  {
    label: 'Offices',
    icon: 'office',
  },
  {
    label: 'Report',
    icon: 'report',
  },
];
