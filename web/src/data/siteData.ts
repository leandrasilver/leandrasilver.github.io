export type SkillIcon =
  | { type: 'img'; value: string; alt: string }
  | { type: 'icon'; value: string }
  | { type: 'text'; value: string }

export type Skill = {
  name: string
  icon: SkillIcon
}

export type SkillCategory = {
  title: string
  items: Skill[]
}

export type Project = {
  title: string
  description: string
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Backend',
    items: [
      { name: 'NestJS', icon: { type: 'img', value: 'https://cdn.simpleicons.org/nestjs/E0234E', alt: 'NestJS logo' } },
      { name: 'Node.js', icon: { type: 'img', value: 'https://cdn.simpleicons.org/nodedotjs/5FA04E', alt: 'Node.js logo' } },
      { name: 'TypeScript', icon: { type: 'img', value: 'https://cdn.simpleicons.org/typescript/3178C6', alt: 'TypeScript logo' } },
      { name: 'REST APIs', icon: { type: 'img', value: 'https://cdn.simpleicons.org/openapiinitiative/6BA539', alt: 'REST APIs logo' } },
      { name: 'PostgreSQL', icon: { type: 'img', value: 'https://cdn.simpleicons.org/postgresql/4169E1', alt: 'PostgreSQL logo' } },
      { name: 'TypeORM', icon: { type: 'img', value: 'https://cdn.simpleicons.org/typeorm/FE0902', alt: 'TypeORM logo' } },
      { name: 'MongoDB', icon: { type: 'img', value: 'https://cdn.simpleicons.org/mongodb/47A248', alt: 'MongoDB logo' } },
      { name: 'Microservices', icon: { type: 'img', value: 'https://cdn.simpleicons.org/kubernetes/326CE5', alt: 'Microservices icon' } },
      { name: 'OOD', icon: { type: 'text', value: '{ }' } },
    ],
  },
  {
    title: 'Frontend',
    items: [
      { name: 'React', icon: { type: 'img', value: 'https://cdn.simpleicons.org/react/61DAFB', alt: 'React logo' } },
      { name: 'Angular', icon: { type: 'img', value: 'https://cdn.simpleicons.org/angular/DD0031', alt: 'Angular logo' } },
      { name: 'HTML5', icon: { type: 'img', value: 'https://cdn.simpleicons.org/html5/E34F26', alt: 'HTML5 logo' } },
      { name: 'CSS / SCSS', icon: { type: 'img', value: 'https://cdn.simpleicons.org/css/1572B6', alt: 'CSS logo' } },
      { name: 'JavaScript', icon: { type: 'img', value: 'https://cdn.simpleicons.org/javascript/F7DF1E', alt: 'JavaScript logo' } },
      { name: 'TypeScript', icon: { type: 'img', value: 'https://cdn.simpleicons.org/typescript/3178C6', alt: 'TypeScript logo' } },
      { name: 'Unit Testing', icon: { type: 'img', value: 'https://cdn.simpleicons.org/jest/C21325', alt: 'Unit testing logo' } },
      { name: 'WCAG / AODA', icon: { type: 'icon', value: 'fa fa-universal-access' } },
      { name: 'SDLC', icon: { type: 'img', value: 'https://cdn.simpleicons.org/atlassian/0052CC', alt: 'SDLC icon' } },
    ],
  },
  {
    title: 'Cloud and DevOps',
    items: [
      { name: 'AWS (ECS, EKS, SSM)', icon: { type: 'icon', value: 'devicons devicon-amazonwebservices-original colored' } },
      { name: 'Docker', icon: { type: 'img', value: 'https://cdn.simpleicons.org/docker/2496ED', alt: 'Docker logo' } },
      { name: 'GitLab CI/CD', icon: { type: 'img', value: 'https://cdn.simpleicons.org/gitlab/FC6D26', alt: 'GitLab logo' } },
      { name: 'ArgoCD', icon: { type: 'icon', value: 'fa fa-sitemap' } },
      { name: 'Helm', icon: { type: 'img', value: 'https://cdn.simpleicons.org/helm/0F1689', alt: 'Helm logo' } },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', icon: { type: 'img', value: 'https://cdn.simpleicons.org/git/F05032', alt: 'Git logo' } },
      { name: 'GitHub / GitLab', icon: { type: 'img', value: 'https://cdn.simpleicons.org/github/181717', alt: 'GitHub logo' } },
      { name: 'VS Code', icon: { type: 'icon', value: 'devicons devicon-visualstudio-plain colored' } },
      { name: 'Jira', icon: { type: 'img', value: 'https://cdn.simpleicons.org/jira/0052CC', alt: 'Jira logo' } },
      { name: 'Copilot', icon: { type: 'img', value: 'https://cdn.simpleicons.org/githubcopilot/000000', alt: 'Copilot logo' } },
      { name: 'Storybook', icon: { type: 'img', value: 'https://cdn.simpleicons.org/storybook/FF4785', alt: 'Storybook logo' } },
    ],
  },
]

export const projects: Project[] = [
  {
    title: 'Multi-Tenant and Enterprise Onboarding Initiatives',
    description:
      'Delivered backend and frontend onboarding workflows across multi-tenant investment and enterprise initiatives, improving reliability, cross-service alignment, and funnel performance through data-informed iteration.',
  },
]

export const socialLinks = {
  twitter: 'https://www.twitter.com/leandrasilver',
  instagram: 'https://www.instagram.com/leandrabragasilver',
  linkedIn: 'https://ca.linkedin.com/in/leandrasilver',
  email: 'mailto:leandrasilver@gmail.com',
  medium: 'https://medium.com/@leandrasilver',
  github: 'https://www.github.com/leandrasilver',
  codepen: 'http://codepen.io/leandrasilver/',
}
