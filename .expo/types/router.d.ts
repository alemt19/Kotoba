/* eslint-disable */
import * as Router from 'expo-router';

export * from 'expo-router';

declare module 'expo-router' {
  export namespace ExpoRouter {
    export interface __routes<T extends string | object = string> {
      hrefInputParams: { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/howToPlay`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/../components/button`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/selection/categories`; params?: Router.UnknownInputParams; } | { pathname: `/selection/difficulty`; params?: Router.UnknownInputParams; } | { pathname: `/selection/game`; params?: Router.UnknownInputParams; };
      hrefOutputParams: { pathname: Router.RelativePathString, params?: Router.UnknownOutputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownOutputParams } | { pathname: `/howToPlay`; params?: Router.UnknownOutputParams; } | { pathname: `/`; params?: Router.UnknownOutputParams; } | { pathname: `/../components/button`; params?: Router.UnknownOutputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownOutputParams; } | { pathname: `/selection/categories`; params?: Router.UnknownOutputParams; } | { pathname: `/selection/difficulty`; params?: Router.UnknownOutputParams; } | { pathname: `/selection/game`; params?: Router.UnknownOutputParams; };
      href: Router.RelativePathString | Router.ExternalPathString | `/howToPlay${`?${string}` | `#${string}` | ''}` | `/${`?${string}` | `#${string}` | ''}` | `/../components/button${`?${string}` | `#${string}` | ''}` | `/_sitemap${`?${string}` | `#${string}` | ''}` | `/selection/categories${`?${string}` | `#${string}` | ''}` | `/selection/difficulty${`?${string}` | `#${string}` | ''}` | `/selection/game${`?${string}` | `#${string}` | ''}` | { pathname: Router.RelativePathString, params?: Router.UnknownInputParams } | { pathname: Router.ExternalPathString, params?: Router.UnknownInputParams } | { pathname: `/howToPlay`; params?: Router.UnknownInputParams; } | { pathname: `/`; params?: Router.UnknownInputParams; } | { pathname: `/../components/button`; params?: Router.UnknownInputParams; } | { pathname: `/_sitemap`; params?: Router.UnknownInputParams; } | { pathname: `/selection/categories`; params?: Router.UnknownInputParams; } | { pathname: `/selection/difficulty`; params?: Router.UnknownInputParams; } | { pathname: `/selection/game`; params?: Router.UnknownInputParams; };
    }
  }
}
