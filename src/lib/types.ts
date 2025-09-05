export interface Alumnus {
  id: number;
  name: string;
  email: string;
  graduationYear: number;
  major: string;
  company: string;
  jobTitle: string;
  location: string;
  skills: string[];
  avatarUrl: string;
  yearsOfExperience: number;
  availability: 'Active' | 'Passive' | 'Not looking';
}

export interface Event {
  id: number;
  title: string;
  date: string;
  type: 'Reunion' | 'Webinar' | 'Mentorship Program' | 'Networking';
  location: string;
  description: string;
  imageUrl: string;
}

export interface ProfileUpdateRequest {
  id: number;
  alumnusName: string;
  alumnusId: number;
  fieldName: string;
  oldValue: string;
  newValue: string;
  requestDate: string;
}
