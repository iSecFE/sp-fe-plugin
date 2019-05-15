/**
 * 
 * @param {Object} options 
 */

const data = require('./data')
let defaultOption = `<option value=''>-请选择-</option>`
let province = Object.keys(data)
let provinceOption = defaultOption
province.forEach(item => {
  provinceOption += `<option value="${item}">${item}</option>`
})

const Area = (options = {}) => {
  let { provinceEl = 'province', cityEl = 'city', countyEl = 'county'} = options
  let provinceSelector = document.querySelector(`#${provinceEl}`)
  let citySelector = document.querySelector(`#${cityEl}`)
  let countySelector = document.querySelector(`#${countyEl}`)
  provinceSelector.innerHTML = provinceOption

  /**
   * 省切换
   */
  provinceSelector.onchange = function (e) {
    let value = e.target.value
    let cityOption = defaultOption
    if (value) {
      let cityData = Object.keys(data[value])
      cityData.forEach(item => {
        cityOption += `<option value="${item}">${item}</option>`
      })
      citySelector.innerHTML = cityOption
    }
    else {
      citySelector.innerHTML = defaultOption
    }
    countySelector.innerHTML = defaultOption
  }

  /**
   * 市切换
   */
  citySelector.onchange = function (e) {
    let provinceValue = document.querySelector(`#${provinceEl}`).value
    let value = e.target.value
    let countyOption = defaultOption
    if (provinceValue && value) {
      let countyData = data[provinceValue][value]
      countyData.forEach(item => {
        countyOption += `<option value="${item}">${item}</option>`
      })
      countySelector.innerHTML = countyOption
    } else {
      countySelector.innerHTML = defaultOption
    }
  }
}
module.exports = Area;