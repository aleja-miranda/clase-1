
const fetchapi = async(url) => {
    try {
        const res = await fetch (url)
        const data = await res.json()
        console.log(data);
    }   catch (error){
        console.log(error);
    }
}


const gretings =() => {
    console.log (`hello there!`)
}

module.exports = {fetchapi, gretings
};