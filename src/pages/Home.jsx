// pages/Home.jsx
import SearchBox from "../components/searchbox";

const Home = () => {
  return (
    <div className="w-full">

      {/* 🔴 HERO SECTION */}
      <div className="relative w-full h-[420px]">

        {/* ✅ BACKGROUND IMAGE */}
        <img
          src="https://thacoauto.vn/storage/xe-bus-giuong-nam-thaco-resize.jpg"
          alt="banner"
          className="w-full h-full object-cover"
        />

        {/* ✅ OVERLAY */}
        <div className="absolute inset-0 bg-black/40"></div>

       
        <div className="absolute top-24 left-10 md:left-20 text-white">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            India's No. 1 online <br />
            bus ticket booking site
          </h1>
        </div>

       
        <div className="absolute -bottom-20 w-full flex justify-center px-4">
          <div className="">
            <SearchBox />
          </div>
        </div>

      </div>

  

    </div>
  );
};

export default Home;