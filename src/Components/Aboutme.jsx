import FlippableCard from "./ui/FlippableCard";

const Aboutme = () => {
  const descriptions = [
    {
      fromContent: <h3>Hola Mundo</h3>,
      backContent: (
        <p className="py-2 text-base/7 indent-4 font-light text-sta md:text-lg/7">
          Hola, soy{" "}
          <span className="font-bold text-black text-shadow-2xs text-shadow-white">
            Alan Ruz
          </span>
          , un desarrollador front-end que se especializa en optimizar y
          potenciar el rendimiento de sistemas. Mi viaje en el desarrollo web
          comenzó a los 10 años, impulsado por una fascinación infantil por cómo
          las páginas web se ejecutaban de forma autónoma. Esa curiosidad
          inicial se transformó en una pasión por resolver problemas complejos y
          crear soluciones digitales eficientes.
        </p>
      ),
      color: "bg-(--federal-blue)"
    },
    {
      fromContent: <h3>Hola Mundo</h3>,
      backContent: (
        <p className="py-2 text-base/7 indent-4 font-light text-center md:text-lg/7">
          Soy una persona competitiva, audaz y con una energía inagotable para
          aprender y crecer cada día. Tengo un gran dominio de JavaScript, React
          y Next.js, y cuento con una noción sólida en el manejo de bases de
          datos relacionales y no relacionales. Me enorgullece mi capacidad para
          transformar ideas en proyectos funcionales y de alto rendimiento.
        </p>
      ),
    },
    {
      fromContent: <h3>Hola Mundo</h3>,
      backContent: (
        <p className="py-2 text-base/7 indent-4 font-light text-center md:text-lg/7">
          Te invito a explorar mis proyectos para que veas mi trabajo en acción.
          Si estás interesado en colaborar o simplemente quieres charlar sobre
          tecnología, no dudes en contactarme.
        </p>
      ),
    },
  ];
  return (
    <section
      className="min-h-screen mb-16 bg-linear-to-b from-85% from-(--color-font-p2) to-(--color-font-p1) py-4 lg:flex-row"
      id="aboutMe"
    >
      <div className="flex flex-col gap-2 py-4 ">
        <h3 className="text-center pb-2 text-(--color-tertiary) text-xl md:text-2xl lg:text-3xl font-bold">
          ABOUT <span className="text-(--color-secundary) ">ME</span>
        </h3>
        <article className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {descriptions.map((desc, i) => {
            return (
              <FlippableCard
                key={i}
                fromContent={desc.fromContent}
                backContent={desc.backContent}
              />
            );
          })}
        </article>
      </div>
    </section>
  );
};

export default Aboutme;
