export default function loadBalancer(chinaDownload, USDownload) {
  const requests = [];
  requests.push(chinaDownload);
  requests.push(USDownload);
  Promise.race(requests)
    .then((faster) => {
      console.log('hi succ');
    })
    .catch((err) => {
      console.log('failure');
    });
}
