function generateHashtag (str) {
    
   let sep = str.replace(/\s+/g,' ').trim().split(' ')
   sep = sep.filter(word => word.length>0)

   if (str.length === 0) return false
   if (sep.length === 0) return false

   const hashTag = `#${sep.join('')}`

   if(hashTag.length > 140) return false
   
   for (let i=0; i<sep.length; i++){
      sep[i] = sep[i][0].toUpperCase() + sep[i].substr(1)
    }

    return `#${sep.join('')}`
}

let str = 'o rato roeu a roupa do rei de roma'

console.log(generateHashtag(str))