// App Router
export const LANDING_PAGE_PATH = '/';
export const LANDING_PAGE_AS_PATH = '/*';
export const SIGN_AS_PATH = 'sign/*';
export const HOME_PATH = '/home';
export const HOME_AS_PATH = 'home/*';
export const MANAGER_HOME_PATH = '/manager';
export const MANAGER_HOME_AS_PATH = 'manager/*';
export const ADMIN_HOME_PATH = '/admin';
export const ADMIN_HOME_AS_PATH = 'admin/*';
export const HOME_PATHS = [ADMIN_HOME_PATH, HOME_PATH, MANAGER_HOME_PATH];

// Land Router
export const LAND_TEAM_PATH = '/team';
export const LAND_SERVICE_PATH = '/service';

// Sign Router
export const SIGN_IN_PATH = '/sign/in';
export const SIGN_IN_AS_PATH = '/in';
export const SIGN_UP_CUSTOMER_PATH = '/sign/up/';
export const SIGN_UP_CUSTOMER_AS_PATH = '/up/';
export const SIGN_OUT_PATH = '/sign/out';
export const SIGN_OUT_AS_PATH = '/out';

// Admin Router
const createAdminPath = (path) => ADMIN_HOME_PATH + path;
export const USERS_ADMIN_AS_PATH = '/users';
export const USERS_ADMIN_PATH = createAdminPath(USERS_ADMIN_AS_PATH);
export const ADD_USER_ADMIN_AS_PATH = '/users/new';
export const ADD_USER_ADMIN_PATH = createAdminPath(ADD_USER_ADMIN_AS_PATH);
export const EDIT_USER_ADMIN__AS_PATH = '/users/edit';
export const EDIT_USER_ADMIN_PATH = createAdminPath(EDIT_USER_ADMIN__AS_PATH);
export const GRAPHICS_ADMIN_AS_PATH = '/report';
export const GRAPHICS_ADMIN_PATH = createAdminPath(GRAPHICS_ADMIN_AS_PATH);

// Manager Router
const createManagerPath = (path) => MANAGER_HOME_PATH + path;
export const USERS_MANAGER_AS_PATH = '/users';
export const USERS_MANAGER_PATH = createManagerPath(USERS_MANAGER_AS_PATH);
export const NEWS_MANAGER_AS_PATH = '/news';
export const NEWS_MANAGER_PATH = createManagerPath(NEWS_MANAGER_AS_PATH);
export const NEWS_ADD_MANAGER_AS_PATH = '/news/add';
export const NEWS_ADD_MANAGER_PATH = createManagerPath(NEWS_ADD_MANAGER_AS_PATH);
export const NEWS_EDIT_MANAGER_AS_PATH = '/news/edit';
export const NEWS_EDIT_MANAGER_PATH = createManagerPath(NEWS_EDIT_MANAGER_AS_PATH);
export const GRAPHICS_MANAGER_AS_PATH = '/report';
export const GRAPHICS_MANAGER_PATH = createManagerPath(GRAPHICS_MANAGER_AS_PATH);

