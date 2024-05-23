const { Given } = require("@cucumber/cucumber")
import world from "../../../../ui/util/gw/world"
import { AccountsTabBarScenario } from '../../../../ui/actions/gw/bc/AccountsTabBarScenario'
import { NavigationScenario } from '../../../../ui/actions/gw/bc/NavigationScenario'

const accountsTabBarScenario = new AccountsTabBarScenario();
const navigationScenario = new NavigationScenario();

Given(/^the user loads the account and navigates to invoices on billing center home page/, async function (t, stepArguments) {
    await accountsTabBarScenario.openExistingAccount(world.dataMap.get('AccountNumber'));
    await navigationScenario.navigateToInvoices();
});
