module.exports = {
  presets: [
    // "@babel/preset-env", 
    // {
    //   // targets: "Chrome 40",
    //   useBuiltIns: "entry", // or "entry"
    //   corejs: 3,
    // }
  ],
  plugins: [
    [
      "@babel/transform-runtime", 
      {
        corejs: 3,
      }
    ]
  ]
}
