/**
 * 
 * @param {Object} options 
 */

const areaSelector = (selector = '#areaSelector', url = './data.json') => {
  let xhr = new XMLHttpRequest();
  xhr.open('get', url, true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      generateHML(selector, xhr.responseText);
    }
  };
};

const generateHML = (selector, data) => {
  let htmlProvince = '<select id="province">';
  let ele = document.querySelector(selector);
  if (ele) {
    let dataPrivince = JSON.parse(data).filter(item => {
      return Object.keys(item) % 10000 === 0;
    });
    dataPrivince.forEach(item => {
      htmlProvince += `<option value="${Object.keys(item)}">${Object.values(item)}</option>`;
    });
  }
  htmlProvince += `</select>`;
  ele.innerHTML += htmlProvince;

  document.querySelector("#province").onchange = function (event) {
    alert(1);
    let dataCity = JSON.parse(data).filter(item => {
      return Object.keys(item) % 10000 !== 0 && Object.keys(item) % 100 === 0 && Object.keys(item).join().startsWith(event.target.value.substring(0, 2));
    });
    let htmlCity = '<select id="city">';
    dataCity.forEach(item => {
      htmlCity += `<option value="${Object.keys(item)}">${Object.values(item)}</option>`;
    });
    htmlCity += `</select>`;
    ele.innerHTML += htmlCity;
  };

}
module.exports = areaSelector;