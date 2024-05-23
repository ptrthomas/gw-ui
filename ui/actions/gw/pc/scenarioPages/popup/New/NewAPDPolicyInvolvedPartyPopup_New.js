import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfCheckBox } from '@gtui/gt-ui-framework';
import { Selector } from 'testcafe';

export class NewAPDPolicyInvolvedPartyPopup_New {
    NewAPDPolicyInvolvedPartyPopup_LinkAddressMenuMenuIcon = PcfButton('#NewAPDPolicyInvolvedPartyPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-LinkedAddressInputSet-LinkAddressMenu-LinkAddressMenuMenuIcon')
	NewAPDPolicyInvolvedPartyPopup_Address = Selector('#NewAPDPolicyInvolvedPartyPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-LinkedAddressInputSet-LinkAddressMenu-0-contactDetail')
	NewAPDPolicyInvolvedPartyPopup_PrimaryAddress = Selector('#NewAPDPolicyInvolvedPartyPopup-ContactDetailScreen-NewPolicyContactRoleDetailsCV-PolicyContactDetailsDV-LinkedAddressInputSet-LinkAddressMenu-0-contactDetail-PrimaryAddress')
}