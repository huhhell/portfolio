import {
    CSS,
    HTML,
    javaScript,
    jest,
    materialUI,
    reactRouter,
    reactT,
    reactTestingLibrary,
    SCSS, styledComponents,
    Tech,
    typeScript
} from "./tech.ts";
import {
    Project01Images,
    Project02Images, Project03Images,
    Project04Images,
    Project05Images,
    Project06Images,
    ProjectImage
} from "./images.ts";

export interface ProjectLink {
    name: string,
    link: string,
    id: number,
}

export default interface Project {
    name: string,
    tech: Tech[],
    description: string,
    img: ProjectImage[],
    links: ProjectLink[],
    category: string,
    id: number
}

export const projects: Project[] = [
    {
        name: 'Studio Retro website',
        tech: [reactT, typeScript],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
        img: Project01Images,
        links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
        category: 'React',
        id: 0
    },
    {
        name: 'E-Commerce',
        tech: [HTML, SCSS, materialUI],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
        img: Project02Images,
        links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
        category: 'HTML / CSS',
        id: 1
    },
    {
        name: 'Portfolio',
        tech: [reactT, reactRouter, reactTestingLibrary, jest],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
        img: Project03Images,
        links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
        category: 'Components',
        id: 2
    },
    {
        name: 'Travel Website',
        tech: [reactT, javaScript, styledComponents],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
        img: Project04Images,
        links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
        category: 'React',
        id: 3
    },
    {
        name: 'Web Studio',
        tech: [HTML, CSS, typeScript],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
        img: Project05Images,
        links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
        category: 'React',
        id: 4
    },
    {
        name: 'Movie Website',
        tech: [HTML, CSS, typeScript],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
        img: Project06Images,
        links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
        category: 'HTML / CSS',
        id: 5
    },
]

