import { ClaimMenuActions } from "../../../../ui/pages/gw/generated/claimsolutions/pages/navigation/menuActions/ClaimMenuActions.js"
import { NewRecoverySet } from "../../../../ui/pages/gw/generated/claimsolutions/pages/other/NewRecoverySet.js"
import { Recovery_new } from "../../../../ui/actions/gw/cc/scenarioPages/claim/recovery/Recovery_new.js"
import { ClaimMenuActions_New } from "../../../../ui/actions/gw/cc/scenarioPages/navigation/menuActions/ClaimMenuActions_New.js"
import { NewContactPopup } from "../../../../ui/pages/gw/generated/claimsolutions/pages/popup/New/NewContactPopup.js"
import world from "../../../util/gw/world.js"
import { t } from 'testcafe'

const newContactPopup = new NewContactPopup()
const claimMenuActions = new ClaimMenuActions();
const newRecoverySet = new NewRecoverySet();
const recovery_new = new Recovery_new()
const claimMenuActions_New = new ClaimMenuActions_New();

export class RecoveryCreationScenario {
    async recoveryCreation() {
        await claimMenuActions.claimClaimMenuActions.click()
        await claimMenuActions_New.otherTabRecovery.click()
        await claimMenuActions_New.otherTabRecovery.click()
        await t.wait(1000)
        await claimMenuActions_New.recoveryTab.click()
        await claimMenuActions_New.payerMenu.click()
        await newRecoverySet.newRecoverySetNewRecoveryScreenRecoveryDetailDVPayerClaimNewContactPickerMenuItemSetNewContactPickerMenuItemSet_NewPerson.click();
        await newContactPopup.newContactPopupContactDetailScreenContactBasicsDVPersonNameInputSetGlobalPersonNameInputSetLastName.setValue(world.dataMap.get('Payer'));
        await newContactPopup.newContactPopupContactDetailScreenContactBasicsDV_tbContactDetailToolbarButtonSetCustomUpdateButton.click()
        await t.wait(1000)
        await newRecoverySet.newRecoverySetNewRecoveryScreenRecoveryDetailDVReserveLineInputSetReserveLine.selectOptionByLabel(world.dataMap.get('ReserveLine'))
        await newRecoverySet.newRecoverySetNewRecoveryScreenRecoveryDetailDVReserveLineInputSetCostType.selectOptionByLabel(world.dataMap.get('CostType'))
        await newRecoverySet.newRecoverySetNewRecoveryScreenRecoveryDetailDVReserveLineInputSetCostCategory.selectOptionByLabel(world.dataMap.get('CostCategory'))
        await newRecoverySet.recoveryDetailDVRecoveryCategory.selectOptionByLabel(world.dataMap.get('RecoveryCategory'))
        await recovery_new.recoveryAmount.setValue(world.dataMap.get('Amount'))
        await newRecoverySet.newRecoveryScreenUpdate.click()
    }
}