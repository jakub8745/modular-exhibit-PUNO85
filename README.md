THIS IS A FIRST EXHIBITION BUILT FROM (local still) npm @your-org/art-modules. 

added gallery_config.json for reference.[edit it and upload to IPFS --- get CID and paste to main.js]
config is for assets to every new gallery. some assets used in UI may be co

// main.js
import { buildGallery } from '@your-org/art-modules';

// your own config CID (pointing at a different JSON on IPFS)
const CONFIG_CID = '<CID>';
const CONFIG_URL = `https://ipfs.io/ipfs/${CONFIG_CID}`;

(async () => {
  const res = await fetch(CONFIG_URL);
  const cfg = await res.json();
  await buildGallery(cfg);
})();



  "dependencies": {
    "@your-org/art-modules": "file:../puno85_modular/exhibition_PUNO85/packages/art-modules",
    "three": "^0.175.0",
    "three-mesh-bvh": "^0.9.0"
  }

