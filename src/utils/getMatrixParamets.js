export default function getPosition(matrix, cursor) {
  let rangeFromStart = 0;
  let underRowRange = 0;
  let aboveRowRange = 0;
  let position = 0;
  let aboveCursor = cursor;
  let underCursor = cursor;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      if (position === cursor) {
        rangeFromStart = j;
        let aboveRrow = matrix[i - 1] || [];
        let underRow = matrix[i + 1] || [];
        aboveRowRange = aboveRrow.length
        underRowRange = underRow.length
        if (aboveRowRange === 0) {
          aboveCursor = cursor
        } else if (aboveRowRange <= rangeFromStart) {
          aboveCursor = cursor - j - 1
        } else {
          aboveCursor = cursor - rangeFromStart - aboveRowRange + j
        }

        if (underRowRange === 0) {
          underCursor = cursor
        } else if (underRowRange <= rangeFromStart) {
          underCursor = cursor + underRowRange + (matrix[i].length - j ) - 1
        } else {
          underCursor = cursor + matrix[i].length 
        }
        return {aboveCursor, underCursor};
      }
      position++
    }
  }
}

export function setMatrix(string) {
  if (string.length > 70) {
    let array = string.split('');
    let newArr = [];
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      count++
      if (array[i] === '\n') {
        count = 0;
        continue
      } else if (count % 70 === 0) {
        newArr.push('\n')
        count = 0;
      }
      newArr.push(array[i])
    }
  console.log(newArr) 
    string = newArr.join('')   
  }
  return string.split('\n')
    .map(i => {
      i = i.split('')
      i.push('end')
      return i
    })
    
  // return string.split('\n')
  //   .map(i => {
  //     i = i.split('')
  //     i.push('end')
  //     return i
  //   })
}