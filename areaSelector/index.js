/**
 * 
 * @param {Object} options 
 */

const areaSelector = (options = {
  url: '',
  success: function () {}
}) => {
  let {
    url = './data.json',
      success
  } = options;
  let xhr = new XMLHttpRequest();
  xhr.open('get', url, true);
  xhr.send();
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4 && xhr.status == 200) {
      success(xhr.responseText);
    }
  };
};

module.exports = areaSelector;