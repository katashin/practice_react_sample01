import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Modal } from './components/button'

export default function Home() {
  return (
    <div className='container m-5'>
    <Modal />
    </div>
  )
}
