export default function loadBalancer(chinaDownload, USDownload) {
  const requests = [];
  requests.push(chinaDownload);
  requests.push(USDownload);
  return Promise.race(requests)
    .then((res) => res)
    .catch((err) => err);
}
