/* eslint-disable no-useless-return */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { LogLevel, PublicClientApplication } from '@azure/msal-browser'
// import config from '.'

export const b2cPolicies = {
  names: {
    signInSignUp: 'B2C_1_signupsignin',
    forgotPassword: 'B2C_1_passwordreset',
  },
  authorities: {
    signInSignUp: {
      authority: `https://devmygets.b2clogin.com/devmygets.onmicrosoft.com/B2C_1_signup_login`,
    },
    forgotPassword: {
      authority:
        'https://devmygets.b2clogin.com/devmygets.onmicrosoft.com/B2C_1_PasswordReset',
    },
    editProfile: {
      authority:
        'https://devmygets.b2clogin.com/devmygets.onmicrosoft.com/B2C_1_ProfileEdit',
    },
  },
  authorityDomain: 'devmygets.b2clogin.com',
}

export const msalConfig = {
  auth: {
    clientId: 'c6ee14b5-be4d-456c-ad19-9c95a5c9603a', // This is the ONLY mandatory field that you need to supply.
    authority: b2cPolicies.authorities.signInSignUp.authority, // Choose SUSI as your default authority.
    knownAuthorities: [b2cPolicies.authorityDomain], // Mark your B2C tenant's domain as trusted.
    redirectUri: '/', // You must register this URI on Azure Portal/App Registration. Defaults to window.location.origin
    postLogoutRedirectUri: '/', // Indicates the page to navigate after logout.
    navigateToLoginRequestUrl: false, // If "true", will navigate back to the original request location before processing the auth code response.
  },
  cache: {
    cacheLocation: 'localStorage', // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO between tabs.
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level: any, message: any, containsPii: any) => {
        if (containsPii) {
          return
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message)
            return
          case LogLevel.Info:
            console.info(message)
            return
          case LogLevel.Verbose:
            console.debug(message)
            return
          case LogLevel.Warning:
            console.warn(message)
            return
          default:
            return
        }
      },
    },
  },
}

export const msalInstance = new PublicClientApplication(msalConfig)

// `https://devmygets.b2clogin.com/devmygets.onmicrosoft.com/B2C_1_signupsignin`
