import { Image, Introdata, Projects, Social } from "./type";

const introdata: Introdata = {
  title: "Hello I’m Anastasia",
  animated: ["I'm Love", "Disign", "Web", "UI/UX"],
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum",
};

const img: Image[] = [
  {
    id: 1,
    imageDark: require("../assets/img/front_imgDark.webp"),
    imageLight: require("../assets/img/front_imgLight2.webp"),
  },
];

const social: Social[] = [
  {
    name: "inst",
    link: "https://www.instagram.com",
    icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/120px-Instagram_logo_2016.svg.png",
  },
  {
    name: "behance",
    link: "https://www.behance.net/",
    icon: "https://cdn-icons-png.flaticon.com/128/1377/1377230.png",
  },
  {
    name: "vk",
    link: "https://vk.com/",
    icon: "https://pngicon.ru/file/uploads/vk-128x128.png",
  },
];

const projects: Projects[] = [
  {
    id: 1,
    name: "Budget Planner",
    prev: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/fba738150441035.Y3JvcCwxMzk2LDEwOTIsMjI4LDQ2NTg.png",
    link: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/dec5a0150441035.62fa7c10ccdd1.png",
    instuments: [
      {
        id: 1,
        name: "Photoshop",
        instument: "https://www.adobe.com/content/dam/acom/one-console/icons_rebrand/ps_appicon.svg",
      },
    ],
  },
  {
    id: 2,
    name: "Landing Page Yoga",
    prev: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/d7a958142842817.Y3JvcCwxMDQwLDgxNCwxNTQsMzQ3Mg.png",
    link: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d63c9b142842817.626f02776c969.png",
    link1: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/553706142842817.626efc76a5209.png",
    instuments: [
      {
        id: 1,
        name: "Photoshop",
        instument: "https://www.adobe.com/content/dam/acom/one-console/icons_rebrand/ps_appicon.svg",
      },
      {
        id: 2,
        name: "Illustrator",
        instument: "https://www.adobe.com/content/dam/shared/images/product-icons/svg/illustrator.svg",
      },
    ],
  },
  {
    id: 3,
    name: "Concept Sony Playstation 5",
    prev: "https://mir-s3-cdn-cf.behance.net/projects/404/94419e141707329.Y3JvcCw3NTEsNTg3LDMzOCw5Mjgw.png",
    link: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7516c4141707329.6258a9e521635.png",
    link1: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/07c9c8141707329.6258a9e521e58.png",
    link2: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0a7b2a141707329.6258a9e5208f0.png",
    link3: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3a2818141707329.6258a9e521012.png",
    video: "https://www-ccv.adobe.io/v1/player/ccv/FgtssxRmqGo/embed?api_key=behance1&bgcolor=%23191919",
    video1:
      "https://cdn-prod-ccv.adobe.com/FgtssxRmqGo/rend/FgtssxRmqGo_576.mp4?hdnts=st%3D1666628406%7Eexp%3D1666887606%7Eacl%3D%2Fshared_assets%2Fimage%2F*%21%2Fz%2FFgtssxRmqGo%2Frend%2F*%21%2Fi%2FFgtssxRmqGo%2Frend%2F*%21%2FFgtssxRmqGo%2Frend%2F*%21%2FFgtssxRmqGo%2Fimage%2F*%7Ehmac%3Db8872fd0dcf3793558cccb48553e7919f035519259fddbfa518f2e5e7a33fb32",
    video2:
      "https://cdn-prod-ccv.adobe.com/FgtssxRmqGo/rend/FgtssxRmqGo_576.mp4?hdnts=st%3D1667168399%7Eexp%3D1667427599%7Eacl%3D%2Fshared_assets%2Fimage%2F*%21%2Fz%2FFgtssxRmqGo%2Frend%2F*%21%2Fi%2FFgtssxRmqGo%2Frend%2F*%21%2FFgtssxRmqGo%2Frend%2F*%21%2FFgtssxRmqGo%2Fimage%2F*%7Ehmac%3D83d1e2132ebf1752d299fcd6970ea167c6621202f4c119fb04bb275c44c96d34",
    instuments: [
      {
        id: 2,
        name: "Illustrator",
        instument: "https://www.adobe.com/content/dam/shared/images/product-icons/svg/illustrator.svg",
      },
      {
        id: 3,
        name: "Figma",
        instument: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
      },
    ],
  },
  {
    id: 4,
    name: "Логотип строительной организации",
    prev: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/63a090158743477.Y3JvcCwyNDQ2LDE5MTMsNjM1LDE2MjM2.png",
    link: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/f869a3158743477.639107168824b.png",
    instuments: [
      {
        id: 1,
        name: "Photoshop",
        instument: "https://www.adobe.com/content/dam/acom/one-console/icons_rebrand/ps_appicon.svg",
      },
      {
        id: 2,
        name: "Illustrator",
        instument: "https://www.adobe.com/content/dam/shared/images/product-icons/svg/illustrator.svg",
      },
      {
        id: 3,
        name: "Figma",
        instument: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
      },
    ],
  },
  {
    id: 5,
    name: "White witch",
    prev: "https://mir-s3-cdn-cf.behance.net/projects/404/8cc092138752509.Y3JvcCw4NzAsNjgwLDI2NCwxMjc.jpg",
    link: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c1d6ef138752509.6223559a534ba.png",
    link1: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/730ad4138752509.6223559a9a714.png",
    link2: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/68e1db138752509.6223559a99929.png",
    link3: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/89129c138752509.6223559a9a0f4.png",
    link4: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4c3e3a138752509.62236a17d6ee6.jpg",
    instuments: [
      {
        id: 1,
        name: "Photoshop",
        instument: "https://www.adobe.com/content/dam/acom/one-console/icons_rebrand/ps_appicon.svg",
      },
      {
        id: 2,
        name: "Illustrator",
        instument: "https://www.adobe.com/content/dam/shared/images/product-icons/svg/illustrator.svg",
      },
      {
        id: 3,
        name: "Figma",
        instument: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
      },
    ],
  },
  {
    id: 6,
    name: "Брошура для цветочного магазина",
    prev: "https://mir-s3-cdn-cf.behance.net/projects/404/5cb85b137309829.Y3JvcCwyNTU2LDIwMDAsNDM2LDA.jpg",
    link: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a407cd137309829.62092ce7bdb51.jpg",
    instuments: [
      {
        id: 1,
        name: "Photoshop",
        instument: "https://www.adobe.com/content/dam/acom/one-console/icons_rebrand/ps_appicon.svg",
      },
      {
        id: 3,
        name: "Figma",
        instument: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
      },
    ],
  },
  {
    id: 7,
    name: "Food line icons for healthy food app",
    prev: "https://mir-s3-cdn-cf.behance.net/projects/404/9bb32b137300931.Y3JvcCwxMzQyLDEwNTAsMjksMA.jpg",
    link: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/30636d137300931.62090a0535e7f.jpg",
    link1: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b442d8137300931.62090a0577708.jpg",
    link2: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5bdf32137300931.62090a0576939.jpg",
    link3: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1fb8c6137300931.62090a05760fb.jpg",
    link4: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/26840d137300931.62090a057715d.jpg",
    instuments: [
      {
        id: 1,
        name: "Photoshop",
        instument: "https://www.adobe.com/content/dam/acom/one-console/icons_rebrand/ps_appicon.svg",
      },
      {
        id: 2,
        name: "Illustrator",
        instument: "https://www.adobe.com/content/dam/shared/images/product-icons/svg/illustrator.svg",
      },
    ],
  },
  {
    id: 8,
    name: "Instagram carousel",
    prev: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/ba3070157933297.Y3JvcCwxNzg1LDEzOTYsOTcsMzk3OA.png",
    link: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a326f2157933297.63822d1f32962.png",
    instuments: [
      {
        id: 1,
        name: "Photoshop",
        instument: "https://www.adobe.com/content/dam/acom/one-console/icons_rebrand/ps_appicon.svg",
      },
      {
        id: 2,
        name: "Illustrator",
        instument: "https://www.adobe.com/content/dam/shared/images/product-icons/svg/illustrator.svg",
      },
    ],
  },
  {
    id: 9,
    name: "Budget Planner",
    prev: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/fba738150441035.Y3JvcCwxMzk2LDEwOTIsMjI4LDQ2NTg.png",
    link: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/dec5a0150441035.62fa7c10ccdd1.png",
    instuments: [
      {
        id: 1,
        name: "Photoshop",
        instument: "https://www.adobe.com/content/dam/acom/one-console/icons_rebrand/ps_appicon.svg",
      },
    ],
  },
  {
    id: 10,
    name: "Landing Page Yoga",
    prev: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/d7a958142842817.Y3JvcCwxMDQwLDgxNCwxNTQsMzQ3Mg.png",
    link: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/d63c9b142842817.626f02776c969.png",
    link1: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/553706142842817.626efc76a5209.png",
    instuments: [
      {
        id: 1,
        name: "Photoshop",
        instument: "https://www.adobe.com/content/dam/acom/one-console/icons_rebrand/ps_appicon.svg",
      },
      {
        id: 2,
        name: "Illustrator",
        instument: "https://www.adobe.com/content/dam/shared/images/product-icons/svg/illustrator.svg",
      },
    ],
  },
  {
    id: 11,
    name: "Concept Sony Playstation 5",
    prev: "https://mir-s3-cdn-cf.behance.net/projects/404/94419e141707329.Y3JvcCw3NTEsNTg3LDMzOCw5Mjgw.png",
    link: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/7516c4141707329.6258a9e521635.png",
    link1: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/07c9c8141707329.6258a9e521e58.png",
    link2: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/0a7b2a141707329.6258a9e5208f0.png",
    link3: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/3a2818141707329.6258a9e521012.png",
    video: "https://www-ccv.adobe.io/v1/player/ccv/FgtssxRmqGo/embed?api_key=behance1&bgcolor=%23191919",
    video1:
      "https://cdn-prod-ccv.adobe.com/FgtssxRmqGo/rend/FgtssxRmqGo_576.mp4?hdnts=st%3D1666628406%7Eexp%3D1666887606%7Eacl%3D%2Fshared_assets%2Fimage%2F*%21%2Fz%2FFgtssxRmqGo%2Frend%2F*%21%2Fi%2FFgtssxRmqGo%2Frend%2F*%21%2FFgtssxRmqGo%2Frend%2F*%21%2FFgtssxRmqGo%2Fimage%2F*%7Ehmac%3Db8872fd0dcf3793558cccb48553e7919f035519259fddbfa518f2e5e7a33fb32",
    video2:
      "https://cdn-prod-ccv.adobe.com/FgtssxRmqGo/rend/FgtssxRmqGo_576.mp4?hdnts=st%3D1667168399%7Eexp%3D1667427599%7Eacl%3D%2Fshared_assets%2Fimage%2F*%21%2Fz%2FFgtssxRmqGo%2Frend%2F*%21%2Fi%2FFgtssxRmqGo%2Frend%2F*%21%2FFgtssxRmqGo%2Frend%2F*%21%2FFgtssxRmqGo%2Fimage%2F*%7Ehmac%3D83d1e2132ebf1752d299fcd6970ea167c6621202f4c119fb04bb275c44c96d34",
    instuments: [
      {
        id: 2,
        name: "Illustrator",
        instument: "https://www.adobe.com/content/dam/shared/images/product-icons/svg/illustrator.svg",
      },
      {
        id: 3,
        name: "Figma",
        instument: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
      },
    ],
  },
  {
    id: 12,
    name: "White witch",
    prev: "https://mir-s3-cdn-cf.behance.net/projects/404/8cc092138752509.Y3JvcCw4NzAsNjgwLDI2NCwxMjc.jpg",
    link: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/c1d6ef138752509.6223559a534ba.png",
    link1: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/730ad4138752509.6223559a9a714.png",
    link2: "	https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/68e1db138752509.6223559a99929.png",
    link3: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/89129c138752509.6223559a9a0f4.png",
    link4: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/4c3e3a138752509.62236a17d6ee6.jpg",
    instuments: [
      {
        id: 1,
        name: "Photoshop",
        instument: "https://www.adobe.com/content/dam/acom/one-console/icons_rebrand/ps_appicon.svg",
      },
      {
        id: 2,
        name: "Illustrator",
        instument: "https://www.adobe.com/content/dam/shared/images/product-icons/svg/illustrator.svg",
      },
      {
        id: 3,
        name: "Figma",
        instument: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
      },
    ],
  },
  {
    id: 13,
    name: "Брошура для цветочного магазина",
    prev: "https://mir-s3-cdn-cf.behance.net/projects/404/5cb85b137309829.Y3JvcCwyNTU2LDIwMDAsNDM2LDA.jpg",
    link: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/a407cd137309829.62092ce7bdb51.jpg",
    instuments: [
      {
        id: 1,
        name: "Photoshop",
        instument: "https://www.adobe.com/content/dam/acom/one-console/icons_rebrand/ps_appicon.svg",
      },
      {
        id: 3,
        name: "Figma",
        instument: "https://cdn.worldvectorlogo.com/logos/figma-1.svg",
      },
    ],
  },
  {
    id: 14,
    name: "Food line icons for healthy food app",
    prev: "https://mir-s3-cdn-cf.behance.net/projects/404/9bb32b137300931.Y3JvcCwxMzQyLDEwNTAsMjksMA.jpg",
    link: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/30636d137300931.62090a0535e7f.jpg",
    link1: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/b442d8137300931.62090a0577708.jpg",
    link2: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/5bdf32137300931.62090a0576939.jpg",
    link3: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1fb8c6137300931.62090a05760fb.jpg",
    link4: "https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/26840d137300931.62090a057715d.jpg",
    instuments: [
      {
        id: 1,
        name: "Photoshop",
        instument: "https://www.adobe.com/content/dam/acom/one-console/icons_rebrand/ps_appicon.svg",
      },
      {
        id: 2,
        name: "Illustrator",
        instument: "https://www.adobe.com/content/dam/shared/images/product-icons/svg/illustrator.svg",
      },
    ],
  },
  {
    id: 15,
    name: "Instagram carousel",
    prev: "https://mir-s3-cdn-cf.behance.net/projects/max_808_webp/ba3070157933297.Y3JvcCwxNzg1LDEzOTYsOTcsMzk3OA.png",
    link: "https://mir-s3-cdn-cf.behance.net/project_modules/1400/a326f2157933297.63822d1f32962.png",
    instuments: [
      {
        id: 1,
        name: "Photoshop",
        instument: "https://www.adobe.com/content/dam/acom/one-console/icons_rebrand/ps_appicon.svg",
      },
      {
        id: 2,
        name: "Illustrator",
        instument: "https://www.adobe.com/content/dam/shared/images/product-icons/svg/illustrator.svg",
      },
    ],
  },
];
export { introdata, img, social, projects };
