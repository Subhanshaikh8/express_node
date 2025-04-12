let functions ={
    Home : async function(req,res){
        res.send('Home Pages');
        res.end();


    },
    About : async function(req,res){
        res.send('About Pages');
        res.end();


    },
    Faq : async function(req,res){
        res.send('FAQ Pages');
        res.end();


    },
    Privacy  : async function(req,res){
        res.send('Privacy Policy Pages');
        res.end();


    },
    Feedback : async function(req,res){
        res.send('Feedback Pages');
        res.end();


    },

}
module.exports = functions;