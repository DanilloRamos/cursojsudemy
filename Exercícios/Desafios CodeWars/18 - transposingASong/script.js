function transpose(song, interval){
    
    let notes = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#']
    let transp = []
  
    for (let i=0; i<song.length; i++){

        let note = song[i]

        if (note === 'Bb') note = 'A#'
        if (note === 'Db') note = 'C#'    
        if (note === 'Eb') note = 'D#'
        if (note === 'Gb') note = 'F#'
        if (note === 'Ab') note = 'G#'

        let index = notes.indexOf(note)

        if (index === -1){
            transp.push(note)
            continue
        }

        let newIndex = (index+interval+notes.length)%notes.length
        if (newIndex < 0) newIndex += notes.length

        transp.push(notes[newIndex])
  }

  return transp
}

let song = ['A']
console.log(transpose(song, 1))