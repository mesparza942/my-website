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

export interface ISkills extends ISearchTags {
  mainSkills: { list: string[] }[];
  list: {
    id: number;
    name: string;
    time: string;
    tags: string[];
    reason: string;
  }[];
}

export interface IProjects extends ISearchTags {
  list: {
    id: number;
    name: string;
    description: string;
    link: string;
    skills: number[];
  }[];
}

export interface ICourses extends ISearchTags {
  list: {
    id: number;
    name: string;
    platform: string;
    dateCompleted: string;
    link: string;
    certificate: string;
  }[];
}

export interface ICompanies extends ISearchTags {
  list: {
    id: number;
    name: string;
    position: string;
    responsibilities: string;
    period: string;
    time: string;
    logo: string;
    tags: string[];
  }[];
}

export interface IExercises extends ISearchTags {
  list: {
    id: number;
    name: string;
    description: string;
    link: string;
    tags: string[];
  }[];
}

export interface IEducation {
  university: string;
  dateGraduated: string;
  degree: string;
}

export interface SearchResultsProps {
  searchTerm: string;
}
