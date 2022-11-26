export interface Introdata {
  title: string;
  animated: string[];
  description: string;
  your_img_url: string;
}

export interface Image {
  id: number;
  imageDark: string;
  imageLight: string;
}

type Instrument = {
  id: number;
  name: string;
  instument: string;
};

export interface Projects {
  id: number;
  name: string;
  prev: string;
  link: string;
  instuments?: Instrument[];
  link1?: string;
  link2?: string;
  link3?: string;
  link4?: string;
  video?: string;
  video1?: string;
  video2?: string;
}

// [
//   {
//     id: number;
//     name: string;
//     instument: string;
//   },
//   {
//     id?: number;
//     name?: string;
//     instument?: string;
//   }?
// ];
