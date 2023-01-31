const sizes = {
    mobileS: '320px',
    mobileM: '420px',
    tablet: '768px',
    laptop: '1024px',
    laptopL: '1440px',
    desktop: '2000px',
  };

const devices = {
    mobileS: `(min-width: ${sizes.mobileS})`,
    mobileM: `(min-width: ${sizes.mobileM})`,
    tablet: `(min-width: ${sizes.tablet})`,
    laptop: `(min-width: ${sizes.laptop})`,
    laptopL: `(min-width: ${sizes.laptopL})`,
    desktop: `(min-width: ${sizes.desktop})`,
  };


export default devices;

