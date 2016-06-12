var express     =   require("express");
var bodyParser  =   require("body-parser");
var app         =   express();
var path        =   require("path");
var routes      =   require("./app/routes.js")(app);
// var mongoOp     =   require("./models/mongo");

var port        =   process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.listen(port);

console.log('Listening on port ' + port);

exports = module.exports = app;

// CRUD operation of MongoDB
//
// router.route("/users")
//   .get(function(req,res){
//     var response = {};
//     mongoOp.find({},function(err,data){
//       if(err) {
//         response = {"error" : true,"message" : "Error fetching data"};
//       } else {
//         response = {"error" : false,"message" : data};
//       }
//       res.json(response);
//     });
//   })
//   .post(function(req,res){
//         var db = new mongoOp();
//         var response = {};
//         db.userEmail = req.body.email;
//         db.userPassword =  require('crypto')
//                           .createHash('sha256')
//                           .update(req.body.password)
//                           .digest('base64');
//         db.save(function(err){
//             if(err) {
//                 response = {"error" : true,"message" : "Error adding data"};
//             } else {
//                 response = {"error" : false,"message" : "Data added"};
//             }
//             res.json(response);
//         });
//     });
//
// router.route("/users/:id")
//   .get(function(req,res){
//       var response = {};
//       mongoOp.findById(req.params.id,function(err,data){
//           if(err) {
//               response = {"error" : true,"message" : "Error fetching data"};
//           } else {
//               response = {"error" : false,"message" : data};
//           }
//           res.json(response);
//       });
//   })
//   .put(function(req,res){
//         var response = {};
//         mongoOp.findById(req.params.id,function(err,data){
//             if(err) {
//                 response = {"error" : true,"message" : "Error fetching data"};
//             } else {
//                 if(req.body.userEmail !== undefined) {
//                     data.userEmail = req.body.userEmail;
//                 }
//                 if(req.body.userPassword !== undefined) {
//                     data.userPassword = req.body.userPassword;
//                 }
//                 data.save(function(err){
//                     if(err) {
//                         response = {"error" : true,"message" : "Error updating data"};
//                     } else {
//                         response = {"error" : false,"message" : "Data is updated for "+req.params.id};
//                     }
//                     res.json(response);
//                 })
//             }
//         });
//     })
//     .delete(function(req,res){
//         var response = {};
//         mongoOp.findById(req.params.id,function(err,data){
//             if(err) {
//                 response = {"error" : true,"message" : "Error fetching data"};
//             } else {
//                 mongoOp.remove({_id : req.params.id},function(err){
//                     if(err) {
//                         response = {"error" : true,"message" : "Error deleting data"};
//                     } else {
//                         response = {"error" : true,"message" : "Data associated with "+req.params.id+"is deleted"};
//                     }
//                     res.json(response);
//                 });
//             }
//         });
//     });
