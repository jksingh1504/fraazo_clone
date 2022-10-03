const mongoose=require("mongoose")

const product_schema=new mongoose.Schema({
    "frz-product-card-href": {type:String},
    "lazy-image-src": {type:String},
    "frz-fw-500": {type:String},
    "frz-pack-size": {type:String},
    "frz-rp-10": {type:Number},
    "frz-add-cart": {type:String},
    "frz-sold-out-web": {type:String},
    "type": {type:String},
    "category": {type:String}
})

const products=mongoose.model("product",product_schema)

module.exports=products