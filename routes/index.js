import articlesRoutes from './articles.js';
import categoriesRoutes from './categories.js';
import usersRoutes from './users.js';


export const setupRoutes = (app) => {
    app.use('/articles', articlesRoutes);
    app.use('/categories', categoriesRoutes);
    app.use('/users', usersRoutes);
};
