import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css';
import styled from 'styled-components'
import HeadTwo from '../src/assets/images/head-2@2x.png';
import Navbar from '../src/components/Navbar';
import BlackBg from '../src/assets/images/blackbg.png';

const Container = styled.div`
height: 100%;
width: 100%;
background-image: url(${BlackBg});
`



export default function Home() {
  return (

    <Container>
 <Navbar/>

        </Container>
  );
}
