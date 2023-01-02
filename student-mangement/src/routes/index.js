//dùng cho các trang ai cx cào được
import {
    LogIn,
    Home,
    Information,
    Grade,
    Schedule,
    InputGrade,
    InputStudent,
    ClassList,
    TeacherSchedule,
    Rule,
    TeacherList,
    Summary,
} from '../pages';

export const publicRoutes = [{ path: '/', component: LogIn }];
//dùng cho các trang phải đăng nhập
export const privateRoutes = [
    { path: '/home', component: Home },
    { path: '/about', component: Information },
    { path: '/grade', component: Grade },
    { path: '/schedule', component: Schedule },
    { path: '/input-grade', component: InputGrade },
    { path: '/input-student', component: InputStudent },
    { path: '/class-list', component: ClassList },
    { path: '/teacher-schedule', component: TeacherSchedule },
    { path: '/rule', component: Rule },
    { path: '/teacher-list', component: TeacherList },
    { path: '/summary', component: Summary },
];
