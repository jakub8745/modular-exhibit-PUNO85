import { buildGallery } from '@your-org/art-modules';

// your own config CID (pointing at a different JSON on IPFS)
const CONFIG_CID = 'bafkreic4qb5hwznsoyx3yeijloeixsr4uwi6nykuyswd3j2s7dzqo7kk4q';
const CONFIG_URL = `https://ipfs.io/ipfs/${CONFIG_CID}`;

(async () => {
  const res = await fetch(CONFIG_URL);
  const cfg = await res.json();
  await buildGallery(cfg);
})();
