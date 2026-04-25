import { emailAddress24, gpsOn24, user24 } from '@esri/calcite-ui-icons';

export type OwnerProps = {
  label: string;
  owner: string;
  contactNumber: string;
  address: string;
};

export function buildOwnerInformation(owner: OwnerProps) {
  return [
    {
      label: 'Owner:',
      icon: user24,
      value: owner.owner,
    },
    {
      label: 'Email:',
      icon: emailAddress24,
      value: owner.contactNumber,
    },
    {
      label: 'Address:',
      icon: gpsOn24,
      value: owner.address,
    },
  ];
}
