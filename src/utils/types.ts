export interface IMyInfo {
  name: string;
  job: string;
  jobCompany: string;
  photo: string;
  location: string;
  email: string;
  github: string;
  githubAccount: string;
  linkedin: string;
  aboutMe: string;
}

interface ISearchTags {
  tags: string[];
}

export interface ISkill extends ISearchTags {
  id: number;
  name: string;
  time: string;
  reason: string;
}

export interface IProject extends ISearchTags {
  id: number;
  name: string;
  description: string;
  link: string;
  skills: number[];
}

export interface ICourse extends ISearchTags {
  id: number;
  name: string;
  platform: string;
  dateCompleted: string;
  link: string;
  certificate: string;
}

export interface ICompany extends ISearchTags {
  id: number;
  name: string;
  position: string;
  responsibilities: string[];
  period: string;
  time: string;
  logo: string;
}

export interface IExercise extends ISearchTags {
  id: number;
  name: string;
  description: string;
  link: string;
}

export interface IEducation extends ISearchTags {
  university: string;
  dateGraduated: string;
  degree: string;
}

export interface SearchResultsProps {
  searchTerm: string;
}
