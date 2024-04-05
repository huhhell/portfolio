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
    // styledComponents,
    Tech,
    typeScript
} from "./tech.ts";
import {
    // Project01Images,
    // Project02Images,
    // Project03Images,
    // Project04Images,
    // Project05Images,
    // Project06Images,
    Project07Images,
    Project09Images,
    Project10Images,
    Project11Images,
    Project12Images, Project13Images,
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
    // {
    //     name: 'Studio Retro website',
    //     tech: [reactT, typeScript],
    //     descriptionShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
    //     descriptionLong: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec neque nulla. Donec a elit quis dui lobortis pharetra. Nulla nisl velit, gravida dignissim vulputate ac, tempus vitae arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vitae elementum elit. Proin at commodo sem, sit amet tempus tellus. Sed venenatis viverra sapien, ac facilisis magna facilisis eget. Integer aliquet leo eget leo placerat, ut elementum nulla scelerisque. Cras sit amet ultrices libero. Proin lectus tortor, imperdiet quis ligula rutrum, elementum ultrices justo. Fusce pellentesque libero augue, viverra consequat velit molestie id. Sed convallis condimentum quam ut scelerisque.',
    //     img: Project01Images,
    //     links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
    //     category: 'React',
    //     id: 0
    // },
    // {
    //     name: 'Bouquets E-Commerce',
    //     tech: [reactT, typeScript, SCSS, reactRouter, materialUI],
    //     descriptionShort: 'Адаптивное MPA для компании по доставке цветов. Реализован основной функционал для покупки товаров и дополнительные функции для использования на мобильных устройствах.',
    //     descriptionLong: 'Из функционала реализованы функции навигации по странице, динамическое создание карточки товара по клику на него. Добавление товара в корзину и ее редактирование. Корзина так же высчитывает общую стоимость покупки и отображает ее на странице. Основные данные на странице реализованы таким образом, чтобы можно было их динамически запрашивать с удаленного сервера. <br/> Блоки на главной странице в десктопной версии реализованы с sticky-эффектом. Создана карусель с отзывами. Страница подписки на цветы содержит динамический FAQ. Весь сайт доступен для ПК, планшетов и мобильных устройств.',
    //     img: Project02Images,
    //     links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
    //     category: 'HTML / CSS',
    //     id: 1
    // },
    // {
    //     name: 'Portfolio',
    //     tech: [reactT, reactRouter, reactTestingLibrary, jest],
    //     descriptionShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
    //     descriptionLong: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec neque nulla. Donec a elit quis dui lobortis pharetra. Nulla nisl velit, gravida dignissim vulputate ac, tempus vitae arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vitae elementum elit. Proin at commodo sem, sit amet tempus tellus. Sed venenatis viverra sapien, ac facilisis magna facilisis eget. Integer aliquet leo eget leo placerat, ut elementum nulla scelerisque. Cras sit amet ultrices libero. Proin lectus tortor, imperdiet quis ligula rutrum, elementum ultrices justo. Fusce pellentesque libero augue, viverra consequat velit molestie id. Sed convallis condimentum quam ut scelerisque.',
    //     img: Project03Images,
    //     links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
    //     category: 'Components',
    //     id: 2
    // },
    // {
    //     name: 'Travel Website',
    //     tech: [reactT, javaScript, styledComponents],
    //     descriptionShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
    //     descriptionLong: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec neque nulla. Donec a elit quis dui lobortis pharetra. Nulla nisl velit, gravida dignissim vulputate ac, tempus vitae arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vitae elementum elit. Proin at commodo sem, sit amet tempus tellus. Sed venenatis viverra sapien, ac facilisis magna facilisis eget. Integer aliquet leo eget leo placerat, ut elementum nulla scelerisque. Cras sit amet ultrices libero. Proin lectus tortor, imperdiet quis ligula rutrum, elementum ultrices justo. Fusce pellentesque libero augue, viverra consequat velit molestie id. Sed convallis condimentum quam ut scelerisque.',
    //     img: Project04Images,
    //     links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
    //     category: 'React',
    //     id: 3
    // },
    // {
    //     name: 'Web Studio',
    //     tech: [HTML, CSS, typeScript],
    //     descriptionShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
    //     descriptionLong: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec neque nulla. Donec a elit quis dui lobortis pharetra. Nulla nisl velit, gravida dignissim vulputate ac, tempus vitae arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vitae elementum elit. Proin at commodo sem, sit amet tempus tellus. Sed venenatis viverra sapien, ac facilisis magna facilisis eget. Integer aliquet leo eget leo placerat, ut elementum nulla scelerisque. Cras sit amet ultrices libero. Proin lectus tortor, imperdiet quis ligula rutrum, elementum ultrices justo. Fusce pellentesque libero augue, viverra consequat velit molestie id. Sed convallis condimentum quam ut scelerisque.',
    //     img: Project05Images,
    //     links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
    //     category: 'React',
    //     id: 4
    // },
    // {
    //     name: 'Movie Website',
    //     tech: [HTML, CSS, typeScript],
    //     descriptionShort: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget commodo quam. Curabitur urna ipsum, vehicula et nibh eu, congue dignissim urna. Integer ornare, libero placerat finibus congue, mauris nulla.',
    //     descriptionLong: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec neque nulla. Donec a elit quis dui lobortis pharetra. Nulla nisl velit, gravida dignissim vulputate ac, tempus vitae arcu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis vitae elementum elit. Proin at commodo sem, sit amet tempus tellus. Sed venenatis viverra sapien, ac facilisis magna facilisis eget. Integer aliquet leo eget leo placerat, ut elementum nulla scelerisque. Cras sit amet ultrices libero. Proin lectus tortor, imperdiet quis ligula rutrum, elementum ultrices justo. Fusce pellentesque libero augue, viverra consequat velit molestie id. Sed convallis condimentum quam ut scelerisque.',
    //     img: Project06Images,
    //     links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
    //     category: 'HTML / CSS',
    //     id: 5
    // },
    {
        name: 'Bouquets E-Commerce',
        tech: [reactT, typeScript, SCSS, reactRouter, materialUI],
        descriptionShort: 'Адаптивное MPA для компании по доставке цветов. Реализован основной функционал для покупки товаров и дополнительные функции для использования на мобильных устройствах.',
        descriptionLong: 'Из функционала реализованы функции навигации по странице, динамическое создание карточки товара по клику на него. Добавление товара в корзину и ее редактирование. Корзина так же высчитывает общую стоимость покупки и отображает ее на странице. Основные данные на странице реализованы таким образом, чтобы можно было их динамически запрашивать с удаленного сервера. <br/> Блоки на главной странице в десктопной версии реализованы с sticky-эффектом. Создана карусель с отзывами. Страница подписки на цветы содержит динамический FAQ. Весь сайт доступен для ПК, планшетов и мобильных устройств.',
        img: Project07Images,
        links: [{name: 'GitHub', link: 'https://github.com/huhhell/flowerWeb', id: 0}, {name: 'Website', link: 'https://flower-web-sooty.vercel.app/products', id: 2}, {name: 'Notion', link: 'https://www.notion.so/Bouquets-E-Commerce-dbe27757e8c24f2f8411ef505a01baad?pvs=4', id: 3}, {name: 'Figma', link: 'https://www.figma.com/community/file/1259217583079978202/ecommerce-flower-delivery-website-ui-ux-ui-kit-template', id: 4}],
        category: 'React',
        id: 0
    },
    // {
    //     name: 'Landing for Car Service',
    //     tech: [HTML, CSS, javaScript],
    //     descriptionShort: 'Десктопный лэндинг из блоков и лалала',
    //     descriptionLong: 'Очень длинное описание.. Я не копирайтер блин..',
    //     img: Project08Images,
    //     links: [{name: 'GitHub', link: '', id: 0}, {name: 'Website', link: '', id: 2}, {name: 'Notion', link: '', id: 3}],
    //     category: 'HTML / CSS',
    //     id: 7
    // },
    {
        name: 'Curious Kids Website',
        tech: [HTML, SCSS],
        descriptionShort: 'Необычный, адаптивный сайт-одностраничник, с использованием методологии BEM. ',
        descriptionLong: 'Один из первых моих проектов. Реализована адаптивная верстка, которая хорошо смотрится на пк, планшетных и мобильных устройствах. Использована методология-BEM. Добавлены блоки необычных форм, размеров и расположения. Старалась сохранить их уникальность и на мобильной версии сайта. ',
        img: Project09Images,
        links: [{name: 'GitHub', link: 'https://github.com/huhhell/educationLanding', id: 0}, {name: 'Website', link: 'https://education-landing-five.vercel.app/', id: 2}, {name: 'Notion', link: 'https://www.notion.so/Curious-Kids-Website-6f6a97cd43334c1f915bea183c0e1908?pvs=4', id: 3}, {name: 'Figma', link: 'https://www.figma.com/file/mKjceh1ZnhPYSrYpovrQ7A/Edutech-Landing-Page-(Community)?type=design&node-id=0%3A1&mode=design&t=QttaiDl5LaNa5rVK-1', id: 4}],
        category: 'HTML / CSS',
        id: 1
    },
    {
        name: 'Credit Card Form',
        tech: [HTML, SCSS, javaScript],
        descriptionShort: 'Форма для заполнения банковской карты',
        descriptionLong: 'Форма для заполнения данных банковской карты. Сделана в качестве практики анимаций и использования JavaScript в браузере. Из функционала были реализованы: анимация при вводе номера карты, заглушка цифр посередине, работа формы а так же возможность ее отправки на сервер. Дизайн был создан мною, опираясь на похожие примеры. ',
        img: Project10Images,
        links: [{name: 'GitHub', link: 'https://github.com/huhhell/creditCardForm', id: 0}, {name: 'Notion', link: 'https://www.notion.so/credit-card-form-6e1325a527d14c0f94b0a96e700ad6a7?pvs=4', id: 3}],
        category: 'Components',
        id: 2
    },
    {
        name: 'Dashboard',
        tech: [reactT, javaScript],
        descriptionShort: 'SPA с компонентами для повышения личной продуктивности',
        descriptionLong: 'Небольшое SPA созданное для того чтобы собрать компоненты, которые писала на протяжении своего обучения, воедино. На данный момент состоит из Помодоро таймера, который можно настроить под себя, менеджера задач и трекера привычек. Их функционал можно посмотреть в галерее. Так же присутсвуют блоки с текущей датой и временем. ',
        img: Project11Images,
        links: [{name: 'GitHub', link: 'https://github.com/huhhell/dashboard', id: 0}, {name: 'Website', link: 'https://dashboard-five-blue-84.vercel.app/', id: 2}, {name: 'Notion', link: 'https://www.notion.so/Dashboard-a8527b923d474754af40b8c0fdcfb927?pvs=4', id: 3}, {name: 'Figma', link: 'https://www.figma.com/community/file/1060952013207459371/vision-ui-dashboard-react-mui-dashboard-free-version', id: 4}],
        category: 'React',
        id: 3
    },
    {
        name: 'Hydra Landing',
        tech: [HTML, CSS, javaScript],
        descriptionShort: 'Адаптивный лэндинг для компании которая занимается vr разработкой',
        descriptionLong: 'Все, больше не можу',
        img: Project12Images,
        links: [{name: 'GitHub', link: 'https://github.com/huhhell/hydraLanding', id: 0}, {name: 'Website', link: 'https://hydra-landing-blond.vercel.app/', id: 2}, {name: 'Notion', link: 'https://www.notion.so/HydraLanding-00afb6e077614f748b80fe356e105e96?pvs=4', id: 3}, {name: 'Figma', link: 'https://www.figma.com/community/file/1196146735025729739/hydra-landing-page', id: 4}],
        category: 'HTML / CSS',
        id: 4
    },
    {
        name: 'Todo',
        tech: [reactT, SCSS, typeScript, jest, reactTestingLibrary],
        descriptionShort: 'Менеджер задач с возможностью сортировки по категориям и всеми базовыми, необходимыми функциями.',
        descriptionLong: 'Небольшое приложение менеджер задач. Реализованы функции добавления, удаления и редактирования задачи. Возможность соритровки задач по категориям, добавление новой категории и назначения ей своего собственного цвета. Приложение полностью покрыто e2e, integration и unit тестами (в процессе). ',
        img: Project13Images,
        links: [{name: 'GitHub', link: 'https://github.com/huhhell/TodoApp', id: 0}, {name: 'Website', link: 'https://todo-app-hazel-xi.vercel.app/', id: 2}, {name: 'Notion', link: 'https://www.notion.so/todoAppReact-279d917e7f3a4587a568b3e7211d1ed9?pvs=4', id: 3}, {name: 'Figma', link: 'https://www.figma.com/community/file/1133173477581507595/todo-app', id: 4}],
        category: 'Components',
        id: 5
    },
]

