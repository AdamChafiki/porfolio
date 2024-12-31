export interface ProjectImage {
  url: string;
  caption: string;
}

export interface Project {
  title: string;
  description: string;
  images: ProjectImage[];
  github: string;
  live: string;
  technologies: string[];
}