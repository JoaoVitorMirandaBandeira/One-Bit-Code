
function formatDate(){
    let date = new Date();
    date = date.toLocaleDateString()
    return date
}

module.exports = formatDate