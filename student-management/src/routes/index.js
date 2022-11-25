//dùng cho các trang ai cx cào được
import { LogIn, Home, Information, Grade, Schedule } from '~/pages';

export const publicRoutes = [{ path: '/', component: LogIn }];
//dùng cho các trang phải đăng nhập
export const privateRoutes = [
    { path: '/home', component: Home },
    { path: '/about', component: Information },
    { path: '/grade', component: Grade },
    { path: '/schedule', component: Schedule },
];
