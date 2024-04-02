export function getImage(query) {
  const BASE_URL = 'https://pixabay.com/api/';
  const params = new URLSearchParams({
    key: '43183854-3276a6d2cec346ebc07eac88c',
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });
  const url = `${BASE_URL}?${params}`;

  return fetch(url).then(res => res.json());
}

getImage().then(data => console.log(data.hits));
