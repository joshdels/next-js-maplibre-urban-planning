export interface OfficeProps {
  name: string;
  category: string[];
  contributors: string[];
  logo?: string;
}

export const offices: OfficeProps[] = [
  {
    name: 'Department of Health',
    logo: './image/building.png',
    category: ['health'],
    contributors: ['Master Joshua', 'Joshua De Leon', 'Dr. Joshua'],
  },
  {
    name: 'City Infrastructure Office',
    logo: './image/road.png',
    category: ['infrastructure'],
    contributors: ['Joshua, RABE', 'Joshua Great'],
  },
  {
    name: 'Tagum Water District',
    logo: './image/water.png',
    category: ['utility', 'waters'],
    contributors: ['Engr Joshua', 'Joshua De Leon'],
  },
];
