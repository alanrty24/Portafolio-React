const Myprojects = () => {
  return (
    <section className="bg-linear-to-b from-85% from-(--color-font-p2) to-(--color-font-p1) flex flex-col gap-4 pb-8" id="myProjects">
      <h3 className="text-center text-4xl text-white text-shadow-md text-shadow-black font-bold md:text-5xl ">My Projects</h3>
      <div className="flex flex-col flex-wrap p-4 gap-4 md:flex-row md:justify-center lg:gap-x-8">
        <div className="p-8 w-full flex justify-center items-center border-2 border-white rounded-2xl md:w-1/3 lg:w-1/4">Project1</div>
        <div className="p-8 w-full flex justify-center items-center border-2 border-white rounded-2xl md:w-1/3 lg:w-1/4">Project2</div>
        <div className="p-8 w-full flex justify-center items-center border-2 border-white rounded-2xl md:w-1/3 lg:w-1/4">Project3</div>
      </div>
    </section>
  );
};

export default Myprojects;
