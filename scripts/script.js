let ctx = document.getElementById('myChart').getContext('2d');
let ctxSelect = document.getElementById('myChartSelect').getContext('2d');


/**bubble data */
const dataBuble = {
  labels: arrDataBubble,
  datasets: [{
    label: 'Bubble Sort',
    data: arrDataBubble,
    backgroundColor: colorArrBubble,

    borderWidth: 1
  }]
};

const configBuble = {
    type: 'bar',
    data: dataBuble,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
   },
};

let chart = new Chart(ctx, configBuble);
Chart.defaults.global.defaultFontSize = 16;
/**select data */
const dataSelect = {
    labels: arrDataSelect,
    font: {
      size: 22

    },
    datasets: [{
      label: 'Select Sort',
      data: arrDataSelect,
      backgroundColor: colorArrSelect,
  
      borderWidth: 1
    }]
  };
  
const configSelect = {
      type: 'bar',
      data: dataSelect,
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
     },
};


let chartSelect = new Chart(ctxSelect, configSelect);

buttonBubble.addEventListener('click', function(){
    bubbleSortObj(bubleObj)
 });

 buttonSelect.addEventListener('click', function(){
  selectionSortObj(selectObj);
 });