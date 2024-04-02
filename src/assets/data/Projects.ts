import projectImg01 from "../img/projects/01.jpg";
import projectImg02 from "../img/projects/02.jpg";
import projectImg03 from "../img/projects/03.jpg";
import projectImg04 from "../img/projects/04.jpg";
import projectImg05 from "../img/projects/05.jpg";
import projectImg06 from "../img/projects/06.jpg";

interface ProjectLinks {
    name: string,
    link: string,
    id: number,
}

export default interface Project {
    name: string,
    tech: string,
    description: string,
    img: string,
    links: ProjectLinks[],
    category: string,
    id: number
}

export const projects: Project[] = [
    {
        name: 'Studio Retro website',
        tech: 'React, TypeScript',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
        img: projectImg01,
        links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
        category: 'React',
        id: 0
    },
    {
        name: 'E-Commerce',
        tech: 'HTML, SCSS, Tailwind ',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
        img: projectImg02,
        links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
        category: 'HTML / CSS',
        id: 1
    },
    {
        name: 'Portfolio',
        tech: 'React, RTL, React Router',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
        img: projectImg03,
        links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
        category: 'Components',
        id: 2
    },
    {
        name: 'Travel Website',
        tech: 'React, TypeScript, MUI',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
        img: projectImg04,
        links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
        category: 'React',
        id: 3
    },
    {
        name: 'Web Studio',
        tech: 'HTML, SCSS, JavaScript',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
        img: projectImg05,
        links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
        category: 'React',
        id: 4
    },
    {
        name: 'Movie Website',
        tech: 'HTML, SCSS, TypeScript',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
        img: projectImg06,
        links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
        category: 'HTML / CSS',
        id: 5
    },
]

