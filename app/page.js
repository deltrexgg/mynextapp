import Image from "next/image";
import styles from "./page.module.css";
import Link from 'next/link'
import Button from './components/button'
import Dashboard from "./dashboard/page";
import Count from './components/count'
import Serverfetch from './components/serverfetch'

export default function Home() {
  return (
 <main><h1>This is Main</h1>
 <Serverfetch />
 </main>
  );
}
