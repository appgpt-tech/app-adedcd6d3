//Source code generated by AppGPT (www.appgpt.tech)
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { customDataProvider } from './dataProvider';
import fakeDataProvider from 'ra-data-fakerest';
import { Dashboard } from './dashboard';
import { authProvider, apInitialize } from './authProvider';
import { i18nProvider } from './i18nProvider';
import LoginPage, { Login } from './Login';
import data from './data';
import { UserList, UserCreate, UserEdit } from './resources/User';
import { ExpenseList, ExpenseCreate, ExpenseEdit } from './resources/Expense';
import {
  BankaccountList,
  BankaccountCreate,
  BankaccountEdit,
} from './resources/Bankaccount';
import {
  SmsmessageList,
  SmsmessageCreate,
  SmsmessageEdit,
} from './resources/Smsmessage';
import {
  CategoryList,
  CategoryCreate,
  CategoryEdit,
} from './resources/Category';
import UserIcon from '@mui/icons-material/Person';
import ExpenseIcon from '@mui/icons-material/AttachMoney';
import BankaccountIcon from '@mui/icons-material/AccountBalance';
import SmsmessageIcon from '@mui/icons-material/Sms';
import CategoryIcon from '@mui/icons-material/Category';
// SUPERTOKENS
import React from 'react';
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from 'supertokens-auth-react';
import ThirdPartyPasswordless from 'supertokens-auth-react/recipe/thirdpartypasswordless';
import Session from 'supertokens-auth-react/recipe/session';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import * as reactRouterDom from 'react-router-dom';
let sessionFn = Session.init();
SuperTokens.init({
  appInfo: {
    appName: import.meta.env.VITE_SUPERTOKENS_APPNAME,
    apiDomain: import.meta.env.VITE_BACKEND_DOMAIN,
    websiteDomain: import.meta.env.VITE_SUPERTOKENS_WEBSITEDOMAIN,
    apiBasePath: import.meta.env.VITE_BACKEND_APIPATH + '/auth',
    websiteBasePath: import.meta.env.VITE_SUPERTOKENS_WEBSITEBASEPATH,
  },
  recipeList: [
    ThirdPartyPasswordless.init({
      contactMethod: 'EMAIL',
      signInUpFeature: {
        providers: [
          ThirdPartyPasswordless.Github.init(),
          //ThirdPartyPasswordless.Google.init(),
          //ThirdPartyPasswordless.Facebook.init(),
          //ThirdPartyPasswordless.Apple.init(),
        ],
      },
    }),
    sessionFn,
  ],
});
apInitialize(Session);
// END SUPERTOKENS
let dataProvider: any;
if (import.meta.env.VITE_USE_BACKEND_DATA === 'true') {
  dataProvider = customDataProvider(
    import.meta.env.VITE_BACKEND_DOMAIN +
      import.meta.env.VITE_BACKEND_APIPATH +
      '/proxy',
  );
} else {
  dataProvider = fakeDataProvider(data.defaultData);
}

const App = () => (
  <SuperTokensWrapper>
    <BrowserRouter basename="/adedcd6d3">
      <Admin
        authProvider={
          import.meta.env.VITE_ENVIRONMENT != 'DEV' ? authProvider : undefined
        }
        requireAuth
        loginPage={LoginPage}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
      >
        <Resource
          name="User"
          options={{ label: 'User' }}
          list={UserList}
          create={UserCreate}
          edit={UserEdit}
          recordRepresentation="name"
          icon={UserIcon}
        />
        <Resource
          name="Expense"
          options={{ label: 'Expense' }}
          list={ExpenseList}
          create={ExpenseCreate}
          edit={ExpenseEdit}
          recordRepresentation="id"
          icon={ExpenseIcon}
        />
        <Resource
          name="Bankaccount"
          options={{ label: 'Bank Account' }}
          list={BankaccountList}
          create={BankaccountCreate}
          edit={BankaccountEdit}
          recordRepresentation="id"
          icon={BankaccountIcon}
        />
        <Resource
          name="Smsmessage"
          options={{ label: 'Sms Message' }}
          list={SmsmessageList}
          create={SmsmessageCreate}
          edit={SmsmessageEdit}
          recordRepresentation="id"
          icon={SmsmessageIcon}
        />
        <Resource
          name="Category"
          options={{ label: 'Category' }}
          list={CategoryList}
          create={CategoryCreate}
          edit={CategoryEdit}
          recordRepresentation="name"
          icon={CategoryIcon}
        />
        <CustomRoutes noLayout>
          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
          {/*Your app routes*/}
        </CustomRoutes>
      </Admin>
    </BrowserRouter>
  </SuperTokensWrapper>
);

export default App;
