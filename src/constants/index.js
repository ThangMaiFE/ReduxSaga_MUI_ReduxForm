import AdminHomePage from '../containers/AdminHomePage';
import LoginPage from '../containers/LoginPage';
import TaskBoard from '../containers/TaskBoard';
import SignUpPage from '../containers/SignUpPage';

export const API_ENDPOINT = 'https://628e311ca339dfef87a95625.mockapi.io/';

export const STATUSES = [
    {
        value: 0,
        label: 'READY',
    },
    {
        value: 1,
        label: 'IN PROGRESS',
    },
    {
        value: 2,
        label: 'COMPLETED',
    },
];

export const STATUS_CODE = {
    SUCCESS: 200,
    CREATED: 201,
    UPDATED: 202,
};

export const ADMIN_ROUTES = [
    {
        path: '/',
        name: 'Trang Quản Trị',
        exact: true,
        component: AdminHomePage,
    },
    {
        path: '/task-board',
        name: 'Quản Lý Công Việc',
        component: TaskBoard,
    },
];

export const ROUTES = [
    {
        path: '/login',
        name: 'Đăng Nhập',
        component: LoginPage,
    },
    {
        path: '/signup',
        name: 'Đăng Ký',
        component: SignUpPage,
    },
];
