import { db } from "../src/firebase";
function App() {
  const form = new FormData();
  const dataObj = [
    { trait_type: "size", value: `${db.size}` },
    { trait_type: "color", value: `${db.color}` },
    { trait_type: "gender", value: `${db.gender}` },
    { trait_type: "price", value: `${db.price}` },
    { trait_type: "type", value: `${db.type}` },
    { trait_type: "closure type", value: `${db.closure_type}` },
    { trait_type: "material", value: `${db.material}` },
  ];
  form.append("chain", "goerli");
  form.append("name", "preferenceNFT");
  form.append("imageUrl", "https://ibb.co/VJTsvHm");
  form.append("description", "This is what i look for when buying shoes");
  form.append("recipientAddress", "0xc9D7452135E6209ce11F79B4603aFc3A90530675");
  form.append("data", JSON.stringify(dataObj));

  const options = {
    method: "POST",
    headers: {
      accept: "application/json",
      "X-API-Key": "sk_live_183223e7-e1ba-4815-b8d0-432396faa7a9",
    },
  };

  options.body = form;

  fetch("https://api.verbwire.com/v1/nft/mint/quickMintFromMetadata", options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
  return <>Testing</>;
}

export default App;
