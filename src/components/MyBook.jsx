import HTMLFlipBook from 'react-pageflip';
import Page from './Page';
import Cover from './pages/Cover/cover';
import coverImg from "../assets/cover.png"
import FirstPage from './pages/Hero/FirstPage';
import Skills from './pages/Skills/Skills';
import Education from './pages/Education/Education';
import LastPage from './pages/LastPage/LastPage';
import cover2 from '../assets/cover2.png'




// eslint-disable-next-line no-unused-vars
function MyBook(props) {
    return (
        <HTMLFlipBook width={500} height={600} showCover="true"> 
        <Page number={1}>
        <Cover coverImg={coverImg} title="my Portfolio" />
        </Page>
        <Page number={2}>
        <FirstPage />
        </Page>
        <Page number={3}>
        <Skills />
        </Page>
        <Page number={4}>
        <Education  />
        </Page>
        <Page number={5}>
        <LastPage />
        </Page>
        <Page number={6}>
        <Cover coverImg={cover2} title="Thanks" />
        </Page>
        </HTMLFlipBook>
    );
}

export default MyBook;