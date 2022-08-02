# Template Frontend with React and Webpack CSR
<p align="center">
  <img src="https://img.shields.io/badge/react%20-%2361dafb.svg?&style=for-the-badge&logo=react&logoColor=white" alt="React badge" />
  <img src="https://img.shields.io/badge/react%20router%20-%23f44250.svg?&style=for-the-badge&logo=reactrouter&logoColor=white" alt="React Router badge" />
  <img src="https://img.shields.io/badge/sass%20-%23bf4080.svg?&style=for-the-badge&logo=sass&logoColor=white" alt="Sass badge" />
  <img src="https://img.shields.io/badge/webpack%20-%235299c8.svg?&style=for-the-badge&logo=webpack&logoColor=white" alt="Webpack badge" />
  <img src="https://img.shields.io/badge/babel%20-%23f5da55.svg?&style=for-the-badge&logo=babel&logoColor=white" alt="Babel badge" />
  <img src="https://img.shields.io/badge/eslint%20-%234b32c3.svg?&style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint badge" />
</p>

This template is made in React for UI, i18n for the locales, Formik for the logic in forms and Yup for validations, with Sweetalert and React Router, SASS for the styles and Webpack for the bundle


### Scripts:
- `npm install` to install all dependencies
- `npm start` for development mode and start with the creation of a new universe
- `npm run build` to make the build of vendor and project
- `npm run build:vendor` to build only the vendor
- `npm run build:project` to build only the project

## Environment variables
To use environment variables copy the file `.env.example` two times and rename one as `.env.development` and the other as `.env`, the first is for development mode and the second for production mode.



## Folder architecture

> - public/
> - src/
>   - common/
>     - locales/
>       - lang/namespace.json // Example: es/translation.json
>     - schemas/
>       - index.js
>       - auth.js
>     - config.js
>   - components/
>     - Header.jsx
>   - containers/
>     - ContainerExample.jsx
>   - context/
>     - AppContext.jsx
>     - reducer.js
>   - hoc/
>     - withCustomHoc.jsx
>   - hooks/
>     - index.js
>     - useCustomHook.js
>   - pages/
>     - Home.jsx
>   - styles/
>     - pages/
>       - responsive/
>         - _Home.scss
>       - Home.scss
>     - components/
>       - responsive/
>         - _Header.scss
>       - Header.scss
>     - _Mixins.scss
>     - General.scss
>   - App.jsx
>   - i18n.js
>   - index.js
