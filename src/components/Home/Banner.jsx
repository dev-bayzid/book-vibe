import bannerImg from "../../assets/Dating.png"

const Banner = () => {
  return (
    <div className="hero bg-base-300 min-h-[70vh] container mx-auto my-8 rounded-4xl">
      <div className="hero-content flex-col lg:flex-row-reverse w-full justify-center">
        <img
          src={bannerImg}
          className="max-w-sm rounded-lg"
        />
        <div className="space-y-6">
          <h1 className="text-6xl font-bold">
            Books to freshen up <br /> your bookshelf
          </h1>

          <button className="btn bg-green-500 border border-green-500 text-white">
            View The List
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
