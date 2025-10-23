const Aboutme = () => {
  return (
    <section className="min-h-auto bg-linear-to-b from-85% from-(--color-font-p2) to-(--color-font-p1) py-4 lg:flex-row" id="aboutMe">
      <div className="flex flex-col gap-2 py-4 lg:w-1/2">
        <h3 className="text-center pb-2 text-3xl text-(--color-tertiary)  font-bold">
          ABOUT <span className="text-(--color-secundary) ">ME</span>
        </h3>
        <p className="py-2 text-xl/8 text-justify indent-4 font-light text-black md:text-xl/7">
          Hola, soy <span className="font-bold text-black text-shadow-2xs text-shadow-white"> Alan Ruz</span>, un
          desarrollador front-end que se especializa en optimizar y potenciar el
          rendimiento de sistemas. Mi viaje en el desarrollo web comenzó a los
          10 años, impulsado por una fascinación infantil por cómo las páginas
          web se ejecutaban de forma autónoma. Esa curiosidad inicial se
          transformó en una pasión por resolver problemas complejos y crear
          soluciones digitales eficientes.
        </p>
        <p className="py-2 text-xl/8 text-justify indent-4 font-light text-black md:text-xl/7">
          Soy una persona competitiva, audaz y con una energía inagotable para
          aprender y crecer cada día. Tengo un gran dominio de JavaScript, React
          y Next.js, y cuento con una noción sólida en el manejo de bases de
          datos relacionales y no relacionales. Me enorgullece mi capacidad para
          transformar ideas en proyectos funcionales y de alto rendimiento.
        </p>
        <p className="py-2 text-xl/8 text-justify indent-4 font-light text-black md:text-xl/7">
          Te invito a explorar mis proyectos para que veas mi trabajo en acción.
          Si estás interesado en colaborar o simplemente quieres charlar sobre
          tecnología, no dudes en contactarme.
        </p>
      </div>
    </section>
  );
};

export default Aboutme;
