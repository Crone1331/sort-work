let ctxBubble = document.getElementById('myChart').getContext('2d');
let ctxSelect = document.getElementById('myChartSelect').getContext('2d');
let ctxInsert = document.getElementById('myChartInsert').getContext('2d');

Chart.defaults.global.defaultFontSize = 16;

function setData(nameLabel, colors, arraData) {
  const data = {
    labels: arraData,
    datasets: [{
      label: nameLabel,
      data: arraData,
      backgroundColor: colors,
  
      borderWidth: 1
    }]
  };

return config = {
    type: 'bar',
    data: data,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    },
  };
}

/**bubble data */
const configBuble = setData('Bubble Sort', colorArrBubble, arrDataBubble)
const chart = new Chart(ctxBubble, configBuble);

/**select data */
const configSelect = setData('Select Sort', colorArrSelect, arrDataSelect)
const chartSelect = new Chart(ctxSelect, configSelect);

/**insert data */
const configInsert = setData('Insert Sort', colorArrInsert, arrDataInsert)
const chartInsert = new Chart(ctxInsert, configInsert);

buttonBubble.addEventListener('click', function(){
  bubbleSortObj(bubleObj)
});

buttonSelect.addEventListener('click', function(){
  selectionSortObj(selectObj);
});

buttonInsert.addEventListener('click', function(){
  insertionSortObj(insertObj);
});