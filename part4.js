const url = new URL('../cats', 'http://www.example.com/dogs');
console.log(url.hostname);
console.log(url.pathname);

const newUrl = new URL('https://www.google.com/search?q=cats&rlz=1C5CHFA_enUS968US969&source=lnms&tbm=isch&sa=X&ved=2ahUKEwirjcCYo5L4AhXzfzABHS2pCdcQ_AUoAXoECAIQAw&biw=1440&bih=789&dpr=2#imgrc=yY42gJ5WMC1QdM');
console.log(newUrl.hostname);
console.log(newUrl.pathname);
console.log(newUrl.href);
