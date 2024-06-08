import axios from 'axios';

const Instance = axios.create({
    baseURL: 'http://20.244.56.144',
});

Instance.interceptors.request.use(
    (config) => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzE3ODIyODkwLCJpYXQiOjE3MTc4MjI1OTAsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjFjZjU0Mzk5LWFmOGItNGY4Mi05MGYzLThkNzY4Y2JjMTk4OSIsInN1YiI6ImJoYXZ5YTIxMTIwNzBAYWtnZWMuYWMuaW4ifSwiY29tcGFueU5hbWUiOiJnb01hcnQiLCJjbGllbnRJRCI6IjFjZjU0Mzk5LWFmOGItNGY4Mi05MGYzLThkNzY4Y2JjMTk4OSIsImNsaWVudFNlY3JldCI6IkFTV3hJc3h2eXFUZ3hlQU4iLCJvd25lck5hbWUiOiJSYWh1bCIsIm93bmVyRW1haWwiOiJiaGF2eWEyMTEyMDcwQGFrZ2VjLmFjLmluIiwicm9sbE5vIjoiMjEwMDI3MDEyMDAzMiJ9.ZrdcitjLUPA-uUAHoJr1k35f2Enx1IXueO4pRERXrTU";
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

Instance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default Instance;
