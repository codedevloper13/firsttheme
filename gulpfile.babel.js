import gulp from "gulp";
import yargs from "yargs";
const sass = require("gulp-sass")(require("sass"));
import cleanCSS from "gulp-clean-css";
import gulpif from "gulp-if";

const PRODUCTION = yargs.argv.prod;

export const styles = () => {
  return gulp
    .src("src/assets/scss/bundle.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(cleanCSS({ compatibility: "ie9" }))
    .pipe(gulp.dest("dist/assets/css"));
};

//export default styles;
