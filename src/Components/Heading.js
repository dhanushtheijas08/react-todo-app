let Heading = function ({ title,size }) {
  let style = `text-darkGray ${size} font-semibold max-w-fit mx-auto`;
  return <h1 className={style}>{title}</h1>;
};

export default Heading;
