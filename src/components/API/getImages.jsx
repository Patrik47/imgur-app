function getImages() {
  //change the limit to however many images to use
  const url = `https://api.thecatapi.com/v1/images/search?limit=16`;
  const api_key = 'live_OkgDAFfCVmtyTyzZpjJpwx8zsUT7sjU0hTuTKQznJjP6GKmCPr8vA8QtblME4KMp';

  fetch(url, {
    headers: {
      'x-api-key': api_key
    }
  })
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      let imagesData = data;
      for (let i = 0; i < imagesData.length; i++) {
        imagesData[i].something = i;
      }
      console.log(imagesData);
    })
    .catch(function (error) {
      console.log(error);
    });
}
export default getImages;
