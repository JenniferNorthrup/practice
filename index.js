let truckData = [[1900, 1950],[1910, 1940],[1905, 1960],[1960, 1980]];

let truckYears = [];
for (let i = 0; i <= 200; i++) {
    truckYears[i] = [0, 1800 + i];
}

truckData.forEach(function (yearRange) {
    for(let j = yearRange[0]; j <= yearRange[1]; j++) {
        let indexOfYear = j-1800;
        let numberOfTrucks = truckYears[indexOfYear][0].valueOf() +1;
        truckYears[j-1800] = [numberOfTrucks, indexOfYear+1800];
    }

    /*
      Aggregate information fromt eh date ranges by recording the
      number of trucks added to or removed from service in each year
      mentioned in the year range
    */
    // let startYear = yearRange[0].valueOf();
    // let endYear = yearRange[1].valueOf();

    // if(serviceYears.hasOwnProperty(startYear)){
    //     serviceYears[startYear]++;
    // } else {
    //     serviceYears[startYear] = 1;
    // }

    // if(serviceYears.hasOwnProperty(endYear)){
    //     serviceYears[endYear]--;
    // } else {
    //     serviceYears[endYear] = -1;
    // }
    
});

// console.log("serviceYears: ", serviceYears);

// let truckYears = [];
// let currentTrucks = 0;

/*
  For easy sorting, transfer the aggregated information over to an array
*/
// Object.keys(serviceYears).forEach(function(year){
//     currentTrucks += serviceYears[year];
//     truckYears.push([currentTrucks, year]);
// });

truckYears.sort(function(a, b) {
    return a[0] - b[0];
  });


  console.log("Year with the most trucks in service: ", truckYears[truckYears.length - 1][1]);
  console.log("Year with the least trucks in service: ", truckYears[0][1]);

  console.log("Top 5 years with most trucks in service: ");
  let n = 5;
  for(i=0;i<n;i++){
    console.log(truckYears.pop());
  }

  console.log("Bottom 3 years with the least trucks in service: ");
  let m = 3
  for(j=0;j<m;j++){
    console.log(truckYears.shift());
  }