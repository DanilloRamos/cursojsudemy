function drawStairs(n) {
    let step = ''
    for (let i=0; i<n; i++){
       step += ' '.repeat(i) + 'I\n'
    }

    return step.trim()
  }