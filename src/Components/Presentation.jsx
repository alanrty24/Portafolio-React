const Presentation = () => {
  return (
    <section className="bg-(--color-font-p1) text-white px-4 flex flex-col md:px-8">
      <div className="contTitle py-4 flex flex-col gap-2">
        <h3 className="text-2xl font-bold text-(--color-letters-name) font-mono md:text-4xl">Alan Ruz</h3>
        <p className="text-4xl font-bold text-blue-300 text-shadow-2xs text-shadow-blue-50 md:text-6xl">FRONT END WEB DEVELOPER</p>
        <ul className="flex gap-4 justify-center p-6">
          <li className="text-4xl md:text-6xl">
            <i className="fab fa-instagram text-red-500"></i>
          </li>
          <li className="text-4xl md:text-6xl">
            <i class="fab fa-linkedin"></i>
          </li>
          <li className="text-4xl md:text-6xl">
            <i class="fab fa-facebook text-blue-600"></i>
          </li>
          <li className="text-4xl md:text-6xl">
            <i class="fab fa-whatsapp text-green-500"></i>
          </li>
          <li className="text-4xl md:text-6xl">
            <i class="fab fa-github text-gray-500"></i>
          </li>
        </ul>
      </div>
      <div className="img">
        <img src="/public/perfil.png" alt="ImgPerfil" />
      </div>
    </section>
  );
};

export default Presentation;
