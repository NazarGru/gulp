import gulp from 'gulp';

import {path} from './gulp/config/path';

global.app ={
    path: path,
    gulp: gulp
}


import { copy } from './gulp/tasks/copy';


gulp.task('default', copy)