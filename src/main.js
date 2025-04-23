import { buildGallery } from '@your-org/art-modules';

const CONFIG_CID = 'bafkreifbkhbxhgfqxkim6ujs5a3afkd5632bztwkwqri4ybhpfr4cjed7y';
const CONFIG_URL = `https://ipfs.io/ipfs/${CONFIG_CID}`;

//const CONFIG_URL = "./exhibit_puno85_config.json";
//const CONFIG_URL = "https://bafybeicmvcsqc6lai5ufwkw5qoyfzdk47fgnsrxmodye5zccuybnjsc35e.ipfs.w3s.link/exhibit_puno85_config.json";

(async () => {
  const res = await fetch(CONFIG_URL);
  const cfg = await res.json();
  await buildGallery(cfg);
})();
//