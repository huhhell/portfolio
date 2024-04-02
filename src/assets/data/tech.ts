import reactImg from '../img/techs/react.svg'
import jsImg from '../img/techs/javascript.svg'
import tsImg from '../img/techs/typescript.svg'
import htmlImg from '../img/techs/html.svg'
import cssImg from '../img/techs/css.svg'
import scssImg from '../img/techs/scss.svg'
import styledComponentsImg from '../img/techs/styledComponents.svg'
import reactRouterImg from '../img/techs/reactRouter.svg'
import jestImg from '../img/techs/jest.svg'
import muiImg from '../img/techs/materialUI.svg'
import reactTestingLibImg from '../img/techs/reactTestingLib.svg'


export interface Tech {
    name: string,
    img: string,
    id: number
}

export const reactT: Tech = {
    name: 'React',
    img: reactImg,
    id: 0
}

export const javaScript: Tech = {
    name: 'JavaScript',
    img: jsImg,
    id: 1
}

export const typeScript: Tech = {
    name: 'TypeScript',
    img: tsImg,
    id: 2
}

export const HTML: Tech = {
    name: 'HTML',
    img: htmlImg,
    id: 3
}

export const CSS: Tech = {
    name: 'CSS',
    img: cssImg,
    id: 4
}

export const SCSS: Tech = {
    name: 'SCSS',
    img: scssImg,
    id: 5
}

export const styledComponents: Tech = {
    name: 'Styled Components',
    img: styledComponentsImg,
    id: 6
}

export const materialUI: Tech = {
    name: 'Material UI',
    img: muiImg,
    id: 7
}

export const reactTestingLibrary: Tech = {
    name: 'React Testing Library',
    img: reactTestingLibImg,
    id: 8
}

export const jest: Tech = {
    name: 'Jest',
    img: jestImg,
    id: 9
}

export const reactRouter: Tech = {
    name: 'React Router',
    img: reactRouterImg,
    id: 10
}