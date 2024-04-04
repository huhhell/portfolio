import {
    CSS,
    HTML,
    javaScript,
    jest,
    materialUI,
    reactRouter,
    reactT,
    reactTestingLibrary,
    SCSS,
    styledComponents,
    Tech,
    typeScript
} from "./tech.ts";
import {
    Project01Images,
    Project02Images,
    Project03Images,
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
    descriptionShort: string,
    descriptionLong: string,
    img: ProjectImage[],
    links: ProjectLink[],
    category: string,
    id: number
}

export const projects: Project[] = [
    {
        name: 'Studio Retro website',
        tech: [reactT, typeScript],
        descriptionShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
        descriptionLong: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec neque nulla. Donec a elit quis dui lobortis pharetra. Nulla nisl velit, gravida dignissim vulputate ac, tempus vitae arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vitae elementum elit. Proin at commodo sem, sit amet tempus tellus. Sed venenatis viverra sapien, ac facilisis magna facilisis eget. Integer aliquet leo eget leo placerat, ut elementum nulla scelerisque. Cras sit amet ultrices libero. Proin lectus tortor, imperdiet quis ligula rutrum, elementum ultrices justo. Fusce pellentesque libero augue, viverra consequat velit molestie id. Sed convallis condimentum quam ut scelerisque.',
        img: Project01Images,
        links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
        category: 'React',
        id: 0
    },
    {
        name: 'E-Commerce',
        tech: [HTML, SCSS, materialUI],
        descriptionShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
        descriptionLong: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec neque nulla. Donec a elit quis dui lobortis pharetra. Nulla nisl velit, gravida dignissim vulputate ac, tempus vitae arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vitae elementum elit. Proin at commodo sem, sit amet tempus tellus. Sed venenatis viverra sapien, ac facilisis magna facilisis eget. Integer aliquet leo eget leo placerat, ut elementum nulla scelerisque. Cras sit amet ultrices libero. Proin lectus tortor, imperdiet quis ligula rutrum, elementum ultrices justo. Fusce pellentesque libero augue, viverra consequat velit molestie id. Sed convallis condimentum quam ut scelerisque.',
        img: Project02Images,
        links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
        category: 'HTML / CSS',
        id: 1
    },
    {
        name: 'Portfolio',
        tech: [reactT, reactRouter, reactTestingLibrary, jest],
        descriptionShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
        descriptionLong: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec neque nulla. Donec a elit quis dui lobortis pharetra. Nulla nisl velit, gravida dignissim vulputate ac, tempus vitae arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vitae elementum elit. Proin at commodo sem, sit amet tempus tellus. Sed venenatis viverra sapien, ac facilisis magna facilisis eget. Integer aliquet leo eget leo placerat, ut elementum nulla scelerisque. Cras sit amet ultrices libero. Proin lectus tortor, imperdiet quis ligula rutrum, elementum ultrices justo. Fusce pellentesque libero augue, viverra consequat velit molestie id. Sed convallis condimentum quam ut scelerisque.',
        img: Project03Images,
        links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
        category: 'Components',
        id: 2
    },
    {
        name: 'Travel Website',
        tech: [reactT, javaScript, styledComponents],
        descriptionShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
        descriptionLong: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec neque nulla. Donec a elit quis dui lobortis pharetra. Nulla nisl velit, gravida dignissim vulputate ac, tempus vitae arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vitae elementum elit. Proin at commodo sem, sit amet tempus tellus. Sed venenatis viverra sapien, ac facilisis magna facilisis eget. Integer aliquet leo eget leo placerat, ut elementum nulla scelerisque. Cras sit amet ultrices libero. Proin lectus tortor, imperdiet quis ligula rutrum, elementum ultrices justo. Fusce pellentesque libero augue, viverra consequat velit molestie id. Sed convallis condimentum quam ut scelerisque.',
        img: Project04Images,
        links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
        category: 'React',
        id: 3
    },
    {
        name: 'Web Studio',
        tech: [HTML, CSS, typeScript],
        descriptionShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
        descriptionLong: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec neque nulla. Donec a elit quis dui lobortis pharetra. Nulla nisl velit, gravida dignissim vulputate ac, tempus vitae arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vitae elementum elit. Proin at commodo sem, sit amet tempus tellus. Sed venenatis viverra sapien, ac facilisis magna facilisis eget. Integer aliquet leo eget leo placerat, ut elementum nulla scelerisque. Cras sit amet ultrices libero. Proin lectus tortor, imperdiet quis ligula rutrum, elementum ultrices justo. Fusce pellentesque libero augue, viverra consequat velit molestie id. Sed convallis condimentum quam ut scelerisque.',
        img: Project05Images,
        links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
        category: 'React',
        id: 4
    },
    {
        name: 'Movie Website',
        tech: [HTML, CSS, typeScript],
        descriptionShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
        descriptionLong: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec neque nulla. Donec a elit quis dui lobortis pharetra. Nulla nisl velit, gravida dignissim vulputate ac, tempus vitae arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vitae elementum elit. Proin at commodo sem, sit amet tempus tellus. Sed venenatis viverra sapien, ac facilisis magna facilisis eget. Integer aliquet leo eget leo placerat, ut elementum nulla scelerisque. Cras sit amet ultrices libero. Proin lectus tortor, imperdiet quis ligula rutrum, elementum ultrices justo. Fusce pellentesque libero augue, viverra consequat velit molestie id. Sed convallis condimentum quam ut scelerisque.',
        img: Project06Images,
        links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
        category: 'HTML / CSS',
        id: 5
    },
]

