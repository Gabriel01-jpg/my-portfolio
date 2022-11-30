import { useEffect, useRef } from "react"
import scrollReveal from 'scrollreveal'


export const ScrollReveal = ({ children }) => {
    const sectionRef = useRef(null);

    useEffect(() => {
        if (sectionRef.current)
        scrollReveal().reveal(sectionRef.current, {
            reset: true,
            delay: 400,
            origin: "bottom" 
          });
      }, []);


      return (
        <section
          ref={sectionRef}
          className="container scroll-section"
          data-testid="section"
        >
          {children}
        </section>
      );
}