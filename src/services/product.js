import axios from "axios";

export const getProducts = async (callback) => {
  await axios
    .get(
      "https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json"
    )
    .then((res) => {
      callback(res.data);
    })
    .catch((err) => {
      console.error(err);
    });
};
