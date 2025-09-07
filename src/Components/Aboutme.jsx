const Aboutme = () => {
  return (
    <section className="flex flex-col-reverse bg-linear-to-b from-85% from-(--color-font-p2)  p-4 md:px-8 lg:flex-row lg:px-16" id="aboutMe">
      <div className="flex justify-center p-6 lg:w-1/2 lg:items-center">
        <img
          src="../../public/pgAboutMe.png"
          alt=""
          className=" size-3/4 rounded-2xl shadow-[5px_5px_10px_white,10px_10px_10px_black] md:size-1/2 "
        />
      </div>
      <div className="flex flex-col gap-2 py-4 lg:w-1/2">
        <h3 className="text-center text-4xl text-white text-shadow-md text-shadow-black font-bold md:text-6xl">
          ABOUT ME
        </h3>
        <p className="py-4 text-xl/8 text-justify indent-4 font-light text-blue-200 md:text-3xl/11">
          Hola, soy <span className="font-bold text-black text-shadow-2xs text-shadow-white"> Alan Ruz</span>, un
          desarrollador front-end que se especializa en optimizar y potenciar el
          rendimiento de sistemas. Mi viaje en el desarrollo web comenzó a los
          10 años, impulsado por una fascinación infantil por cómo las páginas
          web se ejecutaban de forma autónoma. Esa curiosidad inicial se
          transformó en una pasión por resolver problemas complejos y crear
          soluciones digitales eficientes.
        </p>
        <p className="py-4 text-xl/8 text-justify indent-4 font-light text-blue-200 md:text-3xl/11">
          Soy una persona competitiva, audaz y con una energía inagotable para
          aprender y crecer cada día. Tengo un gran dominio de JavaScript, React
          y Next.js, y cuento con una noción sólida en el manejo de bases de
          datos relacionales y no relacionales. Me enorgullece mi capacidad para
          transformar ideas en proyectos funcionales y de alto rendimiento.
        </p>
        <p className="py-4 text-xl/8 text-justify indent-4 font-light text-blue-200 md:text-3xl/11">
          Te invito a explorar mis proyectos para que veas mi trabajo en acción.
          Si estás interesado en colaborar o simplemente quieres charlar sobre
          tecnología, no dudes en contactarme.
        </p>
      </div>
    </section>
  );
};

export default Aboutme;
