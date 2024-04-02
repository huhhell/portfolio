import projectImg01 from "../img/projects/01.jpg";
import projectImg02 from "../img/projects/02.jpg";
import projectImg03 from "../img/projects/03.jpg";
import projectImg04 from "../img/projects/04.jpg";
import projectImg05 from "../img/projects/05.jpg";
import projectImg06 from "../img/projects/06.jpg";
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

interface ProjectLinks {
    name: string,
    link: string,
    id: number,
}


export default interface Project {
    name: string,
    tech: Tech[],
    description: string,
    img: string,
    links: ProjectLinks[],
    category: string,
    id: number
}

export const projects: Project[] = [
    {
        name: 'Studio Retro website',
        tech: [reactT, typeScript],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
        img: projectImg01,
        links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
        category: 'React',
        id: 0
    },
    {
        name: 'E-Commerce',
        tech: [HTML, SCSS, materialUI],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
        img: projectImg02,
        links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
        category: 'HTML / CSS',
        id: 1
    },
    {
        name: 'Portfolio',
        tech: [reactT, reactRouter, reactTestingLibrary, jest],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
        img: projectImg03,
        links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
        category: 'Components',
        id: 2
    },
    {
        name: 'Travel Website',
        tech: [reactT, javaScript, styledComponents],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
        img: projectImg04,
        links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
        category: 'React',
        id: 3
    },
    {
        name: 'Web Studio',
        tech: [HTML, CSS, typeScript],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
        img: projectImg05,
        links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
        category: 'React',
        id: 4
    },
    {
        name: 'Movie Website',
        tech: [HTML, CSS, typeScript],
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
        img: projectImg06,
        links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
        category: 'HTML / CSS',
        id: 5
    },
]

