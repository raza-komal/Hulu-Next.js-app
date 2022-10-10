import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Results from "../components/Results";
import styles from "../styles/Home.module.css";
import requests from "../utils/requests";

export default function Home({results}) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Hulu</title>
      </Head>

      {/* Header */}
      <Header />

      {/* Nav */}

      <Navbar />

      {/* Results */}
      <Results results={results}/>
    </>
  );
}



export async function getServerSideProps(context){
  const genre =context.query.genre;


  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchTrending?.url}`)
  .then(res => res.json()).catch(err => console.log(err))

  return{
    props:{
     results:request.results
    }
  }
}