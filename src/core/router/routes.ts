export const routesPrefixes = {
  accountList: "/account-list",
  transfer: "/transfer",
  movements: "/movements",
  createAccount: "/create-account",
};

export const appRoutes = {
  root: "/",
  accountList: routesPrefixes.accountList,
  editAccount: "/edit-account/:id",
  movements: `/${routesPrefixes.movements}/:id`,
  transfer: routesPrefixes.transfer,
  transferFromAccount: `/${routesPrefixes.transfer}/:id`,
  createAccount: routesPrefixes.createAccount,
};
