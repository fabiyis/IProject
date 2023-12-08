function Projects() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white mt-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 px-10 bg-slate-200 w-fit mx-10  mb-10">
        <div className="image-container mt-2 mb-3">
          <img src="/img/Tyre-Pow.jpg" alt="" className="image" />
        </div>
        <div className="image-container mt-2 mb-3">
          <img src="/img/Bul-Kids.png" alt="" className="image" />
        </div>
        <div className="image-container mb-3">
          <img src="/img/Ser-Acc.jpg" alt="" className="image" />
        </div>
        <div className="image-container mb-3">
          <img src="/img/Grn.jpg" alt="" className="image" />
        </div>
      </div>
    </div>
  );
}

export default Projects ;


