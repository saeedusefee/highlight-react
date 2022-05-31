function getSafeRanges(dangerous) {
    const a = dangerous.commonAncestorContainer;
    // Starts -- Work inward from the start, selecting the largest safe range
    const s = new Array(0),
      rs = new Array(0);
  
    let xm;
  
    if (dangerous.startContainer !== a)
      for (let i = dangerous.startContainer; i !== a; i = i.parentNode) s.push(i);
    if (0 < s.length)
      for (let i = 0; i < s.length; i++) {
        const xs = document.createRange();
        if (i) {
          xs.setStartAfter(s[i - 1]);
          xs.setEndAfter(s[i].lastChild);
        } else {
          xs.setStart(s[i], dangerous.startOffset);
          xs.setEndAfter(
            s[i].nodeType === Node.TEXT_NODE ? s[i] : s[i].lastChild
          );
        }
        rs.push(xs);
      }
  
    // Ends -- basically the same code reversed
    const e = new Array(0),
      re = new Array(0);
    if (dangerous.endContainer !== a)
      for (let i = dangerous.endContainer; i !== a; i = i.parentNode) e.push(i);
    if (0 < e.length)
      for (let i = 0; i < e.length; i++) {
        const xe = document.createRange();
        if (i) {
          xe.setStartBefore(e[i].firstChild);
          xe.setEndBefore(e[i - 1]);
        } else {
          xe.setStartBefore(
            e[i].nodeType === Node.TEXT_NODE ? e[i] : e[i].firstChild
          );
          xe.setEnd(e[i], dangerous.endOffset);
        }
        re.unshift(xe);
      }
  
    // Middle -- the uncaptured middle
    if (0 < s.length && 0 < e.length) {
      xm = document.createRange();
      xm.setStartAfter(s[s.length - 1]);
      xm.setEndBefore(e[e.length - 1]);
    } else {
      return [dangerous];
    }
  
    // Concat
    rs.push(xm);
    const response = rs.concat(re);
  
    // Send to Console
    return response;
  }
  
  function highlightRange(range, color, tooltip) {

    const string = document.querySelectorAll('span');
    const newNode = document.createElement('span');

    console.log(string)

    switch (color) {
        case 'red':
            newNode.setAttribute('class', 'mark-red');
            break;
        case 'green':
            newNode.setAttribute('class', 'mark-green');
            break;
        case 'yellow':
            newNode.setAttribute('class', 'mark-yellow');
            break;
        case 'reset': 
            newNode.setAttribute('class', 'remove-mark');
        default:
            break;
    } 

    if (tooltip) {   
        newNode.setAttribute('title', tooltip);
    }

    range.surroundContents(newNode);     
  }
  
  function highlightSelection({color, tooltip}) {
    const userSelection = window.getSelection();
    //const safeRanges = getSafeRanges(userSelection);
    for (let i = 0; i < userSelection.rangeCount; i++) {
      highlightRange(userSelection.getRangeAt(i), color, tooltip);
    }
  }
  

  export { highlightSelection };
  