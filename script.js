var api_key = 'AIzaSyCHbK2iwuZMcdV_hH4A7c8OzEWEwTMRXkE'; // Restricted key - register and replace with your own @ console.developers.google.com (YouTube v3)
var api_url = 'https://www.googleapis.com/youtube/v3/';
var channel_id = 'UCu2_-6N_5iDv-thlRhpTfug'; // YouTube channel ID

var subscribers_url = `${api_url}channels?part=statistics&id=${channel_id}&key=${api_key}`;
var picture_url = `${api_url}channels?part=snippet&id=${channel_id}&key=${api_key}`;

async function getGubbSubs() {
  const response = await fetch(subscribers_url);
  const data = await response.json();
  const subs = data.items[0].statistics.subscriberCount;
  document.getElementById('subs').innerHTML = subs;
}

async function getGubbThumb() {
  const response = await fetch(picture_url);
  const data = await response.json();
  const thumb = data.items[0].snippet.thumbnails.medium.url;
  const title = data.items[0].snippet.title;
  document.getElementById('img-bg').src = thumb;
  document.getElementById('img-avatar').src = thumb;
  document.getElementById('title').innerHTML = title;
}

getGubbSubs();
getGubbThumb();