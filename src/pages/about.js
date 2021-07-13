import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from '../components/Title'
import Image from "gatsby-image"
import SEO from "../components/SEO"

import aboutImg from '../images/about-img.png'

const About = () => {
  return (
    <Layout>
      <SEO title="About Me" description="About Tessa" />
      <section className="about-page">
        <div className="section-center about-center">
          <img src={aboutImg} className="about-img" />
          <article className="about-text">
          <Title title="About Me" />
            <p>I am a go getter and if there's something I want to accomplish I always find a way to do it. I enjoy taking on a challenge, and enjoy being able to sit back and relax and appreciate what I’ve accomplished.</p>
            <p>After working in the restaurant industry for several years, I wasn’t feeling much of either. I started looking for a new field that would keep challenging me, keep me on my toes so that I could go to work excited every day and come home happy with what I’d done.</p>
            <p>Soon after that realization I found that coding was the answer. The hours spent banging my head against poor documentation and maze-like logic were balanced with the unique exhilaration of watching my code function correctly and the occasional break to go on walks or watch YouTube videos. I wake up every morning excited that I get to do something that I love.</p>
            <div className="about-stack">
            hello
            </div>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export default About