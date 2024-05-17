import Cookie from "js-cookie";

export default {
    auth(to, from, next) {
        const token = Cookie.get('_paibahia_token')

        if (!token) {
            next('/login');
        }

        next();
    }
}