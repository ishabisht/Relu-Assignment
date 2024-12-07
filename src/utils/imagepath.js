const pictureImages = Array.from({ length: 6 }, (_, i) =>
    require(`../assets/pics/side${i + 1}.png`)
  );
  
  const profileImages = Array.from({ length: 6 }, (_, i) =>
    require(`../assets/profile/sd${i + 1}.png`) 
  );
  const heroImages = Array.from({ length: 2 }, (_, i) =>
    require(`../assets/hero${i + 1}.png`) 
  );
  const dpImages = Array.from({ length: 2 }, (_, i) =>
    require(`../assets/dp${i + 1}.png`) 
  );
  const scrollImages = Array.from({ length: 5 }, (_, i) =>
    require(`../assets/nv${i + 1}.png`) 
  );

  export const images = {
    pics: pictureImages,
    profile: profileImages,
    hero:heroImages,
    dp:dpImages,
    nv:scrollImages

  };