import { useEffect, useState } from 'react';
import './Home.css'

const Home = () => {
    const roles = ["Web Developer", "Frontend Engineer", "React Enthusiast"];
    const [text, setText] = useState('');
    const [index, setIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);

    useEffect(() => {
        const currentRole = roles[index];

        if(charIndex < currentRole.length) {
            const timeout = setTimeout(() => {
                setText(currentRole.slice(0, charIndex + 1));
                setCharIndex(charIndex + 1);
            }, 100);
            return () => clearTimeout(timeout);
        } else {
            // wait for 1 second , then move to the next word
            const timeout = setTimeout(() => {
                setCharIndex(0);
                setIndex((index + 1) % roles.length);
            }, 1000);
            return () => clearTimeout(timeout);
        }
    }, [charIndex, index]);

  return (
    <section className="home fade-in">
      <div className="hero">
        <h1>HI, I'm Brian O. Otieno</h1>
        <h2 className='animated-text'>{text}|</h2>
        <p>I build modern web apps with clean design and great perfomance.</p>
        <a href="/projects" className='hero-btn'>See My Work</a>
      </div>
    </section>
  )
}

export default Home
