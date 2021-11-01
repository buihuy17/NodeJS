
const mongoose = require('mongoose');

//await phai nam trong mot async function
async function connect(){
    //muon xu li loi dung try-catch
    try {
        await mongoose.connect('mongodb://localhost:27017/D2VN_game_dev',{
        useNewUrlParser : true,
        useUnifiedTopology : true
        });
        console.log('Connect successfully');
    } catch (error) {
        console.log('Fail');
    }

}

module.exports = {connect};