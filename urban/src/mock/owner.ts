import { emailAddress24, person24, user24 } from "@esri/calcite-ui-icons";

export interface OwnerProps {
  firstName: string;
  lastName: string;
  street: string;
  barangay: string;
  municipalOrCity: string;
  province: string;
  contactNumber: string;
}

export const owners: OwnerProps[] = [
  {
    firstName: "Joshua",
    lastName: "De Leon",
    street: "010 J-Village",
    barangay: "Visayan Village",
    municipalOrCity: "Tagum City",
    province: "Davao del Norte",
    contactNumber: "09123123123",
  },
  {
    firstName: "George",
    lastName: "Alcancia",
    street: "010 J-Village",
    barangay: "Visayan Village",
    municipalOrCity: "General Santos City",
    province: "Davao del Norte",
    contactNumber: "09234234134",
  },
];

export function buildOwnerInformation(owner: OwnerProps) {
  return [
    { icon: user24, value: ` ${owner.firstName}  ${owner.lastName}` },
    {
      icon: emailAddress24,
      value: ` ${owner.street} ${owner.street} ${owner.barangay} ${owner.municipalOrCity}`,
    },
  ];
}
