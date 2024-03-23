const Header = () => {
  return (
    <div className="  mx-5 md:mx-24 " id="/">
      <div className="headerr flex">
        <div className="flex  flex-col justify-center mx-3 gap-3">
          <h2 className="text-white md:text-[50px] md:w-[500px] w-full ">
            Order Your Favourite Food Here
          </h2>
          <p className="text-white md:text-[20px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias,
            eum.
          </p>
          <button className="btn w-36  md:w-52 py-3">View Menu</button>
        </div>
      </div>
    </div>
  );
};

export default Header;
