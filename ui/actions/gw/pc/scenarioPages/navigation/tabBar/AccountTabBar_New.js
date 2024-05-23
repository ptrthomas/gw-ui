import { PcfComponent,PcfButton,PcfTextInput } from '@gtui/gt-ui-framework';
import { Selector } from 'testcafe';

export class AccountTabBar_New {
	accountTab = PcfButton('#TabBar-AccountTab > div.gw-action--expand-button > div')
    accountSearch =PcfTextInput('#TabBar-AccountTab-AccountTab_AccountNumberSearchItem > div')
	accountSearch_Button = PcfButton('#TabBar-AccountTab-AccountTab_AccountNumberSearchItem_Button')
}