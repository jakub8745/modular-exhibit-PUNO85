import { buildGallery } from '@your-org/art-modules';

//const CONFIG_CID = 'bafybeiacxiiqnajlgll6naaulp6ervnfte6kbp75hkhsj4gzpzz7wxze7m';
//const CONFIG_URL = `https://ipfs.io/ipfs/${CONFIG_CID}`;

//const CONFIG_URL = "./config_puno85/exhibit_puno85_config.json";
const CONFIG_URL = "https://bafybeiacxiiqnajlgll6naaulp6ervnfte6kbp75hkhsj4gzpzz7wxze7m.ipfs.w3s.link/exhibit_puno85_config.json";

(async () => {
  const res = await fetch(CONFIG_URL);
  const cfg = await res.json();
  await buildGallery(cfg);
})();
//