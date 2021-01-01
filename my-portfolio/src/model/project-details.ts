export interface Slide {
  src: string;
}

export interface ProjectDetails {
  projectName: string;
  description: string;
  slides: Slide[];
}
