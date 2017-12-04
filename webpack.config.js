module.exports= {


//define entry point
    entry:'./app/js/app.js',

//define output point

output:{
    filename:'bundle.js'

},



module:{
    loaders:[
        {
            test:/\.js$/,
            exclude:/(node_modules)/,
            loader:'babel-loader',
            query:{
                presets:['es2015']
            }
        },
        {
            test:/\.scss$/,
            loader:'style-loader!css-loader!sass-loader'
        }
    ]
}
}