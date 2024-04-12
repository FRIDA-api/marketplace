// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

// ...

// ...

module.exports = function (config) {
  config.set({
    basePath: "",
    exclude: [],
    frameworks: ["jasmine", "@angular-devkit/build-angular"],
    plugins: [
      require("karma-jasmine"),
      require("karma-chrome-launcher"),
      require("karma-jasmine-html-reporter"),
      require("karma-coverage"),
      require("karma-junit-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],
    client: {
      clearContext: false, // leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      dir: require("path").join(__dirname, "./coverage"),
      reporters: [
        { type: "html", subdir: "." },
        { type: "lcovonly", subdir: "." },
        { type: "text-summary", subdir: ".", file: "summary.txt" },
        { type: "cobertura", subdir: ".", file: "cobertura-coverage.xml" },
      ],
    },
    reporters: ["progress", "kjhtml", "junit"],
    junitReporter: {
      outputDir: "./coverage", // results will be saved as $outputDir/$browserName.xml
      outputFile: "junit.xml", // if included, results will be saved as $outputDir/$browserName/$outputFile
      useBrowserName: false,
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ["Chrome"],
    singleRun: false,
    restartOnFileChange: true,
  });
};

