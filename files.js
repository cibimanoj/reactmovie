const fs=require("fs")

const[,,noofFiles]=process.argv
const data="hello all"

for(let i =0;i<=noofFiles;i++){
    fs.writeFileSync(`./backups/test${i}.html`,data,(err)=>{
        console.log("file created" ,i)
})
}