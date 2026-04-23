export interface OfficeProps {
  name: string;
  category: string[];
  contributors: string[];
}

export const offices: OfficeProps[] = [
  {
    name: 'Department of Health',
    category: ['health'],
    contributors: ['Joshua', 'Joshua De Leon', 'Dr. Joshua'],
  },
  {
    name: 'Department of Agriculture',
    category: ['agricutlure', 'irrigation'],
    contributors: ['Joshua, RABE', 'Joshua Great'],
  },
  {
    name: 'Tagum Water District',
    category: ['utility', 'waters'],
    contributors: ['Engr Joshua', 'Joshua De Leon'],
  },
];
