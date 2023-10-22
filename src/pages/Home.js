import { Title } from "./Home.styled";
import phonebook from '../images/image.phoneHome.png'

export default function Home() {
  return (
    <main>
        <Title>Welcome to Phonebook!</Title>
        <img src={phonebook} alt='phonebook' width="800" style={{ display: 'block', margin: '0 auto' }}/>
    </main>
  );
}