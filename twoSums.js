const twoSum = (arrey, target) => {
  for (i=0; i<arrey.length; i++) {
  for (j= i + 1; j<arrey.length; j++) {
    if (arrey[i] + arrey[j] === target) {
      return [i,j];
    } 
  } 
}
}
``